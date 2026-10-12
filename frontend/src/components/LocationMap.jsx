import React from 'react';
import { MapPin, Navigation, Compass, Clock, Car, Shield, ExternalLink, Sparkles } from 'lucide-react';

const LocationMap = () => {
  const branches = [
    {
      area: "Anna Nagar Training Hub",
      address: "12, 2nd Avenue, Near Anna Nagar Roundtana, Chennai - 600040",
      type: "Main Academy & Simulator Lab",
      phone: "+91 98765 43210",
      mapQuery: "Anna+Nagar+Chenna"
    },
    {
      area: "Adyar & OMR Practice Zone",
      address: "88, Sardar Patel Road, Adyar, Chennai - 600020",
      type: "Highway & Urban Training Branch",
      phone: "+91 98765 43211",
      mapQuery: "Adyar+Chennai"
    },
    {
      area: "Velachery & South Hub",
      address: "15, 100 Feet Bypass Road, Velachery, Chennai - 600042",
      type: "RTO Mock Test Track",
      phone: "+91 98765 43212",
      mapQuery: "Velachery+Chennai"
    }
  ];

  return (
    <section id="location" className="relative py-20 lg:py-24 bg-white text-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-orange-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles size={13} className="text-blue-600" />
            <span>Training Locations &bull; Chennai</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Find Us Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Chennai</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Conveniently located practice grounds and dedicated RTO-pattern tracks with complimentary doorstep pick-up across all major Chennai neighborhoods.
          </p>
        </div>

        {/* Map & Hubs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Google Map Frame */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl min-h-[420px] lg:min-h-[500px] flex flex-col" data-aos="fade-right">
            {/* Top Bar on Map */}
            <div className="p-4 sm:px-6 bg-slate-50/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-900">DrivePro Driving Academy, Chennai</span>
              </div>
              <a
                href="https://maps.google.com/?q=Chennai,+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1.5 font-bold transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Embedded Live Google Map of Chennai */}
            <div className="relative flex-1 w-full h-full min-h-[360px]">
              <iframe
                title="DrivePro Driving School Chennai Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1264870425!2d80.06892477382813!3d13.047525499999998!2m3!1f0!2f0!3f0!32m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Bottom Map Feature Bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-2">
                <Car size={15} className="text-orange-500" />
                Free Doorstep Pickup: Anna Nagar &bull; Adyar &bull; Velachery &bull; T. Nagar &bull; OMR
              </span>
              <span className="flex items-center gap-2 text-emerald-600 font-bold">
                <Shield size={14} />
                Govt. RTO Recognized Track
              </span>
            </div>
          </div>

          {/* Right Column: Branch Locations Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4" data-aos="fade-left">
            {branches.map((b, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider bg-blue-100/70 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {b.type}
                    </span>
                    <a
                      href={`https://maps.google.com/?q=${b.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-600 transition-colors"
                      title="Navigate"
                    >
                      <Navigation size={15} />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1.5 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                    <MapPin size={17} className="text-orange-500 shrink-0" />
                    {b.area}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {b.address}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 pl-6">
                  <span>Helpline: {b.phone}</span>
                  <a
                    href="#book"
                    className="font-bold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Select Branch &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationMap;
