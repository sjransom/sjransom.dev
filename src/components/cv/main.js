import React from 'react'
import moment from 'moment'

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
                <span className={mainStyles.jobPosition}>{job.position} -</span>{' '}
                {job.company}
              </h3>
              <p className={mainStyles.date}>
                {moment(job.startDate).format('MMM YYYY')} -{' '}
                {job.endDate === ''
                  ? 'Present'
                  : moment(job.endDate).format('MMM YYYY')}
              </p>
              <p className={mainStyles.jobDescription}>{job.summary}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Main
