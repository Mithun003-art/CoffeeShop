import React from 'react'
import img from '../assets/images/about.jpg'
import Button from '../layouts/Button.jsx'
const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-8'>About Us</h1>

        <div className='flex flex-col lg:flex-row items-center gap-5'>
            <div className='w-full lg:w-2/4'>
                <img  className="rounded-lg" src={img} alt="img" />
            </div>
            <div className='w-full lg:w-2/4 p-4 space-y-3'>
                <h1 className='font-semibold text-3xl'>What's makes our coffee Special?</h1>
                <p>A cappuccino is a beloved espresso-based hot coffee drink made with layering of espresso, steamed milk, and milk foam on top. The taste of cappuccinos can be described as creamy, smooth, and balanced. The combination of flavors and textures creates a delightful and comforting experience for many coffee enthusiasts.</p>
                <p>A cappuccino is a beloved espresso-based hot coffee drink made with layering of espresso, steamed milk, and milk foam on top. The taste of cappuccinos can be described as creamy, smooth, and balanced. The combination of flavors and textures creates a delightful and comforting experience for many coffee enthusiasts.</p>
                <Button title = "Learn More" />
            </div>
        </div>
    </div>
  )
}

export default About