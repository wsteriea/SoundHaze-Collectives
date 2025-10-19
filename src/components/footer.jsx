import { useState } from "react";
import soundhazeLogo from "../assets/images/soundhaze.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() === "") return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 2000);
  };

  return (
    <footer className="bg-black text-white px-6 py-8 w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 max-w-screen-2xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
          <img
            src={soundhazeLogo}
            alt="SoundHaze"
            className="h-20 w-auto"
          />

          <div className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-40 md:w-52 px-2 py-1 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 text-xs focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <button
              onClick={handleSubscribe}
              className="px-3 py-1 text-xs bg-white text-black rounded hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </div>
          {subscribed && (
            <p className="text-[11px] text-gray-400 ml-1 mt-1 md:mt-0">Subscribed to SoundHaze!</p>
          )}
        </div>

     
        <div>
          <p className="font-semibold text-sm">Connect With Us</p>
          <div className="flex gap-3 mt-2 text-xs">
            <a href="#" className="hover:text-gray-400 transition">ⓕ</a>
            <a href="#" className="hover:text-gray-400 transition">🅾</a>
            <a href="#" className="hover:text-gray-400 transition">X</a>
          </div>
        </div>

        
        <div>
          <p className="font-semibold text-sm">Quick Links</p>
          <ul className="text-xs space-y-1 mt-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Shop</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
