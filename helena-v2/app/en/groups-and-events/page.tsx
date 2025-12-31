import type { Metadata } from "next";

import GroupForm from "@/components/GroupForm";

export const metadata: Metadata = {
  title: "Groups and events",
};

export default function GroupsAndEventsPage() {
  return (
    <main className="bg-stone-50">
      <GroupForm locale="en" />
    </main>
  );
}
