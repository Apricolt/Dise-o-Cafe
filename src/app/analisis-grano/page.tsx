export default function IAcoffe() {
    return (
      <main className="max-w-screen-xl mx-auto p-6 bg-amber-50 rounded-2xl my-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-amber-900 mb-4">Inteligencia Artificial para el cafe</h1>
        <p className="text-lg text-amber-800 max-w-3xl mx-auto">
          En esta página dedicada para los pequeños caficultores colombianos, le proporcionamos una herramienta para que usted pueda subir una imagen del grano de su cafe para detectar el nivel de tostado que este tiene.
          ¿Para que? 
          Usted sabia que en Colombia principalmente cade de especie Arabica pero dentro de ella existen variedades.
        </p>
      </header>


      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <span className="bg-cafe rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-amber-900 mb-4">Variedades de Café</h2>
          
          <span className="space-y-3">
            <details className="bg-amber-50 p-3 rounded-md">
              <summary className="font-medium text-amber-800 cursor-pointer">Arábica</summary>
              <p className="mt-2 text-amber-900 pl-4">Es la especie de café más cultivada en Colombia, reconocida por su alta calidad y sabor suave. [Fuente: <a href="https://colombia.travel/es/regiones-de-cafe" className="text-amber-900 underline">colombia.travel</a>]</p>
            </details>

            <details className="bg-amber-50 p-3 rounded-md">
              <summary className="font-medium text-amber-800 cursor-pointer">Caturra</summary>
              <p className="mt-2 text-amber-800 pl-4">Mutación natural de la variedad Bourbon, conocida por su tamaño compacto y alta productividad. En taza, ofrece cuerpo medio y agradables sensaciones cítricas, destacándose por su suavidad. [Fuente: <a href="https://www.eltiempo.com/cultura/gastronomia/conceptos-basicos-para-conocer-las-variedades-del-cafe-en-colombia-550246" className="text-amber-900 underline">eltiempo.com</a>]</p>
            </details>

            <details className="bg-amber-50 p-3 rounded-md">
              <summary className="font-medium text-amber-800 cursor-pointer">Bourbon</summary>
              <p className="mt-2 text-amber-700 pl-4">Mutación natural de la variedad Típica, valorada por su dulzura natural y acidez brillante, ofreciendo notas de frutos rojos y florales. [Fuente: <a href="https://colombia.travel/es/regiones-de-cafe" className="text-amber-900 underline">colombia.travel</a>]</p>
            </details>

            <details className="bg-amber-50 p-3 rounded-md">
              <summary className="font-medium text-amber-800 cursor-pointer">Typica</summary>
              <p className="mt-2 text-amber-700 pl-4">Una de las variedades más antiguas, apreciada por su perfil de sabor limpio y suave, con cuerpo ligero y acidez moderada. [Fuente: <a href="https://www.apasionadosporelcafe.com/blog/tipos-de-cafe-colombiano-una-guia-para-conocedores-y-principiantes/" className="text-amber-900 underline">apasionadosporelcafe.com</a>]</p>
            </details>

            <details className="bg-amber-50 p-3 rounded-md">
              <summary className="font-medium text-amber-800 cursor-pointer">Castillo</summary>
              <p className="mt-2 text-amber-700 pl-4">Resultado del cruce entre la variedad Caturra y el Híbrido de Timor, destaca por su resistencia a enfermedades y buen rendimiento. En taza, presenta cuerpo y amargor suaves, con aroma y acidez pronunciados. [Fuente: <a href="https://colombia.travel/es/regiones-de-cafe" className="text-amber-900 underline">colombia.travel</a>]</p>
            </details>

            <details className="bg-amber-50 p-3 rounded-md">
              <summary className="font-medium text-amber-800 cursor-pointer">Colombia</summary>
              <p className="mt-2 text-amber-700 pl-4">Cruce de Caturra e Híbrido de Timor, combina resistencia a enfermedades con buena calidad en taza. Se caracteriza por su buen cuerpo, acidez media-alta y agradables sensaciones a frutos rojos. [Fuente: <a href="https://www.eltiempo.com/cultura/gastronomia/conceptos-basicos-para-conocer-las-variedades-del-cafe-en-colombia-550246" className="text-amber-900 underline">eltiempo.com</a>]</p>
            </details>
          </span>
        </span>
        
        <span className="bg-cafe rounded-lg shadow-md p-6">
          <section>
            <h2 className="text-xl font-semibold text-amber-900 mb-4">Influencia del Tostado en el Sabor del Café</h2>
            <p className="mb-4 text-amber-800">El proceso de tostado del café influye significativamente en el perfil de sabor de cada variedad. Dependiendo del grado de tostado, se pueden resaltar o atenuar ciertas características inherentes a los granos.</p>

            <span className="space-y-3">
              <details className="bg-amber-50 p-3 rounded-md">
                <summary className="font-medium text-amber-800 cursor-pointer">Tostado Claro</summary>
                <p className="mt-2 text-amber-700 pl-4">Este nivel de tostado preserva las notas originales del grano, resaltando sabores afrutados y florales, y una acidez más pronunciada. Es ideal para apreciar las particularidades de variedades como la <strong>Geisha</strong>, conocida por sus perfiles delicados y complejos.</p>
              </details>

              <details className="bg-amber-50 p-3 rounded-md">
                <summary className="font-medium text-amber-800 cursor-pointer">Tostado Medio</summary>
                <p className="mt-2 text-amber-700 pl-4">Ofrece un equilibrio entre acidez y dulzura, desarrollando notas de caramelo y chocolate. Variedades como <strong>Caturra</strong>, <strong>Bourbon</strong> y <strong>Arábica</strong> suelen beneficiarse de este tostado, ya que realza su dulzura natural y cuerpo medio.</p>
              </details>

              <details className="bg-amber-50 p-3 rounded-md">
                <summary className="font-medium text-amber-800 cursor-pointer">Tostado Oscuro</summary>
                <p className="mt-2 text-amber-700 pl-4">Predominan sabores más intensos y amargos, con notas ahumadas y menor acidez. Variedades con mayor cuerpo, como <strong>Castillo</strong>, pueden adaptarse bien a este tipo de tostado, aunque se corre el riesgo de enmascarar sus características distintivas si el tostado es demasiado intenso.</p>
              </details>
            </span>

            <p className="mt-4 text-amber-800">Es importante destacar que el grado de tostado puede potenciar o disminuir las cualidades únicas de cada variedad de café. Por lo tanto, la elección del nivel de tostado debe alinearse con las características inherentes de la variedad y las preferencias de sabor deseadas.</p>
          </section>
        </span>
        
        <span className="bg-cafe rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
          <article className="w-full flex flex-col items-center">
            <header className="text-xl font-semibold text-amber-900 mb-6">
              Suba la foto de su grano de cafe
            </header>
            
            <aside className="w-full h-64 bg-amber-50 border-2 border-dashed border-amber-300 rounded-lg flex items-center justify-center mb-6">
              <p className="text-amber-500 text-lg">Subir imagen</p>
            </aside>
            
            <aside className="flex space-x-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Subir
              </button>
              <button className="bg-amber-200 hover:bg-amber-300 text-amber-800 font-medium py-2 px-6 rounded-lg transition-colors">
                Agregar Imagen
              </button>
            </aside>
          </article>
        </span>
        
      </section>
    </main>
  );
}