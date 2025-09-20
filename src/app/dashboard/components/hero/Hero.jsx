'use client'
import { useState } from 'react';
import humanRightsImg from '../../../../assets/hero/Human-Rights.jpg'
import animalImg from '../../../../assets/hero/Animal.jpg'
import environmentImg from '../../../../assets/hero/Environment.jpg'
import { useLang } from '@/providers/LangProvider';


const Hero = () => {
    const [idx, setIdx] = useState(0);

    const { lang } = useLang();

    const images = [humanRightsImg, animalImg, environmentImg];

    const texts = [
        {
            EN: "FREEDOM BELONGS TO EVERY SINGLE SOUL",
            BN: "স্বাধীনতা প্রতিটি প্রাণের অধিকার"
        },
        {
            EN: "PROTECT NATURE FOR FUTURE GENERATIONS",
            BN: "ভবিষ্যৎ প্রজন্মের জন্য প্রকৃতিকে রক্ষা করুন"
        },
        {
            EN: "RESPECT ALL CREATURES ON THIS PLANET",
            BN: "এই গ্রহের সমস্ত জীবের প্রতি সম্মান জানান"
        }
    ];

    return (
        <section className="px-16">
            <div className="min-h-[75vh] relative w-full rounded-2xl overflow-hidden">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${idx === i ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ backgroundImage: `url(${img.src})` }}
                    ></div>
                ))}

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/25 via-transparent to-transparent pointer-events-none"></div>

                <div className="flex items-center min-h-[75vh] text-secondary relative z-10">
                    <div className="px-32 space-y-4">
                        <h1 className="text-5xl font-bold">
                            {texts[idx][lang]
                                .split(" ")
                                .map((word, i) =>
                                    i == 2 ? (
                                        <span key={i}>
                                            {word}
                                            <br />
                                        </span>
                                    ) : (
                                        <span key={i}>{word} </span>
                                    )
                                )}
                        </h1>
                        <hr className="border-t border-primary mr-18" />
                        <h1 className="text-4xl text-primary font-bold">
                            {
                                lang === 'BN' ? 'সকল মানুষের নিরাপত্তা' : 'SAFEGUARDING ALL LIVES'
                            }
                        </h1>
                    </div>

                </div>

                <div className="flex flex-col gap-2 absolute left-12 bottom-32 z-10">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIdx(i)}
                            className={`h-3 w-3 ${idx === i ? 'bg-white' : 'bg-primary'
                                } border border-primary rounded-full cursor-pointer transition-all duration-300`}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
