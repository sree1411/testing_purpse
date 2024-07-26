import React from 'react'
import { UserData} from './UserContext'

const SampleComponent = () => {

    const {count,incBtn} =  UserData()


  return (
      <>
       <div>count :{count}</div>
       <button  onClick={incBtn}  > inc</button>
      </>
  )
}

export default SampleComponent