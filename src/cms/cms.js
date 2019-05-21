import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.init()

CMS.registerPreviewTemplate('blog', BlogPostPreview)
