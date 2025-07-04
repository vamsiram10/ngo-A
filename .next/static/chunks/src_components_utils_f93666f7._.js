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
                gsap = __turbopack_context__.r("[project]/node_modules/gsap/index.js [app-client] (ecmascript)");
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
}]);

//# sourceMappingURL=src_components_utils_f93666f7._.js.map