import { useState } from "react";
import AlbumCard from "./albumcard";
import musicBanner from "../assets/images/music.png";

import v1 from "../assets/images/v1.png";
import v2 from "../assets/images/v2.png";
import v3 from "../assets/images/v3.png";
import v4 from "../assets/images/v4.png";
import v5p from "../assets/images/v5p.png";
import v6p from "../assets/images/v6p.png";
import ab1 from "../assets/images/ab1.png";
import ab2 from "../assets/images/ab2.png";
import ab3 from "../assets/images/ab3.png";
import ab4 from "../assets/images/ab4.png";
import ab5p from "../assets/images/ab5p.png";
import ab6p from "../assets/images/ab6p.png";

export default function Music() {
  const allAlbums = [
    {
      title: "Short & Sweet",
      description: "Pop",
      subtitle: "Sabrina Carpenter",
      imageSrc: v1,
      catalog: "US Hits",
      type: "Vinyl",
      price: 1800,
    },
    {
      title: "Eternal Sunshine",
      subtitle: "Ariana Grande",
      description: "Pop Ballad",
      imageSrc: v2,
      catalog: "US Hits",
      type: "Vinyl",
      price: 1600,
    },
    {
      title: "F1 The Album",
      description: "Music from F1 the Movie",
      subtitle: "Various Artists",
      imageSrc: v3,
      catalog: "US Hits",
      type: "Vinyl",
      price: 1500,
    },
    {
      title: "Superpower",
      subtitle: "Zild",
      description: "OPM",
      imageSrc: v6p,
      catalog: "OPM",
      type: "Vinyl",
      price: 900,
    },
    {
      title: "Kitchie Nadal",
      subtitle: "Kitchie Nadal",
      description: "OPM",
      imageSrc: v5p,
      catalog: "OPM",
      type: "Vinyl",
      price: 500,
    },
    {
      title: "Hit Me Hard and Soft",
      subtitle: "Billie Eilish",
      description: "Alternative Pop",
      imageSrc: v4,
      catalog: "US Hits",
      type: "Vinyl",
      price: 1800,
    },
    {
      title: "Born to Win",
      subtitle: "P-Pop",
      description: "Pop",
      imageSrc: ab6p,
      catalog: "OPM",
      type: "Album",
      price: 800,
    },
    {
      title: "Perfectly Imperfect",
      description: "OPM",
      subtitle: "Sarah Geronimo",
      imageSrc: ab5p,
      catalog: "OPM",
      type: "Album",
      price: 500,
    },
    {
      title: "ALTER EGO",
      description: "K-Pop",
      subtitle: "Lisa",
      imageSrc: ab4,
      catalog: "K-Pop",
      type: "Album",
      price: 1200,
    },
    {
      title: "Skool Luv Affair",
      description: "K-Pop",
      subtitle: "Sabrina Carpenter",
      imageSrc: ab3,
      catalog: "K-Pop",
      type: "Album",
      price: 1000,
    },
    {
      title: "Baditude",
      description: "K-Pop",
      subtitle: "Soojin",
      imageSrc: ab2,
      catalog: "K-Pop",
      type: "Album",
      price: 1500,
    },
    {
      title: "Strategy",
      description: "K-Pop",
      subtitle: "Twice",
      imageSrc: ab1,
      catalog: "K-Pop",
      type: "Album",
      price: 1200,
    },
  ];

  const [filters, setFilters] = useState({
    catalog: "All",
    type: "All",
    price: "All",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredAlbums = allAlbums.filter((album) => {
    const catalogMatch = filters.catalog === "All" || album.catalog === filters.catalog;
    const typeMatch = filters.type === "All" || album.type === filters.type;
    const priceMatch =
      filters.price === "All" ||
      (filters.price === "<1000" && album.price < 1000) ||
      (filters.price === "1000-1500" && album.price >= 1000 && album.price <= 1500) ||
      (filters.price === ">1500" && album.price > 1500);
    return catalogMatch && typeMatch && priceMatch;
  });

  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#FAE7D5] text-gray-900 overflow-x-hidden">
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${musicBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-5xl md:text-9xl font-extrabold text-white z-10 tracking-wide text-center">
          VINYLS & ALBUMS
        </h1>
        <p className="relative text-lg md:text-4xl text-white mt-3 z-10 text-center">
          Browse new and classic records
        </p>
      </div>

      <section className="w-full flex flex-wrap justify-center gap-4 py-6 bg-[#FAE7D5] border-t border-[#e3cbb6]">
        <select
          name="catalog"
          onChange={handleChange}
          className="px-4 py-2 border border-gray-400 rounded-md bg-white shadow-sm"
        >
          <option value="All">Catalog</option>
          <option value="OPM">OPM</option>
          <option value="K-Pop">K-Pop</option>
          <option value="US Hits">US Hits</option>
        </select>

        <select
          name="type"
          onChange={handleChange}
          className="px-4 py-2 border border-gray-400 rounded-md bg-white shadow-sm"
        >
          <option value="All">Types</option>
          <option value="Vinyl">Vinyl</option>
          <option value="Album">Album</option>
        </select>

        <select
          name="price"
          onChange={handleChange}
          className="px-4 py-2 border border-gray-400 rounded-md bg-white shadow-sm"
        >
          <option value="All">Price</option>
          <option value="<1000">Under ₱1000</option>
          <option value="1000-1500">₱1000–₱1500</option>
          <option value=">1500">Over ₱1500</option>
        </select>
      </section>

      <section className="w-full px-4 md:px-8 py-10 bg-[#FAE7D5]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredAlbums.map((album, index) => (
            <AlbumCard
              key={index}
              title={album.title}
              subtitle={album.subtitle}
              description={album.description}
              imageSrc={album.imageSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
