import { useState } from "react";

function Bo1() {
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
      <img src="back office/1.png" className="img" onClick={size} />
      <img src="back office/2.png" className="img" onClick={size} />
      <img src="back office/3.png" className="img" onClick={size} />
      <img src="back office/4.png" className="img" onClick={size} />
      <img src="back office/5.png" className="img" onClick={size} />
      <img src="back office/6.png" className="img" onClick={size} />
      <img src="back office/7.png" className="img" onClick={size} />
      <img src="back office/8.png" className="img" onClick={size} />
      <img src="back office/9.png" className="img" onClick={size} />
      <img src="back office/10.png" className="img" onClick={size} />
      <img src="back office/11.png" className="img" onClick={size} />
      <img src="back office/12.png" className="img" onClick={size} />
      <img src="back office/13.png" className="img" onClick={size} />
      <img src="back office/14.png" className="img" onClick={size} />

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

export default Bo1;
