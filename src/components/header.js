import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={`${headerStyles.navItem} ${headerStyles.site}`}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              home
            </Link>
          </li>
          <li>
            <a className={headerStyles.navItem} href="/cv/">
              cv
            </a>
          </li>
          <li>
            <a
              className={headerStyles.navItem}
              href="https://github.com/sjransom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
          <li>
            <a
              className={headerStyles.navItem}
              href="https://twitter.com/sjransom"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
