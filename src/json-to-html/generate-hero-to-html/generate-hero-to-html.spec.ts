import { compile } from 'sass-embedded'

import { generateHeroToHtml } from './generate-hero-to-html'

import { type ImageProps } from '../../../types/image'
import { type LinkProps } from '../../../types/link'


describe('generateHeroToHtml', () => {
  it('should generate HTML with title only', () => {
    const props = { title: 'Hero Title' }
    const result = generateHeroToHtml(props)
    
    expect(result).toMatchSnapshot()
  })

  it('should generate HTML with image only', () => {
    const image: ImageProps = { src: 'image.jpg', alt: 'An image' }
    const props = { image }
    const result = generateHeroToHtml(props)
    
    expect(result).toMatchSnapshot()
  })

  it('should generate HTML with cta only', () => {
    const cta: LinkProps = { href: 'https://example.com', text: 'Click here' }
    const props = { cta }
    const result = generateHeroToHtml(props)
    
    expect(result).toMatchSnapshot()
  })

  it('should generate HTML with title, image, and cta', () => {
    const image: ImageProps = { src: 'image.jpg', alt: 'An image' }
    const cta: LinkProps = { href: 'https://example.com', text: 'Click here' }
    const props = { title: 'Hero Title', image, cta }
    const result = generateHeroToHtml(props)
    
    expect(result).toMatchSnapshot()
  })

  it('should test scss', () => {
    const result = compile(__dirname + '/generate-hero-to-css.scss')

    expect(result.css).toMatchSnapshot()
  })
})
