import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: { [key: string]: string };
};

export default function Bounded({ children, className, style = {} }: Props) {
  return (
    <div className={clsx("px-6 py-10 bg-texture", className)} style={style}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}
