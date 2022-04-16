import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import SectionPopup from "./screens/Home/components/SectionPopup";
function App() {
  return (

    <BrowserRouter>
      <SectionPopup />
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
