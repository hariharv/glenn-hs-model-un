export default function Gavel({ className = '', title = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 130"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : 'true'}
    >
      {title ? <title>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M41 25 74 8l27 35-33 17Z" fill="currentColor" opacity=".12" />
        <path d="m48 19 29 37M71 10l28 37" strokeWidth="5" />
        <path d="m77 55 58 56" strokeWidth="12" />
        <path d="m80 57 55 53" stroke="#f7ecd8" strokeWidth="4" opacity=".45" />
        <path d="m112 105 14-14 16 16-14 14Z" fill="currentColor" strokeWidth="4" />
        <path d="M89 116h63c8 0 13 5 13 10H76c0-5 5-10 13-10Z" fill="currentColor" strokeWidth="4" />
      </g>
    </svg>
  )
}
