// This file is the entry point for the React application.
// It sets up the router, Redux store, and Auth0 provider.

import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./component/Home/Home.jsx";
import Men from "./component/Men/Men.jsx";
import Women from "./component/Women/Women.jsx";
import Kids from "./component/Kids/Kids.jsx";
import HomeAndLiving from "./component/HomeAndLiving/HomeAndLiving.jsx";
import Beauty from "./component/Beauty/Beauty.jsx";
import Menproduct from "./component/ProductInfo/Menproduct.jsx";
import Womenproduct from "./component/ProductInfo/Womenproduct.jsx";
import Kidsproduct from "./component/ProductInfo/Kidsproduct.jsx";
import HomeAnsLivingproduct from "./component/ProductInfo/Homeandlivingproduct.jsx";
import Bag from "./component/Bag/Bag.jsx";
import WishList from "./component/WishList/Wish.jsx";
import { Provider } from "react-redux";
import { store } from "./App/Store.js";
import { StrictMode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Help from "./component/Help/Help.jsx";
import FAQ from "./component/FAQ's/FAQ.jsx";

// Create the router with routes for different components
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/Men" element={<Men />} />
      <Route path="/Menproduct" element={<Menproduct />} />
      <Route path="/Womenproduct" element={<Womenproduct />} />
      <Route path="/Kidsproduct" element={<Kidsproduct />} />
      <Route path="/HomeAnsLivingproduct" element={<HomeAnsLivingproduct />} />
      <Route path="/Women" element={<Women />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/Home & Living" element={<HomeAndLiving />} />
      <Route path="/Beauty" element={<Beauty />} />
      <Route path="/Wish" element={<WishList />} />
      <Route path="/Studio" element={<Men />} />
      <Route path="/Bag" element={<Bag />} />
      <Route path="/Help" element={<Help />} />
      <Route path="/FAQ" element={<FAQ />} />
    </Route>
  )
);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-hlaiohujxp2aic02.us.auth0.com"
      clientId="cC0LhAlZ1krPcp7UEEfwgPhBlpYlpZXf"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Auth0Provider>
  </StrictMode>
);
