"use client"

export function ProfilePhoto() {
  return (
    <div className="relative flex h-72 w-72 items-center justify-center rounded-full border-4 border-background bg-[url('/fotoPortfolio.png')] bg-center bg-cover shadow-2xl lg:h-80 lg:w-80">
      <div className="absolute inset-0 scale-110 rounded-full bg-linear-to-br from-violet-200/10 via-blue-300/10 to-cyan-200/10 blur-2xl" />
    </div>
  )
}
