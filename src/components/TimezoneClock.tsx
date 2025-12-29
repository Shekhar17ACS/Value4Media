import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TimezoneData {
  city: string;
  timezone: string;
  offset: number;
}

const timezones: TimezoneData[] = [
  { city: 'India', timezone: 'Asia/Kolkata', offset: 5.5 },
  { city: 'London', timezone: 'Europe/London', offset: 0 },
  { city: 'Dubai', timezone: 'Asia/Dubai', offset: 4 },
  { city: 'Amsterdam', timezone: 'Europe/Amsterdam', offset: 1 },
];

function formatTime(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function getTimeForTimezone(timezone: string): string {
  try {
    const date = new Date();
    return date.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (error) {
    return '00:00';
  }
}

export default function TimezoneClock() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      timezones.forEach((tz) => {
        newTimes[tz.city] = getTimeForTimezone(tz.timezone);
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {timezones.map((tz, index) => (
          <motion.div
            key={tz.city}
            className="relative group"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              className="relative px-6 md:px-8 py-4 md:py-5 bg-white rounded-full overflow-hidden"
              whileHover={{ boxShadow: '0 0 30px rgba(247, 255, 56, 0.3)' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#F7FF38] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="relative z-10 flex items-center space-x-3">
                <motion.span
                  className="text-black font-bold text-base md:text-lg whitespace-nowrap"
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {tz.city}:
                </motion.span>
                <motion.span
                  className="text-black font-black text-lg md:text-xl tabular-nums"
                  key={times[tz.city]}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {times[tz.city] || '00:00'}
                </motion.span>
              </div>

              <motion.div
                className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#F7FF38] rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              />
            </motion.div>

            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#F7FF38] to-[#FFD700] rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
