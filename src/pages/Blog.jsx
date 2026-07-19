import "./Blog.css";
import blogData from "./blogData";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

function Blog() {
  return (
    <section id="blog" className="blog-section">

      <div className="blog-heading">
        <span>OUR BLOG</span>
        <h2>Latest Coffee Articles</h2>
      </div>

      <div className="blog-container">

        {blogData.map((blog) => (

          <div className="blog-card" key={blog.id}>

            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">

              <div className="blog-date">
                <FaCalendarAlt />
                <span>{blog.date}</span>
              </div>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <button>
                Read More <FaArrowRight />
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Blog;