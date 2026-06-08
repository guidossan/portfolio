"use client"

import { motion } from "motion/react"
import { useLanguage } from "../app/contexts/LanguageContext"

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.frontend"),
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Vue.js",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: t("skills.backend"),
      skills: [
        "Node.js",
        "Express",
        "Python",
        "FastAPI",
        "REST APIs",
        "GraphQL",
      ],
      gradient: "from-violet-500/20 to-purple-500/20",
    },
    {
      title: t("skills.databases"),
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Firebase",
        "Supabase",
        "MySQL",
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: t("skills.cloud"),
      skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux", "Nginx"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: t("skills.tools"),
      skills: ["Git", "VS Code", "Postman", "Figma", "Webpack", "Vite"],
      gradient: "from-pink-500/20 to-rose-500/20",
    },
    {
      title: t("skills.uiux"),
      skills: [
        "Responsive Design",
        "Accessibility",
        "Design Systems",
        "Animations",
        "Prototyping",
        "User Testing",
      ],
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
  ]

  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl lg:text-5xl">{t("skills.title")}</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-linear-to-r from-violet-500 to-blue-500" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${category.gradient} rounded-2xl opacity-50 blur-xl transition-all group-hover:blur-2xl`}
              />
              <div className="relative h-full rounded-2xl border border-border/50 bg-card p-6 backdrop-blur-sm transition-all hover:border-violet-500/50">
                <h3 className="mb-4 text-xl">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border/50 bg-secondary/50 px-3 py-1.5 text-sm transition-colors hover:border-violet-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
