/*
Kareler Talimaları

Aşağıdaki kısa videoyu izleyin:
https://www.ergineer.com/assets/materials/a664dfe7-kareler.gif

Bu bileşen, bir yandan "kare idlerinin" listesinin kaydını tutar,
ve şu anda aktif olan id yi tutar. Yani iki dilim kullanılacak!
Biri kareleri oluşturmak için kullanılır, diğeri ise id yi tutmak için,
böylece bileşen hangi karenin o anda aktif olduğunu bilir.

Herhangi bir noktada yalnızca bir kare aktif olabilir (ya da hiçbiri)

Aşaıdaki yorumları takip edin.
*/

import React, { useState } from "react";

const KareIdListesi = ["sqA", "sqB", "sqC", "sqD"];

export default function Kareler() {
  // State hook'unu iki kez kullanarak 'kareler' ve 'aktifKare' adında iki state değişkeni oluşturun.
  // 'kareler' kare idlerini bir dizi olarak saklayacak, 'aktifKare' ise şu anda aktif olan kareyi izleyecek.
  // Sayfa yüklendiğinde aktif kare olmayacak, yani 'aktifKare' başlangıçta null olmalıdır.
  const [kareler] = useState(KareIdListesi);
  const [aktifKare, setAktifKare] = useState(null);

  const ClassAdiAl = (id) => {
    // Bu bir click handler değil, JSX içinde kullanılan bir yardımcı fonksiyondur.
    // Eğer argüman olarak verilen id, aktif kare state'indeki id ile eşleşirse, class adı 'active' olan bir string döndürecektir.
    // Diğer durumlar için boş bir string döndürecektir.
    // Etkisini görmek için kareye sağ tıklayın ve "öğeyi inceleyin".
    return id === aktifKare ? "active" : "";
  };

  const AktifEt = (id) => {
    // Bu bir satır içinde çağrılan click handler yardımcısıdır.
    // 'id' bağımsız değişkenini, stateteki aktif id olacak şekilde ayarlayın.
    // Eğer zaten aktifse, o zaman önce state'i sıfırlamalıyız.
    if (id === aktifKare) {
      setAktifKare(null);
    } else {
      setAktifKare(id);
    }
  };

  return (
    <div className="widget-squares container">
      <h2>Kareler</h2>
      <div className="squares">
        {kareler.map((id) => (
          <div
            id={id}
            key={id}
            className={`square ${ClassAdiAl(id)}`}
            onClick={() => AktifEt(id)}
          ></div>
        ))}
      </div>
    </div>
  );
}
