import React, { useState } from 'react';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const galleryItems = [
        { id: 1, title: 'Akad Nikah Outdoor', category: 'Decoration', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
        { id: 2, title: 'Resepsi Modern Gold', category: 'Hall Setup', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
        { id: 3, title: 'Makeup Pengantin Syar\'i', category: 'Attire & MUA', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800' },
        { id: 4, title: 'Catering Premium Display', category: 'Catering', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800' },
    ];

    const packages = [
        {
            name: 'Silver Romantic',
            price: 'Rp 25.000.000',
            features: ['Dekorasi Pelaminan 6m', 'Rias & Busana Pengantin (2x)', 'Catering 300 Porsi', 'Sound System & MC Standard']
        },
        {
            name: 'Gold Royal Sehati',
            price: 'Rp 45.000.000',
            popular: true,
            features: ['Dekorasi Exclusive 8-10m', 'Rias & Busana Pengantin + Orang Tua', 'Catering Premium 600 Porsi', 'Dokumentasi Foto & Video Cinematic', 'Live Music / Band']
        },
        {
            name: 'Platinum Grand Putri',
            price: 'Rp 75.000.000',
            features: ['Dekorasi Custom Flexible', 'Full Service Wedding Organizer', 'Catering All-In 1000 Porsi', 'VIP Photobooth & Lighting', 'Honeymoon Package Bonus']
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
            
            {/* --- NAVBAR --- */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-[#22222a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center space-x-2">
                            <span className="font-serif text-2xl font-bold tracking-wider bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                                SEHATI PUTRI
                            </span>
                        </div>

                        <div className="hidden md:flex space-x-8 text-sm font-medium">
                            <a href="#about" className="hover:text-amber-400 transition-colors">Tentang Kami</a>
                            <a href="#packages" className="hover:text-amber-400 transition-colors">Paket Wedding</a>
                            <a href="#gallery" className="hover:text-amber-400 transition-colors">Our Gallery</a>
                            <a href="#contact" className="hover:text-amber-400 transition-colors">Kontak</a>
                        </div>

                        <a 
                            href="https://wa.me/6281234567890" 
                            target="_blank" 
                            rel="noreferrer"
                            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:opacity-90 transition-all shadow-lg shadow-amber-500/20"
                        >
                            Konsultasi Gratis
                        </a>

                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white"
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

                {isMenuOpen && (
                    <div className="md:hidden bg-[#121216] border-b border-[#22222a] px-4 pt-2 pb-6 space-y-4">
                        <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">Tentang Kami</a>
                        <a href="#packages" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">Paket Wedding</a>
                        <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">Our Gallery</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">Kontak</a>
                        <a 
                            href="https://wa.me/6281234567890" 
                            target="_blank" 
                            rel="noreferrer"
                            className="block text-center py-3 rounded-xl bg-amber-500 text-black font-semibold text-sm"
                        >
                            Konsultasi Gratis via WA
                        </a>
                    </div>
                )}
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-6 uppercase">
                        Professional Wedding Organizer
                    </span>
                    <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight mb-6">
                        Wujudkan Pernikahan Impian Tanpa Beban Bersama <br />
                        <span className="italic font-normal bg-gradient-to-r from-amber-300 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                            Sehati Putri Jasa Pesta
                        </span>
                    </h1>
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Melayani dekorasi, catering, makeup, hingga seluruh kebutuhan pesta pernikahan secara profesional dengan sentuhan mewah dan harga fleksibel.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#packages" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-amber-500/20">
                            Lihat Paket Pernikahan
                        </a>
                        <a href="#gallery" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#121216] border border-[#22222a] text-slate-300 font-semibold text-sm hover:bg-slate-800 transition-all">
                            Jelajahi Galeri
                        </a>
                    </div>
                </div>
            </section>

            {/* --- PACKAGES SECTION --- */}
            <section id="packages" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Pilihan Paket</span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4">Paket Wedding Spesial</h2>
                    <p className="text-slate-400 text-sm">Pilih paket yang paling pas dengan preferensi dan budget pernikahan impian Anda.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, idx) => (
                        <div 
                            key={idx} 
                            className={`relative rounded-3xl p-8 bg-[#121216] border transition-all duration-300 hover:-translate-y-2 ${
                                pkg.popular ? 'border-amber-500 shadow-xl shadow-amber-500/10' : 'border-[#22222a]'
                            }`}
                        >
                            {pkg.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full">
                                    Paling Populer
                                </span>
                            )}
                            <h3 className="font-serif text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                            <div className="my-6">
                                <span className="text-3xl font-bold text-amber-400">{pkg.price}</span>
                            </div>
                            <ul className="space-y-4 mb-8 text-sm text-slate-300">
                                {pkg.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-center">
                                        <svg className="w-4 h-4 text-amber-400 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <a 
                                href="https://wa.me/6281234567890" 
                                target="_blank" 
                                rel="noreferrer"
                                className={`block text-center w-full py-3.5 rounded-full font-semibold text-sm transition-all ${
                                    pkg.popular 
                                        ? 'bg-amber-500 text-black hover:bg-amber-400' 
                                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                                }`}
                            >
                                Pilih Paket Ini
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- GALLERY SECTION --- */}
            <section id="gallery" className="py-24 bg-[#0d0d11] border-y border-[#22222a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Dokumentasi</span>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4">Galeri Karya Kami</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {galleryItems.map((item) => (
                            <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-[#121216] border border-[#22222a]">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">{item.category}</span>
                                    <h4 className="text-lg font-serif font-bold text-white mt-1">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer id="contact" className="py-12 border-t border-[#22222a] bg-[#0a0a0c] text-xs text-slate-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div>
                        <span className="font-serif text-lg font-bold text-amber-400 block mb-1">SEHATI PUTRI JASA PESTA</span>
                        <p>© {new Date().getFullYear()} All rights reserved. Decoupled Monorepo Architecture.</p>
                    </div>
                    <div className="flex gap-6 text-slate-400">
                        <span>📍 Serang, Banten</span>
                        <span>📞 +62 812-3456-7890</span>
                    </div>
                </div>
            </footer>

        </div>
    );
}