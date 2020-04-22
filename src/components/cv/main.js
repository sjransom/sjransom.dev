import React from 'react'
import mainStyles from './main.module.scss'

const Main = props => {
  const {
    basics: { summary },
    work
  } = props
  return (
    <div>
      <h2 className={mainStyles.mainHeading}>About</h2>
      <p>{summary}</p>
      <h2 className={mainStyles.mainHeading}>Experience</h2>
      <ul className={mainStyles.workList}>
        {work.map(job => {
          return (
            <li key={job.company}>
              <h3 className={mainStyles.workTitle}>
                {job.position} - {job.company}
              </h3>
              <p>
                {job.startDate} - {job.endDate}
              </p>
              <p>{job.summary}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Main
