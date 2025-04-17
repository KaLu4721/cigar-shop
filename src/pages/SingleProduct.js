import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import slika1 from '../assets/003415_1.jpg';
import slika2 from '../assets/piksla.jpg';
import slika3 from '../assets/piksla.jpg';
import slika4 from '../assets/piksla.jpg';

const proizvodi = [
  {
    id: 1,
    naziv: 'Cigar broj 1',
    cena: '1000.00',
    opis: 'Kubanska',
    detalji: 'Cigara broj 1 je klasik među cigarama.',
    slike: [slika1, slika2, slika3, slika4],
  },
  {
    id: 2,
    naziv: 'Cigar broj 2',
    cena: '1500.00',
    opis: 'Dominikana',
    detalji: 'Luksuzna cigara sa specijalnim punjenjem.',
    slike: [slika2, slika1, slika3, slika4],
  },
];

const SingleProduct = () => {
  const { id } = useParams();
  const proizvod = proizvodi.find(p => p.id === parseInt(id));

  const [mainImage, setMainImage] = useState(null);
  const [kolicina, setKolicina] = useState(1);
  const [velicina, setVelicina] = useState('');

  useEffect(() => {
    if (proizvod) {
      setMainImage(proizvod.slike[0]);
    }
  }, [proizvod]);

  const addToCart = () => {
    if (!velicina) {
      alert("Molimo izaberite veličinu.");
      return;
    }

    const korpa = JSON.parse(localStorage.getItem('korpa')) || [];

    // Proveravamo da li postoji isti proizvod sa istom veličinom
    const postoji = korpa.find(p => p.id === proizvod.id && p.velicina === velicina);

    if (postoji) {
      postoji.kolicina += parseInt(kolicina);
    } else {
      korpa.push({
        ...proizvod,
        kolicina: parseInt(kolicina),
        velicina: velicina,
      });
    }

    localStorage.setItem('korpa', JSON.stringify(korpa));
    alert(`${proizvod.naziv} (${velicina}) x${kolicina} dodat u korpu!`);
  };

  if (!proizvod) return <h2>Proizvod nije pronađen</h2>;

  return (
    <section id="prodetails" className="section-pi">
      <div className="single-pro-image">
        <img src={mainImage} width="100%" id="MainImg" alt="Main" />
        <div className="small-img-group">
          {proizvod.slike.map((slika, index) => (
            <div className="small-img-col" key={index}>
              <img
                src={slika}
                width="100%"
                className="small-img"
                alt={`Slika ${index + 1}`}
                onClick={() => setMainImage(slika)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="single-pro-details">
        <h6>Cigare</h6>
        <h4>{proizvod.naziv}</h4>
        <h2>{proizvod.cena} RSD</h2>

        <select onChange={(e) => setVelicina(e.target.value)} value={velicina}>
          <option value="">Izaberi veličinu</option>
          <option value="Mali">Mali</option>
          <option value="Srednji">Srednji</option>
          <option value="Veliki">Veliki</option>
        </select>

        <div className="quantity-cart">
          <input
            type="number"
            min="1"
            value={kolicina}
            onChange={(e) => setKolicina(e.target.value)}
          />
          <button onClick={addToCart}>Dodaj u korpu</button>
        </div>

        <h4>Detalji proizvoda</h4>
        <span>{proizvod.detalji}</span>
      </div>
    </section>
  );
};

export default SingleProduct;
