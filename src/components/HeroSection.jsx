// components/HeroSection.jsx
import { Box, Heading, Text, Button, Container } from "@chakra-ui/react";

export function HeroSection() {
  return (
    <Box bg="teal.500" color="white" py={20} textAlign="center">
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" mb={4} fontWeight="extrabold">
          Tu Solución Integral para [Servicio Principal]
        </Heading>
        <Text fontSize="xl" maxW="600px" mx="auto" mb={8}>
          Ayudamos a [tipo de clientes] a lograr [beneficio clave] con nuestro
          servicio profesional y confiable.
        </Text>
        <Button
          size="lg"
          colorScheme="orange"
          aria-label="Contáctanos"
          onClick={() => alert("Redirigir a contacto")}>
          Contáctanos Hoy
        </Button>
      </Container>
    </Box>
  );
}
