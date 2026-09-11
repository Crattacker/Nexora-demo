import React, { useState } from 'react';
import { Mail, MapPin, Phone, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { Category } from '../types';

interface FooterProps {
  onSelectCategory: (cat: Category) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Subscription Banner (Minimalist Black & White) */}
        <div className="border border-white/20 p-6 sm:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 bg-neutral-950">
          <div className="max-w-xl text-center lg:text-left">
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1">
              BECOME A MEMBER · NEXORA PASS
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              GET 10% OFF YOUR FIRST WEAVE
            </h3>
            <p className="font-mono text-xs text-neutral-400 mt-2 uppercase">
              Sign up for private access to wild Muga loom drops, new releases, and atelier stories.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-black bg-white px-5 py-3 uppercase">
                <Check className="w-4 h-4" />
                <span>MEMBER CODE: <strong className="underline">ASSAM10</strong> APPLIED</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full sm:w-[420px]">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full pl-10 pr-4 py-3 text-xs font-mono bg-black border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-white uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <span>JOIN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800 font-mono text-xs">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                NEXORA / WEAVES
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm uppercase font-normal">
              High-performance traditional Assamese ethnic wear engineered by generational master weavers in Sualkuchi and Kamrup. Certified 100% pure Muga silk, Paat sarees, ceremonial Riha, and zero-harm Ahimsa Eri jackets.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-white pt-2 uppercase font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>SILK MARK ORGANIZATION AUTHORIZED</span>
            </div>
          </div>

          {/* Collections Column */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-neutral-400 uppercase">
              <li>
                <button onClick={() => onSelectCategory('Mekhela Sador')} className="hover:text-white transition-colors">
                  MEKHELA SADOR
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Sarees')} className="hover:text-white transition-colors">
                  PURE PAAT SAREES
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Riha')} className="hover:text-white transition-colors">
                  CEREMONIAL RIHA
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Jackets & Blazers')} className="hover:text-white transition-colors">
                  ERI SILK JACKETS
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Men\'s Ethnic')} className="hover:text-white transition-colors">
                  MEN'S ETHNIC
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Bridal & Heritage')} className="hover:text-white transition-colors">
                  BRIDAL HEIRLOOMS
                </button>
              </li>
            </ul>
          </div>

          {/* Guides Column */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              ATELIER GUIDES
            </h4>
            <ul className="space-y-2.5 text-neutral-400 uppercase">
              <li>
                <a href="#heritage-guide" className="hover:text-white transition-colors">
                  THE SACRED 3 SILKS
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-white transition-colors">
                  SEASON LOOKBOOK
                </a>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  SILK MARK VERIFICATION
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  FIT & SIZING SPECS
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  NATURAL SILK CARE
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  WEAVER EQUITY PROGRAM
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              LOCATIONS
            </h4>
            <div className="space-y-3 text-neutral-400 uppercase">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>
                  <strong>SUALKUCHI ATELIER:</strong><br />
                  WEAVER COLONY, KAMRUP, ASSAM 781103
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>
                  <strong>GUWAHATI FLAGSHIP:</strong><br />
                  GS ROAD, GUWAHATI 781005
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-white">
                <Phone className="w-3.5 h-3.5" />
                <span>+91 94350 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-neutral-500 gap-4 uppercase">
          <p>
            © {new Date().getFullYear()} NEXORA WEB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-white cursor-pointer">TERMS OF SALE</span>
            <span className="hover:text-white cursor-pointer">GLOBAL SHIPPING</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
