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
  Sparkles
} from 'lucide-react';

/* =========================================
   COMPONENTE DEL LOGO DE LA MARCA
   ========================================= */
const BrandLogo = ({ onClick, isDark = false }) => (
  <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group" onClick={onClick}>
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
  const [pricingIndex, setPricingIndex] = useState(2); // Inicia en plan Pro

  // Calculator State
  const [nits, setNits] = useState(500);
  const fixedSalary = 2500000; // Salario fijado como solicitaste

  // Handle scroll for navbar and floating CTA
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setIsScrolled(scrollY > 20);
      setIsScrolledPastHero(scrollY > windowHeight * 0.7);
      
      // Detectar si está cerca del final (oculta CTA para no pisar Calendly)
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
          // Dejamos de observar una vez que ya apareció para evitar parpadeos
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: "0px 0px -10% 0px" // Dispara la animación un poco antes de llegar al borde inferior
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
      // Ajuste para que el navbar fijo no tape el calendario
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Calculator Logic con Salario Fijo
  const manualCost = Math.round(fixedSalary * 0.75); // 3 semanas
  
  let lmsCost = 1500000;
  if (nits <= 1000) lmsCost = 249000;
  else if (nits <= 5000) lmsCost = 699000;

  const savings = Math.max(0, manualCost - lmsCost);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(value);
  };

  const faqs = [
    {
      q: "¿Qué pasa si mi Excel está muy desordenado?",
      a: "No te preocupes. Nuestra IA está entrenada para leer diferentes formatos, columnas desordenadas y limpiar caracteres especiales. Solo necesitas que exista una columna con el NIT o cédula."
    },
    {
      q: "¿Es seguro procesar la información de mis terceros?",
      a: "Absolutamente. Utilizamos cifrado de nivel bancario (AES-256). Una vez procesado, los datos se eliminan automáticamente de nuestros servidores por cumplimiento de la ley de protección de datos (Ley 1581)."
    },
    {
      q: "¿Cómo calculan el ahorro mostrado?",
      a: "Basamos el cálculo en el salario base de un auxiliar contable estándar en Colombia ($2.500.000 COP) y el tiempo promedio de 3 semanas que se gasta validando, corrigiendo y buscando NITs uno a uno manualmente."
    },
    {
      q: "¿Qué información extraen de la base de datos de la DIAN?",
      a: "Validamos que el RUT exista y esté activo, corregimos nombres/razones sociales exactas, y separamos nombres de apellidos para personas naturales (requisito vital para Exógena)."
    },
    {
      q: "¿Cómo funciona el diagnóstico gratuito?",
      a: "Agendamos una breve llamada por Meet/Zoom. Analizamos el estado de tus bases de datos, te explicamos la normativa aplicable a tu sector y te mostramos en vivo cómo nuestra tecnología limpia tu información."
    }
  ];

  const pricingTiers = [
    { name: "Starter", price: "$149.900", nits: "100", type: "(Nac + Int)", accuracy: "90%", feature: "Búsqueda 1 a 1 manual." },
    { name: "Básico", price: "$299.900", nits: "250", type: "(Nac + Int)", accuracy: "90%", feature: "+ Carga masiva CSV (Básica)." },
    { name: "Pro", price: "$649.900", nits: "750", type: "(Nac + Int)", accuracy: "91%", feature: "+ Carga masiva CSV (Rápida)." },
    { name: "Premium", price: "$1.199.900", nits: "1.250", type: "(Nac + Int)", accuracy: "90%", feature: "+ Soporte prioritario." },
    { name: "Enterprise", price: "A medida", nits: "Volúmenes Gigantes", type: "", accuracy: "Variable", feature: "Desarrollo a la medida." }
  ];

  const currentPlan = pricingTiers[pricingIndex];
  const isPremiumPlan = pricingIndex >= 3; // Premium y Enterprise

  return (
    <>
      {/* Importación de Google Fonts para la tipografía dinámica y Animaciones */}
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

          /* Premium Scroll Reveal Styles */
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
          
          /* Animaciones específicas de carga inicial (Hero) */
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
        `}
      </style>

      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#10b981] selection:text-white relative">
        
        {/* Navigation - Diseño Dock Flotante */}
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}>
          <div className={`absolute inset-0 transition-opacity duration-500 ${isScrolled ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/50 shadow-sm opacity-100' : 'opacity-0'}`}></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              
              {/* Left: Logo */}
              <div className="flex-1 flex justify-start relative z-10">
                <BrandLogo isDark={!isScrolled} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
              </div>
              
              {/* Center: Desktop Navigation Pill */}
              <div className={`hidden lg:flex flex-none items-center justify-center p-1.5 rounded-full border transition-all duration-500 relative z-10 ${isScrolled ? 'bg-slate-100/60 border-slate-200/60 backdrop-blur-md shadow-sm' : 'bg-white/5 border-white/10 backdrop-blur-md'}`}>
                {[
                  { name: 'El Problema', href: '#problema' },
                  { name: 'Cómo Funciona', href: '#como-funciona' },
                  { name: 'Características', href: '#caracteristicas' },
                  { name: 'Ahorro', href: '#calculadora' }
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

              {/* Right: Desktop CTA */}
              <div className="hidden lg:flex flex-1 justify-end relative z-10">
                <button onClick={scrollToCalendly} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center gap-2 ${isScrolled ? 'bg-[#1A6B4A] hover:bg-[#0B3D2E] text-white shadow-lg shadow-emerald-500/20' : 'bg-white text-[#0B3D2E] hover:bg-slate-100 shadow-xl'}`}>
                  <Calendar size={16} />
                  Agendar Diagnóstico
                </button>
              </div>

              {/* Mobile Menu Button */}
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
              <a href="#problema" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium p-2">El Problema</a>
              <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium p-2">Cómo Funciona</a>
              <a href="#caracteristicas" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium p-2">Características</a>
              <a href="#calculadora" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium p-2">Calculadora</a>
              <button onClick={() => { setIsMobileMenuOpen(false); scrollToCalendly(); }} className="bg-[#1A6B4A] text-white px-5 py-3 rounded-xl font-medium w-full mt-2 flex justify-center items-center gap-2">
                <Calendar size={18} />
                Agendar Diagnóstico
              </button>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B3D2E] min-h-[95vh] flex flex-col justify-center">
          {/* Fondos Verdes Animados y Texturas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-900/40 blur-[120px] mix-blend-screen animate-float1"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-teal-800/30 blur-[150px] mix-blend-screen animate-float2"></div>
            <div className="absolute top-[30%] left-[40%] w-[50vw] h-[50vw] rounded-full bg-[#1A6B4A]/30 blur-[120px] mix-blend-screen animate-float1" style={{animationDelay: '-5s'}}></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-premium-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-emerald-300 font-medium text-sm mb-8 border border-white/10 shadow-lg backdrop-blur-md">
                <ShieldCheck size={16} />
                <span>Información Exógena Perfecta</span>
              </div>
              
              {/* Tipografía mixta: Sans Serif + Instrument Serif en itálica */}
              <h1 className="animate-premium-up anim-delay-100 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Valida miles de <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">NITs sin errores</span> en segundos.
              </h1>
              
              <p className="animate-premium-up anim-delay-200 text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                Cruza tu Excel con las bases oficiales de la DIAN. Obtén nombres exactos, corrige dígitos de verificación y elimina sanciones por inconsistencias de terceros.
              </p>
              
              <div className="animate-premium-up anim-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button onClick={scrollToCalendly} className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 group">
                  <Calendar size={20} className="group-hover:scale-110 transition-transform" />
                  Agendar reunión de diagnóstico
                </button>
              </div>
              
              {/* Video Placeholder */}
              <div className="animate-premium-up anim-delay-400 relative max-w-4xl mx-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 overflow-hidden bg-slate-900 aspect-video group cursor-pointer hover:border-emerald-500/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070')] bg-cover bg-center opacity-50 group-hover:opacity-40 transition-opacity duration-500 blur-[2px] group-hover:blur-0"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#10b981]/90 backdrop-blur-sm flex items-center justify-center text-white shadow-[0_0_30px_rgba(16,185,129,0.6)] group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <Play size={32} className="ml-2" fill="currentColor" />
                  </div>
                  <span className="mt-6 font-medium text-white tracking-widest uppercase text-sm drop-shadow-md bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">Ver cómo funciona (2 min)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Ticker / Prueba Social */}
        <section className="py-10 border-b border-slate-200 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Empresas e integraciones que confían en nosotros</p>
            <div className="relative flex overflow-x-hidden group">
              <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-2 group-hover:[animation-play-state:paused]">
                {/* Repetición para el efecto marquee infinito */}
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
                    <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 hover:text-[#1A6B4A] transition-all cursor-pointer">
                      <Building2 size={28} /> <span className="font-bold text-xl">Constructora ICC</span>
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
              {/* Uso de Instrument Serif aquí */}
              <h3 className="text-4xl md:text-5xl text-slate-900 mb-6 font-serif font-normal leading-tight">
                ¿Sabías que un dígito mal en el <span className="italic text-[#1A6B4A]">RUT</span> puede costarte millones?
              </h3>
              <p className="text-lg text-slate-600 font-medium">Reportar información exógena con errores en la base de terceros es el motivo #1 de sanciones por parte de la DIAN.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="reveal-target bg-rose-50 border border-rose-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                  <AlertOctagon size={28} />
                </div>
                <div className="text-4xl font-extrabold text-rose-600 mb-3">15.000 UVT</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Sanción Máxima</h4>
                <p className="text-slate-600">Es la multa a la que te expones por enviar información errónea o con inconsistencias a la DIAN.</p>
              </div>

              <div className="reveal-target reveal-delay-100 bg-amber-50 border border-amber-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <Clock size={28} />
                </div>
                <div className="text-4xl font-extrabold text-amber-600 mb-3">3 Semanas</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Tiempo Perdido</h4>
                <p className="text-slate-600">Es el tiempo promedio que pierde un auxiliar contable buscando y validando RUTs a mano.</p>
              </div>

              <div className="reveal-target reveal-delay-200 bg-emerald-50 border border-emerald-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingDown size={28} />
                </div>
                <div className="text-4xl font-extrabold text-emerald-600 mb-3">90%</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Bases Inconsistentes</h4>
                <p className="text-slate-600">De las empresas en Colombia tienen al menos un tercero inactivo o inconsistente en su contabilidad.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="como-funciona" className="py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-target text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#1A6B4A] font-bold tracking-wide uppercase text-sm mb-3">El Proceso</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">De un Excel desordenado al formato <span className="italic text-[#1A6B4A]">perfecto</span> en 3 pasos</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-slate-200 -z-10"></div>
              
              {[
                {
                  icon: <Upload size={32} />,
                  title: "1. Sube tu base actual",
                  desc: "Sube tu archivo Excel o CSV con los NITs, cédulas o pasaportes de tus proveedores, clientes y empleados. No importa el formato inicial."
                },
                {
                  icon: <Bot size={32} />,
                  title: "2. La IA cruza y corrige",
                  desc: "Cruzamos automáticamente mediante conexión directa con bases oficiales. Corregimos DV y extraemos nombres, direcciones y estados de RUT."
                },
                {
                  icon: <FileSpreadsheet size={32} />,
                  title: "3. Descarga y Reporta",
                  desc: "Obtén el formato estructurado exactamente como lo exige el prevalidador de la DIAN, un archivo limpio y listo para subir sin errores."
                }
              ].map((step, idx) => (
                <div key={idx} className={`reveal-target ${idx === 1 ? 'reveal-delay-100' : idx === 2 ? 'reveal-delay-200' : ''} relative group text-center`}>
                  <div className="w-20 h-20 mx-auto bg-white border-4 border-slate-50 rounded-2xl flex items-center justify-center text-[#1A6B4A] shadow-xl shadow-slate-200/50 mb-6 group-hover:scale-110 group-hover:bg-[#1A6B4A] group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Características */}
        <section id="caracteristicas" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-target text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#1A6B4A] font-bold tracking-wide uppercase text-sm mb-3">Cobertura Total</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Validamos <span className="italic text-[#1A6B4A]">todo tipo</span> de terceros</h3>
              <p className="text-lg text-slate-600">Nuestra tecnología entiende la complejidad de las bases de datos colombianas y las organiza según los requerimientos técnicos.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="reveal-target flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#1A6B4A] group-hover:bg-[#1A6B4A] group-hover:text-white transition-colors">
                  <Building2 size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Personas Jurídicas</h4>
                  <p className="text-slate-600">Extraemos la razón social exacta registrada en la DIAN, calculamos y corregimos el dígito de verificación (DV) automáticamente para evitar rechazos.</p>
                </div>
              </div>

              <div className="reveal-target reveal-delay-100 flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#1A6B4A] group-hover:bg-[#1A6B4A] group-hover:text-white transition-colors">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Personas Naturales</h4>
                  <p className="text-slate-600">La IA se encarga de separar correctamente los nombres y apellidos en las casillas correspondientes, tal cual lo exige el formato de la DIAN.</p>
                </div>
              </div>

              <div className="reveal-target flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#1A6B4A] group-hover:bg-[#1A6B4A] group-hover:text-white transition-colors">
                  <Globe size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Terceros Internacionales</h4>
                  <p className="text-slate-600">Validamos la estructura y aplicamos las reglas de reporte especiales para proveedores o clientes ubicados fuera del país (tipo de documento especial).</p>
                </div>
              </div>

              <div className="reveal-target reveal-delay-100 flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#1A6B4A] group-hover:bg-[#1A6B4A] group-hover:text-white transition-colors">
                  <UserX size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">RUT Inactivos</h4>
                  <p className="text-slate-600">El sistema te genera una alerta inmediata sobre estados tributarios inconsistentes o RUTs cancelados para que no reportes a proveedores fantasma.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Savings Calculator (Optimizado a Mostrar Ahorro con Salario Fijo) */}
        <section id="calculadora" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-target text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-[#1A6B4A] font-bold tracking-wide uppercase text-sm mb-3">Análisis de Retorno</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Calculadora de <span className="italic text-[#1A6B4A]">Ganancia</span></h3>
            </div>

            <div className="reveal-target bg-[#0B3D2E] rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                
                {/* Left Side: Inputs */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                      <Calculator size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">¿Cuánto tiempo ahorras?</h2>
                  </div>
                  <p className="text-slate-300 mb-8 font-light">Calculado sobre el salario promedio de un auxiliar contable y las horas operativas que pierde validando terceros.</p>

                  <div className="space-y-8">
                    {/* Input 1: NITS */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-slate-300">Cantidad de NITs en tu base</label>
                        <span className="text-emerald-400 font-bold">{nits.toLocaleString('es-CO')}</span>
                      </div>
                      <input 
                        type="range" 
                        min="100" 
                        max="10000" 
                        step="100" 
                        value={nits}
                        onChange={(e) => setNits(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 mt-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-slate-400">Salario Promedio Aux. (Fijo)</span>
                        <span className="text-slate-300 font-mono text-sm">{formatCurrency(fixedSalary)}</span>
                      </div>
                      <p className="text-xs text-slate-500 italic mt-2">* Basado en 3 semanas de labor manual en temporada de Exógena.</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Results */}
                <div className="bg-gradient-to-br from-[#1A6B4A] to-[#0d4a32] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                      <div className="text-sm text-emerald-100 mb-1">Costo Hundido Operativo</div>
                      <div className="text-2xl font-bold text-white line-through opacity-75">{formatCurrency(manualCost)}</div>
                    </div>

                    {/* Resaltamos la GANANCIA en lugar de comparar precios directamente */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl transform scale-105 relative border border-emerald-100">
                      <div className="absolute -right-6 -top-6 text-emerald-50 opacity-50">
                        <BarChart3 size={100} />
                      </div>
                      <div className="absolute top-4 right-4 animate-pulse">
                        <Sparkles size={24} className="text-amber-400" />
                      </div>
                      <div className="relative z-10">
                        <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2">Lo que ahorras con IA</div>
                        <div className="text-4xl lg:text-5xl font-extrabold text-[#0B3D2E] mb-2">{formatCurrency(savings)}</div>
                        <div className="text-sm text-slate-600 font-medium">Libera a tu equipo para trabajo estratégico.</div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button onClick={scrollToCalendly} className="bg-[#0B3D2E] hover:bg-[#1A6B4A] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3 mx-auto">
                <Calendar size={20} />
                Agendar llamada con un experto
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-target text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#1A6B4A] font-bold tracking-wide uppercase text-sm mb-3">Casos de Éxito</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Lo que dicen <span className="italic text-[#1A6B4A]">nuestros clientes</span></h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="reveal-target bg-slate-50 rounded-3xl p-8 border border-slate-200 relative">
                <MessageSquare className="absolute top-8 right-8 text-slate-200 w-12 h-12" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#1A6B4A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    MG
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">María Gómez</h4>
                    <p className="text-sm text-slate-500">Revisora Fiscal</p>
                  </div>
                </div>
                <p className="text-slate-700 italic text-lg leading-relaxed">
                  "Antes dedicábamos todo abril a revisar RUTs uno por uno. Este año subimos nuestra base de proveedores y en minutos teníamos el archivo listo para el prevalidador. Nos ahorró semanas de trabajo."
                </p>
              </div>

              <div className="reveal-target reveal-delay-100 bg-slate-50 rounded-3xl p-8 border border-slate-200 relative">
                <MessageSquare className="absolute top-8 right-8 text-slate-200 w-12 h-12" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#0B3D2E] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    CR
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Carlos Ruiz</h4>
                    <p className="text-sm text-slate-500">Gerente Financiero</p>
                  </div>
                </div>
                <p className="text-slate-700 italic text-lg leading-relaxed">
                  "Subimos una base de 8,000 empleados y terceros. La IA separó los nombres y apellidos a la perfección y detectó 45 RUTs inactivos que nos habrían costado una sanción segura."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Reforzado */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-target text-center mb-16">
              <h2 className="text-[#1A6B4A] font-bold tracking-wide uppercase text-sm mb-3">Soporte y Seguridad</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Preguntas <span className="italic text-[#1A6B4A]">Frecuentes</span></h3>
              <p className="text-slate-600 font-light mt-4">Resolvemos las dudas más comunes sobre la validación de terceros.</p>
            </div>

            <div className="reveal-target space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-200"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-slate-900">{faq.q}</span>
                    <ChevronDown 
                      className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </button>
                  <div 
                    className={`px-6 text-slate-600 transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'pb-5 max-h-40 opacity-100' : 'max-h-0 opacity-0 pb-0'
                    }`}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agendamiento Dinámico por Planes */}
        <section className="bg-[#0B3D2E] py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#1A6B4A] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="reveal-target text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4 leading-tight">
                Agenda según tu <span className="italic text-emerald-300">volumen de datos</span>
              </h2>
              <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto font-light">
                Ajusta el slider de NITs y agenda una llamada con nuestro equipo comercial para activar tu plan u obtener una solución a la medida.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Slider Controller */}
              <div className="reveal-target bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
                <label className="block text-white font-medium mb-8 text-lg text-center lg:text-left">
                  ¿Cuántos terceros necesitas procesar?
                </label>
                
                <div className="relative mb-12">
                  <input 
                    type="range" 
                    min="0" 
                    max="4" 
                    step="1" 
                    value={pricingIndex}
                    onChange={(e) => setPricingIndex(parseInt(e.target.value))}
                    className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#10b981] relative z-10"
                  />
                  <div className="flex justify-between text-emerald-200/50 text-xs font-mono font-bold mt-4 px-1">
                    <span className={`transition-colors ${pricingIndex === 0 ? "text-emerald-400 scale-110" : ""}`}>100</span>
                    <span className={`transition-colors ${pricingIndex === 1 ? "text-emerald-400 scale-110" : ""}`}>250</span>
                    <span className={`transition-colors ${pricingIndex === 2 ? "text-emerald-400 scale-110" : ""}`}>750</span>
                    <span className={`transition-colors ${pricingIndex === 3 ? "text-emerald-400 scale-110" : ""}`}>1.25k</span>
                    <span className={`transition-colors ${pricingIndex === 4 ? "text-emerald-400 scale-110" : ""}`}>Gigantes</span>
                  </div>
                </div>

                <div className="space-y-4 border-t border-white/10 pt-8 mt-8">
                  <div className="flex items-center gap-3 text-emerald-100/80 text-sm font-light">
                    <CheckCircle2 size={18} className="text-[#10b981]" />
                    <span>Todas las llamadas son por Meet/Zoom.</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-100/80 text-sm font-light">
                    <CheckCircle2 size={18} className="text-[#10b981]" />
                    <span>Evaluamos tu formato actual en vivo.</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-100/80 text-sm font-light">
                    <CheckCircle2 size={18} className="text-[#10b981]" />
                    <span>Sin contratos amarrados ni costos ocultos.</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Pricing Card (Con borde Premium si aplica) */}
              <div className={`reveal-target reveal-delay-100 bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl relative transform transition-all duration-500 hover:-translate-y-2 ${isPremiumPlan ? 'border-4 border-amber-300 shadow-amber-500/20' : 'border border-slate-100'}`}>
                {pricingIndex === 2 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                    Plan Más Popular
                  </div>
                )}
                {isPremiumPlan && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-300 to-yellow-500 text-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles size={12} /> Exclusivo
                  </div>
                )}
                
                <h4 className="text-2xl font-bold text-slate-400 mb-2">{currentPlan.name}</h4>
                <div className="flex items-baseline gap-2 mb-6 border-b border-slate-100 pb-8">
                  <span className={`font-extrabold text-slate-900 tracking-tight transition-all duration-300 ${currentPlan.name === 'Enterprise' ? 'text-4xl' : 'text-5xl'}`}>
                    {currentPlan.price}
                  </span>
                  {currentPlan.name !== "Enterprise" && <span className="text-slate-500 font-medium">/ pago único</span>}
                </div>
                
                <ul className="space-y-5 mb-10">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                      <Users size={18} className="text-emerald-600" />
                    </div>
                    <span className="text-slate-700 text-lg">
                      {currentPlan.name === "Enterprise" ? (
                        <><strong>{currentPlan.nits}</strong></>
                      ) : (
                        <>Hasta <strong>{currentPlan.nits} NITs</strong> <span className="text-sm text-slate-500">{currentPlan.type}</span></>
                      )}
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                      <ShieldCheck size={18} className="text-emerald-600" />
                    </div>
                    <span className="text-slate-700 text-lg">
                      Precisión del <strong>{currentPlan.accuracy}</strong>
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                      <Bot size={18} className="text-emerald-600" />
                    </div>
                    <span className="text-slate-700 text-lg leading-tight">{currentPlan.feature}</span>
                  </li>
                </ul>
                
                <button onClick={scrollToCalendly} className={`w-full text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 group ${isPremiumPlan ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 shadow-amber-500/30' : 'bg-[#0B3D2E] hover:bg-[#1A6B4A] shadow-[0_10px_30px_-10px_rgba(11,61,46,0.5)]'}`}>
                  <Calendar size={20} className="group-hover:scale-110 transition-transform" />
                  Agendar para {currentPlan.name}
                </button>
              </div>
            </div>

            {/* Calendly Inline Widget */}
            <div id="agendamiento-calendly" className="reveal-target mt-20 w-full max-w-5xl mx-auto">
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
                <p className="text-sm text-slate-500 max-w-md mt-4">
                  Validamos los terceros de tu empresa ante la DIAN. 0% error en nacionales, personas jurídicas e internacionales.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Plataforma</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#como-funciona" className="hover:text-emerald-400 transition-colors">Cómo Funciona</a></li>
                  <li><a href="#caracteristicas" className="hover:text-emerald-400 transition-colors">Características</a></li>
                  <li><a href="#calculadora" className="hover:text-emerald-400 transition-colors">Ahorro</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={scrollToCalendly} className="hover:text-emerald-400 transition-colors text-left">Agendar Diagnóstico</button></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidad</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
              <p>© {new Date().getFullYear()} LMS Accounting Group. Todos los derechos reservados.</p>
              <p className="text-slate-500 flex items-center gap-1">
                Validación de Terceros DIAN con Inteligencia Artificial
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
            
            <span className="whitespace-nowrap">Agendar diagnóstico gratuito</span>
            <ChevronRight size={18} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </>
  );
}
