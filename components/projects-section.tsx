"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, ExternalLink } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { getFeaturedProjects, getAllCategories } from "@/lib/projects"

const featuredProjects = getFeaturedProjects()
const categories = getAllCategories()

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? featuredProjects : featuredProjects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif mb-4">
              <span className="text-foreground">Featured </span>
              <span className="gold-text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Showcasing our commitment to excellence across diverse industries and project types.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "gold-gradient text-primary-foreground"
                    : "border-border hover:border-primary/50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <Link href={`/projects/${project.slug}`}>
                <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full cursor-pointer">
                  <div className="relative overflow-hidden aspect-[3/2]">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Area</div>
                        <div className="text-sm font-medium text-foreground">{project.stats.area}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Duration</div>
                        <div className="text-sm font-medium text-foreground">{project.stats.duration}</div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary/50 hover:bg-primary/10"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
