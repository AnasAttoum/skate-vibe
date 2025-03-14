import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import favicon from "@/app/favicon.ico";
import Heading from "./heading";

type Props = {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: "skateboard" | "cart";
  color?: "blue" | "purple";
  onlyIcon?: boolean;
  withoutIcon?: boolean;
};

export default function ButtonLink({
  href = "/",
  className,
  children,
  icon = "skateboard",
  color = "purple",
  onlyIcon = false,
  withoutIcon = false,
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        `button-cutout flex gap-2 group p-2 font-bold transition-all duration-300`,
        color === "blue" && "bg-blue hover:bg-dark-blue",
        color === "purple" && "bg-purple hover:bg-dark-purple text-white",
        className
      )}
    >
      {!withoutIcon && (
        <>
          <Image
            src={icon === "skateboard" ? favicon : "/assets/icons/cart.svg"}
            alt="Scateboard"
            width={25}
            height={20}
            className={clsx(
              "transition-all duration-300 z-10",
              icon === "skateboard" && "group-hover:rotate-45",
              icon === "cart" && "scale-x-[-1] -rotate-45 group-hover:rotate-0"
            )}
          />
          <div
            className={clsx(
              "w-px bg-black/30 mx-1",
              onlyIcon && "hidden md:block"
            )}
          />
        </>
      )}
      <Heading comp="h2" className="z-10">
        {children}
      </Heading>
    </Link>
  );
}
