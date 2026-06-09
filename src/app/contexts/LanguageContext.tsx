"use client"

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

type Language = "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero
    "hero.badge1": "Fullstack Developer",
    "hero.badge2": "Freelance Available",
    "hero.badge3": "Remote Ready",
    "hero.badge4": "Open to International Opportunities",
    "hero.headline":
      "Building modern web experiences with performance, scalability and clean design",
    "hero.description":
      "Brazilian software developer focused on modern web applications, SaaS platforms, automation and scalable digital products.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact Me",
    "hero.cta.resume": "Download Resume",

    // About
    "about.title": "About Me",
    "about.p1":
      "I'm a passionate fullstack developer with a strong focus on building high-performance web applications that deliver exceptional user experiences. My expertise spans the entire development lifecycle, from designing elegant interfaces to architecting scalable backend systems.",
    "about.p2":
      "With experience in modern JavaScript frameworks, cloud infrastructure, and database design, I bring a comprehensive approach to software development. I thrive in fast-paced environments and enjoy tackling complex technical challenges.",
    "about.p3":
      "Whether working independently on freelance projects or collaborating with international teams, I maintain a product-focused mindset and prioritize clean, maintainable code. I'm always eager to learn new technologies and apply them to create innovative solutions.",
    "about.years": "Years Experience",
    "about.projects": "Projects Completed",
    "about.technologies": "Technologies",
    "about.clients": "Satisfied Clients",

    // Skills
    "skills.title": "Technical Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.databases": "Databases",
    "skills.cloud": "Cloud & DevOps",
    "skills.tools": "Tools & Platforms",
    "skills.uiux": "UI/UX",

    // Projects
    "projects.title": "Featured Projects",
    "projects.viewGithub": "View on GitHub",
    "projects.viewDemo": "Live Demo",
    "projects.features": "Key Features",
    "projects.challenges": "Challenges Solved",

    // Project 1 - TaskFlow
    "project1.name": "TaskFlow",
    "project1.tagline": "Modern Task Management Platform",
    "project1.description":
      "A comprehensive SaaS application for team productivity and project management. Features real-time collaboration, advanced analytics, and an intuitive drag-and-drop interface.",
    "project1.feature1": "Real-time collaborative task boards",
    "project1.feature2": "Advanced analytics and reporting",
    "project1.feature3": "Drag-and-drop interface with keyboard shortcuts",
    "project1.feature4": "Team management and permissions",
    "project1.challenge1":
      "Implemented optimistic UI updates for seamless real-time collaboration",
    "project1.challenge2":
      "Built custom data visualization dashboard with complex filtering",
    "project1.challenge3":
      "Designed scalable database schema for multi-tenant architecture",

    // Project 2 - Commerce Hub
    "project2.name": "Commerce Hub",
    "project2.tagline": "E-commerce Integration Platform",
    "project2.description":
      "A powerful automation platform that connects multiple e-commerce channels, inventory management, and shipping providers. Helps businesses scale their online operations.",
    "project2.feature1": "Multi-channel inventory synchronization",
    "project2.feature2": "Automated order processing and fulfillment",
    "project2.feature3": "Real-time shipping and tracking integration",
    "project2.feature4": "Custom reporting and analytics",
    "project2.challenge1":
      "Designed fault-tolerant sync engine handling 10k+ products",
    "project2.challenge2": "Built webhook system for real-time order updates",
    "project2.challenge3":
      "Implemented caching strategy reducing API calls by 80%",

    // Project 3 - Analytics Pro
    "project3.name": "Analytics Pro",
    "project3.tagline": "Business Intelligence Dashboard",
    "project3.description":
      "A modern analytics platform that transforms complex business data into actionable insights. Features customizable dashboards, automated reports, and predictive analytics.",
    "project3.feature1": "Customizable dashboard builder",
    "project3.feature2": "Automated report generation and scheduling",
    "project3.feature3": "Real-time data streaming and updates",
    "project3.feature4": "Export to multiple formats (PDF, Excel, CSV)",
    "project3.challenge1":
      "Optimized queries to handle millions of records efficiently",
    "project3.challenge2":
      "Created flexible charting system with 15+ visualization types",
    "project3.challenge3":
      "Implemented role-based access control for enterprise clients",

    // Experience
    "experience.title": "Work Approach",
    "experience.subtitle": "How I deliver value",
    "experience.metric1": "Projects Delivered",
    "experience.metric2": "Technologies Mastered",
    "experience.metric3": "UI Components Built",
    "experience.metric4": "Automation Solutions",
    "experience.approach1.title": "Product-Oriented Thinking",
    "experience.approach1.desc":
      "I don't just write code—I build products that solve real problems. Every technical decision is made with the end-user experience and business goals in mind.",
    "experience.approach2.title": "Performance & Scalability",
    "experience.approach2.desc":
      "From optimizing database queries to implementing efficient caching strategies, I ensure applications perform well under load and scale gracefully as they grow.",
    "experience.approach3.title": "Clean Architecture",
    "experience.approach3.desc":
      "I believe in writing maintainable, well-documented code. Clear component structure, consistent patterns, and comprehensive testing make future iterations faster.",
    "experience.approach4.title": "Continuous Learning",
    "experience.approach4.desc":
      "Technology evolves rapidly. I stay current with industry trends, experiment with new tools, and constantly refine my development practices.",

    // Contact
    "contact.title": "Let's Work Together",
    "contact.subtitle":
      "Looking for a developer for your next project or team?",
    "contact.description":
      "I'm available for freelance projects, full-time positions, and consulting opportunities. Whether you're building a new product or scaling an existing platform, I'd love to help.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.availability": "Availability",
    "contact.location.value": "Brazil",
    "contact.availability.value": "Open for opportunities",

    // Footer
    "footer.tagline": "Building the future, one line of code at a time",
    "footer.rights": "All rights reserved",
  },
  pt: {
    // Navbar
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.contact": "Contato",
    "nav.resume": "Currículo",

    // Hero
    "hero.badge1": "Desenvolvedor Fullstack",
    "hero.badge2": "Disponível para Freelance",
    "hero.badge3": "Trabalho Remoto",
    "hero.badge4": "Aberto a Oportunidades Internacionais",
    "hero.headline":
      "Construindo experiências web modernas com performance, escalabilidade e design limpo",
    "hero.description":
      "Desenvolvedor de software brasileiro focado em aplicações web modernas, plataformas SaaS, automação e produtos digitais escaláveis.",
    "hero.cta.projects": "Ver Projetos",
    "hero.cta.contact": "Entre em Contato",
    "hero.cta.resume": "Baixar Currículo",

    // About
    "about.title": "Sobre Mim",
    "about.p1":
      "Sou um desenvolvedor fullstack apaixonado com forte foco em construir aplicações web de alta performance que entregam experiências excepcionais ao usuário. Minha expertise abrange todo o ciclo de desenvolvimento, desde o design de interfaces elegantes até a arquitetura de sistemas backend escaláveis.",
    "about.p2":
      "Com experiência em frameworks JavaScript modernos, infraestrutura cloud e design de banco de dados, trago uma abordagem abrangente ao desenvolvimento de software. Prospero em ambientes dinâmicos e gosto de enfrentar desafios técnicos complexos.",
    "about.p3":
      "Seja trabalhando de forma independente em projetos freelance ou colaborando com equipes internacionais, mantenho uma mentalidade focada no produto e priorizo código limpo e manutenível. Estou sempre ansioso para aprender novas tecnologias e aplicá-las para criar soluções inovadoras.",
    "about.years": "Anos de Experiência",
    "about.projects": "Projetos Concluídos",
    "about.technologies": "Tecnologias",
    "about.clients": "Clientes Satisfeitos",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.databases": "Bancos de Dados",
    "skills.cloud": "Cloud & DevOps",
    "skills.tools": "Ferramentas e Plataformas",
    "skills.uiux": "UI/UX",

    // Projects
    "projects.title": "Projetos em Destaque",
    "projects.viewGithub": "Ver no GitHub",
    "projects.viewDemo": "Demo ao Vivo",
    "projects.features": "Recursos Principais",
    "projects.challenges": "Desafios Resolvidos",

    // Project 1 - TaskFlow
    "project1.name": "TaskFlow",
    "project1.tagline": "Plataforma Moderna de Gestão de Tarefas",
    "project1.description":
      "Uma aplicação SaaS completa para produtividade em equipe e gestão de projetos. Apresenta colaboração em tempo real, análises avançadas e uma interface intuitiva de arrastar e soltar.",
    "project1.feature1": "Quadros de tarefas colaborativos em tempo real",
    "project1.feature2": "Análises e relatórios avançados",
    "project1.feature3": "Interface arrastar e soltar com atalhos de teclado",
    "project1.feature4": "Gestão de equipe e permissões",
    "project1.challenge1":
      "Implementei atualizações otimistas de UI para colaboração em tempo real sem interrupções",
    "project1.challenge2":
      "Construí dashboard de visualização de dados personalizado com filtragem complexa",
    "project1.challenge3":
      "Projetei esquema de banco de dados escalável para arquitetura multi-tenant",

    // Project 2 - Commerce Hub
    "project2.name": "Commerce Hub",
    "project2.tagline": "Plataforma de Integração E-commerce",
    "project2.description":
      "Uma plataforma de automação poderosa que conecta múltiplos canais de e-commerce, gestão de inventário e provedores de envio. Ajuda empresas a escalar suas operações online.",
    "project2.feature1": "Sincronização de inventário multi-canal",
    "project2.feature2": "Processamento e fulfillment automatizado de pedidos",
    "project2.feature3": "Integração de envio e rastreamento em tempo real",
    "project2.feature4": "Relatórios e análises personalizadas",
    "project2.challenge1":
      "Projetei motor de sincronização tolerante a falhas gerenciando mais de 10 mil produtos",
    "project2.challenge2":
      "Construí sistema de webhooks para atualizações de pedidos em tempo real",
    "project2.challenge3":
      "Implementei estratégia de cache reduzindo chamadas de API em 80%",

    // Project 3 - Analytics Pro
    "project3.name": "Analytics Pro",
    "project3.tagline": "Dashboard de Business Intelligence",
    "project3.description":
      "Uma plataforma de análise moderna que transforma dados de negócios complexos em insights acionáveis. Apresenta dashboards customizáveis, relatórios automatizados e análise preditiva.",
    "project3.feature1": "Construtor de dashboard customizável",
    "project3.feature2": "Geração e agendamento automatizado de relatórios",
    "project3.feature3": "Streaming e atualizações de dados em tempo real",
    "project3.feature4": "Exportação para múltiplos formatos (PDF, Excel, CSV)",
    "project3.challenge1":
      "Otimizei consultas para lidar eficientemente com milhões de registros",
    "project3.challenge2":
      "Criei sistema de gráficos flexível com mais de 15 tipos de visualização",
    "project3.challenge3":
      "Implementei controle de acesso baseado em funções para clientes empresariais",

    // Experience
    "experience.title": "Abordagem de Trabalho",
    "experience.subtitle": "Como eu entrego valor",
    "experience.metric1": "Projetos Entregues",
    "experience.metric2": "Tecnologias Dominadas",
    "experience.metric3": "Componentes UI Criados",
    "experience.metric4": "Soluções de Automação",
    "experience.approach1.title": "Pensamento Orientado a Produto",
    "experience.approach1.desc":
      "Não apenas escrevo código—construo produtos que resolvem problemas reais. Cada decisão técnica é tomada tendo em mente a experiência do usuário final e objetivos de negócio.",
    "experience.approach2.title": "Performance e Escalabilidade",
    "experience.approach2.desc":
      "Desde otimizar consultas de banco de dados até implementar estratégias eficientes de cache, garanto que aplicações performem bem sob carga e escalem graciosamente conforme crescem.",
    "experience.approach3.title": "Arquitetura Limpa",
    "experience.approach3.desc":
      "Acredito em escrever código manutenível e bem documentado. Estrutura de componentes clara, padrões consistentes e testes abrangentes tornam iterações futuras mais rápidas.",
    "experience.approach4.title": "Aprendizado Contínuo",
    "experience.approach4.desc":
      "A tecnologia evolui rapidamente. Mantenho-me atualizado com tendências da indústria, experimento com novas ferramentas e refino constantemente minhas práticas de desenvolvimento.",

    // Contact
    "contact.title": "Vamos Trabalhar Juntos",
    "contact.subtitle":
      "Procurando um desenvolvedor para seu próximo projeto ou equipe?",
    "contact.description":
      "Estou disponível para projetos freelance, posições full-time e oportunidades de consultoria. Seja construindo um novo produto ou escalando uma plataforma existente, adoraria ajudar.",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",
    "contact.email": "Email",
    "contact.location": "Localização",
    "contact.availability": "Disponibilidade",
    "contact.location.value": "Brasil",
    "contact.availability.value": "Aberto a oportunidades",

    // Footer
    "footer.tagline": "Construindo o futuro, uma linha de código por vez",
    "footer.rights": "Todos os direitos reservados",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] ?? key
    },
    [language],
  )

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
