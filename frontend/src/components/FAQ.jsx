import React, { useState } from 'react';
import { ChevronDown, Sparkles, MessageCircleQuestion, PhoneCall, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do I need a learner's permit before booking lessons?",
      answer: "Yes, you must hold a valid learner's permit or provisional license before you can begin behind-the-wheel practice on public roads with our instructors.",
      category: "Requirements"
    },
    {
      question: "Can I use your car for my actual driving test?",
      answer: "Absolutely! We offer a dedicated test-day package that includes pre-exam warm-up lessons and the use of our dual-control car for your official road test.",
      category: "Road Test"
    },
    {
      question: "How many hours of driving lessons do I typically need?",
      answer: "It varies by individual experience. Complete beginners usually require between 15 to 30 hours of professional instruction combined with private practice to feel fully exam-ready.",
      category: "Duration"
    },
    {
      question: "What is your cancellation or rescheduling policy?",
      answer: "We require at least 24 hours' notice if you need to reschedule or cancel a lesson without incurring any late cancellation fees.",
      category: "Policy"
    },
    {
      question: "Do you pick up and drop off from my location?",
      answer: "Yes! We offer convenient home, school, or workplace pick-up and drop-off within our standard service coverage zone.",
      category: "Convenience"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative min-h-screen py-20 lg:py-24 flex flex-col justify-center bg-slate-900 text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles size={13} className="text-orange-400" />
            <span>5. Frequently Asked Questions (FAQ)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Everything You Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">To Know</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto font-normal">
            Got questions before getting behind the wheel? Here are clear, upfront answers to our most common student inquiries.
          </p>
        </div>

        {/* Animated Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 70}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-gradient-to-b from-slate-800 to-slate-850 border-orange-500/60 shadow-[0_10px_30px_-10px_rgba(249,115,22,0.15)] ring-1 ring-orange-500/30'
                    : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/70'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 sm:px-7 py-5 flex items-center justify-between gap-4 focus:outline-none transition-colors group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                    <span
                      className={`w-8 h-8 shrink-0 rounded-xl flex items-center justify-center text-xs font-bold font-mono transition-all duration-300 shadow-xs ${
                        isOpen
                          ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-orange-500/30'
                          : 'bg-slate-700/80 text-slate-300 group-hover:bg-slate-700 group-hover:text-white'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-400/90 font-mono">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                        isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-orange-500/20 text-orange-400 rotate-180 ring-1 ring-orange-500/40'
                        : 'bg-slate-700/50 text-slate-400 group-hover:text-slate-200 group-hover:bg-slate-700'
                    }`}
                  >
                    <ChevronDown size={17} />
                  </div>
                </button>

                {/* Animated accordion content with transition */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-7 pb-6 pt-1 border-t border-slate-700/40">
                      <div className="flex items-start gap-3 pt-3">
                        <span className="shrink-0 text-xs font-bold px-2 py-0.5 rounded bg-orange-500/15 text-orange-400 border border-orange-500/30 font-mono mt-0.5">
                          ANS
                        </span>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-12 text-center bg-slate-800/40 border border-slate-700/80 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-xs"
        >
          <div className="text-center sm:text-left flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <MessageCircleQuestion size={22} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Have a specific question not listed here?</h4>
              <p className="text-xs sm:text-sm text-slate-400">Our instructors are happy to help you over phone or WhatsApp.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all border border-slate-600 hover:border-slate-500 hover:scale-105"
          >
            <PhoneCall size={14} className="text-orange-400" />
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

