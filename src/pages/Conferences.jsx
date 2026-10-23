import { ArrowRight, CalendarDays, Check, ClipboardList, Flag, MapPinned } from 'lucide-react'
import { Link } from 'react-router-dom'
import Gavel from '../components/Gavel'

const conferences = [
  {
    order: '01',
    season: 'Fall conference',
    name: 'CTMUN Fall',
    note: 'Committee assignments, registration information, and event details are coming soon.',
    accent: 'orange',
  },
  {
    order: '02',
    season: 'Conference',
    name: 'SICMUN',
    note: 'Dates, committee information, and participation details are coming soon.',
    accent: 'navy',
  },
  {
    order: '03',
    season: 'Conference',
    name: 'MUNSA',
    note: 'Dates, committee information, and participation details are coming soon.',
    accent: 'brown',
  },
  {
    order: '04',
    season: 'Spring conference',
    name: 'CTMUN Spring',
    note: 'Committee assignments, registration information, and event details are coming soon.',
    accent: 'orange',
  },
]

const prepItems = ['Country research', 'Position paper', 'Opening speech', 'Committee materials']

export default function Conferences() {
  return (
    <>
      <section className="page-hero page-hero--conferences">
        <div className="container conference-hero-grid">
          <div>
            <p className="eyebrow">Conference calendar</p>
            <h1>Four rooms.<br /><span>One team.</span></h1>
            <p>Our conference calendar is being finalized. These events are listed for planning purposes; dates, participation details, and logistics will be posted once confirmed.</p>
          </div>
          <div className="conference-hero-art" aria-hidden="true">
            <div className="calendar-sheet">
              <div className="calendar-rings"><i /><i /></div>
              <span>Delegation<br />schedule</span>
              <strong>TBD</strong>
              <small>Dates pending</small>
            </div>
            <Gavel className="conference-gavel" />
          </div>
        </div>
      </section>

      <section className="conference-list section-pad">
        <div className="container">
          <div className="conference-heading">
            <div>
              <p className="eyebrow">Upcoming</p>
              <h2>On our planning board</h2>
            </div>
            <p>Conference details will move from “pending” to confirmed only after the schedule and delegation plans are finalized.</p>
          </div>

          <div className="conference-grid">
            {conferences.map(({ order, season, name, note, accent }) => (
              <article className={`conference-card conference-card--${accent}`} key={name}>
                <div className="conference-card-index">{order}</div>
                <div className="conference-card-main">
                  <p><Flag aria-hidden="true" size={15} /> {season}</p>
                  <h3>{name}</h3>
                  <span>{note}</span>
                </div>
                <div className="conference-status">
                  <CalendarDays aria-hidden="true" />
                  <span>Schedule</span>
                  <strong>Pending</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="conference-callout">
            <MapPinned aria-hidden="true" />
            <div>
              <h3>Looking for dates, costs, or permission forms?</h3>
              <p>Those details have not yet been published on this site. Check back after the conference schedule is confirmed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ready-section section-pad">
        <div className="container ready-grid">
          <div>
            <p className="eyebrow">While dates take shape</p>
            <h2>Get committee-ready now.</h2>
            <p>The schedule may be pending, but strong habits can start today. Build the pieces you can carry into any room.</p>
            <Link className="button button--light" to="/resources">
              Prepare for committee <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="ready-checklist">
            <div className="ready-checklist-head">
              <ClipboardList aria-hidden="true" />
              <span>Delegate checklist</span>
            </div>
            {prepItems.map((item, index) => (
              <div className="ready-check" key={item}>
                <span><Check aria-hidden="true" size={15} /></span>
                <strong>{item}</strong>
                <small>0{index + 1}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
