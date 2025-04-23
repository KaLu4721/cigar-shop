import React from 'react';
 // Dodajte CSS za stilove

const CartSidebar = ({ isVisible, onClose, items, setCartItems}) => {
   // Izračunavanje ukupne cene
   const totalPrice = items.reduce((total, item) => {
    const cena = parseFloat(item.cena.replace(' RSD', '').replace(',', '.')); // Pretvaranje cene u broj
    return total + cena * item.kolicina;
  }, 0);

  // Funkcija za brisanje proizvoda iz korpe
  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('korpa', JSON.stringify(updatedItems));
  };

  // Funkcija za ažuriranje količine proizvoda
  const updateQuantity = (id, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, kolicina: Math.max(1, newQuantity) } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('korpa', JSON.stringify(updatedItems));
  };
  
  
  return (
    <div className={`cart-sidebar ${isVisible ? 'visible' : ''}`}>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <h2>Vaša korpa</h2>
      <ul>
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="cart-item">
              <span>{item.naziv}</span>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.kolicina - 1)}>-</button>
                <input
                  type="number"
                  value={item.kolicina}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                />
                <button onClick={() => updateQuantity(item.id, item.kolicina + 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                X
              </button>
            </li>
          ))
        ) : (
          <p>Korpa je prazna.</p>
        )}
      </ul>
      {items.length > 0 && (
        <div className="total-price">
          <h3>Ukupno:</h3>
          <p>{totalPrice.toFixed(2)} RSD</p>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;