import { generateLinkToHtml } from '../generate-link-to-html/generate-link-to-html'
import { generateImageToHtml } from '../generate-image-to-html/generate-image-to-html'

import { type imageProps } from '../../types/image'
import { type linkProps } from '../../types/link'

type generateHeroToHtmlProps = {
  title?: string
  image?: imageProps
  cta?: linkProps
} & (
  | { title: string }
  | { image: imageProps }
  | { cta: linkProps }
)
export function generateHeroToHtml(props: generateHeroToHtmlProps): string {
  const { title, image, cta } = props

  const html: string[] = []

  const titleHtml = title ? `<h2>${title}</h2>` : ''
  const imageHtml = image ? generateImageToHtml({ image }) : ''
  const ctaHtml = cta ? generateLinkToHtml({ link: cta }) : ''

  if (titleHtml || imageHtml || ctaHtml) {
    html.push('<div class="hero">')
    html.push(titleHtml)
    html.push(imageHtml)
    html.push(ctaHtml)
    html.push('</div>')
  }

  return html.join('')
}
