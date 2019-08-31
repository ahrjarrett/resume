import React from "react"
import { Helmet } from "react-helmet"

const description = "My resume as a software engineer and web developer"
const title = "CV: Andrew Jarrett"
const siteName = title
const domain = "https://resume.ahrjarrett.com"
const dnsPrefetch = "https://polygonpolygon.herokuapp.com"

export default function Meta() {
  return (
    <Helmet>
      <html lang="en" />
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta name="docsearch:version" content="2.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={siteName} />

      <link rel="canonical" href={domain} />
      <link rel="dns-prefetch" href={dnsPrefetch} />
      <meta property="og:url" content={domain} />
    </Helmet>
  )
}
