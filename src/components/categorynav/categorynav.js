import React from 'react'
import {Link} from 'gatsby'

import CategoryNavStyles from './categorynav.module.scss'

const CategoryNav = () => {
    return (
        <div className={CategoryNavStyles.container}>
            <Link to="/#feed" className={`${CategoryNavStyles.category} ${CategoryNavStyles.all}`}>all posts</Link>
            <Link to="/categories/projects/#feed" className={`${CategoryNavStyles.category} ${CategoryNavStyles.project}`}>projects</Link>
            <Link to="/categories/case-studies/#feed" className={`${CategoryNavStyles.category} ${CategoryNavStyles.caseStudy}`}>case studies</Link>
            <Link to="/categories/articles/#feed" className={`${CategoryNavStyles.category} ${CategoryNavStyles.article}`}>articles</Link>
            <Link to="/categories/tutorials/#feed" className={`${CategoryNavStyles.category} ${CategoryNavStyles.tutorial}`}>tutorials</Link>
        </div>
    )
}

export default CategoryNav