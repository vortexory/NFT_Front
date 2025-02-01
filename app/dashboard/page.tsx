'use client'

import React, { useState } from 'react';
import { Main, Dashboard } from '@/components/layouts';
import { redirect } from 'next/navigation';

export default function Page() {
    const [token, setToken] = useState<string | null>(null);
    return !token ? (
        <Main>
            <Dashboard />
        </Main>
    ) : (
        redirect('/auth/login')
    );
}