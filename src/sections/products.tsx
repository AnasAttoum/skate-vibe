import { PRODUCTS } from "@/_mock/_products";
import Bounded from "@/components/bounded";
import Heading from "@/components/heading";
import SkateboardProduct from "@/components/skateboard-product";

export default function Products() {
  return (
    <Bounded className="bg-texture bg-gray">
      <Heading className="text-center mb-3">Fresh Arrivals</Heading>
      <div className="text-center">
        Score our newest gear before it’s out of stock!
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-7">
        {PRODUCTS.map((product) => (
          <SkateboardProduct key={product.id} product={product} />
        ))}
      </div>
    </Bounded>
  );
}
