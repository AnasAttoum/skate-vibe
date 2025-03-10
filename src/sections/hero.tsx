import Bounded from "@/components/Bounded";
import Heading from "@/components/heading";
import Link from "next/link";

export default function Hero() {
  return (
    <Bounded className="bg-pink relative h-dvh overflow-hidden bg-texture">
      <div className="absolute inset-0 mx-auto mt-24 max-w-6xl grid grid-rows-[1fr, auto] place-items-end">
        <Heading className="place-self-start">
          Ride the Streets, Own the Vibe!
        </Heading>
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <Heading comp="h2">
            Skateboarding is more than just a sport — it’s freedom, creativity,
            and raw energy. At Skate-Vibe, we embrace the ride, the falls, and
            the triumphs that define every skater’s journey.
          </Heading>
          <Link href="/">Build Your Board</Link>
        </div>
      </div>
    </Bounded>
  );
}
