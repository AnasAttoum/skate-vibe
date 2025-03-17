import { About } from "@/types/about";

export const ABOUT: About[] = [
  {
    id: 1,
    title: "Wheels That Roll with You",
    description:
      "From smooth pavement to rugged terrain, our high-rebound urethane wheels adapt to your ride. Designed for speed, durability, and control, they keep you rolling through any session.",
    foregroundImage: "/assets/icons/wheel.svg",
    bg: "bg-dark-gray",
  },
  {
    id: 2,
    title: "Pop That Lasts",
    description:
      "Built with strong ply construction and reinforced layers, our decks hold their shape session after session. Keep the pop fresh and your tricks crisp, no matter how hard you ride.",
    foregroundImage: "/assets/icons/wood.svg",
    bg: "bg-dark-purple",
    changeOrder: true,
  },
  {
    id: 3,
    title: "Hardware That Holds Strong",
    description:
      "Every great ride starts with solid hardware. Our high-tensile bolts and nuts keep your setup tight, session after session. No stripped bolts, no loose trucks—just pure skating.",
    foregroundImage: "/assets/icons/double-sided-wrench-tool.svg",
    bg: "bg-dark-green",
  },
  {
    id: 4,
    title: "Designed for the Streets",
    description:
      "From rough pavement to smooth ledges, our gear is built to withstand the demands of street skating. Push harder, grind longer, and ride with confidence.",
    foregroundImage: "/assets/icons/skateboard.svg",
    bg: "bg-navy",
    changeOrder: true,
  },
];
