import CMS from 'netlify-cms-app'

import CollectionPagePreview from './preview-templates/CollectionPageTemplate'
import SidebarComponentPreview from './preview-templates/SidebarComponentPreview'

CMS.registerPreviewTemplate('collection', CollectionPagePreview)
CMS.registerPreviewTemplate('sidebar', SidebarComponentPreview)