"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2, Search, FileText } from "lucide-react"

interface NewsArticle {
  id: number
  title: string
  category: string
  author: string
  date: string
  status: string
}

const initialNews: NewsArticle[] = [
  {
    id: 1,
    title: "HM Innovation Receives ISO 9001:2015 Certification",
    category: "Company News",
    author: "Admin",
    date: "2024-01-15",
    status: "Published",
  },
  {
    id: 2,
    title: "New Sustainable Glass Technology Launched",
    category: "Product Update",
    author: "Admin",
    date: "2024-01-10",
    status: "Published",
  },
  {
    id: 3,
    title: "Dubai Marina Tower Project Completed",
    category: "Project News",
    author: "Admin",
    date: "2024-01-05",
    status: "Published",
  },
]

export default function AdminNewsPage() {
  const [news, setNews] = useState<NewsArticle[]>(initialNews)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newArticle, setNewArticle] = useState({
    title: "",
    category: "",
    author: "Admin",
    date: new Date().toISOString().split("T")[0],
    status: "Draft",
    content: "",
  })

  const filteredNews = news.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddArticle = () => {
    if (newArticle.title && newArticle.category) {
      setNews([
        ...news,
        {
          id: news.length + 1,
          title: newArticle.title,
          category: newArticle.category,
          author: newArticle.author,
          date: newArticle.date,
          status: newArticle.status,
        },
      ])
      setNewArticle({
        title: "",
        category: "",
        author: "Admin",
        date: new Date().toISOString().split("T")[0],
        status: "Draft",
        content: "",
      })
      setIsAddDialogOpen(false)
    }
  }

  const handleDeleteArticle = (id: number) => {
    setNews(news.filter((n) => n.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-foreground">News </span>
            <span className="gold-text-gradient">Management</span>
          </h1>
          <p className="text-muted-foreground mt-1">Manage news articles and company updates</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gold-gradient hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Add Article
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Article</DialogTitle>
              <DialogDescription>Create a new news article or announcement</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Article Title</Label>
                <Input
                  id="title"
                  value={newArticle.title}
                  onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                  placeholder="Enter article title"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={newArticle.category}
                    onValueChange={(value) => setNewArticle({ ...newArticle, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Company News">Company News</SelectItem>
                      <SelectItem value="Product Update">Product Update</SelectItem>
                      <SelectItem value="Project News">Project News</SelectItem>
                      <SelectItem value="Industry Insights">Industry Insights</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newArticle.date}
                    onChange={(e) => setNewArticle({ ...newArticle, date: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={newArticle.content}
                  onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                  placeholder="Enter article content..."
                  rows={6}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddArticle} className="gold-gradient hover:opacity-90">
                Add Article
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <Card className="border-border/50">
        <CardHeader className="bg-gradient-to-r from-card to-secondary/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>All Articles</CardTitle>
              <CardDescription>View and manage all news articles</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="rounded-md border border-border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredNews.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium">{article.title}</TableCell>
                    <TableCell>{article.category}</TableCell>
                    <TableCell>{article.date}</TableCell>
                    <TableCell>
                      <Badge variant={article.status === "Published" ? "default" : "secondary"}>{article.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteArticle(article.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
