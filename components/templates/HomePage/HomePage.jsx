import Attributes from '@/components/modules/Attributes/Attributes'
import Banner from '@/components/modules/Banner/Banner'
import Companies from '@/components/modules/Companies/Companies'
import Definition from '@/components/modules/Definition/Definition'
import Guide from '@/components/modules/Guide/Guide'
import React from 'react'

const HomePage = () => {
  return (
    <div className='max-w-[900px] m-auto mt-[100px]'>
        <Banner/>
        <Attributes/>
        <Definition/>
        <Companies/>
        <Guide/>
    </div>
  )
}

export default HomePage