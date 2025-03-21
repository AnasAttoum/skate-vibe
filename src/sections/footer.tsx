import Bounded from "@/components/bounded";
import Image from "next/image";

export default function Footer() {
  return (
    <Bounded className="bg-zinc-800 bg-texture text-white">
      <div className="flex max-md:flex-col items-center md:justify-between">
        <Image
          src="/assets/icons/skate-vibe.png"
          alt="Skate Vibe"
          width={100}
          height={100}
        />
        <div>© 2025 Skate Vibe. All Rights Reserved</div>
      </div>
    </Bounded>
  );
}
