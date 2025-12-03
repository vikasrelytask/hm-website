import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { SolutionsSection } from "@/components/solutions-section"
import { ProductsSection } from "@/components/products-section"
import { ServicesSection } from "@/components/services-section"
import { PartnersSection } from "@/components/partners-section"
import { ProjectsSection } from "@/components/projects-section"
import { NewsSection } from "@/components/blogs-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      <Hero />
      <SolutionsSection />
      <ProductsSection />
      <ServicesSection />
      <PartnersSection />
      <ProjectsSection />
      <NewsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
