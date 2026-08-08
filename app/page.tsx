'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [activeProject, setActiveProject] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const webSkills = ['PHPMyAdmin', 'PHP Native', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Next.js', 'React', 'Laravel', 'TypeScript'];
  const networkSkills = ['Network Administration', 'Mikrotik Configuration', 'Routing & Switching', 'Access Point Setup', 'Network Segmentation', 'Crimping & Cabling', 'Computer Troubleshooting', 'Technical Support', 'Server Management', 'Cybersecurity Basics'];

  const projects = [
    {
      title: "Qur'an Tracker",
      desc: "Realtime Al-Qur'an reading tracker with biometric attendance & AI Quiz.",
      fullDesc: "Sistem Informasi pemantau rutinitas baca Al-Qur'an berbasis Realtime Database. Dibangun dengan arsitektur modern untuk menangani ratusan user secara bersamaan. Mengimplementasikan fitur Tadarus Jamaah Relay otomatis, Target Khatam cerdas, dan AI Quiz Harian.",
      url: "https://quran-tracker-next.vercel.app",
      benefits: "Meningkatkan konsistensi tilawah jamaah, transparansi progres, dan gamifikasi pembelajaran.",
      uiux: "Antarmuka dark mode elegan, dashboard analitik real-time, dan input form yang responsif.",
      tech: ['Next.js', 'Supabase', 'Tailwind'],
      isLive: true,
      icon: "📖"
    },
    {
      title: "Lapor Sapa",
      desc: "Smart City public service & complaint platform.",
      fullDesc: "Platform aduan masyarakat berbasis Smart City. Mengintegrasikan Google Maps API untuk pelacakan geografis aduan infrastruktur. Dashboard admin dilengkapi filter Prioritas dan Status Real-time.",
      url: "#",
      benefits: "Mempercepat respon pemerintah terhadap kerusakan fasilitas umum dan meningkatkan transparansi.",
      uiux: "UI bersih dengan kartu aduan interaktif, peta penuh layar, dan form pelaporan multi-langkah.",
      tech: ['Next.js', 'PostgreSQL', 'Google Maps API'],
      isLive: false,
      icon: "🏙️"
    },
    {
      title: "E-Klinik (SIMRS)",
      desc: "Hospital Management Information System.",
      fullDesc: "Sistem Informasi Manajemen Rumah Sakit modern yang menangani alur kerja medis dari awal hingga akhir. Modul mencakup Pendaftaran, Rekam Medis Elektronik, Farmasi, dan Billing.",
      url: "#",
      benefits: "Digitalisasi rekam medis untuk mengurangi kesalahan administrasi dan mempercepat pelayanan pasien.",
      uiux: "Layout tabular profesional, navigasi sidebar hierarkis, dan formulir input data medis yang terstruktur.",
      tech: ['PHP Native', 'MySQL', 'Bootstrap'],
      isLive: false,
      icon: "🏥"
    },
    {
      title: "SIMRT",
      desc: "Household & Environmental Management System.",
      fullDesc: "Sistem Informasi Manajemen Rumah Tangga untuk digitalisasi administrasi RT/RW. Fitur meliputi pencatatan kependudukan, manajemen iuran kas transparan, dan surat pengantar online.",
      url: "#",
      benefits: "Menghilangkan pencatatan kertas manual, mempermudah pelaporan warga, dan transparansi keuangan RT.",
      uiux: "Antarmuka dashboard card metrik, data table responsif, dan alur cetak dokumen yang rapi.",
      tech: ['Laravel', 'MySQL', 'Bootstrap'],
      isLive: false,
      icon: "🏘️"
    }
  ];

  // 1. TECH LOADING ANIMATION
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
        {/* Grid Background Animasi */}
        <div className="absolute inset-0 opacity-20 animate-grid-move" style={{ backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        {/* Garis Scan */}
        <div className="absolute w-full h-1 bg-indigo-500/50 shadow-[0_0_15px_4px_rgba(99,102,241,0.5)] animate-scan-line"></div>

        {/* Teks Logo */}
        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold tracking-tight text-white animate-glow-pulse">
          Rama<span className="text-indigo-400">.IT</span>
        </h1>
        
        <div className="absolute bottom-8 flex flex-col items-center">
          <div className="w-40 h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-indigo-500" style={{ animation: 'loading-bar 3s ease-in-out forwards' }}></div>
          </div>
          <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">Booting System...</p>
        </div>

        <button 
          onClick={() => setIsLoading(false)} 
          className="absolute bottom-8 right-8 text-xs text-gray-600 hover:text-white transition font-medium border border-slate-700 px-3 py-1.5 rounded-md"
        >
          Skip Intro <span className="ml-1">↪</span>
        </button>
      </div>
    );
  }

  // 2. MAIN CONTENT
  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-300 animate-fade-in-up`}>
      
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl border-b border-slate-200 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Rama<span className="text-slate-900 dark:text-white">.IT</span>
          </h1>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg text-slate-600 dark:text-yellow-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
              )}
            </button>
            <a href="#contact" className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition">Hire Me</a>
          </div>
        </div>
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-bold mb-6 border border-green-500/20">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Open for Work & Freelance
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Halo, Saya <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Fathur Ramadhan</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
              Seorang <span className="font-bold text-slate-900 dark:text-white">Developer Aplikasi Berbasis Web</span> & <span className="font-bold text-slate-900 dark:text-white">Network Engineer</span>. Memiliki pemahaman mendalam dalam sistem keamanan jaringan, administrasi jaringan, serta terampil dalam manajemen infrastruktur IT.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-indigo-500/30">Lihat Proyek</a>
              <a href="#about" className="bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white px-6 py-3 rounded-xl font-bold border border-slate-200 dark:border-white/10 transition">About</a>
            </div>
          </div>

          {/* ID Card Home (Full Foto) */}
          <div className="flex justify-center md:justify-end">
            <div className="animate-float relative w-72 h-[28rem] perspective-1000">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-20 border-2 border-indigo-500/30 rounded-b-[40px] border-t-0"></div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="absolute inset-0 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden group">
                <img src="/id-card-photo.jpg" alt="Foto Fathur" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-slate-200" onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/288x448/1e293b/6366f1?text=Fathur+Ramadhan"; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-extrabold text-2xl text-white drop-shadow-lg tracking-tight">Fathur Ramadhan</h3>
                  <p className="text-indigo-400 text-sm font-bold drop-shadow-lg uppercase tracking-wider mt-1">Web Dev & Network Eng.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (Vertical Layout, No Cards) */}
      <section id="about" className="py-24 px-6 border-t border-slate-200 dark:border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">About <span className="text-indigo-500 dark:text-indigo-400">Me</span></h2>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-500">💼</span>
              Experience
            </h3>
            <div className="border-l-2 border-indigo-500/30 pl-6 ml-4 space-y-3">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white">IT Support Engineer (Internship)</h4>
              <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium">RSUD Sultan Suriansyah • Jul 2024 - Dec 2024</p>
              <ul className="text-sm text-slate-600 dark:text-gray-400 space-y-2 list-disc list-inside text-justify">
                <li><span className="font-bold text-slate-900 dark:text-white">Network Troubleshooting & Provisioning:</span> Diagnosing and resolving network connectivity issues to ensure seamless hospital operations. Configuring VLANs and router settings.</li>
                <li><span className="font-bold text-slate-900 dark:text-white">Physical Infrastructure Management:</span> Organizing cable layouts, server racks, and hardware devices systematically. Installing and maintaining network cables (UTP/Fiber).</li>
                <li><span className="font-bold text-slate-900 dark:text-white">End User Technical Support:</span> Providing direct assistance to medical & administrative staff for hardware and software malfunctions. Setting up workstations.</li>
                <li><span className="font-bold text-slate-900 dark:text-white">Operational Integrity and Security:</span> Maintaining system stability and ensuring network data security protocols are strictly met according to hospital standards.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-500">🎓</span>
              Education
            </h3>
            <div className="border-l-2 border-indigo-500/30 pl-6 ml-4 space-y-6">
              <div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">Politeknik Negeri Banjarmasin (2023 - Present)</h4>
                <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium">D1 Applied Smart City Information Systems</p>
                <p className="text-sm text-slate-600 dark:text-gray-400 mt-1 text-justify">Focusing on smart city concepts, software development, and network infrastructure. Currently in the 3rd semester, actively building real-world IT projects.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">SMK Muhammadiyah 3 Banjarmasin (2020 - 2023)</h4>
                <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium">Computer Network & Telecommunications Engineering</p>
                <p className="text-sm text-slate-600 dark:text-gray-400 mt-1 text-justify">Vocational high school focusing on network administration, Mikrotik routing, server configuration, and physical cabling infrastructure.</p>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-500">👤</span>
              Profile Summary
            </h3>
            <p className="text-sm text-slate-600 dark:text-gray-400 text-justify leading-relaxed pl-4">
              I am a dedicated Web Developer and Network Engineer. My passion lies in building robust web applications while ensuring the underlying IT infrastructure is secure, scalable, and efficiently managed. With a strong background in both software engineering and hardware infrastructure, I bridge the gap between digital application logic and physical network reality.
            </p>
          </div>

          {/* Resume CV */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-500">📄</span>
              Resume / CV
            </h3>
            <div className="pl-4">
              <p className="text-sm text-slate-600 dark:text-gray-400 text-justify leading-relaxed mb-4">
                Need a detailed copy of my professional background, technical skills, and project portfolios? Download my comprehensive PDF resume here.
              </p>
              <a href="/cv-fathur.pdf" download className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition w-full sm:w-auto inline-flex items-center justify-center gap-2">
                Download CV <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 border-t border-slate-200 dark:border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">My <span className="text-indigo-500 dark:text-indigo-400">Skills</span></h2>
            <p className="text-slate-500 dark:text-gray-500">Expertise in Software Development & IT Infrastructure.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">💻</span>
                Web & Software Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {webSkills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-white/5 hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-300 cursor-default shadow-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">🌐</span>
                Network & IT Infrastructure
              </h3>
              <div className="flex flex-wrap gap-3">
                {networkSkills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-white/5 hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-300 cursor-default shadow-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION (Stats + Detail Layout) */}
      <section id="projects" className="py-24 px-6 border-t border-slate-200 dark:border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Part: Stats & ID Card */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">My <span className="text-indigo-500 dark:text-indigo-400">Projects</span></h2>
              <p className="text-slate-600 dark:text-gray-500 text-justify mb-8">
                I have spent the last few years building digital solutions ranging from web applications to IT infrastructure innovations. My focus is on creating systems that are not only functional but also scalable, secure, and user-friendly. Here are some statistics of my journey.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 text-center">
                  <h3 className="text-2xl font-extrabold text-indigo-500">1+</h3>
                  <p className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-wider mt-1">Years Exp</p>
                </div>
                <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 text-center">
                  <h3 className="text-2xl font-extrabold text-indigo-500">4+</h3>
                  <p className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-wider mt-1">Projects Built</p>
                </div>
                <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 text-center">
                  <h3 className="text-2xl font-extrabold text-indigo-500">3+</h3>
                  <p className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-wider mt-1">Innovations</p>
                </div>
              </div>
            </div>

            {/* ID Card Mini (Project Section) */}
            <div className="hidden md:flex justify-center items-center">
              <div className="animate-float relative w-48 h-64 perspective-1000">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-12 border-2 border-purple-500/30 rounded-b-[24px] border-t-0"></div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full z-10"></div>
                <div className="absolute inset-0 rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden group">
                  <img src="/id-card-photo.jpg" alt="Foto Fathur" className="w-full h-full object-cover bg-slate-200" onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/192x256/1e293b/6366f1?text=Fathur"; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                    <h3 className="font-extrabold text-sm text-white tracking-tight">Fathur Ramadhan</h3>
                    <p className="text-purple-400 text-[10px] font-bold uppercase tracking-wider mt-1">System Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Part: Project List (Click to open Detail) */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div key={i} onClick={() => setActiveProject(p)} className="group bg-slate-50 dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full -mr-8 -mt-8 group-hover:bg-indigo-500/10 transition-colors"></div>
                <div className="flex justify-between items-start mb-4 relative">
                  <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-xl flex items-center justify-center text-2xl shadow-sm">{p.icon}</div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${p.isLive ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' : 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400'}`}>
                    {p.isLive ? 'Live Deploy' : 'XAMPP'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">{p.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 px-2 py-1 rounded-md font-medium">{t}</span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm group-hover:gap-3 transition-all">
                  View Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 border-t border-slate-200 dark:border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get In <span className="text-indigo-500 dark:text-indigo-400">Touch</span></h2>
            <p className="text-slate-600 dark:text-gray-500 max-w-2xl mx-auto">I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether it's building a robust web application or optimizing a network infrastructure, feel free to reach out via the platforms below.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <a href="mailto:fathurramadhan410@gmail.com" className="flex flex-col items-center gap-3 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 p-6 rounded-2xl border border-slate-200 dark:border-white/10 transition text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 dark:text-indigo-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Email</h4>
              <p className="text-slate-900 dark:text-white font-medium text-xs break-all">fathurramadhan410@gmail.com</p>
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 p-6 rounded-2xl border border-slate-200 dark:border-white/10 transition text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 dark:text-green-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </div>
              <h4 className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">WhatsApp</h4>
              <p className="text-slate-900 dark:text-white font-medium text-xs">+62 812-3456-7890</p>
            </a>
            <a href="https://github.com/fathurramadhan410-glitch" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 p-6 rounded-2xl border border-slate-200 dark:border-white/10 transition text-center">
              <div className="w-12 h-12 rounded-full bg-slate-500/20 flex items-center justify-center text-slate-700 dark:text-slate-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <h4 className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">GitHub</h4>
              <p className="text-slate-900 dark:text-white font-medium text-xs">@fathurramadhan410</p>
            </a>
            <a href="https://instagram.com/rama_it_profile" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 p-6 rounded-2xl border border-slate-200 dark:border-white/10 transition text-center">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 dark:text-pink-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <h4 className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Instagram</h4>
              <p className="text-slate-900 dark:text-white font-medium text-xs">@rama_it_profile</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-200 dark:border-white/5 relative z-10">
        <p className="text-center text-sm text-slate-500 dark:text-gray-500">&copy; {new Date().getFullYear()} Fathur Ramadhan (Rama-IT). All Rights Reserved.</p>
      </footer>

      {/* MODAL DETAIL PROYEK (FIXED BLUR ISSUE) */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md p-4 flex items-center justify-center overflow-y-auto" onClick={() => setActiveProject(null)}>
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl p-8 md:p-10 relative my-8" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-xl flex items-center justify-center text-4xl">{activeProject.icon}</div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">{activeProject.title}</h3>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${activeProject.isLive ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{activeProject.isLive ? 'Live Deploy' : 'XAMPP'}</span>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Description</h4>
                <p className="text-slate-600 dark:text-gray-400 text-justify leading-relaxed">{activeProject.fullDesc}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Benefits (Manfaat)</h4>
                  <p className="text-slate-600 dark:text-gray-400 text-justify leading-relaxed">{activeProject.benefits}</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">UI/UX Experience</h4>
                  <p className="text-slate-600 dark:text-gray-400 text-justify leading-relaxed">{activeProject.uiux}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 py-2">
                {activeProject.tech.map((t: string) => (
                  <span key={t} className="text-xs bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-md font-medium">{t}</span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                {activeProject.isLive ? (
                  <a href={activeProject.url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-center hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                    Kunjungi Website <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                ) : (
                  <div className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-gray-400 px-6 py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    Run via XAMPP (Local)
                  </div>
                )}
                <a href="https://github.com/fathurramadhan410-glitch" target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-bold text-center hover:bg-slate-700 dark:hover:bg-slate-100 transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  View Code
                </a>
              </div>
            </div>

            <button onClick={() => setActiveProject(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white transition bg-slate-100 dark:bg-slate-800 rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}