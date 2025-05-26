import "./App.css";
import Catalogue from "./pages/Catalogue";
import ProductDetails from "./pages/ProductDetails";
import StoreLocator from "./pages/StoreLocator";
import Promotion from "./pages/Promotion";
import NewArrivals from "./pages/NewArrivals";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
//import Sale from './pages/Sale'
import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/catalogue/:group/:category/:style?"
          element={<Catalogue />}
        />
        {/* <Route path="/catalogue/:group/:category" element={<Catalogue />} /> */}
        <Route path="/item/:skunumber" element={<ProductDetails />} />
        <Route path="/storelocator" element={<StoreLocator />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/sale" element={<Sale />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
