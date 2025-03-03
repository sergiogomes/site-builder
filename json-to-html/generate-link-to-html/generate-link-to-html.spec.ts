import { generateLinkToHtml } from './generate-link-to-html'

import { type generateLinkToHtmlProps } from './generate-link-to-html'

describe('generateLinkToHtml', () => {
  it('should return an empty string if text is not provided', () => {
    const props: generateLinkToHtmlProps = {
      link: {
        href: 'https://example.com',
        text: '',
        target: '_blank',
        anchor: ''
      }
    }

    expect(generateLinkToHtml(props)).toBe('')
  })

  it('should return an empty string if neither href nor anchor is provided', () => {
    const props: generateLinkToHtmlProps = {
      link: {
        href: '',
        text: 'Example',
        target: '_blank',
        anchor: ''
      }
    }

    expect(generateLinkToHtml(props)).toBe('')
  })

  it('should generate a link with href and text', () => {
    const props: generateLinkToHtmlProps = {
      link: {
        href: 'https://example.com',
        text: 'Example',
        target: '',
        anchor: ''
      }
    }

    expect(generateLinkToHtml(props)).toBe('<a href="https://example.com">Example</a>')
  })

  it('should generate a link with target attribute', () => {
    const props: generateLinkToHtmlProps = {
      link: {
        href: 'https://example.com',
        text: 'Example',
        target: '_blank',
        anchor: ''
      }
    }

    expect(generateLinkToHtml(props)).toBe('<a target="_blank" href="https://example.com">Example</a>')
  })

  it('should generate a link with anchor', () => {
    const props: generateLinkToHtmlProps = {
      link: {
        href: 'https://example.com',
        text: 'Example',
        target: '',
        anchor: '#section'
      }
    }

    expect(generateLinkToHtml(props)).toBe('<a href="https://example.com#section">Example</a>')
  })

  it('should generate a link with href, text, target, and anchor', () => {
    const props: generateLinkToHtmlProps = {
      link: {
        href: 'https://example.com',
        text: 'Example',
        target: '_blank',
        anchor: '#section'
      }
    }

    expect(generateLinkToHtml(props)).toBe('<a target="_blank" href="https://example.com#section">Example</a>')
  })
})
