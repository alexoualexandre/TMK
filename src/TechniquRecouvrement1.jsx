import { useState } from "react";

function TechniquRecouvrement1() {
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
        src="technique de recouvrement 1sur 2/1.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/2.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/3.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/4.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/5.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/6.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/7.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/8.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/9.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/10.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/11.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/12.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/13.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/14.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/15.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/16.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/17.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/18.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/19.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/20.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/21.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/22.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/23.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/24.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/25.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/26.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/27.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/28.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/29.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/30.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/31.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/32.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/33.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/34.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/35.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/36.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/37.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/38.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/39.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/40.png"
        className="img"
        onClick={size}
      />
      <img
        src="technique de recouvrement 1sur 2/41.png"
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

export default TechniquRecouvrement1;
