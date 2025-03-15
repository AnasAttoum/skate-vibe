import Bounded from "@/components/bounded";
import Heading from "@/components/heading";
import ParallaxImages from "@/components/parallax-images";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  foregroundImage: string;
  bg: string;
  changeOrder?: boolean;
};

export default function About({
  title,
  description,
  foregroundImage,
  bg,
  changeOrder = false
}: Props) {
  return (
    <Bounded className={clsx("text-white", bg)}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center my-0 md:my-10">
        <div className={clsx(changeOrder && "order-2")}>
          <Heading className="my-10 leading-10">{title}</Heading>
          <Heading comp="h4" className="max-w-md leading-8">
            {description}
          </Heading>
        </div>

        <ParallaxImages foregroundImage={foregroundImage} alt={foregroundImage.split("/").pop()?.split('.').shift() || 'icon'} />
      </div>
    </Bounded>
  );
}
