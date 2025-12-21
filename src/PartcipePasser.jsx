import { useState } from "react";

function PartcipePasser() {
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
        src="participe passé verbes pronominaux/1.png"
        className="img"
        onClick={size}
      />
      <img
        src="participe passé verbes pronominaux/2.png"
        className="img"
        onClick={size}
      />
      <img
        src="participe passé verbes pronominaux/3.png"
        className="img"
        onClick={size}
      />
      <img
        src="participe passé verbes pronominaux/4.png"
        className="img"
        onClick={size}
      />
      <img
        src="participe passé verbes pronominaux/5.png"
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

export default PartcipePasser;
