import Head from 'next/head'
import Layout from '../../components/layout'
import PostHeader from '../../components/post-header'
import PostBody from '../../components/post-body'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdown-to-html'
import type { ReactElement } from 'react'
import type PostType from '../../interfaces/post'

type Props = {
  post: PostType,
}

export default function Post({ post }: Props) {
  return (
    <>
      <Head>
        <title>{`${post.title} - Rizky Ardiansyah's blog`}</title>
      </Head>

      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        author={post.author}
        date={post.date}
      />

      <PostBody content={post.content} />
    </>
  )
}

Post.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Blog.">{page}</Layout>
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

type Params = {
  params: {
    slug: string,
  },
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      },
    },
    revalidate: 10,
  }
}
