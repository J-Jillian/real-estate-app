// components/BenefitsSection.jsx
import { Box, Heading, Text, SimpleGrid, Container } from "@chakra-ui/react";

const benefits = [
  {
    title: "Experiencia y Profesionalismo",
    description:
      "Contamos con más de [X] años ayudando a clientes a alcanzar sus objetivos de manera eficiente y personalizada.",
  },
  {
    title: "Soluciones a Medida",
    description:
      "Adaptamos nuestros servicios para cubrir las necesidades específicas de cada cliente, garantizando resultados óptimos.",
  },
  {
    title: "Soporte Continuo",
    description:
      "Nuestro equipo está disponible para ayudarte en todo momento, asegurando una experiencia sin complicaciones.",
  },
];

export function BenefitsSection() {
  return (
    <Container maxW="container.lg" mt={16}>
      <Heading as="h2" size="xl" mb={8} textAlign="center" fontWeight="bold">
        ¿Por qué elegirnos?
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {benefits.map(({ title, description }) => (
          <Box
            key={title}
            bg="white"
            p={6}
            rounded="md"
            shadow="md"
            _hover={{ shadow: "lg" }}>
            <Heading as="h3" size="md" mb={4}>
              {title}
            </Heading>
            <Text>{description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
