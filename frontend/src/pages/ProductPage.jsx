import React, { useState } from 'react';

// --- IMPORT GAMBAR LOKAL ---
// Sesuaikan nama file .jpg/.png dengan file yang kamu simpan di src/assets/products/
import imgTendaPlafon from '../assets/products/tenda-plafon.jpg';
import imgTendaSerut from '../assets/products/tenda-serut.jpg';
import imgSarnafil3x3 from '../assets/products/sarnafil-3x3.jpg';
import imgSarnafil5x5 from '../assets/products/sarnafil-5x5.jpg';
import imgPanggung from '../assets/products/panggung.jpg';
import imgPanggungAtap from '../assets/products/panggung-atap.jpg';
import imgRigging from '../assets/products/rigging.jpg';
import imgKainBg from '../assets/products/kain-bg.jpg';
import imgKarpet from '../assets/products/karpet.jpg';

import imgKursiPlastik from '../assets/products/kursi-plastik.jpg';
import imgKursiFutura from '../assets/products/kursi-futura.jpg';
import imgKursiTiffany from '../assets/products/kursi-tiffany.jpg';
import imgMejaPrasmanan from '../assets/products/meja-prasmanan.jpg';
import imgMejaKotak from '../assets/products/meja-kotak.jpg';
import imgMejaSaung from '../assets/products/meja-saung.jpg';

import imgPiring from '../assets/products/piring.jpg';
import imgPiringSate from '../assets/products/piring-sate.jpg';
import imgPemanas from '../assets/products/pemanas.jpg';
import imgWarmer from '../assets/products/warmer.jpg';

import imgCoolingFan from '../assets/products/cooling-fan.jpg';
import imgAC from '../assets/products/ac.jpg';
import imgSound from '../assets/products/sound.jpg';
import imgGenset from '../assets/products/genset.jpg';
import imgVideotron from '../assets/products/videotron.jpg';

