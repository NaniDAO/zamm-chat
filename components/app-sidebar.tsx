"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { toggleSidebar, state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b-2 border-border flex items-center justify-between flex-row">
        {state === "expanded" && (
          <h2 className="text-md font-medium ">History</h2>
        )}
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <span>*soon*</span>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
