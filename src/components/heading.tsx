import clsx from "clsx";
import React from "react";

type Props = {
  comp?: "h1" | "h2";
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
        Comp === "h2" && "text-md md:text-lg lg:text-2xl font-bold",
        className
      )}
    >
      {children}
    </Comp>
  );
}
