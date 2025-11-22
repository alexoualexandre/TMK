import { useState } from "react";

function StructureAppelEntrant() {
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
      <img src="structureAppelEntrant/1.jpg" className="img" onClick={size} />
      <img src="structureAppelEntrant/2.jpg" className="img" onClick={size} />
      <img src="structureAppelEntrant/3.jpg" className="img" onClick={size} />
      <img src="structureAppelEntrant/4.jpg" className="img" onClick={size} />
      <img src="structureAppelEntrant/5.jpg" className="img" onClick={size} />
      <img src="structureAppelEntrant/6.jpg" className="img" onClick={size} />
      <img src="structureAppelEntrant/7.jpg" className="img" onClick={size} />
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

export default StructureAppelEntrant;
