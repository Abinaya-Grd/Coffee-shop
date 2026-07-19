import "./About.css"

function About() {
  return (
    <section id="about" className="about-section">
        <div className="about-image">
            <img src="https://images.pexels.com/photos/29784885/pexels-photo-29784885.jpeg"></img>
        </div>
        <div className="about-content">
            <span className="about-subtitle">
                ABOUT US
            </span>
            <p>We are passionate about coffee. Our beans are carefully selected and roasted to perfection to give you the best experience</p>
        <h3>Siddhu</h3>
        <span className="founder">Founder</span>
        </div>
    </section>
  )
}

export default About