import Image from "next/image";
export default function CoffeColombia() {

  return (
    <main className="max-w-screen-xl mx-auto pt-20 pb-4">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <article className="bg-cafe p-6 rounded-lg shadow-md">
        <header className="mb-6">
          <h1 className="font-bold text-2xl text-amber-900">Historia del Cafe de Colombia</h1>
        </header>
        
        <figure className="overflow-hidden">
          <Image
            className="float-right pt-2 pb-2 pr-2 pl-4"
            src="/images/juna.jpg"
            width={180}
            height={120}
            alt="Juan Valdez"
          />
          
          <figcaption className="text-justify text-lg text-amber-800">
            Colombia es reconocida mundialmente por la calidad de su café, una tradición que se remonta al siglo XVIII,
            cuando los jesuitas introdujeron los primeros cultivos en el país. Con suelos volcánicos fértiles, un clima ideal y la dedicación de generaciones de caficultores, Colombia se convirtió en uno de los principales productores de café del mundo. A finales del siglo XIX y principios del XX, el café se consolidó como el motor económico del país, impulsando el comercio y la expansión de infraestructuras. Gracias a la Federación Nacional de Cafeteros, creada en 1927, el café colombiano ha mantenido su reputación de excelencia, destacando por su sabor suave, notas afrutadas y una acidez equilibrada. Hoy en día, el café sigue siendo un símbolo de identidad y orgullo para Colombia, con denominaciones de origen que garantizan su calidad y prestigio a nivel internacional.
          </figcaption>
        </figure>
      </article>
      
      <section className="flex flex-col gap-6">
        <article className="bg-cafe p-6 rounded-lg shadow-md flex-1">
          <header className="mb-4">
            <h2 className="font-bold text-xl text-amber-900">Tipos de cafe en Colombia</h2>
          </header>
          
          <p className="text-justify text-amber-800">
            Colombia es reconocida mundialmente por la diversidad y calidad de sus cafés, resultado de las variadas condiciones geográficas y climáticas presentes en sus regiones. A continuación, se detallan las principales variedades de café cultivadas en el país y las características distintivas de los cafés producidos en los departamentos de huila, antioquia, tolima, cauca, caldas, risaralda, valle del cauca, santander, nariño, cundinamarca.
          </p>
        </article>
        
        <article className="bg-cafe p-6 rounded-lg shadow-md flex-1">
          <header className="mb-4">
            <h3 className="font-bold text-xl text-amber-900">Café Más Destacado</h3>
          </header>
          
          <p className="text-justify text-amber-800">
            El Café Arábica es la variedad más cultivada y apreciada en Colombia, representando la mayoría de la producción nacional. Dentro de esta especie, las variedades como Caturra, Castillo y Colombia son las más extendidas, cada una adaptada a las condiciones específicas de las regiones productoras. La combinación de estas variedades con los diversos microclimas y altitudes de Colombia da como resultado cafés de alta calidad, reconocidos mundialmente por su suavidad, acidez balanceada y perfiles de sabor únicos
          </p>
        </article>
      </section>
    </section>
  </main>
  );

}