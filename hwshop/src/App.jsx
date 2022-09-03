/** @format */
import "./App.css";
import FooterComponent from "./components/header/footer";
import HeaderComponent from "./components/header/header";
import { LoginModal } from "./components/modal/LoginModal";
import { Route, Routes } from "react-router";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import MainPage from "./pages/MainPage/MainPage";
import { routes } from "./common/constants";
import { ErrorBoundary } from "./common/ErrorBoundary";
import React from "react";
import { CartModal } from "./components/modal/CartModal/CartModal";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainPage />} exact />
          <Route path={`${routes.Detail}/:id`} element={<DetailPage />}></Route>
          <Route path={routes.About} element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
      <FooterComponent />
      <LoginModal />
      <CartModal />
    </div>
  );
}

export default App;
