import React from 'react'

import MyBentoGrid from '@/components/comman-ui/myBentoGrid/page'
import BackgroundBoxesDemo from '@/components/comman-ui/background-box/page'
import { TextRevealCard } from '@/components/ui/text-reveal-card'
import PlaceholdersAndVanishInputDemo from '@/components/comman-ui/placeholder-change/page'
import CompareDemo from '@/components/comman-ui/compare-images/page'
import DirectionAwareHoverDemo from '@/components/comman-ui/direction-hover/page'
import HeroParallaxDemo from '@/components/comman-ui/hero-parallax/page'


const App = () => {


    return (
        <div>
            <BackgroundBoxesDemo />
            <HeroParallaxDemo />

            <div className="flex justify-center">
                <PlaceholdersAndVanishInputDemo placeholders={['Front-end Development', 'Backend Development', 'Wordpress Development']} />
            </div>

            <div className="flex gap-10 flex-wrap justify-center">
                <CompareDemo
                    firstImage='/images/kaba-1.jpeg'
                    firstImageClassName='w-[400px] h-[500px]'
                    secondImage='/images/madina-1.jpeg'
                    secondImageClassname='w-[400px] h-[500px]'
                    className='!w-[400px] !h-[500px]'
                />
                <CompareDemo
                    firstImage='/images/asad-1.png'
                    firstImageClassName='w-[400px] h-[500px] !object-bottom'
                    secondImage='/images/asad-3.jpg'
                    secondImageClassname='w-[400px] h-[500px] !object-top'
                    className='!w-[400px] !h-[500px]'
                />
            </div>

            <div className="flex gap-10 flex-wrap justify-center">
                <DirectionAwareHoverDemo image='/images/kaba-1.jpeg' text1={'Kaba Front'} text2={'Saudi Arabia KSA'} />
                <DirectionAwareHoverDemo image='/images/madina-1.jpeg' text1={'Madina'} text2={'Saudi Arabia KSA'} />
                <DirectionAwareHoverDemo image='/images/asad-1.png' text1={'Asad Mumtaz'} text2={'Softrware Enginer'} />
            </div>

            <div className="flex bg-white justify-center z-[1]">
                <TextRevealCard
                    text="Do you know the name of that Phenomenon"
                    revealText="Yes I know this is the Front-end Develop. "
                ></TextRevealCard>
            </div>

            <MyBentoGrid />
        </div>
    )
}

export default App