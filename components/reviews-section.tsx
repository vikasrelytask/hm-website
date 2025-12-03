"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Ar. Sangeet Verma",
    role: "Architect",
    rating: 5,
    text: "I'm very happy to be here today, and I really wish Sanjay, Sanjay Khanna and his family, the very best. I think the details of the showroom and other things which they have fixed here is very brilliant, very informative. I think all the architects and other people can simply come and have the look and feel of the whole equipment. The products are very varied, and the way they have handled the whole display is fantastic.",
    image: "/SANGEET-VERMA.png",
  },
  {
    name: "Mr.Jasjeet Singh",
    role: "Business Owner",
    rating: 5,
    text: "Good afternoon, everyone. I am Jasjit Singh from Manso Group, Chandigarh. I have been associated with Khanna Ji since 1993, and they did the work for my first office. What I appreciate is that they always introduce new products, such as these amazing TechnoRAILL modular railings, which I am seeing for the first time. I encourage them to continue bringing innovative products, and I look forward to remaining a repeat customer.",
    image: "/JASJEET-SINGH.png",
  },
  {
    name: "Ar. Suchit",
    role: "Architect",
    rating: 5,
    text: "I'm the architecture team. I'm actually experienced a different railing systems from technology. They have a very awkward range in terms of special strength and design effects. I've experienced quite a good, different type of finishes, I can say. They are good. And the design aspect is also very nice. I wish them all the best in different projects in different aspects.",
    image: "/SUCHEET.png",
  },
  {
    name: "Mr.Arun",
    role: "Businessman",
    rating: 5,
    text: "Hi, good afternoon, friends. I am Arun. I got an opportunity to visit TechnoRail today, and I am totally impressed by the products on offer, and especially the way... I really like the concept of weldless steel railing. Thank you.",
    image: "/arun1.png",
  },
  {
    name: "Ar. K.P. Singh",
    role: "Architect",
    rating: 5,
    text: "Hello. I'm my architect, K. P. Sing. We are from In Grace Architects, and the product line is really nice. All the display is very unique, and we would definitely like to use the products in our future projects. All the slim line railings, the glass systems, and whatever product line is available, we are definitely going to use it.",
    image: "/K.P.SINGH.png",
  },
  {
    name: "Mr.Mandeep Singh Bhatti",
    role: "Businessman",
    rating: 5,
    text: "Hi, my name is Manmeet Singh Bhatti from Advance Engineers. I am here for my friend Khanna Ji's showroom opening, and we are looking at their different products. Specifically, I want to talk about the railings. These products are all modular, which I am seeing for the first time. You can install them anywhere and optimize them according to your needs. They save space, the quality looks good, and I am sure they will have a good life. Thank you.",
    image: "/MANDEEP-SINGH-BHATTI.png",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif mb-4">
            <span className="text-foreground">Client </span>
            <span className="gold-text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed text-sm">{review.text}</p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {review.role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-card border-border">
            <div className="flex items-center gap-8">
              <div>
                <div className="text-5xl font-bold text-primary">5.0</div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">Excellent</div>
                <div className="text-muted-foreground">Based on 250+ reviews</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
