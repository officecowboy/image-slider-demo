import "./App.css";
import testImage from "./assets/test-photo.jpg";
import { ReactComponent as BackArrow } from "./assets/arrow-left.svg";
import { ReactComponent as NextArrow } from "./assets/arrow-right.svg";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Digital Images</h1>
        <h2>
          Gallery created with React.js and the Unsplash API
        </h2>
      </header>

      <figure>
        <nav>
          <BackArrow />
          <NextArrow />
        </nav>
        <figcaption>
        </figcaption>
        <img src={testImage} alt=""></img>
      </figure>

    </div>
  );
}

export default App;
