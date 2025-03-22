import { PRODUCTS } from "@/_mock/_products";
import Bounded from "@/components/bounded";
import Heading from "@/components/heading";
import SkateboardProduct from "@/components/skateboard-product";
import SlideIn from "@/components/slide-in";

export default function Products() {
  return (
    <Bounded className="bg-gray" id="products">
      <SlideIn>
        <Heading className="text-center mb-3">Fresh Arrivals</Heading>
      </SlideIn>
      <SlideIn delay={0.3}>
        <div className="text-center">
          Score our newest gear before it’s out of stock!
        </div>
      </SlideIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-7 gap-5">
        {PRODUCTS.map((product, index) => (
          <SlideIn key={product.id} delay={index * .3 + .6}>
            <SkateboardProduct product={product} />
          </SlideIn>
        ))}
      </div>
    </Bounded>
  );
}
