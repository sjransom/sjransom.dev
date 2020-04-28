---
title: 'Adding JSON Resume to Gatsby'
date: '28 April 2020'
---

This guide will assume you already have a basic level of React and GraphQL as well as blog built with Gatsby already set up, if you haven't you can build one following the guide in this [post](./building-this-blog).

The [JSON Resume](https://jsonresume.org/) is an open-source project to create a JSON-based standard for resumes. You may ask 'why would you want to use this?' - personally I think it's much cleaner to have all your information stored in one central JSON file rather than keeping it inside static HTML files, it's much easier to update in the future and also if you ever want to change the theme of your resume this will make it a lot less fiddly. At this stage you can add all of your own information and experience to the schema or just use the pre-filled dummy copy for now, save this file into `src/data/resome.json`.

Example JSON Resume schema:

```json
{
  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "picture": "",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "website": "http://johndoe.com",
    "summary": "A summary of John Doe...",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "Twitter",
        "username": "john",
        "url": "http://twitter.com/john"
      },
      {
        "network": "LinkedIn",
        "username": "john",
        "url": "http://linkedin.com/john"
      }
    ]
  },
  "work": [
    {
      "company": "Company",
      "position": "President",
      "website": "http://company.com",
      "startDate": "2013-01-01",
      "endDate": "2014-01-01",
      "summary": "Description...",
      "highlights": ["Started the company"]
    }
  ],
  "volunteer": [
    {
      "organization": "Organization",
      "position": "Volunteer",
      "website": "http://organization.com/",
      "startDate": "2012-01-01",
      "endDate": "2013-01-01",
      "summary": "Description...",
      "highlights": ["Awarded 'Volunteer of the Month'"]
    }
  ],
  "education": [
    {
      "institution": "University",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2011-01-01",
      "endDate": "2013-01-01",
      "gpa": "4.0",
      "courses": ["DB1101 - Basic SQL"]
    }
  ],
  "awards": [
    {
      "title": "Award",
      "date": "2014-11-01",
      "awarder": "Company",
      "summary": "There is no spoon."
    }
  ],
  "publications": [
    {
      "name": "Publication",
      "publisher": "Company",
      "releaseDate": "2014-10-01",
      "website": "http://publication.com",
      "summary": "Description..."
    }
  ],
  "skills": [
    {
      "name": "Web Development",
      "level": "Master",
      "keywords": ["HTML", "CSS", "Javascript"]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    }
  ],
  "interests": [
    {
      "name": "Wildlife",
      "keywords": ["Ferrets", "Unicorns"]
    }
  ],
  "references": [
    {
      "name": "Jane Doe",
      "reference": "Reference..."
    }
  ]
}
```

The first thing to do is to add the `gatsby-transformer-json` plugin and the `gatsby-source-filesystem` (you may already have this added). `gatsby-transformer-json` parses raw JSON strings into JavaScript objects e.g. from JSON files (this means we can access it using the GraphQL API). `gatsby-source-filesystem` is a source plugin for sourcing data into your Gatsby application from your local filesystem.

You can install these both like below:  
`npm i --save gatsby-source-filesystem gatsby-transformer-json`

In your `gatsby-config.js` file make sure to point the `gatsby-source-filesystem` path to your `src`:

```
plugins: [
  'gatsby-transformer-json',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/`
    }
  }
]
```

First off let's create our GraphQL query, because of the `gatsby-transformer-json` plugin we have access to the root type `allDataJson` - using Graph<i>i</i>QL (Graph<i>i</i>QL is an interface for testing out your GraphQL queries), which is accessible from `http://localhost:8000/___graphql` we can get the data from our `resume.json` - let's try get our name with the following query:

```
{
  allDataJson {
    edges {
      node {
        basics {
          name
        }
      }
    }
  }
}
```

This query will return:

```
{
  "data": {
    "allDataJson": {
      "edges": [
        {
          "node": {
            "basics": {
              "name": "John Doe"
            }
          }
        }
      ]
    }
  }
}
```

Awesome! Now we are ready to create a component so that we can render this data to a page:

```
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            basics {
              name
            }
          }
        }
      }
    }
  `)

  const info = data.allDataJson.edges[0].node
  const { basics } = info

  return (
    <>
      <div>
        <p>{basics.name}</p>
      </div>
    </>
  )

}

export default Resume

```

Let's breakdown what's going on in our component. `useStaticQuery` is a hook that's included in Gatsby, this allows us to query with GraphQL at build time. You can read more about `useStaticQuery` [here](https://jsonresume.org/).

`data.allDataJson.edges[0].node` is the returned object with all our requested resume information so it's useful to assign this to a variable so that we may use ES6 object destructuring to more efficiently render the data - `const { basics } = info`.

Inside our render function we can render the data to the screen as simply as using `<p>{basics.name}</p>`

If we'd like to query our JSON for more information all we need to do is add it to the GraphQL query, let's add the `profiles` section - as it's part of the `basics` object we can add it like so:

```
query {
  allDataJson {
    edges {
      node {
        basics {
          name
        profiles {
          network
          url
        }
      }
    }
  }
}
```

This will return an array of objects with our social networks:

```json
"profiles": [
  {
    "network": "Twitter",
    "url": "https://twitter.com/john"
  },
  {
    "network": "LinkedIn",
    "url": "https://linkedin.com/john"
  }
]
```

We can use ES6 `map()` method to create a list which can be rendered to the screen:

```
<ul>
  {basics.profiles.map(profile => {
    return (
      <li key={profile.network}>
        <a href={profile.url}>
          {profile.network}
        </a>
      </li>
    )
  })}
</ul>
```

I hope this guide gives you the basis to create and render your own JSON Resume, if you need anything clarified or any help please feel free to tweet me [@sjransom](https://twitter.com/sjransom) - thanks for reading!

Github repo is [here](https://github.com/sjransom/sjransom.dev) for your reference.
