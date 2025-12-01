import { MyContext } from "./Context.jsx";
import { useState } from "react";

function Ecritpro3() {
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
      <img src="ecritpro3/1.jpg" className="img" onClick={size} />
      <img src="ecritpro3/2.jpg" className="img" onClick={size} />
      <img src="ecritpro3/3.jpg" className="img" onClick={size} />
      <img src="ecritpro3/4.jpg" className="img" onClick={size} />
      <img src="ecritpro3/5.jpg" className="img" onClick={size} />
      <img src="ecritpro3/6.jpg" className="img" onClick={size} />
      <img src="ecritpro3/7.jpg" className="img" onClick={size} />
      <img src="ecritpro3/8.jpg" className="img" onClick={size} />
      <img src="ecritpro3/9.jpg" className="img" onClick={size} />
      <img src="ecritpro3/10.jpg" className="img" onClick={size} />
      <img src="ecritpro3/11.jpg" className="img" onClick={size} />
      <img src="ecritpro3/12.jpg" className="img" onClick={size} />
      <img src="ecritpro3/13.jpg" className="img" onClick={size} />
      <img src="ecritpro3/14.jpg" className="img" onClick={size} />

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

export default Ecritpro3;
