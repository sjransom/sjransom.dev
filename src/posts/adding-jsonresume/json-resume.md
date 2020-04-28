---
title: 'Adding JSON Resume to Gatsby'
date: '28 April 2020'
---

This guide will assume you already have a blog built with Gatsby already set up, if you haven't you can build one following the guide in this [post](./building-this-blog).

The [JSON Resume](https://jsonresume.org/) is an open-source project to create a JSON-based standard for resumes. You may ask 'why would you want to use this?' - personally I think it's much cleaner to have all your information stored in one central JSON file rather than keeping it inside static HTML files, it's much easier to update in the future and also if you ever want to change the theme of your resume this will make it a lot less fiddly. At this stage you can add all of your own information and experience to the schema or just use the pre-filled dummy copy for now, save this file into `src/data/resome.json`.

Example JSON Resume schema:

```
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
    "profiles": [{
      "network": "Twitter",
      "username": "john",
      "url": "http://twitter.com/john"
    }]
  },
  "work": [{
    "company": "Company",
    "position": "President",
    "website": "http://company.com",
    "startDate": "2013-01-01",
    "endDate": "2014-01-01",
    "summary": "Description...",
    "highlights": [
      "Started the company"
    ]
  }],
  "volunteer": [{
    "organization": "Organization",
    "position": "Volunteer",
    "website": "http://organization.com/",
    "startDate": "2012-01-01",
    "endDate": "2013-01-01",
    "summary": "Description...",
    "highlights": [
      "Awarded 'Volunteer of the Month'"
    ]
  }],
  "education": [{
    "institution": "University",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "gpa": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "awards": [{
    "title": "Award",
    "date": "2014-11-01",
    "awarder": "Company",
    "summary": "There is no spoon."
  }],
  "publications": [{
    "name": "Publication",
    "publisher": "Company",
    "releaseDate": "2014-10-01",
    "website": "http://publication.com",
    "summary": "Description..."
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "Javascript"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "references": [{
    "name": "Jane Doe",
    "reference": "Reference..."
  }]
}
```

The first thing to do is to add the `gatsby-transformer-json` plugin, and the `gatsby-source-filesystem` if you do not already have this added - you can install these with:  
`npm install --save gatsby-transformer-json`
