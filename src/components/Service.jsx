// src/components/Services.jsx
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaCamera, FaGlobe, FaLaptopCode, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: FaGlobe,
    title: "Promoción en línea",
    description:
      "Aumentamos la visibilidad de tu propiedad o servicio turístico a través de campañas digitales y posicionamiento SEO local.",
  },
  {
    icon: FaCamera,
    title: "Fotografía y video profesional",
    description:
      "Capturamos imágenes y videos de alta calidad para destacar tu oferta en redes sociales, portales y sitios web.",
  },
  {
    icon: FaLaptopCode,
    title: "Diseño web optimizado",
    description:
      "Creamos páginas modernas, responsivas y orientadas a la conversión, enfocadas en resultados tangibles.",
  },
  {
    icon: FaChartLine,
    title: "Estrategia digital personalizada",
    description:
      "Analizamos tu negocio y diseñamos un plan integral para alcanzar tus metas, con foco en el mercado inmobiliario y turístico.",
  },
];

export default function Services() {
  return (
    <Box bg="gray.50" py={{ base: 10, md: 20 }}>
      <Container maxW="6xl">
        <Stack spacing={6} textAlign="center" mb={12}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold">
            Nuestros Servicios
          </Heading>
          <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
            Soluciones integrales para destacar tu propiedad o negocio turístico
            en San Miguel de Allende y más allá.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {services.map((service, index) => (
            <Stack key={index} direction="row" spacing={4} align="flex-start">
              <Flex
                w={12}
                h={12}
                align="center"
                justify="center"
                rounded="full"
                bg="teal.500">
                <Icon as={service.icon} color="white" w={6} h={6} />
              </Flex>
              <Box>
                <Heading size="md" mb={1}>
                  {service.title}
                </Heading>
                <Text color="gray.600">{service.description}</Text>
              </Box>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
