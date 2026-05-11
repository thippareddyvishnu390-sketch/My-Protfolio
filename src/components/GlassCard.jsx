export default function GlassCard({ className = '', children }) {
  return (
    <div className={`glass rounded-2xl border border-white/10 ${className}`}>
      {children}
    </div>
  )
}
