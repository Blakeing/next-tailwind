import '../styles/main.css'
import '../styles/chrome-bug.css'
import { useEffect } from 'react'
// import useWindowDimensions from 'src/components/useWIndowDimensions'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  // const { height } = useWindowDimensions()

  // const vh = height * 0.01

  // useEffect(() => {
  //   function calculateVh() {
  //     var vh = window.innerHeight * 0.01
  //     document.documentElement.style.setProperty('--vh', vh + 'px')
  //   }

  //   // Initial calculation
  //   calculateVh()

  //   // Re-calculate on resize
  //   window.addEventListener('resize', calculateVh)

  //   // Re-calculate on device orientation change
  //   window.addEventListener('orientationchange', calculateVh)
  // })

  // useEffect(() => {
  //   document.documentElement.style.setProperty('--vh', vh + 'px')
  // }, [vh])

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return getLayout(<Component {...pageProps} />)
}
