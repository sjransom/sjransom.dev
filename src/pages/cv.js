import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import layoutStyles from '../components/cv/layout.module.scss'

import Head from '../components/head'
import Bio from '../components/cv/bio'

const CV = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            basics {
              name
              label
              picture
              email
              phone
              website
              summary
              location {
                city
                countryCode
              }
              profiles {
                network
                username
                url
              }
            }
            education {
              institution
              area
              studyType
              startDate
              endDate
              gpa
            }
            languages {
              language
              fluency
            }
            skills {
              name
              level
            }
            work {
              company
              position
              website
              startDate
              endDate
              summary
            }
          }
        }
      }
    }
  `)

  const info = data.allDataJson.edges[0].node

  const { basics, education, languages, skills, work } = info

  return (
    <>
      <Head title="CV" />
      <section className={layoutStyles.container}>
        <Bio basics={basics} />
        <ul>
          {languages.map(item => {
            return (
              <li key={item.language}>
                {item.language} - {item.fluency}
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default CV
