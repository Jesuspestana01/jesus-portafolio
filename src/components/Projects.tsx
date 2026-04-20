import { projectsInfo } from "../data/projectsInfo";
import { ui } from "../i18n/ui";

export const Projects = ({ lang }: { lang: 'es' | 'en' }) => {
    const t = ui[lang];

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="mb-8 text-center py-4 text-2xl md:text-4xl font-bold font-mono text-[#0F2625] dark:text-white" data-aos="fade-left">
                {t['projects.section_title']}
            </h2>

            <div className="space-y-16">
                {projectsInfo.map((project, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="overflow-hidden border transition-all duration-500 backdrop-blur-sm rounded-2xl shadow-2xl bg-white/70 border-[#D1DFDC] shadow-emerald-900/5 hover:border-emerald-500/40 dark:bg-neutral-900/40 dark:border-white/5 dark:hover:border-emerald-500/20 dark:shadow-black/50"
                    >
                        <div className="p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 tracking-tight text-[#0F2625] dark:text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                                            {project.description[lang]}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {project.details.frontend && (
                                            <div>
                                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                                                    {t['projects.frontend']}
                                                </h4>
                                                <ul className="space-y-3">
                                                    {project.details.frontend[lang].map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-zinc-300">
                                                            <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0"></span>
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {project.details.backend && (
                                            <div>
                                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                                                    {t['projects.backend']}
                                                </h4>
                                                <ul className="space-y-3">
                                                    {project.details.backend[lang].map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-zinc-300">
                                                            <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0"></span>
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {project.details.architecture && (
                                            <div className="col-span-1 md:col-span-2">
                                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                                                    {t['projects.architecture']}
                                                </h4>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {project.details.architecture[lang].map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-zinc-300">
                                                            <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0"></span>
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-4 border-t border-[#D1DFDC] dark:border-white/5">
                                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                                            {t['projects.achievements']}
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                            {project.details.keyAchievements[lang]?.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-zinc-300">
                                                    <svg className="mt-1 h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-end">
                                    <div className="flex flex-wrap justify-center lg:justify-end gap-4 mt-8">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-2 px-6 py-3 border rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border-[#D1DFDC] text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 dark:border-white/10 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                                            >
                                                <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                                </svg>
                                                <span>{t['projects.view_source']}</span>
                                            </a>
                                        )}

                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative flex items-center gap-2 px-8 py-3 border rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 bg-emerald-600/10 border-emerald-600/30 text-emerald-700 hover:bg-emerald-600 hover:text-white dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400 dark:hover:bg-emerald-500/20"
                                            >
                                                <span className="relative z-10">{t['projects.view_live']}</span>
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