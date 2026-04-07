import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  motion, AnimatePresence, useScroll, useTransform, useInView,
  useMotionValue, useMotionTemplate, animate, useSpring
} from 'framer-motion';
import {
  Menu, X, ChevronRight, CheckCircle2, AlertCircle,
  Calculator, ShieldCheck, Scale, FileText, Server, Building2,
  ArrowRight, DollarSign, Clock, Star, Landmark,
  TrendingUp, Users, Zap, Phone, Mail, Linkedin,
  BarChart3, Brain, ClipboardCheck, Send,
  MessageCircle, Clock3, MapPin, Bot, Sparkles,
  X as CloseIcon, Play, Rocket, Target, Shield, Briefcase,
  Search, Award, FileCheck, HelpCircle, ChevronLeft,
  BookOpen, PieChart, Fingerprint, Receipt, Settings,
  FileSignature, Plane, Building
} from 'lucide-react';

/* =========================================
   1. DESIGN SYSTEM & CONFIG
   ========================================= */

const WA_LINKS = {
  SALDOS: "https://wa.me/573208575355?text=Hola%20equipo%20LMS.%20Vengo%20de%20la%20web%20y%20quiero%20conocer%20m%C3%A1s%20sobre%20el%20modelo%20de%20recuperaci%C3%B3n%20de%20saldos...",
  DIAGNOSTICO: "https://wa.me/573208575355?text=Hola%20equipo%20LMS.%20Me%20interesa%20agendar%20un%20diagn%C3%B3stico%20con%20sus%20expertos..."
};

const CLIENTS_LIST = [
  "Pymes Industriales", "Constructora ICC", "Sector Hotelero",
  "Fundación ORCODES", "Comercio Retail", "Logística y Transporte",
  "Servicios Profesionales", "Control & Gestión", "Siigo", "Loggro", "DIAN"
];

const FAQS_DATA = [
  { q: "¿El diagnóstico financiero inicial tiene algún costo?", a: "No, nuestra primera sesión de diagnóstico es 100% gratuita. Analizamos tu estado actual, auditamos tu historial y te presentamos un plan de acción claro y profesional." },
  { q: "¿Cómo funciona el cobro en la recuperación de saldos a favor ante la DIAN?", a: "Trabajamos bajo un esquema de honorarios a éxito. Solo cobramos el 4% de comisión sobre el valor que efectivamente logremos que la DIAN devuelva a tu cuenta bancaria." },
  { q: "¿En qué industrias se especializan?", a: "Nuestra experiencia de más de 7 años nos permite liderar procesos en Pymes y MiPymes de diversos sectores económicos, incluyendo construcción, hotelería, servicios, fundaciones (ESAL) y retail." },
  { q: "¿Qué plataformas contables maneja su equipo?", a: "Somos especialistas en la parametrización y manejo de los ERPs más potentes del mercado colombiano. Nos integramos a tu tecnología actual para automatizar la causación con nuestra Inteligencia Artificial." },
  { q: "¿Asumen todo el proceso de Información Exógena?", a: "Absolutamente. Auditamos, cruzamos la información y preparamos todos los formatos requeridos por la DIAN para mitigar riesgos y evitar sanciones." }
];

