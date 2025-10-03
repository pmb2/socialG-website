"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface HeroProps {
  onDemoClick: () => void
  onBetaClick: () => void
}

const Hero = ({ onDemoClick, onBetaClick }: HeroProps) => {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
              AI-Powered Social Media Automation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
              The Genius Way to Scale Your{" "}
              <span className="inline-block relative">
                Social Presence
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M1 9C50 3 100 1 150 3C200 5 250 7 299 9" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
              AI-powered automation for Marketing Agencies and SMBs.
              Automate content creation, review responses, and cross-platform scheduling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6 rounded-full font-semibold group"
                onClick={onBetaClick}
              >
                Try Beta Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full font-semibold backdrop-blur-sm bg-white/10"
                onClick={onDemoClick}
              >
                <Play className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center lg:text-left bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">Unlimited</div>
                <div className="text-white/80 text-sm">Profiles</div>
              </div>
              <div className="text-center lg:text-left bg-brand-blue/20 backdrop-blur-sm rounded-xl p-4 border border-brand-blue/30">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-white/80 text-sm">Platforms</div>
              </div>
              <div className="text-center lg:text-left bg-brand-orange/20 backdrop-blur-sm rounded-xl p-4 border border-brand-orange/30">
                <div className="text-2xl font-bold text-white">AI-Powered</div>
                <div className="text-white/80 text-sm">Content</div>
              </div>
            </div>
          </div>

          {/* Visual - Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple rounded-3xl blur-3xl opacity-50" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  {/* Mockup header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-white/20">
                    <Image src="/logo.png" alt="SocialGenius logo - AI-powered social media automation platform" width={200} height={150} className="h-auto w-32" />
                  </div>

                  {/* Content blocks */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-white/60 text-xs mb-2">Posts Scheduled</div>
                      <div className="text-white text-2xl font-bold">247</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-white/60 text-xs mb-2">Reviews Managed</div>
                      <div className="text-white text-2xl font-bold">1,429</div>
                    </div>
                  </div>

                  {/* Chart mockup */}
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm h-48 flex items-end gap-2">
                    {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                      <div key={i} className="flex-1 bg-white/40 rounded-t" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
