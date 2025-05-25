import { Outlet } from "react-router-dom";
import Cabecera from "../components/Cabecera";

export default function AppLayout() {

  return (
    <>
      <div className="grid grid-rows-[136px_1fr] md:grid-rows-[72px_1fr]">
        <Cabecera />
        <main className="row-[2] flex justify-center">
          <div className={`flex flex-col w-full md:max-w-[90vw] rounded-lg gap-3`}>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}
