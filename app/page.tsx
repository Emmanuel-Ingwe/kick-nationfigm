import Image from 'next/image'
import Search from "./Searchbar/page";
import Nav from "./Navbar/page"
import Hero from "./Hero/page"
import Sales from "./Sales/page";

export default function Home() {
  return (
    <main className="">
      <Search />
      <Nav />
      <Hero />
      <Sales />
    </main>
  )
}
