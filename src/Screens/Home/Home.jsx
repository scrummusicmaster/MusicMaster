import Footer from "../../Components/Footer/Footer"
import NavBar from "../../Components/Navbar/Navbar";
import "./Home.css";

function Home() {
const categories = [
  {
    id: 1,
    name: "Artists",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Discover new and popular artists in different genres.",
  },
  {
    id: 2,
    name: "Playlists",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Listen to handcrafted playlists for every mood and occasion.",
  },
  {
    id: 3,
    name: "Instruments",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description:
      "Learn about different musical instruments and how they are played.",
  },
];



  return (
    <>
      <NavBar></NavBar>
      <div className="music-content">
        <main className="main">
          <div className="menu-container">
            <section className="hero-section">
              <div className="hero-content">
                <h1>Discover New Music</h1>
                <p>
                  Find your favorite artists and playlists, and stay up to date
                  with the latest music news and concerts.
                </p>
                <button>Get Started</button>
              </div>
            </section>

            <section className="categories-section">
              <h2>Categories</h2>
              <div className="categories-container">
                {categories.map((category) => (
                  <div className="category-card" key={category.id}>
                    <img src={category.image} alt={category.name} />
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <button>Explore</button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
