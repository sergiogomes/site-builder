import { useState } from 'react'

import { type HeroProps } from '../../types/hero'

import Image from '../image/image'
import Link from '../link/link'

function Hero() {
  const [heroObj, setHeroObj] = useState<HeroProps>({} as HeroProps)

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
    <form>
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
        <Link isSubComponent={true} onChange={(inputName, value) => handleSubComponentChange('link', inputName, value)} />

        <button
          type="submit"
          onClick={() => console.log('Hero Object:', heroObj)}
        >
          Salvar
        </button>

      </div>
    </form>
  )
}

export default Hero
