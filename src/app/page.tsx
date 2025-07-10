'use client';

import Head from 'next/head'
import MapaColombia from './components/MapaColombia'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <Head>
        <title>Cafenar - Mapa Interactivo del Café</title>
        <meta name="description" content="Cafenar - Mapa interactivo del café colombiano usando Next.js y Tailwind CSS" />
      </Head>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/coffee-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 to-amber-100/80" />
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent mb-6">
            Cafenar
          </h1>
          <p className="text-xl md:text-2xl text-amber-700/90 max-w-3xl mx-auto">
            Descubre la riqueza cafetera de cada región
          </p>
        </motion.div>
      </motion.section>

      {/* Contenido Principal */}
      <div className="max-w-screen-xl mx-auto px-8 py-16 space-y-16">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900">
            Explora el Café por Departamento
          </h2>
          <p className="text-lg text-amber-800/90 max-w-2xl mx-auto">
            Selecciona un departamento para descubrir las características únicas de su café, desde el aroma hasta el sabor.
          </p>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-8"
        >
          <MapaColombia />
        </motion.div>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Variedades Únicas",
              description: "Descubre las diferentes variedades de café que se cultivan en cada región.",
              icon: "🌱"
            },
            {
              title: "Características Especiales",
              description: "Conoce las notas de sabor y aroma que hacen único cada café regional.",
              icon: "☕"
            },
            {
              title: "Cultura Cafetera",
              description: "Explora la rica tradición y cultura cafetera de cada departamento.",
              icon: "🏛️"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{feature.title}</h3>
              <p className="text-amber-800/90">{feature.description}</p>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </main>
  )
}

export default Home
