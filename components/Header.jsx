import React from "react"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import YouTube from "../assets/images/youtube.png"
import { AiOutlineSearch } from "react-icons/ai"
import { HiOutlineMicrophone } from "react-icons/hi"

import Image from "next/image"

const header = () => {
  return (
    <header className="flex">
      <div className=" flex items-center border border-gray-700 w-1/4 pl-4">
        <button className="pl-2 pr-6">
          <GiHamburgerMenu />
        </button>

        <div className="w-1/12">
          <Image src={YouTube} alt="YouTube"></Image>
        </div>
      </div>
      <div className="p-2.5 border border-gray-700 w-1/2 flex items-center">
        <div className="flex w-full h-full">
          <input
            type="text"
            placeholder="Search"
            className="border px-3 shadow-inner rounded-bl-sm rounded-tl-sm w-full border-gray-300 focus:border-blue-700 focus:outline-none "
          />
          <button className="flex items-center px-6 py-1 text-gray-600 bg-gray-100 border-l-0 border-gray-300 rounded-tr-sm rounded-br-sm hover:bg-gray-200">
            <AiOutlineSearch size={20} />
          </button>
        </div>
        <button className="ml-4">
          <HiOutlineMicrophone size={20} />
        </button>
      </div>
      <div className=" border border-gray-700 w-1/4">rignt</div>
    </header>
  )
}

export default header
