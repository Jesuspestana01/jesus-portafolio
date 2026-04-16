export const Projects = () => {

    const projectsInfo = [
        {
            title: "iSpot | Shopify Catalog",
            description: "Development and optimization of Venezuela's leading Apple retail platform. The system bridges a high-end user experience with complex inventory management.",
            liveUrl: "https://www.ispot-vzla.com",
            githubUrl: "",
            details: {
                frontend: [
                    "Custom-built storefront using Shopify’s Liquid engine for dynamic rendering.",
                    "Modern, utility-first styling integrated into the Shopify theme architecture.",
                    "Deep customization of the native interface for a premium, Apple-like experience."
                ],
                backend: [
                    "Shopify Core: Native management of product logic, collections, and secure checkout.",
                    "ERP Readiness: Logic structured to support future real-time inventory synchronization."
                ],
                keyAchievements: [
                    "SEO Performance: Optimized Liquid code for faster loading and better search ranking.",
                    "Store Customization: Fully tailored shopping flow beyond standard Shopify templates.",
                    "Fluid UX: High-end navigation that aligns with premium brand expectations."
                ]
            }
        },
        {
            title: "Veterinary Management System",
            description: "A comprehensive Full Stack solution designed for veterinary clinics to streamline operations. The platform manages everything from patient medical records and appointment scheduling to billing and inventory tracking.",
            liveUrl: "",
            githubUrl: "https://github.com/Jesuspestana01/vet-app",
            details: {
                frontend: [
                    "Admin Dashboard: High-density React panel for efficient data management.",
                    "State Management: Real-time handling of appointments and medical history."
                ],
                backend: [
                    "Node.js & Express: Robust REST API for complex business logic processing.",
                    "PostgreSQL (Sequelize): Advanced relational modeling for patient data.",
                    "JWT Security: Secure authentication with granular role-based access control."
                ],
                keyAchievements: [
                    "Full Digitization: Replaced manual workflows with digital health records.",
                    "Data Integrity: Zero-loss architecture through database-level validations.",
                    "Modular Scale: Clean codebase designed for easy addition of health modules."
                ]
            }
        },
        {
            title: "Parabolic Area Computational Engine",
            description: "A specialized Python application that calculates the area bounded by two parabolic equations. It automates the process of finding intersection points and applying numerical integration techniques to solve engineering-grade calculus problems.",
            liveUrl: "",
            githubUrl: "https://github.com/Jesuspestana01/integral-calculation",
            details: {
                architecture: [
                    "Numerical Core: Algorithmic engine for high-precision integration.",
                    "Environment Control: Managed with Pipenv for a reproducible workflow.",
                    "Intersection Logic: Automated detection of parabolic integration limits."
                ],
                keyAchievements: [
                    "High Precision: Exact calculation of areas under complex quadratic curves.",
                    "Process Automation: Reduced human error in engineering calculus workflows.",
                    "Full Portability: Isolated environment ensuring stability across all systems."
                ]
            }
        }
    ]

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="mb-8 text-center py-4 text-2xl md:text-4xl font-bold text-white font-mono" data-aos="fade-left">
                Full Stack Projects
            </h2>

            <div className="space-y-16">
                {projectsInfo.map((project, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="bg-neutral-900/40 rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/20 transition-all duration-500 backdrop-blur-sm shadow-2xl shadow-black/50"
                    >
                        <div className="p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* COLUMNA IZQUIERDA: TEXTO Y DETALLES */}
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Frontend */}
                                        {project.details.frontend && (
                                            <div>
                                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 mb-4">
                                                    Frontend Architecture
                                                </h4>
                                                <ul className="space-y-3">
                                                    {project.details.frontend.map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                                                            <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0"></span>
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Backend */}
                                        {project.details.backend && (
                                            <div>
                                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 mb-4">
                                                    Backend Systems
                                                </h4>
                                                <ul className="space-y-3">
                                                    {project.details.backend.map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                                                            <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0"></span>
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Achievements */}
                                    <div className="pt-4 border-t border-white/5">
                                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 mb-4">
                                            Key Achievements
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                            {project.details.keyAchievements?.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                                                    <svg className="mt-1 h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* COLUMNA DERECHA: DIAGRAMA Y BOTONES */}
                                <div className="flex flex-col justify-between">
                                    <div className="bg-black/40 rounded-2xl p-8 border border-white/5 flex items-center justify-center min-h-[300px] relative group">
                                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                        <div className="w-full max-w-sm text-center text-zinc-500 italic">
                                            {/* Aquí va <ArchitectureDiagram layers={project.architecture} /> */}
                                            Diagrama de Arquitectura
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap justify-center lg:justify-end gap-4 mt-8">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full text-zinc-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300"
                                            >
                                                <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                                </svg>
                                                <span>Source</span>
                                            </a>
                                        )}

                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative flex items-center gap-2 px-8 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-bold uppercase tracking-widest hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
                                            >
                                                <span className="relative z-10">Live</span>
                                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}