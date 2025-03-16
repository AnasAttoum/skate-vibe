import clsx from "clsx";

import Bounded from "@/components/bounded";
import Heading from "@/components/heading";
import ParallaxImages from "@/components/parallax-images";
import type { About } from "@/types/about";

export default function About({
  id = 0,
  title,
  description,
  foregroundImage,
  bg,
  changeOrder = false,
  isLast,
}: About & { isLast: boolean }) {
  return (
    <Bounded
      className={clsx(!isLast ? "sticky" : "relative", "text-white", bg)}
      style={!isLast ? { top: id * 2 - 2 + "rem" }:{}}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center my-0 md:my-10">
        <div className={clsx(changeOrder && "order-2")}>
          <Heading className="my-5 md:my-10 leading-10">{title}</Heading>
          <Heading comp="h4" className="max-w-md leading-8">
            {description}
          </Heading>
        </div>

        <ParallaxImages
          foregroundImage={foregroundImage}
          alt={foregroundImage.split("/").pop()?.split(".").shift() || "icon"}
        />
      </div>
    </Bounded>
  );
}
