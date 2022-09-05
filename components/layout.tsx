import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import Meta from './meta'

type Props = {
  title: string,
  children: React.ReactNode
}

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Meta />
      <Header title={title} />
      <Sidebar />
      <main style={{ paddingTop: '81.87px' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
