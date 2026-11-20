import type { Lang } from '../i18n/ui';

export interface WorkEntry {
  company: string;
  location: Record<Lang, string>;
  role: Record<Lang, string>;
  period: Record<Lang, string>;
  summary: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
  tags: string[];
}

export interface EducationEntry {
  period: Record<Lang, string>;
  degree: Record<Lang, string>;
  institution: string;
  location: Record<Lang, string>;
  focus: Record<Lang, string>;
}

export const workExperience: WorkEntry[] = [
  {
    company: 'Freelance · Web & Backend',
    location: {
      es: 'Caracas, VE · Remoto',
      en: 'Caracas, VE · Remote',
    },
    role: {
      es: 'Desarrollador Full Stack Independiente',
      en: 'Independent Full Stack Developer',
    },
    period: {
      es: 'Presente',
      en: 'Present',
    },
    summary: {
      es: 'Desarrollo de aplicaciones web de punta a punta, combinando interfaces limpias orientadas a usabilidad con APIs REST modulares y bases de datos relacionales.',
      en: 'Building end-to-end web applications that pair clean, usable interfaces with modular REST APIs and relational databases.',
    },
    highlights: {
      es: [
        'Diseño e implementación de interfaces responsivas y sistemas de componentes reutilizables con React, TypeScript, Tailwind CSS y shadcn/ui.',
        'Desarrollo de backends modulares con Node.js, Express, Sequelize y PostgreSQL/MariaDB, incluyendo autenticación JWT y control de permisos por rol.',
        'Publicación de plantillas y arquitecturas base en GitHub (base-fullstack-boilerplate, express-sequelize-api) para acelerar proyectos web.',
      ],
      en: [
        'Designed and built responsive user interfaces and reusable component systems with React, TypeScript, Tailwind CSS, and shadcn/ui.',
        'Built modular backends with Node.js, Express, Sequelize, and PostgreSQL/MariaDB, including JWT authentication and role-based permissions.',
        'Published open-source full-stack and REST API starter templates on GitHub (base-fullstack-boilerplate, express-sequelize-api).',
      ],
    },
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    company: 'iSpot Soluciones C.A.',
    location: {
      es: 'Caracas, VE',
      en: 'Caracas, VE',
    },
    role: {
      es: 'Desarrollador de Software',
      en: 'Software Developer',
    },
    period: {
      es: 'Dic 2022 — Presente',
      en: 'Dec 2022 — Present',
    },
    summary: {
      es: 'Colaboración en el desarrollo web de la tienda en línea y en aplicaciones internas que apoyan la operación diaria de ventas y servicio técnico.',
      en: 'Contributing to the public web storefront and internal software tools supporting daily retail and technical service workflows.',
    },
    highlights: {
      es: [
        'Participación en el desarrollo y mantenimiento de la tienda web (ispot-vzla.com), cuidando la experiencia de navegación móvil, claridad visual y rendimiento.',
        'Creación de herramientas web internas para gestión de servicio técnico, seguimiento operativo y automatización de reportes de ventas y gastos.',
        'Integración mediante APIs entre vistas de catálogo, datos operativos y flujos administrativos.',
      ],
      en: [
        'Contributed to building and refining the public storefront (ispot-vzla.com), focusing on responsive UI, browsing clarity, and loading performance.',
        'Built internal web applications and utilities for technical service management, operational tracking, and automated sales/expense reporting.',
        'Collaborated on connecting storefront catalog data and administrative workflows through APIs.',
      ],
    },
    tags: ['React', 'JavaScript', 'Node.js', 'REST APIs', 'SQL', 'UI/UX'],
  },
  {
    company: 'HP (Enterprise Support)',
    location: {
      es: 'Lisboa, PT',
      en: 'Lisbon, PT',
    },
    role: {
      es: 'Asesor Técnico',
      en: 'Technical Advisor',
    },
    period: {
      es: 'Jul 2020 — Dic 2020',
      en: 'Jul 2020 — Dec 2020',
    },
    summary: {
      es: 'Soporte técnico de diagnóstico en hardware y sistemas operativos para clientes corporativos europeos en un entorno internacional.',
      en: 'Provided hardware and operating system troubleshooting for HP enterprise clients in an international support environment.',
    },
    highlights: {
      es: [
        'Diagnóstico de fallas en hardware y sistemas operativos, apoyo en triaje, escalado de incidencias y documentación técnica.',
        'Cumplimiento constante de objetivos SLA con precisión técnica y buena atención al cliente.',
      ],
      en: [
        'Diagnosed hardware and OS issues, assisted with incident triage and escalation, and documented technical resolutions.',
        'Consistently met enterprise SLA targets while maintaining diagnostic accuracy and customer satisfaction.',
      ],
    },
    tags: ['Hardware & OS Diagnostics', 'Incident Triage', 'Enterprise SLA'],
  },
];

export const education: EducationEntry[] = [
  {
    period: {
      es: 'Dic 2025 — Presente',
      en: 'Dec 2025 — Present',
    },
    degree: {
      es: 'Ingeniería en Informática',
      en: 'B.S. in Computer Engineering',
    },
    institution: 'Universidad Alejandro de Humboldt',
    location: {
      es: 'Caracas',
      en: 'Caracas',
    },
    focus: {
      es: 'Enfoque en Ingeniería de Software, Estructuras de Datos y Arquitectura de Sistemas.',
      en: 'Focus on Software Engineering, Data Structures, and Systems Architecture.',
    },
  },
  {
    period: {
      es: 'Feb 2022 — Dic 2022',
      en: 'Feb 2022 — Dec 2022',
    },
    degree: {
      es: 'Bootcamp de Desarrollo Full Stack (+500 h)',
      en: 'Full Stack Developer Bootcamp (+500 hrs)',
    },
    institution: 'Programa Intensivo',
    location: {
      es: 'Caracas',
      en: 'Caracas',
    },
    focus: {
      es: 'JavaScript (ES6), React, Python, Flask, SQL, diseño de APIs RESTful y maquetación responsiva.',
      en: 'JavaScript (ES6), React, Python, Flask, SQL, RESTful API design, and responsive front-end engineering.',
    },
  },
];
