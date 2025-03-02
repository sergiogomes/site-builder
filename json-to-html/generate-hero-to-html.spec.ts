import { generateHeroToHtml } from './generate-hero-to-html'
import { imageProps } from '../types/image'
import { linkProps } from '../types/link'

describe('generateHeroToHtml', () => {
  it('should generate HTML with given title, image, and cta', () => {
    const props = {
      title: 'Welcome to our site',
      image: {
        src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        alt: 'Hero Image'
      } as imageProps,
      cta: {
        href: '/learn-more',
        text: 'Learn More',
        target: '_blank'
      } as linkProps
    }

    const result = generateHeroToHtml(props)
    expect(result).toContain('<h2>Welcome to our site</h2>')
    expect(result).toContain('<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Hero Image" />')
    expect(result).toContain('<a target="_blank" href="/learn-more">Learn More</a>')
  })

  it('should return empty if props are empty', () => {
    const props = {
      title: '',
      image: {
        src: '',
        alt: ''
      } as imageProps,
      cta: {
        href: '',
        text: ''
      } as linkProps
    }

    const result = generateHeroToHtml(props)
    expect(result).toBe('')
  })

  it('should generate HTML with only title if image and cta are missing', () => {
    const props = {
      title: 'Only Title',
      image: {
        src: '',
        alt: ''
      } as imageProps,
      cta: {
        href: '',
        text: ''
      } as linkProps
    }

    const result = generateHeroToHtml(props)
    expect(result).toContain('<h2>Only Title</h2>')
  })

  it('should generate HTML with cta anchor and target', () => {
    const props = {
      title: 'Welcome to our site',
      image: {
        src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        alt: 'Hero Image'
      } as imageProps,
      cta: {
        text: 'Contact',
        anchor: '#contact'
      } as linkProps
    }
  
    const result = generateHeroToHtml(props)
    expect(result).toContain('<h2>Welcome to our site</h2>')
    expect(result).toContain('<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Hero Image" />')
    expect(result).toContain('<a href="#contact">Contact</a>')
  })
})
