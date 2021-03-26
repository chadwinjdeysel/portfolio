import React from 'react'
import {graphql} from 'gatsby'

import Sidebar from '../components/sidebar/sidebar'
import Layout from '../components/layout/layout'
import { HTMLContent } from '../components/content/content'

import IndexStyles from './index.module.scss'

const About = ({data}) => {

    return (
        <Layout page="About"
            url="/about">
                
                <div className={IndexStyles.container}>

                <div className={IndexStyles.sidebar}>
                    <Sidebar data={data.markdownRemark}/>
                </div>

                <div className={IndexStyles.feed} id="about">

                    {data.allMarkdownRemark.edges.map((edge) => {

                        return (
                            <HTMLContent content={edge.node.html}/>
                        )
                        
                    })}
                    
                </div>
            </div>

        </Layout>
    )
}

export default About

export const query = graphql`
    query AboutContent {
        markdownRemark(frontmatter: {component: {eq: "sidebar"}}) {
            frontmatter {
                name
                title
                description
                image
            }
        }

        allMarkdownRemark(filter: {frontmatter: {page: {eq: "about"}}}) {
            edges {
                node {
                    html
                }
            }
        }
    }
`
