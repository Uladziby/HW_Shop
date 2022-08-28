import "./App.css";
import FooterComponent from "./components/header/footer";
import HeaderComponent from "./components/header/header";
import { AppProvider } from "./common/AppProvider";
import { useState } from "react";
import {LoginModal} from "./components/modal/LoginModal";
import {LoginModalRx} from "./components/modal/LoginModal";
import { Route, Routes } from "react-router";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import MainPage from "./pages/MainPage/MainPage";
import { routes } from "./common/constants";
import { ErrorBoundary } from "./common/ErrorBoundary";
import React  from 'react';
import { CartModal } from "./components/modal/CartModal/CartModal";

function App() {
  const [isShowModal, setShowModal] = useState(false);
  const [isShowNotification, showNotification] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const handlerCloseModal = () => {
    setShowModal(false);
  };

  const handlerShowNotification = (value) => {
    showNotification(value);
  };

  return (
    <div className="App">
      <AppProvider>
        <HeaderComponent setShowModal={openModal} />
        <ErrorBoundary>
          <Routes>
            <Route
              path="/"
              element={<MainPage handlerShowNotification={handlerShowNotification} />}
              exact
            />
            <Route
              path={routes.Detail + "/:id"}
              element={<DetailPage handlerShowNotification={handlerShowNotification} />}
            ></Route>
            <Route path={routes.About} element={<AboutPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
        </ErrorBoundary>
        <FooterComponent
          handlerShowNotification={handlerShowNotification}
          isShowNotification={isShowNotification}
        />
        <LoginModal handlerCloseModal={handlerCloseModal} isShowModal={isShowModal} />
        <CartModal />
      </AppProvider>
    </div>
  );
}

export default App;
