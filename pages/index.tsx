import Layout from '../components/page/Layout'
import Image from 'next/image'
import { token } from './api/hello'
import { InferGetStaticPropsType } from 'next'
import Plant from '../components/plant/Plant'

export default function Home({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout pageTitle="page d'accueil">
      <h1>home content</h1>
      <Image
        src="/img/default_plant.jpg"
        alt="plante par défaut"
        width="200"
        height="200"
        quality={60}
        className="plant-picture rounded-2xl object-cover object-center"
      />
      {console.log(page.data)}
      {page.data.map((plant: Plant) =>
        <Plant
          key={plant.id}
          common_name={plant.common_name}
          image_url={plant.image_url}
        />
      )}

      <style jsx> {`
          color: green;

      `} </style>
    </Layout>
  )
}

type Plant = {
  id: number;
  common_name: string;
  image_url: string;
}

type Page = {
  data: Array<Plant>;
}

export const getStaticProps = async () => {
  const res = await fetch(`https://trefle.io/api/v1/plants?token=${token}`)
  const page: Page = await res.json()

  return {
    props: {
      page
    },
  }
}


