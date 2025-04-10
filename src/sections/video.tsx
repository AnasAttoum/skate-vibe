import Bounded from "@/components/bounded";
import SlideIn from "@/components/slide-in";
import VideoFrame from "@/components/video-frame";
import clsx from "clsx";
import Image from "next/image";

export const MASK_CLASSES =
  "[mask-image:url(/assets/background/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

export default function Video() {
  return (
    <Bounded className="bg-zinc-800">
      <SlideIn>
        <div className="relative">
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-blue absolute inset-0 translate-x-4 translate-y-4"
            )}
          />
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-pink absolute inset-0 translate-x-0 -translate-y-2"
            )}
          />
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-navy absolute inset-0 translate-x-1.5 translate-y-1.5"
            )}
          />
          <VideoFrame />

          <Image
            src="/assets/background/image-texture.png"
            alt=""
            fill
            className={clsx(
              MASK_CLASSES,
              "pointer-events-none object-cover opacity-50"
            )}
          />
        </div>
      </SlideIn>
    </Bounded>
  );
}
