
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

type SidebarItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const sidebarItems: SidebarItem[] = [
  {
    name: "Team",
    path: "/team",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: <MessageSquare className="w-5 h-5" />,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "h-screen bg-sidebar sticky top-0 transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <h1 className="text-sidebar-foreground text-xl font-bold">TeamSpace</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-sidebar-foreground hover:bg-sidebar-accent rounded-full"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>

      <nav className="flex-1 p-2">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "sidebar-item",
                  location.pathname.startsWith(item.path) && "active"
                )}
              >
                {item.icon}
                {!collapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
