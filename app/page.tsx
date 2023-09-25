import React, { Suspense } from 'react'
import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

//Start here: https://members.codewithmosh.com/courses/mastering-next-js-13-with-typescript/lectures/49120441
//TODO: Add this: https://www.youtube.com/watch?v=DCRcFf39SYo
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
        <h1>Hello{ session ? <span>&nbsp;{session.user?.name}!</span> : "!" }</h1>
        <ProductCard />
    </main>
  )
}
