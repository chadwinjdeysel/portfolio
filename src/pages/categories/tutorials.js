import React from 'react'
import {graphql} from 'gatsby'

import Index from '../index'

const Tutorials = ({data}) => {
    return (
        <Index data={data}/>
    )
} 

export default Tutorials

export const query = graphql`
    query TutorialsContent {
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
            filter: {frontmatter: {templateKey: {eq: "collection"}, category: {eq: "tutorial"} }}) 
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