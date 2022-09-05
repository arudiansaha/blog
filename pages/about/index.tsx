import Head from 'next/head'
import Layout from '../../components/layout'
import EmptyPage from '../../components/empty-page'
import type { ReactElement } from 'react'

export default function About() {
  return (
    <>
      <Head>
        <title>{`Rizky Ardiansyah's about`}</title>
      </Head>
      <EmptyPage />
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Me.">{page}</Layout>
}
