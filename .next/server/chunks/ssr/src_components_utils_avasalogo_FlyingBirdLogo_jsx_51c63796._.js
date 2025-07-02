module.exports = {

"[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * FlyingBirdLogo
 * Animated SVG logo of a stylized bird in flight, with flapping wings.
 * Modern, minimal, and suitable for a foundation or creative org.
 * This version moves the bird smoothly from left to right, continuously, and goes on forever.
 */ const FlyingBirdLogo = ({ primaryColor = "#EC4899", accentColor = "#F9A8D4", beakColor = "#F59E42", eyeColor = "#222", style = {}, className = "", width = 180, height = 120 })=>{
    const leftWingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightWingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const birdGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shadowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // We'll use a fixed size for the container and SVG
    const baseSvgWidth = 300;
    const baseSvgHeight = 200;
    // The bird will move left to right within the small container
    // Remove setBirdX and state, as we want a truly continuous animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let frame = 0;
        let raf;
        // The area the bird can move horizontally
        const scale = Math.min(width / baseSvgWidth, height / baseSvgHeight);
        const birdWidth = baseSvgWidth * 0.6 * scale; // width of the bird group after scaling
        const minX = -birdWidth; // Start fully offscreen left
        const maxX = width; // End fully offscreen right
        let x = minX;
        const waveAmplitude = 0.09 * height;
        const waveFrequency = 0.025;
        const moveSpeed = Math.max(1, width / 120); // px per frame
        const centerY = height / 2;
        const animate = ()=>{
            // Flap wings: angle oscillates between -30 and 30 degrees
            const wingAngle = Math.sin(frame * 0.12) * 28;
            // Bird moves left to right, looping
            x += moveSpeed;
            if (x > maxX) {
                x = minX;
            }
            // Bird moves in a sine wave vertically as it moves horizontally
            const floatY = Math.sin(x * waveFrequency) * waveAmplitude;
            if (leftWingRef.current) leftWingRef.current.setAttribute("transform", `rotate(${-wingAngle}, 90, 100)`);
            if (rightWingRef.current) rightWingRef.current.setAttribute("transform", `rotate(${wingAngle}, 210, 100)`);
            if (birdGroupRef.current) birdGroupRef.current.setAttribute("transform", `translate(${x},${centerY - 100 * scale + floatY}) scale(${scale})`);
            if (shadowRef.current) shadowRef.current.setAttribute("cx", 150 * scale + x);
            frame++;
            raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);
        return ()=>raf && cancelAnimationFrame(raf);
    // eslint-disable-next-line
    }, [
        width,
        height
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            background: "none",
            overflow: "hidden",
            display: "block",
            ...style
        },
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: `0 0 ${width} ${height}`,
            xmlns: "http://www.w3.org/2000/svg",
            style: {
                display: "block",
                width: "100%",
                height: "100%",
                background: "none",
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    ref: birdGroupRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            ref: leftWingRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M90,100 Q40,60 60,140 Q100,120 90,100",
                                fill: accentColor,
                                stroke: primaryColor,
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            ref: rightWingRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M210,100 Q260,60 240,140 Q200,120 210,100",
                                fill: accentColor,
                                stroke: primaryColor,
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "150",
                            cy: "110",
                            rx: "60",
                            ry: "38",
                            fill: primaryColor,
                            stroke: accentColor,
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "200",
                            cy: "80",
                            r: "28",
                            fill: primaryColor,
                            stroke: accentColor,
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "228,80 250,88 228,92",
                            fill: beakColor,
                            stroke: "#EAB308",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "215",
                            cy: "80",
                            r: "4.5",
                            fill: eyeColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "217",
                            cy: "79",
                            r: "1.2",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M95,140 Q80,170 120,150",
                            stroke: primaryColor,
                            strokeWidth: "6",
                            fill: "none",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M105,145 Q100,180 135,155",
                            stroke: accentColor,
                            strokeWidth: "4",
                            fill: "none",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    ref: shadowRef,
                    cx: 150,
                    cy: height - 15,
                    rx: 60 * Math.min(width / baseSvgWidth, height / baseSvgHeight),
                    ry: 10 * Math.min(width / baseSvgWidth, height / baseSvgHeight),
                    fill: "#000",
                    opacity: "0.08",
                    style: {
                        transition: "cx 0.1s"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FlyingBirdLogo;
}}),

};

//# sourceMappingURL=src_components_utils_avasalogo_FlyingBirdLogo_jsx_51c63796._.js.map