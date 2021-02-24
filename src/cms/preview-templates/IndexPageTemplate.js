import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    if(data) {
        return (
            <IndexPageTemplate
                heading={data.heading}
                subheading={data.subheading}
                herotext={data.herotext}
                keywords={data.key}
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