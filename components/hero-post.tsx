import HeroHeader from './hero-header'
import HeroBody from './hero-body'

type Props = {
  posts: Array<any>,
}

export default function HeroPost({ posts }: Props) {
  return (
    <>
      <HeroHeader
        title="Stories"
      />

      {posts.map((post) => (
        <HeroBody
          key={post.slug}
          author={post.author}
          date={post.date}
          excerpt={post.excerpt}
          slug={post.slug}
          title={post.title}
        />
      ))}
    </>
  )
}
