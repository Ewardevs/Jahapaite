import React from 'react'
import airTrips from "../assets/jsons/airtrips.json"
import TravelCard from "./sections/TravelCard"

export default function TravelSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8" id='destinos'>Destinos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {airTrips.map((trip) => (
            <TravelCard key={trip.id} {...trip} />
          ))}
        </div>
      </div>
  )
}
