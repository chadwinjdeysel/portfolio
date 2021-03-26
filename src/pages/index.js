import React from 'react'
import {graphql} from 'gatsby'

import Sidebar from '../components/sidebar/sidebar'
import Layout from '../components/layout/layout'
import Feed from '../components/feed/feed'
import CategoryNav from '../components/categorynav/categorynav'

import IndexStyles from './index.module.scss'

const Index = ({
    data,
    page,
    description,
    url
    }) => {
    return (
        <Layout page={page}
            description={description}
            url={url}>

            <div className={IndexStyles.container}>

                <div className={IndexStyles.sidebar}>
                    <Sidebar data={data.markdownRemark}/>

                </div>

                <div className={IndexStyles.feed}>
                    <CategoryNav/>

                    <Feed data={data.allMarkdownRemark}/>
                </div>
            </div>

        </Layout>
    )
} 

export default Index

export const query = graphql`
    query IndexContent {
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
            filter: {frontmatter: {templateKey: {eq: "collection"}}}) 
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