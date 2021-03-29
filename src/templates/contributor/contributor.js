import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout/layout'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

import ContributorStyles from './contributor.module.scss'

export const ContributorPageTemplate = ({
    contributor,
    contributorName,
    title,
    about,
    image,
    linkedin,
    github,
    email
}) => {
    return(
        <article itemProp="Author" className={ContributorStyles.container}>

            <div className={ContributorStyles.hero}>

                <Link to="/" title="Go back to home">
                    <img src={image}
                        alt={contributor}/>
                </Link>

                <h1>{contributorName}</h1>

                <h2>{title}</h2>

                <section className={ContributorStyles.socialsContainer}>
                    <a href={linkedin} target="_blank">
                        <FaLinkedin/>
                    </a>

                    <a href={github} target="_blank">
                        <FaGithub/>
                    </a>

                    <a href={`mailto:${email}`} target="_blank">
                        <FaEnvelope/>
                    </a>
                    
                </section>
            </div>
            
            
            <section className={ContributorStyles.about}>
                <h2>About</h2>
                <p>{about}</p>
            </section>
            
        </article>
    )
}

ContributorPageTemplate.propTypes = {
    contributorName: PropTypes.string,
    title: PropTypes.string,
    about: PropTypes.string,
    image: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    email: PropTypes.string,
    about: PropTypes.string
}

const Contributor = ({data}) => {
    const { markdownRemark: item } = data

    return (
        <Layout page="Contributors" 
            title={item.frontmatter.title}
            description={item.frontmatter.name}
            url={item.fields.slug}>
                
                <ContributorPageTemplate contributorName={item.frontmatter.name}
                    contributor={item.frontmatter.contributor}
                    title={item.frontmatter.title}
                    description={item.frontmatter.about}
                    linkedin={item.frontmatter.linkedin}
                    github={item.frontmatter.github}
                    email={item.frontmatter.email}
                    image={item.frontmatter.image}
                    about={item.frontmatter.about}/>

        </Layout>
    )
}

Contributor.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default Contributor

export const pageQuery = graphql`
    query ContributorItemByID($id: String!) {
        markdownRemark(id: {eq: $id}) {
            id
            html
            frontmatter {
                contributor
                name
                title
                image
                about
                linkedin
                github
                email
            }
            fields{
                slug
            }
        }
    }
`