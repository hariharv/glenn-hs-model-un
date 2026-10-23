import { ArrowRight, BookOpen, ClipboardCheck, Megaphone, Network, Radio, UsersRound, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import Gavel from '../components/Gavel'

const officers = [
  {
    code: 'SG–01',
    role: 'Co-Secretary-General',
    short: 'Co-SG',
    icon: UsersRound,
    description: 'Shares responsibility for the club’s direction, team coordination, and delegate experience.',
  },
  {
    code: 'SG–02',
    role: 'Co-Secretary-General',
    short: 'Co-SG',
    icon: UsersRound,
    description: 'Shares responsibility for the club’s direction, team coordination, and delegate experience.',
  },
  {
    code: 'DSG',
    role: 'Deputy Secretary-General',
    short: 'DSG',
    icon: Network,
    description: 'Supports day-to-day planning, officer communication, and coordination across the team.',
  },
  {
    code: 'ACAD',
    role: 'USG of Academics',
    short: 'USG',
    icon: BookOpen,
    description: 'Guides research, committee preparation, position papers, and delegate learning.',
  },
  {
    code: 'STD',
    role: 'USG of Standard',
    short: 'USG',
    icon: ClipboardCheck,
    description: 'Supports standard committees, including speeches, caucuses, resolutions, and procedure.',
  },
  {
    code: 'CRISIS',
    role: 'USG of Crisis',
    short: 'USG',
    icon: Zap,
    description: 'Supports fast-paced crisis preparation, character strategy, directives, and rapid response.',
  },
  {
    code: 'MEDIA',
    role: 'USG of Media',
    short: 'USG',
    icon: Radio,
    description: 'Shapes club communications, event updates, and the visual story of Glenn Model UN.',
  },
]

export default function About() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">About us / Interim leadership</p>
            <h1>Seven roles.<br /><span>One delegation.</span></h1>
            <p>Our interim officer structure supports club planning, delegate preparation, committee formats, and communications.</p>
          </div>
          <div className="about-hero-card">
            <p>Our working principle</p>
            <blockquote>“Lead by helping every delegate enter the room ready to contribute.”</blockquote>
            <div className="about-hero-signoff">
              <span>Interim officer team</span>
              <Megaphone aria-hidden="true" />
            </div>
            <Gavel className="about-gavel" />
          </div>
        </div>
      </section>

      <section className="officers section-pad">
        <div className="container">
          <div className="officer-heading">
            <div>
              <p className="eyebrow">Meet the team</p>
              <h2>Interim officer positions</h2>
            </div>
            <p>Names will be added after the leadership roster is confirmed. For now, here is how each office supports the club.</p>
          </div>

          <div className="officer-grid">
            {officers.map(({ code, role, short, icon: Icon, description }, index) => (
              <article className={`officer-card officer-card--${(index % 3) + 1}`} key={`${role}-${code}`}>
                <div className="officer-card-top">
                  <span className="officer-code">{code}</span>
                  <Icon aria-hidden="true" />
                </div>
                <p className="officer-kicker">{short}</p>
                <h3>{role}</h3>
                <p>{description}</p>
                <div className="officer-name">
                  <span>Name</span>
                  <strong>Coming soon</strong>
                </div>
              </article>
            ))}
          </div>

          <p className="status-caption">Leadership information is interim and subject to confirmation.</p>
        </div>
      </section>

      <section className="values-strip section-pad">
        <div className="container values-inner">
          <div>
            <p className="eyebrow">How we lead</p>
            <h2>Prepared. Curious. Collaborative.</h2>
          </div>
          <p>The officer team’s job is to make the process clearer, create space for different voices, and help each delegate leave committee stronger than they entered it.</p>
          <Link className="button button--light" to="/resources">
            Start preparing <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
