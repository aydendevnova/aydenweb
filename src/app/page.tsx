export default function HomePage() {
  return (
    <main className="flex min-h-full flex-col bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="flex w-full flex-col gap-8 px-[200px] pt-[120px] pb-[100px]">
        <h1 className="font-heading text-[60px] font-semibold leading-tight tracking-[-1px] text-[var(--color-text)]">
          Ayden Springer.
        </h1>
        <p className="font-body max-w-[700px] text-[24px] leading-[1.5] font-normal text-[var(--color-text)]">
          Computer science student and developer. I build software that ships.
        </p>
      </section>

      {/* Selected Work */}
      <section className="flex w-full flex-col gap-12 px-[200px] py-[80px]">
        <h2 className="font-heading text-[40px] font-semibold text-[var(--color-text)]">
          Selected Work
        </h2>

        <CaseStudy
          title="PixelNova"
          description="AI-powered pixel art generation tools built in collaboration with Pixel Palette Nation. Launched publicly and grew to over 500 active users. Worked with Zero Authority DAO on application rebrand and expanded feature set."
        />
        <CaseStudy
          title="Mothora"
          description="Contract work for an early-stage startup. Delivered the initial MVP within two months and redesigned the application for improved user experience. The project secured a $10,000 grant from FileCoin."
        />
        <CaseStudy
          title="Everplast"
          description="Solo-developed game released on Steam during high school. Handled all aspects from concept through launch including design, development, and publishing. First shipped commercial product."
        />
        <CaseStudy
          title="Red Block Labs"
          description="Web development work across multiple client projects including BNS.one and BNS Foundation. Contributed to efforts that secured over $20,000 in grants and funding. Won the Turnkey + Stacks JS Hackathon."
        />
        <CaseStudy
          title="Elysium Health"
          description="Engineering internship focused on AI applications in health and longevity. Built an AI-powered health assistant with integrated safeguards, knowledge base, and tool-call functionality. Worked under engineering management on safety, accuracy, and regulatory alignment."
        />
      </section>

      {/* Testimonials */}
      <section className="flex w-full flex-col gap-12 px-[200px] py-[80px]">
        <h2 className="font-heading text-[40px] font-semibold text-[var(--color-text)]">
          Testimonials
        </h2>

        <Testimonial
          quote={`"Ayden Springer is the kind of Full Stack Developer every team dreams of having. His dedication to the craft and consistent success in delivering exceptional digital products makes him a valuable asset. I highly recommend Ayden Springer for any tech project."`}
          name="Rocky Nguyen"
          role="Engineering Manager at Elysium Health"
        />
        <Testimonial
          quote={`"If you need a Dev who talks with their keyboard instead of prolonging the Zoom call, Ayden will kick out your project faster than 90% of the over-confident 'code crafters' out there. Ayden gets it DONE."`}
          name="Michael Jagdeo"
          role="Recruiter at Delmi Training"
        />
        <Testimonial
          quote={`"Ayden is an amazingly talented developer. His contribution to the project Avalanche from The New Dev Order was crucial to completing the most difficult task that saw the team home. He is gonna be the best find for any Hiring Manager."`}
          name="Manish Andankar"
          role="Founder & CEO at Worthum"
        />
      </section>

      {/* Background */}
      <section className="flex w-full flex-col gap-8 px-[200px] py-[80px]">
        <h2 className="font-heading text-[40px] font-semibold text-[var(--color-text)]">
          Background
        </h2>
        <p className="font-body max-w-[800px] text-[16px] leading-[1.6] text-[var(--color-text)]">
          Started building games in high school, shipping Everplast to Steam before graduation.
          Transitioned to web and blockchain development during college, working with startups and
          DAOs on products that secured grant funding and reached real users. Most recently completed
          an engineering internship at Elysium Health, building AI-powered health tools under
          engineering management with a focus on safety and regulatory alignment. Currently a
          third-year computer science student at the University of North Florida, graduating Spring
          2027.
        </p>
      </section>

      {/* Contact */}
      <section className="flex w-full flex-col gap-8 px-[200px] pt-[80px] pb-[120px]">
        <h2 className="font-heading text-[40px] font-semibold text-[var(--color-text)]">
          Contact
        </h2>
        <div className="font-body flex flex-col gap-4">
          <a
            href="mailto:23aspringer3@gmail.com"
            className="text-[16px] text-[var(--color-link)] hover:underline"
          >
            23aspringer3@gmail.com
          </a>
          <a
            href="https://github.com/aydendevnova"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] text-[var(--color-link)] hover:underline"
          >
            github.com/aydendevnova
          </a>
          <a
            href="https://linkedin.com/in/ayden-springer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] text-[var(--color-link)] hover:underline"
          >
            linkedin.com/in/ayden-springer
          </a>
          <a
            href="#"
            className="mt-4 flex items-center gap-2 text-[16px] font-medium text-[var(--color-link)] hover:underline"
          >
            View Resume <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

function CaseStudy({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-[var(--color-border)] pb-8">
      <h3 className="font-heading text-[24px] font-semibold text-[var(--color-text)]">
        {title}
      </h3>
      <p className="font-body max-w-[800px] text-[16px] leading-[1.6] text-[var(--color-text)]">
        {description}
      </p>
    </div>
  );
}

function Testimonial({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex flex-col gap-5 border-b border-[var(--color-border)] pb-8">
      <p className="font-body max-w-[800px] text-[16px] leading-[1.6] text-[var(--color-text)]">
        {quote}
      </p>
      <div className="flex flex-col gap-1">
        <span className="font-body text-[16px] font-semibold text-[var(--color-text)]">
          {name}
        </span>
        <span className="font-body text-[14px] text-[var(--color-muted)]">
          {role}
        </span>
      </div>
    </div>
  );
}
