import React from "react";
import { string } from "zod";

interface ServerSidebarProps {
  serverId: string;
}

const ServerSidebar = ({ serverId }: ServerSidebarProps) => {
  return (
    <div>
        {serverId}
    </div>
  );
};

export default ServerSidebar;
