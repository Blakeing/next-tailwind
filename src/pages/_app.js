import '../styles/main.css'
import '../styles/chrome-bug.css'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return getLayout(<Component {...pageProps} />)
}