const SERVICES_DATA = [
  { id: "causacion-ia", title: "Causación Automática (IA)", shortDesc: "Causación 100% automatizada con nuestra Inteligencia Artificial. Impuestos a tiempo y reportes sin error humano.", icon: Bot, highlight: 'teal', problem: "Las Pymes colombianas invierten cientos de horas al mes en procesos manuales como la digitalización de facturas, conciliaciones bancarias y corrección de errores de digitación. Esta carga operativa genera retrasos contables y riesgos tributarios de sanciones.", solution: "Nuestra tecnología procesa los archivos XML, automatiza la causación de facturas y gastos, realizando conciliación bancaria. Además, nuestro equipo de expertos apoya, desarrolla y define procesos para optimizar la operación y asegurar la calidad de entrega.", benefits: ["Optimización masiva del tiempo en el cierre contable.", "Aseguramiento y fiabilidad de la calidad de la información.", "Ahorro de tiempo y costos de mano de obra en procesos operativos."] },
  { id: "saldos-dian", title: "Recuperación de Saldos a Favor", shortDesc: "Gestión experta ante la DIAN para devolverte el dinero que pagaste de más. Honorarios 100% a éxito.", icon: DollarSign, highlight: null, problem: "Muchos empresarios asumen que tener saldos a favor es 'normal' o temen solicitarlos por miedo a una auditoría. Dejar ese dinero atrapado en la DIAN significa que la inflación lo devalúa mes a mes, afectando gravemente el flujo de caja.", solution: "Ejecutamos un proceso riguroso de pre-validación, estructuración de expedientes y radicación formal ante la DIAN. Al ser expertos en normativa tributaria, blindamos el proceso para recuperar tu capital. Nuestro modelo es 'No cure, no pay': solo cobramos honorarios si el dinero regresa a tu cuenta.", benefits: ["Inyección directa de liquidez a tu flujo de caja.", "Cero riesgo financiero: honorarios del 4% condicionados al éxito.", "Acompañamiento legal durante toda la fase de fiscalización."] },
  { id: "revisoria-fiscal", title: "Revisoría Fiscal", shortDesc: "Auditoría integral de alto nivel para blindar tu empresa ante Supersociedades y mitigar riesgos tributarios.", icon: ShieldCheck, highlight: null, problem: "A medida que una Pyme crece, la complejidad de sus operaciones atrae la mirada de entes de control (Supersociedades, DIAN). La falta de una auditoría estricta puede derivar en fraudes internos o incumplimientos normativos graves.", solution: "Actuamos como el máximo órgano de control independiente dentro de tu empresa. Evaluamos los estados financieros, revisamos el cumplimiento normativo integral y emitimos dictámenes con un enfoque preventivo para proteger el patrimonio de los socios.", benefits: ["Dictámenes financieros avalados por expertos independientes.", "Identificación y mitigación temprana de riesgos corporativos.", "Generación de confianza ante bancos, inversores y el Estado."] },
  { id: "exogena", title: "Información Exógena (IA)", shortDesc: "Auditoría y cruce preventivo con tecnología para el aseguramiento y calidad de tu información ante la DIAN.", icon: FileCheck, highlight: 'emerald', problem: "Un cero de más o un RUT mal digitado en el Formato 1001 puede costarle a tu empresa millones en multas (Sanciones Art. 651). La temporada de Información Exógena suele ser un momento de alto estrés por la falta de calidad en los datos reportados.", solution: "Extraemos, consolidamos y auditamos tu información financiera utilizando algoritmos de Inteligencia Artificial. Realizamos un cruce preventivo de bases de datos antes de enviar cualquier formato a la DIAN, asegurando la entrega de información con los más altos estándares.", benefits: ["Disminución del riesgo de multas y sanciones por errores de formato.", "Auditoría cruzada automatizada de la facturación electrónica.", "Presentación anticipada, organizada y sin estrés operativo."] },
  { id: "implementacion-erp", title: "Implementación de ERP", shortDesc: "Migración, parametrización y modernización de tu software contable para obtener reportes gerenciales reales.", icon: Server, highlight: null, problem: "Muchas empresas pagan costosas licencias de ERP, pero las utilizan únicamente como 'máquinas de escribir digitales' para facturar, desaprovechando su capacidad analítica y generando cuellos de botella.", solution: "Diseñamos la arquitectura de tu información. Parametrizamos centros de costos, migramos saldos iniciales con exactitud y capacitamos a tu equipo para que el software trabaje para la empresa, facilitando la extracción de analítica en tiempo real.", benefits: ["Estructura contable diseñada a la medida de tu industria.", "Información en tiempo real para una toma de decisiones ágil.", "Transición tecnológica sin detener la operación de la empresa."] },
  { id: "valoracion-empresas", title: "Valoración de Empresas", shortDesc: "Determinamos el valor financiero y comercial de su organización para fusiones, ventas o planeación estratégica.", icon: TrendingUp, highlight: null, problem: "Muchos gerentes desconocen el valor real de su compañía, basándose en intuiciones en lugar de metodologías financieras. Esto genera negociaciones desfavorables en procesos de fusiones, adquisiciones o búsqueda de inversión.", solution: "Aplicamos metodologías financieras rigurosas (Flujo de Caja Descontado, Múltiplos) para determinar el valor objetivo de la empresa. Entregamos un reporte detallado que respalda la toma de decisiones y maximiza el valor para los accionistas.", benefits: ["Conocimiento preciso y técnico del valor comercial del negocio.", "Respaldo documentado para negociaciones con inversionistas.", "Identificación de los verdaderos generadores de valor en la operación."] },
  { id: "declaraciones-tributarias", title: "Declaraciones Tributarias", shortDesc: "Planificación, liquidación y presentación impecable de impuestos (Renta, IVA, ICA) evitando sanciones.", icon: FileText, highlight: null, problem: "La complejidad normativa en Colombia hace que la liquidación de impuestos sea un campo minado. Errores u omisiones en impuestos resultan en procesos de fiscalización exhaustivos y el pago de cuantiosas sanciones e intereses.", solution: "Nuestro equipo de expertos realiza una planeación fiscal anticipada y una liquidación rigurosa. Garantizamos el aprovechamiento de todos los beneficios de ley aplicables, asegurando el cumplimiento y optimizando la carga impositiva de la sociedad.", benefits: ["Cumplimiento normativo al 100%, disminuyendo riesgos de sanciones.", "Optimización legal de la carga impositiva mediante planeación.", "Tranquilidad total ante procesos de revisión de la DIAN."] },
  { id: "elaboracion-eeff", title: "Elaboración EEFF separados y consolidados", shortDesc: "Preparación de Estados Financieros bajo normatividad NIIF (IFRS) para empresas individuales o grupos corporativos.", icon: BookOpen, highlight: null, problem: "Las Pymes y grupos empresariales suelen presentar inconsistencias al revelar o consolidar sus cifras, lo que distorsiona la realidad de la compañía ante bancos, inversionistas extranjeros y entidades de vigilancia.", solution: "Aplicamos estrictamente las Normas Internacionales de Información Financiera (NIIF) para elaborar, revelar y consolidar estados financieros. Eliminamos transacciones intercompañías en grupos y reflejamos una situación financiera transparente.", benefits: ["Transparencia y fiabilidad en las cifras para juntas directivas.", "Cumplimiento con los requerimientos técnicos de Supersociedades.", "Facilidad comprobada para acceder a créditos corporativos."] },
  { id: "informes-empresariales", title: "Presentación informes empresariales", shortDesc: "Diseño y estructuración de reportes ejecutivos e indicadores clave (KPIs) para toma de decisiones gerenciales.", icon: PieChart, highlight: null, problem: "Los gerentes a menudo reciben largas bases de datos incomprensibles. La falta de informes visuales, ejecutivos y centrados en indicadores clave retrasa la toma de decisiones críticas frente al crecimiento del negocio.", solution: "Transformamos los datos contables en Inteligencia de Negocios. Estructuramos informes ejecutivos, dashboards y reportes de gestión que traducen la complejidad financiera en indicadores clave de rendimiento (KPIs) claros y fácilmente accionables.", benefits: ["Visibilidad inmediata de la salud financiera de la empresa.", "Informes diseñados específicamente para el entendimiento directivo.", "Toma de decisiones estratégica basada en datos precisos."] },
  { id: "auditoria-forense", title: "Auditoría Forense", shortDesc: "Investigación financiera profunda para la prevención, detección y cuantificación de fraudes o irregularidades.", icon: Fingerprint, highlight: null, problem: "El fraude interno, la malversación de activos o el lavado de activos son riesgos latentes que destruyen silenciosamente el patrimonio y la reputación de una organización si no se detectan a tiempo y con la metodología adecuada.", solution: "Combinamos conocimientos contables, legales e investigativos para rastrear irregularidades. Recolectamos evidencia sólida que puede ser utilizada en instancias judiciales y diseñamos matrices de control para evitar futuros incidentes operativos.", benefits: ["Detección, investigación y cuantificación técnica de irregularidades.", "Obtención de pruebas válidas para sustentar procesos legales.", "Identificación de brechas para fortalecer el control interno."] },
  { id: "asesoria-legal", title: "Asesoría Legal Corporativa y Tributaria", shortDesc: "Blindaje legal integral en derecho comercial, laboral y tributario, acompañando la operación de tu empresa.", icon: Scale, highlight: null, problem: "La burocracia y la normativa son laberintos complejos. Un contrato mal redactado o una contingencia laboral no resuelta a tiempo puede paralizar la contratación de tu empresa, generar demandas o resultar en embargos inesperados.", solution: "Nuestro equipo jurídico y contable trabaja de la mano para brindarte un servicio integral. Nos encargamos de todo el soporte corporativo: desde asambleas de accionistas y contratos laborales hasta litigios tributarios y blindaje patrimonial.", benefits: ["Soporte legal integrado directamente a tu estrategia financiera.", "Mantenimiento impecable de libros corporativos.", "Reducción drástica de contingencias laborales y comerciales."] },
  { id: "auditoria-externa", title: "Auditoría Externa", shortDesc: "Examen independiente de sus cifras financieras para brindar confianza absoluta a terceros, bancos e inversores.", icon: Search, highlight: null, problem: "La falta de un dictamen verdaderamente independiente sobre los estados financieros genera desconfianza en el ecosistema corporativo, frenando oportunidades de apalancamiento financiero o potenciales alianzas estratégicas.", solution: "Realizamos una evaluación rigurosa y objetiva de la información financiera de su empresa. Emitimos una opinión profesional sobre la razonabilidad de las cifras, validando bajo estándares internacionales que reflejen fielmente la situación real.", benefits: ["Alta credibilidad ante instituciones financieras e inversores.", "Identificación objetiva de debilidades en los procesos de reporte.", "Transparencia total frente a los accionistas y juntas directivas."] },
  { id: "facturacion-soflogy", title: "Facturación Electrónica con soflogy", shortDesc: "Implementación, integración y soporte especializado en el ecosistema de facturación y nómina electrónica.", icon: Receipt, highlight: null, problem: "Implementar o transicionar los sistemas de facturación electrónica suele generar rechazos por parte de la DIAN, interrupciones en el ciclo de ventas diario y graves dolores de cabeza tecnológicos para el personal administrativo.", solution: "Lideramos la parametrización técnica y normativa utilizando la robusta plataforma de soflogy. Nos encargamos de las pruebas de habilitación ante la DIAN, capacitamos a su equipo y brindamos soporte para que su proceso comercial no se detenga.", benefits: ["Cumplimiento riguroso de los requisitos técnicos de la DIAN.", "Cero interrupciones operativas en el ciclo de ventas.", "Soporte técnico y normativo continuo por expertos."] },
  { id: "control-interno", title: "Asesoría desarrollo de control interno", shortDesc: "Diseño e implementación de políticas y manuales corporativos para mitigar riesgos operativos y financieros.", icon: Settings, highlight: null, problem: "El crecimiento acelerado de las empresas sin una estructura formal de control genera ineficiencias operativas, sobrecostos y un alto riesgo de errores materiales no detectados en la información financiera diaria.", solution: "Evaluamos los procesos críticos de su empresa mediante matrices de riesgo avanzado. Diseñamos e implementamos manuales, políticas y controles preventivos a la medida que protegen la operatividad y aseguran la eficiencia del negocio.", benefits: ["Mitigación sistemática de riesgos de fraude y errores.", "Estandarización y agilidad operativa en los procesos internos.", "Protección efectiva y documentada de los activos de la compañía."] },
  { id: "matricula-mercantil", title: "Renovación de matricula Mercantil", shortDesc: "Gestión ágil y oportuna de todas sus obligaciones y renovaciones registrales ante la Cámara de Comercio.", icon: FileSignature, highlight: null, problem: "El incumplimiento o la extemporaneidad en la renovación de la matrícula mercantil no solo acarrea multas directas, sino que puede paralizar por completo procesos de contratación pública, desembolsos bancarios o alianzas.", solution: "Asumimos el control del calendario registral de su organización. Realizamos el análisis financiero para la liquidación correcta, el diligenciamiento de formularios y la radicación de la renovación de manera 100% oportuna.", benefits: ["Continuidad operativa empresarial sin bloqueos registrales.", "Supresión total de multas por extemporaneidad.", "Liberación de tiempo administrativo para sus directivos."] },
  { id: "registro-turismo", title: "Renovación Registro Nacional de Turismo", shortDesc: "Trámite especializado y mantenimiento legal para empresas operadoras e involucradas en el sector turismo (RNT).", icon: Plane, highlight: null, problem: "Operar sin el Registro Nacional de Turismo (RNT) vigente expone a los hoteles, agencias y operadores a la clausura inmediata de sus establecimientos y a multas millonarias por parte de la Superintendencia de Industria y Comercio.", solution: "Nos encargamos del proceso integral de actualización, la correcta liquidación de contribuciones (parafiscales de Fontur) y la renovación del RNT, garantizando que su operación comercial no sufra traumatismos ni cierres preventivos.", benefits: ["Operación turística 100% legal, avalada y blindada.", "Eliminación de riesgos de investigación y sanción de la SIC.", "Asesoría en el pago exacto y justo de contribuciones parafiscales."] },
  { id: "constitucion-empresas", title: "Constitución de empresas", shortDesc: "Asesoría legal, tributaria y corporativa desde el día cero para crear y estructurar formalmente su sociedad.", icon: Building, highlight: null, problem: "Elegir el tipo societario incorrecto o redactar estatutos genéricos descargados de internet puede limitar el ingreso de futuros inversionistas, generar cargas fiscales perjudiciales o detonar conflictos graves entre socios.", solution: "Estructuramos su empresa estratégicamente. Lo asesoramos en la elección de la figura legal óptima (SAS, SA, etc.), redactamos estatutos a la medida y ejecutamos todos los trámites ante la Cámara de Comercio, la DIAN y el sector bancario.", benefits: ["Estructura legal y tributaria optimizada desde la fundación.", "Estatutos diseñados específicamente para proteger a los socios.", "Trámite 'llave en mano', entregando una empresa lista para facturar."] }
];

