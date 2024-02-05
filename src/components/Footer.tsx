import React from 'react'
import LogoTwo from '../assert/img_66.png'
export const Footer = () => {
  return (
    <div className='mt-10'>
        <div className='bg-gray-100 w-full h-36 text-center font-extrabold font-mono'>
            <div>
                <img className='p-4 m-auto' src={LogoTwo} alt="" />
                <h3>Dogru xeberin tek unvani !</h3>
                </div>
            </div>
        <div className='bg-gray-300 w-full h-14'>
            <h3>Bütün hüquqlar Mediasiya Şurasına aiddir</h3>
        </div>
    </div>
  )
}
