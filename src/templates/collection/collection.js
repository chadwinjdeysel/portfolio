import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/layout/layout'

import CollectionStyles from './collection.module.scss'

export const CollectionPageTemplate =({
    title,
    date,
    description,
    content
}) => (
    <section>
        <div className={CollectionStyles.header}>
            <h1>{title}</h1>
            <p>
                <small>{date}</small>
            </p>
            <p>{description}</p>
        </div>

        <div dangerouslySetInnerHTML={{__html: content}} className={CollectionStyles.content}></div>
    </section>
)

CollectionPageTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    description: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string
}

const Collection = ({ data }) => {
    const { markdownRemark: item } = data

    return (
        <Layout>
            <CollectionPageTemplate
                content={item.html}
                title={item.frontmatter.title}
                date={item.frontmatter.date}
                description={item.frontmatter.description}
            />
        </Layout>
    )
}

Collection.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default Collection

export const pageQuery = graphql`
    query CollectionItemByID($id: String!) {
        markdownRemark(id: {eq: $id}) {
            id
            html
            frontmatter {
                date(fromNow: true)
                title
                description
            }
        }
    }
`