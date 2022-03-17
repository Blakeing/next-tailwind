import Head from 'next/head'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
  return (
    <div className="h-full bg-primary mx-auto transition-colors duration-150">
      <Header />
      <main className="fit max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-4 sm:py-6 lg:py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}
