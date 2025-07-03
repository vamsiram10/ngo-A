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
}]);

//# sourceMappingURL=src_components_utils_avasalogo_FlyingBirdLogo_jsx_27937fa7._.js.map