"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Activity } from "lucide-react"

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Business Analytics</h1>
          <p className="text-muted-foreground mt-1">Real-time insights and performance metrics</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-primary/20">
          <Activity className="h-5 w-5 text-primary animate-pulse" />
          <span className="text-sm font-medium text-foreground">Live Data</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$2.4M</div>
            <div className="flex items-center gap-1 text-xs text-primary mt-1">
              <TrendingUp className="h-3 w-3" />
              <span>+18.2% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">156</div>
            <div className="flex items-center gap-1 text-xs text-primary mt-1">
              <TrendingUp className="h-3 w-3" />
              <span>+12% from last quarter</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Client Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">98.5%</div>
            <div className="flex items-center gap-1 text-xs text-primary mt-1">
              <TrendingUp className="h-3 w-3" />
              <span>+2.3% improvement</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Power BI Embed */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-card to-secondary/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>Power BI Dashboard</CardTitle>
              <CardDescription>Comprehensive business intelligence and analytics</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative w-full bg-secondary/20" style={{ paddingBottom: "56.25%" }}>
            <iframe
              title="HM Innovation Analytics"
              src="https://app.powerbi.com/view?r=eyJrIjoiYzJhNzI4ZWEtMDhjNy00Y2RkLWFiOTItOWY1OGQ0ODgyOWUyIiwidCI6IjM0YmQ4YmVkLTJhYzEtNDFhZS05ZjA4LTRlMGEzZjExNzA2YyJ9"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Analytics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This Power BI dashboard provides real-time insights into your business performance. Use the interactive
                filters and visualizations to drill down into specific metrics, compare time periods, and identify
                trends across your projects, revenue, and client satisfaction.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
