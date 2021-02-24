import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Content, { HTMLContent } from '../../components/content/content'

import CollectionStyles from './collection.module.scss'

export const CollectionPageTemplate =({
    title,
    date,
    description,
    content,
    contentComponent
}) => {
    const PostContent = contentComponent || Content
    
    return(
        <section>
            <div className={CollectionStyles.header}>
                <h1>{title}</h1>
                <p>
                    <small>{date}</small>
                </p>
                <p>{description}</p>
            </div>

            <PostContent content={content}/>
        </section>
    )}

CollectionPageTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    description: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string
}

const Collection = ({ data }) => {
    const { markdownRemark: item } = data

    return (
        <Layout title={item.frontmatter.title}
            description={item.frontmatter.description}
            keywords={item.frontmatter.keywords}
            url={item.fields.slug}>

            <CollectionPageTemplate
                content={item.html}
                contentComponent={HTMLContent}
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
                keywords
            }
            fields{
                slug
            }
        }
    }
`