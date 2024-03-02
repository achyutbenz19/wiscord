import { currentProfile } from "@/lib/current-profile";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { redirect } from "next/navigation";
import React from "react";
import { Separator } from "../ui/separator";

interface ServerSidebarProps {
  serverId: string;
}

const ServerSidebar = async ({ serverId }: ServerSidebarProps) => {
  const profile = await currentProfile();

  if (!profile) {
    redirect("/");
  }

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">{serverId}</div>
        <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
      </ScrollArea>
    </div>
  );
};

export default ServerSidebar;
