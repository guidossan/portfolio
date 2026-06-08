"use client"

import { Code2, Target, Users, Zap } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "../app/contexts/LanguageContext"

export function About() {
  const { t } = useLanguage()

  const stats = [
    { label: t("about.years"), value: "5+", icon: Code2 },
    { label: t("about.projects"), value: "30+", icon: Target },
    { label: t("about.technologies"), value: "20+", icon: Zap },
    { label: t("about.clients"), value: "15+", icon: Users },
  ]

  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/10 to-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl lg:text-5xl">{t("about.title")}</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-linear-to-r from-violet-500 to-blue-500" />
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.p2")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.p3")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-violet-500/20 to-blue-500/20 blur-xl transition-all group-hover:blur-2xl" />
                  <div className="relative rounded-2xl border border-border/50 bg-card p-6 backdrop-blur-sm transition-all hover:border-violet-500/50">
                    <Icon className="mb-4 h-8 w-8 text-violet-500" />
                    <div className="mb-2 font-semibold text-3xl">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
