'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

//TODO Maybe make this submit a form then navigate away?
const NewUserPage = () => {
  const router = useRouter();

  return (
    <button className='btn btn-primary' onClick={() => router.push('/users')}>Create</button>
  )
}

export default NewUserPage