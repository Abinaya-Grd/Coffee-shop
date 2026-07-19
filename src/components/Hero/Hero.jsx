import "./Hero.css"
function Hero() {
  return (
<section id="home" className="hero">
  <div className="hero-content">
    <p className="sub-title">
      Fresh Coffee 
    </p>
    <h1>GOOD COFFEE<br/>
        GOOD DAY
    </h1>
    <p className="description">
      We serve the richest coffee in the city, made with premium quality beans and love.

    </p>
    <div className="hero-buttons">
      <button className="primary-button">
        Order Now
        </button> 
            
      <button className="secondary-button">
        View Menu
        </button> 
            
    </div>
  </div>
  <div className="hero-image">
    <img src="https://media.istockphoto.com/id/1467199060/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=OnS8_6FM5ussfSGmjpDD-GofERg2UbItdxShIAA90sQ="
    alt="Coffeecup"/>
  </div>
</section>
  )
}

export default Hero