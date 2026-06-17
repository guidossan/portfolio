"use client"

import emailjs from "emailjs-com"
import {
  CheckCircle2,
  Clock,
  FolderGit2,
  Link,
  Mail,
  MapPin,
  Send,
} from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaWhatsapp } from "react-icons/fa6"
import { toast } from "sonner"
import { getErrorMessage } from "@/lib/error"
import { useLanguage } from "../app/contexts/LanguageContext"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

type ContactFormData = {
  name: string
  email: string
  message: string
}

export function Contact() {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "",
      )
      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      toast.error(getErrorMessage(error), { position: "bottom-center" })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "guimsl2004@gmail.com",
      href: "mailto:guimsl2004@gmail.com",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: t("contact.location.value"),
    },
    {
      icon: Clock,
      label: t("contact.availability"),
      value: t("contact.availability.value"),
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-linear-to-b from-background via-violet-500/5 to-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl lg:text-5xl">{t("contact.title")}</h2>
          <p className="mb-2 text-muted-foreground text-xl">
            {t("contact.subtitle")}
          </p>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
            {t("contact.description")}
          </p>
          <div className="mx-auto h-1 w-20 rounded-full bg-linear-to-r from-violet-500 to-blue-500" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-violet-500/50"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-violet-500/20 to-blue-500/20">
                      <Icon className="h-6 w-6 text-violet-500" />
                    </div>
                    <div>
                      <div className="mb-1 text-muted-foreground text-sm">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg transition-colors hover:text-violet-500"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-lg">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-violet-500/10 to-blue-500/10 blur-lg" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative space-y-6 rounded-2xl border border-border/50 bg-card p-8 backdrop-blur-sm"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm">
                  {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: t("Nome é obrigatório para enviar e-mail."),
                  })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-violet-500 focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm">
                  {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: t("Email é obrigatório para enviar e-mail."),
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t("contact.form.email.invalid"),
                    },
                  })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-violet-500 focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: t("Mensagem é obrigatória para enviar e-mail."),
                  })}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-violet-500 focus:outline-none"
                />
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting || isSubmitted}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-violet-500 to-blue-500 px-6 py-4 text-white transition-all hover:from-violet-600 hover:to-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {t("contact.form.send")}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
