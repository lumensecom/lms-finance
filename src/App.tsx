<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ana Molano Peluquería - Expertos en estética facial, capilar y spa de uñas en Bogotá. Puente Aranda, Cra. 43C #5-84.">
    <!-- Open Graph / WhatsApp / Redes Sociales -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.anamolanopeluqueria.com/">
    <meta property="og:title" content="Ana Molano Peluquería | Salón de Belleza y Spa en Bogotá">
    <meta property="og:description" content="Peluquería profesional, spa de uñas, estética facial y masajes en Bogotá. Carrera 43C #5-84. ¡Agenda tu cita hoy!">
    <meta property="og:image" content="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776449105/0W3A1359_duecdn.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="es_CO">
    <meta property="og:site_name" content="Ana Molano Peluquería">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Ana Molano Peluquería | Salón de Belleza y Spa en Bogotá">
    <meta name="twitter:description" content="Peluquería, spa de uñas, estética y masajes en Bogotá. ¡Agenda tu cita!">
    <meta name="twitter:image" content="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776449105/0W3A1359_duecdn.jpg">
    <meta name="robots" content="index, follow">
    <meta name="keywords" content="peluquería Bogotá, salón belleza Bogotá, spa uñas Bogotá, nail bar Bogotá, lifting pestañas Bogotá, estética facial Bogotá, Ana Molano Peluquería">
    <link rel="canonical" href="https://www.anamolanopeluqueria.com/">
    
    <!-- Favicon temporal -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>">

    <title>Ana Molano Peluquería | Salón de Belleza y Spa</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Parisienne&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Montserrat', 'sans-serif'],
                        logo: ['Parisienne', 'cursive'],
                    },
                    colors: {
                        ana: {
                            light: '#ffeef5',
                            accent: '#ff73a8',
                            dark: '#e83e8c',
                            black: '#1f1f1f',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        html { scroll-behavior: smooth; }
        .input-minimalista { background-color: transparent; border: 1px solid #e5e7eb; border-radius: 0px; padding: 0.75rem 1rem; transition: all 0.3s ease; }
        .input-minimalista:focus { outline: none; border-color: #e83e8c; box-shadow: none; }
        .service-card:hover .service-img-overlay { background-color: rgba(0,0,0,0.1); }
        .page-view { display: none; animation: fadeIn 0.4s ease-in-out; }
        .page-view.active { display: block; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .zoom-img { transition: transform 0.7s ease; }
        .group:hover .zoom-img { transform: scale(1.05); }
        .bono-shadow { box-shadow: -10px 15px 30px rgba(0,0,0,0.15); }
        .carousel-track { transition: transform 0.7s ease-in-out; }
        .time-pill input:checked + div { background-color: #e83e8c !important; color: white !important; border-color: #e83e8c !important; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Animación para el fondo del agendamiento */
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }

        /* Efecto de movimiento suave (Ken Burns) para el carrusel */
        @keyframes kenBurns {
            0% { transform: scale(1); }
            100% { transform: scale(1.08); }
        }
        .animate-kenburns { animation: kenBurns 18s ease-in-out infinite alternate; }

        /* Animación sutil de flotación */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                transition-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
            }
        }

        .reveal {
            opacity: 0; transform: translateY(28px);
            transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1);
            will-change: opacity, transform;
        }
        .reveal.r-left  { transform: translateX(-28px); }
        .reveal.r-right { transform: translateX(28px); }
        .reveal.visible { opacity: 1 !important; transform: none !important; }

        .nav-line { position:relative; display:inline-block; }
        .nav-line::after {
            content:''; position:absolute; left:0; bottom:-2px; width:100%; height:1.5px;
            background:#e83e8c; transform:scaleX(0); transform-origin:right;
            transition:transform 0.32s cubic-bezier(0.22,1,0.36,1);
        }
        .nav-line:hover::after { transform:scaleX(1); transform-origin:left; }

        .btn-mag { transition: transform 0.2s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s ease; }
        .btn-mag:hover { box-shadow: 0 8px 28px rgba(232,62,140,0.3); }
        
        .ripple-effect { position:relative; overflow:hidden; }
        .ripple-effect::before {
            content:''; position:absolute; inset:0; background:rgba(255,255,255,0.18);
            transform:scale(0); opacity:0; transition:transform 0.4s ease, opacity 0.4s ease;
            border-radius:inherit;
        }
        .ripple-effect:active::before { transform:scale(1); opacity:1; transition:0s; }

        /* Mejora en la animación de las listas de servicios */
        .price-row-anim { transition: all 0.3s cubic-bezier(0.22,1,0.36,1); border-radius:4px; margin-bottom: 2px;}
        .price-row-anim:hover { background: rgba(232,62,140,0.04); transform: translateX(6px); padding-left: 0.25rem; }
        .price-row-anim:hover .w-1\.5 { transform:scale(1.6); background-color:#e83e8c !important; }
        .price-row-anim .w-1\.5 { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }

        .card-lift { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease; }
        .card-lift:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(232,62,140,0.06); }
        
        .wa-pulse { animation: waPulse 3s ease-in-out infinite; }
        @keyframes waPulse {
            0%,100% { box-shadow:0 10px 30px rgba(37,211,102,0.4); }
            50%      { box-shadow:0 10px 40px rgba(37,211,102,0.6),0 0 0 7px rgba(37,211,102,0.1); }
        }
        .nav-shadow { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
    </style>
</head>
<body class="bg-white text-gray-900 font-sans antialiased pt-[120px] md:pt-[150px] flex flex-col min-h-screen">

    <header class="fixed top-0 w-full z-50">
        <div class="bg-ana-dark text-white py-2 px-3 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto flex flex-row justify-between items-center text-[10px] md:text-xs tracking-widest uppercase font-semibold">
                <div class="flex items-center gap-2 md:gap-4">
                    <a href="tel:+573133292214" class="flex items-center gap-1 hover:text-pink-200 transition-colors active:scale-95">
                        <svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 16.576 21a1 1 0 00.65-.29l1.86-2.171a.999.999 0 00-.086-1.399z"/></svg>
                        <span class="hidden sm:inline">(+57) </span>313 329 2214
                    </a>
                    <span class="hidden md:inline text-pink-300">|</span>
                    <span class="hidden md:inline">📍 Puente Aranda - Cra. 43c #5-84</span>
                </div>
                <div class="flex items-center gap-3 md:gap-3">
                    <span class="hidden sm:inline text-pink-200">Síguenos:</span>
                    <a href="https://www.instagram.com/anamolanopeluqueria" target="_blank" aria-label="Instagram" class="hover:text-pink-200 transition-colors active:scale-90"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    <a href="https://www.facebook.com/anamolanopeluqueria" target="_blank" aria-label="Facebook" class="hover:text-pink-200 transition-colors active:scale-90"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                </div>
            </div>
        </div>
        <nav class="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 shadow-sm relative z-40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16 md:h-24">
                    <div class="flex-shrink-0 flex items-center cursor-pointer active:scale-95 transition-transform" onclick="navigate('home');">
                        <div class="flex flex-col items-center justify-center pt-2 md:pt-0">
                            <span class="font-logo text-3xl md:text-5xl text-ana-black font-bold" style="line-height: 0.8; padding-bottom: 2px;">Ana Molano</span>
                            <span class="text-[7px] md:text-[10px] tracking-[0.3em] text-gray-500 uppercase mt-1">Peluquería & Spa</span>
                        </div>
                    </div>
                    <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <button onclick="navigate('nosotros');" class="text-xs font-bold tracking-[0.15em] text-gray-500 hover:text-ana-dark uppercase transition-colors">Nosotros</button>
                        <div class="relative group py-6">
                            <button onclick="navigate('servicios-portal');" class="flex items-center text-xs font-bold tracking-[0.15em] text-gray-500 hover:text-ana-dark uppercase transition-colors">
                                Servicios
                                <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div class="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                                <button onclick="navigate('mujer')" class="block w-full text-left px-6 py-4 text-xs tracking-widest text-gray-700 hover:bg-ana-light hover:text-ana-dark uppercase border-b border-gray-50">Para Mujer</button>
                                <button onclick="navigate('hombre')" class="block w-full text-left px-6 py-4 text-xs tracking-widest text-gray-700 hover:bg-ana-light hover:text-ana-dark uppercase">Para Hombre</button>
                            </div>
                        </div>
                        <button onclick="navigate('ubicacion');" class="text-xs font-bold tracking-[0.15em] text-gray-500 hover:text-ana-dark uppercase transition-colors">Ubicación</button>
                        <button onclick="navigate('bonos')" class="text-xs font-bold tracking-[0.15em] text-ana-dark hover:text-ana-accent uppercase transition-colors">Bonos de Regalo</button>
                        <button onclick="navigate('agendamiento')" class="bg-ana-dark hover:bg-ana-black text-white px-6 py-3 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 shadow-md active:scale-95">
                            Agendar Cita
                        </button>
                    </div>
                    <div class="md:hidden flex items-center">
                        <button onclick="toggleMobileMenu()" class="text-gray-900 focus:outline-none p-3 -mr-2 active:scale-90 transition-transform" aria-label="Abrir menú móvil">
                            <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl max-h-[80vh] overflow-y-auto z-50">
                <div class="px-4 pt-2 pb-6 space-y-1">
                    <button onclick="navigate('nosotros');" class="block w-full text-left px-3 py-4 text-sm font-medium tracking-widest text-gray-900 border-b border-gray-50 uppercase active:bg-gray-50">Nosotros</button>
                    <button onclick="navigate('servicios-portal')" class="block w-full text-left px-3 py-4 text-sm font-medium tracking-widest text-gray-900 border-b border-gray-50 uppercase active:bg-gray-50">Servicios</button>
                    <button onclick="navigate('ubicacion');" class="block w-full text-left px-3 py-4 text-sm font-medium tracking-widest text-gray-900 border-b border-gray-50 uppercase active:bg-gray-50">Ubicación</button>
                    <button onclick="navigate('bonos')" class="block w-full text-left px-3 py-4 text-sm font-medium tracking-widest text-ana-dark border-b border-gray-50 uppercase active:bg-gray-50">Bonos de Regalo</button>
                    <button onclick="navigate('agendamiento')" class="block w-full text-center mt-4 bg-ana-dark text-white px-3 py-4 text-sm font-bold tracking-widest uppercase shadow-lg active:scale-95 transition-transform">Agendar Cita</button>
                </div>
            </div>
        </nav>
    </header>

    <main class="flex-grow">
        <!-- ==============================================
             VISTA: HOME 
             ============================================== -->
        <div id="view-home" class="page-view active">
            <!-- Carrusel Principal -->
            <section class="relative w-full h-[65vh] md:h-[85vh] overflow-hidden group mt-0">
                <div id="carousel-track" class="flex h-full w-[300%] carousel-track">
                    <div class="w-1/3 h-full relative flex-shrink-0 bg-black overflow-hidden">
                        <img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776449105/0W3A1359_duecdn.jpg" alt="Ana Molano Peluquería" class="w-full h-full object-cover object-center opacity-90 animate-kenburns">
                        <div class="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
                            <h2 class="text-white text-3xl md:text-6xl lg:text-7xl font-light mb-2">Un espacio para <br class="md:hidden"><span class="font-semibold border-b-2 md:border-b-4 border-white pb-1">consentirte.</span></h2>
                            <p class="text-pink-100 text-xs md:text-lg tracking-widest uppercase mt-6 md:mt-4 mb-8">Peluquería, Estética y Spa en Bogotá</p>
                            <button onclick="navigate('agendamiento')" class="w-full max-w-[280px] md:max-w-none bg-ana-dark text-white hover:bg-ana-accent px-6 md:px-10 py-4 uppercase tracking-widest text-xs md:text-sm font-bold transition-all duration-300 shadow-[0_8px_25px_rgba(232,62,140,0.5)] hover:shadow-[0_12px_35px_rgba(255,115,168,0.6)] active:scale-95">Reserva tu cita</button>
                        </div>
                    </div>
                    <div class="w-1/3 h-full relative flex-shrink-0 overflow-hidden">
                        <img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776452373/0W3A1704_cvff5q.jpg" alt="Servicio exclusivo de Nail Bar en Bogotá" class="w-full h-full object-cover animate-kenburns">
                        <div class="absolute inset-0 bg-black/50 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-24">
                            <h2 class="text-white text-3xl md:text-5xl lg:text-6xl font-light mb-2 leading-tight">Expertos en<br><span class="font-semibold border-b-2 md:border-b-4 border-white pb-1">Nail Bar & Spa.</span></h2>
                            <button onclick="navigate('servicios-portal')" class="w-full max-w-[280px] md:max-w-none mt-8 md:mt-10 border border-white text-white hover:bg-white hover:text-black px-6 md:px-10 py-4 uppercase tracking-widest text-xs md:text-sm font-bold transition-all duration-300 shadow-lg shadow-black/30 active:scale-95">Ver Servicios</button>
                        </div>
                    </div>
                    <div class="w-1/3 h-full relative flex-shrink-0 overflow-hidden">
                        <img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776450256/0W3A1841_f8b6mn.jpg" alt="Coloración y cuidado capilar profesional" class="w-full h-full object-cover animate-kenburns">
                        <div class="absolute inset-0 bg-black/50 flex flex-col justify-center items-center md:items-end text-center md:text-right px-4 md:px-24">
                            <h2 class="text-white text-3xl md:text-5xl lg:text-6xl font-light mb-2 leading-tight">La mejor versión de<br><span class="font-semibold border-b-2 md:border-b-4 border-white pb-1">tu cabello.</span></h2>
                            <button onclick="navigate('agendamiento')" class="w-full max-w-[280px] md:max-w-none mt-8 md:mt-10 border border-white text-white hover:bg-white hover:text-black px-6 md:px-10 py-4 uppercase tracking-widest text-xs md:text-sm font-bold transition-all duration-300 shadow-lg shadow-black/30 active:scale-95">Transforma tu look</button>
                        </div>
                    </div>
                </div>
                <button onclick="prevSlide()" class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-12 items-center justify-center text-white border border-white/50 hover:bg-white hover:text-black transition-colors z-20 hidden md:flex backdrop-blur-sm active:scale-90"><svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path></svg></button>
                <button onclick="nextSlide()" class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-12 items-center justify-center text-white border border-white/50 hover:bg-white hover:text-black transition-colors z-20 hidden md:flex backdrop-blur-sm active:scale-90"><svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg></button>
                <div class="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 md:space-x-3 z-20">
                    <button onclick="goToSlide(0)" class="carousel-dot w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white transition-all duration-300"></button>
                    <button onclick="goToSlide(1)" class="carousel-dot w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300"></button>
                    <button onclick="goToSlide(2)" class="carousel-dot w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300"></button>
                </div>
            </section>

            <!-- Barra Contacto -->
            <section class="w-full bg-ana-black text-white border-t-4 border-ana-dark">
                <div class="max-w-[1400px] mx-auto flex flex-col md:flex-row">
                    <div class="flex-1 p-6 md:p-8 flex items-center justify-center md:justify-end bg-ana-black md:border-r border-gray-800">
                        <div class="text-center md:text-right">
                            <span class="block text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">Horario de Atención</span>
                            <p class="font-light text-sm md:text-base mb-1">Lunes a Sábado: <strong class="font-bold">9:00 AM - 7:00 PM</strong> <br class="md:hidden"><span class="hidden md:inline"> | </span> Domingo: <strong class="font-bold">10:00 AM - 6:00 PM</strong></p>
                            <span class="inline-block bg-white text-ana-dark text-[10px] md:text-xs px-3 py-1.5 font-bold mt-2 uppercase tracking-widest rounded-sm">Martes: Día de Descanso</span>
                        </div>
                    </div>
                    <div class="flex-1 p-6 md:p-8 flex flex-col items-center justify-center bg-[#1a1a1a]">
                        <span class="block text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">Reserva tu cita hoy</span>
                        <a href="https://wa.me/573133292214?text=¡Hola!%20✨%20Me%20encantaría%20agendar%20una%20cita%20con%20ustedes.%20¿Me%20pueden%20ayudar%20con%20los%20horarios%20disponibles?%20💇‍♀️💅" target="_blank" class="bg-[#25D366] hover:bg-green-600 transition-all transform hover:scale-105 active:scale-95 px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-2 md:gap-3 text-xs md:text-sm font-bold shadow-lg w-full max-w-[280px] md:max-w-xs justify-center">
                            <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <!-- Acerca de Nosotros Home -->
            <section id="nosotros-home" class="py-16 md:py-20 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                        <div class="order-2 md:order-1 relative">
                            <div class="w-full aspect-[9/16] shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden relative bg-black cursor-pointer group" onclick="openGallery()">
                                <img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776450333/0W3A2011_xtfptm.jpg" alt="Equipo de Ana Molano Peluquería" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="bg-ana-dark/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                                        Ver fotos
                                    </div>
                                </div>
                            </div>
                            <div class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-ana-dark text-white p-4 md:p-6 shadow-xl z-10 hidden sm:block pointer-events-none">
                                <span class="block text-2xl md:text-3xl font-bold">100%</span>
                                <span class="block text-[10px] md:text-xs uppercase tracking-widest">Profesional</span>
                            </div>
                        </div>
                        <div class="order-1 md:order-2 text-center md:text-left">
                            <h4 class="text-ana-dark tracking-[0.2em] text-xs md:text-sm font-bold uppercase mb-2">Acerca de la marca</h4>
                            <h2 class="text-3xl md:text-5xl font-light text-ana-black mb-6 md:mb-8 tracking-tight">ANA MOLANO <br/><span class="font-bold">PELUQUERÍA</span></h2>
                            <p class="text-gray-600 font-light leading-relaxed mb-6 text-sm md:text-base">Somos un salón de belleza y distribuidora enfocado en resaltar tu mejor versión. Combinamos la técnica, la relajación y el arte del color para brindarte experiencias únicas en estética facial, capilar y spa de uñas.</p>
                            <div class="bg-ana-light p-5 md:p-6 border-l-4 border-ana-dark mb-8 relative overflow-hidden text-left">
                                <h3 class="font-bold text-ana-dark uppercase tracking-widest text-xs md:text-sm mb-2 relative z-10">📍 Nuestra Ubicación</h3>
                                <p class="text-gray-700 font-medium text-xs md:text-sm relative z-10 leading-relaxed">Visítanos en nuestras instalaciones, diseñadas especialmente para brindarte la comodidad y tranquilidad que mereces.<br><br><strong class="text-ana-black">Puente Aranda, Cra. 43c #5-84</strong><br>Nueva Primavera, Bogotá <br><span class="text-[10px] sm:text-xs text-gray-500 mt-1 inline-block">(A mano izquierda de la Distribuidora Olmos)</span><br><br>¡Te esperamos!</p>
                            </div>
                            <div class="flex flex-col sm:flex-row gap-4">
                                <button onclick="openGallery()" class="w-full sm:w-auto border border-ana-dark bg-ana-dark text-white hover:bg-ana-accent hover:border-ana-accent px-8 py-4 md:py-3 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 active:scale-95 shadow-lg flex justify-center items-center gap-2">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    Ver Instalaciones
                                </button>
                                <button onclick="navigate('nosotros')" class="w-full sm:w-auto border border-ana-black text-ana-black hover:bg-ana-black hover:text-white px-8 py-4 md:py-3 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 active:scale-95">Conoce a nuestro equipo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Bonos Home -->
            <section class="py-12 md:py-16 bg-pink-50 relative overflow-hidden border-t border-pink-100">
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div class="md:w-1/2 text-center md:text-left">
                        <h2 class="text-2xl md:text-3xl font-light text-ana-black mb-4">Regala <strong class="font-bold text-ana-dark">Belleza y Relajación</strong></h2>
                        <p class="text-gray-600 font-light mb-6 md:mb-8 text-sm md:text-base leading-relaxed">El regalo perfecto para esa persona especial. Un momento de cuidado y renovación en manos de profesionales.</p>
                        <button onclick="navigate('bonos')" class="w-full md:w-auto bg-ana-dark text-white hover:bg-ana-black px-8 py-4 md:py-3 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 shadow-[0_8px_20px_rgba(232,62,140,0.3)] active:scale-95">Adquiere tu bono aquí</button>
                    </div>
                </div>
            </section>

            <!-- Tratamientos Estrella -->
            <section class="py-16 md:py-20 bg-white border-t border-gray-100">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12 md:mb-16">
                        <h2 class="text-2xl md:text-4xl font-light text-ana-black mb-3 md:mb-4 tracking-tight uppercase">Tratamientos Estrella</h2>
                        <div class="w-12 h-0.5 bg-ana-dark mx-auto mb-4"></div>
                        <p class="text-gray-500 font-light text-sm md:text-base">Conoce nuestros servicios más solicitados y sus beneficios.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div class="service-card group flex flex-col h-full bg-gray-50 hover:bg-white shadow-sm hover:shadow-[0_10px_30px_rgba(232,62,140,0.06)] transition-all duration-500 border-t-4 border-ana-dark rounded-sm">
                            <div class="p-6 md:p-8 flex-grow">
                                <h3 class="text-xl md:text-2xl font-logo font-bold text-ana-dark mb-2">Aminoácidos</h3>
                                <p class="text-xs md:text-sm font-light text-gray-600 mb-6 italic">¿Tu cabello luce opaco, sin vida y con frizz? El complemento perfecto para devolverle la vitalidad.</p>
                                <ul class="space-y-2 text-xs md:text-sm font-light text-gray-700">
                                    <li class="flex items-center"><svg class="w-3 h-3 md:w-4 md:h-4 text-ana-accent mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Controla el frizz</li>
                                    <li class="flex items-center"><svg class="w-3 h-3 md:w-4 md:h-4 text-ana-accent mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Sella puntas y da brillo</li>
                                    <li class="flex items-center"><svg class="w-3 h-3 md:w-4 md:h-4 text-ana-accent mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Reconstruye fibra capilar</li>
                                </ul>
                            </div>
                            <div class="mt-auto px-6 pb-6 md:px-8 md:pb-8">
                                <div class="pt-4 border-t border-gray-100 text-center">
                                    <button onclick="navigate('agendamiento')" class="text-[10px] md:text-xs font-bold text-ana-dark uppercase tracking-widest hover:text-ana-accent transition-all flex items-center justify-center gap-1 w-full opacity-90 hover:opacity-100 group-hover:translate-x-1 duration-300">
                                        Agendar este servicio <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="service-card group flex flex-col h-full bg-gray-50 hover:bg-white shadow-sm hover:shadow-[0_10px_30px_rgba(232,62,140,0.06)] transition-all duration-500 border-t-4 border-ana-dark rounded-sm">
                            <div class="p-6 md:p-8 flex-grow">
                                <h3 class="text-xl md:text-2xl font-logo font-bold text-ana-dark mb-2">Nail Bar Exclusivo</h3>
                                <p class="text-xs md:text-sm font-light text-gray-600 mb-6 italic">Desde sistemas ligeros (Press On) hasta bases de gel para fortalecer uñas débiles (Rubber/Poly Gel).</p>
                                <ul class="space-y-2 text-xs md:text-sm font-light text-gray-700">
                                    <li class="flex items-center"><svg class="w-3 h-3 md:w-4 md:h-4 text-ana-accent mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Aplicación rápida y natural</li>
                                    <li class="flex items-center"><svg class="w-3 h-3 md:w-4 md:h-4 text-ana-accent mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Fortalece la uña (Rubber)</li>
                                    <li class="flex items-center"><svg class="w-3 h-3 md:w-4 md:h-4 text-ana-accent mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Ideal para extensión (Poly Gel)</li>
                                </ul>
                            </div>
                            <div class="mt-auto px-6 pb-6 md:px-8 md:pb-8">
                                <div class="pt-4 border-t border-gray-100 text-center">
                                    <button onclick="navigate('agendamiento')" class="text-[10px] md:text-xs font-bold text-ana-dark uppercase tracking-widest hover:text-ana-accent transition-all flex items-center justify-center gap-1 w-full opacity-90 hover:opacity-100 group-hover:translate-x-1 duration-300">
                                        Agendar este servicio <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="service-card group flex flex-col h-full bg-gray-50 hover:bg-white shadow-sm hover:shadow-[0_10px_30px_rgba(232,62,140,0.06)] transition-all duration-500 border-t-4 border-ana-dark rounded-sm">
                            <div class="p-6 md:p-8 flex-grow">
                                <h3 class="text-xl md:text-2xl font-logo font-bold text-ana-dark mb-2">Lifting Pestañas</h3>
                                <p class="text-xs md:text-sm font-light text-gray-600 mb-6 italic">El proceso es sencillo. En menos de una hora tendrás pestañas largas, curvas y llenas de personalidad.</p>
                                <ul class="space-y-2 text-xs md:text-sm font-light text-gray-700">
                                    <li class="flex items-center"><svg class="w-3 h-3 md:w-4 md:h-4 text-ana-accent mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Tratamiento 100% seguro</li>
                                    <li class="flex items-center"><svg class="w-3 h-3 md:w-4 md:h-4 text-ana-accent mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Mirada de impacto instantánea</li>
                                    <li class="flex items-center"><svg class="w-3 h-3 md:w-4 md:h-4 text-ana-accent mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Olvídate de la pestañina</li>
                                </ul>
                            </div>
                            <div class="mt-auto px-6 pb-6 md:px-8 md:pb-8">
                                <div class="pt-4 border-t border-gray-100 text-center">
                                    <button onclick="navigate('agendamiento')" class="text-[10px] md:text-xs font-bold text-ana-dark uppercase tracking-widest hover:text-ana-accent transition-all flex items-center justify-center gap-1 w-full opacity-90 hover:opacity-100 group-hover:translate-x-1 duration-300">
                                        Agendar este servicio <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonios -->
            <section class="py-16 md:py-20 bg-[#efeae2] border-t border-gray-200 relative overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="text-center mb-10 md:mb-14">
                        <h2 class="text-2xl md:text-4xl font-light text-gray-800 mb-3 tracking-tight">LO QUE DICEN <span class="font-bold text-gray-900">NUESTRAS CLIENTAS</span></h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
                        <div class="flex justify-start hover:-translate-y-1 transition-transform duration-300"><div class="bg-white p-6 md:p-8 rounded-2xl rounded-tl-none shadow-sm relative w-full"><div class="flex text-yellow-400 mb-4"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg></div><p class="text-sm md:text-base text-gray-600 italic mb-5 leading-relaxed">"Excelente servicio. El equipo es súper amable y el resultado de mi lifting de pestañas fue sencillamente espectacular. ¡Súper recomendado!"</p><h5 class="text-xs font-bold uppercase tracking-widest text-ana-dark">- Camila V.</h5></div></div>
                        <div class="flex justify-start hover:-translate-y-1 transition-transform duration-300"><div class="bg-white p-6 md:p-8 rounded-2xl rounded-tl-none shadow-sm relative w-full border-t-4 border-ana-accent"><div class="flex text-yellow-400 mb-4"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg></div><p class="text-sm md:text-base text-gray-600 italic mb-5 leading-relaxed">"El tratamiento de aminoácidos me dejó el cabello hermoso. Llevaba meses lidiando con el frizz y por fin logré controlarlo. ¡Gracias Ana Molano!"</p><h5 class="text-xs font-bold uppercase tracking-widest text-ana-dark">- Laura M.</h5></div></div>
                        <div class="flex justify-start hover:-translate-y-1 transition-transform duration-300"><div class="bg-white p-6 md:p-8 rounded-2xl rounded-tl-none shadow-sm relative w-full"><div class="flex text-yellow-400 mb-4"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg></div><p class="text-sm md:text-base text-gray-600 italic mb-5 leading-relaxed">"El Nail Bar es mi lugar favorito. Mis uñas de Poly Gel me duraron casi el mes intactas. Las instalaciones son preciosas y muy relajantes."</p><h5 class="text-xs font-bold uppercase tracking-widest text-ana-dark">- Andrea G.</h5></div></div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ==============================================
             VISTA: NOSOTROS 
             ============================================== -->
        <div id="view-nosotros" class="page-view">
            <section class="pt-20 pb-16 md:pt-32 md:pb-20 bg-pink-50 text-center px-4 border-b border-pink-100">
                <h1 class="text-3xl md:text-5xl font-light text-ana-black mb-4 tracking-tight">SOBRE <strong class="font-bold text-ana-dark">NOSOTROS</strong></h1>
                <div class="w-16 h-0.5 bg-ana-dark mx-auto mb-6"></div>
                <p class="text-gray-600 font-light max-w-2xl mx-auto text-sm md:text-base leading-relaxed">Más que un salón de belleza, somos un espacio dedicado a resaltar tu esencia natural.</p>
            </section>
            
            <section class="py-16 md:py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="order-2 lg:order-1">
                            <h3 class="text-xs md:text-sm font-bold tracking-[0.2em] text-ana-dark uppercase mb-3">Nuestra Marca</h3>
                            <h2 class="text-3xl md:text-4xl font-light text-ana-black mb-6">El arte de <br><strong class="font-bold">crear belleza</strong></h2>
                            <p class="text-gray-600 font-light leading-relaxed mb-6 text-sm md:text-base">En Ana Molano Peluquería iniciamos con un sueño claro: ofrecer un servicio integral donde la técnica profesional del más alto nivel se encuentre con la calidez humana.</p>
                            <div class="flex items-center gap-4 text-ana-black font-medium">
                                <span class="text-4xl font-logo text-ana-dark">Ana Molano</span>
                                <span class="w-12 h-px bg-gray-300"></span>
                                <span class="text-xs uppercase tracking-widest text-gray-500">Fundadora</span>
                            </div>
                            <div class="mt-8">
                                <button onclick="openGallery()" class="w-full sm:w-auto border border-ana-dark bg-ana-dark text-white hover:bg-ana-accent hover:border-ana-accent px-8 py-4 md:py-3 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 active:scale-95 shadow-lg flex justify-center items-center gap-2">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    Ver Galería del Salón
                                </button>
                            </div>
                        </div>
                        <div class="order-1 lg:order-2">
                            <div class="relative w-full pb-[56.25%] bg-gray-900 rounded-sm overflow-hidden shadow-2xl group cursor-pointer" onclick="openGallery()">
                                <img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776450333/0W3A2011_xtfptm.jpg" alt="Equipo de Ana Molano Peluquería" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="bg-ana-dark/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                                        Tocar para ver fotos
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 md:py-24 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12 md:mb-16">
                        <h2 class="text-3xl md:text-4xl font-light text-ana-black mb-4">Nuestro <strong class="font-bold">Equipo</strong></h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto">
                        <div class="bg-white rounded-sm overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300 border border-gray-100"><div class="h-80 w-full overflow-hidden bg-pink-100"><img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776450295/0W3A1664_fptbbp.jpg" alt="Ana Molano - Master Stylist" class="w-full h-full object-cover object-top"></div><div class="p-6 text-center border-t-4 border-ana-accent bg-white"><h3 class="text-lg font-bold text-ana-black mb-1">Ana Molano</h3><p class="text-[10px] font-bold tracking-widest text-ana-dark uppercase mb-3">Master Stylist</p><p class="text-xs text-gray-500 font-light">Especialista en colorimetría avanzada y diseño de imagen. Líder y fundadora.</p></div></div>
                        <div class="bg-white rounded-sm overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300 border border-gray-100"><div class="h-80 w-full overflow-hidden bg-pink-100"><img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776450294/0W3A1617_x0teaw.jpg" alt="Tatiana - Nail Artist" class="w-full h-full object-cover object-top"></div><div class="p-6 text-center border-t-4 border-ana-accent bg-white"><h3 class="text-lg font-bold text-ana-black mb-1">Tatiana</h3><p class="text-[10px] font-bold tracking-widest text-ana-dark uppercase mb-3">Nail Artist</p><p class="text-xs text-gray-500 font-light">Experta en sistemas Press On, Polygel y decoración a mano alzada.</p></div></div>
                        <div class="bg-white rounded-sm overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300 border border-gray-100"><div class="h-80 w-full overflow-hidden bg-pink-100"><img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776450311/0W3A1944_iezgag.jpg" alt="Zamara - Esteticista" class="w-full h-full object-cover object-top"></div><div class="p-6 text-center border-t-4 border-ana-accent bg-white"><h3 class="text-lg font-bold text-ana-black mb-1">Zamara</h3><p class="text-[10px] font-bold tracking-widest text-ana-dark uppercase mb-3">Esteticista</p><p class="text-xs text-gray-500 font-light">Apasionada por el cuidado de la piel, lifting de pestañas y micropigmentación.</p></div></div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ==============================================
             VISTA: SERVICIOS PORTAL 
             ============================================== -->
        <div id="view-servicios-portal" class="page-view">
            <section class="py-16 md:py-20 bg-gray-50 min-h-[80vh] flex items-center">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div class="text-center mb-10 md:mb-12"><h2 class="text-3xl md:text-5xl font-light text-ana-black mb-3 md:mb-4 tracking-tight">NUESTROS <strong class="font-bold text-ana-dark">SERVICIOS</strong></h2><div class="w-12 h-0.5 bg-ana-dark mx-auto mb-4"></div></div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                        <div onclick="navigate('mujer')" class="relative h-[300px] md:h-96 group cursor-pointer overflow-hidden rounded-sm shadow-xl active:scale-[0.98] transition-transform"><img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776452352/0W3A1801_ddhbvs.jpg" alt="Servicios de belleza para mujer" class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"><div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-colors group-hover:bg-black/50"><h3 class="text-white text-4xl md:text-5xl font-logo mb-2 group-hover:scale-110 transition-transform duration-500">Para Mujer</h3></div></div>
                        <div onclick="navigate('hombre')" class="relative h-[300px] md:h-96 group cursor-pointer overflow-hidden rounded-sm shadow-xl active:scale-[0.98] transition-transform"><img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776450440/0W3A1911_cbjvsj.jpg" alt="Servicios de barbería para hombre" class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"><div class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-colors"><h3 class="text-white text-4xl md:text-5xl font-logo mb-2 group-hover:scale-110 transition-transform duration-500">Para Hombre</h3></div></div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ==============================================
             VISTA: BONOS 
             ============================================== -->
        <div id="view-bonos" class="page-view">
            <section class="py-12 md:py-24 bg-ana-light relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div class="text-center md:text-left">
                            <h2 class="text-3xl md:text-5xl font-light text-ana-black mb-4 md:mb-6 leading-tight">Regala <br><strong class="font-bold text-ana-dark">Belleza y Relajación</strong></h2>
                            <p class="text-gray-700 font-light mb-8 leading-relaxed text-sm md:text-lg">Un regalo que se disfruta. Con los bonos de regalo de Ana Molano Peluquería, regalas un rato para disfrutar, para resaltar la belleza natural en manos de profesionales con gran experiencia.</p>
                        </div>
                        <div class="bg-white p-6 md:p-10 shadow-2xl rounded-sm border-t-4 border-ana-dark relative">
                            <h3 class="text-lg md:text-xl font-bold text-ana-black mb-5 md:mb-6 uppercase tracking-widest text-center md:text-left">Solicita tu Bono</h3>
                            <form class="space-y-4 md:space-y-5" onsubmit="procesarBono(event)">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                    <input type="text" id="bono-nombre" placeholder="Tu nombre completo" class="w-full bg-gray-50 border border-gray-200 p-4 focus:border-ana-dark focus:ring-0 outline-none transition-colors text-xs md:text-sm font-medium" required>
                                    <input type="email" id="bono-email" placeholder="Tu correo electrónico" class="w-full bg-gray-50 border border-gray-200 p-4 focus:border-ana-dark focus:ring-0 outline-none transition-colors text-xs md:text-sm font-medium" required>
                                </div>
                                <textarea id="bono-mensaje" rows="4" placeholder="¿Qué servicio deseas regalar?" class="w-full bg-gray-50 border border-gray-200 p-4 focus:border-ana-dark focus:ring-0 outline-none transition-colors text-xs md:text-sm font-medium resize-none" required></textarea>
                                <button type="submit" class="w-full border-2 border-ana-dark bg-ana-dark text-white hover:bg-white hover:text-ana-dark px-6 py-4 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 flex justify-center items-center gap-2 shadow-md active:scale-95">Enviar solicitud por WhatsApp</button>
                                <p class="text-[10px] text-gray-500 mt-4 text-center md:text-left flex items-center justify-center md:justify-start gap-1.5">
                                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <strong class="font-medium text-gray-600">Medios de pago:</strong> Nequi, Daviplata o Transferencia.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ==============================================
             VISTA: MUJER 
             ============================================== -->
        <div id="view-mujer" class="page-view">
            <div class="py-16 md:py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12 md:mb-16"><h2 class="text-3xl md:text-5xl font-light text-ana-black mb-3 md:mb-4 tracking-tight">SERVICIOS MUJER</h2><div class="w-12 h-0.5 bg-ana-dark mx-auto"></div></div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        <div class="service-card group flex flex-col h-full bg-gray-50 hover:bg-white shadow-sm hover:shadow-[0_10px_30px_rgba(232,62,140,0.06)] transition-all duration-500 border-t-4 border-ana-dark rounded-sm">
                            <div class="relative h-64 md:h-80 w-full mb-0 overflow-hidden bg-gray-100 cursor-pointer active:scale-[0.98] transition-transform" onclick="navigate('agendamiento')">
                                <img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776450391/0W3A1829_yw8a2m.jpg" alt="Cuidado Capilar Femenino" class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105">
                                <div class="service-img-overlay absolute inset-0 bg-black/30 md:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100">
                                    <span class="bg-white/90 text-ana-black px-4 py-3 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest">Agendar Cita</span>
                                </div>
                            </div>
                            <div class="p-5 md:p-6 flex-grow">
                                <h3 class="text-lg md:text-xl font-bold text-ana-black mb-4 tracking-wide uppercase">Cuidado Capilar</h3>
                                <ul class="space-y-0 w-full">
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Corte de Cabello</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$20.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Lavado / Shampoo</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $5.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Cepillado</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $20.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Tinturas / Color</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Previa valoración</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Mechas / Balayage</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Previa valoración</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Repolarización</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $30.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Aminoácidos</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $100.000</span></li>
                                </ul>
                            </div>
                            <div class="mt-auto px-5 pb-5 md:px-6 md:pb-6">
                                <div class="pt-4 border-t border-gray-100 text-center">
                                    <button onclick="navigate('agendamiento')" class="text-[10px] md:text-xs font-bold text-ana-dark uppercase tracking-widest hover:text-ana-accent transition-all flex items-center justify-center gap-1 w-full opacity-90 hover:opacity-100 group-hover:translate-x-1 duration-300">
                                        Agendar este servicio <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="service-card group flex flex-col h-full bg-gray-50 hover:bg-white shadow-sm hover:shadow-[0_10px_30px_rgba(232,62,140,0.06)] transition-all duration-500 border-t-4 border-ana-dark rounded-sm">
                            <div class="relative h-64 md:h-80 w-full mb-0 overflow-hidden bg-gray-100 cursor-pointer active:scale-[0.98] transition-transform" onclick="navigate('agendamiento')">
                                <img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776450407/0W3A1736_cstnou.jpg" alt="Spa de uñas para mujeres" class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105">
                                <div class="service-img-overlay absolute inset-0 bg-black/30 md:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100">
                                    <span class="bg-white/90 text-ana-black px-4 py-3 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest">Agendar Cita</span>
                                </div>
                            </div>
                            <div class="p-5 md:p-6 flex-grow">
                                <h3 class="text-lg md:text-xl font-bold text-ana-black mb-4 tracking-wide uppercase">Nail Bar & Spa</h3>
                                <ul class="space-y-0 w-full">
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Manicure Tradicional</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$20.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Pedicure Tradicional</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$25.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Semipermanente</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$45.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Pedicure Semi</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$50.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Base Rubber</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$65.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Baño Poly gel</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$75.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Press On</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$90.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Montura Poly gel</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$130.000</span></li>
                                </ul>
                            </div>
                            <div class="mt-auto px-5 pb-5 md:px-6 md:pb-6">
                                <div class="pt-4 border-t border-gray-100 text-center">
                                    <button onclick="navigate('agendamiento')" class="text-[10px] md:text-xs font-bold text-ana-dark uppercase tracking-widest hover:text-ana-accent transition-all flex items-center justify-center gap-1 w-full opacity-90 hover:opacity-100 group-hover:translate-x-1 duration-300">
                                        Agendar este servicio <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="service-card group flex flex-col h-full bg-gray-50 hover:bg-white shadow-sm hover:shadow-[0_10px_30px_rgba(232,62,140,0.06)] transition-all duration-500 border-t-4 border-ana-dark rounded-sm">
                            <div class="relative h-64 md:h-80 w-full mb-0 overflow-hidden bg-gray-100 cursor-pointer active:scale-[0.98] transition-transform" onclick="navigate('agendamiento')">
                                <img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776452352/0W3A1801_ddhbvs.jpg" alt="Tratamientos faciales y estéticos" class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105">
                                <div class="service-img-overlay absolute inset-0 bg-black/30 md:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100">
                                    <span class="bg-white/90 text-ana-black px-4 py-3 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest">Agendar Cita</span>
                                </div>
                            </div>
                            <div class="p-5 md:p-6 flex-grow">
                                <h3 class="text-lg md:text-xl font-bold text-ana-black mb-4 tracking-wide uppercase">Estética & Mirada</h3>
                                <ul class="space-y-0 w-full">
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Masajes Reductores</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $50.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Limpieza Facial</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $60.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Micropigmentación</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Previa valoración</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Lifting de Pestañas</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $50.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-ana-accent mr-3"></div> Diseño de Cejas</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $15.000</span></li>
                                </ul>
                            </div>
                            <div class="mt-auto px-5 pb-5 md:px-6 md:pb-6">
                                <div class="pt-4 border-t border-gray-100 text-center">
                                    <button onclick="navigate('agendamiento')" class="text-[10px] md:text-xs font-bold text-ana-dark uppercase tracking-widest hover:text-ana-accent transition-all flex items-center justify-center gap-1 w-full opacity-90 hover:opacity-100 group-hover:translate-x-1 duration-300">
                                        Agendar este servicio <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ==============================================
             VISTA: HOMBRE 
             ============================================== -->
        <div id="view-hombre" class="page-view">
            <div class="py-16 md:py-20 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12 md:mb-16"><h2 class="text-3xl md:text-5xl font-light text-ana-black mb-3 md:mb-4 tracking-tight">SERVICIOS HOMBRE</h2><div class="w-12 h-0.5 bg-ana-dark mx-auto"></div></div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                        <div class="service-card group flex flex-col h-full bg-white shadow-sm hover:shadow-[0_10px_30px_rgba(232,62,140,0.06)] transition-all duration-500 border-t-4 border-gray-800 rounded-sm">
                            <div class="relative h-64 md:h-80 w-full mb-0 overflow-hidden bg-gray-200 cursor-pointer active:scale-[0.98] transition-transform" onclick="navigate('agendamiento')">
                                <img src="https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776450441/0W3A1922_bj4r5o.jpg" alt="Corte de cabello y barbería" class="w-full h-full object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0">
                                <div class="service-img-overlay absolute inset-0 bg-black/30 md:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100">
                                    <span class="bg-white/90 text-ana-black px-4 py-3 text-[10px] font-bold uppercase tracking-widest">Agendar Cita</span>
                                </div>
                            </div>
                            <div class="p-5 md:p-6 flex-grow">
                                <h3 class="text-lg md:text-xl font-bold text-ana-black mb-4 tracking-wide uppercase">Corte & Estilo</h3>
                                <ul class="space-y-0 w-full">
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-gray-800 mr-3"></div> Corte Clásico y Moderno</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$20.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-gray-800 mr-3"></div> Lavado / Shampoo</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $5.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-gray-800 mr-3"></div> Colorimetría Masculina</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $40.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-gray-800 mr-3"></div> Camuflaje de Canas</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $30.000</span></li>
                                </ul>
                            </div>
                            <div class="mt-auto px-5 pb-5 md:px-6 md:pb-6">
                                <div class="pt-4 border-t border-gray-100 text-center">
                                    <button onclick="navigate('agendamiento')" class="text-[10px] md:text-xs font-bold text-gray-800 uppercase tracking-widest hover:text-ana-dark transition-all flex items-center justify-center gap-1 w-full opacity-90 hover:opacity-100 group-hover:translate-x-1 duration-300">
                                        Agendar este servicio <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="service-card group flex flex-col h-full bg-white shadow-sm hover:shadow-[0_10px_30px_rgba(232,62,140,0.06)] transition-all duration-500 border-t-4 border-gray-800 rounded-sm">
                            <div class="relative h-64 md:h-80 w-full mb-0 overflow-hidden bg-gray-200 cursor-pointer active:scale-[0.98] transition-transform" onclick="navigate('agendamiento')">
                                <img src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=1974&auto=format&fit=crop" alt="Cuidado personal y estético masculino" class="w-full h-full object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0">
                                <div class="service-img-overlay absolute inset-0 bg-black/30 md:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100">
                                    <span class="bg-white/90 text-ana-black px-4 py-3 text-[10px] font-bold uppercase tracking-widest">Agendar Cita</span>
                                </div>
                            </div>
                            <div class="p-5 md:p-6 flex-grow">
                                <h3 class="text-lg md:text-xl font-bold text-ana-black mb-4 tracking-wide uppercase">Cuidado Personal</h3>
                                <ul class="space-y-0 w-full">
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-gray-800 mr-3"></div> Limpieza Facial Profunda</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $60.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-gray-800 mr-3"></div> Manicure Masculino</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$20.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 border-b border-gray-50 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-gray-800 mr-3"></div> Pedicure y SPA</span><span class="text-[10px] md:text-xs font-medium text-gray-400">$25.000</span></li>
                                    <li class="flex justify-between items-center py-2.5 px-1 price-row-anim"><span class="flex items-center text-gray-800 font-medium text-xs md:text-sm"><div class="w-1.5 h-1.5 rounded-full bg-gray-800 mr-3"></div> Masajes Relajantes</span><span class="text-[10px] md:text-xs font-medium text-gray-400">Desde $50.000</span></li>
                                </ul>
                            </div>
                            <div class="mt-auto px-5 pb-5 md:px-6 md:pb-6">
                                <div class="pt-4 border-t border-gray-100 text-center">
                                    <button onclick="navigate('agendamiento')" class="text-[10px] md:text-xs font-bold text-gray-800 uppercase tracking-widest hover:text-ana-dark transition-all flex items-center justify-center gap-1 w-full opacity-90 hover:opacity-100 group-hover:translate-x-1 duration-300">
                                        Agendar este servicio <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ==============================================
             VISTA: UBICACION 
             ============================================== -->
        <div id="view-ubicacion" class="page-view">
            <section class="py-16 md:py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                        <div class="flex flex-col justify-between bg-gray-50 p-6 md:p-10 border-t-4 border-ana-dark shadow-sm">
                            <div>
                                <h2 class="text-2xl md:text-3xl font-light text-ana-black mb-8 md:mb-10 tracking-wide uppercase">Visítanos</h2>
                                <div class="mb-8">
                                    <h3 class="text-xs md:text-sm font-bold tracking-[0.1em] text-ana-dark uppercase mb-2">Sede Principal</h3>
                                    <p class="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                                        <strong class="font-bold text-gray-900">Puente Aranda</strong><br/>
                                        Cra. 43c #5-84, Nueva Primavera<br/>
                                        Bogotá, Cundinamarca<br/>
                                        <span class="text-xs text-gray-500 mt-1 inline-block">(A mano izquierda de la Distribuidora Olmos)</span>
                                    </p>
                                </div>
                                <div class="mb-6">
                                    <h3 class="text-xs md:text-sm font-bold tracking-[0.1em] text-ana-dark uppercase mb-3">Horarios</h3>
                                    <ul class="text-gray-600 font-light space-y-3 text-sm md:text-base">
                                        <li class="flex justify-between border-b border-gray-200 pb-2"><span>Lunes a Sábado:</span> <span class="font-medium text-gray-900">9:00 AM - 7:00 PM</span></li>
                                        <li class="flex justify-between border-b border-gray-200 pb-2"><span>Domingos:</span> <span class="font-medium text-gray-900">10:00 AM - 6:00 PM</span></li>
                                        <li class="text-ana-dark pt-2 text-xs md:text-sm font-bold tracking-wider uppercase">Martes cerrado (Día de descanso)</li>
                                    </ul>
                                </div>
                                <div class="mt-6">
                                    <h3 class="text-xs md:text-sm font-bold tracking-[0.1em] text-ana-dark uppercase mb-3">Cómo Llegar</h3>
                                    <div class="w-full h-48 md:h-64 rounded-sm overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                                        <iframe src="https://maps.google.com/maps?q=Ana+Molano+Peluqueria+Bogota&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de Ana Molano Peluquería"></iframe>
                                    </div>
                                    <a href="https://maps.google.com/?q=Ana+Molano+Peluqueria+Bogota" target="_blank" class="inline-flex items-center gap-2 mt-3 text-xs font-bold text-ana-dark hover:text-ana-black uppercase tracking-widest transition-colors">
                                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                        Abrir en Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center bg-ana-light p-8 md:p-10 border border-pink-100 text-center shadow-sm">
                            <svg class="w-12 h-12 md:w-16 md:h-16 text-ana-dark mb-4 md:mb-6 animate-float" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            <h2 class="text-xl md:text-2xl font-bold text-ana-black mb-3 md:mb-4 tracking-wide uppercase">Atención Rápida</h2>
                            <p class="text-gray-600 font-light mb-6 md:mb-8 text-sm md:text-base">La forma más rápida de hacernos una consulta directa es escribiéndonos a nuestro WhatsApp.</p>
                            <a href="https://wa.me/573133292214?text=¡Hola!%20✨%20Me%20encantaría%20hacerles%20una%20consulta.%20💅" target="_blank" class="w-full bg-[#25D366] hover:bg-green-600 text-white px-6 py-4 text-xs md:text-sm font-bold tracking-[0.1em] uppercase transition-colors shadow-lg flex justify-center items-center active:scale-95">Escribir al WhatsApp</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ==============================================
             VISTA: AGENDAMIENTO 
             ============================================== -->
        <div id="view-agendamiento" class="page-view">
            <div class="py-12 md:py-20 bg-pink-50 min-h-[80vh] relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-pink-100 to-transparent opacity-60 pointer-events-none"></div>
                <div class="absolute -top-24 -right-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none"></div>
                <div class="absolute top-48 -left-24 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
                
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="bg-white shadow-2xl p-6 md:p-10 border-t-4 border-ana-dark rounded-xl">
                        <div class="text-center mb-8 md:mb-12">
                            <h2 class="text-3xl md:text-4xl font-light text-ana-black mb-3 tracking-tight uppercase">Reserva tu <strong class="font-bold text-ana-dark">Espacio</strong></h2>
                            <p class="text-gray-500 font-light text-sm md:text-base px-2 max-w-2xl mx-auto">Sigue estos dos sencillos pasos para agendar tu cita. Recibirás un correo de confirmación automáticamente.</p>
                        </div>
                        <div class="mb-10 md:mb-12">
                            <h3 class="text-xs md:text-sm font-bold tracking-widest text-ana-dark uppercase mb-4 md:mb-5 border-b border-pink-100 pb-3 flex items-center gap-2">
                                <span class="bg-ana-light text-ana-dark w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                                Selecciona el Servicio Principal
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                <label class="time-pill cursor-pointer active:scale-[0.98] transition-transform"><input type="radio" name="servicio_cal" value="Capilar" class="hidden" onchange="mostrarCalendly()"><div class="border-2 border-pink-100 p-5 text-center hover:border-ana-dark hover:bg-pink-50 transition-all font-medium text-sm bg-white rounded-lg shadow-sm text-gray-700">Cuidado Capilar (Color, Keratina)</div></label>
                                <label class="time-pill cursor-pointer active:scale-[0.98] transition-transform"><input type="radio" name="servicio_cal" value="Nails" class="hidden" onchange="mostrarCalendly()"><div class="border-2 border-pink-100 p-5 text-center hover:border-ana-dark hover:bg-pink-50 transition-all font-medium text-sm bg-white rounded-lg shadow-sm text-gray-700">Nail Spa (Manos y Pies)</div></label>
                                <label class="time-pill cursor-pointer active:scale-[0.98] transition-transform"><input type="radio" name="servicio_cal" value="Estetica" class="hidden" onchange="mostrarCalendly()"><div class="border-2 border-pink-100 p-5 text-center hover:border-ana-dark hover:bg-pink-50 transition-all font-medium text-sm bg-white rounded-lg shadow-sm text-gray-700">Estética (Masajes, Faciales)</div></label>
                                <label class="time-pill cursor-pointer active:scale-[0.98] transition-transform"><input type="radio" name="servicio_cal" value="Hombre" class="hidden" onchange="mostrarCalendly()"><div class="border-2 border-pink-100 p-5 text-center hover:border-ana-dark hover:bg-pink-50 transition-all font-medium text-sm bg-white rounded-lg shadow-sm text-gray-700">Corte & Estilo / Hombre</div></label>
                            </div>
                        </div>
                        <div id="calendly-section" class="opacity-30 pointer-events-none transition-all duration-700">
                            <h3 class="text-xs md:text-sm font-bold tracking-widest text-ana-dark uppercase mb-4 md:mb-5 border-b border-pink-100 pb-3 flex items-center gap-2">
                                <span class="bg-ana-light text-ana-dark w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                                Elige tu fecha y hora
                            </h3>
                            <div class="calendly-inline-widget bg-white rounded-lg overflow-hidden" data-url="https://calendly.com/anamolanopeluqueria/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=1f1f1f&primary_color=e83e8c" style="min-width:320px;height:700px;"></div>
                            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- ==============================================
         FOOTER 
         ============================================== -->
    <footer class="bg-[#111111] text-white pt-16 md:pt-20 pb-8 md:pb-10 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-10 mb-12 md:mb-16 text-center md:text-left">
                <div class="col-span-1 md:col-span-1">
                    <div class="inline-block animate-float">
                        <h3 class="text-4xl font-logo mb-3 md:mb-4">Ana Molano</h3>
                    </div>
                    <p class="text-gray-400 text-xs font-light leading-relaxed mb-6 px-4 md:px-0">Un espacio que combina la ciencia y el arte de la belleza. Peluquería, spa de uñas y distribuidora oficial.</p>
                    <div class="flex justify-center md:justify-start space-x-5 md:space-x-4">
                        <a href="https://www.instagram.com/anamolanopeluqueria" target="_blank" aria-label="Instagram de Ana Molano" class="text-gray-400 hover:text-white transition-colors"><svg class="w-6 h-6 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                        <a href="https://www.facebook.com/anamolanopeluqueria" target="_blank" aria-label="Facebook de Ana Molano" class="text-gray-400 hover:text-white transition-colors"><svg class="w-6 h-6 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                    </div>
                </div>
                <div>
                    <h4 class="text-sm font-bold uppercase tracking-widest mb-5 md:mb-6">Servicios Rápidos</h4>
                    <ul class="space-y-4 md:space-y-3 text-sm font-light text-gray-400">
                        <li><button onclick="navigate('mujer')" class="hover:text-white transition-colors py-1">Servicios Mujer</button></li>
                        <li><button onclick="navigate('hombre')" class="hover:text-white transition-colors py-1">Servicios Hombre</button></li>
                        <li><button onclick="navigate('bonos')" class="hover:text-ana-accent transition-colors font-medium py-1">Comprar Bono de Regalo</button></li>
                        <li><button onclick="navigate('agendamiento')" class="hover:text-white transition-colors py-1">Agendar Cita</button></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-sm font-bold uppercase tracking-widest mb-5 md:mb-6">Información</h4>
                    <ul class="space-y-4 md:space-y-3 text-sm font-light text-gray-400">
                        <li><button onclick="navigate('nosotros')" class="hover:text-white transition-colors py-1">Nuestra Filosofía y Equipo</button></li>
                        <li><button onclick="navigate('ubicacion')" class="hover:text-white transition-colors py-1">Ubicación y Horarios</button></li>
                        <li class="pt-4 text-white font-medium"><a href="mailto:hola@anamolanopeluqueria.com" class="hover:text-ana-accent transition-colors">hola@anamolanopeluqueria.com</a></li>
                        <li class="text-white font-medium">+57 313 329 2214</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-sm font-bold uppercase tracking-widest mb-5 md:mb-6">Newsletter</h4>
                    <p class="text-sm font-light text-gray-400 mb-4 px-4 md:px-0">Entérate de las últimas promociones.</p>
                    <form class="flex flex-col gap-3" onsubmit="procesarNewsletter(event)">
                        <input type="email" id="nl-email" placeholder="Correo electrónico" class="bg-white text-black px-4 py-3 text-sm w-full focus:outline-none text-center md:text-left rounded-sm" required>
                        <button type="submit" class="text-center md:text-left font-bold text-sm tracking-widest uppercase hover:text-ana-dark transition-colors py-3 md:py-0 active:scale-95">Recibir por WhatsApp</button>
                    </form>
                </div>
            </div>
            <div class="border-t border-gray-800 pt-6 md:pt-8 text-[10px] md:text-xs font-light text-gray-500 flex flex-col md:flex-row justify-center md:justify-between items-center text-center">
                <p>&copy; 2026 ANA MOLANO PELUQUERÍA. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <!-- FAB WHATSAPP -->
    <a href="https://wa.me/573133292214?text=¡Hola!%20✨%20Me%20encantaría%20hacerles%20una%20consulta.%20💅" target="_blank" aria-label="Escríbenos por WhatsApp" class="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-[#25D366] hover:bg-green-600 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center transition-transform hover:-translate-y-1 active:scale-90 wa-pulse">
        <svg class="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    </a>

    <!-- LIGHTBOX DE GALERÍA -->
    <div id="gallery-lightbox" class="fixed inset-0 z-[100] bg-black/95 hidden flex-col justify-center items-center opacity-0 transition-opacity duration-300">
        <button onclick="closeGallery()" class="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white p-2 transition-colors z-50 bg-black/30 rounded-full">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div class="relative w-full max-w-6xl px-4 flex items-center justify-between h-[80vh]">
            <button onclick="changeGalleryImage(-1)" class="text-white/70 hover:text-white p-2 transition-colors z-50 bg-black/30 hover:bg-ana-dark rounded-full active:scale-90">
                <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <div class="flex-1 flex justify-center items-center h-full px-2 md:px-8">
                <img id="lightbox-img" src="" alt="Instalaciones" class="max-h-full max-w-full object-contain rounded-sm shadow-2xl">
            </div>
            <button onclick="changeGalleryImage(1)" class="text-white/70 hover:text-white p-2 transition-colors z-50 bg-black/30 hover:bg-ana-dark rounded-full active:scale-90">
                <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>
        <div class="absolute bottom-6 md:bottom-10 left-0 w-full text-center text-white/70 text-xs md:text-sm font-bold tracking-widest uppercase">
            <span id="gallery-counter">1</span> / <span id="gallery-total">8</span>
        </div>
    </div>

    <!-- SCRIPTS -->
    <script>
        // --- GALERÍA DE IMÁGENES ---
        const galleryImages = [
            "https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776454700/0W3A1345_amcels.jpg",
            "https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776454703/0W3A1385_wnezet.jpg",
            "https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776454701/0W3A1287_bpgfuw.jpg",
            "https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776454704/0W3A1412_vlsxjc.jpg",
            "https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776454707/0W3A1551_bghuqu.jpg",
            "https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776454705/0W3A1543_wkxcxz.jpg",
            "https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776454707/0W3A1511_dgiks9.jpg",
            "https://res.cloudinary.com/dfj0ckm10/image/upload/f_auto,q_auto/v1776454931/0W3A1308_mxol8a.jpg"
        ];
        
        let currentGalleryIndex = 0;

        function openGallery(startIndex = 0) {
            currentGalleryIndex = startIndex;
            updateGalleryUI();
            const lightbox = document.getElementById('gallery-lightbox');
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
            setTimeout(() => { lightbox.classList.remove('opacity-0'); lightbox.classList.add('opacity-100'); }, 10);
            document.body.style.overflow = 'hidden'; 
        }

        function closeGallery() {
            const lightbox = document.getElementById('gallery-lightbox');
            lightbox.classList.remove('opacity-100');
            lightbox.classList.add('opacity-0');
            setTimeout(() => { lightbox.classList.add('hidden'); lightbox.classList.remove('flex'); }, 300);
            document.body.style.overflow = ''; 
        }

        function changeGalleryImage(direction) {
            currentGalleryIndex += direction;
            if (currentGalleryIndex < 0) currentGalleryIndex = galleryImages.length - 1;
            if (currentGalleryIndex >= galleryImages.length) currentGalleryIndex = 0;
            updateGalleryUI();
        }

        function updateGalleryUI() {
            const img = document.getElementById('lightbox-img');
            img.src = galleryImages[currentGalleryIndex];
            document.getElementById('gallery-counter').textContent = currentGalleryIndex + 1;
            document.getElementById('gallery-total').textContent = galleryImages.length;
        }

        document.addEventListener('keydown', (e) => {
            const lightbox = document.getElementById('gallery-lightbox');
            if (!lightbox.classList.contains('hidden')) {
                if (e.key === 'Escape') closeGallery();
                if (e.key === 'ArrowRight') changeGalleryImage(1);
                if (e.key === 'ArrowLeft') changeGalleryImage(-1);
            }
        });

        // --- NAVEGACIÓN SPA ---
        function navigate(viewId, updateHistory = true) {
            document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
            const targetView = document.getElementById('view-' + viewId);
            if(targetView) targetView.classList.add('active');
            
            const mobileMenu = document.getElementById('mobile-menu');
            if(!mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden');
            
            if(updateHistory) { history.pushState(null, null, '#' + viewId); }
            if(viewId !== 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.addEventListener('popstate', () => {
            const hash = window.location.hash.replace('#', '') || 'home';
            navigate(hash, false);
        });

        function toggleMobileMenu() { document.getElementById('mobile-menu').classList.toggle('hidden'); }
        
        // --- FORMULARIOS ---
        function procesarBono(event) {
            event.preventDefault();
            const nombre = document.getElementById('bono-nombre').value;
            const email = document.getElementById('bono-email').value;
            const descripcion = document.getElementById('bono-mensaje').value;
            const numeroWhatsApp = "573133292214";
            const mensaje = `🎁 *¡Hola! Quiero regalar un Bono de Ana Molano* 🎁%0A%0A📋 *Mis datos:*%0A- *Nombre:* ${nombre}%0A- *Correo:* ${email}%0A%0A💝 *Lo que quiero regalar:*%0A${descripcion}%0A%0A¡Por favor indíquenme cómo realizo el pago y el proceso! Quedo atenta(o).`;
            window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
        }

        function procesarNewsletter(event) {
            event.preventDefault();
            const email = document.getElementById('nl-email').value;
            const numeroWhatsApp = "573133292214";
            const mensaje = `✨ *¡Hola Ana Molano Peluquería!* ✨%0AQuiero suscribirme a su lista de clientes para recibir promociones y descuentos.%0AMi correo es: ${email}`;
            window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
            document.getElementById('nl-email').value = '';
        }

        function mostrarCalendly() {
            const calendlySec = document.getElementById('calendly-section');
            calendlySec.classList.remove('opacity-30', 'pointer-events-none');
            setTimeout(() => { calendlySec.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 200);
        }

        // --- CARRUSEL ---
        let currentSlide = 0;
        const totalSlides = 3;
        let slideInterval;
        
        function updateCarousel() {
            const track = document.getElementById('carousel-track');
            const dots = document.querySelectorAll('.carousel-dot');
            if(track) track.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
            dots.forEach((dot, index) => {
                if (index === currentSlide) { dot.classList.remove('bg-white/40'); dot.classList.add('bg-white'); }
                else { dot.classList.remove('bg-white'); dot.classList.add('bg-white/40'); }
            });
        }
        function nextSlide() { currentSlide = (currentSlide + 1) % totalSlides; updateCarousel(); resetInterval(); }
        function prevSlide() { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateCarousel(); resetInterval(); }
        function goToSlide(index) { currentSlide = index; updateCarousel(); resetInterval(); }
        function resetInterval() { clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 6000); }

        // --- ANIMACIONES & SCROLL REVEAL ---
        (function(){
            const RAF = requestAnimationFrame;
            const isMouse = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

            function initReveal(){
                var obs = new IntersectionObserver(function(entries){
                    entries.forEach(function(e){
                        if(e.isIntersecting){
                            e.target.classList.add('visible');
                            obs.unobserve(e.target);
                        }
                    });
                },{threshold:0.1, rootMargin:'0px 0px -30px 0px'});

                document.querySelectorAll('.service-card').forEach(function(el,i){
                    el.classList.add('reveal'); el.style.transitionDelay = (i*0.09)+'s'; obs.observe(el);
                });
                document.querySelectorAll('#view-nosotros .grid > div, #view-home .grid > div').forEach(function(el,i){
                    if(!el.classList.contains('reveal')){
                        el.classList.add('reveal'); el.style.transitionDelay = (i*0.08)+'s'; obs.observe(el);
                    }
                });
                document.querySelectorAll('.stat-section, .stat-item').forEach(function(el){
                    el.classList.add('reveal'); obs.observe(el);
                });
                var left = document.querySelector('#nosotros-home .order-2');
                var right = document.querySelector('#nosotros-home .order-1');
                if(left){ left.classList.add('reveal','r-left'); obs.observe(left); }
                if(right){ right.classList.add('reveal','r-right'); obs.observe(right); }
            }

            document.querySelectorAll('nav .hidden.md\\:flex button, footer button').forEach(function(btn){
                btn.classList.add('nav-line');
            });

            if(isMouse){
                var magSel = ['button.bg-ana-dark','button.border-ana-dark','a.bg-ana-dark','a[href*="wa.me"].rounded-full'].join(',');
                document.querySelectorAll(magSel).forEach(function(btn){
                    btn.classList.add('btn-mag');
                    btn.addEventListener('mousemove',function(e){
                        var r=btn.getBoundingClientRect();
                        var dx=(e.clientX-r.left-r.width/2)*0.2; var dy=(e.clientY-r.top-r.height/2)*0.2;
                        btn.style.transform='translate('+dx+'px,'+dy+'px)';
                    });
                    btn.addEventListener('mouseleave',function(){ btn.style.transform='translate(0,0)'; });
                });

                var heroMedia = document.querySelectorAll('#carousel-track img');
                window.addEventListener('scroll',function(){
                    var sy = window.scrollY;
                    heroMedia.forEach(function(m){ m.style.transform='translateY('+(sy*0.22)+'px)'; });
                },{passive:true});
            }

            document.querySelectorAll('button,a').forEach(function(el){ el.classList.add('ripple-effect'); });
            document.querySelectorAll('#view-mujer li, #view-hombre li').forEach(function(li){ li.classList.add('price-row-anim'); });
            document.querySelectorAll('#view-nosotros .bg-white.rounded-sm, #view-home .bg-gray-50').forEach(function(el){ el.classList.add('card-lift'); });

            var navEl=document.querySelector('nav');
            if(navEl){
                window.addEventListener('scroll',function(){ navEl.classList.toggle('nav-shadow', window.scrollY>8); },{passive:true});
            }

            document.addEventListener('DOMContentLoaded', () => {
                resetInterval();
                initReveal();
                const hash = window.location.hash.replace('#', '');
                if(hash && document.getElementById('view-' + hash)) {
                    navigate(hash, false);
                }
            });
        })();
    </script>
</body>
</html>
