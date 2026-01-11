import { useEffect, useRef, useState } from "react";

function Puissance() {
  const params = new URLSearchParams(window.location.search);
  const paramsId = params.get("id");
  const buttonAdd = useRef();
  const divPuissance = useRef();

  const [inviter, setInviter] = useState("");
  const [insertNumber, setInsertNumber] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [data, setData] = useState(false);
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
      }, 800);
      return () => clearInterval(interval);
    }
    bdd();
  }, []);

  const demarre = () => {
    buttonAdd.current.style.display = "none";
  };

  const changeInput = (e) => {
    fetch(
      `${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_SERVER_PORT}/update-position`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inpt: e.target.value,
          id: localStorage.getItem("session"),
        }),
      }
    ).then((response) => response.json());
  };

  if (data && data[0].joueur2) {
    for (let i = 1; i < 43; i++) {
      let pion = document.createElement("div");
      pion.className = "pion";

      if (i === 3) {
        pion.style.left = "50%";
        pion.style.zIndex = 2;
        pion.id = "p3";
      }

      if (i === 2) {
        pion.style.left = "55%";
        pion.style.zIndex = 3;
        pion.id = "p2";
      }

      if (i === 1) {
        pion.style.left = "60%";
        pion.style.zIndex = 4;
        pion.id = "p1";
      }

      if (i % 2 === 0) {
        pion.style.backgroundColor = "yellow";
      }

      divPuissance.current.appendChild(pion);
    }
  }

  return (
    <div className="div-puissance" ref={divPuissance}>
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
        <h4 className="h4-les-noms">
          {data && data[0].joueur1}
          <br />
          <span className="span-les-noms">
            {data && data[0].joueur1 ? "0" : ""}
          </span>
        </h4>{" "}
        <h4 className="h4-les-noms">
          {data && data[0].joueur2}
          <br />
          <span className="span-les-noms">
            {data && data[0].joueur2 ? "0" : ""}
          </span>
        </h4>
      </div>
      {data && data[0].joueur2 && (
        <>
          <div className="barre">
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={data && data[0].radio_position === "radio1"}
              value="radio1"
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={data && data[0].radio_position === "radio2"}
              value="radio2"
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={data && data[0].radio_position === "radio3"}
              value="radio3"
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={data && data[0].radio_position === "radio4"}
              value="radio4"
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={data && data[0].radio_position === "radio5"}
              value="radio5"
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={data && data[0].radio_position === "radio6"}
              value="radio6"
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={data && data[0].radio_position === "radio7"}
              value="radio7"
            />
          </div>
        </>
      )}
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
