import Image from 'next/image'
import Search from "./Searchbar/page";
import Nav from "./Navbar/page"

export default function Home() {
  return (
    <main className="">
      <Search />
      <Nav />
    </main>
  )
}
