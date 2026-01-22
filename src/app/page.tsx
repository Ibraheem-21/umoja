import { Box, Container, Heading, Text } from "@chakra-ui/react";
import path from "path";
import { loadYaml } from "../lib/loadYaml";

type SiteContent = {
  title?: string;
  description?: string;
};

export default async function Home() {
  const sitePath = path.join(process.cwd(), "src/content/site.yaml");
  const site = (await loadYaml(sitePath)) as SiteContent;

  return (
    <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
      <Box as="main">
        <Heading as="h1" size="2xl" mb={4}>
          {site?.title}
        </Heading>
        <Text fontSize="lg" color="gray.600" maxW="3xl">
          {site?.description}
        </Text>
      </Box>
    </Container>
  );
}
