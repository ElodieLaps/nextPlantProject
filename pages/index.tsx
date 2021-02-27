import Layout from '../components/page/Layout'
import { token } from './api/hello'
import { InferGetStaticPropsType } from 'next'
import Plants, { PlantType } from '../components/plant/plants/Plants'

export default function Home({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout pageTitle="page d'accueil">
      <h1>home content</h1>
      {console.log(page.data)}
      <Plants plants={page.data} />
    </Layout>
  )
}

type Page = {
  data: Array<PlantType>;
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


