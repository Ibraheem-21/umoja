import { SimpleGrid } from "@chakra-ui/react";
import DemoPageShell from "../_components/DemoPageShell";
import { EventCard } from "@/components/EventCard/EventCard";

const events = [
  {
    title: "Spring Skills Clinic",
    date: "April 12, 2026",
    time: "10:00 AM",
    location: "Harlem  Community Gym",
    description:
      "A fundamentals-focused clinic covering footwork, ball handling, and finishing for middle school athletes.",
    tags: ["Clinic", "Grades 6-8"],
    registerHref: "#spring-skills-clinic",
  },
  {
    title: "Summer Tryout Showcase",
    date: "June 6, 2026",
    time: "1:30 PM",
    location: "Brooklyn Sports Center",
    description:
      "Player evaluations, live scrimmages, and coach feedback for athletes interested in the summer training cohort.",
    tags: ["Tryout", "Invite Only", "Summer"],
    registerHref: "#summer-tryout-showcase",
  },
  {
    title: "Parent Information Night",
    date: "May 1, 2026",
    location: "UMOJA Learning Hub",
    description:
      "Overview of academy programming, expectations, travel details, and academic support resources for families.",
    tags: ["Family", "Info Session"],
    registerHref: "#parent-information-night",
  },
];

export default function EventCardDemoPage() {
  return (
    <DemoPageShell
      title="Event Card Demo"
      description="Representative event card layouts for different content densities and tag combinations."
    >
      <SimpleGrid columns={1} gap={6}>
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </SimpleGrid>
    </DemoPageShell>
  );
}
