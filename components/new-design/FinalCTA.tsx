"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Calendar } from "lucide-react"

interface FinalCTAProps {
  onDemoClick: () => void
  onContactClick: () => void
}

const FinalCTA = ({ onDemoClick, onContactClick }: FinalCTAProps) => {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Limited Beta Access Available
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to Scale Smarter?
            <br />
            <span className="inline-block relative">
              Join the Genius Way Today
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 400 12" fill="none">
                <path d="M1 9C80 3 160 1 240 3C320 5 360 7 399 9" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </span>
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Stop wasting time on manual social media management. Let AI handle the heavy lifting
            while you focus on growing your agency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-10 py-7 rounded-full font-semibold group"
              onClick={onDemoClick}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-7 rounded-full font-semibold backdrop-blur-sm bg-white/10"
              onClick={onContactClick}
            >
              Contact Us
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80 text-sm">Beta Agencies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">60+</div>
              <div className="text-white/80 text-sm">Profiles Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80 text-sm">Time Saved</div>
            </div>
          </div>

          {/* Email subscription */}
          <div className="mt-12 max-w-md mx-auto">
            <p className="text-white/80 text-sm mb-4">
              Get early access updates and exclusive insights
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
              />
              <Button
                className="bg-white text-primary hover:bg-white/90 px-6 rounded-full font-semibold"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
