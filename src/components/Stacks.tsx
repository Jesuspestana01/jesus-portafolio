import tsLogo from "../assets/ts-logo.png";
import reactLogo from "../assets/react-logo.png";
import postgresqlLogo from "../assets/postgresql-logo.png";
import expressjsLogo from "../assets/expressjs-logo.png";


export const Stacks = () => {

    const stacksInfo = [
        {
            stack: "TypeScript",
            img: tsLogo,
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20",
            textColor: "text-blue-400"
        },
        {
            stack: "React",
            img: reactLogo,
            bgColor: "bg-blue-300/10",
            borderColor: "border-blue-300/20",
            textColor: "text-blue-300"
        },
        {
            stack: "PostgreSQL",
            img: postgresqlLogo,
            bgColor: "bg-sky-700/10",
            borderColor: "border-sky-700/20",
            textColor: "text-blue-600"
        },
        {
            stack: "Express.js",
            img: expressjsLogo,
            bgColor: "bg-slate-600/10",
            borderColor: "border-slate-600/20",
            textColor: "text-slate-500"
        }
    ]

    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 mt-6">
            {stacksInfo.map((stack, index) => {
                return (
                    <div key={index}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 ${stack.bgColor} ${stack.borderColor} ${stack.textColor} border  rounded-full text-xs md:text-sm font-medium cursor-default transition-all duration-150 ease-in-out
                    hover:scale-105 hover:shadow-md hover:brightness-110`}
                    >

                        <img
                            src={stack.img.src}
                            height={18}
                            width={18}
                            alt={stack.stack}
                            className="object-contain"
                        />
                        <span>{stack.stack}</span>

                    </div>
                )
            })}


        </div>
    )
}

