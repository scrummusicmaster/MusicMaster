import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/router-config";

function App() {
  return (
    <>
      <BrowserRouter>
        <section className="content">
          <Routes>
            {routes.map((ruta) => (
              <Route
                key={ruta.path}
                path={ruta.path}
                element={<ruta.component />}
              />
            ))}
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
