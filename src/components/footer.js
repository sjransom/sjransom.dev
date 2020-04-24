import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import moment from 'moment'

import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const date = new Date()
  const theYear = moment(date).format('YYYY')

  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.author}>
        © {theYear} {data.site.siteMetadata.author}
      </p>
    </footer>
  )
}

export default Footer
