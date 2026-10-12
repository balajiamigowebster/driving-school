import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Send, Sparkles, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: 'Complete Mastery Package (₹13,999 - 20 Hours)',
    batch: 'Morning (7:00 AM - 10:00 AM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep feedback visible
    }, 4000);
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 lg:py-24 flex flex-col justify-center bg-gradient-to-b from-white via-slate-50/80 to-white overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles size={13} className="text-blue-600" />
            <span>Book Your Driving Slot</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Ready to Get Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Wheel?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Book your certified 1-on-1 driving lesson or schedule an RTO mock test. Our team confirms slots within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info & Value Props */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-sm space-y-7">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Speak Directly with Us</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Have questions about pricing, learner's permits, or doorstep pick-up? Reach out directly.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4 pt-2">
                <a 
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200/70 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Hotline / WhatsApp</p>
                    <p className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">+91 98765 43210</p>
                  </div>
                </a>

                <a 
                  href="mailto:admissions@driveproacademy.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-orange-50/60 border border-slate-100 hover:border-orange-200/70 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Admissions &amp; Queries</p>
                    <p className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">admissions@driveproacademy.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Main Training Center</p>
                    <p className="text-sm font-bold text-slate-900">42, Metro Avenue, Near RTO Ground</p>
                    <p className="text-xs text-slate-500">Free door-to-door pick-up within 10 km</p>
                  </div>
                </div>
              </div>

              {/* Working Hours Pill */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-600 font-medium">
                <Clock size={16} className="text-orange-500 shrink-0" />
                <span>Training Batches: Mon &ndash; Sun: 6:00 AM &ndash; 8:00 PM</span>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="mt-6 bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-7 shadow-lg flex items-center gap-4 border border-slate-800">
              <ShieldCheck size={36} className="text-orange-400 shrink-0" />
              <div>
                <p className="text-sm font-bold text-white">100% Guaranteed Practice</p>
                <p className="text-xs text-slate-300 mt-0.5">Dual-control safety vehicles &bull; Certified lady instructors available</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Booking Form */}
          <div className="lg:col-span-7" id="book" data-aos="fade-left">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden">
              
              {/* Form Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Reserve Your Session</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">No payment required now. Pay after your first consultation.</p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Slots Available This Week
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Booking Request Received!</h4>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || 'Student'}</span>! Our senior coordinator will call you at <span className="font-bold text-slate-900">{formData.phone || 'your number'}</span> to confirm your slot.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm bg-slate-50/50 hover:bg-white focus:bg-white text-slate-800"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        WhatsApp / Phone Number <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm bg-slate-50/50 hover:bg-white focus:bg-white text-slate-800"
                        placeholder="+91 98765 00000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm bg-slate-50/50 hover:bg-white focus:bg-white text-slate-800"
                        placeholder="rahul@example.com"
                      />
                    </div>

                    {/* Preferred Batch Timing */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Preferred Batch
                      </label>
                      <select
                        value={formData.batch}
                        onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm bg-slate-50/50 hover:bg-white focus:bg-white text-slate-800 font-medium"
                      >
                        <option>Morning (6:00 AM - 9:00 AM)</option>
                        <option>Mid-Day (10:00 AM - 1:00 PM)</option>
                        <option>Evening (4:00 PM - 7:00 PM)</option>
                        <option>Weekend Intensive Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Package */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Selected Course Package
                    </label>
                    <select
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm bg-slate-50/50 hover:bg-white focus:bg-white text-slate-800 font-medium"
                    >
                      <option>Complete Mastery Package (₹13,999 - 20 Hours) - Most Popular</option>
                      <option>Starter Beginner Package (₹7,499 - 10 Hours)</option>
                      <option>Road Test Express (₹2,999 - 3 Hours)</option>
                      <option>Custom Evaluation / Refresher Class</option>
                    </select>
                  </div>

                  {/* Message / Special Needs */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Specific Notes or Pick-Up Location (Optional)
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm bg-slate-50/50 hover:bg-white focus:bg-white text-slate-800 resize-none"
                      placeholder="e.g. I am a nervous first-time driver; please arrange door pick-up near Anna Nagar..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-white py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                  >
                    <span>Confirm Lesson Request</span>
                    <ArrowRight size={18} />
                  </button>

                  <p className="text-center text-[11px] text-slate-500 pt-1">
                    🔒 We respect your privacy. No spam. You'll only receive our official booking confirmation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

