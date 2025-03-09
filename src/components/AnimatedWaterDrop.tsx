
import React, { useEffect, useRef } from 'react';
import { Droplets } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedWaterDropProps {
  className?: string;
  size?: number;
  color?: string;
  animate?: boolean;
}

const AnimatedWaterDrop: React.FC<AnimatedWaterDropProps> = ({
  className,
  size = 24,
  color = "text-icon-blue-500",
  animate = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!animate || !containerRef.current) return;
    
    const createRipple = () => {
      if (!containerRef.current) return;
      
      const ripple = document.createElement('div');
      ripple.classList.add('water-ripple');
      
      containerRef.current.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1500); // Match animation duration
    };
    
    const interval = setInterval(createRipple, 3000);
    
    return () => clearInterval(interval);
  }, [animate]);
  
  return (
    <div ref={containerRef} className={cn("relative inline-block", className)}>
      <Droplets
        size={size}
        className={cn(
          color,
          animate && "animate-float"
        )}
      />
    </div>
  );
};

export default AnimatedWaterDrop;
