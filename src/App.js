import "./App.css";
import Heading from "./components/heading/Heading";
import Image from "./components/image/Image";
import Artist from "./components/artist/Artist";
import Title from "./components/title/Title";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="App">
      <Heading />
      <Image />
      <Artist />
      <Title />
      <Button />
    </div>
  );
}

export default App;
