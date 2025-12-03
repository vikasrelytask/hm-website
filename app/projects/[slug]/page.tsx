import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { MapPin, Calendar, ArrowLeft, Building2, Clock, Home } from "lucide-react"
import { allProjects, getProjectBySlug } from "@/lib/projects"

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex gap-2 mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Projects
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge className="bg-primary text-primary-foreground text-base px-4 py-1">{project.category}</Badge>
              {project.status !== "Completed" && (
                <Badge variant="secondary" className="text-base px-4 py-1">
                  {project.status}
                </Badge>
              )}
            </div>
            <h1 className="font-serif mb-4 text-foreground">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-lg text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Project Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Project Area</p>
                    <p className="text-2xl font-bold text-foreground">{project.stats.area}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Duration</p>
                    <p className="text-2xl font-bold text-foreground">{project.stats.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <p className="text-2xl font-bold text-foreground">{project.status}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Description */}
          <div className="mb-16">
            <h2 className="font-serif mb-6">
              <span className="text-foreground">Project </span>
              <span className="gold-text-gradient">Overview</span>
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </div>

          {/* Media Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-16">
              <h2 className="font-serif mb-8">
                <span className="text-foreground">Project </span>
                <span className="gold-text-gradient">Gallery</span>
              </h2>
              
              {project.gallery.length === 1 ? (
                <div className="rounded-lg overflow-hidden relative aspect-video">
                  <Image
                    src={project.gallery[0]}
                    alt={`${project.title} - Image 1`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              ) : (
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.gallery.slice(0, 6).map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className="overflow-hidden border-border">
                            <CardContent className="p-0 relative aspect-[4/3]">
                              <Image
                                src={image}
                                alt={`${project.title} - Image ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading="lazy"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              )}
              {project.gallery.length > 6 && (
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Showing 6 of {project.gallery.length} images
                </p>
              )}
            </div>
          )}

          {/* Video Section */}
          {project.videoUrl && (
            <div className="mb-16">
              <h2 className="font-serif mb-8">
                <span className="text-foreground">Project </span>
                <span className="gold-text-gradient">Video</span>
              </h2>
              <div className="rounded-lg overflow-hidden bg-black">
                <video
                  controls
                  className="w-full max-w-4xl mx-auto"
                  poster={project.image}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Interested in a similar project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get in touch with our team to discuss how we can bring your vision to life with our expertise in
              architectural glazing and facade systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button size="lg" className="gold-gradient text-primary-foreground">
                  Contact Us
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="border-border hover:border-primary/50">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
