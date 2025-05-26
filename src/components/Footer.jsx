import { Facebook, Instagram, Mail } from "lucide-react";
import logo from '../assets/webbers.png';
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  
  const handleSubscribe = () => {
    console.log("Subscribed with email:", email);
    setEmail("");
  };
  
  return (
    <footer className="w-full">
      {/* Email Subscription Bar */}
      <div className="w-full py-6 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center px-4">
          <Mail className="hidden md:block mr-2 text-gray-700" size={20} />
          <div className="w-full max-w-lg flex">
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              onClick={handleSubscribe}
              className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wider uppercase"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="w-full bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img src={logo} alt="WEBBERS Logo" className="h-16" />
            </div>
            <p className="text-sm text-gray-600 text-center md:text-left mt-4">
              Copyright WEBBERS © 2025. All Rights Reserved
            </p>
          </div>
          
          {/* Fashion Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg uppercase mb-4">Fashion</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#" className="text-gray-600 hover:text-black">Promotions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Men</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Boys</a></li>
            </ul>
          </div>
          
          {/* Info Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg uppercase mb-4">Info</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#" className="text-gray-600 hover:text-black">Find a Store</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Lay-Byes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Competition T's & C's</a></li>
            </ul>
          </div>
          
          {/* Legal & Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-black rounded-full p-2">
                <Facebook size={24} className="text-white" />
              </a>
              <a href="#" className="bg-black rounded-full p-2">
                <Instagram size={24} className="text-white" />
              </a>
            </div>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Terms of Use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}