import React from 'react';
import { Award, ShieldCheck, Star, Users, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';

const Testimonials = () => {
  const coaches = [
    {
      name: "Marcus Vance",
      role: "Head Instructor & Founder",
      experience: "12+ Years Exp.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      bio: "With over 12 years of professional driving instruction experience, Marcus specializes in working with anxious beginners and turning them into calm, confident road users.",
      credentials: "State Certified Driving Examiner, Defensive Driving Expert.",
      highlight: "Anxiety & Defense Specialist",
      accent: "blue",
      rating: "5.0",
      studentsCount: "1,400+ Students"
    },
    {
      name: "Sarah Jenkins",
      role: "Senior Instructor",
      experience: "8 Years Exp.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      bio: "Sarah is known for her friendly demeanor and razor-sharp attention to detail. She excels at teaching parallel parking and complex urban navigation with ease.",
      credentials: "Advanced Driver & Rider Trainer, 8 Years Experience.",
      highlight: "Precision Parking & Urban Drive",
      accent: "orange",
      rating: "4.9",
      studentsCount: "1,150+ Students"
    },
    {
      name: 'David "Dave" Rossi',
      role: "Test Prep Specialist",
      experience: "95% Pass Rate",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
      bio: "Dave has a legendary 95% student pass rate. He knows every testing route inside and out and teaches tactical strategies to conquer exam day nerves.",
      credentials: "Certified Fleet & Teen Driving Instructor, Former Examiner.",
      highlight: "RTO Route & Mock Test Master",
      accent: "emerald",
      rating: "5.0",
      studentsCount: "1,800+ Students"
    }
  ];

  return (
    <section id="testimonials" className="relative min-h-screen py-20 lg:py-24 flex flex-col justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles size={13} className="text-blue-600" />
            <span>Meet Our Expert Coaches</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Learn from Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Driving Mentors</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Patient, accredited, and dedicated to your success. Our coaches tailor every lesson to help you build real-world road confidence.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {coaches.map((coach, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-blue-400/60 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="p-7 sm:p-8 flex-1 flex flex-col">
                {/* Profile Header: Avatar + Identity */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative shrink-0">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover ring-4 ring-slate-100 shadow-md group-hover:ring-blue-100 transition-all"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full ring-2 ring-white shadow-xs">
                      <ShieldCheck size={12} strokeWidth={3} />
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                        <Star size={11} className="fill-amber-500 text-amber-500" />
                        {coach.rating}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {coach.experience}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                      {coach.name}
                    </h3>
                    <p className="text-xs font-medium text-orange-600">
                      {coach.role}
                    </p>
                  </div>
                </div>

                {/* Highlight Chip */}
                <div className="mb-4">
                  <span className="inline-block text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                    {coach.highlight}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {coach.bio}
                </p>

                {/* Credentials Box */}
                <div className="mt-auto bg-slate-50/90 rounded-2xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    <GraduationCap size={14} className="text-blue-600" />
                    <span>Credentials &amp; Certifications</span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {coach.credentials}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-7 sm:px-8 py-4 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium flex items-center gap-1.5">
                  <Users size={13} className="text-slate-400" />
                  {coach.studentsCount}
                </span>
                <a
                  href="#book"
                  className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group-hover:underline"
                >
                  Book with {coach.name.split(' ')[0]}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Section Reassurance Note */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="300"
          className="mt-12 text-center text-xs sm:text-sm text-slate-500 flex flex-wrap items-center justify-center gap-4 sm:gap-8"
        >
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-500" />
            100% Background Checked
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-500" />
            Dual-Pedal Certified Instructors
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-500" />
            Patient &amp; Calm Teaching Philosophy
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

