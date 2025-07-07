import { Box, Heading, Button, Container, Text } from "@chakra-ui/react";

export function CallToActionSection() {
  return (
    <Box as="section" bg="teal.600" color="white" py={20} textAlign="center">
      <Container maxW="container.md">
        <Heading as="h2" size="2xl" mb={6} fontWeight="extrabold">
          ¿Listo para transformar tu negocio?
        </Heading>
        <Text fontSize="xl" mb={8}>
          Contáctanos hoy y recibe una consultoría gratuita para empezar a
          crecer en línea.
        </Text>
        <Button
          colorScheme="orange"
          size="lg"
          aria-label="Solicitar Consultoría"
          onClick={() => alert("Redirigir a contacto")}>
          Solicitar Consultoría
        </Button>
      </Container>
    </Box>
  );
}
