import { Card } from "@/components/ui/card"
import { Building2, Layers, Wrench, Shield } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const solutions = [
  {
    icon: Building2,
    title: "Door Hardware & Access Solution",
    description:
      "Premium door hardware, automatic doors, panic exits, and access control integrated for safety and convenience.",
    features: ["End-to-End Door Solutions", "Enhanced Safety & Access Control", "Built for Reliability & Design"],
  },
  {
    icon: Layers,
    title: "Office & Workspace Systems",
    description:
      "Demountable partitions, premium office space systems, and modular layouts that create flexible, future-ready workplaces.​",
    features: ["Flexible Space Planning", "Premium Workspace Design", "Future-Ready & Efficient"],
  },
  {
    icon: Wrench,
    title: "Ceilings, Facades & Louvers",
    description:
      "Metal ceilings, metal facades, louvers, blinds, zinc facades, and roofing that define the building’s external and internal character.​",
    features: ["Architectural Impact", "High Performance Materials", "Smart Ventilation & Light Control"],
  },
  {
    icon: Shield,
    title: "Glass & Railing Systems",
    description:
      "Spider facades, structural glazing interfaces, modular railings, and custom glass solutions that enhance transparency and safety.​",
    features: ["Seamless Transparency", "Engineered Safety", "Custom Design Flexibility"],
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif mb-4">
              <span className="text-foreground">Core </span>
              <span className="gold-text-gradient">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              From concept to completion, we deliver integrated building envelope solutions that exceed expectations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg gold-gradient flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