export default function ProductPage({ navigateTo }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPackageTab, setSelectedPackageTab] = useState('Rumah/Outdoor');

    const categories = [
        'All', 
        'Tenda, Panggung & Kain', 
        'Kursi & Meja', 
        'Peralatan Catering', 
        'AC, Genset & Sound'
    ];

    // Daftar Harga Sewa Satuan Menggunakan Gambar Lokal
    const products = [
        // Tenda, Panggung & Kain
        { 
            id: 1, 
            category: 'Tenda, Panggung & Kain', 
            title: 'Tenda Plafon Biasa Polos', 
            price: 'Rp 25.000 / m', 
            desc: 'Tenda lengkung / datar plafon biasa polos.', 
            img: imgTendaPlafon 
        },
        { 
            id: 2, 
            category: 'Tenda, Panggung & Kain', 
            title: 'Tenda Plafon Serut', 
            price: 'Rp 35.000 / m', 
            desc: 'Tenda lengkung / datar plafon serut.', 
            img: imgTendaSerut 
        },
        { 
            id: 3, 
            category: 'Tenda, Panggung & Kain', 
            title: 'Tenda Kerucut Sarnafil 3x3', 
            price: 'Rp 500.000 / unit', 
            desc: 'Tenda kerucut sarnafil 3x3.', 
            img: imgSarnafil3x3 
        },
        { 
            id: 4, 
            category: 'Tenda, Panggung & Kain', 
            title: 'Tenda Kerucut Sarnafil 5x5', 
            price: 'Rp 750.000 / unit', 
            desc: 'Tenda kerucut sarnafil 5x5.', 
            img: imgSarnafil5x5 
        },
        { 
            id: 5, 
            category: 'Tenda, Panggung & Kain', 
            title: 'Panggung Hiburan (Tanpa Atap Tenda)', 
            price: 'Rp 25.000 / m', 
            desc: 'Panggung hiburan tanpa atap tenda.', 
            img: imgPanggung 
        },
        { 
            id: 6, 
            category: 'Tenda, Panggung & Kain', 
            title: 'Panggung Hiburan (+ Atap Tenda)', 
            price: 'Rp 50.000 / m', 
            desc: 'Panggung hiburan + atap tenda.', 
            img: imgPanggungAtap 
        },
        { 
            id: 7, 
            category: 'Tenda, Panggung & Kain', 
            title: 'Panggung Rigging', 
            price: 'Rp 150.000 / m', 
            desc: 'Panggung rigging besi.', 
            img: imgRigging 
        },
        { 
            id: 8, 
            category: 'Tenda, Panggung & Kain', 
            title: 'Kain Background + Pasang', 
            price: 'Rp 20.000 / m', 
            desc: 'Kain background + pasang.', 
            img: imgKainBg 
        },
        { 
            id: 9, 
            category: 'Tenda, Panggung & Kain', 
            title: 'Karpet Lantai / Permadani Jalan', 
            price: 'Rp 10.000/m - Rp 75.000/lembar', 
            desc: 'Karpet lantai (10.000/m) | Karpet jalan permadani 1x5 (75.000/lembar).', 
            img: imgKarpet 
        },

        // Kursi & Meja
        { 
            id: 10, 
            category: 'Kursi & Meja', 
            title: 'Kursi Plastik + Cover', 
            price: 'Rp 6.000 / pcs', 
            desc: 'Kursi plastik + cover.', 
            img: imgKursiPlastik 
        },
        { 
            id: 11, 
            category: 'Kursi & Meja', 
            title: 'Kursi VIP Futura Polos / Cover', 
            price: 'Rp 10.000 - Rp 15.000 / pcs', 
            desc: 'Kursi VIP Futura polos (10.000/pcs) | Kursi VIP Futura + cover (15.000/pcs).', 
            img: imgKursiFutura 
        },
        { 
            id: 12, 
            category: 'Kursi & Meja', 
            title: 'Kursi Tiffany', 
            price: 'Rp 25.000 / pcs', 
            desc: 'Kursi tiffany.', 
            img: imgKursiTiffany 
        },
        { 
            id: 13, 
            category: 'Kursi & Meja', 
            title: 'Meja Prasmanan (2 Kotak + 2 Bulat)', 
            price: 'Rp 300.000 / set', 
            desc: 'Meja prasmanan ( 2 meja kotak + 2 meja bulat ).', 
            img: imgMejaPrasmanan 
        },
        { 
            id: 14, 
            category: 'Kursi & Meja', 
            title: 'Meja Kotak & Meja Bulat', 
            price: 'Rp 75.000 - Rp 125.000 / pcs', 
            desc: 'Meja kotak kecil (75.000/pcs), Meja kotak besar (100.000/pcs), Meja bulat (125.000/pcs).', 
            img: imgMejaKotak 
        },
        { 
            id: 15, 
            category: 'Kursi & Meja', 
            title: 'Meja Saung Pondokan', 
            price: 'Rp 150.000 / pcs', 
            desc: 'Meja saung pondokan.', 
            img: imgMejaSaung 
        },

        // Peralatan Catering
        { 
            id: 16, 
            category: 'Peralatan Catering', 
            title: 'Piring, Sendok, Garpu', 
            price: 'Rp 4.000 / set', 
            desc: 'Piring, sendok, garpu.', 
            img: imgPiring 
        },
        { 
            id: 17, 
            category: 'Peralatan Catering', 
            title: 'Piring Sate / Buah & Soup Cup', 
            price: 'Rp 2.000 - Rp 3.000 / pcs', 
            desc: 'Piring sate / buah (2.000/pcs) | Soup cup + tatakan (3.000/pcs).', 
            img: imgPiringSate 
        },
        { 
            id: 18, 
            category: 'Peralatan Catering', 
            title: 'Chaving Dish Pemanas', 
            price: 'Rp 50.000 - Rp 125.000 / pcs', 
            desc: 'Chaving dish ukuran kecil (50.000/pcs), ukuran besar (100.000/pcs), roll top (125.000/pcs).', 
            img: imgPemanas 
        },
        { 
            id: 19, 
            category: 'Peralatan Catering', 
            title: 'Warmer Kopi / Teh & Dispenser Jus', 
            price: 'Rp 100.000 - Rp 150.000 / pcs', 
            desc: 'Dispenser softdrink / jus (100.000/set) | Coffee - tea maker / warmer (150.000/pcs).', 
            img: imgWarmer 
        },

        // AC, Genset & Sound
        { 
            id: 20, 
            category: 'AC, Genset & Sound', 
            title: 'Kipas Cooling Fan', 
            price: 'Rp 250.000 / pcs', 
            desc: 'Kipas cooling fan.', 
            img: imgCoolingFan 
        },
        { 
            id: 21, 
            category: 'AC, Genset & Sound', 
            title: 'AC 5 PK', 
            price: 'Rp 700.000 / unit', 
            desc: 'AC 5 PK.', 
            img: imgAC 
        },
        { 
            id: 22, 
            category: 'AC, Genset & Sound', 
            title: 'Soundsystem + Operator', 
            price: 'Rp 1.200.000', 
            desc: 'Soundsystem + operator.', 
            img: imgSound 
        },
        { 
            id: 23, 
            category: 'AC, Genset & Sound', 
            title: 'Genset (80 KVA / 100 KVA)', 
            price: 'Rp 3.500.000 - Rp 4.000.000', 
            desc: 'Genset 80 KVA + solar + operator (3.500.000) | Genset 100 KVA + solar + operator (4.000.000).', 
            img: imgGenset 
        },
        { 
            id: 24, 
            category: 'AC, Genset & Sound', 
            title: 'Videotron', 
            price: 'Rp 750.000 / m', 
            desc: 'Videotron.', 
            img: imgVideotron 
        },
    ];

    // Daftar Paket Rental Lengkap
    const packagesRumah = [
        {
            id: 'p1',
            name: 'Paket Engagement / Lamaran Decor Only',
            price: 'Rp 2.000.000',
            locationTag: 'Acara di dalam rumah / di teras / di garasi',
            popular: false,
            decor: [
                'Sketsel pelaminan max 4m + artificial flowers ( bunga plastik ) + kursi tiffany 2 pcs / sofa kecil + kotak uang 2',
                'Kain background belakang backdrop max 6m',
                '2 Standing artificial flowers',
                '2 Standing lampu kristal',
                'Karpet permadani pelaminan',
                'Lighting',
                'Standing welcome mirror selfie + cutting sticker nama pengantin'
            ],
            notes: [
                'Decor Artificial flowers apabila mau di ganti dengan fresh flowers ada penambahan biaya 500.000/m',
                'Harga paket ini hanya utk wilayah kota Serang dan sekitarnya. Utk wilayah luar kota Serang ( Cilegon, Pandeglang, Lebak, Labuan, Kragilan, Cikande dll ) ada penambahan biaya transportasi sesuai lokasi / jarak tempuh'
            ]
        },
        {
            id: 'p2',
            name: 'Paket Decor Only, pelaminan outdoor',
            price: 'Rp 5.000.000',
            locationTag: 'Acara di bawah tenda / halaman rumah',
            popular: false,
            decor: [
                'Sketsel pelaminan max 5m + artificial flowers ( bunga plastik ) + kursi pengantin 1 set + kotak uang',
                '2 Standing artificial flowers jalan',
                'Karpet permadani pelaminan',
                'Gazebo dekor + decor bunga lantai',
                '2 Standing tiang lampu gantung kristal + dekor bunga lantai',
                'Mini garden depan panggung pelaminan',
                'Papan acrylic ucapan selamat dtg + cutting sticker nama pengantin',
                'Decor photobooth',
                'Welcome gate / gapura bunga artificial',
                'Standing welcome mirror selfie + cutting sticker nama pengantin'
            ],
            notes: [
                'Decor Artificial flowers apabila mau di ganti dengan fresh flowers ada penambahan biaya 500.000 / m',
                'Sketsel pelaminan di atas 5m ada penambahan biaya Rp. 1.000.000 / m sdh include penambahan biaya fresh flowers',
                'Harga paket ini hanya utk wilayah kota Serang dan sekitarnya. Utk wilayah luar kota Serang ( Cilegon, Pandeglang, Lebak, Labuan, Kragilan, Cikande dll ) ada penambahan biaya transportasi sesuai lokasi / jarak tempuh'
            ]
        },
        {
            id: 'p3',
            name: 'Paket Decor pelaminan + Tenda + Perlengkapan',
            price: 'Rp 8.500.000',
            locationTag: 'Acara di jalan komplek / halaman rumah',
            popular: true,
            equipment: [
                'Tenda dekor secukup nya / max s/d 60m ( 5x12 ) plafon serut + full kain background',
                'Meja prasmanan',
                'Pemanas besar biasa 6 set + sangku nasi',
                'Piring, sendok, garpu 100 set',
                'Kursi plastik + cover 50 pcs',
                'Saungkap pondokan 1 pcs',
                'Panggung puade',
                'Tenda penerima tamu + meja tamu 2 pcs',
                'Kipas blower 2 pcs',
                'Lampu penerangan tenda'
            ],
            decor: [
                'Sketsel pelaminan + artificial flowers ( bunga plastik ) + kursi pengantin 1 set',
                '2 Standing artificial flowers jalan',
                'Karpet permadani pelaminan',
                'Gazebo dekor',
                '2 Standing tiang lampu gantung kristal + dekor bunga lantai',
                'Full karpet + karpet jalan',
                'Mini garden depan panggung pelaminan',
                'Papan acrylic ucapan selamat dtg + cutting sticker nama pengantin',
                'Welcome gate / gapura bunga artificial',
                'Standing welcome mirror selfie + cutting sticker nama pengantin'
            ],
            notes: [
                'Ukuran tenda apabila melebihi jatah paket 60m akan di kenakan penambahan biaya Rp. 50.000/m ( sudah include kain background, karpet full, karpet jalan dan tenda plafon serut )',
                'Penambahan peralatan di luar jatah paket akan di kenakan penambahan biaya sesuai kuantitas dan kebutuhan nya',
                'Jatah decor artificial flowers ( bunga plastik ) apabila mau di ganti dgn fresh flowers ( bunga hidup asli ) akan di kenakan penambahan biaya Rp. 1.500.000',
                'Harga paket ini hanya utk wilayah kota Serang dan sekitarnya. Utk wilayah luar kota Serang ( Cilegon, Pandeglang, Lebak, Labuan, Kragilan, Cikande dll ) ada penambahan biaya transportasi sesuai lokasi / jarak tempuh'
            ]
        },
        {
            id: 'p4',
            name: 'Paket Dekorasi pelaminan + Tenda + Perlengkapan',
            price: 'Rp 12.000.000',
            locationTag: 'Acara di halaman rumah',
            popular: false,
            equipment: [
                'Tenda dekor secukup nya / max s/d 108m ( 9x12 ) plafon serut + full kain background',
                'Meja prasmanan',
                'Pemanas besar biasa 6 set + sangku nasi',
                'Piring, sendok, garpu 100 set',
                'Kursi plastik + cover 70 pcs',
                'Saungkap pondokan 1 pcs',
                'Panggung puade',
                'Tenda penerima tamu + meja tamu 2 pcs',
                'Kipas blower 2 pcs',
                'Lampu penerangan tenda'
            ],
            decor: [
                'Sketsel pelaminan + artificial flowers ( bunga plastik ) + kursi pengantin 1 set',
                '4 Standing artificial flowers jalan',
                '4 Standing tiang lampu kristal + dekor bunga lantai',
                'Karpet permadani pelaminan',
                'Gazebo dekor',
                'Full karpet + karpet jalan',
                'Mini garden depan panggung pelaminan',
                'Papan acrylic ucapan selamat dtg + cutting sticker nama pengantin',
                'Welcome gate / gapura bunga artificial',
                'Standing welcome mirror selfie + cutting sticker nama pengantin'
            ],
            notes: [
                'Ukuran tenda apabila melebihi jatah paket 108m akan di kenakan penambahan biaya Rp. 50.000/m ( sudah include kain background, karpet full, karpet jalan dan tenda plafon serut )',
                'Penambahan peralatan di luar jatah paket akan di kenakan penambahan biaya sesuai kuantitas dan kebutuhan nya',
                'Jatah decor artificial flowers ( bunga plastik ) apabila mau di ganti dgn fresh flowers ( bunga hidup asli ) akan di kenakan penambahan biaya Rp. 3.000.000',
                'Harga paket ini hanya utk wilayah kota Serang dan sekitarnya. Utk wilayah luar kota Serang ( Cilegon, Pandeglang, Lebak, Labuan, Kragilan, Cikande dll ) ada penambahan biaya transportasi sesuai lokasi / jarak tempuh'
            ]
        },
        {
            id: 'p5',
            name: 'Paket Dekorasi pelaminan + Tenda + Perlengkapan',
            price: 'Rp 15.000.000',
            locationTag: 'Acara di lapangan',
            popular: false,
            equipment: [
                'Tenda dekor secukup nya / max s/d 162m ( 9x18 ) plafon serut + full kain background',
                'Meja prasmanan',
                'Pemanas besar biasa 6 set + sangku nasi',
                'Piring, sendok, garpu 100 set',
                'Kursi plastik + cover 100 pcs',
                'Saungkap pondokan 2 pcs',
                'Panggung puade',
                'Tenda penerima tamu + meja tamu 2 pcs',
                'Kipas blower 4 pcs',
                'Lampu penerangan tenda'
            ],
            decor: [
                'Sketsel pelaminan + artifisial flowers ( bunga plastik ) + kursi pengantin 1 set',
                '4 Standing artificial flowers jalan',
                '4 Standing tiang lampu kristal + dekor bunga lantai',
                'Karpet permadani pelaminan',
                'Gazebo dekor',
                'Full karpet + karpet jalan',
                'Mini garden depan panggung pelaminan',
                'Papan acrylic ucapan selamat dtg + cutting sticker nama pengantin',
                'Welcome gate / gapura bunga artificial',
                'Standing welcome mirror selfie + cutting sticker nama pengantin'
            ],
            notes: [
                'Ukuran tenda apabila melebihi jatah paket 162m akan di kenakan penambahan biaya Rp. 50.000/m ( sudah include kain background, karpet full, karpet jalan dan tenda plafon serut )',
                'Penambahan peralatan di luar jatah paket akan di kenakan penambahan biaya sesuai kuantitas dan kebutuhan nya',
                'Jatah decor artificial flowers ( bunga plastik ) apabila mau di ganti dgn fresh flowers ( bunga hidup asli ) akan di kenakan penambahan biaya Rp. 3.000.000',
                'Harga paket ini hanya utk wilayah kota Serang dan sekitarnya. Utk wilayah luar kota Serang ( Cilegon, Pandeglang, Lebak, Labuan, Kragilan, Cikande dll ) ada penambahan biaya transportasi sesuai lokasi / jarak tempuh'
            ]
        },
        {
            id: 'p6',
            name: 'Paket Komplit All in include Rias + Dekorasi pelaminan + Tenda + Perlengkapan + FG + MC + Mapag + Hiburan',
            price: 'Rp 25.000.000',
            locationTag: 'Acara di jalan komplek/ halaman rumah',
            popular: true,
            equipment: [
                'Tenda dekor secukup nya / max s/d 60 m ( 5x12 ) plafon serut + full kain background',
                'Meja prasmanan',
                'Pemanas besar biasa 6 set + sangku nasi',
                'Piring, sendok, garpu 100 set',
                'Kursi plastik + cover 50 pcs',
                'Saungkap pondokan 1 pcs',
                'Panggung puade',
                'Tenda penerima tamu + meja tamu 2 pcs',
                'Kipas blower 2 pcs',
                'Lampu penerangan tenda'
            ],
            decor: [
                'Sketsel pelaminan + Fresh flowers ( bunga hidup asli ) + kursi pengantin 1 set',
                '2 Standing fresh flowers utk di karpet jalan',
                '2 Standing lampu gantung kristal + dekor bunga lantai',
                'Karpet permadani pelaminan',
                'Gazebo dekor',
                'Full karpet + karpet jalan',
                'Mini garden depan panggung pelaminan',
                'Papan acrylic ucapan selamat dtg + cutting sticker nama pengantin',
                'Welcome gate / gapura bunga artificial',
                'Standing welcome mirror selfie + cutting sticker'
            ],
            makeup: [
                'Make up pengantin',
                'Pakaian pengantin max 3x ganti',
                'Fresh melati pengantin',
                'Softlens',
                'Make up orang tua + besan + pakaian 1x ganti',
                'Make up keluarga/pagar ayu 4 + baju'
            ],
            documentation: [
                'Foto 1 album',
                'Videoshoot',
                'Master foto + video dlm bentuk FD'
            ],
            entertainment: [
                'Organ tunggal + pemain + singer 1 + soundsystem',
                'Panggung hiburan 3x3 / 3x4'
            ],
            mc: [
                'MC akad + upacara adat + resepsi',
                'Free : party popper, kendi, telor'
            ],
            mapag: [
                'Penari 3 orang',
                'Pemayung 1 orang',
                'Lengser dan ambu',
                'Upacara penyambutan',
                'Iring pengantin wanita',
                'Tari persembahan',
                'Kirab',
                'Tiktok/flashmob',
                'Wedding kiss',
                'Lempar bunga'
            ],
            notes: [
                'Ukuran tenda apabila melebihi jatah paket 60 m akan di kenakan penambahan biaya Rp. 50.000/ / m ( sudah include kain background, karpet full, karpet jalan dan tenda plafon serut )',
                'Penambahan peralatan di luar jatah paket akan di kenakan penambahan biaya sesuai kuantitas dan kebutuhan nya',
                'Harga paket ini hanya utk wilayah Serang dan sekitarnya. Utk wilayah luar Serang ( Cilegon, Pandeglang, Lebak, Labuan ) dikenakan penambahan biaya transportasi sesuai lokasi / jarak tempuh'
            ]
        },
        {
            id: 'p7',
            name: 'Paket All in include Rias + Dekorasi pelaminan + Tenda + Perlengkapan + FG + MC + Mapag + Hiburan',
            price: 'Rp 30.000.000',
            locationTag: 'Acara di halaman rumah',
            popular: false,
            equipment: [
                'Tenda dekor secukup nya / max s/d 108m ( 9x12 ) plafon serut + full kain background',
                'Meja prasmanan',
                'Pemanas besar biasa 6 set + sangku nasi',
                'Piring, sendok, garpu 100 set',
                'Kursi plastik + cover 70 pcs',
                'Saungkap pondokan 1 pcs',
                'Panggung puade',
                'Tenda penerima tamu + meja tamu 2 pcs',
                'Kipas blower 2 pcs',
                'Lampu penerangan tenda'
            ],
            decor: [
                'Sketsel pelaminan + Fresh flowers ( bunga hidup asli ) + kursi pengantin 1 set',
                '4 Standing fresh flowers flowers jalan',
                '4 Standing tiang lampu kristal + dekor bunga lantai',
                'Karpet permadani pelaminan',
                'Gazebo dekor',
                'Full karpet + karpet jalan',
                'Mini garden depan panggung pelaminan',
                'Papan acrylic ucapan selamat dtg + cutting sticker nama pengantin',
                'Welcome gate / gapura bunga artificial',
                'Standing welcome mirror selfie + cutting sticker'
            ],
            makeup: [
                'Make up pengantin',
                'Pakaian pengantin max 3x ganti',
                'Fresh melati pengantin',
                'Softlens',
                'Make up orang tua + besan + pakaian 1x ganti',
                'Make up keluarga/pagar ayu 4 + baju'
            ],
            documentation: [
                'Foto 1 album',
                'Videoshoot',
                'Master foto + video dlm bentuk FD'
            ],
            entertainment: [
                'Organ tunggal + pemain + singer 1 + soundsystem',
                'Panggung hiburan 3x3 / 3x4'
            ],
            mc: [
                'MC akad + upacara adat + resepsi',
                'Free : party popper, kendi, telor'
            ],
            mapag: [
                'Penari 3 orang',
                'Pemayung 1 orang',
                'Lengser dan ambu',
                'Upacara penyambutan',
                'Iring pengantin wanita',
                'Tari persembahan',
                'Kirab',
                'Tiktok/flashmob',
                'Wedding kiss',
                'Lempar bunga'
            ],
            notes: [
                'Ukuran tenda apabila melebihi jatah paket 108 m akan di kenakan penambahan biaya Rp. 50.000/m ( sudah include kain background, karpet full, karpet jalan dan tenda plafon serut )',
                'Penambahan peralatan di luar jatah paket akan di kenakan penambahan biaya sesuai kuantitas dan kebutuhan nya',
                'Harga paket ini hanya utk wilayah Serang dan sekitarnya. Utk wilayah luar Serang ( Cilegon, Pandeglang, Lebak, Labuan ) dikenakan penambahan biaya transportasi sesuai lokasi / jarak tempuh'
            ]
        },
        {
            id: 'p8',
            name: 'Paket Lengkap All in include Rias + Dekorasi pelaminan + Tenda + Perlengkapan  + FG MC + Mapag + Hiburan',
            price: 'Rp 35.000.000',
            locationTag: 'Acara di lapangan',
            popular: false,
            equipment: [
                'Tenda dekor secukup nya / max s/d 162m ( 9x18 ) plafon serut + full kain background',
                'Meja prasmanan',
                'Pemanas besar biasa 6 set + sangku nasi',
                'Piring, sendok, garpu 100 set',
                'Kursi plastik + cover 100 pcs',
                'Saungkap pondokan 2 pcs',
                'Panggung puade',
                'Tenda penerima tamu + meja tamu 2 pcs',
                'Kipas blower 4 pcs',
                'Lampu penerangan tenda'
            ],
            decor: [
                'Sketsel pelaminan + Fresh flowers ( bunga hidup asli ) + kursi pengantin 1 set + kotak uang 2',
                '4 Standing artificial flowers jalan',
                '4 Standing tiang lampu kristal + dekor bunga lantai',
                'Karpet permadani pelaminan',
                'Gazebo dekor + dekor bunga lantai',
                'Full karpet + karpet jalan',
                'Mini garden depan panggung pelaminan',
                'Papan acrylic ucapan selamat dtg + cutting sticker nama pengantin',
                'Welcome gate / gapura bunga artificial',
                'Standing welcome mirror selfie + cutting sticker nama pengantin'
            ],
            notes: [
                'Ukuran tenda apabila melebihi jatah paket 162m akan di kenakan penambahan biaya Rp. 50.000/m ( sudah include kain background, karpet full, karpet jalan dan tenda plafon serut )',
                'Penambahan peralatan di luar jatah paket akan di kenakan penambahan biaya sesuai kuantitas dan kebutuhan nya',
                'Harga paket ini hanya utk wilayah Serang dan sekitarnya. Utk wilayah luar Serang ( Cilegon, Pandeglang, Lebak, Labuan ) dikenakan penambahan biaya transportasi sesuai lokasi / jarak tempuh'
            ]
        }
    ];

    const packagesGedung = [
        {
            id: 'pg1',
            name: 'Package Decor Only, acara di Gedung / Resto / Cafe',
            price: 'Rp 8.500.000',
            locationTag: 'Acara di Gedung / Resto / Cafe',
            popular: false,
            decor: [
                'Sketsel pelaminan gedung max 8m + decor fresh flowers',
                'Kain background dinding belakang pelaminan',
                'Kursi akad nikah tiffany 6 pcs + meja akad',
                'Standing fresh flower pelaminan',
                'Standing fresh flower jalan 6',
                'Gazebo dekor + bunga lantai',
                'Karpet jalan permadani tebal',
                'Mini garden depan panggung pelaminan',
                'Decor photobooth',
                'Janur',
                'Papan acrylic ucapan selamat dtg',
                'Welcome gate / Gapura bunga artificial',
                'Standing welcome mirror selfie + sticker nama pengantin'
            ],
            notes: [
                'Apabila sketsel pelaminan diatas 8m ada penambahan biaya Rp. 1.500.000 / m sdh include penambahan biaya fresh flowers',
                'Apabila dinding gedung mau di pasang full kain background di kenakan tambahan biaya Rp. 25.000 / m',
                'Harga paket ini hanya utk wilayah Serang dan sekitarnya. Utk wilayah luar Serang ( Cilegon, Pandeglang, Lebak, Labuan ) dikenakan penambahan biaya transportasi sesuai lokasi / jarak tempuh'
            ]
        },
        {
            id: 'pg2',
            name: 'Paket Dekorasi pelaminan + Perlengkapan ( acara di Gedung )',
            price: 'Rp 15.000.000',
            locationTag: 'Acara di Gedung',
            popular: true,
            equipment: [
                'Meja prasmanan',
                'Pemanas besar biasa 6 set + sangku nasi',
                'Piring, sendok, garpu 200 set',
                'Kursi plastik + cover 100 pcs',
                'Saungkap pondokan 4 pcs',
                'Panggung puade ( bila di butuhkan )',
                'meja tamu 2 pcs',
                'Kipas blower 4 pcs',
                '2 Meja bulat VIP'
            ],
            decor: [
                'Sketsel pelaminan gedung max 8m + full fresh flowers + kursi pengantin 1 set + kotak uang 2',
                'Standing fresh flower pelaminan',
                'Standing fresh flower jalan 6',
                '4 Standing lampu gantung kristal + dekor bunga lantai',
                'Karpet permadani pelaminan',
                'Gazebo dekor + dekor bunga lantai',
                'karpet jalan',
                'Mini garden depan panggung pelaminan',
                'Papan acrylic ucapan selamat dtg + cutting sticker nama pengantin',
                'Welcome gate / gapura bunga artificial',
                'Standing welcome mirror selfie + cutting sticker nama pengantin'
            ],
            notes: [
                'Apabila sketsel pelaminan diatas 8m ada penambahan biaya Rp. 1.500.000 /m sdh include penambahan biaya fresh flowers',
                'Apabila dinding gedung mau di pasang full kain background di kenakan tambahan biaya Rp. 25.000 /m',
                'Penambahan peralatan di luar jatah paket akan di kenakan penambahan biaya sesuai kuantitas dan kebutuhan nya',
                'Harga paket ini hanya utk wilayah Serang dan sekitarnya. Utk wilayah luar Serang ( Cilegon, Pandeglang, Lebak, Labuan ) dikenakan penambahan biaya transportasi sesuai lokasi / jarak tempuh'
            ]
        },
        {
            id: 'pg3',
            name: 'Paket Komplit All in include Rias + Dekorasi pelaminan + Perlengkapan + FG + MC + Mapag + Hiburan ( acara di Gedung )',
            price: 'Rp 30.000.000',
            locationTag: 'Acara di Gedung',
            popular: true,
            equipment: [
                'Meja prasmanan',
                'Pemanas besar biasa 6 set + sangku nasi',
                'Piring, sendok, garpu 200 set',
                'Kursi plastik + cover 100 pcs',
                'Saungkap pondokan 4 pcs',
                'Panggung puade ( bila di butuhkan )',
                'meja tamu 2 pcs',
                'Kipas blower 4 pcs',
                '2 Meja bulat VIP'
            ],
            decor: [
                'Sketsel pelaminan gedung max 10m + full fresh flowers + kursi pengantin 1 set',
                'Standing fresh flower pelaminan',
                'Standing fresh flower jalan 6',
                '4 Standing lampu gantung kristal + dekor bunga lantai',
                'Karpet permadani pelaminan',
                'Gazebo dekor + dekor bunga lantai',
                'karpet jalan',
                'Mini garden depan panggung pelaminan',
                'Papan acrylic ucapan selamat dtg + cutting sticker nama pengantin',
                'Welcome gate / gapura bunga artificial',
                'Standing welcome mirror selfie + cutting sticker nama pengantin'
            ],
            notes: [
                'Apabila sketsel pelaminan diatas 10m ada penambahan biaya Rp. 1.500.000 / m sdh include penambahan biaya fresh flowers',
                'Apabila dinding gedung mau di pasang full kain background di kenakan tambahan biaya Rp. 25.000 /m',
                'Penambahan peralatan di luar jatah paket akan di kenakan penambahan biaya sesuai kuantitas dan kebutuhan nya',
                'Harga paket ini hanya utk wilayah Serang dan sekitarnya. Utk wilayah luar Serang ( Cilegon, Pandeglang, Lebak, Labuan ) dikenakan penambahan biaya transportasi sesuai lokasi / jarak tempuh'
            ]
        }
    ];

    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* --- SEKSI 1: PAKET RENTAL UTAMA --- */}
            <section id="paket-rental" className="scroll-mt-28 mb-20">
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Pilihan Hemat & Lengkap</span>
                    <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">Paket Rental Pesta & Wedding</h1>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        Pilihan paket persewaan dekorasi pelaminan, tenda, peralatan pesta, hingga paket bundling All-In MUA & Hiburan untuk Kota Serang & sekitarnya.
                    </p>
                </div>

                {/* Tab Switcher: Rumah vs Gedung */}
                <div className="flex justify-center mb-10">
                    <div className="bg-[#121216] border border-[#22222a] p-1.5 rounded-full inline-flex space-x-2">
                        <button
                            onClick={() => setSelectedPackageTab('Rumah/Outdoor')}
                            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                                selectedPackageTab === 'Rumah/Outdoor'
                                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            🏡 Paket Rumah & Outdoor
                        </button>
                        <button
                            onClick={() => setSelectedPackageTab('Gedung')}
                            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                                selectedPackageTab === 'Gedung'
                                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            🏛️ Paket Gedung & Resto
                        </button>
                    </div>
                </div>

                {/* Grid Paket Rumah / Outdoor */}
                {selectedPackageTab === 'Rumah/Outdoor' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packagesRumah.map((pkg) => (
                            <div 
                                key={pkg.id} 
                                className={`relative bg-[#121216] border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                                    pkg.popular ? 'border-amber-500/80 shadow-xl shadow-amber-500/10' : 'border-[#22222a]'
                                }`}
                            >
                                {pkg.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full shadow-md">
                                        Paling Rekomendasi
                                    </span>
                                )}

                                <div>
                                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                                        📍 {pkg.locationTag}
                                    </span>
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">{pkg.name}</h3>
                                    <div className="my-4 pb-4 border-b border-[#22222a]">
                                        <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">{pkg.price}</span>
                                    </div>

                                    {pkg.equipment && (
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">🎪 Fasilitas tenda dan perlengkapan nya :</h4>
                                            <ul className="space-y-1.5 text-xs text-slate-300">
                                                {pkg.equipment.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-amber-400/80 mr-2 shrink-0">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {pkg.decor && (
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">💐 Fasilitas Dekorasi :</h4>
                                            <ul className="space-y-1.5 text-xs text-slate-300">
                                                {pkg.decor.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-amber-400/80 mr-2 shrink-0">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {pkg.makeup && (
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">💄 Fasilitas Make up dan busana :</h4>
                                            <ul className="space-y-1.5 text-xs text-slate-300">
                                                {pkg.makeup.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-amber-400/80 mr-2 shrink-0">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {pkg.documentation && (
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">📷 Fasilitas Dokumentasi :</h4>
                                            <ul className="space-y-1.5 text-xs text-slate-300">
                                                {pkg.documentation.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-amber-400/80 mr-2 shrink-0">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {pkg.entertainment && (
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">🎵 Fasilitas Hiburan :</h4>
                                            <ul className="space-y-1.5 text-xs text-slate-300">
                                                {pkg.entertainment.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-amber-400/80 mr-2 shrink-0">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {pkg.mc && (
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">🎤 Fasilitas MC :</h4>
                                            <ul className="space-y-1.5 text-xs text-slate-300">
                                                {pkg.mc.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-amber-400/80 mr-2 shrink-0">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {pkg.mapag && (
                                        <div className="mb-6">
                                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">💃 Fasilitas Mapag / Lengser :</h4>
                                            <ul className="space-y-1.5 text-xs text-slate-300">
                                                {pkg.mapag.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-amber-400/80 mr-2 shrink-0">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {pkg.notes && (
                                        <div className="bg-[#0a0a0c] p-3.5 rounded-2xl border border-[#22222a] mb-6 space-y-2">
                                            {pkg.notes.map((note, idx) => (
                                                <p key={idx} className="text-[11px] text-slate-400 leading-relaxed">
                                                    <strong className="text-amber-400">Note :</strong> {note}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <button 
                                    onClick={() => navigateTo('contact')} 
                                    className={`w-full py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all ${
                                        pkg.popular 
                                            ? 'bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/20' 
                                            : 'bg-[#1a1a22] border border-[#333340] text-slate-200 hover:bg-amber-500 hover:text-black'
                                    }`}
                                >
                                    Pesan Paket Ini via WA
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Grid Paket Gedung */}
                {selectedPackageTab === 'Gedung' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packagesGedung.map((pkg) => (
                            <div 
                                key={pkg.id} 
                                className={`relative bg-[#121216] border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                                    pkg.popular ? 'border-amber-500/80 shadow-xl shadow-amber-500/10' : 'border-[#22222a]'
                                }`}
                            >
                                {pkg.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full shadow-md">
                                        Paling Favorit
                                    </span>
                                )}

                                <div>
                                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                                        🏛️ {pkg.locationTag}
                                    </span>
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">{pkg.name}</h3>
                                    <div className="my-4 pb-4 border-b border-[#22222a]">
                                        <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">{pkg.price}</span>
                                    </div>

                                    {pkg.equipment && (
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">🍽️ Fasilitas perlengkapan nya :</h4>
                                            <ul className="space-y-1.5 text-xs text-slate-300">
                                                {pkg.equipment.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-amber-400/80 mr-2 shrink-0">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {pkg.decor && (
                                        <div className="mb-6">
                                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">💐 Fasilitas Dekorasi :</h4>
                                            <ul className="space-y-1.5 text-xs text-slate-300">
                                                {pkg.decor.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-amber-400/80 mr-2 shrink-0">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {pkg.notes && (
                                        <div className="bg-[#0a0a0c] p-3.5 rounded-2xl border border-[#22222a] mb-6 space-y-2">
                                            {pkg.notes.map((note, idx) => (
                                                <p key={idx} className="text-[11px] text-slate-400 leading-relaxed">
                                                    <strong className="text-amber-400">Note :</strong> {note}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <button 
                                    onClick={() => navigateTo('contact')} 
                                    className="w-full py-3.5 rounded-full bg-amber-500 text-black hover:bg-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
                                >
                                    Pesan Paket Gedung Ini
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* --- SEKSI 2: PERLENGKAPAN SEWA SATUAN --- */}
            <section id="perlengkapan-sewa" className="scroll-mt-28 pt-16 border-t border-[#22222a]">
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Daftar Harga Sewa Unit</span>
                    <h2 className="font-serif text-2xl sm:text-4xl font-bold mt-2 mb-3 text-white">Perlengkapan Sewa Satuan</h2>
                    <p className="text-slate-400 text-sm sm:text-base">
                        Sewa satuan untuk Tenda, Panggung, Kursi VIP, AC Standing, Genset, hingga Alat Catering.
                    </p>
                </div>

                {/* Filter Kategori Unit */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-12">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs font-semibold transition-all ${
                                selectedCategory === cat 
                                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                                    : 'bg-[#121216] border border-[#22222a] text-slate-300 hover:border-amber-500/50'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid Produk Unit */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                    {filteredProducts.map((item) => (
                        <div 
                            key={item.id} 
                            className="group bg-[#121216] border border-[#22222a] rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
                        >
                            <div className="relative h-36 sm:h-48 overflow-hidden bg-[#1a1a22]">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                                <span className="absolute top-2 left-2 bg-black/80 backdrop-blur-md text-amber-400 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-amber-500/30">
                                    {item.category}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                            </div>

                            <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-serif text-xs sm:text-base font-bold text-white mb-1 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-amber-400 font-bold text-xs sm:text-sm mb-2">{item.price}</p>
                                    <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed mb-4 line-clamp-2">
                                        {item.desc}
                                    </p>
                                </div>
                                
                                <button 
                                    onClick={() => navigateTo('contact')}
                                    className="w-full py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500 hover:text-black text-amber-400 font-semibold text-[11px] sm:text-xs uppercase tracking-wider transition-all"
                                >
                                    Sewa Alat &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}