'use client'

import { ReactNode, useState } from "react"

export default function InteractiveCard({ children }:{ children:ReactNode }) {

  const [hover, setHover] = useState(false)

  return (
    <div
      className={
        hover
        ? "bg-neutral-200 rounded-lg shadow-2xl"
        : "bg-white rounded-lg shadow-lg"
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </div>
  )
}