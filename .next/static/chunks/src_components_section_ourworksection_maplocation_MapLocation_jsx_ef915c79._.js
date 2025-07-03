(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/section/ourworksection/maplocation/MapLocation.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
;
// All changes for event location are now written in one place below.
// To update the event, change the values in this EVENT_LOCATION object only.
// Update the name, coordinates, popup content, and date as needed.
const EVENT_LOCATION = {
    id: "event-location-2025",
    name: "Event Location",
    coords: [
        26.35,
        73.05
    ],
    popup: `<b>Event Location</b><br/>Date: 2024-07-15`,
    isEvent: true
};
// The rest of the locations and constants remain unchanged.
const AVASA_ICON_URL = "/svg/AVASA.svg";
const FIXED_LOCATION = {
    id: "fixed-location",
    name: "present AVASA Location",
    coords: [
        26.33171558001394,
        73.04491042494395
    ],
    iconUrl: AVASA_ICON_URL,
    popup: "<b>present AVASA Location</b>"
};
const OTHER_LOCATIONS = [
    {
        id: "random-location-1",
        name: "Random Location 1",
        coords: [
            27.1769,
            75.9597
        ],
        iconUrl: AVASA_ICON_URL,
        popup: "<b>Random Location 1</b>"
    },
    {
        id: "random-location-2",
        name: "Random Location 2",
        coords: [
            26.32,
            73.03
        ],
        iconUrl: AVASA_ICON_URL,
        popup: "<b>Random Location 2</b>"
    }
];
const FIXED_ICON_SIZE = [
    50,
    50
];
const FIXED_ICON_ANCHOR = [
    32,
    64
];
const FIXED_POPUP_ANCHOR = [
    0,
    -50
];
const OTHER_ICON_SIZE = [
    32,
    32
];
const OTHER_ICON_ANCHOR = [
    16,
    32
];
const OTHER_POPUP_ANCHOR = [
    0,
    -32
];
const EVENT_ICON_SIZE = [
    40,
    40
];
const EVENT_ICON_ANCHOR = [
    20,
    40
];
const EVENT_POPUP_ANCHOR = [
    0,
    -40
];
const MapLocation = ()=>{
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fixedPopupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapLocation.useEffect": ()=>{
            let mapInstance = null;
            let markerRefs = [];
            let fixedMarker = null;
            let animationTimeouts = [];
            function loadScript(src) {
                return new Promise({
                    "MapLocation.useEffect.loadScript": (resolve, reject)=>{
                        if (document.querySelector(`script[src="${src}"]`)) {
                            resolve();
                            return;
                        }
                        const script = document.createElement("script");
                        script.src = src;
                        script.async = true;
                        script.onload = resolve;
                        script.onerror = reject;
                        document.body.appendChild(script);
                    }
                }["MapLocation.useEffect.loadScript"]);
            }
            function loadCSS(href) {
                return new Promise({
                    "MapLocation.useEffect.loadCSS": (resolve, reject)=>{
                        if (document.querySelector(`link[href="${href}"]`)) {
                            resolve();
                            return;
                        }
                        const link = document.createElement("link");
                        link.rel = "stylesheet";
                        link.href = href;
                        link.crossOrigin = "";
                        link.onload = resolve;
                        link.onerror = reject;
                        document.head.appendChild(link);
                    }
                }["MapLocation.useEffect.loadCSS"]);
            }
            const leafletJsCdn = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
            const leafletCssCdn = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
            const initialCoords = FIXED_LOCATION.coords;
            if (mapRef.current) {
                mapRef.current.removeAttribute("style");
            }
            Promise.all([
                loadScript(leafletJsCdn),
                loadCSS(leafletCssCdn)
            ]).then({
                "MapLocation.useEffect": ()=>{
                    if (!window.L || !mapRef.current) return;
                    const L = window.L;
                    if (mapRef.current._leaflet_id) {
                        try {
                            L.map(mapRef.current).remove();
                        } catch (e) {}
                    }
                    mapInstance = L.map(mapRef.current, {
                        zoomControl: true,
                        attributionControl: true,
                        center: initialCoords,
                        zoom: 15
                    });
                    mapInstance.setView(initialCoords, 15);
                    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(mapInstance);
                    // Only animate from fixed location to event location and back to fixed location
                    function animateMapToLocations(locations, delay = 1200) {
                        if (!mapInstance) return;
                        // Only use fixed and event locations
                        let allLocations = [
                            {
                                ...FIXED_LOCATION,
                                zoom: 15
                            },
                            {
                                ...EVENT_LOCATION,
                                zoom: 15
                            },
                            {
                                ...FIXED_LOCATION,
                                zoom: 15
                            }
                        ];
                        let i = 0;
                        function flyNext() {
                            if (i >= allLocations.length) {
                                return;
                            }
                            const loc = allLocations[i];
                            mapInstance.flyTo(loc.coords, loc.zoom || 15, {
                                animate: true,
                                duration: 1.2
                            });
                            i++;
                            animationTimeouts.push(setTimeout(flyNext, delay));
                        }
                        flyNext();
                    }
                    function addMarkerWithIcon(location, openPopupImmediately = false, isFixedLocation = false) {
                        const popupId = `popup-${location.id || location.name.replace(/\s+/g, "-").toLowerCase()}`;
                        if (location.isEvent) {
                            const eventDivIcon = L.divIcon({
                                className: "blinking-black-marker",
                                iconSize: EVENT_ICON_SIZE,
                                iconAnchor: EVENT_ICON_ANCHOR,
                                popupAnchor: EVENT_POPUP_ANCHOR,
                                html: `
              <div class="event-marker-outer">
                <div class="event-marker-inner"></div>
              </div>
            `
                            });
                            const marker = L.marker(location.coords, {
                                icon: eventDivIcon
                            }).addTo(mapInstance);
                            const popupHtml = location.popup && !location.popup.includes(`id="`) ? `<div id="${popupId}">${location.popup}</div>` : location.popup || `<div id="${popupId}"><b>${location.name}</b></div>`;
                            marker.bindPopup(popupHtml, {
                                autoClose: false,
                                closeOnClick: false,
                                closeButton: false,
                                className: "event-popup"
                            });
                            markerRefs.push(marker);
                            const styleId = "event-leaflet-marker-style";
                            if (!document.getElementById(styleId)) {
                                const style = document.createElement("style");
                                style.id = styleId;
                                style.innerHTML = `
              .blinking-black-marker .event-marker-outer {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #fff;
                border: 2.5px solid #111;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                position: relative;
                animation: event-blink 0.7s linear infinite;
              }
              .blinking-black-marker .event-marker-inner {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #111;
                box-shadow: 0 0 0 8px rgba(0,0,0,0.15);
              }
              @keyframes event-blink {
                0% { box-shadow: 0 0 0 10px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.15);}
                50% { box-shadow: 0 0 0 22px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.15);}
                100% { box-shadow: 0 0 0 10px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.15);}
              }
              .leaflet-popup.event-popup {
                pointer-events: none;
                margin-top: -10px;
              }
              .leaflet-popup.event-popup .leaflet-popup-content-wrapper {
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                border: 1.5px solid #111;
              }
              .leaflet-popup.event-popup .leaflet-popup-close-button {
                display: none;
              }
            `;
                                document.head.appendChild(style);
                            }
                            if (openPopupImmediately) {
                                marker.openPopup();
                                setTimeout({
                                    "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                        const popupEl = document.querySelector(`.leaflet-popup[id^="${popupId}"], .leaflet-popup`);
                                        if (popupEl) {
                                            popupEl.classList.add("event-popup");
                                        }
                                    }
                                }["MapLocation.useEffect.addMarkerWithIcon"], 100);
                            }
                            marker.on("click", {
                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                    markerBounce(marker);
                                }
                            }["MapLocation.useEffect.addMarkerWithIcon"]);
                            return;
                        }
                        const isFixed = location.id === FIXED_LOCATION.id;
                        const iconSize = isFixed ? FIXED_ICON_SIZE : OTHER_ICON_SIZE;
                        const iconAnchor = isFixed ? FIXED_ICON_ANCHOR : OTHER_ICON_ANCHOR;
                        const popupAnchor = isFixed ? FIXED_POPUP_ANCHOR : OTHER_POPUP_ANCHOR;
                        if (location.iconUrl) {
                            const testImg = new window.Image();
                            testImg.src = location.iconUrl;
                            testImg.onload = ({
                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                    const customIcon = L.icon({
                                        iconUrl: location.iconUrl,
                                        iconSize,
                                        iconAnchor,
                                        popupAnchor,
                                        className: isFixedLocation ? "blinking-fixed-marker" : ""
                                    });
                                    const marker = L.marker(location.coords, {
                                        icon: customIcon
                                    }).addTo(mapInstance);
                                    const popupHtml = location.popup && !location.popup.includes(`id="`) ? `<div id="${popupId}">${location.popup}</div>` : location.popup || `<div id="${popupId}"><b>${location.name}</b></div>`;
                                    marker.bindPopup(popupHtml, {
                                        autoClose: false,
                                        closeOnClick: false,
                                        closeButton: false,
                                        className: isFixedLocation ? "fixed-popup" : ""
                                    });
                                    markerRefs.push(marker);
                                    if (isFixedLocation) {
                                        fixedMarker = marker;
                                    }
                                    const styleId = "avasa-leaflet-marker-style";
                                    if (!document.getElementById(styleId)) {
                                        const style = document.createElement("style");
                                        style.id = styleId;
                                        style.innerHTML = `
                .leaflet-marker-icon[src$="AVASA.svg"] {
                  background: white;
                  border-radius: 50%;
                  border: 2px solid #333;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  object-fit: contain;
                }
                .blinking-fixed-marker.leaflet-marker-icon[src$="AVASA.svg"] {
                  animation: avasa-blink 0.4s linear infinite;
                  box-shadow: 0 0 0 10px rgba(255, 20, 147, 0.7), 0 2px 8px rgba(0,0,0,0.15);
                  border: 2.5px solid #ff1493;
                  background: #ffe0f4;
                }
                @keyframes avasa-blink {
                  0% { box-shadow: 0 0 0 10px rgba(255, 20, 147, 0.7), 0 2px 8px rgba(0,0,0,0.15); }
                  50% { box-shadow: 0 0 0 22px rgba(255, 20, 147, 1), 0 2px 8px rgba(0,0,0,0.15); }
                  100% { box-shadow: 0 0 0 10px rgba(255, 20, 147, 0.7), 0 2px 8px rgba(0,0,0,0.15); }
                }
                .leaflet-popup.fixed-popup {
                  pointer-events: none;
                  margin-top: -10px;
                }
                .leaflet-popup.fixed-popup .leaflet-popup-content-wrapper {
                  background: #fff;
                  border-radius: 8px;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  border: 1.5px solid #333;
                }
                .leaflet-popup.fixed-popup .leaflet-popup-close-button {
                  display: none;
                }
                @keyframes marker-bounce {
                  0%   { transform: translateY(0);}
                  10%  { transform: translateY(-20px);}
                  20%  { transform: translateY(-30px);}
                  30%  { transform: translateY(-20px);}
                  40%  { transform: translateY(-10px);}
                  50%  { transform: translateY(-5px);}
                  60%  { transform: translateY(-2px);}
                  70%  { transform: translateY(0);}
                  100% { transform: translateY(0);}
                }
                .leaflet-marker-icon.marker-bounce {
                  animation: marker-bounce 0.7s cubic-bezier(.25,.46,.45,.94) both;
                }
              `;
                                        document.head.appendChild(style);
                                    }
                                    if (openPopupImmediately) {
                                        marker.openPopup();
                                        if (isFixedLocation) {
                                            marker._popup.options.autoClose = false;
                                            marker._popup.options.closeOnClick = false;
                                            marker._popup.options.closeButton = false;
                                            setTimeout({
                                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                                    const popupEl = document.querySelector(`.leaflet-popup[id^="${popupId}"], .leaflet-popup`);
                                                    if (popupEl) {
                                                        popupEl.classList.add("fixed-popup");
                                                    }
                                                }
                                            }["MapLocation.useEffect.addMarkerWithIcon"], 100);
                                        }
                                    }
                                    marker.on("click", {
                                        "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                            markerBounce(marker);
                                        }
                                    }["MapLocation.useEffect.addMarkerWithIcon"]);
                                }
                            })["MapLocation.useEffect.addMarkerWithIcon"];
                            testImg.onerror = ({
                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                    const fallbackIcon = L.icon({
                                        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                                        iconSize: [
                                            25,
                                            41
                                        ],
                                        iconAnchor: [
                                            12,
                                            41
                                        ],
                                        popupAnchor: [
                                            1,
                                            -34
                                        ],
                                        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
                                        shadowSize: [
                                            41,
                                            41
                                        ]
                                    });
                                    const marker = L.marker(location.coords, {
                                        icon: fallbackIcon
                                    }).addTo(mapInstance);
                                    const popupHtml = (location.popup && !location.popup.includes(`id="`) ? `<div id="${popupId}">${location.popup}</div>` : location.popup || `<div id="${popupId}"><b>${location.name}</b></div>`) + "<br/><span style='color:red'>Custom icon failed to load.</span>";
                                    marker.bindPopup(popupHtml, {
                                        autoClose: false,
                                        closeOnClick: false,
                                        closeButton: false,
                                        className: isFixedLocation ? "fixed-popup" : ""
                                    });
                                    markerRefs.push(marker);
                                    if (isFixedLocation) {
                                        fixedMarker = marker;
                                    }
                                    if (openPopupImmediately) {
                                        marker.openPopup();
                                        if (isFixedLocation) {
                                            marker._popup.options.autoClose = false;
                                            marker._popup.options.closeOnClick = false;
                                            marker._popup.options.closeButton = false;
                                            setTimeout({
                                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                                    const popupEl = document.querySelector(`.leaflet-popup[id^="${popupId}"], .leaflet-popup`);
                                                    if (popupEl) {
                                                        popupEl.classList.add("fixed-popup");
                                                    }
                                                }
                                            }["MapLocation.useEffect.addMarkerWithIcon"], 100);
                                        }
                                    }
                                    marker.on("click", {
                                        "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                            markerBounce(marker);
                                        }
                                    }["MapLocation.useEffect.addMarkerWithIcon"]);
                                }
                            })["MapLocation.useEffect.addMarkerWithIcon"];
                        } else {
                            const fallbackIcon = L.icon({
                                iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                                iconSize: [
                                    25,
                                    41
                                ],
                                iconAnchor: [
                                    12,
                                    41
                                ],
                                popupAnchor: [
                                    1,
                                    -34
                                ],
                                shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
                                shadowSize: [
                                    41,
                                    41
                                ]
                            });
                            const marker = L.marker(location.coords, {
                                icon: fallbackIcon
                            }).addTo(mapInstance);
                            const popupHtml = location.popup && !location.popup.includes(`id="`) ? `<div id="${popupId}">${location.popup}</div>` : location.popup || `<div id="${popupId}"><b>${location.name}</b></div>`;
                            marker.bindPopup(popupHtml, {
                                autoClose: false,
                                closeOnClick: false,
                                closeButton: false,
                                className: isFixedLocation ? "fixed-popup" : ""
                            });
                            markerRefs.push(marker);
                            if (isFixedLocation) {
                                fixedMarker = marker;
                            }
                            if (openPopupImmediately) {
                                marker.openPopup();
                                if (isFixedLocation) {
                                    marker._popup.options.autoClose = false;
                                    marker._popup.options.closeOnClick = false;
                                    marker._popup.options.closeButton = false;
                                    setTimeout({
                                        "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                            const popupEl = document.querySelector(`.leaflet-popup[id^="${popupId}"], .leaflet-popup`);
                                            if (popupEl) {
                                                popupEl.classList.add("fixed-popup");
                                            }
                                        }
                                    }["MapLocation.useEffect.addMarkerWithIcon"], 100);
                                }
                            }
                            marker.on("click", {
                                "MapLocation.useEffect.addMarkerWithIcon": ()=>{
                                    markerBounce(marker);
                                }
                            }["MapLocation.useEffect.addMarkerWithIcon"]);
                        }
                    }
                    function markerBounce(marker) {
                        if (!marker || !marker._icon) return;
                        marker._icon.classList.remove("marker-bounce");
                        void marker._icon.offsetWidth;
                        marker._icon.classList.add("marker-bounce");
                        setTimeout({
                            "MapLocation.useEffect.markerBounce": ()=>{
                                if (marker._icon) marker._icon.classList.remove("marker-bounce");
                            }
                        }["MapLocation.useEffect.markerBounce"], 700);
                    }
                    addMarkerWithIcon(FIXED_LOCATION, true, true);
                    addMarkerWithIcon(EVENT_LOCATION, true, false);
                    OTHER_LOCATIONS.forEach({
                        "MapLocation.useEffect": (location)=>{
                            addMarkerWithIcon(location, false, false);
                        }
                    }["MapLocation.useEffect"]);
                    animateMapToLocations([
                        FIXED_LOCATION,
                        EVENT_LOCATION,
                        FIXED_LOCATION
                    ], 1200);
                    mapInstance.setView(initialCoords, 15, {
                        animate: false
                    });
                }
            }["MapLocation.useEffect"]);
            return ({
                "MapLocation.useEffect": ()=>{
                    if (animationTimeouts.length) {
                        animationTimeouts.forEach({
                            "MapLocation.useEffect": (t)=>clearTimeout(t)
                        }["MapLocation.useEffect"]);
                    }
                    if (mapInstance) {
                        mapInstance.remove();
                    }
                }
            })["MapLocation.useEffect"];
        }
    }["MapLocation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapRef,
        id: "leaflet-map",
        className: "overflow-hidden mx-auto rounded-md"
    }, void 0, false, {
        fileName: "[project]/src/components/section/ourworksection/maplocation/MapLocation.jsx",
        lineNumber: 507,
        columnNumber: 5
    }, this);
};
_s(MapLocation, "7YyR5VHPjRHlFVGmfO4y0L1pLdg=");
_c = MapLocation;
const __TURBOPACK__default__export__ = MapLocation;
var _c;
__turbopack_context__.k.register(_c, "MapLocation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_section_ourworksection_maplocation_MapLocation_jsx_ef915c79._.js.map