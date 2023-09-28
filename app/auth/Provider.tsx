'use client';

import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

//This is the session provider wrapper. Maybe make this more explicit?
const AuthProvider = ({ children }: { children:ReactNode }) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default AuthProvider