import { type LinkProps } from '../../types/link'

export type GenerateLinkToHtmlProps = {
  link: LinkProps
}
export function generateLinkToHtml({ link }: GenerateLinkToHtmlProps): string {
  const { href, text, target, anchor } = link

  if (!text) return ''
  if (!href && !anchor) return ''

  return `<a ${target ? 'target="'+target+'" ' : ''}href="${(href || '') + (anchor || '')}">${text}</a>`
}
