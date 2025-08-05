
'use client';

import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'zoom-in' | 'rotate-in' | 'bounce-in' | 'scale-up';
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-visible');
              entry.target.classList.add('in-view');
            }, delay);
          } else {
            // Re-trigger animations when scrolling back up
            entry.target.classList.remove('animate-visible');
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={elementRef}
      className={`scroll-animate ${animation} ${className}`}
    >
      {children}
      
      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }
        
        .fade-up {
          transform: translateY(80px) scale(0.95);
        }
        
        .slide-left {
          transform: translateX(-100px) scale(0.9);
        }
        
        .slide-right {
          transform: translateX(100px) scale(0.9);
        }
        
        .zoom-in {
          transform: scale(0.6);
        }
        
        .rotate-in {
          transform: rotate(-15deg) scale(0.7);
        }
        
        .bounce-in {
          transform: translateY(100px) scale(0.3);
        }
        
        .scale-up {
          transform: scale(0.8) translateY(50px);
        }
        
        .animate-visible {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1) rotate(0);
        }
        
        .in-view {
          animation: revealAnimation 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes revealAnimation {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}