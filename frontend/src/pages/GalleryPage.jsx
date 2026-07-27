import React, { useState } from 'react';

export default function GalleryPage({ navigateTo }) {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [activeModalImage, setActiveModalImage] = useState(null);

    const categories = ['Semua', 'MUA & Busana', 'Tenda & Dekorasi', 'Panggung & Rigging', 'Sound & Light'];

    const galleryItems = [
        { id: 1, title: 'Makeup & Busana Pengantin Akad', category: 'MUA & Busana', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200', desc: 'Riasan pengantin adat Sunda/Jawa modern dengan hasil flawless dan anggun.' },
        { id: 2, title: 'Rias Ibu & Pendamping Pengantin', category: 'MUA & Busana', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200', desc: 'Riasan halus natural untuk ibu pengantin dan panitia pendamping.' },
        { id: 3, title: 'Setup Tenda Dekorasi VIP Mewah', category: 'Tenda & Dekorasi', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200', desc: 'Dekorasi tenda pernikahan outdoor dengan nuansa lampu hangat & kain juntai.' },
        { id: 4, title: 'Tenda Sarnafil Kerucut Outdoor', category: 'Tenda & Dekorasi', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', desc: 'Tenda sarnafil kencang & rapih untuk area penerima tamu dan booth VIP.' },
        { id: 5, title: 'Konstruksi Panggung & Rigging Utama', category: 'Panggung & Rigging', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200', desc: 'Set panggung kokoh dengan rigging besi modul untuk kebutuhan konser & event.' },
        { id: 6, title: 'Rigging Lighting & Sound System', category: 'Panggung & Rigging', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200', desc: 'Pemasangan rigging gantung untuk deretan par LED dan Moving Head.' },
        { id: 7, title: 'Sound System Line Array Panggung', category: 'Sound & Light', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200', desc: 'Suara jernih dan bass mantap untuk area pesta pernikahan luas maupun konser.' },
        { id: 8, title: 'Lighting Par LED & Moving Head', category: 'Sound & Light', img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200', desc: 'Efek tata cahaya lampu panggung untuk memeriahkan malam resepsi.' },
    ];

    const filteredItems = selectedCategory === 'Semua'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="pt-20 sm:pt-28 pb-16 sm:pb-24 max-w-7xl mx-auto px-3 sm:px-6">
            {/* Judul Halaman */}
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
                <span className="text-[12px] sm:text-xs font-semibold uppercase tracking-widest text-amber-400">Dokumentasi Portofolio</span>
                <h1 className="font-serif text-2xl sm:text-5xl font-bold mt-1 sm:mt-2 mb-2 sm:mb-4 text-white">Galeri Hasil Karya & Event</h1>
                <p className="text-slate-400 text-sm sm:text-base">
                    Dokumentasi rias pengantin MUA, dekorasi tenda, pemasangan panggung, serta perlengkapan pesta Sehati Putri.
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

            {/* Grid Galeri */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
                {filteredItems.map((item) => (
                    <div 
                        key={item.id} 
                        onClick={() => setActiveModalImage(item)}
                        className="group relative overflow-hidden rounded-xl sm:rounded-3xl bg-[#121216] border border-[#22222a] hover:border-amber-500/50 transition-all duration-300 cursor-pointer shadow-lg"
                    >
                        <div className="relative h-40 sm:h-72 w-full overflow-hidden">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-3 sm:p-6 flex flex-col justify-end">
                                <span className="text-[11px] sm:text-[10px] uppercase font-bold text-amber-400 tracking-wider mb-0.5">
                                    {item.category}
                                </span>
                                <h3 className="text-sm sm:text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="hidden sm:block text-slate-400 text-xs mt-1 line-clamp-2">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action Booking */}
            <div className="text-center bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-12">
                <h3 className="font-serif text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Tertarik dengan Konsep?</h3>
                <p className="text-slate-400 text-sm sm:text-sm max-w-xl mx-auto mb-6">
                    Wujudkan konsep pernikahan atau event impian Anda bersama perlengkapan terbaik dari Sehati Putri Jasa Pesta.
                </p>
                <button 
                    onClick={() => navigateTo('contact')}
                    className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-amber-500 text-black font-semibold text-sm sm:text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
                >
                    Konsultasikan Jadwal Acara Anda
                </button>
            </div>

            {/* Modal Lightbox Gambar */}
            {activeModalImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
                    onClick={() => setActiveModalImage(null)}
                >
                    <div 
                        className="relative max-w-3xl w-full bg-[#121216] border border-[#22222a] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setActiveModalImage(null)}
                            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-all text-sm sm:text-sm"
                        >
                            ✕
                        </button>
                        <div className="max-h-[50vh] sm:max-h-[60vh] overflow-hidden">
                            <img src={activeModalImage.img} alt={activeModalImage.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 sm:p-8">
                            <span className="text-[12px] sm:text-xs font-semibold text-amber-400 uppercase tracking-widest">{activeModalImage.category}</span>
                            <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mt-0.5 mb-2">{activeModalImage.title}</h3>
                            <p className="text-slate-400 text-sm sm:text-sm mb-4 sm:mb-6">{activeModalImage.desc}</p>
                            <button 
                                onClick={() => { setActiveModalImage(null); navigateTo('contact'); }}
                                className="w-full py-3 sm:py-3.5 rounded-full bg-amber-500 text-black font-semibold text-sm sm:text-xs uppercase tracking-wider hover:bg-amber-400 transition-all"
                            >
                                Tanya Tanggal / Booking Konsep Ini
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}