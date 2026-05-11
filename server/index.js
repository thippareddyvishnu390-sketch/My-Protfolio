require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 3001
app.use(cors())
app.use(express.json())

// Basic health
app.get('/api/health', (req, res) => res.json({ ok: true }))

function createTransporter({ port, secure }) {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

async function sendWithFallback(mailOptions) {
  const configuredPort = Number(process.env.SMTP_PORT) || 587
  const configuredSecure = process.env.SMTP_SECURE === 'true'
  const fallbackPort = configuredSecure ? 587 : 465
  const fallbackSecure = !configuredSecure

  const transports = [
    { port: configuredPort, secure: configuredSecure },
    { port: fallbackPort, secure: fallbackSecure },
  ]

  let lastError

  for (const transportConfig of transports) {
    try {
      const transporter = createTransporter(transportConfig)
      return await transporter.sendMail(mailOptions)
    } catch (err) {
      lastError = err
      if (err && err.code !== 'ETIMEDOUT' && err.code !== 'ECONNREFUSED') {
        throw err
      }
    }
  }

  throw lastError
}

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(503).json({
        error: 'Mail service is not configured on the server',
      })
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM,
      subject: `Website contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    }

    const info = await sendWithFallback(mailOptions)
    return res.json({ ok: true, info })
  } catch (err) {
    console.error('send-email error', err)
    const message = err && err.message ? err.message : 'Server error'

    if (err && (err.code === 'ECONNREFUSED' || err.code === 'ETIMEDOUT' || err.code === 'EAUTH')) {
      return res.status(502).json({
        error: `Mail delivery failed: ${message}`,
      })
    }

    return res.status(500).json({ error: message })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
