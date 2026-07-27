import React, { useState, useEffect } from 'react';

export default function DashboardPage({ navigateTo }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            id: 1,
            title: 'Sehati Putri Jasa Pesta',
            subtitle: 'Sewa Peralatan Pesta & MUA Lengkap',
            desc: 'Melayani persewaan tenda, panggung, rigging, genset, sound system, MUA & busana pengantin profesional.',
            img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920'
        },
        {
            id: 2,
            title: 'MUA & Busana Pengantin',
            subtitle: 'Rias Pengantin Anggun & Memukau',
            desc: 'Layanan Rias Pengantin (MUA), busana akad & resepsi, serta rias panitia/orang tua dengan hasil flawless.',
            img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1920'
        },
        {
            id: 3,
            title: 'Tenda, Panggung & Rigging',
            subtitle: 'Konstruksi Pesta Mewah & Kokoh',
            desc: 'Tersedia tenda dekorasi, sarnafil, panggung utama, rigging lighting & sound untuk acara indoor maupun outdoor.',
            img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    const nextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));

    const mainServices = [
        {
            title: 'MUA & Pengantin',
            desc: 'Layanan Rias Pengantin (MUA) Flawless, Busana Akad & Resepsi, serta Rias Orang Tua & Pendamping.',
            img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Peralatan & Tenda',
            desc: 'Persewaan Tenda Dekorasi/Sarnafil, Panggung, Rigging, Genset Silent, Sound System, AC Standing, dan Meja Kursi.',
            img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Paket Rental',
            desc: 'Pilihan Paket All-in-One hemat untuk Syukuran Rumah, Acara Event/Konser, hingga Paket Bundling Wedding + MUA.',
            img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
        }
    ];

    const galleryItems = [
        { id: 1, title: 'Makeup & Busana Pengantin', category: 'MUA & Attire', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800' },
        { id: 2, title: 'Set Tenda & Dekorasi Pesta', category: 'Tenda', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
        { id: 3, title: 'Setup Panggung & Rigging', category: 'Panggung & Rigging', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
        { id: 4, title: 'Sound System & Lighting', category: 'Sound & Light', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800' },
    ];

    return (
        <div className="overflow-x-hidden">
            {/* HERO CAROUSEL */}
            <section id="top" className="relative h-[85vh] min-h-[600px] max-h-[850px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {heroSlides.map((slide, index) => (
                        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/60 to-black/40" />
                        </div>
                    ))}
                </div>

                {/* Content Hero (pt-32 sm:pt-20 agar teks & tombol di mobile lebih turun) */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32 sm:pt-20">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest text-amber-400 bg-amber-500/20 border border-amber-500/30 mb-4 uppercase backdrop-blur-md">
                        MUA, Peralatan Pesta & Event
                    </span>
                    <h1 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3 text-white">
                        {heroSlides[currentSlide].subtitle} <br />
                        <span className="italic font-normal bg-gradient-to-r from-amber-300 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                            {heroSlides[currentSlide].title}
                        </span>
                    </h1>
                    <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-light">
                        {heroSlides[currentSlide].desc}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0">
                        <button 
                            onClick={() => navigateTo('contact')}
                            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-xs sm:text-sm hover:opacity-90 transition-all shadow-lg shadow-amber-500/20"
                        >
                            Pesan via Form WA
                        </button>
                        <button 
                            onClick={() => navigateTo('product')}
                            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-slate-100 font-semibold text-xs sm:text-sm hover:bg-black/70 transition-all"
                        >
                            Lihat Produk & Paket
                        </button>
                    </div>
                </div>

                {/* Arrow Controls */}
                <button onClick={prevSlide} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 text-white border border-white/20 hover:bg-amber-500 hover:text-black transition-all backdrop-blur-sm text-sm">
                    ‹
                </button>
                <button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 text-white border border-white/20 hover:bg-amber-500 hover:text-black transition-all backdrop-blur-sm text-sm">
                    ›
                </button>
            </section>

            {/* SEKSI TENTANG SEHATI PUTRI */}
            <section id="about" className="py-16 sm:py-24 bg-[#0d0d11] border-b border-[#22222a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-6 relative">
                            <div className="relative rounded-3xl overflow-hidden border border-[#22222a] shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
                                    alt="Tentang Sehati Putri" 
                                    className="w-full h-[320px] sm:h-[480px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            </div>
                            <div className="absolute -bottom-4 right-2 sm:bottom-6 sm:right-6 bg-[#121216] border border-amber-500/40 rounded-2xl p-4 sm:p-6 shadow-xl backdrop-blur-md">
                                <span className="text-2xl sm:text-3xl font-bold text-amber-400 block font-serif">10+ Tahun</span>
                                <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Pengalaman Jasa Pesta</span>
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-4 sm:space-y-6 pt-4 lg:pt-0">
                            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Tentang Kami</span>
                            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                                Solusi Perlengkapan Pesta & Rias Pengantin Terbaik di Serang
                            </h2>
                            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
                                <strong className="text-amber-400 font-semibold">Sehati Putri Jasa Pesta</strong> adalah penyedia jasa persewaan peralatan event, panggung, tenda, sound system, genset, serta layanan MUA terpercaya di Kota Serang, Banten.
                            </p>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                Kami berkomitmen memberikan kualitas peralatan terbaik, bersih, kokoh, serta didukung oleh tim profesional yang siap memastikan acara Anda berjalan sempurna.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                                <div className="bg-[#121216] border border-[#22222a] p-4 rounded-2xl">
                                    <h4 className="text-amber-400 font-bold text-base mb-1">Peralatan Lengkap</h4>
                                    <p className="text-slate-400 text-xs">Mulai dari Tenda, Rigging, Genset hingga Alat Prasmanan.</p>
                                </div>
                                <div className="bg-[#121216] border border-[#22222a] p-4 rounded-2xl">
                                    <h4 className="text-amber-400 font-bold text-base mb-1">MUA Flawless</h4>
                                    <p className="text-slate-400 text-xs">Riasan pengantin elegan dan anggun untuk momen berharga Anda.</p>
                                </div>
                            </div>

                            <div className="pt-2">
                                <button 
                                    onClick={() => navigateTo('contact')}
                                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-500 text-black font-semibold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
                                >
                                    Konsultasi Acara Anda
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* JASA LAYANAN */}
            <section id="services" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Pilihan Layanan</span>
                    <h2 className="font-serif text-2xl sm:text-4xl font-bold mt-2 mb-3 text-white">Layanan Utama Kami</h2>
                    <p className="text-slate-400 text-xs sm:text-sm">Temukan layanan yang sesuai dengan kebutuhan acara dan pesta Anda.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {mainServices.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="group bg-[#121216] border border-[#22222a] rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
                        >
                            <div className="relative h-48 sm:h-56 overflow-hidden">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                            </div>
                            <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                </div>
                                <button 
                                    onClick={() => navigateTo('product')} 
                                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors text-left"
                                >
                                    Lihat Detail di Page Produk &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* GALLERY (Format 2-2 di Mobile) */}
            <section id="gallery" className="py-12 sm:py-24 bg-[#0d0d11] border-t border-[#22222a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-amber-400">Dokumentasi</span>
                        <h2 className="font-serif text-xl sm:text-4xl font-bold mt-1 sm:mt-2 text-white">Galeri Event, MUA & Peralatan</h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                        {galleryItems.map((item) => (
                            <div key={item.id} className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#121216] border border-[#22222a]">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="h-40 sm:h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-3 sm:p-6 flex flex-col justify-end">
                                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                                        {item.category}
                                    </span>
                                    <h4 className="text-xs sm:text-lg font-serif font-bold text-white mt-0.5 line-clamp-2 leading-snug">
                                        {item.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}