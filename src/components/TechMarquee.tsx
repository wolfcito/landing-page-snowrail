import React from 'react';
import { Box, Code2, Database, Globe, Lock, Cpu, Server, LucideIcon } from 'lucide-react';

type TechItem = {
  name: string;
  description?: string;
  type: 'logo' | 'icon';
  icon?: LucideIcon;
  logoSrc?: string;
  logoAlt?: string;
};

const techs: TechItem[] = [
  {
    name: 'Avalanche',
    description: 'High-Performance Blockchain',
    type: 'logo',
    logoSrc: 'https://cryptologos.cc/logos/avalanche-avax-logo.svg',
    logoAlt: 'Avalanche Logo',
  },
  {
    name: 'Rail',
    description: 'Infrastructure Layer',
    type: 'logo',
    logoSrc: 'https://cdn.prod.website-files.com/6797f43699f81adabf44dd7d/6797f43699f81adabf44de14_rail.svg',
    logoAlt: 'Rail Logo',
  },
  {
    name: 'Ultravioleta',
    description: 'Protocol Partner',
    type: 'logo',
    logoSrc: 'https://ultravioletadao.xyz/uvd.png',
    logoAlt: 'Ultravioleta Logo',
  },
  { name: 'Typescript', type: 'icon', icon: Code2 },
  { name: 'Solidity', type: 'icon', icon: Box },
  { name: 'Arweave', type: 'icon', icon: Database },
  { name: 'x402', type: 'icon', icon: Globe },
  { name: 'EIP-3009', type: 'icon', icon: Lock },
  { name: 'AI Agents', type: 'icon', icon: Cpu },
  { name: 'Node.js', type: 'icon', icon: Server },
];

const TechMarquee: React.FC = () => {
  return (
    <div className="py-12 bg-navy-900 border-y border-white/5 relative overflow-hidden">
        {/* Alpha Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900 to-transparent z-10"></div>
        
        <div className="flex w-full overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
                {[...techs, ...techs, ...techs].map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                        <div key={i} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group cursor-default">
                            {tech.type === 'logo' && tech.logoSrc ? (
                                <img
                                    src={tech.logoSrc}
                                    alt={tech.logoAlt || tech.name}
                                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 rounded-xl bg-white/5 p-2"
                                />
                            ) : (
                                Icon && <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                            )}
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-tight">{tech.name}</span>
                                {tech.type === 'icon' && tech.description && (
                                    <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                                        {tech.description}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default TechMarquee;
