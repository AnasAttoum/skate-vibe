import Hero from "@/sections/hero";
import Products from "@/sections/products";
import About from "@/sections/about";
import { ABOUT } from "@/_mock/_about";
import Video from "@/sections/video";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <>

      <Hero />

      <Products />

      <div className="relative" id="about">
        {ABOUT.map((aboutData) => (
          <About
          key={aboutData.id}
          {...aboutData}
          isLast={ABOUT.length === aboutData.id}
          />
        ))}
      </div>

      <Video/>

      <Footer/>
    </>
  );
}
