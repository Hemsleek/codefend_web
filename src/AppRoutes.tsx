import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
