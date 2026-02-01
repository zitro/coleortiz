import type { Metadata } from 'next';
import { Container, Section, Badge } from '@/components/ui';
import { PageWrapper } from '@/components/layout';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Professional resume for Cole Ortiz.',
};

const experience = [
  {
    company: 'Zitro Capital',
    role: 'Associate',
    period: '2023 - Present',
    location: 'Atlanta, GA',
    description: [
      'Source and evaluate early-stage investment opportunities across fintech, enterprise SaaS, and emerging technologies',
      'Conduct comprehensive due diligence including market analysis, competitive landscape assessment, and financial modeling',
      'Support portfolio companies with strategic initiatives, go-to-market strategy, and operational improvements',
      'Build and maintain relationships with founders, co-investors, and industry experts',
    ],
  },
  {
    company: 'OrbioCloud',
    role: 'Associate',
    period: '2023 - Present',
    location: 'Remote',
    description: [
      'Drive product strategy and roadmap development for cloud infrastructure solutions',
      'Collaborate with engineering teams to prioritize features and optimize user experience',
      'Lead business development initiatives and partnership discussions',
      'Analyze market trends and competitive positioning to inform strategic decisions',
    ],
  },
];

const education = [
  {
    institution: 'University of Georgia',
    degree: 'Bachelor of Science in Family and Consumer Sciences',
    field: 'Financial Planning',
    period: '2021 - 2024',
    location: 'Athens, GA',
    highlights: [
      'College of Family and Consumer Sciences',
      'CFP Board-Registered Program - eligible for Certified Financial Planner (CFP) examination',
      'Relevant coursework: Financial Planning, Investment Analysis, Estate Planning, Retirement Planning, Tax Planning',
    ],
  },
];

const skills = {
  finance: ['Financial Modeling', 'Valuation', 'Due Diligence', 'Investment Analysis', 'Portfolio Management'],
  technology: ['Market Research', 'Product Strategy', 'Data Analysis', 'CRM Systems', 'Business Intelligence'],
  creative: ['Music Production', 'Film Direction', 'Video Editing', 'Acting', 'Storytelling'],
  tools: ['Excel/Google Sheets', 'PowerPoint', 'Notion', 'Figma', 'Logic Pro', 'Final Cut Pro'],
};

const awards = [
  { title: 'Best Short Film', event: 'Atlanta Film Festival', year: '2024' },
  { title: 'Audience Choice Award', event: 'Southern Shorts Awards', year: '2023' },
  { title: "Dean's List", event: 'University of Georgia', year: '2021-2024' },
];

export default function ResumePage() {
  return (
    <PageWrapper>
      <Section className="pb-8">
        <Container size="md">
          {/* Header */}
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Cole Ortiz
              </h1>
              <p className="text-xl text-muted mb-6">
                Finance Professional | Venture Capital | Creative
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Atlanta, GA
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  linkedin.com/in/coleortiz
                </span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Summary */}
          <RevealOnScroll delay={0.1}>
            <div className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-pink-500/5 border border-blue-500/10">
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                Summary
              </h2>
              <p className="text-foreground leading-relaxed">
                Finance professional with a unique blend of analytical expertise and creative vision.
                Currently operating at the intersection of venture capital and technology as an Associate
                at Zitro Capital and OrbioCloud. Passionate about identifying transformative opportunities
                and supporting founders building the future. Award-winning filmmaker and music producer
                bringing creative problem-solving to every endeavor.
              </p>
            </div>
          </RevealOnScroll>

          {/* Experience */}
          <RevealOnScroll delay={0.2}>
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
                Experience
              </h2>
              <StaggerContainer className="space-y-8" staggerDelay={0.1}>
                {experience.map((job, index) => (
                  <StaggerItem key={index}>
                    <div className="relative pl-6 border-l-2 border-border hover:border-blue-500/50 transition-colors">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-500" />
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {job.role}
                          </h3>
                          <p className="text-blue-600 font-medium">{job.company}</p>
                        </div>
                        <div className="text-right text-sm text-muted">
                          <p>{job.period}</p>
                          <p>{job.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 mt-4">
                        {job.description.map((item, i) => (
                          <li key={i} className="text-muted flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </RevealOnScroll>

          {/* Education */}
          <RevealOnScroll delay={0.3}>
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-border">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {edu.institution}
                      </h3>
                      <p className="text-violet-600 font-medium">
                        {edu.degree} in {edu.field}
                      </p>
                    </div>
                    <div className="text-right text-sm text-muted">
                      <p>{edu.period}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1 mt-3">
                    {edu.highlights.map((item, i) => (
                      <li key={i} className="text-muted flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Skills */}
          <RevealOnScroll delay={0.4}>
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-amber-500 rounded-full" />
                Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-surface">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Finance & Analysis</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.finance.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Technology & Strategy</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.technology.map((skill) => (
                      <Badge key={skill} variant="accent">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Creative</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.creative.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Tools & Software</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Awards */}
          <RevealOnScroll delay={0.5}>
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                Awards & Recognition
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/10 text-center"
                  >
                    <p className="text-2xl mb-2">🏆</p>
                    <p className="font-semibold text-foreground">{award.title}</p>
                    <p className="text-sm text-muted">{award.event}</p>
                    <p className="text-xs text-muted-foreground mt-1">{award.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Download CTA */}
          <RevealOnScroll delay={0.6}>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-pink-500/10 border border-blue-500/10">
              <p className="text-muted mb-4">
                Want a PDF copy of my resume?
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/25">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>
    </PageWrapper>
  );
}
