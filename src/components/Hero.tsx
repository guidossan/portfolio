"use client"

import { ArrowRight, FolderGit2, Link, Mail } from "lucide-react"
import { motion } from "motion/react"
import { FaWhatsapp } from "react-icons/fa6"
import { useLanguage } from "../app/contexts/LanguageContext"
import { ProfilePhoto } from "./ProfilePhoto"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 via-background to-blue-500/10" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-60 w-60 rounded-full bg-violet-500/10" />
        <div className="absolute right-1/4 bottom-1/4 h-60 w-60 rounded-full bg-blue-500/10" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-32 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {[
              t("hero.badge1"),
              t("hero.badge2"),
              t("hero.badge3"),
              t("hero.badge4"),
            ].map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-xs backdrop-blur-sm"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl leading-tight tracking-tight lg:text-6xl xl:text-7xl"
          >
            {t("hero.headline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl text-lg text-muted-foreground"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-all hover:gap-3 hover:bg-primary/90"
            >
              {t("hero.cta.projects")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-lg bg-secondary px-6 py-3 transition-colors hover:bg-secondary/80"
            >
              {t("hero.cta.contact")}
            </button>
          </motion.div>

          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="https://wa.me/5541935008281?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20entrar%20em%20contato%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-card transition-all hover:border-violet-500/50"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p>WhatsApp</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="https://github.com/guidossan"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-card transition-all hover:border-violet-500/50"
                >
                  <FolderGit2 className="h-5 w-5" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="https://www.linkedin.com/in/guilherme-martins-lorenzini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-card transition-all hover:border-violet-500/50"
                >
                  <Link className="h-5 w-5" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="mailto:guimsl2004@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-card transition-all hover:border-violet-500/50"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <ProfilePhoto />
      </div>
    </section>
  )
}
