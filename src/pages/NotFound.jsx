import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Gavel from '../components/Gavel'

export default function NotFound() {
  return (
    <section className="not-found section-pad">
      <div className="container not-found-inner">
        <Gavel className="not-found-gavel" />
        <p className="eyebrow">404 / Motion out of order</p>
        <h1>This page missed the agenda.</h1>
        <p>The link may have moved, or the page may not exist yet.</p>
        <Link className="button" to="/"><ArrowLeft aria-hidden="true" size={18} /> Return home</Link>
      </div>
    </section>
  )
}
