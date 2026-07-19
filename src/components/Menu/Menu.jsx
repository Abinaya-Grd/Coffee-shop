import "./Menu.css";
import MenuCard from "./MenuCard";
import menuData from "./menuData";

function Menu() {
  return (
    <section id="menu" className="menu-section">

      <div className="menu-header">

        <div>
          <h2>Popular Coffee</h2>
        </div>

        <button>View All </button>

      </div>

      <div className="menu-grid">

        {menuData.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}

      </div>

    </section>
  );
}

export default Menu;