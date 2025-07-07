import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box bg="gray.50" py={{ base: 10, md: 20 }}>
      <Container maxW="6xl">
        <Stack spacing={6} textAlign="center">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            fontWeight="bold">
            Agencia especializada en promoción inmobiliaria y turística en San
            Miguel de Allende
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} color="gray.600">
            Atrae más compradores, mejora tu presencia online y convierte
            visitas en ventas. Potenciamos tu visibilidad con diseño web
            profesional, SEO, contenido y redes sociales.
          </Text>
          <Stack direction="column" spacing={4} align="center">
            <Button colorScheme="teal" size="lg">
              Solicita una consultoría gratis
            </Button>
            <Button variant="link" colorScheme="teal">
              Conoce nuestros servicios
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
export default Hero;
