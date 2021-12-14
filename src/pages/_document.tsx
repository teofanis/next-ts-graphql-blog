import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:from-gray-800 dark:via-violet-900 dark:to-gray-600 dark:bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400 bg-gradient-to-r">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
