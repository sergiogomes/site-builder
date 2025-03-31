import { generateLinkToHtml } from '../generate-link-to-html/generate-link-to-html'
import './generate-hero-to-css.scss'

import { type ImageProps } from '../../../entities/image'
import { type LinkProps } from '../../../entities/link'

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
  const ctaHtml = cta ? generateLinkToHtml({ link: cta }) : ''

  if (titleHtml || image?.src || ctaHtml) {
    if (image?.src) {
      html.push(`<div class="hero" style="background-image: url('${image.src}');"><div class="container">`)
    } else {
      html.push('<div class="hero"><div class="container">')
    }
    html.push(titleHtml)
    html.push(ctaHtml)
    html.push('</div></div>')
  }

  return html.join('')
}
