import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import CatFacts from "./pages/CatFacts";
import ButtonPage from "./pages/ButtonPage";
import * as Sentry from "@sentry/react";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cat-facts" element={<CatFacts />} />
              <Route path="button" element={<ButtonPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}


export default Sentry.withProfiler(App, {name: 'Demo React App'});
