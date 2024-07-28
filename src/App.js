import React, { Suspense,lazy } from 'react'


const LazyComponent = lazy(()=>import('./LazyComponent'))


function App() {
  return (
    <div>

      <h1> Sample to the applications </h1> 
       <Suspense fallback={<div> loading........ </div>}>
          <LazyComponent/>
       </Suspense>
    </div>
  )
}

export default App