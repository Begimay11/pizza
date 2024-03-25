import "./App.scss";
import MyRoutes from "./MyRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
