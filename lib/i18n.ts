export type Locale = "en" | "es";

const en = {
  brand: {
    name: "Alcor Studio",
    wordmark: "Alcor",
    email: "hello@alcor.studio",
  },
  meta: {
    title: "Alcor Studio — Creative Studio",
    description:
      "Independent creative studio shaping memorable identities, digital experiences and visual worlds for ambitious brands.",
  },
  a11y: {
    skip: "Skip to content",
    stars: "5 out of 5 stars",
    switchLang: "Change language",
  },
  nav: {
    work: "Work",
    studio: "Studio",
    book: "Book a call",
  },
  hero: {
    badge: "Available for work",
    title1: "Transforming brands",
    title2: "with vision",
    conj: "&",
    title3: "creativity",
    text: "A creative studio shaping memorable identities, digital experiences and visual worlds for ambitious brands.",
    alt: "Editorial portrait against a muted sky",
  },
  specialties: {
    title1: "Our design",
    title2: "specialties",
    items: [
      {
        title: "Webflow",
        text: "Working alongside your team to ship fast, scalable marketing sites.",
        image: "/assets/strip-webflow.jpg",
      },
      {
        title: "Web Design",
        text: "Digital art direction and interactive visuals with a clear purpose.",
        image: "/assets/strip-webdesign.jpg",
      },
      {
        title: "Branding",
        text: "Identity systems that make evolving brands impossible to ignore.",
        image: "/assets/strip-branding.jpg",
      },
      {
        title: "Design",
        text: "Thoughtful visual systems that turn attention into connection.",
        image: "/assets/strip-design.jpg",
      },
    ],
    cta: "Contact us",
    hint: "Your next big step starts here",
  },
  testimonials: {
    title1: "What our",
    title2: "clients say",
    items: [
      {
        quote:
          "Alcor Studio rebuilt our brand from the ground up. The site they shipped doubled our conversion in the first quarter.",
        name: "Maya Chen",
        role: "Founder, Straps",
      },
      {
        quote:
          "The most detail-obsessed studio we have worked with. Every interaction feels intentional.",
        name: "Jonas Reber",
        role: "CMO, Music Pro",
      },
      {
        quote:
          "A rare combination of strategic thinking and beautiful execution. We could not recommend them more.",
        name: "Elena Rossi",
        role: "Director, Auralis",
      },
    ],
  },
  stats: {
    eyebrow: "By the numbers",
    title1: "Small studio.",
    title2: "Big energy.",
    items: [
      { num: "01", value: "12+", text: "Years making things matter" },
      { num: "02", value: "48", text: "Brands brought into focus" },
      { num: "03", value: "19", text: "Countries reached together" },
    ],
  },
  work: {
    title1: "Selected",
    title2: "work",
    text: "A considered selection of identities, digital experiences and campaigns made in close collaboration with people we believe in.",
    view: "View project",
    alt: "project",
    items: [
      {
        title: "Auralis",
        text: "Digital experience / Art direction",
        image: "/assets/work-audio.jpg",
      },
      {
        title: "Kinetic",
        text: "Brand identity / Campaign",
        image: "/assets/work-car.jpg",
      },
      {
        title: "Object 01",
        text: "Creative direction / Product",
        image: "/assets/work-cubes.jpg",
      },
      {
        title: "Dune House",
        text: "Web design / Development",
        image: "/assets/work-dune.jpg",
      },
    ],
  },
  statement: {
    badge: "A little about us",
    textBefore: "We believe the best work sits at the intersection of",
    bold: "clarity, curiosity and craft.",
    textAfter: "No noise. No templates. Just ideas built to move people.",
    alt1: "Abstract art detail",
    alt2: "Design texture",
  },
  contact: {
    eyebrow: "Let's make something",
    title1: "Have a good",
    title2: "feeling about this?",
    fine: "Tell us what you are building, where you are going and what is keeping you up at night. We will take it from there.",
    alt: "Creative director in the studio",
  },
  footer: {
    blurb: "Independent creative studio for brands with somewhere to go.",
    cols: [
      {
        heading: "Explore",
        links: [
          { label: "Work", href: "#work" },
          { label: "Studio", href: "#studio" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Services",
        links: [
          { label: "Branding", href: "#studio" },
          { label: "Web design", href: "#studio" },
          { label: "Direction", href: "#studio" },
        ],
      },
      {
        heading: "Elsewhere",
        links: [
          { label: "Instagram", href: "#contact" },
          { label: "LinkedIn", href: "#contact" },
          { label: "Are.na", href: "#contact" },
        ],
      },
    ],
    visit: "Visit",
    location: "Barcelona / Worldwide",
    legal: "© 2026 Alcor Studio",
    made: "Made with intention",
    socials: { instagram: "Instagram", linkedin: "LinkedIn", email: "Email" },
  },
};

export type Dict = typeof en;

const es: Dict = {
  brand: {
    name: "Alcor Studio",
    wordmark: "Alcor",
    email: "hello@alcor.studio",
  },
  meta: {
    title: "Alcor Studio — Estudio creativo",
    description:
      "Estudio creativo independiente que da forma a identidades memorables, experiencias digitales y mundos visuales para marcas ambiciosas.",
  },
  a11y: {
    skip: "Ir al contenido",
    stars: "5 de 5 estrellas",
    switchLang: "Cambiar idioma",
  },
  nav: {
    work: "Trabajo",
    studio: "Estudio",
    book: "Agenda una llamada",
  },
  hero: {
    badge: "Disponible para trabajar",
    title1: "Transformando marcas",
    title2: "con visión",
    conj: "y",
    title3: "creatividad",
    text: "Un estudio creativo que da forma a identidades memorables, experiencias digitales y mundos visuales para marcas ambiciosas.",
    alt: "Retrato editorial sobre un cielo apagado",
  },
  specialties: {
    title1: "Nuestras",
    title2: "especialidades",
    items: [
      {
        title: "Webflow",
        text: "Trabajando junto a tu equipo para lanzar sitios de marketing rápidos y escalables.",
        image: "/assets/strip-webflow.jpg",
      },
      {
        title: "Diseño web",
        text: "Dirección de arte digital y visuales interactivos con un propósito claro.",
        image: "/assets/strip-webdesign.jpg",
      },
      {
        title: "Branding",
        text: "Sistemas de identidad que hacen imposible ignorar a las marcas en evolución.",
        image: "/assets/strip-branding.jpg",
      },
      {
        title: "Diseño",
        text: "Sistemas visuales cuidados que convierten la atención en conexión.",
        image: "/assets/strip-design.jpg",
      },
    ],
    cta: "Contáctanos",
    hint: "Tu próximo gran paso empieza aquí",
  },
  testimonials: {
    title1: "Lo que dicen",
    title2: "nuestros clientes",
    items: [
      {
        quote:
          "Alcor Studio reconstruyó nuestra marca desde cero. El sitio que lanzaron duplicó nuestra conversión en el primer trimestre.",
        name: "Maya Chen",
        role: "Fundadora, Straps",
      },
      {
        quote:
          "El estudio más obsesionado con el detalle con el que hemos trabajado. Cada interacción se siente intencional.",
        name: "Jonas Reber",
        role: "CMO, Music Pro",
      },
      {
        quote:
          "Una combinación poco común de pensamiento estratégico y ejecución impecable. No podríamos recomendarlos más.",
        name: "Elena Rossi",
        role: "Directora, Auralis",
      },
    ],
  },
  stats: {
    eyebrow: "En números",
    title1: "Estudio pequeño.",
    title2: "Energía enorme.",
    items: [
      { num: "01", value: "12+", text: "Años haciendo que las cosas importen" },
      { num: "02", value: "48", text: "Marcas puestas en foco" },
      { num: "03", value: "19", text: "Países alcanzados juntos" },
    ],
  },
  work: {
    title1: "Trabajo",
    title2: "seleccionado",
    text: "Una selección cuidada de identidades, experiencias digitales y campañas hechas en estrecha colaboración con gente en la que creemos.",
    view: "Ver proyecto",
    alt: "proyecto",
    items: [
      {
        title: "Auralis",
        text: "Experiencia digital / Dirección de arte",
        image: "/assets/work-audio.jpg",
      },
      {
        title: "Kinetic",
        text: "Identidad de marca / Campaña",
        image: "/assets/work-car.jpg",
      },
      {
        title: "Object 01",
        text: "Dirección creativa / Producto",
        image: "/assets/work-cubes.jpg",
      },
      {
        title: "Dune House",
        text: "Diseño web / Desarrollo",
        image: "/assets/work-dune.jpg",
      },
    ],
  },
  statement: {
    badge: "Un poco sobre nosotros",
    textBefore: "Creemos que el mejor trabajo se encuentra en la intersección de",
    bold: "claridad, curiosidad y oficio.",
    textAfter: "Sin ruido. Sin plantillas. Solo ideas hechas para mover a la gente.",
    alt1: "Detalle de arte abstracto",
    alt2: "Textura de diseño",
  },
  contact: {
    eyebrow: "Hagamos algo juntos",
    title1: "¿Tienes un buen",
    title2: "presentimiento?",
    fine: "Cuéntanos qué estás construyendo, hacia dónde vas y qué te quita el sueño. Nosotros seguimos desde ahí.",
    alt: "Directora creativa en el estudio",
  },
  footer: {
    blurb: "Estudio creativo independiente para marcas con un lugar al que llegar.",
    cols: [
      {
        heading: "Explorar",
        links: [
          { label: "Trabajo", href: "#work" },
          { label: "Estudio", href: "#studio" },
          { label: "Contacto", href: "#contact" },
        ],
      },
      {
        heading: "Servicios",
        links: [
          { label: "Branding", href: "#studio" },
          { label: "Diseño web", href: "#studio" },
          { label: "Dirección", href: "#studio" },
        ],
      },
      {
        heading: "En otros lugares",
        links: [
          { label: "Instagram", href: "#contact" },
          { label: "LinkedIn", href: "#contact" },
          { label: "Are.na", href: "#contact" },
        ],
      },
    ],
    visit: "Visítanos",
    location: "Barcelona / Todo el mundo",
    legal: "© 2026 Alcor Studio",
    made: "Hecho con intención",
    socials: { instagram: "Instagram", linkedin: "LinkedIn", email: "Email" },
  },
};

export const dictionaries: Record<Locale, Dict> = { en, es };

export const defaultLocale: Locale = "en";

const STORAGE_KEY = "alcor-studio-locale";

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}

export function detectLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;
  const nav = (window.navigator.language || "").toLowerCase();
  return nav.startsWith("es") ? "es" : defaultLocale;
}

export function persistLocale(locale: Locale): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, locale);
}
