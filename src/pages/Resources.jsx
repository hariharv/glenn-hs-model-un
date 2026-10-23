import {
  BookMarked,
  CheckSquare,
  FilePenLine,
  Hourglass,
  ListChecks,
  ScrollText,
  Sparkles,
  Swords,
} from 'lucide-react'

const resources = [
  {
    icon: BookMarked,
    number: '01',
    tag: 'Procedure',
    title: 'Parliamentary Procedure Guide',
    description: 'A quick reference for motions, points, caucuses, voting, and the flow of committee.',
  },
  {
    icon: ScrollText,
    number: '02',
    tag: 'Resolutions',
    title: 'Preambulatory & Operative Clauses',
    description: 'Learn how resolutions are structured and review common clause starters for each section.',
  },
  {
    icon: FilePenLine,
    number: '03',
    tag: 'Research',
    title: 'Position Paper Writing Guide',
    description: 'Turn country research into a clear summary of policy, priorities, and proposed solutions.',
  },
  {
    icon: CheckSquare,
    number: '04',
    tag: 'Planning',
    title: 'Conference Prep Checklist',
    description: 'Keep track of research, committee materials, speeches, forms, and day-of essentials.',
  },
  {
    icon: ListChecks,
    number: '05',
    tag: 'Writing',
    title: 'Resolution Writing Starter',
    description: 'Review the building blocks of working papers, draft resolutions, and collaborative editing.',
  },
  {
    icon: Swords,
    number: '06',
    tag: 'Crisis',
    title: 'Crisis Committee Quick Start',
    description: 'An introduction to character goals, directives, crisis updates, and responsive strategy.',
  },
]

export default function Resources() {
  return (
    <>
      <section className="page-hero page-hero--resources">
        <div className="container resource-hero-grid">
          <div>
            <p className="eyebrow">Helpful links / Delegate toolkit</p>
            <h1>Prepared delegates<br /><span>change the room.</span></h1>
            <p>A practical starting point for committee preparation. These previews will become downloadable Glenn Model UN guides as materials are finalized.</p>
          </div>
          <div className="resource-stack" aria-hidden="true">
            <div className="stack-paper stack-paper--back"><span>Notes</span></div>
            <div className="stack-paper stack-paper--middle"><span>Draft</span></div>
            <div className="stack-paper stack-paper--front">
              <Sparkles />
              <strong>Delegate<br />Toolkit</strong>
              <small>Research → Resolution</small>
            </div>
          </div>
        </div>
      </section>

      <section className="resources section-pad">
        <div className="container">
          <div className="resource-heading">
            <div>
              <p className="eyebrow">On the desk</p>
              <h2>Six guides for stronger committee prep.</h2>
            </div>
            <div className="draft-pill"><Hourglass aria-hidden="true" size={16} /> Draft resources</div>
          </div>
          <div className="resource-grid">
            {resources.map(({ icon: Icon, number, tag, title, description }) => (
              <article className="resource-card" key={title}>
                <div className="resource-icon"><Icon aria-hidden="true" /></div>
                <span className="resource-number">{number}</span>
                <p className="resource-tag">{tag}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <button type="button" disabled aria-label={`${title}, coming soon`}>
                  <Hourglass aria-hidden="true" size={15} /> Coming soon
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prep-note section-pad">
        <div className="container prep-note-inner">
          <div className="prep-note-number">3×</div>
          <div>
            <p className="eyebrow">A simple prep rhythm</p>
            <h2>Read it. Say it. Revise it.</h2>
          </div>
          <p>Use each guide as a starting point, practice your ideas aloud, then revise with feedback from another delegate. Preparation works best when it is active.</p>
        </div>
      </section>
    </>
  )
}
