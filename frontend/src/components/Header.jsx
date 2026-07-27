import React, { useState } from 'react';
import logoApp from '../assets/logosehati.png';

export default function Header({ activePage, navigateTo }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

    const handleNavClick = (page, sectionId) => {
        setIsMenuOpen(false);
        setIsProductDropdownOpen(false);

        if (activePage !== page) {
            navigateTo(page);
            if (sectionId) {
                setTimeout(() => {
                    const el = document.getElementById(sectionId);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 150);
            }
        } else if (sectionId) {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#22222a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    
                    {/* Logo Aplikasi */}
                    <div 
                        className="flex items-center cursor-pointer group" 
                        onClick={() => { navigateTo('home'); setIsMenuOpen(false); }}
                    >
                        <img 
                            src={logoApp} 
                            alt="Logo Sehati Putri" 
                            className="h-9 sm:h-12 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Navigasi Desktop */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <button 
                            onClick={() => navigateTo('home')} 
                            className={`transition-colors ${activePage === 'home' ? 'text-amber-400 font-bold' : 'hover:text-amber-400'}`}
                        >
                            Beranda
                        </button>

                        <div 
                            className="relative group py-2"
                            onMouseEnter={() => setIsProductDropdownOpen(true)}
                            onMouseLeave={() => setIsProductDropdownOpen(false)}
                        >
                            <button 
                                onClick={() => navigateTo('product')} 
                                className={`inline-flex items-center space-x-1 transition-colors ${activePage === 'product' ? 'text-amber-400 font-bold' : 'hover:text-amber-400'}`}
                            >
                                <span>Produk</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isProductDropdownOpen && (
                                <div className="absolute top-full left-0 w-52 bg-[#121216] border border-[#22222a] rounded-2xl shadow-xl py-2 z-50 backdrop-blur-md">
                                    <button 
                                        onClick={() => handleNavClick('product', 'perlengkapan-sewa')}
                                        className="w-full text-left px-4 py-2.5 text-xs text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 transition-colors flex items-center space-x-2"
                                    >
                                        <span>📦</span>
                                        <span>Perlengkapan Sewa</span>
                                    </button>
                                    <button 
                                        onClick={() => handleNavClick('product', 'paket-rental')}
                                        className="w-full text-left px-4 py-2.5 text-xs text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 transition-colors flex items-center space-x-2"
                                    >
                                        <span>✨</span>
                                        <span>Paket Rental</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        <button 
                            onClick={() => navigateTo('gallery')} 
                            className={`transition-colors ${activePage === 'gallery' ? 'text-amber-400 font-bold' : 'hover:text-amber-400'}`}
                        >
                            Galeri Kami
                        </button>

                        <button 
                            onClick={() => navigateTo('about')} 
                            className={`transition-colors ${activePage === 'about' ? 'text-amber-400 font-bold' : 'hover:text-amber-400'}`}
                        >
                            Tentang Kami
                        </button>

                        <button 
                            onClick={() => navigateTo('contact')} 
                            className={`transition-colors ${activePage === 'contact' ? 'text-amber-400 font-bold' : 'hover:text-amber-400'}`}
                        >
                            Kontak
                        </button>
                    </div>

                    {/* Tombol Aksi Utama Desktop */}
                    <button 
                        onClick={() => navigateTo('contact')}
                        className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:opacity-90 transition-all shadow-lg shadow-amber-500/20"
                    >
                        Hubungi Kami
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-xl bg-[#121216] border border-[#22222a] text-slate-300 hover:text-white focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#121216] border-b border-[#22222a] px-4 pt-3 pb-6 space-y-2 animate-fade-in">
                    <button 
                        onClick={() => { navigateTo('home'); setIsMenuOpen(false); }} 
                        className={`block w-full text-left py-2.5 px-3 rounded-lg text-base font-medium ${activePage === 'home' ? 'bg-amber-500/10 text-amber-400' : 'text-slate-300'}`}
                    >
                        Beranda
                    </button>
                    
                    <div className="space-y-1 bg-[#0a0a0c]/50 p-2 rounded-xl border border-[#22222a]">
                        <button 
                            onClick={() => { navigateTo('product'); setIsMenuOpen(false); }} 
                            className="block w-full text-left text-base font-semibold text-amber-400 py-1 px-2"
                        >
                            Produk (Katalog Utama)
                        </button>
                        <button 
                            onClick={() => handleNavClick('product', 'perlengkapan-sewa')} 
                            className="block w-full text-left text-sm text-slate-300 hover:text-amber-400 py-1.5 px-4"
                        >
                            ├ Perlengkapan Sewa
                        </button>
                        <button 
                            onClick={() => handleNavClick('product', 'paket-rental')} 
                            className="block w-full text-left text-sm text-slate-300 hover:text-amber-400 py-1.5 px-4"
                        >
                            └ Paket Rental
                        </button>
                    </div>

                    <button 
                        onClick={() => { navigateTo('gallery'); setIsMenuOpen(false); }} 
                        className={`block w-full text-left py-2.5 px-3 rounded-lg text-base font-medium ${activePage === 'gallery' ? 'bg-amber-500/10 text-amber-400' : 'text-slate-300'}`}
                    >
                        Galeri Kami
                    </button>
                    <button 
                        onClick={() => { navigateTo('about'); setIsMenuOpen(false); }} 
                        className={`block w-full text-left py-2.5 px-3 rounded-lg text-base font-medium ${activePage === 'about' ? 'bg-amber-500/10 text-amber-400' : 'text-slate-300'}`}
                    >
                        Tentang Kami
                    </button>
                    <button 
                        onClick={() => { navigateTo('contact'); setIsMenuOpen(false); }} 
                        className={`block w-full text-left py-2.5 px-3 rounded-lg text-base font-medium ${activePage === 'contact' ? 'bg-amber-500/10 text-amber-400' : 'text-slate-300'}`}
                    >
                        Kontak
                    </button>
                    
                    <button 
                        onClick={() => { navigateTo('contact'); setIsMenuOpen(false); }}
                        className="block w-full text-center py-3 rounded-xl bg-amber-500 text-black font-semibold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 mt-4"
                    >
                        Hubungi Kami
                    </button>
                </div>
            )}
        </nav>
    );
}