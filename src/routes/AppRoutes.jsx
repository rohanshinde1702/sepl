import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home_1 from "../pages/Home_1";
import Home_2 from "../pages/Home_2";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home_1 />} />
        <Route path="home" element={<Home_1 />} />
        <Route path="home-1" element={<Home_1 />} />
        <Route path="home-2" element={<Home_2 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
