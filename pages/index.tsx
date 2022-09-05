import Head from 'next/head'
import Layout from '../components/layout'
import HeroPost from '../components/hero-post'
import { getAllPosts } from '../lib/api'
import type { ReactElement } from 'react'

type Props = {
  posts: Array<string>,
}

export default function HomePage({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Rizky Ardiansyah's blog</title>
      </Head>

      <HeroPost posts={posts} />
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Blog.">{page}</Layout>
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'cover',
    'excerpt',
  ])

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
