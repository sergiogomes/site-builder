
import { generateImageToHtml } from "./generate-image-to-html"

import { type generateImageToHtmlProps } from "./generate-image-to-html"
import { type imageProps } from "../../types/image"

describe('generateImageToHtml', () => {
  it('should generate correct HTML for valid image props', () => {
    const image: imageProps = { src: 'image.jpg', alt: 'An image' }
    const props: generateImageToHtmlProps = { image }
    const result = generateImageToHtml(props)
    
    expect(result).toBe('<img src="image.jpg" alt="An image" />')
  })

  it('should return an empty string if src is missing', () => {
    const image: imageProps = { src: '', alt: 'An image' }
    const props: generateImageToHtmlProps = { image }
    const result = generateImageToHtml(props)
    
    expect(result).toBe('')
  })

  it('should return an empty string if alt is missing', () => {
    const image: imageProps = { src: 'image.jpg', alt: '' }
    const props: generateImageToHtmlProps = { image }
    const result = generateImageToHtml(props)
    
    expect(result).toBe('')
  })

  it('should return an empty string if both src and alt are missing', () => {
    const image: imageProps = { src: '', alt: '' }
    const props: generateImageToHtmlProps = { image }
    const result = generateImageToHtml(props)
    
    expect(result).toBe('')
  })
})
