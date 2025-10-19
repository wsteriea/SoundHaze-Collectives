import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/homepage";
import Music from "./components/music";
import Products from "./components/products";
import Shelves from "./components/shelves";
import Guides from "./components/guides";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex-grow w-full">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/SoundHaze-Collectives" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shelves" element={<Shelves />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>

        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

{/* <BrowserRouter>
      <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-[#FAE7D5]">
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter> */}