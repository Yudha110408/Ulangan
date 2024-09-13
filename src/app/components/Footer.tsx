import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[rgb(28,28,51)] text-white py-12">
            <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3">

                <div className="flex flex-col mb-3 transition-transform transform hover:scale-105">
                    <img src="/Logo.png" alt="Logo" className="mb-2 w-32 transition-transform transform hover:scale-110" />
                    <p className="text-lg font-lexend-deca mb-2 hover:text-gray-300 transition-colors">
                        Collaboration platform with modern term
                    </p>
                </div>


                <div className="flex flex-col mb-3 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-lexend-deca mb-1 text-blue-300 transition-colors hover:text-blue-100">
                        Company
                    </h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Product</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Blog</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Support</a></li>
                    </ul>
                </div>

                <div className="flex flex-col mb-3 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-lexend-deca mb-1 text-blue-300 transition-colors hover:text-blue-100">
                        Features
                    </h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Screen Sharing</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">iOS & Android Apps</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">File Sharing</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300 transition-colors">User Management</a></li>
                    </ul>
                </div>

                <div className="flex flex-col mb-3 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-lexend-deca mb-1 text-blue-300 transition-colors hover:text-blue-100">
                        Contact Us
                    </h3>
                    <ul className="space-y-1">
                        <li><a href="mailto:info@teamapp.com" className="text-white hover:text-gray-300 transition-colors">Info@teamapp.com</a></li>
                        <li><a href="tel:1-800-200-300" className="text-white hover:text-gray-300 transition-colors">1-800-200-300</a></li>
                        <li className="text-white">1010 Sunset BLV, Polo Alto, California</li>
                    </ul>
                </div>

                <div className="flex flex-col mb-3 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-lexend-deca mb-1 text-blue-300 transition-colors hover:text-blue-100">
                        Stay Up to Date
                    </h3>
                    <p className="mb-2 text-white hover:text-gray-300 transition-colors">Subscribe to our newsletter</p>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <button className="p-2 bg-blue-700 rounded-r-md text-white hover:bg-blue-600 transition-colors">
                            &#9654;
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-center pt-4 text-sm text-gray-300 transition-colors hover:text-gray-100">
                &copy; Copyright Team Inc.
            </div>
        </div>
    );
};

export default Footer;