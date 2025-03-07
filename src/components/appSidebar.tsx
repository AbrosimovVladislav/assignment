import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Home, CircleUserRound} from "lucide-react"
import Link from "next/link";

const menuItems = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Private",
        url: "/private",
        icon: CircleUserRound,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader/>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter/>
        </Sidebar>
    )
}
