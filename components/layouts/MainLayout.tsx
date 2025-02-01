'use client'

import React, { useEffect, useState } from 'react';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen w-full bg-[url('/assets/images/common/back2.png')] bg-cover bg-no-repeat">
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}