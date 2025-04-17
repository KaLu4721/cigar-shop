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
    <a href="index.html">Početna</a>
    <a href="shop.html">Proizvodi</a>
    <a href="about.html">O nama</a>
    <a href="contact.html">Kontakt</a>
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
