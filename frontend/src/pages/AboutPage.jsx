import React from 'react';

export default function AboutPage({ navigateTo }) {
    const highlights = [
        {
            title: 'Peralatan Terawat & Bersih',
            desc: 'Seluruh unit tenda, panggung, dan linen selalu dibersihkan dan dicek kelayakannya secara rutin sebelum dikirim.',
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Tim Lapangan Berpengalaman',
            desc: 'Teknisi sound, operator genset, dan crew bongkar-pasang panggung bekerja cepat dan presisi di lokasi.',
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: 'MUA Flawless & Tahan Lama',
            desc: 'Pengaplikasian makeup profesional dengan produk premium agar riasan pengantin tetap awet seharian.',
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            title: 'Tepat Waktu & Transparan',
            desc: 'Ketepatan waktu penataan lokasi sesuai jadwal acara tanpa ada biaya tersembunyi yang membingungkan.',
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">Profil Perusahaan</span>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">Tentang Sehati Putri Jasa Pesta</h1>
                <p className="text-slate-400 text-base sm:text-base leading-relaxed">
                    Mengenal lebih dekat penyedia persewaan peralatan pesta & MUA terpercaya di Kota Serang.
                </p>
            </div>

            {/* Main Story Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                <div className="lg:col-span-6 relative">
                    <div className="relative rounded-3xl overflow-hidden border border-[#22222a] shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
                            alt="Tentang Sehati Putri" 
                            className="w-full h-[400px] sm:h-[480px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
                    </div>

                    {/* BADGE 10+ TAHUN (Disamakan posisinya dengan DashboardPage) */}
                    <div className="absolute right-3 bottom-8 sm:right-6 sm:bottom-6 bg-[#121216]/95 border border-amber-500/40 rounded-2xl p-3.5 sm:p-6 shadow-2xl backdrop-blur-md z-10 max-w-[160px] sm:max-w-none">
                        <span className="text-xl sm:text-3xl font-bold text-amber-400 block font-serif">10+ Tahun</span>
                        <span className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight block">Pengalaman di Bidang Event</span>
                    </div>
                </div>

                <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold uppercase tracking-wider">
                        <span>Solusi Terlengkap</span>
                    </div>
                    
                    <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                        Mitra Andal untuk Pesta Pernikahan & Acara Besar Anda
                    </h2>
                    
                    <p className="text-slate-300 text-base sm:text-base leading-relaxed font-light">
                        <strong className="text-amber-400 font-semibold">Sehati Putri Jasa Pesta</strong> adalah pusat layanan persewaan perlengkapan pesta, konstruksi panggung, tenda, sound system, genset, serta Makeup Artist (MUA) yang berpusat di Kota Serang, Banten.
                    </p>
                    
                    <p className="text-slate-400 text-base leading-relaxed">
                        Kami mengutamakan kualitas peralatan yang bersih, kokoh, dan modern. Didukung oleh tim berpengalaman, kami siap membantu mewujudkan kelancaran berbagai skala acara, mulai dari syukuran rumah sederhana, resepsi pernikahan mewah, hingga konser/event skala besar.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="bg-[#121216] border border-[#22222a] p-5 rounded-2xl hover:border-amber-500/40 transition-colors">
                            <h4 className="text-amber-400 font-bold text-base mb-1">Perlengkapan Lengkap</h4>
                            <p className="text-slate-400 text-sm">Satu pintu untuk Tenda, Panggung, Sound, Genset, hingga Alat Prasmanan.</p>
                        </div>
                        <div className="bg-[#121216] border border-[#22222a] p-5 rounded-2xl hover:border-amber-500/40 transition-colors">
                            <h4 className="text-amber-400 font-bold text-base mb-1">Layanan MUA Rias</h4>
                            <p className="text-slate-400 text-sm">Riasan pengantin flawless & anggun disesuaikan dengan busana pilihan Anda.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Metrics Counter Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                <div className="bg-[#121216] border border-[#22222a] rounded-2xl p-6 text-center">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 block mb-1">500+</span>
                    <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Event Terlayani</span>
                </div>
                <div className="bg-[#121216] border border-[#22222a] rounded-2xl p-6 text-center">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 block mb-1">99%</span>
                    <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Kepuasan Klien</span>
                </div>
                <div className="bg-[#121216] border border-[#22222a] rounded-2xl p-6 text-center">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 block mb-1">100%</span>
                    <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Alat Terawat</span>
                </div>
                <div className="bg-[#121216] border border-[#22222a] rounded-2xl p-6 text-center">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 block mb-1">24 Jam</span>
                    <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Respon Layanan</span>
                </div>
            </div>

            {/* Visi & Misi */}
            <div className="bg-[#121216] border border-[#22222a] rounded-3xl p-8 sm:p-12 mb-20 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-white">Visi Kami</h3>
                        <p className="text-slate-400 text-base sm:text-sm leading-relaxed">
                            Menjadi penyedia jasa pesta & event specialist pilihan utama di Serang dan Banten yang dikenal atas keandalan tim, kerapian alat, serta kepuasan pelanggan yang tinggi.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-white">Misi Kami</h3>
                        <ul className="text-slate-400 text-base sm:text-sm leading-relaxed space-y-2">
                            <li className="flex items-start space-x-2">
                                <span className="text-amber-400 shrink-0">✓</span>
                                <span>Menyediakan armada & perlengkapan pesta dalam kondisi fisik prima dan aman.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-amber-400 shrink-0">✓</span>
                                <span>Menyajikan riasan MUA pengantin yang halus, elegan, dan menawan.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-amber-400 shrink-0">✓</span>
                                <span>Mengutamakan ketepatan waktu serta keramahan pelayanan di lapangan.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Seksi Why Choose Us */}
            <div className="mb-12 sm:mb-20">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                    <span className="text-[12px] sm:text-xs font-semibold uppercase tracking-widest text-amber-400">Keunggulan Kami</span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">Mengapa Memilih Sehati Putri?</h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                    {highlights.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="bg-[#121216] border border-[#22222a] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 hover:border-amber-500/40 transition-all group flex flex-col justify-start"
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-white text-sm sm:text-sm leading-snug group-hover:text-amber-400 transition-colors line-clamp-2">
                                    {item.title}
                                </h4>
                            </div>

                            <p className="text-slate-400 text-[12px] sm:text-xs leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call To Action Banner */}
            <div className="text-center bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">Siap Merencanakan Acara Spesial Anda?</h3>
                <p className="text-slate-400 text-base sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
                    Diskusikan kebutuhan tanggal acara, perlengkapan, hingga paket rias MUA langsung bersama tim profesional Sehati Putri.
                </p>
                <button 
                    onClick={() => navigateTo('contact')}
                    className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm sm:text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
                >
                    Konsultasi Gratis via WhatsApp
                </button>
            </div>

        </div>
    );
}