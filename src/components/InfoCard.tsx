export const InfoCard = () => {

    const expertiseAreas = [
        {
            title: "E-commerce Specialist",
            description: "Building online stores optimized for conversion and scale.",
            bullets: [
                "Shopify API Integrations",
                "Custom Theme Development",
                "Performance Optimization (Web Vitals)"
            ]
        },
        {
            title: "Full Stack Dev (ERP)",
            description: "Architecting internal systems for enterprise resource management.",
            bullets: [
                "Business Logic with Node.js",
                "Database Architecture",
                "Inventory & Payroll Systems"
            ]
        },
        {
            title: "Tech Exploration",
            description: "Implementing modern frameworks for fast and secure solutions.",
            bullets: [
                "Next.js & Astro Architectures",
                "Odoo Module Research",
                "Mobile Development (React Native)"
            ]
        }
    ]

    return (
        <div className="flex flex-wrap justify-center gap-6 mt-12">
            {expertiseAreas.map((expertise, index) => {
                return (
                    <div
                        key={index}
                        className="p-6 bg-neutral-900/40 border border-white/5 hover:border-emerald-500/30 hover:-translate-y-2 transition-all duration-300 rounded-2xl backdrop-blur-sm max-w-80 group shadow-lg shadow-emerald-500/5"
                    >

                        <h2 className="text-white text-xl font-bold ml-2 mt-2 group-hover:text-emerald-400 transition-colors">
                            {expertise.title}
                        </h2>


                        <p className="text-zinc-400 text-sm/relaxed mt-3 ml-2 mb-6">
                            {expertise.description}
                        </p>

                        <ul className="space-y-3 ml-2">
                            {expertise.bullets.map((item, bIndex) => {
                                return (
                                    <li key={bIndex} className="flex items-center gap-3 text-zinc-300 text-sm font-mono">
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