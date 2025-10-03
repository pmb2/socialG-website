import { Clock, TrendingDown, DollarSign } from "lucide-react"

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Manual Content Creation Wastes Time",
      description: "Marketing teams spend 20+ hours per week on repetitive social media tasks instead of strategic work."
    },
    {
      icon: TrendingDown,
      title: "Inconsistent Branding Hurts Credibility",
      description: "Without automation, maintaining a consistent voice and presence across platforms becomes impossible at scale."
    },
    {
      icon: DollarSign,
      title: "No Affordable Automation for Agencies",
      description: "82% of agencies need automation tools, but existing solutions are too expensive or too complex for SMBs."
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-6">
            The Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Agencies & SMBs Are Drowning in{" "}
            <span className="text-primary">Manual Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The digital landscape demands constant presence, but traditional methods can&apos;t keep up with the scale modern businesses need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-purple transition-smooth border border-border group"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                <problem.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-card max-w-4xl mx-auto border border-border">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">20+</div>
              <div className="text-muted-foreground">Hours wasted weekly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-blue mb-2">82%</div>
              <div className="text-muted-foreground">Need automation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$50K+</div>
              <div className="text-muted-foreground">Lost revenue yearly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
