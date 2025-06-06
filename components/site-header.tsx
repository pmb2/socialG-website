"use client"

import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const productItems = [
  { title: "Dashboard Overview", href: "#" },
  { title: "Business Management", href: "#" },
  { title: "Knowledge Base", href: "#" },
  { title: "Automation & Agents", href: "#" },
]

const resourceItems = [
  { title: "Documentation", href: "#" },
  { title: "GBP Best Practices", href: "#" },
  { title: "Case Studies", href: "#" },
  { title: "Help Center", href: "#" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20362-u0CJxkd2SYIN4wqY2H5Po0ShF75t7v.png"
              alt="SocialGenius Logo"
              width={140}
              height={140}
              className="w-auto h-10"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Products
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {productItems.map((item) => (
                  <DropdownMenuItem key={item.title} asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Resources
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {resourceItems.map((item) => (
                  <DropdownMenuItem key={item.title} asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/pricing" className="text-foreground/70 hover:text-foreground">
              Pricing
            </Link>
            <Link href="/investors" className="text-foreground/70 hover:text-foreground">
              Investors
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Request a Demo</Button>
            <Button variant="ghost">Sign in</Button>
            <Button>Get Started</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-4">
                <Link href="#" className="text-sm font-medium">
                  Products
                </Link>
                <Link href="#" className="text-sm font-medium">
                  Resources
                </Link>
                <Link href="#" className="text-sm font-medium">
                  Pricing
                </Link>
                <Link href="/investors" className="text-sm font-medium">
                  Investors
                </Link>
                <Link href="#" className="text-sm font-medium">
                  Request a Demo
                </Link>
                <Link href="#" className="text-sm font-medium">
                  Sign in
                </Link>
                <Button>Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

