import { Box, SimpleGrid } from "@chakra-ui/react";
import DemoPageShell from "../_components/DemoPageShell";
import WhatWeOfferCard from "@/components/WhatWeOfferCard/WhatWeOfferCard";

function BookIcon() {
  return (
    <Box as="span" boxSize="10" display="inline-flex">
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" aria-hidden="true">
        <path d="M6 4.75A2.75 2.75 0 0 1 8.75 2h9.5A1.75 1.75 0 0 1 20 3.75v14.5A1.75 1.75 0 0 1 18.25 20h-10A3.25 3.25 0 0 0 5 23.25a.75.75 0 0 1-1.5 0v-15A3.5 3.5 0 0 1 6 4.75ZM8.75 3.5A1.25 1.25 0 0 0 7.5 4.75v13.09c.24-.05.49-.09.75-.09h10.25V3.75a.25.25 0 0 0-.25-.25h-9.5Zm-1.5 15.78c-.97.29-1.68 1.2-1.74 2.22.52-.49 1.23-.8 1.99-.8h9.75a.75.75 0 0 0 0-1.5H8.25c-.35 0-.68.03-1 .08Z" />
      </svg>
    </Box>
  );
}

function TrophyIcon() {
  return (
    <Box as="span" boxSize="10" display="inline-flex">
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" aria-hidden="true">
        <path d="M8.25 3A2.25 2.25 0 0 0 6 5.25V6H4.25A2.25 2.25 0 0 0 2 8.25v.5A5.25 5.25 0 0 0 6.7 13.97a5.99 5.99 0 0 0 4.55 3.21v2.57H8.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-2.5v-2.57a5.99 5.99 0 0 0 4.55-3.21A5.25 5.25 0 0 0 22 8.75v-.5A2.25 2.25 0 0 0 19.75 6H18V5.25A2.25 2.25 0 0 0 15.75 3h-7.5ZM18 7.5h1.75c.41 0 .75.34.75.75v.5a3.75 3.75 0 0 1-2.02 3.32c.02-.19.02-.38.02-.57V7.5Zm-12 0v4c0 .19 0 .38.02.57A3.75 3.75 0 0 1 3.5 8.75v-.5c0-.41.34-.75.75-.75H6Z" />
      </svg>
    </Box>
  );
}

const offers = [
  {
    title: "Elite Skill Development",
    description:
      "Position-specific training sessions built around footwork, reads, finishing, and game pace.",
  },
  {
    title: "Academic Support",
    description:
      "Planning systems and accountability tools that support progress off the court.",
    icon: <BookIcon />,
  },
  {
    title: "Competitive Exposure",
    description:
      "Showcase opportunities and team experiences that prepare athletes for the next level.",
    icon: <TrophyIcon />,
  },
];

export default function WhatWeOfferCardDemoPage() {
  return (
    <DemoPageShell
      title="What We Offer Card Demo"
      description="Offer cards with the built-in icon option and two custom SVG icon examples."
    >
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
        {offers.map((offer) => (
          <WhatWeOfferCard key={offer.title} {...offer} />
        ))}
      </SimpleGrid>
    </DemoPageShell>
  );
}
