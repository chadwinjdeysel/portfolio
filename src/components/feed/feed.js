import React from 'react'
import { Link } from 'gatsby'

import FeedStyles from './feed.module.scss'
import CategoryStyles from '../../components/categorynav/categorystyles.module.scss'

const Feed = ({data}) => {
    return (
        <section className={FeedStyles.container} id="feed">
            {data.edges.map((edge) => {
                var category
                switch(edge.node.frontmatter.category) {
                    case "project":
                        category = CategoryStyles.project
                        break;
                    case "case study":
                        category = CategoryStyles.caseStudy
                        break;
                    case "tutorial":
                        category = CategoryStyles.tutorial
                        break;
                    default:
                        category = CategoryStyles.article
                        break;
                }

                return (
                    <article>
                        <Link to={edge.node.fields.slug}>

                            <div>
                                <div className={FeedStyles.header}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                
                                    <p className={`${CategoryStyles.category} ${category}`}>{edge.node.frontmatter.category}</p>
                                </div>

                                <p>
                                    <small>{edge.node.frontmatter.date}</small>
                                </p>

                                <p>{edge.node.frontmatter.description}</p>

                            </div>

                        </Link>
                    </article>
                )
            })}
        </section>
    )
}

export default Feed