/**
 * YAMAHA SPORTS NEIVA - HUILA
 * CONTROLADOR PRINCIPAL DEL SITIO WEB
 * (CON IMÁGENES LOCALES REALES Y VIDEO DE ESCRITORIO)
 */

// ==========================================================================
// 1. BASE DE DATOS DE MOTOCICLETAS YAMAHA CON IMÁGENES REALES LOCALES
// ==========================================================================
const MOTORCYCLES_DATA = [
  // --- AUTOMÁTICAS Y SEMIAUTOMÁTICAS ---
  {
    id: 'crypton-fi',
    name: 'Crypton FI',
    category: 'automaticas',
    categoryLabel: 'Semiautomática',
    price: 9100000,
    cylinder: '114 cc',
    power: '8.6 HP @ 7.000 RPM',
    torque: '9.6 Nm @ 5.500 RPM',
    weight: '96 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Disco delantero / Tambor trasero',
    badge: 'Ahorro Máximo',
    image: 'assets/images/crypton_2026_verde_mini-1.png',
    description: 'La semiautomática más confiable y económica de Colombia. Ideal para el día a día en Neiva con consumo ultra eficiente y excelente respuesta.'
  },
  {
    id: 'aerox-155',
    name: 'Aerox 155 Connected',
    category: 'automaticas',
    categoryLabel: 'Automática Deportiva',
    price: 12800000,
    cylinder: '155 cc VVA',
    power: '14.8 HP @ 8.000 RPM',
    torque: '13.9 Nm @ 6.500 RPM',
    weight: '126 kg',
    fuel: 'Inyección Electrónica VVA',
    brakes: 'Disco ABS delantero',
    badge: 'Conectividad Y-Connect',
    image: 'assets/images/aeroxNeon_mini-1.jpg',
    description: 'Diseño agresivo inspirado en las superdeportivas R-Series con tecnología de válvulas variables (VVA) y conectividad Bluetooth a tu smartphone.'
  },
  {
    id: 'nmax-connected',
    name: 'NMAX Connected ABS',
    category: 'automaticas',
    categoryLabel: 'Automática Premium',
    price: 16800000,
    cylinder: '155 cc VVA Blue Core',
    power: '15.1 HP @ 8.000 RPM',
    torque: '13.9 Nm @ 6.500 RPM',
    weight: '131 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Disco delantero y trasero con ABS doble canal',
    badge: 'Top Ventas Huila',
    image: 'assets/images/nmax_plata_2026_mini-1.png',
    description: 'La scooter más vendida y deseada de Colombia. Control de tracción (TCS), encendido Smart Key, ABS de doble canal y sistema Start & Stop.'
  },
  {
    id: 'xmax-300',
    name: 'XMAX 300 Tech MAX',
    category: 'automaticas',
    categoryLabel: 'Maxi Scooter',
    price: 34700000,
    cylinder: '292 cc Blue Core',
    power: '27.6 HP @ 7.250 RPM',
    torque: '29.0 Nm @ 5.750 RPM',
    weight: '183 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'ABS + Control de Tracción TCS',
    badge: 'Máximo Confort',
    image: 'assets/images/xmax_2025_gris_mini-1.jpg',
    description: 'Comodidad ejecutiva, espacio para dos cascos integrales bajo el asiento y potencia ideal para viajar con estilo por las carreteras del Huila.'
  },
  {
    id: 'tmax-560',
    name: 'TMAX Tech MAX 560',
    category: 'automaticas',
    categoryLabel: 'Hyper Scooter',
    price: 75000000,
    cylinder: '560 cc Bicilíndrico',
    power: '47.6 HP @ 7.500 RPM',
    torque: '55.7 Nm @ 5.250 RPM',
    weight: '220 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Doble disco delantero + ABS + Modos D-Mode',
    badge: 'Exclusiva',
    image: 'assets/images/tmaxTechmax_darkPetrol_mini-1.png',
    description: 'El rey absoluto de las maxiscooters con chasis de aluminio, pantalla TFT conectada, control de crucero y puños/asiento calefactables.'
  },

  // --- URBANAS Y TRABAJO ---
  {
    id: 'fz-3-0',
    name: 'FZ Versión 3.0 ABS',
    category: 'urbanas',
    categoryLabel: 'Urbana / Calle',
    price: 11800000,
    cylinder: '149 cc Blue Core',
    power: '12.2 HP @ 7.250 RPM',
    torque: '13.3 Nm @ 5.500 RPM',
    weight: '137 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Disco con ABS delantero',
    badge: 'Favorita Neiva',
    image: 'assets/images/Fz15v3_2024_mini-1.png',
    description: 'La naked urbana por excelencia. Su diseño imponente, frenos ABS de serie y confort la hacen la compañera perfecta para rodar seguro por Neiva.'
  },
  {
    id: 'fz25-abs',
    name: 'FZ25 ABS',
    category: 'urbanas',
    categoryLabel: 'Urbana Deportiva',
    price: 15300000,
    cylinder: '249 cc 4 tiempos',
    power: '20.6 HP @ 8.000 RPM',
    torque: '20.0 Nm @ 6.000 RPM',
    weight: '153 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Disco delantero y trasero con ABS',
    badge: 'Potencia 250cc',
    image: 'assets/images/fz252026-1.jpg',
    description: 'Excelente torque desde bajas revoluciones, refrigeración por aire con radiador de aceite y gran autonomía para ciudad y escapadas por el Huila.'
  },

  // --- TODOTERRENO Y DOBLE PROPÓSITO ---
  {
    id: 'xtz-150',
    name: 'XTZ 150 ABS',
    category: 'todoterreno',
    categoryLabel: 'Todo Terreno',
    price: 14500000,
    cylinder: '149 cc Inyección',
    power: '12.3 HP @ 7.500 RPM',
    torque: '13.1 Nm @ 6.000 RPM',
    weight: '131 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Disco delantero con ABS',
    badge: 'Doble Propósito',
    image: 'assets/images/xtz150_azul-ABS_mini-1.png',
    description: 'Suspensiones de largo recorrido preparadas para el asfalto y las trochas del Huila. Postura ergonómica y durabilidad legendaria.'
  },
  {
    id: 'xtz-250',
    name: 'XTZ 250 Lander ABS',
    category: 'todoterreno',
    categoryLabel: 'Aventura / Dual Sport',
    price: 25900000,
    cylinder: '249 cc SOHC',
    power: '20.4 HP @ 8.000 RPM',
    torque: '20.5 Nm @ 6.500 RPM',
    weight: '153 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Disco delantero con ABS',
    badge: 'Lista para la Tatacoa',
    image: 'assets/images/xtz250_blanca_mini-1.png',
    description: 'La moto ideal para recorrer el Desierto de la Tatacoa y la cordillera huilense. Asiento confortable en doble nivel, farola LED y gran tanque.'
  },

  // --- DEPORTIVAS NAKED (MT-SERIES) ---
  {
    id: 'mt-15',
    name: 'MT-15 V2',
    category: 'deportivas',
    categoryLabel: 'Hyper Naked',
    price: 15500000,
    cylinder: '155 cc VVA',
    power: '19.0 HP @ 10.000 RPM',
    torque: '14.7 Nm @ 8.500 RPM',
    weight: '139 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Disco ABS + Embrague antirrebote',
    badge: 'Dark Side of Japan',
    image: 'assets/images/mt15azulnueva.jpg',
    description: 'La naked del lado oscuro de Japón. Horquilla invertida dorada, embrague asistido antirrebote (A&S) y aceleración explosiva.'
  },
  {
    id: 'mt-03',
    name: 'MT-03 ABS',
    category: 'deportivas',
    categoryLabel: 'Hyper Naked Bicilíndrica',
    price: 31900000,
    cylinder: '321 cc Bicilíndrico',
    power: '41.4 HP @ 10.750 RPM',
    torque: '29.6 Nm @ 9.000 RPM',
    weight: '168 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Doble disco con ABS',
    badge: 'Bicilíndrica Pura',
    image: 'assets/images/Mt03_2026_grisMINI-1.jpg',
    description: 'Motor bicilíndrico de altas revoluciones con sonido inconfundible. Ágil en el tráfico urbano de Neiva y poderosa en carretera abierta.'
  },
  {
    id: 'mt-07',
    name: 'MT-07 ABS (CP2)',
    category: 'deportivas',
    categoryLabel: 'Hyper Naked CP2',
    price: 57000000,
    cylinder: '689 cc Crossplane 2',
    power: '73.4 HP @ 8.750 RPM',
    torque: '67.0 Nm @ 6.500 RPM',
    weight: '184 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Doble disco 298 mm ABS',
    badge: 'Motor Crossplane CP2',
    image: 'assets/images/mt07_gris_mini-1.png',
    description: 'El legendario motor Crossplane CP2 entrega un torque brutal y adictivo con un chasis ligero que redefine la diversión sobre dos ruedas.'
  },
  {
    id: 'mt-09',
    name: 'MT-09 V4 (CP3)',
    category: 'deportivas',
    categoryLabel: 'Hyper Naked Tricilíndrica',
    price: 63000000,
    cylinder: '890 cc Crossplane 3',
    power: '119.0 HP @ 10.000 RPM',
    torque: '93.0 Nm @ 7.000 RPM',
    weight: '189 kg',
    fuel: 'Inyección con acelerador electrónico YCC-T',
    brakes: 'Doble disco radial ABS en curva',
    badge: 'IMU 6 Ejes',
    image: 'assets/images/Mt09_2024_cyan_mini-1.jpg',
    description: 'Monstruo tricilíndrico de 119 HP con Quickshifter bidireccional, IMU de 6 ejes con control de deslizamiento, tracción y anti-wheelie.'
  },
  {
    id: 'mt-09-sp',
    name: 'MT-09 SP',
    category: 'deportivas',
    categoryLabel: 'Hyper Naked Premium',
    price: 73000000,
    cylinder: '890 cc CP3',
    power: '119.0 HP @ 10.000 RPM',
    torque: '93.0 Nm @ 7.000 RPM',
    weight: '190 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Brembo Stylema + Suspensión Öhlins',
    badge: 'Edición SP Öhlins',
    image: 'assets/images/Mt09_2025_SP_mini-1.jpg',
    description: 'Acabados exclusivos R1M, amortiguador trasero Öhlins completamente ajustable y pinzas de freno Brembo Stylema de última generación.'
  },
  {
    id: 'tracer-9-gt',
    name: 'Tracer 9 GT+',
    category: 'deportivas',
    categoryLabel: 'Sport Touring',
    price: 79000000,
    cylinder: '890 cc CP3',
    power: '119.0 HP @ 10.000 RPM',
    torque: '93.0 Nm @ 7.000 RPM',
    weight: '220 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Frenado Unificado Radar + ABS',
    badge: 'Radar Adaptativo',
    image: 'assets/images/tracer_gris_mini-1.png',
    description: 'La moto de viaje más tecnológica del mercado: radar milimétrico con control de crucero adaptativo y suspensión electrónica semiactiva KYB.'
  },

  // --- SÚPER DEPORTIVAS (R-SERIES) ---
  {
    id: 'r15-v4',
    name: 'YZF-R15 V4',
    category: 'superdeportivas',
    categoryLabel: 'Superdeportiva Ligera',
    price: 16100000,
    cylinder: '155 cc VVA',
    power: '18.4 HP @ 10.000 RPM',
    torque: '14.2 Nm @ 7.500 RPM',
    weight: '142 kg',
    fuel: 'Inyección Electrónica VVA',
    brakes: 'Doble canal ABS + Control de Tracción',
    badge: 'ADN R-Series',
    image: 'assets/images/Yamaha_r15v4_2026_menumini-1.jpg',
    description: 'Aerodinámica inspirada en MotoGP YZR-M1 con horquilla invertida, Quickshifter opcional, chasis Deltabox y control de tracción.'
  },
  {
    id: 'r3',
    name: 'YZF-R3',
    category: 'superdeportivas',
    categoryLabel: 'Superdeportiva Bicilíndrica',
    price: 33900000,
    cylinder: '321 cc 2 cilindros en línea',
    power: '42.0 HP @ 10.750 RPM',
    torque: '29.5 Nm @ 9.000 RPM',
    weight: '169 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Disco delantero y trasero con ABS',
    badge: 'Pura Pista',
    image: 'assets/images/Untitled-design-2.png',
    description: 'Distribución de pesos 50/50, carrocería afilada y motor que sube hasta casi 12.000 RPM para desatar tu adrenalina en pista o carretera.'
  },
  {
    id: 'r7',
    name: 'YZF-R7',
    category: 'superdeportivas',
    categoryLabel: 'Superdeportiva CP2',
    price: 59000000,
    cylinder: '689 cc Crossplane 2',
    power: '73.4 HP @ 8.750 RPM',
    torque: '67.0 Nm @ 6.500 RPM',
    weight: '188 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Pinzas radiales Brembo + ABS',
    badge: 'Nacida para Curvar',
    image: 'assets/images/Untitled-design-1.png',
    description: 'La combinación perfecta de agilidad extrema, torque instantáneo CP2 y ergonomía deportiva para dominar cada curva con precisión milimétrica.'
  },
  {
    id: 'yzf-r9',
    name: 'YZF-R9 (Nueva 2026)',
    category: 'superdeportivas',
    categoryLabel: 'Superdeportiva Supersport',
    price: 76000000,
    cylinder: '890 cc CP3 Tricilíndrico',
    power: '119.0 HP @ 10.000 RPM',
    torque: '93.0 Nm @ 7.000 RPM',
    weight: '195 kg',
    fuel: 'Inyección Electrónica con Ride-by-Wire',
    brakes: 'Brembo Stylema + Suspensiones KYB ajustables',
    badge: 'Lanzamiento 2026',
    image: 'assets/images/R9.jpg',
    description: 'El nuevo buque insignia de la gama Supersport. Aerodinámica con alerones de carga aerodinámica, frenos Brembo Stylema y electrónica de competición.'
  },

  // --- ADVENTURE ---
  {
    id: 'tenere-700',
    name: 'Ténéré 700 Rally Edition',
    category: 'adventure',
    categoryLabel: 'Adventure Rally',
    price: 73000000,
    cylinder: '689 cc CP2',
    power: '72.4 HP @ 9.000 RPM',
    torque: '68.0 Nm @ 6.500 RPM',
    weight: '204 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'ABS desconectable con 3 modos',
    badge: 'Aventura Total',
    image: 'assets/images/t7Rally26Menu-1.jpg',
    description: 'La reina indiscutible del off-road y la aventura en el Huila. Llantas de radios (21" del / 18" tras), chasis tubular y escape Akrapovič en versión Rally.'
  },

  // --- SPORT HERITAGE ---
  {
    id: 'xsr-900',
    name: 'XSR900',
    category: 'heritage',
    categoryLabel: 'Neo Retro Racer',
    price: 68000000,
    cylinder: '890 cc CP3',
    power: '119.0 HP @ 10.000 RPM',
    torque: '93.0 Nm @ 7.000 RPM',
    weight: '193 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Bomba radial Brembo + ABS en curva',
    badge: 'Diseño Retro 80s',
    image: 'assets/images/xsr900_2024_grisRojo_mini-1.jpg',
    description: 'Homenaje a las legendarias motos de Gran Premio de los años 80 con toda la tecnología, electrónica y potencia del motor CP3 moderno.'
  },

  // --- MOTOCROSS Y ENDURO ---
  {
    id: 'pw50',
    name: 'PW50',
    category: 'offroad',
    categoryLabel: 'Iniciación Infantil',
    price: 10900000,
    cylinder: '49 cc 2T',
    power: '2.7 HP',
    torque: '3.8 Nm',
    weight: '41 kg',
    fuel: 'Carburador Mikuni',
    brakes: 'Tambor delantero y trasero',
    badge: 'Iniciación',
    image: 'assets/images/pw50_2026_mini-1-1.png',
    description: 'La moto legendaria para que los más pequeños comiencen en el motociclismo de forma 100% segura con limitador de acelerador.'
  },
  {
    id: 'ttr110',
    name: 'TT-R110E',
    category: 'offroad',
    categoryLabel: 'Off-Road Recreativa',
    price: 14700000,
    cylinder: '110 cc 4T',
    power: '7.5 HP',
    torque: '8.0 Nm',
    weight: '72 kg',
    fuel: 'Carburador',
    brakes: 'Tambor',
    badge: 'Arranque Eléctrico',
    image: 'assets/images/TTR110_2026_YAMAHA_MINI-1.jpg',
    description: 'Diversión asegurada para jóvenes y adultos. Embrague automático de 4 velocidades y encendido eléctrico para disfrutar de las trochas del Huila.'
  },
  {
    id: 'yz125',
    name: 'YZ125 (2 Tiempos)',
    category: 'offroad',
    categoryLabel: 'Motocross 2T',
    price: 37000000,
    cylinder: '125 cc 2T Válvula YPVS',
    power: '35.0 HP',
    torque: '24.0 Nm',
    weight: '95 kg',
    fuel: 'Carburador Keihin',
    brakes: 'Disco hidráulico',
    badge: 'Puro 2 Tiempos',
    image: 'assets/images/yz125_2026_yamaha.jpg',
    description: 'El cohete de 2 tiempos más ágil y ligero para la pista de motocross. Sonido inconfundible y aceleración instantánea.'
  },
  {
    id: 'yz250f',
    name: 'YZ250F (4 Tiempos)',
    category: 'offroad',
    categoryLabel: 'Motocross Competición',
    price: 47000000,
    cylinder: '250 cc 4T DOHC',
    power: '42.0 HP',
    torque: '28.0 Nm',
    weight: '105 kg',
    fuel: 'Inyección Electrónica con app Power Tuner',
    brakes: 'Discos lobulados Nissin',
    badge: 'Power Tuner Wi-Fi',
    image: 'assets/images/yz250f_2026_yamaha_mini-1.jpg',
    description: 'Ajuste del mapa de motor desde tu smartphone con la app Power Tuner. Campeona mundial en los circuitos de motocross.'
  },
  {
    id: 'wr450f',
    name: 'WR450F Enduro',
    category: 'offroad',
    categoryLabel: 'Enduro Competición',
    price: 51500000,
    cylinder: '450 cc 4T',
    power: '55.0 HP',
    torque: '46.0 Nm',
    weight: '119 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Discos hidráulicos',
    badge: 'Reina del Enduro',
    image: 'assets/images/wr250f_2026_mini-2.png',
    description: 'Máxima potencia para dominar los terrenos más extremos del Huila. Farola LED, arranque eléctrico y depósito de gran autonomía.'
  },

  // --- CUATRIMOTOS Y ATVs ---
  {
    id: 'raptor-700',
    name: 'YFM700R Raptor',
    category: 'cuatrimotos',
    categoryLabel: 'ATV Deportivo',
    price: 53000000,
    cylinder: '686 cc Monocilíndrico',
    power: '48.0 HP',
    torque: '55.0 Nm',
    weight: '192 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Doble disco delantero / Disco trasero',
    badge: 'Rey de las Dunas',
    image: 'assets/images/rapto7002025mini-1.jpg',
    description: 'El ATV deportivo más potente y legendario del mundo. Chasis híbrido de aluminio y acero con suspensiones regulables de gas.'
  },
  {
    id: 'kodiak-450',
    name: 'Kodiak 450 EPS 4x4',
    category: 'cuatrimotos',
    categoryLabel: 'ATV Utilitario 4x4',
    price: 55000000,
    cylinder: '421 cc SOHC',
    power: '32.0 HP',
    torque: '38.0 Nm',
    weight: '295 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Discos sellados + Tracción On-Command 4WD',
    badge: 'Trabajo & Finca',
    image: 'assets/images/kodiak_2024_mini-1-1.jpg',
    description: 'Capacidad de tracción 4x4 On-Command, dirección asistida eléctrica EPS y alta capacidad de carga y remolque para el agro huilense.'
  },
  {
    id: 'grizzly-700',
    name: 'Grizzly 700 EPS SE 4x4',
    category: 'cuatrimotos',
    categoryLabel: 'ATV Alta Gama 4x4',
    price: 65000000,
    cylinder: '686 cc SOHC 4T',
    power: '49.0 HP',
    torque: '50.0 Nm',
    weight: '318 kg',
    fuel: 'Inyección Electrónica',
    brakes: 'Doble disco delantero / Disco central trasero',
    badge: 'Fuerza Imparable',
    image: 'assets/images/grizzly_gris2024_mini-1.jpg',
    description: 'El utilitario todoterreno definitivo. Bloqueo de diferencial delantero 100% y transmisión automática Ultramatic con freno de motor.'
  },
  {
    id: 'wolverine-rmax-2',
    name: 'Wolverine RMAX 1000 (2 Pasajeros)',
    category: 'cuatrimotos',
    categoryLabel: 'Side-by-Side UTV',
    price: 145000000,
    cylinder: '999 cc DOHC Bicilíndrico',
    power: '108.0 HP',
    torque: '98.0 Nm',
    weight: '850 kg',
    fuel: 'Inyección Electrónica con D-Mode',
    brakes: '4 discos hidráulicos + Suspensiones FOX iQS',
    badge: 'UTV Alta Potencia',
    image: 'assets/images/wolverineRmax2_mini-1.png',
    description: 'El Side-by-Side más versátil del mercado con modos de conducción D-Mode y cabina premium para explorar el Huila sin límites.'
  }
];

