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
      {/* <header>
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
          <li className="liste-categorie">
            Méthode d'argumentation
            <br />
            CABP
          </li>
        </Link>

        <Link to="/route3" className="link">
          <li className="liste-categorie">
            La structure de l'appel
            <br />
            entrant et assertivité
          </li>
        </Link>
        <Link to="/route4" className="link">
          <li className="liste-categorie">Glossaire de la relation client</li>
        </Link>
        <Link to="/route5" className="link">
          <li className="liste-categorie">Word</li>
        </Link>
        <Link to="/route6" className="link">
          <li className="liste-categorie">
            Vente additionnelle/
            <br />
            Vente au rebond
          </li>
        </Link>
        <Link to="/route7" className="link">
          <li className="liste-categorie">Mathématique</li>
        </Link>
        <Link to="/route8" className="link">
          <li className="liste-categorie">Expression écrite</li>
        </Link>
        <Link to="/route9" className="link">
          <li className="liste-categorie">ACCR / techiniques de ventes</li>
        </Link>
        <Link to="/route10" className="link">
          <li className="liste-categorie">Ecrits professionnels 3/6</li>
        </Link>
        <Link to="/route11" className="link">
          <li className="liste-categorie">Modele de lettre</li>
        </Link>
        <Link to="/route12" className="link">
          <li className="liste-categorie">Fourmules utiles en back office</li>
        </Link>
        <Link to="/route13" className="link">
          <li className="liste-categorie">Phrases génériques</li>
        </Link>
        <Link to="/route14" className="link">
          <li className="liste-categorie">Back office 1/3</li>
        </Link>
        <Link to="/route15" className="link">
          <li className="liste-categorie">Back office 2/3</li>
        </Link>
        <Link to="/route16" className="link">
          <li className="liste-categorie">
            Gestions des
            <br />
            réclamations1/3
          </li>
        </Link>
        <Link to="/route17" className="link">
          <li className="liste-categorie">
            technique de <br />
            recouvrement 1/2
          </li>
        </Link>
        <Link to="/route18" className="link">
          <li className="liste-categorie">Ecrits professionnels 4/6</li>
        </Link>
        <Link to="/route19" className="link">
          <li className="liste-categorie">
            participe passé
            <br />
            verbes pronominaux
          </li>
        </Link>
        <Link to="/route20" className="link">
          <li className="liste-categorie">Subjonctif présent</li>
        </Link>
        <Link to="/route21" className="link">
          <li className="liste-categorie">Les tchats</li>
        </Link>
      </ul> */}

      <Outlet />
    </>
  );
}
