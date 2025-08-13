import { useSpring } from '@react-spring/web';

export const useHeroAnimations = () => {
  const leftContentSpring = useSpring({
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    config: { duration: 600, tension: 300, friction: 30 },
  });

  const badgeSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 200,
    config: { duration: 500 },
  });

  const titleSpring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 300,
    config: { duration: 600 },
  });

  const descriptionSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 400,
    config: { duration: 600 },
  });

  const buttonsSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 500,
    config: { duration: 600 },
  });

  const featuresSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 600,
    config: { duration: 600 },
  });

  const rightContentSpring = useSpring({
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
    delay: 300,
    config: { duration: 800, tension: 300, friction: 30 },
  });

  const cardSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 500,
    config: { duration: 600 },
  });

  const statsSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 700,
    config: { duration: 600 },
  });

  const paybackSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 800,
    config: { duration: 600 },
  });

  return {
    leftContentSpring,
    badgeSpring,
    titleSpring,
    descriptionSpring,
    buttonsSpring,
    featuresSpring,
    rightContentSpring,
    cardSpring,
    statsSpring,
    paybackSpring,
  };
};

// Benefits Section Animations
export const useBenefitsAnimations = () => {
  const headerSpring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { duration: 600 },
  });

  const badgeSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 200,
    config: { duration: 500 },
  });

  const titleSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 300,
    config: { duration: 600 },
  });

  const descriptionSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 400,
    config: { duration: 600 },
  });

  return {
    headerSpring,
    badgeSpring,
    titleSpring,
    descriptionSpring,
  };
};

// CTA Banner Animations
export const useCTABannerAnimations = () => {
  const leftContentSpring = useSpring({
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    config: { duration: 800 },
  });

  const badgeSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 200,
    config: { duration: 500 },
  });

  return {
    leftContentSpring,
    badgeSpring,
  };
};

// Generic Animations
export const useFadeInUp = (delay = 0) => {
  return useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay,
    config: { duration: 600 },
  });
};

export const useFadeInLeft = (delay = 0) => {
  return useSpring({
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    delay,
    config: { duration: 600 },
  });
};

export const useFadeInRight = (delay = 0) => {
  return useSpring({
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
    delay,
    config: { duration: 600 },
  });
};

export const useScaleIn = (delay = 0) => {
  return useSpring({
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
    delay,
    config: { duration: 600, tension: 300, friction: 30 },
  });
};
