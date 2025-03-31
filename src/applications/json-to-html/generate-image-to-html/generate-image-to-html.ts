import { ImageProps } from '../../../entities/image'

export type GenerateImageToHtmlProps = {
  image: ImageProps
}
export function generateImageToHtml({ image }: GenerateImageToHtmlProps): string {
  const { src, alt } = image

  if (!src || !alt) return ''

  return `<img src="${src}" alt="${alt}" />`
}
