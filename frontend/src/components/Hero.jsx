import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Star, ArrowRight, Play, CheckCircle2, Award } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      badge: "State-Certified Driving Academy",
      title: "Master the Road with",
      highlight: "Absolute Confidence",
      subtitle: "Overcome your driving anxiety with patient, state-certified mentors. We provide a calm, safety-first dual-pedal environment so you can learn at your own pace and pass on your very first try.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
      tag: "Dual-Control Safety",
      ctaText: "Book Your First Lesson",
      ctaLink: "#book",
      secondaryText: "Explore Packages",
      secondaryLink: "#services",
      metric: "98.4%",
      metricLabel: "First-Time Pass Rate"
    },
    {
      badge: "Flexible Batch Timings",
      title: "Learn at Your Own Pace",
      highlight: "Around Your Busy Life",
      subtitle: "Early morning, late evening, or weekend slots available. Learn to drive in modern, dual-control vehicles equipped with the latest safety features and certified dual pedals.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
      tag: "Doorstep Pick & Drop",
      ctaText: "View Course Packages",
      ctaLink: "#services",
      secondaryText: "Meet Our Instructors",
      secondaryLink: "#testimonials",
      metric: "12,000+",
      metricLabel: "Lessons Completed"
    },
    {
      badge: "Proven Curriculum & RTO Prep",
      title: "Join Thousands of Proud,",
      highlight: "Licensed Drivers",
      subtitle: "Boasting a high first-time pass rate, our structured curriculum is designed to turn nervous beginners into smart, defensive, and road-ready licensed drivers.",
      image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2070&auto=format&fit=crop",
      tag: "RTO Test Simulation",
      ctaText: "Meet Our Coaches",
      ctaLink: "#testimonials",
      secondaryText: "Book Mock Test",
      secondaryLink: "#book",
      metric: "4.9 / 5",
      metricLabel: "Student Satisfaction"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 pb-16 lg:pt-28 lg:pb-20 flex items-center bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-orange-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-orange-400 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span>{slides[currentSlide].badge}</span>
            </div>

            {/* Headline with dynamic transition */}
            <div className="min-h-[170px] sm:min-h-[190px] lg:min-h-[220px]">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.85rem] font-extrabold tracking-tight leading-[1.12] mb-5 text-white">
                {slides[currentSlide].title}{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 mt-1">
                  {slides[currentSlide].highlight}
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={slides[currentSlide].ctaLink}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>{slides[currentSlide].ctaText}</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={slides[currentSlide].secondaryLink}
                className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-300 border border-slate-700/80 hover:border-slate-600 flex items-center justify-center"
              >
                {slides[currentSlide].secondaryText}
              </a>
            </div>

            {/* Social Proof / Trust Footnote */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-slate-900">MV</span>
                  <span className="w-7 h-7 rounded-full bg-orange-500 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-slate-900">SJ</span>
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-slate-900">DR</span>
                </div>
                <span className="font-semibold text-slate-300">Certified Coaches</span>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9/5</span>
                <span className="text-slate-500">(1,800+ Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span className="text-slate-300">100% Dual-Control Cars</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage with Card Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-orange-500/30 to-blue-600/30 rounded-[2.5rem] blur-xl opacity-70" />

              {/* Main Image Slider Canvas */}
              <div className="relative h-[420px] sm:h-[490px] rounded-[2.2rem] overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl group">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-1000 ease-out transform ${
                      i === currentSlide 
                        ? 'opacity-100 scale-100 z-10' 
                        : 'opacity-0 scale-105 pointer-events-none z-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Atmospheric gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                  </div>
                ))}

                {/* Floating Metric Badge (Top Right) */}
                <div className="absolute top-5 right-5 z-20 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-xl">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{slides[currentSlide].metricLabel}</p>
                  <p className="text-xl font-black text-orange-400">{slides[currentSlide].metric}</p>
                </div>

                {/* Floating Feature Chip (Bottom Left) */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-2xl shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Feature Highlight</p>
                      <p className="text-sm font-bold text-white">{slides[currentSlide].tag}</p>
                    </div>
                  </div>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={prevSlide}
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Slide Progress Bars below image */}
              <div className="flex items-center justify-center gap-2.5 mt-5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      i === currentSlide 
                        ? 'w-10 bg-gradient-to-r from-orange-400 to-amber-400' 
                        : 'w-2.5 bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Jump to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

