"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, useMotionValue, useTransform, useSpring } from 'motion/react';

// Advanced scroll-triggered animations
export const ScrollReveal = ({ 
  children, 
  direction = 'up',
  distance = 50,
  duration = 0.8,
  delay = 0,
  threshold = 0.1,
  once = true,
  className = ''
}: {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once });
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Magnetic hover effect
export const MagneticHover = ({ 
  children, 
  strength = 0.3,
  className = ''
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax scroll effect
export const ParallaxScroll = ({ 
  children, 
  speed = 0.5,
  className = ''
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useInView(ref) as any;
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Text reveal animation
export const TextReveal = ({ 
  text, 
  delay = 0,
  duration = 0.8,
  className = ''
}: {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Morphing shape animation
export const MorphingShape = ({ 
  shapes,
  duration = 2,
  className = ''
}: {
  shapes: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentShape, setCurrentShape] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % shapes.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [shapes.length, duration]);

  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={shapes[currentShape]}
        fill="currentColor"
        animate={{ d: shapes[currentShape] }}
        transition={{
          duration: duration * 0.8,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
};

// Floating elements animation
export const FloatingElements = ({ 
  children,
  intensity = 1,
  duration = 3,
  className = ''
}: {
  children: React.ReactNode;
  intensity?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10 * intensity, 10 * intensity, -10 * intensity],
        x: [-5 * intensity, 5 * intensity, -5 * intensity],
        rotate: [-2 * intensity, 2 * intensity, -2 * intensity],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Liquid button effect
export const LiquidButton = ({ 
  children, 
  onClick,
  className = ''
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ scale: 0, borderRadius: "50%" }}
        animate={{
          scale: isHovered ? 2 : 0,
          borderRadius: isHovered ? "0%" : "50%",
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

// Particle system
export const ParticleSystem = ({ 
  count = 50,
  className = ''
}: {
  count?: number;
  className?: string;
}) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Typewriter effect
export const TypewriterEffect = ({ 
  text,
  speed = 50,
  className = ''
}: {
  text: string;
  speed?: number;
  className?: string;
}) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  );
};

// 3D card tilt effect
export const TiltCard = ({ 
  children,
  tiltMaxAngleX = 15,
  tiltMaxAngleY = 15,
  className = ''
}: {
  children: React.ReactNode;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [tiltMaxAngleX, -tiltMaxAngleX]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-tiltMaxAngleY, tiltMaxAngleY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default {
  ScrollReveal,
  MagneticHover,
  ParallaxScroll,
  TextReveal,
  MorphingShape,
  FloatingElements,
  LiquidButton,
  ParticleSystem,
  TypewriterEffect,
  TiltCard,
};