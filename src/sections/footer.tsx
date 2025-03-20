import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-zinc-900 bg-texture h-screen text-white">
      <div className="w-full h-4/5 aspect-video z-10 relative">
        <Image
          src="/assets/background/paint-skateboard.jpg"
          alt="Paint skateboard"
          fill
        />
        <Image
          src="/assets/icons/skate-vibe.png"
          alt="Skate Vibe"
          width={100}
          height={100}
          className="relative pointer-events-none ms-5"
        />
      </div>

      <div>footer</div>
    </div>
  );
}
