import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-20 text-sm text-gray-500">
      © {new Date().getFullYear()} Inmobiliaria San Miguel. Todos los derechos
      reservados.
    </footer>
  );
};
export default Footer;
