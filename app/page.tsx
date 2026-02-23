import { SectionContainer } from "@/components/SectionContainer";
import { Divider } from "@/components/Divider";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ExperienceTableRow } from "@/components/ExperienceRow";
import { projects } from "@/content/projects";
import { experiences } from "@/content/experience";

const sortedProjects = [...projects].sort((a, b) => a.sortOrder - b.sortOrder);
const sortedExperiences = [...experiences].sort((a, b) => a.sortOrder - b.sortOrder);

export default function Home() {
  return (
    <>
      {/* ── HERO / ABOUT ───────────────────────────────────── */}
      <SectionContainer id="about" className="pt-28 pb-20">
        {/* Label chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Chip label="Developer" variant="teal" />
          <Chip label="Trader" />
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#ededed] tracking-tight leading-tight max-w-3xl mb-6">
          I build fast, reliable{" "}
          <span className="text-[#2dd4bf]">software.</span>
        </h1>

        {/* Bio */}
        <p className="text-[#9a9a9a] text-lg leading-relaxed max-w-xl mb-10">
          Software engineer exploring the intersection of trading and software development.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Button href="#contact" label="Get in touch" variant="primary" />
        </div>
      </SectionContainer>

      <div className="max-w-5xl mx-auto px-6">
        <Divider />
      </div>

      {/* ── FEATURED PROJECTS ──────────────────────────────── */}
      <SectionContainer id="projects" className="pb-4">
        <div className="mb-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-2">
            Featured Projects
          </h2>
        </div>

        {sortedProjects.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-[#9a9a9a] text-sm">
              Projects in progress — check back soon.
            </p>
          </div>
        ) : (
          <div>
            {sortedProjects.map((project, index) => (
              <CaseStudyCard
                key={project.id}
                project={project}
                isFirst={index === 0}
              />
            ))}
          </div>
        )}
      </SectionContainer>

      <div className="max-w-5xl mx-auto px-6">
        <Divider />
      </div>

      {/* ── SELECTED EXPERIENCE ────────────────────────────── */}
      <SectionContainer id="experience" className="pb-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#ededed] tracking-tight mb-12">
          Selected projects
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th scope="col" className="pb-3 pr-8 text-left text-xs text-[#9a9a9a] font-normal tracking-wider w-[18%]">Client</th>
              <th scope="col" className="pb-3 pr-8 text-left text-xs text-[#9a9a9a] font-normal tracking-wider">Project</th>
              <th scope="col" className="pb-3 pr-8 text-left text-xs text-[#9a9a9a] font-normal tracking-wider w-[14%]">Platform</th>
              <th scope="col" className="pb-3 text-left text-xs text-[#9a9a9a] font-normal tracking-wider w-[12%]">Type</th>
            </tr>
          </thead>
          <tbody>
            {sortedExperiences.map((exp) => (
              <ExperienceTableRow key={exp.id} experience={exp} />
            ))}
          </tbody>
        </table>
      </SectionContainer>

      <div className="max-w-5xl mx-auto px-6">
        <Divider />
      </div>

      {/* ── CONTACT ────────────────────────────────────────── */}
      <SectionContainer id="contact" className="pb-28">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4">
          Contact
        </h2>

        <p className="text-3xl sm:text-4xl font-semibold text-[#ededed] tracking-tight leading-tight max-w-lg mb-4">
          Let&apos;s work together.
        </p>
        <p className="text-[#9a9a9a] text-base leading-relaxed max-w-md mb-10">
          Open to interesting problems in software, infrastructure, and fintech.
          Reach out if you want to build something or just have a conversation.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            href="mailto:ldqtrading.nt@gmail.com"
            label="Email"
            variant="primary"
          />
          <Button
            href="https://linkedin.com/in/ethandlow"
            label="LinkedIn"
            variant="secondary"
            external={true}
          />
        </div>

        {/* Subtle availability note */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-[#9a9a9a] text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse inline-block" aria-hidden="true" />
            Available for select projects
          </p>
        </div>
      </SectionContainer>
    </>
  );
}
