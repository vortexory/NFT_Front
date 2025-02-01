import React from 'react';

const Footer = () => {
    return (
        <div className="w-full py-4 px-6 lg:py-10 lg:px-18 bg-black text-text-darken-2 flex flex-col justify-start items-start gap-10">
            <div className="w-full flex flex-col lg:flex-row gap-2 justify-between items-start">
                <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-10">
                    <div>
                        support@elevanceit.com
                    </div>
                    <div className="cursor-pointer hover:text-primary-brown">
                        Terms of Service
                    </div>
                    <div className="cursor-pointer hover:text-primary-brown">
                        Privacy Policy
                    </div>
                </div>
                <div>
                    © 2024 ELEVANCE LTD. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;