const BLOG_POSTS_DATA = [
  { id: "saldos-a-favor-liquidez", title: "El dinero oculto en la DIAN: Cómo saber si tu empresa tiene Saldos a Favor (y por qué pierdes liquidez cada mes)", category: "Flujo de Caja", date: "20 Febrero, 2026", readTime: "5 min de lectura", excerpt: "Muchos gerentes asumen que tener saldos a favor es normal o que reclamarlos es un riesgo de auditoría. Te explicamos cómo la inflación devalúa ese capital atrapado y cuál es el método 100% a éxito para recuperarlo y devolverlo a tu flujo de caja.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070", color: "emerald", tags: ["Saldos a Favor", "Liquidez", "Estrategia Fiscal"], content: (<><p className="text-lg leading-relaxed mb-6 font-medium text-slate-700">El flujo de caja es el oxígeno de cualquier Pyme. Sin embargo, año tras año, miles de empresas en Colombia dejan millones de pesos congelados en las arcas de la DIAN bajo el concepto de "Saldos a Favor". ¿La razón principal? <strong>Miedo y desinformación.</strong></p><h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 font-serif">El mito del riesgo de auditoría</h3><p className="text-base leading-relaxed mb-6 text-slate-600">Existe una creencia urbana generalizada entre los contadores tradicionales: <em>"Si le pides plata a la DIAN, te van a auditar"</em>. Esto provoca que las empresas decidan "arrastrar" esos saldos periodo tras periodo. La realidad es muy distinta. La DIAN cuenta con procesos estandarizados para la devolución de saldos; cuando la información está cruzada, auditada internamente y justificada con rigor técnico, la solicitud fluye sin fricciones.</p><h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 font-serif">El costo oculto de la inflación</h3><p className="text-base leading-relaxed mb-6 text-slate-600">Dejar tu dinero en la DIAN no es "tener un ahorro seguro". Es una pérdida directa de valor. Con una inflación promedio, el poder adquisitivo de ese capital disminuye mes a mes. Además, tu empresa está perdiendo el <strong>Costo de Oportunidad</strong>: ese mismo dinero invertido en inventario, marketing o tecnología podría estar generando un retorno (ROI) significativo para tu negocio.</p><div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl my-8"><h4 className="text-lg font-bold text-emerald-800 mb-2">💡 Inteligencia Financiera en Acción</h4><p className="text-sm text-emerald-700 font-medium">Hemos inyectado liquidez inmediata a Pymes que llevaban más de 3 años acumulando saldos a favor en Renta e IVA, sin recibir un solo requerimiento especial gracias a nuestro proceso de pre-validación extrema.</p></div><h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 font-serif">La metodología 100% a éxito</h3><p className="text-base leading-relaxed mb-6 text-slate-600">En LMS Accounting Group abordamos este proceso como ingenieros financieros. No enviamos formatos a ciegas. Primero, realizamos un diagnóstico profundo y un cruce de tu facturación electrónica. Una vez garantizamos que la estructura es sólida, radicamos la solicitud. ¿Nuestra garantía de rigor? <strong>Trabajamos a éxito. Solo cobramos nuestros honorarios (4%) cuando el dinero ya ha sido transferido a las cuentas bancarias de tu empresa.</strong></p><p className="text-base leading-relaxed text-slate-600">No permitas que el miedo frene el crecimiento de tu empresa. Es tu dinero, y es momento de ponerlo a trabajar para ti.</p></>) },
  { id: "ia-vs-contabilidad-manual", title: "Por qué una IA genérica no puede hacer tu contabilidad (pero un Sistema Híbrido sí duplicará tu velocidad)", category: "Automatización", date: "15 Feb, 2026", readTime: "4 min de lectura", excerpt: "Te explicamos por qué confiarle tus impuestos a herramientas de IA no especializadas es un riesgo operativo gigante. Descubre por qué el estándar actual exige RPA + Inteligencia Financiera humana.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000", color: "teal", tags: ["Tecnología", "RPA", "Inteligencia Artificial"], content: (<><p className="text-lg leading-relaxed mb-6 font-medium text-slate-700">Con el auge de ChatGPT, muchos gerentes se preguntan si pueden simplemente "conectar la IA" y despedir a su equipo contable. La respuesta corta es no. La respuesta estratégica es: <strong>necesitas un modelo híbrido.</strong></p><h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 font-serif">El riesgo de la "alucinación" contable</h3><p className="text-base leading-relaxed mb-6 text-slate-600">Las inteligencias artificiales generativas están diseñadas para predecir texto, no para aplicar el Estatuto Tributario Colombiano. Si una IA comete una "alucinación" (inventa un dato) al causar una factura electrónica de 50 millones, la sanción de la DIAN no la pagará el desarrollador del software, sino tu empresa.</p><h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 font-serif">RPA: El verdadero héroe silencioso</h3><p className="text-base leading-relaxed mb-6 text-slate-600">La verdadera revolución contable no ocurre charlando con un bot. Ocurre con el <strong>RPA (Automatización Robótica de Procesos)</strong>. Son scripts dedicados que leen los archivos XML que llegan a tu buzón de la DIAN, extraen el subtotal, el IVA y la retención, y los inyectan directamente en tu ERP sin intervención humana en milisegundos.</p><h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 font-serif">El Modelo Híbrido LMS</h3><p className="text-base leading-relaxed mb-6 text-slate-600">En LMS Accounting Group hemos entendido que las máquinas deben hacer el trabajo repetitivo y los humanos el trabajo estratégico. Nuestra infraestructura tecnológica causa la mayoría de tus facturas de manera automática. Nuestro equipo de expertos utiliza el tiempo ahorrado para analizar los márgenes, apoyar tu operación y garantizar el crecimiento de tu Pyme.</p></>) },
  { id: "informacion-exogena-sin-multas", title: "Información Exógena sin contingencias: Cómo disminuir riesgos automatizando los cruces", category: "Cumplimiento DIAN", date: "08 Feb, 2026", readTime: "3 min de lectura", excerpt: "Un cero de más en el Formato 1001 puede costarle millones a tu Pyme. Aprende cómo la extracción automática de datos desde archivos XML disminuye los errores al reportar a la DIAN.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000", color: "emerald", tags: ["Exógena", "Formato 1001", "Sanciones DIAN"], content: (<><p className="text-lg leading-relaxed mb-6 font-medium text-slate-700">Llegan los meses de abril y mayo, y con ellos, la temporada de mayor estrés para los departamentos financieros en Colombia: La presentación de la Información Exógena. Es el momento donde un simple "error de dedo" se traduce en sanciones exorbitantes.</p><h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 font-serif">El peligro del Excel y el "copiar y pegar"</h3><p className="text-base leading-relaxed mb-6 text-slate-600">Consolidar miles de transacciones de proveedores, clientes, retenciones e impuestos en hojas de Excel manuales es invitar al desastre. El Artículo 651 del Estatuto Tributario es implacable con los errores, información extemporánea o formatos incompletos.</p><h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 font-serif">La solución: Trazabilidad de origen a origen</h3><p className="text-base leading-relaxed mb-6 text-slate-600">Con los sistemas de auditoría automatizada que implementamos en LMS Accounting Group, disminuimos la manipulación manual de la información. El software audita los registros contables contrastándolos directamente con los archivos XML validados por la DIAN durante todo el año. Cuando llega la temporada de Exógena, los formatos ya están cruzados de manera integral.</p></>) },
  { id: "erp-subutilizado", title: "Tu ERP está subutilizado: La diferencia entre digitar facturas y tener verdadera Inteligencia Financiera", category: "Modernización ERP", date: "02 Feb, 2026", readTime: "4 min de lectura", excerpt: "Pagar un software costoso para usarlo solo como máquina de escribir digital es un desperdicio. Te enseñamos por qué parametrizar centros de costos transforma tu ERP en la brújula de tus ganancias.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000", color: "teal", tags: ["Software Contable", "Parametrización", "Data Analytics"], content: (<><p className="text-lg leading-relaxed mb-6 font-medium text-slate-700">Hemos auditado docenas de empresas que invierten millones en la implementación de ERPs de clase mundial, solo para descubrir que sus equipos lo utilizan al 15% de su capacidad. Básicamente, funcionan como una máquina registradora sofisticada.</p><h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 font-serif">Contabilidad Fiscal vs. Contabilidad Gerencial</h3><p className="text-base leading-relaxed mb-6 text-slate-600">Si tu sistema contable solo te sirve para saber cuánto le debes a la DIAN, tienes un problema grave de visibilidad. La parametrización correcta de un ERP requiere diseñar una estructura de Centros de Costos que refleje la realidad operativa de tu negocio. Necesitas saber no solo "cuánto se gastó", sino "qué línea de negocio es más rentable".</p><h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 font-serif">El salto a la toma de decisiones en tiempo real</h3><p className="text-base leading-relaxed mb-6 text-slate-600">En LMS Accounting Group no solo "usamos" tu software. Re-arquitectamos tu información. Parametrizamos adecuadamente tus herramientas contables para que gerentes y directivos puedan acceder a reportes e información de calidad sobre el flujo de caja, la rotación de cartera y los márgenes brutos.</p></>) }
];

/* =========================================
   2. MOTION SYSTEM — optimized
   ========================================= */

const EASE = [0.22, 1, 0.36, 1];
const EASE_BOUNCE = { type: "spring", stiffness: 280, damping: 22 };

// Lighter page transitions: no blur filter (GPU expensive)
const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.25, ease: "easeIn" } }
};

// Staggered children for grids
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};
const staggerItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
};

/* =========================================
   3. ANIMATED COUNTER (new)
   ========================================= */
const AnimatedCounter = ({ to, suffix = "", duration = 1.8 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v).toString())
    });
    return controls.stop;
  }, [inView, to, duration, motionVal]);

  return <span ref={ref}>{display}{suffix}</span>;
};

/* =========================================
   4. BRAND LOGO
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
        Firma Consultora
      </span>
    </div>
  </div>
);

/* =========================================
   5. SPOTLIGHT CARD — touch-aware
   ========================================= */
