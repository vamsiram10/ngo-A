(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MainGallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Set this to match your navbar's height (in px, rem, etc.)
// If your navbar is 80px tall, set offset = "80px"
const NAVBAR_HEIGHT = "80px"; // Change this value to match your navbar height
function MainGallery() {
    _s();
    const items = [
        "jelly-o brownie sweet",
        "Muffin jelly gingerbread",
        "sesame snaps chocolate",
        "Oat cake",
        "jujubes cheesecake",
        "Dragée pudding brownie",
        "Oat cake",
        "powder toffee",
        "pudding cheesecake",
        "toffee bear claw",
        "cake cookie croissant",
        "liquorice sweet roll",
        "chocolate marzipan",
        "danish dessert lollipop",
        "sugar plum dragée"
    ];
    const getBackgroundImage = (index)=>{
        const images = [
            "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc",
            "https://images.unsplash.com/photo-1422255198496-21531f12a6e8",
            "https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90",
            "https://images.unsplash.com/photo-1476097297040-79e9e1603142",
            "https://images.unsplash.com/photo-1464652149449-f3b8538144aa"
        ];
        return `${images[index % images.length]}?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=`;
    };
    // Add animation classes for each card
    const getItemClass = (index)=>`gallery__item gallery__item-animate`;
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Animate grid slide down on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainGallery.useEffect": ()=>{
            const grid = gridRef.current;
            if (grid) {
                grid.classList.add("slide-down-show");
            }
            // Intersection Observer for card animations on scroll
            if ("object" !== "undefined" && "IntersectionObserver" in window) {
                const observer = new window.IntersectionObserver({
                    "MainGallery.useEffect": (entries)=>{
                        entries.forEach({
                            "MainGallery.useEffect": (entry)=>{
                                if (entry.isIntersecting) {
                                    entry.target.classList.add("gallery__item-visible");
                                    observer.unobserve(entry.target);
                                }
                            }
                        }["MainGallery.useEffect"]);
                    }
                }["MainGallery.useEffect"], {
                    threshold: 0.2
                });
                cardRefs.current.forEach({
                    "MainGallery.useEffect": (ref)=>{
                        if (ref) observer.observe(ref);
                    }
                }["MainGallery.useEffect"]);
                // Cleanup
                return ({
                    "MainGallery.useEffect": ()=>{
                        cardRefs.current.forEach({
                            "MainGallery.useEffect": (ref)=>{
                                if (ref) observer.unobserve(ref);
                            }
                        }["MainGallery.useEffect"]);
                    }
                })["MainGallery.useEffect"];
            }
        }
    }["MainGallery.useEffect"], []);
    // Responsive styles for mobile/tablet, injected as a <style> tag
    const responsiveStyle = `
    @media (max-width: 900px) {
      .gallery__grid {
        gap: 16px !important;
        grid-template-columns: repeat(2, 1fr) !important;
        padding-left: 8px !important;
        padding-right: 8px !important;
      }
      .gallery__item {
        min-height: 90px !important;
        max-width: 100px !important;
        margin: 0 !important;
      }
      .gallery__title {
        left: 0 !important;
        font-size: 1.2rem !important;
        text-align: center !important;
      }
      .gallery__section {
        padding: 1rem 0.1rem 0.25rem 0.1rem !important;
      }
      .gallery__spacer {
        height: 0.7rem !important;
      }
      .gallery__item-details {
        padding: 6px !important;
        font-size: 0.7rem !important;
      }
      .gallery__item-index {
        font-size: 0.7rem !important;
      }
    }
    @media (max-width: 600px) {
      .gallery__grid {
        gap: 50px !important;
        grid-template-columns: 1fr !important;
        padding-left: 6px !important;
        padding-right: 6px !important;
      }
      .gallery__item {
        min-height: 48px !important;
        max-width: 70vw !important;
        margin: 0 !important;
      }
      .gallery__title {
        left: 0 !important;
        font-size: 0.9rem !important;
        text-align: center !important;
      }
      .gallery__section {
        padding: 0.5rem 0.05rem 0.15rem 0.05rem !important;
      }
      .gallery__item-details {
        padding: 3px !important;
        font-size: 0.6rem !important;
      }
      .gallery__item-index {
        font-size: 0.6rem !important;
      }
      .gallery__spacer {
        height: 0.5rem !important;
      }
    }
  `;
    // Animation styles for cards
    const cardAnimationStyle = `
    .gallery__item-animate {
      opacity: 0;
      transform: translateY(60px) scale(0.96);
      transition:
        opacity 0.7s cubic-bezier(.4,1.4,.6,1),
        transform 0.7s cubic-bezier(.4,1.4,.6,1);
      will-change: opacity, transform;
    }
    .gallery__item-visible {
      opacity: 1 !important;
      transform: translateY(0) scale(1) !important;
    }
    .slide-down-init {
      opacity: 0;
      transform: translateY(-160px);
      transition: opacity 0.7s cubic-bezier(.4,1.4,.6,1), transform 0.7s cubic-bezier(.4,1.4,.6,1);
    }
    .slide-down-show {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: cardAnimationStyle
            }, void 0, false, {
                fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveStyle
            }, void 0, false, {
                fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery",
                style: {
                    padding: "0",
                    marginTop: NAVBAR_HEIGHT,
                    backgroundColor: "black"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gallery__message",
                        children: "Sorry, your browser does not support CSS Grid. 😅"
                    }, void 0, false, {
                        fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "gallery__section",
                        style: {
                            height: "auto",
                            padding: "2rem 0.5rem 1rem 0.5rem",
                            backgroundColor: "black"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "gallery__title",
                                style: {
                                    marginBottom: "1rem",
                                    fontSize: "2rem",
                                    color: "white",
                                    position: "relative",
                                    left: "40rem"
                                },
                                children: "GALLERY"
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gallery__spacer",
                                style: {
                                    height: "1rem"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: gridRef,
                                className: "gallery__grid slide-down-init",
                                style: {
                                    gap: "36px",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    justifyItems: "center",
                                    paddingLeft: 0,
                                    paddingRight: 0
                                },
                                children: items.map((text, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: (el)=>cardRefs.current[index] = el,
                                        className: getItemClass(index),
                                        style: {
                                            backgroundImage: `url(${getBackgroundImage(index)})`,
                                            aspectRatio: "1 / 1",
                                            minHeight: "260px",
                                            maxWidth: "340px",
                                            width: "100%",
                                            margin: "0 auto",
                                            // Optional: stagger animation delay for initial load
                                            transitionDelay: `${index * 60}ms`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "gallery__overlay"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "gallery__item-details",
                                                style: {
                                                    padding: "22px",
                                                    fontSize: "1.25rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "gallery__item-index",
                                                        style: {
                                                            fontSize: "1.3rem",
                                                            paddingRight: "0.7em"
                                                        },
                                                        children: index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, this),
                                                    text
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/section/ourworksection/maingallery/MainGallery.jsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MainGallery, "/CivWqhwpA98c5SGDeigp0q4+cw=");
_c = MainGallery;
var _c;
__turbopack_context__.k.register(_c, "MainGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_section_ourworksection_maingallery_MainGallery_jsx_70d28ae3._.js.map