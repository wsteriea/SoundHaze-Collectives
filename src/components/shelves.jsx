import ShelvesProduct from "./shelfproduct";

import sh1 from "../assets/images/sh1.png";
import sh2 from "../assets/images/sh2.png";
import sh3 from "../assets/images/sh3st.png";
import sh4 from "../assets/images/sh4st.png";
import sh5 from "../assets/images/sh5c.png";
import sh6 from "../assets/images/sh6c.png";

export default function Shelves() {
  const products = [
    { title: "Wall-Mount Display Shelf", description: "Open-frame shelf for showcasing your favorite records.", imageSrc: sh1 },
    { title: "Minimalist Record Rack", description: "Layered modern shelving for small spaces.", imageSrc: sh2 },
    { title: "Portable Record Crate", description: "Lightweight box to take your vinyls anywhere.", imageSrc: sh3 },
    { title: "Wooden Record Bin", description: "Deep bin with angled front for flipping through records.", imageSrc: sh4 },
    { title: "Vinyl Revival Pack", description: "All-in-one set with brush, fluid, and microfiber cloth.", imageSrc: sh5 },
    { title: "Vinyl Cleaning Essentials", description: "Daily care for your favorite and protect your records.", imageSrc: sh6 },
  ];

  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#FAE7D5] text-gray-900 overflow-x-hidden py-16 px-4">
      <h2 className="text-6xl font-bold text-center mb-3">Storage</h2>
      <h5 className="text-2xl font-bold text-center mb-9">Shelves | Record Storage | Cleaning Kit</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-2xl mx-auto">
        {products.map((product, index) => (
          <ShelvesProduct key={index} title={product.title} description={product.description} imageSrc={product.imageSrc} />
        ))}
      </div>
    </div>
  );
}
