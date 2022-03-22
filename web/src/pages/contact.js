import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import useWindowDimensions from '../lib/hooks/useWIndowDimensions'

export default function Test() {
  const { height } = useWindowDimensions()

  const vh = height * 0.01

  useEffect(() => {
    document.documentElement.style.setProperty('--vh', vh + 'px')
  }, [vh])

  return <ContactForm />
}

Test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
