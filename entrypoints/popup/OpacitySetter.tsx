import { useState, useEffect, use } from 'react'

import { STORAGE_KEY } from '../constant'

import './OpacitySetter.css'

const DEFAULT_OPACITY = 0.3

async function getOpacityFromStorage(): Promise<number> {
  const { opacity } = await browser.storage.local.get('opacity')
  switch (typeof opacity) {
    case 'string':
      return parseFloat(opacity)
    case 'number':
      return opacity
    default:
      return await saveOpacity(DEFAULT_OPACITY)
  }
}

async function saveOpacity(opacity: number) {
  await browser.storage.local.set({
    [STORAGE_KEY]: opacity,
  })
  return opacity
}

const opacityPromise = getOpacityFromStorage()

export function OpacitySetter() {
  const defaultOpacity = use(opacityPromise)
  const [opacity, setOpacity] = useState(defaultOpacity)

  useEffect(() => {
    saveOpacity(opacity)
  }, [opacity])

  return (
    <div className="slider-container">
      <label className="slider-label" htmlFor="gnoname-opacity">
        Opacity
      </label>
      <input
        type="range"
        name="gnoname-opacity"
        id="gnoname-opacity"
        min="0"
        max="1"
        step="0.05"
        defaultValue={opacity}
        onChange={(e) => setOpacity(parseFloat(e.target.value))}
      />
      <span className="slider-indicator">{opacity}</span>
    </div>
  )
}
