import { skills } from "../data/portfolio.js";

const categoryNotes = {
  Languages:
    "The foundations I use to reason about problems and express solutions.",
  Frontend: "The tools I use to shape clear, responsive user experiences.",
  Backend: "The foundations for application logic and server-side workflows.",
  Databases: "How I organize, persist, and work with application data.",
  Tools: "The workflow that supports building, testing, and shipping projects.",
};

const orbitSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Git",
  "CSS",
  "Docker",
];

export default function Skills() {
  const groupedSkills = Object.entries(
    [...skills]
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .reduce((groups, skill) => {
        const category = skill.category || "Other";
        if (!groups[category]) groups[category] = [];
        groups[category].push(skill);
        return groups;
      }, {}),
  );

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-[#e6ddf5] bg-gradient-to-br from-white via-[#f8f4ff] to-[#eee5ff]">
        <div className="grid-dots absolute inset-0 -z-10 opacity-35" />
        <div className="mx-auto grid min-h-[580px] w-full max-w-[1180px] grid-cols-[1fr_.9fr] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 max-lg:grid-cols-1 max-lg:gap-4 max-sm:px-4">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[.17em] text-purple">
              SKILLS & TOOLKIT
            </p>
            <h1 className="mb-6 max-w-3xl font-display text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[1.04] tracking-[-.07em]">
              A toolkit in{" "}
              <span className="text-gradient">constant motion.</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-8 text-muted">
              Skills grow through practice, experimentation, and the work
              itself. Explore the technologies I&apos;m learning and applying
              across projects.
            </p>
            <a
              href="#toolkit"
              className="inline-flex min-h-12 items-center rounded-xl bg-gradient-to-r from-purple-dark to-purple px-5 font-bold text-white shadow-lg shadow-purple/20 transition hover:-translate-y-0.5"
            >
              Explore my toolkit
            </a>
            <p className="mt-6 text-sm text-muted">
              {skills.length} skills grouped by how they fit into the way I
              build and learn.
            </p>
          </div>

          <div
            className="relative mx-auto aspect-square w-full max-w-[440px]"
            aria-label="Abstract orbital map of selected technologies"
          >
            <div className="absolute inset-[4%] rounded-full border border-purple/15" />
            <div className="skill-orbit skill-orbit--outer">
              <span className="skill-orbit__dot" />
            </div>
            <div className="skill-orbit skill-orbit--middle">
              <span className="skill-orbit__dot" />
            </div>
            <div className="skill-orbit skill-orbit--inner">
              <span className="skill-orbit__dot" />
            </div>
            <div className="absolute inset-[29%] rounded-full bg-purple/10 blur-2xl" />
            <div className="skill-core absolute left-1/2 top-1/2 z-10 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/90 bg-gradient-to-br from-purple-dark via-purple to-[#b28af4] text-white shadow-[0_20px_55px_rgba(85,53,158,.25)] sm:size-32">
              <div className="text-center">
                <span className="block font-display text-3xl font-extrabold tracking-[-.08em]">
                  E.
                </span>
                <span className="mt-1 block text-[.55rem] font-bold tracking-[.14em]">
                  ELARA
                </span>
              </div>
            </div>

            {orbitSkills.map((name, index) => {
              const positions = [
                { left: "50%", top: "8%" },
                { left: "80%", top: "20%" },
                { left: "91%", top: "48%" },
                { left: "74%", top: "79%" },
                { left: "46%", top: "91%" },
                { left: "17%", top: "76%" },
                { left: "8%", top: "45%" },
                { left: "22%", top: "17%" },
              ];

              return (
                <span
                  key={name}
                  className="skill-node"
                  style={{
                    left: positions[index].left,
                    top: positions[index].top,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {name}
                </span>
              );
            })}
            <span className="absolute bottom-[4%] left-1/2 -translate-x-1/2 text-[.6rem] font-bold tracking-[.2em] text-purple-dark/55">
              LEARN / BUILD / REFINE
            </span>
          </div>
        </div>
      </section>

      <section
        id="toolkit"
        className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24 max-sm:px-4"
      >
        <div className="mb-16 rounded-[1.75rem] border border-line bg-white p-6 shadow-[0_18px_55px_rgba(65,43,108,.045)] sm:p-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold tracking-[.16em] text-purple">
                CURRENT TOOLKIT
              </p>
              <h2 className="mb-0 font-display text-2xl font-extrabold tracking-[-.05em] sm:text-3xl">
                Learning by building
              </h2>
            </div>
            <span className="text-sm text-muted">
              {skills.length} skills across {groupedSkills.length} categories
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Python",
              "Node.js",
              "PostgreSQL",
              "Docker",
              "Tailwind CSS",
            ].map((name) => (
              <span
                key={name}
                className="rounded-full border border-[#e7def8] bg-[#f8f5ff] px-4 py-2 text-sm font-semibold text-purple-dark"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">
              THE FULL LANDSCAPE
            </p>
            <h2 className="mb-0 font-display text-3xl font-extrabold tracking-[-.06em] sm:text-4xl">
              What sits in my toolkit
            </h2>
          </div>
          <p className="mb-0 max-w-md leading-7 text-muted">
            Grouped by how each technology fits into the way I build and learn.
          </p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {groupedSkills.map(([category, categorySkills], index) => (
            <section
              className="grid grid-cols-[.65fr_1.35fr] gap-8 py-8 sm:py-9 max-md:grid-cols-1 max-md:gap-4"
              key={category}
            >
              <div>
                <p className="mb-2 text-xs font-bold tracking-[.16em] text-purple/70">
                  {String(index + 1).padStart(2, "0")} / CATEGORY
                </p>
                <h3 className="mb-2 font-display text-2xl font-extrabold tracking-[-.05em]">
                  {category}
                </h3>
                <p className="mb-0 max-w-sm text-sm leading-6 text-muted">
                  {categoryNotes[category] ||
                    "Technologies and concepts I am exploring."}
                </p>
              </div>
              <div className="flex content-start flex-wrap gap-x-5 gap-y-4">
                {categorySkills.map((skill) => (
                  <span
                    className="skill-word group relative py-1 text-base font-semibold text-ink transition-colors hover:text-purple sm:text-lg"
                    key={skill.name}
                  >
                    {skill.name}
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-purple transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-7 text-sm leading-7 text-muted">
          Skill levels reflect an ongoing learning journey. They are not formal
          certifications or claims of professional mastery.
        </p>
      </section>
    </>
  );
}
