import React, { useState } from 'react';

export default function ProductPage({ navigateTo }) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'MUA & Busana', 'Tenda & Rigging', 'Sound & Electrical', 'Pendingin', 'Perlengkapan Pesta'];

    const products = [
        { id: 1, category: 'MUA & Busana', title: 'Rias Pengantin Akad & Resepsi', desc: 'Layanan MUA profesional termasuk busana pengantin pria & wanita lengkap dengan aksesoris.', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800' },
        { id: 2, category: 'MUA & Busana', title: 'Rias Orang Tua & Besan', desc: 'Makeup pendamping untuk ibu & bapak pengantin sesuai tema nuansa warna acara.', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800' },
        { id: 3, category: 'Tenda & Rigging', title: 'Tenda Sarnafil 3x3 / 5x5', desc: 'Tenda kerucut eksklusif cocok untuk booth VIP, penerima tamu, atau area outdoor.', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
        { id: 4, category: 'Tenda & Rigging', title: 'Rigging Panggung & Lighting', desc: 'Rangka besi panggung tinggi kokoh untuk menggantungkan lampu lighting & line array.', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
        { id: 5, category: 'Sound & Electrical', title: 'Genset Silent 50-100 kVA', desc: 'Suplai listrik stabil tanpa suara bising, lengkap dengan operator & kabel distribusi.', img: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=800' },
        { id: 6, category: 'Sound & Electrical', title: 'Sound System Line Array 5000W', desc: 'Set sound panggung besar lengkap dengan digital mixer, mic wireless, & subwoofer.', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800' },
        { id: 7, category: 'Pendingin', title: 'AC Standing Portable 5 PK', desc: 'Pendingin ruangan kencang dan dingin untuk tenda pernikahan & gedung indoor.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800' },
        { id: 8, category: 'Pendingin', title: 'Kipas Blower Misty Cool Fan', desc: 'Kipas hembusan air halus menjaga area outdoor tetap sejuk dan tidak pengap.', img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=800' },
        { id: 9, category: 'Perlengkapan Pesta', title: 'Set Kursi Futura + Cover VIP', desc: 'Kursi futura empuk dengan cover kain pilihan warna putih, gold, maroon, dll.', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800' },
        { id: 10, category: 'Perlengkapan Pesta', title: 'Pemanas Prasmanan Stainless', desc: 'Chafing dish pemanas lauk, tempat nasi, piring, sendok garpu & dispenser jus.', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800' },
    ];

    const packages = [
        {
            name: 'Paket Syukuran / Rumah',
            price: 'Tanya Harga',
            features: ['Tenda Plafon / Dekorasi Sederhana', 'Sound System Standard + Mic', 'Kursi Futura + Cover', 'Blower / Kipas Angin Misty Cool']
        },
        {
            name: 'Paket Wedding + MUA',
            price: 'Tanya Harga',
            popular: true,
            features: ['Rias Pengantin (MUA) & Busana Akad/Resepsi', 'Rias Ibu & Bapak Pengantin', 'Tenda Dekorasi VIP & Set Pelaminan', 'Sound System High Power & Genset', 'AC Standing Portable / Blower & Peralatan Pesta']
        },
        {
            name: 'Paket Event & Rigging',
            price: 'Tanya Harga',
            features: ['Set Rigging Panggung Lengkap', 'Tenda Sarnafil VIP', 'Genset Silent Output Besar', 'Line Array Sound System Professional', 'Full Lighting & Equipment Support']
        }
    ];

    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* --- SEKSI 1: PERLENGKAPAN SEWA --- */}
            <section id="perlengkapan-sewa" className="scroll-mt-28 mb-16 sm:mb-24">
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                    <span className="text-[12px] sm:text-xs font-semibold uppercase tracking-widest text-amber-400">Katalog Lengkap</span>
                    <h1 className="font-serif text-2xl sm:text-5xl font-bold mt-1 sm:mt-2 mb-2 sm:mb-4 text-white">Perlengkapan Sewa & MUA</h1>
                    <p className="text-slate-400 text-sm sm:text-base">
                        Jelajahi seluruh perlengkapan pesta dan layanan MUA terbaik dari Sehati Putri Jasa Pesta Serang.
                    </p>
                </div>

                {/* Filter Kategori */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 mb-8 sm:mb-12">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[13px] sm:text-xs font-semibold transition-all ${
                                selectedCategory === cat 
                                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                                    : 'bg-[#121216] border border-[#22222a] text-slate-300 hover:border-amber-500/50'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid Produk */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
                    {filteredProducts.map((item) => (
                        <div 
                            key={item.id} 
                            className="group bg-[#121216] border border-[#22222a] rounded-2xl sm:rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
                        >
                            <div className="relative h-32 sm:h-56 overflow-hidden">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-black/70 backdrop-blur-md text-amber-400 text-[10px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-500/30">
                                    {item.category}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                            </div>

                            <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-serif text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-[12px] sm:text-sm leading-relaxed mb-3 sm:mb-6 line-clamp-2">
                                        {item.desc}
                                    </p>
                                </div>
                                
                                <button 
                                    onClick={() => navigateTo('contact')}
                                    className="w-full py-2 sm:py-3 rounded-lg sm:rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500 hover:text-black text-amber-400 font-semibold text-[12px] sm:text-xs uppercase tracking-wider transition-all"
                                >
                                    Booking &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- SEKSI 2: PAKET RENTAL --- */}
            <section id="paket-rental" className="pt-16 border-t border-[#22222a] scroll-mt-28">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-sm sm:text-xs font-semibold uppercase tracking-widest text-amber-400">Pilihan Hemat</span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4 text-white">Paket Rental Pesta & Wedding</h2>
                    <p className="text-slate-400 text-base sm:text-sm">Pilih kombinasi sewa peralatan pesta atau gabungkan dengan MUA & rias pengantin.</p>
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
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[12px] sm:text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full">
                                    Paling Populer
                                </span>
                            )}
                            <h3 className="font-serif text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                            <div className="my-6">
                                <span className="text-2xl font-bold text-amber-400">{pkg.price}</span>
                            </div>
                            <ul className="space-y-4 mb-8 text-base sm:text-sm text-slate-300">
                                {pkg.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-center">
                                        <span className="text-amber-400 mr-3">✓</span> {feat}
                                    </li>
                                ))}
                            </ul>
                            <button 
                                onClick={() => navigateTo('contact')} 
                                className={`block text-center w-full py-3.5 rounded-full font-semibold text-base sm:text-sm transition-all ${
                                    pkg.popular 
                                        ? 'bg-amber-500 text-black hover:bg-amber-400' 
                                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                                }`}
                            >
                                Pesan Paket Ini
                            </button>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}