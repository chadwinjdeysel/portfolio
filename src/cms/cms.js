import CMS from 'netlify-cms-app'

import CollectionPagePreview from './preview-templates/CollectionPageTemplate'
import SidebarComponentPreview from './preview-templates/SidebarComponentPreview'
import ContributorPagePreview from './preview-templates/ContributorPageTemplate'

CMS.registerPreviewTemplate('collection', CollectionPagePreview)
CMS.registerPreviewTemplate('sidebar', SidebarComponentPreview)
CMS.registerPreviewTemplate('contributor', ContributorPagePreview)