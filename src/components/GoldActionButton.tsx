import { type ReactNode } from "react"

interface GoldActionButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
}

export default function GoldActionButton({
  children,
  onClick,
  className = "",
  type = "button",
}: GoldActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative flex h-[2.9em] w-[8.5em] items-center justify-end rounded-[11px] border-2 border-gold-400 bg-transparent text-gold-400 text-sm font-medium transition-all duration-500 ease-out hover:bg-gold-400 hover:text-white focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 active:scale-[0.97] ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute ml-[0.8em] mr-[0.8em] mb-[0.2em] flex w-[1.6em] transition-all duration-500 ease-out group-hover:translate-x-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
      <span className="mr-[1.5em]">{children}</span>
    </button>
  )
}
