import Alert from './Alert'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ preview, children }) {
  return (
    <div className="mx-auto h-full bg-primary transition-colors duration-150">
      <Header />
      <Alert preview={preview} />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  )
}
