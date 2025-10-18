import AnalizadorCafe from '../components/AnalizadorCafe';

export default function IAcoffe() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-screen-xl mx-auto p-6 my-12">
        {/* Header con gradiente mejorado */}
        <header className="mb-12 text-center bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Inteligencia Artificial para el Café
          </h1>
          <p className="text-lg text-amber-100 max-w-4xl mx-auto leading-relaxed">
            En esta página dedicada para los pequeños caficultores colombianos, le proporcionamos una herramienta para que usted pueda subir una imagen del grano de su café para detectar el nivel de tostado que este tiene.
            <br />
            <span className="font-semibold text-amber-200">¿Para qué?</span>
            <br />
            Usted sabía que en Colombia principalmente se cultiva de especie Arábica pero dentro de ella existen variedades.
          </p>
        </header>

        {/* Grid principal con mejor espaciado */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Primera columna - Variedades de Café */}
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-xl p-8 border border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
              <span className="mr-3">🌱</span>
              Variedades de Café
            </h2>
            
            <div className="space-y-4">
              <details className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-amber-200 hover:bg-white/80 transition-all duration-300">
                <summary className="font-semibold text-amber-800 cursor-pointer hover:text-amber-900 transition-colors">
                  Arábica
                </summary>
                <p className="mt-3 text-amber-700 pl-4 leading-relaxed">
                  Es la especie de café más cultivada en Colombia, reconocida por su alta calidad y sabor suave. 
                  <a href="https://colombia.travel/es/regiones-de-cafe" className="text-amber-600 underline hover:text-amber-700 ml-1">
                    [Fuente: colombia.travel]
                  </a>
                </p>
              </details>

              <details className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-amber-200 hover:bg-white/80 transition-all duration-300">
                <summary className="font-semibold text-amber-800 cursor-pointer hover:text-amber-900 transition-colors">
                  Caturra
                </summary>
                <p className="mt-3 text-amber-700 pl-4 leading-relaxed">
                  Mutación natural de la variedad Bourbon, conocida por su tamaño compacto y alta productividad. En taza, ofrece cuerpo medio y agradables sensaciones cítricas.
                  <a href="https://www.eltiempo.com/cultura/gastronomia/conceptos-basicos-para-conocer-las-variedades-del-cafe-en-colombia-550246" className="text-amber-600 underline hover:text-amber-700 ml-1">
                    [Fuente: eltiempo.com]
                  </a>
                </p>
              </details>

              <details className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-amber-200 hover:bg-white/80 transition-all duration-300">
                <summary className="font-semibold text-amber-800 cursor-pointer hover:text-amber-900 transition-colors">
                  Bourbon
                </summary>
                <p className="mt-3 text-amber-700 pl-4 leading-relaxed">
                  Mutación natural de la variedad Típica, valorada por su dulzura natural y acidez brillante, ofreciendo notas de frutos rojos y florales.
                  <a href="https://colombia.travel/es/regiones-de-cafe" className="text-amber-600 underline hover:text-amber-700 ml-1">
                    [Fuente: colombia.travel]
                  </a>
                </p>
              </details>

              <details className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-amber-200 hover:bg-white/80 transition-all duration-300">
                <summary className="font-semibold text-amber-800 cursor-pointer hover:text-amber-900 transition-colors">
                  Typica
                </summary>
                <p className="mt-3 text-amber-700 pl-4 leading-relaxed">
                  Una de las variedades más antiguas, apreciada por su perfil de sabor limpio y suave, con cuerpo ligero y acidez moderada.
                  <a href="https://www.apasionadosporelcafe.com/blog/tipos-de-cafe-colombiano-una-guia-para-conocedores-y-principiantes/" className="text-amber-600 underline hover:text-amber-700 ml-1">
                    [Fuente: apasionadosporelcafe.com]
                  </a>
                </p>
              </details>

              <details className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-amber-200 hover:bg-white/80 transition-all duration-300">
                <summary className="font-semibold text-amber-800 cursor-pointer hover:text-amber-900 transition-colors">
                  Castillo
                </summary>
                <p className="mt-3 text-amber-700 pl-4 leading-relaxed">
                  Resultado del cruce entre la variedad Caturra y el Híbrido de Timor, destaca por su resistencia a enfermedades y buen rendimiento.
                  <a href="https://colombia.travel/es/regiones-de-cafe" className="text-amber-600 underline hover:text-amber-700 ml-1">
                    [Fuente: colombia.travel]
                  </a>
                </p>
              </details>

              <details className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-amber-200 hover:bg-white/80 transition-all duration-300">
                <summary className="font-semibold text-amber-800 cursor-pointer hover:text-amber-900 transition-colors">
                  Colombia
                </summary>
                <p className="mt-3 text-amber-700 pl-4 leading-relaxed">
                  Cruce de Caturra e Híbrido de Timor, combina resistencia a enfermedades con buena calidad en taza.
                  <a href="https://www.eltiempo.com/cultura/gastronomia/conceptos-basicos-para-conocer-las-variedades-del-cafe-en-colombia-550246" className="text-amber-600 underline hover:text-amber-700 ml-1">
                    [Fuente: eltiempo.com]
                  </a>
                </p>
              </details>
            </div>
          </div>
          
          {/* Segunda columna - Influencia del Tostado */}
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl shadow-xl p-8 border border-orange-200">
            <section>
              <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
                <span className="mr-3">🔥</span>
                Influencia del Tostado en el Sabor del Café
              </h2>
              <p className="mb-6 text-orange-800 leading-relaxed">
                El proceso de tostado del café influye significativamente en el perfil de sabor de cada variedad. Dependiendo del grado de tostado, se pueden resaltar o atenuar ciertas características inherentes a los granos.
              </p>

              <div className="space-y-4">
                <details className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-orange-200 hover:bg-white/80 transition-all duration-300">
                  <summary className="font-semibold text-orange-800 cursor-pointer hover:text-orange-900 transition-colors">
                    Tostado Claro
                  </summary>
                  <p className="mt-3 text-orange-700 pl-4 leading-relaxed">
                    Este nivel de tostado preserva las notas originales del grano, resaltando sabores afrutados y florales, y una acidez más pronunciada. Es ideal para apreciar las particularidades de variedades como la <strong>Geisha</strong>, conocida por sus perfiles delicados y complejos.
                  </p>
                </details>

                <details className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-orange-200 hover:bg-white/80 transition-all duration-300">
                  <summary className="font-semibold text-orange-800 cursor-pointer hover:text-orange-900 transition-colors">
                    Tostado Medio
                  </summary>
                  <p className="mt-3 text-orange-700 pl-4 leading-relaxed">
                    Ofrece un equilibrio entre acidez y dulzura, desarrollando notas de caramelo y chocolate. Variedades como <strong>Caturra</strong>, <strong>Bourbon</strong> y <strong>Arábica</strong> suelen beneficiarse de este tostado.
                  </p>
                </details>

                <details className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-orange-200 hover:bg-white/80 transition-all duration-300">
                  <summary className="font-semibold text-orange-800 cursor-pointer hover:text-orange-900 transition-colors">
                    Tostado Oscuro
                  </summary>
                  <p className="mt-3 text-orange-700 pl-4 leading-relaxed">
                    Predominan sabores más intensos y amargos, con notas ahumadas y menor acidez. Variedades con mayor cuerpo, como <strong>Castillo</strong>, pueden adaptarse bien a este tipo de tostado.
                  </p>
                </details>
              </div>

              <p className="mt-6 text-orange-800 leading-relaxed bg-white/50 p-4 rounded-xl border border-orange-200">
                Es importante destacar que el grado de tostado puede potenciar o disminuir las cualidades únicas de cada variedad de café. Por lo tanto, la elección del nivel de tostado debe alinearse con las características inherentes de la variedad y las preferencias de sabor deseadas.
              </p>
            </section>
          </div>
          
          {/* Tercera columna - Analizador de Café */}
          <AnalizadorCafe />
          
        </section>
      </div>
    </main>
  );
}