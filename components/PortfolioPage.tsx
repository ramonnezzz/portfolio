"use client";

import {
  ArrowDownRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ServerCog
} from "lucide-react";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/Section";
import {
  contactLinks,
  education,
  experience,
  heroSignals,
  profile,
  projects,
  quickStats,
  specialties
} from "@/data/portfolio";

export function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <Header />

      <section id="home" className="relative min-h-screen scroll-mt-24 overflow-hidden pt-28">
        <div className="absolute inset-0 bg-tech-grid bg-[length:42px_42px] opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(54,215,255,0.17),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(113,245,182,0.12),transparent_28%),linear-gradient(180deg,rgba(7,16,19,0.15),#071013_88%)]" aria-hidden="true" />

        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 pb-14 lg:grid-cols-[1.06fr_0.94fr] lg:px-8">
          <ScrollReveal>
            <p className="mb-5 inline-flex items-center gap-2 border border-line bg-white/[0.03] px-3 py-2 font-mono text-xs uppercase tracking-[0.22em] text-mint">
              <MapPin aria-hidden="true" size={14} />
              {profile.location}
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-cyan sm:text-xl">{profile.headline}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">{profile.summary}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a className="btn-primary" href="#projetos">
                Ver Projetos <ArrowDownRight aria-hidden="true" size={18} />
              </a>
              <a className="btn-secondary" href="#contato">
                Entrar em Contato <Mail aria-hidden="true" size={18} />
              </a>
              <a className="btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <Github aria-hidden="true" size={18} />
              </a>
              <a className="btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Linkedin aria-hidden="true" size={18} />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className="relative">
            <div className="relative border border-line bg-panel/86 p-4 shadow-glow backdrop-blur">
              <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
                  <span className="h-3 w-3 rounded-full bg-mint" />
                </div>
                <span className="font-mono text-xs text-slate-400">savio@infra:~</span>
              </div>
              <div className="space-y-4 font-mono text-sm leading-7 text-slate-200">
                <p><span className="text-mint">$</span> status --perfil</p>
                <p className="text-slate-400">foco: suporte avançado, redes, linux, automação</p>
                <p><span className="text-mint">$</span> monitor --ambiente corporativo</p>
                <p className="text-slate-400">ativos online: servidores, impressoras, estações, usuários</p>
                <p><span className="text-mint">$</span> deploy --aprendizado-continuo</p>
                <p className="text-cyan">pipeline: infra → documentação → automação → melhoria contínua</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quickStats.map((stat) => (
                <div key={stat.label} className="border border-line bg-white/[0.035] p-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3">
              {heroSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.label} className="flex items-center gap-3 border border-line bg-white/[0.03] px-4 py-3">
                    <Icon aria-hidden="true" className="text-cyan" size={18} />
                    <span className="text-sm text-slate-300">{signal.label}</span>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Section
        id="especialidades"
        eyebrow="// especialidades"
        title="Base técnica para manter ambientes funcionando."
        description="Competências voltadas a operação, suporte, diagnóstico e evolução de infraestrutura em ambientes reais."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={Math.min(index * 0.025, 0.18)}>
                <article className="group h-full border border-line bg-panel/64 p-5 transition hover:-translate-y-1 hover:border-cyan/60 hover:bg-panel">
                  <Icon aria-hidden="true" className="mb-5 text-cyan transition group-hover:text-mint" size={24} />
                  <h3 className="text-base font-semibold leading-7 text-white">{item.title}</h3>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      <Section
        id="projetos"
        eyebrow="// projetos"
        title="Projetos com cara de operação: monitorar, registrar e manter."
        description="Experimentos e aplicações alinhados ao caminho de infraestrutura, suporte avançado e automação."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.08}>
              <article className="flex h-full flex-col border border-line bg-panel/70 p-6 transition hover:-translate-y-1 hover:border-mint/60">
                <div className="mb-8 flex h-12 w-12 items-center justify-center border border-cyan/30 bg-cyan/10 text-cyan">
                  <ServerCog aria-hidden="true" size={24} />
                </div>
                <h3 className="font-display text-2xl font-semibold leading-8 text-white">{project.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border border-line px-2.5 py-1 font-mono text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-mint" href="#" aria-label={`Ver detalhes do projeto ${project.name}`}>
                  Ver detalhes <ExternalLink aria-hidden="true" size={16} />
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section id="experiencia" eyebrow="// experiência" title="Experiência em suporte e campo técnico.">
        <ScrollReveal>
          <article className="relative border border-line bg-panel/72 p-6 sm:p-8">
            <div className="absolute left-8 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-cyan via-line to-transparent sm:block" aria-hidden="true" />
            <div className="sm:pl-12">
              <p className="font-mono text-sm text-mint">{experience.period}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">{experience.role}</h3>
              <p className="mt-2 text-slate-300">{experience.company} - {experience.location}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {experience.activities.map((activity) => (
                  <li key={activity} className="border border-line bg-white/[0.025] px-4 py-3 text-sm leading-6 text-slate-300">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </ScrollReveal>
      </Section>

      <Section id="formacao" eyebrow="// formação" title="Ciência da Computação e estudos de infraestrutura.">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <ScrollReveal>
            <article className="h-full border border-line bg-panel/70 p-6">
              <p className="font-mono text-sm text-mint">{education.period}</p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-white">{education.course}</h3>
              <p className="mt-3 text-slate-300">{education.institution}</p>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <article className="h-full border border-line bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">Cursos e estudos complementares</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {education.studies.map((study) => (
                  <span key={study} className="border border-line bg-panel/60 px-3 py-2 text-sm text-slate-300">
                    {study}
                  </span>
                ))}
              </div>
            </article>
          </ScrollReveal>
        </div>
      </Section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="border-l-2 border-cyan bg-white/[0.03] px-6 py-8 sm:px-8">
              <p className="mb-3 font-mono text-sm uppercase tracking-[0.22em] text-mint">
                {"// objetivo profissional"}
              </p>
              <p className="max-w-5xl font-display text-2xl font-semibold leading-10 text-white">{profile.objective}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Section
        id="contato"
        eyebrow="// contato"
        title="Vamos conversar?"
        description="Aberto a oportunidades, networking, projetos e vagas relacionadas a infraestrutura, suporte técnico, redes e DevOps Jr."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr]">
          <ScrollReveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group border border-line bg-panel/70 p-5 transition hover:border-cyan/70 hover:bg-panel focus:outline-none focus:ring-2 focus:ring-cyan"
                  >
                    <Icon aria-hidden="true" className="text-cyan transition group-hover:text-mint" size={22} />
                    <p className="mt-5 text-sm text-slate-400">{link.label}</p>
                    <p className="mt-1 break-words text-sm font-semibold text-white">{link.value}</p>
                  </a>
                );
              })}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="flex h-full flex-col justify-between border border-line bg-panel/70 p-6">
              <div>
                <p className="font-mono text-sm text-mint">/public/curriculo.pdf</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">Currículo pronto para envio</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Link preparado para baixar o PDF do currículo diretamente pelo site.
                </p>
              </div>
              <a className="btn-primary mt-8 w-full justify-center" href="/curriculo.pdf" download>
                Baixar currículo <Download aria-hidden="true" size={18} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026. Sávio Ramon Lima Nogueira.</p>
          <a className="text-slate-400 transition hover:text-cyan" href="#home">Voltar ao topo</a>
        </div>
      </footer>
    </main>
  );
}
