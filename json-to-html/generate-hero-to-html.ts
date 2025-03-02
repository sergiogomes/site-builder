import { imageProps } from '../types/image'
import { linkProps } from '../types/link'

type generateHeroToHtmlProps = {
  title: string
  image: imageProps
  cta: linkProps
}
export function generateHeroToHtml(props: generateHeroToHtmlProps): string {
  const { title, image, cta } = props

  return ''
}
