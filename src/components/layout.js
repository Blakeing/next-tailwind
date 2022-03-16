import Head from 'next/head'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Header />
      <main className="grid-container h-full">{children}</main>
      <Footer />
    </>
  )
}
