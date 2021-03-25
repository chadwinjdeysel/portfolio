import React from 'react'
import {graphql} from 'gatsby'

import Index from '../index'

const Articles = ({data}) => {
    return (
        <Index data={data}
            page={`Articles`}
            description={`Articles where I discuss topics including my journey, technologies and my opionion on a few things.`}
            url={`/categories/articles`}/>
    )
} 

export default Articles

export const query = graphql`
    query ArticlesContent {
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
            filter: {frontmatter: {templateKey: {eq: "collection"}, category: {eq: "article"} }}) 
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