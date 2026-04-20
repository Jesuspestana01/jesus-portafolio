import { expertiseAreas } from "../data/expertiseArea"

export const InfoCard = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6 mt-12">
            {expertiseAreas.map((expertise, index) => {
                return (
                    <div
                        key={index}
                        className="p-6 transition-all duration-300 rounded-2xl backdrop-blur-sm max-w-80 group shadow-lg 
                        /* Light Mode */
                        bg-white/70 border border-[#D1DFDC] shadow-emerald-900/5 hover:border-emerald-500/50 hover:-translate-y-2
                        /* Dark Mode */
                        dark:bg-neutral-900/40 dark:border-white/5 dark:shadow-emerald-500/5 dark:hover:border-emerald-500/30"
                    >

                        <h2 className="text-xl font-bold ml-2 mt-2 transition-colors 
                            /* Light Mode */
                            text-[#0F2625] group-hover:text-emerald-600
                            /* Dark Mode */
                            dark:text-white dark:group-hover:text-emerald-400"
                        >
                            {expertise.title}
                        </h2>

                        <p className="text-sm/relaxed mt-3 ml-2 mb-6 
                            /* Light Mode */
                            text-slate-600
                            /* Dark Mode */
                            dark:text-zinc-400"
                        >
                            {expertise.description}
                        </p>

                        <ul className="space-y-3 ml-2">
                            {expertise.bullets.map((item, bIndex) => {
                                return (
                                    <li key={bIndex} className="flex items-center gap-3 text-sm font-mono 
                                        /* Light Mode */
                                        text-slate-700
                                        /* Dark Mode */
                                        dark:text-zinc-300"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}