import { Box, Heading, Text, Container, Flex, Image } from "@chakra-ui/react";

export function AboutSection() {
  return (
    <Box as="section" bg="white" py={20}>
      <Container maxW="container.lg">
        <Flex direction={{ base: "column", md: "row" }} align="center" gap={12}>
          <Box flex="1">
            <Heading as="h2" size="2xl" mb={6} fontWeight="bold">
              Sobre Nosotros
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight="tall">
              Somos una agencia con más de 5 años de experiencia en marketing
              digital, especializada en ayudar a negocios locales de San Miguel
              de Allende a crecer con estrategias personalizadas y efectivas.
            </Text>
          </Box>
          <Box flex="1">
            <Image
              src="/images/team-working.jpg"
              alt="Equipo de marketing digital trabajando"
              borderRadius="md"
              shadow="md"
              loading="lazy"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
