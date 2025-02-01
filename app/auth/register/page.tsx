'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Input } from '@/components/common';
import { Main } from '@/components/layouts';

interface RegisterForm {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
}

interface FormErrors {
    email?: string;
    password?: string;
    confirmPassword?: string;
    firstName?: string;
    lastName?: string;
}

export default function Page() {
    const [formData, setFormData] = useState<RegisterForm>({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
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
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'The email address does not exist';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }
        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Register submitted:', formData);
        }
    };

    return (
        <Main>
            <div className='min-h-screen'>
                <div className='flex h-screen py-[100px] px-[30px] md:px-[100px] lg:px-[160px]'>
                    <div className='w-full lg:w-1/2 relative'>
                        <div className='absolute inset-0'>
                            <Image
                                className='w-full h-full'
                                src='/assets/images/common/board.png'
                                alt='background'
                                width={1000}
                                height={1000}
                                priority
                            />
                        </div>
                        <div className='relative z-10 p-[30px] md:p-[60px]'>
                            <h2 className='text-center text-white font-orbitron font-bold mb-[50px] text-[36px] lg:text-[48px]'>
                                Create Account
                            </h2>
                            <div className='flex flex-col gap-4'>
                                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                                    <div className='flex gap-4'>
                                        <Input
                                            type='text'
                                            name='firstName'
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder='First Name'
                                            error={errors.firstName}
                                        />
                                        <Input
                                            type='text'
                                            name='lastName'
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder='Last Name'
                                            error={errors.lastName}
                                        />
                                    </div>
                                    <Input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Email Id'
                                        error={errors.email}
                                    />
                                    <Input
                                        type='password'
                                        name='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder='Password'
                                        error={errors.password}
                                    />
                                    <Input
                                        type='password'
                                        name='confirmPassword'
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder='Confirm Password'
                                        error={errors.confirmPassword}
                                    />
                                    <Button
                                        type='submit'
                                        variant='custom'
                                        className='text-[20px] font-orbitron font-bold mt-[30px]'
                                        icon='/assets/images/common/but1.png'
                                    >
                                        Create Account
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex w-full lg:w-1/2 items-center justify-center p-[100px]'>
                        <Image
                            src='/assets/images/common/image_mix.png'
                            alt='register'
                            width={600}
                            height={600}
                            className='object-contain'
                            priority
                        />
                    </div>
                </div>
            </div>
        </Main>
    );
}