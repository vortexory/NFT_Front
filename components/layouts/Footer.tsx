import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="min-h-[600px] w-full bg-[url('/assets/images/common/footer.png')] bg-cover bg-no-repeat p-[10px] md:p-[20px] lg:p-[50px] flex flex-col justify-between items-start">
            <div className="mt-10 bg-white/10 border border-white/20 backdrop-blur-sm w-full flex-1 flex items-center rounded-2xl">
                <div className="flex justify-start sm:justify-around items-center flex-row flex-wrap w-full px-6 py-10 md:px-10 lg:px-20">
                    <Image 
                        className='hidden lg:block' 
                        src="/assets/images/common/logo.png" 
                        alt="logo" 
                        width={243} 
                        height={136} 
                        priority
                    />
                    <div className='flex flex-col gap-4 p-6 md:p-10'>
                        <h5 className="text-white text-[32px] md:text-[36px] font-orbitron font-bold">Links</h5>
                        <div className="text-[16px] md:text-[18px] text-gray-300 font-medium flex flex-col gap-3">
                            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
                            <Link href="/" className="hover:text-white transition-colors duration-200">Explorer</Link>
                            <Link href="/" className="hover:text-white transition-colors duration-200">Verify Warranty</Link>
                            <Link href="/" className="hover:text-white transition-colors duration-200">Create NFT</Link>
                            <Link href="/" className="hover:text-white transition-colors duration-200">Profile</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-6 md:p-10'>
                        <h5 className="text-white text-[32px] md:text-[36px] font-orbitron font-bold">Categories</h5>
                        <div className="text-[16px] md:text-[18px] text-gray-300 font-medium flex flex-col gap-3">
                            <Link href="/" className="hover:text-white transition-colors duration-200">Bags</Link>
                            <Link href="/" className="hover:text-white transition-colors duration-200">Sneakers</Link>
                            <Link href="/" className="hover:text-white transition-colors duration-200">T-Shirts</Link>
                            <Link href="/" className="hover:text-white transition-colors duration-200">Hoddies</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center py-6">
                <p className="text-white text-[16px] md:text-[18px] font-medium text-center flex justify-center items-center gap-3">
                    <Image 
                        src="/assets/images/common/Vector.png" 
                        alt="copyright" 
                        width={18} 
                        height={18}
                        priority 
                    />
                    NFT Ecommerce Website
                </p>
            </div>
        </footer>
    );
};

export default Footer;