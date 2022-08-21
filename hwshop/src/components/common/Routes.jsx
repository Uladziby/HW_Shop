import { Routes, Route } from "react-router-dom";
import { routes } from "./constants";
import AboutPage from "../../pages/AboutPage/AboutPage";
import DetailPage from "../../pages/DetailPage/DetailPage";
import MainPage from "../../pages/MainPage/MainPage";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} exact />
      <Route path={routes.Detail + "/:id"} element={<DetailPage />}></Route>
      <Route path={routes.About} element={<AboutPage />}></Route>
      {/*       <Route path="*" element={<NotFound />}></Route>
       */}{" "}
    </Routes>
  );
};
