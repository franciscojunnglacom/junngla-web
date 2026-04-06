export type Product = {
  slug: string;
  nameKey: string;
  logo: string;
  logoWhite: string;
  color: string;
  textColor: string;
  bgLight: string;
  borderColor: string;
};

export const products: Product[] = [
  {
    slug: "tokeni",
    nameKey: "Tokeni",
    logo: "/logos/tokeni.jpg",
    logoWhite: "/logos/tokeni.jpg",
    color: "bg-tokeni-orange",
    textColor: "text-tokeni-orange",
    bgLight: "bg-tokeni-orange/10",
    borderColor: "border-tokeni-orange/20",
  },
  {
    slug: "lups",
    nameKey: "Lups",
    logo: "/logos/lups.png",
    logoWhite: "/logos/lups.png",
    color: "bg-lups-orange",
    textColor: "text-lups-orange",
    bgLight: "bg-lups-orange/10",
    borderColor: "border-lups-orange/20",
  },
  {
    slug: "flux",
    nameKey: "Flux",
    logo: "/logos/flux.jpg",
    logoWhite: "/logos/flux-white.png",
    color: "bg-flux-cyan",
    textColor: "text-flux-cyan",
    bgLight: "bg-flux-cyan/10",
    borderColor: "border-flux-cyan/20",
  },
  {
    slug: "lenndos",
    nameKey: "LenndOS",
    logo: "/logos/lenndos.png",
    logoWhite: "/logos/lenndos.png",
    color: "bg-lenndos-cyan",
    textColor: "text-lenndos-cyan",
    bgLight: "bg-lenndos-cyan/10",
    borderColor: "border-lenndos-cyan/20",
  },
];
