import Layout from '../components/page/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Layout pageTitle="page d'accueil">
        <h1>home content</h1>
        <Image 
          src="/img/default_plant.jpg" 
          alt="plante par défaut" 
          width="200" 
          height="200"
          quality={60}
          className="plant-picture rounded-2xl object-cover object-center m-1"
        />
      </Layout>
    </>
  )
}
