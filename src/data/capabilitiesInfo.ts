import type { Lang } from '../i18n/ui';

export interface CapabilityGroup {
  index: '01' | '02' | '03' | '04';
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  items: string[];
}

export const capabilitiesInfo: CapabilityGroup[] = [
  {
    index: '01',
    title: {
      es: 'Diseño UI/UX y Frontend',
      en: 'UI/UX & Frontend',
    },
    description: {
      es: 'Interfaces limpias, responsivas y sistemas de componentes pensados para la usabilidad diaria.',
      en: 'Clean, responsive interfaces and reusable component systems focused on clarity and everyday usability.',
    },
    items: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'shadcn/ui',
      'Astro',
      'HTML5 / CSS3',
      'Vite',
    ],
  },
  {
    index: '02',
    title: {
      es: 'Desarrollo Backend y APIs',
      en: 'Backend & API Engineering',
    },
    description: {
      es: 'APIs REST modulares, autenticación, permisos por rol y separación clara de la lógica de negocio.',
      en: 'Modular REST APIs, authentication, role-based access control, and clear separation of business logic.',
    },
    items: [
      'Node.js',
      'Express',
      'REST APIs',
      'JWT',
      'bcrypt',
      'RBAC',
      'Python / Flask',
    ],
  },
  {
    index: '03',
    title: {
      es: 'Bases de Datos y Modelado',
      en: 'Databases & Data Modeling',
    },
    description: {
      es: 'Diseño de esquemas relacionales, asociaciones entre entidades, integridad de datos y manejo con ORM.',
      en: 'Relational schema design, multi-entity associations, data integrity, and ORM workflows.',
    },
    items: [
      'PostgreSQL',
      'MySQL',
      'MariaDB',
      'SQL',
      'Sequelize ORM',
      'Relational Modeling',
    ],
  },
  {
    index: '04',
    title: {
      es: 'Arquitectura Web y Herramientas',
      en: 'Web Architecture & Tooling',
    },
    description: {
      es: 'Repositorios ordenados cliente/servidor, control de versiones, contenedores e integraciones web.',
      en: 'Structured client/server repositories, version control, container basics, and practical web integrations.',
    },
    items: [
      'Git / GitHub',
      'Docker',
      'React Router',
      'Monorepo Setup',
      'ESLint',
      'Third-Party APIs',
    ],
  },
];
