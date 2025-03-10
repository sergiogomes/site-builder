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
    
    expect(result).toBe(
      `<DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div id="root">
          <div class="hero"><h2>Olá, eu sou o João</h2><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Imagem de um homem sorrindo" /><a href="#contact">Entrar em contato</a></div>
        </div>
      </body>
    </html>`
    )
  })
})
