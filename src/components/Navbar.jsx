// src/components/Navbar.jsx
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Inicio", "Servicios", "Nosotros", "Contacto"];

const NavLink = ({ children }) => (
  <Button variant="ghost" _hover={{ bg: "gray.100" }}>
    {children}
  </Button>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="white"
      px={4}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold">TuMarca</Box>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Abrir menú"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          spacing={8}
          alignItems="center"
          display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
