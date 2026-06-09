"use client"

import { Download, Globe } from "lucide-react"
import { useLanguage } from "../app/contexts/LanguageContext"

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex w-full flex-row items-center justify-center border-border/40 border-b bg-background/95">
      <div className="mx-auto w-full py-4">
        <div className="flex items-center justify-between py-10">
          <div className="font-semibold text-xl tracking-tight">Portfolio</div>

          <div className="hidden items-center gap-8 md:flex">
            {["about", "skills", "projects", "experience", "contact"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollToSection(item)}
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  {t(`nav.${item}`)}
                </button>
              ),
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-1.5 text-sm transition-colors hover:bg-secondary"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "PT" : "EN"}
            </button>

            <button
              type="button"
              className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground text-sm transition-colors hover:bg-primary/90 md:flex"
            >
              <Download className="h-4 w-4" />
              {t("nav.resume")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
