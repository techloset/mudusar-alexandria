import React from 'react'
import logo from '../../assests/logo1.png'
import buttonImg from '../../assests/Button3.png'
import mainImg from '../../assests/mainSectionImg.png'
import cardImg1 from '../../assests/cardIcon1.png'
import cardImg2 from '../../assests/cardIcon2.png'
import cardImg3 from '../../assests/cardIcon3.png'
import cardImg4 from '../../assests/cardIcon4.png'
import cardImg5 from '../../assests/cardIcon5.png'
import lastImg from '../../assests/lastSectionImg.png'
import twitter from '../../assests/twitter.png'
import footerImg from '../../assests/footerIcon.png'
import centerImg from '../../assests/centerImg.png'
import nextIcon from '../../assests/nextIcon.png'
import line from '../../assests/line.png'

const Main = () => {
    return (
        <div className=''>
            <section className='flex justify-center '>
                <div className='flex flex-col justify-center items-center sm:mt-20  w-[50%] max-md:w-[80%] py-4'>
                   <img src={line} className='mb-16' alt="" />
                    <h1 className='text-5xl max-md:text-[40px]  text-center mb-6 '>Welcome to the <span className='text-[#7D75D8]'>  wall of </span></h1>
                    <h1><img src={logo} alt="" /></h1>
                    <h1 className='font-sans  text-[30px] max-sm:text-2xl  text-[#303365] text-center mt-8'>This is where we tell you at all our <br  className='max-sm:hidden'/>
                        hopes and <br  className='sm:hidden'/> aspirations. <br className='' />
                        Behold the wanderer of the literary metaverse.</h1>
                   <img src={line} className='my-12' alt="" />

                </div>
            </section>
            <section className='flex justify-center mt-56 max-sm:mt-28'>
                <div className='bg-[#7D75D8] relative rounded-lg w-[80%] max-sm:w-[90%] max-xl:flex-col max-xl:items-center  flex justify-around'>
                    <div className='absolute top-[-30%] max-xl:top-[-15%] max-sm:top-[-9%]   max-xl:mx-[15%] left-[10%]  max-md:left-[0%]'><img src={mainImg} alt="" /></div>
                    <div className='w-[50%] '>
                    </div>
                    <div className='text-white py-20 w-[50%] max-md:w-[80%] max-xl:mt-[40%] max-lg:mt-[50%] max-md:mt-[60%]'>
                        <h1 className=' text-5xl max-sm:text-[40px]'>Publish a book NFT</h1>
                        <h1 className='text-2xl max-sm:text-[20px] py-6 w-[90%] font-sans pr-10'>Duis non orci justo. Nulla lobortis, elit ac  imperdiet mollis, nisi ante blandit ligula, vel   elementum urna velit eu lorem</h1>
                        <button className=' bg-gradient-to-r from-[#6B60EB] to-[#CE5FE5] text-white flex gap-2 justify-center items-center px-12 max-sm:px-[24px] py-4   text-[24px] max-sm:text-base font-semibold rounded-xl '><h1 className='font-sans max-sm:text-[16px]'>PUBLISH WORKS</h1> <img src={nextIcon} alt="" /></button>

                        {/* <button><img src={buttonImg} alt="" /></button> */}
                    </div>
                </div>
            </section>
            <section className='bg-slate-100 relative mt-48 pb-32'>
                <img className='absolute right-[10%] max-sm:right-[0%] max-md:w-72 max-sm:w-52 max-sm:top-[-3%]  top-[-10%] max-lg:top-[-5%]' src={centerImg} alt="" />
                <div className='' >
                    <h1 className='text-[40px] max-sm:text-[32px]  max-sm:leading-[38px] leading-[48px] text-center max-sm:text-left max-sm:pl-4 pt-48 pb-16 '>DISCOVER THE <span className='text-[#7D75D8] '>  BENEFITS</span></h1>
                    <div className='flex justify-center flex-wrap gap-x-10 gap-y-20 max-sm:gap-y-10 '>
                        <div className='bg-white w-[29%] max-xl:w-[48%] max-sm:w-[90%] p-10'>
                            <img src={cardImg1} alt="" />
                            <h1 className='font-serif text-[48px] text-[#21233B] max-sm:text-3xl py-4'>Author Cohorts</h1>
                            <h1 className=' max-sm:text-base font-sans text-[#303365] text-[20px] leading-[30px]'>Duis non orci justo. Nulla lobortis, elit ac i
                                mperdiet mollis, nisi ante blandit ligula, vel elem
                                entum urna velit eu lorem. Nullam in mauris sit amet quam
                                efficitur aliquam vel accumsan elit.</h1>
                        </div>
                        <div className='bg-white w-[29%] max-xl:w-[48%] max-sm:w-[90%] p-10'>
                            <img src={cardImg2} alt="" />
                            <h1 className='font-serif text-[40px] leading-[48px] max-sm:text-3xl py-4'>Early Access</h1>
                            <h1 className=' max-sm:text-base font-sans text-[#303365] text-[20px] leading-[30px]'>Duis non orci justo. Nulla lobortis, elit ac i
                                mperdiet mollis, nisi ante blandit ligula, vel elem
                                entum urna velit eu lorem. Nullam in mauris sit amet quam
                                efficitur aliquam vel accumsan elit.</h1>
                        </div> <div className='bg-white w-[29%] max-xl:w-[48%] max-sm:w-[90%] p-10'>
                            <img src={cardImg3} alt="" />
                            <h1 className='font-serif text-[40px] leading-[48px] max-sm:text-3xl py-4'>Platform Reader</h1>
                            <h1 className=' max-sm:text-base font-sans text-[#303365] text-[20px] leading-[30px]'>Duis non orci justo. Nulla lobortis, elit ac i
                                mperdiet mollis, nisi ante blandit ligula, vel elem
                                entum urna velit eu lorem. Nullam in mauris sit amet quam
                                efficitur aliquam vel accumsan elit.</h1>
                        </div> <div className='bg-white w-[29%] max-xl:w-[48%] max-sm:w-[90%] p-10'>
                            <img src={cardImg4} alt="" />
                            <h1 className='font-serif text-[40px] leading-[48px] max-sm:text-3xl py-4'>Author Cohorts</h1>
                            <h1 className=' max-sm:text-base font-sans text-[#303365] text-[20px] leading-[30px]'>Duis non orci justo. Nulla lobortis, elit ac i
                                mperdiet mollis, nisi ante blandit ligula, vel elem
                                entum urna velit eu lorem. Nullam in mauris sit amet quam
                                efficitur aliquam vel accumsan elit.</h1>
                        </div> <div className='bg-white w-[29%] max-xl:w-[48%] max-sm:w-[90%] p-10'>
                            <img src={cardImg5} alt="" />
                            <h1 className='font-serif text-[40px] leading-[48px] max-sm:text-3xl py-4'>Early Access</h1>
                            <h1 className=' max-sm:text-base font-sans text-[#303365] text-[20px] leading-[30px]'>Duis non orci justo. Nulla lobortis, elit ac i
                                mperdiet mollis, nisi ante blandit ligula, vel elem
                                entum urna velit eu lorem. Nullam in mauris sit amet quam
                                efficitur aliquam vel accumsan elit.</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center py-20 bg-slate-50'>
                <div className='text-center'>
                    <img src={lastImg} alt="" />
                    <h1 className='text-5xl max-sm:text-[40px]'>SUBSCRIBE</h1>
                    <h1 className='text-[20px] text-[#303365] py-4 my-2 font-sans'>Duis non orci justo. Nulla lobortis, elit ac imperdiet . </h1>
                    <input className='w-[70%] max-sm:w-[60%] p-[14px] rounded-md text-[16px] font-sans' type="text" placeholder='Enter your email address here' />
                    <button className='rounded-md text-white px-[48px] max-sm:px-[24px] py-[14px] bg-[#7D75D8] font-sans'>SEND</button>
                </div>
            </section>
            <footer className='bg-[#0E0F1E] text-[#F6F6F6] mt-8 py-16'>
                <div className='flex justify-around  text-xl  list-none max-lg:flex-col max-lg:gap-6 text-[#F6F6F6] max-lg:items-center'>
                    <div >
                        <li className='mb-6'><img src={logo} height={48} width={275} alt="" /></li>
                        <li className='max-lg:hidden text-sm font-sans text-[#F6F6F6]'>© 2022 Alexandria Labs. All Right Reserved</li>
                    </div>
                    <div className='flex gap-6  lg:hidden'>
                        <div>

                            <li className='mb-6 flex gap-4'><img src={twitter} width={50} alt="" /> </li>
                        </div>
                        <div>

                            <li className='flex  gap-4'><img src={footerImg} width={50} alt="" /></li>
                        </div>
                    </div>
                    <div className='flex justify-between flex-wrap gap-28 text-base max-sm:gap-10'>
                        <div>
                            <li className='mb-6 font-sans'>About</li>
                            <li>Early Access</li>
                        </div>
                        <div>
                            <li className='mb-6 font-sans'>Author Submissions</li>
                            <li className='font-sans'>Team</li>
                        </div>
                        <div className=' max-lg:hidden'>
                            <li className='mb-6 flex gap-4'><img src={twitter} alt="" /> <h1 className='font-sans'>  Twitter</h1></li>
                            <li className='flex gap-4'><img src={footerImg} alt="" /><h1 className='font-sans'>  Discord</h1></li>
                        </div>
                    </div>

                </div>
                <li className='text-white text-sm lg:hidden  list-none text-center font-sans mt-32'>© 2022 Alexandria Labs. All Right Reserved</li>
            </footer>
        </div>
    )
}

export default Main