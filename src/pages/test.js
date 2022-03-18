import Slider from 'src/components/slider'
import Layout from '../components/layout'

export default function Test() {
  return <Slider />
}

Test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
