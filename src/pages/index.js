import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello, I'm Sam</h1>
      <h2>I make things for the web.</h2>
      <p>Follow me on <a href="https://twitter.com/sjransom" target="_blank" rel="noopener noreferrer">twitter</a>.</p>
    </Layout>
  )
}

export default IndexPage
