import ImageCarousel from '@/app/components/ImageCarousel';

const Narino = () => {
  return (
    <main className="max-w-screen-xl mx-auto p-8 bg-gradient-to-r from-amber-50 to-amber-100 rounded-3xl my-16 space-y-16 shadow-lg shadow-amber-100/50">
    {/* Cabecera Principal */}
    <header className="text-center space-y-8">
      <h1 className="text-4xl font-extrabold md:text-6xl bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
        Café Nariñense
        <span className="block mt-4 text-2xl md:text-3xl font-medium text-amber-700/90">Joyas Cafeteras de los Andes</span>
      </h1>
      
      <p className="text-lg text-amber-800/95 max-w-3xl mx-auto leading-relaxed tracking-wide md:text-xl md:leading-8">
        En las alturas del suroeste colombiano, entre brumas y montañas, Nariño cultiva cafés de altura que desafían los límites. Las variedades <span className="font-semibold text-amber-900">Typica</span> y <span className="font-semibold text-amber-900">Caturra</span> alcanzan aquí su máxima expresión, beneficiándose de:
      </p>
      
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-amber-800 font-medium">
        <li className="p-3 bg-amber-50/50 rounded-lg shadow-sm">🌡️ Amplitud térmica</li>
        <li className="p-3 bg-amber-50/50 rounded-lg shadow-sm">⛰️ 2.200 msnm</li>
        <li className="p-3 bg-amber-50/50 rounded-lg shadow-sm">🌧️ Lluvias constantes</li>
        <li className="p-3 bg-amber-50/50 rounded-lg shadow-sm">🌋 Suelos volcánicos</li>
      </ul>
    </header>

    {/* Sección de la Feria */}
    <article className="space-y-8">
      <header className="text-center">
        <h2 className="text-3xl font-bold text-amber-900 mb-4">
          <span className="border-b-4 border-amber-300 pb-2">🏆 Feria Cafetera</span>
        </h2>
        <p className="text-2xl font-medium text-amber-700/90">La Mejor Taza de Mi Nariño &quot;:</p>
      </header>

      <section className="max-w-4xl mx-auto space-y-8">
        <span className="grid md:grid-cols-2 gap-8">
          <span className="space-y-4">
            <h3 className="text-xl font-semibold text-amber-900 border-l-4 border-amber-400 pl-4">📈 Impacto Económico</h3>
            <ul className="space-y-3 text-amber-800/90">
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">💸</span>
                <span><strong>9.000M COP</strong> en ventas (2024)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">📊</span>
                <span><strong>+40%</strong> crecimiento vs 2021</span>
              </li>
            </ul>
          </span>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-amber-900 border-l-4 border-amber-400 pl-4">📅 Evolución Histórica</h3>
            <ul className="space-y-3 text-amber-800/90">
              <li className="flex gap-2">
                <span className="font-bold text-amber-600">2021:</span>
                <span>6.000 asistentes, reconocimiento internacional</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-amber-600">2024:</span>
                <span>Récord en precios ($100+/libra)</span>
              </li>
            </ul>
          </section>
        </span>

        <blockquote className="text-center italic text-amber-700/90 p-6 bg-amber-50 rounded-xl border-l-4 border-amber-300">
          El evento que convirtió el café nariñense en embajador mundial de calidad &quot;:
        </blockquote>
      </section>
    </article>

    <section aria-label="Galería del café nariñense" className="not-prose">
      <ImageCarousel />
    </section>
  </main>
  );
};

export default Narino;
