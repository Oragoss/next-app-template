import React from 'react'
import Link from 'next/link'
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
  }

  interface Props {
    sortOrder: string 
  }

const UserTable = async ({sortOrder}: Props) => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'}); // Does not cache and will render each time on production
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: { revalidate: 10 }}); //caches, but will refresh ever 10 seconds
  // const res = await fetch('https://jsonplaceholder.typicode.com/users'); //Cache this request and we'll see it doesn't change
  // const res = await fetch('https://jsonplaceholder.typicode.com/xusers'); //Invalid endpoint test
  const res = await fetch('http://localhost:3000/api/users')
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === 'email'
    ? user => user.email
    : user => user.name
  );

  return (
    <table className='table table-bordered'>
      {/* Generate this table in vs code by typing: table>thead>tr>th*2 */}
        <thead>
          <tr>
            <th><Link href="/users?sortOrder=name">Name</Link></th>
            <th><Link href="/users?sortOrder=email">Email</Link></th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(user => 
            <tr key={user.id}>
              {/* To change multiple elements at the same time in VS Code, highlight the td (or a different html tag) use ctrl + D. */}
              {/* Keep using ctrl + D until you've highlighed all the elements you want. 2, 4, 6, or 80 */}
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>)}
        </tbody>
      </table>
  )
}

export default UserTable