"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import darkLogo from '@/assets/dark_logo.jpeg'
import { FloatingDock } from './floating-dock'

const Navbar = () => {
  return (
    <nav className="bg-black w-full px-4 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <Image 
          src={darkLogo}
          alt="Logo"
          width={60}
          height={60}
          className="rounded-lg"
        />
      </div>

      <div className="flex items-center gap-4">
        <FloatingDock />
      </div>
    </nav>
  )
}

export default Navbar