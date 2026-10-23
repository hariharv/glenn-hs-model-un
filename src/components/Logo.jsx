export default function Logo({ className = '', compact = false }) {
  return (
    <img
      className={`brand-logo ${className}`}
      src="/brand/glenn-model-un-logo.png"
      width="236"
      height="185"
      alt="Glenn Model UN Frizzly bear logo framed by orange laurels"
      loading={compact ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
