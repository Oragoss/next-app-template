import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

//Start here: https://members.codewithmosh.com/courses/mastering-next-js-13-with-typescript/lectures/49120315
export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
