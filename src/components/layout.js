import Head from 'next/head'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
  return (
    <div className="h-full bg-primary mx-auto transition-colors duration-150">
      <Header />
      <main className="fit ">{children}</main>
      <Footer />
    </div>
  )
}
