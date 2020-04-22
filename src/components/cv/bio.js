import React from 'react'

const Bio = props => {
  const {
    basics: {
      name,
      label,
      location: { city, countryCode },
      profiles
    }
  } = props

  return (
    <section>
      <div>
        <p>{name}</p>
        <p>{label}</p>
        <p>
          {city}, {countryCode}
        </p>
      </div>
      <div>
        <p>Social</p>
        <ul>
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
    </section>
  )
}

export default Bio
