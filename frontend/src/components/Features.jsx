import React from 'react';
import { BadgeCheck, CarFront, Route, Trophy, Sparkles, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BadgeCheck className="w-7 h-7" />,
      number: "01",
      tag: "Certified",
      title: "Certified Professional Instructors",
      desc: "Learn from state-certified, highly experienced instructors who specialize in teaching nervous beginners and defensive driving techniques.",
      gradient: "from-blue-600 to-indigo-600",
      glowColor: "group-hover:shadow-blue-500/25",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200/60"
    },
    {
      icon: <CarFront className="w-7 h-7" />,
      number: "02",
      tag: "Dual Control",
      title: "Modern Dual-Control Vehicles",
      desc: "Drive with peace of mind in our brand-new, dual-control cars maintained to the highest safety and cleanliness standards.",
      gradient: "from-orange-500 to-amber-600",
      glowColor: "group-hover:shadow-orange-500/25",
      badgeBg: "bg-orange-50 text-orange-700 border-orange-200/60"
    },
    {
      icon: <Route className="w-7 h-7" />,
      number: "03",
      tag: "1-on-1 Pacing",
      title: "Tailored Lesson Plans",
      desc: "Every student is unique. We customize our lesson pacing to match your learning curve, ensuring you master every maneuver thoroughly.",
      gradient: "from-indigo-600 to-violet-600",
      glowColor: "group-hover:shadow-indigo-500/25",
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200/60"
    },
    {
      icon: <Trophy className="w-7 h-7" />,
      number: "04",
      tag: "High Success",
      title: "High First-Time Pass Rate",
      desc: "Our focused mock tests and targeted route training give you the exact preparation you need to ace your driving exam.",
      gradient: "from-amber-500 to-orange-500",
      glowColor: "group-hover:shadow-amber-500/25",
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200/60"
    }
  ];

  return (
    <section id="features" className="relative py-28 bg-gradient-to-b from-white via-slate-50/70 to-white overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles size={14} className="text-blue-500" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Your Safety &amp; Success is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Our Priority</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            We provide a calm, supportive, and safety-focused driving experience designed to transform nervous beginners into confident, licensed drivers.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className={`group relative bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-2xl ${feature.glowColor} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden`}
            >
              {/* Subtle gradient bar at the top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div>
                {/* Top Row: Icon + Number Index */}
                <div className="flex items-center justify-between mb-7">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center shadow-lg shadow-slate-200 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className="text-3xl font-black font-mono text-slate-200 group-hover:text-slate-300 transition-colors">
                    {feature.number}
                  </span>
                </div>

                {/* Tag pill */}
                <span className={`inline-block text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full border mb-3 ${feature.badgeBg}`}>
                  {feature.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                <span>Learn more</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="400"
          className="mt-16 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800"
        >
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">Ready to start your driving journey?</h4>
            <p className="text-slate-300 text-sm sm:text-base">
              Book your first driving lesson today and get tailored instruction with dual-control safety.
            </p>
          </div>
          <a
            href="#book"
            className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
          >
            Book a Lesson Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;

