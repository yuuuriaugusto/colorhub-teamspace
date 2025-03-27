
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TeamList } from "@/components/team/TeamList";
import { useToast } from "@/hooks/use-toast";

export type Team = {
  id: string;
  name: string;
  memberCount: number;
  createdAt: Date;
};

const initialTeams: Team[] = [
  {
    id: "1",
    name: "Engineering",
    memberCount: 8,
    createdAt: new Date(2023, 5, 15),
  },
  {
    id: "2",
    name: "Marketing",
    memberCount: 5,
    createdAt: new Date(2023, 6, 10),
  },
  {
    id: "3",
    name: "Design",
    memberCount: 4,
    createdAt: new Date(2023, 7, 5),
  },
];

const TeamPage = () => {
  const [teams, setTeams] = useState<Team[]>(initialTeams);
  const [newTeamName, setNewTeamName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleCreateTeam = () => {
    if (!newTeamName.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Team name cannot be empty",
      });
      return;
    }

    const newTeam: Team = {
      id: Date.now().toString(),
      name: newTeamName,
      memberCount: 0,
      createdAt: new Date(),
    };

    setTeams([...teams, newTeam]);
    setNewTeamName("");
    setIsDialogOpen(false);
    toast({
      title: "Team created",
      description: `"${newTeamName}" has been created successfully.`,
    });
  };

  const handleDeleteTeam = (id: string) => {
    setTeams(teams.filter((team) => team.id !== id));
    toast({
      title: "Team deleted",
      description: "The team has been deleted successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Teams</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Team
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a new team</DialogTitle>
              <DialogDescription>
                Add a new team to manage members and projects.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="team-name">Team name</Label>
                <Input
                  id="team-name"
                  value={newTeamName}
                  onChange={(e) => setNewTeamName(e.target.value)}
                  placeholder="Enter team name"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleCreateTeam}>Create Team</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <TeamList teams={teams} onDelete={handleDeleteTeam} />
    </div>
  );
};

export default TeamPage;
