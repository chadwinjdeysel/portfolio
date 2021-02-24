import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/layout/layout'

import IndexPageStyles from './index.module.scss'

export const IndexPageTemplate =({
    heading,
    subheading,
    herotext,
    keywords
}) => (
    <div className={ IndexPageStyles.container }>

        <div className={ IndexPageStyles.heroText}>
            <h1>{ heading }</h1>
            <h2>{ subheading }</h2>
            <p>{ herotext }</p>
        </div>
        
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
        <Layout page="Home">

            <IndexPageTemplate
                heading={ frontmatter.heading }
                subheading={ frontmatter.subheading }
                herotext={ frontmatter.herotext }
                keywords={ frontmatter.keywords }
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
    markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
        frontmatter {
            heading
            subheading
            herotext
            keywords    
        }
    }
  }  
`