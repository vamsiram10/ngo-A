(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/utils/timeline/Timeline.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Timeline": (()=>Timeline),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const timelineData = [
    {
        year: "2022",
        title: "Discovered Anime",
        images: [
            "https://w0.peakpx.com/wallpaper/571/269/HD-wallpaper-a-silent-voice-anime-goals-koe-no-katachi-love-random.jpg",
            "https://w0.peakpx.com/wallpaper/513/42/HD-wallpaper-tenki-no-ko-anime-art-random-sky-waifu.jpg",
            "https://w0.peakpx.com/wallpaper/894/73/HD-wallpaper-tenki-no-ko-anime-art-goals-random-waifu.jpg"
        ],
        content: "Started watching anime and fell in love with the art and stories. I remember the first time I watched 'A Silent Voice'—the emotional depth and beautiful animation left a lasting impression on me. I began exploring different genres, from slice-of-life to action-packed shonen, and found myself eagerly anticipating each new episode. Anime quickly became more than just entertainment; "
    },
    {
        year: "2023",
        title: "Joined Anime Club",
        images: [
            "https://w0.peakpx.com/wallpaper/894/73/HD-wallpaper-tenki-no-ko-anime-art-goals-random-waifu.jpg",
            "https://w0.peakpx.com/wallpaper/733/129/HD-wallpaper-kimetsu-no-yaiba-anime-art-demon-slayer-fantasy-random.jpg"
        ],
        content: "Became a member of the local anime club and made new friends. Attending weekly meetups, I participated in group watch parties, lively discussions, and even trivia nights. The club organized themed events, such as cosplay contests and manga drawing workshops, which allowed me to express my creativity and learn new skills. Through these activities, I formed close bonds with people who shared my enthusiasm for anime and Japanese culture. We often collaborated on fan projects, exchanged merchandise, and supported each other at conventions. The sense of belonging and camaraderie I found in the club made this year truly special."
    },
    {
        year: "2024",
        title: "Cosplayed at Convention",
        images: [
            "https://w0.peakpx.com/wallpaper/514/165/HD-wallpaper-a-silent-voice-anime-girl-goals-koe-no-katachi-love-random-waifu.jpg",
            "https://w0.peakpx.com/wallpaper/891/288/HD-wallpaper-silent-voice-anime-art-koe-no-katachi-love-random.jpg"
        ],
        content: "Attended my first anime convention and cosplayed as my favorite character. The experience was exhilarating—I spent weeks preparing my costume, learning makeup techniques, and perfecting every detail. Walking through the convention halls, I was amazed by the creativity and dedication of fellow cosplayers. I participated in photoshoots, joined panel discussions, and met some of my favorite voice actors. The event also featured exclusive screenings, artist alleys, and merchandise booths, making it a paradise for any anime fan. Sharing this adventure with friends from the anime club made it even more memorable, and I left with unforgettable memories and new connections."
    },
    {
        year: "2025",
        title: "Started Drawing Anime",
        images: [
            "https://w0.peakpx.com/wallpaper/41/192/HD-wallpaper-silent-voice-anime-koe-no-kstschi-love-random.jpg",
            "https://w0.peakpx.com/wallpaper/1009/985/HD-wallpaper-chuunibyou-anime-art-beatiful-girl-random-waifu.jpg"
        ],
        content: "Began drawing my own anime characters and sharing them online. Inspired by the incredible artists I followed, I dedicated time each day to practice sketching, inking, and digital coloring. I posted my artwork on social media and received encouraging feedback from the community, which motivated me to improve further. I also joined online art challenges and collaborated with other creators on fan comics and illustrations. Over time, I developed my unique style and even started taking commissions. This creative journey not only enhanced my artistic skills but also boosted my confidence and opened up new opportunities in the world of anime art."
    }
];
const transitionVariants = [
    {
        initial: (direction)=>({
                opacity: 0,
                scale: 0.92,
                rotate: direction > 0 ? -15 : 15,
                x: direction > 0 ? 80 : -80,
                y: 0,
                filter: "blur(0px)"
            }),
        animate: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            zIndex: 40
        },
        exit: (direction)=>({
                opacity: 0,
                scale: 0.92,
                rotate: direction > 0 ? 15 : -15,
                x: direction > 0 ? -80 : 80,
                y: 0,
                filter: "blur(0px)"
            }),
        transition: {
            duration: 0.55,
            ease: "easeInOut"
        }
    },
    {
        initial: (direction)=>({
                opacity: 0,
                rotateY: direction > 0 ? 90 : -90,
                scale: 0.95,
                x: 0,
                y: 0
            }),
        animate: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            x: 0,
            y: 0,
            zIndex: 40
        },
        exit: (direction)=>({
                opacity: 0,
                rotateY: direction > 0 ? -90 : 90,
                scale: 0.95,
                x: 0,
                y: 0
            }),
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    },
    {
        initial: (direction)=>({
                opacity: 0,
                y: direction > 0 ? 60 : -60,
                scale: 0.9,
                filter: "blur(6px)"
            }),
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            zIndex: 40
        },
        exit: (direction)=>({
                opacity: 0,
                y: direction > 0 ? -60 : 60,
                scale: 0.9,
                filter: "blur(6px)"
            }),
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    {
        initial: (direction)=>({
                opacity: 0,
                scale: 1.2,
                x: 0,
                y: 0,
                filter: "brightness(1.5) grayscale(0.5)"
            }),
        animate: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            filter: "brightness(1) grayscale(0)",
            zIndex: 40
        },
        exit: (direction)=>({
                opacity: 0,
                scale: 0.8,
                x: 0,
                y: 0,
                filter: "brightness(0.7) grayscale(0.7)"
            }),
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    {
        initial: (direction)=>({
                opacity: 0,
                rotateX: direction > 0 ? 90 : -90,
                scale: 0.95,
                x: 0,
                y: 0
            }),
        animate: {
            opacity: 1,
            rotateX: 0,
            scale: 1,
            x: 0,
            y: 0,
            zIndex: 40
        },
        exit: (direction)=>({
                opacity: 0,
                rotateX: direction > 0 ? -90 : 90,
                scale: 0.95,
                x: 0,
                y: 0
            }),
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
];
function useRandomVariantIndex() {
    _s();
    const [variantIndex, setVariantIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRandomVariantIndex.useEffect": ()=>{
            setVariantIndex(Math.floor(Math.random() * transitionVariants.length));
        }
    }["useRandomVariantIndex.useEffect"], []);
    return [
        variantIndex,
        setVariantIndex
    ];
}
_s(useRandomVariantIndex, "VvlW/Y7SmCzBnTgXWV5veqNXawI=");
const AvasaLogoSVG = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 64 64",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "32",
                r: "30",
                stroke: "#a78bfa",
                strokeWidth: "4",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                lineNumber: 193,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 14L44 50H20L32 14Z",
                fill: "#6366f1",
                stroke: "#a78bfa",
                strokeWidth: "2",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                lineNumber: 201,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "32",
                r: "6",
                fill: "#fff",
                stroke: "#6366f1",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                lineNumber: 208,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
        lineNumber: 192,
        columnNumber: 3
    }, this);
