import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import favicon from '@/app/favicon.ico'
import Heading from "./heading";

type Props = {
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function ButtonLink({ href = "/", className, children }: Props) {
  return (
    <Link href={href} className={clsx("button-cutout flex gap-2 bg-blue hover:bg-orange group p-2 font-bold transition-all ", className)}>
      <Image src={favicon} alt="Scateboard" width={25} height={20} className="group-hover:rotate-45 transition-all z-10"/>
      <div className="w-px bg-black/50 mx-1"/>
      <Heading comp="h2" className="z-10">{children}</Heading>
    </Link>
  );
}
