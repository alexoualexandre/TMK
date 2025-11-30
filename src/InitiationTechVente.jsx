import { useState } from "react";

function InitiationTechVente() {
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
      <img src="tech de vente/1.jpg" className="img" onClick={size} />
      <img src="tech de vente/2.jpg" className="img" onClick={size} />
      <img src="tech de vente/3.jpg" className="img" onClick={size} />
      <img src="tech de vente/4.jpg" className="img" onClick={size} />
      <img src="tech de vente/5.jpg" className="img" onClick={size} />
      <img src="tech de vente/6.jpg" className="img" onClick={size} />
      <img src="tech de vente/7.jpg" className="img" onClick={size} />

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

export default InitiationTechVente;
