/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Anchor, 
  BookOpen, 
  GraduationCap, 
  History, 
  Infinity, 
  Award, 
  ShieldCheck, 
  Microscope,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
  Mail,
  Youtube,
  Globe
} from 'lucide-react';

const colors = {
  marineBlue: '#002D62',
  gold: '#c5a059',
  deepBlack: '#0d0d0d',
  softWhite: '#f2f2f2',
};

const PurchaseLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: any }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-between gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center gap-3">
      <Icon className="w-4 h-4 text-accent" />
      <span className="text-white text-xs font-bold uppercase tracking-widest leading-none">{children}</span>
    </div>
    <ChevronRight className="w-3 h-3 text-white/30 group-hover:text-white/60 transition-colors" />
  </motion.a>
);

const AchievementCard = ({ icon: Icon, title, desc, delay }: { icon: any; title: string; desc: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="p-8 border border-white/5 bg-white/[0.02] flex flex-col items-start"
  >
    <div className="w-10 h-10 border border-accent/30 flex items-center justify-center mb-10">
      <Icon className="w-4 h-4 text-accent" />
    </div>
    <h3 className="text-2xl font-serif text-white mb-4 leading-tight">{title}</h3>
    <p className="text-white/40 text-sm leading-relaxed font-light">{desc}</p>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f2f2f2] selection:bg-accent selection:text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:py-8 border-b border-white/10 bg-[#0d0d0d]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-1 leading-none">A Biography of Resilience</p>
            <h2 className="text-xl font-light tracking-tighter italic font-serif">Dr. Daniel Schilling Weiss Nguyen</h2>
          </motion.div>

          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.3em] uppercase">
            {['Story', 'Impact', 'The Book'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-white/40 hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 leading-none mb-1">Release Edition</p>
              <p className="text-[10px] font-mono tracking-widest uppercase text-white/80">Vol. 1975—2024</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white/40 hover:text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center py-20 overflow-hidden border-b border-white/5">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1518114055470-9c48ca436894?q=80&w=2670&auto=format&fit=crop" 
            alt="Vast ocean at sunset"
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8">
              <div className="relative mb-6">
                <p className="text-[12px] uppercase tracking-[0.5em] text-accent font-bold mb-4">The Resurrection Story</p>
                <h1 className="text-[14vw] md:text-[120px] font-serif font-black leading-[0.85] tracking-tighter uppercase text-white">
                  Earned,<br />
                  <span className="text-accent">Not Given</span>
                </h1>
              </div>
              
              <div className="max-w-md mt-10">
                <p className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed">
                  "From a pistol click in Huế to global impact—a living testimony that your beginning does not determine your ending."
                </p>
                <div className="mt-12 flex flex-wrap gap-4">
                  <motion.a 
                    href="#the-book"
                    whileHover={{ backgroundColor: '#fff', color: '#000' }}
                    className="px-8 py-4 bg-accent text-black font-bold uppercase tracking-widest text-[11px] rounded-sm transition-all"
                    id="cta-buy-amazon"
                  >
                    Purchase on Amazon
                  </motion.a>
                  <motion.a 
                    href="#the-book"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] rounded-sm transition-all"
                  >
                    Barnes & Noble
                  </motion.a>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex lg:col-span-4 flex-col justify-end h-full">
              <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Latest Achievement</p>
                <p className="text-sm text-white/70 italic leading-relaxed font-serif">
                  "Dr. Nguyen currently serves as a federal IT executive, continuing to bridge the gap between academia and industry through relentless service."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute bottom-10 right-10 flex items-center gap-4 rotate-90 origin-right opacity-30"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] whitespace-nowrap">A Testimony of Second Chances</span>
          <div className="w-12 h-[1px] bg-white/50" />
        </motion.div>
      </section>

      {/* The Story / Journey */}
      <section id="story" className="py-40 px-6 bg-white text-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-10 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-accent"></span> The Escape
              </h3>
              <h2 className="text-[10vw] md:text-7xl font-serif font-black tracking-tighter uppercase mb-12 leading-none">
                Three Boats, <br />
                <span className="text-accent italic font-light">Three Miracles</span>
              </h2>
              <div className="space-y-10 text-xl md:text-3xl font-serif leading-relaxed text-black/80 italic pr-12">
                <p>
                  "In 1975, a communist officer pressed a Makarov pistol to my brother’s temple. What followed were three desperate escapes across the deadly South China Sea."
                </p>
                <p className="text-lg md:text-xl not-italic font-sans font-light text-black/60 mb-8">
                  Three times the waves should have become our grave. Three times Jesus Christ answered our prayers and calmed the sea.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 pt-20">
              <div className="sticky top-40 space-y-8">
                <div className="relative aspect-[4/5] overflow-hidden grayscale">
                  <img 
                    src="https://images.unsplash.com/photo-1544161515-4ae6ce6ca674?auto=format&fit=crop&q=80&w=800" 
                    alt="US Marine imagery" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border-[20px] border-white" />
                </div>
                <p className="text-sm font-light leading-relaxed text-black/50 uppercase tracking-widest pl-4 border-l border-accent">
                  Arriving in America in 1983 with nothing—no money, no English, only salt on his skin and faith in his heart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact / Multiplication */}
      <section id="impact" className="py-40 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-accent"></span> The Multiplication
            </h3>
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter uppercase leading-none">Professional <br />Legacy & Impact</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-4">
            <AchievementCard 
              icon={ShieldCheck}
              title="U.S.M.C."
              desc="United States Marine Corps Veteran. A journey that began with salt skin and ended with iron discipline."
              delay={0.1}
            />
            <AchievementCard 
              icon={Infinity}
              title="$3.5M Savings"
              desc="Delivered millions in savings during a 22+ year federal IT career at DFAS and NOAA."
              delay={0.2}
            />
            <AchievementCard 
              icon={GraduationCap}
              title="Ranked #1"
              desc="Recognized globally for long-term workforce impact and educational excellence among refugees."
              delay={0.3}
            />
            <AchievementCard 
              icon={Microscope}
              title="11 Chairs"
              desc="Mentoring the next generation of leaders. Chaired 11 doctoral dissertations in AI and Cybersecurity."
              delay={0.4}
            />
          </div>

          <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            <div className="p-10 border-r border-white/10 border-b lg:border-b-0 space-y-4">
              <p className="text-4xl font-serif text-white">#1 Worldwide</p>
              <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold leading-relaxed">Among Vietnamese Refugees for Educational Impact</p>
            </div>
            <div className="p-10 border-r border-white/10 border-b lg:border-b-0 space-y-4">
              <p className="text-4xl font-serif text-white">$3.5M</p>
              <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold leading-relaxed">Federal IT Savings Delivered for America</p>
            </div>
            <div className="p-10 border-r border-white/10 border-b md:border-b-0 space-y-4">
              <p className="text-4xl font-serif text-white">11 Doctoral</p>
              <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold leading-relaxed">Dissertations Chaired as Practitioner Chair</p>
            </div>
            <div className="p-10 space-y-4">
              <p className="text-4xl font-serif text-white">#1 Global</p>
              <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold leading-relaxed">Professor Rank for Workforce Multiplication</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Book */}
      <section id="the-book" className="py-40 px-6 bg-accent text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <p className="text-[12px] uppercase tracking-[0.5em] font-black mb-8 border-b border-black/10 pb-4 inline-block">Release Date: May 2024</p>
              <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter uppercase mb-10 leading-[0.85]">
                Your Second <br />
                <span className="italic font-light">Chance</span> <br />
                is Waiting
              </h2>
              <p className="text-black/80 text-lg md:text-xl font-serif italic mb-12 leading-relaxed max-w-xl">
                "This is more than a survival story. It’s a resurrection story. A living testimony that your beginning does not determine your ending." 
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <PurchaseLink href="https://amazon.com" icon={Anchor}>Buy on Amazon</PurchaseLink>
                <PurchaseLink href="https://barnesandnoble.com" icon={BookOpen}>Barnes & Noble</PurchaseLink>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
              <motion.div 
                whileHover={{ rotate: -5, scale: 1.05 }}
                className="relative flex justify-center"
              >
                <div className="absolute inset-0 bg-black/20 translate-x-4 translate-y-4 blur-3xl rounded-full" />
                <img 
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Book cover" 
                  className="relative z-10 w-full max-w-sm rounded-[4px] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 bg-[#0d0d0d] text-white">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-12 mb-16 gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-3 leading-none">A Biography of Resilience</p>
              <h2 className="text-3xl font-light tracking-tighter italic font-serif">Dr. Daniel Schilling Weiss Nguyen</h2>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-1 leading-none">Primary Subject</p>
              <p className="text-xs font-mono tracking-widest uppercase">Leadership & Faith Testimonial</p>
            </div>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent font-black">Links</h4>
              <ul className="text-xs space-y-4 uppercase tracking-widest text-white/40">
                <li className="hover:text-white transition-colors cursor-pointer">The Journey</li>
                <li className="hover:text-white transition-colors cursor-pointer">Impact Data</li>
                <li className="hover:text-white transition-colors cursor-pointer">Mentorship</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent font-black">Social</h4>
              <ul className="text-xs space-y-4 uppercase tracking-widest text-white/40">
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">YouTube <Youtube size={12} /></li>
                <li className="hover:text-white transition-colors cursor-pointer">Facebook</li>
                <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
              </ul>
            </div>
            <div className="col-span-2 space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent font-black">Contact</h4>
              <p className="text-lg font-serif italic text-white/60">"Your second chance is waiting. Reach out to collaborate on dissertations or leadership impact."</p>
              <a href="mailto:dans515e@gmail.com" className="inline-block text-xs uppercase tracking-[0.3em] font-bold text-white border-b border-accent pb-1">dans515e@gmail.com</a>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] text-white/20">
            <p>© 2024 Daniel Nguyen. All rights reserved.</p>
            <div className="flex gap-10">
              <span className="flex items-center gap-2">Location <span className="text-white/40">Washington, D.C.</span></span>
              <span className="flex items-center gap-2">Role <span className="text-white/40">Marine Corps Veteran / IT Executive</span></span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0d0d0d] flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 text-white/40 hover:text-white"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-10 text-4xl font-serif italic">
              {['Story', 'Impact', 'The Book'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="mt-10">
                <PurchaseLink href="https://amazon.com" icon={Anchor}>Purchase Now</PurchaseLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
