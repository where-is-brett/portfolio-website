import { GridItemPayload } from "@/types";
import useMediaQuery from "@/utils/useMediaQuery";
import Image from "next/image"


const Grid = ({ gridItems }: { gridItems: GridItemPayload[] }) => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-14">
            {gridItems.map((item: GridItemPayload, key: number) => {

                return (
                    useMediaQuery(1024)
                        ?
                        <div key={key} className="flex flex-col justify-start items-start gap-8">
                            <div className="flex items-center gap-4">
                                <Image src={item.icon} alt={item.title} className="my-0 flex-shrink-0 w-12" />
                                <h3 className="font-bold text-xl md:text-2xl mb-2 font-raleway">{item.title}</h3>
                            </div>
                            <p className="">{item.description}</p>
                        </div>
                        :
                        <div key={key} className="flex justify-start items-start gap-8">
                            <Image src={item.icon} alt={item.title} className="my-auto flex-shrink-0 w-16" />
                            <div>
                                <h3 className="font-bold text-xl md:text-2xl mb-2 font-raleway">{item.title}</h3>
                                <p className="">{item.description}</p>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}

export default Grid;

