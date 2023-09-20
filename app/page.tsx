import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

//Start here: https://youtu.be/ZVnjOPwW4ZA?t=2481
export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
