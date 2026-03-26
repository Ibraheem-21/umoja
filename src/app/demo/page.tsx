import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

const demoPages = [
  {
    href: "/demo/event-card",
    title: "Event Card",
    description: "Multiple event card states in a responsive grid.",
  },
  {
    href: "/demo/resource-cards",
    title: "Resource Cards",
    description: "Clickable resource cards with the detail modal flow.",
  },
  {
    href: "/demo/resource-detail-cards",
    title: "Resource Detail Cards",
    description: "Large detail cards rendered in a stacked grid layout.",
  },
  {
    href: "/demo/team-card",
    title: "Team Card",
    description: "Team member cards with and without descriptions.",
  },
  {
    href: "/demo/testimonial-card",
    title: "Testimonial Card",
    description: "Testimonials with a range of quote lengths and ratings.",
  },
  {
    href: "/demo/what-we-offer-card",
    title: "What We Offer Card",
    description: "Offer cards with default and custom icon treatments.",
  },
];

export default function DemoIndexPage() {
  return (
    <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={3}>
          Component Demo Pages
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" maxW="3xl" mb={8}>
          Use these routes to visually test the current card components in isolation.
        </Text>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
          {demoPages.map((demoPage) => (
            <GridItem key={demoPage.href}>
              <Box
                asChild
                display="block"
                bg="bg.surface"
                borderWidth="1px"
                borderColor="border"
                borderRadius="xl"
                boxShadow="sm"
                p={6}
                transition="transform 120ms ease, box-shadow 120ms ease"
                _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
              >
                <Link href={demoPage.href}>
                  <Heading as="h2" size="md" mb={2}>
                    {demoPage.title}
                  </Heading>
                  <Text color="fg.muted">{demoPage.description}</Text>
                </Link>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
