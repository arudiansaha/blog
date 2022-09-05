import Layout from '../../components/layout'
import EmptyPage from '../../components/empty-page'
import type { ReactElement } from 'react'

export default function About() {
  return (
    <>
      <EmptyPage />
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Me.">{page}</Layout>
}