const SpotlightCard = ({ children, className = "", onClick, noHover = false, highlightColor = 'emerald', dark = false }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Spring-smooth the glow position
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const glowColor = useMemo(() => {
    if (highlightColor === 'teal')   return 'rgba(20, 184, 166, 0.18)';
    if (highlightColor === 'violet') return 'rgba(167, 139, 250, 0.18)';
    return 'rgba(16, 185, 129, 0.18)';
  }, [highlightColor]);

  const shadowHover = useMemo(() => {
    if (highlightColor === 'teal')   return "0 22px 44px -14px rgba(20,184,166,0.28)";
    if (highlightColor === 'violet') return "0 22px 44px -14px rgba(167,139,250,0.28)";
    return "0 22px 44px -14px rgba(16,185,129,0.28)";
  }, [highlightColor]);

  const handleMouseMove = useCallback(({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  const bg = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, ${glowColor}, transparent 80%)`;

  return (
    <motion.div
      className={`group relative border overflow-hidden ${dark ? 'bg-slate-900' : 'bg-white'} ${className}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerItem}
      whileHover={noHover ? {} : { y: -5, boxShadow: shadowHover, transition: { duration: 0.3, ease: EASE } }}
      whileTap={{ scale: 0.985 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{ background: bg }}
      />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
};

/* =========================================
   6. PRIMITIVE LAYOUT
   ========================================= */
const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 relative z-10 ${className}`}>{children}</div>
);

const Badge = ({ children, color = "mint", icon: Icon }) => {
  const cls = {
    mint:   "bg-emerald-50 border-emerald-200 text-emerald-700",
    dark:   "bg-slate-900 text-white border-slate-700",
    teal:   "bg-teal-50 border-teal-200 text-teal-700",
    purple: "bg-violet-50 border-violet-200 text-violet-700",
  }[color] || "bg-emerald-50 border-emerald-200 text-emerald-700";

  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 text-[10px] sm:text-xs uppercase tracking-wide font-bold ${cls}`}
      initial={{ opacity: 0, scale: 0.85, y: 6 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </motion.div>
  );
};

/* =========================================
   7. FAQ ITEM — improved spring
   ========================================= */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: EASE }}
      className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-emerald-200 transition-colors shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="shrink-0 bg-slate-50 shadow-sm p-2 rounded-full border border-slate-100"
        >
          <ChevronRight className="w-4 h-4 text-emerald-600" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* =========================================
   8. TRUST RIBBON — CSS marquee (no framer)
   ========================================= */
