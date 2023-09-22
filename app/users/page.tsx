import React, { Suspense } from 'react'
import Link from 'next/link'
import UserTable from './UserTable'
import Loading from '../components/Loading/Loading'

//You can only access search query params from the page.tsx files you can't do so from the components
interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      {/* To change both elements at the same time in VS Code, highlight the h1 (or a different html tag) use ctrl + D */}
      <h1>Users</h1>
      <Link href="/users/new" className='btn btn-primary'>New User</Link>
      <Suspense fallback={<Loading />}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UsersPage