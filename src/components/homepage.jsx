import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";


import wall1 from "../assets/images/wall1.png";
import wall2 from "../assets/images/wall2.png";
import wall3 from "../assets/images/wall3.png";
import rosie from "../assets/images/rosie.png";
import dw from "../assets/images/dw.png";
import ruby from "../assets/images/ruby.png";
import vinyl from "../assets/images/Vinyl.jpg"; 

export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate();

  
  const carouselImages = [wall1, wall2, wall3];

  const whatsNew = [
    { title: "Rosie", subtitle: "Rose", img: rosie },
    { title: "Dirty Work", subtitle: "Aespa", img: dw },
    { title: "Ruby", subtitle: "Jennie", img: ruby },
  ];

  const handleViewAll = () => {
    navigate("/music");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#FAE7D5] text-gray-900">
     
      <div className="relative w-full h-[60vh] md:h-[60vh] overflow-hidden">
        <motion.img
          key={carouselIndex}
          src={carouselImages[carouselIndex]}
          alt="carousel"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      
      <section className="px-4 md:px-8 py-12">
        <h2 className="text-3xl md:text-3xl font-bold mb-8 text-center">
          WHAT'S NEW
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {whatsNew.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl shadow-md bg-white p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl w-full"
              />
              <p className="mt-2 text-lg font-semibold text-center">
                {item.title}
              </p>
              <p className="text-sm text-gray-600 text-center">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewAll}
            className="bg-black text-white rounded-2xl px-6 py-3 hover:bg-gray-800 transition"
          >
            View All
          </button>
        </div>
      </section>

     
      <section className="px-6 md:px-12 py-10 bg-[#F4D7BA] rounded-2xl mx-4 md:mx-8">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-10">
          <div className="flex-1 space-y-5 md:space-y-6 text-6xl">
            <h3 className="text-7xl md:text-7xl font-extrabold text-gray-900 md:text-left">
              New into <span className="text-black">SoundHaze?</span>
            </h3>
            <p className="text-lg md:text-2xl text-gray-800 leading-relaxed ">
              We got all you need from <b>Vinyl & Albums</b> of all artists,{" "}
              <b>Turntables & Phonographs</b>, Speakers, Shelves & Storage, and
              Vinyl Care + Essentials.
            </p>

            
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-4 text-lg md:text-xl font-semibold">
              <a
                href="/music"
                className="flex items-center gap-2 text-[#8B4513] hover:text-[#5C3317] hover:underline text-2xl transition-colors duration-300"
              >
                <span>💽</span> Albums
              </a>

              <a
                href="/products"
                className="flex items-center gap-2 text-[#8B4513] hover:text-[#5C3317] hover:underline text-2xl transition-colors duration-300"
              >
                <span>🎚️</span> Turntables
              </a>

              <a
                href="/shelves"
                className="flex items-center gap-2 text-[#8B4513] hover:text-[#5C3317] hover:underline text-2xl transition-colors duration-300"
              >
                <span>🗄️</span> Shelves
              </a>

              <a
                href="/guides"
                className="flex items-center gap-2 text-[#8B4513] hover:text-[#5C3317] hover:underline text-2xl transition-colors duration-300"
              >
                <span>ℹ️</span> Beginner Guides
              </a>
            </div>
          </div>

         
          <div className="w-full md:w-[260px] lg:w-[300px] flex-shrink-0">
            <img
              src={vinyl}
              alt="vinyl setup"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

    
      <section className="px-4 md:px-8 py-12">
        <h3 className="text-2xl font-bold mb-6 text-center">CUSTOMER REVIEWS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              rating: 4.5,
              text: "The best packaging I've seen — hard and secure!",
              name: "Shad Gabriel Silverio",
            },
            {
              rating: 3.5,
              text: "Wide variety of great quality records.",
              name: "Shacel Joy Masaya",
            },
            {
              rating: 4,
              text: "Very responsive and easy to talk to.",
              name: "Maria Faith Ibaldez",
            },
          ].map((review) => (
            <div
              key={review.name}
              className="rounded-2xl shadow-md bg-[#FFF6EC] p-6 text-center"
            >
              <div className="flex justify-center mb-3">
                <Star className="text-yellow-500 fill-yellow-500" />
                <span className="ml-1 font-bold">{review.rating}</span>
              </div>
              <p className="italic mb-3">{review.text}</p>
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
