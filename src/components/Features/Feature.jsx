import "./Feature.css";
import featureData from "./featureData";

function Features() {
  return (
    <section className="features">
      <div className="feature-container">
        {featureData.map((item) => {
          const Icon = item.icon;

          return (
            <div className="feature-card" key={item.id}>
              <div className="feature-icon">
                <Icon />
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;