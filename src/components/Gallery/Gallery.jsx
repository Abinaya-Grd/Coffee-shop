import "./Gallery.css";
import galleryData from "./galleryData";

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <div>
          <span>OUR GALLERY</span>
          <h2>Explore Our Coffee Moments</h2>
        </div>

        <button>View All</button>
      </div>

      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;