import React from 'react'
import {graphql} from 'gatsby'

import Sidebar from '../components/sidebar/sidebar'
import Layout from '../components/layout/layout'

import IndexStyles from './index.module.scss'

const Index = ({data}) => {
    return (
        <Layout>

            <div className={IndexStyles.container}>


                <div className={IndexStyles.sidebar}>
                    <Sidebar className={IndexStyles.sidebar}
                        data={data}/>
                </div>

                <div className={IndexStyles.feed}>
                    <h1>Some other content</h1>
                </div>
            </div>

        </Layout>
    )
} 

export default Index

export const query = graphql`
    query SidebarContent {
        markdownRemark(frontmatter: {component: {eq: "sidebar"}}) {
            frontmatter {
                name
                title
                description
                image
            }
        }
    }
`