import React from 'react';
import logoApp from '../assets/logosehati.png';

export default function Footer({ waLink, igLink, navigateTo }) {
    const mapsLink = "https://maps.app.goo.gl/zTfn6BMfxY27MCpg9";

    return (
        <footer className="bg-[#070709] border-t border-[#22222a] pt-8 sm:pt-16 pb-6 sm:pb-8 text-slate-400 text-xs sm:text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-[#1f1f27]">
                    
                    {/* Brand & Logo */}
                    <div className="lg:col-span-4 space-y-3">
                        <div className="flex items-center space-x-3">
                            <img 
                                src={logoApp} 
                                alt="Logo Sehati Putri" 
                                className="h-9 sm:h-12 w-auto object-contain brightness-0 invert drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                            />
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed max-w-sm">
                            Penyedia jasa persewaan peralatan event, tenda, panggung, rigging, genset, sound system, MUA & busana pengantin di Kota Serang, Banten.
                        </p>
                        
                        {/* Sosmed Buttons */}
                        <div className="flex items-center space-x-2 pt-1">
                            <a 
                                href={igLink} 
                                target="_blank" 
                                rel="noreferrer"
                                className="w-8 h-8 rounded-full bg-[#121216] border border-[#22222a] flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all"
                                aria-label="Instagram"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </a>
                            <a 
                                href={waLink} 
                                target="_blank" 
                                rel="noreferrer"
                                className="w-8 h-8 rounded-full bg-[#121216] border border-[#22222a] flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all"
                                aria-label="WhatsApp"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.012 2c-5.508 0-9.989 4.481-9.989 9.989 0 1.864.512 3.61 1.408 5.115l-1.431 5.23 5.385-1.412c1.455.801 3.123 1.256 4.887 1.256 5.508 0 9.989-4.481 9.989-9.989 0-5.508-4.481-9.989-9.989-9.989zm5.908 14.288c-.244.686-1.22 1.309-1.996 1.472-.533.113-1.229.202-3.585-.772-3.013-1.246-4.95-4.309-5.1-4.508-.149-.199-1.222-1.626-1.222-3.1 0-1.474.772-2.199 1.045-2.497.273-.298.596-.372.795-.372.199 0 .397.002.571.011.184.009.431-.07.674.514.244.584.821 2.01.895 2.159.074.149.124.323.025.522-.099.199-.149.323-.298.497-.149.174-.313.388-.447.522-.149.149-.304.31-.131.608.174.298.773 1.277 1.66 2.068 1.141 1.017 2.102 1.332 2.4 1.481.298.149.472.124.646-.074.174-.199.745-.869.944-1.167.199-.298.397-.249.671-.149.273.099 1.739.82 2.037.969.298.149.497.223.571.348.074.124.074.721-.17 1.407z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Container Navigasi + Layanan (Dibuat 2 Kolom Sejajar di Mobile) */}
                    <div className="grid grid-cols-2 gap-4 lg:col-span-5">
                        {/* Navigasi */}
                        <div className="space-y-2">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">Navigasi</h4>
                            <ul className="space-y-1.5 text-[11px] sm:text-xs">
                                <li><button onClick={() => navigateTo('home')} className="hover:text-amber-400 transition-colors">Beranda</button></li>
                                <li><button onClick={() => navigateTo('product')} className="hover:text-amber-400 transition-colors">Produk</button></li>
                                <li><button onClick={() => navigateTo('gallery')} className="hover:text-amber-400 transition-colors">Galeri Kami</button></li>
                                <li><button onClick={() => navigateTo('about')} className="hover:text-amber-400 transition-colors">Tentang Kami</button></li>
                                <li><button onClick={() => navigateTo('contact')} className="hover:text-amber-400 transition-colors">Kontak</button></li>
                            </ul>
                        </div>

                        {/* Layanan */}
                        <div className="space-y-2">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">Layanan</h4>
                            <ul className="space-y-1.5 text-[11px] sm:text-xs text-slate-400">
                                <li>• Rias MUA & Busana</li>
                                <li>• Tenda VIP & Sarnafil</li>
                                <li>• Panggung & Rigging</li>
                                <li>• Sound Line Array</li>
                                <li>• Genset & AC Standing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Alamat Kantor */}
                    <div className="lg:col-span-3 space-y-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">Alamat Kantor</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                            Jl. K.H. Abdul Hadi, Kb. Jahe No.92, Cipare, Serang, Banten 42117
                        </p>
                        <div className="pt-0.5 space-y-1 text-[11px] sm:text-xs">
                            <p className="flex items-center text-amber-400 font-semibold">
                                <span className="mr-1.5">📞</span> 0813-1933-891
                            </p>
                            <a href={mapsLink} target="_blank" rel="noreferrer" className="inline-block text-slate-400 hover:text-amber-400 transition-colors text-[10px] sm:text-[11px] underline">
                                Petunjuk Arah (Google Maps) &rarr;
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-4 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-slate-500 gap-2 text-center sm:text-left">
                    <p>© {new Date().getFullYear()} Sehati Putri Jasa Pesta.</p>
                    <p className="text-slate-600">Peralatan Pesta & MUA Specialist Serang</p>
                </div>

            </div>
        </footer>
    );
}