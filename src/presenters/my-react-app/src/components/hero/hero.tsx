import { useState } from 'react'

import { type HeroProps } from '../../types/hero'
import { type ImageProps } from '../../types/image'
import { type LinkProps } from '../../types/link'

import Image from '../image/image'
import Link from '../link/link'

import { jsonToHtml } from '../../../../../applications/json-to-html/index'

const initialHeroObj: HeroProps = {
  title: '',
  image: {} as ImageProps,
  cta: {} as LinkProps,
}

function Hero() {
  const [heroObj, setHeroObj] = useState<HeroProps>(initialHeroObj as HeroProps)

  const handleSubComponentChange = (objectName: string, inputName: string, value: string) => {
    setHeroObj((prev) => ({
      ...prev,
      [objectName]: {
        ...prev[objectName],
        [inputName]: value,
      },
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log('*** Hero Object:', heroObj)
      const obj = {
        json: {
          name: 'string',
          sections: [
            { component: 'hero', props: heroObj },
          ]
        }
      }
      console.log('*** print', jsonToHtml(obj))
    }}>
      <div>
        <div className="form-field">
          <label htmlFor="hero-title">Hero Title</label>
          <input 
            id="hero-title"
            type="text"
            placeholder="Title"
            value={heroObj.title}
            onChange={(e) => setHeroObj({ ...heroObj, title: e.target.value })}
          />
        </div>

        <Image isSubComponent={true} onChange={(inputName, value) => handleSubComponentChange('image', inputName, value)} />
        <Link isSubComponent={true} onChange={(inputName, value) => handleSubComponentChange('cta', inputName, value)} />

        <button type="submit">Salvar</button>

      </div>
    </form>
  )
}

export default Hero
