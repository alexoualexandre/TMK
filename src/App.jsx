import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  const { VITE_API_HTTP, VITE_API_URL, VITE_API_PORT } = import.meta.env;
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
  return (
    <>
      <header>
        <h1 style={{ color: "white" }}>header</h1>

        <nav>
          <ul className="ul-nav">
            <li>
              <Link to="/" className="link">
                Accueils
              </Link>
            </li>
            <li>
              <Link to="/route1" className="link">
                route1
              </Link>
            </li>
            <li>
              <Link to="/route2" className="link">
                route2
              </Link>
            </li>
            <li>
              <Link to="/form" className="link">
                formulaire
              </Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </header>
      <button type="button" onClick={request}>
        request
      </button>
    </>
  );
}
