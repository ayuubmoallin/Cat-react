import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import store from "./redux/store";
import { Provider } from "react-redux";
import CatDetailsScreen from "./screens/CatDetailsScreen";
import CatBreedScreen from "./screens/CatBreedScreen";
import CreateCatScreen from "./screens/CreateCatScreen";
import LandingPage from "./screens/LandingPage";
import AdoptedCatsScreen from "./screens/AdoptedCatsScreen";
import AdminScreen from "./screens/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="cat/add" element={<CreateCatScreen />} />
      <Route path="cats/adopted" element={<AdoptedCatsScreen />} />
      <Route path="/cat/:id" element={<CatDetailsScreen />} />
      <Route path="/cats/breed/:name" element={<CatBreedScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
