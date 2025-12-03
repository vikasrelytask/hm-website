"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, Users, Briefcase, Package, MessageSquare, Eye } from "lucide-react"

const statsData = [
  { name: "Total Projects", value: "156", change: "+12%", icon: Briefcase, trend: "up" },
  { name: "Active Partners", value: "48", change: "+8%", icon: Users, trend: "up" },
  { name: "Products", value: "89", change: "+5%", icon: Package, trend: "up" },
  { name: "Page Views", value: "24.5K", change: "+18%", icon: Eye, trend: "up" },
]

const projectsData = [
  { month: "Jan", count: 12 },
  { month: "Feb", count: 15 },
  { month: "Mar", count: 18 },
  { month: "Apr", count: 14 },
  { month: "May", count: 22 },
  { month: "Jun", count: 25 },
]

const trafficData = [
  { month: "Jan", views: 1800 },
  { month: "Feb", views: 2200 },
  { month: "Mar", views: 2800 },
  { month: "Apr", views: 2400 },
  { month: "May", views: 3200 },
  { month: "Jun", views: 3800 },
]

const recentActivity = [
  { action: "New project added", item: "Dubai Marina Tower", time: "2 hours ago", type: "project" },
  { action: "Partner updated", item: "HunterDouglas", time: "5 hours ago", type: "partner" },
  { action: "Product published", item: "Curtain Wall System CW-500", time: "1 day ago", type: "product" },
  { action: "Review approved", item: "5-star review from ABC Corp", time: "2 days ago", type: "review" },
  { action: "News article published", item: "ISO Certification Renewed", time: "3 days ago", type: "news" },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            <span className="text-foreground">Welcome to </span>
            <span className="gold-text-gradient">Dashboard</span>
          </h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your website today.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          Last updated: <span className="text-foreground font-medium">Just now</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => (
          <Card key={stat.name} className="border-border/50 bg-gradient-to-br from-card to-secondary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.name}</CardTitle>
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs text-primary mt-1">
                <TrendingUp className="h-3 w-3" />
                <span>{stat.change} from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border/50 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
            <CardTitle>Projects Overview</CardTitle>
            <CardDescription>Monthly project completion trends</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 bg-card">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={projectsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(212, 175, 55, 0.1)" />
                <XAxis 
                  dataKey="month" 
                  stroke="#8a8a8a"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="#8a8a8a"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#2c2c2c",
                    border: "1px solid #d4af37",
                    borderRadius: "8px",
                    color: "#ffffff",
                  }}
                  cursor={{ fill: 'rgba(212, 175, 55, 0.1)' }}
                />
                <Bar 
                  dataKey="count" 
                  fill="#d4af37" 
                  radius={[8, 8, 0, 0]}
                  activeBar={{ fill: "#e6c55a" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/50 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
            <CardTitle>Website Traffic</CardTitle>
            <CardDescription>Monthly page views and engagement</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 bg-card">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(212, 175, 55, 0.1)" />
                <XAxis 
                  dataKey="month" 
                  stroke="#8a8a8a"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="#8a8a8a"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#2c2c2c",
                    border: "1px solid #d4af37",
                    borderRadius: "8px",
                    color: "#ffffff",
                  }}
                  cursor={{ stroke: 'rgba(212, 175, 55, 0.3)', strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#d4af37"
                  strokeWidth={3}
                  dot={{ fill: "#d4af37", r: 5, strokeWidth: 2, stroke: "#1a1a1a" }}
                  activeDot={{ r: 7, fill: "#e6c55a", stroke: "#1a1a1a", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-border/50">
        <CardHeader className="bg-gradient-to-r from-card to-secondary/20">
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates and changes to your website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="mt-1">
                  {activity.type === "project" && <Briefcase className="h-5 w-5 text-primary" />}
                  {activity.type === "partner" && <Users className="h-5 w-5 text-primary" />}
                  {activity.type === "product" && <Package className="h-5 w-5 text-primary" />}
                  {activity.type === "review" && <MessageSquare className="h-5 w-5 text-primary" />}
                  {activity.type === "news" && <TrendingUp className="h-5 w-5 text-primary" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.item}</p>
                </div>
                <div className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
