import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
                Agencia de viajes
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#destinos" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Destinos
            </a>
            <a href="#contact" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
