import React from 'react'
import { useState } from 'react'
import './header.css'
import Menu from '../Menu'
import { ReactDimmer } from 'react-dimmer'
import Slider from '../Slider'
import logo from '../../assests/logo.png'
import sideImg from '../../assests/headerSideImg.png'
import buttonImg from '../../assests/Button1.png'
import sendIcon from '../../assests/sendIcon.png'
import menuIcon from '../../assests/menuIcon.png'

const Header = () => {
  const [loader, setLoader] = useState(false);

  const menuFunction = () => {
    setLoader(!loader);
  };
  return (
    <div >

      <div className=' customClass'>
        <nav className='flex justify-between mx-[5%] items-center pt-10 '>
          <img className='max-md:w-1/2' src={logo} alt="" />
          <div className='flex gap-10 '>
            <ul className={`  max-md:hidden  flex gap-6  text-white font-medium text-xl pt-1 `}>
              {/* <ul className=' flex gap-10 items-center max-md:hidden md:block md:flex  text-white font-semibold text-xl'> */}
              <li className='font-sans cursor-pointer'>About</li>
              <li className='font-sans cursor-pointer'>Authors</li>
              <li className='font-sans cursor-pointer'>Team</li>
            </ul>
            {loader && <Menu closeModal={setLoader} />}
            <ReactDimmer
              isOpen={loader}
              exitDimmer={setLoader}
              zIndex={100}
              blur={1.5}
            />
            <div className='max-sm:hidden'>

              <button className='text-[#7D75D8] font-sans font-bold bg-white p-3 rounded-md  '>CONNECT WALLET</button>
            </div>
            <div className='md:hidden max-md:block  mt-3'>
              <button onClick={menuFunction}>
                <img src={menuIcon} alt="" /></button></div>
          </div>

        </nav>
        <section>
          <div className='flex justify-center xl:justify-around max-md:flex-col-reverse max-md:gap-20 items-center'>
            <div className='mx-10 '>
              <h1 className='text-white text-8xl font-serif max-lg:text-6xl max-md:text-8xl '>Your books  on-chain </h1>
              <h1 className='text-white text-3xl my-8 font-sans'>The storefront you need to publish and <br /> sell books as NFTs</h1>
              <div className='flex gap-10 max-md:gap-10 max-md:flex-wrap max-lg:gap-2'>
                {/* <img className='max-md:w-[100%]' src={buttonImg} alt="" /> */}
                <button className=' bg-gradient-to-r font-sans from-[#6B60EB] to-[#CE5FE5] text-white flex gap-2 justify-center px-20 py-4 max-md:px-16 max-md:py-12 max-sm:py-4 max-md:w-[100%] max-lg:px-8  max-md:bg-[#303365] text-xl font-semibold rounded-xl '> <img src={sendIcon} alt="" /><h1 className='font-sans'>EXPLORE</h1></button>

                <button className='text-[#7D75D8] font-sans bg-white px-16 max-md:px-16 max-md:py-12 max-md:w-[100%] max-lg:px-8 max-sm:py-4 max-md:bg-[#303365] text-xl font-bold rounded-xl '>PUBLISH</button>
              </div>
            </div>
            <div>
              <img src={sideImg} alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <Slider />
          </div>
        </section>
      </div>

    </div>

  )
}

export default Header