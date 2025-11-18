import { useEffect, useState } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 37,
    seconds: 45,
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const tick = () => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          return prevTime; // Stop at 00:00:00
        }

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }
        return { hours, minutes, seconds };
      });
      timer = setTimeout(tick, 1000);
    };

    timer = setTimeout(tick, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4">
      {[
        { label: 'HORAS', value: timeLeft.hours },
        { label: 'MINUTOS', value: timeLeft.minutes },
        { label: 'SEGUNDOS', value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-gold-shine text-black font-bold text-3xl md:text-4xl px-6 py-4 rounded-lg min-w-[80px] text-center">
            {String(item.value).padStart(2, '0')}
          </div>
          <span className="text-gold text-xs mt-2 font-medium tracking-widest">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
