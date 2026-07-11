import { useState, useEffect } from 'react';

interface Activity {
  id: number;
  text: string;
  top: number;
  isLeftEdge: boolean;
  horizontalOffset: number;
  icon?: string;
}

const COINS = [
  { name: 'BTC', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/btc.svg' },
  { name: 'ETH', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/eth.svg' },
  { name: 'SOL', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/sol.svg' },
  { name: 'USDT', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/usdt.svg' },
  { name: 'BNB', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/bnb.svg' },
  { name: 'ADA', icon: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/ada.svg' }
];

const ACTIONS = [
  'Purchased Successfully',
  'Sold Successfully',
  'Converted Successfully',
  'Deposited'
];

export default function LiveActivityBackground() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const spawnActivity = (isLeft: boolean) => {
      const coin = COINS[Math.floor(Math.random() * COINS.length)];
      const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
      const amount = (Math.random() * 2.5 + 0.01).toFixed(3);
      const text = `${amount} ${coin.name} ${action}`;
      
      const horizontalOffset = Math.random() * 8 + 2; // 2-10% from the edge
      const top = Math.random() * 75 + 5; // 5-80% from top
      
      const newActivity: Activity = {
        id: Math.random().toString(36).substring(7) as any, // Cast to any to avoid interface error, or we can just change interface. Wait, interface says id: number. Let me just use Math.random() as a number instead.
        text,
        top,
        isLeftEdge: isLeft,
        horizontalOffset,
        icon: coin.icon
      };

      setActivities(prev => [...prev, newActivity]);

      // Remove after animation finishes
      setTimeout(() => {
        setActivities(prev => prev.filter(a => a.id !== newActivity.id));
      }, 4500);
    };

    // Independent timers for left and right to create a natural, asynchronous busy effect
    const leftInterval = setInterval(() => {
      // 80% chance to spawn, keeping it organic
      if (Math.random() > 0.2) spawnActivity(true);
    }, 2200);

    const rightInterval = setInterval(() => {
      if (Math.random() > 0.2) spawnActivity(false);
    }, 2500);

    // Initial spawn so the user doesn't wait
    spawnActivity(true);
    setTimeout(() => spawnActivity(false), 800);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {activities.map(activity => (
        <div
          key={activity.id}
          className="absolute flex items-center gap-3 bg-[#1A1F36]/30 backdrop-blur-sm border border-white/5 rounded-2xl px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-toast-fade"
          style={{ 
            top: `${activity.top}%`, 
            ...(activity.isLeftEdge ? { left: `${activity.horizontalOffset}%` } : { right: `${activity.horizontalOffset}%` })
          }}
        >
          {activity.icon && (
            <img src={activity.icon} alt="coin" className="w-5 h-5 rounded-full opacity-70" />
          )}
          <span className="text-white/60 font-medium text-[13px] md:text-[15px] whitespace-nowrap">
            {activity.text}
          </span>
        </div>
      ))}
    </div>
  );
}
