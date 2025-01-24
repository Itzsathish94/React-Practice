import React, { Suspense } from 'react'

const LazyComponent = React.lazy(()=>
new Promise((resolve)=>
  setTimeout(()=>resolve(import('./LazyComponent')),2000))
)

const App = () => {
  return (
    <div>
       <h1>Loading lazy component</h1>
    <div>
      <Suspense fallback={<div>Loading.......</div>}>
        <LazyComponent/>
      </Suspense>
    </div>
    </div>
   
  )
}

export default App
