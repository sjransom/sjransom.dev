import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'

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
  const { basics, languages } = info

  return (
    <>
      <Head title="CV" />
      <section>
        <p>{basics.name}</p>
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
