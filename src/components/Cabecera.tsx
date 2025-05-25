import { NavLink } from "react-router-dom";

export default function Cabecera() {
  return (
    <header className="flex md:flex-row justify-center w-full row-[1] p-4 fixed top-0 left-0 bg-[#030219] z-40">
      <div className="flex flex-col md:flex-row justify-between w-full md:max-w-[90vw] gap-3">
        <a href={import.meta.env.BASE_URL} className="flex w-15 h-15 md:w-10 md:h-10">
          <img
            className="w-full h-full object-cover"
            src="/apliz/img/Apliz_logo.png"
            alt="Logotipo de Armando29vc"
          />
        </a>
        <nav className="flex">
          <NavLink
            to=""
            className={({ isActive }) =>
              `px-5 flex w-fit border-b-2 ${isActive ? 'border-b-cyan-300' : 'border-b-transparent'}`
            }
          >
            {({ isActive }) => (
              <svg className={`w-8 h-8 ${isActive ? 'fill-cyan-300' : 'fill-white'}`}>
                <use href="/apliz/img/sprite.svg#inicio" />
              </svg>
            )}
          </NavLink>

          <NavLink
            to="colores"
            className={({ isActive }) =>
              `px-5 flex w-fit border-b-2 ${isActive ? 'border-b-cyan-300' : 'border-b-transparent'}`
            }
          >
            {({ isActive }) => (
              <svg className={`w-8 h-8 ${isActive ? 'fill-cyan-300' : 'fill-white'}`}>
                <use href="/apliz/img/sprite.svg#paleta" />
              </svg>
            )}
          </NavLink>

          <NavLink
            to="partes-del-cuerpo"
            className={({ isActive }) =>
              `px-5 flex w-fit border-b-2 ${isActive ? 'border-b-cyan-300' : 'border-b-transparent'}`
            }
          >
            {({ isActive }) => (
              <svg className={`w-8 h-8 ${isActive ? 'fill-cyan-300' : 'fill-white'}`}>
                <use href="/apliz/img/sprite.svg#cuerpo" />
              </svg>
            )}
          </NavLink>

          <NavLink
            to="animales"
            className={({ isActive }) =>
              `px-5 flex w-fit border-b-2 ${isActive ? 'border-b-cyan-300' : 'border-b-transparent'}`
            }
          >
            {({ isActive }) => (
              <svg className={`w-8 h-8 ${isActive ? 'fill-cyan-300' : 'fill-white'}`}>
                <use href="/apliz/img/sprite.svg#animales" />
              </svg>
            )}
          </NavLink>

        </nav>
      </div>

    </header>
  )
}
