import Attributes from '@/components/modules/Attributes/Attributes'
import Banner from '@/components/modules/Banner/Banner'
import Definition from '@/components/modules/Definition/Definition'
import React from 'react'

const HomePage = () => {
  return (
    <div className='max-w-[900px] m-auto mt-[100px]'>
        <Banner/>
        <Attributes/>
        <Definition/>
    </div>
  )
}

export default HomePage