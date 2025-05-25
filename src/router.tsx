import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Colores from "./pages/principal/Colores";
import Index from "./pages/Index";
import PartesDelCuerpo from "./pages/principal/PartesDelCuerpo";
import Animales from "./pages/principal/Animales";

export default function Router() {
  return (
    <BrowserRouter basename="/apliz/">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Index />} />
          <Route path="colores" element={<Colores />} />
          <Route path="partes-del-cuerpo" element={<PartesDelCuerpo />} />
          <Route path="animales" element={<Animales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}