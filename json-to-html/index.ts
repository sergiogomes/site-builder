import { generateHeroToHtml } from './generate-hero-to-html/generate-hero-to-html'

import { type GenerateImageToHtmlProps } from './generate-image-to-html/generate-image-to-html'
import { type GenerateHeroToHtmlProps } from './generate-hero-to-html/generate-hero-to-html'
import { type GenerateLinkToHtmlProps } from './generate-link-to-html/generate-link-to-html'

type Section = {
  component: string
  props: GenerateHeroToHtmlProps | GenerateImageToHtmlProps | GenerateLinkToHtmlProps
}
type JsonToHtmlProps = {
  json: {
    name: string
    sections: Section[] // ||
  }
}
export function jsonToHtml(props: JsonToHtmlProps): string {
  const { json } = props

  const heroHtmlFound = json.sections.find(section => section.component === 'hero')

  // https://vite.dev/guide/
  // use sass https://www.npmjs.com/package/sass to compile the css

  const html = `<DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div id="root">
          ${heroHtmlFound && 'title' in heroHtmlFound.props ? generateHeroToHtml(heroHtmlFound.props) : ''}
        </div>
      </body>
    </html>`

  // Map trhough the json sections and call the component generator for each section and return the html
  // for {
  //   htmlSections += ...componente
  //   css.push( ...folhas por componente)
  // }

  return html
}
