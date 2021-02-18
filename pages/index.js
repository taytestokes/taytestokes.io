import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { DiHtml5, DiCss3, DiJavascript1, DiNodejsSmall } from 'react-icons/di'
import { SiReact, SiRedux } from 'react-icons/si'

import { Layout } from 'components//Layout'

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex items-center flex-col rounded-md mt-48">
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
        <div className="mt-8 flex items-center">
          <button className="mx-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white py-1 px-4 rounded-md">
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
          <button className="mx-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white py-1 px-4 rounded-md">
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
          <button className="mx-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white py-1 px-4 rounded-md">
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

      <div className="flex flex-col rounded-md mt-48">
        <h1 className="font-bold text-4xl">Work Experience</h1>

        <div className="mt-16">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-2xl text-gray-900">
              MX Technologies
            </p>
            <p className="text-sm text-gray-600">September 2019 - Present</p>
          </div>
          <p className="text-gray-600 mt-2 text-lg">
            As a Frontend Engineer, I help build and maintain the frontend for
            the MoneyMap, Finstrong, and Pulse personal financial management
            tools. This involves updating and implementing new features that are
            focused around digital accessibility, following test driven
            development patterns, collaborating with the design, product,
            customer relations, and the engineering teams to deliver high
            quality software. You can check these digital money management tools
            out{' '}
            <a
              href="https://www.mx.com/products/pfm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              here
            </a>
            .
          </p>
          <div className="flex items-center flex-wrap mt-4 text-sm">
            <div className="mr-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              Javascript
            </div>
            <div className="mx-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              React
            </div>
            <div className="mx-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              Redux
            </div>
            <div className="mx-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              D3
            </div>
            <div className="mx-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              a11y
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-2xl text-gray-900">DevMountain</p>
            <p className="text-sm text-gray-600">
              August 2018 - September 2019
            </p>
          </div>
          <p className="text-gray-600 mt-2 text-lg">
            As a Web Development Mentor, I instructed and mentored web
            development bootcamp students in learning full stack Javascript web
            development.
          </p>
          <div className="flex items-center flex-wrap mt-4 text-sm">
            <div className="mr-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              Html
            </div>
            <div className="mr-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              Css
            </div>
            <div className="mr-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              Javascript
            </div>
            <div className="mx-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              React
            </div>
            <div className="mx-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              Redux
            </div>
            <div className="mx-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              Node
            </div>
            <div className="mx-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              Express
            </div>
            <div className="mr-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
              PostgreSQL
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage
