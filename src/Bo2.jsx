import { useState } from "react";

function Bo2() {
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
      <img src="back office 2/1.png" className="img" onClick={size} />
      <img src="back office 2/2.png" className="img" onClick={size} />
      <img src="back office 2/3.png" className="img" onClick={size} />
      <img src="back office 2/4.png" className="img" onClick={size} />
      <img src="back office 2/5.png" className="img" onClick={size} />
      <img src="back office 2/6.png" className="img" onClick={size} />
      <img src="back office 2/7.png" className="img" onClick={size} />
      <img src="back office 2/8.png" className="img" onClick={size} />
      <img src="back office 2/9.png" className="img" onClick={size} />
      <img src="back office 2/10.png" className="img" onClick={size} />
      <img src="back office 2/11.png" className="img" onClick={size} />
      <img src="back office 2/12.png" className="img" onClick={size} />
      <img src="back office 2/13.png" className="img" onClick={size} />
      <img src="back office 2/14.png" className="img" onClick={size} />
      <img src="back office 2/15.png" className="img" onClick={size} />
      <img src="back office 2/16.png" className="img" onClick={size} />
      <img src="back office 2/17.png" className="img" onClick={size} />
      <img src="back office 2/18.png" className="img" onClick={size} />
      <img src="back office 2/19.png" className="img" onClick={size} />
      <img src="back office 2/20.png" className="img" onClick={size} />
      <img src="back office 2/21.png" className="img" onClick={size} />
      <a href="back office 2/formules.pdf" target="_blank">
        <img src="back office 2/PDF_file_icon 1.png" className="img" />
      </a>

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

export default Bo2;
