import Head from 'next/head'
import Layout from '../components/layout'
import HeroHeader from '../components/hero-header'
import HeroBody from '../components/hero-body'
import { getAllPosts } from '../lib/api'
import type { ReactElement } from 'react'

type Props = {
  posts: Array<any>,
}

export default function HeroPost({ posts }: Props) {
  return (
    <>
      <Head>
        <title>{`Rizky Ardiansyah's blog`}</title>
      </Head>

      {posts.map((post) => (
        <section key={post.slug}>
          <HeroHeader
            title={post.title}
            slug={post.slug}
            author={post.author}
            date={post.date}
          />

          <HeroBody
            excerpt={post.excerpt}
            slug={post.slug}
          />
        </section>
      ))}
    </>
  )
}

HeroPost.getLayout = function getLayout(page: ReactElement) {
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
