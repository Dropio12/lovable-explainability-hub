
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: "New Workflow Available",
    description: "Check out our latest AI-powered workflow templates",
    time: "2 mins ago"
  },
  {
    id: 2,
    title: "System Update",
    description: "Successfully processed latest batch of health records",
    time: "1 hour ago"
  },
  {
    id: 3,
    title: "Team Collaboration",
    description: "Dr. Smith shared a new workflow with your team",
    time: "2 hours ago"
  }
];

export function NotificationsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] backdrop-blur-md bg-white/80">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Notifications
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[450px] pr-4">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 rounded-lg backdrop-blur-sm bg-white/40 border border-white/50 hover:bg-white/60 transition-all duration-200"
              >
                <h3 className="font-semibold text-gray-800">{notification.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                <span className="text-xs text-gray-500 mt-2 block">{notification.time}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
