import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
    const [activePage, setActivePage] = useState('home');

    // Link WhatsApp diperbarui menggunakan nomor 6281932565288
    const waLink = "https://wa.me/6281932565288?text=Halo%20Sehati%20Putri,%20saya%20mau%20tanya%20info%20price%20dan%20booking%20sewa%20peralatan%20pesta%20/%20MUA";
    const igLink = "https://instagram.com/sehati_putri";

    const navigateTo = (page) => {
        setActivePage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-slate-100 font-sans selection:bg-amber-500 selection:text-black flex flex-col justify-between">
            <Header activePage={activePage} navigateTo={navigateTo} />

            <main className="flex-1">
                {activePage === 'home' && <DashboardPage navigateTo={navigateTo} />}
                {activePage === 'about' && <AboutPage navigateTo={navigateTo} />}
                {activePage === 'product' && <ProductPage navigateTo={navigateTo} />}
                {activePage === 'gallery' && <GalleryPage navigateTo={navigateTo} />}
                {activePage === 'contact' && <ContactPage waLink={waLink} igLink={igLink} />}
            </main>

            <Footer waLink={waLink} igLink={igLink} navigateTo={navigateTo} />
        </div>
    );
}