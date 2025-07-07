// src/components/BlogSection.jsx
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";

const posts = [
  {
    title: "Cómo preparar tu casa para venderla rápido en San Miguel",
    summary:
      "Descubre los pasos clave para hacer tu propiedad más atractiva, desde fotos profesionales hasta estrategia de precio.",
    image: "https://source.unsplash.com/800x600/?house,interior",
    link: "#",
  },
  {
    title: "Tendencias inmobiliarias en San Miguel de Allende 2025",
    summary:
      "Análisis del mercado actual y predicciones para los próximos meses. Ideal si estás considerando invertir.",
    image: "https://source.unsplash.com/800x600/?real-estate,mexico",
    link: "#",
  },
  {
    title: "¿Por qué tener un sitio web para tu propiedad puede acelerar la venta?",
    summary:
      "Te explicamos cómo una web optimizada y estrategias de marketing digital ayudan a captar más compradores.",
    image: "https://source.unsplash.com/800x600/?website,seo",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <Box bg="gray.50" py={{ base: 10, md: 20 }} id="blog">
      <Container maxW="6xl">
        <Stack spacing={6} textAlign="center" mb={12}>
          <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }}>
            Blog y Recursos
          </Heading>
          <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
            Consejos, guías y noticias del sector inmobiliario en San Miguel.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {posts.map((post, i) => (
            <Box key={i} bg="white" shadow="md" borderRadius="xl" overflow="hidden">
              <Image src={post.image} alt={post.title} objectFit="cover" w="100%" h="200px" />
              <Box p={6}>
                <Heading fontSize="xl" mb={2}>
                  {post.title}
                </Heading>
                <Text color="gray.600" mb={4}>
                  {post.summary}
                </Text>
                <Link href={post.link} color="teal.500" fontWeight="semibold">
                  Leer más →
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
