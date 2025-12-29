import { useEffect, useState } from "react";

function Puissance() {
  const params = new URLSearchParams(window.location.search);
  const paramsId = params.get("id");

  const [inviter, setInviter] = useState("");
  const { VITE_API_URL, VITE_API_SERVER_PORT, VITE_API_HTTP } = import.meta.env;

  useEffect(() => {
    let name = prompt("Votre prénom ou un pseudo");
    fetch(
      `${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_SERVER_PORT}/get-user/${name}`
    )
      .then((response) => response.json())
      .then((resp) => {
        if (!paramsId) {
          if (resp.length !== 0 && resp[0].joueur1 === name) {
            alert("nom déjà utilisé");
            location.reload();
          } else {
            fetch(
              `${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_SERVER_PORT}/add-user`,

              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  us: name,
                }),
              }
            )
              .then((response) => response.json())
              .then((res) => {
                setInviter(res.number);
                localStorage.setItem("session", inviter);
                console.log(localStorage.getItem("session"));
              });
          }
        } else {
          fetch(
            `${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_SERVER_PORT}/update-invitation`,

            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                us: name,
                id: paramsId,
              }),
            }
          )
            .then((response) => response.json())
            .then((res) => {
              localStorage.setItem("session", res.invite);
              console.log(localStorage.getItem("session"));
            });
        }
      });
  }, []);

  //   useEffect(() => {
  //     function bdd() {
  //       const interval = setInterval(() => {
  //         fetch(
  //           `${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_SERVER_PORT}/get-user`
  //         )
  //           .then((response) => response.json())
  //           .then((resp) => {
  //             setUsers(resp);
  //           });
  //       }, 2000);
  //       return () => clearInterval(interval);
  //     }

  //     bdd();
  //   }, []);

  return (
    <div className="div-puissance">
      <img src="P4.png" className="img-puissance4" />
      <a
        href={
          inviter !== "" &&
          `sms:0659834511?body=Envoyez lui ce lien et jouer ensemble à puissance 4 ! ${VITE_API_HTTP}://${VITE_API_URL}:5003/puissance4?id=${inviter}`
        }
      >
        <button className="partage">inviter</button>
      </a>
      {/* <div className="lesnoms"><h4>{users && users[0].nom1}</h4><h4>{users && users[0].nom2}</h4></div> */}

      <div className="parent">
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
        <div className="case">
          <div className="cercle"></div>
        </div>
      </div>
    </div>
  );
}

export default Puissance;
