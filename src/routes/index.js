import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Historia from "../pages/Historia";
import QuemSomos from "../pages/QuemSomos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/quemsomos" element={<QuemSomos />} />
    </Routes>
  );
}
