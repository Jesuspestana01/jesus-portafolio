import { stacksInfo } from "../data/stacksInfo" 

export const Stacks = () => {

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

