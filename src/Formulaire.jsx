import { useState } from "react";

function Formulaire() {
  const [form, setForm] = useState({ nom: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const prevDefault = function (e) {
    e.preventDefault();
  };
  console.log(form);
  return (
    <form method="post" className="form" onSubmit={prevDefault}>
      <input
        type="texte"
        name="nom"
        onChange={change}
        placeholder="votre nom ..."
      />

      <input type="submit" value="valider" />
    </form>
  );
}

export default Formulaire;
