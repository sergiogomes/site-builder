import { jsonToHtml } from './index'

describe('jsonToHtml', () => {
  it('should generate HTML with a hero component', () => {

    const props = { json: 
{
  "name": "Curriculo",
  "sections": [
    {
      "component": "hero",
      "props": {
        "title": "Olá, eu sou o João",
        "image": {
          "src": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          "alt": "Imagem de um homem sorrindo"
        },
        "cta": {
          "text": "Entrar em contato",
          "href": "",
          "anchor": "#contact"
        }
      }
    },
  ]
} }
    const result = jsonToHtml(props)
    
    expect(result).toMatchSnapshot()
  })
})