// ==========================================================================
// 2. CONTROLADOR DEL INTRO VIDEO SPLASH
// ==========================================================================
const VideoSplashController = (() => {
  let overlay, videoElement, btnEnter, btnSkip, btnSound, btnReplay;
  let isMuted = true;
  let hasEntered = false;

  const init = () => {
    overlay = document.getElementById('intro-video-overlay');
    videoElement = document.getElementById('splash-video-media');
    btnEnter = document.getElementById('btn-enter-site');
    btnSkip = document.getElementById('btn-skip-intro');
    btnSound = document.getElementById('btn-toggle-sound');
    btnReplay = document.getElementById('btn-replay-video-menu');

    if (!overlay) return;

    // Marcar body como video activo
    document.body.classList.add('video-active');

    // Intentar reproducir video automáticamente
    if (videoElement) {
      videoElement.muted = true;
      videoElement.play().catch(e => {
        console.log('Autoplay bloqueado por el navegador; esperando interacción de usuario');
      });

      // Al terminar el video, permitir entrar automáticamente
      videoElement.addEventListener('ended', () => {
        if (!hasEntered) {
          dismissVideo();
        }
      });
    }

    if (btnEnter) btnEnter.addEventListener('click', dismissVideo);
    if (btnSkip) btnSkip.addEventListener('click', dismissVideo);
    if (btnSound) btnSound.addEventListener('click', toggleSound);
    if (btnReplay) btnReplay.addEventListener('click', replayVideo);
  };

  const dismissVideo = () => {
    if (hasEntered) return;
    hasEntered = true;

    if (overlay) {
      overlay.classList.add('hidden');
    }
    document.body.classList.remove('video-active');

    if (videoElement) {
      setTimeout(() => {
        try { videoElement.pause(); } catch(e) {}
      }, 800);
    }
  };

  const toggleSound = () => {
    if (!videoElement) return;
    isMuted = !isMuted;
    videoElement.muted = isMuted;

    if (btnSound) {
      if (isMuted) {
        btnSound.innerHTML = '<i class="fas fa-volume-mute"></i> Activar Sonido';
      } else {
        btnSound.innerHTML = '<i class="fas fa-volume-up"></i> Silenciar';
      }
    }
  };

  const replayVideo = (e) => {
    if (e) e.preventDefault();
    hasEntered = false;
    if (overlay) {
      overlay.classList.remove('hidden');
    }
    document.body.classList.add('video-active');
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play().catch(() => {});
    }
  };

  return {
    init,
    dismissVideo,
    replayVideo
  };
})();

