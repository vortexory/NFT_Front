'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Input } from '@/components/common';
import { MainLayout } from '@/components/layouts';

export default function Page() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (error) setError('');
    };

    const validateForm = () => {
        if (!email.trim()) {
            setError('The email address does not exist');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return false;
        }
        return true;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Recovery code requested for:', email);
        }
    };

    return (
        <MainLayout>
            <div className='min-h-screen px-[10px]'>
                <div className='pt-[60px] px-[20px] md:px-[50px] lg:px-[100px]'>
                    <Image 
                        src='/assets/images/common/logo.png' 
                        alt='logo'
                        width={120} 
                        height={72}
                        priority 
                    />
                </div>
                <div className='flex justify-end pr-[0px] md:pr-[50px] lg:pr-[100px]'>
                    <div className='w-[100%] md:w-[50%] lg:w-[40%] pt-10'>
                        <h2 className='text-center text-white font-orbitron font-bold mb-[30px] md:mb-[60px] lg:mb-[100px] text-[40px] lg:text-[60px]'>
                            Recover Password
                        </h2>
                        <div className='flex flex-col gap-4'>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                                <Input 
                                    type='email' 
                                    name='email'
                                    value={email}
                                    onChange={handleChange}
                                    placeholder='Email Address '
                                    placeholderSuffix='(Linked with account)'
                                    error={error}
                                />
                                <Button
                                    type='submit'
                                    variant='custom'
                                    className='text-[20px] font-orbitron font-bold'
                                    icon='/assets/images/common/but1.png'
                                >
                                    Get Code
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}