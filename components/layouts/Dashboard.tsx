import React from 'react';
import { Button } from '../common';
import { Footer } from '../layouts';
import Image from 'next/image';

export default function Dashboard() {
    return (
        <div className='pt-[100px] relative'>
            {/* Hero Section */}
            <div className='flex relative'>
                {/* Left Content */}
                <div className='z-20 w-full md:w-[68%] px-6 md:px-[40px] lg:px-[100px] flex flex-col items-start gap-8'>
                    <h2 className='lg:text-[80px] md:text-[60px] text-[40px] text-left font-bold text-white font-orbitron'>
                        Giving the best <br className='hidden xl:block' /> e-commerce experience
                    </h2>
                    <Button
                        variant='custom'
                        className='text-[20px] font-orbitron font-bold w-[200px]'
                        icon='/assets/images/common/but1.png'
                        href='/products'
                    >
                        Explore
                    </Button>
                </div>

                {/* Right Image */}
                <div className='absolute right-0 top-0 md:relative w-[80%] md:w-[40%] z-10 opacity-50 md:opacity-100'>
                    <Image
                        src='/assets/images/common/Group5.png'
                        alt='hero image'
                        width={600}
                        height={600}
                        className='w-full md:w-[600px]'
                        priority
                    />
                </div>
            </div>

            {/* Wave Background */}
            <div className='absolute inset-x-0 z-0'>
                <Image
                    src='/assets/images/common/wave.svg'
                    alt='wave background'
                    width={1920}
                    height={1080}
                    className='w-full lg:mt-[-700px] md:mt-[-400px] mt-[-20px]'
                    priority
                />
            </div>

            {/* Featured Products Section */}
            <div className='mt-[200px] md:mt-[500px] lg:mt-[700px] z-30 relative'>
                <h3 className='lg:text-[85px] md:text-[60px] text-[40px] font-orbitron font-bold text-center text-white mb-12'>
                    Featured Products
                </h3>
                <div className='w-[100%] mx-auto px-4'>
                    <Image
                        src='/assets/images/common/5group.png'
                        alt='featured products'
                        width={1440}
                        height={800}
                        className='w-full'
                        priority
                    />
                </div>
            </div>
            {/* Our Products Section */}
            <div className='mt-[60px] z-30 relative'>
                <h3 className='lg:text-[85px] md:text-[60px] text-[40px] font-orbitron font-bold text-center text-white mb-12'>
                    Our Products
                </h3>
                <div className='relative group p-8 lg-p-12 '>
                    <Image
                        src='/assets/images/common/Group1.png'
                        alt='sneakers'
                        width={1440}
                        height={800}
                        className='w-full h-auto hover:scale-[1.02] transition-transform'
                        priority
                    />
                    <div className='absolute top-[20%] right-[10%] text-right'>
                        <h4 className='text-[40px] md:text-[60px] lg:text-[90px] text-white font-orbitron font-bold mb-4'>
                            Sneakers
                        </h4>
                        <div className='w-full flex justify-end'>
                            <Button
                                variant='custom'
                                className='text-[20px] font-orbitron font-bold hover:scale-105 transition-transform w-[200px]'
                                icon='/assets/images/common/but1.png'
                                href='/products/sneakers'
                                align='right'
                            >
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='relative group p-8 lg-p-12 '>
                    <Image
                        src='/assets/images/common/Group2.png'
                        alt='sneakers'
                        width={1440}
                        height={800}
                        className='w-full h-auto hover:scale-[1.02] transition-transform'
                        priority
                    />
                    <div className='absolute top-[20%] left-[10%] text-right'>
                        <h4 className='text-[40px] md:text-[60px] lg:text-[90px] text-white font-orbitron font-bold mb-4'>
                            Hoodies
                        </h4>
                        <div className='w-full flex justify-start'>
                            <Button
                                variant='custom'
                                className='text-[20px] font-orbitron font-bold hover:scale-105 transition-transform w-[200px]'
                                icon='/assets/images/common/but1.png'
                                href='/products/hoodies'
                                align='right'
                            >
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='relative group p-8 lg-p-12 '>
                    <Image
                        src='/assets/images/common/Group3.png'
                        alt='sneakers'
                        width={1440}
                        height={800}
                        className='w-full h-auto hover:scale-[1.02] transition-transform'
                        priority
                    />
                    <div className='absolute top-[20%] right-[10%] text-right'>
                        <h4 className='text-[40px] md:text-[60px] lg:text-[90px] text-white font-orbitron font-bold mb-4'>
                            Backpacks
                        </h4>
                        <div className='w-full flex justify-end'>
                            <Button
                                variant='custom'
                                className='text-[20px] font-orbitron font-bold hover:scale-105 transition-transform w-[200px]'
                                icon='/assets/images/common/but1.png'
                                href='/products/backpacks'
                                align='right'
                            >
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='relative group p-8 lg-p-12 '>
                    <Image
                        src='/assets/images/common/Group4.png'
                        alt='sneakers'
                        width={1440}
                        height={800}
                        className='w-full h-auto hover:scale-[1.02] transition-transform'
                        priority
                    />
                    <div className='absolute top-[20%] left-[10%] text-right'>
                        <h4 className='text-[40px] md:text-[60px] lg:text-[90px] text-white font-orbitron font-bold mb-4'>
                            T-shirts
                        </h4>
                        <div className='w-full flex justify-start'>
                            <Button
                                variant='custom'
                                className='text-[20px] font-orbitron font-bold hover:scale-105 transition-transform w-[200px]'
                                icon='/assets/images/common/but1.png'
                                href='/products/t-shirts'
                                align='right'
                            >
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* Footer */}
            <div className='mt-[60px] z-30 relative'>
                <Footer />
            </div>
        </div>
    );
}