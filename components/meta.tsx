import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-256x256.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-128x128.png"
      />
      <link
        rel="shortcut icon"
        href="/favicons/favicon-64x164.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link
        rel="shortcut icon"
        href="/favicons/favicon.svg"
      />
      <meta
        name="description"
        content="A blog with nextjs created by me."
      />
    </Head>
  )
}
