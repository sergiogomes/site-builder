import { generateLinkToHtml } from '../generate-link-to-html/generate-link-to-html'
import { generateImageToHtml } from '../generate-image-to-html/generate-image-to-html'

import { type ImageProps } from '../../types/image'
import { type LinkProps } from '../../types/link'

export type GenerateHeroToHtmlProps = {
  title?: string
  image?: ImageProps
  cta?: LinkProps
} & (
  | { title: string }
  | { image: ImageProps }
  | { cta: LinkProps }
)
export function generateHeroToHtml(props: GenerateHeroToHtmlProps): string {
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
