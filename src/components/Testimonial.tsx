interface TestimonialProps {
  name: string;
  text: string;
  time: string;
}

export default function Testimonial({ name, text, time }: TestimonialProps) {
  return (
    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-6 rounded-2xl border border-gold-shine/20 hover:border-gold-shine/40 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gold-shine flex items-center justify-center text-black font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-[#F7F4EE] font-semibold">{name}</h4>
          <p className="text-gold text-xs">{time}</p>
        </div>
      </div>
      <p className="text-[#F7F4EE]/90 leading-relaxed text-sm md:text-base">
        {text}
      </p>
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-gold text-lg"></span>
        ))}
      </div>
    </div>
  );
}
