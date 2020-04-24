import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import homeStyles from './index.module.scss'
import sam from '../assets/sam.jpg'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <div className={homeStyles.container}>
        <div>
          <h1>Hello, I'm Sam</h1>
          <h2>I make things for the web.</h2>
          <p>
            Follow me on{' '}
            <a
              href="https://twitter.com/sjransom"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
            .
          </p>
        </div>
        <div>
          <img className={homeStyles.me} src={sam} alt="Sam Ransom" />
        </div>
      </div>
      <h2 className={homeStyles.blogTitle}>Blog</h2>
      <ol className={homeStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={homeStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h1>{edge.node.frontmatter.title}</h1>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage
