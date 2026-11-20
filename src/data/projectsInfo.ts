import type { Lang } from '../i18n/ui';

export type ProjectId = 'system-service' | 'ispot-web' | 'fullstack-boilerplate';

export interface ProjectItem {
  id: ProjectId;
  index: '01' | '02' | '03';
  category: Record<Lang, string>;
  period: Record<Lang, string>;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  implementation: Record<Lang, string[]>;
  outcomes: Record<Lang, string[]>;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
}

export const projectsInfo: ProjectItem[] = [
  {
    id: 'system-service',
    index: '01',
    category: {
      es: 'Full Stack · UI/UX y Backend',
      en: 'Full Stack · UI/UX & Backend',
    },
    period: {
      es: '2026',
      en: '2026',
    },
    title: {
      es: 'System Service — Gestión de Servicio Técnico',
      en: 'System Service — Technical Service Platform',
    },
    summary: {
      es: 'Aplicación web full stack para gestionar el flujo completo de un taller de servicio técnico: órdenes de reparación, diagnóstico de equipos, clientes, inventario de repuestos, pagos y control de acceso por roles.',
      en: 'Full-stack web application built to manage technical repair workflows: service orders, device diagnostics, customers, spare-parts inventory, payments, and role-based permissions.',
    },
    implementation: {
      es: [
        'Frontend modular con React 19, Vite, React Router v7, Tailwind CSS v4 y shadcn/ui cubriendo vistas de órdenes, diagnóstico, facturación, clientes, inventario, empleados y panel principal.',
        'Control de acceso basado en roles (administrador, técnico, vendedor) tanto en interfaz como en servidor con autenticación JWT y cifrado bcrypt.',
        'API REST en Node.js y Express 5 organizada en 11 módulos de rutas y 11 modelos relacionales en Sequelize (ServiceOrder, Client, Equipment, Inventory, InventoryMovement, UsedPart, ServiceHistory, Attachment, Payment, DeviceModel, User) compatible con PostgreSQL y MariaDB.',
      ],
      en: [
        'Modular frontend built with React 19, Vite, React Router v7, Tailwind CSS v4, and shadcn/ui covering orders, diagnostics, billing, customers, inventory, employees, and dashboard views.',
        'Role-based permission controls across UI and API (administrador, técnico, vendedor) backed by JWT authentication and bcrypt password hashing.',
        'Node.js & Express 5 REST API organized into 11 route modules and 11 relational Sequelize models (ServiceOrder, Client, Equipment, Inventory, InventoryMovement, UsedPart, ServiceHistory, Attachment, Payment, DeviceModel, User) compatible with PostgreSQL and MariaDB.',
      ],
    },
    outcomes: {
      es: [
        'Centraliza todo el ciclo de reparación, desde la recepción y el diagnóstico hasta el consumo de repuestos, historial del servicio y registro de pagos.',
        'Separación clara entre servicios de consumo en cliente (services/) y rutas/modelos modulares en servidor para facilitar mantenimiento y nuevas funciones.',
        'Estructurado en monorepo full stack listo para habilitar modo demo en vivo y documentación ampliada.',
      ],
      en: [
        'Centralizes the full repair lifecycle from equipment intake and diagnosis to parts usage, service history, and payment tracking.',
        'Clear separation between client API service modules (services/) and modular backend routes/models for straightforward maintenance.',
        'Structured as a full-stack monorepo ready for demo deployment and expanded repository documentation.',
      ],
    },
    stack: ['React 19', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express 5', 'Sequelize', 'PostgreSQL', 'JWT'],
    githubUrl: 'https://github.com/Jesuspestana01/system-service',
    // liveUrl: 'https://system-service-ten.vercel.app', // Activar cuando el modo demo esté listo
  },
  {
    id: 'ispot-web',
    index: '02',
    category: {
      es: 'Producción · UI/UX y Web',
      en: 'Production · UI/UX & Web',
    },
    period: {
      es: '2023 — Presente',
      en: '2023 — Present',
    },
    title: {
      es: 'iSpot — Tienda Web y Catálogo Digital',
      en: 'iSpot — Web Storefront & Digital Catalog',
    },
    summary: {
      es: 'Colaboración en el desarrollo frontend y personalización de interfaz de la tienda web de iSpot, priorizando jerarquía visual limpia, experiencia móvil y navegación ágil del catálogo.',
      en: 'Contributed to the frontend development and UI customization of iSpot’s online store, focused on clean visual hierarchy, mobile usability, and fast product browsing.',
    },
    implementation: {
      es: [
        'Personalización de vistas de tienda, fichas de producto y componentes interactivos con JavaScript, React, Liquid y CSS utilitario.',
        'Mejoras en estructura semántica, comportamiento responsivo, carga de recursos y SEO técnico en páginas de catálogo.',
        'Organización de secciones y vistas de catálogo pensadas para facilitar actualizaciones frecuentes del equipo comercial.',
      ],
      en: [
        'Customized storefront layouts, product views, and interactive components using JavaScript, React, Liquid, and utility-first CSS.',
        'Improved page structure, responsive behavior, asset loading, and technical SEO across catalog pages.',
        'Organized storefront sections and catalog views to support smooth everyday updates by the retail team.',
      ],
    },
    outcomes: {
      es: [
        'Interfaz de compra y exploración responsiva y consistente entre escritorio y dispositivos móviles.',
        'Mayor claridad visual al presentar categorías de productos y especificaciones técnicas.',
        'Sitio en producción mantenido de forma continua con mejoras iterativas de UI y rendimiento.',
      ],
      en: [
        'Clean, responsive browsing and checkout interface consistent across desktop and mobile devices.',
        'Improved visual clarity across product categories and technical specifications.',
        'Actively maintained production website evolving through iterative UI and performance improvements.',
      ],
    },
    stack: ['JavaScript', 'React', 'Tailwind CSS', 'Liquid', 'Responsive UI', 'Technical SEO'],
    liveUrl: 'https://www.ispot-vzla.com',
  },
  {
    id: 'fullstack-boilerplate',
    index: '03',
    category: {
      es: 'Open Source · Arquitectura Full Stack',
      en: 'Open Source · Full Stack Architecture',
    },
    period: {
      es: '2026',
      en: '2026',
    },
    title: {
      es: 'Base Full-Stack & Express/Sequelize API Starter',
      en: 'Base Full-Stack & Express/Sequelize API Starter',
    },
    summary: {
      es: 'Base en monorepo y plantilla de API REST pensadas para iniciar proyectos full stack con separación clara entre frontend en React, servidor en Express y capa de base de datos relacional.',
      en: 'Monorepo foundation and REST API starter built to kick off full-stack projects with clear separation between the React frontend, Express backend, and relational database layer.',
    },
    implementation: {
      es: [
        'Estructura en monorepo que integra un cliente con React + Vite junto a un servidor Node.js con Express y Sequelize.',
        'Flujo base preconfigurado de autenticación JWT, manejo de variables de entorno, configuración CORS y organización modular de rutas y modelos.',
        'Soporte multidialecto SQL mediante Sequelize listo para trabajar con PostgreSQL y MySQL/MariaDB.',
      ],
      en: [
        'Monorepo structure pairing a React + Vite client workspace with an Express + Sequelize Node.js server workspace.',
        'Preconfigured JWT authentication flow, environment variable setup, CORS configuration, and modular route/model conventions.',
        'Multi-dialect SQL configuration via Sequelize supporting PostgreSQL and MySQL/MariaDB out of the box.',
      ],
    },
    outcomes: {
      es: [
        'Sirve como base práctica para proyectos más amplios como System Service.',
        'Reduce el tiempo de configuración repetitiva al arrancar nuevas aplicaciones web y APIs REST.',
        'Publicado en abierto en GitHub junto a plantillas específicas de React y Express/Sequelize.',
      ],
      en: [
        'Serves as the practical engineering foundation behind larger full-stack builds like System Service.',
        'Cuts repetitive setup time when starting new web applications and REST APIs.',
        'Published openly on GitHub alongside focused React and Express/Sequelize starter templates.',
      ],
    },
    stack: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'MySQL', 'React', 'Vite', 'JWT'],
    githubUrl: 'https://github.com/Jesuspestana01/base-fullstack-boilerplate',
  },
];
