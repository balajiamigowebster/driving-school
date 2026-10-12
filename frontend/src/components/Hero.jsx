import React from 'react';
import { ArrowRight, User, Users, Shield, Award, Sparkles } from 'lucide-react';

const SteeringWheelIcon = ({ className = "w-4 h-4" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 2v7.5" />
    <path d="M4.5 16.5 10 13" />
    <path d="M19.5 16.5 14 13" />
  </svg>
);

const CarFrontIcon = ({ className = "w-5 h-5 text-orange-500" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.6 5H8.4a2 2 0 0 0-1.9 1.3L5 10l-2-2" />
    <path d="M7 14h.01" />
    <path d="M17 14h.01" />
    <rect width="18" height="8" x="3" y="10" rx="2" />
    <path d="M5 18v2" />
    <path d="M19 18v2" />
  </svg>
);

const CertificateIcon = ({ className = "w-5 h-5 text-purple-600" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="14" height="18" x="5" y="2" rx="2" />
    <circle cx="12" cy="10" r="3" />
    <path d="m10 14-1.5 5 3.5-1.5 3.5 1.5-1.5-5" />
  </svg>
);

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 bg-white text-slate-900 overflow-hidden"
    >
      {/* Desktop Full-Bleed Right Visual Stage (Touches Right Edge with 0 gap, height adjusted to markings) */}
      <div className="hidden lg:flex absolute right-0 top-20 lg:top-24 xl:top-28 bottom-28 lg:bottom-32 lg:w-[50vw] xl:w-[52vw] 2xl:w-[50vw] items-center justify-end z-10 pointer-events-none">
        <div className="relative w-full h-full max-h-[470px] xl:max-h-[500px] flex items-center justify-end">
          
          {/* Playful Floating Scribble Badge (Top Right in Sky, safely below navbar) */}
          <div className="absolute top-2 xl:top-4 right-10 xl:right-16 z-20 flex flex-col items-center rotate-3 select-none">
            <span className="text-xs xl:text-[13px] font-black text-[#1e293b] tracking-wide text-center leading-tight font-sans drop-shadow-xs">
              Your<br />Driving Journey<br />Starts Here!
            </span>
            <div className="flex gap-1 -mt-0.5 ml-8 text-amber-500">
              <span className="text-sm">✦</span>
              <span className="text-[10px]">✦</span>
            </div>
          </div>

          {/* Hero Image Touching Right Edge with Reduced Height */}
          <img
            src="/images/hero.png"
            alt="DrivePro Driving Lessons"
            className="w-full h-full object-cover object-right-center"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, transparent 3%, black 20%, black 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 3%, black 20%, black 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in'
            }}
          />

          {/* DrivePro Car Door Branding Decal */}
          <div className="absolute right-10 xl:right-14 bottom-14 xl:bottom-18 select-none drop-shadow-xs">
            <div className="flex items-center">
              <span className="text-xl xl:text-2xl font-black text-[#1e3a8a] tracking-tight">Drive</span>
              <span className="text-xl xl:text-2xl font-black text-[#f97316] tracking-tight">Pro</span>
            </div>
            <div className="text-[9px] xl:text-[10px] font-bold text-slate-700 tracking-wider flex items-center gap-1 mt-0.5">
              <span>Learn</span>
              <span className="text-[#f97316] text-[7px]">•</span>
              <span>Drive</span>
              <span className="text-[#f97316] text-[7px]">•</span>
              <span>Be Safe</span>
            </div>
          </div>

          {/* Floating "Happy Learners" Badge (Bottom Right over Car) */}
          <div className="absolute bottom-2 right-8 xl:right-12 z-20 bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl py-2.5 px-4.5 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1e40af] text-white flex items-center justify-center font-bold shadow-md shadow-blue-900/20">
              <Users size={20} />
            </div>
            <div className="text-left">
              <p className="text-base font-black text-[#0f172a] leading-tight">12,000+</p>
              <p className="text-[11px] font-semibold text-slate-600">Happy Learners and Counting</p>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        {/* Main 2-Column Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px] lg:min-h-[540px]">
          
          {/* Left Column (Heading & Content) */}
          <div className="lg:col-span-7 xl:col-span-7 text-center lg:text-left z-20 py-2">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-50/90 border border-orange-200/80 text-orange-700 text-xs font-semibold mb-6 shadow-xs">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <SteeringWheelIcon className="w-3.5 h-3.5" />
              </span>
              <span>Flexible Batches</span>
              <span className="text-orange-300">|</span>
              <span>Certified Instructors</span>
            </div>

            {/* Main Title: Black title in 1 line, Orange title in 1 line */}
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[2.65rem] xl:text-[3.15rem] font-black tracking-tight leading-[1.16] mb-5 font-sans">
              <span className="block text-[#131b2e] sm:whitespace-nowrap">
                Learn at Your Own Pace
              </span>
              <span className="block text-[#f97316] sm:whitespace-nowrap mt-1">
                Around Your Busy Life
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal mb-8">
              Early morning, late evening, or weekend slots available. Learn to drive in modern, dual-control vehicles equipped with the latest safety features and certified dual pedals.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#services"
                className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group pointer-events-auto"
              >
                <span>View Course Packages</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#testimonials"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#1e293b] px-7 py-4 rounded-full font-bold text-base transition-all duration-300 border-2 border-[#1e293b] hover:border-black flex items-center justify-center gap-2.5 group shadow-xs pointer-events-auto"
              >
                <div className="w-6 h-6 rounded-full border-2 border-[#1e293b] flex items-center justify-center">
                  <User size={13} className="text-[#1e293b]" />
                </div>
                <span>Meet Our Instructors</span>
              </a>
            </div>
          </div>

          {/* Right Column Spacer for Desktop Grid (Desktop visual is positioned absolute full-bleed) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 h-full min-h-[500px] pointer-events-none" />

          {/* Mobile Visual (< lg screens) */}
          <div className="block lg:hidden relative w-full mt-6 mb-4 overflow-hidden rounded-2xl">
            <div className="absolute top-2 right-4 z-20 flex flex-col items-center rotate-3 pointer-events-none select-none">
              <span className="text-xs font-black text-[#1e293b]">Your<br />Driving Journey<br />Starts Here!</span>
              <div className="flex gap-1 -mt-0.5 ml-6 text-amber-500">
                <span className="text-xs">✦</span>
                <span className="text-[9px]">✦</span>
              </div>
            </div>

            <img
              src="/images/hero.png"
              alt="DrivePro Driving Lessons"
              className="w-full h-auto object-cover rounded-2xl"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%), linear-gradient(to bottom, transparent 0%, black 6%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%), linear-gradient(to bottom, transparent 0%, black 6%, black 92%, transparent 100%)',
              }}
            />

            <div className="absolute right-4 bottom-14 select-none">
              <div className="flex items-center">
                <span className="text-xl font-black text-[#1e3a8a]">Drive</span>
                <span className="text-xl font-black text-[#f97316]">Pro</span>
              </div>
              <p className="text-[9px] font-bold text-slate-700">Learn • Drive • Be Safe</p>
            </div>

            <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg py-2 px-3 rounded-xl flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1e40af] text-white flex items-center justify-center">
                <Users size={16} />
              </div>
              <div className="text-left">
                <p className="text-sm font-black text-[#0f172a] leading-tight">12,000+</p>
                <p className="text-[10px] font-semibold text-slate-600">Happy Learners</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Feature Strip (Matching Exact Mockup 4 Cards) */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-20">
          
          {/* Card 1: Dual Control Vehicles */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-sm transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100/80 flex items-center justify-center shrink-0">
              <CarFrontIcon className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">Dual Control</p>
              <p className="text-[11px] text-slate-500 font-medium">Vehicles</p>
            </div>
          </div>

          {/* Card 2: Experienced & Certified Instructors */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-sm transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center shrink-0">
              <User size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">Experienced &amp;</p>
              <p className="text-[11px] text-slate-500 font-medium">Certified Instructors</p>
            </div>
          </div>

          {/* Card 3: Safe & Structured Training */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-sm transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center shrink-0">
              <Shield size={20} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">Safe &amp; Structured</p>
              <p className="text-[11px] text-slate-500 font-medium">Training</p>
            </div>
          </div>

          {/* Card 4: Modern Vehicles with Dual Pedals */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-sm transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100/80 flex items-center justify-center shrink-0">
              <CertificateIcon className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">Modern Vehicles</p>
              <p className="text-[11px] text-slate-500 font-medium">with Dual Pedals</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;



