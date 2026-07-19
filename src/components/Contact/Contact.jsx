import { useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

   
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

   
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

   
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Message Sent Successfully! ☕");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <span>CONTACT US</span>
        <h2>We'd Love To Hear From You</h2>
      </div>

      <div className="contact-container">

       
        <div className="contact-info">

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h4>Address</h4>
              <p>123 Coffee Street, Coimbatore</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>coffee@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaClock />
            <div>
              <h4>Working Hours</h4>
              <p>Mon - Sun : 8AM - 10PM</p>
            </div>
          </div>

        </div>

      

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small className="error">{errors.name}</small>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <small className="error">{errors.subject}</small>
          )}

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <small className="error">{errors.message}</small>
          )}

          <button type="submit">Send Message</button>

        </form>

      </div>
    </section>
  );
}

export default Contact;