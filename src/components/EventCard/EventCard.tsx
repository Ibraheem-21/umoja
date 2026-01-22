import { Box, Heading, Text, Badge, Stack } from "@chakra-ui/react";

interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  status?: "upcoming" | "past" | "ongoing";
}

export function EventCard({
  title,
  date,
  time,
  location,
  description,
  status = "upcoming",
}: EventCardProps) {
  const statusColors = {
    upcoming: "green",
    past: "gray",
    ongoing: "blue",
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      bg="white"
      shadow="md"
      _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
      transition="all 0.2s"
    >
      <Stack gap={3}>
        <Box display="flex" justifyContent="space-between" alignItems="start">
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Badge colorScheme={statusColors[status]} fontSize="sm">
            {status}
          </Badge>
        </Box>

        <Stack gap={2} fontSize="sm" color="gray.600">
          <Text>
            📅 {date} {time && `• ${time}`}
          </Text>
          <Text>📍 {location}</Text>
        </Stack>

        <Text color="gray.700" mt={2}>
          {description}
        </Text>
      </Stack>
    </Box>
  );
}
