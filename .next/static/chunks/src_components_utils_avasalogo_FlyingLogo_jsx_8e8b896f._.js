(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/utils/avasalogo/FlyingLogo.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FlyingLogo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FlyingLogo() {
    _s();
    const logoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlyingLogo.useEffect": ()=>{
            // Check if the animation is being applied
            const logo = logoRef.current;
            if (logo) {
                const computedStyle = window.getComputedStyle(logo);
                const animationName = computedStyle.getPropertyValue("animation-name");
                if (animationName !== "flyLogo") {
                    // If not animating, force reflow and re-apply class
                    logo.classList.remove("flying-logo");
                    // Force reflow
                    void logo.offsetWidth;
                    logo.classList.add("flying-logo");
                }
            }
        }
    }["FlyingLogo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-cbfb14b4f3212d15" + " " + "logo-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: logoRef,
                src: "/svg/AVASA.svg",
                alt: "Avasa Logo",
                width: 100,
                height: 100,
                className: "flying-logo",
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/components/utils/avasalogo/FlyingLogo.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "cbfb14b4f3212d15",
                children: ".logo-container.jsx-cbfb14b4f3212d15{z-index:1000;width:100px;height:100px;position:absolute;top:20%;left:-10%}.flying-logo.jsx-cbfb14b4f3212d15{width:100%;height:100%;animation:5s ease-in-out infinite flyLogo}@keyframes flyLogo{0%{opacity:0;transform:translate(0)translateY(0)scale(1)rotate(0)}10%{opacity:1}50%{opacity:1;transform:translate(80vw,-10vh)scale(1.2)rotate(360deg)}90%{opacity:1}to{opacity:0;transform:translate(100vw,-20vh)scale(.8)rotate(720deg)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/utils/avasalogo/FlyingLogo.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(FlyingLogo, "DAkIFOADNr+gqnsIUDfbPs0mwyc=");
_c = FlyingLogo;
var _c;
__turbopack_context__.k.register(_c, "FlyingLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_utils_avasalogo_FlyingLogo_jsx_8e8b896f._.js.map