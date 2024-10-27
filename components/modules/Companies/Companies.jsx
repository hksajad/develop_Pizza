import Apple from '@/components/icons/Apple'
import Binance from '@/components/icons/Binance'
import SpaceX from '@/components/icons/SpaceX'
import Tesla from '@/components/icons/Tesla'
import React from 'react'

const Companies = () => {
  return (
    <div className='Companies mt-[100px]'>
        <div className="company flex justify-between items-center flex-wrap max-[768px]:justify-center">
            <Apple/>
            <SpaceX/>
            <Binance/>
            <Tesla/>
        </div>
    </div>
  )
}

export default Companies