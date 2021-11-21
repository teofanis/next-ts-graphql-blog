import React, { ReactChild, ReactChildren, ReactNode } from 'react'
import Head from 'next/head'

interface LayoutProps {
  children: ReactChild | ReactChildren | ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}

export default Layout
