import Link from 'next/link'
import React from 'react'
import { FaBookOpen } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="bg-black">
      <section>
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center pt-20">
          {/* Updated Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaBookOpen className="text-purple-500 text-3xl" />
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              KUTTOB4U
            </span>
          </div>
          
          <h1 className="w-full font-bold text-5xl text-white leading-16 mt-4">
            Welcome To Your Library
          </h1>
          
          <p className="px-8 mt-8 mb-12 text-lg text-gray-300">
            Explore a world of stories, knowledge, and imagination. From timeless classics to the latest bestsellers — all in one place
          </p>
          
          <div className="relative flex justify-center gap-3 lg:w-full lg:gap-28">
            <Link 
              href="/books"
              className="px-8 py-3 border-transparent rounded bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-white hover:opacity-70 transition-opacity duration-300 lg:h-20 lg:w-52 flex items-center justify-center"
            >
              Get started
            </Link>
            
            <Link className="px-8 py-3 border rounded text-lg border-purple-500 text-white hover:bg-purple-950 transition-colors duration-300 lg:h-20 lg:w-52 lg:pt-6" href="/about">
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header