import { colores } from "../../data/ts/colores";
import { esColorHex } from "../../utils/Color";

export default function Colores() {

  return (
    <section className="">
      <div className="flex w-full px-3  sticky top-34 md:top-18 bg-[#030219] z-10">
      <h2 className="text-2xl font-bold text-cyan-300">🎨 Colores en Zapoteco</h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,_1fr))]  gap-3 p-3">
        {colores.map((palabra, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center w-full  gap-3 p-3  rounded-lg shadow-[0_0_3px_#53eafd]"
          >
            {palabra.imagen && (
              esColorHex(palabra.imagen) ? (
                <div
                  className="w-20 h-20 rounded-lg border"
                  style={{ backgroundColor: palabra.imagen }}
                  title={`Color ${palabra.es}`}
                />
              ) : (
                <img
                  src={palabra.imagen}
                  alt={palabra.es}
                  className="w-20 h-20 object-contain border rounded"
                />
              )
            )}
            <div>
              <p className="font-bold">Español: <span className="font-normal">{palabra.es}</span></p>
              <p className="font-bold">Zapoteco: <span className="font-normal">{palabra.za}</span></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
