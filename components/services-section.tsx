import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const services = [
  {
    title: "Design & Engineering",
    description: "Collaborative design services with structural analysis and performance optimization.",
    points: [
      "3D Modeling & BIM Integration",
      "Structural Engineering Analysis",
      "Thermal & Energy Performance",
      "Wind Load Calculations",
    ],
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination ensuring on-time, on-budget delivery.",
    points: [
      "Timeline Planning & Scheduling",
      "Budget Management",
      "Quality Control & Assurance",
      "Stakeholder Communication",
    ],
  },
  {
    title: "Installation Services",
    description: "Expert installation by certified professionals with rigorous safety standards.",
    points: [
      "Certified Installation Teams",
      "Safety Compliance (OSHA)",
      "Quality Inspections",
      "Post-Installation Testing",
    ],
  },
  {
    title: "Maintenance & Support",
    description: "Comprehensive maintenance programs to protect your investment long-term.",
    points: [
      "Preventive Maintenance Plans",
      "Emergency Repair Services",
      "Warranty Management",
      "Performance Monitoring",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif mb-4">
            <span className="text-foreground">Professional </span>
            <span className="gold-text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Full-service support from initial consultation through long-term maintenance and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
