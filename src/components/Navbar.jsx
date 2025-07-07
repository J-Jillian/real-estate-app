import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const links = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="teal.600"
      px={4}
      color="white"
      position="sticky"
      top="0"
      zIndex="100">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="container.lg"
        mx="auto">
        <Box fontWeight="bold" fontSize="xl" cursor="pointer">
          MiAgencia
        </Box>

        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Abrir menú"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          color="white"
          bg="teal.700"
          _hover={{ bg: "teal.800" }}
        />

        <HStack
          spacing={8}
          alignItems="center"
          display={{ base: "none", md: "flex" }}>
          {links.map(({ label, href }) => (
            <Link
              px={2}
              py={1}
              rounded="md"
              _hover={{ bg: "teal.700" }}
              href={href}
              key={label}>
              {label}
            </Link>
          ))}
        </HStack>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map(({ label, href }) => (
              <Link
                key={label}
                px={2}
                py={1}
                rounded="md"
                _hover={{ bg: "teal.700" }}
                href={href}
                onClick={onClose}>
                {label}
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};
export default Navbar;
