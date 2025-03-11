import clsx from "clsx";
import React from "react";

type Props = {
  comp?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  comp: Comp = "h1",
  children,
  className,
}: Props) {
  return (
    <Comp
      className={clsx(
        "font-sans uppercase",
        Comp === "h1" && "text-2xl md:text-3xl lg:text-4xl font-extrabold",
        Comp === "h2" && "text-lg md:text-2xl font-bold",
        Comp === "h3" && "text-md md:text-lg lg:text-2xl font-bold",
        Comp === "h4" && "text-sm md:text-md lg:text-lg font-bold",
        className
      )}
    >
      {children}
    </Comp>
  );
}
