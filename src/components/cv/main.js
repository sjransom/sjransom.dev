import React from 'react'
import mainStyles from '../components/cv/main.module.scss'

const Main = props => {
  const {
    basics: { summary },
    work
  } = props
  return (
    <section>
      <h2 className={mainStyles.test}>About</h2>
      <p>{summary}</p>
      <h2>Experience</h2>
      {work.map(job => {
        return (
          <li key={job.company}>
            <p>{job.company}</p>
            <p>{job.position}</p>
            <p>
              {job.startDate} - {job.endDate}
            </p>
            <p>{job.summary}</p>
          </li>
        )
      })}
    </section>
  )
}

export default Main
