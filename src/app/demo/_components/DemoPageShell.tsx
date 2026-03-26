import Link from "next/link";
import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

type DemoPageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function DemoPageShell({
  title,
  description,
  children,
}: DemoPageShellProps) {
  return (
    <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
      <Box as="main">
        <HStack mb={6}>
          <Text
            asChild
            color="orange.800"
            fontWeight="semibold"
            textDecoration="underline"
          >
            <Link href="/demo">Back to demos</Link>
          </Text>
        </HStack>

        <Box mb={8}>
          <Heading as="h1" size="2xl" mb={3}>
            {title}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" maxW="3xl">
            {description}
          </Text>
        </Box>

        {children}
      </Box>
    </Container>
  );
}
