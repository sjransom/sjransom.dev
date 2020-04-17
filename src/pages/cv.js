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
            interests {
              name
              keywords
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

  const { basics } = info

  return (
    <React.Fragment>
      <Head title="CV" />
      <section>
        <p>{basics.name}</p>
      </section>
    </React.Fragment>
  )
}

export default CV
