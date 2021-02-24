import React from 'react'
import PropTypes from 'prop-types'
import { CollectionPageTemplate } from '../../templates/collection/collection'

const CollectionPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if(data) {
        return (
            <CollectionPageTemplate
                title={data.title}
                description={data.description}
                date={data.date}
                content={widgetFor('body')}
            />
        )
    } else {
        return <div>loading...</div>
    }
}

CollectionPagePreview.propTypes = {
    entry: PropTypes.shape({
      getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default CollectionPagePreview