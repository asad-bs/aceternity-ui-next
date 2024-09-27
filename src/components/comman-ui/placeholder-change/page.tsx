"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

interface PlaceholdersProps {
    placeholders: any
}


const PlaceholdersAndVanishInputDemo = ({ placeholders }: PlaceholdersProps) => {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="h-[45rem] flex flex-col justify-center  items-center px-4">
            <h2 className="mb-10 sm:mb-20 text-2xl text-center font-[700] drop-shadow-xl sm:text-[70px] leading-[100px] dark:text-whitetext-black bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-green-300">
                I'm able to work on following Technologies
            </h2>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}


export default PlaceholdersAndVanishInputDemo