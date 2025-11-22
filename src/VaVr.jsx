import { useState } from "react";

function Vavr() {
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
      <img src="VAVR/1.jpg" className="img" onClick={size} />
      <img src="VAVR/2.jpg" className="img" onClick={size} />
      <img src="VAVR/3.jpg" className="img" onClick={size} />
      <img src="VAVR/4.jpg" className="img" onClick={size} />
      <img src="VAVR/5.jpg" className="img" onClick={size} />
      <img src="VAVR/6.jpg" className="img" onClick={size} />
      <img src="VAVR/7.jpg" className="img" onClick={size} />
      <img src="VAVR/8.jpg" className="img" onClick={size} />
      <img src="VAVR/9.jpg" className="img" onClick={size} />
      <img src="VAVR/10.jpg" className="img" onClick={size} />
      <img src="VAVR/11.jpg" className="img" onClick={size} />
      <img src="VAVR/12.jpg" className="img" onClick={size} />
      <img src="VAVR/13.jpg" className="img" onClick={size} />
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

export default Vavr;
