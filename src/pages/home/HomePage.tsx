
import { Link } from "react-router-dom";
import { Users, MessageSquare, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const stats = [
    {
      title: "Teams",
      value: 3,
      description: "Active teams",
      icon: <Users className="h-5 w-5 text-primary" />,
      link: "/team",
    },
    {
      title: "Team Members",
      value: 17,
      description: "Total members",
      icon: <User className="h-5 w-5 text-primary" />,
      link: "/team",
    },
    {
      title: "Messages",
      value: 24,
      description: "Unread messages",
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      link: "/messages",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <CardDescription>{stat.description}</CardDescription>
              <div className="mt-4">
                <Link to={stat.link}>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Link to="/team">
                <Button className="w-full">Manage Teams</Button>
              </Link>
              <Link to="/messages">
                <Button variant="outline" className="w-full">View Messages</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your recent activity will appear here. This is a placeholder for the activity feed.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
