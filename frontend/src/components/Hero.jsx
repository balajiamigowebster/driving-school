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
      className="relative pt-28 pb-14 lg:pt-36 lg:pb-16 bg-gradient-to-b from-orange-50/30 via-white to-white text-slate-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-orange-100/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[450px] h-[350px] bg-blue-100/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-6 xl:col-span-6 text-center lg:text-left z-10">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 text-xs font-semibold mb-6 shadow-xs">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <SteeringWheelIcon className="w-3.5 h-3.5" />
              </span>
              <span>Flexible Batches</span>
              <span className="text-orange-300">|</span>
              <span>Certified Instructors</span>
            </div>

            {/* Main Title matching screenshot */}
            <h1 className="text-4xl sm:5xl lg:text-[3.5rem] xl:text-[3.85rem] font-black text-[#131b2e] tracking-tight leading-[1.12] mb-5 font-sans">
              Learn at Your Own Pace <br />
              <span className="text-[#f97316]">Around Your Busy Life</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal mb-8">
              Early morning, late evening, or weekend slots available. Learn to drive in modern, dual-control vehicles equipped with the latest safety features and certified dual pedals.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#services"
                className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>View Course Packages</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#testimonials"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#1e293b] px-7 py-4 rounded-full font-bold text-base transition-all duration-300 border-2 border-[#1e293b] hover:border-black flex items-center justify-center gap-2.5 group shadow-xs"
              >
                <div className="w-6 h-6 rounded-full border-2 border-[#1e293b] flex items-center justify-center">
                  <User size={13} className="text-[#1e293b]" />
                </div>
                <span>Meet Our Instructors</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Image Stage */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end lg:-mr-6 xl:-mr-14 2xl:-mr-20">
            <div className="relative w-full max-w-[620px] lg:max-w-none">
              
              {/* Playful Floating Scribble Badge (Top Right) */}
              <div className="absolute -top-7 right-6 lg:right-12 z-20 hidden sm:flex flex-col items-center rotate-6 pointer-events-none">
                <span className="text-[13px] font-black text-[#1e293b] tracking-wide text-center leading-tight font-sans drop-shadow-xs">
                  Your<br />Driving Journey<br />Starts Here!
                </span>
                <div className="flex gap-0.5 -mt-0.5 ml-8 text-amber-500">
                  <span className="text-xs">✦</span>
                  <span className="text-[9px]">✦</span>
                </div>
              </div>

              {/* Main Image Container - Natural blend without hard borders */}
              <div className="relative w-full overflow-visible group flex justify-center lg:justify-end">
                <img
                  src="/images/Instructor.png"
                  alt="DrivePro Driving Lessons"
                  className="w-full lg:w-[110%] xl:w-[115%] h-auto max-h-[560px] lg:max-h-[640px] xl:max-h-[700px] object-contain object-right-bottom drop-shadow-xl transform lg:translate-x-4 xl:translate-x-8"
                  style={{
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to right, transparent 0%, black 12%, black 86%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to right, transparent 0%, black 12%, black 86%, transparent 100%)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'destination-in'
                  }}
                />

                {/* Soft gradient fades for flawless background blending on all edges */}
                <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-white via-white/70 to-transparent pointer-events-none z-10" />

                {/* Floating "Happy Learners" Badge (Bottom Right of Image) */}
                <div className="absolute bottom-3 right-2 sm:right-6 lg:right-10 z-20 bg-blue-50/95 backdrop-blur-md border border-blue-200/90 py-2.5 px-4 rounded-2xl shadow-xl flex items-center gap-3">
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
          </div>

        </div>

        {/* Bottom Feature Strip (Matching Exact Mockup) */}
        <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: Dual Control Vehicles */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-100/80 flex items-center justify-center shrink-0">
              <CarFrontIcon className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">Dual Control</p>
              <p className="text-[11px] text-slate-500 font-medium">Vehicles</p>
            </div>
          </div>

          {/* Card 2: Experienced & Certified Instructors */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center shrink-0">
              <User size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">Experienced &amp;</p>
              <p className="text-[11px] text-slate-500 font-medium">Certified Instructors</p>
            </div>
          </div>

          {/* Card 3: Safe & Structured Training */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center shrink-0">
              <Shield size={20} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">Safe &amp; Structured</p>
              <p className="text-[11px] text-slate-500 font-medium">Training</p>
            </div>
          </div>

          {/* Card 4: Modern Vehicles with Dual Pedals */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-100/80 flex items-center justify-center shrink-0">
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



