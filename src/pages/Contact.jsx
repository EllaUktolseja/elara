import { profile } from "../data/portfolio.js";

export default function Contact() {
  const contactOptions = [
    {
      label: "Email",
      value: profile.email,
      description: "For opportunities and inquiries",
      href: profile.email ? `mailto:${profile.email}` : null,
    },
    {
      label: "LinkedIn",
      value: "Connect professionally",
      description: "Professional networking",
      href: profile.linkedinUrl,
    },
    {
      label: "GitHub",
      value: "Explore my projects",
      description: "Code and development work",
      href: profile.githubUrl,
    },
    {
      label: "WhatsApp",
      value: "Send me a message",
      description: "Direct communication",
      href: profile.whatsappUrl,
    },
  ].filter((item) => item.href);

  return (
    <section className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 max-sm:px-4">
      <header className="mb-14 max-w-4xl">
        <p className="mb-5 text-xs font-bold tracking-[.17em] text-purple">
          PERSONAL PROFILE / CONTACT
        </p>
        <h1 className="mb-6 font-display text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[1.04] tracking-[-.07em]">
          Curious by nature.{" "}
          <span className="text-gradient">Intentional by design.</span>
        </h1>
        <p className="mb-0 max-w-2xl text-lg leading-8 text-muted">
          I&apos;m {profile.name}, a computer science student developing my
          skills through practical projects and exploring how thoughtful design,
          reliable engineering, and maintainable code can create useful digital
          experiences.
        </p>
      </header>

      <div className="grid grid-cols-[.8fr_1.2fr] items-start gap-10 max-lg:grid-cols-1">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-purple/20 to-[#e8dcff] blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-[#f5efff] to-white p-3 shadow-xl shadow-purple/10">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-[1.4rem] object-cover"
            />
            <div className="px-3 py-4">
              <p className="mb-1 font-display text-xl font-extrabold">
                {profile.name}
              </p>
              <p className="mb-0 text-sm text-muted">{profile.headline}</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section className="rounded-[1.75rem] border border-[#e7def7] bg-gradient-to-br from-white via-[#faf7ff] to-[#f0e8ff] p-6 sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-[.65rem] font-bold tracking-[.18em] text-purple">
                  RESUME / 2026
                </p>
                <h2 className="mb-2 font-display text-2xl font-extrabold tracking-[-.05em] sm:text-3xl">
                  A closer look at my journey.
                </h2>
                <p className="mb-0 leading-7 text-muted">
                  Explore my education, experience, and technical foundations in
                  a concise CV.
                </p>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-purple/15 bg-white text-purple">
                <span className="text-sm font-extrabold">PDF</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-dark to-purple px-5 font-bold text-white shadow-lg shadow-purple/20 transition hover:-translate-y-0.5"
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View CV <span aria-hidden="true">↗</span>
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#ddd3f5] bg-white px-5 font-bold text-purple-dark transition hover:border-purple/50 hover:bg-[#f8f5ff]"
                href="/cv.pdf"
                download="Gabriella-Uktolseja-CV.pdf"
              >
                Download CV
              </a>
            </div>
            <p className="mt-4 mb-0 text-xs leading-5 text-muted">
              The CV PDF is served from{" "}
              <code className="rounded bg-white/80 px-1.5 py-0.5">
                public/cv.pdf
              </code>
              . Add your final CV there before publishing.
            </p>
          </section>

          <section>
            <p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">
              LET&apos;S CONNECT
            </p>
            <h2 className="mb-5 font-display text-2xl font-extrabold tracking-[-.05em] sm:text-3xl">
              Good things start with a conversation.
            </h2>
            <div className="space-y-3">
              {contactOptions.map((item, index) => (
                <a
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-purple/30 hover:shadow-lg hover:shadow-purple/5 sm:gap-5 sm:p-6"
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#f4efff] font-display text-sm font-extrabold text-purple-dark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-[.13em] text-purple">
                      {item.label}
                    </span>
                    <strong className="block break-words font-display text-lg font-bold text-ink">
                      {item.value}
                    </strong>
                    <span className="mt-1 block text-sm text-muted">
                      {item.description}
                    </span>
                  </span>
                  <span className="text-xs font-bold tracking-[.12em] text-purple/0 transition-colors group-hover:text-purple">
                    CONNECT
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
