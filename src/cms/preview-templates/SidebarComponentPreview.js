import React from 'react'
import PropTypes from 'prop-types'
import { SidebarTemplate } from '../../components/sidebar/sidebar'

const SidebarComponentPreview = ({entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    if(data) {
        return (
            <SidebarTemplate 
                myname={data.name}
                title={data.title}
                description={data.description}
                image={data.image}/>
        )
    } else {
        return <div>loading...</div>
    }

}

SidebarComponentPreview.propTypes = {
    entry: PropTypes.shape({
      getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default SidebarComponentPreview