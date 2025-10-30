"use client"

import { Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useRef } from "react"

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const team = [
    {
      name: "Paul Backus",
      role: "CTO & Co-Founder",
      bio: "Former lead engineer at major tech companies. Expert in AI/ML systems and scalable cloud architecture. Built the core SocialGenius platform.",
      linkedin: "https://www.linkedin.com/in/backuspaul/",
      email: "paul@social-genius.com",
      image: "/paul_headshot.jfif"
    },
    {
      name: "Brian Martino",
      role: "CEO & Co-Founder",
      bio: "20+ years in digital marketing and SaaS. Previously scaled multiple agencies to 7-figures. Passionate about empowering agencies with AI.",
      linkedin: "https://www.linkedin.com/in/brianmartino/",
      email: "brian@social-genius.com",
      image: "/brian_headshot.jfif"
    },
    {
      name: "Stacey Figueras",
      role: "CMO & Co-Founder",
      bio: "15+ years driving digital marketing and SaaS sales growth. Known for innovative campaigns that expand market reach and deliver revenue impact. Trusted leader in strategic partnerships.",
      linkedin: "https://www.linkedin.com/in/stacey-figueras-669236127/",
      email: "stacey.figueras@social-genius.com",
      image: "/stacey_headshot.jfif"
    }
  ]

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = 350 + 32 // card width + gap
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : team.length - 1
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < team.length - 1 ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
  }

  return (
    <section id="team" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block gradient-hero text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet the{" "}
            <span className="text-secondary">
              Founders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A team of experienced entrepreneurs, engineers, and marketers passionate about revolutionizing social media management.
          </p>
        </div>

        {/* Carousel Navigation - Mobile */}
        <div className="flex justify-center items-center gap-4 mb-6 lg:hidden">
          <Button
            onClick={handlePrevious}
            variant="outline"
            size="icon"
            className="rounded-full"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            {team.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="rounded-full"
            aria-label="Next team member"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-8 max-w-6xl mx-auto overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-purple transition-smooth group flex-shrink-0 w-[350px] snap-center"
            >
              {/* Avatar or image */}
              <div className="relative h-64 gradient-hero flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 bg-white">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at SocialGenius, AI social media automation platform`}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <div className="text-primary font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Contact buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2 group-hover/btn:text-brand-blue transition-colors" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-4 h-4 mr-2 group-hover/btn:text-primary transition-colors" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the team CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto border border-border">
          <h3 className="text-2xl font-bold mb-4">
            Want to Join Our Mission?
          </h3>
          <p className="text-muted-foreground mb-6">
            We&apos;re always looking for talented individuals who share our passion for innovation.
            Check out our open positions or reach out to learn more.
          </p>
          <Button size="lg" className="gradient-hero text-white shadow-purple">
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Team
