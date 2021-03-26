import React from 'react'
import {graphql} from 'gatsby'

import Sidebar from '../components/sidebar/sidebar'
import Layout from '../components/layout/layout'
import { HTMLContent } from '../components/content/content'

import IndexStyles from './index.module.scss'

const Resume = ({data}) => {

    return (
        <Layout page="My CV"
            url="/resume">
                
                <div className={IndexStyles.container}>

                <div className={IndexStyles.sidebar}>
                    <Sidebar data={data.markdownRemark}/>
                </div>

                <div className={IndexStyles.feed} id="resume">

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

export default Resume

export const query = graphql`
    query ResumeContent {
        markdownRemark(frontmatter: {component: {eq: "sidebar"}}) {
            frontmatter {
                name
                title
                description
                image
            }
        }

        allMarkdownRemark(filter: {frontmatter: {page: {eq: "resume"}}}) {
            edges {
                node {
                    html
                }
            }
        }
    }
`
