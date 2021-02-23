import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    if(data) {
        return (
            <IndexPageTemplate
                heading={data.title}
                subheading={data.subheading}
                herotext={data.herotext}
            />
        )
    } else {
        return <div>loading...</div>
    }
}

IndexPagePreview.propTypes = {
    entry: PropTypes.shape({
      getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default IndexPagePreview