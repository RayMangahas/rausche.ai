module.exports = [
"[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SoftSpace v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function wordCount(text) {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}
function ProfilePage() {
    // Profile info
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Ray");
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("you");
    const [nameDraft, setNameDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Ray");
    const [usernameDraft, setUsernameDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("you");
    const [editingProfile, setEditingProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Draft state
    const [q1Draft, setQ1Draft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [q2Draft, setQ2Draft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [qualitiesDraft, setQualitiesDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "",
        "",
        ""
    ]);
    // Saved state
    const [q1Saved, setQ1Saved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [q2Saved, setQ2Saved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [qualitiesSaved, setQualitiesSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "",
        "",
        ""
    ]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleQ1Change = (val)=>{
        if (wordCount(val) <= 200) setQ1Draft(val);
    };
    const handleQ2Change = (val)=>{
        if (wordCount(val) <= 200) setQ2Draft(val);
    };
    const handleQualityChange = (index, val)=>{
        if (val.length <= 20) {
            const updated = [
                ...qualitiesDraft
            ];
            updated[index] = val;
            setQualitiesDraft(updated);
        }
    };
    const startEditing = (field)=>{
        if (field === "q1") setQ1Draft(q1Saved);
        if (field === "q2") setQ2Draft(q2Saved);
        if (field === "q3") setQualitiesDraft([
            ...qualitiesSaved
        ]);
        setEditing(field);
    };
    const handleSave = ()=>{
        if (editing === "q1") setQ1Saved(q1Draft);
        if (editing === "q2") setQ2Saved(q2Draft);
        if (editing === "q3") setQualitiesSaved([
            ...qualitiesDraft
        ]);
        setEditing(null);
    };
    const handleCancel = ()=>{
        setEditing(null);
    };
    const openEditProfile = ()=>{
        setNameDraft(name);
        setUsernameDraft(username);
        setEditingProfile(true);
    };
    const saveProfile = ()=>{
        setName(nameDraft);
        setUsername(usernameDraft);
        setEditingProfile(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-5 pt-6 pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-soft bg-gradient-to-br from-soft-purple to-soft-lavender flex items-center justify-center text-white text-2xl font-bold font-display",
                        children: name.charAt(0).toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display font-bold text-xl text-soft-purple-deeper",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-soft-muted text-sm font-medium",
                                children: [
                                    "@",
                                    username
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: openEditProfile,
                className: "w-full mb-5 py-2 rounded-xl border border-soft-lavender text-[13px] font-semibold text-soft-purple bg-white hover:bg-soft-lavender-bg transition-colors cursor-pointer",
                children: "Edit Profile"
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2.5 mb-5",
                children: [
                    {
                        label: "Calls",
                        value: "24"
                    },
                    {
                        label: "Circles",
                        value: "3"
                    },
                    {
                        label: "Communities",
                        value: "5"
                    }
                ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-soft border border-soft-lavender-border p-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-xl text-soft-purple-deeper",
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-soft-muted font-medium mt-0.5",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stat.label, true, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-softer border border-soft-lavender-border p-5 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider mb-4",
                        children: "Get to know me"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] font-bold text-soft-purple-deep mb-1.5",
                                        children: "When you're down, what usually cheers you up?"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    editing === "q1" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: q1Draft,
                                                onChange: (e)=>handleQ1Change(e.target.value),
                                                autoFocus: true,
                                                placeholder: "Type your answer...",
                                                className: "w-full bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] text-soft-purple-deeper leading-relaxed font-medium border-l-[3px] border-soft-lavender outline-none resize-none min-h-[80px] focus:ring-2 focus:ring-soft-purple/20"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mt-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-soft-muted-light",
                                                        children: [
                                                            wordCount(q1Draft),
                                                            " / 200 words"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleCancel,
                                                                className: "text-[12px] text-soft-muted font-semibold px-3 py-1 rounded-lg hover:bg-soft-lavender-bg transition-colors",
                                                                children: "Cancel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleSave,
                                                                className: "text-[12px] text-white font-semibold px-4 py-1 rounded-lg bg-soft-purple hover:bg-soft-purple-dark transition-colors",
                                                                children: "Save"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>startEditing("q1"),
                                        className: "bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] leading-relaxed font-medium border-l-[3px] border-soft-lavender cursor-pointer hover:bg-soft-lavender-light transition-colors min-h-[44px]",
                                        children: q1Saved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-soft-purple-deeper",
                                            children: q1Saved
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-soft-muted-light italic",
                                            children: "Tap to answer..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] font-bold text-soft-purple-deep mb-1.5",
                                        children: "What's a non-school topic you've explored deeply just because you were curious?"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    editing === "q2" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: q2Draft,
                                                onChange: (e)=>handleQ2Change(e.target.value),
                                                autoFocus: true,
                                                placeholder: "Type your answer...",
                                                className: "w-full bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] text-soft-purple-deeper leading-relaxed font-medium border-l-[3px] border-soft-lavender outline-none resize-none min-h-[80px] focus:ring-2 focus:ring-soft-purple/20"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mt-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-soft-muted-light",
                                                        children: [
                                                            wordCount(q2Draft),
                                                            " / 200 words"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleCancel,
                                                                className: "text-[12px] text-soft-muted font-semibold px-3 py-1 rounded-lg hover:bg-soft-lavender-bg transition-colors",
                                                                children: "Cancel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleSave,
                                                                className: "text-[12px] text-white font-semibold px-4 py-1 rounded-lg bg-soft-purple hover:bg-soft-purple-dark transition-colors",
                                                                children: "Save"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>startEditing("q2"),
                                        className: "bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] leading-relaxed font-medium border-l-[3px] border-soft-lavender cursor-pointer hover:bg-soft-lavender-light transition-colors min-h-[44px]",
                                        children: q2Saved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-soft-purple-deeper",
                                            children: q2Saved
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-soft-muted-light italic",
                                            children: "Tap to answer..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] font-bold text-soft-purple-deep mb-1.5",
                                        children: "What kind of person do you hope to become? Pick three qualities."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    editing === "q3" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: qualitiesDraft.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: q,
                                                                onChange: (e)=>handleQualityChange(i, e.target.value),
                                                                placeholder: `Quality ${i + 1}`,
                                                                maxLength: 20,
                                                                className: "bg-soft-lavender-bg rounded-full px-3.5 py-1.5 text-xs font-semibold text-soft-purple border border-soft-lavender outline-none w-[120px] text-center placeholder:text-soft-muted-light placeholder:font-medium focus:ring-2 focus:ring-soft-purple/20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 23
                                                            }, this),
                                                            q && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute -top-1.5 -right-1.5 text-[8px] text-soft-muted-light bg-white rounded-full px-1",
                                                                children: [
                                                                    q.length,
                                                                    "/20"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end gap-2 mt-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleCancel,
                                                        className: "text-[12px] text-soft-muted font-semibold px-3 py-1 rounded-lg hover:bg-soft-lavender-bg transition-colors",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleSave,
                                                        className: "text-[12px] text-white font-semibold px-4 py-1 rounded-lg bg-soft-purple hover:bg-soft-purple-dark transition-colors",
                                                        children: "Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>startEditing("q3"),
                                        className: "cursor-pointer",
                                        children: qualitiesSaved.some((q)=>q) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: qualitiesSaved.filter((q)=>q).map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-soft-lavender-bg rounded-full px-3.5 py-1.5 text-xs font-semibold text-soft-purple border border-soft-lavender",
                                                    children: q
                                                }, i, false, {
                                                    fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] leading-relaxed font-medium border-l-[3px] border-soft-lavender hover:bg-soft-lavender-light transition-colors min-h-[44px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-soft-muted-light italic",
                                                children: "Tap to add qualities..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                                lineNumber: 288,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-softer border border-soft-lavender-border overflow-hidden",
                children: [
                    {
                        label: "Edit Folder",
                        icon: "📁"
                    },
                    {
                        label: "Notification Preferences",
                        icon: "🔔"
                    },
                    {
                        label: "Privacy & Safety",
                        icon: "🔒"
                    },
                    {
                        label: "SoftSpace+ Subscription",
                        icon: "⭐"
                    },
                    {
                        label: "Help & Feedback",
                        icon: "💬"
                    }
                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-3 px-4 py-3.5 cursor-pointer hover:bg-soft-lavender-bg transition-colors ${i < 4 ? "border-b border-soft-lavender-border" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-soft-purple-deeper flex-1",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#B0A6CC",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 18l6-6-6-6"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.label, true, {
                        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-[11px] text-soft-muted-light mt-6 mb-4",
                children: "SoftSpace v0.1.0 · Made with 💜"
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            editingProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center px-5",
                style: {
                    background: "rgba(45, 34, 84, 0.6)",
                    backdropFilter: "blur(8px)"
                },
                onClick: ()=>setEditingProfile(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "bg-white w-full max-w-[380px] px-5 pt-6 pb-7",
                    style: {
                        borderRadius: "24px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-bold text-lg text-soft-purple-deeper mb-5",
                            children: "Edit Profile"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                            lineNumber: 349,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 rounded-soft bg-gradient-to-br from-soft-purple to-soft-lavender flex items-center justify-center text-white text-3xl font-bold font-display",
                                children: nameDraft.charAt(0).toUpperCase() || "?"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                lineNumber: 355,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                            lineNumber: 354,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5",
                                    children: "Display Name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: nameDraft,
                                    onChange: (e)=>setNameDraft(e.target.value),
                                    maxLength: 30,
                                    placeholder: "Your name",
                                    className: "w-full bg-soft-lavender-bg rounded-xl px-4 py-3 text-[14px] text-soft-purple-deeper font-medium border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20 focus:border-soft-lavender"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                            lineNumber: 361,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5",
                                    children: "Username"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center bg-soft-lavender-bg rounded-xl border border-soft-lavender-border focus-within:ring-2 focus-within:ring-soft-purple/20 focus-within:border-soft-lavender",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[14px] text-soft-muted pl-4 font-medium",
                                            children: "@"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: usernameDraft,
                                            onChange: (e)=>setUsernameDraft(e.target.value.toLowerCase().replace(/[^a-z0-9._]/g, "")),
                                            maxLength: 20,
                                            placeholder: "username",
                                            className: "flex-1 bg-transparent py-3 pr-4 pl-0.5 text-[14px] text-soft-purple-deeper font-medium outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                            lineNumber: 382,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-soft-muted-light mt-1",
                                    children: "Letters, numbers, dots, and underscores only"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                            lineNumber: 376,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingProfile(false),
                                    className: "flex-1 py-3 rounded-xl border border-soft-lavender text-[13px] font-semibold text-soft-muted hover:bg-soft-lavender-bg transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SoftSpace__v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveProfile,
                                    className: "flex-1 py-3 rounded-xl bg-soft-purple text-white text-[13px] font-semibold hover:bg-soft-purple-dark transition-colors",
                                    children: "Save"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                            lineNumber: 401,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                    lineNumber: 344,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
                lineNumber: 339,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SoftSpace v2/src/app/profile/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_SoftSpace%20v2_src_app_profile_page_tsx_a7bd1517._.js.map