import React from 'react';
import { MainLayout } from '@/components/layouts';

export default function Home() {
    return (
        <MainLayout>
            <div className='h-screen'>
                <div className='pt-10'>
                    <h2 className='text-2xl text-center'>Hello</h2>
                    <p className='text-lg text-center'>Welcome</p>
                </div>
            </div>
        </MainLayout>

    );
}