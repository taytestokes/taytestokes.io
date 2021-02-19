import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-screen">
      <nav className="h-24 w-full">
        <div className="container mx-auto h-full w-full flex items-center justify-between px-4 max-w-4xl">
          <Image
            src="/logo.svg"
            alt="taytestokes.io logo"
            height={30}
            width={30}
            className="rounded-full"
          />
          <ul className="flex items-center text-gray-600">
            <li className="mr-4 py-2 px-2 hover:bg-gray-100 rounded-md">
              <Link href="/#experience">
                <a>Experience</a>
              </Link>
            </li>
            <li className="mr-4 py-2 px-2 hover:bg-gray-100 rounded-md">
              <Link href="/#experience">
                <a>Projects</a>
              </Link>
            </li>
            <li className="py-2 px-2 hover:bg-gray-100 rounded-md">
              <Link href="/#experience">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="h-full w-full">{children}</main>
      <footer className="h-24 w-full">
        <div className="container mx-auto h-full w-full flex items-center px-4 max-w-4xl">
          <p>{'Made with <3'}</p>
        </div>
      </footer>
    </div>
  )
}
