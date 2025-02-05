import React from 'react'
import { Phone, Send, Star } from "lucide-react"

export default function FormSection() {
    return (
        <div id='contact' className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
              <p className="text-gray-600 mb-4">
                ¿Listo para comenzar tu aventura? Contáctanos y planearemos el viaje de tus sueños.
              </p>
              <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 234 567 890
                </p>
                <p className="flex items-center text-gray-600">
                  <Send className="w-5 h-5 mr-2" />
                  info@travelsur.com
                </p>
              </div>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Nombre" className="w-full p-2 border border-gray-300 rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
              <textarea placeholder="Mensaje" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}
