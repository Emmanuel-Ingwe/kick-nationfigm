import Image from 'next/image'
import Search from "./Searchbar/page";
import Nav from "./Navbar/page"
import Hero from "./Hero/page"
import Sales from "./Sales/page";
import Features from "./Features/page";
import Footer from "./Footer/page";


export default function Home() {
  return (
    <main className="container overflow-x-hidden">
      <Search />
      <Nav />
      <Hero />
      <Sales />
      <Features />
      <Footer />
    </main>
  )
}
