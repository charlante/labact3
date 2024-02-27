import "./App.css";
import { albumItems } from "./data";
import Header from "./Header";
import Album from "./Album";

function App() {
  return (
    <div className="App">
      <Header />
      <Album albumItems={albumItems} />
    </div>
  );
}

export default App;
