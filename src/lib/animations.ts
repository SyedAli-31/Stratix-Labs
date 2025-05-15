// lib/animations.ts

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const scaleDown = {
  hidden: { opacity: 0, scale: 1.1 },
  show: { opacity: 1, scale: 1 },
};
