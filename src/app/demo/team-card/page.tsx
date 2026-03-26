import { SimpleGrid } from "@chakra-ui/react";
import DemoPageShell from "../_components/DemoPageShell";
import TeamCard from "@/components/TeamCard/TeamCard";

const teamMembers = [
  {
    name: "Coach Maya Johnson",
    position: "Program Director",
    description:
      "Leads player development strategy, family engagement, and the academy training calendar.",
    imageUrl: "/demo-team-maya.svg",
  },
  {
    name: "Jordan Ellis",
    position: "Skills Trainer",
    description:
      "Focuses on footwork, perimeter scoring, and small-group player development sessions.",
    imageUrl: "/demo-team-jordan.svg",
  },
  {
    name: "Avery Thompson",
    position: "Academic Advisor",
  },
];

export default function TeamCardDemoPage() {
  return (
    <DemoPageShell
      title="Team Card Demo"
      description="A responsive team card grid showing typical biography lengths and an abbreviated card variant."
    >
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
        {teamMembers.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </SimpleGrid>
    </DemoPageShell>
  );
}
