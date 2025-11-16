import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Composant1 from "./composant1.jsx";
import Composant2 from "./Composant2.jsx";
import { Provider } from "./Context.jsx";
import Formulaire from "./Formulaire.jsx";
import StructureAppelEntrant from "./StructureAppelEntrant.jsx";
import "./index.css";

// Définition du routeur
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/route1",
        element: <Composant1 />,
      },
      {
        path: "/route2",
        element: <Composant2 />,
      },
      {
        path: "/form",
        element: <Formulaire />,
      },
	{
        path: "/route3",
        element: <StructureAppelEntrant />,
      },
    ],
  },
]);

// Rendu principal
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
