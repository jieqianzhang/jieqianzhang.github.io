WebFontConfig = {
    google: {
        families: ['Indie Flower::latin', 'Open Sans:400,400italic,300,300italic,700,600,800:latin', 'Bitter:400,400italic,300,300italic,700,600,800:latin']
    }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();;
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.3",
        m = function(a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = "length" in a && a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ea = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function() {
                    return [0]
                }),
                last: oa(function(a, b) {
                    return [b - 1]
                }),
                eq: oa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                    return a === b
                }, h, !0), l = sa(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function(b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && m.each(arguments, function(a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function aa() {
        return !0
    }

    function ba() {
        return !1
    }

    function ca() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ca() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function da(a) {
        var b = ea.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fa = / jQuery\d+="(?:null|\d+)"/g,
        ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
        ha = /^\s+/,
        ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ja = /<([\w:]+)/,
        ka = /<tbody/i,
        la = /<|&#?\w+;/,
        ma = /<(?:script|style|link)/i,
        na = /checked\s*(?:[^=]|=\s*.checked.)/i,
        oa = /^$|\/(?:java|ecma)script/i,
        pa = /^true\/(.*)/,
        qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ra = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sa = da(y),
        ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;

    function ua(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]);
                else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (la.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                    e = 0;
                    while (f = h[e++]) oa.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ca, Da = {};

    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fa(a) {
        var b = y,
            c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Ga = /^margin/,
        Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ia = function(a) {
        return a.currentStyle
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function La(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Ma = /alpha\([^)]*\)/i,
        Na = /opacity\s*=\s*([^)]*)/,
        Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = new RegExp("^(" + S + ")(.*)$", "i"),
        Qa = new RegExp("^([+-])=(" + S + ")", "i"),
        Ra = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ta = ["Webkit", "O", "Moz", "ms"];

    function Ua(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ta.length;
        while (e--)
            if (b = Ta[e] + c, b in a) return b;
        return d
    }

    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Ya(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ia(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function() {
                    return Ya(a, b, d)
                }) : Ya(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Va(this, !0)
        },
        hide: function() {
            return Va(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e)
    }
    m.Tween = Za, Za.prototype = {
        constructor: Za,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/,
        bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cb = /queueHooks$/,
        db = [ib],
        eb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bb.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fb() {
        return setTimeout(function() {
            $a = void 0
        }), $a = m.now()
    }

    function gb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ab.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = db.length,
            h = m.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $a || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++)
            if (d = db[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kb, {
            tweener: function(a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? db.unshift(a) : db.push(a)
            }
        }), m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kb(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gb("show"),
            slideUp: gb("hide"),
            slideToggle: gb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $a = void 0
        }, m.fx.timer = function(a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
            _a || (_a = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
            clearInterval(_a), _a = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lb = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mb, nb, ob = m.expr.attrHandle,
        pb = /^(?:checked|selected)$/i,
        qb = k.getSetAttribute,
        rb = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nb = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rb && qb || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mb && mb.set(a, b, c)
        }
    }), qb || (mb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, ob.id = ob.name = ob.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mb.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i,
        tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vb = m.now(),
        wb = /\?/,
        xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yb, zb, Ab = /#.*$/,
        Bb = /([?&])_=[^&]*/,
        Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Eb = /^(?:GET|HEAD)$/,
        Fb = /^\/\//,
        Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hb = {},
        Ib = {},
        Jb = "*/".concat("*");
    try {
        zb = location.href
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href
    }
    yb = Gb.exec(zb.toLowerCase()) || [];

    function Lb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mb(a, b, c, d) {
        var e = {},
            f = a === Ib;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qb = /%20/g,
        Rb = /\[\]$/,
        Sb = /\r?\n/g,
        Tb = /^(?:submit|button|image|reset|file)$/i,
        Ub = /^(?:input|select|textarea|keygen)/i;

    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vb(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sb, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
    } : Zb;
    var Wb = 0,
        Xb = {},
        Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Xb) Xb[a](void 0, !0)
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zb() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _b = [],
        ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bc = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bc) return bc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cc = a.document.documentElement;

    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cc
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function(a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ec = a.jQuery,
        fc = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
jQuery.noConflict();
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
    function(e, t, n) {
        function r(n) {
            var r = t.console;
            i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
        }

        function a(t, a, i, o) {
            if (Object.defineProperty) try {
                return Object.defineProperty(t, a, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(o), i
                    },
                    set: function(e) {
                        r(o), i = e
                    }
                }), n
            } catch (s) {}
            e._definePropertyBroken = !0, t[a] = i
        }
        var i = {};
        e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
            i = {}, e.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var o = e("<input/>", {
                size: 1
            }).attr("size") && e.attrFn,
            s = e.attr,
            u = e.attrHooks.value && e.attrHooks.value.get || function() {
                return null
            },
            c = e.attrHooks.value && e.attrHooks.value.set || function() {
                return n
            },
            l = /^(?:input|button)$/i,
            d = /^[238]$/,
            p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            f = /^(?:checked|selected)$/i;
        a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
            var c = a.toLowerCase(),
                g = t && t.nodeType;
            return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
                get: function(t, r) {
                    var a, i = e.prop(t, r);
                    return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
                },
                set: function(t, n, r) {
                    var a;
                    return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
                }
            }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
        }, e.attrHooks.value = {
            get: function(e, t) {
                var n = (e.nodeName || "").toLowerCase();
                return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
            },
            set: function(e, t) {
                var a = (e.nodeName || "").toLowerCase();
                return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
            }
        };
        var g, h, v = e.fn.init,
            m = e.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        e.fn.init = function(t, n, a) {
            var i;
            return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
        }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
            return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
        }, e.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
            function t(e, n) {
                return new t.fn.init(e, n)
            }
            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
                return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
            }, t.fn.init.prototype = t.fn;
            var n = t(document);
            return r("jQuery.sub() is deprecated"), t
        }, e.ajaxSetup({
            converters: {
                "text json": e.parseJSON
            }
        });
        var b = e.fn.data;
        e.fn.data = function(t) {
            var a, i, o = this[0];
            return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
        };
        var j = /\/(java|ecma)script/i,
            w = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() {
            return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
        }, e.clean || (e.clean = function(t, a, i, o) {
            a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
            var s, u, c, l, d = [];
            if (e.merge(d, e.buildFragment(t, a).childNodes), i)
                for (c = function(e) {
                        return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
                    }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
            return d
        });
        var Q = e.event.add,
            x = e.event.remove,
            k = e.event.trigger,
            N = e.fn.toggle,
            T = e.fn.live,
            M = e.fn.die,
            S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            C = RegExp("\\b(?:" + S + ")\\b"),
            H = /(?:^|\s)hover(\.\S+|)\b/,
            A = function(t) {
                return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
            };
        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
            e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
        }, e.event.remove = function(e, t, n, r, a) {
            x.call(this, e, A(t) || "", n, r, a)
        }, e.fn.error = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
        }, e.fn.toggle = function(t, n) {
            if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var a = arguments,
                i = t.guid || e.guid++,
                o = 0,
                s = function(n) {
                    var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                    return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
                };
            for (s.guid = i; a.length > o;) a[o++].guid = i;
            return this.click(s)
        }, e.fn.live = function(t, n, a) {
            return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
        }, e.fn.die = function(t, n) {
            return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
        }, e.event.trigger = function(e, t, n, a) {
            return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
        }, e.each(S.split("|"), function(t, n) {
            e.event.special[n] = {
                setup: function() {
                    var t = this;
                    return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                        e.event.trigger(n, null, t, !0)
                    }), e._data(this, n, e.guid++)), !1
                },
                teardown: function() {
                    return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
                }
            }
        })
    }(jQuery, window);
