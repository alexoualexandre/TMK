import { useState } from "react";

function EcritPro4() {
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
      <img src="ecrit pro 4 sur 6/1.png" className="img" onClick={size} />
      <img src="ecrit pro 4 sur 6/2.png" className="img" onClick={size} />
      <img src="ecrit pro 4 sur 6/3.png" className="img" onClick={size} />
      <img src="ecrit pro 4 sur 6/4.png" className="img" onClick={size} />
      <img src="ecrit pro 4 sur 6/5.png" className="img" onClick={size} />
      <img src="ecrit pro 4 sur 6/6.png" className="img" onClick={size} />
      <img src="ecrit pro 4 sur 6/7.png" className="img" onClick={size} />

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

export default EcritPro4;
