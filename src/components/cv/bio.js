import React from 'react'

const Bio = basics => {
  const {
    basics: {
      name,
      label,
      location: { city }
    }
  } = basics

  return (
    <section>
      <p>{name}</p>
      <p>{label}</p>
      <p>{city}</p>
    </section>
  )
}

export default Bio
