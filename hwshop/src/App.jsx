import "./App.css";
import FooterComponent from "./components/header/footer";
import HeaderComponent from "./components/header/header";
import { useRoutes } from "./components/common/Routes";
import { CartProvider } from "./components/common/CartProvider";

function App() {
  const routes = useRoutes();
  return (
    <div className="App">
      <CartProvider>
      <HeaderComponent/>
      {routes}
      <FooterComponent />
      </CartProvider>
    </div>
  );
}

export default App;
