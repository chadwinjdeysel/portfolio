import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'

export const IndexPageTemplate =({
    heading,
    subheading,
    herotext
}) => (
    <div>
        <h1>{ heading }</h1>
        <h2>{ subheading }</h2>
        <p>{ herotext }</p>
    </div>
)

IndexPageTemplate.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string,
    herotext: PropTypes.string
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate
                heading={ frontmatter.heading }
                subheading={ frontmatter.subheading }
                herotext={ frontmatter.herotext }
            />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
    allMarkdownRemark(filter: {}) {
      edges {
        node {
          frontmatter {
            heading
            subheading
            herotext
          }
        }
      }
    }
  }  
`