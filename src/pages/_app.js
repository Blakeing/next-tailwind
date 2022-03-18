import '../styles/main.css'
import '../styles/chrome-bug.css'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    function calculateVh() {
      var vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', vh + 'px')
    }

    // Initial calculation
    calculateVh()

    // Re-calculate on resize
    window.addEventListener('resize', calculateVh)

    // Re-calculate on device orientation change
    window.addEventListener('orientationchange', calculateVh)

    document.body.classList?.remove('loading')
  }, [])

  return getLayout(<Component {...pageProps} />)
}
