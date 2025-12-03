"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
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

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    // Remove auth cookie
    document.cookie = "admin_token=; path=/; max-age=0"
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <div className="flex h-full w-64 flex-col bg-card border-r border-border shadow-lg">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-border px-6 bg-gradient-to-r from-card to-secondary/20">
        <Image
          src="/logo.png"
          alt="HM Innovation"
          width={120}
          height={40}
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Admin Badge */}
      <div className="px-6 py-4 border-b border-border bg-secondary/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-sm font-bold text-primary-foreground">AD</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-foreground truncate">Admin Panel</div>
            <div className="text-xs text-muted-foreground truncate">Control Center</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground hover:translate-x-1",
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-border p-3 bg-secondary/20">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200 hover:translate-x-1"
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
