import {
  ArrowRight,
  BookOpenCheck,
  Check,
  FilePenLine,
  Handshake,
  MessagesSquare,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Gavel from '../components/Gavel'
import Logo from '../components/Logo'
import SectionHeading from '../components/SectionHeading'

const pillars = [
  {
    number: '01',
    icon: BookOpenCheck,
    title: 'Prepare with purpose',
    body: 'Build the research, writing, and speaking skills to enter committee with confidence.',
  },
  {
    number: '02',
    icon: MessagesSquare,
    title: 'Debate with respect',
    body: 'Practice parliamentary procedure, persuasive speeches, and thoughtful responses to complex questions.',
  },
  {
    number: '03',
    icon: Handshake,
    title: 'Collaborate for solutions',
    body: 'Work across viewpoints to negotiate priorities, draft resolutions, and build consensus.',
  },
]

const delegatePath = [
  {
    label: 'Before committee',
    title: 'Research the room',
    body: 'Learn your country, define its priorities, and arrive with an opening position—not a memorized script.',
  },
  {
    label: 'In committee',
    title: 'Move the conversation',
    body: 'Listen for common ground, speak with intent, and turn ideas into working papers with other delegates.',
  },
  {
    label: 'After the gavel',
    title: 'Reflect and improve',
    body: 'Review what worked, sharpen your next strategy, and help the team prepare for what comes next.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" /> Tom Glenn High School
            </p>
            <h1>
              Diplomacy<br />
              <span>starts here.</span>
            </h1>
            <p className="hero-lede">
              Explore global issues, practice purposeful debate, and learn how collaboration can turn different perspectives into shared solutions.
            </p>
            <div className="hero-actions">
              <Link className="button" to="/conferences">
                Explore conferences <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="text-link" to="/about">
                Meet the interim officers <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
            <div className="hero-proof" aria-label="Club focus areas">
              <span><Check aria-hidden="true" size={15} /> Research</span>
              <span><Check aria-hidden="true" size={15} /> Debate</span>
              <span><Check aria-hidden="true" size={15} /> Consensus</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Glenn Model UN logo display">
            <div className="hero-art-orbit" aria-hidden="true" />
            <div className="hero-logo-card">
              <div className="paper-tape paper-tape--left" aria-hidden="true" />
              <div className="paper-tape paper-tape--right" aria-hidden="true" />
              <p>Official club mark</p>
              <Logo />
              <span className="logo-caption">Normal (Clean Up)</span>
            </div>
            <div className="round-stamp" aria-hidden="true">
              <span>Research • Debate • Diplomacy •</span>
              <strong>UN</strong>
            </div>
            <Gavel className="hero-gavel" />
            <span className="doodle-star doodle-star--one" aria-hidden="true">✦</span>
            <span className="doodle-star doodle-star--two" aria-hidden="true">✦</span>
          </div>
        </div>
        <div className="hero-marquee" aria-hidden="true">
          <div>
            <span>Think globally</span><i>•</i><span>Speak purposefully</span><i>•</i><span>Lead together</span><i>•</i>
            <span>Think globally</span><i>•</i><span>Speak purposefully</span><i>•</i><span>Lead together</span><i>•</i>
          </div>
        </div>
      </section>

      <section className="mission section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="Why Model UN?"
            title="Think globally. Speak purposefully. Lead together."
            body="Model United Nations gives students a place to research real-world challenges, represent new perspectives, and practice finding common ground."
          />
          <div className="pillar-grid">
            {pillars.map(({ number, icon: Icon, title, body }) => (
              <article className="pillar-card" key={title}>
                <div className="pillar-top">
                  <span>{number}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="delegate-path section-pad">
        <div className="container path-layout">
          <div className="path-intro">
            <p className="eyebrow">The delegate path</p>
            <h2>From a blank page to a working resolution.</h2>
            <p>Great delegates are built one skill at a time. Our team focuses on the full process—not just the speech at the podium.</p>
            <Link className="text-link text-link--light" to="/resources">
              Open the delegate toolkit <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <FilePenLine className="path-illustration" aria-hidden="true" />
          </div>
          <ol className="path-list">
            {delegatePath.map((step, index) => (
              <li key={step.title}>
                <span className="path-number">0{index + 1}</span>
                <div>
                  <p>{step.label}</p>
                  <h3>{step.title}</h3>
                  <span>{step.body}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="draft-note-wrap section-pad">
        <div className="container">
          <div className="draft-note">
            <div>
              <p className="eyebrow">A site in progress</p>
              <h2>Built for the next delegation.</h2>
            </div>
            <p>This is our first draft. Officer names, conference details, downloadable resources, and student photography will be added as they are confirmed.</p>
            <Link className="button button--ghost" to="/about">
              See the team structure <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
