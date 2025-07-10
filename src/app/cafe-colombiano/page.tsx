import Image from "next/image";
export default function CoffeColombia() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-screen-xl mx-auto pt-20 pb-8 px-6">
        
        {/* Header con gradiente */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-4">
            Historia del Café de Colombia
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Descubre la rica tradición cafetera que ha hecho de Colombia un referente mundial
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Artículo principal con historia */}
          <article className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-xl p-8 border border-amber-200">
            <header className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-amber-900 mb-3 flex items-center justify-center">
                <span className="mr-3 text-4xl">🇨🇴</span>
                Tradición Cafetera
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
            </header>
            
            <div className="space-y-6">
              {/* Imagen centrada */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Image
                    className="rounded-2xl shadow-2xl border-4 border-white"
                    src="/images/juna.jpg"
                    width={250}
                    height={180}
                    alt="Juan Valdez"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Juan Valdez
                  </div>
                </div>
              </div>
              
              {/* Texto mejorado */}
              <div className="text-justify text-lg text-amber-800 leading-relaxed space-y-4">
                <p className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-amber-200">
                  Colombia es reconocida mundialmente por la calidad de su café, una tradición que se remonta al siglo XVIII,
                  cuando los jesuitas introdujeron los primeros cultivos en el país. Con suelos volcánicos fértiles, un clima ideal y la dedicación de generaciones de caficultores, Colombia se convirtió en uno de los principales productores de café del mundo.
                </p>
                
                <p className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-amber-200">
                  A finales del siglo XIX y principios del XX, el café se consolidó como el motor económico del país, impulsando el comercio y la expansión de infraestructuras. Gracias a la <strong className="text-amber-900">Federación Nacional de Cafeteros</strong>, creada en 1927, el café colombiano ha mantenido su reputación de excelencia, destacando por su sabor suave, notas afrutadas y una acidez equilibrada.
                </p>
                
                <p className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-amber-200">
                  Hoy en día, el café sigue siendo un símbolo de identidad y orgullo para Colombia, con denominaciones de origen que garantizan su calidad y prestigio a nivel internacional.
                </p>
              </div>
            </div>
          </article>
          
          {/* Sección de información adicional */}
          <section className="flex flex-col gap-6">
            
            {/* Tipos de café */}
            <article className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl shadow-xl p-8 border border-orange-200 flex-1">
              <header className="mb-6">
                                 <h3 className="text-2xl font-bold text-orange-900 mb-2 flex items-center">
                   <span className="mr-3">🌱</span>
                   Municipios Cafeteros de Nariño
                 </h3>
              </header>
              
                              <p className="text-justify text-orange-800 leading-relaxed">
                  Nariño es reconocido por la excelente calidad de sus cafés, resultado de las variadas condiciones geográficas y climáticas presentes en sus municipios. A continuación, se detallan las principales variedades de café cultivadas en el departamento y las características distintivas de los cafés producidos en los municipios de:
                </p>
              
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  "La Unión", "Buesaco", "Pasto", "Tumaco", 
                  "Sandona", "La Cruz", "Pupiales", "Aldana"
                ].map((municipio, index) => (
                  <span key={index} className="bg-white/50 backdrop-blur-sm px-3 py-2 rounded-lg text-orange-700 text-sm font-medium border border-orange-200">
                    {municipio}
                  </span>
                ))}
              </div>
            </article>
            
            {/* Café más destacado */}
            <article className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl shadow-xl p-8 border border-yellow-200 flex-1">
              <header className="mb-6">
                <h4 className="text-2xl font-bold text-yellow-900 mb-2 flex items-center">
                  <span className="mr-3">⭐</span>
                  Café Más Destacado
                </h4>
              </header>
              
              <p className="text-justify text-yellow-800 leading-relaxed">
                El <strong>Café Arábica</strong> es la variedad más cultivada y apreciada en Colombia, representando la mayoría de la producción nacional. Dentro de esta especie, las variedades como <strong>Caturra</strong>, <strong>Castillo</strong> y <strong>Colombia</strong> son las más extendidas, cada una adaptada a las condiciones específicas de las regiones productoras.
                <br /><br />
                La combinación de estas variedades con los diversos microclimas y altitudes de Colombia da como resultado cafés de alta calidad, reconocidos mundialmente por su suavidad, acidez balanceada y perfiles de sabor únicos.
              </p>
              
              <div className="mt-6 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-yellow-200">
                <h5 className="font-semibold text-yellow-900 mb-2">Características Destacadas:</h5>
                <ul className="text-yellow-800 space-y-1">
                  <li className="flex items-center">
                    <span className="mr-2">☕</span>
                    Sabor suave y equilibrado
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🍃</span>
                    Notas afrutadas y florales
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">⚖️</span>
                    Acidez balanceada
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🌍</span>
                    Denominaciones de origen garantizadas
                  </li>
                </ul>
              </div>
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}