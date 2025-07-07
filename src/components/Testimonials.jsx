// src/components/Testimonials.jsx
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";

const testimonials = [
  {
    name: "María López",
    role: "Vendedora de propiedades en San Miguel",
    content:
      "“Excelente equipo, su trabajo me ayudó a vender mi casa en solo 2 semanas. ¡Totalmente recomendados!”",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Pedro Márquez",
    role: "Guía turístico local",
    content:
      "“Gracias a su estrategia de redes y SEO, mis tours comenzaron a llenarse cada semana. Un cambio increíble.”",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ana Torres",
    role: "Propietaria de boutique hotel",
    content:
      "“Imágenes y sitio web de alta calidad que aumentaron las reservas directamente desde el sitio. Muy profesionales.”",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Testimonials() {
  return (
    <Box bg="white" py={{ base: 10, md: 20 }} id="testimonials">
      <Container maxW="6xl">
        <Stack spacing={6} textAlign="center" mb={12}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold">
            Lo que opinan nuestros clientes
          </Heading>
          <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
            Reseñas reales verificadas por clientes en San Miguel de Allende.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {testimonials.map((t, i) => (
            <Box
              key={i}
              p={6}
              shadow="md"
              border="1px solid"
              borderColor="gray.100"
              rounded="xl">
              <Stack spacing={4}>
                <Text color="gray.700">{t.content}</Text>
                <Stack direction="row" align="center">
                  <Avatar name={t.name} src={t.image} />
                  <Box>
                    <Text fontWeight="bold">{t.name}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {t.role}
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
