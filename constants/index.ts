export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/home.svg",
  },
  {
    label: "Image Restore",
    route: "/transformations/add/restore",
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/image.svg",
  },
  {
    label: "Generative Fill",
    route: "/transformations/add/fill",
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/stars.svg",
  },
  {
    label: "Object Remove",
    route: "/transformations/add/remove",
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/scan.svg",
  },
  {
    label: "Object Recolor",
    route: "/transformations/add/recolor",
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/filter.svg",
  },
  {
    label: "Background Remove",
    route: "/transformations/add/removeBackground",
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/camera.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/profile.svg",
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "https://raw.githubusercontent.com/rohit-padalkar/Imaginify-SaaS-App/refs/heads/main/Public/assets/icons/filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;