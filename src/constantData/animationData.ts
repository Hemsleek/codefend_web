export const servicesVariant = {
  visible: { opacity: 1, translateX: 0 },
  hidden: { opacity: 0, translateX: "-100%" },
};

export const contactVariant = {
  visible: { opacity: 1, translateY: 0 },
  hidden: { opacity: 0, translateY: "100%" },
};

export const marqueeVariants = {
  visible: { translateX: "-102%" },
  hidden: { translateX: "95%" },
};

export const heroVariants = {
  visible: { x: [30, 100, 0], opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.3 },
};
