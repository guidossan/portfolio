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
    "hero.badge1": "Fullstack Engineer",
    "hero.badge2": "Freelance Available",
    "hero.badge3": "Remote Ready",
    "hero.badge4": "Open to International Opportunities",
    "hero.headline":
      "Building modern web applications with React and TypeScript",
    "hero.description":
      "Software engineer focused on creating scalable interfaces, intuitive user experiences and reliable digital products.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact Me",
    "hero.cta.resume": "Download Resume",

    // About
    "about.title": "About",
    "about.description":
      "Frontend-focused software engineer with professional experience building web applications using React, TypeScript and modern frontend architectures. Background in full stack development with Java, Spring Boot and microservices. Passionate about clean code, performance and creating products that solve real business problems.",
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

    // Projects
    "projects.title": "Featured Projects",
    "projects.viewGithub": "View on GitHub",
    "projects.viewDemo": "Live Demo",
    "projects.features": "Key Features",
    "projects.challenges": "Challenges Solved",

    // Project 1 - TaskFlow
    "project1.name": "TaskFlow",
    "project1.tagline": "Task Management Platform",
    "project1.description":
      "A complete and interactive application for common people. On-device task features, animations, and an intuitive drag-and-drop interface.",
    "project1.feature1": "Real-time collaborative task boards",
    "project1.feature2": "Analysis of completed and pending tasks",
    "project1.feature3": "Clean and intuitive interface",
    "project1.challenge1":
      "Implemented optimistic UI updates for better usability",
    "project1.challenge2": "I built it thinking about everyday practice",
    "project1.challenge3": "I designed it for information to be stored locally",

    // Project 2 - Image Hub
    "project2.name": "Image Hub",
    "project2.tagline": "Image upload platform",
    "project2.description":
      "A simple image upload application with Next.js, Express and MongoDB. Allows users to upload, view and manage their images in a clean interface.",
    "project2.feature1": "Inventory Sync",
    "project2.feature2": "Processing and saving data in database",
    "project2.feature3": "Interface for uploading, viewing and managing images",
    "project2.challenge1":
      "Divided the system into decoupled services for better maintenance",
    "project2.challenge2":
      "Separate systems in Docker containers for easy deployment",
    "project2.challenge3":
      "Users can manage their images with a simple and responsive interface",

    // Experience
    "experience.title": "Professional Experience",
    "experience.subtitle":
      "Technologies and challenges that shaped the way I build software.",
    "experience.metric1": "Projects Delivered",
    "experience.metric2": "Technologies Mastered",
    "experience.metric3": "UI Components Built",
    "experience.metric4": "Automation Solutions",
    "experience.approach1.title": "Enterprise Systems",
    "experience.approach1.desc":
      "Development of integrations, REST APIs and solutions aimed at corporate environments, ensuring reliable communication between systems and processes.",
    "experience.approach2.title": "Frontend Engineering",
    "experience.approach2.desc":
      "Creating modern web applications using React and TypeScript, focusing on reusable components, visual consistency and user experience.",
    "experience.approach3.title": "Full Stack Development",
    "experience.approach3.desc":
      "Experience working on both the frontend and backend, participating in the implementation of complete functionalities and integration between different layers of the application.",
    "experience.approach4.title": "Product Delivery",
    "experience.approach4.desc":
      "Participation in all stages of development, from technical implementation to testing, validation and continuous evolution of digital products.",

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
      "Construindo aplicativos web modernos com React e TypeScript",
    "hero.description":
      "Engenheiro de software focado na criação de interfaces escaláveis, experiências de usuário intuitivas e produtos digitais confiáveis.",
    "hero.cta.projects": "Ver Projetos",
    "hero.cta.contact": "Entre em Contato",
    "hero.cta.resume": "Baixar Currículo",

    // About
    "about.title": "Sobre Mim",
    "about.description":
      "Engenheiro de software focado em frontend com experiência profissional na construção de aplicações web usando React, TypeScript e arquiteturas frontend modernas. Experiência em desenvolvimento full stack com Java, Spring Boot e microsserviços. Apaixonado por código limpo, desempenho e criação de produtos que resolvam problemas reais de negócios.",
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

    // Projects
    "projects.title": "Projetos em Destaque",
    "projects.viewGithub": "Ver no GitHub",
    "projects.viewDemo": "Demo ao Vivo",
    "projects.features": "Recursos Principais",
    "projects.challenges": "Desafios Resolvidos",

    // Project 1 - TaskFlow
    "project1.name": "TaskFlow",
    "project1.tagline": "Plataforma de Gestão de Tarefas",
    "project1.description":
      "Uma aplicação completa e interativa pra pessoas comuns. Apresenta de task no dispositivo, animações e uma interface intuitiva de arrastar e soltar.",
    "project1.feature1": "Quadros de tarefas em tempo real",
    "project1.feature2": "Análises de tarefas concluidas e pendentes",
    "project1.feature3": "Interface clean e intuitiva",
    "project1.challenge1":
      "Implementei atualizações otimistas de UI para melhor usabilidade",
    "project1.challenge2": "Construí pensando na pratica do dia a dia",
    "project1.challenge3":
      "Projetei para informações serem guardadas localmente",

    // Project 2 - Image Hub
    "project2.name": "Image Hub",
    "project2.tagline": "Plataforma de upload de imagens",
    "project2.description":
      "Uma simples aplicação de upload de imagens com Next.js, Express e MongoDB. Permite aos usuários fazer upload, visualizar e gerenciar suas imagens em uma interface limpa.",
    "project2.feature1": "Sincronização de inventário",
    "project2.feature2":
      "Processamento e salvamento de dados em banco de dados",
    "project2.feature3":
      "Interface para upload, visualização e gerenciamento de imagens",
    "project2.challenge1":
      "Dividi o sistema em serviços desacoplados para melhor manutenção",
    "project2.challenge2":
      "Sistemas separados em containers Docker para fácil implantação",
    "project2.challenge3":
      "Usuários podem gerenciar suas imagens com uma interface simples e responsiva",

    // Experience
    "experience.title": "Experiência Profissional",
    "experience.subtitle":
      "Tecnologias e desafios que moldaram minha forma de construir software.",
    "experience.metric1": "Projetos Entregues",
    "experience.metric2": "Tecnologias Dominadas",
    "experience.metric3": "Componentes UI Criados",
    "experience.metric4": "Soluções de Automação",
    "experience.approach1.title": "Sistemas Corporativos",
    "experience.approach1.desc":
      "Desenvolvimento de integrações, APIs REST e soluções voltadas para ambientes corporativos, garantindo comunicação confiável entre sistemas e processos.",

    "experience.approach2.title": "Engenharia Frontend",
    "experience.approach2.desc":
      "Criação de aplicações web modernas utilizando React e TypeScript, com foco em componentes reutilizáveis, consistência visual e experiência do usuário.",

    "experience.approach3.title": "Desenvolvimento Full Stack",
    "experience.approach3.desc":
      "Experiência atuando tanto no frontend quanto no backend, participando da implementação de funcionalidades completas e da integração entre diferentes camadas da aplicação.",

    "experience.approach4.title": "Entrega de Produto",
    "experience.approach4.desc":
      "Participação em todas as etapas do desenvolvimento, desde a implementação técnica até testes, validação e evolução contínua de produtos digitais.",

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
