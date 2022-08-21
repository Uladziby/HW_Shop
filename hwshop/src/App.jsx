import "./App.css";
import FooterComponent from "./components/header/footer";
import HeaderComponent from "./components/header/header";
import { useRoutes } from "./components/common/Routes";

function App() {
  const routes = useRoutes();
  return (
    <div className="App">
      <HeaderComponent />
      {routes}
      <FooterComponent />
    </div>
  );
}

export default App;
