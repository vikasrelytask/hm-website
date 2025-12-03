"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/admin/login"

  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen overflow-hidden">
        {/* Desktop Sidebar - Only visible on large screens */}
        <aside className="hidden lg:block lg:flex-shrink-0">
          <AdminSidebar />
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden w-full">
          <AdminHeader />
          <main className="flex-1 overflow-y-auto bg-secondary/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-screen-2xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
