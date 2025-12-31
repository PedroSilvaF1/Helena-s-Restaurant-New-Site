import type { Metadata } from "next";

import GroupForm from "@/components/GroupForm";

export const metadata: Metadata = {
  title: "Groupes et événements",
};

export default function GroupesEtEvenementsPage() {
  return (
    <main className="bg-stone-50">
      <GroupForm locale="fr" />
    </main>
  );
}
