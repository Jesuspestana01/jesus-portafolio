import { stacksInfo } from "../data/stacksInfo";

export const Stacks = ({ lang }: { lang: 'es' | 'en' }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 mt-6">
            {stacksInfo.map((stack, index) => {
                return (
                    <div key={index}
                    data-aos="fade up" data-aos-delay={index * 100}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 border transition-all duration-150 ease-in-out rounded-full text-xs md:text-sm font-medium cursor-default hover:scale-105 hover:shadow-md hover:brightness-110
                        bg-white border-[#D1DFDC] text-[#0F2625]
                        dark:bg-[#0F2625]/30 dark:border-emerald-900/50 dark:text-emerald-50`}
                    >
                        <img
                            src={stack.img.src}
                            height={18}
                            width={18}
                            alt={`${stack.stack} icon`}
                            className="object-contain"
                        />
                        <span>{stack.stack}</span>
                    </div>
                )
            })}
        </div>
    );
};