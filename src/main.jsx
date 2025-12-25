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
import InitiationTechVente from "./InitiationTechVente.jsx";
import Ecritpro3 from "./EcritPro3.jsx";
import ModeleLettre from "./ModelLettre.jsx";
import FourmulesUtilesEnBackOffice from "./FourmulesUtilesEnBackOffice.jsx";
import PhrasesGeneriques from "./PhrasesGeneriques.jsx";
import Bo1 from "./Bo1.jsx";
import Bo2 from "./Bo2.jsx";
import GestionReclam from "./GestionReclam.jsx";
import TechniquRecouvrement1 from "./TechniquRecouvrement1.jsx";
import EcritPro4 from "./EcritPro4.jsx";
import PartcipePasser from "./PartcipePasser.jsx";
import SubjonctifPresent from "./SubjonctifPresent.jsx";
import Tchat from "./Tchat.jsx";
import Chevaux from "./Chevaux.jsx";

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
      {
        path: "/route9",
        element: <InitiationTechVente />,
      },
      {
        path: "/route10",
        element: <Ecritpro3 />,
      },
      {
        path: "/route11",
        element: <ModeleLettre />,
      },
      {
        path: "/route12",
        element: <FourmulesUtilesEnBackOffice />,
      },
      {
        path: "/route13",
        element: <PhrasesGeneriques />,
      },
      {
        path: "/route14",
        element: <Bo1 />,
      },
      {
        path: "/route15",
        element: <Bo2 />,
      },
      {
        path: "/route16",
        element: <GestionReclam />,
      },
      {
        path: "/route17",
        element: <TechniquRecouvrement1 />,
      },
      {
        path: "/route18",
        element: <EcritPro4 />,
      },
      {
        path: "/route19",
        element: <PartcipePasser />,
      },
      {
        path: "/route20",
        element: <SubjonctifPresent />,
      },
      {
        path: "/route21",
        element: <Tchat />,
      },
      {
        path: "/chevaux",
        element: <Chevaux />,
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
