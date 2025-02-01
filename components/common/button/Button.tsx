'use client'

import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: StaticImageData | string;
    variant?: 'primary' | 'secondary' | 'custom';
    fullWidth?: boolean;
    className?: string;
    align?: 'left' | 'center' | 'right';
    href?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    icon,
    variant = 'primary',
    fullWidth = false,
    className = '',
    align = 'center',
    href,
    ...props
}) => {
    const customButton = (
        <div 
            className={`relative w-full h-[50px] flex ${align === 'left' ? 'justify-start' : align === 'right' ? 'justify-end' : 'justify-center'} ${className}`} 
        >
            <div className="relative w-full h-full">
                <Image 
                    src={icon || ''}
                    alt="button background"
                    fill
                    priority
                    sizes="100%"
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold z-10">
                {children}
            </span>
        </div>
    );

    if (variant === 'custom' && icon) {
        return href ? (
            <Link href={href} className="block">
                {customButton}
            </Link>
        ) : (
            <button type="button" {...props}>
                {customButton}
            </button>
        );
    }

    const baseStyles = `
        ${fullWidth ? 'w-full' : 'w-fit'}
        px-4 py-2
        text-white 
        font-semibold 
        rounded
        ${variant === 'primary' ? 'bg-primary-brown hover:bg-hover-brown' : ''}
        ${variant === 'secondary' ? 'bg-transparent border border-white hover:bg-hover-grey' : ''}
        ${className}
    `.trim();

    const regularButton = (
        <button className={baseStyles} type="button" {...props}>
            {children}
        </button>
    );

    return href ? <Link href={href}>{regularButton}</Link> : regularButton;
};

export default Button;
