"use client"

import { Download, Globe } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { useLanguage } from "../app/contexts/LanguageContext"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 right-0 left-0 z-50 flex w-full flex-row items-center justify-center transition-all duration-300 ${
        scrolled
          ? "border-border/50 border-b bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full px-6 py-4">
        <div className="flex items-center justify-between p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-semibold text-xl tracking-tight"
          >
            Portfolio
          </motion.div>

          <div className="hidden items-center gap-8 md:flex">
            {["about", "skills", "projects", "experience", "contact"].map(
              (item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => scrollToSection(item)}
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  {t(`nav.${item}`)}
                </motion.button>
              ),
            )}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-1.5 text-sm transition-colors hover:bg-secondary"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "PT" : "EN"}
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground text-sm transition-colors hover:bg-primary/90 md:flex"
            >
              <Download className="h-4 w-4" />
              {t("nav.resume")}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
