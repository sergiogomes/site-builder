import { type linkProps } from '../../types/link'

export type generateLinkToHtmlProps = {
  link: linkProps
}
export function generateLinkToHtml({ link }: generateLinkToHtmlProps): string {
  const { href, text, target, anchor } = link

  if (!text) return ''
  if (!href && !anchor) return ''

  return `<a ${target ? 'target="'+target+'" ' : ''}href="${(href || '') + (anchor || '')}">${text}</a>`
}
