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

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

    // Create transporter from env (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM,
      subject: `Website contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    }

    const info = await transporter.sendMail(mailOptions)
    return res.json({ ok: true, info })
  } catch (err) {
    console.error('send-email error', err)
    return res.status(500).json({ error: err && err.message ? err.message : 'Server error' })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