var ajaxurl = "https://www.elvidence.com.au/wp-admin/admin-ajax.php";
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function(t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function() {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function(e) {
                    var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function(e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }
                var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function() {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) {
                                var t = {
                                    "content-type": m.dataType
                                };
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred();
            if (S.abort = function(e) {
                    x.abort(e)
                }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {}
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50,
                X = e.parseXML || function(e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                C = e.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                },
                _ = function(t, r, a) {
                    var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText;
                    return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
                };
            return S
        }
        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [],
            v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function() {
                f.resetForm()
            }), t.clearForm && x.push(function() {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var y = t.success || function() {};
            x.push(function(r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function(e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
            }, t.error) {
            var b = t.error;
            t.error = function(e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function(e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function() {
                return "" !== e(this).val()
            }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function(t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
                    name: f,
                    value: e(d).val(),
                    type: d.type
                }), a.push({
                    name: f + ".x",
                    value: o.clk_x
                }, {
                    name: f + ".y",
                    value: o.clk_y
                }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
            for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
                name: f,
                value: m[l]
            });
        else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
                for (l = 0; l < v.length; l++) a.push({
                    name: f,
                    value: v[l],
                    type: d.type
                });
            else a.push({
                name: f,
                value: "",
                type: d.type
            })
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
            name: f,
            value: m,
            type: d.type,
            required: d.required
        }));
        if (!t && o.clk) {
            var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({
                name: f + ".x",
                value: o.clk_x
            }, {
                name: f + ".y",
                value: o.clk_y
            }))
        }
        return a
    }, e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function(t) {
        var r = [];
        return this.each(function() {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({
                        name: a,
                        value: n[i]
                    });
                else null !== n && "undefined" != typeof n && r.push({
                    name: this.name,
                    value: n
                })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function(t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function(t, r) {
        var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});
var _wpcf7 = {
    "loaderUrl": "https:\/\/www.elvidence.com.au\/wp-content\/plugins\/contact-form-7\/images\/ajax-loader.gif",
    "sending": "Sending ..."
};
(function($) {
    if (typeof _wpcf7 == 'undefined' || _wpcf7 === null)
        _wpcf7 = {};
    _wpcf7 = $.extend({
        cached: 0
    }, _wpcf7);
    $(function() {
        _wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
        $('div.wpcf7 > form').wpcf7InitForm();
    });
    $.fn.wpcf7InitForm = function() {
        this.ajaxForm({
            beforeSubmit: function(arr, $form, options) {
                $form.wpcf7ClearResponseOutput();
                $form.find('[aria-invalid]').attr('aria-invalid', 'false');
                $form.find('img.ajax-loader').css({
                    visibility: 'visible'
                });
                return true;
            },
            beforeSerialize: function($form, options) {
                $form.find('[placeholder].placeheld').each(function(i, n) {
                    $(n).val('');
                });
                return true;
            },
            data: {
                '_wpcf7_is_ajax_call': 1
            },
            dataType: 'json',
            success: $.wpcf7AjaxSuccess,
            error: function(xhr, status, error, $form) {
                var e = $('<div class="ajax-error"></div>').text(error.message);
                $form.after(e);
            }
        });
        if (_wpcf7.cached)
            this.wpcf7OnloadRefill();
        this.wpcf7ToggleSubmit();
        this.find('.wpcf7-submit').wpcf7AjaxLoader();
        this.find('.wpcf7-acceptance').click(function() {
            $(this).closest('form').wpcf7ToggleSubmit();
        });
        this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();
        this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();
        this.find('[placeholder]').wpcf7Placeholder();
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.date) {
            this.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.number) {
            this.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        this.find('.wpcf7-character-count').wpcf7CharacterCount();
        this.find('.wpcf7-validates-as-url').change(function() {
            $(this).wpcf7NormalizeUrl();
        });
    };
    $.wpcf7AjaxSuccess = function(data, status, xhr, $form) {
        if (!$.isPlainObject(data) || $.isEmptyObject(data))
            return;
        var $responseOutput = $form.find('div.wpcf7-response-output');
        $form.wpcf7ClearResponseOutput();
        $form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
        $form.removeClass('invalid spam sent failed');
        if (data.captcha)
            $form.wpcf7RefillCaptcha(data.captcha);
        if (data.quiz)
            $form.wpcf7RefillQuiz(data.quiz);
        if (data.invalids) {
            $.each(data.invalids, function(i, n) {
                $form.find(n.into).wpcf7NotValidTip(n.message);
                $form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
                $form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
            });
            $responseOutput.addClass('wpcf7-validation-errors');
            $form.addClass('invalid');
            $(data.into).trigger('invalid.wpcf7');
        } else if (1 == data.spam) {
            $responseOutput.addClass('wpcf7-spam-blocked');
            $form.addClass('spam');
            $(data.into).trigger('spam.wpcf7');
        } else if (1 == data.mailSent) {
            $responseOutput.addClass('wpcf7-mail-sent-ok');
            $form.addClass('sent');
            if (data.onSentOk)
                $.each(data.onSentOk, function(i, n) {
                    eval(n)
                });
            $(data.into).trigger('mailsent.wpcf7');
        } else {
            $responseOutput.addClass('wpcf7-mail-sent-ng');
            $form.addClass('failed');
            $(data.into).trigger('mailfailed.wpcf7');
        }
        if (data.onSubmit)
            $.each(data.onSubmit, function(i, n) {
                eval(n)
            });
        $(data.into).trigger('submit.wpcf7');
        if (1 == data.mailSent)
            $form.resetForm();
        $form.find('[placeholder].placeheld').each(function(i, n) {
            $(n).val($(n).attr('placeholder'));
        });
        $responseOutput.append(data.message).slideDown('fast');
        $responseOutput.attr('role', 'alert');
        $.wpcf7UpdateScreenReaderResponse($form, data);
    };
    $.fn.wpcf7ExclusiveCheckbox = function() {
        return this.find('input:checkbox').click(function() {
            var name = $(this).attr('name');
            $(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
    };
    $.fn.wpcf7Placeholder = function() {
        if (_wpcf7.supportHtml5.placeholder)
            return this;
        return this.each(function() {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');
            $(this).focus(function() {
                if ($(this).hasClass('placeheld'))
                    $(this).val('').removeClass('placeheld');
            });
            $(this).blur(function() {
                if ('' == $(this).val()) {
                    $(this).val($(this).attr('placeholder'));
                    $(this).addClass('placeheld');
                }
            });
        });
    };
    $.fn.wpcf7AjaxLoader = function() {
        return this.each(function() {
            var loader = $('<img class="ajax-loader" />').attr({
                src: _wpcf7.loaderUrl,
                alt: _wpcf7.sending
            }).css('visibility', 'hidden');
            $(this).after(loader);
        });
    };
    $.fn.wpcf7ToggleSubmit = function() {
        return this.each(function() {
            var form = $(this);
            if (this.tagName.toLowerCase() != 'form')
                form = $(this).find('form').first();
            if (form.hasClass('wpcf7-acceptance-as-validation'))
                return;
            var submit = form.find('input:submit');
            if (!submit.length) return;
            var acceptances = form.find('input:checkbox.wpcf7-acceptance');
            if (!acceptances.length) return;
            submit.removeAttr('disabled');
            acceptances.each(function(i, n) {
                n = $(n);
                if (n.hasClass('wpcf7-invert') && n.is(':checked') || !n.hasClass('wpcf7-invert') && !n.is(':checked'))
                    submit.attr('disabled', 'disabled');
            });
        });
    };
    $.fn.wpcf7ToggleCheckboxFreetext = function() {
        return this.each(function() {
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(this).find(':checkbox, :radio').is(':checked')) {
                $(this).find(':input.wpcf7-free-text').prop('disabled', false);
            } else {
                $(this).find(':input.wpcf7-free-text').prop('disabled', true);
            }
            $wrap.find(':checkbox, :radio').change(function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                var $freetext = $(':input.wpcf7-free-text', $wrap);
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
    };
    $.fn.wpcf7CharacterCount = function() {
        return this.each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function($target) {
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $count.closest('form').find(':input[name="' + name + '"]').each(function() {
                updateCount($(this));
                $(this).keyup(function() {
                    updateCount($(this));
                });
            });
        });
    };
    $.fn.wpcf7NormalizeUrl = function() {
        return this.each(function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i)) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    $.fn.wpcf7NotValidTip = function(message) {
        return this.each(function() {
            var $into = $(this);
            $into.find('span.wpcf7-not-valid-tip').remove();
            $into.append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>');
            if ($into.is('.use-floating-validation-tip *')) {
                $('.wpcf7-not-valid-tip', $into).mouseover(function() {
                    $(this).wpcf7FadeOut();
                });
                $(':input', $into).focus(function() {
                    $('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
                });
            }
        });
    };
    $.fn.wpcf7FadeOut = function() {
        return this.each(function() {
            $(this).animate({
                opacity: 0
            }, 'fast', function() {
                $(this).css({
                    'z-index': -100
                });
            });
        });
    };
    $.fn.wpcf7OnloadRefill = function() {
        return this.each(function() {
            var url = $(this).attr('action');
            if (0 < url.indexOf('#'))
                url = url.substr(0, url.indexOf('#'));
            var id = $(this).find('input[name="_wpcf7"]').val();
            var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();
            $.getJSON(url, {
                _wpcf7_is_ajax_call: 1,
                _wpcf7: id,
                _wpcf7_request_ver: $.now()
            }, function(data) {
                if (data && data.captcha)
                    $('#' + unitTag).wpcf7RefillCaptcha(data.captcha);
                if (data && data.quiz)
                    $('#' + unitTag).wpcf7RefillQuiz(data.quiz);
            });
        });
    };
    $.fn.wpcf7RefillCaptcha = function(captcha) {
        return this.each(function() {
            var form = $(this);
            $.each(captcha, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        });
    };
    $.fn.wpcf7RefillQuiz = function(quiz) {
        return this.each(function() {
            var form = $(this);
            $.each(quiz, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        });
    };
    $.fn.wpcf7ClearResponseOutput = function() {
        return this.each(function() {
            $(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
            $(this).find('span.wpcf7-not-valid-tip').remove();
            $(this).find('img.ajax-loader').css({
                visibility: 'hidden'
            });
        });
    };
    $.wpcf7UpdateScreenReaderResponse = function($form, data) {
        $('.wpcf7 .screen-reader-response').html('').attr('role', '');
        if (data.message) {
            var $response = $form.siblings('.screen-reader-response').first();
            $response.append(data.message);
            if (data.invalids) {
                var $invalids = $('<ul></ul>');
                $.each(data.invalids, function(i, n) {
                    if (n.idref) {
                        var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                    } else {
                        var $li = $('<li></li>').append(n.message);
                    }
                    $invalids.append($li);
                });
                $response.append($invalids);
            }
            $response.attr('role', 'alert').focus();
        }
    };
    $.wpcf7SupportHtml5 = function() {
        var features = {};
        var input = document.createElement('input');
        features.placeholder = 'placeholder' in input;
        var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
        $.each(inputTypes, function(index, value) {
            input.setAttribute('type', value);
            features[value] = input.type !== 'text';
        });
        return features;
    };
})(jQuery);
var ssbpLazy = {
    "ajax_url": "https:\/\/www.elvidence.com.au\/wp-admin\/admin-ajax.php",
    "security": "4ebf3c61fd"
};
jQuery(document).ready(function() {
    jQuery('.ssbp-container').each(function(i, obj) {
        var data = {
            action: 'ssbp_lazy',
            security: ssbpLazy.security,
            ssbpid: jQuery(this).data("ssbp-id"),
            ssbptitle: jQuery(this).data("ssbp-title"),
            ssbpurl: jQuery(this).data("ssbp-url"),
            ssbpsharetext: jQuery(this).data("ssbp-share-text"),
        };
        jQuery.post(ssbpLazy.ajax_url, data, function(response) {
            jQuery(obj).hide().append(response).fadeIn(500);
            jQuery(obj).find('.ssbp-btn').click(function(event) {
                event.preventDefault();
                var data = {
                    action: 'ssbp_tracking',
                    security: ssbpAjax.security,
                    title: jQuery(this).data("ssbp-title"),
                    url: jQuery(this).data("ssbp-url"),
                    site: jQuery(this).data("ssbp-site"),
                    href: jQuery(this).attr("href"),
                };
                if (data['site'] == 'Email' || data['site'] == 'Pinterest' || data['site'] == 'Print') {
                    window.location.href = data['href'];
                } else {
                    var width = 575,
                        height = 400,
                        left = (jQuery(window).width() - width) / 2,
                        top = (jQuery(window).height() - height) / 2,
                        opts = 'status=1' + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
                    window.open(data['href'], 'SSBP', opts);
                }
                jQuery.post(ssbpAjax.ajax_url, data, function(response) {});
            });
        });
    });
});;
var ssbpAjax = {
    "ajax_url": "https:\/\/www.elvidence.com.au\/wp-admin\/admin-ajax.php",
    "security": "2db58fa2bd"
};;
jQuery(document).ready(function() {
    jQuery('.katb_rotate').each(function(i, obj) {
        jQuery(this).attr('id', 'katb_rotator_' + i);
    });
    if (jQuery('#katb_rotator_0').length > 0) {
        var katb_rotate_options = this.getElementById('katb_rotator_0');
        try {
            var speed_0 = katb_rotate_options.dataset.katb_speed;
        } catch (e) {
            var speed_0 = 7000;
        }
        var katb_rotate_interval_0 = setInterval(katb_rotate_testimonials_0, speed_0);
        jQuery('#katb_rotator_0').hover(function() {
            clearInterval(katb_rotate_interval_0);
        }, function() {
            katb_rotate_interval_0 = setInterval(katb_rotate_testimonials_0, speed_0);
        });
    }
    if (jQuery('#katb_rotator_1').length > 0) {
        var katb_rotate_options = this.getElementById('katb_rotator_1');
        try {
            var speed_1 = katb_rotate_options.dataset.katb_speed;
        } catch (e) {
            var speed_1 = 7000;
        }
        var katb_rotate_interval_1 = setInterval(katb_rotate_testimonials_1, speed_1);
        jQuery('#katb_rotator_1').hover(function() {
            clearInterval(katb_rotate_interval_1);
        }, function() {
            katb_rotate_interval_1 = setInterval(katb_rotate_testimonials_1, speed_1);
        });
    }
    if (jQuery('#katb_rotator_2').length > 0) {
        var katb_rotate_options = this.getElementById('katb_rotator_2');
        try {
            var speed_2 = katb_rotate_options.dataset.katb_speed;
        } catch (e) {
            var speed_2 = 7000;
        }
        var katb_rotate_interval_2 = setInterval(katb_rotate_testimonials_2, speed_2);
        jQuery('#katb_rotator_2').hover(function() {
            clearInterval(katb_rotate_interval_2);
        }, function() {
            katb_rotate_interval_2 = setInterval(katb_rotate_testimonials_2, speed_2);
        });
    }
    if (jQuery('#katb_rotator_3').length > 0) {
        var katb_rotate_options = this.getElementById('katb_rotator_3');
        try {
            var speed_3 = katb_rotate_options.dataset.katb_speed;
        } catch (e) {
            var speed_3 = 7000;
        }
        var katb_rotate_interval_3 = setInterval(katb_rotate_testimonials_3, speed_3);
        jQuery('#katb_rotator_3').hover(function() {
            clearInterval(katb_rotate_interval_3);
        }, function() {
            katb_rotate_interval_3 = setInterval(katb_rotate_testimonials_3, speed_3);
        });
    }
    if (jQuery('#katb_rotator_4').length > 0) {
        var katb_rotate_options = this.getElementById('katb_rotator_4');
        try {
            var speed_4 = katb_rotate_options.dataset.katb_speed;
        } catch (e) {
            var speed_4 = 7000;
        }
        var katb_rotate_interval_4 = setInterval(katb_rotate_testimonials_4, speed_4);
        jQuery('#katb_rotator_4').hover(function() {
            clearInterval(katb_rotate_interval_4);
        }, function() {
            katb_rotate_interval_4 = setInterval(katb_rotate_testimonials_4, speed_4);
        });
    }
    jQuery('.katb_widget_rotate').each(function(i, obj) {
        jQuery(this).attr('id', 'katb_widget_rotator_' + i);
    });
    if (jQuery('#katb_widget_rotator_0').length > 0) {
        var katb_widget_rotate_options = this.getElementById('katb_widget_rotator_0');
        try {
            var speed_w_0 = katb_widget_rotate_options.dataset.katb_speed;
        } catch (e) {
            var speed_w_0 = 7000;
        }
        var katb_widget_rotate_interval_0 = setInterval(katb_widget_rotate_testimonials_0, speed_w_0);
        jQuery('#katb_widget_rotator_0').hover(function() {
            clearInterval(katb_widget_rotate_interval_0);
        }, function() {
            katb_widget_rotate_interval_0 = setInterval(katb_widget_rotate_testimonials_0, speed_w_0);
        });
    }
    if (jQuery('#katb_widget_rotator_1').length > 0) {
        var katb_widget_rotate_options = this.getElementById('katb_widget_rotator_1');
        try {
            var speed_w_1 = katb_widget_rotate_options.dataset.katb_speed;
        } catch (e) {
            var speed_w_1 = 7000;
        }
        var katb_widget_rotate_interval_1 = setInterval(katb_widget_rotate_testimonials_1, speed_w_1);
        jQuery('#katb_widget_rotator_1').hover(function() {
            clearInterval(katb_widget_rotate_interval_1);
        }, function() {
            katb_widget_rotate_interval_1 = setInterval(katb_widget_rotate_testimonials_1, speed_w_1);
        });
    }
    if (jQuery('#katb_widget_rotator_2').length > 0) {
        var katb_widget_rotate_options = this.getElementById('katb_widget_rotator_2');
        try {
            var speed_w_2 = katb_widget_rotate_options.dataset.katb_speed;
        } catch (e) {
            var speed_w_2 = 7000;
        }
        var katb_widget_rotate_interval_2 = setInterval(katb_widget_rotate_testimonials_2, speed_w_2);
        jQuery('#katb_widget_rotator_2').hover(function() {
            clearInterval(katb_widget_rotate_interval_2);
        }, function() {
            katb_widget_rotate_interval_2 = setInterval(katb_widget_rotate_testimonials_2, speed_w_2);
        });
    }
    if (jQuery('#katb_widget_rotator_3').length > 0) {
        var katb_widget_rotate_options = this.getElementById('katb_widget_rotator_3');
        try {
            var speed_w_3 = katb_widget_rotate_options.dataset.katb_speed;
        } catch (e) {
            var speed_w_3 = 7000;
        }
        var katb_widget_rotate_interval_3 = setInterval(katb_widget_rotate_testimonials_3, speed_w_3);
        jQuery('#katb_widget_rotator_3').hover(function() {
            clearInterval(katb_widget_rotate_interval_3);
        }, function() {
            katb_widget_rotate_interval_3 = setInterval(katb_widget_rotate_testimonials_3, speed_w_3);
        });
    }
    if (jQuery('#katb_widget_rotator_4').length > 0) {
        var katb_widget_rotate_options = this.getElementById('katb_widget_rotator_4');
        try {
            var speed_w_4 = katb_widget_rotate_options.dataset.katb_speed;
        } catch (e) {
            var speed_w_4 = 7000;
        }
        var katb_widget_rotate_interval_4 = setInterval(katb_widget_rotate_testimonials_4, speed_w_4);
        jQuery('#katb_widget_rotator_4').hover(function() {
            clearInterval(katb_widget_rotate_interval_4);
        }, function() {
            katb_widget_rotate_interval_4 = setInterval(katb_widget_rotate_testimonials_4, speed_w_4);
        });
    }
});

function katb_rotate_testimonials_0() {
    var katb_rotate_options = document.getElementById('katb_rotator_0');
    try {
        var transition = katb_rotate_options.dataset.katb_transition;
    } catch (e) {
        var transition = 'fade';
    }
    var current = jQuery('#katb_rotator_0 .katb_rotate_show');
    var next = current.nextAll('#katb_rotator_0 .katb_rotate_noshow').first().length ? current.nextAll('#katb_rotator_0 .katb_rotate_noshow').first() : current.parent().children('.katb_rotate_noshow:first');
    current.hide().removeClass('katb_rotate_show').addClass('katb_rotate_noshow');
    if (transition == 'left to right') {
        next.show('slide', {
            direction: 'left'
        }, 1000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show')
    } else if (transition == 'right to left') {
        next.show('slide', {
            direction: 'right'
        }, 1000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show')
    } else {
        next.fadeIn(2000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show');
    }
};

function katb_rotate_testimonials_1() {
    var katb_rotate_options = document.getElementById('katb_rotator_1');
    try {
        var transition = katb_rotate_options.dataset.katb_transition;
    } catch (e) {
        var transition = 'fade';
    }
    var current = jQuery('#katb_rotator_1 .katb_rotate_show');
    var next = current.nextAll('#katb_rotator_1 .katb_rotate_noshow').first().length ? current.nextAll('#katb_rotator_1 .katb_rotate_noshow').first() : current.parent().children('.katb_rotate_noshow:first');
    current.hide().removeClass('katb_rotate_show').addClass('katb_rotate_noshow');
    if (transition == 'left to right') {
        next.show('slide', {
            direction: 'left'
        }, 1000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show')
    } else if (transition == 'right to left') {
        next.show('slide', {
            direction: 'right'
        }, 1000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show')
    } else {
        next.fadeIn(2000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show');
    }
};

function katb_rotate_testimonials_2() {
    var katb_rotate_options = document.getElementById('katb_rotator_2');
    try {
        var transition = katb_rotate_options.dataset.katb_transition;
    } catch (e) {
        var transition = 'fade';
    }
    var current = jQuery('#katb_rotator_2 .katb_rotate_show');
    var next = current.nextAll('#katb_rotator_2 .katb_rotate_noshow').first().length ? current.nextAll('#katb_rotator_2 .katb_rotate_noshow').first() : current.parent().children('.katb_rotate_noshow:first');
    current.hide().removeClass('katb_rotate_show').addClass('katb_rotate_noshow');
    if (transition == 'left to right') {
        next.show('slide', {
            direction: 'left'
        }, 1000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show')
    } else if (transition == 'right to left') {
        next.show('slide', {
            direction: 'right'
        }, 1000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show')
    } else {
        next.fadeIn(2000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show');
    }
};

function katb_rotate_testimonials_3() {
    var katb_rotate_options = document.getElementById('katb_rotator_3');
    try {
        var transition = katb_rotate_options.dataset.katb_transition;
    } catch (e) {
        var transition = 'fade';
    }
    var current = jQuery('#katb_rotator_3 .katb_rotate_show');
    var next = current.nextAll('#katb_rotator_3 .katb_rotate_noshow').first().length ? current.nextAll('#katb_rotator_3 .katb_rotate_noshow').first() : current.parent().children('.katb_rotate_noshow:first');
    current.hide().removeClass('katb_rotate_show').addClass('katb_rotate_noshow');
    if (transition == 'left to right') {
        next.show('slide', {
            direction: 'left'
        }, 1000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show')
    } else if (transition == 'right to left') {
        next.show('slide', {
            direction: 'right'
        }, 1000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show')
    } else {
        next.fadeIn(2000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show');
    }
};

function katb_rotate_testimonials_4() {
    var katb_rotate_options = document.getElementById('katb_rotator_4');
    try {
        var transition = katb_rotate_options.dataset.katb_transition;
    } catch (e) {
        var transition = 'fade';
    }
    var current = jQuery('#katb_rotator_4 .katb_rotate_show');
    var next = current.nextAll('#katb_rotator_4 .katb_rotate_noshow').first().length ? current.nextAll('#katb_rotator_4 .katb_rotate_noshow').first() : current.parent().children('.katb_rotate_noshow:first');
    current.hide().removeClass('katb_rotate_show').addClass('katb_rotate_noshow');
    if (transition == 'left to right') {
        next.show('slide', {
            direction: 'left'
        }, 1000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show')
    } else if (transition == 'right to left') {
        next.show('slide', {
            direction: 'right'
        }, 1000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show')
    } else {
        next.fadeIn(2000).removeClass('katb_rotate_noshow').addClass('katb_rotate_show');
    }
};

function katb_widget_rotate_testimonials_0() {
    var katb_widget_rotate_options = document.getElementById('katb_widget_rotator_0');
    try {
        var transition = katb_widget_rotate_options.dataset.katb_transition;
    } catch (e) {
        var transition = 'fade';
    }
    var current = jQuery('#katb_widget_rotator_0 .katb_widget_rotate_show');
    var next = current.nextAll('#katb_widget_rotator_0 .katb_widget_rotate_noshow').first().length ? current.nextAll('#katb_widget_rotator_0 .katb_widget_rotate_noshow').first() : current.parent().children('.katb_widget_rotate_noshow:first');
    current.hide().removeClass('katb_widget_rotate_show').addClass('katb_widget_rotate_noshow');
    if (transition == 'left to right') {
        next.show('slide', {
            direction: 'left'
        }, 1000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show')
    } else if (transition == 'right to left') {
        next.show('slide', {
            direction: 'right'
        }, 1000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show')
    } else {
        next.fadeIn(2000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show');
    }
};

function katb_widget_rotate_testimonials_1() {
    var katb_widget_rotate_options = document.getElementById('katb_widget_rotator_1');
    try {
        var transition = katb_widget_rotate_options.dataset.katb_transition;
    } catch (e) {
        var transition = 'fade';
    }
    var current = jQuery('#katb_widget_rotator_1 .katb_widget_rotate_show');
    var next = current.nextAll('#katb_widget_rotator_1 .katb_widget_rotate_noshow').first().length ? current.nextAll('#katb_widget_rotator_1 .katb_widget_rotate_noshow').first() : current.parent().children('.katb_widget_rotate_noshow:first');
    current.hide().removeClass('katb_widget_rotate_show').addClass('katb_widget_rotate_noshow');
    if (transition == 'left to right') {
        next.show('slide', {
            direction: 'left'
        }, 1000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show')
    } else if (transition == 'right to left') {
        next.show('slide', {
            direction: 'right'
        }, 1000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show')
    } else {
        next.fadeIn(2000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show');
    }
};

function katb_widget_rotate_testimonials_2() {
    var katb_widget_rotate_options = document.getElementById('katb_widget_rotator_2');
    try {
        var transition = katb_widget_rotate_options.dataset.katb_transition;
    } catch (e) {
        var transition = 'fade';
    }
    var current = jQuery('#katb_widget_rotator_2 .katb_widget_rotate_show');
    var next = current.nextAll('#katb_widget_rotator_2 .katb_widget_rotate_noshow').first().length ? current.nextAll('#katb_widget_rotator_2 .katb_widget_rotate_noshow').first() : current.parent().children('.katb_widget_rotate_noshow:first');
    current.hide().removeClass('katb_widget_rotate_show').addClass('katb_widget_rotate_noshow');
    if (transition == 'left to right') {
        next.show('slide', {
            direction: 'left'
        }, 1000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show')
    } else if (transition == 'right to left') {
        next.show('slide', {
            direction: 'right'
        }, 1000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show')
    } else {
        next.fadeIn(2000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show');
    }
};

function katb_widget_rotate_testimonials_3() {
    var katb_widget_rotate_options = document.getElementById('katb_widget_rotator_3');
    try {
        var transition = katb_widget_rotate_options.dataset.katb_transition;
    } catch (e) {
        var transition = 'fade';
    }
    var current = jQuery('#katb_widget_rotator_3 .katb_widget_rotate_show');
    var next = current.nextAll('#katb_widget_rotator_3 .katb_widget_rotate_noshow').first().length ? current.nextAll('#katb_widget_rotator_3 .katb_widget_rotate_noshow').first() : current.parent().children('.katb_widget_rotate_noshow:first');
    current.hide().removeClass('katb_widget_rotate_show').addClass('katb_widget_rotate_noshow');
    if (transition == 'left to right') {
        next.show('slide', {
            direction: 'left'
        }, 1000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show')
    } else if (transition == 'right to left') {
        next.show('slide', {
            direction: 'right'
        }, 1000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show')
    } else {
        next.fadeIn(2000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show');
    }
};

function katb_widget_rotate_testimonials_4() {
    var katb_widget_rotate_options = document.getElementById('katb_widget_rotator_4');
    try {
        var transition = katb_widget_rotate_options.dataset.katb_transition;
    } catch (e) {
        var transition = 'fade';
    }
    var current = jQuery('#katb_widget_rotator_4 .katb_widget_rotate_show');
    var next = current.nextAll('#katb_widget_rotator_4 .katb_widget_rotate_noshow').first().length ? current.nextAll('#katb_widget_rotator_4 .katb_widget_rotate_noshow').first() : current.parent().children('.katb_widget_rotate_noshow:first');
    current.hide().removeClass('katb_widget_rotate_show').addClass('katb_widget_rotate_noshow');
    if (transition == 'left to right') {
        next.show('slide', {
            direction: 'left'
        }, 1000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show')
    } else if (transition == 'right to left') {
        next.show('slide', {
            direction: 'right'
        }, 1000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show')
    } else {
        next.fadeIn(2000).removeClass('katb_widget_rotate_noshow').addClass('katb_widget_rotate_show');
    }
};
/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = "ui-effects-",
        c = a;
    /*!
     * jQuery Color Animations v2.1.2
     * https://github.com/jquery/jquery-color
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Wed Jan 16 08:47:09 2013 -0600
     */
    return a.effects = {
            effect: {}
        },
        function(a, b) {
            function c(a, b, c) {
                var d = l[b.type] || {};
                return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
            }

            function d(b) {
                var c = j(),
                    d = c._rgba = [];
                return b = b.toLowerCase(), o(i, function(a, e) {
                    var f, g = e.re.exec(b),
                        h = g && e.parse(g),
                        i = e.space || "rgba";
                    return h ? (f = c[i](h), c[k[i].cache] = f[k[i].cache], d = c._rgba = f._rgba, !1) : void 0
                }), d.length ? ("0,0,0,0" === d.join() && a.extend(d, f.transparent), c) : f[b]
            }

            function e(a, b, c) {
                return c = (c + 1) % 1, 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
            }
            var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                h = /^([\-+])=\s*(\d+\.?\d*)/,
                i = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(a) {
                        return [a[1], a[2], a[3], a[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(a) {
                        return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(a) {
                        return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(a) {
                        return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(a) {
                        return [a[1], a[2] / 100, a[3] / 100, a[4]]
                    }
                }],
                j = a.Color = function(b, c, d, e) {
                    return new a.Color.fn.parse(b, c, d, e)
                },
                k = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                l = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                m = j.support = {},
                n = a("<p>")[0],
                o = a.each;
            n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function(a, b) {
                b.cache = "_" + a, b.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), j.fn = a.extend(j.prototype, {
                parse: function(e, g, h, i) {
                    if (e === b) return this._rgba = [null, null, null, null], this;
                    (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                    var l = this,
                        m = a.type(e),
                        n = this._rgba = [];
                    return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
                        n[b.idx] = c(e[b.idx], b)
                    }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
                        e[b.cache] && (l[b.cache] = e[b.cache].slice())
                    }) : o(k, function(b, d) {
                        var f = d.cache;
                        o(d.props, function(a, b) {
                            if (!l[f] && d.to) {
                                if ("alpha" === a || null == e[a]) return;
                                l[f] = d.to(l._rgba)
                            }
                            l[f][b.idx] = c(e[a], b, !0)
                        }), l[f] && a.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
                    }), this) : void 0
                },
                is: function(a) {
                    var b = j(a),
                        c = !0,
                        d = this;
                    return o(k, function(a, e) {
                        var f, g = b[e.cache];
                        return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], o(e.props, function(a, b) {
                            return null != g[b.idx] ? c = g[b.idx] === f[b.idx] : void 0
                        })), c
                    }), c
                },
                _space: function() {
                    var a = [],
                        b = this;
                    return o(k, function(c, d) {
                        b[d.cache] && a.push(c)
                    }), a.pop()
                },
                transition: function(a, b) {
                    var d = j(a),
                        e = d._space(),
                        f = k[e],
                        g = 0 === this.alpha() ? j("transparent") : this,
                        h = g[f.cache] || f.to(g._rgba),
                        i = h.slice();
                    return d = d[f.cache], o(f.props, function(a, e) {
                        var f = e.idx,
                            g = h[f],
                            j = d[f],
                            k = l[e.type] || {};
                        null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
                    }), this[e](i)
                },
                blend: function(b) {
                    if (1 === this._rgba[3]) return this;
                    var c = this._rgba.slice(),
                        d = c.pop(),
                        e = j(b)._rgba;
                    return j(a.map(c, function(a, b) {
                        return (1 - d) * e[b] + d * a
                    }))
                },
                toRgbaString: function() {
                    var b = "rgba(",
                        c = a.map(this._rgba, function(a, b) {
                            return null == a ? b > 2 ? 1 : 0 : a
                        });
                    return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
                },
                toHslaString: function() {
                    var b = "hsla(",
                        c = a.map(this.hsla(), function(a, b) {
                            return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                        });
                    return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
                },
                toHexString: function(b) {
                    var c = this._rgba.slice(),
                        d = c.pop();
                    return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                        return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
                if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                var b, c, d = a[0] / 255,
                    e = a[1] / 255,
                    f = a[2] / 255,
                    g = a[3],
                    h = Math.max(d, e, f),
                    i = Math.min(d, e, f),
                    j = h - i,
                    k = h + i,
                    l = .5 * k;
                return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
            }, k.hsla.from = function(a) {
                if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                var b = a[0] / 360,
                    c = a[1],
                    d = a[2],
                    f = a[3],
                    g = .5 >= d ? d * (1 + c) : d + c - d * c,
                    h = 2 * d - g;
                return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
            }, o(k, function(d, e) {
                var f = e.props,
                    g = e.cache,
                    i = e.to,
                    k = e.from;
                j.fn[d] = function(d) {
                    if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
                    var e, h = a.type(d),
                        l = "array" === h || "object" === h ? d : arguments,
                        m = this[g].slice();
                    return o(f, function(a, b) {
                        var d = l["object" === h ? a : b.idx];
                        null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
                    }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
                }, o(f, function(b, c) {
                    j.fn[b] || (j.fn[b] = function(e) {
                        var f, g = a.type(e),
                            i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
                            j = this[i](),
                            k = j[c.idx];
                        return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
                    })
                })
            }), j.hook = function(b) {
                var c = b.split(" ");
                o(c, function(b, c) {
                    a.cssHooks[c] = {
                        set: function(b, e) {
                            var f, g, h = "";
                            if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                                if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                    for (g = "backgroundColor" === c ? b.parentNode : b;
                                        ("" === h || "transparent" === h) && g && g.style;) try {
                                        h = a.css(g, "backgroundColor"), g = g.parentNode
                                    } catch (i) {}
                                    e = e.blend(h && "transparent" !== h ? h : "_default")
                                }
                                e = e.toRgbaString()
                            }
                            try {
                                b.style[c] = e
                            } catch (i) {}
                        }
                    }, a.fx.step[c] = function(b) {
                        b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                    }
                })
            }, j.hook(g), a.cssHooks.borderColor = {
                expand: function(a) {
                    var b = {};
                    return o(["Top", "Right", "Bottom", "Left"], function(c, d) {
                        b["border" + d + "Color"] = a
                    }), b
                }
            }, f = a.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(c),
        function() {
            function b(b) {
                var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                    f = {};
                if (e && e.length && e[0] && e[e[0]])
                    for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]);
                else
                    for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
                return f
            }

            function d(b, c) {
                var d, e, g = {};
                for (d in c) e = c[d], b[d] !== e && (f[d] || (a.fx.step[d] || !isNaN(parseFloat(e))) && (g[d] = e));
                return g
            }
            var e = ["add", "remove", "toggle"],
                f = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, d) {
                a.fx.step[d] = function(a) {
                    ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (c.style(a.elem, d, a.end), a.setAttr = !0)
                }
            }), a.fn.addBack || (a.fn.addBack = function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }), a.effects.animateClass = function(c, f, g, h) {
                var i = a.speed(f, g, h);
                return this.queue(function() {
                    var f, g = a(this),
                        h = g.attr("class") || "",
                        j = i.children ? g.find("*").addBack() : g;
                    j = j.map(function() {
                        var c = a(this);
                        return {
                            el: c,
                            start: b(this)
                        }
                    }), f = function() {
                        a.each(e, function(a, b) {
                            c[b] && g[b + "Class"](c[b])
                        })
                    }, f(), j = j.map(function() {
                        return this.end = b(this.el[0]), this.diff = d(this.start, this.end), this
                    }), g.attr("class", h), j = j.map(function() {
                        var b = this,
                            c = a.Deferred(),
                            d = a.extend({}, i, {
                                queue: !1,
                                complete: function() {
                                    c.resolve(b)
                                }
                            });
                        return this.el.animate(this.diff, d), c.promise()
                    }), a.when.apply(a, j.get()).done(function() {
                        f(), a.each(arguments, function() {
                            var b = this.el;
                            a.each(this.diff, function(a) {
                                b.css(a, "")
                            })
                        }), i.complete.call(g[0])
                    })
                })
            }, a.fn.extend({
                addClass: function(b) {
                    return function(c, d, e, f) {
                        return d ? a.effects.animateClass.call(this, {
                            add: c
                        }, d, e, f) : b.apply(this, arguments)
                    }
                }(a.fn.addClass),
                removeClass: function(b) {
                    return function(c, d, e, f) {
                        return arguments.length > 1 ? a.effects.animateClass.call(this, {
                            remove: c
                        }, d, e, f) : b.apply(this, arguments)
                    }
                }(a.fn.removeClass),
                toggleClass: function(b) {
                    return function(c, d, e, f, g) {
                        return "boolean" == typeof d || void 0 === d ? e ? a.effects.animateClass.call(this, d ? {
                            add: c
                        } : {
                            remove: c
                        }, e, f, g) : b.apply(this, arguments) : a.effects.animateClass.call(this, {
                            toggle: c
                        }, d, e, f)
                    }
                }(a.fn.toggleClass),
                switchClass: function(b, c, d, e, f) {
                    return a.effects.animateClass.call(this, {
                        add: c,
                        remove: b
                    }, d, e, f)
                }
            })
        }(),
        function() {
            function c(b, c, d, e) {
                return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                    effect: b
                }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
            }

            function d(b) {
                return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ? a.isFunction(b) ? !0 : "object" != typeof b || b.effect ? !1 : !0 : !0
            }
            a.extend(a.effects, {
                version: "1.11.4",
                save: function(a, c) {
                    for (var d = 0; d < c.length; d++) null !== c[d] && a.data(b + c[d], a[0].style[c[d]])
                },
                restore: function(a, c) {
                    var d, e;
                    for (e = 0; e < c.length; e++) null !== c[e] && (d = a.data(b + c[e]), void 0 === d && (d = ""), a.css(c[e], d))
                },
                setMode: function(a, b) {
                    return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
                },
                getBaseline: function(a, b) {
                    var c, d;
                    switch (a[0]) {
                        case "top":
                            c = 0;
                            break;
                        case "middle":
                            c = .5;
                            break;
                        case "bottom":
                            c = 1;
                            break;
                        default:
                            c = a[0] / b.height
                    }
                    switch (a[1]) {
                        case "left":
                            d = 0;
                            break;
                        case "center":
                            d = .5;
                            break;
                        case "right":
                            d = 1;
                            break;
                        default:
                            d = a[1] / b.width
                    }
                    return {
                        x: d,
                        y: c
                    }
                },
                createWrapper: function(b) {
                    if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                    var c = {
                            width: b.outerWidth(!0),
                            height: b.outerHeight(!0),
                            "float": b.css("float")
                        },
                        d = a("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        e = {
                            width: b.width(),
                            height: b.height()
                        },
                        f = document.activeElement;
                    try {
                        f.id
                    } catch (g) {
                        f = document.body
                    }
                    return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({
                        position: "relative"
                    }), b.css({
                        position: "relative"
                    })) : (a.extend(c, {
                        position: b.css("position"),
                        zIndex: b.css("z-index")
                    }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                        c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                    }), b.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), b.css(e), d.css(c).show()
                },
                removeWrapper: function(b) {
                    var c = document.activeElement;
                    return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
                },
                setTransition: function(b, c, d, e) {
                    return e = e || {}, a.each(c, function(a, c) {
                        var f = b.cssUnit(c);
                        f[0] > 0 && (e[c] = f[0] * d + f[1])
                    }), e
                }
            }), a.fn.extend({
                effect: function() {
                    function b(b) {
                        function c() {
                            a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
                        }
                        var e = a(this),
                            f = d.complete,
                            h = d.mode;
                        (e.is(":hidden") ? "hide" === h : "show" === h) ? (e[h](), c()) : g.call(e[0], d, c)
                    }
                    var d = c.apply(this, arguments),
                        e = d.mode,
                        f = d.queue,
                        g = a.effects.effect[d.effect];
                    return a.fx.off || !g ? e ? this[e](d.duration, d.complete) : this.each(function() {
                        d.complete && d.complete.call(this)
                    }) : f === !1 ? this.each(b) : this.queue(f || "fx", b)
                },
                show: function(a) {
                    return function(b) {
                        if (d(b)) return a.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "show", this.effect.call(this, e)
                    }
                }(a.fn.show),
                hide: function(a) {
                    return function(b) {
                        if (d(b)) return a.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "hide", this.effect.call(this, e)
                    }
                }(a.fn.hide),
                toggle: function(a) {
                    return function(b) {
                        if (d(b) || "boolean" == typeof b) return a.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "toggle", this.effect.call(this, e)
                    }
                }(a.fn.toggle),
                cssUnit: function(b) {
                    var c = this.css(b),
                        d = [];
                    return a.each(["em", "px", "%", "pt"], function(a, b) {
                        c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                    }), d
                }
            })
        }(),
        function() {
            var b = {};
            a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
                b[c] = function(b) {
                    return Math.pow(b, a + 2)
                }
            }), a.extend(b, {
                Sine: function(a) {
                    return 1 - Math.cos(a * Math.PI / 2)
                },
                Circ: function(a) {
                    return 1 - Math.sqrt(1 - a * a)
                },
                Elastic: function(a) {
                    return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(a) {
                    return a * a * (3 * a - 2)
                },
                Bounce: function(a) {
                    for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
                }
            }), a.each(b, function(b, c) {
                a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                    return 1 - c(1 - a)
                }, a.easing["easeInOut" + b] = function(a) {
                    return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
                }
            })
        }(), a.effects
});
/*!
 * jQuery UI Effects Slide 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./effect"], a) : a(jQuery)
}(function(a) {
    return a.effects.effect.slide = function(b, c) {
        var d, e = a(this),
            f = ["position", "top", "bottom", "left", "right", "width", "height"],
            g = a.effects.setMode(e, b.mode || "show"),
            h = "show" === g,
            i = b.direction || "left",
            j = "up" === i || "down" === i ? "top" : "left",
            k = "up" === i || "left" === i,
            l = {};
        a.effects.save(e, f), e.show(), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0), a.effects.createWrapper(e).css({
            overflow: "hidden"
        }), h && e.css(j, k ? isNaN(d) ? "-" + d : -d : d), l[j] = (h ? k ? "+=" : "-=" : k ? "-=" : "+=") + d, e.animate(l, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
            }
        })
    }
});;
window.Modernizr = function(a, b, c) {
        function D(a, b) {
            var c = a.charAt(0).toUpperCase() + a.substr(1),
                d = (a + " " + o.join(c + " ") + c).split(" ");
            return C(d, b)
        }

        function C(a, b) {
            for (var d in a)
                if (k[a[d]] !== c) return b == "pfx" ? a[d] : !0;
            return !1
        }

        function B(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function A(a, b) {
            return typeof a === b
        }

        function z(a, b) {
            return y(n.join(a + ";") + (b || ""))
        }

        function y(a) {
            k.cssText = a
        }
        var d = "2.0.6",
            e = {},
            f = !0,
            g = b.documentElement,
            h = b.head || b.getElementsByTagName("head")[0],
            i = "modernizr",
            j = b.createElement(i),
            k = j.style,
            l, m = Object.prototype.toString,
            n = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
            o = "Webkit Moz O ms Khtml".split(" "),
            p = {},
            q = {},
            r = {},
            s = [],
            t = function(a, c, d, e) {
                var f, h, j, k = b.createElement("div");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : i + (d + 1), k.appendChild(j);
                f = ["&shy;", "<style>", a, "</style>"].join(""), k.id = i, k.innerHTML += f, g.appendChild(k), h = c(k, a), k.parentNode.removeChild(k);
                return !!h
            },
            u = function(b) {
                if (a.matchMedia) return matchMedia(b).matches;
                var c;
                t("@media " + b + " { #" + i + " { position: absolute; } }", function(b) {
                    c = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position == "absolute"
                });
                return c
            },
            v, w = {}.hasOwnProperty,
            x;
        !A(w, c) && !A(w.call, c) ? x = function(a, b) {
            return w.call(a, b)
        } : x = function(a, b) {
            return b in a && A(a.constructor.prototype[b], c)
        }, p.rgba = function() {
            y("background-color:rgba(150,255,150,.5)");
            return B(k.backgroundColor, "rgba")
        }, p.boxshadow = function() {
            return D("boxShadow")
        }, p.csstransitions = function() {
            return D("transitionProperty")
        };
        for (var E in p) x(p, E) && (v = E.toLowerCase(), e[v] = p[E](), s.push((e[v] ? "" : "no-") + v));
        e.addTest = function(a, b) {
            if (typeof a == "object")
                for (var d in a) x(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return;
                b = typeof b == "boolean" ? b : !!b(), g.className += " " + (b ? "" : "no-") + a, e[a] = b
            }
            return e
        }, y(""), j = l = null, a.attachEvent && function() {
            var a = b.createElement("div");
            a.innerHTML = "<elem></elem>";
            return a.childNodes.length !== 1
        }() && function(a, b) {
            function s(a) {
                var b = -1;
                while (++b < g) a.createElement(f[b])
            }
            a.iepp = a.iepp || {};
            var d = a.iepp,
                e = d.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                f = e.split("|"),
                g = f.length,
                h = new RegExp("(^|\\s)(" + e + ")", "gi"),
                i = new RegExp("<(/*)(" + e + ")", "gi"),
                j = /^\s*[\{\}]\s*$/,
                k = new RegExp("(^|[^\\n]*?\\s)(" + e + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
                l = b.createDocumentFragment(),
                m = b.documentElement,
                n = m.firstChild,
                o = b.createElement("body"),
                p = b.createElement("style"),
                q = /print|all/,
                r;
            d.getCSS = function(a, b) {
                if (a + "" === c) return "";
                var e = -1,
                    f = a.length,
                    g, h = [];
                while (++e < f) {
                    g = a[e];
                    if (g.disabled) continue;
                    b = g.media || b, q.test(b) && h.push(d.getCSS(g.imports, b), g.cssText), b = "all"
                }
                return h.join("")
            }, d.parseCSS = function(a) {
                var b = [],
                    c;
                while ((c = k.exec(a)) != null) b.push(((j.exec(c[1]) ? "\n" : c[1]) + c[2] + c[3]).replace(h, "$1.iepp_$2") + c[4]);
                return b.join("\n")
            }, d.writeHTML = function() {
                var a = -1;
                r = r || b.body;
                while (++a < g) {
                    var c = b.getElementsByTagName(f[a]),
                        d = c.length,
                        e = -1;
                    while (++e < d) c[e].className.indexOf("iepp_") < 0 && (c[e].className += " iepp_" + f[a])
                }
                l.appendChild(r), m.appendChild(o), o.className = r.className, o.id = r.id, o.innerHTML = r.innerHTML.replace(i, "<$1font")
            }, d._beforePrint = function() {
                p.styleSheet.cssText = d.parseCSS(d.getCSS(b.styleSheets, "all")), d.writeHTML()
            }, d.restoreHTML = function() {
                o.innerHTML = "", m.removeChild(o), m.appendChild(r)
            }, d._afterPrint = function() {
                d.restoreHTML(), p.styleSheet.cssText = ""
            }, s(b), s(l);
            d.disablePP || (n.insertBefore(p, n.firstChild), p.media = "print", p.className = "iepp-printshim", a.attachEvent("onbeforeprint", d._beforePrint), a.attachEvent("onafterprint", d._afterPrint))
        }(a, b), e._version = d, e._prefixes = n, e._domPrefixes = o, e.mq = u, e.testProp = function(a) {
            return C([a])
        }, e.testAllProps = D, e.testStyles = t, g.className = g.className.replace(/\bno-js\b/, "") + (f ? " js " + s.join(" ") : "");
        return e
    }(this, this.document),
    function(a, b) {
        function u() {
            r(!0)
        }
        a.respond = {}, respond.update = function() {}, respond.mediaQueriesSupported = b;
        if (!b) {
            var c = a.document,
                d = c.documentElement,
                e = [],
                f = [],
                g = [],
                h = {},
                i = 30,
                j = c.getElementsByTagName("head")[0] || d,
                k = j.getElementsByTagName("link"),
                l = [],
                m = function() {
                    var b = k,
                        c = b.length,
                        d = 0,
                        e, f, g, i;
                    for (; d < c; d++) e = b[d], f = e.href, g = e.media, i = e.rel && e.rel.toLowerCase() === "stylesheet", !!f && i && !h[f] && (!/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(f) || f.replace(RegExp.$1, "").split("/")[0] === a.location.host ? l.push({
                        href: f,
                        media: g
                    }) : h[f] = !0);
                    n()
                },
                n = function() {
                    if (l.length) {
                        var a = l.shift();
                        s(a.href, function(b) {
                            o(b, a.href, a.media), h[a.href] = !0, n()
                        })
                    }
                },
                o = function(a, b, c) {
                    var d = a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),
                        g = d && d.length || 0,
                        b = b.substring(0, b.lastIndexOf("/")),
                        h = function(a) {
                            return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + b + "$2$3")
                        },
                        i = !g && c,
                        j = 0,
                        k, l, m, n, o;
                    b.length && (b += "/"), i && (g = 1);
                    for (; j < g; j++) {
                        k = 0, i ? (l = c, f.push(h(a))) : (l = d[j].match(/@media ([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, f.push(RegExp.$2 && h(RegExp.$2))), n = l.split(","), o = n.length;
                        for (; k < o; k++) m = n[k], e.push({
                            media: m.match(/(only\s+)?([a-zA-Z]+)(\sand)?/) && RegExp.$2,
                            rules: f.length - 1,
                            minw: m.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1),
                            maxw: m.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1)
                        })
                    }
                    r()
                },
                p, q, r = function(a) {
                    var b = "clientWidth",
                        h = d[b],
                        l = c.compatMode === "CSS1Compat" && h || c.body[b] || h,
                        m = {},
                        n = c.createDocumentFragment(),
                        o = k[k.length - 1],
                        s = (new Date).getTime();
                    if (a && p && s - p < i) clearTimeout(q), q = setTimeout(r, i);
                    else {
                        p = s;
                        for (var t in e) {
                            var u = e[t];
                            if (!u.minw && !u.maxw || (!u.minw || u.minw && l >= u.minw) && (!u.maxw || u.maxw && l <= u.maxw)) m[u.media] || (m[u.media] = []), m[u.media].push(f[u.rules])
                        }
                        for (var t in g) g[t] && g[t].parentNode === j && j.removeChild(g[t]);
                        for (var t in m) {
                            var v = c.createElement("style"),
                                w = m[t].join("\n");
                            v.type = "text/css", v.media = t, v.styleSheet ? v.styleSheet.cssText = w : v.appendChild(c.createTextNode(w)), n.appendChild(v), g.push(v)
                        }
                        j.insertBefore(n, o.nextSibling)
                    }
                },
                s = function(a, b) {
                    var c = t();
                    if (!!c) {
                        c.open("GET", a, !0), c.onreadystatechange = function() {
                            c.readyState == 4 && (c.status == 200 || c.status == 304) && b(c.responseText)
                        };
                        if (c.readyState == 4) return;
                        c.send()
                    }
                },
                t = function() {
                    var a = !1,
                        b = [function() {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        }, function() {
                            return new XMLHttpRequest
                        }],
                        c = b.length;
                    while (c--) {
                        try {
                            a = b[c]()
                        } catch (d) {
                            continue
                        }
                        break
                    }
                    return function() {
                        return a
                    }
                }();
            m(), respond.update = m, a.addEventListener ? a.addEventListener("resize", u, !1) : a.attachEvent && a.attachEvent("onresize", u)
        }
    }(this, Modernizr.mq("only all")),
    function(a, b, c) {
        function k(a) {
            return !a || a == "loaded" || a == "complete"
        }

        function j() {
            var a = 1,
                b = -1;
            while (p.length - ++b)
                if (p[b].s && !(a = p[b].r)) break;
            a && g()
        }

        function i(a) {
            var c = b.createElement("script"),
                d;
            c.src = a.s, c.onreadystatechange = c.onload = function() {
                !d && k(c.readyState) && (d = 1, j(), c.onload = c.onreadystatechange = null)
            }, m(function() {
                d || (d = 1, j())
            }, H.errorTimeout), a.e ? c.onload() : n.parentNode.insertBefore(c, n)
        }

        function h(a) {
            var c = b.createElement("link"),
                d;
            c.href = a.s, c.rel = "stylesheet", c.type = "text/css";
            if (!a.e && (w || r)) {
                var e = function(a) {
                    m(function() {
                        if (!d) try {
                            a.sheet.cssRules.length ? (d = 1, j()) : e(a)
                        } catch (b) {
                            b.code == 1e3 || b.message == "security" || b.message == "denied" ? (d = 1, m(function() {
                                j()
                            }, 0)) : e(a)
                        }
                    }, 0)
                };
                e(c)
            } else c.onload = function() {
                d || (d = 1, m(function() {
                    j()
                }, 0))
            }, a.e && c.onload();
            m(function() {
                d || (d = 1, j())
            }, H.errorTimeout), !a.e && n.parentNode.insertBefore(c, n)
        }

        function g() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                a.t == "c" ? h(a) : i(a)
            }, 0) : (a(), j()) : q = 0
        }

        function f(a, c, d, e, f, h) {
            function i() {
                !o && k(l.readyState) && (r.r = o = 1, !q && j(), l.onload = l.onreadystatechange = null, m(function() {
                    u.removeChild(l)
                }, 0))
            }
            var l = b.createElement(a),
                o = 0,
                r = {
                    t: d,
                    s: c,
                    e: h
                };
            l.src = l.data = c, !s && (l.style.display = "none"), l.width = l.height = "0", a != "object" && (l.type = d), l.onload = l.onreadystatechange = i, a == "img" ? l.onerror = i : a == "script" && (l.onerror = function() {
                r.e = r.r = 1, g()
            }), p.splice(e, 0, r), u.insertBefore(l, s ? null : n), m(function() {
                o || (u.removeChild(l), r.r = r.e = o = 1, j())
            }, H.errorTimeout)
        }

        function e(a, b, c) {
            var d = b == "c" ? z : y;
            q = 0, b = b || "j", C(a) ? f(d, a, b, this.i++, l, c) : (p.splice(this.i++, 0, a), p.length == 1 && g());
            return this
        }

        function d() {
            var a = H;
            a.loader = {
                load: e,
                i: 0
            };
            return a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = r && !s,
            u = s ? l : n.parentNode,
            v = a.opera && o.call(a.opera) == "[object Opera]",
            w = "webkitAppearance" in l.style,
            x = w && "async" in b.createElement("script"),
            y = r ? "object" : v || x ? "img" : "script",
            z = w ? "img" : y,
            A = Array.isArray || function(a) {
                return o.call(a) == "[object Array]"
            },
            B = function(a) {
                return Object(a) === a
            },
            C = function(a) {
                return typeof a == "string"
            },
            D = function(a) {
                return o.call(a) == "[object Function]"
            },
            E = [],
            F = {},
            G, H;
        H = function(a) {
            function f(a) {
                var b = a.split("!"),
                    c = E.length,
                    d = b.pop(),
                    e = b.length,
                    f = {
                        url: d,
                        origUrl: d,
                        prefixes: b
                    },
                    g, h;
                for (h = 0; h < e; h++) g = F[b[h]], g && (f = g(f));
                for (h = 0; h < c; h++) f = E[h](f);
                return f
            }

            function e(a, b, e, g, h) {
                var i = f(a),
                    j = i.autoCallback;
                if (!i.bypass) {
                    b && (b = D(b) ? b : b[a] || b[g] || b[a.split("/").pop().split("?")[0]]);
                    if (i.instead) return i.instead(a, b, e, g, h);
                    e.load(i.url, i.forceCSS || !i.forceJS && /css$/.test(i.url) ? "c" : c, i.noexec), (D(b) || D(j)) && e.load(function() {
                        d(), b && b(i.origUrl, h, g), j && j(i.origUrl, h, g)
                    })
                }
            }

            function b(a, b) {
                function c(a) {
                    if (C(a)) e(a, h, b, 0, d);
                    else if (B(a))
                        for (i in a) a.hasOwnProperty(i) && e(a[i], h, b, i, d)
                }
                var d = !!a.test,
                    f = d ? a.yep : a.nope,
                    g = a.load || a.both,
                    h = a.callback,
                    i;
                c(f), c(g), a.complete && b.load(a.complete)
            }
            var g, h, i = this.yepnope.loader;
            if (C(a)) e(a, 0, i, 0);
            else if (A(a))
                for (g = 0; g < a.length; g++) h = a[g], C(h) ? e(h, 0, i, 0) : A(h) ? H(h) : B(h) && b(h, i);
            else B(a) && b(a, i)
        }, H.addPrefix = function(a, b) {
            F[a] = b
        }, H.addFilter = function(a) {
            E.push(a)
        }, H.errorTimeout = 1e4, b.readyState == null && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", G = function() {
            b.removeEventListener("DOMContentLoaded", G, 0), b.readyState = "complete"
        }, 0)), a.yepnope = d()
    }(this, this.document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */
(function(a) {
    var b = {
            vertical: !1,
            rtl: !1,
            start: 1,
            offset: 1,
            size: null,
            scroll: 3,
            visible: null,
            animation: "normal",
            easing: "swing",
            auto: 0,
            wrap: null,
            initCallback: null,
            setupCallback: null,
            reloadCallback: null,
            itemLoadCallback: null,
            itemFirstInCallback: null,
            itemFirstOutCallback: null,
            itemLastInCallback: null,
            itemLastOutCallback: null,
            itemVisibleInCallback: null,
            itemVisibleOutCallback: null,
            animationStepCallback: null,
            buttonNextHTML: "<div></div>",
            buttonPrevHTML: "<div></div>",
            buttonNextEvent: "click",
            buttonPrevEvent: "click",
            buttonNextCallback: null,
            buttonPrevCallback: null,
            itemFallbackDimension: null
        },
        c = !1;
    a(window).bind("load.jcarousel", function() {
        c = !0
    }), a.jcarousel = function(e, f) {
        this.options = a.extend({}, b, f || {}), this.locked = !1, this.autoStopped = !1, this.container = null, this.clip = null, this.list = null, this.buttonNext = null, this.buttonPrev = null, this.buttonNextState = null, this.buttonPrevState = null, f && void 0 !== f.rtl || (this.options.rtl = "rtl" == (a(e).attr("dir") || a("html").attr("dir") || "").toLowerCase()), this.wh = this.options.vertical ? "height" : "width", this.lt = this.options.vertical ? "top" : this.options.rtl ? "right" : "left";
        for (var g = "", h = e.className.split(" "), i = 0; h.length > i; i++)
            if (-1 != h[i].indexOf("jcarousel-skin")) {
                a(e).removeClass(h[i]), g = h[i];
                break
            }
            "UL" == e.nodeName.toUpperCase() || "OL" == e.nodeName.toUpperCase() ? (this.list = a(e), this.clip = this.list.parents(".jcarousel-clip"), this.container = this.list.parents(".jcarousel-container")) : (this.container = a(e), this.list = this.container.find("ul,ol").eq(0), this.clip = this.container.find(".jcarousel-clip")), 0 === this.clip.size() && (this.clip = this.list.wrap("<div></div>").parent()), 0 === this.container.size() && (this.container = this.clip.wrap("<div></div>").parent()), "" !== g && -1 == this.container.parent()[0].className.indexOf("jcarousel-skin") && this.container.wrap('<div class=" ' + g + '"></div>'), this.buttonPrev = a(".jcarousel-prev", this.container), 0 === this.buttonPrev.size() && null !== this.options.buttonPrevHTML && (this.buttonPrev = a(this.options.buttonPrevHTML).appendTo(this.container)), this.buttonPrev.addClass(this.className("jcarousel-prev")), this.buttonNext = a(".jcarousel-next", this.container), 0 === this.buttonNext.size() && null !== this.options.buttonNextHTML && (this.buttonNext = a(this.options.buttonNextHTML).appendTo(this.container)), this.buttonNext.addClass(this.className("jcarousel-next")), this.clip.addClass(this.className("jcarousel-clip")).css({
            position: "relative"
        }), this.list.addClass(this.className("jcarousel-list")).css({
            overflow: "hidden",
            position: "relative",
            top: 0,
            margin: 0,
            padding: 0
        }).css(this.options.rtl ? "right" : "left", 0), this.container.addClass(this.className("jcarousel-container")).css({
            position: "relative"
        }), !this.options.vertical && this.options.rtl && this.container.addClass("jcarousel-direction-rtl").attr("dir", "rtl");
        var j = null !== this.options.visible ? Math.ceil(this.clipping() / this.options.visible) : null,
            k = this.list.children("li"),
            l = this;
        if (k.size() > 0) {
            var m = 0,
                n = this.options.offset;
            k.each(function() {
                l.format(this, n++), m += l.dimension(this, j)
            }), this.list.css(this.wh, m + 100 + "px"), f && void 0 !== f.size || (this.options.size = k.size())
        }
        this.container.css("display", "block"), this.buttonNext.css("display", "block"), this.buttonPrev.css("display", "block"), this.funcNext = function() {
            return l.next(), !1
        }, this.funcPrev = function() {
            return l.prev(), !1
        }, this.funcResize = function() {
            l.resizeTimer && clearTimeout(l.resizeTimer), l.resizeTimer = setTimeout(function() {
                l.reload()
            }, 100)
        }, null !== this.options.initCallback && this.options.initCallback(this, "init"), !c && d.isSafari() ? (this.buttons(!1, !1), a(window).bind("load.jcarousel", function() {
            l.setup()
        })) : this.setup()
    };
    var d = a.jcarousel;
    d.fn = d.prototype = {
        jcarousel: "0.2.9"
    }, d.fn.extend = d.extend = a.extend, d.fn.extend({
        setup: function() {
            if (this.first = null, this.last = null, this.prevFirst = null, this.prevLast = null, this.animating = !1, this.timer = null, this.resizeTimer = null, this.tail = null, this.inTail = !1, !this.locked) {
                this.list.css(this.lt, this.pos(this.options.offset) + "px");
                var b = this.pos(this.options.start, !0);
                this.prevFirst = this.prevLast = null, this.animate(b, !1), a(window).unbind("resize.jcarousel", this.funcResize).bind("resize.jcarousel", this.funcResize), null !== this.options.setupCallback && this.options.setupCallback(this)
            }
        },
        reset: function() {
            this.list.empty(), this.list.css(this.lt, "0px"), this.list.css(this.wh, "10px"), null !== this.options.initCallback && this.options.initCallback(this, "reset"), this.setup()
        },
        reload: function() {
            if (null !== this.tail && this.inTail && this.list.css(this.lt, d.intval(this.list.css(this.lt)) + this.tail), this.tail = null, this.inTail = !1, null !== this.options.reloadCallback && this.options.reloadCallback(this), null !== this.options.visible) {
                var a = this,
                    b = Math.ceil(this.clipping() / this.options.visible),
                    c = 0,
                    e = 0;
                this.list.children("li").each(function(d) {
                    c += a.dimension(this, b), a.first > d + 1 && (e = c)
                }), this.list.css(this.wh, c + "px"), this.list.css(this.lt, -e + "px")
            }
            this.scroll(this.first, !1)
        },
        lock: function() {
            this.locked = !0, this.buttons()
        },
        unlock: function() {
            this.locked = !1, this.buttons()
        },
        size: function(a) {
            return void 0 !== a && (this.options.size = a, this.locked || this.buttons()), this.options.size
        },
        has: function(a, b) {
            void 0 !== b && b || (b = a), null !== this.options.size && b > this.options.size && (b = this.options.size);
            for (var c = a; b >= c; c++) {
                var d = this.get(c);
                if (!d.length || d.hasClass("jcarousel-item-placeholder")) return !1
            }
            return !0
        },
        get: function(b) {
            return a(">.jcarousel-item-" + b, this.list)
        },
        add: function(b, c) {
            var e = this.get(b),
                f = 0,
                g = a(c);
            if (0 === e.length) {
                var h, i = d.intval(b);
                for (e = this.create(b);;)
                    if (h = this.get(--i), 0 >= i || h.length) {
                        0 >= i ? this.list.prepend(e) : h.after(e);
                        break
                    }
            } else f = this.dimension(e);
            "LI" == g.get(0).nodeName.toUpperCase() ? (e.replaceWith(g), e = g) : e.empty().append(c), this.format(e.removeClass(this.className("jcarousel-item-placeholder")), b);
            var j = null !== this.options.visible ? Math.ceil(this.clipping() / this.options.visible) : null,
                k = this.dimension(e, j) - f;
            return b > 0 && this.first > b && this.list.css(this.lt, d.intval(this.list.css(this.lt)) - k + "px"), this.list.css(this.wh, d.intval(this.list.css(this.wh)) + k + "px"), e
        },
        remove: function(a) {
            var b = this.get(a);
            if (b.length && !(a >= this.first && this.last >= a)) {
                var c = this.dimension(b);
                this.first > a && this.list.css(this.lt, d.intval(this.list.css(this.lt)) + c + "px"), b.remove(), this.list.css(this.wh, d.intval(this.list.css(this.wh)) - c + "px")
            }
        },
        next: function() {
            null === this.tail || this.inTail ? this.scroll("both" != this.options.wrap && "last" != this.options.wrap || null === this.options.size || this.last != this.options.size ? this.first + this.options.scroll : 1) : this.scrollTail(!1)
        },
        prev: function() {
            null !== this.tail && this.inTail ? this.scrollTail(!0) : this.scroll("both" != this.options.wrap && "first" != this.options.wrap || null === this.options.size || 1 != this.first ? this.first - this.options.scroll : this.options.size)
        },
        scrollTail: function(a) {
            if (!this.locked && !this.animating && this.tail) {
                this.pauseAuto();
                var b = d.intval(this.list.css(this.lt));
                b = a ? b + this.tail : b - this.tail, this.inTail = !a, this.prevFirst = this.first, this.prevLast = this.last, this.animate(b)
            }
        },
        scroll: function(a, b) {
            this.locked || this.animating || (this.pauseAuto(), this.animate(this.pos(a), b))
        },
        pos: function(a, b) {
            var c = d.intval(this.list.css(this.lt));
            if (this.locked || this.animating) return c;
            "circular" != this.options.wrap && (a = 1 > a ? 1 : this.options.size && a > this.options.size ? this.options.size : a);
            for (var m, e = this.first > a, f = "circular" != this.options.wrap && 1 >= this.first ? 1 : this.first, g = e ? this.get(f) : this.get(this.last), h = e ? f : f - 1, i = null, j = 0, k = !1, l = 0; e ? --h >= a : a > ++h;) i = this.get(h), k = !i.length, 0 === i.length && (i = this.create(h).addClass(this.className("jcarousel-item-placeholder")), g[e ? "before" : "after"](i), null !== this.first && "circular" == this.options.wrap && null !== this.options.size && (0 >= h || h > this.options.size) && (m = this.get(this.index(h)), m.length && (i = this.add(h, m.clone(!0))))), g = i, l = this.dimension(i), k && (j += l), null !== this.first && ("circular" == this.options.wrap || h >= 1 && (null === this.options.size || this.options.size >= h)) && (c = e ? c + l : c - l);
            var n = this.clipping(),
                o = [],
                p = 0,
                q = 0;
            for (g = this.get(a - 1), h = a; ++p;) {
                if (i = this.get(h), k = !i.length, 0 === i.length && (i = this.create(h).addClass(this.className("jcarousel-item-placeholder")), 0 === g.length ? this.list.prepend(i) : g[e ? "before" : "after"](i), null !== this.first && "circular" == this.options.wrap && null !== this.options.size && (0 >= h || h > this.options.size) && (m = this.get(this.index(h)), m.length && (i = this.add(h, m.clone(!0))))), g = i, l = this.dimension(i), 0 === l) throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");
                if ("circular" != this.options.wrap && null !== this.options.size && h > this.options.size ? o.push(i) : k && (j += l), q += l, q >= n) break;
                h++
            }
            for (var r = 0; o.length > r; r++) o[r].remove();
            j > 0 && (this.list.css(this.wh, this.dimension(this.list) + j + "px"), e && (c -= j, this.list.css(this.lt, d.intval(this.list.css(this.lt)) - j + "px")));
            var s = a + p - 1;
            if ("circular" != this.options.wrap && this.options.size && s > this.options.size && (s = this.options.size), h > s)
                for (p = 0, h = s, q = 0; ++p && (i = this.get(h--), i.length) && (q += this.dimension(i), !(q >= n)););
            var t = s - p + 1;
            if ("circular" != this.options.wrap && 1 > t && (t = 1), this.inTail && e && (c += this.tail, this.inTail = !1), this.tail = null, "circular" != this.options.wrap && s == this.options.size && s - p + 1 >= 1) {
                var u = d.intval(this.get(s).css(this.options.vertical ? "marginBottom" : "marginRight"));
                q - u > n && (this.tail = q - n - u)
            }
            for (b && a === this.options.size && this.tail && (c -= this.tail, this.inTail = !0); a-- > t;) c += this.dimension(this.get(a));
            return this.prevFirst = this.first, this.prevLast = this.last, this.first = t, this.last = s, c
        },
        animate: function(b, c) {
            if (!this.locked && !this.animating) {
                this.animating = !0;
                var d = this,
                    e = function() {
                        if (d.animating = !1, 0 === b && d.list.css(d.lt, 0), !d.autoStopped && ("circular" == d.options.wrap || "both" == d.options.wrap || "last" == d.options.wrap || null === d.options.size || d.last < d.options.size || d.last == d.options.size && null !== d.tail && !d.inTail) && d.startAuto(), d.buttons(), d.notify("onAfterAnimation"), "circular" == d.options.wrap && null !== d.options.size)
                            for (var a = d.prevFirst; d.prevLast >= a; a++) null === a || a >= d.first && d.last >= a || !(1 > a || a > d.options.size) || d.remove(a)
                    };
                if (this.notify("onBeforeAnimation"), this.options.animation && c !== !1) {
                    var f = this.options.vertical ? {
                            top: b
                        } : this.options.rtl ? {
                            right: b
                        } : {
                            left: b
                        },
                        g = {
                            duration: this.options.animation,
                            easing: this.options.easing,
                            complete: e
                        };
                    a.isFunction(this.options.animationStepCallback) && (g.step = this.options.animationStepCallback), this.list.animate(f, g)
                } else this.list.css(this.lt, b + "px"), e()
            }
        },
        startAuto: function(a) {
            if (void 0 !== a && (this.options.auto = a), 0 === this.options.auto) return this.stopAuto();
            if (null === this.timer) {
                this.autoStopped = !1;
                var b = this;
                this.timer = window.setTimeout(function() {
                    b.next()
                }, 1e3 * this.options.auto)
            }
        },
        stopAuto: function() {
            this.pauseAuto(), this.autoStopped = !0
        },
        pauseAuto: function() {
            null !== this.timer && (window.clearTimeout(this.timer), this.timer = null)
        },
        buttons: function(a, b) {
            null == a && (a = !this.locked && 0 !== this.options.size && (this.options.wrap && "first" != this.options.wrap || null === this.options.size || this.last < this.options.size), this.locked || this.options.wrap && "first" != this.options.wrap || null === this.options.size || !(this.last >= this.options.size) || (a = null !== this.tail && !this.inTail)), null == b && (b = !this.locked && 0 !== this.options.size && (this.options.wrap && "last" != this.options.wrap || this.first > 1), this.locked || this.options.wrap && "last" != this.options.wrap || null === this.options.size || 1 != this.first || (b = null !== this.tail && this.inTail));
            var c = this;
            this.buttonNext.size() > 0 ? (this.buttonNext.unbind(this.options.buttonNextEvent + ".jcarousel", this.funcNext), a && this.buttonNext.bind(this.options.buttonNextEvent + ".jcarousel", this.funcNext), this.buttonNext[a ? "removeClass" : "addClass"](this.className("jcarousel-next-disabled")).attr("disabled", a ? !1 : !0), null !== this.options.buttonNextCallback && this.buttonNext.data("jcarouselstate") != a && this.buttonNext.each(function() {
                c.options.buttonNextCallback(c, this, a)
            }).data("jcarouselstate", a)) : null !== this.options.buttonNextCallback && this.buttonNextState != a && this.options.buttonNextCallback(c, null, a), this.buttonPrev.size() > 0 ? (this.buttonPrev.unbind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev), b && this.buttonPrev.bind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev), this.buttonPrev[b ? "removeClass" : "addClass"](this.className("jcarousel-prev-disabled")).attr("disabled", b ? !1 : !0), null !== this.options.buttonPrevCallback && this.buttonPrev.data("jcarouselstate") != b && this.buttonPrev.each(function() {
                c.options.buttonPrevCallback(c, this, b)
            }).data("jcarouselstate", b)) : null !== this.options.buttonPrevCallback && this.buttonPrevState != b && this.options.buttonPrevCallback(c, null, b), this.buttonNextState = a, this.buttonPrevState = b
        },
        notify: function(a) {
            var b = null === this.prevFirst ? "init" : this.prevFirst < this.first ? "next" : "prev";
            this.callback("itemLoadCallback", a, b), this.prevFirst !== this.first && (this.callback("itemFirstInCallback", a, b, this.first), this.callback("itemFirstOutCallback", a, b, this.prevFirst)), this.prevLast !== this.last && (this.callback("itemLastInCallback", a, b, this.last), this.callback("itemLastOutCallback", a, b, this.prevLast)), this.callback("itemVisibleInCallback", a, b, this.first, this.last, this.prevFirst, this.prevLast), this.callback("itemVisibleOutCallback", a, b, this.prevFirst, this.prevLast, this.first, this.last)
        },
        callback: function(b, c, d, e, f, g, h) {
            if (null != this.options[b] && ("object" == typeof this.options[b] || "onAfterAnimation" == c)) {
                var i = "object" == typeof this.options[b] ? this.options[b][c] : this.options[b];
                if (a.isFunction(i)) {
                    var j = this;
                    if (void 0 === e) i(j, d, c);
                    else if (void 0 === f) this.get(e).each(function() {
                        i(j, this, e, d, c)
                    });
                    else
                        for (var k = function(a) {
                                j.get(a).each(function() {
                                    i(j, this, a, d, c)
                                })
                            }, l = e; f >= l; l++) null === l || l >= g && h >= l || k(l)
                }
            }
        },
        create: function(a) {
            return this.format("<li></li>", a)
        },
        format: function(b, c) {
            b = a(b);
            for (var d = b.get(0).className.split(" "), e = 0; d.length > e; e++) - 1 != d[e].indexOf("jcarousel-") && b.removeClass(d[e]);
            return b.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-" + c)).css({
                "float": this.options.rtl ? "right" : "left",
                "list-style": "none"
            }).attr("jcarouselindex", c), b
        },
        className: function(a) {
            return a + " " + a + (this.options.vertical ? "-vertical" : "-horizontal")
        },
        dimension: function(b, c) {
            var e = a(b);
            if (null == c) return this.options.vertical ? e.innerHeight() + d.intval(e.css("margin-top")) + d.intval(e.css("margin-bottom")) + d.intval(e.css("border-top-width")) + d.intval(e.css("border-bottom-width")) || d.intval(this.options.itemFallbackDimension) : e.innerWidth() + d.intval(e.css("margin-left")) + d.intval(e.css("margin-right")) + d.intval(e.css("border-left-width")) + d.intval(e.css("border-right-width")) || d.intval(this.options.itemFallbackDimension);
            var f = this.options.vertical ? c - d.intval(e.css("marginTop")) - d.intval(e.css("marginBottom")) : c - d.intval(e.css("marginLeft")) - d.intval(e.css("marginRight"));
            return a(e).css(this.wh, f + "px"), this.dimension(e)
        },
        clipping: function() {
            return this.options.vertical ? this.clip[0].offsetHeight - d.intval(this.clip.css("borderTopWidth")) - d.intval(this.clip.css("borderBottomWidth")) : this.clip[0].offsetWidth - d.intval(this.clip.css("borderLeftWidth")) - d.intval(this.clip.css("borderRightWidth"))
        },
        index: function(a, b) {
            return null == b && (b = this.options.size), Math.round(((a - 1) / b - Math.floor((a - 1) / b)) * b) + 1
        }
    }), d.extend({
        defaults: function(c) {
            return a.extend(b, c || {})
        },
        intval: function(a) {
            return a = parseInt(a, 10), isNaN(a) ? 0 : a
        },
        windowLoaded: function() {
            c = !0
        },
        isSafari: function() {
            var a = navigator.userAgent.toLowerCase(),
                b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || [],
                c = b[1] || "";
            return "webkit" === c
        }
    }), a.fn.jcarousel = function(b) {
        if ("string" == typeof b) {
            var c = a(this).data("jcarousel"),
                e = Array.prototype.slice.call(arguments, 1);
            return c[b].apply(c, e)
        }
        return this.each(function() {
            var c = a(this).data("jcarousel");
            c ? (b && a.extend(c.options, b), c.reload()) : a(this).data("jcarousel", new d(this, b))
        })
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, a, c, b, d) {
        return jQuery.easing[jQuery.easing.def](e, a, c, b, d)
    },
    easeInQuad: function(e, a, c, b, d) {
        return b * (a /= d) * a + c
    },
    easeOutQuad: function(e, a, c, b, d) {
        return -b * (a /= d) * (a - 2) + c
    },
    easeInOutQuad: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a + c;
        return -b / 2 * (--a * (a - 2) - 1) + c
    },
    easeInCubic: function(e, a, c, b, d) {
        return b * (a /= d) * a * a + c
    },
    easeOutCubic: function(e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + c
    },
    easeInOutCubic: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a + c;
        return b / 2 * ((a -= 2) * a * a + 2) + c
    },
    easeInQuart: function(e, a, c, b, d) {
        return b * (a /= d) * a * a * a + c
    },
    easeOutQuart: function(e, a, c, b, d) {
        return -b * ((a = a / d - 1) * a * a * a - 1) + c
    },
    easeInOutQuart: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a * a + c;
        return -b / 2 * ((a -= 2) * a * a * a - 2) + c
    },
    easeInQuint: function(e, a, c, b, d) {
        return b * (a /= d) * a * a * a * a + c
    },
    easeOutQuint: function(e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a * a * a + 1) + c
    },
    easeInOutQuint: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a * a * a + c;
        return b / 2 * ((a -= 2) * a * a * a * a + 2) + c
    },
    easeInSine: function(e, a, c, b, d) {
        return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
    },
    easeOutSine: function(e, a, c, b, d) {
        return b * Math.sin(a / d * (Math.PI / 2)) + c
    },
    easeInOutSine: function(e, a, c, b, d) {
        return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
    },
    easeInExpo: function(e, a, c, b, d) {
        return a == 0 ? c : b * Math.pow(2, 10 * (a / d - 1)) + c
    },
    easeOutExpo: function(e, a, c, b, d) {
        return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c
    },
    easeInOutExpo: function(e, a, c, b, d) {
        if (a == 0) return c;
        if (a == d) return c + b;
        if ((a /= d / 2) < 1) return b / 2 * Math.pow(2, 10 * (a - 1)) + c;
        return b / 2 * (-Math.pow(2, -10 * --a) + 2) + c
    },
    easeInCirc: function(e, a, c, b, d) {
        return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c
    },
    easeOutCirc: function(e, a, c, b, d) {
        return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
    },
    easeInOutCirc: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return -b / 2 * (Math.sqrt(1 - a * a) - 1) + c;
        return b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
    },
    easeInElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f)) + c
    },
    easeOutElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c
    },
    easeInOutElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d / 2) == 2) return c + b;
        f || (f = d * 0.3 * 1.5);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        if (a < 1) return -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + c;
        return g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) * 0.5 + b + c
    },
    easeInBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        return b * (a /= d) * a * ((f + 1) * a - f) + c
    },
    easeOutBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c
    },
    easeInOutBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        if ((a /= d / 2) < 1) return b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c;
        return b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
    },
    easeInBounce: function(e, a, c, b, d) {
        return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c
    },
    easeOutBounce: function(e, a, c, b, d) {
        return (a /= d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
    },
    easeInOutBounce: function(e, a, c, b, d) {
        if (a < d / 2) return jQuery.easing.easeInBounce(e, a * 2, 0, b, d) * 0.5 + c;
        return jQuery.easing.easeOutBounce(e, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c
    }
});
(function(C, z, f, r) {
    var q = f(C),
        n = f(z),
        b = f.fancybox = function() {
            b.open.apply(this, arguments)
        },
        H = navigator.userAgent.match(/msie/i),
        w = null,
        s = z.createTouch !== r,
        t = function(a) {
            return a && a.hasOwnProperty && a instanceof f
        },
        p = function(a) {
            return a && "string" === f.type(a)
        },
        F = function(a) {
            return p(a) && 0 < a.indexOf("%")
        },
        l = function(a, d) {
            var e = parseInt(a, 10) || 0;
            d && F(a) && (e *= b.getViewport()[d] / 100);
            return Math.ceil(e)
        },
        x = function(a, b) {
            return l(a, b) + "px"
        };
    f.extend(b, {
        version: "2.1.4",
        defaults: {
            padding: 5,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (H ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
                var k = {},
                    g, h, j, m, l;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
                    href: c.data("fancybox-href") || c.attr("href"),
                    title: c.data("fancybox-title") || c.attr("title"),
                    isDom: !0,
                    element: c
                }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
                g = d.href || k.href || (p(c) ? c : null);
                h = d.title !== r ? d.title : k.title || "";
                m = (j = d.content || k.content) ? "html" : d.type || k.type;
                !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
                p(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : p(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
                j || ("inline" === m ? g ? j = f(p(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
                f.extend(k, {
                    href: g,
                    type: m,
                    content: j,
                    title: h,
                    selector: l
                });
                a[e] = k
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== r && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function() {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
        },
        close: function(a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
        },
        play: function(a) {
            var d = function() {
                    clearTimeout(b.player.timer)
                },
                e = function() {
                    d();
                    b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
                },
                c = function() {
                    d();
                    f("body").unbind(".player");
                    b.player.isActive = !1;
                    b.trigger("onPlayEnd")
                };
            if (!0 === a || !b.player.isActive && !1 !== a) {
                if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, f("body").bind({
                    "afterShow.player onUpdate.player": e,
                    "onCancel.player beforeClose.player": c,
                    "beforeLoad.player": d
                }), e(), b.trigger("onPlayStart")
            } else c()
        },
        next: function(a) {
            var d = b.current;
            d && (p(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        },
        prev: function(a) {
            var d = b.current;
            d && (p(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function(a, d, e) {
            var c = b.current;
            c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== r && (b.cancel(), b._start(a)))
        },
        reposition: function(a, d) {
            var e = b.current,
                c = e ? e.wrap : null,
                k;
            c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
        },
        update: function(a) {
            var d = a && a.type,
                e = !d || "orientationchange" === d;
            e && (clearTimeout(w), w = null);
            b.isOpen && !w && (w = setTimeout(function() {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), w = null)
            }, e && !s ? 0 : 300))
        },
        toggle: function(a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
        },
        hideLoading: function() {
            n.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function() {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            n.bind("keydown.loading", function(a) {
                if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
            });
            b.defaults.fixed || (d = b.getViewport(), a.css({
                position: "absolute",
                top: 0.5 * d.h + d.y,
                left: 0.5 * d.w + d.x
            }))
        },
        getViewport: function() {
            var a = b.current && b.current.locked || !1,
                d = {
                    x: q.scrollLeft(),
                    y: q.scrollTop()
                };
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && C.innerWidth ? C.innerWidth : q.width(), d.h = s && C.innerHeight ? C.innerHeight : q.height());
            return d
        },
        unbindEvents: function() {
            b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            n.unbind(".fb");
            q.unbind(".fb")
        },
        bindEvents: function() {
            var a = b.current,
                d;
            a && (q.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && n.bind("keydown.fb", function(e) {
                var c = e.which || e.keyCode,
                    k = e.target || e.srcElement;
                if (27 === c && b.coming) return !1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) {
                    if (1 < a.group.length && k[c] !== r) return b[d](k[c]), e.preventDefault(), !1;
                    if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1
                })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
                for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
                    if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
                    else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
                    d.preventDefault()
                }
            }))
        },
        trigger: function(a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e) return !1;
                c.helpers && f.each(c.helpers, function(d, e) {
                    e && (b.helpers[d] && f.isFunction(b.helpers[d][a])) && (e = f.extend(!0, {}, b.helpers[d].defaults, e), b.helpers[d][a](e, c))
                });
                f.event.trigger(a + ".fb")
            }
        },
        isImage: function(a) {
            return p(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)
        },
        isSWF: function(a) {
            return p(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(a) {
            var d = {},
                e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e) return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad")) b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
                    d.skin.css("padding" + b, x(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length) return b._error("content")
                } else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function(a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function() {
            var a = b.imgPreload = new Image;
            a.onload = function() {
                this.onload = this.onerror = null;
                b.coming.width = this.width;
                b.coming.height = this.height;
                b._afterLoad()
            };
            a.onerror = function() {
                this.onload = this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function() {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href,
                error: function(a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                },
                success: function(d, e) {
                    "success" === e && (a.content = d, b._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var a = b.coming,
                d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {}
            });
            a.iframe.preload && (b.showLoading(), d.one("load", function() {
                f(this).data("ready", 1);
                s || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function() {
            var a = b.group,
                d = b.current,
                e = a.length,
                c = d.preload ? Math.min(d.preload, e - 1) : 0,
                f, g;
            for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function() {
            var a = b.coming,
                d = b.current,
                e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
                else {
                    d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    k = a.scrolling;
                    f.extend(b, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: d
                    });
                    g = a.href;
                    switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
                                f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}", g);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) {
                                e += '<param name="' + a + '" value="' + b + '"></param>';
                                h += " " + a + '="' + b + '"'
                            }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                    }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (b.isOpened) {
                        if (d.prevMethod) b.transitions[d.prevMethod]()
                    } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages()
                }
        },
        _setDimension: function() {
            var a = b.getViewport(),
                d = 0,
                e = !1,
                c = !1,
                e = b.wrap,
                k = b.skin,
                g = b.inner,
                h = b.current,
                c = h.width,
                j = h.height,
                m = h.minWidth,
                u = h.minHeight,
                n = h.maxWidth,
                v = h.maxHeight,
                s = h.scrolling,
                q = h.scrollOutside ? h.scrollbarWidth : 0,
                y = h.margin,
                p = l(y[1] + y[3]),
                r = l(y[0] + y[2]),
                z, A, t, D, B, G, C, E, w;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            y = l(k.outerWidth(!0) - k.width());
            z = l(k.outerHeight(!0) - k.height());
            A = p + y;
            t = r + z;
            D = F(c) ? (a.w - A) * l(c) / 100 : c;
            B = F(j) ? (a.h - t) * l(j) / 100 : j;
            if ("iframe" === h.type) {
                if (w = h.content, h.autoHeight && 1 === w.data("ready")) try {
                    w[0].contentWindow.document.location && (g.width(D).height(9999), G = w.contents().find("body"), q && G.css("overflow-x", "hidden"), B = G.height())
                } catch (H) {}
            } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(D), h.autoHeight || g.height(B), h.autoWidth && (D = g.width()), h.autoHeight && (B = g.height()), g.removeClass("fancybox-tmp");
            c = l(D);
            j = l(B);
            E = D / B;
            m = l(F(m) ? l(m, "w") - A : m);
            n = l(F(n) ? l(n, "w") - A : n);
            u = l(F(u) ? l(u, "h") - t : u);
            v = l(F(v) ? l(v, "h") - t : v);
            G = n;
            C = v;
            h.fitToView && (n = Math.min(a.w - A, n), v = Math.min(a.h - t, v));
            A = a.w - p;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n, j = l(c / E)), j > v && (j = v, c = l(j * E)), c < m && (c = m, j = l(c / E)), j < u && (j = u, c = l(j * E))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, v)));
            if (h.fitToView)
                if (g.width(c).height(j), e.width(c + y), a = e.width(), p = e.height(), h.aspectRatio)
                    for (;
                        (a > A || p > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(v, j - 10)), c = l(j * E), c < m && (c = m, j = l(c / E)), c > n && (c = n, j = l(c / E)), g.width(c).height(j), e.width(c + y), a = e.width(), p = e.height();
                else c = Math.max(m, Math.min(c, c - (a - A))), j = Math.max(u, Math.min(j, j - (p - r)));
            q && ("auto" === s && j < B && c + y +
                q < A) && (c += q);
            g.width(c).height(j);
            e.width(c + y);
            a = e.width();
            p = e.height();
            e = (a > A || p > r) && c > m && j > u;
            c = h.aspectRatio ? c < G && j < C && c < D && j < B : (c < G || j < C) && (c < D || j < B);
            f.extend(h, {
                dim: {
                    width: x(a),
                    height: x(p)
                },
                origWidth: D,
                origHeight: B,
                canShrink: e,
                canExpand: c,
                wPadding: y,
                hPadding: z,
                wrapSpace: p - k.outerHeight(!0),
                skinSpace: k.height() - j
            });
            !w && (h.autoHeight && j > u && j < v && !c) && g.height("auto")
        },
        _getPosition: function(a) {
            var d = b.current,
                e = b.getViewport(),
                c = d.margin,
                f = b.wrap.width() + c[1] + c[3],
                g = b.wrap.height() + c[0] + c[2],
                c = {
                    position: "absolute",
                    top: c[0],
                    left: c[3]
                };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = x(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = x(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function() {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
                a.preventDefault();
                b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        },
        _afterZoomOut: function(a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function() {
            var a = b.current,
                d = a.element,
                e = a.orig,
                c = {},
                f = 50,
                g = 50,
                h = a.hPadding,
                j = a.wPadding,
                m = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
            t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
            return c = {
                top: x(c.top - h * a.topRatio),
                left: x(c.left - j * a.leftRatio),
                width: x(f + j),
                height: x(g + h)
            }
        },
        step: function(a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace,
                h = c.skinSpace;
            if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e))
        },
        zoomIn: function() {
            var a = b.current,
                d = a.pos,
                e = a.openEffect,
                c = "elastic" === e,
                k = f.extend({
                    opacity: 1
                }, d);
            delete k.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(k, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        },
        zoomOut: function() {
            var a = b.current,
                d = a.closeEffect,
                e = "elastic" === d,
                c = {
                    opacity: 0.1
                };
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            })
        },
        changeIn: function() {
            var a = b.current,
                d = a.nextEffect,
                e = a.pos,
                c = {
                    opacity: 1
                },
                f = b.direction,
                g;
            e.opacity = 0.1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = x(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = x(l(e[g]) + 200), c[g] = "-=200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: b._afterZoomIn
            })
        },
        changeOut: function() {
            var a = b.previous,
                d = a.prevEffect,
                e = {
                    opacity: 0.1
                },
                c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function() {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !s,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        create: function(a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo("body");
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function(a) {
                f(a.target).hasClass("fancybox-overlay") && (b.isActive ? b.close() : d.close())
            });
            this.overlay.css(a.css).show()
        },
        close: function() {
            f(".fancybox-overlay").remove();
            q.unbind("resize.overlay");
            this.overlay = null;
            !1 !== this.margin && (f("body").css("margin-right", this.margin), this.margin = !1);
            this.el && this.el.removeClass("fancybox-lock")
        },
        update: function() {
            var a = "100%",
                b;
            this.overlay.width(a).height("100%");
            H ? (b = Math.max(z.documentElement.offsetWidth, z.body.offsetWidth), n.width() > b && (a = n.width())) : n.width() > q.width() && (a = n.width());
            this.overlay.width(a).height(n.height())
        },
        onReady: function(a, b) {
            f(".fancybox-overlay").stop(!0, !0);
            this.overlay || (this.margin = n.height() > q.height() || "scroll" === f("body").css("overflow-y") ? f("body").css("margin-right") : !1, this.el = z.all && !z.querySelector ? f("html") : f("body"), this.create(a));
            a.locked && this.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(a, b) {
            b.locked && (this.el.addClass("fancybox-lock"), !1 !== this.margin && f("body").css("margin-right", l(this.margin) + b.scrollbarWidth));
            this.open(a)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(a) {
            this.overlay && !b.isActive && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(a) {
            var d = b.current,
                e = d.title,
                c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (p(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                switch (c) {
                    case "inside":
                        c = b.skin;
                        break;
                    case "outside":
                        c = b.wrap;
                        break;
                    case "over":
                        c = b.inner;
                        break;
                    default:
                        c = b.skin, d.appendTo("body"), H && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }
        }
    };
    f.fn.fancybox = function(a) {
        var d, e = f(this),
            c = this.selector || "",
            k = function(g) {
                var h = f(this).blur(),
                    j = d,
                    k, l;
                !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
            };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : n.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    n.ready(function() {
        f.scrollbarWidth === r && (f.scrollbarWidth = function() {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(),
                b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        if (f.support.fixedPosition === r) {
            var a = f.support,
                d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, {
            scrollbarWidth: f.scrollbarWidth(),
            fixed: f.support.fixedPosition,
            parent: f("body")
        })
    })
})(window, document, jQuery);;
(function(d) {
    d.flexslider = function(i, k) {
        var a = d(i),
            c = d.extend({}, d.flexslider.defaults, k),
            e = c.namespace,
            r = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            s = r ? "touchend" : "click",
            l = "vertical" === c.direction,
            m = c.reverse,
            h = 0 < c.itemWidth,
            q = "fade" === c.animation,
            p = "" !== c.asNavFor,
            f = {};
        d.data(i, "flexslider", a);
        f = {
            init: function() {
                a.animating = !1;
                a.currentSlide = c.startAt;
                a.animatingTo = a.currentSlide;
                a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last;
                a.containerSelector = c.selector.substr(0, c.selector.search(" "));
                a.slides = d(c.selector, a);
                a.container = d(a.containerSelector, a);
                a.count = a.slides.length;
                a.syncExists = 0 < d(c.sync).length;
                "slide" === c.animation && (c.animation = "swing");
                a.prop = l ? "top" : "marginLeft";
                a.args = {};
                a.manualPause = !1;
                var b = a,
                    g;
                if (g = !c.video)
                    if (g = !q)
                        if (g = c.useCSS) a: {
                            g = document.createElement("div");
                            var n = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
                                e;
                            for (e in n)
                                if (void 0 !== g.style[n[e]]) {
                                    a.pfx = n[e].replace("Perspective", "").toLowerCase();
                                    a.prop = "-" + a.pfx + "-transform";
                                    g = !0;
                                    break a
                                }
                            g = !1
                        }
                        b.transitions = g;
                "" !== c.controlsContainer && (a.controlsContainer = 0 < d(c.controlsContainer).length && d(c.controlsContainer));
                "" !== c.manualControls && (a.manualControls = 0 < d(c.manualControls).length && d(c.manualControls));
                c.randomize && (a.slides.sort(function() {
                    return Math.round(Math.random()) - 0.5
                }), a.container.empty().append(a.slides));
                a.doMath();
                p && f.asNav.setup();
                a.setup("init");
                c.controlNav && f.controlNav.setup();
                c.directionNav && f.directionNav.setup();
                c.keyboard && (1 === d(a.containerSelector).length || c.multipleKeyboard) && d(document).bind("keyup", function(b) {
                    b = b.keyCode;
                    if (!a.animating && (b === 39 || b === 37)) {
                        b = b === 39 ? a.getTarget("next") : b === 37 ? a.getTarget("prev") : false;
                        a.flexAnimate(b, c.pauseOnAction)
                    }
                });
                c.mousewheel && a.bind("mousewheel", function(b, g) {
                    b.preventDefault();
                    var d = g < 0 ? a.getTarget("next") : a.getTarget("prev");
                    a.flexAnimate(d, c.pauseOnAction)
                });
                c.pausePlay && f.pausePlay.setup();
                c.slideshow && (c.pauseOnHover && a.hover(function() {
                    !a.manualPlay && !a.manualPause && a.pause()
                }, function() {
                    !a.manualPause && !a.manualPlay && a.play()
                }), 0 < c.initDelay ? setTimeout(a.play, c.initDelay) : a.play());
                r && c.touch && f.touch();
                (!q || q && c.smoothHeight) && d(window).bind("resize focus", f.resize);
                setTimeout(function() {
                    c.start(a)
                }, 200)
            },
            asNav: {
                setup: function() {
                    a.asNav = !0;
                    a.animatingTo = Math.floor(a.currentSlide / a.move);
                    a.currentItem = a.currentSlide;
                    a.slides.removeClass(e + "active-slide").eq(a.currentItem).addClass(e + "active-slide");
                    a.slides.click(function(b) {
                        b.preventDefault();
                        var b = d(this),
                            g = b.index();
                        !d(c.asNavFor).data("flexslider").animating && !b.hasClass("active") && (a.direction = a.currentItem < g ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    a.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var b = 1,
                        g;
                    a.controlNavScaffold = d('<ol class="' + e + "control-nav " + e + ("thumbnails" === c.controlNav ? "control-thumbs" : "control-paging") + '"></ol>');
                    if (1 < a.pagingCount)
                        for (var n = 0; n < a.pagingCount; n++) g = "thumbnails" === c.controlNav ? '<img src="' + a.slides.eq(n).attr("data-thumb") + '"/>' : "<a>" + b + "</a>", a.controlNavScaffold.append("<li>" + g + "</li>"), b++;
                    a.controlsContainer ? d(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold);
                    f.controlNav.set();
                    f.controlNav.active();
                    a.controlNavScaffold.delegate("a, img", s, function(b) {
                        b.preventDefault();
                        var b = d(this),
                            g = a.controlNav.index(b);
                        b.hasClass(e + "active") || (a.direction = g > a.currentSlide ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction))
                    });
                    r && a.controlNavScaffold.delegate("a", "click touchstart", function(a) {
                        a.preventDefault()
                    })
                },
                setupManual: function() {
                    a.controlNav = a.manualControls;
                    f.controlNav.active();
                    a.controlNav.live(s, function(b) {
                        b.preventDefault();
                        var b = d(this),
                            g = a.controlNav.index(b);
                        b.hasClass(e + "active") || (g > a.currentSlide ? a.direction = "next" : a.direction = "prev", a.flexAnimate(g, c.pauseOnAction))
                    });
                    r && a.controlNav.live("click touchstart", function(a) {
                        a.preventDefault()
                    })
                },
                set: function() {
                    a.controlNav = d("." + e + "control-nav li " + ("thumbnails" === c.controlNav ? "img" : "a"), a.controlsContainer ? a.controlsContainer : a)
                },
                active: function() {
                    a.controlNav.removeClass(e + "active").eq(a.animatingTo).addClass(e + "active")
                },
                update: function(b, c) {
                    1 < a.pagingCount && "add" === b ? a.controlNavScaffold.append(d("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(c).closest("li").remove();
                    f.controlNav.set();
                    1 < a.pagingCount && a.pagingCount !== a.controlNav.length ? a.update(c, b) : f.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var b = d('<ul class="' +
                        e + 'direction-nav"><li><a class="' + e + 'prev" href="#">' + c.prevText + '</a></li><li><a class="' + e + 'next" href="#">' + c.nextText + "</a></li></ul>");
                    a.controlsContainer ? (d(a.controlsContainer).append(b), a.directionNav = d("." + e + "direction-nav li a", a.controlsContainer)) : (a.append(b), a.directionNav = d("." + e + "direction-nav li a", a));
                    f.directionNav.update();
                    a.directionNav.bind(s, function(b) {
                        b.preventDefault();
                        b = d(this).hasClass(e + "next") ? a.getTarget("next") : a.getTarget("prev");
                        a.flexAnimate(b, c.pauseOnAction)
                    });
                    r && a.directionNav.bind("click touchstart", function(a) {
                        a.preventDefault()
                    })
                },
                update: function() {
                    var b = e + "disabled";
                    1 === a.pagingCount ? a.directionNav.addClass(b) : c.animationLoop ? a.directionNav.removeClass(b) : 0 === a.animatingTo ? a.directionNav.removeClass(b).filter("." + e + "prev").addClass(b) : a.animatingTo === a.last ? a.directionNav.removeClass(b).filter("." + e + "next").addClass(b) : a.directionNav.removeClass(b)
                }
            },
            pausePlay: {
                setup: function() {
                    var b = d('<div class="' + e + 'pauseplay"><a></a></div>');
                    a.controlsContainer ? (a.controlsContainer.append(b), a.pausePlay = d("." + e + "pauseplay a", a.controlsContainer)) : (a.append(b), a.pausePlay = d("." + e + "pauseplay a", a));
                    f.pausePlay.update(c.slideshow ? e + "pause" : e + "play");
                    a.pausePlay.bind(s, function(b) {
                        b.preventDefault();
                        if (d(this).hasClass(e + "pause")) {
                            a.manualPause = true;
                            a.manualPlay = false;
                            a.pause()
                        } else {
                            a.manualPause = false;
                            a.manualPlay = true;
                            a.play()
                        }
                    });
                    r && a.pausePlay.bind("click touchstart", function(a) {
                        a.preventDefault()
                    })
                },
                update: function(b) {
                    "play" === b ? a.pausePlay.removeClass(e + "pause").addClass(e + "play").text(c.playText) : a.pausePlay.removeClass(e + "play").addClass(e + "pause").text(c.pauseText)
                }
            },
            touch: function() {
                function b(b) {
                    j = l ? d - b.touches[0].pageY : d - b.touches[0].pageX;
                    p = l ? Math.abs(j) < Math.abs(b.touches[0].pageX - e) : Math.abs(j) < Math.abs(b.touches[0].pageY - e);
                    if (!p || 500 < Number(new Date) - k) b.preventDefault(), !q && a.transitions && (c.animationLoop || (j /= 0 === a.currentSlide && 0 > j || a.currentSlide === a.last && 0 < j ? Math.abs(j) / o + 2 : 1), a.setProps(f + j, "setTouch"))
                }

                function g() {
                    if (a.animatingTo === a.currentSlide && !p && null !== j) {
                        var h = m ? -j : j,
                            l = 0 < h ? a.getTarget("next") : a.getTarget("prev");
                        a.canAdvance(l) && (550 > Number(new Date) - k && 50 < Math.abs(h) || Math.abs(h) > o / 2) ? a.flexAnimate(l, c.pauseOnAction) : a.flexAnimate(a.currentSlide, c.pauseOnAction, !0)
                    }
                    i.removeEventListener("touchmove", b, !1);
                    i.removeEventListener("touchend", g, !1);
                    f = j = e = d = null
                }
                var d, e, f, o, j, k, p = !1;
                i.addEventListener("touchstart", function(j) {
                    a.animating ? j.preventDefault() : 1 === j.touches.length && (a.pause(), o = l ? a.h : a.w, k = Number(new Date), f = h && m && a.animatingTo === a.last ? 0 : h && m ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : h && a.currentSlide === a.last ? a.limit : h ? (a.itemW + c.itemMargin) * a.move * a.currentSlide : m ? (a.last - a.currentSlide + a.cloneOffset) * o : (a.currentSlide + a.cloneOffset) * o, d = l ? j.touches[0].pageY : j.touches[0].pageX, e = l ? j.touches[0].pageX : j.touches[0].pageY, i.addEventListener("touchmove", b, !1), i.addEventListener("touchend", g, !1))
                }, !1)
            },
            resize: function() {
                !a.animating && a.is(":visible") && (h || a.doMath(), q ? f.smoothHeight() : h ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : l ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (c.smoothHeight && f.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")))
            },
            smoothHeight: function(b) {
                if (!l || q) {
                    var c = q ? a : a.viewport;
                    b ? c.animate({
                        height: a.slides.eq(a.animatingTo).height()
                    }, b) : c.height(a.slides.eq(a.animatingTo).height())
                }
            },
            sync: function(b) {
                var g = d(c.sync).data("flexslider"),
                    e = a.animatingTo;
                switch (b) {
                    case "animate":
                        g.flexAnimate(e, c.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        !g.playing && !g.asNav && g.play();
                        break;
                    case "pause":
                        g.pause()
                }
            }
        };
        a.flexAnimate = function(b, g, n, i, k) {
            p && 1 === a.pagingCount && (a.direction = a.currentItem < b ? "next" : "prev");
            if (!a.animating && (a.canAdvance(b, k) || n) && a.is(":visible")) {
                if (p && i)
                    if (n = d(c.asNavFor).data("flexslider"), a.atEnd = 0 === b || b === a.count - 1, n.flexAnimate(b, !0, !1, !0, k), a.direction = a.currentItem < b ? "next" : "prev", n.direction = a.direction, Math.ceil((b + 1) / a.visible) - 1 !== a.currentSlide && 0 !== b) a.currentItem = b, a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), b = Math.floor(b / a.visible);
                    else return a.currentItem = b, a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), !1;
                a.animating = !0;
                a.animatingTo = b;
                c.before(a);
                g && a.pause();
                a.syncExists && !k && f.sync("animate");
                c.controlNav && f.controlNav.active();
                h || a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide");
                a.atEnd = 0 === b || b === a.last;
                c.directionNav && f.directionNav.update();
                b === a.last && (c.end(a), c.animationLoop || a.pause());
                if (q) a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed, c.easing), a.slides.eq(b).fadeIn(c.animationSpeed, c.easing, a.wrapup);
                else {
                    var o = l ? a.slides.filter(":first").height() : a.computedW;
                    h ? (b = c.itemWidth > a.w ? 2 * c.itemMargin : c.itemMargin, b = (a.itemW + b) * a.move * a.animatingTo, b = b > a.limit && 1 !== a.visible ? a.limit : b) : b = 0 === a.currentSlide && b === a.count - 1 && c.animationLoop && "next" !== a.direction ? m ? (a.count + a.cloneOffset) * o : 0 : a.currentSlide === a.last && 0 === b && c.animationLoop && "prev" !== a.direction ? m ? 0 : (a.count + 1) * o : m ? (a.count - 1 - b + a.cloneOffset) * o : (b + a.cloneOffset) * o;
                    a.setProps(b, "", c.animationSpeed);
                    if (a.transitions) {
                        if (!c.animationLoop || !a.atEnd) a.animating = !1, a.currentSlide = a.animatingTo;
                        a.container.unbind("webkitTransitionEnd transitionend");
                        a.container.bind("webkitTransitionEnd transitionend", function() {
                            a.wrapup(o)
                        })
                    } else a.container.animate(a.args, c.animationSpeed, c.easing, function() {
                        a.wrapup(o)
                    })
                }
                c.smoothHeight && f.smoothHeight(c.animationSpeed)
            }
        };
        a.wrapup = function(b) {
            !q && !h && (0 === a.currentSlide && a.animatingTo === a.last && c.animationLoop ? a.setProps(b, "jumpEnd") : a.currentSlide === a.last && (0 === a.animatingTo && c.animationLoop) && a.setProps(b, "jumpStart"));
            a.animating = !1;
            a.currentSlide = a.animatingTo;
            c.after(a)
        };
        a.animateSlides = function() {
            a.animating || a.flexAnimate(a.getTarget("next"))
        };
        a.pause = function() {
            clearInterval(a.animatedSlides);
            a.playing = !1;
            c.pausePlay && f.pausePlay.update("play");
            a.syncExists && f.sync("pause")
        };
        a.play = function() {
            a.animatedSlides = setInterval(a.animateSlides, c.slideshowSpeed);
            a.playing = !0;
            c.pausePlay && f.pausePlay.update("pause");
            a.syncExists && f.sync("play")
        };
        a.canAdvance = function(b, g) {
            var d = p ? a.pagingCount - 1 : a.last;
            return g ? !0 : p && a.currentItem === a.count - 1 && 0 === b && "prev" === a.direction ? !0 : p && 0 === a.currentItem && b === a.pagingCount - 1 && "next" !== a.direction ? !1 : b === a.currentSlide && !p ? !1 : c.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && b === d && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === d && 0 === b && "next" === a.direction ? !1 : !0
        };
        a.getTarget = function(b) {
            a.direction = b;
            return "next" === b ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide -
                1
        };
        a.setProps = function(b, g, d) {
            var e, f = b ? b : (a.itemW + c.itemMargin) * a.move * a.animatingTo;
            e = -1 * function() {
                if (h) return "setTouch" === g ? b : m && a.animatingTo === a.last ? 0 : m ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : f;
                switch (g) {
                    case "setTotal":
                        return m ? (a.count - 1 - a.currentSlide + a.cloneOffset) * b : (a.currentSlide + a.cloneOffset) * b;
                    case "setTouch":
                        return b;
                    case "jumpEnd":
                        return m ? b : a.count * b;
                    case "jumpStart":
                        return m ? a.count * b : b;
                    default:
                        return b
                }
            }() + "px";
            a.transitions && (e = l ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)", d = void 0 !== d ? d / 1E3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", d));
            a.args[a.prop] = e;
            (a.transitions || void 0 === d) && a.container.css(a.args)
        };
        a.setup = function(b) {
            if (q) a.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === b && a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed, c.easing), c.smoothHeight && f.smoothHeight();
            else {
                var g, n;
                "init" === b && (a.viewport = d('<div class="' + e + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, m && (n = d.makeArray(a.slides).reverse(), a.slides = d(n), a.container.empty().append(a.slides)));
                c.animationLoop && !h && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== b && a.container.find(".clone").remove(), a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));
                a.newSlides = d(c.selector, a);
                g = m ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset;
                l && !h ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    a.newSlides.css({
                        display: "block"
                    });
                    a.doMath();
                    a.viewport.height(a.h);
                    a.setProps(g * a.h, "init")
                }, "init" === b ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(g * a.computedW, "init"), setTimeout(function() {
                    a.doMath();
                    a.newSlides.css({
                        width: a.computedW,
                        "float": "left",
                        display: "block"
                    });
                    c.smoothHeight && f.smoothHeight()
                }, "init" === b ? 100 : 0))
            }
            h || a.slides.removeClass(e + "active-slide").eq(a.currentSlide).addClass(e + "active-slide")
        };
        a.doMath = function() {
            var b = a.slides.first(),
                d = c.itemMargin,
                e = c.minItems,
                f = c.maxItems;
            a.w = a.width();
            a.h = b.height();
            a.boxPadding = b.outerWidth() - b.width();
            h ? (a.itemT = c.itemWidth + d, a.minW = e ? e * a.itemT : a.w, a.maxW = f ? f * a.itemT : a.w, a.itemW = a.minW > a.w ? (a.w - d * e) / e : a.maxW < a.w ? (a.w - d * f) / f : c.itemWidth > a.w ? a.w : c.itemWidth, a.visible = Math.floor(a.w / (a.itemW + d)), a.move = 0 < c.move && c.move < a.visible ? c.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : c.itemWidth > a.w ? (a.itemW + 2 * d) * a.count - a.w - d : (a.itemW + d) * a.count - a.w - d) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1);
            a.computedW = a.itemW - a.boxPadding
        };
        a.update = function(b, d) {
            a.doMath();
            h || (b < a.currentSlide ? a.currentSlide += 1 : b <= a.currentSlide && 0 !== b && (a.currentSlide -= 1), a.animatingTo = a.currentSlide);
            if (c.controlNav && !a.manualControls)
                if ("add" === d && !h || a.pagingCount > a.controlNav.length) f.controlNav.update("add");
                else if ("remove" === d && !h || a.pagingCount < a.controlNav.length) h && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1), f.controlNav.update("remove", a.last);
            c.directionNav && f.directionNav.update()
        };
        a.addSlide = function(b, e) {
            var f = d(b);
            a.count += 1;
            a.last = a.count - 1;
            l && m ? void 0 !== e ? a.slides.eq(a.count - e).after(f) : a.container.prepend(f) : void 0 !== e ? a.slides.eq(e).before(f) : a.container.append(f);
            a.update(e, "add");
            a.slides = d(c.selector + ":not(.clone)", a);
            a.setup();
            c.added(a)
        };
        a.removeSlide = function(b) {
            var e = isNaN(b) ? a.slides.index(d(b)) : b;
            a.count -= 1;
            a.last = a.count - 1;
            isNaN(b) ? d(b, a.slides).remove() : l && m ? a.slides.eq(a.last).remove() : a.slides.eq(b).remove();
            a.doMath();
            a.update(e, "remove");
            a.slides = d(c.selector + ":not(.clone)", a);
            a.setup();
            c.removed(a)
        };
        f.init()
    };
    d.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7E3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 0,
        maxItems: 0,
        move: 0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {}
    };
    d.fn.flexslider = function(i) {
        void 0 === i && (i = {});
        if ("object" === typeof i) return this.each(function() {
            var a = d(this),
                c = a.find(i.selector ? i.selector : ".slides > li");
            1 === c.length ? (c.fadeIn(400), i.start && i.start(a)) : void 0 === a.data("flexslider") && new d.flexslider(this, i)
        });
        var k = d(this).data("flexslider");
        switch (i) {
            case "play":
                k.play();
                break;
            case "pause":
                k.pause();
                break;
            case "next":
                k.flexAnimate(k.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                k.flexAnimate(k.getTarget("prev"), !0);
                break;
            default:
                "number" === typeof i && k.flexAnimate(i, !0)
        }
    }
})(jQuery);
jQuery(window).load(function() {
    'use strict';
    jQuery("#status").fadeOut();
    jQuery("#preloader").delay(350).fadeOut("slow");
});
jQuery(document).ready(function($) {
    'use strict';
    $('p:empty').remove();
    $('body').on('click', '.pagination.post a', function() {
        $('.ajax-wrapper').children().animate({
            'opacity': '0'
        });
        $('.pagination.post li').removeClass('active');
        $(this).parent().addClass('active');
        var url = $(this).attr('href');
        var $wrapper = $('.ajax-wrapper');
        $.get(url, function(data) {
            var filtered = jQuery(data).find('.ajax-wrapper').children();
            filtered.css({
                'opacity': '0'
            });
            $wrapper.html(filtered);
            filtered.animate({
                'opacity': '1'
            });
        });
        return false;
    });
    $('body').on('click', '.pagination.portfolio a', function() {
        $('.col1-3.works').animate({
            'opacity': '0'
        });
        $('.pagination.portfolio li').removeClass('active');
        $(this).parent().addClass('active');
        var url = $(this).attr('href');
        var $wrapper = $('.ajax-portfolio-wrapper');
        $.get(url, function(data) {
            var filtered = jQuery(data).find('.ajax-portfolio-wrapper').children();
            filtered.css({
                'opacity': '0'
            });
            $wrapper.html(filtered);
            filtered.animate({
                'opacity': '1'
            });
        });
        return false;
    });
});

function mycarousel_initCallback(carousel) {
    'use strict';
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });
    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
};
jQuery(document).ready(function($) {
    'use strict';
    jQuery('#carousel-about').jcarousel({
        scroll: 1,
        initCallback: mycarousel_initCallback
    });
    jQuery('.jcarousel-skin-tango2').hover(function() {
        jQuery('.jcarousel-skin-tango2 .jcarousel-next-horizontal, .jcarousel-skin-tango2 .jcarousel-prev-horizontal').animate({
            opacity: 100
        }, 200);
    }, function() {
        jQuery('.jcarousel-skin-tango2 .jcarousel-next-horizontal, .jcarousel-skin-tango2 .jcarousel-prev-horizontal').animate({
            opacity: 0
        }, 200);
    });
});
jQuery.fn.slideFadeToggle = function(options, callback) {
    'use strict';
    if (typeof callback == 'function') {
        callback.call(this);
    }
    return this.animate({
        opacity: 'toggle',
        height: 'toggle'
    }, 400);
};
jQuery(document).ready(function($) {
    'use strict';
    jQuery(".toggle").click(function() {
        if ($(this).hasClass('current')) {
            $(this).removeClass('current').next('.hidden').slideFadeToggle();
            return;
        }
        $('.current').not(this).removeClass('current').next('.hidden').slideFadeToggle();
        $(this).addClass('current').next().slideFadeToggle(500, function() {
            var this_element = $(this);
            setTimeout(function() {
                if ($('body').hasClass('admin-bar')) {
                    var scroll_to = this_element.prev('.toggle').offset().top - 28;
                } else {
                    var scroll_to = this_element.prev('.toggle').offset().top;
                }
                $('html, body').animate({
                    scrollTop: scroll_to
                }, 500);
            }, 500);
        });
    });
});
jQuery(document).ready(function($) {
    'use strict';
    $('.images').hover(function() {
        $(this).find('.vertical-align').stop().animate({
            'padding-top': '0px',
            opacity: 1,
            'height': '200px'
        }, 300);
        $(this).find('.hover-bg').stop().animate({
            opacity: 1
        }, 400);
    }, function() {
        $(this).find('.vertical-align').stop().animate({
            'padding-top': '50px',
            opacity: 0,
            'height': '150px'
        }, 300);
        $(this).find('.hover-bg').stop().animate({
            opacity: 0
        }, 400);
    });
});
jQuery(document).ready(function() {
    'use strict';
    jQuery("a.popup, .fancybox").fancybox({
        closeClick: true,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    jQuery(".video-popup").fancybox({
        'width': '70%',
        'height': '80%',
        'autoScale': false,
        'type': 'iframe',
        closeClick: true,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
});
jQuery(document).ready(function() {
    'use strict';
    jQuery('.flexslider').flexslider({
        animation: "slide"
    });
});
var addComment = {
    moveForm: function(a, b, c, d) {
        var e, f = this,
            g = f.I(a),
            h = f.I(c),
            i = f.I("cancel-comment-reply-link"),
            j = f.I("comment_parent"),
            k = f.I("comment_post_ID");
        if (g && h && i && j) {
            f.respondId = c, d = d || !1, f.I("wp-temp-form-div") || (e = document.createElement("div"), e.id = "wp-temp-form-div", e.style.display = "none", h.parentNode.insertBefore(e, h)), g.parentNode.insertBefore(h, g.nextSibling), k && d && (k.value = d), j.value = b, i.style.display = "", i.onclick = function() {
                var a = addComment,
                    b = a.I("wp-temp-form-div"),
                    c = a.I(a.respondId);
                if (b && c) return a.I("comment_parent").value = "0", b.parentNode.insertBefore(c, b), b.parentNode.removeChild(b), this.style.display = "none", this.onclick = null, !1
            };
            try {
                f.I("comment").focus()
            } catch (l) {}
            return !1
        }
    },
    I: function(a) {
        return document.getElementById(a)
    }
};