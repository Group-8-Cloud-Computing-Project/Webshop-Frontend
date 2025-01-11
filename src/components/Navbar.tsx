import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-black shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold">
                            My Web Shop
                        </a>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="/">
                            Home
                        </a>
                        <a href="/products">
                            Products
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            type="button"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;