_c = AvasaLogoSVG;
const AnimatedImageGallery = ({ images, altTexts = [], imageSize })=>{
    _s1();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [variantIndex, setVariantIndex] = useRandomVariantIndex();
    const [showFallbackLogo, setShowFallbackLogo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!images || images.length === 0) return null;
    if (images.length === 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative ${imageSize}`,
            style: {
                aspectRatio: "1 / 1",
                background: "#fff",
                minWidth: "90px",
                minHeight: "90px",
                maxWidth: "220px",
                maxHeight: "220px",
                width: "100%",
                height: "auto",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: images[0],
                alt: altTexts[0] || "Gallery image",
                className: `object-cover object-center w-full h-full rounded-lg border-neutral-200 border dark:border-neutral-700 shadow`,
                style: {
                    aspectRatio: "1 / 1",
                    background: "#fff",
                    width: "100%",
                    height: "100%",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center"
                },
                draggable: false
            }, void 0, false, {
                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                lineNumber: 246,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
            lineNumber: 229,
            columnNumber: 7
        }, this);
    }
    const handleNext = ()=>{
        setDirection(1);
        setVariantIndex(Math.floor(Math.random() * transitionVariants.length));
        setActive((prev)=>(prev + 1) % images.length);
    };
    const handlePrev = ()=>{
        setDirection(-1);
        setVariantIndex(Math.floor(Math.random() * transitionVariants.length));
        setActive((prev)=>(prev - 1 + images.length) % images.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        relative flex items-center
        w-[90px] h-[90px] min-w-[90px] min-h-[90px]
        sm:w-[120px] sm:h-[120px] sm:min-w-[120px] sm:min-h-[120px]
        md:w-[160px] md:h-[160px] md:min-w-[160px] md:min-h-[160px]
        lg:w-[200px] lg:h-[200px] lg:min-w-[200px] lg:min-h-[200px]
        xl:w-[220px] xl:h-[220px] xl:min-w-[220px] xl:min-h-[220px]
        2xl:w-[320px] 2xl:h-[260px] 2xl:min-w-[320px] 2xl:min-h-[260px]
        aspect-square 2xl:aspect-[32/26]
      `,
        style: {
            maxWidth: "320px",
            maxHeight: "260px",
            width: "100%",
            height: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "object-contain z-0 absolute inset-0 w-full h-full pointer-events-none",
                style: {
                    filter: "blur(0px)",
                    objectFit: "contain",
                    objectPosition: "center",
                    zIndex: 0,
                    display: "block",
                    opacity: 1
                },
                "aria-hidden": "true",
                children: !showFallbackLogo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/svg/AVASA.svg",
                    alt: "AVASA Logo",
                    className: "w-full h-full",
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                        display: "block",
                        opacity: 0.25,
                        position: "absolute",
                        inset: 0,
                        zIndex: 0,
                        pointerEvents: "none"
                    },
                    draggable: false,
                    "aria-hidden": "true",
                    onError: ()=>setShowFallbackLogo(true)
                }, void 0, false, {
                    fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                    lineNumber: 310,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvasaLogoSVG, {
                    style: {
                        width: "100%",
                        height: "100%",
                        opacity: 0.25,
                        pointerEvents: "none",
                        position: "absolute",
                        inset: 0,
                        zIndex: 0
                    },
                    className: "w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                    lineNumber: 331,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8,
                    x: 0,
                    y: 60,
                    filter: "blur(3px)"
                },
                animate: {
                    opacity: 0.3,
                    scale: 0.8,
                    x: 0,
                    y: 40,
                    filter: "blur(3px)"
                },
                exit: {
                    opacity: 0,
                    scale: 0.8,
                    x: 0,
                    y: 60,
                    filter: "blur(3px)"
                },
                transition: {
                    duration: 0.4,
                    ease: "easeInOut"
                },
                className: "absolute inset-0 pointer-events-none origin-bottom",
                style: {
                    zIndex: 5,
                    height: "100%",
                    width: "100%",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: images[(active - 1 + images.length) % images.length],
                    alt: altTexts[(active - 1 + images.length) % images.length] || "Gallery image",
                    width: 400,
                    height: 400,
                    draggable: false,
                    className: `object-cover object-center w-full h-full rounded-xl border-gray-200 shadow-md border dark:border-neutral-800`,
                    style: {
                        opacity: 0.3,
                        filter: "blur(3px)",
                        width: "100%",
                        height: "100%",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        display: "block",
                        objectFit: "cover",
                        objectPosition: "center"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, this)
            }, images[(active - 1 + images.length) % images.length] + "-back", false, {
                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                mode: "wait",
                custom: direction,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    custom: direction,
                    initial: transitionVariants[variantIndex].initial(direction),
                    animate: transitionVariants[variantIndex].animate,
                    exit: transitionVariants[variantIndex].exit(direction),
                    transition: transitionVariants[variantIndex].transition,
                    className: "absolute inset-0 origin-bottom",
                    style: {
                        zIndex: 40,
                        height: "100%",
                        width: "100%",
                        perspective: 800,
                        opacity: 1,
                        filter: "blur(0px)",
                        transform: "none",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: images[active],
                        alt: altTexts[active] || "Gallery image",
                        width: 500,
                        height: 500,
                        draggable: false,
                        className: `
              object-cover object-center w-full h-full rounded-2xl border-gray-200 shadow-lg border dark:border-neutral-800
            `,
                        style: {
                            aspectRatio: "1 / 1",
                            background: "#fff",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            display: "block",
                            objectFit: "cover",
                            objectPosition: "center"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                        lineNumber: 423,
                        columnNumber: 11
                    }, this)
                }, images[active] + "-" + variantIndex, false, {
                    fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-50 absolute left-0 top-1/2 -translate-y-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handlePrev,
                    className: "flex items-center justify-center h-8 w-8 bg-gray-100 rounded-full dark:bg-neutral-800 shadow hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-blue-400",
                    "aria-label": "Previous image",
                    type: "button",
                    style: {
                        opacity: 0.3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15 19l-7-7 7-7",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                            lineNumber: 455,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                        lineNumber: 454,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                    lineNumber: 447,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                lineNumber: 446,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-50 absolute right-0 top-1/2 -translate-y-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleNext,
                    className: "flex items-center justify-center h-8 w-8 bg-gray-100 rounded-full dark:bg-neutral-800 shadow hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-blue-400",
                    "aria-label": "Next image",
                    type: "button",
                    style: {
                        opacity: 0.3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 5l7 7-7 7",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                            lineNumber: 474,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                        lineNumber: 473,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                    lineNumber: 466,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                lineNumber: 465,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
};
_s1(AnimatedImageGallery, "n+1cmtXYVZWqpJnTdlS4PRSTwIE=", false, function() {
    return [
        useRandomVariantIndex
    ];
});
_c1 = AnimatedImageGallery;
function Timeline({ data }) {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Timeline.useEffect": ()=>{
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setHeight(rect.height);
            }
        }
    }["Timeline.useEffect"], [
        ref
    ]);
    let scrollYProgress = {
        get: ()=>0
    };
    let heightTransform = 0;
    let opacityTransform = 1;
    try {
        const scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
            target: containerRef,
            offset: [
                "start 10%",
                "end 50%"
            ]
        });
        scrollYProgress = scroll.scrollYProgress;
        heightTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
            0,
            1
        ], [
            0,
            height
        ]);
        opacityTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
            0,
            0.1
        ], [
            0,
            1
        ]);
    } catch (e) {
        heightTransform = 0;
        opacityTransform = 1;
    }
    const timelineItems = Array.isArray(data) && data.length > 0 ? data : timelineData;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full font-sans bg-white dark:bg-neutral-950 md:px-10",
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto py-12 px-2 px-4 max-w-7xl sm:py-16 md:px-8 lg:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-2 max-w-4xl text-base text-black text-lg dark:text-white sm:mb-4 md:text-4xl",
                        children: "OUR JOURNEY"
                    }, void 0, false, {
                        fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                        lineNumber: 525,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-sm text-neutral-700 text-xs dark:text-neutral-300 sm:text-sm md:text-base",
                        children: "THIS IS HOW IT STARTED"
                    }, void 0, false, {
                        fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                lineNumber: 524,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "relative mx-auto pb-20 max-w-7xl",
                children: [
                    timelineItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `
              flex flex-col md:flex-row justify-start pt-8 sm:pt-12 md:pt-24 md:gap-10
              transition-all
            `,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "z-40 sticky top-24 relative flex flex-row flex-col items-center self-start mb-2 mb-0 max-w-full w-full max-w-xs sm:top-32 md:top-40 lg:max-w-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-2 flex items-center justify-center h-8 w-8 h-10 w-10 bg-white rounded-full dark:bg-black sm:left-3 md:left-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-1.5 h-3.5 w-3.5 h-4 w-4 bg-neutral-200 rounded-full border-neutral-300 dark:bg-neutral-800 border dark:border-neutral-700 sm:p-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                                lineNumber: 543,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                            lineNumber: 542,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden flex-col items-start pl-12 pl-20 sm:pl-16 md:flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mb-1 text-xl font-extrabold text-purple-600 dark:text-purple-400 sm:text-2xl md:text-3xl",
                                                    children: item.year
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                                    lineNumber: 546,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-neutral-500 text-5xl dark:text-neutral-500 sm:text-xl md:text-2xl",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                                    lineNumber: 549,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                            lineNumber: 545,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex flex-col gap-3 pl-10 pr-2 pl-14 pr-4 w-full transition-all sm:gap-4 md:pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "block mb-1 sm:mb-2 md:hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-extrabold text-purple-600 dark:text-purple-400 sm:text-2xl",
                                                children: item.year
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                                lineNumber: 557,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                            lineNumber: 556,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "block mb-2 text-lg text-left font-bold text-white text-2xl sm:mb-4 md:hidden",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                            lineNumber: 561,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 sm:gap-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedImageGallery, {
                                                images: item.images || [],
                                                altTexts: (item.images || []).map((img, i)=>i === 0 ? `${item.title} icon` : `${item.title} image ${i + 1}`)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                                lineNumber: 565,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                            lineNumber: 564,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-white text-base sm:mt-2 md:text-md lg:text-lg",
                                            children: [
                                                item.content,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                            lineNumber: 574,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                                    lineNumber: 555,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                            lineNumber: 534,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: height + "px"
                        },
                        className: "overflow-hidden absolute left-4 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] dark:via-neutral-700 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] sm:left-6 md:left-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: {
                                height: heightTransform,
                                opacity: opacityTransform
                            },
                            className: "absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
                lineNumber: 532,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/utils/timeline/Timeline.jsx",
        lineNumber: 520,
        columnNumber: 5
    }, this);
}
_s2(Timeline, "/LmG4K16JVlK/hcr7t5Hbjo3SBw=");
_c2 = Timeline;
const __TURBOPACK__default__export__ = Timeline;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AvasaLogoSVG");
__turbopack_context__.k.register(_c1, "AnimatedImageGallery");
__turbopack_context__.k.register(_c2, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/section/ourworksection/pastevents/Events.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$timeline$2f$Timeline$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/utils/timeline/Timeline.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Events = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Events.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                lerp: 0.1,
                smooth: true
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "Events.useEffect": ()=>{
                    lenis.destroy();
                }
            })["Events.useEffect"];
        }
    }["Events.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$timeline$2f$Timeline$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/section/ourworksection/pastevents/Events.jsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(Events, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Events;
const __TURBOPACK__default__export__ = Events;
var _c;
__turbopack_context__.k.register(_c, "Events");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/section/ourworksection/maplocation/MapLocation.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const EVENTS = [
    {
        id: "event-location-2025",
        name: "Event 1",
        date: "2024-08-10",
        coords: [
            26.2978,
            73.0386
        ],
        address: "Sardarpura, Jodhpur, Rajasthan 342003"
    }
];
function getEventPopupHtml(event) {
    const addressId = `event-address-${event.id}`;
    const buttonId = `copy-event-address-btn-${event.id}`;
    return `
    <b>${event.name}</b><br/>
    Date: ${event.date}<br/>
    <span id="${addressId}">${event.address}</span>
    <button 
      id="${buttonId}"
      style="margin-left:8px;padding:2px 8px;font-size:0.9em;cursor:pointer;pointer-events:auto;"
      onclick="
        event.stopPropagation();
        var address = document.getElementById('${addressId}').innerText;
        var showCopiedPopup = function() {
          var existing = document.getElementById('copied-popup-toast');
          if (existing) existing.remove();
          var toast = document.createElement('div');
          toast.id = 'copied-popup-toast';
          toast.innerText = 'Copied!';
          toast.style.position = 'fixed';
          toast.style.left = '50%';
          toast.style.bottom = '32px';
          toast.style.transform = 'translateX(-50%)';
          toast.style.background = '#222';
          toast.style.color = '#fff';
          toast.style.padding = '10px 24px';
          toast.style.borderRadius = '8px';
          toast.style.fontSize = '1.1em';
          toast.style.boxShadow = '0 2px 12px rgba(0,0,0,0.18)';
          toast.style.zIndex = 9999;
          document.body.appendChild(toast);
          setTimeout(function() {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
          }, 1500);
        };
        // Try to use Clipboard API, fallback to execCommand
        if (window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(address).then(function() {
            showCopiedPopup();
          }, function() {
            // fallback if Clipboard API fails
            var textarea = document.createElement('textarea');
            textarea.value = address;
            document.body.appendChild(textarea);
            textarea.select();
            try { document.execCommand('copy'); } catch (err) {}
            document.body.removeChild(textarea);
            showCopiedPopup();
          });
        } else {
          var textarea = document.createElement('textarea');
          textarea.value = address;
          document.body.appendChild(textarea);
          textarea.select();
          try { document.execCommand('copy'); } catch (err) {}
          document.body.removeChild(textarea);
          showCopiedPopup();
        }
      "
    >Copy</button>
  `;
}
const EVENT_LOCATIONS = EVENTS.map(_c = (event)=>({
        id: event.id,
        name: event.name,
        coords: event.coords,
        popup: getEventPopupHtml(event),
        isEvent: true
    }));
_c1 = EVENT_LOCATIONS;
const AVASA_ICON_URL = "/svg/AVASA.svg";
const FIXED_LOCATION = {
    id: "fixed-location",
    name: "present AVASA Location",
    coords: [
        26.33171558001394,
        73.04491042494395
    ],
    iconUrl: AVASA_ICON_URL,
    popup: "<b>present AVASA Location</b>"
};
const OTHER_LOCATIONS = [
    {
        id: "random-location-1",
        name: "Random Location 1",
        coords: [
            27.1769,
            75.9597
        ],
        iconUrl: AVASA_ICON_URL,
        popup: "<b>Random Location 1</b>"
    },
    {
        id: "random-location-2",
        name: "Random Location 2",
        coords: [
            26.32,
            73.03
        ],
        iconUrl: AVASA_ICON_URL,
        popup: "<b>Random Location 2</b>"
    }
];
const FIXED_ICON_SIZE = [
    50,
    50
];
const FIXED_ICON_ANCHOR = [
    32,
    64
];
const FIXED_POPUP_ANCHOR = [
    0,
    -50
];
const OTHER_ICON_SIZE = [
    32,
    32
];
const OTHER_ICON_ANCHOR = [
    16,
    32
];
const OTHER_POPUP_ANCHOR = [
    0,
    -32
];
const EVENT_ICON_SIZE = [
    40,
    40
];
const EVENT_ICON_ANCHOR = [
    20,
    40
];
const EVENT_POPUP_ANCHOR = [
    0,
    -40
];
const MapLocation = ()=>{
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapLocation.useEffect": ()=>{
            let mapInstance = null;
            let markerRefs = [];
            let fixedMarker = null;
            let animationTimeouts = [];
            function loadScript(src) {
                return new Promise({
                    "MapLocation.useEffect.loadScript": (resolve, reject)=>{
                        if (document.querySelector(`script[src="${src}"]`)) {
                            resolve();
                            return;
                        }
                        const script = document.createElement("script");
                        script.src = src;
                        script.async = true;
                        script.onload = resolve;
                        script.onerror = reject;
                        document.body.appendChild(script);
                    }
                }["MapLocation.useEffect.loadScript"]);
            }
            function loadCSS(href) {
                return new Promise({
                    "MapLocation.useEffect.loadCSS": (resolve, reject)=>{
                        if (document.querySelector(`link[href="${href}"]`)) {
                            resolve();
                            return;
                        }
                        const link = document.createElement("link");
                        link.rel = "stylesheet";
                        link.href = href;
                        link.crossOrigin = "";
                        link.onload = resolve;
                        link.onerror = reject;
                        document.head.appendChild(link);
                    }
                }["MapLocation.useEffect.loadCSS"]);
            }
            const leafletJsCdn = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
            const leafletCssCdn = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
            const initialCoords = FIXED_LOCATION.coords;
            if (mapRef.current) {
                mapRef.current.removeAttribute("style");
            }
            Promise.all([
                loadScript(leafletJsCdn),
                loadCSS(leafletCssCdn)
            ]).then({
                "MapLocation.useEffect": ()=>{
                    if (!window.L || !mapRef.current) return;
                    const L = window.L;
                    if (mapRef.current._leaflet_id) {
                        try {
                            L.map(mapRef.current).remove();
                        } catch (e) {}
                    }
                    mapInstance = L.map(mapRef.current, {
                        zoomControl: true,
                        attributionControl: true,
                        center: initialCoords,
                        zoom: 15
                    });
                    mapInstance.setView(initialCoords, 15);
                    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(mapInstance);
                    // Make animation slower: increase delay and duration
                    function animateMapToLocations(locations, delay = 2000) {
                        if (!mapInstance) return;
                        let i = 0;
                        function flyNext() {
                            if (i >= locations.length) {
                                return;
                            }
                            const loc = locations[i];
                            mapInstance.flyTo(loc.coords, loc.zoom || 15, {
                                animate: true,
                                duration: 2.0
                            });
                            i++;
                            animationTimeouts.push(setTimeout(flyNext, delay));
                        }
                        flyNext();
                    }
                    function addMarkerWithIcon(location, openPopupImmediately = false, isFixedLocation = false) {
                        const popupId = `popup-${location.id || location.name.replace(/\s+/g, "-").toLowerCase()}`;
                        if (location.isEvent) {
                            const eventDivIcon = L.divIcon({
                                className: "blinking-black-marker",
                                iconSize: EVENT_ICON_SIZE,
                                iconAnchor: EVENT_ICON_ANCHOR,
                                popupAnchor: EVENT_POPUP_ANCHOR,
                                html: `
              <div class="event-marker-outer">
                <div class="event-marker-inner"></div>
              </div>
            `
                            });
                            const marker = L.marker(location.coords, {
                                icon: eventDivIcon
                            }).addTo(mapInstance);
                            const popupHtml = location.popup && !location.popup.includes(`id="`) ? `<div id="${popupId}">${location.popup}</div>` : location.popup || `<div id="${popupId}"><b>${location.name}</b></div>`;
                            marker.bindPopup(popupHtml, {
                                autoClose: false,
                                closeOnClick: false,
                                closeButton: false,
                                className: "event-popup"
                            });
                            markerRefs.push(marker);
                            const styleId = "event-leaflet-marker-style";
                            if (!document.getElementById(styleId)) {
                                const style = document.createElement("style");
                                style.id = styleId;
                                style.innerHTML = `
              .blinking-black-marker .event-marker-outer {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #fff;
                border: 2.5px solid #111;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                position: relative;
                animation: event-blink 0.7s linear infinite;
              }
              .blinking-black-marker .event-marker-inner {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #111;
                box-shadow: 0 0 0 8px rgba(0,0,0,0.15);
              }
              @keyframes event-blink {
                0% { box-shadow: 0 0 0 10px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.15);}
                50% { box-shadow: 0 0 0 22px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.15);}
                100% { box-shadow: 0 0 0 10px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.15);}
              }
              .leaflet-popup.event-popup {
                pointer-events: none;
                margin-top: -10px;
              }
              .leaflet-popup.event-popup .leaflet-popup-content-wrapper {
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                border: 1.5px solid #111;
              }
              .leaflet-popup.event-popup .leaflet-popup-close-button {
                display: none;
              }
            `;
                                document.head.appendChild(style);
                            }
                            if (openPopupImmediately) {
                                marker.openPopup();
                                setTimeout({
                                    "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                        const popupEl = document.querySelector(`.leaflet-popup[id^="${popupId}"], .leaflet-popup`);
                                        if (popupEl) {
                                            popupEl.classList.add("event-popup");
                                        }
                                    }
                                }["MapLocation.useEffect.addMarkerWithIcon"], 100);
                            }
                            marker.on("click", {
                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                    markerBounce(marker);
                                }
                            }["MapLocation.useEffect.addMarkerWithIcon"]);
                            return;
                        }
                        const isFixed = location.id === FIXED_LOCATION.id;
                        const iconSize = isFixed ? FIXED_ICON_SIZE : OTHER_ICON_SIZE;
                        const iconAnchor = isFixed ? FIXED_ICON_ANCHOR : OTHER_ICON_ANCHOR;
                        const popupAnchor = isFixed ? FIXED_POPUP_ANCHOR : OTHER_POPUP_ANCHOR;
                        if (location.iconUrl) {
                            const testImg = new window.Image();
                            testImg.src = location.iconUrl;
                            testImg.onload = ({
                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                    const customIcon = L.icon({
                                        iconUrl: location.iconUrl,
                                        iconSize,
                                        iconAnchor,
                                        popupAnchor,
                                        className: isFixedLocation ? "blinking-fixed-marker" : ""
                                    });
                                    const marker = L.marker(location.coords, {
                                        icon: customIcon
                                    }).addTo(mapInstance);
                                    const popupHtml = location.popup && !location.popup.includes(`id="`) ? `<div id="${popupId}">${location.popup}</div>` : location.popup || `<div id="${popupId}"><b>${location.name}</b></div>`;
                                    marker.bindPopup(popupHtml, {
                                        autoClose: false,
                                        closeOnClick: false,
                                        closeButton: false,
                                        className: isFixedLocation ? "fixed-popup" : ""
                                    });
                                    markerRefs.push(marker);
                                    if (isFixedLocation) {
                                        fixedMarker = marker;
                                    }
                                    const styleId = "avasa-leaflet-marker-style";
                                    if (!document.getElementById(styleId)) {
                                        const style = document.createElement("style");
                                        style.id = styleId;
                                        style.innerHTML = `
                .leaflet-marker-icon[src$="AVASA.svg"] {
                  background: white;
                  border-radius: 50%;
                  border: 2px solid #333;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  object-fit: contain;
                }
                .blinking-fixed-marker.leaflet-marker-icon[src$="AVASA.svg"] {
                  animation: avasa-blink 0.4s linear infinite;
                  box-shadow: 0 0 0 10px rgba(255, 20, 147, 0.7), 0 2px 8px rgba(0,0,0,0.15);
                  border: 2.5px solid #ff1493;
                  background: #ffe0f4;
                }
                @keyframes avasa-blink {
                  0% { box-shadow: 0 0 0 10px rgba(255, 20, 147, 0.7), 0 2px 8px rgba(0,0,0,0.15); }
                  50% { box-shadow: 0 0 0 22px rgba(255, 20, 147, 1), 0 2px 8px rgba(0,0,0,0.15); }
                  100% { box-shadow: 0 0 0 10px rgba(255, 20, 147, 0.7), 0 2px 8px rgba(0,0,0,0.15); }
                }
                .leaflet-popup.fixed-popup {
                  pointer-events: none;
                  margin-top: -10px;
                }
                .leaflet-popup.fixed-popup .leaflet-popup-content-wrapper {
                  background: #fff;
                  border-radius: 8px;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  border: 1.5px solid #333;
                }
                .leaflet-popup.fixed-popup .leaflet-popup-close-button {
                  display: none;
                }
                @keyframes marker-bounce {
                  0%   { transform: translateY(0);}
                  10%  { transform: translateY(-20px);}
                  20%  { transform: translateY(-30px);}
                  30%  { transform: translateY(-20px);}
                  40%  { transform: translateY(-10px);}
                  50%  { transform: translateY(-5px);}
                  60%  { transform: translateY(-2px);}
                  70%  { transform: translateY(0);}
                  100% { transform: translateY(0);}
                }
                .leaflet-marker-icon.marker-bounce {
                  animation: marker-bounce 0.7s cubic-bezier(.25,.46,.45,.94) both;
                }
              `;
                                        document.head.appendChild(style);
                                    }
                                    if (openPopupImmediately) {
                                        marker.openPopup();
                                        if (isFixedLocation) {
                                            marker._popup.options.autoClose = false;
                                            marker._popup.options.closeOnClick = false;
                                            marker._popup.options.closeButton = false;
                                            setTimeout({
                                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                                    const popupEl = document.querySelector(`.leaflet-popup[id^="${popupId}"], .leaflet-popup`);
                                                    if (popupEl) {
                                                        popupEl.classList.add("fixed-popup");
                                                    }
                                                }
                                            }["MapLocation.useEffect.addMarkerWithIcon"], 100);
                                        }
                                    }
                                    marker.on("click", {
                                        "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                            markerBounce(marker);
                                        }
                                    }["MapLocation.useEffect.addMarkerWithIcon"]);
                                }
                            })["MapLocation.useEffect.addMarkerWithIcon"];
                            testImg.onerror = ({
                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                    const fallbackIcon = L.icon({
                                        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                                        iconSize: [
                                            25,
                                            41
                                        ],
                                        iconAnchor: [
                                            12,
                                            41
                                        ],
                                        popupAnchor: [
                                            1,
                                            -34
                                        ],
                                        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
                                        shadowSize: [
                                            41,
                                            41
                                        ]
                                    });
                                    const marker = L.marker(location.coords, {
                                        icon: fallbackIcon
                                    }).addTo(mapInstance);
                                    const popupHtml = (location.popup && !location.popup.includes(`id="`) ? `<div id="${popupId}">${location.popup}</div>` : location.popup || `<div id="${popupId}"><b>${location.name}</b></div>`) + "<br/><span style='color:red'>Custom icon failed to load.</span>";
                                    marker.bindPopup(popupHtml, {
                                        autoClose: false,
                                        closeOnClick: false,
                                        closeButton: false,
                                        className: isFixedLocation ? "fixed-popup" : ""
                                    });
                                    markerRefs.push(marker);
                                    if (isFixedLocation) {
                                        fixedMarker = marker;
                                    }
                                    if (openPopupImmediately) {
                                        marker.openPopup();
                                        if (isFixedLocation) {
                                            marker._popup.options.autoClose = false;
                                            marker._popup.options.closeOnClick = false;
                                            marker._popup.options.closeButton = false;
                                            setTimeout({
                                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                                    const popupEl = document.querySelector(`.leaflet-popup[id^="${popupId}"], .leaflet-popup`);
                                                    if (popupEl) {
                                                        popupEl.classList.add("fixed-popup");
                                                    }
                                                }
                                            }["MapLocation.useEffect.addMarkerWithIcon"], 100);
                                        }
                                    }
                                    marker.on("click", {
                                        "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                            markerBounce(marker);
                                        }
                                    }["MapLocation.useEffect.addMarkerWithIcon"]);
                                }
                            })["MapLocation.useEffect.addMarkerWithIcon"];
                        } else {
                            const fallbackIcon = L.icon({
                                iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                                iconSize: [
                                    25,
                                    41
                                ],
                                iconAnchor: [
                                    12,
                                    41
                                ],
                                popupAnchor: [
                                    1,
                                    -34
                                ],
                                shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
                                shadowSize: [
                                    41,
                                    41
                                ]
                            });
                            const marker = L.marker(location.coords, {
                                icon: fallbackIcon
                            }).addTo(mapInstance);
                            const popupHtml = location.popup && !location.popup.includes(`id="`) ? `<div id="${popupId}">${location.popup}</div>` : location.popup || `<div id="${popupId}"><b>${location.name}</b></div>`;
                            marker.bindPopup(popupHtml, {
                                autoClose: false,
                                closeOnClick: false,
                                closeButton: false,
                                className: isFixedLocation ? "fixed-popup" : ""
                            });
                            markerRefs.push(marker);
                            if (isFixedLocation) {
                                fixedMarker = marker;
                            }
                            if (openPopupImmediately) {
                                marker.openPopup();
                                if (isFixedLocation) {
                                    marker._popup.options.autoClose = false;
                                    marker._popup.options.closeOnClick = false;
                                    marker._popup.options.closeButton = false;
                                    setTimeout({
                                        "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                            const popupEl = document.querySelector(`.leaflet-popup[id^="${popupId}"], .leaflet-popup`);
                                            if (popupEl) {
                                                popupEl.classList.add("fixed-popup");
                                            }
                                        }
                                    }["MapLocation.useEffect.addMarkerWithIcon"], 100);
                                }
                            }
                            marker.on("click", {
                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                    markerBounce(marker);
                                }
                            }["MapLocation.useEffect.addMarkerWithIcon"]);
                        }
                    }
                    function markerBounce(marker) {
                        if (!marker || !marker._icon) return;
                        marker._icon.classList.remove("marker-bounce");
                        void marker._icon.offsetWidth;
                        marker._icon.classList.add("marker-bounce");
                        setTimeout({
                            "MapLocation.useEffect.markerBounce": ()=>{
                                if (marker._icon) marker._icon.classList.remove("marker-bounce");
                            }
                        }["MapLocation.useEffect.markerBounce"], 700);
                    }
                    // Add all markers
                    addMarkerWithIcon(FIXED_LOCATION, true, true);
                    EVENT_LOCATIONS.forEach({
                        "MapLocation.useEffect": (eventLoc)=>{
                            addMarkerWithIcon(eventLoc, true, false);
                        }
                    }["MapLocation.useEffect"]);
                    OTHER_LOCATIONS.forEach({
                        "MapLocation.useEffect": (location)=>{
                            addMarkerWithIcon(location, false, false);
                        }
                    }["MapLocation.useEffect"]);
                    // Animate: fixed location -> each event (in order) -> back to fixed location
                    const animationLocations = [
                        {
                            ...FIXED_LOCATION,
                            zoom: 15
                        },
                        ...EVENT_LOCATIONS.map({
                            "MapLocation.useEffect": (ev)=>({
                                    ...ev,
                                    zoom: 15
                                })
                        }["MapLocation.useEffect"]),
                        {
                            ...FIXED_LOCATION,
                            zoom: 15
                        }
                    ];
                    animateMapToLocations(animationLocations, 2000); // was 1200, now slower
                    mapInstance.setView(initialCoords, 15, {
                        animate: false
                    });
                }
            }["MapLocation.useEffect"]);
            return ({
                "MapLocation.useEffect": ()=>{
                    if (animationTimeouts.length) {
                        animationTimeouts.forEach({
                            "MapLocation.useEffect": (t)=>clearTimeout(t)
                        }["MapLocation.useEffect"]);
                    }
                    if (mapInstance) {
                        mapInstance.remove();
                    }
                }
            })["MapLocation.useEffect"];
        }
    }["MapLocation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapRef,
        id: "leaflet-map",
        className: "overflow-hidden mx-auto rounded-md"
    }, void 0, false, {
        fileName: "[project]/src/components/section/ourworksection/maplocation/MapLocation.jsx",
        lineNumber: 582,
        columnNumber: 5
    }, this);
};
_s(MapLocation, "9mn7MMe4fPaZ50ApsOpRWF2HbFg=");
_c2 = MapLocation;
const __TURBOPACK__default__export__ = MapLocation;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "EVENT_LOCATIONS$EVENTS.map");
__turbopack_context__.k.register(_c1, "EVENT_LOCATIONS");
__turbopack_context__.k.register(_c2, "MapLocation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_443714cd._.js.map