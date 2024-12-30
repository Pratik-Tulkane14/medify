// declarations.d.ts
declare module "*.css" {
  // Each CSS class name maps to a unique string identifier
  const content: {
    readonly [className: string]: string;
  };
  export default content;
}

// For Swiper specific CSS modules
declare module "swiper/css" {
  const styles: {
    readonly swiper: string;
    readonly "swiper-wrapper": string;
    readonly "swiper-slide": string;
    // Add other known Swiper class names
    [key: `swiper-${string}`]: string;
  };
  export default styles;
}

declare module "swiper/css/navigation" {
  const styles: {
    readonly "swiper-button-next": string;
    readonly "swiper-button-prev": string;
    readonly "swiper-button-disabled": string;
  };
  export default styles;
}

declare module "swiper/css/pagination" {
  const styles: {
    readonly "swiper-pagination": string;
    readonly "swiper-pagination-bullet": string;
    readonly "swiper-pagination-bullet-active": string;
    readonly "swiper-pagination-horizontal": string;
    readonly "swiper-pagination-vertical": string;
  };
  export default styles;
}
