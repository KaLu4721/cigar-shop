import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Uvoz useNavigate

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
      
      <section
      id="hero"
      style={{
      
        opacity: `${1 - offsetY * 0.0018}`, // Fade-out efekat
      }}
    >
        <div>
          <h1>Najbolje cigare iz celog sveta, <br />dostupne na samo jedan klik.</h1>
          
          <Link to="/shop">
          <button>
            <h3>Poruči</h3>
          </button>
        </Link>
        </div>
      </section>
    );
  };
  
  export default HeroSection;