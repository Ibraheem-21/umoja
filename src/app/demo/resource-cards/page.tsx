"use client";

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import DemoPageShell from "../_components/DemoPageShell";
import ResourceCard from "@/components/ResourceCard/ResourceCard";
import ResourceDetailCard from "@/components/ResourceDetailCard/ResourceDetailCard";
import ResourceGrid from "@/components/ResourceGrid/ResourceGrid";
import ResourceModal from "@/components/ResourceModal/ResourceModal";

type DemoResource = {
  id: string;
  title: string;
  description: string;
};

const resources: DemoResource[] = [
  {
    id: "academic-support",
    title: "Academic Support Toolkit",
    description:
      "Study planning templates, progress trackers, and family check-in prompts for student athletes.",
  },
  {
    id: "nutrition-guide",
    title: "Game Day Nutrition Guide",
    description:
      "Practical meal timing, hydration reminders, and snack ideas for training and tournament days.",
  },
  {
    id: "recovery-routine",
    title: "Recovery Routine Library",
    description:
      "Mobility, cooldown, and rest strategies to help athletes recover well between sessions.",
  },
  {
    id: "recruiting-checklist",
    title: "Recruiting Readiness Checklist",
    description:
      "A planning checklist for highlight clips, communication, academics, and coach outreach.",
  },
];

export default function ResourceCardsDemoPage() {
  const [selectedResource, setSelectedResource] = useState<DemoResource | null>(null);

  return (
    <DemoPageShell
      title="Resource Cards Demo"
      description="This page exercises the resource card grid and the modal handoff into the resource detail card."
    >
      <ResourceGrid
        resources={resources}
        getResourceKey={(resource) => resource.id}
        renderCard={(resource) => (
          <ResourceCard
            title={resource.title}
            description={resource.description}
            onClick={() => setSelectedResource(resource)}
          />
        )}
      />

      <Box mt={8}>
        <ResourceModal
          isOpen={selectedResource !== null}
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
          getResourceTitle={(resource) => resource.title}
          renderDetailCard={(resource) => (
            <ResourceDetailCard
              title={resource.title}
              description={resource.description}
            />
          )}
        />
      </Box>
    </DemoPageShell>
  );
}
