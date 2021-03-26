import React from 'react'
import {Link} from 'gatsby'

import CategoryNavStyles from './categorynav.module.scss'
import CategoryStyles from './categorystyles.module.scss'

const CategoryNav = () => {
    return (
        <div className={CategoryNavStyles.container}>
            <Link to="/#feed" className={`${CategoryStyles.category} ${CategoryStyles.all}`}>all posts</Link>
            <Link to="/categories/projects/#feed" className={`${CategoryStyles.category} ${CategoryStyles.project}`}>projects</Link>
            <Link to="/categories/case-studies/#feed" className={`${CategoryStyles.category} ${CategoryStyles.caseStudy}`}>case studies</Link>
            <Link to="/categories/articles/#feed" className={`${CategoryStyles.category} ${CategoryStyles.article}`}>articles</Link>
            <Link to="/categories/tutorials/#feed" className={`${CategoryStyles.category} ${CategoryStyles.tutorial}`}>tutorials</Link>
        </div>
    )
}

export default CategoryNav