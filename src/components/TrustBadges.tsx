import React from 'react';
import { ShieldCheck, Award, Scissors, Truck } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const benefits = [
    {
      icon: <Award className="w-5 h-5 text-black" />,
      title: 'SILK MARK CERTIFIED',
      description: '100% PURE MUGA, PAAT & ERI SILK WITH VERIFIABLE HOLOGRAM AUTHENTICITY.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-black" />,
      title: 'MASTER SUALKUCHI GUILD',
      description: 'DIRECT FROM WEAVER FAMILIES. FAIR COMPENSATION. ZERO MIDDLEMEN.'
    },
    {
      icon: <Scissors className="w-5 h-5 text-black" />,
      title: 'PRECISION TAILORING',
      description: 'COMPLIMENTARY PRE-STITCHED PLEATS, FALLS & BESPOKE BLOUSE CUTTING.'
    },
    {
      icon: <Truck className="w-5 h-5 text-black" />,
      title: 'GLOBAL EXPRESS DISPATCH',
      description: 'SECURE INSURED LOGISTICS TO 45+ COUNTRIES WITH DOOR-TO-DOOR TRACKING.'
    }
  ];

  return (
    <section className="bg-white border-b border-neutral-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className="flex items-start gap-4 p-5 bg-neutral-100 border border-neutral-200"
            >
              <div className="p-2 bg-white border border-neutral-300 flex-shrink-0">
                {b.icon}
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold text-black tracking-wider uppercase">
                  {b.title}
                </h3>
                <p className="text-[11px] font-mono text-neutral-600 mt-1 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
