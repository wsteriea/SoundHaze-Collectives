import { useState } from "react";
import ProductCard from "./productcard";

export default function Products() {
  const allProducts = [
    { title: "Retro Spin Turntable", description: "Vintage wood base with modern display", imageSrc: "src/assets/images/tb1.png", category: "Turntables" },
    { title: "Golden Horn Phonograph", description: "Classic sound with antique charm.", imageSrc: "src/assets/images/pg1.png", category: "Phonographs" },
    { title: "StudioLite Speaker", description: "Take your speaker anywhere.", imageSrc: "src/assets/images/sp1.png", category: "Speakers" },

    { title: "BerryBeat Turntable", description: "Sleek design with Bluetooth connectivity.", imageSrc: "src/assets/images/tb6.png", category: "Turntables" },
    { title: "SnugSound  Phonograph", description: "Classic sound with antique charm.", imageSrc: "src/assets/images/pg2.png", category: "Phonographs" },
    { title: "BookBox Speaker", description: "Soft-touch meshwith wireless pairing. ", imageSrc: "src/assets/images/sp2.png", category: "Speakers" },
    

    { title: "Mini Modern Turntable", description: "Compact, minimalist design for audiophile setups", imageSrc: "src/assets/images/tb3.png", category: "Turntables" },
    { title: "Antique Echo Phonograph", description: "Museum-style replica with rich analog warmth, includes remote.", imageSrc: "src/assets/images/pg3.png", category: "Phonographs" },
    { title: "Breeze Speaker", description: "Slim, vertical speaker with gentle airflow grille.", imageSrc: "src/assets/images/sp3.png", category: "Speakers" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Turntables", "Phonographs", "Speakers"];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#FAE7D5] text-gray-900 overflow-x-hidden py-16 px-4">
      
      <div className="relative w-full max-w-screen-xl mx-auto mb-10">
       
        <h2 className="text-6xl font-bold text-center mb-4">Products</h2>
        <h5 className="text-2xl font-bold text-center mb-4">Phonographs | Turntables | Speakers</h5>
        <h6 className="text-lg italic text-center mb-4">Giving voices for your precious records.</h6>

        
        <div className="absolute left-0 w-full border-t-2 border-yellow-500"></div>

        
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
          <label htmlFor="category" className="font-medium text-gray-700">
            Filter by:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-2xl mx-auto">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
