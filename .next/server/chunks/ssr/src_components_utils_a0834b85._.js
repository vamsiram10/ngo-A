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
const FlyingBirdLogo = ({ primaryColor = "#EC4899", accentColor = "#F9A8D4", beakColor = "#F59E42", eyeColor = "#222", style = {}, className = "", width = 180, height = 120, absolute = false, zIndex = 1 })=>{
    const leftWingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightWingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const birdGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shadowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const baseSvgWidth = 300;
    const baseSvgHeight = 200;
    const [bounceFrame, setBounceFrame] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const animate = ()=>{
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
        };
        raf = requestAnimationFrame(animate);
        return ()=>raf && cancelAnimationFrame(raf);
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 10,
                    pointerEvents: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 149,
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
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 157,
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
                                lineNumber: 165,
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
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "228,80 250,88 228,92",
                                fill: beakColor,
                                stroke: "#EAB308",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "215",
                                cy: "80",
                                r: "4.5",
                                fill: eyeColor
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "217",
                                cy: "79",
                                r: "1.2",
                                fill: "#fff"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/avasalogo/FlyingBirdLogo.jsx",
                                lineNumber: 189,
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
                                lineNumber: 190,
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
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "tagShadow",
                                    x: "0",
                                    y: "0",
                                    width: "200%",
                                    height: "200%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: server404.split("").map((char, i)=>{
                                    const fontSize = 18;
                                    const totalLen = server404.length;
                                    const charWidth = fontSize * 0.62;
                                    const textTotalWidth = charWidth * totalLen;
                                    const startX = tagX + (tagWidth - textTotalWidth) / 2;
                                    const bounceY = getBounceY(i, bounceFrame, 7, 0.18, 0);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
const __TURBOPACK__default__export__ = FlyingBirdLogo;
}}),
"[project]/src/components/utils/roundedpages/HomeEvent.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
const CAROUSEL_RADIUS = 400;
const ITEM_WIDTH = 260;
const ITEM_HEIGHT = 340;
const carouselData = [
    {
        title: "Paris",
        num: "01",
        img: "https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g="
    },
    {
        title: "Warsaw",
        num: "02",
        img: "https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY="
    },
    {
        title: "Madrid",
        num: "03",
        img: "https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I="
    },
    {
        title: "Sydney",
        num: "04",
        img: "https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs="
    },
    {
        title: "Istanbul",
        num: "05",
        img: "https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0="
    },
    {
        title: "Prague",
        num: "06",
        img: "https://media.istockphoto.com/id/1299954175/it/foto/villa-cubica-moderna.jpg?s=612x612&w=0&k=20&c=DhGhb3c1E3DW_fbrWJ_R_Zh0Lbwu6syFeRLsKlZ9no8="
    },
    {
        title: "Munich",
        num: "07",
        img: "https://media.istockphoto.com/id/926689776/it/foto/vista-ad-angolo-basso-dei-grattacieli-di-new-york.jpg?s=612x612&w=0&k=20&c=DmEB0Ty7ZwDnBoU5SuA8FNevOp4G1UcECw5aS4vA9A8="
    },
    {
        title: "Venice",
        num: "08",
        img: "https://media.istockphoto.com/id/1191376167/it/foto/villa-dellisola.jpg?s=612x612&w=0&k=20&c=PKslWo4FdbjinohKQlK_oWL34jqAsnzMTdy2bxEAf-I="
    },
    {
        title: "Oslo",
        num: "09",
        img: "https://media.istockphoto.com/id/184316397/it/foto/londra-edifici-aziendali.jpg?s=612x612&w=0&k=20&c=XqrRxEPzFnwRFk7PQrCiu9-FPfCTPyMe5BKKaxYXCs8="
    },
    {
        title: "London",
        num: "10",
        img: "https://media.istockphoto.com/id/184619832/it/foto/distretto-finanziario-al-crepuscolo-londra.jpg?s=612x612&w=0&k=20&c=RAThrJOBY6vhlT6-kQpu9-9jLEzWToYfdw46S8B0Mu0="
    }
];
const HomeEvent = ()=>{
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursor2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let progress = 0;
        let startX = 0;
        let isDragging = false;
        let animationFrameId = null;
        const $carousel = carouselRef.current;
        const $items = $carousel ? Array.from($carousel.querySelectorAll(".carousel-item")) : [];
        const $cursors = [
            cursorRef.current,
            cursor2Ref.current
        ].filter(Boolean);
        const displayItems = ()=>{
            const n = $items.length;
            const theta = 360 / n;
            for(let i = 0; i < n; i++){
                const angle = theta * i + progress;
                const item = $items[i];
                item.style.transform = `rotateY(${angle}deg) translateZ(${CAROUSEL_RADIUS}px)`;
                item.style.zIndex = Math.round(1000 - Math.abs((angle % 360 + 360) % 360 - 180));
                item.style.opacity = Math.abs((angle % 360 + 360) % 360 - 180) < 90 ? 1 : 0.5;
            }
        };
        const animate = ()=>{
            displayItems();
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        const handlePointerDown = (e)=>{
            isDragging = true;
            startX = e.touches ? e.touches[0].clientX : e.clientX;
        };
        const handlePointerMove = (e)=>{
            let clientX, clientY;
            if (e.touches && e.touches.length) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }
            $cursors.forEach(($cursor)=>{
                if ($cursor) {
                    $cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
                }
            });
            if (!isDragging) return;
            const x = e.touches ? e.touches[0].clientX : e.clientX;
            const dx = x - startX;
            progress += dx * 0.3;
            startX = x;
        };
        const handlePointerUp = ()=>{
            isDragging = false;
        };
        const handleWheel = (e)=>{
            progress += e.deltaY * 0.3;
        };
        $items.forEach((item, i)=>{
            item.onclick = ()=>{
                progress = -i * (360 / $items.length);
            };
        });
        window.addEventListener("mousedown", handlePointerDown);
        window.addEventListener("mousemove", handlePointerMove);
        window.addEventListener("mouseup", handlePointerUp);
        window.addEventListener("touchstart", handlePointerDown);
        window.addEventListener("touchmove", handlePointerMove);
        window.addEventListener("touchend", handlePointerUp);
        window.addEventListener("wheel", handleWheel, {
            passive: false
        });
        return ()=>{
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            window.removeEventListener("mousedown", handlePointerDown);
            window.removeEventListener("mousemove", handlePointerMove);
            window.removeEventListener("mouseup", handlePointerUp);
            window.removeEventListener("touchstart", handlePointerDown);
            window.removeEventListener("touchmove", handlePointerMove);
            window.removeEventListener("touchend", handlePointerUp);
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "carousel",
                ref: carouselRef,
                style: {
                    perspective: "1200px",
                    width: "100%",
                    height: "500px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: carouselData.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "carousel-item",
                        style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: `${ITEM_WIDTH}px`,
                            height: `${ITEM_HEIGHT}px`,
                            transform: `rotateY(${360 / carouselData.length * idx}deg) translateZ(${CAROUSEL_RADIUS}px)`,
                            transformStyle: "preserve-3d",
                            transition: "transform 0.5s cubic-bezier(.17,.67,.83,.67)",
                            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                            borderRadius: "30px",
                            background: "rgba(255,255,255,0.15)",
                            backdropFilter: "blur(4px)",
                            WebkitBackdropFilter: "blur(4px)",
                            border: "1px solid rgba(255,255,255,0.18)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            transformOrigin: `center center -${CAROUSEL_RADIUS}px`,
                            cursor: "pointer",
                            userSelect: "none",
                            pointerEvents: "auto",
                            zIndex: 1000 - Math.abs(idx - Math.floor(carouselData.length / 2))
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "carousel-box",
                            style: {
                                width: "90%",
                                height: "90%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "rgba(255,255,255,0.25)",
                                borderRadius: "20px",
                                boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.17)",
                                padding: "20px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "title",
                                    style: {
                                        fontWeight: "bold",
                                        fontSize: "1.5rem",
                                        marginBottom: "0.5rem",
                                        color: "#222",
                                        textAlign: "center"
                                    },
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/utils/roundedpages/HomeEvent.jsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "num",
                                    style: {
                                        fontWeight: "bold",
                                        fontSize: "1.2rem",
                                        marginBottom: "1rem",
                                        color: "#666",
                                        textAlign: "center"
                                    },
                                    children: item.num
                                }, void 0, false, {
                                    fileName: "[project]/src/components/utils/roundedpages/HomeEvent.jsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.img,
                                    alt: item.title,
                                    style: {
                                        width: "100%",
                                        height: "180px",
                                        objectFit: "cover",
                                        borderRadius: "15px",
                                        marginBottom: "1rem",
                                        boxShadow: "0 2px 8px 0 rgba(31, 38, 135, 0.17)"
                                    },
                                    draggable: false
                                }, void 0, false, {
                                    fileName: "[project]/src/components/utils/roundedpages/HomeEvent.jsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/utils/roundedpages/HomeEvent.jsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this)
                    }, item.num, false, {
                        fileName: "[project]/src/components/utils/roundedpages/HomeEvent.jsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/utils/roundedpages/HomeEvent.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cursor",
                ref: cursorRef,
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.1)",
                    pointerEvents: "none",
                    zIndex: 9999,
                    mixBlendMode: "multiply",
                    transform: "translate(-100px, -100px)",
                    transition: "background 0.2s"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/utils/roundedpages/HomeEvent.jsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cursor cursor2",
                ref: cursor2Ref,
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.05)",
                    pointerEvents: "none",
                    zIndex: 9998,
                    mixBlendMode: "multiply",
                    transform: "translate(-100px, -100px)",
                    transition: "background 0.2s"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/utils/roundedpages/HomeEvent.jsx",
                lineNumber: 284,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = HomeEvent;
}}),

};

//# sourceMappingURL=src_components_utils_a0834b85._.js.map