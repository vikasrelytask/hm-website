"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Bell, Search, Menu, X, Home } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Briefcase, Package, Users, MessageSquare, Settings, LogOut, BarChart3 } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Projects", href: "/admin/projects", icon: Briefcase },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "News", href: "/admin/news", icon: FileText },
  { name: "Partners", href: "/admin/partners", icon: Users },
  { name: "Reviews", href: "/admin/reviews", icon: MessageSquare },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    document.cookie = "admin_token=; path=/; max-age=0"
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <>
      <header className="h-16 border-b border-border bg-card shadow-sm">
        <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Button & Logo */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Image
              src="/logo.png"
              alt="HM Innovation"
              width={120}
              height={40}
              className="h-8 w-auto object-contain lg:hidden"
            />
          </div>

          {/* Search - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Back to Homepage Button */}
            <Link href="/">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden md:flex items-center gap-2 border-primary/20 hover:bg-primary/10 hover:border-primary transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Homepage</span>
              </Button>
            </Link>
            
            <Button variant="ghost" size="icon" className="relative hidden sm:flex">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            </Button>
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-right hidden lg:block">
                <div className="text-sm font-medium text-foreground">Admin User</div>
                <div className="text-xs text-muted-foreground">admin@hminnovation.com</div>
              </div>
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <span className="text-sm font-bold text-primary-foreground">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="p-6 border-b border-border">
            <SheetTitle className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="HM Innovation"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </SheetTitle>
          </SheetHeader>
          
          {/* Mobile Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile Logout */}
          <div className="border-t border-border p-3">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              <span>Logout</span>
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
