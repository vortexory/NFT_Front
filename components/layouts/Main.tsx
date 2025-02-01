'use client'

import React from 'react';

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-[url('/assets/images/common/background.png')] bg-cover bg-no-repeat">
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}