import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-slate-200">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link href="/users" className="btn btn-ghost normal-case">Users</Link>
            <Link href="/upload" className="btn btn-ghost normal-case">Upload Files</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Projects</Link></li>
            <li>
                <details>
                <summary>
                    Parent
                </summary>
                <ul className="p-2 bg-base-100">
                    <li><Link href="/">Link 1</Link></li>
                    <li><Link href="/users">Users</Link></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar