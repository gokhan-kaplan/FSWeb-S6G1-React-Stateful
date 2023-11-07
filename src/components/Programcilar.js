/*
Programcilar Talimatları

Şu kısa videoyu izleyin:
https://www.ergineer.com/assets/materials/a664dfe7-programcilar.gif

Bu bileşen, bir yandan programlama alanındaki öncülerin bir listesini,
ve diğer tarafta o anda öne çıkan programcının idsini izler. Yani 2 adet state dilimi!
Aynı zaman içinde yalnız bir harika programcıyı öne çıkarabiliriz.

Yorumları takip edin.
*/

import React, { useState } from "react"; // ADIM 0

export const enIyilerListesi = [
  { id: "1", isim: "Ada Lovelace" },
  { id: "2", isim: "Grace Hopper" },
  { id: "3", isim: "Evelyn Boyd Granville" },
  { id: "4", isim: "Mary Kenneth Keller" },
  { id: "5", isim: "Frances Allen" },
  { id: "6", isim: "Carol Shaw" },
];

export default function Programcilar() {
  const [programcilarListesi] = useState(enIyilerListesi);
  const [oneCikanId, setOneCikanId] = useState(null);

  const oneCikaninIsmi = () => {
    const oneCikanProgramci = programcilarListesi.find(
      (dev) => dev.id === oneCikanId
    );
    return oneCikanProgramci ? oneCikanProgramci.isim : "Bir programcı seçin";
  };

  const stil = {
    fontSize: "1.5em",
    marginTop: "0.5em",
    color: oneCikanId ? "gold" : "royalblue",
  };

  return (
    <div className="widget-programmers container">
      <h2>Programcılar</h2>
      <div className="programmers">
        {programcilarListesi.map((dev) => (
          <div className="programmer" key={dev.id}>
            {dev.isim}{" "}
            <button onClick={() => setOneCikanId(dev.id)}>Kutla</button>
          </div>
        ))}
      </div>
      <div id="featured" style={stil}>
        {oneCikanId
          ? `🎉 Hadi ${oneCikaninIsmi()}'ı kutlayalım! 🥳`
          : "Harika bir programcı seçin"}
      </div>
    </div>
  );
}
