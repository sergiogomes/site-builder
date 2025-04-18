import { generateLinkToHtml } from './generate-link-to-html'

import { type GenerateLinkToHtmlProps } from './generate-link-to-html'

describe('generateLinkToHtml', () => {
  it('should return an empty string if text is not provided', () => {
    const props: GenerateLinkToHtmlProps = {
      link: {
        href: 'https://example.com',
        text: '',
        target: '_blank',
        anchor: ''
      }
    }

    expect(generateLinkToHtml(props)).toMatchSnapshot()
  })

  it('should return an empty string if neither href nor anchor is provided', () => {
    const props: GenerateLinkToHtmlProps = {
      link: {
        href: '',
        text: 'Example',
        target: '_blank',
        anchor: ''
      }
    }

    expect(generateLinkToHtml(props)).toMatchSnapshot()
  })

  it('should generate a link with href and text', () => {
    const props: GenerateLinkToHtmlProps = {
      link: {
        href: 'https://example.com',
        text: 'Example',
        target: '',
        anchor: ''
      }
    }

    expect(generateLinkToHtml(props)).toMatchSnapshot()
  })

  it('should generate a link with target attribute', () => {
    const props: GenerateLinkToHtmlProps = {
      link: {
        href: 'https://example.com',
        text: 'Example',
        target: '_blank',
        anchor: ''
      }
    }

    expect(generateLinkToHtml(props)).toMatchSnapshot()
  })

  it('should generate a link with anchor', () => {
    const props: GenerateLinkToHtmlProps = {
      link: {
        href: 'https://example.com',
        text: 'Example',
        target: '',
        anchor: '#section'
      }
    }

    expect(generateLinkToHtml(props)).toMatchSnapshot()
  })

  it('should generate a link with href, text, target, and anchor', () => {
    const props: GenerateLinkToHtmlProps = {
      link: {
        href: 'https://example.com',
        text: 'Example',
        target: '_blank',
        anchor: '#section'
      }
    }

    expect(generateLinkToHtml(props)).toMatchSnapshot()
  })
})
