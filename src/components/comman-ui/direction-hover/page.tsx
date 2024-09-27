"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"

interface Props {
    image: string
    imageClass?: any
    text1?: any
    text2?: any
}
const DirectionAwareHoverDemo = ({ image, text1, text2, imageClass }: Props) => {


    const imageUrl = "/images/kaba-1.jpeg";
    return (
        <div className="h-[40rem] relative  flex items-center justify-center">
            <DirectionAwareHover imageUrl={image} imageClassName={`${imageClass}`}>
                <p className="font-bold text-xl">{text1}</p>
                <p className="font-normal text-sm">{text2}</p>
            </DirectionAwareHover>
        </div>
    );
}

export default DirectionAwareHoverDemo