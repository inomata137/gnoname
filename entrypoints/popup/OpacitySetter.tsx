import { useState, use, Suspense } from 'react'

import { saveOpacity, getOpacity } from '@/lib/storage'

import './OpacitySetter.css'

function OpacitySetterInner(props: { opacityPromise: Promise<number> }) {
  const defaultOpacity = use(props.opacityPromise)
  const [opacity, setOpacity] = useState(defaultOpacity)

  const onSliderChange: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (e) => {
    const value = e.target.valueAsNumber
    setOpacity(value)
    saveOpacity(value)
  }

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
        value={opacity}
        onChange={onSliderChange}
      />
      <span className="slider-indicator">{opacity}</span>
    </div>
  )
}

export function OpacitySetter() {
  const opacityPromise = getOpacity()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OpacitySetterInner opacityPromise={opacityPromise} />
    </Suspense>
  )
}
