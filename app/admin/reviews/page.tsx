"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Check, X } from "lucide-react"

const initialReviews = [
  {
    id: 1,
    author: "John Smith",
    company: "ABC Corporation",
    rating: 5,
    text: "Excellent service and quality work. Highly recommended!",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: 2,
    author: "Sarah Johnson",
    company: "XYZ Developers",
    rating: 5,
    text: "Professional team with great attention to detail.",
    status: "approved",
    date: "2024-01-10",
  },
  {
    id: 3,
    author: "Michael Chen",
    company: "Tech Innovations",
    rating: 4,
    text: "Good quality products and timely delivery.",
    status: "approved",
    date: "2024-01-05",
  },
  {
    id: 4,
    author: "Emily Davis",
    company: "Design Studio",
    rating: 5,
    text: "Outstanding craftsmanship and customer service.",
    status: "pending",
    date: "2024-01-20",
  },
]

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews)

  const handleApprove = (id: number) => {
    setReviews(reviews.map((r) => (r.id === id ? { ...r, status: "approved" } : r)))
  }

  const handleReject = (id: number) => {
    setReviews(reviews.filter((r) => r.id !== id))
  }

  const pendingReviews = reviews.filter((r) => r.status === "pending")
  const approvedReviews = reviews.filter((r) => r.status === "approved")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          <span className="text-foreground">Reviews </span>
          <span className="gold-text-gradient">Management</span>
        </h1>
        <p className="text-muted-foreground mt-1">Manage customer testimonials and reviews</p>
      </div>

      {/* Pending Reviews */}
      {pendingReviews.length > 0 && (
        <Card className="border-primary/20">
          <CardHeader className="bg-gradient-to-r from-card to-secondary/20">
            <CardTitle>Pending Reviews</CardTitle>
            <CardDescription>Reviews awaiting approval</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{review.author}</h3>
                      <p className="text-sm text-muted-foreground">{review.company}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground mb-4">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleApprove(review.id)} className="gold-gradient hover:opacity-90">
                        <Check className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleReject(review.id)}>
                        <X className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Approved Reviews */}
      <Card className="border-border/50">
        <CardHeader className="bg-gradient-to-r from-card to-secondary/20">
          <CardTitle>Approved Reviews</CardTitle>
          <CardDescription>Published customer testimonials</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {approvedReviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{review.author}</h3>
                    <p className="text-sm text-muted-foreground">{review.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <Badge variant="default">Published</Badge>
                  </div>
                </div>
                <p className="text-sm text-foreground mb-2">{review.text}</p>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
