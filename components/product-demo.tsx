"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function ProductDemo() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-16 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
      <div
        className={`relative transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <Image
          src="https://sjc.microlink.io/JNd8w8d5IqFboOmdhFbAT5nmpH8xwz8vHWh2bytUpHOKEsrWNLOnXCTCJdXKparTvPKCBi0bfph6oNHafI_RAg.jpeg"
          alt="Writesonic Interface"
          width={1200}
          height={600}
          className="w-full rounded-xl shadow-2xl"
          priority
        />
      </div>
    </div>
  )
}

