"use client"

import { CheckCircle2, ExternalLink, FolderGit2, Lightbulb } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import { useLanguage } from "../app/contexts/LanguageContext"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      id: "project1",
      name: t("project1.name"),
      tagline: t("project1.tagline"),
      description: t("project1.description"),
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkYXJrJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3OTE0OTIwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Angular", "TypeScript", "Node.js", "Tailwind CSS"],
      features: [
        t("project1.feature1"),
        t("project1.feature2"),
        t("project1.feature3"),
      ],
      challenges: [
        t("project1.challenge1"),
        t("project1.challenge2"),
        t("project1.challenge3"),
      ],
      linear: "from-violet-500/30 to-purple-500/30",
      viewDemoLink: "https://lorenzinitech-listatarefas.vercel.app/",
      viewGithubLink: "https://github.com/guidossan/listaDeTarefas",
    },
    {
      id: "project2",
      name: t("project2.name"),
      tagline: t("project2.tagline"),
      description: t("project2.description"),
      image:
        "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkYXJrJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3OTE0OTIwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["React", "Next.js", "PostgreSQL", "Java", "Docker"],
      features: [
        t("project2.feature1"),
        t("project2.feature2"),
        t("project2.feature3"),
      ],
      challenges: [
        t("project2.challenge1"),
        t("project2.challenge2"),
        t("project2.challenge3"),
      ],
      linear: "from-blue-500/30 to-cyan-500/30",
      viewGithubLink: "https://github.com/guidossan/repo-imgs",
    },
  ]

  return (
    <section id="projects" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-linear-to-b from-background via-violet-500/5 to-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl lg:text-5xl">{t("projects.title")}</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-linear-to-r from-violet-500 to-blue-500" />
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Project Image/Mockup */}
              <div
                className={`group relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.linear} rounded-3xl blur-lg transition-all group-hover:blur-xl`}
                />
                <div className="relative overflow-hidden rounded-2xl border border-border/50 transition-all group-hover:border-violet-500/50">
                  <div className="relative aspect-video">
                    <Image
                      width={150}
                      height={100}
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
                  </div>

                  {/* Floating UI Elements */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="rounded-lg border border-border/50 bg-background/80 px-3 py-1.5 text-sm backdrop-blur-sm"
                    >
                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                        Live
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                <div>
                  <div className="mb-2 text-sm text-violet-500">
                    {project.tagline}
                  </div>
                  <h3 className="mb-4 text-3xl lg:text-4xl">{project.name}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border/50 bg-secondary/50 px-3 py-1.5 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <h4 className="text-lg">{t("projects.features")}</h4>
                    </div>
                    <ul className="ml-7 space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-muted-foreground">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-violet-500" />
                      <h4 className="text-lg">{t("projects.challenges")}</h4>
                    </div>
                    <ul className="ml-7 space-y-2">
                      {project.challenges.map((challenge) => (
                        <li key={challenge} className="text-muted-foreground">
                          • {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {project.viewDemoLink && (
                    <motion.a
                      href={project.viewDemoLink}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
                      rel="noopener"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("projects.viewDemo")}
                    </motion.a>
                  )}
                  <motion.a
                    href={project.viewGithubLink}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 transition-colors hover:bg-secondary/80"
                    rel="noopener"
                  >
                    <FolderGit2 className="h-4 w-4" />
                    {t("projects.viewGithub")}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
