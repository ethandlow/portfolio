import Image from "next/image";
import { SectionContainer } from "@/components/SectionContainer";
import { Divider } from "@/components/Divider";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ExperienceSection } from "@/components/ExperienceSection";
import { projects } from "@/content/projects";
import { experiences } from "@/content/experience";

const sortedProjects = [...projects].sort((a, b) => a.sortOrder - b.sortOrder);
const sortedExperiences = [...experiences].sort((a, b) => a.sortOrder - b.sortOrder);

export default function Home() {
  return (
    <>
      {/* ── HERO / ABOUT ───────────────────────────────────── */}
      <SectionContainer id="about" className="pt-28 pb-32">
        <div className="flex flex-wrap gap-2 mb-8">
          <Chip label="Developer" variant="teal" />
          <Chip label="Trader" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#ededed] tracking-tight leading-tight max-w-3xl mb-6">
          I develop software for{" "}
          <span className="text-[#2dd4bf]">serious traders.</span>
        </h1>

        <p className="text-[#9a9a9a] text-lg leading-relaxed max-w-xl mb-10">
          Software engineer exploring the intersection of trading and software development.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button href="#contact" label="Get in touch" variant="primary" />
        </div>
      </SectionContainer>

      <div className="max-w-5xl mx-auto px-6">
        <Divider />
      </div>

      {/* ── PROJECTS: platforms i work with + featured project cards ── */}
      <SectionContainer id="projects" className="scroll-mt-24 pt-16 pb-4">
        <h2 className="text-center text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-10">
          platforms i work with
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-16">
          <a
            href="https://www.tradingview.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
            aria-label="TradingView"
          >
            <Image
              src="/images/platform-tv.png"
              alt=""
              width={80}
              height={80}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
          </a>
          <a
            href="https://ninjatrader.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
            aria-label="NinjaTrader"
          >
            <Image
              src="/images/platform-nt.png"
              alt=""
              width={80}
              height={80}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
          </a>
          <a
            href="https://atas.net/?rs=partners_oft451410"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
            aria-label="ATAS"
          >
            <Image
              src="/images/platform-atas.png"
              alt=""
              width={80}
              height={80}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
          </a>
          <a
            href="https://accounts.quantower.com/referral?referral_code=TVs%2bKJljX6"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
            aria-label="Quantower"
          >
            <Image
              src="/images/platform-quantower.png"
              alt=""
              width={80}
              height={80}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
          </a>
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
          Selected experience
        </h2>

        <ExperienceSection experiences={sortedExperiences} />
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
          All my clients can vouch for my work and responsiveness.
          Reach out if you want to get something developed the right way.
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
          <Button
            href="https://discord.gg/qjZgYt24yD"
            label="Discord"
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
