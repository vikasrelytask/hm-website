import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const news = [
  {
    title: "HM Innovation Delivers Custom Perforated Facade for Coca-Cola Hoshiarpur Plant",
    date: "March 25, 2025",
    excerpt:
      "HM Innovation has executed a signature custom perforated metal façade for Coca-Cola’s Hoshiarpur facility, inspired by the iconic Minute Maid bottle. This project highlights our ability to blend branding, engineering precision, and large-scale industrial design.",
    image: "/coca.JPEG",
  },
  {
    title: "High-Performance Zinc Facade Completed for Commercial Tower, Jammu",
    date: "January 18, 2025",
    excerpt:
      "Our team has delivered a modern Zinc Standing Seam Façade for a major commercial tower in Jammu, enhancing façade durability, weather resistance, and the overall architectural presence of the building.",
    image: "/JAMMU.JPEG",
  },
  {
    title: "Terracotta Ventilated Façade Installed at Punjab Biotechnology Incubator, Mohali",
    date: "February 10, 2025",
    excerpt:
      "HM Innovation has completed an advanced Terracotta Ventilated Façade system for the Punjab Biotechnology Incubator, offering improved thermal efficiency, sustainability, and a premium architectural finish.",
    image: "/PBTI.JPG",
  },
]

export function NewsSection() {
  return (
    <section id="Blogs" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif mb-4">
            <span className="text-foreground">Latest </span>
            <span className="gold-text-gradient">Blogs</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Stay updated with our latest projects, partnerships, and industry insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-lg font-bold text-foreground leading-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.excerpt}</p>
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
            View All News
          </Button>
        </div>
      </div>
    </section>
  )
}
