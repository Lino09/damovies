import Image from "next/image";
import Link from "next/link";

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="currentColor"
    className="w-12 h-12">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>)

const Header = () => (
  <header className="h-28 w-full flex bg-dacolors-purple items-center justify-between text-white px-4 lg:px-36">
    <Link href="/" >
      <figure className="flex items-center">
        <Image width={37} height={48} src="/logo.png" alt="logo" className="h-auto"/>
        <figcaption className="font-semibold text-xl">DaMovies.</figcaption>
      </figure>
    </Link>
    <Link href="/login">
      <UserIcon />
    </Link>
  </header>
)

export default Header;