import React from "react";
import { useNavigate } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const TrainingAdvisory: React.FC = () => {
  const navigate = useNavigate();

  const handleScheduleConversation = () => {
    navigate("/contact?subject=Discovery%20Conversation");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-offwhite via-white to-brand-offwhite/80 pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Reveal as="section" className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
            Training &amp; Advisory
          </h1>
          <h2 className="text-xl md:text-2xl font-serif text-brand-charcoal/90">
            Capacity Building for Community Wealth Systems
          </h2>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Sage Futures provides training and advisory support to mission-aligned organizations and practitioners seeking to strengthen governance, coordination, and long-term sustainability.
          </p>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Our Training &amp; Advisory work translates Community Wealth Management principles into practical tools that support durable, non-extractive systems of development and care.
          </p>
          <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed max-w-3xl italic">
            While Sage Futures' community development initiatives are anchored in South DeKalb County, our advisory and grant development engagements support partners locally and nationally.
          </p>
        </Reveal>

        <div className="border-t border-brand-stone/30 my-12"></div>

        <Reveal as="section" className="space-y-6" delayMs={80}>
          <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">Village App (BETA)</h2>
          <h3 className="text-lg md:text-xl text-brand-charcoal/80">Relational Infrastructure &amp; Coordination</h3>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Village App (Beta) is a facilitated learning and coordination model designed to strengthen relational infrastructure across teams and community initiatives.
          </p>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            The model supports participants in moving from fragmented efforts to coordinated systems that improve shared decision-making and sustainability.
          </p>
          <div className="space-y-3">
            <p className="text-sm md:text-base font-semibold text-brand-charcoal/90">Focus areas:</p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-brand-charcoal/75 ml-4">
              <li>Cross-functional coordination</li>
              <li>Collective accountability</li>
              <li>Systems thinking for community initiatives</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm md:text-base font-semibold text-brand-charcoal/90">Format:</p>
            <p className="text-sm md:text-base text-brand-charcoal/75">Workshops | Pilot cohorts | Facilitated sessions</p>
          </div>
        </Reveal>

        <div className="border-t border-brand-stone/30 my-12"></div>

        <Reveal as="section" className="space-y-6" delayMs={120}>
          <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">Triple U Training</h2>
          <h3 className="text-lg md:text-xl text-brand-charcoal/80">Governance &amp; Stewardship Infrastructure</h3>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Triple U is a training framework focused on strengthening governance clarity, stewardship practices, and collective infrastructure within organizations and initiatives.
          </p>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            It supports leaders and teams navigating growth, transition, or complexity by building structures that sustain continuity beyond individuals.
          </p>
          <div className="space-y-3">
            <p className="text-sm md:text-base font-semibold text-brand-charcoal/90">Focus areas:</p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-brand-charcoal/75 ml-4">
              <li>Governance and role alignment</li>
              <li>Accountability systems</li>
              <li>Decision-making infrastructure</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm md:text-base font-semibold text-brand-charcoal/90">Format:</p>
            <p className="text-sm md:text-base text-brand-charcoal/75">Organizational trainings | Professional workshops</p>
          </div>
        </Reveal>

        <div className="border-t border-brand-stone/30 my-12"></div>

        <Reveal as="section" className="space-y-6" delayMs={160}>
          <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">Grant Writing &amp; Development Advisory</h2>
          <h3 className="text-lg md:text-xl text-brand-charcoal/80">Strategic Funding Alignment</h3>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Sage Futures provides grant writing and development advisory support to organizations seeking aligned, mission-consistent funding.
          </p>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Our approach emphasizes readiness, clarity, and sustainability—ensuring funding strengthens long-term capacity.
          </p>
          <div className="space-y-3">
            <p className="text-sm md:text-base font-semibold text-brand-charcoal/90">Support includes:</p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-brand-charcoal/75 ml-4">
              <li>Grant readiness assessments</li>
              <li>Proposal development</li>
              <li>Funding strategy alignment</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm md:text-base font-semibold text-brand-charcoal/90">Format:</p>
            <p className="text-sm md:text-base text-brand-charcoal/75">Project-based engagements | Ongoing advisory</p>
          </div>
        </Reveal>

        <div className="border-t border-brand-stone/30 my-12"></div>

        <Reveal as="section" className="space-y-6" delayMs={200}>
          <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">How This Work Supports Our Mission</h2>
          <p className="text-base md:text-lg text-brand-charcoal/80 leading-relaxed max-w-3xl">
            Training and advisory engagements strengthen the systems that support community wealth, sustainability, and long-term development capacity.
          </p>
        </Reveal>

        <div className="border-t border-brand-stone/30 my-12"></div>

        <Reveal
          as="section"
          className="bg-brand-sage text-brand-offwhite px-8 py-10 md:px-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          delayMs={240}
        >
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-serif">Work With Us</h2>
            <p className="text-sm md:text-base text-brand-offwhite/90 leading-relaxed">
              Sage Futures partners with organizations and practitioners seeking structured, systems-based support.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <button
              onClick={handleScheduleConversation}
              className="bg-white text-brand-sage px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] border border-transparent hover:bg-brand-brass hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-sage focus-visible:ring-brand-brass"
            >
              Schedule a Discovery Conversation
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default TrainingAdvisory;
