import Bounded from "@/components/bounded";
import Heading from "@/components/heading";
import ParallaxImages from "@/components/parallax-images";

export default function About() {
  return (
    <Bounded className="bg-blue text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center my-0 md:my-10">
        <div>
          <Heading className="my-10 leading-10">
            Wheels That Roll with You
          </Heading>
          <Heading comp="h4" className="max-w-md leading-8">
            From smooth pavement to rugged terrain, our high-rebound urethane
            wheels adapt to your ride. Designed for speed, durability, and
            control, they keep you rolling through any session.
          </Heading>
        </div>

        <ParallaxImages foregroundImage="/assets/icons/wheel.svg" alt="wheel" />
      </div>
    </Bounded>
  );
}
