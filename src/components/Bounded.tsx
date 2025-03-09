import clsx from "clsx";
import React from "react"

type Props = {
  children: React.ReactNode;
  className?: string;
}

export default function Bounded({children, className}:Props) {
  return (
    <div className={clsx("px-6 py-10", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  )
}