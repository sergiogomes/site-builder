import { useState } from 'react'

import { type LinkProps } from '../../types/link'

type LinkFormProps = {
  isSubComponent: boolean
  onChange: (inputName: string, value: string) => void
}

function Link({ isSubComponent, onChange }: LinkFormProps) {

  if (isSubComponent) {
    return (
      <div>
        <LinkContent isSubComponent={isSubComponent} onChange={onChange} />
      </div>
    )
  }

  return (
    <form>
      <LinkContent isSubComponent={isSubComponent} onChange={() => {}} />
    </form>
  )
}

function LinkContent({ isSubComponent, onChange }: LinkFormProps) {
  const [linkObj, setLinkObj] = useState<LinkProps>({} as LinkProps)

  const handleChange = (inputName: string, value: string) => {
    setLinkObj((prev) => ({ ...prev, [inputName]: value }))
    if (isSubComponent) {
      onChange(inputName, value)
    }
  }

  return (
    <div>
      <div className="form-field">
        <label htmlFor="link-text">Link Text</label>
        <input
          id="link-text"
          type="text"
          placeholder="Link Text"
          value={linkObj.text}
          onChange={(e) => handleChange('text', e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="link-href">Link Href</label>
        <input
          id="link-href"
          type="link" // Only link is supported for now
          placeholder="Link Href"
          value={linkObj.href}
          onChange={(e) => handleChange('href', e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="link-anchor">Link Anchor</label>
        <input
          id="link-anchor"
          type="text"
          placeholder="Link Anchor"
          value={linkObj.anchor}
          onChange={(e) => handleChange('anchor', e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="link-target">Link Target</label>
        <input
          id="link-target"
          type="text"
          placeholder="Link Target"
          value={linkObj.target}
          onChange={(e) => handleChange('target', e.target.value)}
        />
      </div>

      {!isSubComponent && (
        <button
          type="submit"
          onClick={() => console.log('Link Object:', linkObj)}
        >
          Salvar
        </button>
      )}
    </div>
  )
}

export default Link
