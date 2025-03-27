
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Users, Trash2 } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type Team } from "@/pages/team/TeamPage";

interface TeamListProps {
  teams: Team[];
  onDelete: (id: string) => void;
}

export function TeamList({ teams, onDelete }: TeamListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams.map((team) => (
        <Card key={team.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between items-center">
              <span>{team.name}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(team.id)}
                className="h-8 w-8 text-destructive"
                title="Delete team"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardTitle>
            <CardDescription>
              Created on {format(team.createdAt, "MMM d, yyyy")}
            </CardDescription>
          </CardHeader>
          <div className="px-6 py-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>{team.memberCount} members</span>
              </Badge>
            </div>
          </div>
          <CardFooter className="bg-muted/50 p-3 flex justify-end">
            <Link to={`/team/${team.id}`}>
              <Button variant="outline" size="sm">
                Manage Team
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
