import Bounded from "@/components/bounded";
import Heading from "@/components/heading";
import Image from "next/image";

export default function About() {
  return (
    <Bounded className="bg-blue text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <Heading className="my-10 leading-10">Wheels That Roll with You</Heading>
          <Heading comp="h4" className="max-w-md leading-8">
            From smooth pavement to rugged terrain, our high-rebound urethane
            wheels adapt to your ride. Designed for speed, durability, and
            control, they keep you rolling through any session.
          </Heading>
        </div>

        <div className="flex justify-center">
          <Image
            src="/assets/icons/wheel.svg"
            alt="Wheel"
            width={150}
            height={150}
          />
        </div>
      </div>
    </Bounded>
  );
}
