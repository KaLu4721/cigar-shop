import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();

  const proizvodi = [
    { id: 1, naziv: 'Cigar broj 1', cena: '1000.00 RSD', opis: 'Kubanska' },
    { id: 2, naziv: 'Cigar broj 2 Ova je primer', cena: '1500.00 RSD', opis: 'Kubanska' },
    { id: 3, naziv: 'Cigar broj 3', cena: '1030.00 RSD', opis: 'Meksiko' },
    { id: 4, naziv: 'Cigar broj 4', cena: '1000.00 RSD', opis: 'Kubanska' },
    { id: 5, naziv: 'Cigar broj 5', cena: '1000.00 RSD', opis: 'Kubanska' },
    { id: 6, naziv: 'Cigar broj 6', cena: '1000.00 RSD', opis: 'Kubanska' },
    { id: 7, naziv: 'Cigar broj 7', cena: '1000.00 RSD', opis: 'Kubanska' },
    { id: 8, naziv: 'Cigar broj 8', cena: '1000.00 RSD', opis: 'Kubanska' },
  ];

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
    <section id="proizvodi" className="section-pi">
      <div className="pro-container">
        {proizvodi.map((proizvod) => (
          <div className="pro" key={proizvod.id} onClick={() => handleClick(proizvod.id)} style={{ cursor: 'pointer' }}>
            <img src="/images/1659395071-dickson-kwok-pCRaGNEom10-unsplash-750x500.jpg" alt={proizvod.naziv} />
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

export default Shop;
