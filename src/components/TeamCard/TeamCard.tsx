import { Box, Heading, Image, Text } from "@chakra-ui/react";

type TeamCardProps = {
  name: string;
  position: string;
  description?: string;
  imageUrl?: string;
};

export default function TeamCard({
  name,
  position,
  description,
  imageUrl,
}: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Box
      w={{ base: "full", sm: "xs" }}
      bg="bg.surface"
      borderRadius="xl"
      borderWidth="1px"
      borderColor="border"
      boxShadow="md"
      overflow="hidden"
    >
      {/* Top banner  */}
      <Box h="24" bg="orange.900" />

      {/* Content */}
      <Box position="relative" p={6} pt={20} textAlign="center">
        <Box
          position="absolute"
          top="-12"
          left="50%"
          transform="translateX(-50%)"
          w="24"
          h="24"
          borderRadius="full"
          borderWidth="4px"
          borderColor="bg.surface"
          boxShadow="lg"
          overflow="hidden"
          bg="orange.100"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${name} profile photo`}
              w="full"
              h="full"
              objectFit="cover"
            />
          ) : (
            <Text fontSize="3xl" fontWeight="bold" color="orange.900">
              {initials}
            </Text>
          )}
        </Box>

        <Heading as="h3" size="md" color="gray.800" mb={1}>
          {name}
        </Heading>

        <Text fontSize="md" color="gray.700" fontStyle="italic">
          {position}
        </Text>

        {description ? (
          <Text
            mt={3}
            fontSize="sm"
            color="gray.700"
            lineClamp={3}
          >
            {description}
          </Text>
        ) : null}
      </Box>
    </Box>
  );
}

