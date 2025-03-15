import Hero from "@/sections/hero";
import Products from "@/sections/products";
import About from "@/sections/about";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About
        title="Wheels That Roll with You"
        description="From smooth pavement to rugged terrain, our high-rebound urethane wheels adapt to your ride. Designed for speed, durability, and control, they keep you rolling through any session."
        foregroundImage="/assets/icons/wheel.svg"
        bg="bg-dark-gray"
      />
      <About
        title="Pop That Lasts"
        description="Built with strong ply construction and reinforced layers, our decks hold their shape session after session. Keep the pop fresh and your tricks crisp, no matter how hard you ride."
        foregroundImage="/assets/icons/wood.svg"
        bg="bg-dark-purple"
        changeOrder
      />
      <About
        title="Hardware That Holds Strong"
        description="Every great ride starts with solid hardware. Our high-tensile bolts and nuts keep your setup tight, session after session. No stripped bolts, no loose trucks—just pure skating."
        foregroundImage="/assets/icons/double-sided-wrench-tool.svg"
        bg="bg-navy"
      />
      <About
        title="Designed for the Streets"
        description="From rough pavement to smooth ledges, our gear is built to withstand the demands of street skating. Push harder, grind longer, and ride with confidence."
        foregroundImage="/assets/icons/skateboard.svg"
        bg="bg-dark-green"
        changeOrder
      />
    </>
  );
}
