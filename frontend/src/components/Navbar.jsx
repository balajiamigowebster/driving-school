import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 shadow-xs bg-white/95 backdrop-blur-md border-b border-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-blue-950">
              Drive<span className="text-orange-500">Pro</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-7 lg:space-x-8 items-center text-sm font-semibold text-slate-700">
            <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#features" className="hover:text-orange-500 transition-colors">Why Us</a>
            <a href="#testimonials" className="hover:text-orange-500 transition-colors">Instructors</a>
            <a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a>
            <a href="#location" className="hover:text-orange-500 transition-colors">Location</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            <a href="#book" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-md shadow-orange-500/25 hover:shadow-orange-500/40">
              <Calendar size={16} />
              <span>Book a Lesson</span>
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-orange-500">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-800 pb-4 px-4 border-t border-slate-700">
          <div className="flex flex-col space-y-4 pt-4">
            <a href="#home" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>Home</a>
            <a href="#services" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>Services</a>
            <a href="#features" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>Why Us</a>
            <a href="#testimonials" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>Instructors</a>
            <a href="#faq" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>FAQ</a>
            <a href="#location" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>Location</a>
            <a href="#contact" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
