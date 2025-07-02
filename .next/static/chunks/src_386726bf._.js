(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/navbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const navLinks = {
    middle: [
        {
            id: 1,
            label: "About Us",
            url: "/aboutus",
            dialog: [
                {
                    id: 1,
                    title: "who we are ",
                    path: "/"
                },
                {
                    id: 2,
                    title: "what do we do",
                    path: "/"
                },
                {
                    id: 3,
                    title: "meet our team",
                    path: "/"
                }
            ]
        },
        {
            id: 2,
            label: "Our Work",
            url: "/ourwork",
            dialog: [
                {
                    id: 1,
                    title: "map location ",
                    path: "/"
                },
                {
                    id: 2,
                    title: "gallery",
                    path: "/ourwork"
                },
                {
                    id: 3,
                    title: "Past events",
                    path: "/ourwork/events"
                },
                {
                    id: 4,
                    title: "Upcoming events",
                    path: "/"
                }
            ]
        },
        {
            id: 3,
            label: "Join us",
            url: "/joinus",
            dialog: [
                {
                    id: 1,
                    title: "volunteering  ",
                    path: "/"
                },
                {
                    id: 2,
                    title: "internship",
                    path: "/"
                },
                {
                    id: 3,
                    title: "youth corner ",
                    path: "/"
                },
                {
                    id: 4,
                    title: "blogs",
                    path: "/"
                }
            ]
        },
        {
            id: 4,
            label: "Contact Us",
            url: "/contactus",
            dialog: [
                {
                    id: 1,
                    title: "Get in touch",
                    path: "/"
                },
                {
                    id: 2,
                    title: "FAQs",
                    path: "/"
                }
            ]
        }
    ],
    right: []
};
const __TURBOPACK__default__export__ = navLinks;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const OwlDarkModeToggle = ()=>{
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OwlDarkModeToggle.useEffect": ()=>{
            document.body.className = darkMode ? "dark" : "light";
        }
    }["OwlDarkModeToggle.useEffect"], [
        darkMode
    ]);
    const toggleMode = ()=>{
        const overlay = overlayRef.current;
        if (!overlay) return;
        overlay.className = "transition-overlay zoom-in";
        if (!darkMode) {
            requestAnimationFrame(()=>{
                overlay.classList.add("expand");
            });
            setTimeout(()=>setDarkMode(true), 1250);
        } else {
            overlay.classList.remove("expand");
            overlay.classList.add("shrink");
            setTimeout(()=>setDarkMode(false), 1250);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleMode,
                className: "jsx-e293324c2b02ec4d" + " " + "owl-toggle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64",
                        fill: "currentColor",
                        className: "jsx-e293324c2b02ec4d" + " " + ((darkMode ? "eye-closed hidden" : "eye-closed") || ""),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 24 C16 18, 24 18, 30 24",
                                stroke: "#000",
                                strokeWidth: "3",
                                fill: "none",
                                className: "jsx-e293324c2b02ec4d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M34 24 C40 18, 48 18, 54 24",
                                stroke: "#000",
                                strokeWidth: "3",
                                fill: "none",
                                className: "jsx-e293324c2b02ec4d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M14 36 Q20 38, 26 36",
                                stroke: "#000",
                                strokeWidth: "2.5",
                                fill: "none",
                                className: "jsx-e293324c2b02ec4d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M38 36 Q44 38, 50 36",
                                stroke: "#000",
                                strokeWidth: "2.5",
                                fill: "none",
                                className: "jsx-e293324c2b02ec4d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64",
                        fill: "currentColor",
                        className: "jsx-e293324c2b02ec4d" + " " + ((darkMode ? "eye-open" : "eye-open hidden") || ""),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 24 C16 18, 24 18, 30 24",
                                stroke: "#fff",
                                strokeWidth: "3",
                                fill: "none",
                                className: "jsx-e293324c2b02ec4d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M34 24 C40 18, 48 18, 54 24",
                                stroke: "#fff",
                                strokeWidth: "3",
                                fill: "none",
                                className: "jsx-e293324c2b02ec4d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "20",
                                cy: "36",
                                r: "10",
                                fill: "#fff",
                                className: "jsx-e293324c2b02ec4d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "20",
                                cy: "36",
                                r: "4",
                                fill: "#000",
                                className: "jsx-e293324c2b02ec4d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "44",
                                cy: "36",
                                r: "10",
                                fill: "#fff",
                                className: "jsx-e293324c2b02ec4d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "44",
                                cy: "36",
                                r: "4",
                                fill: "#000",
                                className: "jsx-e293324c2b02ec4d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e293324c2b02ec4d" + " " + "page-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "jsx-e293324c2b02ec4d",
                    children: "Welcome to my website"
                }, void 0, false, {
                    fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: overlayRef,
                className: "jsx-e293324c2b02ec4d" + " " + "transition-overlay zoom-in"
            }, void 0, false, {
                fileName: "[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e293324c2b02ec4d",
                children: "html,body{width:100%;height:100%;font-family:Segoe UI,sans-serif;transition:background-color .6s ease-in-out;overflow:hidden}body.light{color:#000;background-color:#fff}body.dark{color:#fff;background-color:#111}.owl-toggle{z-index:1002;cursor:pointer;background:0 0;border:none;width:10vw;max-width:60px;height:auto;position:fixed;top:2vh;left:2vw}.owl-toggle svg{width:100%;height:auto}.eye-open,.eye-closed{display:block}.hidden{display:none!important}h1{text-align:center;z-index:1;margin-top:10vh;font-size:clamp(1.5rem,4vw,3rem);position:relative}.transition-overlay{z-index:1000;pointer-events:none;transform-origin:50%;background-color:#000000b3;border-radius:50%;width:10vw;max-width:120px;height:10vw;max-height:120px;position:fixed;transform:scale(0)}.zoom-in{top:-15vh;left:100vw;transform:scale(0)}.expand{animation:2.5s ease-in forwards enterFromTopRight}.shrink{animation:2.5s ease-in forwards exitToBottomLeft}@keyframes enterFromTopRight{0%{top:-15vh;left:100vw;transform:scale(0)}30%{top:50%;left:50%;transform:translate(-50%,-50%)scale(.4)}to{top:50%;left:50%;transform:translate(-50%,-50%)scale(30)}}@keyframes exitToBottomLeft{0%{top:50%;left:50%;transform:translate(-50%,-50%)scale(30)}50%{top:50%;left:50%;transform:translate(-50%,-50%)scale(.4)}to{top:110vh;left:-10vw;transform:scale(0)}}@media screen and (width<=600px){.owl-toggle{width:14vw;max-width:50px}h1{font-size:6vw}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
};
_s(OwlDarkModeToggle, "t7jvxknnSN7MFHs87m47UPXINq8=");
_c = OwlDarkModeToggle;
const __TURBOPACK__default__export__ = OwlDarkModeToggle;
var _c;
__turbopack_context__.k.register(_c, "OwlDarkModeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/utils/transitionlink/TransitionLink.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TransitionLink": (()=>TransitionLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$react$2d$lenis$2f$dist$2f$react$2d$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@studio-freight/react-lenis/dist/react-lenis.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function addSlideRightOverlay() {
    const old = document.getElementById("page-transition-slide-right");
    if (old) old.remove();
    const overlay = document.createElement("div");
    overlay.id = "page-transition-slide-right";
    overlay.className = "page-transition-slide-right";
    overlay.style.background = "#fff";
    overlay.style.animationDuration = "0.7s";
    overlay.style.animationTimingFunction = "cubic-bezier(0.77, 0, 0.175, 1)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.overflow = "hidden";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = "9999";
    // SVG for a curved right edge (vertical curve)
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "32vw");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 32 100");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.right = "0";
    svg.style.width = "32vw";
    svg.style.height = "100%";
    svg.style.pointerEvents = "none";
    svg.style.zIndex = "10001";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // This path creates a curve on the right edge
    path.setAttribute("d", "M32,0 C0,25 0,75 32,100 L32,100 L32,0 Z");
    path.setAttribute("fill", "#fff");
    svg.appendChild(path);
    overlay.appendChild(svg);
    const img = document.createElement("img");
    img.src = "/svg/AVASA.svg";
    img.alt = "Page Transition Symbol";
    img.style.width = "80px";
    img.style.height = "80px";
    img.style.objectFit = "contain";
    img.style.display = "block";
    img.style.zIndex = "10002";
    overlay.appendChild(img);
    document.body.appendChild(overlay);
}
function removeSlideRightOverlay() {
    const overlay = document.getElementById("page-transition-slide-right");
    if (overlay) overlay.remove();
}
if ("object" !== "undefined" && typeof document !== "undefined") {
    if (!document.getElementById("page-transition-slide-right-style")) {
        const style = document.createElement("style");
        style.id = "page-transition-slide-right-style";
        style.innerHTML = `
      .page-transition-slide-right {
        pointer-events: none;
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: slideInFromRightCurved 0.7s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        overflow: hidden;
      }
      .page-transition-slide-right img {
        width: 80px;
        height: 80px;
        object-fit: contain;
        display: block;
        z-index: 10002;
      }
      .page-transition-slide-right svg {
        position: absolute;
        top: 0;
        right: 0;
        width: 32vw;
        height: 100%;
        z-index: 10001;
        pointer-events: none;
        display: block;
      }
      @keyframes slideInFromRightCurved {
        0% {
          transform: translateX(100%);
          opacity: 1;
        }
        100% {
          transform: translateX(0%);
          opacity: 1;
        }
      }
    `;
        document.head.appendChild(style);
    }
}
const TransitionLink = ({ children, href, ...props })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$react$2d$lenis$2f$dist$2f$react$2d$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    const handleTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TransitionLink.useCallback[handleTransition]": async (e)=>{
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || typeof href === "string" && (href.startsWith("http") || href.startsWith("mailto:"))) {
                return;
            }
            e.preventDefault();
            if (lenis) {
                await lenis.scrollTo(0, {
                    duration: 0.5,
                    easing: {
                        "TransitionLink.useCallback[handleTransition]": (t)=>1 - Math.pow(1 - t, 3)
                    }["TransitionLink.useCallback[handleTransition]"]
                });
                await sleep(20);
            }
            addSlideRightOverlay();
            await sleep(650);
            router.push(href);
            setTimeout(removeSlideRightOverlay, 500);
        }
    }["TransitionLink.useCallback[handleTransition]"], [
        router,
        href,
        lenis
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        href: href,
        onClick: handleTransition,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/utils/transitionlink/TransitionLink.jsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
};
_s(TransitionLink, "5lJulZI4bL2rr5Mwo6PQVKJ8oTQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$react$2d$lenis$2f$dist$2f$react$2d$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"]
    ];
});
_c = TransitionLink;
var _c;
__turbopack_context__.k.register(_c, "TransitionLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/navbar/Navbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$darkmodenavbar$2f$OwlDarkModeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/utils/darkmodenavbar/OwlDarkModeToggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$transitionlink$2f$TransitionLink$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/utils/transitionlink/TransitionLink.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const Navbar = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hideNav, setHideNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Get current pathname to detect route changes
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Close mobile menu automatically after route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setIsMenuOpen(false);
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    // Helper to close menu on mobile nav link click
    // We'll use a callback to ensure the menu closes after navigation/transition
    const handleMobileNavClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[handleMobileNavClick]": ()=>{
            // Delay closing to after navigation/transition
            setTimeout({
                "Navbar.useCallback[handleMobileNavClick]": ()=>setIsMenuOpen(false)
            }["Navbar.useCallback[handleMobileNavClick]"], 700); // match transition duration
        }
    }["Navbar.useCallback[handleMobileNavClick]"], []);
    // Hide navbar completely when scrolling down, show when scrolling up
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            let ticking = false;
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                    const currentScrollY = window.scrollY;
                    if (!ticking) {
                        window.requestAnimationFrame({
                            "Navbar.useEffect.handleScroll": ()=>{
                                if (currentScrollY > lastScrollY.current && currentScrollY > 1) {
                                    // Scrolling down - hide nav completely
                                    setHideNav(true);
                                } else if (currentScrollY < lastScrollY.current) {
                                    // Scrolling up - show nav
                                    setHideNav(false);
                                }
                                lastScrollY.current = currentScrollY;
                                ticking = false;
                            }
                        }["Navbar.useEffect.handleScroll"]);
                        ticking = true;
                    }
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // Custom wrapper for TransitionLink to ensure menu closes after navigation
    const MobileTransitionLink = ({ href, children, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$transitionlink$2f$TransitionLink$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
            href: href,
            ...props,
            onClick: (e)=>{
                if (props.onClick) props.onClick(e);
                handleMobileNavClick();
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
            lineNumber: 60,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `z-[1000] fixed left-1/2 w-[90%] h-15 w-[60%] bg-white border-gray-200 rounded-full shadow-lg transition-transform duration-700 -translate-x-1/2 border sm:top-7 lg:w-[70%] xl:w-[70%] ${hideNav ? "-translate-y-[150%]" : "top-4 translate-y-0"}`,
        style: {
            top: hideNav ? 0 : undefined,
            transitionProperty: "transform, box-shadow, background-color, top",
            willChange: "transform, top"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "absolute top-1/2 w-full -translate-y-1/2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex items-center justify-between px-4 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$transitionlink$2f$TransitionLink$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                href: "/",
                                className: "pl-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/svg/AVASA.svg",
                                    alt: "logo",
                                    width: 38,
                                    height: 40,
                                    className: "w-[40px] h-[43px] h-[58.5px] sm:w-[54px]",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute left-17.5 w-45 text-black text-base text-lg sm:left-22 md:text-xl",
                            children: "Avasa Foundation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-30 hidden items-center gap-6 font-medium md:flex",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].middle.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$transitionlink$2f$TransitionLink$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                            href: link.url,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "relative text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-pink-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left text-medium",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this),
                                        link.dialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "z-50 absolute top-full left-0 hidden flex-col mt-1 w-40 bg-white rounded-lg shadow-md border group-hover:flex",
                                            children: link.dialog.map((el)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$transitionlink$2f$TransitionLink$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                                    href: el.path,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "px-4 py-2 text-black hover:bg-gray-100",
                                                        children: el.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                        lineNumber: 120,
                                                        columnNumber: 25
                                                    }, this)
                                                }, el.id, false, {
                                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                    lineNumber: 119,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, link.id, true, {
                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center md:flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$transitionlink$2f$TransitionLink$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                href: "/donate",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "relative px-4 py-2 text-white font-bold text-sm bg-gradient-to-r from-pink-500 to-pink-700 rounded-full border-2 border-pink-300 shadow-lg transition-all duration-[6000ms] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] hover:shadow-[0_0_100px_rgba(236,72,153,0.6)] hover:shadow-[0_0_150px_rgba(236,72,153,0.4)] hover:scale-110 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-pink-400 before:animate-ping before:transition-all before:duration-[6000ms] before:delay-[2000ms] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-pink-300 after:animate-ping after:transition-all after:duration-[6000ms] after:delay-[4000ms] [&>*:nth-child(3)]:absolute [&>*:nth-child(3)]:inset-0 [&>*:nth-child(3)]:rounded-full [&>*:nth-child(3)]:border-2 [&>*:nth-child(3)]:border-pink-200 [&>*:nth-child(3)]:animate-ping [&>*:nth-child(3)]:transition-all [&>*:nth-child(3)]:duration-[6000ms] [&>*:nth-child(3)]:delay-[6000ms]",
                                    children: "Donate"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex flex-col justify-between w-[28px] h-[28px] relative right-3 top-[-7px] transition-transform duration-[330ms] ease-out cursor-pointer ${isMenuOpen ? "rotate-[-45deg]" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-1/2 h-[3px] bg-pink-400 rounded-[3px] transition-transform duration-[330ms] ease-[cubic-bezier(0.54,-0.81,0.57,0.57)] origin-right ${isMenuOpen ? "rotate-[-90deg] translate-x-[-0.5px]" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-[3px] bg-pink-400 rounded-[3px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `self-end w-1/2 h-[3px] bg-pink-400 rounded-[3px] transition-transform duration-[330ms] ease-[cubic-bezier(0.54,-0.81,0.57,0.57)] origin-left ${isMenuOpen ? "rotate-[-90deg] translate-x-[-1.5px]" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "z-50 absolute top-full mt-3 px-4 py-4 w-full bg-white rounded-xl shadow-lg border md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].middle.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileTransitionLink, {
                                            href: link.url,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-black font-medium",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                lineNumber: 171,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this),
                                        link.dialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-4 mt-1 space-y-1",
                                            children: link.dialog.map((el)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileTransitionLink, {
                                                    href: el.path,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm hover:text-black",
                                                        children: el.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                        lineNumber: 177,
                                                        columnNumber: 27
                                                    }, this)
                                                }, el.id, false, {
                                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                    lineNumber: 176,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 174,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, link.id, true, {
                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileTransitionLink, {
                                    href: "/donate",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "relative px-16 py-2 w-full max-w-[30rem] text-white font-bold text-sm tracking-widest bg-gradient-to-r from-pink-500 to-pink-700 rounded-none border-2 border-pink-300 shadow-lg transition-all duration-[6000ms] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] hover:shadow-[0_0_100px_rgba(236,72,153,0.6)] hover:shadow-[0_0_150px_rgba(236,72,153,0.4)] hover:scale-110 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 before:absolute before:inset-0 before:rounded-none before:border-2 before:border-pink-400 before:animate-ping before:transition-all before:duration-[6000ms] before:delay-[2000ms] after:absolute after:inset-0 after:rounded-none after:border-2 after:border-pink-300 after:animate-ping after:transition-all after:duration-[6000ms] after:delay-[4000ms] [&>*:nth-child(3)]:absolute [&>*:nth-child(3)]:inset-0 [&>*:nth-child(3)]:rounded-none [&>*:nth-child(3)]:border-2 [&>*:nth-child(3)]:border-pink-200 [&>*:nth-child(3)]:animate-ping [&>*:nth-child(3)]:transition-all [&>*:nth-child(3)]:duration-[6000ms] [&>*:nth-child(3)]:delay-[6000ms] uppercase md:max-w-[32rem]",
                                        children: "Donate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                        lineNumber: 188,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                        lineNumber: 167,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/navbar/Navbar.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
};
_s(Navbar, "z9MMCIf84koA7Efaz9hXe+JgMaQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/footer/Footer.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Footer = ()=>{
    _s();
    const [currentYear, setCurrentYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2024);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            setCurrentYear(new Date().getFullYear());
            setIsVisible(true);
        }
    }["Footer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "overflow-hidden relative px-6 py-12 text-white bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl sm:px-8 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 relative flex flex-col gap-6 gap-8 mx-auto max-w-6xl lg:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-center lg:items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-4 text-lg font-bold tracking-wide text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text drop-shadow sm:text-xl lg:text-lg",
                                children: "🌟 Follow Us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-4 sm:space-x-6",
                                children: [
                                    {
                                        href: "https://instagram.com",
                                        src: "instagram",
                                        color: "#ec4899",
                                        emoji: "📸"
                                    },
                                    {
                                        href: "https://twitter.com",
                                        src: "twitter",
                                        color: "#1da1f2",
                                        emoji: "🐦"
                                    },
                                    {
                                        href: "https://youtube.com",
                                        src: "youtube",
                                        color: "#ff0000",
                                        emoji: "📺"
                                    },
                                    {
                                        href: "https://facebook.com",
                                        src: "facebook",
                                        color: "#1877f3",
                                        emoji: "👥"
                                    },
                                    {
                                        href: "https://linkedin.com",
                                        src: "linkedin",
                                        color: "#0a66c2",
                                        emoji: "💼"
                                    }
                                ].map(({ href, src, color, emoji })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: src
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${src}.svg`,
                                                        alt: src,
                                                        className: "w-7 h-7 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow sm:w-8 lg:w-7",
                                                        style: {
                                                            // Make the icon white
                                                            filter: "invert(1) brightness(2)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                                                        lineNumber: 64,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute text-xs opacity-0 transition-opacity duration-300 -top-2 -right-2 group-hover:opacity-100",
                                                        children: emoji
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, src, true, {
                                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-center lg:items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-4 text-lg font-bold tracking-wide text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text drop-shadow sm:text-xl lg:mt-0",
                                children: "🚀 Quick Links"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-wrap justify-center gap-3 text-sm font-medium text-left space-y-2 lg:flex-col",
                                children: [
                                    {
                                        name: "About Us",
                                        icon: "ℹ️",
                                        href: "/aboutus"
                                    },
                                    {
                                        name: "Our Work",
                                        icon: "🛠️",
                                        href: "/ourwork"
                                    },
                                    {
                                        name: "Join us",
                                        icon: "📞",
                                        href: "/joinus"
                                    },
                                    {
                                        name: "Contact Us",
                                        icon: "🔒",
                                        href: "/contactus"
                                    }
                                ].map(({ name, icon, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: href,
                                            className: "flex items-center gap-2 text-white transition-all duration-300 hover:text-pink-400 group-hover:translate-x-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/footer/Footer.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this),
                                                name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/common/footer/Footer.jsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    }, name, false, {
                                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-center lg:items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-4 text-lg font-bold tracking-wide text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text drop-shadow sm:text-xl lg:mt-0",
                                children: "📞 Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-center lg:text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 mb-2 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "📧"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            "Email:",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:support@example.com",
                                                className: "transition-colors underline hover:text-pink-400 hover:scale-105",
                                                children: "aneesh.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-start gap-2 mb-4 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "📍"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            "Address:",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-gray-300",
                                                children: [
                                                    "Hope Foundation, 123 Harmony Lane,",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Green Park, New Delhi, 110016, India"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "relative px-6 py-2 w-40 text-white font-bold text-xs bg-gradient-to-r from-pink-500 to-pink-700 rounded-none border-2 border-pink-300 shadow-lg transition-all duration-[6000ms] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] hover:shadow-[0_0_100px_rgba(236,72,153,0.6)] hover:shadow-[0_0_150px_rgba(236,72,153,0.4)] hover:scale-110 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 before:absolute before:inset-0 before:rounded-none before:border-2 before:border-pink-400 before:animate-ping before:transition-all before:duration-[6000ms] before:delay-[2000ms] after:absolute after:inset-0 after:rounded-none after:border-2 after:border-pink-300 after:animate-ping after:transition-all after:duration-[6000ms] after:delay-[4000ms] [&>*:nth-child(3)]:absolute [&>*:nth-child(3)]:inset-0 [&>*:nth-child(3)]:rounded-none [&>*:nth-child(3)]:border-2 [&>*:nth-child(3)]:border-pink-200 [&>*:nth-child(3)]:animate-ping [&>*:nth-child(3)]:transition-all [&>*:nth-child(3)]:duration-[6000ms] [&>*:nth-child(3)]:delay-[6000ms]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "z-10 relative",
                                        children: "DONATE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/footer/Footer.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 relative mt-12 pt-6 text-center text-sm text-gray-400 border-t border-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-pink-400",
                        children: "Avasa Foundation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    " ",
                    "© ",
                    new Date().getFullYear(),
                    " — All rights reserved.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center gap-1 mt-2 text-xs text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Registered NGO: Hope Foundation, Reg. No. 123456789"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "123 Harmony Lane, Green Park, New Delhi, 110016, India"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/footer/Footer.jsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/footer/Footer.jsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/footer/Footer.jsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/footer/Footer.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(Footer, "gwuTBQty0/fL9AwCR3IGJdI4oRo=");
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_386726bf._.js.map