// ==========================================================================
// 3. CONTROLADOR DEL HERO SLIDER
// ==========================================================================
const HeroSlider = (() => {
  let slides, dots, prevBtn, nextBtn;
  let currentIndex = 0;
  let slideInterval = null;
  const INTERVAL_TIME = 6000;

  const init = () => {
    slides = document.querySelectorAll('.hero-slide');
    dots = document.querySelectorAll('.slider-dot');
    prevBtn = document.querySelector('.slider-arrow.prev');
    nextBtn = document.querySelector('.slider-arrow.next');

    if (!slides.length) return;

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });

    startAutoPlay();

    const sliderContainer = document.querySelector('.hero-slider-section');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', pauseAutoPlay);
      sliderContainer.addEventListener('mouseleave', startAutoPlay);
    }
  };

  const goToSlide = (index) => {
    slides[currentIndex].classList.remove('active');
    if (dots[currentIndex]) dots[currentIndex].classList.remove('active');

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add('active');
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  const startAutoPlay = () => {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, INTERVAL_TIME);
  };

  const stopAutoPlay = () => {
    if (slideInterval) clearInterval(slideInterval);
  };

  const pauseAutoPlay = () => stopAutoPlay();

  return { init, goToSlide, nextSlide, prevSlide };
})();

// ==========================================================================
// 4. RENDERIZADO DEL CATÁLOGO Y FILTROS
// ==========================================================================
const CatalogController = (() => {
  let gridContainer, filterButtons;
  let modalOverlay, modalContent;

  const init = () => {
    gridContainer = document.getElementById('bikes-catalog-grid');
    filterButtons = document.querySelectorAll('.filter-btn');
    modalOverlay = document.getElementById('bike-detail-modal');
    modalContent = document.getElementById('bike-modal-body');

    if (!gridContainer) return;

    renderBikes('all');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-filter');
        renderBikes(category);
      });
    });

    // Delegación de eventos para botones de detalles y cotización
    gridContainer.addEventListener('click', (e) => {
      const detailBtn = e.target.closest('.btn-details');
      const quoteBtn = e.target.closest('.btn-whatsapp-quote');

      if (detailBtn) {
        const bikeId = detailBtn.getAttribute('data-bike-id');
        openBikeModal(bikeId);
      } else if (quoteBtn) {
        const bikeId = quoteBtn.getAttribute('data-bike-id');
        sendWhatsAppQuote(bikeId);
      }
    });

    // Cerrar modal
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay || e.target.closest('.modal-close-btn')) {
          closeModal();
        }
      });
    }

    // Poblar el simulador de crédito con las motos
    populateSimulatorOptions();
  };

  const renderBikes = (category) => {
    const filtered = category === 'all' 
      ? MOTORCYCLES_DATA 
      : MOTORCYCLES_DATA.filter(b => b.category === category);

    gridContainer.innerHTML = filtered.map(bike => `
      <div class="bike-card" data-category="${bike.category}">
        <div class="bike-card-image-wrap">
          <span class="bike-badge">${bike.badge}</span>
          <img src="${bike.image}" alt="${bike.name}" loading="lazy" />
        </div>
        <div class="bike-card-content">
          <span class="bike-card-category">${bike.categoryLabel}</span>
          <h3 class="bike-card-title">${bike.name}</h3>
          
          <div class="bike-specs-pills">
            <span class="spec-pill"><i class="fas fa-tachometer-alt"></i> ${bike.cylinder}</span>
            <span class="spec-pill"><i class="fas fa-bolt"></i> ${bike.power}</span>
            <span class="spec-pill"><i class="fas fa-weight-hanging"></i> ${bike.weight}</span>
          </div>

          <div class="bike-card-price-row">
            <div>
              <div class="price-label">Precio Sugerido Neiva</div>
              <div class="price-value">${CreditSimulator.formatCOP(bike.price)}</div>
            </div>
          </div>

          <div class="bike-card-actions">
            <button class="btn-details" data-bike-id="${bike.id}">
              <i class="fas fa-info-circle"></i> Ficha Técnica
            </button>
            <button class="btn-whatsapp-quote" data-bike-id="${bike.id}">
              <i class="fab fa-whatsapp"></i> Cotizar
            </button>
          </div>
        </div>
      </div>
    `).join('');
  };

  const populateSimulatorOptions = () => {
    const select = document.getElementById('sim-bike-select');
    if (!select) return;

    select.innerHTML = MOTORCYCLES_DATA.map(bike => `
      <option value="${bike.id}" data-price="${bike.price}" ${bike.id === 'nmax-connected' ? 'selected' : ''}>
        ${bike.name} - (${CreditSimulator.formatCOP(bike.price)})
      </option>
    `).join('');
  };

  const openBikeModal = (bikeId) => {
    const bike = MOTORCYCLES_DATA.find(b => b.id === bikeId);
    if (!bike || !modalContent) return;

    modalContent.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center;">
        <div style="text-align: center; background: #f8fafc; padding: 20px; border-radius: 12px;">
          <img src="${bike.image}" alt="${bike.name}" style="max-height: 240px; margin: 0 auto; object-fit: contain;" />
          <div style="margin-top: 16px; font-weight: 800; font-size: 1.5rem; color: #002f6c;">
            ${CreditSimulator.formatCOP(bike.price)}
          </div>
          <small style="color: #64748b;">IVA incluido | Precios vigentes para Neiva, Huila</small>
        </div>
        <div>
          <span style="background: #0a122a; color: #ffe713; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 4px; text-transform: uppercase;">${bike.categoryLabel}</span>
          <h2 style="font-family: 'Anton', sans-serif; font-size: 2rem; color: #0a122a; margin: 10px 0 14px;">${bike.name}</h2>
          <p style="font-size: 0.92rem; color: #475569; margin-bottom: 20px;">${bike.description}</p>
          
          <table style="width: 100%; font-size: 0.88rem; margin-bottom: 24px; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e2e8f0; padding: 6px 0;">
              <td style="font-weight: 700; color: #0a122a; padding: 6px 0;">Cilindraje:</td>
              <td style="color: #475569; text-align: right;">${bike.cylinder}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="font-weight: 700; color: #0a122a; padding: 6px 0;">Potencia Máxima:</td>
              <td style="color: #475569; text-align: right;">${bike.power}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="font-weight: 700; color: #0a122a; padding: 6px 0;">Torque Máximo:</td>
              <td style="color: #475569; text-align: right;">${bike.torque}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="font-weight: 700; color: #0a122a; padding: 6px 0;">Peso Total:</td>
              <td style="color: #475569; text-align: right;">${bike.weight}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="font-weight: 700; color: #0a122a; padding: 6px 0;">Alimentación:</td>
              <td style="color: #475569; text-align: right;">${bike.fuel}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #0a122a; padding: 6px 0;">Sistema de Frenos:</td>
              <td style="color: #475569; text-align: right;">${bike.brakes}</td>
            </tr>
          </table>

          <div style="display: flex; gap: 10px;">
            <a href="https://api.whatsapp.com/send?phone=573123157616&text=Hola%20Yamaha%20Sports%20Neiva,%20quiero%20cotizar%20la%20${encodeURIComponent(bike.name)}%20en%20la%20Sede%20Principal%20(Cra.%205)." target="_blank" style="flex: 1; background: #25d366; color: #fff; padding: 14px; text-align:center; font-weight: 800; border-radius: 6px; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <i class="fab fa-whatsapp"></i> Cotizar por WhatsApp
            </a>
            <button onclick="CatalogController.scrollToSimulator('${bike.id}')" style="background: #0a122a; color: #ffe713; border: none; padding: 14px 20px; font-weight: 700; border-radius: 6px; cursor: pointer;">
              Simular Crédito
            </button>
          </div>
        </div>
      </div>
    `;

    if (modalOverlay) modalOverlay.classList.add('active');
  };

  const closeModal = () => {
    if (modalOverlay) modalOverlay.classList.remove('active');
  };

  const sendWhatsAppQuote = (bikeId) => {
    const bike = MOTORCYCLES_DATA.find(b => b.id === bikeId);
    if (!bike) return;

    const message = `¡Hola Yamaha Sports Neiva! 👋
Deseo solicitar información y cotización formal para la motocicleta:
🏍️ *Modelo:* ${bike.name} (${bike.categoryLabel})
💰 *Precio de Lista:* ${CreditSimulator.formatCOP(bike.price)}
📍 *Sede de Interés:* Sede Principal Neiva (Cra. 5 # 12-45)

Por favor infórmenme sobre disponibilidad de colores, entrega inmediata y planes de financiación. ¡Gracias!`;

    window.open(`https://api.whatsapp.com/send?phone=573123157616&text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToSimulator = (bikeId) => {
    closeModal();
    const simSelect = document.getElementById('sim-bike-select');
    if (simSelect) {
      simSelect.value = bikeId;
      simSelect.dispatchEvent(new Event('change'));
    }
    const simSection = document.getElementById('simulador');
    if (simSection) {
      simSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    init,
    openBikeModal,
    closeModal,
    sendWhatsAppQuote,
    scrollToSimulator
  };
})();

