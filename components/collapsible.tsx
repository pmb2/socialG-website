"use client"

import type React from "react"

import { useState } from "react"

interface CollapsibleProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
}

export const Collapsible = ({ open = false, onOpenChange, className }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleOpenChange = () => {
    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)
    onOpenChange?.(newIsOpen)
  }

  return (
    <div className={`relative ${className}`}>
      <button onClick={handleOpenChange} className="w-full">
        <div className="flex justify-between items-center w-full p-6 text-left">{/* Content for trigger */}</div>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        {/* Content for collapsible */}
      </div>
    </div>
  )
}

export const CollapsibleContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export const CollapsibleTrigger = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`${className}`}>{children}</div>
}

