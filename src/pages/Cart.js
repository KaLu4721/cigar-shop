import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [korpa, setKorpa] = useState([]);

  useEffect(() => {
    const podaci = JSON.parse(localStorage.getItem('korpa')) || [];
    setKorpa(podaci);
  }, []);

  const ukloni = (id) => {
    const novaKorpa = korpa.filter(p => p.id !== id);
    setKorpa(novaKorpa);
    localStorage.setItem('korpa', JSON.stringify(novaKorpa));
  };

  const ukupno = korpa.reduce((suma, p) => suma + parseFloat(p.cena) * p.kolicina, 0);

  return (
    <div className="cart-page">
      <h2>Vaša korpa</h2>
      {korpa.length === 0 ? (
        <p>Korpa je prazna.</p>
      ) : (
        <ul>
          {korpa.map((p, i) => (
            <li key={i}>
              {p.naziv} - {p.kolicina} x {p.cena} RSD = {(parseFloat(p.cena) * p.kolicina).toFixed(2)} RSD
              <button onClick={() => ukloni(p.id)}>Ukloni</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Ukupno: {ukupno.toFixed(2)} RSD</h3>
    </div>
  );
};

export default Cart;
