import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout/layout'
import Content, { HTMLContent } from '../../components/content/content'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

import CollectionStyles from './collection.module.scss'
import CategoryStyles from '../../components/categorynav/categorystyles.module.scss'

export const CollectionPageTemplate =({
    title,
    date,
    description,
    content,
    contentComponent,
    category,
    slug,
    siteUrl
}) => {
    const PostContent = contentComponent || Content
    
    const urlTitle = title.replace(" ", "%20")

    var categoryStyle
                switch(category) {
                    case "project":
                        categoryStyle = CategoryStyles.project
                        break;
                    case "case study":
                        categoryStyle = CategoryStyles.caseStudy
                        break;
                    case "tutorial":
                        categoryStyle = CategoryStyles.tutorial
                        break;
                    default:
                        categoryStyle = CategoryStyles.article
                        break;
                }

    return(
        <div className={CollectionStyles.container}>
            <Link to="/">all posts</Link>

            <article>
                <div className={CollectionStyles.header}>

                    <div className={CollectionStyles.heading}>
                        <h1>{title}</h1>

                        <p className={`${CategoryStyles.category} ${categoryStyle}`}>{category}</p>
                    </div>
                    
                    <p>
                        <small>{date}</small>
                    </p>
                    <p>{description}</p>

                    <Link to="/contributors/chadwin-deysel" itemProp="author">by Chadwin Deysel</Link>
                </div>

                <PostContent content={content}/>
            </article>

            <div className={CollectionStyles.socialsContainer}>

                <a href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${slug}}`} 
                    target="_blank">
                    <FaFacebook/>
                </a>

                <a href={`https://twitter.com/intent/tweet?text=${siteUrl}${slug}`} 
                    target="_blank">
                    <FaTwitter/>
                </a>

                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}${slug}&title=${urlTitle}`} 
                    target="_blank">
                    <FaLinkedin/>
                </a>

            </div>
        </div>
    )}

CollectionPageTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    description: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    category: PropTypes.string,
    slug: PropTypes.string,
    siteUrl: PropTypes.string
}

const Collection = ({ data }) => {
    const { markdownRemark: item } = data

    return (
        <Layout page="Chadwin Deysel Blog" 
            title={item.frontmatter.title}
            description={item.frontmatter.description}
            keywords={item.frontmatter.keywords}
            url={item.fields.slug}>

            <CollectionPageTemplate
                content={item.html}
                contentComponent={HTMLContent}
                title={item.frontmatter.title}
                date={item.frontmatter.date}
                description={item.frontmatter.description}
                category={item.frontmatter.category}
                slug={item.fields.slug}
                siteUrl={data.site.siteMetadata.siteUrl}
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
                category
            }
            fields{
                slug
            }
        }
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`