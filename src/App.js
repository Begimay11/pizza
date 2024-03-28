import "./App.scss";
import MyRoutes from "./MyRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import DetailPromotion from "./pages/DetailPromotion";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <MyRoutes />
      <DetailPromotion />
      <Footer />
    </div>
  );
}

export default App;
