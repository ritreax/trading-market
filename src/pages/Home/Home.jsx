import React from 'react'
import Icerik from './components/Icerik'
import Icerik2 from './components/Icerik2'
import Icerik3 from './components/Icerik3'
import Icerik4 from './components/Icerik4'
function Home() {
  return (
    <div className='pt-32'>
      <Icerik2/>
      <Icerik/>
      <Icerik3/>
      <Icerik4/>
    </div>
  )
}

export default Home