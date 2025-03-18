import { generateHeroToHtml } from './generate-hero-to-html/generate-hero-to-html'

import { type GenerateImageToHtmlProps } from './generate-image-to-html/generate-image-to-html'
import { type GenerateHeroToHtmlProps } from './generate-hero-to-html/generate-hero-to-html'
import { type GenerateLinkToHtmlProps } from './generate-link-to-html/generate-link-to-html'

import '../assets/scss/main.scss'

type Section = {
  component: string
  props: GenerateHeroToHtmlProps | GenerateImageToHtmlProps | GenerateLinkToHtmlProps
}
type JsonToHtmlProps = {
  json: {
    name: string
    sections: Section[]
  }
}
export function jsonToHtml(props: JsonToHtmlProps): string {
  const { json } = props

  const html = json.sections.reduce((html, section) => {
    switch (section.component) {
      case 'hero':
        if (section.component === 'hero' && 'title' in section.props) {
          return html + generateHeroToHtml(section.props)
        }
        return html
      default:
        return html
    }
  }, '')
  
  // const html = `<DOCTYPE html>
  //   <html>
  //     <head>
  //     </head>
  //     <body>
  //       <div id="root">
  //         ${heroHtmlFound && 'title' in heroHtmlFound.props ? generateHeroToHtml(heroHtmlFound.props) : ''}
  //       </div>
  //     </body>
  //   </html>`

  return html
}
