import "./App.css";
import Images from "./Images.jsx";

function App() {

  return (
    <div className="App">
      <header>
        <h1>Digital Images</h1>
        <h2>
          Gallery created with React.js and the Unsplash API
        </h2>
      </header>

      <Images />

    </div>
  );

}

export default App;
