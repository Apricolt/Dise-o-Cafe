'use client';

import ImageCarousel from '@/app/components/ImageCarousel';
import { motion } from 'framer-motion';

const Narino = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/narino-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 to-amber-100/80" />
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent mb-6">
            Café Nariñense
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-amber-700/90 max-w-3xl mx-auto">
            Joyas Cafeteras de los Andes
          </p>
        </motion.div>
      </motion.section>

      {/* Contenido Principal */}
      <div className="max-w-screen-xl mx-auto px-8 py-16 space-y-24">
        {/* Sección de Introducción */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <p className="text-xl text-amber-800/95 max-w-3xl mx-auto leading-relaxed tracking-wide md:text-2xl md:leading-9">
            En las alturas del suroeste colombiano, entre brumas y montañas, Nariño cultiva cafés de altura que desafían los límites. Las variedades <span className="font-semibold text-amber-900">Typica</span> y <span className="font-semibold text-amber-900">Caturra</span> alcanzan aquí su máxima expresión, beneficiándose de:
          </p>
          
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: '🌡️', text: 'Amplitud térmica' },
              { icon: '⛰️', text: '2.200 msnm' },
              { icon: '🌧️', text: 'Lluvias constantes' },
              { icon: '🌋', text: 'Suelos volcánicos' }
            ].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-3"
              >
                <span className="text-4xl">{item.icon}</span>
                <span className="text-lg font-medium text-amber-800">{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Sección de la Feria */}
        <motion.article 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <header className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              <span className="border-b-4 border-amber-300 pb-2">🏆 Feria Cafetera</span>
            </h2>
            <p className="text-3xl font-medium text-amber-700/90">La Mejor Taza de Mi Nariño</p>
          </header>

          <section className="max-w-4xl mx-auto space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-amber-900 border-l-4 border-amber-400 pl-4 mb-6">📈 Impacto Económico</h3>
                <ul className="space-y-6 text-amber-800/90">
                  <li className="flex items-center gap-4">
                    <span className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl">💸</span>
                    <div>
                      <span className="text-2xl font-bold">9.000M COP</span>
                      <p className="text-lg">en ventas (2024)</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl">📊</span>
                    <div>
                      <span className="text-2xl font-bold">+40%</span>
                      <p className="text-lg">crecimiento vs 2021</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-amber-900 border-l-4 border-amber-400 pl-4 mb-6">📅 Evolución Histórica</h3>
                <ul className="space-y-6 text-amber-800/90">
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-amber-600 text-xl">2021:</span>
                    <div>
                      <p className="text-lg">6.000 asistentes</p>
                      <p className="text-amber-600">Reconocimiento internacional</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-amber-600 text-xl">2024:</span>
                    <div>
                      <p className="text-lg">Récord en precios</p>
                      <p className="text-amber-600">$100+/libra</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center italic text-amber-700/90 p-8 bg-white/50 backdrop-blur-sm rounded-xl border-l-4 border-amber-300 shadow-sm"
            >
              <p className="text-2xl">El evento que convirtió el café nariñense en embajador mundial de calidad</p>
            </motion.blockquote>
          </section>
        </motion.article>

        {/* Galería */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          aria-label="Galería del café nariñense" 
          className="not-prose"
        >
          <ImageCarousel />
        </motion.section>
      </div>
    </main>
  );
};

export default Narino;
