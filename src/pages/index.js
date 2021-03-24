import React from 'react'
import {graphql} from 'gatsby'

import Sidebar from '../components/sidebar/sidebar'

const Index = ({data}) => {
    return (
        <div>
            <Sidebar data={data}/>
        </div>
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