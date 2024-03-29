import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as PageRoutes from "./constants/routes";
import { Suspense, lazy } from "react";

// Imported Pages as Lazy import
const HomePage = lazy(() => import("./pages/homePage.tsx"));
const LoginPage = lazy(() => import("./pages/loginPage.tsx"));
const RegisterPage = lazy(() => import("./pages/registerPage.tsx"));
const AppLoader = lazy(() => import("./components/layout/appLoader.tsx"));

function App() {
  return (
    <Router>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path={PageRoutes.HOME} element={<HomePage />} />
          <Route path={PageRoutes.LOGIN} element={<LoginPage />} />
          <Route path={PageRoutes.REGISTER} element={<RegisterPage />} />
          <Route path={PageRoutes.NOT_FOUND} element={<LoginPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
