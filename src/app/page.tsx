import Head from 'next/head'
import MapaColombia from './components/MapaColombia'

const Home: React.FC = () => {
  return (
    <main>
      <Head>
        <title>Mapa Interactivo de Colombia</title>
        <meta name="description" content="Mapa interactivo de Colombia usando Next.js y Tailwind CSS" />
      </Head>
      <header>
        <h1 className="text-amber-950 flex flex-col justify-center items-center text-4xl font-bold"><strong>Mapa de Cafe</strong></h1>
        <br></br>
        <h2 className='flex justify-center items-center text-lg mt-4"'>Selecione un departamento para descubir las caracteristicas de su cafe.</h2>
      </header>
      <MapaColombia />
    </main>

    
    
  )
}

export default Home
