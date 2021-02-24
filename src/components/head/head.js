import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import DefaultImage from '../../img/placeholder.png'

const Head =({
    page,
    title,
    description,
    keywords,
    image,
    url
}) => {
    const data = useStaticQuery(graphql`
        query siteMetaData{
            site {
                siteMetadata {
                    siteDescription
                    siteTitle
                    siteUrl
                }
            }
        }
    `)

    const metadata = data.site.siteMetadata

    return(
        <Helmet>
            <title>{`${page == null ? `` : `${page} | `}  ${title == null ? metadata.siteTitle : title}` }</title>

            <meta name="description" content={ description == null ? metadata.siteDescription : description }></meta>
            <meta name="keywords" content={ keywords }></meta>

            <meta property="og:title" content={ title == null ? metadata.siteTitle : title }></meta>
            <meta property="og:type" content={`website`}></meta>
            <meta property="og:description" content={  description == null ? metadata.siteDescription : description }></meta>
            <meta property="og:image" content={ image == null ? DefaultImage : image }></meta>
            <meta property="og:locale" content={`en_US`}></meta>
            <meta property="og:url" content={ `${metadata.siteUrl}${url == null ? `` : url}` }></meta>

            <meta name="twitter:title" content={ title == null ? metadata.siteTitle : title }></meta>
            <meta name="twitter:description" content={  description == null ? metadata.siteDescription : description }></meta>
            <meta name="twitter:image" content={ image == null ? DefaultImage : image }></meta>
            <meta name="twitter:card" content={`summary_large_image`}></meta>

            <link rel="canonical" href={ `${metadata.siteUrl}${url == null ? `` : url}`  }></link>
        </Helmet>
)}

Head.propTypes = {
    page: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string
}

export default Head