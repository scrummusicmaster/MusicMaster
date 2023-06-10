import Footer from "../../Components/Footer/Footer"
import NavBar from "../../Components/Navbar/Navbar";
import "./Home.css";

function Home() {

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
          </div>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
