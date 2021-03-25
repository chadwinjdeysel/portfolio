import React from 'react'
import { Link } from 'gatsby'

import FeedStyles from './feed.module.scss'

const Feed = ({data}) => {
    return (
        <div className={FeedStyles.container}>
            {data.edges.map((edge) => {
                var category
                switch(edge.node.frontmatter.category) {
                    case "project":
                        category = FeedStyles.project
                        break;
                    case "case study":
                        category = FeedStyles.caseStudy
                        break;
                    case "tutorial":
                        category = FeedStyles.tutorial
                        break;
                    default:
                        category = FeedStyles.article
                        break;
                }

                return (
                    <article>
                        <Link to={edge.node.fields.slug}>

                            <div className={FeedStyles.header}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                
                                <p className={`${FeedStyles.category} ${category}`}>{edge.node.frontmatter.category}</p>
                            </div>

                            <p>
                                <small>{edge.node.frontmatter.date}</small>
                            </p>

                            <p>{edge.node.frontmatter.description}</p>
                        </Link>
                    </article>
                )
            })}
        </div>
    )
}

export default Feed