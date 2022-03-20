import Alert from './Alert'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ preview, children }) {
  return (
    <div className="h-full bg-primary mx-auto transition-colors duration-150">
      <Header />
      <Alert preview={preview} />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  )
}
