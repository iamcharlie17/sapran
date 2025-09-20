'use client'
import { useState, useEffect, useRef } from 'react';
import humanRightsImg from '../../../../assets/hero/Human-Rights.jpg'
import animalImg from '../../../../assets/hero/Animal.jpg'
import environmentImg from '../../../../assets/hero/Environment.jpg'
import { useLang } from '@/providers/LangProvider';

const texts = [
    {
        EN: ["FREEDOM BELONGS TO", "EVERY SINGLE SOUL"],
        BN: ["স্বাধীনতা প্রতিটি প্রাণের,", "অধিকার"]
    },
    {
        EN: ["PROTECT NATURE FOR", "FUTURE GENERATIONS"],
        BN: ["ভবিষৎ প্রজন্মের জন্য", "প্রকৃতিকে রক্ষা করুন"]
    },
    {
        EN: ["RESPECT ALL CREATURES", "ON THIS PLANET"],
        BN: ["এই গ্রহের সমস্ত জীবের", "প্রতি সম্মান জানান"]
    }
];

const Hero = () => {
    const [idx, setIdx] = useState(0);
    const [displayed, setDisplayed] = useState(["", ""]);
    const [line, setLine] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [mode, setMode] = useState("typing");

    const { lang } = useLang();

    const images = [humanRightsImg, animalImg, environmentImg];

    const isFirstRender = useRef(true);
    const prevIdxRef = useRef(idx);
    const displayedRef = useRef(displayed);

    useEffect(() => {
        displayedRef.current = displayed;
    }, [displayed]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            prevIdxRef.current = idx;
            setMode("typing");
            setDisplayed(["", ""]);
            setLine(0);
            setCharIndex(0);
            return;
        }

        if (idx === prevIdxRef.current) return;

        setMode("deleting");
        setLine(1);
        const prev = prevIdxRef.current;
        const startLen = displayedRef.current[1]?.length ?? texts[prev][lang][1].length;
        setCharIndex(startLen);
    }, [idx, lang]);

    useEffect(() => {
        let timeoutId;
        const sourceIdx = mode === "deleting" ? prevIdxRef.current : idx;
        const currentText = texts[sourceIdx]?.[lang]?.[line] ?? "";

        if (mode === "typing") {
            if (charIndex < currentText.length) {
                timeoutId = setTimeout(() => {
                    setDisplayed((prev) => {
                        const newLines = [...prev];
                        newLines[line] = currentText.slice(0, charIndex + 1);
                        return newLines;
                    });
                    setCharIndex((c) => c + 1);
                }, 30);
            } else {
                if (line === 0) {
                    timeoutId = setTimeout(() => {
                        setLine(1);
                        setCharIndex(0);
                    }, 0);
                } else {
                    prevIdxRef.current = idx;
                }
            }
        } else {
            if (charIndex > 0) {
                timeoutId = setTimeout(() => {
                    setDisplayed((prev) => {
                        const newLines = [...prev];
                        newLines[line] = currentText.slice(0, charIndex - 1);
                        return newLines;
                    });
                    setCharIndex((c) => c - 1);
                }, 30);
            } else {
                if (line === 1) {
                    timeoutId = setTimeout(() => {
                        setLine(0);
                        const prev = prevIdxRef.current;
                        const len0 = displayedRef.current[0]?.length ?? texts[prev][lang][0].length;
                        setCharIndex(len0);
                    }, 30);
                } else {
                    setDisplayed(["", ""]);
                    setMode("typing");
                    setLine(0);
                    setCharIndex(0);
                }
            }
        }

        return () => clearTimeout(timeoutId);
    }, [charIndex, line, mode, idx, lang]);

    return (
        <section className="px-16">
            <div className="min-h-[75vh] relative w-full rounded-2xl overflow-hidden">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[5000ms] ${idx === i ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ backgroundImage: `url(${img.src})` }}
                    ></div>
                ))}

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/25 via-transparent to-transparent pointer-events-none"></div>

                <div className="flex items-center min-h-[75vh] text-secondary relative z-10">
                    <div className="px-32">
                        <h1 className="text-5xl font-bold mb-6 pb-6 transition-transform">
                            {displayed[0]} <br /> {displayed[1]}
                        </h1>

                        <span className="text-4xl text-primary font-bold border-t-2 border-primary pt-4">
                            {lang === 'BN' ? 'সকল মানুষের নিরাপত্তা' : 'SAFEGUARDING ALL LIVES'}
                        </span>
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
