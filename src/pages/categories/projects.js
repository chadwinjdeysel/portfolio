import React from 'react'
import {graphql} from 'gatsby'

import Index from '../index'

const Projects = ({data}) => {
    return (
        <Index data={data}
            page={`Projects`}
            description={`A collection of showcases of previous products I've worked on. They inclue personal projects, proof of concepts and client projects`}
            url={`/categories/projects`}/>
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