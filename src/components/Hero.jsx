import React from "react";

function Hero() {
  return (
    <div
      className="relative bg-gray-900 h-[500px] flex items-center"
        style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Descubre Sudamérica
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl">
          Explora los destinos más increíbles de Sudamérica. Desde playas
          paradisíacas hasta antiguas ruinas, tenemos el viaje perfecto para ti.
        </p>
      </div>
    </div>
  );
}

export default Hero;
