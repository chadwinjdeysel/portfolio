import React from 'react'
import PropTypes from 'prop-types'
import { ContributorPageTemplate } from '../../templates/contributor/contributor'

const ContributorPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if(data) {
        return (
            <ContributorPageTemplate
                image ={data.image}
                name={data.name}
                title={data.title}
                about={data.about}
                contributor={data.contributor}
                linkedin={data.linkedin}
                github={data.github}
                email={data.email}
            />
        )
    } else {
        return <div>loading...</div>
    }
}

ContributorPagePreview.propTypes = {
    entry: PropTypes.shape({
      getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default ContributorPagePreview