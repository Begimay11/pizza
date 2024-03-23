import "./App.scss";
import Menu from "./components/Menu";
import Slider from "./pages/Home/Slider";

function App() {
  return (
    <div className="app">
      <Slider />
      <Menu />
    </div>
  );
}

export default App;
