import { useState } from "react";

function SubjonctifPresent() {
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
      <img src="le subjonctif présent/1.png" className="img" onClick={size} />
      <img src="le subjonctif présent/2.png" className="img" onClick={size} />
      <img src="le subjonctif présent/3.png" className="img" onClick={size} />

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

export default SubjonctifPresent;
