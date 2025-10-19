import ShelvesProduct from "./shelfproduct";

export default function Shelves() {
  const products = [
    { title: "Wall-Mount Display Shelf", description: "Open-frame shelf for showcasing your favorite records.", imageSrc: "src/assets/images/sh1.png" },
    { title: "Minimalist Record Rack ", description: "Layered modern shelving for small spaces.", imageSrc: "src/assets/images/sh2.png" },

    { title: "Portable Record Crate", description: "Lightweight box to take your vinyls anywhere.", imageSrc: "src/assets/images/sh3st.png" },
    { title: "Wooden Record Bin", description: "Deep bin with angled front for flipping through records.", imageSrc: "src/assets/images/sh4st.png" },

    { title: "Vinyl Revival Pack", description: "All-in-one set with brush, fluid, and microfiber cloth.", imageSrc: "src/assets/images/sh5c.png" },
    { title: "Vinyl Cleaning Essentials", description: "Daily care for your favorite and protect your records.", imageSrc: "src/assets/images/sh6c.png" },
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
