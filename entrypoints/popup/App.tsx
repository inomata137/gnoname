import { Suspense } from 'react'

import { OpacitySetter } from './OpacitySetter'

import './App.css'

export function App() {
  return (
    <>
      <h1 className="title">gnoname</h1>
      <div className="description">Google Docs, but name tags are translucent.</div>
      <Suspense fallback={<div>Loading...</div>}>
        <OpacitySetter />
      </Suspense>
    </>
  )
}
