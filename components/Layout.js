import React from 'react'
import Image from 'next/image'

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-screen">
      <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-500" />
      <nav className="h-24 w-full">
        <div className="container mx-auto h-full w-full flex items-center justify-between px-4 max-w-4xl">
          <Image
            src="/logo.svg"
            height={30}
            width={30}
            className="rounded-full"
          />
          <ul className="flex text-gray-400">
            <li className="mr-4">About</li>
            <li className="mr-4">Experience</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto px-4 max-w-4xl">{children}</main>
    </div>
  )
}
