import React from 'react'

function Footer() {
  return (
   <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
    <div className="space-y-4 text-xs text-gray-800">
        <h5 className='font-bold'>ABOUT</h5>
        <p>How AirBnb Works</p>
        <p>NewsRoom</p>
        <p>Investors</p>
        <p>AirBnb Plus</p>
        <p>AirBnb Luxe</p>
    </div>
    
    <div className="space-y-4 text-xs text-gray-800">
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>How AirBnb Works</p>
        <p>NewsRoom</p>
        <p>Investors</p>
        <p>AirBnb Plus</p>
        <p>AirBnb Luxe</p>
    </div>

    <div className="space-y-4 text-xs text-gray-800">
        <h5 className='font-bold'>HOST</h5>
        <p>How AirBnb Works</p>
        <p>NewsRoom</p>
        <p>Investors</p>
        <p>AirBnb Plus</p>
        <p>AirBnb Luxe</p>
    </div>

    <div className="space-y-4 text-xs text-gray-800">
        <h5 className='font-bold'>SUPPORT</h5>
        <p>How AirBnb Works</p>
        <p>Help Center</p>
        <p>Trust and Safety</p>
        <p>Contact Us</p>
    </div>
   </div>
  )
}

export default Footer
