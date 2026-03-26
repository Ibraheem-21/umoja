import { SimpleGrid } from "@chakra-ui/react";
import DemoPageShell from "../_components/DemoPageShell";
import ResourceDetailCard from "@/components/ResourceDetailCard/ResourceDetailCard";

const resourceDetails = [
  {
    title: "Student Athlete Success Guide",
    description:
      "A long-form overview that combines weekly planning habits, academic accountability, and communication expectations for players and families navigating school and competitive basketball at the same time.",
  },
  {
    title: "Training At Home Series",
    description:
      "Structured solo sessions focused on ball control, footwork patterns, finishing angles, and consistency when athletes are outside of formal team practice.",
  },
  {
    title: "College Prep Resource Pack",
    description:
      "An overview of timelines, benchmark goals, and organizing materials that help families start the college athletics conversation early and realistically.",
  },
];

export default function ResourceDetailCardsDemoPage() {
  return (
    <DemoPageShell
      title="Resource Detail Cards Demo"
      description="Large-format detail cards rendered in a vertical grid for layout and content stress testing."
    >
      <SimpleGrid columns={1} gap={8}>
        {resourceDetails.map((resource) => (
          <ResourceDetailCard
            key={resource.title}
            title={resource.title}
            description={resource.description}
          />
        ))}
      </SimpleGrid>
    </DemoPageShell>
  );
}
