import { Quote, Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SocialGenius has transformed how we manage our clients' social media. The AI content generation alone saves us 15+ hours per week.",
      author: "Sarah Johnson",
      role: "Digital Marketing Director",
      company: "Peak Media Group",
      rating: 5
    },
    {
      quote: "The white-label feature is a game-changer. We've been able to offer premium social media automation to our clients under our own brand.",
      author: "Michael Chen",
      role: "Agency Owner",
      company: "Chen Digital Solutions",
      rating: 5
    },
    {
      quote: "Review automation has been incredible. We manage 40+ client locations and SocialGenius responds to every review instantly with perfect, on-brand replies.",
      author: "Jessica Rodriguez",
      role: "Operations Manager",
      company: "Vista Marketing Agency",
      rating: 5
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block gradient-cta text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="text-primary">Leading Agencies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our beta agencies are saying about SocialGenius
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-purple transition-smooth relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case study CTA */}
        <div className="mt-16 text-center bg-card rounded-2xl p-8 max-w-4xl mx-auto shadow-card border border-border">
          <h3 className="text-2xl font-bold mb-4">
            Want to see detailed case studies?
          </h3>
          <p className="text-muted-foreground mb-6">
            Download our success stories showing how agencies increased efficiency by 95% and client satisfaction by 87%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-muted rounded-xl p-4 flex-1 max-w-xs">
              <div className="text-3xl font-bold text-primary mb-1">87%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction Increase</div>
            </div>
            <div className="bg-muted rounded-xl p-4 flex-1 max-w-xs">
              <div className="text-3xl font-bold text-secondary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Time Savings Achieved</div>
            </div>
            <div className="bg-muted rounded-xl p-4 flex-1 max-w-xs">
              <div className="text-3xl font-bold text-brand-blue mb-1">3.2x</div>
              <div className="text-sm text-muted-foreground">ROI for Agencies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
