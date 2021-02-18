import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

import { Layout } from 'components//Layout'

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex items-center flex-col rounded-md mt-24">
        <h1 className="font-bold text-5xl">Tayte Stokes</h1>
        <h2 className="mt-2 text-xl">Software Engineer</h2>
        <p className="mt-8 text-gray-600 text-center text-lg">
          Hey! My name is Tayte and I'm a caffiene addicted Frontend Engineer
          currently working at{' '}
          <a
            href="https://mx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            MX
          </a>
          . Outside of the coding world, I'm always trying to get to the
          mountain to snowboard, ride my mountain bike, cruise on my skateboard,
          and I'm currently trying to teach myself the electric guitar.
        </p>
        <div className="mt-8 flex">
          <button className="mx-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white py-2 px-4 rounded-md">
            <a
              href="https://github.com/TayteStokes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGithub />
              <p className="ml-1">Github</p>
            </a>
          </button>
          <button className="mx-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white py-2 px-4 rounded-md">
            <a
              href="https://twitter.com/taytestokes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaTwitter />
              <p className="ml-1">Twitter</p>
            </a>
          </button>
          <button className="mx-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white py-2 px-4 rounded-md">
            <a
              href="https://www.linkedin.com/in/tayte-stokes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaLinkedin />
              <p className="ml-1">LinkedIn</p>
            </a>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage
