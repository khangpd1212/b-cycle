import Header from "./components/Header";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SectionPopup from "./screens/Home/components/SectionPopup";
function App() {
  return (

    <BrowserRouter>
      <SectionPopup />
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
