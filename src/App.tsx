import React, { useState, useEffect } from 'react';
import { 
  Upload, 
  FileSpreadsheet, 
  Bot, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Menu, 
  X, 
  Calculator, 
  Download,
  AlertTriangle,
  ChevronRight,
  BarChart3,
  AlertOctagon,
  TrendingDown,
  Building2,
  Users,
  Globe,
  UserX,
  MessageSquare,
  ChevronDown,
  Calendar,
  Play,
  Sparkles,
  Star,
  ArrowRight,
  Database
} from 'lucide-react';

/* =========================================
   COMPONENTE DEL LOGO DE LA MARCA
   (Se añade translate="no" para evitar que Android traduzca "LMS")
   ========================================= */
const BrandLogo = ({ onClick, isDark = false }) => (
  <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group" onClick={onClick} translate="no">
    <div className="relative w-8 h-8 sm:w-11 sm:h-11 shrink-0 transition-transform duration-500 group-hover:scale-105">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="20" height="84" rx="3" fill={isDark ? "#F8FAFC" : "#1B202D"} />
        <rect x="8" y="70" width="84" height="20" rx="3" fill={isDark ? "#F8FAFC" : "#1B202D"} />
        <rect x="34" y="42" width="14" height="24" rx="2" fill="#C2E6CE" />
        <rect x="54" y="26" width="14" height="40" rx="2" fill="#5FB287" />
        <rect x="74" y="10" width="14" height="56" rx="2" fill="#268153" />
      </svg>
    </div>
    <div className="flex flex-col justify-center">
      <div className="flex items-baseline leading-none">
        <span className={`text-xl sm:text-[1.65rem] font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#1B202D]'}`}>LMS</span>
        <span className={`text-base sm:text-[1.3rem] font-medium tracking-tight ml-[0.35rem] ${isDark ? 'text-slate-300' : 'text-[#1B202D]'}`}>Accounting Group</span>
        <span className="text-2xl sm:text-4xl font-bold text-[#5FB287] leading-none ml-0.5">.</span>
      </div>
      <span className={`text-[7px] sm:text-[9px] font-semibold uppercase tracking-[0.35em] mt-1 ml-0.5 ${isDark ? 'text-emerald-400' : 'text-[#5B9F75]'}`}>
        Inteligencia Financiera
      </span>
    </div>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [openPricingFaq, setOpenPricingFaq] = useState(false);
  const [pricingIndex, setPricingIndex] = useState(2);

  // Calculator State (ROI)
  const [nits, setNits] = useState(750);
  const fixedSalary = 2500000;

  // Handle scroll for navbar and floating CTA
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setIsScrolled(scrollY > 20);
      setIsScrolledPastHero(scrollY > windowHeight * 0.7);
      setIsNearBottom(scrollY + windowHeight >= documentHeight - 800); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animaciones Premium (Scroll Reveal)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: "0px 0px -10% 0px" 
    });

    document.querySelectorAll('.reveal-target').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Función para hacer scroll suave hasta el calendario integrado
  const scrollToCalendly = () => {
    const element = document.getElementById('agendamiento-calendly');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // ==========================================
  // CALCULATOR LOGIC (Calculadora de Ahorro)
  // ==========================================
  const hoursSaved = Math.round((nits * 10) / 60); 
  const hourlyRate = Math.round(fixedSalary / 160); 
  const manualCost = hoursSaved * hourlyRate; 
  
  let lmsCost = 0;
  if (nits <= 100) lmsCost = 149900;
  else if (nits <= 250) lmsCost = 299900;
  else if (nits <= 750) lmsCost = 649900;
  else if (nits <= 1000) lmsCost = 999900;
  else lmsCost = -1; // Flag para volumen a la medida
  
  const savings = lmsCost !== -1 ? Math.max(0, manualCost - lmsCost) : 0;
  const isCustomVolume = nits > 1000;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(value);
  };

  const faqs = [
    {
      q: "¿Qué sucede si nuestro documento de origen está desorganizado?",
      a: "Nuestra tecnología está capacitada para estructurar y organizar la información independientemente del formato de origen. El único requisito es contar con una columna identificadora (NIT o Cédula)."
    },
    {
      q: "¿Cómo garantizan la confidencialidad de nuestras bases de datos?",
      a: "Operamos bajo estrictos protocolos de seguridad y cifrado de nivel bancario (AES-256). Una vez procesado el requerimiento, la información es eliminada permanentemente de nuestros servidores, en total cumplimiento de la Ley 1581 de Protección de Datos."
    },
    {
      q: "¿En qué basan el cálculo de ahorro de su plataforma?",
      a: "El modelo se calcula utilizando el salario base promedio de un auxiliar contable en Colombia ($2.500.000 COP) y el tiempo operativo estandarizado que toma auditar y corregir manualmente cada NIT en las plataformas gubernamentales."
    },
    {
      q: "¿Qué datos específicos validan en este proceso?",
      a: "Verificamos la existencia y vigencia del RUT, corregimos y estandarizamos las razones sociales y aseguramos la segmentación correcta de nombres y apellidos para personas naturales, previniendo errores críticos en la Información Exógena."
    },
    {
      q: "¿En qué consiste la sesión de diagnóstico?",
      a: "Es una sesión estratégica de 30 minutos. En ella analizaremos el volumen de su información, revisaremos posibles contingencias fiscales asociadas a su sector y estructuraremos un plan de validación acorde a sus necesidades corporativas."
    }
  ];

  const pricingTiers = [
    { name: "Starter", price: "$149.900", nits: "100", type: "(Nac + Int)", accuracy: "90%", feature: "Carga masiva CSV incluida.", highlight: false },
    { name: "Básico", price: "$299.900", nits: "250", type: "(Nac + Int)", accuracy: "90%", feature: "Carga masiva CSV incluida.", highlight: false },
    { name: "Pro", price: "$649.900", nits: "750", type: "(Nac + Int)", accuracy: "91%", feature: "Carga masiva CSV rápida.", highlight: "border-2 border-[#1A6B4A] shadow-lg shadow-emerald-500/10", badge: "Más Popular" },
    { name: "Premium", price: "$1.199.900", nits: "1.250", type: "(Nac + Int)", accuracy: "90%", feature: "Carga CSV + Soporte prioritario.", highlight: "border-2 border-amber-400 shadow-xl shadow-amber-500/20 bg-gradient-to-b from-white to-amber-50/30", badge: "Exclusivo", badgeIcon: Sparkles, badgeColor: "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900" },
    { name: "Enterprise", price: "A medida", nits: "+1.250 NITs", type: "Volumen a la medida", accuracy: "Variable", feature: "Integración 100% a la medida.", highlight: false }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700;800&display=swap');
          
          .font-sans { font-family: 'Outfit', sans-serif; }
          .font-serif { font-family: 'Instrument Serif', serif; }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
            width: max-content;
          }
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(5%, 10%) scale(1.05); }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-5%, -10%) scale(1.05); }
          }
          .animate-float1 { animation: float1 15s ease-in-out infinite; }
          .animate-float2 { animation: float2 20s ease-in-out infinite; }
          
          @keyframes scan {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(400%); opacity: 0; }
          }
          .animate-scan { animation: scan 3s ease-in-out infinite; }

          .reveal-target {
            opacity: 0;
            transform: translateY(50px) scale(0.96);
            transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: opacity, transform;
          }
          .reveal-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          .reveal-delay-100 { transition-delay: 100ms; }
          .reveal-delay-200 { transition-delay: 200ms; }
          .reveal-delay-300 { transition-delay: 300ms; }
          
          @keyframes premiumFadeUp {
            from { opacity: 0; transform: translateY(50px) scale(0.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-premium-up {
            opacity: 0;
            animation: premiumFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .anim-delay-100 { animation-delay: 100ms; }
          .anim-delay-200 { animation-delay: 200ms; }
          .anim-delay-300 { animation-delay: 300ms; }
          .anim-delay-400 { animation-delay: 400ms; }

          /* Scrollbar oculta para la tabla de precios en móvil */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#10b981] selection:text-white relative">
        
        {/* Navigation - Diseño Dock Flotante */}
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}>
          <div className={`absolute inset-0 transition-opacity duration-500 ${isScrolled ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/50 shadow-sm opacity-100' : 'opacity-0'}`}></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              
              <div className="flex-1 flex justify-start relative z-10">
                <BrandLogo isDark={!isScrolled} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
              </div>
              
              <div className={`hidden lg:flex flex-none items-center justify-center p-1.5 rounded-full border transition-all duration-500 relative z-10 ${isScrolled ? 'bg-slate-100/60 border-slate-200/60 backdrop-blur-md shadow-sm' : 'bg-white/5 border-white/10 backdrop-blur-md'}`}>
                {[
                  { name: 'El Riesgo', href: '#problema' },
                  { name: 'Cómo Funciona', href: '#como-funciona' },
                  { name: 'Rentabilidad', href: '#calculadora' },
                  { name: 'Planes', href: '#planes' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? 'text-slate-600 hover:text-[#1A6B4A] hover:bg-white hover:shadow-sm' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="hidden lg:flex flex-1 justify-end relative z-10">
                <button onClick={scrollToCalendly} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center gap-2 ${isScrolled ? 'bg-[#1A6B4A] hover:bg-[#0B3D2E] text-white shadow-lg shadow-emerald-500/20' : 'bg-white text-[#0B3D2E] hover:bg-slate-100 shadow-xl'}`}>
                  <Calendar size={16} />
                  Agendar Diagnóstico
                </button>
              </div>

              <div className="lg:hidden relative z-10">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col space-y-4">
              <a href="#problema" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium p-2">El Riesgo</a>
              <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium p-2">Cómo Funciona</a>
              <a href="#calculadora" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium p-2">Rentabilidad</a>
              <a href="#planes" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium p-2">Planes</a>
              <button onClick={() => { setIsMobileMenuOpen(false); scrollToCalendly(); }} className="bg-[#1A6B4A] text-white px-5 py-3 rounded-xl font-medium w-full mt-2 flex justify-center items-center gap-2">
                <Calendar size={18} />
                Agendar Diagnóstico
              </button>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B3D2E] min-h-[95vh] flex flex-col justify-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-900/40 blur-[120px] mix-blend-screen animate-float1"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-teal-800/30 blur-[150px] mix-blend-screen animate-float2"></div>
            <div className="absolute top-[30%] left-[40%] w-[50vw] h-[50vw] rounded-full bg-[#1A6B4A]/30 blur-[120px] mix-blend-screen animate-float1" style={{animationDelay: '-5s'}}></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              <div className="animate-premium-up inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-emerald-50 font-medium">+ de 20 empresas confían en nosotros</span>
              </div>
              
              <h1 className="animate-premium-up anim-delay-100 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Valida miles de <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">NITs sin errores</span> en segundos.
              </h1>
              
              <p className="animate-premium-up anim-delay-200 text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                Audita tu base de datos contra el <span className="font-serif italic text-emerald-300 text-2xl mx-1">RUES</span> y los registros de la <span className="font-serif italic text-emerald-300 text-2xl mx-1">DIAN</span>. Extrae información exacta, corrige el dígito de verificación y elimina <span className="text-white font-medium border-b border-emerald-400/50 pb-0.5">contingencias operativas</span>.
              </p>
              
              <div className="animate-premium-up anim-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button onClick={scrollToCalendly} className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 group">
                  <Calendar size={20} className="group-hover:scale-110 transition-transform" />
                  Agendar reunión de diagnóstico
                </button>
              </div>
              
              {/* ========================================================= */}
              {/* Gráfico Visual del Proceso (Input NITs y Resultado Imagen)  */}
              {/* ========================================================= */}
              <div className="animate-premium-up anim-delay-400 relative max-w-5xl mx-auto rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 bg-slate-900/80 backdrop-blur-xl overflow-hidden flex flex-col md:flex-row">
                
                {/* Left Side: Input Data (NITs) */}
                <div className="w-full md:w-5/12 p-6 border-b md:border-b-0 md:border-r border-slate-700/50 bg-slate-800/30 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4 text-slate-400 text-sm font-medium justify-between">
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet size={18} className="text-emerald-400" /> Ingresa tus NITs
                    </div>
                    <span className="text-[10px] bg-slate-700/50 px-2 py-1 rounded text-slate-300 font-mono tracking-wider">RAW DATA</span>
                  </div>
                  <div className="relative group">
                    <textarea 
                      className="w-full h-48 bg-slate-900 border border-slate-600/50 rounded-xl p-4 text-slate-300 font-mono text-sm focus:outline-none focus:border-emerald-500/50 transition-all resize-none shadow-inner leading-relaxed overflow-hidden"
                      defaultValue={`830003564\n900234567-1\n1010123456\n860.001.022\n1020333444 PEREZ`}
                      readOnly
                    ></textarea>
                    <div className="absolute bottom-3 right-3">
                      <button className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors cursor-default">
                        <Bot size={14} /> Procesar
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-4 text-center">Pega tu lista sucia y la IA hace el resto.</p>
                </div>

                {/* Middle AI Bot Indicator */}
                <div className="hidden md:flex absolute left-[41.66%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-[#1A6B4A] rounded-full border-4 border-slate-900 items-center justify-center z-20 shadow-[0_0_20px_rgba(26,107,74,0.8)]">
                  <Bot size={24} className="text-emerald-400 animate-pulse" />
                </div>

                {/* Right Side: Imagen Imgur Entregada */}
                <div className="w-full md:w-7/12 p-6 bg-slate-900/50 relative overflow-hidden flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent w-full h-20 animate-scan pointer-events-none"></div>
                  
                  <div className="w-full relative z-10 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)] border border-emerald-500/20 bg-slate-800">
                     <div className="bg-slate-800/90 backdrop-blur-md py-3 px-4 border-b border-slate-700/50 flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400" /> 
                        <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Estructura Perfecta para DIAN</span>
                     </div>
                     
                     <img 
                       src="https://i.ibb.co/YTwCD1LN/image.png" 
                       alt="Estructura Perfecta DIAN generada por LMS" 
                       className="w-full h-auto object-contain bg-white"
                       onError={(e) => {
                         e.target.onerror = null; 
                         e.target.src = "https://ibb.co/YTwCD1LN"; 
                       }}
                     />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Logo Ticker / Prueba Social */}
        <section className="py-10 border-b border-slate-200 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Ecosistema y Plataformas Integradas</p>
            <div className="relative flex overflow-x-hidden group">
              <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-2 group-hover:[animation-play-state:paused]">
                {[...Array(3)].map((_, i) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 hover:text-[#1A6B4A] transition-all cursor-pointer">
                      <BarChart3 size={28} /> <span className="font-bold text-xl">Siigo</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 hover:text-[#1A6B4A] transition-all cursor-pointer">
                      <Building2 size={28} /> <span className="font-bold text-xl">Loggro</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 hover:text-[#1A6B4A] transition-all cursor-pointer">
                      <Globe size={28} /> <span className="font-bold text-xl">FacturaTech</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 hover:text-[#1A6B4A] transition-all cursor-pointer">
                      <ShieldCheck size={28} /> <span className="font-bold text-xl">DIAN API</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 hover:text-[#1A6B4A] transition-all cursor-pointer">
                      <Users size={28} /> <span className="font-bold text-xl">Alegra</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* El Problema Oculto */}
        <section id="problema" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-target text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#1A6B4A] font-bold tracking-wide uppercase text-sm mb-3">El Problema Oculto</h2>
              <h3 className="text-4xl md:text-5xl text-slate-900 mb-6 font-serif font-normal leading-tight">
                ¿Sabías que un dígito erróneo en el reporte puede <span className="italic text-[#1A6B4A]">costarte millones?</span>
              </h3>
              <p className="text-lg text-slate-600 font-medium">Transmitir información exógena con inconsistencias en las bases de terceros es el detonante principal de requerimientos y sanciones por parte de la DIAN.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="reveal-target bg-rose-50 border border-rose-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                  <AlertOctagon size={28} />
                </div>
                <div className="text-3xl font-extrabold text-rose-600 mb-3 leading-tight">Sanciones de Alto Nivel</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Multas Variables</h4>
                <p className="text-slate-600 leading-relaxed text-sm">Es la penalidad a la que se expone una compañía por suministrar información tributaria con errores, inconsistencias o de manera extemporánea.</p>
              </div>

              <div className="reveal-target reveal-delay-100 bg-amber-50 border border-amber-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <Clock size={28} />
                </div>
                <div className="text-4xl font-extrabold text-amber-600 mb-3">3 Semanas</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Carga Operativa</h4>
                <p className="text-slate-600 leading-relaxed text-sm">Es el tiempo estandarizado que invierte un departamento contable depurando y validando manualmente listados de RUTs para el cierre fiscal.</p>
              </div>

              <div className="reveal-target reveal-delay-200 bg-emerald-50 border border-emerald-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingDown size={28} />
                </div>
                <div className="text-4xl font-extrabold text-emerald-600 mb-3">90%</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Bases con Errores</h4>
                <p className="text-slate-600 leading-relaxed text-sm">Nueve de cada diez empresas colombianas inician su proceso de auditoría con terceros inactivos, direcciones inválidas o regímenes erróneos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="como-funciona" className="py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-target text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#1A6B4A] font-bold tracking-wide uppercase text-sm mb-3">Metodología</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">De un Excel desordenado a un archivo <span className="italic text-[#1A6B4A]">estructurado</span> en 3 pasos</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
              <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-slate-200 -z-10"></div>
              
              {[
                {
                  icon: <Upload size={32} />,
                  title: "1. Carga de Información",
                  desc: "Exporte su base de terceros actual (proveedores, clientes, empleados) en formato Excel o CSV. Nuestro sistema admite cualquier estructura inicial."
                },
                {
                  icon: <Bot size={32} />,
                  title: "2. Procesamiento Automatizado",
                  desc: "Nuestro motor tecnológico analiza y depura su información en tiempo récord, identificando inconsistencias fiscales y estructurando los datos bajo estrictos parámetros normativos."
                },
                {
                  icon: <FileSpreadsheet size={32} />,
                  title: "3. Descarga y Reporte",
                  desc: "Obtenga un archivo depurado, limpio y configurado exactamente bajo los requisitos del prevalidador oficial de la DIAN, listo para su transmisión segura."
                }
              ].map((step, idx) => (
                <div key={idx} className={`reveal-target ${idx === 1 ? 'reveal-delay-100' : idx === 2 ? 'reveal-delay-200' : ''} relative group text-center`}>
                  <div className="w-20 h-20 mx-auto bg-white border-4 border-slate-50 rounded-2xl flex items-center justify-center text-[#1A6B4A] shadow-xl shadow-slate-200/50 mb-6 group-hover:scale-110 group-hover:bg-[#1A6B4A] group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Características */}
        <section id="caracteristicas" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-target text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#1A6B4A] font-bold tracking-wide uppercase text-sm mb-3">Cobertura Estratégica</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Auditoría sobre <span className="italic text-[#1A6B4A]">diversos tipos</span> de contribuyentes</h3>
              <p className="text-lg text-slate-600">Nuestra arquitectura comprende la complejidad corporativa del ecosistema empresarial colombiano.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="reveal-target flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#1A6B4A] group-hover:bg-[#1A6B4A] group-hover:text-white transition-colors">
                  <Building2 size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Personas Jurídicas</h4>
                  <p className="text-slate-600 text-sm">Extracción de la razón social registrada oficialmente. Cálculo y corrección automática del dígito de verificación (DV) para prevenir rechazos documentales.</p>
                </div>
              </div>

              <div className="reveal-target reveal-delay-100 flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#1A6B4A] group-hover:bg-[#1A6B4A] group-hover:text-white transition-colors">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Personas Naturales (Comerciantes)</h4>
                  <p className="text-slate-600 text-sm">Validación aplicable <strong>exclusivamente</strong> a perfiles con matrícula mercantil activa (RUES). Procesamiento de separación de nombres y apellidos según lineamientos DIAN.</p>
                </div>
              </div>

              <div className="reveal-target flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#1A6B4A] group-hover:bg-[#1A6B4A] group-hover:text-white transition-colors">
                  <Globe size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Terceros Internacionales</h4>
                  <p className="text-slate-600 text-sm">Análisis estructural enfocado a proveedores ubicados en el exterior, aplicando las normativas de tipo de documento y requerimientos especiales de reporte.</p>
                </div>
              </div>

              <div className="reveal-target reveal-delay-100 flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#1A6B4A] group-hover:bg-[#1A6B4A] group-hover:text-white transition-colors">
                  <UserX size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Identificación de Inactivos</h4>
                  <p className="text-slate-600 text-sm">Detección y emisión de alertas tempranas frente a contribuyentes con estado RUT cancelado o inactivo, protegiendo sus costos y deducciones asociadas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Savings Calculator Visual e Interactivo */}
        <section id="calculadora" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-target text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-[#1A6B4A] font-bold tracking-wide uppercase text-sm mb-3">Eficiencia Financiera</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Proyección de <span className="italic text-[#1A6B4A]">Ahorro Operativo</span></h3>
            </div>

            <div className="reveal-target bg-[#0B3D2E] rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                
                <div className="p-8 lg:p-12 relative flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                      <Calculator size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">¿Cuál es su exposición actual?</h2>
                  </div>
                  <p className="text-slate-300 mb-6 font-light">Ajuste el volumen de su base para proyectar las horas y el capital inmovilizado en procesos de verificación manual.</p>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-3 mb-2">
                      <span className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs md:text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                        <AlertOctagon size={14} /> Costo operativo manual: {formatCurrency(manualCost)}
                      </span>
                      <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all">
                        <Clock size={14} /> +{hoursSaved}h operativas a favor
                      </span>
                      {!isCustomVolume && (
                        <span className="bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs md:text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all">
                          <TrendingDown size={14} /> +{formatCurrency(savings)} liberados
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-slate-300">Volumen de terceros a depurar</label>
                        <span className="text-emerald-400 font-bold">{nits >= 5000 ? '+5.000' : nits.toLocaleString('es-CO')} NITs</span>
                      </div>
                      <input 
                        type="range" 
                        min="100" 
                        max="5000" 
                        step="100" 
                        value={nits}
                        onChange={(e) => setNits(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-slate-400">Base Salarial Analista (Fijo)</span>
                        <span className="text-slate-300 font-mono text-sm">{formatCurrency(fixedSalary)}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 italic mt-2">* Proyección estructurada sobre un promedio de 10 minutos de trabajo continuo por NIT (búsqueda DIAN, validación RUES y corrección documental).</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1A6B4A] to-[#0d4a32] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                      <div className="flex items-center gap-2 mb-1 relative z-10">
                        <div className="text-sm text-emerald-100">Inversión en Validación Automatizada</div>
                      </div>
                      <div className={`text-2xl font-bold text-white transition-all duration-500 relative z-10 ${isCustomVolume ? 'blur-md opacity-30' : ''}`}>
                        {isCustomVolume ? '$1.500.000' : formatCurrency(lmsCost)}
                      </div>
                      {isCustomVolume && (
                         <div className="absolute inset-0 flex items-center justify-center z-20">
                           <span className="bg-slate-900/80 text-white text-sm font-bold px-4 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">Requiere Análisis Ejecutivo</span>
                         </div>
                      )}
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-xl transform scale-105 relative border border-emerald-100 overflow-hidden">
                      <div className="absolute -right-6 -top-6 text-emerald-50 opacity-50">
                        <BarChart3 size={100} />
                      </div>
                      <div className="absolute top-4 right-4 animate-pulse">
                        <Sparkles size={24} className="text-amber-400" />
                      </div>
                      <div className="relative z-10">
                        <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <TrendingDown size={16} /> Ahorro proyectado con nuestra tecnología
                        </div>
                        <div className={`text-4xl lg:text-5xl font-extrabold text-[#0B3D2E] mb-2 transition-all duration-500 relative z-10 ${isCustomVolume ? 'blur-md opacity-20' : ''}`}>
                          {isCustomVolume ? '$10.000.000' : formatCurrency(savings)}
                        </div>
                        {isCustomVolume && (
                          <div className="absolute top-10 left-0 w-full flex justify-start z-20">
                            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg font-black px-4 py-2 rounded-r-lg shadow-lg">Estructura High-Volume</span>
                          </div>
                        )}
                        <div className="text-sm text-slate-600 font-medium mt-2">Retorno de eficiencia medible para su departamento contable.</div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button onClick={scrollToCalendly} className="bg-[#0B3D2E] hover:bg-[#1A6B4A] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3 mx-auto">
                <Calendar size={20} />
                Agendar sesión de evaluación
              </button>
            </div>
          </div>
        </section>

        {/* FAQ - Acordeón Premium */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 reveal-target sticky top-32">
                <h2 className="text-[#1A6B4A] font-bold tracking-wide uppercase text-sm mb-3">Directorio de Consultas</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">Preguntas <br/> <span className="italic text-[#1A6B4A]">Frecuentes</span></h3>
                <p className="text-slate-600 font-light mb-8 text-lg leading-relaxed">Resolvemos las inquietudes más comunes respecto a nuestro protocolo de verificación. Si requiere un análisis específico, reserve una sesión ejecutiva en vivo.</p>
                <button onClick={scrollToCalendly} className="flex items-center gap-2 text-[#1A6B4A] font-bold hover:text-[#0B3D2E] transition-colors border-b-2 border-transparent hover:border-[#0B3D2E] pb-1">
                  <MessageSquare size={18} />
                  Programar llamada con un asesor
                </button>
              </div>

              <div className="lg:col-span-7 space-y-4 reveal-target reveal-delay-100">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`bg-slate-50 rounded-2xl overflow-hidden transition-all duration-300 border ${openFaq === index ? 'border-emerald-300 shadow-lg shadow-emerald-500/5' : 'border-slate-200 hover:border-emerald-200'}`}
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                    >
                      <span className={`font-bold text-lg transition-colors ${openFaq === index ? 'text-[#1A6B4A]' : 'text-slate-900'}`}>{faq.q}</span>
                      <ChevronDown 
                        className={`text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${openFaq === index ? 'rotate-180 text-[#1A6B4A]' : ''}`} 
                        size={20} 
                      />
                    </button>
                    <div 
                      className={`px-6 md:px-8 text-slate-600 transition-all duration-300 ease-in-out font-light leading-relaxed ${
                        openFaq === index ? 'pb-6 max-h-40 opacity-100' : 'max-h-0 opacity-0 pb-0'
                      }`}
                    >
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* NUEVA TABLA DE PRECIOS DINÁMICA */}
        <section id="planes" className="bg-[#0B3D2E] py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#1A6B4A] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="reveal-target text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4 leading-tight">
                Planes de <span className="italic text-emerald-300">Validación Integral</span>
              </h2>
              <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto font-light">
                Seleccione la cobertura adecuada para su volumen operativo. Sin contratos forzosos.
              </p>
            </div>

            {/* Grid de Precios (Tabla tipo Card para visibilidad inmediata) */}
            <div className="reveal-target flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-5 gap-6 pb-8 lg:pb-0 snap-x">
              {pricingTiers.map((tier, idx) => {
                const isPremium = tier.name === "Premium" || tier.name === "Pro";
                const isEnterprise = tier.name === "Enterprise";

                return (
                  <div key={idx} className={`min-w-[280px] lg:min-w-0 snap-center bg-white rounded-3xl p-6 relative flex flex-col transition-all duration-300 hover:-translate-y-2 ${tier.highlight || 'border border-slate-200'}`}>
                    
                    {/* Badge Condicional */}
                    {tier.badge && (
                      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md ${tier.badgeColor || 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-900'}`}>
                        {tier.badgeIcon && <tier.badgeIcon size={10} className="inline mr-1" />}
                        {tier.badge}
                      </div>
                    )}
                    
                    <div className="mb-6 flex-grow border-b border-slate-100 pb-6">
                      <h4 className="text-lg font-bold text-slate-400 mb-1">{tier.name}</h4>
                      <div className="flex items-baseline gap-1">
                        <span className={`font-extrabold text-slate-900 tracking-tight ${isEnterprise ? 'text-2xl' : 'text-3xl'}`}>
                          {tier.price}
                        </span>
                        {!isEnterprise && <span className="text-slate-500 text-xs font-medium">/ único</span>}
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8 text-sm">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={16} className={`${isPremium ? 'text-amber-500' : 'text-emerald-500'} shrink-0 mt-0.5`} />
                        <span className="text-slate-700">
                          {isEnterprise ? <strong>{tier.nits}</strong> : <>Hasta <strong>{tier.nits} NITs</strong> <span className="text-slate-400 text-xs block">{tier.type}</span></>}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={16} className={`${isPremium ? 'text-amber-500' : 'text-emerald-500'} shrink-0 mt-0.5`} />
                        <span className="text-slate-700">Precisión <strong>{tier.accuracy}</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={16} className={`${isPremium ? 'text-amber-500' : 'text-emerald-500'} shrink-0 mt-0.5`} />
                        <span className="text-slate-700">{tier.feature}</span>
                      </li>
                    </ul>
                    
                    <button onClick={scrollToCalendly} className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${isPremium ? (tier.name === 'Premium' ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-amber-500/30' : 'bg-[#1A6B4A] text-white shadow-emerald-500/30') : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                      Elegir {tier.name}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Calendly Inline Widget */}
            <div id="agendamiento-calendly" className="reveal-target mt-16 w-full max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-[700px] border border-white/10 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-500 z-10"></div>
                <iframe
                  src="https://calendly.com/contacto-lms-accounting/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=10b981"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Agendar Diagnóstico LMS Accounting"
                  className="relative z-0"
                ></iframe>
              </div>
            </div>
            
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 md:col-span-2">
                <div className="mb-6">
                  <BrandLogo isDark={true} />
                </div>
                <p className="text-sm text-slate-500 max-w-md mt-4 leading-relaxed">
                  Soluciones tecnológicas para firmas corporativas. Minimice su riesgo fiscal ante la DIAN mediante modelos de inteligencia financiera.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Navegación</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#como-funciona" className="hover:text-emerald-400 transition-colors">Metodología</a></li>
                  <li><a href="#caracteristicas" className="hover:text-emerald-400 transition-colors">Cobertura Estratégica</a></li>
                  <li><a href="#calculadora" className="hover:text-emerald-400 transition-colors">Eficiencia Financiera</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Conexión</h4>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={scrollToCalendly} className="hover:text-emerald-400 transition-colors text-left">Reserva Ejecutiva</button></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Soporte y Consultas</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Protección de Datos</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
              <p>© {new Date().getFullYear()} LMS Accounting Group. Todos los derechos reservados.</p>
              <p className="text-slate-500 flex items-center gap-1">
                Estructuración Contable mediante Inteligencia Artificial
              </p>
            </div>
          </div>
        </footer>

        {/* CTA Flotante Sutil (Desaparece al llegar al fondo) */}
        <div className={`fixed bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolledPastHero && !isNearBottom ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-90 pointer-events-none'}`}>
          <button onClick={scrollToCalendly} className="bg-[#0B3D2E] text-white px-5 sm:px-6 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-[0_15px_40px_-10px_rgba(11,61,46,0.8)] border border-[#1A6B4A]/50 flex items-center gap-3 hover:bg-[#1A6B4A] hover:scale-105 transition-all duration-300 group">
            {/* Indicador Pulse animado */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            
            <span className="whitespace-nowrap">Agendar evaluación estructural</span>
            <ChevronRight size={18} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </>
  );
}
