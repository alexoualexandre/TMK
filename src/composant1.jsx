import { MyContext } from "./Context.jsx";
import { useState } from "react";

function Composant1() {
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
      <img src="j1/1.jpg" className="img" onClick={size} />

      <img src="j1/2.jpg" className="img" onClick={size} />
      <img src="j1/3.jpg" className="img" onClick={size} />
      <img src="j1/4.jpg" className="img" onClick={size} />
      <img src="j1/5.jpg" className="img" onClick={size} />
      <img src="j1/6.jpg" className="img" onClick={size} />
      <img src="j1/7.jpg" className="img" onClick={size} />
      <img src="j1/8.jpg" className="img" onClick={size} />
      <img src="j1/9.jpg" className="img" onClick={size} />
      <img src="j1/10.jpg" className="img" onClick={size} />

      <img src="j1/11.jpg" className="img" onClick={size} />
      <img src="j1/12.jpg" className="img" onClick={size} />
      <img src="j1/13.jpg" className="img" onClick={size} />
      <img src="j1/14.jpg" className="img" onClick={size} />
      <img src="j1/15.jpg" className="img" onClick={size} />
      <img src="j1/16.jpg" className="img" onClick={size} />
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

export default Composant1;
