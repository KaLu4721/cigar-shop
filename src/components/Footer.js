import { Link } from 'react-router-dom';
const Footer = () => {
    return (

<footer className="section-p1">
  <div className="kolona">
    <h4>Kontakt</h4>
    <p><b>Ušće Šoping Centar, </b> 1. sprat</p>
    <p><b>Adresa:</b> Bulevar Mihajla Pupina 4</p>
    <p><b>Radno vreme:</b> 10:00-22:00, Pon-Ned</p>
    <p><b>Broj telefona: </b>069 188 60 80</p>
  </div>
  <div className="kolona">
    <h4>Linkovi</h4>
    <Link to="/">Početna</Link>
        <Link to="/shop">Proizvodi</Link>
        <Link to="/about">O nama</Link>
        <Link to="/contact">Kontakt</Link>
  </div>
  <div className="kolona">
    <div className="zapratite">
      <h4>Zapratite nas</h4> 
      <div className="ikonica">
        <i className="fab fa-instagram" />
      </div>
    </div>
  </div>
  <div className="sistemiplacanja">
    <p>Podržani sistemi plaćanja</p>
    <img src="images/vrste_placanja_1.png" alt />
  </div>
  <div className="copyright">
    <p>© Cigar Shop 2025</p>
  </div>
</footer>
    );
}
export default Footer;