const TrustRibbon = () => {
  const doubled = [...CLIENTS_LIST, ...CLIENTS_LIST];
  return (
    <div className="bg-white border-y border-slate-200 py-8 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="flex">
        <div className="flex gap-12 sm:gap-16 items-center whitespace-nowrap animate-marquee">
          {doubled.map((client, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3 opacity-50 hover:opacity-80 transition-opacity duration-300">
              <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-base sm:text-lg font-bold text-slate-600 font-serif">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================
   9. MAGNETIC CTA BUTTON (new)
   ========================================= */
const MagneticButton = ({ href, children, className = "", size = "lg" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  }, [x, y]);

  const handleLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

  const pad = size === "lg" ? "h-16 sm:h-20 px-8 sm:px-16 text-lg sm:text-xl md:text-2xl" : "px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg";

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-black uppercase tracking-wide
        bg-[#5FB287] hover:bg-[#268153] text-white border-b-4 border-[#268153]
        shadow-[0_0_40px_rgba(95,178,135,0.4)] hover:shadow-[0_0_60px_rgba(95,178,135,0.6)]
        transition-colors duration-300 cursor-pointer select-none ${pad} ${className}`}
    >
      {children}
    </motion.a>
  );
};

/* =========================================
   10. HEADER
   ========================================= */
const Header = ({ activePage, setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'metodologia', label: 'Metodología' },
    { id: 'blog', label: 'Blog' },
    { id: 'nosotros', label: 'Nosotros' }
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 flex flex-col ${
        isScrolled || mobileOpen ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {/* Announcement bar */}
      <motion.div
        animate={{ height: isScrolled ? 0 : undefined, opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="w-full bg-slate-900 text-white flex justify-center items-center text-[10px] sm:text-xs font-bold tracking-wide h-8 sm:h-10 overflow-hidden"
      >
        <span className="bg-emerald-500 text-slate-900 px-2 py-0.5 rounded-sm mr-2 font-black uppercase text-[8px] sm:text-[10px] tracking-widest">Gratis</span>
        <span>Agenda un diagnóstico con nuestros expertos y descubre cómo optimizar tu empresa</span>
        <ArrowRight className="w-3 h-3 ml-1.5 text-emerald-400" />
      </motion.div>

      <div className={`max-w-7xl w-full mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'py-3 sm:py-4' : 'py-4 sm:py-6'}`}>
        <BrandLogo onClick={() => { setActivePage('inicio'); setMobileOpen(false); }} />

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.filter(l => l.id !== 'inicio').map((link) => {
            const isActive = activePage === link.id ||
              (activePage.startsWith('servicio_') && link.id === 'servicios') ||
              (activePage.startsWith('blog_') && link.id === 'blog');
            return (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`text-sm font-bold transition-colors relative py-2 ${isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
              >
                {link.label}
                {isActive && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden md:flex gap-4 items-center">
          <motion.a
            href={WA_LINKS.DIAGNOSTICO} target="_blank" rel="noreferrer"
            whileHover={{ y: -2, boxShadow: "0 12px 28px -6px rgba(95,178,135,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#5FB287] text-white hover:bg-[#268153] inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-colors duration-300 text-xs shadow-lg shadow-[#5FB287]/30"
          >
            Contáctanos
          </motion.a>
        </div>

        <button className="md:hidden p-2 rounded-lg bg-slate-100/50 hover:bg-slate-100 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}>
              {mobileOpen ? <X className="text-slate-900 w-6 h-6" /> : <Menu className="text-slate-900 w-6 h-6" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="md:hidden absolute top-full left-0 w-full bg-white/96 backdrop-blur-3xl border-b border-slate-200 shadow-2xl"
          >
            <div className="p-4 flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activePage === link.id ||
                  (activePage.startsWith('servicio_') && link.id === 'servicios') ||
                  (activePage.startsWith('blog_') && link.id === 'blog');
                return (
                  <button key={link.id} onClick={() => { setActivePage(link.id); setMobileOpen(false); }}
                    className={`text-left font-bold py-4 px-4 rounded-xl transition-colors ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700 hover:bg-slate-50'}`}>
                    {link.label}
                  </button>
                );
              })}
              <a href={WA_LINKS.DIAGNOSTICO} target="_blank" rel="noreferrer"
                className="bg-emerald-500 text-white py-4 mt-3 rounded-xl text-center font-bold shadow-md shadow-emerald-500/20 active:scale-95 transition-transform">
                Contáctanos por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

/* =========================================
   11. HOME VIEW
   ========================================= */
const HomeView = ({ setActivePage }) => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 400], [0, 40]);
  const bgOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const glowY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  const handleMouseMove = useCallback((e) => {
    mouseX.set((e.clientX - window.innerWidth / 2) * 0.04);
    mouseY.set((e.clientY - window.innerHeight / 2) * 0.04);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-10 md:pt-36 md:pb-12 bg-slate-50 relative overflow-hidden flex flex-col justify-center"
        onMouseMove={handleMouseMove}>
        <motion.div
          style={{ x: glowX, y: glowY, opacity: bgOpacity }}
          className="absolute top-0 left-1/3 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-emerald-100/40 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

        <Container className="relative z-10 flex flex-col items-center w-full mt-4 sm:mt-0">
          <motion.div
            variants={pageVariants} initial="initial" animate="animate"
            style={{ y: textY }}
            className="text-center w-full flex flex-col items-center"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 sm:mb-8 font-serif leading-[1.1] tracking-tight max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              Inteligencia financiera para{' '}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                escalar tu empresa.
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl md:text-2xl text-slate-700 mb-8 md:mb-10 font-medium max-w-3xl leading-snug px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
            >
              Sintetizamos la brecha entre tu compañía y los entes de control.{' '}
              <strong className="text-teal-600 font-bold">Automatizamos tu contabilidad</strong>{' '}
              y el proceso de elaboración de{' '}
              <strong className="text-emerald-600 font-bold">información Exógena con IA</strong>.
            </motion.p>

            <motion.div
              className="flex flex-col items-center w-full px-4 sm:px-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.22 }}
            >
              <MagneticButton href={WA_LINKS.DIAGNOSTICO} className="w-full sm:w-auto">
                AGENDAR DIAGNÓSTICO
              </MagneticButton>

              <button
                onClick={() => setActivePage('servicios')}
                className="mt-5 sm:mt-6 text-sm sm:text-base font-bold text-slate-500 hover:text-emerald-600 transition-colors underline underline-offset-4"
              >
                o explorar el catálogo de 17 servicios
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-[10px] sm:text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest"
          >
            {["Profesionales expertos", "Partners Tecnológicos", "Foco en Pymes"].map((t, i) => (
              <React.Fragment key={t}>
                {i > 0 && <span className="hidden sm:block w-px h-4 bg-slate-300" />}
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-emerald-500" /> {t}
                </span>
              </React.Fragment>
            ))}
          </motion.div>
        </Container>
      </section>

      <TrustRibbon />

      {/* BENTO STATS */}
      <Section className="bg-white border-y border-slate-200 pt-20 pb-24">
        <Container>
          <motion.div className="text-center mb-16 sm:mb-20" variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <Badge color="dark" icon={BarChart3}>Nuestra Trayectoria</Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 font-serif mb-6 leading-tight">
              El respaldo de una firma <br className="hidden sm:block" />que entiende tu crecimiento.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-medium">
              Con más de 7 años en el mercado colombiano, fusionamos el rigor técnico de la contabilidad tradicional con la potencia de la Inteligencia Artificial para que las Pymes operen como grandes corporaciones.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2 sm:px-0"
            variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
          >
            {/* Bento 1 */}
            <motion.div variants={staggerItem}
              className="md:col-span-2 bg-slate-900 rounded-[2rem] p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between group shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] group-hover:bg-teal-500/30 transition-colors duration-700" />
              <div className="relative z-10 mb-8">
                <motion.div whileHover={{ rotate: -8, scale: 1.1 }} transition={EASE_BOUNCE}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-sm border border-white/20">
                  <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 leading-tight">Ecosistema Tecnológico Inteligente</h3>
                <p className="text-slate-300 font-medium leading-relaxed max-w-lg text-sm sm:text-base">
                  No usamos calculadoras. Desarrollamos soluciones RPA e Inteligencia Artificial que se integran con tu ERP para automatizar hasta el 90% de la operatividad financiera y tributaria.
                </p>
              </div>
              <div className="relative z-10 mt-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
                {[{ val: 99.9, suffix: "%", label: "Precisión de Datos", color: "text-teal-400" },
                  { val: 80, suffix: "%", label: "Reducción de Tiempo Manual", color: "text-emerald-400", prefix: "-" }
                ].map(({ val, suffix, label, color, prefix = "" }, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex-1 backdrop-blur-md">
                    <div className={`text-3xl sm:text-4xl font-black mb-1 font-serif tracking-tight ${color}`}>
                      {prefix}<AnimatedCounter to={val} suffix={suffix} />
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bento 2 */}
            <motion.div variants={staggerItem}
              className="bg-emerald-500 rounded-[2rem] p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col group shadow-xl shadow-emerald-500/20">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 mb-8">
                <motion.div whileHover={{ rotate: 8, scale: 1.1 }} transition={EASE_BOUNCE}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-sm border border-white/30">
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 leading-tight">Rigor Legal Absoluto</h3>
                <p className="text-emerald-50 font-medium leading-relaxed text-sm sm:text-base">
                  Un equipo liderado por expertos contables y jurídicos. Protegemos tu patrimonio y aseguramos la calidad de la información ante la DIAN y Supersociedades.
                </p>
              </div>
              <div className="mt-auto relative z-10 pt-6 border-t border-white/20">
                <div className="text-5xl sm:text-6xl font-black text-white font-serif mb-1 tracking-tighter">
                  +<AnimatedCounter to={7} />
                </div>
                <div className="text-[10px] sm:text-xs text-emerald-100 font-bold uppercase tracking-widest">Años de Experiencia Continua</div>
              </div>
            </motion.div>

            {/* Bento 3 */}
            <motion.div variants={staggerItem}
              className="md:col-span-3 bg-white border border-slate-200 rounded-[2rem] p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 shadow-md hover:shadow-xl transition-all duration-500 hover:border-emerald-200 group">
              <div className="md:w-1/3 flex justify-center shrink-0">
                <div className="relative">
                  <motion.div whileHover={{ rotate: -14 }} transition={EASE_BOUNCE}
                    className="w-24 h-24 bg-emerald-50 rounded-full border-4 border-white shadow-lg flex items-center justify-center absolute -left-8 -top-8 z-20">
                    <DollarSign className="w-10 h-10 text-emerald-500" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.06 }} transition={EASE_BOUNCE}
                    className="w-40 h-40 bg-slate-900 rounded-full border-4 border-white shadow-xl flex items-center justify-center relative z-10">
                    <Landmark className="w-16 h-16 text-teal-400" />
                  </motion.div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left mt-6 md:mt-0">
                <Badge color="teal" icon={TrendingUp}>Enfoque a Resultados</Badge>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 font-serif">Especialistas en Recuperación de Capital</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 text-base sm:text-lg">
                  Hemos perfeccionado el modelo de devolución de saldos a favor ante la DIAN. Nos enorgullece trabajar bajo un formato de honorarios condicionados al éxito:{' '}
                  <strong>si tu empresa no recibe la liquidez en sus cuentas bancarias, nosotros no cobramos.</strong>
                </p>
                <motion.a href={WA_LINKS.DIAGNOSTICO} target="_blank" rel="noreferrer"
                  whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 px-8 py-4 rounded-xl font-bold transition-all duration-300 w-full sm:w-auto shadow-sm">
                  Conocer proceso de recuperación <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <Badge color="mint" icon={HelpCircle}>Preguntas Frecuentes</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif mb-3 leading-tight">Resolvemos tus dudas</h2>
              <p className="text-sm sm:text-base text-slate-600">Transparencia total desde el primer contacto.</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {FAQS_DATA.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
            </div>
            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-sm sm:text-base text-slate-600 mb-4">¿Tienes otra pregunta en mente?</p>
              <motion.a href={WA_LINKS.DIAGNOSTICO} target="_blank" rel="noreferrer"
                whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-sm">
                <MessageCircle className="w-4 h-4" /> Hablar con un Asesor
              </motion.a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

/* =========================================
   12. METODOLOGÍA VIEW
   ========================================= */
const MetodologiaView = () => {
  const steps = [
    { icon: Search,     title: "1. Diagnóstico Gratuito",  desc: "Revisamos tu estado actual sin costo y auditamos tu historial contable para hallar fugas de capital y oportunidades de mejora.", color: "emerald" },
    { icon: Calculator, title: "2. Gestión Experta",       desc: "Nuestro equipo de profesionales lidera y ejecuta la estrategia legal, financiera y tributaria, apoyándose en tecnología de punta para garantizar precisión y eficiencia.", color: "teal" },
    { icon: TrendingUp, title: "3. Calidad y Oportunidad", desc: "Aplicamos el máximo rigor técnico y legal para optimizar tus procesos internos, asegurando la calidad y oportunidad en la entrega de tu información financiera.", color: "emerald" }
  ];

  return (
    <div className="pt-24 bg-slate-50 min-h-screen flex flex-col">
      <Section className="flex-grow">
        <Container>
          <motion.div className="text-center mb-16 sm:mb-24" variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <Badge color="mint" icon={Brain}>Nuestra Fórmula</Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 font-serif mb-6 leading-tight">
              Metodología Ágil <br className="hidden sm:block" /> en 3 Pasos
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium px-4">
              Diseñamos un proceso sin fricciones donde la tecnología hace el trabajo pesado y nuestros expertos aseguran tu tranquilidad financiera y legal.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto mb-24 px-4 sm:px-0">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 z-0 rounded-full opacity-50" />
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-emerald-200 via-teal-200 to-emerald-200 z-0 rounded-full opacity-50" />

            <motion.div
              className="flex flex-col md:grid md:grid-cols-3 gap-8 sm:gap-12 relative z-10"
              variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
            >
              {steps.map((step, i) => (
                <motion.div key={i} variants={staggerItem}
                  whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(16,185,129,0.18)" }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className={`bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 text-center shadow-sm group`}
                >
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.12 }} transition={EASE_BOUNCE}
                    className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-sm border
                      ${step.color === 'emerald' ? 'bg-emerald-50 text-emerald-500 border-emerald-100' : 'bg-teal-50 text-teal-500 border-teal-100'}`}
                  >
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
            className="mt-12 bg-slate-900 rounded-[2rem] p-8 sm:p-16 relative overflow-hidden shadow-2xl text-center max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <Badge color="dark" icon={Target}>Toma Acción</Badge>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white mb-6 leading-tight">
                ¿Listo para transformar <br className="hidden sm:block" />tu empresa?
              </h3>
              <p className="text-slate-300 text-sm sm:text-lg mb-10 max-w-xl mx-auto font-medium">
                Agenda un diagnóstico con nuestro equipo de expertos, donde en el menor tiempo posible podremos proponerte la mejor calidad de servicio para tu empresa.
              </p>
              <MagneticButton href={WA_LINKS.DIAGNOSTICO} size="md" className="inline-flex">
                <Rocket className="w-5 h-5" /> Agendar Diagnóstico con Expertos
              </MagneticButton>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

/* =========================================
   13. SERVICES VIEW
   ========================================= */
const ServicesView = ({ setActivePage }) => (
  <div className="pt-24 bg-slate-50 min-h-screen">
    <Section>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div className="text-center mb-10 sm:mb-16" variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <Badge color="dark" icon={Briefcase}>Catálogo de Soluciones</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-serif mb-4 sm:mb-6 leading-tight">
            Cobertura integral para <br className="hidden sm:block" />escalar tu empresa
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Servicios de alto nivel en las áreas financiera, tributaria, legal y tecnológica; diseñados específicamente para el crecimiento seguro de las Pymes en Colombia.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mx-auto"
          variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-40px" }}
        >
          {SERVICES_DATA.map((srv) => {
            const isTeal     = srv.highlight === 'teal';
            const isEmerald  = srv.highlight === 'emerald';
            const isHighlighted = isTeal || isEmerald;

            const cardCls = isTeal
              ? 'bg-slate-900 text-white border-slate-800 shadow-xl shadow-teal-500/20 z-10'
              : isEmerald
              ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-none shadow-xl shadow-emerald-500/30 z-10'
              : 'bg-white border-slate-200';

            const iconCls = isTeal
              ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
              : isEmerald
              ? 'bg-white/20 text-white border border-white/30 backdrop-blur-sm'
              : 'bg-slate-50 text-slate-600 border border-slate-100';

            const titleCls = isHighlighted ? 'text-white' : 'text-slate-900';
            const descCls  = isTeal ? 'text-slate-300' : isEmerald ? 'text-white/90' : 'text-slate-600';
            const linkCls  = isTeal ? 'text-teal-400 hover:text-teal-300 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg'
                           : isEmerald ? 'text-white hover:text-white/70 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg'
                           : 'text-emerald-600 hover:text-emerald-700';

            return (
              <SpotlightCard key={srv.id} dark={isHighlighted} highlightColor={srv.highlight || 'emerald'}
                onClick={() => setActivePage(`servicio_${srv.id}`)}
                className={`rounded-2xl p-5 sm:p-6 cursor-pointer border shadow-sm flex flex-col ${cardCls} group`}
              >
                {isEmerald && <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />}
                <motion.div whileHover={{ rotate: -8, scale: 1.12 }} transition={EASE_BOUNCE}
                  className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 ${iconCls}`}>
                  <srv.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
                <h3 className={`relative z-10 text-lg sm:text-xl font-black mb-2 leading-tight ${titleCls}`}>{srv.title}</h3>
                <p className={`relative z-10 text-xs sm:text-sm mb-5 flex-grow leading-relaxed font-medium ${descCls}`}>{srv.shortDesc}</p>
                <div className={`relative z-10 mt-auto pt-4 w-full flex items-center ${isHighlighted ? 'border-t border-white/10' : 'border-t border-slate-200/50'}`}>
                  <div className={`font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${linkCls}`}>
                    Ver detalle
                    <motion.span className="inline-block" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.span>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </motion.div>
      </div>
    </Section>
  </div>
);

/* =========================================
   14. SERVICE DETAIL VIEW
   ========================================= */
const ServiceDetailView = ({ activePage, setActivePage }) => {
  const service = SERVICES_DATA.find(s => s.id === activePage.replace('servicio_', ''));
  if (!service) return <div className="pt-32 text-center">Servicio no encontrado</div>;

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <Container className="pt-4 sm:pt-8 mb-8">
        <motion.button onClick={() => setActivePage('servicios')} whileHover={{ x: -3 }} whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm w-fit">
          <ChevronLeft className="w-4 h-4" /> Volver a Soluciones
        </motion.button>
      </Container>

      <Container className="mb-16">
        <motion.div variants={fadeUp} initial="initial" animate="animate"
          className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl p-6 sm:p-16 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col-reverse md:flex-row gap-8 sm:gap-12 items-center relative z-10">
            <div className="md:w-2/3 text-center md:text-left">
              <Badge color={service.highlight === 'teal' ? 'teal' : 'mint'} icon={service.icon}>Solución Especializada</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-serif mb-4 sm:mb-6 leading-tight">{service.title}</h1>
              <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">{service.shortDesc}</p>
            </div>
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
              <motion.div whileHover={{ rotate: -4, scale: 1.05 }} transition={EASE_BOUNCE}
                className="w-24 h-24 sm:w-40 sm:h-40 bg-slate-900 rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
                <service.icon className="w-12 h-12 sm:w-20 sm:h-20 text-emerald-400" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>

      <Container className="mb-20">
        <motion.div className="grid md:grid-cols-2 gap-6 sm:gap-12"
          variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <motion.div variants={staggerItem} className="bg-slate-100/50 p-6 sm:p-12 rounded-3xl border border-slate-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-slate-900 mb-4 font-serif">Oportunidad de Mejora en la Operación</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">{service.problem}</p>
          </motion.div>
          <motion.div variants={staggerItem} className="bg-emerald-50/50 p-6 sm:p-12 rounded-3xl border border-emerald-100">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-slate-900 mb-4 font-serif">El Servicio LMS</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">{service.solution}</p>
          </motion.div>
        </motion.div>
      </Container>

      <Section className="bg-white border-y border-slate-200">
        <Container>
          <motion.div className="text-center mb-10 sm:mb-16" variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif mb-4 leading-tight">¿Qué obtienes exactamente?</h2>
            <p className="text-slate-500 font-medium">Beneficios directos desde el primer mes de gestión o implementación.</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
            variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {service.benefits.map((benefit, idx) => (
              <motion.div key={idx} variants={staggerItem}
                whileHover={{ y: -4 }} transition={{ duration: 0.25, ease: EASE }}
                className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <motion.div whileHover={{ scale: 1.2, rotate: -8 }} transition={EASE_BOUNCE}
                  className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-4 shadow-md shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </motion.div>
                <p className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
            className="bg-slate-900 rounded-[2rem] p-8 sm:p-16 relative overflow-hidden shadow-2xl shadow-emerald-500/10 text-center max-w-4xl mx-auto border border-slate-800">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl font-serif font-black text-white mb-6 leading-tight">
                Integra <span className="text-emerald-400">{service.title}</span> en tu empresa hoy.
              </h3>
              <p className="text-slate-300 text-sm sm:text-lg mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                Agenda un diagnóstico con nuestro equipo de expertos, donde en el menor tiempo posible podremos proponerte la mejor calidad de servicio para tu empresa.
              </p>
              <MagneticButton href={WA_LINKS.DIAGNOSTICO} size="md">
                <MessageCircle className="w-5 h-5" /> Agendar Diagnóstico con Expertos
              </MagneticButton>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

/* =========================================
   15. ABOUT VIEW
   ========================================= */
const AboutView = () => (
  <div className="pt-24 bg-white min-h-screen">
    <Section className="bg-slate-50 border-b border-slate-200">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <Badge color="mint" icon={Target}>Nuestra Filosofía</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif mb-4 sm:mb-6 leading-tight">
              Nos convertimos en un aliado estratégico para tu empresa.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
              En LMS Accounting Group sintetizamos la brecha entre tu compañía y los entes de control, reduciendo sustancialmente tu carga laboral y financiera.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              Aplicamos metodologías rigurosas y tecnología de vanguardia para simplificar tus procesos administrativos, aportando eficiencia real al margen financiero de tu empresa.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <SpotlightCard className="bg-white p-6 sm:p-8 rounded-3xl border-slate-200 shadow-sm">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Rigor Técnico</h3>
              <p className="text-xs sm:text-sm text-slate-600">Todos nuestros servicios son gestionados por expertos. Aplicamos un cumplimiento normativo estricto para asegurar la calidad de tu información.</p>
            </SpotlightCard>
            <SpotlightCard highlightColor="teal" dark className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border-slate-800 shadow-xl">
              <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Tech-First (IA)</h3>
              <p className="text-xs sm:text-sm text-slate-300">Procesos integrados con IA. La tecnología hace el trabajo manual, y las personas de nuestro equipo apoyan y orquestan todo el proceso estratégico.</p>
            </SpotlightCard>
            <SpotlightCard className="bg-white p-6 sm:p-8 rounded-3xl border-slate-200 shadow-sm sm:col-span-2 text-center">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Aliados de Pymes y MiPymes</h3>
              <p className="text-xs sm:text-sm text-slate-600">Entendemos la dinámica de las empresas en crecimiento en Colombia. Conocemos tus dolores mejor que nadie.</p>
            </SpotlightCard>
          </motion.div>
        </div>
      </Container>
    </Section>

    <Section className="bg-white">
      <Container>
        <motion.div className="text-center mb-12 sm:mb-16" variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <Badge color="dark" icon={Users}>Autoridad y Confianza</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif mb-4 sm:mb-6">Socios Directores</h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Liderazgo experto al servicio de tu empresa. Combinamos el rigor legal, la precisión contable y la visión de auditoría para blindar tu operación.
          </p>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
          {[
            { name: "Sebastián Borja",  role: "Socio Fundador & Dir. Legal",  img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400", url: "https://www.linkedin.com/in/joan-sebasti%C3%A1n-borja-vargas-3ab48b199/" },
            { name: "Jhonathan Lara",   role: "Socio & Director Contable",    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400", url: "https://www.linkedin.com/in/jhonathan-lara-tabares-49898b20" },
            { name: "Ingrid Martin",    role: "Socia & Auditoría",            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400", url: "https://www.linkedin.com/in/ingrid-luliet-martin-malaver/" },
          ].map((member, i) => (
            <motion.div key={i} variants={staggerItem}
              whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: EASE }}
              className="bg-slate-50 p-4 rounded-3xl shadow-sm hover:shadow-md transition-shadow group border border-slate-200">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 sm:mb-6 relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end justify-center pb-4 sm:pb-6">
                  <motion.a href={member.url} target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                    className="bg-emerald-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-emerald-600 transition-colors shadow-lg">
                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" /> Conectar en LinkedIn
                  </motion.a>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 px-2">{member.name}</h3>
              <p className="text-emerald-600 font-medium text-xs sm:text-sm px-2 pb-2">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  </div>
);

/* =========================================
   16. BLOG VIEW
   ========================================= */
const BlogView = ({ setActivePage }) => {
  const featured = BLOG_POSTS_DATA[0];
  const recent   = BLOG_POSTS_DATA.slice(1);
  const colorMap = { emerald: "bg-emerald-50 text-emerald-700 border-emerald-100", teal: "bg-teal-50 text-teal-700 border-teal-100" };

  return (
    <Section className="bg-slate-50 pt-32 min-h-screen">
      <Container>
        <motion.div className="text-center mb-12 sm:mb-16" variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <Badge color="mint" icon={FileText}>Blog Informativo</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-serif mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto">
            El conocimiento detrás de las <br className="hidden sm:block" />empresas más rentables
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed px-2">
            Descubre cómo las Pymes en Colombia están recuperando liquidez, blindándose ante la DIAN y automatizando su contabilidad con tecnología de punta y estrategia humana.
          </p>
        </motion.div>

        {/* Featured */}
        <motion.div className="mb-12 sm:mb-20 cursor-pointer" onClick={() => setActivePage(`blog_${featured.id}`)}
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          whileHover={{ y: -4 }}>
          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl shadow-emerald-500/5 group flex flex-col lg:flex-row relative hover:shadow-2xl transition-shadow duration-500">
            <div className="lg:w-1/2 overflow-hidden relative min-h-[250px] sm:min-h-[300px] lg:min-h-[450px]">
              <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img src={featured.img} alt={featured.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex gap-2 flex-wrap">
                {featured.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="bg-slate-900/80 backdrop-blur-md text-white text-[9px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 p-6 sm:p-8 sm:p-12 flex flex-col justify-center relative bg-white z-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-[80px] pointer-events-none" />
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
                <span className="text-slate-400 text-[9px] sm:text-xs font-bold uppercase tracking-widest">{featured.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-slate-400 text-[9px] sm:text-xs font-medium flex items-center gap-1"><Clock3 className="w-3 h-3" /> {featured.readTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 sm:mb-6 font-serif leading-tight relative z-10 group-hover:text-emerald-600 transition-colors">
                {featured.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 relative z-10 font-medium">{featured.excerpt}</p>
              <div className="flex items-center justify-between relative z-10 mt-auto pt-4 sm:pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm shrink-0">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100" alt="Autor" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs sm:text-sm font-bold text-slate-900 leading-none mb-1">Socios Directores</p>
                    <p className="text-[9px] sm:text-[10px] sm:text-xs text-emerald-600 font-bold">LMS Accounting Group</p>
                  </div>
                </div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 sm:mb-8 font-serif px-2">Últimos Análisis</h3>
        <motion.div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-20 px-2 sm:px-0"
          variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
          {recent.map((post) => (
            <SpotlightCard key={post.id} highlightColor={post.color}
              onClick={() => setActivePage(`blog_${post.id}`)}
              className="bg-white rounded-3xl border-slate-200 flex flex-col h-full shadow-sm overflow-hidden group cursor-pointer">
              <div className="h-48 sm:h-56 sm:h-64 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20">
                  <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border shadow-sm backdrop-blur-md bg-white/90 ${colorMap[post.color]}`}>{post.category}</span>
                </div>
              </div>
              <div className="p-5 sm:p-6 sm:p-8 flex flex-col flex-1 relative z-20 bg-white">
                <span className="text-[9px] sm:text-xs text-slate-400 font-bold tracking-widest uppercase mb-2 sm:mb-3 block">{post.date}</span>
                <h4 className="text-lg sm:text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 font-serif leading-tight group-hover:text-emerald-600 transition-colors">{post.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-medium line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto pt-4 sm:pt-5 border-t border-slate-100">
                  <span className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2 group-hover:text-emerald-600 transition-colors">
                    Leer análisis <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

/* =========================================
   17. ARTICLE DETAIL VIEW
   ========================================= */
const ArticleDetailView = ({ activePage, setActivePage }) => {
  const article = BLOG_POSTS_DATA.find(p => p.id === activePage.replace('blog_', ''));
  if (!article) return <div className="pt-32 text-center">Artículo no encontrado</div>;

  return (
    <div className="pt-24 bg-white min-h-screen pb-20">
      <Container className="pt-4 sm:pt-8 mb-6 sm:mb-8">
        <motion.button onClick={() => setActivePage('blog')} whileHover={{ x: -3 }} whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
          <ChevronLeft className="w-4 h-4" /> Volver al Blog
        </motion.button>
      </Container>

      <Container className="max-w-4xl px-4 sm:px-6">
        <motion.div className="text-center mb-8 sm:mb-10" variants={fadeUp} initial="initial" animate="animate">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Badge color={article.color === 'teal' ? 'teal' : 'mint'} icon={FileText}>{article.category}</Badge>
            <span className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{article.date}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-serif mb-6 sm:mb-8 leading-tight">{article.title}</h1>
          <div className="flex items-center justify-center gap-4 border-t border-b border-slate-100 py-3 sm:py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm shrink-0">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100" alt="Autor" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="text-[10px] sm:text-xs font-bold text-slate-900 leading-none mb-1">Socios Directores</p>
                <p className="text-[9px] sm:text-[10px] text-emerald-600 font-bold">LMS Accounting Group</p>
              </div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-slate-200" />
            <span className="text-slate-500 text-[10px] sm:text-xs font-medium flex items-center gap-1"><Clock3 className="w-3 h-3 sm:w-4 sm:h-4" /> {article.readTime}</span>
          </div>
        </motion.div>

        <motion.div className="w-full aspect-video sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12 shadow-xl border border-slate-200"
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}>
          <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
        </motion.div>

        <article className="prose prose-base sm:prose-lg prose-slate max-w-none mb-16 sm:mb-20 prose-headings:font-serif prose-headings:font-black prose-p:font-medium prose-a:text-emerald-600">
          {article.content}
        </article>

        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
          className="bg-slate-900 rounded-[2rem] p-8 sm:p-16 relative overflow-hidden shadow-2xl shadow-emerald-500/10 text-center border border-slate-800">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <motion.div whileHover={{ rotate: -8, scale: 1.1 }} transition={EASE_BOUNCE}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-4 sm:mb-6">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl sm:text-3xl sm:text-4xl font-serif font-black text-white mb-4 sm:mb-6 leading-tight max-w-2xl mx-auto">
              ¿Quieres saber si tu Pyme aplica para implementar este nivel de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Inteligencia Financiera</span>?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto font-medium leading-relaxed">
              Agenda un diagnóstico con nuestro equipo de expertos, donde en el menor tiempo posible podremos proponerte la mejor calidad de servicio para tu empresa.
            </p>
            <MagneticButton href={WA_LINKS.DIAGNOSTICO} size="md">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> Agendar Diagnóstico con Expertos
            </MagneticButton>
            <p className="text-slate-500 text-[10px] sm:text-xs mt-6 font-medium flex items-center justify-center gap-2">
              <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" /> Sin compromisos. Total confidencialidad garantizada.
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

/* =========================================
   18. ATLAS AI WIDGET — streaming effect
   ========================================= */
const apiKey = "";

const callGeminiAPI = async (chatHistory) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const systemPrompt = `Eres Atlas, el Consultor de Inteligencia Artificial y Estratega Financiero Senior de LMS Accounting Group.
Tu misión es mantener conversaciones B2B de alto nivel con gerentes, CEOs y dueños de Pymes en Colombia. Eres un experto en el Estatuto Tributario, normatividad NIIF, auditoría y RPA.

CATÁLOGO DE 17 SERVICIOS LMS (5 RAMAS):
1. IA & Automatización: Causación Automática (Elimina el 100% de la digitación en ERPs), Información Exógena IA (Cruce perfecto para evitar sanciones Art. 651).
2. Auditoría & Control: Revisoría Fiscal (Blindaje Supersociedades), Auditoría Externa, Auditoría Forense (Detección de fraude), Desarrollo de Control Interno.
3. Finanzas & Impuestos: Recuperación de Saldos a Favor DIAN (Honorarios 4% solo a éxito), Declaraciones Tributarias, Valoración de Empresas, EEFF, Informes gerenciales.
4. Legal & Trámites: Asesoría Legal Corporativa, Constitución de Empresas, Matrícula Mercantil, Registro Nacional de Turismo (RNT).
5. Tecnología: Implementación de ERP, Facturación Electrónica Soflogy.

DIRECTRICES:
- Tono: Profesional, seguro, empático y resolutivo. Usas lenguaje gerencial.
- Valida el dolor del usuario antes de proponer servicios.
- Respuestas MUY CORTAS y directas al punto. Máximo 2-3 párrafos de 2 líneas.
- NO uses asteriscos para negritas. Si quieres resaltar, usa MAYÚSCULAS.
- Usa emojis con moderación (1-2 por mensaje máximo).`;

  let validContents = [];
  let lastRole = null;

  for (const msg of chatHistory) {
    const role = msg.type === 'user' ? 'user' : 'model';
    if (validContents.length === 0 && role === 'model') continue;
    if (role === lastRole) {
      validContents[validContents.length - 1].parts[0].text += `\n\n${msg.text}`;
    } else {
      validContents.push({ role, parts: [{ text: msg.text }] });
      lastRole = role;
    }
  }
  if (validContents.length === 0) validContents.push({ role: 'user', parts: [{ text: 'Hola' }] });

  const payload = { systemInstruction: { parts: [{ text: systemPrompt }] }, contents: validContents };

  for (let attempt = 0; attempt <= 2; attempt++) {
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) { if (res.status === 400) throw new Error('400'); throw new Error('API'); }
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "¿Podrías reformular tu consulta?";
    } catch (err) {
      if (err.message === '400' || attempt === 2) throw err;
      await new Promise(r => setTimeout(r, 1200 * (attempt + 1)));
    }
  }
};

// Streaming text effect hook
const useTypingEffect = (text, speed = 18) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed('');
    setDone(false);
    if (!text) return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(iv); setDone(true); }
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);
  return { displayed, done };
};

const BotMessage = ({ text, isLatest }) => {
  const { displayed } = useTypingEffect(isLatest ? text : null, 14);
  return <span>{isLatest ? displayed : text}</span>;
};

const AIAgentWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: '¡Hola! Soy Atlas 🧠, el consultor AI de LMS Accounting Group. Estoy aquí para guiarte en temas de automatización, finanzas, legal o auditoría.\n\n¿En qué área te gustaría enfocarte hoy?' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [latestBotIdx, setLatestBotIdx] = useState(0);
  const [quickReplies, setQuickReplies] = useState(["💰 Recuperar Saldo DIAN", "🤖 Causación con IA", "🛡️ Auditoría Externa"]);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isOpen, isTyping]);

  const handleSend = async (text = inputValue) => {
    if (!text.trim() || isTyping) return;
    const newMessages = [...messages, { type: 'user', text }];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);
    setQuickReplies([]);
    try {
      const reply = await callGeminiAPI(newMessages);
      setMessages(prev => {
        const next = [...prev, { type: 'bot', text: reply }];
        setLatestBotIdx(next.length - 1);
        return next;
      });
      setQuickReplies(["📅 Agendar diagnóstico", "Tengo otra duda"]);
    } catch {
      setMessages(prev => {
        const next = [...prev, { type: 'bot', text: "Hubo una breve intermitencia. ¿Podrías enviarme tu mensaje nuevamente?" }];
        setLatestBotIdx(next.length - 1);
        return next;
      });
      setQuickReplies(["Reintentar"]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="fixed bottom-[85px] sm:bottom-28 right-4 sm:right-8 z-[70] w-[calc(100vw-32px)] sm:w-[380px] h-[65vh] sm:h-[75vh] max-h-[600px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="bg-slate-900 p-3 flex justify-between items-center text-white relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-teal-500/20 blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 relative z-10">
                <div className="relative">
                  <div className="w-8 h-8 bg-slate-800 border border-teal-500/30 rounded-xl flex items-center justify-center shadow-sm">
                    <Brain className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-900 rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-none">Atlas AI</h3>
                  <p className="text-[9px] text-teal-300 uppercase tracking-widest font-bold mt-1">Consultor Senior</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="relative z-10 p-2 hover:bg-slate-800 text-slate-400 rounded-full transition-colors">
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4">
              {messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
                  className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] sm:max-w-[85%] p-3 sm:p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
                    ${m.type === 'user' ? 'bg-emerald-500 text-white rounded-tr-sm shadow-md' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm'}`}>
                    {m.type === 'bot'
                      ? <BotMessage text={m.text} isLatest={i === latestBotIdx && i === messages.length - 1} />
                      : m.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm flex gap-1.5 shadow-sm">
                    {[0, 75, 150].map((d, i) => (
                      <span key={i} className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-100 shrink-0">
              {quickReplies.length > 0 && (
                <div className="flex gap-2 mb-3 overflow-x-auto scrollbar-hide pb-1">
                  {quickReplies.map((r, i) => (
                    <motion.button key={i} onClick={() => handleSend(r)}
                      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      className="text-[11px] sm:text-xs bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-slate-600 font-medium hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all whitespace-nowrap shrink-0">
                      {r}
                    </motion.button>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                <input
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  placeholder="Consulta a Atlas..."
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && handleSend()}
                />
                <motion.button onClick={() => handleSend()} whileTap={{ scale: 0.93 }}
                  className="p-3 bg-slate-900 text-emerald-400 rounded-xl hover:bg-slate-800 transition-colors shadow-sm">
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-8 z-[60] flex items-center gap-2 sm:gap-3 bg-white text-slate-900 p-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-500/10 hover:border-emerald-200 transition-colors border border-slate-200 group"
      >
        <div className="relative">
          <div className="w-10 h-10 sm:w-8 sm:h-8 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={isOpen ? "close" : "bot"}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}>
                {isOpen ? <CloseIcon className="w-5 h-5 text-emerald-600" /> : <Bot className="w-5 h-5 text-emerald-600" />}
              </motion.div>
            </AnimatePresence>
          </div>
          <span className="absolute -top-0 -right-0 w-3 h-3 bg-teal-500 rounded-full border-2 border-white" />
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest leading-none mb-1">Atlas AI</p>
          <p className="text-sm font-bold leading-none text-slate-700">Tu Asistente</p>
        </div>
      </motion.button>
    </>
  );
};

/* =========================================
   19. WHATSAPP FAB
   ========================================= */
const WhatsAppFAB = () => {
  const [showTip, setShowTip] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShowTip(false), 8000); return () => clearTimeout(t); }, []);

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, ...EASE_BOUNCE }}
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-8 z-[60]">
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, x: -16, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, x: -8 }} transition={{ duration: 0.3, ease: EASE }}
            className="absolute bottom-full left-0 mb-4 w-[80vw] max-w-[280px] sm:w-80 bg-white rounded-2xl shadow-2xl p-4 sm:p-5 border border-slate-100 origin-bottom-left"
          >
            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm">¿Dudas sobre impuestos?</p>
                <p className="text-slate-500 text-[10px] sm:text-xs mt-1 leading-relaxed">Habla con un asesor experto humano ahora mismo.</p>
              </div>
            </div>
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-100" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a href={WA_LINKS.DIAGNOSTICO} target="_blank" rel="noreferrer"
        whileHover={{ scale: 1.08, rotate: 5 }} whileTap={{ scale: 0.93 }}
        className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 relative group">
        <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8" />
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-sm">1</span>
        <span className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:animate-ping" />
      </motion.a>
    </motion.div>
  );
};

/* =========================================
   20. FOOTER
   ========================================= */
const Footer = ({ setActivePage }) => (
  <footer className="bg-slate-900 text-white pt-16 sm:pt-20 pb-8 sm:pb-10 mt-auto">
    <Container>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
        <div className="col-span-1 sm:col-span-2">
          <BrandLogo onClick={() => setActivePage('inicio')} isDark />
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed mt-6">
            Contabilidad inteligente, revisión fiscal y recuperación de impuestos corporativos para Pymes en crecimiento en Colombia.
          </p>
          <div className="flex gap-3 sm:gap-4 mt-6">
            {[{ href: "https://www.linkedin.com", Icon: Linkedin }, { href: "mailto:contacto@lms-accounting.com", Icon: Mail }].map(({ href, Icon }, i) => (
              <motion.a key={i} href={href} target={href.startsWith('http') ? "_blank" : undefined} rel="noreferrer"
                whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-900 transition-colors text-slate-400">
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 sm:mb-6 text-lg font-serif">Navegación</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm text-slate-400 font-medium">
            {['inicio','servicios','metodologia','blog'].map(page => (
              <li key={page}><button onClick={() => setActivePage(page)} className="hover:text-emerald-400 transition-colors capitalize">{page}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 sm:mb-6 text-lg font-serif">Contacto Directo</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm text-slate-400 font-medium">
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-emerald-500 shrink-0" /> +57 322 702 4011</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-emerald-500 shrink-0" /> +57 316 752 1053</li>
            <li className="flex items-center gap-3 break-all"><Mail className="w-4 h-4 text-emerald-500 shrink-0" /> contacto@lms-accounting.com</li>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-emerald-500 shrink-0" /> Bogotá, Colombia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium text-center sm:text-left">
        <p>&copy; {new Date().getFullYear()} LMS Accounting Group. Todos los derechos reservados.</p>
        <div className="flex gap-6 justify-center">
          <a href="#" className="hover:text-emerald-400 transition-colors">Privacidad</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Términos</a>
        </div>
      </div>
    </Container>
  </footer>
);

/* =========================================
   21. APP ROOT
   ========================================= */
export default function App() {
  const [activePage, setActivePage] = useState('inicio');

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Montserrat:wght@300;400;500;700;900&display=swap');
        :root { --font-serif: 'Playfair Display', serif; --font-sans: 'Montserrat', sans-serif; }
        .font-serif { font-family: var(--font-serif); }
        .font-sans  { font-family: var(--font-sans); }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* CSS marquee — zero JS, compositor-only animation */
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .animate-marquee { animation: marquee 38s linear infinite; will-change: transform; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>

      <Header activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activePage === 'inicio' && (
            <motion.div key="inicio" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <HomeView setActivePage={setActivePage} />
            </motion.div>
          )}
          {activePage === 'servicios' && (
            <motion.div key="servicios" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ServicesView setActivePage={setActivePage} />
            </motion.div>
          )}
          {activePage.startsWith('servicio_') && (
            <motion.div key="srvdetail" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ServiceDetailView activePage={activePage} setActivePage={setActivePage} />
            </motion.div>
          )}
          {activePage === 'metodologia' && (
            <motion.div key="metodologia" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <MetodologiaView />
            </motion.div>
          )}
          {activePage === 'nosotros' && (
            <motion.div key="nosotros" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <AboutView />
            </motion.div>
          )}
          {activePage === 'blog' && (
            <motion.div key="blog" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <BlogView setActivePage={setActivePage} />
            </motion.div>
          )}
          {activePage.startsWith('blog_') && (
            <motion.div key="blogdetail" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ArticleDetailView activePage={activePage} setActivePage={setActivePage} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
      <AIAgentWidget />
      <WhatsAppFAB />
    </div>
  );
}