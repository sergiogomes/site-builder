import { generateHeroToHtml } from './generate-hero-to-html'

import { type imageProps } from '../../types/image'
import { type linkProps } from '../../types/link'

describe('generateHeroToHtml', () => {
  it('should generate HTML with title only', () => {
    const props = { title: 'Hero Title' }
    const result = generateHeroToHtml(props)
    
    expect(result).toBe('<div class="hero"><h2>Hero Title</h2></div>')
  })

  it('should generate HTML with image only', () => {
    const image: imageProps = { src: 'image.jpg', alt: 'An image' }
    const props = { image }
    const result = generateHeroToHtml(props)
    
    expect(result).toBe('<div class="hero"><img src="image.jpg" alt="An image" /></div>')
  })

  it('should generate HTML with cta only', () => {
    const cta: linkProps = { href: 'https://example.com', text: 'Click here' }
    const props = { cta }
    const result = generateHeroToHtml(props)
    
    expect(result).toBe('<div class="hero"><a href="https://example.com">Click here</a></div>')
  })

  it('should generate HTML with title, image, and cta', () => {
    const image: imageProps = { src: 'image.jpg', alt: 'An image' }
    const cta: linkProps = { href: 'https://example.com', text: 'Click here' }
    const props = { title: 'Hero Title', image, cta }
    const result = generateHeroToHtml(props)
    
    expect(result).toBe('<div class="hero"><h2>Hero Title</h2><img src="image.jpg" alt="An image" /><a href="https://example.com">Click here</a></div>')
  })
})
