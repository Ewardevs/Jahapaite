import React from 'react'
import TestimonialCard from "./sections/TestimonialCard"
import testimonials from "../assets/jsons/coments.json"

export default function TestimonialSection() {
  return (
    <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Lo que dicen nuestros viajeros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
  )
}
