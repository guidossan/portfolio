"use client"

import { FolderGit2, Heart, Link, Mail } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "../app/contexts/LanguageContext"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-border/50 border-t py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="mb-2 font-semibold text-xl">Portfolio</div>
            <p className="max-w-md text-muted-foreground text-sm">
              {t("footer.tagline")}
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="https://github.com/guidossan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-secondary/50 p-2 transition-colors hover:bg-secondary"
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
                  className="rounded-lg bg-secondary/50 p-2 transition-colors hover:bg-secondary"
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
                  className="rounded-lg bg-secondary/50 p-2 transition-colors hover:bg-secondary"
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 border-border/50 border-t pt-8 text-center"
        >
          <p className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            © {currentYear} Portfolio. {t("footer.rights")}.
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" />{" "}
              in Brazil
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
