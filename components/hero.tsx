"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Phone, ChevronDown } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { GoldenFluidAnimation } from "@/components/golden-fluid-animation"

export function Hero() {
  const scrollToSolutions = () => {
    document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Golden Fluid Animation */}
      <GoldenFluidAnimation />
      
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center animate-fade-in-up">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-card/50 backdrop-blur-sm border border-primary/20"
            >
              <Award className="w-4 h-4 mr-2 text-primary" />
              Industry Leaders Since 1995
            </Badge>
          </div>

          {/* Heading */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="font-serif text-balance">
              <span className="block text-foreground">Facades, Interiors</span>
              <span className="block gold-text-gradient">& Beyond</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Since 1995, delivering world-class door hardware, office space systems, ceilings, facades, and railing solutions through global brand partnerships.
            </p>
          </div>

          {/* Highlight Badges */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-colors">
              
              <span className="text-2xl font-medium">Innovation</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-colors">
              <span className="text-2xl font-bold text-primary">Precision</span>
              
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-colors">
              
              <span className="text-2xl font-medium">Reliability</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto pt-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="space-y-2">
              <AnimatedCounter end={500} suffix="+" className="text-4xl font-bold text-primary" />
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={250} suffix="+" className="text-4xl font-bold text-primary" />
              <div className="text-sm text-muted-foreground">Satisfied Clients</div>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={25} className="text-4xl font-bold text-primary" />
              <div className="text-sm text-muted-foreground">Years Excellence</div>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={85} className="text-4xl font-bold text-primary" />
              <div className="text-sm text-muted-foreground">Expert Team</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={scrollToSolutions}
              className="gold-gradient text-primary-foreground hover:opacity-90 transition-all hover:scale-105"
            >
              Explore Our Solutions
            </Button>
            <Button
  asChild
  size="lg"
  variant="outline"
  className="border-primary text-primary hover:bg-primary/10 bg-transparent transition-all hover:scale-105"
>
  <a href="tel:+919872711088" className="flex items-center">
    <Phone className="w-4 h-4 mr-2" />
    Get Free Consultation
  </a>
</Button>

          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
