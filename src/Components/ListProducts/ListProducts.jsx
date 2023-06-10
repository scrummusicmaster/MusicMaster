import NavBar from "../Navbar/Navbar";

function ListProducts() {
const categories = [
  {
    id: 1,
    name: "Pop",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description:
      "Descubre los últimos éxitos y artistas de música pop en español.",
  },
  {
    id: 2,
    name: "Rock",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Explora el mundo del rock en español y sus subgéneros.",
  },
  {
    id: 3,
    name: "Reggaeton",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Disfruta de los ritmos pegajosos del reggaeton en español.",
  },
  {
    id: 4,
    name: "Hip Hop",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Sumérgete en la cultura del hip hop y rap en español.",
  },
  {
    id: 5,
    name: "Salsa",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Baila al ritmo de la salsa y descubre los grandes artistas.",
  },
  {
    id: 6,
    name: "Bachata",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Disfruta de los sensuales sonidos de la bachata en español.",
  },
  {
    id: 7,
    name: "Cumbia",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Descubre la alegría de la cumbia y sus distintas variantes.",
  },
  {
    id: 8,
    name: "Baladas",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Déjate llevar por las románticas baladas en español.",
  },
  {
    id: 9,
    name: "Flamenco",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Sumérgete en la pasión del flamenco y sus distintos palos.",
  },
  {
    id: 10,
    name: "Rumba",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Disfruta de la rumba y su contagioso ritmo español.",
  },
];

    return (
        <>
            <NavBar></NavBar>
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
      </>
    );
}

export default ListProducts;