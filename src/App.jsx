import "./App.css";
import Catalogue from "./pages/Catalogue";
import ProductDetails from "./pages/ProductDetails";
import StoreLocator from "./pages/StoreLocator";
import Promotion from "./pages/Promotion";
import NewArrivals from "./pages/NewArrivals";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
//import Sale from './pages/Sale'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route
          path="catalogue/:group/:category/:style?"
          element={<Catalogue />}
        />
        {/* <Route path="/catalogue/:group/:category" element={<Catalogue />} /> */}
        <Route path="item/:skunumber" element={<ProductDetails />} />
        <Route path="storelocator" element={<StoreLocator />} />
        <Route path="newarrivals" element={<NewArrivals />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
