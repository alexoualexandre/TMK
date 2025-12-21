import { useState } from "react";

function GestionReclam() {
  const [div, setDiv] = useState(false);
  const [src, setSrc] = useState("");
  const size = (e) => {
    const i = e.target;

    setDiv(true);
    setSrc(i.src);
  };
  const reduce = () => {
    setDiv(false);
  };
  return (
    <section className="section1">
      <img
        src="gestion des réclamations 1 sur 3/1.png"
        className="img"
        onClick={size}
      />
      <img
        src="gestion des réclamations 1 sur 3/2.png"
        className="img"
        onClick={size}
      />
      <img
        src="gestion des réclamations 1 sur 3/3.png"
        className="img"
        onClick={size}
      />
      <img
        src="gestion des réclamations 1 sur 3/4.png"
        className="img"
        onClick={size}
      />
      <img
        src="gestion des réclamations 1 sur 3/5.png"
        className="img"
        onClick={size}
      />
      <img
        src="gestion des réclamations 1 sur 3/6.png"
        className="img"
        onClick={size}
      />
      <img
        src="gestion des réclamations 1 sur 3/7.png"
        className="img"
        onClick={size}
      />
      <img
        src="gestion des réclamations 1 sur 3/8.png"
        className="img"
        onClick={size}
      />
      <img
        src="gestion des réclamations 1 sur 3/9.png"
        className="img"
        onClick={size}
      />
      <img
        src="gestion des réclamations 1 sur 3/10.png"
        className="img"
        onClick={size}
      />
      <img
        src="gestion des réclamations 1 sur 3/11.png"
        className="img"
        onClick={size}
      />

      {div && (
        <div className="div-img">
          <button className="button-off" onClick={reduce}>
            ✖
          </button>
          <img src={`${src}`} className="img-fullScreen" onClick={size} />
        </div>
      )}
    </section>
  );
}

export default GestionReclam;
