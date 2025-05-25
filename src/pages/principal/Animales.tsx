import { animales } from "../../data/ts/animales";

export default function Animales() {
  // Agrupar por subcategoría
  const subcategorias = animales.reduce((acc, palabra) => {
    const categoria = palabra.subcategoria || "sin categoría";
    if (!acc[categoria]) acc[categoria] = [];
    acc[categoria].push(palabra);
    return acc;
  }, {} as Record<string, typeof animales>);

  // Función para determinar si es un emoji
  const esEmoji = (str: string) => {
    // Simple verificación: si es un solo caracter unicode visible (emoji)
    return /^[\p{Emoji}]{1,2}$/u.test(str);
  };

  return (
    <section>
      <div className="flex w-full px-3 sticky top-34 md:top-18 bg-[#030219] z-10">
        <h2 className="text-2xl font-bold text-cyan-300">Animales 🐕‍🦺</h2>
      </div>

      {Object.entries(subcategorias).map(([categoria, palabras]) => (
        <div key={categoria} className="p-3">
          <h3 className="text-xl font-semibold text-cyan-200 mb-3">{categoria}</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,_1fr))] gap-5">
            {palabras.map((palabra, index) => (
              <div
                key={index}
                className="flex flex-wrap items-center w-full gap-3 p-3 rounded-lg shadow-[0_0_3px_#53eafd]"
              >
                {/* Renderizar imagen / SVG / Emoji */}
                {palabra.imagen && (
                  esEmoji(palabra.imagen) ? (
                    <div className="text-6xl">{palabra.imagen}</div>
                  ) : palabra.imagen.includes("#") ? (
                    <svg className="w-20 h-20">
                      <use href={palabra.imagen} />
                    </svg>
                  ) : (
                    <img
                      src={palabra.imagen}
                      alt={palabra.es}
                      className="w-20 h-20 object-contain rounded"
                    />
                  )
                )}

                <div>
                  <p className="font-bold">
                    Español: <span className="font-normal">{palabra.es}</span>
                  </p>
                  <p className="font-bold">
                    Zapoteco: <span className="font-normal">{palabra.za}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
