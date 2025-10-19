export default function Guides() {
  const gradingImages = [
    { src: "src/assets/images/G1.png" },
    { src: "src/assets/images/G2.png" },
    { src: "src/assets/images/G3.png" },
    { src: "src/assets/images/G4.png" },
  ];

  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#F2D2BD] text-gray-900 overflow-x-hidden">
      
      <div className="py-16 text-center">
        <h2 className="text-6xl font-bold text-center mb-4">Record Guides</h2>
        <h5 className="text-xl font-bold text-center mb-2">Beginner? Tips? Proper Care?</h5>
        <h6 className="text-lg italic text-center mb-9">
          Helpful guide for better lifetime of your records.
        </h6>
        
        <div className="flex justify-center items-center gap-3 mb-10">
          <div className="w-60 h-2 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-full"></div>
          <span className="text-3xl">💿</span>
          <div className="w-60 h-2 bg-gradient-to-l from-blue-500 to-indigo-700 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-20 px-4 md:px-20 max-w-6xl mx-auto pb-24">
        {gradingImages.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-[450px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
