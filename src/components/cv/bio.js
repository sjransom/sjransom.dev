import React from 'react'

import bioStyles from './bio.module.scss'

const Bio = props => {
  const {
    basics: {
      name,
      label,
      picture,
      location: { city, countryCode },
      profiles
    }
  } = props

  return (
    <div className={bioStyles.container}>
      <img className={bioStyles.picture} src={picture} alt="Sam Ransom" />
      <div className={bioStyles.box}>
        <h2>{name}</h2>
        <h3>{label}</h3>
        <h4>
          {city}, {countryCode}
        </h4>
      </div>
      <div className={bioStyles.box}>
        <ul className={bioStyles.list}>
          {profiles.map(profile => {
            return (
              <li key={profile.network}>
                <a href={profile.url} target="_blank" rel="noopener noreferrer">
                  {profile.network}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Bio
