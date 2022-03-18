import Slider from '../components/slider'
import Layout from '../components/layout'
import { useEffect } from 'react'
import useWindowDimensions from 'src/components/useWIndowDimensions'

export default function Test() {
  const { height } = useWindowDimensions()

  const vh = height * 0.01

  useEffect(() => {
    document.documentElement.style.setProperty('--vh', vh + 'px')
  }, [vh])

  return <Slider />
}

Test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
