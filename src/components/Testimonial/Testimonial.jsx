import "./Testimonial.css";
import testimonialData from "./testimonialData";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <section className="testimonial-section">

      <div className="testimonial-heading">
        <span>TESTIMONIALS</span>
        <h2>What Our Customers Say</h2>
      </div>

      <div className="testimonial-container">

        {testimonialData.map((item) => (
          <div className="testimonial-card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p className="role">{item.role}</p>

            <div className="stars">
              {[...Array(item.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <p className="review">{item.review}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonial;