import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Colores from "./pages/principal/Colores";
import Index from "./pages/Index";
import PartesDelCuerpo from "./pages/principal/PartesDelCuerpo";
import Animales from "./pages/principal/Animales";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<Index />} index />
          <Route path='/colores' element={<Colores />} index />
          <Route path='/partes-del-cuerpo' element={<PartesDelCuerpo />} index />
          <Route path='/animales' element={<Animales />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}