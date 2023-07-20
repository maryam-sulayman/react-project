import "./App.css";
import "./Weather.css";
import "./Footer.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <body>
        <Weather />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
