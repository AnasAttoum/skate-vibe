import { Product } from "@/types/product";
import Image from "next/image";
import ButtonLink from "./button-link";
import { HorizontalLine, VerticalLine } from "./lines/line";
import { BackgroundLine } from "./lines/background-line";

type Props = {
  product: Product;
};

const HORIZONTAL_LINE_CLASSES =
  "stroke-2 text-stone-200 group-hover:text-stone-400 transition-colors duration-200 -mx-4";
const VERTICAL_LINE_CLASSES =
  "absolute h-full stroke-2 text-stone-200 group-hover:text-stone-400 transition-colors duration-200 top-0";

export default function SkateboardProduct({ product }: Props) {
  const { name = "", image = "", price = "", reviews = "", color="#f00" } = product;
  return (
    <div className="relative group px-6 pt-2">
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />
      <VerticalLine className={`${VERTICAL_LINE_CLASSES} left-4`} />
      <VerticalLine className={`${VERTICAL_LINE_CLASSES} right-4`} />
      <BackgroundLine color={color} className="absolute inset-0 h-full w-full group-hover:blur-[2px] transition-transform duration-200" />
      <div className="group-hover:blur-[2px] transition-transform duration-200">
        <div className="flex justify-between">
          <div>$ {price}</div>
          <div className="flex gap-1">
            <div>{reviews}</div>
            <Image
              src="/assets/icons/star.svg"
              alt="reviews"
              width={25}
              height={25}
            />
          </div>
        </div>

        <div className="flex justify-center overflow-hidden">
          <Image
            src={image}
            alt="skateboard"
            width={150}
            height={200}
            className="group-hover:scale-150 transition-transform duration-200 origin-top z-20"
          />
        </div>
      </div>

      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <div className="text-center font-bold mt-2">{name}</div>

      <div className="absolute inset-0 justify-center items-center flex md:hidden group-hover:flex transition-opacity duration-200 z-40">
        <ButtonLink withoutIcon>Customize</ButtonLink>
      </div>
    </div>
  );
}
