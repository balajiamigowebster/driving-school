import React from 'react';
import { Check, Star, Sparkles, Shield, Clock, Compass, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const packages = [
    {
      id: "starter",
      title: "Starter Beginner Package",
      badge: "Best for Novice Drivers",
      price: "₹7,499",
      period: "10 Hours Training",
      summary: "Designed for individuals getting behind the wheel for the first time, focused on core control and confidence.",
      features: [
        "10 hours of behind-the-wheel instruction",
        "Basic vehicle handling & parking fundamentals",
        "Defensive driving basics",
        "Pick-up and drop-off from home/school"
      ],
      popular: false,
      accent: "blue",
      hoursBadge: "10 Hours",
      icon: <Compass className="w-5 h-5 text-blue-600" />
    },
    {
      id: "mastery",
      title: "Complete Mastery Package",
      badge: "Most Popular",
      price: "₹13,999",
      period: "20 Hours Training",
      summary: "Our full comprehensive curriculum designed to take you from total novice to confident, road-test ready pro.",
      features: [
        "20 hours of comprehensive training",
        "Advanced road navigation & heavy traffic handling",
        "Parallel parking & reverse bay parking mastery",
        "Mock test simulation included",
        "Priority scheduling"
      ],
      popular: true,
      accent: "orange",
      hoursBadge: "20 Hours",
      icon: <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
    },
    {
      id: "express",
      title: "Road Test Express",
      badge: "Quick Tune-Up",
      price: "₹2,999",
      period: "3 Hours Training",
      summary: "Targeted, intensive brush-up right before your official driving test to iron out flaws and pass on your first attempt.",
      features: [
        "3 hours of intensive exam preparation",
        "Route practice around local RTO / Test centers",
        "Final tips & confidence-boosting run-through",
        "Car rental for road test day (optional add-on)"
      ],
      popular: false,
      accent: "slate",
      hoursBadge: "3 Hours",
      icon: <Zap className="w-5 h-5 text-orange-500" />
    }
  ];

  return (
    <section id="services" className="relative min-h-screen py-16 lg:py-20 flex flex-col justify-center bg-slate-950 text-white overflow-hidden">
      {/* Background aesthetic lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <Sparkles size={13} className="text-orange-400" />
            <span>Packages &amp; Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-white mb-3 leading-tight">
            Transparent Pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">Zero Hidden Charges</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Choose a driving course tailored to your current experience level. Every plan includes certified 1-on-1 coaching and dual-control safety.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-orange-500/90 shadow-[0_20px_50px_-15px_rgba(249,115,22,0.25)] lg:-translate-y-3'
                  : 'bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Most Popular Ribbon */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/40">
                    <Star size={12} className="fill-white" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-7 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-3">
                    {!pkg.popular ? (
                      <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                        {pkg.badge}
                      </span>
                    ) : <div />}
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-800/60 px-2.5 py-0.5 rounded-lg">
                      <Clock size={12} className="text-slate-400" />
                      {pkg.hoursBadge}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {pkg.summary}
                  </p>

                  {/* Price Display */}
                  <div className="pb-5 mb-5 border-b border-slate-800/80">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-slate-400 text-xs sm:text-sm font-medium">
                        / total
                      </span>
                    </div>
                    <span className="inline-block text-[11px] text-slate-500 font-medium mt-0.5">
                      All-inclusive fees &bull; No surge pricing
                    </span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div>
                  <p className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-3">
                    What's included:
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                            pkg.popular
                              ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                              : 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                          }`}
                        >
                          <Check size={10} strokeWidth={3} />
                        </span>
                        <span className="text-xs sm:text-sm text-slate-300 leading-snug font-normal">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-7 lg:p-8 pt-0">
                <a
                  href="#book"
                  className={`w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02]'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 hover:scale-[1.01]'
                  }`}
                >
                  <span>Select {pkg.title.split(' ')[0]}</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Footer */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="mt-10 lg:mt-12 text-center border-t border-slate-800/80 pt-5"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Shield size={14} className="text-emerald-400" />
              100% Dual-Pedal Safe Vehicles
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-orange-400" />
              RTO Test Route Familiarization
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-blue-400" />
              Flexible Morning &amp; Weekend Batches
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

