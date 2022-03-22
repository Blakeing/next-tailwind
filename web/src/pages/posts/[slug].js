import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { postQuery, postSlugsQuery } from '../../lib/sanity/queries'
import { urlForImage, usePreviewSubscription } from '../../lib/sanity/sanity'
import {
  sanityClient,
  getClient,
  overlayDrafts,
} from '../../lib/sanity/sanity.server'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

export default function Post({ data = {}, preview }) {
  const router = useRouter()

  const slug = data?.post?.slug
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  })

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <div className="container mx-auto px-5">
        {router.isFallback ? (
          <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
            Loading..
          </h1>
        ) : (
          <>
            <article>
              <>
                <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
                  {post.title}
                </h1>
              </>
              <div className="mx-auto max-w-2xl">
                <PortableText value={post.content} />
              </div>
            </article>
          </>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
