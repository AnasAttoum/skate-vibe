import { Product } from "@/types/product";
import Image from "next/image";

type Props = {
  product: Product;
};

export default function SkateboardProduct({ product }: Props) {
  const { name = "", image = "", price = "", reviews = "" } = product;
  return (
    <div>
      <div className="flex justify-between">
        <div>$ {price}</div>
      </div>
      <Image src={image} alt="skateboard" width={150} height={200} />
    </div>
  );
}
