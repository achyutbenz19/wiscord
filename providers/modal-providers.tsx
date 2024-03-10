"use client";
import { useEffect, useState } from "react";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { ServerSettingsModal } from "@/components/modals/server-settings";
import { MembersModal } from "@/components/modals/manage-members";
import { CreateChannelModal } from "@/components/modals/create-channel-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <ServerSettingsModal />
      <MembersModal />
      <CreateChannelModal />
    </>
  );
};
