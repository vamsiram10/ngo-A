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
}]);

//# sourceMappingURL=src_components_utils_timeline_Timeline_jsx_c280d65f._.js.map