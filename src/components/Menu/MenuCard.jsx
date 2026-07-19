import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function MenuCard({ item }) {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />

      <div className="menu-content">
        <h3>{item.name}</h3>

        <div className="price-rating">
          <span className="price">₹{item.price}</span>

          <div className="rating">
            
            {[...Array(Math.floor(item.rating))].map((_, index) => (
              <FaStar key={index} />
            ))}

           
            {item.rating % 1 !== 0 && <FaStarHalfAlt />}

           
            <span className="rating-text">{item.rating}</span>
          </div>
        </div>

        <button className="cart-btn">ADD TO CART</button>
      </div>
    </div>
  );
}

export default MenuCard;