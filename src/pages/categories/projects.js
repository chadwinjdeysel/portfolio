import React from 'react'
import {graphql} from 'gatsby'

import Index from '../index'

const Projects = ({data}) => {
    return (
        <Index data={data}/>
    )
} 

export default Projects

export const query = graphql`
    query ProjectsContent {
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
            filter: {frontmatter: {templateKey: {eq: "collection"}, category: {eq: "project"} }}) 
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