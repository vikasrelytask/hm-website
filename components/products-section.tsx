import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const products = [
  {
    category: "Teracotta Facade",
    items: [
      { name: "Maintenance-free", spec: "Due to tempered & heat-strengthened panels" },
      { name: "Energy efficient", spec: "With Low-E insulated glass (U-value 0.28)" },
      { name: "Thermal insulation", spec: "Through insulated & laminated glazing" },
      { name: "Aesthetic", spec: "Due to its large seamless glass panels" },
    ],
  },
  {
    category: "Zinc Facade",
    items: [
      { name: "Highly durable", spec: "With a lifespan of several decades" },
      { name: "Sustainable", spec: "Due to fire resistance and full recyclability" },
      { name: "Maintenance-free", spec: "Surface with long-term weather stability" },
      { name: "Lightweight & easy to install", spec: "Thanks to high-strength aluminium panels (3–4 mm)" },
    ],
  },
  {
    category: "Honeycomb Facade",
    items: [
      { name: "High durability", spec: "With long-lasting performance" },
      { name: "Excellent wind-load resistance", spec: "For harsh conditions" },
      { name: "Suitable for any building size", spec: "High-rise or low-rise" },
      { name: "Any panel shape possible", spec: "For flexible design options" },
    ],
  },
  {
    category: "Mini Wave Facade",
    items: [
      { name: "Easy installation", spec: "With lightweight panels" },
      { name: "Interior & exterior application", spec: "For versatile use" },
      { name: "Panel length up to 6 meters", spec: "For seamless large surfaces" },
      { name: "Sustainable", spec: "With recyclable, eco-friendly material" },
    ],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif mb-4">
              <span className="text-foreground">Premium </span>
              <span className="gold-text-gradient">Facade Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              World-class products from leading manufacturers, backed by our expertise and commitment to quality.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((category, index) => (
            <ScrollReveal key={index} delay={index * 75}>
              <Card className="p-6 bg-background border-border hover:border-primary/50 transition-colors h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {category.category}
                    </Badge>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="space-y-1">
                        <div className="text-sm font-medium text-foreground">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.spec}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
              View Full Product Catalog
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
