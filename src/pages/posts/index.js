import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'

import CollectionIndexStyles from './collection.module.scss'

const CollectionIndex = () => {
    const data = useStaticQuery(graphql`
        query GetCollection {
            allMarkdownRemark(
                sort: {fields: frontmatter___date, 
                order: DESC},
                filter: {frontmatter: {templateKey: {eq: "posts"}}}) 
                {
                edges {
                    node {
                        frontmatter {
                            title
                            description
                            date(fromNow: true)
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return(
        <Layout>
            <div className={CollectionIndexStyles.container}>
                <h1>Collection</h1>

                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <Link to={edge.node.fields.slug}>

                            <h2>{edge.node.frontmatter.title}</h2>

                            <p>
                                <small>{edge.node.frontmatter.date}</small>
                            </p>

                            <p>{edge.node.frontmatter.description}</p>
                        </Link>
                    )
                })}
            </div>
            
        </Layout>
    )
}

export default CollectionIndex