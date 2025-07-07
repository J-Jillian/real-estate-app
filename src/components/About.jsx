// src/components/About.jsx
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box bg="white" py={{ base: 10, md: 20 }}>
      <Container maxW="6xl">
        <Stack spacing={6} textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold">
            Somos tu aliado en marketing inmobiliario y turístico
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            maxW="3xl"
            mx="auto">
            Con más de 5 años de experiencia en diseño web, SEO, promoción de
            propiedades y estrategias de turismo digital, ayudamos a empresas e
            individuos a destacar en un mercado competitivo. Nuestro equipo
            combina creatividad, tecnología y visión estratégica para lograr
            resultados reales.
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            maxW="3xl"
            mx="auto">
            Trabajamos con clientes en San Miguel de Allende y otras zonas clave
            de México, ofreciendo soluciones personalizadas que conectan con tu
            audiencia ideal.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