// ==========================================================================
// 5. INTERACCIONES DEL MENÚ, MEGA-MENÚ Y MÓVIL
// ==========================================================================
const NavigationController = (() => {
  let mobileToggleBtn, closeDrawerBtn, drawer, backdrop;

  const init = () => {
    mobileToggleBtn = document.getElementById('btn-mobile-menu-toggle');
    closeDrawerBtn = document.getElementById('btn-close-mobile-drawer');
    drawer = document.getElementById('mobile-nav-drawer');
    backdrop = document.getElementById('mobile-backdrop');

    if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // Cerrar drawer al hacer clic en un enlace
    const mobileLinks = document.querySelectorAll('.mobile-menu-list a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    // Pestañas del Mega Menú
    const megaCatBtns = document.querySelectorAll('.mega-cat-btn');
    const megaPanels = document.querySelectorAll('.mega-panel');

    megaCatBtns.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        megaCatBtns.forEach(b => b.classList.remove('active'));
        megaPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetCategory = btn.getAttribute('data-category');
        const targetPanel = document.getElementById(`mega-panel-${targetCategory}`);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });

    // Efecto de Header fijo con scroll
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header.main-header');
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });
  };

  const openDrawer = () => {
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  return { init, openDrawer, closeDrawer };
})();

// ==========================================================================
// 6. FORMULARIO DE PRUEBA DE MANEJO (TEST DRIVE NEIVA)
// ==========================================================================
const TestDriveController = (() => {
  const init = () => {
    const form = document.getElementById('test-drive-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('td-name').value;
      const phone = document.getElementById('td-phone').value;
      const model = document.getElementById('td-model').value;
      const date = document.getElementById('td-date').value;

      const message = `¡Hola Yamaha Sports Neiva! 🏁
Deseo agendar una *Prueba de Manejo (Test Drive)* con los siguientes datos:
👤 *Nombre:* ${name}
📱 *Celular:* ${phone}
🏍️ *Modelo de Interés:* ${model}
📅 *Fecha Deseada:* ${date}
📍 *Sede:* Principal Neiva (Carrera 5 # 12-45)

Por favor confírmenme la disponibilidad. ¡Muchas gracias!`;

      window.open(`https://api.whatsapp.com/send?phone=573123157616&text=${encodeURIComponent(message)}`, '_blank');
      form.reset();
      alert('¡Gracias! Te estamos redirigiendo a WhatsApp para confirmar la hora de tu Test Drive en Neiva.');
    });
  };

  return { init };
})();

// ==========================================================================
// 7. INICIALIZACIÓN GLOBAL
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  VideoSplashController.init();
  HeroSlider.init();
  CatalogController.init();
  NavigationController.init();
  TestDriveController.init();
});
