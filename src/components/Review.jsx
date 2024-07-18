import React from 'react'
import ReviewCards from '../layouts/ReviewCards'
import img1 from '../assets/images/pic1.png'
import img2 from '../assets/images/pic2.png'
import img3 from '../assets/images/pic3.png'
const Review = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 lg:bg-backgroundColor">
        <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24'>Our Customer Review's</h1>
        <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8'>
        <ReviewCards img={img1} title="Olivia Ava" />
        <ReviewCards img={img2} title="John Deo" />
        <ReviewCards img={img3} title="Sofia zoe" />
        </div>
    </div>
  )
}

export default Review