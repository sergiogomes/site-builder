import { useState } from 'react'

import { type ImageProps } from '../../types/image'

type ImageFormProps = {
  isSubComponent: boolean
  onChange: (inputName: string, value: string) => void
}

function Image({ isSubComponent, onChange }: ImageFormProps) {

  if (isSubComponent) {
    return (
      <div>
        <ImageContent isSubComponent={isSubComponent} onChange={onChange} />
      </div>
    )
  }

  return (
    <form>
      <ImageContent isSubComponent={isSubComponent} onChange={() => {}} />
    </form>
  )
}

const initialImageObj: ImageProps = {
  src: '',
  alt: '',
}

function ImageContent({ isSubComponent, onChange }: ImageFormProps) {

  const [imageObj, setImageObj] = useState<ImageProps>(initialImageObj as ImageProps)

  const handleChange = (inputName: string, value: string) => {
    setImageObj((prev) => ({ ...prev, [inputName]: value }))
    if (isSubComponent) {
      onChange(inputName, value)
    }
  }

  return (
    <>
      <div className="form-field">
        <label htmlFor="image-src">Image Source</label>
        <input
          id="image-src"
          type="link" // Only link is supported for now
          placeholder="Image Source"
          value={imageObj.src}
          onChange={(e) => handleChange('src', e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="image-alt">Image Alt Text</label>
        <input
          id="image-alt"
          type="text"
          placeholder="Image Alt Text"
          value={imageObj.alt}
          onChange={(e) => handleChange('alt', e.target.value)}
        />
      </div>

      {!isSubComponent && (
        <button
          type="submit"
          onClick={() => console.log('Image Object:', imageObj)}
        >
          Salvar
        </button>
      )}

    </>
  )
}

export default Image
