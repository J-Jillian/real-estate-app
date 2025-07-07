import React from "react";

export default function Home() {
  return (
    <section className="text-center py-20 px-6">
      <h2 className="text-4xl font-bold text-blue-600">
        Encuentra tu hogar ideal
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        Explora propiedades exclusivas en San Miguel de Allende.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
        Ver propiedades
      </button>
    </section>
  );
}
