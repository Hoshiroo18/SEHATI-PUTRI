import React, { useState } from 'react';

export default function ContactPage({ waLink, igLink }) {
    const [formData, setFormData] = useState({
        nama: '',
        acara: '',
        tanggal: '',
        kebutuhan: ''
    });

    const mapsLink = "https://maps.app.goo.gl/zTfn6BMfxY27MCpg9";

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formatWA = 
            `Halo *Sehati Putri Jasa Pesta*, saya ingin berkonsultasi mengenai penyewaan / MUA:%0A%0A` +
            `👤 *Nama*: ${encodeURIComponent(formData.nama)}%0A` +
            `🎉 *Jenis Acara*: ${encodeURIComponent(formData.acara)}%0A` +
            `📅 *Rencana Tanggal*: ${encodeURIComponent(formData.tanggal || '-')}%0A` +
            `📋 *Kebutuhan Detail*: %0A${encodeURIComponent(formData.kebutuhan)}`;

        window.open(`https://wa.me/628131933891?text=${formatWA}`, '_blank');
    };

    return (
        <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Hubungi Kami</span>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">Formulir Konsultasi & Pemesanan</h1>
                <p className="text-slate-400 text-sm">Silakan isi formulir di bawah ini untuk konsultasi cepat. Pesan akan terformat otomatis di WhatsApp kami.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
                
                {/* Info Kontak, Alamat & Instagram */}
                <div className="lg:col-span-5 space-y-6">
                    
                    {/* Telepon / WA */}
                    <div className="bg-[#121216] border border-[#22222a] rounded-3xl p-8 hover:border-amber-500/40 transition-all shadow-lg">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Telepon / WhatsApp</p>
                                <h3 className="text-xl font-bold text-white mt-0.5">0813-1933-891</h3>
                            </div>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed mb-6">
                            Respon cepat untuk konsultasi MUA, persewaan alat pesta, ketersediaan tanggal acara, dan estimasi biaya.
                        </p>
                        <a 
                            href={waLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="block text-center w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-amber-500/20"
                        >
                            Chat WA Langsung Tanpa Form
                        </a>
                    </div>

                    <div className="space-y-4">
                        {/* Alamat Galeri & Kantor */}
                        <div className="bg-[#121216] border border-[#22222a] rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-white text-sm mb-1">Alamat Galeri & Kantor</h4>
                            <p className="text-slate-400 text-xs leading-relaxed mb-3">
                                Jl. K.H. Abdul Hadi Jl. Kb. Jahe No.92, Cipare, Kec. Serang, Kota Serang, Banten 42117
                            </p>
                            <a 
                                href={mapsLink} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center text-xs font-semibold text-amber-400 hover:underline"
                            >
                                Buka di Google Maps &rarr;
                            </a>
                        </div>

                        {/* Instagram & Jam Operasional (Dibuat grid-cols-2 khusus mobile) */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {/* Instagram */}
                            <a 
                                href={igLink}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#121216] border border-[#22222a] hover:border-amber-500/50 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 transition-all block group"
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-white text-xs sm:text-sm mb-0.5 group-hover:text-amber-400 transition-colors line-clamp-1">
                                    Instagram Resmi
                                </h4>
                                <p className="text-amber-400 text-[10px] sm:text-xs font-medium truncate">
                                    @sehati_putri
                                </p>
                            </a>

                            {/* Jam Operasional */}
                            <div className="bg-[#121216] border border-[#22222a] rounded-xl sm:rounded-2xl p-3.5 sm:p-6">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-2 sm:mb-3">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-white text-xs sm:text-sm mb-0.5 line-clamp-1">
                                    Jam Operasional
                                </h4>
                                <p className="text-slate-400 text-[10px] sm:text-xs leading-tight">
                                    Setiap Hari (24 Jam)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formulir WA */}
                <div className="lg:col-span-7 bg-[#121216] border border-[#22222a] rounded-3xl p-8 sm:p-10 shadow-lg">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">Formulir Pemesanan / Konsultasi</h3>
                    <p className="text-slate-400 text-xs mb-8">Isi data di bawah ini, lalu klik tombol untuk mengirim pesan terformat otomatis via WhatsApp.</p>

                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Nama Lengkap</label>
                            <input 
                                type="text" 
                                required
                                placeholder="Masukkan nama Anda"
                                value={formData.nama}
                                onChange={(e) => setFormData({...formData, nama: e.target.value})}
                                className="w-full bg-[#0a0a0c] border border-[#22222a] rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Jenis Acara</label>
                                <input 
                                    type="text" 
                                    required
                                    placeholder="Contoh: Pernikahan, Konser, Syukuran"
                                    value={formData.acara}
                                    onChange={(e) => setFormData({...formData, acara: e.target.value})}
                                    className="w-full bg-[#0a0a0c] border border-[#22222a] rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Rencana Tanggal Acara</label>
                                <input 
                                    type="date" 
                                    value={formData.tanggal}
                                    onChange={(e) => setFormData({...formData, tanggal: e.target.value})}
                                    className="w-full bg-[#0a0a0c] border border-[#22222a] rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Peralatan / Layanan MUA yang Dibutuhkan</label>
                            <textarea 
                                rows="4"
                                required
                                placeholder="Contoh: Rias Pengantin (MUA), tenda sarnafil 2 unit, panggung 6x4m, sound system, AC standing 2 unit"
                                value={formData.kebutuhan}
                                onChange={(e) => setFormData({...formData, kebutuhan: e.target.value})}
                                className="w-full bg-[#0a0a0c] border border-[#22222a] rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2"
                        >
                            <span>Kirim Pesan via WhatsApp</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.012 2c-5.508 0-9.989 4.481-9.989 9.989 0 1.864.512 3.61 1.408 5.115l-1.431 5.23 5.385-1.412c1.455.801 3.123 1.256 4.887 1.256 5.508 0 9.989-4.481 9.989-9.989 0-5.508-4.481-9.989-9.989-9.989zm5.908 14.288c-.244.686-1.22 1.309-1.996 1.472-.533.113-1.229.202-3.585-.772-3.013-1.246-4.95-4.309-5.1-4.508-.149-.199-1.222-1.626-1.222-3.1 0-1.474.772-2.199 1.045-2.497.273-.298.596-.372.795-.372.199 0 .397.002.571.011.184.009.431-.07.674.514.244.584.821 2.01.895 2.159.074.149.124.323.025.522-.099.199-.149.323-.298.497-.149.174-.313.388-.447.522-.149.149-.304.31-.131.608.174.298.773 1.277 1.66 2.068 1.141 1.017 2.102 1.332 2.4 1.481.298.149.472.124.646-.074.174-.199.745-.869.944-1.167.199-.298.397-.249.671-.149.273.099 1.739.82 2.037.969.298.149.497.223.571.348.074.124.074.721-.17 1.407z"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

            {/* Embed Google Maps */}
            <div className="bg-[#121216] border border-[#22222a] rounded-3xl p-6 sm:p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                        <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Peta Lokasi</span>
                        <h3 className="font-serif text-2xl font-bold text-white mt-1">Lokasi Sehati Putri Jasa Pesta</h3>
                    </div>
                    <a 
                        href={mapsLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black font-semibold text-xs uppercase tracking-wider transition-all"
                    >
                        Buka di Aplikasi Maps
                    </a>
                </div>
                <div className="w-full h-[380px] rounded-2xl overflow-hidden border border-[#22222a]">
                    <iframe 
                        title="Google Maps Sehati Putri"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1262943202976!2d106.1558231!3d-6.113697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418b3211516e8b%3A0xb35a09724a1b0bd4!2sSehati%20Putri%20Jasa%20Pesta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}