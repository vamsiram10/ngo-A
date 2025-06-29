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
            url: "/aboutus"
        },
        {
            id: 2,
            label: "Our Work",
            url: "/ourwork",
            dialog: [
                {
                    id: 1,
                    title: "Volunteering",
                    path: "/"
                },
                {
                    id: 2,
                    title: "Youth Corner",
                    path: "/"
                },
                {
                    id: 3,
                    title: "Internship",
                    path: "/"
                }
            ]
        },
        {
            id: 3,
            label: "Events",
            url: "/sponsors"
        },
        {
            id: 4,
            label: "Contact Us",
            url: "/team",
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
"[project]/src/components/common/navbar/Navbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/navbar.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Navbar = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "z-[1000] fixed top-4 left-1/2 w-[90%] h-15 w-[60%] bg-white border-gray-200 rounded-full shadow-lg transition-all duration-700 -translate-x-1/2 border sm:top-7 lg:w-[70%] xl:w-[70%]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "absolute top-1/2 w-full -translate-y-1/2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex items-center justify-between px-4 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "pl-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/svg/AVASA.svg",
                                    alt: "logo",
                                    width: 54,
                                    height: 60
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                    lineNumber: 17,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute left-22 w-45 text-black text-xl sm:text-xl md:text-1xl",
                            children: "Avasa Foundation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-30 hidden items-center gap-6 font-medium md:flex",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].middle.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.url,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "relative text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-pink-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left text-medium",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                lineNumber: 29,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this),
                                        link.dialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "z-50 absolute top-full left-0 hidden flex-col mt-1 w-40 bg-white rounded-lg shadow-md border group-hover:flex",
                                            children: link.dialog.map((el)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: el.path,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "px-4 py-2 text-black hover:bg-gray-100",
                                                        children: el.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                        lineNumber: 38,
                                                        columnNumber: 25
                                                    }, this)
                                                }, el.id, false, {
                                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                    lineNumber: 37,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 35,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, link.id, true, {
                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center md:flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "relative px-4 py-2 text-white font-bold text-sm bg-gradient-to-r from-pink-500 to-pink-700 rounded-full border-2 border-pink-300 shadow-lg transition-all duration-[6000ms] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] hover:shadow-[0_0_100px_rgba(236,72,153,0.6)] hover:shadow-[0_0_150px_rgba(236,72,153,0.4)] hover:scale-110 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-pink-400 before:animate-ping before:transition-all before:duration-[6000ms] before:delay-[2000ms] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-pink-300 after:animate-ping after:transition-all after:duration-[6000ms] after:delay-[4000ms] [&>*:nth-child(3)]:absolute [&>*:nth-child(3)]:inset-0 [&>*:nth-child(3)]:rounded-full [&>*:nth-child(3)]:border-2 [&>*:nth-child(3)]:border-pink-200 [&>*:nth-child(3)]:animate-ping [&>*:nth-child(3)]:transition-all [&>*:nth-child(3)]:duration-[6000ms] [&>*:nth-child(3)]:delay-[6000ms]",
                                children: "Donate"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex flex-col justify-between w-[40px] h-[40px] relative right-2 top-[-4.5] transition-transform duration-[330ms] ease-out cursor-pointer ${isMenuOpen ? "rotate-[-45deg]" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-1/2 h-[5px] bg-pink-400 rounded-[5px] transition-transform duration-[330ms] ease-[cubic-bezier(0.54,-0.81,0.57,0.57)] origin-right ${isMenuOpen ? "rotate-[-90deg] translate-x-[-0.5px]" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-[5px] bg-pink-400 rounded-[5px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `self-end w-1/2 h-[5px] bg-pink-400 rounded-[5px] transition-transform duration-[330ms] ease-[cubic-bezier(0.54,-0.81,0.57,0.57)] origin-left ${isMenuOpen ? "rotate-[-90deg] translate-x-[-1.5px]" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "z-50 absolute top-full mt-3 px-4 py-4 w-full bg-white rounded-xl shadow-lg border md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].middle.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.url,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-black font-medium",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                lineNumber: 87,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this),
                                        link.dialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-4 mt-1 space-y-1",
                                            children: link.dialog.map((el)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: el.path,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm hover:text-black",
                                                        children: el.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                        lineNumber: 93,
                                                        columnNumber: 27
                                                    }, this)
                                                }, el.id, false, {
                                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                                    lineNumber: 92,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                            lineNumber: 90,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, link.id, true, {
                                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "relative px-4 py-2 text-white font-bold text-sm bg-gradient-to-r from-pink-500 to-pink-700 rounded-full border-2 border-pink-300 shadow-lg transition-all duration-[6000ms] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] hover:shadow-[0_0_100px_rgba(236,72,153,0.6)] hover:shadow-[0_0_150px_rgba(236,72,153,0.4)] hover:scale-110 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-pink-400 before:animate-ping before:transition-all before:duration-[6000ms] before:delay-[2000ms] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-pink-300 after:animate-ping after:transition-all after:duration-[6000ms] after:delay-[4000ms] [&>*:nth-child(3)]:absolute [&>*:nth-child(3)]:inset-0 [&>*:nth-child(3)]:rounded-full [&>*:nth-child(3)]:border-2 [&>*:nth-child(3)]:border-pink-200 [&>*:nth-child(3)]:animate-ping [&>*:nth-child(3)]:transition-all [&>*:nth-child(3)]:duration-[6000ms] [&>*:nth-child(3)]:delay-[6000ms]",
                                children: "Donate"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/navbar/Navbar.jsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/navbar/Navbar.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/navbar/Navbar.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_s(Navbar, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_06acb285._.js.map