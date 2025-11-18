import { Crown } from 'lucide-react';

interface CTAButtonProps {
  showSubtext?: boolean;
  className?: string;
}

export default function CTAButton({ showSubtext = false, className = '' }: CTAButtonProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button className="group relative bg-gold-shine text-black font-bold text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(240,213,140,0.55)] transition-all duration-300 hover:scale-105 w-full max-w-md overflow-hidden animation-pulse-subtle">
        <span className="flex items-center justify-center gap-3 relative z-10">
          <Crown className="w-6 h-6" />
          <span>Quero Assumir o controle agora.</span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 animate-shine-button" />
      </button>
      {showSubtext && (
        null
      )}
    </div>
  );
}
