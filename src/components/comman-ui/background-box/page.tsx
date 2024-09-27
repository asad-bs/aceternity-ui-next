"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

// import { TypewriterEffectSmoothDemo } from '@/components/comman-ui/typewriter-effects/page'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextRevealCard, TextRevealCardTitle } from "@/components/ui/text-reveal-card";

export default function BackgroundBoxesDemo() {

    const words = [
        {
            text: "Asad",
            className: "bg-clip-text text-transparent bg-gradient-to-b from-red-300 to-green-300 text-whitehover:text-black",
            cursorClassName: 'cursor-pointer'
        },
        {
            text: "Mumtaz",
            className: "bg-clip-text text-transparent bg-gradient-to-b from-red-300 to-green-300 text-whitehover:text-black",
        },
    ];
    return (
        <div className="h-[60vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <div className="z-[1] flex flex-col justify-center items-center w-fit text-white">
                <TypewriterEffectSmooth words={words} />
                {/* <TypewriterEffectSmooth words={[{ text: 'Software' }, { text: 'Developer' }]} /> */}
            </div>

            <p className="text-center text-neutral-300 relative z-20 mt-2">
                Software Developer
            </p>
        </div>
    );
}
