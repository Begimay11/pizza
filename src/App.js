import "./App.scss";
import MyRoutes from "./MyRoutes";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <MyRoutes />
    </div>
  );
}

export default App;
