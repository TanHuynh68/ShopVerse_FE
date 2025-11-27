'use client'
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/pages/admin/dashboard/app-sidebar"
import { SiteHeader } from "@/pages/admin/dashboard/site-header"
import { Outlet } from "react-router-dom"
import './theme.css'

export default function DashboardLayout() {
  return (
    <SidebarProvider
      defaultOpen={true}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col"><Outlet/></div>
      </SidebarInset>
    </SidebarProvider>
  )
}