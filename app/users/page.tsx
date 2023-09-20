import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'}); // Does not cache and will render each time on production
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: { revalidate: 10 }}); //caches, but will refresh ever 10 seconds
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); //Cache this request and we'll see it doesn't change
  const users: User[] = await res.json();
    
  return (
    <>
      {/* To change both elements at the same time in VS Code, highlight the h1 (or a different html tag) use ctrl + D */}
      <h1>Users</h1>
      {/* Generate this table in vs code by typing: table>thead>tr>th*2 */}
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
            <tr key={user.id}>
              {/* To change multiple elements at the same time in VS Code, highlight the td (or a different html tag) use ctrl + D. */}
              {/* Keep using ctrl + D until you've highlighed all the elements you want. 2, 4, 6, or 80 */}
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage