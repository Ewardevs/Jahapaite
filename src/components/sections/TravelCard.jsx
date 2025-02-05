import React from 'react'

export default function TravelCard({title,image,days,price,country,description}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover bg-amber-600" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{country}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500">Desde</span>
            <p className="text-lg font-bold text-blue-600">${price}</p>
          </div>
          <span className="text-gray-500">{days} días</span>
        </div>
      </div>
    </div>
  )
}
