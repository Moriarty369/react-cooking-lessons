import React, { useEffect, useState } from "react";

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  // Función para manejar el scroll y actualizar el estado de scrollY
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollY(scrollPosition);
  };

  // Agregamos y eliminamos el evento de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para calcular la posición X de los elementos basados en el scroll, con límites
  const calculateTranslateX = (offset, direction = 1) => {
    const speedFactor = 0.7; // Controla la velocidad del desplazamiento en relación al scroll
    const centerLimit = 0; // Posición en el centro del contenedor (puedes ajustar este valor si lo necesitas)
    
    // Calculamos el nuevo desplazamiento
    let newOffset = direction * (offset - scrollY * speedFactor);

    // Establecemos límites para que los divs no se crucen en el centro
    if (direction === -1) {
      // Limita el desplazamiento del div verde desde la derecha
      newOffset = Math.min(newOffset, centerLimit);
    } else {
      // Limita el desplazamiento del div azul desde la izquierda
      newOffset = Math.max(newOffset, -centerLimit);
    }

    return `translateX(${newOffset}px)`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full overflow-hidden">
      {/* Texto principal */}
      <div className="bg-blue-500 w-1/2">
        <div
          className="text-center px-4"
          style={{ transform: calculateTranslateX(500, -1) }} // Mueve el texto desde la izquierda hacia el centro
        >
          <h2 className="text-5xl font-bold mb-2">Scopri le</h2>
          <h2 className="text-4xl font-bold mb-4">Lezioni di Cucina Italiana</h2>
          <span className="block w-16 h-1 bg-black my-4 mx-auto"></span>
          <div className="mx-20">
            <p>
              Impara i segreti della cucina italiana con le nostre lezioni pratiche e divertenti.
              Da piatti tradizionali a creazioni moderne, scopri come preparare autentiche ricette italiane.
            </p>
          </div>
          <a className="btn_gold" href="#">
            Scopri di più
          </a>
        </div>
      </div>

      {/* Imagen */}
      <div
        className="bg-green-500"
        style={{ transform: calculateTranslateX(500, 1) }} // Mueve la imagen desde la derecha hacia el centro
      >
        <img
          src="./home/vintage-img.png"
          alt="Lezione di Cucina"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ParallaxSection;
