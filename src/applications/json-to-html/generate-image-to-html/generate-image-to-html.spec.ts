
import { generateImageToHtml } from "./generate-image-to-html"

import { type GenerateImageToHtmlProps } from "./generate-image-to-html"
import { type ImageProps } from "../../../entities/image"

describe('generateImageToHtml', () => {
  it('should generate correct HTML for valid image props', () => {
    const image: ImageProps = { src: 'image.jpg', alt: 'An image' }
    const props: GenerateImageToHtmlProps = { image }
    const result = generateImageToHtml(props)
    
    expect(result).toMatchSnapshot()
  })

  it('should return an empty string if src is missing', () => {
    const image: ImageProps = { src: '', alt: 'An image' }
    const props: GenerateImageToHtmlProps = { image }
    const result = generateImageToHtml(props)
    
    expect(result).toMatchSnapshot()
  })

  it('should return an empty string if alt is missing', () => {
    const image: ImageProps = { src: 'image.jpg', alt: '' }
    const props: GenerateImageToHtmlProps = { image }
    const result = generateImageToHtml(props)
    
    expect(result).toMatchSnapshot()
  })

  it('should return an empty string if both src and alt are missing', () => {
    const image: ImageProps = { src: '', alt: '' }
    const props: GenerateImageToHtmlProps = { image }
    const result = generateImageToHtml(props)
    
    expect(result).toMatchSnapshot()
  })
})
