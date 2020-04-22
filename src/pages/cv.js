import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import layoutStyles from '../components/cv/layout.module.scss'

import Head from '../components/head'
import Bio from '../components/cv/bio'
import Main from '../components/cv/main'

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
                url
              }
            }
            education {
              institution
              area
              studyType
              startDate
              endDate
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
      <section className={layoutStyles.cvBack}>
        <div className={layoutStyles.container}>
          <div className={`${layoutStyles.leftSide} ${layoutStyles.card}`}>
            <Bio basics={basics} />
          </div>
          <div className={`${layoutStyles.rightSide} ${layoutStyles.card}`}>
            <Main
              basics={basics}
              education={education}
              languages={languages}
              skills={skills}
              work={work}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default CV
