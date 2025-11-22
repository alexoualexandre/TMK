import { useState } from "react";

function Word() {
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
      <img src="word/1.jpg" className="img" onClick={size} />
      <img src="word/2.jpg" className="img" onClick={size} />
      <img src="word/3.jpg" className="img" onClick={size} />
      <img src="word/4.jpg" className="img" onClick={size} />
      <img src="word/5.jpg" className="img" onClick={size} />
      <img src="word/6.jpg" className="img" onClick={size} />
      <img src="word/7.jpg" className="img" onClick={size} />
      <img src="word/8.jpg" className="img" onClick={size} />
      <img src="word/9.jpg" className="img" onClick={size} />
      <img src="word/10.jpg" className="img" onClick={size} />
      <img src="word/11.jpg" className="img" onClick={size} />
      <img src="word/12.jpg" className="img" onClick={size} />
      <img src="word/13.jpg" className="img" onClick={size} />
      <img src="word/14.jpg" className="img" onClick={size} />
      <img src="word/15.jpg" className="img" onClick={size} />
      <img src="word/16.jpg" className="img" onClick={size} />
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

export default Word;
