import React, { useState } from 'react';

// Import foto-foto dari folder lokal (pastikan file-file ini ada di src/assets/gallery/)
import galeri1 from '../assets/gallery/galeri1.jpg';
import galeri2 from '../assets/gallery/galeri2.jpg';
import galeri3 from '../assets/gallery/galeri3.jpg';
import galeri4 from '../assets/gallery/galeri4.jpg';
import galeri5 from '../assets/gallery/galeri5.jpg';
import galeri6 from '../assets/gallery/galeri6.jpg';
import galeri7 from '../assets/gallery/galeri7.jpg';
import galeri8 from '../assets/gallery/galeri8.jpg';
import galeri9 from '../assets/gallery/galeri9.jpg';
import galeri10 from '../assets/gallery/galeri10.jpg';
import galeri11 from '../assets/gallery/galeri11.jpg';
import galeri12 from '../assets/gallery/galeri12.jpg';
import galeri13 from '../assets/gallery/galeri13.jpg';
import galeri14 from '../assets/gallery/galeri14.jpg';
import galeri15 from '../assets/gallery/galeri15.jpg';
import galeri16 from '../assets/gallery/galeri16.jpg';
import galeri17 from '../assets/gallery/galeri17.jpg';
import galeri18 from '../assets/gallery/galeri18.jpg';
import galeri19 from '../assets/gallery/galeri19.jpg';
import galeri20 from '../assets/gallery/galeri20.jpg';

export default function GalleryPage({ navigateTo, igLink }) {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [activeModalImage, setActiveModalImage] = useState(null);

    const categories = ['Semua', 'MUA & Busana', 'Tenda & Dekorasi', 'Panggung & Rigging', 'Sound & Light'];

    // List gambar menggunakan variabel import foto lokal
    const galleryItems = [
        { id: 1, category: 'MUA & Busana', img: galeri1 },
        { id: 2, category: 'MUA & Busana', img: galeri2 },
        { id: 3, category: 'Tenda & Dekorasi', img: galeri3 },
        { id: 4, category: 'Tenda & Dekorasi', img: galeri4 },
        { id: 5, category: 'Panggung & Rigging', img: galeri5 },
        { id: 6, category: 'Panggung & Rigging', img: galeri6 },
        { id: 7, category: 'Sound & Light', img: galeri7 },
        { id: 8, category: 'Sound & Light', img: galeri8 },
        { id: 9, category: 'MUA & Busana', img: galeri9 },
        { id: 10, category: 'MUA & Busana', img: galeri10 },
        { id: 11, category: 'Tenda & Dekorasi', img: galeri11 },
        { id: 12, category: 'Tenda & Dekorasi', img: galeri12 },
        { id: 13, category: 'Panggung & Rigging', img: galeri13 },
        { id: 14, category: 'Panggung & Rigging', img: galeri14 },
        { id: 15, category: 'Sound & Light', img: galeri15 },
        { id: 16, category: 'Sound & Light', img: galeri16 },
        { id: 17, category: 'Sound & Light', img: galeri17 },
        { id: 18, category: 'Sound & Light', img: galeri18 },
        { id: 19, category: 'Sound & Light', img: galeri19 },
        { id: 20, category: 'Sound & Light', img: galeri20 },
    ];

    const instagramUrl = igLink || "https://www.instagram.com/sehati_putri";

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

            {/* Grid Galeri (Foto Murni Tanpa Overlay Judul Teks) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
                {filteredItems.map((item) => (
                    <div 
                        key={item.id} 
                        onClick={() => setActiveModalImage(item)}
                        className="group relative overflow-hidden rounded-xl sm:rounded-3xl bg-[#121216] border border-[#22222a] hover:border-amber-500/50 transition-all duration-300 cursor-pointer shadow-lg aspect-square sm:aspect-[4/5]"
                    >
                        <img 
                            src={item.img} 
                            alt={`Dokumentasi ${item.category}`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                            <span className="text-[11px] sm:text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                                {item.category}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Banner Instagram Project */}
            <div className="mb-12 bg-gradient-to-r from-amber-500/10 via-[#121216] to-amber-500/10 border border-amber-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="flex items-center space-x-4 text-center sm:text-left">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-black flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">Lihat Dokumentasi Project Lengkap di Instagram</h3>
                        <p className="text-slate-400 text-xs sm:text-sm mt-1">
                            Foto & video update project tenda, MUA, dan dekorasi event terbaru kami bisa kamu lihat di Instagram resmi <strong className="text-amber-400">@sehati_putri</strong>.
                        </p>
                    </div>
                </div>

                <a 
                    href={instagramUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 shrink-0 flex items-center justify-center space-x-2"
                >
                    <span>Kunjungi Instagram</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
            </div>

            {/* Call to Action Booking */}
            <div className="text-center bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-12">
                <h3 className="font-serif text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Tertarik dengan Konsep Pesta Anda?</h3>
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

            {/* Modal Lightbox Gambar Pop-up saat diklik */}
            {activeModalImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
                    onClick={() => setActiveModalImage(null)}
                >
                    <div 
                        className="relative max-w-3xl w-full bg-[#121216] border border-[#22222a] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setActiveModalImage(null)}
                            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-all text-sm"
                        >
                            ✕
                        </button>
                        <div className="max-h-[70vh] overflow-hidden">
                            <img src={activeModalImage.img} alt="Detail Foto Galeri" className="w-full h-full object-contain bg-black" />
                        </div>
                        <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">{activeModalImage.category}</span>
                            <button 
                                onClick={() => { setActiveModalImage(null); navigateTo('contact'); }}
                                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-amber-500 text-black font-semibold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all"
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