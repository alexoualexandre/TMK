import { useEffect, useRef, useState } from "react";

function Chevaux() {
  const [valide, setValide] = useState(false);
  const [ok, setOk] = useState(false);
  const [total, setTotal] = useState(0);
  const object = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  const score = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const T = [
    "?",
    "Queue",
    "Croupe",
    "Rein",
    "Dos",
    "Garrot",
    "Crinière",
    "Oreilles",
    "Chanfrein",
    "Naseau",
    "Menton",
    "Epaule",
    "Bras",
    "Coude",
    "Avant-bras",
    "Genou",
    "Sabot",
    "Châtaigne",
    "Ventre",
    "Grasset",
    "Paturon",
    "Boulet",
    "Canon",
    "Jarret",
    "Jambe",
  ];
  const div = useRef();

  useEffect(() => {
    for (let i = 0; i < 24; i++) {
      let select = document.createElement("select");
      select.id = `select${i}`;
      select.className = `select`;
      for (let i = 0; i < 25; i++) {
        let option = document.createElement("option");

        option.value = T[i];
        option.innerHTML = T[i];
        option.name = `r${i}`;
        select.appendChild(option);
      }
      select.onchange = (e) => {
        const value = e.target.value;
        object[i] = value;
        if (
          object[0] !== "" &&
          object[0] !== "?" &&
          object[1] !== "" &&
          object[1] !== "?" &&
          object[2] !== "" &&
          object[2] !== "?" &&
          object[3] !== "" &&
          object[3] !== "?" &&
          object[4] !== "" &&
          object[4] !== "?" &&
          object[5] !== "" &&
          object[5] !== "?" &&
          object[6] !== "" &&
          object[6] !== "?" &&
          object[7] !== "" &&
          object[7] !== "?" &&
          object[8] !== "" &&
          object[8] !== "?" &&
          object[9] !== "" &&
          object[9] !== "?" &&
          object[10] !== "" &&
          object[10] !== "?" &&
          object[11] !== "" &&
          object[11] !== "?" &&
          object[12] !== "" &&
          object[12] !== "?" &&
          object[13] !== "" &&
          object[13] !== "?" &&
          object[14] !== "" &&
          object[14] !== "?" &&
          object[15] !== "" &&
          object[15] !== "?" &&
          object[16] !== "" &&
          object[16] !== "?" &&
          object[17] !== "" &&
          object[17] !== "?" &&
          object[18] !== "" &&
          object[18] !== "?" &&
          object[19] !== "" &&
          object[19] !== "?" &&
          object[20] !== "" &&
          object[20] !== "?" &&
          object[21] !== "" &&
          object[21] !== "?" &&
          object[22] !== "" &&
          object[22] !== "?" &&
          object[23] !== "" &&
          object[23] !== "?"
        ) {
          setValide(true);

          object[0] === "Queue" ? (score[0] = 1) : (score[0] = 0);
          object[1] === "Croupe" ? (score[1] = 1) : (score[1] = 0);
          object[2] === "Rein" ? (score[2] = 1) : (score[2] = 0);
          object[3] === "Dos" ? (score[3] = 1) : (score[3] = 0);
          object[4] === "Garrot" ? (score[4] = 1) : (score[4] = 0);
          object[5] === "Crinière" ? (score[5] = 1) : (score[5] = 0);
          object[6] === "Oreilles" ? (score[6] = 1) : (score[6] = 0);
          object[7] === "Chanfrein" ? (score[7] = 1) : (score[7] = 0);
          object[8] === "Naseau" ? (score[8] = 1) : (score[8] = 0);
          object[9] === "Menton" ? (score[9] = 1) : (score[9] = 0);
          object[10] === "Epaule" ? (score[10] = 1) : (score[10] = 0);
          object[11] === "Bras" ? (score[11] = 1) : (score[11] = 0);
          object[12] === "Coude" ? (score[12] = 1) : (score[12] = 0);
          object[13] === "Avant-bras" ? (score[13] = 1) : (score[13] = 0);
          object[14] === "Genou" ? (score[14] = 1) : (score[14] = 0);
          object[15] === "Sabot" ? (score[15] = 1) : (score[15] = 0);
          object[16] === "Châtaigne" ? (score[16] = 1) : (score[16] = 0);
          object[17] === "Ventre" ? (score[17] = 1) : (score[17] = 0);
          object[18] === "Grasset" ? (score[18] = 1) : (score[18] = 0);
          object[19] === "Paturon" ? (score[19] = 1) : (score[19] = 0);
          object[20] === "Boulet" ? (score[20] = 1) : (score[20] = 0);
          object[21] === "Canon" ? (score[21] = 1) : (score[21] = 0);
          object[22] === "Jarret" ? (score[22] = 1) : (score[22] = 0);
          object[23] === "Jambe" ? (score[23] = 1) : (score[23] = 0);
          setTotal(
            parseInt(score[0], 10) +
              parseInt(score[1], 10) +
              parseInt(score[2], 10) +
              parseInt(score[3], 10) +
              parseInt(score[4], 10) +
              parseInt(score[5], 10) +
              parseInt(score[6], 10) +
              parseInt(score[7], 10) +
              parseInt(score[8], 10) +
              parseInt(score[9], 10) +
              parseInt(score[10], 10) +
              parseInt(score[11], 10) +
              parseInt(score[12], 10) +
              parseInt(score[13], 10) +
              parseInt(score[14], 10) +
              parseInt(score[15], 10) +
              parseInt(score[16], 10) +
              parseInt(score[17], 10) +
              parseInt(score[18], 10) +
              parseInt(score[19], 10) +
              parseInt(score[20], 10) +
              parseInt(score[21], 10) +
              parseInt(score[22], 10) +
              parseInt(score[23], 10)
          );
        }

        console.log(object);
      };
      div.current.appendChild(select);
    }
  }, []);
  console.log(total);
  return (
    <div className="div-chevaux" ref={div}>
      <img src="Capture d’écran 2025-12-25 204102.png" className="chevaux" />
      {valide && (
        <div className="valide">
          <h1 className="h1valide">T'est sûr ???</h1>
          <button
            type="button"
            id="valider"
            onClick={() => {
              setOk(true);
              setValide(false);
            }}
          >
            valider
          </button>
          <button
            type="button"
            id="modifier"
            onClick={() => {
              setValide(false);
            }}
          >
            modifier
          </button>
        </div>
      )}
      {ok && (
        <div className="score">
          <h1 className="total">{total} / 24</h1>
        </div>
      )}
    </div>
  );
}

export default Chevaux;
