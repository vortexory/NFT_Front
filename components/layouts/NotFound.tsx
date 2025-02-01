'use client'

import React, { useState, useEffect } from 'react';
import Main from './Main';
import Navbar from './Navbar';
import Image from 'next/image';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Main>
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center pt-[200px]">
          <div>
            <Image 
              src="/assets/images/common/404.png" 
              alt="404" 
              width={716}
              height={400}
              priority
              className="object-contain"
            />
          </div>
          <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-orbitron font-bold text-white text-center mt-[-20px]  md:mt-[-100px] lg:mt-[-150px]">Page Not Found</h1>
        </div>
      </div>
    </Main>
  );
}

