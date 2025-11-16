import React from "react";
import { Outlet, Link } from "react-router-dom";
/*import { useEffect } from "react";*/

export default function App() {
  /*  const { VITE_API_HTTP, VITE_API_URL, VITE_API_PORT } = import.meta.env;
  const reponseServer = "réponse du serveur : port 3000 en écoute !";
  const request = () => {
    fetch(
      `${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_PORT}/teste/${reponseServer}`
    )
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp.reponse);
      });
  };
  useEffect(() => {
    fetch(`${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_PORT}/get-user`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }, []);
*/
  console.log(window.location.href);
  return (
    <>
      <header>
        <Link to="/">
          {" "}
          <img src="TMK.png" className="logo-tmk" />{" "}
        </Link>
      </header>
      <ul className="liste-titre">
        <li className="liste-categorie">
          {" "}
          <Link to="/route1" className="link">
            Qu'est ce que la GRC ?
          </Link>
        </li>

        <Link to="/route2" className="link">
          <li className="liste-categorie">Méthode d'argumentation CABP</li>
        </Link>

        <Link to="/route3" className="link">
          <li className="liste-categorie">
            La structure de l'appel entrant et assertivité
          </li>
        </Link>
      </ul>

      <Outlet />
    </>
  );
}
