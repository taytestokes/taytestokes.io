import React from 'react'
import Image from 'next/image'
import { FaTwitter, FaGithub } from 'react-icons/fa'

import { Layout } from 'components//Layout'

const LandingPage = () => {
  return (
    <Layout>
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto flex flex-col items-center px-4 max-w-4xl ">
          <div className="p-2 bg-gray-100 rounded-full flex">
            <div className="p-2 bg-gray-200 rounded-full flex">
              <Image
                src="/profile-picture.jpg"
                alt="Picture of Tayte"
                height={100}
                width={100}
                className="rounded-full"
              />
            </div>
          </div>
          <h1 className="font-bold text-5xl mt-4">Tayte Stokes</h1>
          <p className="mt-2 text-gray-600 text-lg">Software Engineer</p>
          <div className="mt-4 flex items-center">
            <button className="bg-gray-900 hover:bg-gray-700 text-white py-1 px-4 rounded-md transition">
              <a
                href="https://github.com/TayteStokes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaGithub />
                <p className="ml-1 font-semibold">Github</p>
              </a>
            </button>
            <button className="ml-4 bg-gray-900 hover:bg-gray-700 text-white py-1 px-4 rounded-md">
              <a
                href="https://twitter.com/taytestokes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaTwitter />
                <p className="ml-1 font-semibold">Twitter</p>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-semibold text-3xl" id="about">
            About Me
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Hey, I'm Tayte! I'm currently working as a Frontend Engineer for a
            Finstech company based in the Silicon Slopes called{' '}
            <a
              href="https://mx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              MX
            </a>
            .
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            Outside of work, you'll probably find me snowboarding during the
            winter and riding my skateboard when it's warm. I love spending my
            free time doing pretty much anything outdoors. This year I want to
            start rock climbing and learn how to play the electric guitar.
          </p>
        </div>
      </div>

      {/* <div className="mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-semibold text-3xl" id="about">
            Skills
          </h1>
        </div>
      </div> */}

      <div className="mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-semibold text-3xl" id="experience">
            Work Experience
          </h1>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-2xl text-gray-900">MX</p>
              <p className="text-sm text-gray-600">September 2019 - Present</p>
            </div>
            <p className="text-gray-600 mt-2 text-lg">
              As a Frontend Engineer, I help build and maintain the frontend for
              the MoneyMap, Finstrong, and Pulse personal financial management
              tools. This involves updating and implementing new features that
              are focused around digital accessibility, following test driven
              development patterns, collaborating with the design, product,
              customer relations, and the engineering teams to deliver high
              quality software. You can check these digital money management
              tools out{' '}
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
              <div className="mx-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
                Jest
              </div>
              <div className="mx-2 bg-gray-100 text-gray-500 py-1 px-4 rounded-md">
                Enzyme
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-2xl text-gray-900">
                DevMountain
              </p>
              <p className="text-sm text-gray-600">
                August 2018 - September 2019
              </p>
            </div>
            <p className="text-gray-600 mt-2 text-lg">
              As a Web Development Mentor, I instructed and mentored web
              development bootcamp students in learning full stack Javascript
              web development.
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
      </div>
    </Layout>
  )
}

export default LandingPage
