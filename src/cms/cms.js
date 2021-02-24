import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPageTemplate'
import CollectionPagePreview from './preview-templates/CollectionPageTemplate'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('collection', CollectionPagePreview)