import { Sparkles, MessageSquare, Calendar, LineChart, Tag } from "lucide-react"
import Image from "next/image"

const Solution = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI Content Creation",
      description: "Generate on-brand posts, captions, and images in seconds with advanced AI that learns your voice."
    },
    {
      icon: MessageSquare,
      title: "Smart Review Responses",
      description: "Automatically respond to reviews with personalized, contextual replies that maintain your brand voice."
    },
    {
      icon: Calendar,
      title: "Cross-Platform Scheduling",
      description: "Schedule and publish content across all major social platforms from one unified dashboard."
    },
    {
      icon: LineChart,
      title: "Competitor Insights",
      description: "Track competitor performance and get AI-powered recommendations to stay ahead."
    },
    {
      icon: Tag,
      title: "White-Label Solution",
      description: "Rebrand the platform as your own and offer premium services to your clients."
    }
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full gradient-subtle opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block gradient-cta text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How SocialGenius{" "}
            <span className="text-primary">
              Solves It
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful AI automation that handles everything from content creation to competitor analysis,
            all while maintaining your unique brand voice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Features list */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 bg-card rounded-xl p-6 shadow-card hover:shadow-purple transition-smooth border border-border group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 gradient-hero opacity-20" />
              <Image
                src="/brain.png"
                alt="AI-powered brain illustration showing neural network automating social media content creation and management for marketing agencies"
                width={600}
                height={600}
                className="w-full h-full object-cover animate-float"
              />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -top-6 -right-6 bg-white dark:bg-card rounded-xl shadow-xl p-4 border-2 border-brand-blue">
              <div className="text-2xl font-bold text-brand-blue">10x</div>
              <div className="text-xs text-muted-foreground">Faster Content</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card rounded-xl shadow-xl p-4 border-2 border-brand-orange">
              <div className="text-2xl font-bold text-brand-orange">95%</div>
              <div className="text-xs text-muted-foreground">Time Saved</div>
            </div>
          </div>
        </div>

        {/* Product interface mockup */}
        <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-brand-blue" />
            </div>
            <div className="flex-1 bg-muted rounded-full h-8 flex items-center px-4 text-sm text-muted-foreground">
              app.socialgenius.com
            </div>
          </div>

          <div className="bg-muted rounded-xl p-6 min-h-64 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center mx-auto">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div className="text-2xl font-bold">Product Interface Preview</div>
              <div className="text-muted-foreground max-w-md">
                Intuitive dashboard for managing all your social media automation in one place
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
