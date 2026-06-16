"use client"

import { Code, Rocket, TrendingUp, Zap } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "../app/contexts/LanguageContext"

export function Experience() {
  const { t } = useLanguage()

  const metrics = [
    { label: t("experience.metric1"), value: "5+" },
    { label: t("experience.metric2"), value: "20+" },
    { label: t("experience.metric3"), value: "150+" },
    { label: t("experience.metric4"), value: "3+" },
  ]

  const approaches = [
    {
      icon: Rocket,
      title: t("experience.approach1.title"),
      description: t("experience.approach1.desc"),
      linear: "from-violet-500/20 to-purple-500/20",
    },
    {
      icon: Zap,
      title: t("experience.approach2.title"),
      description: t("experience.approach2.desc"),
      linear: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Code,
      title: t("experience.approach3.title"),
      description: t("experience.approach3.desc"),
      linear: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: TrendingUp,
      title: t("experience.approach4.title"),
      description: t("experience.approach4.desc"),
      linear: "from-orange-500/20 to-red-500/20",
    },
  ]

  return (
    <section id="experience" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/10 to-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl lg:text-5xl">{t("experience.title")}</h2>
          <p className="mb-6 text-muted-foreground text-xl">
            {t("experience.subtitle")}
          </p>
          <div className="mx-auto h-1 w-20 rounded-full bg-linear-to-r from-violet-500 to-blue-500" />
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-border/50 bg-card p-6 text-center backdrop-blur-sm transition-all hover:border-violet-500/50"
            >
              <div className="mb-2 bg-linear-to-r from-violet-500 to-blue-500 bg-clip-text font-semibold text-4xl text-transparent lg:text-5xl">
                {metric.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Approaches */}
        <div className="grid gap-6 md:grid-cols-2">
          {approaches.map((approach, index) => {
            const Icon = approach.icon
            return (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${approach.linear} rounded-2xl opacity-50 blur-lg transition-all group-hover:blur-xl`}
                />
                <div className="relative h-full rounded-2xl border border-border/50 bg-card p-8 backdrop-blur-sm transition-all hover:border-violet-500/50">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-violet-500/20 to-blue-500/20">
                    <Icon className="h-6 w-6 text-violet-500" />
                  </div>
                  <h3 className="mb-3 text-xl">{approach.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
