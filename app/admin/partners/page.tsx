"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Pencil, Trash2 } from "lucide-react"

const initialPartners = [
  { id: 1, name: "NedZink", category: "Metal Solutions", logo: "/nedzink-logo.jpg" },
  { id: 2, name: "dormakaba", category: "Door Hardware", logo: "/dormakaba-logo.jpg" },
  { id: 3, name: "TECHNORAILL", category: "Railing Systems", logo: "/technoraill-logo.jpg" },
  { id: 4, name: "HAWORTH", category: "Office Solutions", logo: "/haworth-logo.jpg" },
  { id: 5, name: "HunterDouglas", category: "Window Coverings", logo: "/hunterdouglas-logo.jpg" },
]

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState(initialPartners)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newPartner, setNewPartner] = useState({
    name: "",
    category: "",
    logo: "",
  })

  const handleAddPartner = () => {
    if (newPartner.name && newPartner.category) {
      setPartners([...partners, { id: partners.length + 1, ...newPartner }])
      setNewPartner({ name: "", category: "", logo: "" })
      setIsAddDialogOpen(false)
    }
  }

  const handleDeletePartner = (id: number) => {
    setPartners(partners.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-foreground">Partners </span>
            <span className="gold-text-gradient">Management</span>
          </h1>
          <p className="text-muted-foreground mt-1">Manage your partner relationships</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gold-gradient hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Add Partner
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Partner</DialogTitle>
              <DialogDescription>Add a new partner to your network</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="partner-name">Partner Name</Label>
                <Input
                  id="partner-name"
                  value={newPartner.name}
                  onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
                  placeholder="Enter partner name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="partner-category">Category</Label>
                <Input
                  id="partner-category"
                  value={newPartner.category}
                  onChange={(e) => setNewPartner({ ...newPartner, category: e.target.value })}
                  placeholder="e.g., Glass Solutions"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="partner-logo">Logo URL</Label>
                <Input
                  id="partner-logo"
                  value={newPartner.logo}
                  onChange={(e) => setNewPartner({ ...newPartner, logo: e.target.value })}
                  placeholder="/partner-logo.jpg"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddPartner} className="gold-gradient hover:opacity-90">Add Partner</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Partners Grid */}
      <Card className="border-border/50">
        <CardHeader className="bg-gradient-to-r from-card to-secondary/20">
          <CardTitle>All Partners</CardTitle>
          <CardDescription>View and manage all partner relationships</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <Card key={partner.id} className="border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-16 w-32 bg-muted rounded flex items-center justify-center">
                      {partner.logo ? (
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <span className="text-xs text-muted-foreground">No logo</span>
                      )}
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeletePartner(partner.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
