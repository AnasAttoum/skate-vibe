import Link from "next/link";
import ButtonLink from "./button-link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 h-32 px-4 pb-4 z-50">
      <div className="grid mx-auto w-full max-w-6xl grid-cols-2 md:grid-cols-3 gap-x-4 items-center px-2">
        <Link href="/" className="justify-self-start">
          <Image src="/assets/icons/skate-vibe.png" alt="Skate Vibe" width={100} height={100}/>
        </Link>
        <nav className="row-start-2 md:row-start-1 col-span-full md:col-span-1 md:col-start-2">
          <ul className="flex flex-wrap justify-center items-center gap-5">
            <li><Link href="#board" className="hover:text-purple transition-all duration-300">Board</Link></li>
            <li><Link href="#products" className="hover:text-purple transition-all duration-300">Products</Link></li>
            <li><Link href="#about" className="hover:text-purple transition-all duration-300">About</Link></li>
          </ul>
        </nav>
        <div className="justify-self-end">
          <ButtonLink icon="cart" onlyIcon>
            <div className="hidden md:block">Cart</div>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
