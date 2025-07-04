(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
const FlyingBirdLogo = ({ primaryColor = "#EC4899", accentColor = "#F9A8D4", beakColor = "#F59E42", eyeColor = "#222", style = {}, className = "", width = 180, height = 120, absolute = false, zIndex = 1 })=>{
    _s();
    const leftWingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightWingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const birdGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shadowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const baseSvgWidth = 300;
    const baseSvgHeight = 200;
    const [bounceFrame, setBounceFrame] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlyingBirdLogo.useEffect": ()=>{
            let frame = 0;
            let raf;
            const scale = Math.min(width / baseSvgWidth, height / baseSvgHeight);
            const birdWidth = baseSvgWidth * 0.6 * scale;
            const minX = -birdWidth;
            const maxX = width;
            let x = minX;
            const waveAmplitude = 0.09 * height;
            const waveFrequency = 0.025;
            const moveSpeed = Math.max(1, width / 120);
            const centerY = height / 2;
            const animate = {
                "FlyingBirdLogo.useEffect.animate": ()=>{
                    const wingAngle = Math.sin(frame * 0.12) * 28;
                    x += moveSpeed;
                    if (x > maxX) {
                        x = minX;
                    }
                    const floatY = Math.sin(x * waveFrequency) * waveAmplitude;
                    if (leftWingRef.current) leftWingRef.current.setAttribute("transform", `rotate(${-wingAngle}, 90, 100)`);
                    if (rightWingRef.current) rightWingRef.current.setAttribute("transform", `rotate(${wingAngle}, 210, 100)`);
                    if (birdGroupRef.current) birdGroupRef.current.setAttribute("transform", `translate(${x},${centerY - 100 * scale + floatY}) scale(${scale})`);
                    if (shadowRef.current) shadowRef.current.setAttribute("cx", 150 * scale + x);
                    frame++;
                    setBounceFrame(frame);
                    raf = requestAnimationFrame(animate);
                }
            }["FlyingBirdLogo.useEffect.animate"];
            raf = requestAnimationFrame(animate);
            return ({
                "FlyingBirdLogo.useEffect": ()=>raf && cancelAnimationFrame(raf)
            })["FlyingBirdLogo.useEffect"];
        }
    }["FlyingBirdLogo.useEffect"], [
        width,
        height
    ]);
    const containerStyle = {
        position: absolute ? "absolute" : "static",
        top: 0,
        left: 0,
        width,
        height,
        zIndex,
        background: "none",
        overflow: "hidden",
        display: "block",
        pointerEvents: "none",
        ...style
    };
    const getBounceY = (i, frame, amplitude = 7, speed = 0.18, phase = 0)=>{
        return Math.sin(frame * speed + i * 0.5 + phase) * amplitude;
    };
    const server404 = "server down  404 ";
    const server404Color = "orange";
    const tagX = 70;
    const tagY = 120;
    const tagWidth = 90;
    const tagHeight = 32;
    const tagRadius = 8;
    const stringStartX = 150;
    const stringStartY = 100;
    const stringEndX = tagX + tagWidth / 2;
    const stringEndY = tagY;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 10,
                    pointerEvents: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "#e11d48",
                        fontWeight: "bold",
                        fontSize: 24,
                        background: "rgba(255,255,255,0.8)",
                        borderRadius: 6,
                        padding: "2px 10px"
                    },
                    children: "server 404"
                }, void 0, false, {
                    fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        ref: birdGroupRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                ref: leftWingRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M90,100 Q40,60 60,140 Q100,120 90,100",
                                    fill: accentColor,
                                    stroke: primaryColor,
                                    strokeWidth: "4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                ref: rightWingRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M210,100 Q260,60 240,140 Q200,120 210,100",
                                    fill: accentColor,
                                    stroke: primaryColor,
                                    strokeWidth: "4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "150",
                                cy: "110",
                                rx: "60",
                                ry: "38",
                                fill: primaryColor,
                                stroke: accentColor,
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "200",
                                cy: "80",
                                r: "28",
                                fill: primaryColor,
                                stroke: accentColor,
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "228,80 250,88 228,92",
                                fill: beakColor,
                                stroke: "#EAB308",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "215",
                                cy: "80",
                                r: "4.5",
                                fill: eyeColor
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "217",
                                cy: "79",
                                r: "1.2",
                                fill: "#fff"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M95,140 Q80,170 120,150",
                                stroke: primaryColor,
                                strokeWidth: "6",
                                fill: "none",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M105,145 Q100,180 135,155",
                                stroke: accentColor,
                                strokeWidth: "4",
                                fill: "none",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: stringStartX,
                                y1: stringStartY,
                                x2: stringEndX,
                                y2: stringEndY,
                                stroke: "#eab308",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: tagX,
                                y: tagY,
                                rx: tagRadius,
                                ry: tagRadius,
                                width: tagWidth,
                                height: tagHeight,
                                fill: "#fff",
                                stroke: "#e11d48",
                                strokeWidth: "2",
                                opacity: "0.95",
                                filter: "url(#tagShadow)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "tagShadow",
                                    x: "0",
                                    y: "0",
                                    width: "200%",
                                    height: "200%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                        dx: "0",
                                        dy: "2",
                                        stdDeviation: "2",
                                        floodColor: "#000",
                                        floodOpacity: "0.12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: server404.split("").map((char, i)=>{
                                    const fontSize = 18;
                                    const totalLen = server404.length;
                                    const charWidth = fontSize * 0.62;
                                    const textTotalWidth = charWidth * totalLen;
                                    const startX = tagX + (tagWidth - textTotalWidth) / 2;
                                    const bounceY = getBounceY(i, bounceFrame, 7, 0.18, 0);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: startX + i * charWidth,
                                        y: tagY + tagHeight / 2 + fontSize / 3 + bounceY,
                                        fontFamily: "monospace, Menlo, monospace",
                                        fontSize: fontSize,
                                        fontWeight: "bold",
                                        fill: "#e11d48",
                                        style: {
                                            userSelect: "none",
                                            pointerEvents: "none",
                                            transition: "y 0.1s"
                                        },
                                        children: char === " " ? "\u00A0" : char
                                    }, i, false, {
                                        fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
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
                        lineNumber: 265,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
};
_s(FlyingBirdLogo, "psnU3BD/pOae9YwuST06TPnB1KI=");
_c = FlyingBirdLogo;
const __TURBOPACK__default__export__ = FlyingBirdLogo;
var _c;
__turbopack_context__.k.register(_c, "FlyingBirdLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/utils/roundedpages/RotatingCylinderGallery.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/RotatingCylinderGallery.jsx
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
// Helper to generate random Unsplash images
function getRandomImageUrl(seed, width = 250, height = 350) {
    // Use Unsplash random with a seed for reproducibility
    return `https://source.unsplash.com/random/${width}x${height}?sig=${seed}`;
}
const NUM_IMAGES = 10;
const RotatingCylinderGallery = ()=>{
    _s();
    const galleryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Generate random images only once per mount
    const randomImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingCylinderGallery.useMemo[randomImages]": ()=>Array.from({
                length: NUM_IMAGES
            }).map({
                "RotatingCylinderGallery.useMemo[randomImages]": (_, i)=>({
                        src: getRandomImageUrl(i + 1),
                        alt: `Random Unsplash ${i + 1}`
                    })
            }["RotatingCylinderGallery.useMemo[randomImages]"])
    }["RotatingCylinderGallery.useMemo[randomImages]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingCylinderGallery.useEffect": ()=>{
            let gsap;
            try {
                gsap = (()=>{
                    const e = new Error("Cannot find module 'gsap'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })();
            } catch (e) {
                // fallback: use a no-op if gsap is not available
                gsap = {
                    to: ({
                        "RotatingCylinderGallery.useEffect": (el, opts)=>{
                            if (el && opts && typeof opts.opacity !== "undefined") {
                                el.style.opacity = opts.opacity;
                            }
                        }
                    })["RotatingCylinderGallery.useEffect"]
                };
            }
            let Lenis;
            try {
                Lenis = __turbopack_context__.r("[project]/node_modules/@studio-freight/lenis/dist/lenis.cjs.js [app-client] (ecmascript)").default;
            } catch (e) {
                Lenis = null;
            }
            const gallery = galleryRef.current;
            const inner = innerRef.current;
            const bg = bgRef.current;
            if (!gallery || !inner) return;
            const slides = Array.from(inner.children);
            const options = {
                scrollPerItem: 500,
                distance: 1500,
                background: true
            };
            const visibleRange = 5000;
            const frontRange = 1000;
            let winHeight = window.innerHeight;
            let initialZ = slides.map({
                "RotatingCylinderGallery.useEffect.initialZ": (_, i)=>-i * options.distance
            }["RotatingCylinderGallery.useEffect.initialZ"]);
            let firstTime = true;
            // Set up background images if enabled
            let bgImages = [];
            if (options.background && bg) {
                bg.innerHTML = "";
                slides.forEach({
                    "RotatingCylinderGallery.useEffect": (slide, i)=>{
                        const img = slide.querySelector("img");
                        if (img) {
                            const bgImg = img.cloneNode(true);
                            bgImg.style.position = "absolute";
                            bgImg.style.left = 0;
                            bgImg.style.top = 0;
                            bgImg.style.width = "100%";
                            bgImg.style.height = "100%";
                            bgImg.style.objectFit = "cover";
                            bgImg.style.zIndex = slides.length - i;
                            bgImg.style.opacity = i === 0 ? 1 : 0;
                            bg.appendChild(bgImg);
                            bgImages.push(bgImg);
                        }
                    }
                }["RotatingCylinderGallery.useEffect"]);
            }
            function mapRange(value, inMin, inMax, outMin, outMax) {
                return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
            }
            function isDisabled() {
                const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                const isMobile = window.innerWidth < 768;
                if (isSafari || isMobile) {
                    gallery.classList.add("disabled");
                    return true;
                } else {
                    gallery.classList.remove("disabled");
                    return false;
                }
            }
            function setHeight() {
                if (isDisabled()) return;
                winHeight = window.innerHeight;
                gallery.style.height = winHeight + slides.length * options.scrollPerItem + "px";
            }
            function initImages() {
                if (isDisabled()) return;
                slides.forEach({
                    "RotatingCylinderGallery.useEffect.initImages": (slide, i)=>{
                        slide.style.transform = `translate3d(-50%, -50%, ${initialZ[i]}px)`;
                        // Make images fully visible
                        slide.style.opacity = 0;
                        slide.style.zIndex = slides.length - i;
                    }
                }["RotatingCylinderGallery.useEffect.initImages"]);
            }
            function setSticky() {
                if (isDisabled()) return;
                const rect = gallery.getBoundingClientRect();
                if (rect.top <= 0) {
                    inner.classList.add("sticky");
                } else {
                    inner.classList.remove("sticky");
                }
                if (rect.bottom < winHeight) {
                    inner.classList.add("sticky-end");
                } else {
                    inner.classList.remove("sticky-end");
                }
            }
            function moveImages() {
                const progress = (window.scrollY - gallery.offsetTop) / (gallery.offsetHeight - window.innerHeight);
                // Always update all images, and fade them in as they approach the front
                slides.forEach({
                    "RotatingCylinderGallery.useEffect.moveImages": (slide, i)=>{
                        // Calculate the z position for this slide
                        const zIncrement = Math.max(0, Math.min(1, progress)) * options.distance * (slides.length - 1);
                        const currentZ = initialZ[i] + zIncrement;
                        // Fade in images as they approach the front, fade out as they move away
                        // We'll use a range: fully visible if within frontRange, fade out after
                        let opacity = 0;
                        if (currentZ > -frontRange && currentZ < frontRange * 2) {
                            // Fade in as it approaches, fade out as it leaves
                            if (currentZ < 0) {
                                opacity = mapRange(currentZ, -frontRange, 0, 0, 1);
                            } else if (currentZ < frontRange) {
                                opacity = 1;
                            } else {
                                opacity = mapRange(currentZ, frontRange, frontRange * 2, 1, 0);
                            }
                        } else {
                            opacity = 0;
                        }
                        slide.style.opacity = opacity;
                        // Only update transform if in visible range for performance
                        if (currentZ > -visibleRange && currentZ < visibleRange) {
                            slide.style.transform = `translate3d(-50%, -50%, ${currentZ}px)`;
                        }
                        // Background image opacity
                        if (options.background && bgImages[i]) {
                            const opacityBg = opacity;
                            if (gsap && typeof gsap.to === "function") {
                                gsap.to(bgImages[i], {
                                    opacity: opacityBg,
                                    ease: "power3.out",
                                    duration: 1.5
                                });
                            } else {
                                bgImages[i].style.opacity = opacityBg;
                            }
                        }
                    }
                }["RotatingCylinderGallery.useEffect.moveImages"]);
                firstTime = false;
            }
            function onResize() {
                setHeight();
                initImages();
                setSticky();
                moveImages();
            }
            function onScroll() {
                setSticky();
                moveImages();
            }
            // Initial setup
            setHeight();
            initImages();
            setSticky();
            moveImages();
            window.addEventListener("resize", onResize);
            window.addEventListener("scroll", onScroll);
            // Smooth scroll
            let lenis;
            if ("object" !== "undefined" && getComputedStyle(document.body).getPropertyValue("--smooth-scroll") === "true" && Lenis) {
                lenis = new Lenis();
                function raf(time) {
                    lenis.raf(time);
                    requestAnimationFrame(raf);
                }
                requestAnimationFrame(raf);
            }
            return ({
                "RotatingCylinderGallery.useEffect": ()=>{
                    window.removeEventListener("resize", onResize);
                    window.removeEventListener("scroll", onScroll);
                }
            })["RotatingCylinderGallery.useEffect"];
        }
    }["RotatingCylinderGallery.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mdw-image-gallery-3d",
        ref: galleryRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mdw-image-gallery-bg",
                ref: bgRef
            }, void 0, false, {
                fileName: "[project]/src/components/utils/roundedpages/RotatingCylinderGallery.jsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mdw-image-gallery-inner",
                ref: innerRef,
                children: randomImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "e-con",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img.src,
                            alt: img.alt
                        }, void 0, false, {
                            fileName: "[project]/src/components/utils/roundedpages/RotatingCylinderGallery.jsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/src/components/utils/roundedpages/RotatingCylinderGallery.jsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/utils/roundedpages/RotatingCylinderGallery.jsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/utils/roundedpages/RotatingCylinderGallery.jsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
};
_s(RotatingCylinderGallery, "IiXG7Z9quMMa974UhZMGvoFLwpY=");
_c = RotatingCylinderGallery;
const __TURBOPACK__default__export__ = RotatingCylinderGallery;
var _c;
__turbopack_context__.k.register(_c, "RotatingCylinderGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/@studio-freight/lenis/dist/lenis.cjs.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
function t(t, e, i) {
    return Math.max(t, Math.min(e, i));
}
class Animate {
    advance(e) {
        if (!this.isRunning) return;
        let i = !1;
        if (this.lerp) this.value = (s = this.value, o = this.to, n = 60 * this.lerp, r = e, function(t, e, i) {
            return (1 - i) * t + i * e;
        }(s, o, 1 - Math.exp(-n * r))), Math.round(this.value) === this.to && (this.value = this.to, i = !0);
        else {
            this.currentTime += e;
            const s = t(0, this.currentTime / this.duration, 1);
            i = s >= 1;
            const o = i ? 1 : this.easing(s);
            this.value = this.from + (this.to - this.from) * o;
        }
        var s, o, n, r;
        this.onUpdate?.(this.value, i), i && this.stop();
    }
    stop() {
        this.isRunning = !1;
    }
    fromTo(t, e, { lerp: i = .1, duration: s = 1, easing: o = (t)=>t, onStart: n, onUpdate: r }) {
        this.from = this.value = t, this.to = e, this.lerp = i, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = !0, n?.(), this.onUpdate = r;
    }
}
class Dimensions {
    constructor({ wrapper: t, content: e, autoResize: i = !0, debounce: s = 250 } = {}){
        this.wrapper = t, this.content = e, i && (this.debouncedResize = function(t, e) {
            let i;
            return function() {
                let s = arguments, o = this;
                clearTimeout(i), i = setTimeout(function() {
                    t.apply(o, s);
                }, e);
            };
        }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
        this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1);
    }
    resize = ()=>{
        this.onWrapperResize(), this.onContentResize();
    };
    onWrapperResize = ()=>{
        this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    };
    onContentResize = ()=>{
        this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    };
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        };
    }
}
class Emitter {
    constructor(){
        this.events = {};
    }
    emit(t, ...e) {
        let i = this.events[t] || [];
        for(let t = 0, s = i.length; t < s; t++)i[t](...e);
    }
    on(t, e) {
        return this.events[t]?.push(e) || (this.events[t] = [
            e
        ]), ()=>{
            this.events[t] = this.events[t]?.filter((t)=>e !== t);
        };
    }
    off(t, e) {
        this.events[t] = this.events[t]?.filter((t)=>e !== t);
    }
    destroy() {
        this.events = {};
    }
}
const e = 100 / 6;
class VirtualScroll {
    constructor(t, { wheelMultiplier: e = 1, touchMultiplier: i = 1 }){
        this.element = t, this.wheelMultiplier = e, this.touchMultiplier = i, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = new Emitter, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        });
    }
    on(t, e) {
        return this.emitter.on(t, e);
    }
    destroy() {
        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        });
    }
    onTouchStart = (t)=>{
        const { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
            x: 0,
            y: 0
        }, this.emitter.emit("scroll", {
            deltaX: 0,
            deltaY: 0,
            event: t
        });
    };
    onTouchMove = (t)=>{
        const { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t, s = -(e - this.touchStart.x) * this.touchMultiplier, o = -(i - this.touchStart.y) * this.touchMultiplier;
        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
            x: s,
            y: o
        }, this.emitter.emit("scroll", {
            deltaX: s,
            deltaY: o,
            event: t
        });
    };
    onTouchEnd = (t)=>{
        this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: t
        });
    };
    onWheel = (t)=>{
        let { deltaX: i, deltaY: s, deltaMode: o } = t;
        i *= 1 === o ? e : 2 === o ? this.windowWidth : 1, s *= 1 === o ? e : 2 === o ? this.windowHeight : 1, i *= this.wheelMultiplier, s *= this.wheelMultiplier, this.emitter.emit("scroll", {
            deltaX: i,
            deltaY: s,
            event: t
        });
    };
    onWindowResize = ()=>{
        this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
    };
}
module.exports = class Lenis {
    constructor({ wrapper: t = window, content: e = document.documentElement, wheelEventsTarget: i = t, eventsTarget: s = i, smoothWheel: o = !0, syncTouch: n = !1, syncTouchLerp: r = .075, touchInertiaMultiplier: l = 35, duration: h, easing: a = (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)), lerp: c = !h && .1, infinite: d = !1, orientation: p = "vertical", gestureOrientation: u = "vertical", touchMultiplier: m = 1, wheelMultiplier: v = 1, autoResize: g = !0, __experimental__naiveDimensions: S = !1 } = {}){
        this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({ deltaX: t, deltaY: e, event: i })=>{
            if (i.ctrlKey) return;
            const s = i.type.includes("touch"), o = i.type.includes("wheel");
            if (this.options.syncTouch && s && "touchstart" === i.type && !this.isStopped && !this.isLocked) return void this.reset();
            const n = 0 === t && 0 === e, r = "vertical" === this.options.gestureOrientation && 0 === e || "horizontal" === this.options.gestureOrientation && 0 === t;
            if (n || r) return;
            let l = i.composedPath();
            if (l = l.slice(0, l.indexOf(this.rootElement)), l.find((t)=>{
                var e, i, n, r, l;
                return (null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-lenis-prevent")) || s && (null === (i = t.hasAttribute) || void 0 === i ? void 0 : i.call(t, "data-lenis-prevent-touch")) || o && (null === (n = t.hasAttribute) || void 0 === n ? void 0 : n.call(t, "data-lenis-prevent-wheel")) || (null === (r = t.classList) || void 0 === r ? void 0 : r.contains("lenis")) && !(null === (l = t.classList) || void 0 === l ? void 0 : l.contains("lenis-stopped"));
            })) return;
            if (this.isStopped || this.isLocked) return void i.preventDefault();
            if (this.isSmooth = this.options.syncTouch && s || this.options.smoothWheel && o, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
            i.preventDefault();
            let h = e;
            "both" === this.options.gestureOrientation ? h = Math.abs(e) > Math.abs(t) ? e : t : "horizontal" === this.options.gestureOrientation && (h = t);
            const a = s && this.options.syncTouch, c = s && "touchend" === i.type && Math.abs(h) > 5;
            c && (h = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + h, Object.assign({
                programmatic: !1
            }, a ? {
                lerp: c ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }));
        }, this.onNativeScroll = ()=>{
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
                const t = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - t), this.emit();
            }
        }, window.lenisVersion = "1.0.42", t !== document.documentElement && t !== document.body || (t = window), this.options = {
            wrapper: t,
            content: e,
            wheelEventsTarget: i,
            eventsTarget: s,
            smoothWheel: o,
            syncTouch: n,
            syncTouchLerp: r,
            touchInertiaMultiplier: l,
            duration: h,
            easing: a,
            lerp: c,
            infinite: d,
            gestureOrientation: u,
            orientation: p,
            touchMultiplier: m,
            wheelMultiplier: v,
            autoResize: g,
            __experimental__naiveDimensions: S
        }, this.animate = new Animate, this.emitter = new Emitter, this.dimensions = new Dimensions({
            wrapper: t,
            content: e,
            autoResize: g
        }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = n || o, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new VirtualScroll(s, {
            touchMultiplier: m,
            wheelMultiplier: v
        }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1);
    }
    on(t, e) {
        return this.emitter.on(t, e);
    }
    off(t, e) {
        return this.emitter.off(t, e);
    }
    setScroll(t) {
        this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t;
    }
    resize() {
        this.dimensions.resize();
    }
    emit() {
        this.emitter.emit("scroll", this);
    }
    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
    }
    start() {
        this.isStopped && (this.isStopped = !1, this.reset());
    }
    stop() {
        this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset());
    }
    raf(t) {
        const e = t - (this.time || t);
        this.time = t, this.animate.advance(.001 * e);
    }
    scrollTo(e, { offset: i = 0, immediate: s = !1, lock: o = !1, duration: n = this.options.duration, easing: r = this.options.easing, lerp: l = !n && this.options.lerp, onComplete: h, force: a = !1, programmatic: c = !0 } = {}) {
        if (!this.isStopped && !this.isLocked || a) {
            if ([
                "top",
                "left",
                "start"
            ].includes(e)) e = 0;
            else if ([
                "bottom",
                "right",
                "end"
            ].includes(e)) e = this.limit;
            else {
                let t;
                if ("string" == typeof e ? t = document.querySelector(e) : (null == e ? void 0 : e.nodeType) && (t = e), t) {
                    if (this.options.wrapper !== window) {
                        const t = this.options.wrapper.getBoundingClientRect();
                        i -= this.isHorizontal ? t.left : t.top;
                    }
                    const s = t.getBoundingClientRect();
                    e = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
                }
            }
            if ("number" == typeof e) {
                if (e += i, e = Math.round(e), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e = t(0, e, this.limit), s) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void (null == h || h(this));
                if (!c) {
                    if (e === this.targetScroll) return;
                    this.targetScroll = e;
                }
                this.animate.fromTo(this.animatedScroll, e, {
                    duration: n,
                    easing: r,
                    lerp: l,
                    onStart: ()=>{
                        o && (this.isLocked = !0), this.isScrolling = !0;
                    },
                    onUpdate: (t, e)=>{
                        this.isScrolling = !0, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), c && (this.targetScroll = t), e || this.emit(), e && (this.reset(), this.emit(), null == h || h(this), this.__preventNextScrollEvent = !0, requestAnimationFrame(()=>{
                            delete this.__preventNextScrollEvent;
                        }));
                    }
                });
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
        return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
        return this.options.infinite ? (t = this.animatedScroll, e = this.limit, (t % e + e) % e) : this.animatedScroll;
        "TURBOPACK unreachable";
        var t, e;
    }
    get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
        return this.__isSmooth;
    }
    set isSmooth(t) {
        this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClassName("lenis-smooth", t));
    }
    get isScrolling() {
        return this.__isScrolling;
    }
    set isScrolling(t) {
        this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClassName("lenis-scrolling", t));
    }
    get isStopped() {
        return this.__isStopped;
    }
    set isStopped(t) {
        this.__isStopped !== t && (this.__isStopped = t, this.toggleClassName("lenis-stopped", t));
    }
    get isLocked() {
        return this.__isLocked;
    }
    set isLocked(t) {
        this.__isLocked !== t && (this.__isLocked = t, this.toggleClassName("lenis-locked", t));
    }
    get className() {
        let t = "lenis";
        return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t;
    }
    toggleClassName(t, e) {
        this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this);
    }
}; //# sourceMappingURL=lenis.cjs.js.map
}}),
}]);

//# sourceMappingURL=_efffe7d5._.js.map