import { useEffect, useRef, useState } from "react";

function Puissance() {
  const params = new URLSearchParams(window.location.search);
  const paramsId = params.get("id");
  const buttonAdd = useRef();

  const [inviter, setInviter] = useState("");
  const [insertNumber, setInsertNumber] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [data, setData] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
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
                localStorage.setItem("session", res.number);
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

  const input = () => {
    if (!/^(06|07)[0-9]{8}$/.test(valueInput)) {
      setInsertNumber(true);
    }
  };

  const focusOn = () => {
    buttonAdd.current.style.opacity = 0;
  };

  const focusOff = () => {
    buttonAdd.current.style.opacity = 1;
    setInsertNumber(false);
  };

  const change = (e) => {
    setValueInput(e.target.value);
  };

  if (/^(06|07)[0-9]{8}$/.test(valueInput)) {
    buttonAdd.current.style.opacity = 1;
  }

  useEffect(() => {
    function bdd() {
      
        const interval = setInterval(() => {
          fetch(
            `${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_SERVER_PORT}/get-data/${localStorage.getItem("session")}`
          )
            .then((response) => response.json())
            .then((resp) => {
              setData(resp);
            });
        }, 2000);
        return () => clearInterval(interval);
      
    }
    bdd();
  }, []);

  const demarre = () => {
    setOpenUsers(true);
    buttonAdd.current.style.display = "none";
  };
  console.log(data);
  return (
    <div className="div-puissance">
      <img src="P4.png" className="img-puissance4" />

      {!params.get("id") &&
        (!/^(06|07)[0-9]{8}$/.test(valueInput) ? (
          <button className="partage" onClick={input} ref={buttonAdd}>
            Jouer avec un ami
          </button>
        ) : (
          <a
            href={
              inviter !== "" &&
              `sms:${valueInput}?body=Envoyez lui ce lien et jouer ensemble à puissance 4 ! ${VITE_API_HTTP}://${VITE_API_URL}:5003/puissance4?id=${inviter}`
            }
          >
            {}
            <button className="partage" ref={buttonAdd} onClick={demarre}>
              Je l'invite !
            </button>
          </a>
        ))}

      {!params.get("id") &&
        insertNumber &&
        !/^(06|07)[0-9]{8}$/.test(valueInput) && (
          <input
            type="text"
            className="insert-number"
            autoFocus
            onFocus={focusOn}
            onBlur={focusOff}
            onChange={change}
            placeholder="Son numéro de mobile ..."
          />
        )}

      <div className="lesnoms">
        <h4>{openUsers && data[0][0].joueur1}</h4>{" "}
        <h4>{openUsers && data[0][0].joueur2}</h4>
      </div>
      {/* <div className="lesnoms"><h4>salope</h4></div> */}

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
