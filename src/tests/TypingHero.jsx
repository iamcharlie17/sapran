'use client'
import { useState, useEffect, useRef } from "react";

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

export default function TypingHero() {
  const [idx, setIdx] = useState(0); // active text index (target)
  const [displayed, setDisplayed] = useState(["", ""]); // visible lines
  const [line, setLine] = useState(0); // current line (0 or 1)
  const [charIndex, setCharIndex] = useState(0); // current char index
  const [mode, setMode] = useState("typing"); // "typing" | "deleting"

  // refs to manage first render and previous index and latest displayed value
  const isFirstRender = useRef(true);
  const prevIdxRef = useRef(idx); // holds the index we're currently deleting (previous)
  const displayedRef = useRef(displayed);

  // keep displayedRef up-to-date
  useEffect(() => {
    displayedRef.current = displayed;
  }, [displayed]);

  // When idx changes (user clicks), start deleting the currently shown text — but skip on first mount.
  useEffect(() => {
    if (isFirstRender.current) {
      // initial mount: mark done and start typing normally
      isFirstRender.current = false;
      prevIdxRef.current = idx; // initial prev points to current idx
      setMode("typing");
      setDisplayed(["", ""]);
      setLine(0);
      setCharIndex(0);
      return;
    }

    // if user clicked the same idx (or no change), do nothing
    if (idx === prevIdxRef.current) return;

    // Start deleting the previous text (the one currently displayed)
    setMode("deleting");
    setLine(1); // start deleting from second line
    const prev = prevIdxRef.current;
    const startLen = displayedRef.current[1]?.length ?? texts[prev].EN[1].length;
    setCharIndex(startLen);
  }, [idx]);

  // main effect: performs typing or deleting steps
  useEffect(() => {
    let timeoutId;

    // choose source index depending on mode:
    // - when deleting, we delete the previous text (prevIdxRef.current)
    // - when typing, we type the new target text (idx)
    const sourceIdx = mode === "deleting" ? prevIdxRef.current : idx;
    const currentText = (texts[sourceIdx]?.EN?.[line]) ?? "";

    if (mode === "typing") {
      if (charIndex < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayed((prev) => {
            const newLines = [...prev];
            newLines[line] = currentText.slice(0, charIndex + 1);
            return newLines;
          });
          setCharIndex((c) => c + 1);
        }, 70); // typing speed
      } else {
        // finished this line
        if (line === 0) {
          // move to second line
          timeoutId = setTimeout(() => {
            setLine(1);
            setCharIndex(0);
          }, 300);
        } else {
          // finished both lines — update prevIdxRef so future deletes know current text
          prevIdxRef.current = idx;
        }
      }
    } else {
      // deleting mode
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayed((prev) => {
            const newLines = [...prev];
            newLines[line] = currentText.slice(0, charIndex - 1);
            return newLines;
          });
          setCharIndex((c) => c - 1);
        }, 40); // deleting speed
      } else {
        // finished deleting current line
        if (line === 1) {
          // move to line 0 and set its charIndex to its current length (or full length)
          timeoutId = setTimeout(() => {
            setLine(0);
            const prev = prevIdxRef.current;
            const len0 = displayedRef.current[0]?.length ?? texts[prev].EN[0].length;
            setCharIndex(len0);
          }, 80);
        } else {
          // fully deleted the previous text -> prepare to type the new one
          setDisplayed(["", ""]);
          setMode("typing");
          setLine(0);
          setCharIndex(0);
        }
      }
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, line, mode, idx]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[300px]">
      <h1 className="text-3xl font-bold">{displayed[0]}</h1>
      <h2 className="text-2xl">{displayed[1]}</h2>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        {texts.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`px-4 py-2 rounded ${
              idx === i ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            {i}
          </button>
        ))}
      </div>
    </section>
  );
}
