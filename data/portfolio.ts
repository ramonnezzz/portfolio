import {
  BriefcaseBusiness,
  Building2,
  Code2,
  Container,
  FileText,
  Github,
  GraduationCap,
  HardDrive,
  Linkedin,
  Mail,
  MonitorCheck,
  Network,
  Phone,
  Router,
  ScrollText,
  Server,
  ShieldCheck,
  Terminal,
  UsersRound,
  Wrench
} from "lucide-react";

export const profile = {
  name: "Sávio Ramon Lima Nogueira",
  shortName: "Sávio Ramon",
  location: "Palmas/TO",
  headline:
    "Estudante de Ciência da Computação | Infraestrutura | Redes | Linux | DevOps Jr",
  summary:
    "Profissional de TI com experiência em suporte técnico, infraestrutura, redes, manutenção de equipamentos e resolução de problemas em ambientes corporativos. Atua com Windows, Linux, servidores, impressoras em rede, documentação e suporte presencial/remoto.",
  objective:
    "Atuar como Analista de Infraestrutura, Analista de Suporte N2/N3, Analista de Redes ou DevOps Jr, contribuindo com suporte técnico avançado, organização de ambientes, automação de rotinas, monitoramento, segurança e melhoria contínua da infraestrutura de TI.",
  email: "savioramonnogueira@gmail.com",
  phone: "63 99265-9344",
  linkedin: "https://www.linkedin.com/in/sávio-ramon/",
  github: "https://github.com/ramonnezzz"
};

export const navItems = [
  { label: "// home", href: "#home" },
  { label: "// especialidades", href: "#especialidades" },
  { label: "// projetos", href: "#projetos" },
  { label: "// experiência", href: "#experiencia" },
  { label: "// formação", href: "#formacao" },
  { label: "// contato", href: "#contato" }
];

export const specialties = [
  { title: "Suporte Técnico N1/N2/N3", icon: MonitorCheck },
  { title: "Infraestrutura de TI", icon: Server },
  { title: "Redes TCP/IP, DHCP, DNS, roteadores, switches e Wi-Fi corporativo", icon: Network },
  { title: "Linux: terminal, permissões, serviços, logs, SSH, systemd e administração básica", icon: Terminal },
  { title: "Windows e Windows Server", icon: HardDrive },
  { title: "Active Directory, usuários, permissões e compartilhamentos", icon: UsersRound },
  { title: "Impressoras corporativas e servidores de impressão", icon: Router },
  { title: "Docker e containers", icon: Container },
  { title: "Git e GitHub", icon: Github },
  { title: "Bash e Python para automações", icon: Code2 },
  { title: "Monitoramento de ativos, redes e equipamentos", icon: MonitorCheck },
  { title: "Segurança básica em ambientes corporativos", icon: ShieldCheck },
  { title: "Documentação técnica e procedimentos operacionais", icon: ScrollText }
];

export const projects = [
  {
    name: "Monitoramento Local de Impressoras e Rede",
    description:
      "Projeto pessoal para descoberta e monitoramento de impressoras em rede, usando Python/Django, scripts de varredura, SNMP e interface web local.",
    technologies: ["Python", "Django", "Linux", "SNMP", "redes TCP/IP", "Bash"]
  },
  {
    name: "Sistema de Ordens de Serviço e Orçamentos",
    description:
      "Aplicação para controle de ordens de serviço, clientes, orçamentos, status de atendimento e geração de documentos técnicos.",
    technologies: ["React", "TypeScript", "Node.js", "Git", "GitHub"]
  },
  {
    name: "Ambientes Linux e Servidores Locais",
    description:
      "Configuração e manutenção de ambientes Linux para estudo e uso pessoal, incluindo serviços, permissões, rede, compartilhamentos, containers e servidores locais.",
    technologies: ["Linux", "SSH", "Samba", "Docker", "firewall", "terminal"]
  }
];

export const experience = {
  role: "Técnico de TI / Suporte Técnico",
  company: "Imprime Mais",
  location: "Palmas/TO",
  period: "03/2023 - atual",
  activities: [
    "Atendimento técnico a clientes corporativos",
    "Suporte, manutenção e resolução de problemas em campo",
    "Diagnóstico de falhas em equipamentos, redes, impressoras e ambientes de impressão corporativa",
    "Configuração de impressoras em rede, compartilhamentos, drivers, usuários e permissões",
    "Suporte a ambientes Windows e Linux",
    "Instalação de sistemas, correção de falhas e configuração de serviços",
    "Apoio na organização de infraestrutura de clientes",
    "Identificação de problemas recorrentes e proposta de soluções técnicas",
    "Elaboração de orientações técnicas, procedimentos e registros",
    "Troubleshooting em múltiplos cenários e clientes"
  ]
};

export const education = {
  course: "Ciência da Computação",
  institution: "CEULP/ULBRA",
  period: "2022 - 2027, previsão de conclusão",
  studies: [
    "Redes de Computadores / Cisco Networking",
    "Linux para administração de sistemas",
    "Fundamentos de DevOps",
    "Docker e containers",
    "Git e GitHub",
    "Segurança básica em infraestrutura",
    "Administração de Windows e Linux"
  ]
};

export const quickStats = [
  { label: "Foco", value: "Infra + Redes" },
  { label: "Base", value: "Linux / Windows" },
  { label: "Rotina", value: "Suporte N2/N3" },
  { label: "Caminho", value: "DevOps Jr" }
];

export const contactLinks = [
  { label: "E-mail", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Telefone", value: profile.phone, href: "tel:+5563992659344", icon: Phone },
  { label: "LinkedIn", value: "linkedin.com/in/sávio-ramon", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "github.com/ramonnezzz", href: profile.github, icon: Github }
];

export const heroSignals = [
  { icon: Building2, label: "infraestrutura organizada" },
  { icon: Wrench, label: "troubleshooting em campo" },
  { icon: BriefcaseBusiness, label: "ambientes corporativos" },
  { icon: FileText, label: "documentação técnica" },
  { icon: GraduationCap, label: "Ciência da Computação" }
];
