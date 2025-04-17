import React from 'react';
import { useNavigate } from 'react-router-dom';
const Najprodavanije = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  const addToCart = (proizvod) => {
    const korpa = JSON.parse(localStorage.getItem('korpa')) || [];
    const postoji = korpa.find(p => p.id === proizvod.id);
  
    if (postoji) {
      postoji.kolicina += 1;
    } else {
      korpa.push({ ...proizvod, kolicina: 1 });
    }
  
    localStorage.setItem('korpa', JSON.stringify(korpa));
    alert(`${proizvod.naziv} je dodat u korpu!`);
  };
  
    return (
      <section id="proizvod1" className="section-p1">
        <h2>NAJPRODAVANIJE</h2>
        <p>Pogledajte šta kupci najčešće kupuju</p>
        <div className="pro-container">
          {[
            { id: 1, naziv: 'Cigar broj 1', cena: '1000.00 RSD', opis: 'Kubanska' },
            { id: 2, naziv: 'Cigar broj 2', cena: '1500.00 RSD', opis: 'Kubanska' },
            { id: 3, naziv: 'Cigar broj 3', cena: '1030.00 RSD', opis: 'Meksiko' },
            { id: 4, naziv: 'Cigar broj 4', cena: '1000.00 RSD', opis: 'Kubanska' },
          ].map((proizvod, index) => (
            <div className="pro" key={index} onClick={() => handleClick(proizvod.id)} style={{ cursor: 'pointer' }}>
              <img src="/images/1659395071-dickson-kwok-pCRaGNEom10-unsplash-750x500.jpg" alt="" />
              <div className="opis">
                <span>{proizvod.opis}</span>
                <h5>{proizvod.naziv}</h5>
                <h4>{proizvod.cena}</h4>
              </div>
              <button className="korpa" onClick={(e) => {
              e.stopPropagation(); // sprečava da klik otvori detaljnu stranicu
              
              addToCart(proizvod); // dodaj proizvod u korpu
            }}>
              <i className="fa fa-shopping-basket" />
            </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Najprodavanije;
  