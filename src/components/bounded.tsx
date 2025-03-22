import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: { [key: string]: string };
};

export default function Bounded({
  children,
  className,
  style = {},
  id,
}: Props) {
  return (
    <div
      className={clsx("px-6 py-10 bg-texture", className)}
      style={style}
      {...(id && { id })}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}
