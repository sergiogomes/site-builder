import { imageProps } from '../../types/image'

export type generateImageToHtmlProps = {
  image: imageProps
}
export function generateImageToHtml({ image }: generateImageToHtmlProps): string {
  const { src, alt } = image

  if (!src || !alt) return ''

  return `<img src="${src}" alt="${alt}" />`
}
