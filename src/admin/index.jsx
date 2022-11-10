import React, { useState } from "react";
import "../App.css";
function Admin() {
  const [naem, setNaem] = useState("");
  const [adminhello] = useState(false);

  const getMessage = () => {
    if (naem === "ernis") {
      alert(`hello ${naem}` );
    }
    if (naem === "") {
      alert("hello  ?");
    }
    if (naem !== "ernis") {
      alert("hello  user");
    }
  };
  
  return (
    <div className="s">
      <div className="block_1">
        <p className="p">{adminhello}</p>
        <p>{}</p>
        <p>{naem}</p>
        <div className="input_block">
          <input
            className="input"
            type="text"
            placeholder="Введите сообщение"
            onChange={(e) => setNaem(e.target.value)}
          />
          <hr />
          <input
            className="input"
            type="text"
            placeholder="Введите сообщение"
            onChange={(e) => setNaem(e.target.value)}
          />
        </div>

        <button onClick={getMessage}>Получить значение</button>
      </div>
    </div>
  );
}

export default Admin;
