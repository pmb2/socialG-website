"use client"

import * as React from "react"
import {
  DropdownMenu as RadixDropdownMenu,
  DropdownMenuContent as RadixDropdownMenuContent,
  DropdownMenuItem as RadixDropdownMenuItem,
  DropdownMenuTrigger as RadixDropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"

import { cn } from "@/lib/utils"

const DropdownMenu = RadixDropdownMenu
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenuContent>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenuContent>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <RadixDropdownMenuContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className,
    )}
    sideOffset={sideOffset}
    {...props}
  />
))
DropdownMenuContent.displayName = RadixDropdownMenuContent.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenuItem>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenuItem>
>(({ className, inset, ...props }, ref) => (
  <RadixDropdownMenuItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = RadixDropdownMenuItem.displayName

const DropdownMenuTrigger = RadixDropdownMenuTrigger

export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger }

