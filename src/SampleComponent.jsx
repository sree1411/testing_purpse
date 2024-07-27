import React from 'react'

const SampleComponent = React.memo(({name})=>{
    return(
        <>
           {name}
        </>
    )
})
export default SampleComponent;