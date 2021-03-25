import React from 'react'
import {graphql} from 'gatsby'

import Index from '../index'

const CaseStudies = ({data}) => {
    return (
        <Index data={data}
        page={`Case Studies`}
        description={`A collection of case studies of previous projects, clients and things related to that.`}
        url={`/categories/case-studies`}/>
    )
} 

export default CaseStudies

export const query = graphql`
    query CaseStudyContent {
        markdownRemark(frontmatter: {component: {eq: "sidebar"}}) {
            frontmatter {
                name
                title
                description
                image
            }
        }

        allMarkdownRemark(
            sort: {fields: frontmatter___date, 
            order: DESC},
            filter: {frontmatter: {templateKey: {eq: "collection"}, category: {eq: "case study"} }}) 
            {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        date(fromNow: true)
                        category
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`