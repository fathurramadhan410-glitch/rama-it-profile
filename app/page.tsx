'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Ubah timer menjadi 2.5 detik (2500 ms) agar tidak terlalu lama menunggu
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const projects = [
    {
      title: "Qur'an Tracker",
      desc: "Sistem Informasi pemantau rutinitas baca Al-Qur'an berbasis Realtime. Dilengkapi dengan absensi biometrik, AI Quiz, dan Tadarus Jamaah Relay.",
      stats: [{ label: "Fitur", value: "10+" }, { label: "Tech", value: "Next.js" }],
      tech: ['Next.js', 'Supabase', 'Tailwind'],
      url: "https://quran-tracker-next.vercel.app",
      icon: "📖"
    },
    {
      title: "Sistem Informasi Terpadu",
      desc: "Inovasi digitalisasi pelayanan publik berbasis Smart City. Mengintegrasikan data kependudukan dan pelayanan aduan masyarakat real-time.",
      stats: [{ label: "Inovasi", value: "Smart City" }, { label: "Role", value: "Fullstack" }],
      tech: ['Next.js', 'PostgreSQL', 'Vercel'],
      url: "#",
      icon: "🏙️"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      
      {/* Background Gradient Glow */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow"></div>

      {/* ===== ANIMASI LOADING 2.5 DETIK ===== */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Rama<span className="text-white">.IT</span>
          </h1>
          <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            {/* Animasi bar sekarang 2.5 detik agar sinkron */}
            <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{ animation: 'loading-bar 2.5s ease-in-out forwards' }}></div>
          </div>
          <p className="mt-6 text-sm text-gray-500 font-medium tracking-widest uppercase">Initializing Portfolio...</p>
          
          {/* Tombol Skip di pojok kanan bawah */}
          <button 
            onClick={() => setIsLoading(false)} 
            className="absolute bottom-8 right-8 text-xs text-gray-600 hover:text-white transition font-medium border border-slate-700 px-3 py-1.5 rounded-md"
          >
            Skip Intro <span className="ml-1">↪</span>
          </button>
        </div>
      )}

      {/* ===== KONTEN UTAMA ===== */}
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Rama<span className="text-white">.IT</span>
            </h1>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            <a href="#contact" className="hidden md:block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-bold border border-white/10 transition">
              Hire Me
            </a>
          </div>
        </nav>

        {/* HOME SECTION */}
        <section id="home" className="min-h-screen flex items-center px-6 pt-24 pb-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold mb-6 border border-green-500/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Open for Work & Freelance
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Halo, Saya <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Fathur Ramadhan</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-md">
                Seorang <span className="font-bold text-white">Developer Aplikasi Berbasis Web</span> & <span className="font-bold text-white">Pengembang Sistem</span> yang fokus membangun inovasi digital berdampak nyata.
              </p>
              <div className="flex gap-4">
                <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-indigo-500/30">Lihat Proyek</a>
                <a href="#about" className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-bold border border-white/10 transition">About Me</a>
              </div>
            </div>

            {/* ID Card Kanan */}
            <div className="flex justify-center md:justify-end">
              <div className="animate-float relative w-72 h-96 perspective-1000">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-20 border-2 border-indigo-500/30 rounded-b-[40px] border-t-0"></div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-950 rounded-full"></div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col">
                  <div className="bg-indigo-600 p-4 flex justify-between items-center">
                    <span className="font-bold text-sm text-white tracking-wider">DEV ID CARD</span>
                    <span className="text-2xl">💻</span>
                  </div>
                  
                  <div className="p-6 flex justify-center">
                    <img 
                      src="/id-card-photo.jpg" 
                      alt="Foto Fathur" 
                      className="w-32 h-32 rounded-xl object-cover border-4 border-white/10 shadow-lg bg-slate-700"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/128x128/1e293b/white?text=Photo"; }}
                    />
                  </div>
                  
                  <div className="px-6 pb-6 text-center flex-1 flex flex-col justify-end">
                    <h3 className="font-bold text-lg text-white">Fathur Ramadhan</h3>
                    <p className="text-indigo-400 text-xs font-medium mb-4">Web Developer & System Engineer</p>
                    <div className="border-t border-white/10 pt-3 space-y-1 text-left text-[10px] font-mono text-gray-400">
                      <p>ID: <span className="text-white">112233-RAMA</span></p>
                      <p>STACK: <span className="text-white">NEXT.JS / SUPABASE</span></p>
                      <p>STATUS: <span className="text-green-400">ACTIVE</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">About <span className="text-indigo-400">Me</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-white">Pengalaman & Pendidikan</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Saya adalah mahasiswa <span className="font-bold text-white">Politeknik Negeri Banjarmasin</span> dengan fokus pada pengembangan sistem informasi. Saya memiliki jam terbang dalam membangun aplikasi berbasis web modern menggunakan Next.js, React, dan Laravel. Saya suka mengubah masalah yang kompleks menjadi antarmuka yang sederhana dan elegan.
                </p>
                <div className="space-y-4 border-l-2 border-indigo-500 pl-6">
                  <div>
                    <h4 className="font-bold text-white">Developer Aplikasi Berbasis Web</h4>
                    <p className="text-sm text-gray-500">2023 - Sekarang</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Politeknik Negeri Banjarmasin</h4>
                    <p className="text-sm text-gray-500">S1 - Teknologi Informasi</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col justify-center items-center text-center">
                <svg className="w-12 h-12 text-indigo-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <h4 className="font-bold text-lg mb-2">Download CV Saya</h4>
                <p className="text-sm text-gray-400 mb-6">Lihat riwayat hidup lengkap saya dalam format PDF.</p>
                <a href="/cv-fathur.pdf" download className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition w-full flex items-center justify-center gap-2">
                  Download CV <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">My <span className="text-indigo-400">Projects</span></h2>
              <p className="text-gray-500">Inovasi digital yang telah saya luncurkan ke publik.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((p, i) => (
                <div key={i} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-3xl">{p.icon}</div>
                    <div className="flex gap-4">
                      {p.stats.map((s, idx) => (
                        <div key={idx} className="text-right">
                          <p className="text-lg font-extrabold text-white">{s.value}</p>
                          <p className="text-[10px] uppercase text-gray-500 tracking-wider">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{p.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map(t => (
                      <span key={t} className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-1 rounded-md font-medium">{t}</span>
                    ))}
                  </div>

                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition w-full justify-center group-hover:bg-indigo-600">
                    Kunjungi Website 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get In <span className="text-indigo-400">Touch</span></h2>
            <p className="text-gray-500 mb-12">Saya terbuka untuk peluang kerja, freelance, atau sekadar diskusi seputar teknologi.</p>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a href="mailto:fathurramadhan410@gmail.com" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition text-left">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</h4>
                  <p className="text-white font-medium mt-1 break-all">fathurramadhan410@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition text-left">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">WhatsApp</h4>
                  <p className="text-white font-medium mt-1">+62 812-3456-7890</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-white/5">
          <p className="text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} Fathur Ramadhan (Rama-IT). All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
}