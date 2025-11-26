import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Composant1 from "./composant1.jsx";
import Composant2 from "./Composant2.jsx";
import { Provider } from "./Context.jsx";
import Formulaire from "./Formulaire.jsx";
import StructureAppelEntrant from "./StructureAppelEntrant.jsx";
import Glossaire from "./Glossaire.jsx";
import "./index.css";
import Word from "./Word.jsx";
import Vavr from "./VaVr.jsx";
import Math from "./Math.jsx";
import ExpressionEcrite from "./ExpressionEcrite.jsx";

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
      {
        path: "/route4",
        element: <Glossaire />,
      },
      {
        path: "/route5",
        element: <Word />,
      },
      {
        path: "/route6",
        element: <Vavr />,
      },
      {
        path: "/route7",
        element: <Math />,
      },
      {
        path: "/route8",
        element: <ExpressionEcrite />,
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
