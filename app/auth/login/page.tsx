'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Input } from '@/components/common';
import { MainLayout } from '@/components/layouts';

interface LoginForm {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
    password?: string;
}

export default function Page() {
    const [formData, setFormData] = useState<LoginForm>({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validateForm = () => {
        const newErrors: FormErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'The email address does not exist';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is incorrect';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Login submitted:', formData);
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
                    <div className='w-[100%] md:w-[70%] lg:w-[40%] p-[30px] md:p-[60px]'>
                        <h2 className='text-center text-white font-orbitron font-bold mb-[30px] md:mb-[60px] lg:mb-[100px] text-[40px] lg:text-[60px]'>
                            LOG IN
                        </h2>
                        <div className='flex flex-col gap-4'>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                                <Input 
                                    type='email' 
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Email Address'
                                    error={errors.email}
                                />
                                <div className='flex flex-col gap-2'>
                                    <Input 
                                        type='password' 
                                        name='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder='Password'
                                        error={errors.password}
                                    />
                                    <Link 
                                        href="/auth/recover_password"
                                        className='self-end text-[#E4ABFF] text-[14px] font-orbitron font-medium hover:text-white transition-colors duration-200'
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                                <Button
                                    type='submit'
                                    variant='custom'
                                    className='text-[20px] font-orbitron font-bold'
                                    icon='/assets/images/common/but1.png'
                                >
                                    Login
                                </Button>
                            </form>
                            <div className='flex justify-center gap-2 flex-col mt-8'>
                                <p className='text-white text-center text-[20px] font-orbitron font-semibold'>Don't have an account?</p>
                                <Link href="/auth/register">
                                    <Button
                                        type='button'
                                        variant='custom'
                                        className='text-[17px] font-orbitron font-bold'
                                        icon='/assets/images/common/button2.png'
                                    >
                                        Create Account
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}