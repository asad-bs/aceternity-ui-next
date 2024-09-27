import React from "react";
import { Compare } from "@/components/ui/compare";

interface CompareDemoProps {
    firstImage: string
    secondImage: string
    firstImageClassName?: string
    secondImageClassname?: string
    className?: string
    slideMode?: any
}


const CompareDemo = ({ firstImage, secondImage, firstImageClassName, secondImageClassname, className, slideMode = "hover" }: CompareDemoProps) => {


    return (
        <div className="w-fit p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
            <Compare
                firstImage={firstImage}
                secondImage={secondImage}
                firstImageClassName={`object-cover object-left-top ${firstImageClassName}`}
                secondImageClassname={`object-cover object-left-top ${secondImageClassname}`}
                className={`h-[200px] w-[200px] md:h-[300px] md:w-[300px] ${className}`}
                slideMode={'hover'}
            />
        </div>
    )
}

export default CompareDemo
