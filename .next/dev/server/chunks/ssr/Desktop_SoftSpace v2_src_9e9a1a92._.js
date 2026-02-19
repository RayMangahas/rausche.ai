module.exports = [
"[project]/Desktop/SoftSpace v2/src/lib/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTIVE_ROOMS",
    ()=>ACTIVE_ROOMS,
    "COMMUNITY_POSTS",
    ()=>COMMUNITY_POSTS,
    "ONLINE_USERS",
    ()=>ONLINE_USERS,
    "PING_PROMPTS",
    ()=>PING_PROMPTS
]);
const ONLINE_USERS = [
    {
        id: 1,
        name: "Maya",
        vibe: "into late-night philosophy",
        interest: "Philosophy",
        color: "#B87FD6",
        initials: "M",
        online: true
    },
    {
        id: 2,
        name: "Jordan",
        vibe: "stressed about midterms",
        interest: "Study buddy",
        color: "#7FB8D6",
        initials: "J",
        online: true
    },
    {
        id: 3,
        name: "Sam",
        vibe: "can't sleep again",
        interest: "Night owl",
        color: "#D6A87F",
        initials: "S",
        online: true
    },
    {
        id: 4,
        name: "Alex",
        vibe: "new in town, looking for friends",
        interest: "Newcomer",
        color: "#7FD6A8",
        initials: "A",
        online: true
    },
    {
        id: 5,
        name: "Rin",
        vibe: "needs someone to vent to",
        interest: "Listener needed",
        color: "#D67FA8",
        initials: "R",
        online: true
    },
    {
        id: 6,
        name: "Drew",
        vibe: "making music at 2am",
        interest: "Music",
        color: "#A87FD6",
        initials: "D",
        online: true
    }
];
const PING_PROMPTS = [
    "Want to talk?",
    "Same vibe ✨",
    "Let's chat about music",
    "Need a study buddy?",
    "Can't sleep either?"
];
const ACTIVE_ROOMS = [
    {
        id: 1,
        name: "Late Night Chill",
        people: 7,
        icon: "🎵",
        community: "Can't Sleep Club"
    },
    {
        id: 2,
        name: "Study Together",
        people: 4,
        icon: "📚",
        community: "First Gen Students"
    },
    {
        id: 3,
        name: "New here 👋",
        people: 3,
        icon: "✨",
        community: "SoftSpace"
    }
];
const COMMUNITY_POSTS = [
    {
        id: 1,
        community: "Can't Sleep Club",
        memberCount: "2.3K",
        icon: "🌙",
        color: "#2D2654",
        post: {
            prompt: "What's keeping you up tonight?",
            responseCount: 47,
            activeNow: 12,
            topResponses: [
                "Overthinking a conversation from 3 days ago",
                "My brain decided now is the time to plan my whole future"
            ]
        }
    },
    {
        id: 2,
        community: "First Gen Students",
        memberCount: "1.8K",
        icon: "🎓",
        color: "#1E3A2F",
        post: {
            prompt: "What's something you wish someone told you before college?",
            responseCount: 83,
            activeNow: 8,
            topResponses: [
                "It's okay to not know the unwritten rules",
                "Office hours are literally free mentoring"
            ]
        }
    },
    {
        id: 3,
        community: "Founder Therapy",
        memberCount: "956",
        icon: "🧠",
        color: "#3A2E1E",
        post: {
            prompt: "Biggest lesson from your last failure?",
            responseCount: 31,
            activeNow: 5,
            topResponses: [
                "The idea wasn't the problem, the timing was",
                "I confused being busy with making progress"
            ]
        }
    },
    {
        id: 4,
        community: "Anxious but Trying",
        memberCount: "4.1K",
        icon: "💛",
        color: "#2E2A3A",
        post: {
            prompt: "One small win from today?",
            responseCount: 112,
            activeNow: 22,
            topResponses: [
                "Made a phone call I'd been avoiding for 2 weeks",
                "Went to the gym even though I almost didn't"
            ]
        }
    }
];
}),
"[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhosHere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/src/components/icons/index.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function WhosHere({ users, pingState, onUserTap }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-5 pt-5 pb-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display font-bold text-[17px] text-soft-purple-deeper m-0",
                                children: "Who's here right now"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-soft-text-secondary mt-0.5 font-medium",
                                children: [
                                    users.length,
                                    " people matched to you"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-soft-lavender/10 to-soft-gold/10 rounded-full px-3 py-1 text-[11px] font-bold text-soft-purple tracking-wide",
                        children: "🟢 LIVE"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2",
                children: Array.from({
                    length: Math.ceil(users.length / 4)
                }).map((_, pageIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2.5 min-w-full snap-center",
                        children: users.slice(pageIdx * 4, pageIdx * 4 + 4).map((user)=>{
                            const isPinged = !!pingState[user.id];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>!isPinged && onUserTap(user),
                                disabled: isPinged,
                                className: `
                      text-left rounded-soft px-3.5 py-2.5 border transition-all duration-200
                      ${isPinged ? "bg-gradient-to-br from-soft-lavender-light to-soft-lavender-bg border-soft-lavender cursor-default" : "bg-white border-soft-lavender-border cursor-pointer hover:border-soft-lavender hover:shadow-sm"}
                    `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end mb-0.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-soft-online shadow-[0_0_0_3px_rgba(76,175,80,0.2)]"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                            lineNumber: 58,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                        lineNumber: 57,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-[12px] flex items-center justify-center text-white text-base font-bold font-display mb-1.5",
                                        style: {
                                            background: `linear-gradient(135deg, ${user.color}, ${user.color}88)`
                                        },
                                        children: user.initials
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                        lineNumber: 60,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-sm text-soft-purple-deeper font-body mb-0.5",
                                        children: user.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                        lineNumber: 68,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-soft-muted mb-1 leading-snug font-medium",
                                        children: user.vibe
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                        lineNumber: 71,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1 bg-soft-lavender-bg rounded-lg px-2 py-0.5 text-[10.5px] font-semibold text-soft-purple",
                                        children: user.interest
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                        lineNumber: 74,
                                        columnNumber: 21
                                    }, this),
                                    isPinged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-soft-purple",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MicIcon"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                                lineNumber: 79,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Ping sent"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                                lineNumber: 80,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                        lineNumber: 78,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, user.id, true, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                                lineNumber: 44,
                                columnNumber: 19
                            }, this);
                        })
                    }, pageIdx, false, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                        lineNumber: 37,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiveRooms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/src/components/icons/index.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function LiveRooms({ rooms }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-5 pt-4 pb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display font-bold text-[17px] text-soft-purple-deeper mb-3",
                children: "Live rooms"
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2.5 overflow-x-auto scrollbar-hide",
                children: rooms.map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-white rounded-[14px] p-3 px-4 border border-soft-lavender-border min-w-[160px] flex-shrink-0 cursor-pointer text-left hover:border-soft-lavender hover:shadow-sm transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: room.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[13px] text-soft-purple-deeper",
                                        children: room.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-soft-muted font-medium",
                                        children: [
                                            room.people,
                                            " listening"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 bg-soft-lavender-bg rounded-lg px-2 py-0.5 text-[10px] font-bold text-soft-purple",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadphonesIcon"], {
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            "Join"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-soft-muted-light mt-1.5 font-medium",
                                children: room.community
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, room.id, true, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommunityFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/src/components/icons/index.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function CommunityFeed({ posts }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-5 pt-1 pb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display font-bold text-[17px] text-soft-purple-deeper",
                        children: "Trending in communities"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-soft-purple font-semibold cursor-pointer hover:underline",
                        children: "See all"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: posts.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-softer overflow-hidden border border-soft-lavender-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3.5 flex items-center justify-between",
                                style: {
                                    backgroundColor: item.color
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[22px]",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-sm text-white",
                                                        children: item.community
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-white/65 mt-0.5 font-medium",
                                                        children: [
                                                            item.memberCount,
                                                            " members · ",
                                                            item.post.activeNow,
                                                            " here now"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/15 rounded-[10px] px-2.5 py-1 text-[11px] font-bold text-white cursor-pointer hover:bg-white/25 transition-colors",
                                        children: "Join"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-[15px] text-soft-purple-deeper font-body leading-snug mb-2.5",
                                        children: [
                                            "“",
                                            item.post.prompt,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 mb-3",
                                        children: item.post.topResponses.map((resp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-soft-lavender-bg rounded-xl px-3.5 py-2.5 text-[13px] text-soft-purple-deep leading-snug font-medium border-l-[3px] border-soft-lavender",
                                                children: resp
                                            }, i, false, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-soft-muted text-xs font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeartIcon"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.post.responseCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-soft-muted text-xs font-semibold cursor-pointer hover:text-soft-purple transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MicIcon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Voice reply"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-soft-muted text-xs font-semibold cursor-pointer hover:text-soft-purple transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhoneIcon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Join call"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/src/components/icons/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/src/lib/mockData.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function PingModal({ user, onPing, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-soft-purple-deeper/60 backdrop-blur-sm z-[100] flex items-end justify-center",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: (e)=>e.stopPropagation(),
            className: "bg-white rounded-t-softest w-full max-w-[430px] px-5 pt-6 pb-9 animate-slideUp",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3.5 mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[52px] h-[52px] rounded-soft flex items-center justify-center text-white text-xl font-bold font-display",
                            style: {
                                background: `linear-gradient(135deg, ${user.color}, ${user.color}88)`
                            },
                            children: user.initials
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-lg text-soft-purple-deeper",
                                    children: user.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] text-soft-muted mt-0.5 font-medium",
                                    children: user.vibe
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[13px] font-bold text-soft-purple-deep mb-3",
                    children: "Send a ping"
                }, void 0, false, {
                    fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PING_PROMPTS"].map((prompt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onPing(user.id, prompt),
                            className: "bg-soft-lavender-bg border-[1.5px] border-soft-lavender-border rounded-[14px] px-4 py-3.5 text-sm font-semibold text-soft-purple-deep text-left font-body cursor-pointer hover:bg-soft-lavender-light hover:border-soft-lavender transition-all",
                            children: prompt
                        }, prompt, false, {
                            fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-gradient-to-br from-soft-purple to-soft-purple-dark border-none rounded-soft px-7 py-3.5 text-white text-sm font-bold cursor-pointer inline-flex items-center gap-2 font-body shadow-lg shadow-soft-purple/30 hover:shadow-xl hover:shadow-soft-purple/40 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MicIcon"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            "Send voice message instead"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/SoftSpace v2/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/src/lib/mockData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$home$2f$WhosHere$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/src/components/home/WhosHere.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$home$2f$LiveRooms$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/src/components/home/LiveRooms.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$home$2f$CommunityFeed$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/src/components/home/CommunityFeed.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$home$2f$PingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/src/components/home/PingModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function HomePage() {
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pingState, setPingState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const handlePing = (userId, prompt)=>{
        setPingState((prev)=>({
                ...prev,
                [userId]: prompt
            }));
        setSelectedUser(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$home$2f$WhosHere$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                users: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONLINE_USERS"],
                pingState: pingState,
                onUserTap: setSelectedUser
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$home$2f$LiveRooms$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                rooms: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTIVE_ROOMS"]
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-px bg-soft-lavender-border mx-5 my-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$home$2f$CommunityFeed$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                posts: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMUNITY_POSTS"]
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            selectedUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$src$2f$components$2f$home$2f$PingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                user: selectedUser,
                onPing: handlePing,
                onClose: ()=>setSelectedUser(null)
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Desktop_SoftSpace%20v2_src_9e9a1a92._.js.map