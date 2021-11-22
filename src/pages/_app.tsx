import { Layout } from '@components/index'
import type { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
