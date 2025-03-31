import { useState } from 'react'

import { type ImageProps } from '../../types/image'

type ImageFormProps = {
  isSubComponent: boolean
  onChange: (inputName: string, value: string) => void
}

function Image({ isSubComponent, onChange }: ImageFormProps) {
  const [imageObj, setImageObj] = useState<ImageProps>({} as ImageProps)

  const handleChange = (inputName: string, value: string) => {
    setImageObj((prev) => ({ ...prev, [inputName]: value }))
    if (isSubComponent) {
      onChange(inputName, value)
    }
  }

  return (
    <form>
      <div>
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

      </div>
    </form>
  )
}

export default Image
