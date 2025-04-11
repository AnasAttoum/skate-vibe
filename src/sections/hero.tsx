import Background from "@/components/background";
import Bounded from "@/components/bounded";
import Heading from "@/components/heading";
import InteractiveSkateboard from "@/components/interactive-skateboard";

export default function Hero() {
  return (
    <Bounded className="bg-pink relative h-dvh overflow-hidden">
      <Background />
      <div className="absolute inset-0 mx-auto mt-32 md:mt-24 max-w-6xl grid grid-rows-[1fr, auto] place-items-end p-5">
        <Heading className="place-self-start relative max-w-md text-justify">
          Ride the Streets, Own the Vibe!
        </Heading>
        <div className="flex flex-col lg:flex-row items-center gap-3 w-full justify-center lg:justify-between">
          <Heading comp="h4" className="max-w-[75ch] lg:max-w-[65ch]">
            Skateboarding is more than just a sport — it’s freedom, creativity,
            and raw energy. At Skate-Vibe, we embrace the ride, the falls, and
            the triumphs that define every skater’s journey.
          </Heading>
          {/* <ButtonLink color="blue" href="/build">Build Your Board</ButtonLink> */}
        </div>
      </div>

      <InteractiveSkateboard/>
    </Bounded>
  );
}
