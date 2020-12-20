import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";
import { routes } from "./config/routes";
import HeaderNavigation from "./components/HeaderNavigation";
import MainRoutes from "./components/MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <HeaderNavigation routes={routes} />
      <MainRoutes routes={routes} />
    </BrowserRouter>
  );
}

export default App;
