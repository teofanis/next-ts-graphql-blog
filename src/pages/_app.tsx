import { Layout } from '@components/index'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
