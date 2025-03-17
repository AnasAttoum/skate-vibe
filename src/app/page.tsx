import Hero from "@/sections/hero";
import Products from "@/sections/products";
import About from "@/sections/about";
import { ABOUT } from "@/_mock/_about";
import Video from "@/sections/video";

export default function Home() {
  return (
    <>

      <Hero />

      <Products />

      <div className="relative">
        {ABOUT.map((aboutData) => (
          <About
          key={aboutData.id}
          {...aboutData}
          isLast={ABOUT.length === aboutData.id}
          />
        ))}
      </div>

      <Video/>
    </>
  );
}
