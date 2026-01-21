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
  const [winner, setWinner] = useState(false);

  const { VITE_API_URL, VITE_API_SERVER_PORT, VITE_API_HTTP } = import.meta.env;

  useEffect(() => {
    let name = prompt("Votre prénom ou un pseudo");
    fetch(
      `${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_SERVER_PORT}/get-user/${name}`,
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
              },
            )
              .then((response) => response.json())
              .then((res) => {
                setInviter(res.number);
                localStorage.setItem("session", res.number);
                localStorage.setItem("next", 1);
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
            },
          )
            .then((response) => response.json())
            .then((res) => {
              localStorage.setItem("session", res.invite);
              localStorage.setItem("next", 2);
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
          `${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_SERVER_PORT}/get-data/${localStorage.getItem("session")}`,
        )
          .then((response) => response.json())
          .then((resp) => {
            setData(resp);
          });
      }, 500);
      return () => clearInterval(interval);
    }
    bdd();
  }, []);

  const demarre = () => {
    buttonAdd.current.style.display = "none";
  };

  const changeInput = (e) => {
    const v = e.target.value;
    let numP;

    if (v === "radio1" && data[0].p36 === "") {
      numP = 36;
    } else {
      if (v === "radio1" && data[0].p29 === "") {
        numP = 29;
      } else {
        if (v === "radio1" && data[0].p22 === "") {
          numP = 22;
        } else {
          if (v === "radio1" && data[0].p15 === "") {
            numP = 15;
          } else {
            if (v === "radio1" && data[0].p8 === "") {
              numP = 8;
            } else {
              if (v === "radio1" && data[0].p1 === "") {
                numP = 1;
              }
            }
          }
        }
      }
    }

    if (v === "radio2" && data[0].p37 === "") {
      numP = 37;
    } else {
      if (v === "radio2" && data[0].p30 === "") {
        numP = 30;
      } else {
        if (v === "radio2" && data[0].p23 === "") {
          numP = 23;
        } else {
          if (v === "radio2" && data[0].p16 === "") {
            numP = 16;
          } else {
            if (v === "radio2" && data[0].p9 === "") {
              numP = 9;
            } else {
              if (v === "radio2" && data[0].p2 === "") {
                numP = 2;
              }
            }
          }
        }
      }
    }

    if (v === "radio3" && data[0].p38 === "") {
      numP = 38;
    } else {
      if (v === "radio3" && data[0].p31 === "") {
        numP = 31;
      } else {
        if (v === "radio3" && data[0].p24 === "") {
          numP = 24;
        } else {
          if (v === "radio3" && data[0].p17 === "") {
            numP = 17;
          } else {
            if (v === "radio3" && data[0].p10 === "") {
              numP = 10;
            } else {
              if (v === "radio3" && data[0].p3 === "") {
                numP = 3;
              }
            }
          }
        }
      }
    }

    if (v === "radio4" && data[0].p39 === "") {
      numP = 39;
    } else {
      if (v === "radio4" && data[0].p32 === "") {
        numP = 32;
      } else {
        if (v === "radio4" && data[0].p25 === "") {
          numP = 25;
        } else {
          if (v === "radio4" && data[0].p18 === "") {
            numP = 18;
          } else {
            if (v === "radio4" && data[0].p11 === "") {
              numP = 11;
            } else {
              if (v === "radio4" && data[0].p4 === "") {
                numP = 4;
              }
            }
          }
        }
      }
    }

    if (v === "radio5" && data[0].p40 === "") {
      numP = 40;
    } else {
      if (v === "radio5" && data[0].p33 === "") {
        numP = 33;
      } else {
        if (v === "radio5" && data[0].p26 === "") {
          numP = 26;
        } else {
          if (v === "radio5" && data[0].p19 === "") {
            numP = 19;
          } else {
            if (v === "radio5" && data[0].p12 === "") {
              numP = 12;
            } else {
              if (v === "radio5" && data[0].p5 === "") {
                numP = 5;
              }
            }
          }
        }
      }
    }

    if (v === "radio6" && data[0].p41 === "") {
      numP = 41;
    } else {
      if (v === "radio6" && data[0].p34 === "") {
        numP = 34;
      } else {
        if (v === "radio6" && data[0].p27 === "") {
          numP = 27;
        } else {
          if (v === "radio6" && data[0].p20 === "") {
            numP = 20;
          } else {
            if (v === "radio6" && data[0].p13 === "") {
              numP = 13;
            } else {
              if (v === "radio6" && data[0].p6 === "") {
                numP = 6;
              }
            }
          }
        }
      }
    }

    if (v === "radio7" && data[0].p42 === "") {
      numP = 42;
    } else {
      if (v === "radio7" && data[0].p35 === "") {
        numP = 35;
      } else {
        if (v === "radio7" && data[0].p28 === "") {
          numP = 28;
        } else {
          if (v === "radio7" && data[0].p21 === "") {
            numP = 21;
          } else {
            if (v === "radio7" && data[0].p14 === "") {
              numP = 14;
            } else {
              if (v === "radio7" && data[0].p7 === "") {
                numP = 7;
              }
            }
          }
        }
      }
    }

    const sql = `UPDATE users SET p${numP} = ? WHERE id = ?`;
    fetch(
      `${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_SERVER_PORT}/update-position`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inpt: v,
          id: localStorage.getItem("session"),
          nex: !paramsId ? 1 : 2,
          compteur: data && parseInt(data[0].compteur, 10) + 1,
          p: data[0].next === 1 ? "r" : "n",
          request: sql,
        }),
      },
    ).then((response) => response.json());
  };
  useEffect(() => {
    if (data && data[0].joueur2) {
      for (let i = 1; i < 2; i++) {
        let pion = document.createElement("div");
        pion.className = "pion";
        if (parseInt(data[0].next, 10) === 2) {
          pion.style.backgroundColor = "black";
        }
        divPuissance.current.appendChild(pion);
      }
    }
  }, [data]);

  function additionR(n1, n2, n3, n4) {
    if (
      data &&
      data[0]["p" + n1] === "r" &&
      data[0]["p" + n2] === "r" &&
      data[0]["p" + n3] === "r" &&
      data[0]["p" + n4] === "r"
    ) {
      setTimeout(() => {
        setWinner("r");
      }, 1100);
    }
  }

  // ligne 1 en bas pion 1 a gauche //
  additionR(36, 29, 22, 15);
  additionR(36, 30, 24, 18);
  additionR(36, 37, 38, 39);
  //////////////////////////////////////

  // ligne 1 en bas pion 2 a gauche //
  additionR(37, 30, 23, 16);
  additionR(37, 31, 25, 19);
  additionR(37, 38, 39, 40);
  //////////////////////////////////////

  // ligne 1 en bas pion 3 a gauche //
  additionR(38, 39, 40, 41);
  additionR(38, 31, 24, 17);
  additionR(38, 32, 26, 20);
  //////////////////////////////////////

  // ligne 1 en bas pion central //
  additionR(39, 31, 23, 15);
  additionR(39, 32, 25, 18);
  additionR(39, 33, 27, 21);
  //////////////////////////////////////

  // ligne 1 en bas pion 3 à droite //
  additionR(40, 33, 26, 19);
  additionR(40, 39, 38, 37);
  additionR(40, 32, 24, 16);
  //////////////////////////////////////

  // ligne 1 en bas pion 2 à droite //
  additionR(41, 34, 27, 20);
  additionR(41, 40, 39, 38);
  additionR(41, 33, 25, 17);
  //////////////////////////////////////

  // ligne 1 en bas pion 42 à droite //
  additionR(42, 35, 28, 21);
  additionR(42, 41, 40, 39);
  additionR(42, 34, 26, 18);
  //////////////////////////////////////

  if (winner && winner === "r") {
    alert(`${data[0].joueur2} a gagné !`);
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
              checked={false}
              value="radio1"
              disabled={
                (data &&
                  parseInt(data[0].next, 10) ===
                    parseInt(localStorage.getItem("next"), 10)) ||
                (data && data[0].p1 !== "")
              }
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={false}
              value="radio2"
              disabled={
                (data &&
                  parseInt(data[0].next, 10) ===
                    parseInt(localStorage.getItem("next"), 10)) ||
                (data && data[0].p2 !== "")
              }
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={false}
              value="radio3"
              disabled={
                (data &&
                  parseInt(data[0].next, 10) ===
                    parseInt(localStorage.getItem("next"), 10)) ||
                (data && data[0].p3 !== "")
              }
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={false}
              value="radio4"
              disabled={
                (data &&
                  parseInt(data[0].next, 10) ===
                    parseInt(localStorage.getItem("next"), 10)) ||
                (data && data[0].p4 !== "")
              }
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={false}
              value="radio5"
              disabled={
                (data &&
                  parseInt(data[0].next, 10) ===
                    parseInt(localStorage.getItem("next"), 10)) ||
                (data && data[0].p5 !== "")
              }
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={false}
              value="radio6"
              disabled={
                (data &&
                  parseInt(data[0].next, 10) ===
                    parseInt(localStorage.getItem("next"), 10)) ||
                (data && data[0].p6 !== "")
              }
            />
            <input
              type="radio"
              className="puce"
              name="radio"
              onChange={changeInput}
              checked={false}
              value="radio7"
              disabled={
                (data &&
                  parseInt(data[0].next, 10) ===
                    parseInt(localStorage.getItem("next"), 10)) ||
                (data && data[0].p7 !== "")
              }
            />
          </div>
        </>
      )}
      <div className="parent">
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p1 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p1 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p2 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p2 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p3 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p3 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p4 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p4 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p5 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p5 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p6 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p6 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p7 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p7 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p8 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p8 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p9 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p9 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p10 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p10 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p11 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p11 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p12 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p12 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p13 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p13 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p14 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p14 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p15 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p15 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p16 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p16 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p17 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p17 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p18 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p18 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p19 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p19 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p20 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p20 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p21 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p21 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p22 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p22 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p23 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p23 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p24 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p24 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p25 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p25 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p26 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p26 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p27 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p27 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p28 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p28 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p29 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p29 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p30 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p30 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p31 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p31 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p32 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p32 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p33 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p33 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p34 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p34 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p35 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p35 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p36 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p36 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p37 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p37 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p38 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p38 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p39 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p39 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p40 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p40 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p41 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p41 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
        <div className="case">
          <div
            className="cercle"
            style={
              data && data[0].p42 === "r"
                ? { backgroundColor: "#E91E63" }
                : data && data[0].p42 === "n"
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
            }
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Puissance;
