/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat
        ? function (e) {
            return t.flat.call(e);
          }
        : function (e) {
            return t.concat.apply([], e);
          },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      y = n.hasOwnProperty,
      a = y.toString,
      l = a.call(Object),
      v = {},
      m = function (e) {
        return (
          "function" == typeof e &&
          "number" != typeof e.nodeType &&
          "function" != typeof e.item
        );
      },
      x = function (e) {
        return null != e && e === e.window;
      },
      E = C.document,
      c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
      var r,
        i,
        o = (n = n || E).createElement("script");
      if (((o.text = e), t))
        for (r in c)
          (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
            o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? n[o.call(e)] || "object"
        : typeof e;
    }
    var f = "3.6.4",
      S = function (e, t) {
        return new S.fn.init(e, t);
      };
    function p(e) {
      var t = !!e && "length" in e && e.length,
        n = w(e);
      return (
        !m(e) &&
        !x(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && 0 < t && t - 1 in e))
      );
    }
    (S.fn = S.prototype =
      {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
          return s.call(this);
        },
        get: function (e) {
          return null == e
            ? s.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = S.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return S.each(this, e);
        },
        map: function (n) {
          return this.pushStack(
            S.map(this, function (e, t) {
              return n.call(e, t, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            S.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            S.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice,
      }),
      (S.extend = S.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
          for (
            "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || m(a) || (a = {}),
              s === u && ((a = this), s--);
            s < u;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    a !== r &&
                    (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = a[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || S.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (a[t] = S.extend(l, o, r)))
                      : void 0 !== r && (a[t] = r));
          return a;
        }),
      S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return (
            !(!e || "[object Object]" !== o.call(e)) &&
            (!(t = r(e)) ||
              ("function" ==
                typeof (n = y.call(t, "constructor") && t.constructor) &&
                a.call(n) === l))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, n) {
          b(e, { nonce: t && t.nonce }, n);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (p(e)) {
            for (n = e.length; r < n; r++)
              if (!1 === t.call(e[r], r, e[r])) break;
          } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e;
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (p(Object(e))
                ? S.merge(n, "string" == typeof e ? [e] : e)
                : u.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : i.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
            !t(e[i], i) !== a && r.push(e[i]);
          return r;
        },
        map: function (e, t, n) {
          var r,
            i,
            o = 0,
            a = [];
          if (p(e))
            for (r = e.length; o < r; o++)
              null != (i = t(e[o], o, n)) && a.push(i);
          else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
          return g(a);
        },
        guid: 1,
        support: v,
      }),
      "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
      S.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          n["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var d = (function (n) {
      var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        y,
        s,
        c,
        v,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        j = function (e, t) {
          return e === t && (l = !0), 0;
        },
        D = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        R =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          M +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W =
          "\\[" +
          M +
          "*(" +
          I +
          ")(?:" +
          M +
          "*([*^$|!~]?=)" +
          M +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          I +
          "))|)" +
          M +
          "*\\]",
        F =
          ":(" +
          I +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          W +
          ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
          ID: new RegExp("^#(" + I + ")"),
          CLASS: new RegExp("^\\.(" + I + ")"),
          TAG: new RegExp("^(" + I + "|[*])"),
          ATTR: new RegExp("^" + W),
          PSEUDO: new RegExp("^" + F),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              M +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              M +
              "*(?:([+-]|)" +
              M +
              "*(\\d+)|))" +
              M +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + R + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              M +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              M +
              "*((?:-\\d)?\\d*)" +
              M +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function (e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return (
            t ||
            (n < 0
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
          );
        },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
          return t
            ? "\0" === e
              ? "\ufffd"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        oe = function () {
          T();
        },
        ae = be(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        H.apply((t = O.call(p.childNodes)), p.childNodes),
          t[p.childNodes.length].nodeType;
      } catch (e) {
        H = {
          apply: t.length
            ? function (e, t) {
                L.apply(e, O.call(t));
              }
            : function (e, t) {
                var n = e.length,
                  r = 0;
                while ((e[n++] = t[r++]));
                e.length = n - 1;
              },
        };
      }
      function se(t, e, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
        )
          return n;
        if (!r && (T(e), (e = e || C), E)) {
          if (11 !== p && (u = Z.exec(t)))
            if ((i = u[1])) {
              if (9 === p) {
                if (!(a = e.getElementById(i))) return n;
                if (a.id === i) return n.push(a), n;
              } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i)
                return n.push(a), n;
            } else {
              if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
              if (
                (i = u[3]) &&
                d.getElementsByClassName &&
                e.getElementsByClassName
              )
                return H.apply(n, e.getElementsByClassName(i)), n;
            }
          if (
            d.qsa &&
            !N[t + " "] &&
            (!y || !y.test(t)) &&
            (1 !== p || "object" !== e.nodeName.toLowerCase())
          ) {
            if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
              ((f = (ee.test(t) && ve(e.parentNode)) || e) === e && d.scope) ||
                ((s = e.getAttribute("id"))
                  ? (s = s.replace(re, ie))
                  : e.setAttribute("id", (s = S))),
                (o = (l = h(t)).length);
              while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
              c = l.join(",");
            }
            try {
              return H.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
              N(t, !0);
            } finally {
              s === S && e.removeAttribute("id");
            }
          }
        }
        return g(t.replace(B, "$1"), e, n, r);
      }
      function ue() {
        var r = [];
        return function e(t, n) {
          return (
            r.push(t + " ") > b.cacheLength && delete e[r.shift()],
            (e[t + " "] = n)
          );
        };
      }
      function le(e) {
        return (e[S] = !0), e;
      }
      function ce(e) {
        var t = C.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function fe(e, t) {
        var n = e.split("|"),
          r = n.length;
        while (r--) b.attrHandle[n[r]] = t;
      }
      function pe(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) while ((n = n.nextSibling)) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function de(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function he(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      }
      function ge(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function ye(a) {
        return le(function (o) {
          return (
            (o = +o),
            le(function (e, t) {
              var n,
                r = a([], e.length, o),
                i = r.length;
              while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function ve(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      for (e in ((d = se.support = {}),
      (i = se.isXML =
        function (e) {
          var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
          return !Y.test(t || (n && n.nodeName) || "HTML");
        }),
      (T = se.setDocument =
        function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : p;
          return (
            r != C &&
              9 === r.nodeType &&
              r.documentElement &&
              ((a = (C = r).documentElement),
              (E = !i(C)),
              p != C &&
                (n = C.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", oe, !1)
                  : n.attachEvent && n.attachEvent("onunload", oe)),
              (d.scope = ce(function (e) {
                return (
                  a.appendChild(e).appendChild(C.createElement("div")),
                  "undefined" != typeof e.querySelectorAll &&
                    !e.querySelectorAll(":scope fieldset div").length
                );
              })),
              (d.cssHas = ce(function () {
                try {
                  return C.querySelector(":has(*,:jqfake)"), !1;
                } catch (e) {
                  return !0;
                }
              })),
              (d.attributes = ce(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (d.getElementsByTagName = ce(function (e) {
                return (
                  e.appendChild(C.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (d.getElementsByClassName = K.test(C.getElementsByClassName)),
              (d.getById = ce(function (e) {
                return (
                  (a.appendChild(e).id = S),
                  !C.getElementsByName || !C.getElementsByName(S).length
                );
              })),
              d.getById
                ? ((b.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((b.filter.ID = function (e) {
                    var n = e.replace(te, ne);
                    return function (e) {
                      var t =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return t && t.value === n;
                    };
                  }),
                  (b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        (i = t.getElementsByName(e)), (r = 0);
                        while ((o = i[r++]))
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (b.find.TAG = d.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : d.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (b.find.CLASS =
                d.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e);
                }),
              (s = []),
              (y = []),
              (d.qsa = K.test(C.querySelectorAll)) &&
                (ce(function (e) {
                  var t;
                  (a.appendChild(e).innerHTML =
                    "<a id='" +
                    S +
                    "'></a><select id='" +
                    S +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      y.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      y.push("\\[" + M + "*(?:value|" + R + ")"),
                    e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="),
                    (t = C.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length ||
                      y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll(":checked").length || y.push(":checked"),
                    e.querySelectorAll("a#" + S + "+*").length ||
                      y.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    y.push("[\\r\\n\\f]");
                }),
                ce(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = C.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      y.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      y.push(":enabled", ":disabled"),
                    (a.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      y.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    y.push(",.*:");
                })),
              (d.matchesSelector = K.test(
                (c =
                  a.matches ||
                  a.webkitMatchesSelector ||
                  a.mozMatchesSelector ||
                  a.oMatchesSelector ||
                  a.msMatchesSelector)
              )) &&
                ce(function (e) {
                  (d.disconnectedMatch = c.call(e, "*")),
                    c.call(e, "[s!='']:x"),
                    s.push("!=", F);
                }),
              d.cssHas || y.push(":has"),
              (y = y.length && new RegExp(y.join("|"))),
              (s = s.length && new RegExp(s.join("|"))),
              (t = K.test(a.compareDocumentPosition)),
              (v =
                t || K.test(a.contains)
                  ? function (e, t) {
                      var n = (9 === e.nodeType && e.documentElement) || e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (j = t
                ? function (e, t) {
                    if (e === t) return (l = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!d.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e == C || (e.ownerDocument == p && v(p, e))
                          ? -1
                          : t == C || (t.ownerDocument == p && v(p, t))
                          ? 1
                          : u
                          ? P(u, e) - P(u, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (l = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!i || !o)
                      return e == C
                        ? -1
                        : t == C
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while ((n = n.parentNode)) a.unshift(n);
                    n = t;
                    while ((n = n.parentNode)) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r
                      ? pe(a[r], s[r])
                      : a[r] == p
                      ? -1
                      : s[r] == p
                      ? 1
                      : 0;
                  })),
            C
          );
        }),
      (se.matches = function (e, t) {
        return se(e, null, null, t);
      }),
      (se.matchesSelector = function (e, t) {
        if (
          (T(e),
          d.matchesSelector &&
            E &&
            !N[t + " "] &&
            (!s || !s.test(t)) &&
            (!y || !y.test(t)))
        )
          try {
            var n = c.call(e, t);
            if (
              n ||
              d.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {
            N(t, !0);
          }
        return 0 < se(t, C, null, [e]).length;
      }),
      (se.contains = function (e, t) {
        return (e.ownerDocument || e) != C && T(e), v(e, t);
      }),
      (se.attr = function (e, t) {
        (e.ownerDocument || e) != C && T(e);
        var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== r
          ? r
          : d.attributes || !E
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (se.escape = function (e) {
        return (e + "").replace(re, ie);
      }),
      (se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (se.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((l = !d.detectDuplicates),
          (u = !d.sortStable && e.slice(0)),
          e.sort(j),
          l)
        ) {
          while ((t = e[i++])) t === e[i] && (r = n.push(i));
          while (r--) e.splice(n[r], 1);
        }
        return (u = null), e;
      }),
      (o = se.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else while ((t = e[r++])) n += o(t);
          return n;
        }),
      ((b = se.selectors =
        {
          cacheLength: 50,
          createPseudo: le,
          match: G,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(te, ne)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || se.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && se.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return G.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      X.test(n) &&
                      (t = h(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = m[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                  m(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (n, r, i) {
              return function (e) {
                var t = se.attr(e, n);
                return null == t
                  ? "!=" === r
                  : !r ||
                      ((t += ""),
                      "=" === r
                        ? t === i
                        : "!=" === r
                        ? t !== i
                        : "^=" === r
                        ? i && 0 === t.indexOf(i)
                        : "*=" === r
                        ? i && -1 < t.indexOf(i)
                        : "$=" === r
                        ? i && t.slice(-i.length) === i
                        : "~=" === r
                        ? -1 < (" " + t.replace($, " ") + " ").indexOf(i)
                        : "|=" === r &&
                          (t === i || t.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (h, e, t, g, y) {
              var v = "nth" !== h.slice(0, 3),
                m = "last" !== h.slice(-4),
                x = "of-type" === e;
              return 1 === g && 0 === y
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l = v !== m ? "nextSibling" : "previousSibling",
                      c = e.parentNode,
                      f = x && e.nodeName.toLowerCase(),
                      p = !n && !x,
                      d = !1;
                    if (c) {
                      if (v) {
                        while (l) {
                          a = e;
                          while ((a = a[l]))
                            if (
                              x
                                ? a.nodeName.toLowerCase() === f
                                : 1 === a.nodeType
                            )
                              return !1;
                          u = l = "only" === h && !u && "nextSibling";
                        }
                        return !0;
                      }
                      if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                        (d =
                          (s =
                            (r =
                              (i =
                                (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                            r[1]) && r[2]),
                          (a = s && c.childNodes[s]);
                        while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                          if (1 === a.nodeType && ++d && a === e) {
                            i[h] = [k, s, d];
                            break;
                          }
                      } else if (
                        (p &&
                          (d = s =
                            (r =
                              (i =
                                (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                        !1 === d)
                      )
                        while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                          if (
                            (x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType) &&
                            ++d &&
                            (p &&
                              ((i =
                                (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] = [k, d]),
                            a === e)
                          )
                            break;
                      return (d -= y) === g || (d % g == 0 && 0 <= d / g);
                    }
                  };
            },
            PSEUDO: function (e, o) {
              var t,
                a =
                  b.pseudos[e] ||
                  b.setFilters[e.toLowerCase()] ||
                  se.error("unsupported pseudo: " + e);
              return a[S]
                ? a(o)
                : 1 < a.length
                ? ((t = [e, e, "", o]),
                  b.setFilters.hasOwnProperty(e.toLowerCase())
                    ? le(function (e, t) {
                        var n,
                          r = a(e, o),
                          i = r.length;
                        while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
            },
          },
          pseudos: {
            not: le(function (e) {
              var r = [],
                i = [],
                s = f(e.replace(B, "$1"));
              return s[S]
                ? le(function (e, t, n, r) {
                    var i,
                      o = s(e, null, r, []),
                      a = e.length;
                    while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                  })
                : function (e, t, n) {
                    return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                  };
            }),
            has: le(function (t) {
              return function (e) {
                return 0 < se(t, e).length;
              };
            }),
            contains: le(function (t) {
              return (
                (t = t.replace(te, ne)),
                function (e) {
                  return -1 < (e.textContent || o(e)).indexOf(t);
                }
              );
            }),
            lang: le(function (n) {
              return (
                V.test(n || "") || se.error("unsupported lang: " + n),
                (n = n.replace(te, ne).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = E
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = n.location && n.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === a;
            },
            focus: function (e) {
              return (
                e === C.activeElement &&
                (!C.hasFocus || C.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: ge(!1),
            disabled: ge(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !b.pseudos.empty(e);
            },
            header: function (e) {
              return J.test(e.nodeName);
            },
            input: function (e) {
              return Q.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: ye(function () {
              return [0];
            }),
            last: ye(function (e, t) {
              return [t - 1];
            }),
            eq: ye(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: ye(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: ye(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: ye(function (e, t, n) {
              for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
              return e;
            }),
            gt: ye(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = b.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        b.pseudos[e] = de(e);
      for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
      function me() {}
      function xe(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function be(s, e, t) {
        var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
        return e.first
          ? function (e, t, n) {
              while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
              return !1;
            }
          : function (e, t, n) {
              var r,
                i,
                o,
                a = [k, p];
              if (n) {
                while ((e = e[u]))
                  if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
              } else
                while ((e = e[u]))
                  if (1 === e.nodeType || f)
                    if (
                      ((i =
                        (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                        (o[e.uniqueID] = {})),
                      l && l === e.nodeName.toLowerCase())
                    )
                      e = e[u] || e;
                    else {
                      if ((r = i[c]) && r[0] === k && r[1] === p)
                        return (a[2] = r[2]);
                      if (((i[c] = a)[2] = s(e, t, n))) return !0;
                    }
              return !1;
            };
      }
      function we(i) {
        return 1 < i.length
          ? function (e, t, n) {
              var r = i.length;
              while (r--) if (!i[r](e, t, n)) return !1;
              return !0;
            }
          : i[0];
      }
      function Te(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
          (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
        return a;
      }
      function Ce(d, h, g, y, v, e) {
        return (
          y && !y[S] && (y = Ce(y)),
          v && !v[S] && (v = Ce(v, e)),
          le(function (e, t, n, r) {
            var i,
              o,
              a,
              s = [],
              u = [],
              l = t.length,
              c =
                e ||
                (function (e, t, n) {
                  for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                  return n;
                })(h || "*", n.nodeType ? [n] : n, []),
              f = !d || (!e && h) ? c : Te(c, s, d, n, r),
              p = g ? (v || (e ? d : l || y) ? [] : t) : f;
            if ((g && g(f, p, n, r), y)) {
              (i = Te(p, u)), y(i, [], n, r), (o = i.length);
              while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
            }
            if (e) {
              if (v || d) {
                if (v) {
                  (i = []), (o = p.length);
                  while (o--) (a = p[o]) && i.push((f[o] = a));
                  v(null, (p = []), i, r);
                }
                o = p.length;
                while (o--)
                  (a = p[o]) &&
                    -1 < (i = v ? P(e, a) : s[o]) &&
                    (e[i] = !(t[i] = a));
              }
            } else (p = Te(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : H.apply(t, p);
          })
        );
      }
      function Ee(e) {
        for (
          var i,
            t,
            n,
            r = e.length,
            o = b.relative[e[0].type],
            a = o || b.relative[" "],
            s = o ? 1 : 0,
            u = be(
              function (e) {
                return e === i;
              },
              a,
              !0
            ),
            l = be(
              function (e) {
                return -1 < P(i, e);
              },
              a,
              !0
            ),
            c = [
              function (e, t, n) {
                var r =
                  (!o && (n || t !== w)) ||
                  ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return (i = null), r;
              },
            ];
          s < r;
          s++
        )
          if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
          else {
            if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
              for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
              return Ce(
                1 < s && we(c),
                1 < s &&
                  xe(
                    e.slice(0, s - 1).concat({
                      value: " " === e[s - 2].type ? "*" : "",
                    })
                  ).replace(B, "$1"),
                t,
                s < n && Ee(e.slice(s, n)),
                n < r && Ee((e = e.slice(n))),
                n < r && xe(e)
              );
            }
            c.push(t);
          }
        return we(c);
      }
      return (
        (me.prototype = b.filters = b.pseudos),
        (b.setFilters = new me()),
        (h = se.tokenize =
          function (e, t) {
            var n,
              r,
              i,
              o,
              a,
              s,
              u,
              l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            (a = e), (s = []), (u = b.preFilter);
            while (a) {
              for (o in ((n && !(r = _.exec(a))) ||
                (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
              (n = !1),
              (r = z.exec(a)) &&
                ((n = r.shift()),
                i.push({ value: n, type: r[0].replace(B, " ") }),
                (a = a.slice(n.length))),
              b.filter))
                !(r = G[o].exec(a)) ||
                  (u[o] && !(r = u[o](r))) ||
                  ((n = r.shift()),
                  i.push({ value: n, type: o, matches: r }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
          }),
        (f = se.compile =
          function (e, t) {
            var n,
              y,
              v,
              m,
              x,
              r,
              i = [],
              o = [],
              a = A[e + " "];
            if (!a) {
              t || (t = h(e)), (n = t.length);
              while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
              (a = A(
                e,
                ((y = o),
                (m = 0 < (v = i).length),
                (x = 0 < y.length),
                (r = function (e, t, n, r, i) {
                  var o,
                    a,
                    s,
                    u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    p = w,
                    d = e || (x && b.find.TAG("*", i)),
                    h = (k += null == p ? 1 : Math.random() || 0.1),
                    g = d.length;
                  for (
                    i && (w = t == C || t || i);
                    l !== g && null != (o = d[l]);
                    l++
                  ) {
                    if (x && o) {
                      (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                      while ((s = y[a++]))
                        if (s(o, t || C, n)) {
                          r.push(o);
                          break;
                        }
                      i && (k = h);
                    }
                    m && ((o = !s && o) && u--, e && c.push(o));
                  }
                  if (((u += l), m && l !== u)) {
                    a = 0;
                    while ((s = v[a++])) s(c, f, t, n);
                    if (e) {
                      if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                      f = Te(f);
                    }
                    H.apply(r, f),
                      i &&
                        !e &&
                        0 < f.length &&
                        1 < u + v.length &&
                        se.uniqueSort(r);
                  }
                  return i && ((k = h), (w = p)), c;
                }),
                m ? le(r) : r)
              )).selector = e;
            }
            return a;
          }),
        (g = se.select =
          function (e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l = "function" == typeof e && e,
              c = !r && h((e = l.selector || e));
            if (((n = n || []), 1 === c.length)) {
              if (
                2 < (o = c[0] = c[0].slice(0)).length &&
                "ID" === (a = o[0]).type &&
                9 === t.nodeType &&
                E &&
                b.relative[o[1].type]
              ) {
                if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                  return n;
                l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
              }
              i = G.needsContext.test(e) ? 0 : o.length;
              while (i--) {
                if (((a = o[i]), b.relative[(s = a.type)])) break;
                if (
                  (u = b.find[s]) &&
                  (r = u(
                    a.matches[0].replace(te, ne),
                    (ee.test(o[0].type) && ve(t.parentNode)) || t
                  ))
                ) {
                  if ((o.splice(i, 1), !(e = r.length && xe(o))))
                    return H.apply(n, r), n;
                  break;
                }
              }
            }
            return (
              (l || f(e, c))(
                r,
                t,
                !E,
                n,
                !t || (ee.test(e) && ve(t.parentNode)) || t
              ),
              n
            );
          }),
        (d.sortStable = S.split("").sort(j).join("") === S),
        (d.detectDuplicates = !!l),
        T(),
        (d.sortDetached = ce(function (e) {
          return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        })),
        ce(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (d.attributes &&
          ce(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
          }),
        ce(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          fe(R, function (e, t, n) {
            var r;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
          }),
        se
      );
    })(C);
    (S.find = d),
      (S.expr = d.selectors),
      (S.expr[":"] = S.expr.pseudos),
      (S.uniqueSort = S.unique = d.uniqueSort),
      (S.text = d.getText),
      (S.isXMLDoc = d.isXML),
      (S.contains = d.contains),
      (S.escapeSelector = d.escape);
    var h = function (e, t, n) {
        var r = [],
          i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
          if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      T = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      k = S.expr.match.needsContext;
    function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
      return m(n)
        ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r;
          })
        : n.nodeType
        ? S.grep(e, function (e) {
            return (e === n) !== r;
          })
        : "string" != typeof n
        ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r;
          })
        : S.filter(n, e, r);
    }
    (S.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType
          ? S.find.matchesSelector(r, e)
            ? [r]
            : []
          : S.find.matches(
              e,
              S.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      S.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            i = this;
          if ("string" != typeof e)
            return this.pushStack(
              S(e).filter(function () {
                for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
          return 1 < r ? S.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(j(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(j(this, e || [], !0));
        },
        is: function (e) {
          return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
            .length;
        },
      });
    var D,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || D), "string" == typeof e)) {
        if (
          !(r =
            "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : q.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof S ? t[0] : t),
            S.merge(
              this,
              S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
            ),
            N.test(r[1]) && S.isPlainObject(t))
          )
            for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : m(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(S)
        : S.makeArray(e, this);
    }).prototype = S.fn),
      (D = S(E));
    var L = /^(?:parents|prev(?:Until|All))/,
      H = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType);
      return e;
    }
    S.fn.extend({
      has: function (e) {
        var t = S(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
        if (!k.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? -1 < a.index(n)
                  : 1 === n.nodeType && S.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? i.call(S(e), this[0])
            : i.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
    }),
      S.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return h(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n);
          },
          next: function (e) {
            return O(e, "nextSibling");
          },
          prev: function (e) {
            return O(e, "previousSibling");
          },
          nextAll: function (e) {
            return h(e, "nextSibling");
          },
          prevAll: function (e) {
            return h(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n);
          },
          siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return T(e.firstChild);
          },
          contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument)
              ? e.contentDocument
              : (A(e, "template") && (e = e.content || e),
                S.merge([], e.childNodes));
          },
        },
        function (r, i) {
          S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return (
              "Until" !== r.slice(-5) && (t = e),
              t && "string" == typeof t && (n = S.filter(t, n)),
              1 < this.length &&
                (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
              this.pushStack(n)
            );
          };
        }
      );
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
      return e;
    }
    function M(e) {
      throw e;
    }
    function I(e, t, n, r) {
      var i;
      try {
        e && m((i = e.promise))
          ? i.call(e).done(t).fail(n)
          : e && m((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    (S.Callbacks = function (r) {
      var e, n;
      r =
        "string" == typeof r
          ? ((e = r),
            (n = {}),
            S.each(e.match(P) || [], function (e, t) {
              n[t] = !0;
            }),
            n)
          : S.extend({}, r);
      var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function () {
          for (a = a || r.once, o = i = !0; u.length; l = -1) {
            t = u.shift();
            while (++l < s.length)
              !1 === s[l].apply(t[0], t[1]) &&
                r.stopOnFalse &&
                ((l = s.length), (t = !1));
          }
          r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
        },
        f = {
          add: function () {
            return (
              s &&
                (t && !i && ((l = s.length - 1), u.push(t)),
                (function n(e) {
                  S.each(e, function (e, t) {
                    m(t)
                      ? (r.unique && f.has(t)) || s.push(t)
                      : t && t.length && "string" !== w(t) && n(t);
                  });
                })(arguments),
                t && !i && c()),
              this
            );
          },
          remove: function () {
            return (
              S.each(arguments, function (e, t) {
                var n;
                while (-1 < (n = S.inArray(t, s, n)))
                  s.splice(n, 1), n <= l && l--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? -1 < S.inArray(e, s) : 0 < s.length;
          },
          empty: function () {
            return s && (s = []), this;
          },
          disable: function () {
            return (a = u = []), (s = t = ""), this;
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return (a = u = []), t || i || (s = t = ""), this;
          },
          locked: function () {
            return !!a;
          },
          fireWith: function (e, t) {
            return (
              a ||
                ((t = [e, (t = t || []).slice ? t.slice() : t]),
                u.push(t),
                i || c()),
              this
            );
          },
          fire: function () {
            return f.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!o;
          },
        };
      return f;
    }),
      S.extend({
        Deferred: function (e) {
          var o = [
              [
                "notify",
                "progress",
                S.Callbacks("memory"),
                S.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                S.Callbacks("once memory"),
                S.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                S.Callbacks("once memory"),
                S.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            i = "pending",
            a = {
              state: function () {
                return i;
              },
              always: function () {
                return s.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return a.then(null, e);
              },
              pipe: function () {
                var i = arguments;
                return S.Deferred(function (r) {
                  S.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                }).promise();
              },
              then: function (t, n, r) {
                var u = 0;
                function l(i, o, a, s) {
                  return function () {
                    var n = this,
                      r = arguments,
                      e = function () {
                        var e, t;
                        if (!(i < u)) {
                          if ((e = a.apply(n, r)) === o.promise())
                            throw new TypeError("Thenable self-resolution");
                          (t =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            m(t)
                              ? s
                                ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                                : (u++,
                                  t.call(
                                    e,
                                    l(u, o, R, s),
                                    l(u, o, M, s),
                                    l(u, o, R, o.notifyWith)
                                  ))
                              : (a !== R && ((n = void 0), (r = [e])),
                                (s || o.resolveWith)(n, r));
                        }
                      },
                      t = s
                        ? e
                        : function () {
                            try {
                              e();
                            } catch (e) {
                              S.Deferred.exceptionHook &&
                                S.Deferred.exceptionHook(e, t.stackTrace),
                                u <= i + 1 &&
                                  (a !== M && ((n = void 0), (r = [e])),
                                  o.rejectWith(n, r));
                            }
                          };
                    i
                      ? t()
                      : (S.Deferred.getStackHook &&
                          (t.stackTrace = S.Deferred.getStackHook()),
                        C.setTimeout(t));
                  };
                }
                return S.Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                    o[1][3].add(l(0, e, m(t) ? t : R)),
                    o[2][3].add(l(0, e, m(n) ? n : M));
                }).promise();
              },
              promise: function (e) {
                return null != e ? S.extend(e, a) : a;
              },
            },
            s = {};
          return (
            S.each(o, function (e, t) {
              var n = t[2],
                r = t[5];
              (a[t[1]] = n.add),
                r &&
                  n.add(
                    function () {
                      i = r;
                    },
                    o[3 - e][2].disable,
                    o[3 - e][3].disable,
                    o[0][2].lock,
                    o[0][3].lock
                  ),
                n.add(t[3].fire),
                (s[t[0]] = function () {
                  return (
                    s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                  );
                }),
                (s[t[0] + "With"] = n.fireWith);
            }),
            a.promise(s),
            e && e.call(s, s),
            s
          );
        },
        when: function (e) {
          var n = arguments.length,
            t = n,
            r = Array(t),
            i = s.call(arguments),
            o = S.Deferred(),
            a = function (t) {
              return function (e) {
                (r[t] = this),
                  (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                  --n || o.resolveWith(r, i);
              };
            };
          if (
            n <= 1 &&
            (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then))
          )
            return o.then();
          while (t--) I(i[t], a(t), o.reject);
          return o.promise();
        },
      });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (e, t) {
      C.console &&
        C.console.warn &&
        e &&
        W.test(e.name) &&
        C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
      (S.readyException = function (e) {
        C.setTimeout(function () {
          throw e;
        });
      });
    var F = S.Deferred();
    function $() {
      E.removeEventListener("DOMContentLoaded", $),
        C.removeEventListener("load", $),
        S.ready();
    }
    (S.fn.ready = function (e) {
      return (
        F.then(e)["catch"](function (e) {
          S.readyException(e);
        }),
        this
      );
    }),
      S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --S.readyWait : S.isReady) ||
            ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
            F.resolveWith(E, [S]);
        },
      }),
      (S.ready.then = F.then),
      "complete" === E.readyState ||
      ("loading" !== E.readyState && !E.documentElement.doScroll)
        ? C.setTimeout(S.ready)
        : (E.addEventListener("DOMContentLoaded", $),
          C.addEventListener("load", $));
    var B = function (e, t, n, r, i, o, a) {
        var s = 0,
          u = e.length,
          l = null == n;
        if ("object" === w(n))
          for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
        else if (
          void 0 !== r &&
          ((i = !0),
          m(r) || (a = !0),
          l &&
            (a
              ? (t.call(e, r), (t = null))
              : ((l = t),
                (t = function (e, t, n) {
                  return l.call(S(e), n);
                }))),
          t)
        )
          for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      },
      _ = /^-ms-/,
      z = /-([a-z])/g;
    function U(e, t) {
      return t.toUpperCase();
    }
    function X(e) {
      return e.replace(_, "ms-").replace(z, U);
    }
    var V = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
      this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
      (G.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              V(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            i = this.cache(e);
          if ("string" == typeof t) i[X(t)] = n;
          else for (r in t) i[X(r)] = t[r];
          return i;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][X(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t)
                ? t.map(X)
                : (t = X(t)) in r
                ? [t]
                : t.match(P) || []).length;
              while (n--) delete r[t[n]];
            }
            (void 0 === t || S.isEmptyObject(r)) &&
              (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !S.isEmptyObject(t);
        },
      });
    var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;
    function Z(e, t, n) {
      var r, i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(r)))
        ) {
          try {
            n =
              "true" === (i = n) ||
              ("false" !== i &&
                ("null" === i
                  ? null
                  : i === +i + ""
                  ? +i
                  : J.test(i)
                  ? JSON.parse(i)
                  : i));
          } catch (e) {}
          Q.set(e, t, n);
        } else n = void 0;
      return n;
    }
    S.extend({
      hasData: function (e) {
        return Q.hasData(e) || Y.hasData(e);
      },
      data: function (e, t, n) {
        return Q.access(e, t, n);
      },
      removeData: function (e, t) {
        Q.remove(e, t);
      },
      _data: function (e, t, n) {
        return Y.access(e, t, n);
      },
      _removeData: function (e, t) {
        Y.remove(e, t);
      },
    }),
      S.fn.extend({
        data: function (n, e) {
          var t,
            r,
            i,
            o = this[0],
            a = o && o.attributes;
          if (void 0 === n) {
            if (
              this.length &&
              ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
            ) {
              t = a.length;
              while (t--)
                a[t] &&
                  0 === (r = a[t].name).indexOf("data-") &&
                  ((r = X(r.slice(5))), Z(o, r, i[r]));
              Y.set(o, "hasDataAttrs", !0);
            }
            return i;
          }
          return "object" == typeof n
            ? this.each(function () {
                Q.set(this, n);
              })
            : B(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n))
                      ? t
                      : void 0 !== (t = Z(o, n))
                      ? t
                      : void 0;
                  this.each(function () {
                    Q.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Q.remove(this, e);
          });
        },
      }),
      S.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = Y.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = Y.access(e, t, S.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = S.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = S._queueHooks(e, t);
          "inprogress" === i && ((i = n.shift()), r--),
            i &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              i.call(
                e,
                function () {
                  S.dequeue(e, t);
                },
                o
              )),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Y.get(e, n) ||
            Y.access(e, n, {
              empty: S.Callbacks("once memory").add(function () {
                Y.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      S.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return (
            "string" != typeof t && ((n = t), (t = "fx"), e--),
            arguments.length < e
              ? S.queue(this[0], t)
              : void 0 === n
              ? this
              : this.each(function () {
                  var e = S.queue(this, t, n);
                  S._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            S.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            i = S.Deferred(),
            o = this,
            a = this.length,
            s = function () {
              --r || i.resolveWith(o, [o]);
            };
          "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
          while (a--)
            (n = Y.get(o[a], e + "queueHooks")) &&
              n.empty &&
              (r++, n.empty.add(s));
          return s(), i.promise(t);
        },
      });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function (e) {
        return S.contains(e.ownerDocument, e);
      },
      oe = { composed: !0 };
    re.getRootNode &&
      (ie = function (e) {
        return (
          S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
        );
      });
    var ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
      );
    };
    function se(e, t, n, r) {
      var i,
        o,
        a = 20,
        s = r
          ? function () {
              return r.cur();
            }
          : function () {
              return S.css(e, t, "");
            },
        u = s(),
        l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
        c =
          e.nodeType &&
          (S.cssNumber[t] || ("px" !== l && +u)) &&
          te.exec(S.css(e, t));
      if (c && c[3] !== l) {
        (u /= 2), (l = l || c[3]), (c = +u || 1);
        while (a--)
          S.style(e, t, c + l),
            (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
            (c /= o);
        (c *= 2), S.style(e, t, c + l), (n = n || []);
      }
      return (
        n &&
          ((c = +c || +u || 0),
          (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = l), (r.start = c), (r.end = i))),
        i
      );
    }
    var ue = {};
    function le(e, t) {
      for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
        (r = e[c]).style &&
          ((n = r.style.display),
          t
            ? ("none" === n &&
                ((l[c] = Y.get(r, "display") || null),
                l[c] || (r.style.display = "")),
              "" === r.style.display &&
                ae(r) &&
                (l[c] =
                  ((u = a = o = void 0),
                  (a = (i = r).ownerDocument),
                  (s = i.nodeName),
                  (u = ue[s]) ||
                    ((o = a.body.appendChild(a.createElement(s))),
                    (u = S.css(o, "display")),
                    o.parentNode.removeChild(o),
                    "none" === u && (u = "block"),
                    (ue[s] = u)))))
            : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
      for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
      return e;
    }
    S.fn.extend({
      show: function () {
        return le(this, !0);
      },
      hide: function () {
        return le(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              ae(this) ? S(this).show() : S(this).hide();
            });
      },
    });
    var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
      (fe = E.createElement("input")).setAttribute("type", "radio"),
      fe.setAttribute("checked", "checked"),
      fe.setAttribute("name", "t"),
      ce.appendChild(fe),
      (v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ce.innerHTML = "<textarea>x</textarea>"),
      (v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
      (ce.innerHTML = "<option></option>"),
      (v.option = !!ce.lastChild);
    var ge = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    function ye(e, t) {
      var n;
      return (
        (n =
          "undefined" != typeof e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
      );
    }
    function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
      (ge.th = ge.td),
      v.option ||
        (ge.optgroup = ge.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
      for (
        var o,
          a,
          s,
          u,
          l,
          c,
          f = t.createDocumentFragment(),
          p = [],
          d = 0,
          h = e.length;
        d < h;
        d++
      )
        if ((o = e[d]) || 0 === o)
          if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
          else if (me.test(o)) {
            (a = a || f.appendChild(t.createElement("div"))),
              (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
              (u = ge[s] || ge._default),
              (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
              (c = u[0]);
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
          } else p.push(t.createTextNode(o));
      (f.textContent = ""), (d = 0);
      while ((o = p[d++]))
        if (r && -1 < S.inArray(o, r)) i && i.push(o);
        else if (
          ((l = ie(o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)
        ) {
          c = 0;
          while ((o = a[c++])) he.test(o.type || "") && n.push(o);
        }
      return f;
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
      return !0;
    }
    function Te() {
      return !1;
    }
    function Ce(e, t) {
      return (
        (e ===
          (function () {
            try {
              return E.activeElement;
            } catch (e) {}
          })()) ==
        ("focus" === t)
      );
    }
    function Ee(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
        for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
          Ee(e, s, n, r, t[s], o);
        return e;
      }
      if (
        (null == r && null == i
          ? ((i = n), (r = n = void 0))
          : null == i &&
            ("string" == typeof n
              ? ((i = r), (r = void 0))
              : ((i = r), (r = n), (n = void 0))),
        !1 === i)
      )
        i = Te;
      else if (!i) return e;
      return (
        1 === o &&
          ((a = i),
          ((i = function (e) {
            return S().off(e), a.apply(this, arguments);
          }).guid = a.guid || (a.guid = S.guid++))),
        e.each(function () {
          S.event.add(this, t, i, r, n);
        })
      );
    }
    function Se(e, i, o) {
      o
        ? (Y.set(e, i, !1),
          S.event.add(e, i, {
            namespace: !1,
            handler: function (e) {
              var t,
                n,
                r = Y.get(this, i);
              if (1 & e.isTrigger && this[i]) {
                if (r.length)
                  (S.event.special[i] || {}).delegateType && e.stopPropagation();
                else if (
                  ((r = s.call(arguments)),
                  Y.set(this, i, r),
                  (t = o(this, i)),
                  this[i](),
                  r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                  r !== n)
                )
                  return (
                    e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                  );
              } else
                r.length &&
                  (Y.set(this, i, {
                    value: S.event.trigger(
                      S.extend(r[0], S.Event.prototype),
                      r.slice(1),
                      this
                    ),
                  }),
                  e.stopImmediatePropagation());
            },
          }))
        : void 0 === Y.get(e, i) && S.event.add(e, i, we);
    }
    (S.event = {
      global: {},
      add: function (t, e, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = Y.get(t);
        if (V(t)) {
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && S.find.matchesSelector(re, i),
            n.guid || (n.guid = S.guid++),
            (u = y.events) || (u = y.events = Object.create(null)),
            (a = y.handle) ||
              (a = y.handle =
                function (e) {
                  return "undefined" != typeof S && S.event.triggered !== e.type
                    ? S.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            (l = (e = (e || "").match(P) || [""]).length);
          while (l--)
            (d = g = (s = be.exec(e[l]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              d &&
                ((f = S.event.special[d] || {}),
                (d = (i ? f.delegateType : f.bindType) || d),
                (f = S.event.special[d] || {}),
                (c = S.extend(
                  {
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join("."),
                  },
                  o
                )),
                (p = u[d]) ||
                  (((p = u[d] = []).delegateCount = 0),
                  (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                    (t.addEventListener && t.addEventListener(d, a))),
                f.add &&
                  (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                (S.event.global[d] = !0));
        }
      },
      remove: function (e, t, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = Y.hasData(e) && Y.get(e);
        if (y && (u = y.events)) {
          l = (t = (t || "").match(P) || [""]).length;
          while (l--)
            if (
              ((d = g = (s = be.exec(t[l]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              d)
            ) {
              (f = S.event.special[d] || {}),
                (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
                (s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                (a = o = p.length);
              while (o--)
                (c = p[o]),
                  (!i && g !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (s && !s.test(c.namespace)) ||
                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                    (p.splice(o, 1),
                    c.selector && p.delegateCount--,
                    f.remove && f.remove.call(e, c));
              a &&
                !p.length &&
                ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                  S.removeEvent(e, d, y.handle),
                delete u[d]);
            } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
          S.isEmptyObject(u) && Y.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};
        for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
        if (
          ((u.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, u))
        ) {
          (a = S.event.handlers.call(this, u, l)), (t = 0);
          while ((i = a[t++]) && !u.isPropagationStopped()) {
            (u.currentTarget = i.elem), (n = 0);
            while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
              (u.rnamespace &&
                !1 !== o.namespace &&
                !u.rnamespace.test(o.namespace)) ||
                ((u.handleObj = o),
                (u.data = o.data),
                void 0 !==
                  (r = (
                    (S.event.special[o.origType] || {}).handle || o.handler
                  ).apply(i.elem, s)) &&
                  !1 === (u.result = r) &&
                  (u.preventDefault(), u.stopPropagation()));
          }
          return c.postDispatch && c.postDispatch.call(this, u), u.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], a = {}, n = 0; n < u; n++)
                void 0 === a[(i = (r = t[n]).selector + " ")] &&
                  (a[i] = r.needsContext
                    ? -1 < S(i, this).index(l)
                    : S.find(i, this, null, [l]).length),
                  a[i] && o.push(r);
              o.length && s.push({ elem: l, handlers: o });
            }
        return (
          (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        );
      },
      addProp: function (t, e) {
        Object.defineProperty(S.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: m(e)
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
      },
      fix: function (e) {
        return e[S.expando] ? e : new S.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (pe.test(t.type) &&
                t.click &&
                A(t, "input") &&
                Y.get(t, "click")) ||
              A(t, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
                ? we
                : Te),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && S.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[S.expando] = !0);
      }),
      (S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = we),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = we),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = we),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      S.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0,
        },
        S.event.addProp
      ),
      S.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        S.event.special[t] = {
          setup: function () {
            return Se(this, t, Ce), !1;
          },
          trigger: function () {
            return Se(this, t), !0;
          },
          _default: function (e) {
            return Y.get(e.target, t);
          },
          delegateType: e,
        };
      }),
      S.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, i) {
          S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
              var t,
                n = e.relatedTarget,
                r = e.handleObj;
              return (
                (n && (n === this || S.contains(this, n))) ||
                  ((e.type = r.origType),
                  (t = r.handler.apply(this, arguments)),
                  (e.type = i)),
                t
              );
            },
          };
        }
      ),
      S.fn.extend({
        on: function (e, t, n, r) {
          return Ee(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return Ee(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              S(e.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this;
          }
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Te),
            this.each(function () {
              S.event.remove(this, e, n, t);
            })
          );
        },
      });
    var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function je(e, t) {
      return (
        (A(e, "table") &&
          A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          S(e).children("tbody")[0]) ||
        e
      );
    }
    function De(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function qe(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function Le(e, t) {
      var n, r, i, o, a, s;
      if (1 === t.nodeType) {
        if (Y.hasData(e) && (s = Y.get(e).events))
          for (i in (Y.remove(t, "handle events"), s))
            for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
        Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
      }
    }
    function He(n, r, i, o) {
      r = g(r);
      var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
      if (h || (1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)))
        return n.each(function (e) {
          var t = n.eq(e);
          h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
        });
      if (
        f &&
        ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
        1 === e.childNodes.length && (e = t),
        t || o)
      ) {
        for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++)
          (u = e),
            c !== p &&
              ((u = S.clone(u, !0, !0)), s && S.merge(a, ye(u, "script"))),
            i.call(n[c], u, c);
        if (s)
          for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
            (u = a[c]),
              he.test(u.type || "") &&
                !Y.access(u, "globalEval") &&
                S.contains(l, u) &&
                (u.src && "module" !== (u.type || "").toLowerCase()
                  ? S._evalUrl &&
                    !u.noModule &&
                    S._evalUrl(
                      u.src,
                      {
                        nonce: u.nonce || u.getAttribute("nonce"),
                      },
                      l
                    )
                  : b(u.textContent.replace(Ne, ""), u, l));
      }
      return n;
    }
    function Oe(e, t, n) {
      for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
        n || 1 !== r.nodeType || S.cleanData(ye(r)),
          r.parentNode &&
            (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    S.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
        if (
          !(
            v.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            S.isXMLDoc(e)
          )
        )
          for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
            (s = o[r]),
              (u = a[r]),
              void 0,
              "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
                ? (u.checked = s.checked)
                : ("input" !== l && "textarea" !== l) ||
                  (u.defaultValue = s.defaultValue);
        if (t)
          if (n)
            for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++)
              Le(o[r], a[r]);
          else Le(e, c);
        return (
          0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
        );
      },
      cleanData: function (e) {
        for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
          if (V(n)) {
            if ((t = n[Y.expando])) {
              if (t.events)
                for (r in t.events)
                  i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
              n[Y.expando] = void 0;
            }
            n[Q.expando] && (n[Q.expando] = void 0);
          }
      },
    }),
      S.fn.extend({
        detach: function (e) {
          return Oe(this, e, !0);
        },
        remove: function (e) {
          return Oe(this, e);
        },
        text: function (e) {
          return B(
            this,
            function (e) {
              return void 0 === e
                ? S.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return He(this, arguments, function (e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              je(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return He(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = je(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return He(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return He(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (S.cleanData(ye(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return S.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return B(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !ke.test(e) &&
                !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = S.htmlPrefilter(e);
                try {
                  for (; n < r; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (S.cleanData(ye(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var n = [];
          return He(
            this,
            arguments,
            function (e) {
              var t = this.parentNode;
              S.inArray(this, n) < 0 &&
                (S.cleanData(ye(this)), t && t.replaceChild(e, this));
            },
            n
          );
        },
      }),
      S.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, a) {
          S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
              (t = o === i ? this : this.clone(!0)),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n);
          };
        }
      );
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = /^--/,
      Me = function (e) {
        var t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = C), t.getComputedStyle(e);
      },
      Ie = function (e, t, n) {
        var r,
          i,
          o = {};
        for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
        return r;
      },
      We = new RegExp(ne.join("|"), "i"),
      Fe = "[\\x20\\t\\r\\n\\f]",
      $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");
    function Be(e, t, n) {
      var r,
        i,
        o,
        a,
        s = Re.test(t),
        u = e.style;
      return (
        (n = n || Me(e)) &&
          ((a = n.getPropertyValue(t) || n[t]),
          s && a && (a = a.replace($e, "$1") || void 0),
          "" !== a || ie(e) || (a = S.style(e, t)),
          !v.pixelBoxStyles() &&
            Pe.test(a) &&
            We.test(t) &&
            ((r = u.width),
            (i = u.minWidth),
            (o = u.maxWidth),
            (u.minWidth = u.maxWidth = u.width = a),
            (a = n.width),
            (u.width = r),
            (u.minWidth = i),
            (u.maxWidth = o))),
        void 0 !== a ? a + "" : a
      );
    }
    function _e(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      };
    }
    !(function () {
      function e() {
        if (l) {
          (u.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (l.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            re.appendChild(u).appendChild(l);
          var e = C.getComputedStyle(l);
          (n = "1%" !== e.top),
            (s = 12 === t(e.marginLeft)),
            (l.style.right = "60%"),
            (o = 36 === t(e.right)),
            (r = 36 === t(e.width)),
            (l.style.position = "absolute"),
            (i = 12 === t(l.offsetWidth / 3)),
            re.removeChild(u),
            (l = null);
        }
      }
      function t(e) {
        return Math.round(parseFloat(e));
      }
      var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
      l.style &&
        ((l.style.backgroundClip = "content-box"),
        (l.cloneNode(!0).style.backgroundClip = ""),
        (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
        S.extend(v, {
          boxSizingReliable: function () {
            return e(), r;
          },
          pixelBoxStyles: function () {
            return e(), o;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), s;
          },
          scrollboxSize: function () {
            return e(), i;
          },
          reliableTrDimensions: function () {
            var e, t, n, r;
            return (
              null == a &&
                ((e = E.createElement("table")),
                (t = E.createElement("tr")),
                (n = E.createElement("div")),
                (e.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                (t.style.cssText = "border:1px solid"),
                (t.style.height = "1px"),
                (n.style.height = "9px"),
                (n.style.display = "block"),
                re.appendChild(e).appendChild(t).appendChild(n),
                (r = C.getComputedStyle(t)),
                (a =
                  parseInt(r.height, 10) +
                    parseInt(r.borderTopWidth, 10) +
                    parseInt(r.borderBottomWidth, 10) ===
                  t.offsetHeight),
                re.removeChild(e)),
              a
            );
          },
        }));
    })();
    var ze = ["Webkit", "Moz", "ms"],
      Ue = E.createElement("div").style,
      Xe = {};
    function Ve(e) {
      var t = S.cssProps[e] || Xe[e];
      return (
        t ||
        (e in Ue
          ? e
          : (Xe[e] =
              (function (e) {
                var t = e[0].toUpperCase() + e.slice(1),
                  n = ze.length;
                while (n--) if ((e = ze[n] + t) in Ue) return e;
              })(e) || e))
      );
    }
    var Ge = /^(none|table(?!-c[ea]).+)/,
      Ye = { position: "absolute", visibility: "hidden", display: "block" },
      Qe = { letterSpacing: "0", fontWeight: "400" };
    function Je(e, t, n) {
      var r = te.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ke(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2)
        "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
          r
            ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
              "margin" !== n &&
                (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
            : ((u += S.css(e, "padding" + ne[a], !0, i)),
              "padding" !== n
                ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
                : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
      return (
        !r &&
          0 <= o &&
          (u +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
              )
            ) || 0),
        u
      );
    }
    function Ze(e, t, n) {
      var r = Me(e),
        i =
          (!v.boxSizingReliable() || n) &&
          "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Pe.test(a)) {
        if (!n) return a;
        a = "auto";
      }
      return (
        ((!v.boxSizingReliable() && i) ||
          (!v.reliableTrDimensions() && A(e, "tr")) ||
          "auto" === a ||
          (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
          e.getClientRects().length &&
          ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
          (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) +
          Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
          "px"
      );
    }
    function et(e, t, n, r, i) {
      return new et.prototype.init(e, t, n, r, i);
    }
    S.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Be(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            o,
            a,
            s = X(t),
            u = Re.test(t),
            l = e.style;
          if (
            (u || (t = Ve(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
          )
            return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
          "string" === (o = typeof n) &&
            (i = te.exec(n)) &&
            i[1] &&
            ((n = se(e, t, i)), (o = "number")),
            null != n &&
              n == n &&
              ("number" !== o ||
                u ||
                (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
              v.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
              (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                (u ? l.setProperty(t, n) : (l[t] = n)));
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          a,
          s = X(t);
        return (
          Re.test(t) || (t = Ve(s)),
          (a = S.cssHooks[t] || S.cssHooks[s]) &&
            "get" in a &&
            (i = a.get(e, !0, n)),
          void 0 === i && (i = Be(e, t, r)),
          "normal" === i && t in Qe && (i = Qe[t]),
          "" === n || n
            ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
            : i
        );
      },
    }),
      S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
          get: function (e, t, n) {
            if (t)
              return !Ge.test(S.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? Ze(e, u, n)
                : Ie(e, Ye, function () {
                    return Ze(e, u, n);
                  });
          },
          set: function (e, t, n) {
            var r,
              i = Me(e),
              o = !v.scrollboxSize() && "absolute" === i.position,
              a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
              s = n ? Ke(e, u, n, a, i) : 0;
            return (
              a &&
                o &&
                (s -= Math.ceil(
                  e["offset" + u[0].toUpperCase() + u.slice(1)] -
                    parseFloat(i[u]) -
                    Ke(e, u, "border", !1, i) -
                    0.5
                )),
              s &&
                (r = te.exec(t)) &&
                "px" !== (r[3] || "px") &&
                ((e.style[u] = t), (t = S.css(e, u))),
              Je(0, t, s)
            );
          },
        };
      }),
      (S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(Be(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                Ie(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
        (S.cssHooks[i + o] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
            return n;
          },
        }),
          "margin" !== i && (S.cssHooks[i + o].set = Je);
      }),
      S.fn.extend({
        css: function (e, t) {
          return B(
            this,
            function (e, t, n) {
              var r,
                i,
                o = {},
                a = 0;
              if (Array.isArray(t)) {
                for (r = Me(e), i = t.length; a < i; a++)
                  o[t[a]] = S.css(e, t[a], !1, r);
                return o;
              }
              return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        },
      }),
      (((S.Tween = et).prototype = {
        constructor: et,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || S.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (S.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = et.propHooks[this.prop];
          return e && e.get ? e.get(this) : et.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = et.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  S.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
          );
        },
      }).init.prototype = et.prototype),
      ((et.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function (e) {
            S.fx.step[e.prop]
              ? S.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : S.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }).scrollTop = et.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (S.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (S.fx = et.prototype.init),
      (S.fx.step = {});
    var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;
    function st() {
      nt &&
        (!1 === E.hidden && C.requestAnimationFrame
          ? C.requestAnimationFrame(st)
          : C.setTimeout(st, S.fx.interval),
        S.fx.tick());
    }
    function ut() {
      return (
        C.setTimeout(function () {
          tt = void 0;
        }),
        (tt = Date.now())
      );
    }
    function lt(e, t) {
      var n,
        r = 0,
        i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        i["margin" + (n = ne[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i;
    }
    function ct(e, t, n) {
      for (
        var r,
          i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
          o = 0,
          a = i.length;
        o < a;
        o++
      )
        if ((r = i[o].call(n, t, e))) return r;
    }
    function ft(o, e, t) {
      var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          if (a) return !1;
          for (
            var e = tt || ut(),
              t = Math.max(0, l.startTime + l.duration - e),
              n = 1 - (t / l.duration || 0),
              r = 0,
              i = l.tweens.length;
            r < i;
            r++
          )
            l.tweens[r].run(n);
          return (
            s.notifyWith(o, [l, n, t]),
            n < 1 && i
              ? t
              : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
          );
        },
        l = s.promise({
          elem: o,
          props: S.extend({}, e),
          opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: tt || ut(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            var n = S.Tween(
              o,
              l.opts,
              e,
              t,
              l.opts.specialEasing[e] || l.opts.easing
            );
            return l.tweens.push(n), n;
          },
          stop: function (e) {
            var t = 0,
              n = e ? l.tweens.length : 0;
            if (a) return this;
            for (a = !0; t < n; t++) l.tweens[t].run(1);
            return (
              e
                ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
                : s.rejectWith(o, [l, e]),
              this
            );
          },
        }),
        c = l.props;
      for (
        !(function (e, t) {
          var n, r, i, o, a;
          for (n in e)
            if (
              ((i = t[(r = X(n))]),
              (o = e[n]),
              Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
              n !== r && ((e[r] = o), delete e[n]),
              (a = S.cssHooks[r]) && ("expand" in a))
            )
              for (n in ((o = a.expand(o)), delete e[r], o))
                (n in e) || ((e[n] = o[n]), (t[n] = i));
            else t[r] = i;
        })(c, l.opts.specialEasing);
        r < i;
        r++
      )
        if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
          return (
            m(n.stop) &&
              (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
            n
          );
      return (
        S.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l
          .progress(l.opts.progress)
          .done(l.opts.done, l.opts.complete)
          .fail(l.opts.fail)
          .always(l.opts.always),
        S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
        l
      );
    }
    (S.Animation = S.extend(ft, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return se(n.elem, e, te.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
        for (var n, r = 0, i = e.length; r < i; r++)
          (n = e[r]),
            (ft.tweeners[n] = ft.tweeners[n] || []),
            ft.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = Y.get(e, "fxshow");
          for (r in (n.queue ||
            (null == (a = S._queueHooks(e, "fx")).unqueued &&
              ((a.unqueued = 0),
              (s = a.empty.fire),
              (a.empty.fire = function () {
                a.unqueued || s();
              })),
            a.unqueued++,
            p.always(function () {
              p.always(function () {
                a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
              });
            })),
          t))
            if (((i = t[r]), ot.test(i))) {
              if (
                (delete t[r],
                (o = o || "toggle" === i),
                i === (g ? "hide" : "show"))
              ) {
                if ("show" !== i || !y || void 0 === y[r]) continue;
                g = !0;
              }
              d[r] = (y && y[r]) || S.style(e, r);
            }
          if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
            for (r in (f &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              null == (l = y && y.display) && (l = Y.get(e, "display")),
              "none" === (c = S.css(e, "display")) &&
                (l
                  ? (c = l)
                  : (le([e], !0),
                    (l = e.style.display || l),
                    (c = S.css(e, "display")),
                    le([e]))),
              ("inline" === c || ("inline-block" === c && null != l)) &&
                "none" === S.css(e, "float") &&
                (u ||
                  (p.done(function () {
                    h.display = l;
                  }),
                  null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                (h.display = "inline-block"))),
            n.overflow &&
              ((h.overflow = "hidden"),
              p.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (u = !1),
            d))
              u ||
                (y
                  ? "hidden" in y && (g = y.hidden)
                  : (y = Y.access(e, "fxshow", { display: l })),
                o && (y.hidden = !g),
                g && le([e], !0),
                p.done(function () {
                  for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                    S.style(e, r, d[r]);
                })),
                (u = ct(g ? y[r] : 0, r, p)),
                r in y ||
                  ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
      },
    })),
      (S.speed = function (e, t, n) {
        var r =
          e && "object" == typeof e
            ? S.extend({}, e)
            : {
                complete: n || (!n && t) || (m(e) && e),
                duration: e,
                easing: (n && t) || (t && !m(t) && t),
              };
        return (
          S.fx.off
            ? (r.duration = 0)
            : "number" != typeof r.duration &&
              (r.duration in S.fx.speeds
                ? (r.duration = S.fx.speeds[r.duration])
                : (r.duration = S.fx.speeds._default)),
          (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
          }),
          r
        );
      }),
      S.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(ae)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (t, e, n, r) {
          var i = S.isEmptyObject(t),
            o = S.speed(e, n, r),
            a = function () {
              var e = ft(this, S.extend({}, t), o);
              (i || Y.get(this, "finish")) && e.stop(!0);
            };
          return (
            (a.finish = a),
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          );
        },
        stop: function (i, e, o) {
          var a = function (e) {
            var t = e.stop;
            delete e.stop, t(o);
          };
          return (
            "string" != typeof i && ((o = e), (e = i), (i = void 0)),
            e && this.queue(i || "fx", []),
            this.each(function () {
              var e = !0,
                t = null != i && i + "queueHooks",
                n = S.timers,
                r = Y.get(this);
              if (t) r[t] && r[t].stop && a(r[t]);
              else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
              for (t = n.length; t--; )
                n[t].elem !== this ||
                  (null != i && n[t].queue !== i) ||
                  (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
              (!e && o) || S.dequeue(this, i);
            })
          );
        },
        finish: function (a) {
          return (
            !1 !== a && (a = a || "fx"),
            this.each(function () {
              var e,
                t = Y.get(this),
                n = t[a + "queue"],
                r = t[a + "queueHooks"],
                i = S.timers,
                o = n ? n.length : 0;
              for (
                t.finish = !0,
                  S.queue(this, a, []),
                  r && r.stop && r.stop.call(this, !0),
                  e = i.length;
                e--;
  
              )
                i[e].elem === this &&
                  i[e].queue === a &&
                  (i[e].anim.stop(!0), i.splice(e, 1));
              for (e = 0; e < o; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish;
            })
          );
        },
      }),
      S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
          return null == e || "boolean" == typeof e
            ? i.apply(this, arguments)
            : this.animate(lt(r, !0), e, t, n);
        };
      }),
      S.each(
        {
          slideDown: lt("show"),
          slideUp: lt("hide"),
          slideToggle: lt("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, r) {
          S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n);
          };
        }
      ),
      (S.timers = []),
      (S.fx.tick = function () {
        var e,
          t = 0,
          n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), (tt = void 0);
      }),
      (S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start();
      }),
      (S.fx.interval = 13),
      (S.fx.start = function () {
        nt || ((nt = !0), st());
      }),
      (S.fx.stop = function () {
        nt = null;
      }),
      (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (S.fn.delay = function (r, e) {
        return (
          (r = (S.fx && S.fx.speeds[r]) || r),
          (e = e || "fx"),
          this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
              C.clearTimeout(n);
            };
          })
        );
      }),
      (rt = E.createElement("input")),
      (it = E.createElement("select").appendChild(E.createElement("option"))),
      (rt.type = "checkbox"),
      (v.checkOn = "" !== rt.value),
      (v.optSelected = it.selected),
      ((rt = E.createElement("input")).value = "t"),
      (rt.type = "radio"),
      (v.radioValue = "t" === rt.value);
    var pt,
      dt = S.expr.attrHandle;
    S.fn.extend({
      attr: function (e, t) {
        return B(this, S.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          S.removeAttr(this, e);
        });
      },
    }),
      S.extend({
        attr: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return "undefined" == typeof e.getAttribute
              ? S.prop(e, t, n)
              : ((1 === o && S.isXMLDoc(e)) ||
                  (i =
                    S.attrHooks[t.toLowerCase()] ||
                    (S.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void S.removeAttr(e, t)
                    : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = S.find.attr(e, t))
                  ? void 0
                  : r);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!v.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            i = t && t.match(P);
          if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
        },
      }),
      (pt = {
        set: function (e, t, n) {
          return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function (e, t, n) {
          var r,
            i,
            o = t.toLowerCase();
          return (
            n ||
              ((i = dt[o]),
              (dt[o] = r),
              (r = null != a(e, t, n) ? o : null),
              (dt[o] = i)),
            r
          );
        };
      });
    var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;
    function yt(e) {
      return (e.match(P) || []).join(" ");
    }
    function vt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function mt(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
    }
    S.fn.extend({
      prop: function (e, t) {
        return B(this, S.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[S.propFix[e] || e];
        });
      },
    }),
      S.extend({
        prop: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && S.isXMLDoc(e)) ||
                ((t = S.propFix[t] || t), (i = S.propHooks[t])),
              void 0 !== n
                ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e[t] = n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = S.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      v.optSelected ||
        (S.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      S.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          S.propFix[this.toLowerCase()] = this;
        }
      ),
      S.fn.extend({
        addClass: function (t) {
          var e, n, r, i, o, a;
          return m(t)
            ? this.each(function (e) {
                S(this).addClass(t.call(this, e, vt(this)));
              })
            : (e = mt(t)).length
            ? this.each(function () {
                if (
                  ((r = vt(this)), (n = 1 === this.nodeType && " " + yt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++)
                    (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                  (a = yt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this;
        },
        removeClass: function (t) {
          var e, n, r, i, o, a;
          return m(t)
            ? this.each(function (e) {
                S(this).removeClass(t.call(this, e, vt(this)));
              })
            : arguments.length
            ? (e = mt(t)).length
              ? this.each(function () {
                  if (
                    ((r = vt(this)),
                    (n = 1 === this.nodeType && " " + yt(r) + " "))
                  ) {
                    for (o = 0; o < e.length; o++) {
                      i = e[o];
                      while (-1 < n.indexOf(" " + i + " "))
                        n = n.replace(" " + i + " ", " ");
                    }
                    (a = yt(n)), r !== a && this.setAttribute("class", a);
                  }
                })
              : this
            : this.attr("class", "");
        },
        toggleClass: function (t, n) {
          var e,
            r,
            i,
            o,
            a = typeof t,
            s = "string" === a || Array.isArray(t);
          return m(t)
            ? this.each(function (e) {
                S(this).toggleClass(t.call(this, e, vt(this), n), n);
              })
            : "boolean" == typeof n && s
            ? n
              ? this.addClass(t)
              : this.removeClass(t)
            : ((e = mt(t)),
              this.each(function () {
                if (s)
                  for (o = S(this), i = 0; i < e.length; i++)
                    (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                  (void 0 !== t && "boolean" !== a) ||
                    ((r = vt(this)) && Y.set(this, "__className__", r),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        r || !1 === t ? "" : Y.get(this, "__className__") || ""
                      ));
              }));
        },
        hasClass: function (e) {
          var t,
            n,
            r = 0;
          t = " " + e + " ";
          while ((n = this[r++]))
            if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t))
              return !0;
          return !1;
        },
      });
    var xt = /\r/g;
    S.fn.extend({
      val: function (n) {
        var r,
          e,
          i,
          t = this[0];
        return arguments.length
          ? ((i = m(n)),
            this.each(function (e) {
              var t;
              1 === this.nodeType &&
                (null == (t = i ? n.call(this, e, S(this).val()) : n)
                  ? (t = "")
                  : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = S.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((r =
                  S.valHooks[this.type] ||
                  S.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in r &&
                  void 0 !== r.set(this, t, "value")) ||
                  (this.value = t));
            }))
          : t
          ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in r &&
            void 0 !== (e = r.get(t, "value"))
            ? e
            : "string" == typeof (e = t.value)
            ? e.replace(xt, "")
            : null == e
            ? ""
            : e
          : void 0;
      },
    }),
      S.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = S.find.attr(e, "value");
              return null != t ? t : yt(S.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                i = e.options,
                o = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                u = a ? o + 1 : i.length;
              for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                if (
                  ((n = i[r]).selected || r === o) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                ) {
                  if (((t = S(n).val()), a)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function (e, t) {
              var n,
                r,
                i = e.options,
                o = S.makeArray(t),
                a = i.length;
              while (a--)
                ((r = i[a]).selected =
                  -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      S.each(["radio", "checkbox"], function () {
        (S.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < S.inArray(S(e).val(), t));
          },
        }),
          v.checkOn ||
            (S.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (v.focusin = "onfocusin" in C);
    var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function (e) {
        e.stopPropagation();
      };
    S.extend(S.event, {
      trigger: function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = y.call(e, "type") ? e.type : e,
          h = y.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((o = f = a = n = n || E),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !bt.test(d + S.event.triggered) &&
            (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
            (u = d.indexOf(":") < 0 && "on" + d),
            ((e = e[S.expando]
              ? e
              : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
            (e.namespace = h.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : S.makeArray(t, [e])),
            (c = S.event.special[d] || {}),
            r || !c.trigger || !1 !== c.trigger.apply(n, t)))
        ) {
          if (!r && !c.noBubble && !x(n)) {
            for (
              s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
              o;
              o = o.parentNode
            )
              p.push(o), (a = o);
            a === (n.ownerDocument || E) &&
              p.push(a.defaultView || a.parentWindow || C);
          }
          i = 0;
          while ((o = p[i++]) && !e.isPropagationStopped())
            (f = o),
              (e.type = 1 < i ? s : c.bindType || d),
              (l =
                (Y.get(o, "events") || Object.create(null))[e.type] &&
                Y.get(o, "handle")) && l.apply(o, t),
              (l = u && o[u]) &&
                l.apply &&
                V(o) &&
                ((e.result = l.apply(o, t)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = d),
            r ||
              e.isDefaultPrevented() ||
              (c._default && !1 !== c._default.apply(p.pop(), t)) ||
              !V(n) ||
              (u &&
                m(n[d]) &&
                !x(n) &&
                ((a = n[u]) && (n[u] = null),
                (S.event.triggered = d),
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                (S.event.triggered = void 0),
                a && (n[u] = a))),
            e.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
        S.event.trigger(r, null, t);
      },
    }),
      S.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            S.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return S.event.trigger(e, t, n, !0);
        },
      }),
      v.focusin ||
        S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
          var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e));
          };
          S.event.special[r] = {
            setup: function () {
              var e = this.ownerDocument || this.document || this,
                t = Y.access(e, r);
              t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this.document || this,
                t = Y.access(e, r) - 1;
              t
                ? Y.access(e, r, t)
                : (e.removeEventListener(n, i, !0), Y.remove(e, r));
            },
          };
        });
    var Tt = C.location,
      Ct = { guid: Date.now() },
      Et = /\?/;
    S.parseXML = function (e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        t = new C.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {}
      return (
        (n = t && t.getElementsByTagName("parsererror")[0]),
        (t && !n) ||
          S.error(
            "Invalid XML: " +
              (n
                ? S.map(n.childNodes, function (e) {
                    return e.textContent;
                  }).join("\n")
                : e)
          ),
        t
      );
    };
    var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;
    function jt(n, e, r, i) {
      var t;
      if (Array.isArray(e))
        S.each(e, function (e, t) {
          r || St.test(n)
            ? i(n, t)
            : jt(
                n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
                t,
                r,
                i
              );
        });
      else if (r || "object" !== w(e)) i(n, e);
      else for (t in e) jt(n + "[" + t + "]", e[t], r, i);
    }
    (S.param = function (e, t) {
      var n,
        r = [],
        i = function (e, t) {
          var n = m(t) ? t() : t;
          r[r.length] =
            encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
        S.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) jt(n, e[n], t, i);
      return r.join("&");
    }),
      S.fn.extend({
        serialize: function () {
          return S.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = S.prop(this, "elements");
            return e ? S.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !S(this).is(":disabled") &&
                Nt.test(this.nodeName) &&
                !At.test(e) &&
                (this.checked || !pe.test(e))
              );
            })
            .map(function (e, t) {
              var n = S(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? S.map(n, function (e) {
                    return {
                      name: t.name,
                      value: e.replace(kt, "\r\n"),
                    };
                  })
                : { name: t.name, value: n.replace(kt, "\r\n") };
            })
            .get();
        },
      });
    var Dt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");
    function Ft(o) {
      return function (e, t) {
        "string" != typeof e && ((t = e), (e = "*"));
        var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
        if (m(t))
          while ((n = i[r++]))
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
              : (o[n] = o[n] || []).push(t);
      };
    }
    function $t(t, i, o, a) {
      var s = {},
        u = t === Mt;
      function l(e) {
        var r;
        return (
          (s[e] = !0),
          S.each(t[e] || [], function (e, t) {
            var n = t(i, o, a);
            return "string" != typeof n || u || s[n]
              ? u
                ? !(r = n)
                : void 0
              : (i.dataTypes.unshift(n), l(n), !1);
          }),
          r
        );
      }
      return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function Bt(e, t) {
      var n,
        r,
        i = S.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && S.extend(!0, e, r), e;
    }
    (Wt.href = Tt.href),
      S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Tt.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Tt.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": It,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": S.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function (e, t) {
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var c,
            f,
            p,
            n,
            d,
            r,
            h,
            g,
            i,
            o,
            y = S.ajaxSetup({}, t),
            v = y.context || y,
            m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
            x = S.Deferred(),
            b = S.Callbacks("once memory"),
            w = y.statusCode || {},
            a = {},
            s = {},
            u = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (h) {
                  if (!n) {
                    n = {};
                    while ((t = Ht.exec(p)))
                      n[t[1].toLowerCase() + " "] = (
                        n[t[1].toLowerCase() + " "] || []
                      ).concat(t[2]);
                  }
                  t = n[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return h ? p : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == h &&
                    ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                    (a[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == h && (y.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (h) T.always(e[T.status]);
                  else for (t in e) w[t] = [w[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || u;
                return c && c.abort(t), l(0, t), this;
              },
            };
          if (
            (x.promise(T),
            (y.url = ((e || y.url || Tt.href) + "").replace(
              Pt,
              Tt.protocol + "//"
            )),
            (y.type = t.method || t.type || y.method || y.type),
            (y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""]),
            null == y.crossDomain)
          ) {
            r = E.createElement("a");
            try {
              (r.href = y.url),
                (r.href = r.href),
                (y.crossDomain =
                  Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
            } catch (e) {
              y.crossDomain = !0;
            }
          }
          if (
            (y.data &&
              y.processData &&
              "string" != typeof y.data &&
              (y.data = S.param(y.data, y.traditional)),
            $t(Rt, y, t, T),
            h)
          )
            return T;
          for (i in ((g = S.event && y.global) &&
            0 == S.active++ &&
            S.event.trigger("ajaxStart"),
          (y.type = y.type.toUpperCase()),
          (y.hasContent = !Ot.test(y.type)),
          (f = y.url.replace(qt, "")),
          y.hasContent
            ? y.data &&
              y.processData &&
              0 ===
                (y.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (y.data = y.data.replace(Dt, "+"))
            : ((o = y.url.slice(f.length)),
              y.data &&
                (y.processData || "string" == typeof y.data) &&
                ((f += (Et.test(f) ? "&" : "?") + y.data), delete y.data),
              !1 === y.cache &&
                ((f = f.replace(Lt, "$1")),
                (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
              (y.url = f + o)),
          y.ifModified &&
            (S.lastModified[f] &&
              T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
          ((y.data && y.hasContent && !1 !== y.contentType) || t.contentType) &&
            T.setRequestHeader("Content-Type", y.contentType),
          T.setRequestHeader(
            "Accept",
            y.dataTypes[0] && y.accepts[y.dataTypes[0]]
              ? y.accepts[y.dataTypes[0]] +
                  ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "")
              : y.accepts["*"]
          ),
          y.headers))
            T.setRequestHeader(i, y.headers[i]);
          if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
            return T.abort();
          if (
            ((u = "abort"),
            b.add(y.complete),
            T.done(y.success),
            T.fail(y.error),
            (c = $t(Mt, y, t, T)))
          ) {
            if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, y]), h))
              return T;
            y.async &&
              0 < y.timeout &&
              (d = C.setTimeout(function () {
                T.abort("timeout");
              }, y.timeout));
            try {
              (h = !1), c.send(a, l);
            } catch (e) {
              if (h) throw e;
              l(-1, e);
            }
          } else l(-1, "No Transport");
          function l(e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l = t;
            h ||
              ((h = !0),
              d && C.clearTimeout(d),
              (c = void 0),
              (p = r || ""),
              (T.readyState = 0 < e ? 4 : 0),
              (i = (200 <= e && e < 300) || 304 === e),
              n &&
                (s = (function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s = e.contents,
                    u = e.dataTypes;
                  while ("*" === u[0])
                    u.shift(),
                      void 0 === r &&
                        (r = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (r)
                    for (i in s)
                      if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break;
                      }
                  if (u[0] in n) o = u[0];
                  else {
                    for (i in n) {
                      if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break;
                      }
                      a || (a = i);
                    }
                    o = o || a;
                  }
                  if (o) return o !== u[0] && u.unshift(o), n[o];
                })(y, T, n)),
              !i &&
                -1 < S.inArray("script", y.dataTypes) &&
                S.inArray("json", y.dataTypes) < 0 &&
                (y.converters["text script"] = function () {}),
              (s = (function (e, t, n, r) {
                var i,
                  o,
                  a,
                  s,
                  u,
                  l = {},
                  c = e.dataTypes.slice();
                if (c[1])
                  for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                o = c.shift();
                while (o)
                  if (
                    (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    (u = o),
                    (o = c.shift()))
                  )
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                      if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                          if (
                            (s = i.split(" "))[1] === o &&
                            (a = l[u + " " + s[0]] || l["* " + s[0]])
                          ) {
                            !0 === a
                              ? (a = l[i])
                              : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                            break;
                          }
                      if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                          try {
                            t = a(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: a
                                ? e
                                : "No conversion from " + u + " to " + o,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(y, s, T, i)),
              i
                ? (y.ifModified &&
                    ((u = T.getResponseHeader("Last-Modified")) &&
                      (S.lastModified[f] = u),
                    (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                  204 === e || "HEAD" === y.type
                    ? (l = "nocontent")
                    : 304 === e
                    ? (l = "notmodified")
                    : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
              (T.status = e),
              (T.statusText = (t || l) + ""),
              i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
              T.statusCode(w),
              (w = void 0),
              g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]),
              b.fireWith(v, [T, l]),
              g &&
                (m.trigger("ajaxComplete", [T, y]),
                --S.active || S.event.trigger("ajaxStop")));
          }
          return T;
        },
        getJSON: function (e, t, n) {
          return S.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return S.get(e, void 0, t, "script");
        },
      }),
      S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
          return (
            m(t) && ((r = r || n), (n = t), (t = void 0)),
            S.ajax(
              S.extend(
                {
                  url: e,
                  type: i,
                  dataType: r,
                  data: t,
                  success: n,
                },
                S.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          "content-type" === t.toLowerCase() &&
            (e.contentType = e.headers[t] || "");
      }),
      (S._evalUrl = function (e, t, n) {
        return S.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (e) {
            S.globalEval(e, t, n);
          },
        });
      }),
      S.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (m(e) && (e = e.call(this[0])),
              (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  var e = this;
                  while (e.firstElementChild) e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (n) {
          return m(n)
            ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e));
              })
            : this.each(function () {
                var e = S(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              });
        },
        wrap: function (t) {
          var n = m(t);
          return this.each(function (e) {
            S(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                S(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e);
      }),
      (S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (S.ajaxSettings.xhr = function () {
        try {
          return new C.XMLHttpRequest();
        } catch (e) {}
      });
    var _t = { 0: 200, 1223: 204 },
      zt = S.ajaxSettings.xhr();
    (v.cors = !!zt && "withCredentials" in zt),
      (v.ajax = zt = !!zt),
      S.ajaxTransport(function (i) {
        var o, a;
        if (v.cors || (zt && !i.crossDomain))
          return {
            send: function (e, t) {
              var n,
                r = i.xhr();
              if (
                (r.open(i.type, i.url, i.async, i.username, i.password),
                i.xhrFields)
              )
                for (n in i.xhrFields) r[n] = i.xhrFields[n];
              for (n in (i.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(i.mimeType),
              i.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                r.setRequestHeader(n, e[n]);
              (o = function (e) {
                return function () {
                  o &&
                    ((o =
                      a =
                      r.onload =
                      r.onerror =
                      r.onabort =
                      r.ontimeout =
                      r.onreadystatechange =
                        null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                      ? "number" != typeof r.status
                        ? t(0, "error")
                        : t(r.status, r.statusText)
                      : t(
                          _t[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") ||
                            "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = o()),
                (a = r.onerror = r.ontimeout = o("error")),
                void 0 !== r.onabort
                  ? (r.onabort = a)
                  : (r.onreadystatechange = function () {
                      4 === r.readyState &&
                        C.setTimeout(function () {
                          o && a();
                        });
                    }),
                (o = o("abort"));
              try {
                r.send((i.hasContent && i.data) || null);
              } catch (e) {
                if (o) throw e;
              }
            },
            abort: function () {
              o && o();
            },
          };
      }),
      S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      S.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return S.globalEval(e), e;
          },
        },
      }),
      S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
          return {
            send: function (e, t) {
              (r = S("<script>")
                .attr(n.scriptAttrs || {})
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (i = function (e) {
                    r.remove(),
                      (i = null),
                      e && t("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                E.head.appendChild(r[0]);
            },
            abort: function () {
              i && i();
            },
          };
      });
    var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Xt.pop() || S.expando + "_" + Ct.guid++;
        return (this[e] = !0), e;
      },
    }),
      S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
          i,
          o,
          a =
            !1 !== e.jsonp &&
            (Vt.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Vt.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (r = e.jsonpCallback =
              m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Vt, "$1" + r))
              : !1 !== e.jsonp &&
                (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return o || S.error(r + " was not called"), o[0];
            }),
            (e.dataTypes[0] = "json"),
            (i = C[r]),
            (C[r] = function () {
              o = arguments;
            }),
            n.always(function () {
              void 0 === i ? S(C).removeProp(r) : (C[r] = i),
                e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
                o && m(i) && i(o[0]),
                (o = i = void 0);
            }),
            "script"
          );
      }),
      (v.createHTMLDocument =
        (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === Ut.childNodes.length)),
      (S.parseHTML = function (e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (v.createHTMLDocument
                ? (((r = (t =
                    E.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = E.location.href),
                  t.head.appendChild(r))
                : (t = E)),
            (o = !n && []),
            (i = N.exec(e))
              ? [t.createElement(i[1])]
              : ((i = xe([e], t, o)),
                o && o.length && S(o).remove(),
                S.merge([], i.childNodes)));
        var r, i, o;
      }),
      (S.fn.load = function (e, t, n) {
        var r,
          i,
          o,
          a = this,
          s = e.indexOf(" ");
        return (
          -1 < s && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
          m(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (i = "POST"),
          0 < a.length &&
            S.ajax({
              url: e,
              type: i || "GET",
              dataType: "html",
              data: t,
            })
              .done(function (e) {
                (o = arguments),
                  a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      (S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (S.offset = {
        setOffset: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l = S.css(e, "position"),
            c = S(e),
            f = {};
          "static" === l && (e.style.position = "relative"),
            (s = c.offset()),
            (o = S.css(e, "top")),
            (u = S.css(e, "left")),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
              ? ((a = (r = c.position()).top), (i = r.left))
              : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, f) : c.css(f);
        },
      }),
      S.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  S.offset.setOffset(this, t, e);
                });
          var e,
            n,
            r = this[0];
          return r
            ? r.getClientRects().length
              ? ((e = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                {
                  top: e.top + n.pageYOffset,
                  left: e.left + n.pageXOffset,
                })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              r = this[0],
              i = { top: 0, left: 0 };
            if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
            else {
              (t = this.offset()),
                (n = r.ownerDocument),
                (e = r.offsetParent || n.documentElement);
              while (
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === S.css(e, "position")
              )
                e = e.parentNode;
              e &&
                e !== r &&
                1 === e.nodeType &&
                (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
                (i.left += S.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - i.top - S.css(r, "marginTop", !0),
              left: t.left - i.left - S.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            var e = this.offsetParent;
            while (e && "static" === S.css(e, "position")) e = e.offsetParent;
            return e || re;
          });
        },
      }),
      S.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, i) {
          var o = "pageYOffset" === i;
          S.fn[t] = function (e) {
            return B(
              this,
              function (e, t, n) {
                var r;
                if (
                  (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                  void 0 === n)
                )
                  return r ? r[i] : e[t];
                r
                  ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                  : (e[t] = n);
              },
              t,
              e,
              arguments.length
            );
          };
        }
      ),
      S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
          if (t)
            return (t = Be(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
        });
      }),
      S.each({ Height: "height", Width: "width" }, function (a, s) {
        S.each(
          { padding: "inner" + a, content: s, "": "outer" + a },
          function (r, o) {
            S.fn[o] = function (e, t) {
              var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin" : "border");
              return B(
                this,
                function (e, t, n) {
                  var r;
                  return x(e)
                    ? 0 === o.indexOf("outer")
                      ? e["inner" + a]
                      : e.document.documentElement["client" + a]
                    : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a]
                      ))
                    : void 0 === n
                    ? S.css(e, t, i)
                    : S.style(e, t, n, i);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }),
      S.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          S.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      S.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      S.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, n) {
          S.fn[n] = function (e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        }
      );
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || S.guid++),
          i
        );
    }),
      (S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0);
      }),
      (S.isArray = Array.isArray),
      (S.parseJSON = JSON.parse),
      (S.nodeName = A),
      (S.isFunction = m),
      (S.isWindow = x),
      (S.camelCase = X),
      (S.type = w),
      (S.now = Date.now),
      (S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "$1");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return S;
        });
    var Yt = C.jQuery,
      Qt = C.$;
    return (
      (S.noConflict = function (e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
      }),
      "undefined" == typeof e && (C.jQuery = C.$ = S),
      S
    );
  });
  
  /* Lazyload (v1.5.1) by Ralf da Rocha */
  !(function (a, b, c, d) {
    function g(b, c) {
      (this.element = b),
        (this.settings = a.extend({}, f, c)),
        (this._defaults = f),
        (this._name = e),
        (this._timeout = ""),
        this._init();
    }
    var e = "lazyload",
      f = {
        autoload: !0,
        background: !1,
        beforeLoad: null,
        class: "lazyload-image",
        onLoad: null,
        time: 0,
        viewport: !1,
      };
    a.extend(g.prototype, {
      _init: function () {
        a(this.element).addClass("loading").data("status", "waiting");
        var b = a(this.element).data();
        a.each(
          b,
          a.proxy(function (a, b) {
            "undefined" != typeof this.settings[a] && (this.settings[a] = b);
          }, this)
        ),
          this.settings.autoload && !this.settings.viewport
            ? this.load()
            : this.settings.autoload && this.settings.viewport && this._scroll();
      },
      _guid: function () {
        var a = 9999999999,
          b = (Math.random() * a + (1 + Math.random()) * a).toString();
        if (b.length > 8) {
          var c = Math.floor(Math.random() * (b.length - 8));
          b = b.substring(c, c + 8);
        }
        return b.length < 8
          ? ("00000000".substring(0, 8 - b.length) + b).toString()
          : b;
      },
      _loadImg: function (b, c) {
        a("<img/>", { src: b }).on("load", function () {
          if ("function" == typeof c) return c(this);
        });
      },
      _scroll: function () {
        (this.uid = this._guid() + this._guid()),
          a(b)
            .on(
              "scroll." + this.uid,
              a.proxy(function () {
                var c = a(this.element).offset().top,
                  d = c + a(this.element).outerHeight();
                (viewportMin = a(b).scrollTop()),
                  (viewportMax = viewportMin + a(b).height()),
                  viewportMin <= d &&
                    viewportMax >= c &&
                    (this.load(),
                    a(b)
                      .off("scroll." + this.uid)
                      .off("resize." + this.uid));
              }, this)
            )
            .on(
              "resize." + this.uid,
              a.proxy(function () {
                a(b).trigger("scroll." + this.uid);
              }, this)
            )
            .trigger("scroll." + this.uid);
      },
      load: function () {
        return (
          "waiting" === a(this.element).data("status") &&
          (clearTimeout(this._timeout),
          a(this.element).data("status", "loading"),
          "function" == typeof this.settings.beforeLoad &&
            this.settings.beforeLoad(this.element),
          void this._loadImg(
            a(this.element).data("src"),
            a.proxy(function (b) {
              var c = a(
                this.settings.background
                  ? '<div style="background-image: url(' + b.src + ')" />'
                  : b
              );
              c.addClass(this.settings.class),
                a(this.element).data("alt") !== d &&
                  c.attr("alt", a(this.element).data("alt")),
                a(this.element).prepend(c),
                setTimeout(
                  a.proxy(function () {
                    a(this.element)
                      .removeClass("loading")
                      .addClass("loaded")
                      .data("status", "loaded"),
                      "function" == typeof this.settings.onLoad &&
                        this.settings.onLoad(c);
                  }, this),
                  50
                ),
                a(this.element).removeAttr("data-src").removeAttr("data-alt");
            }, this)
          ))
        );
      },
      unload: function (b) {
        return (
          "waiting" !== a(this.element).data("status") &&
          (this.destroy(),
          a(this.element)
            .removeClass("loaded")
            .addClass("loading")
            .data("status", "waiting"),
          void (this.settings.time > 0
            ? (this._timeout = setTimeout(
                a.proxy(function () {
                  a(this.element)
                    .children("." + this.settings.class)
                    .remove(),
                    "undefined" != typeof b && b === !0 && this.load();
                }, this),
                this.settings.time
              ))
            : (a(this.element)
                .children("." + this.settings.class)
                .remove(),
              "undefined" != typeof b && b === !0 && this.load())))
        );
      },
      reload: function () {
        return "waiting" === a(this.element).data("status")
          ? this.load()
          : void this.unload(!0);
      },
      destroy: function () {
        this.settings.viewport &&
          "waiting" !== a(this.element).data("status") &&
          a(b).off("scroll." + this.uid);
      },
      start: function () {
        this.settings.viewport &&
          "waiting" === a(this.element).data("status") &&
          this._scroll();
      },
    }),
      (a.fn[e] = function (b) {
        return (
          this.each(function () {
            if (a.data(this, "plugin_" + e)) {
              var c = a(this).data("plugin_" + e);
              if ("object" == typeof b || !b) return this;
              if (c && 0 != b.indexOf("_") && c[b] && "function" == typeof c[b])
                return c[b](Array.prototype.slice.call(arguments, 1));
              c
                ? 0 == b.indexOf("_")
                  ? a.error("Method " + b + " is private!")
                  : a.error("Method " + b + " does not exist.")
                : a.error("Plugin must be initialised before using method: " + b);
            } else a.data(this, "plugin_" + e, new g(this, b));
          }),
          this
        );
      });
  })(jQuery, window, document);
  // Hammer.JS - v2.0.8 - 2016-04-23
  !(function (a, b, c, d) {
    "use strict";
    function e(a, b, c) {
      return setTimeout(j(a, c), b);
    }
    function f(a, b, c) {
      return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
    }
    function g(a, b, c) {
      var e;
      if (a)
        if (a.forEach) a.forEach(b, c);
        else if (a.length !== d)
          for (e = 0; e < a.length; ) b.call(c, a[e], e, a), e++;
        else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
    function h(b, c, d) {
      var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
      return function () {
        var c = new Error("get-stack-trace"),
          d =
            c && c.stack
              ? c.stack
                  .replace(/^[^\(]+?[\n$]/gm, "")
                  .replace(/^\s+at\s+/gm, "")
                  .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
              : "Unknown Stack Trace",
          f = a.console && (a.console.warn || a.console.log);
        return f && f.call(a.console, e, d), b.apply(this, arguments);
      };
    }
    function i(a, b, c) {
      var d,
        e = b.prototype;
      (d = a.prototype = Object.create(e)),
        (d.constructor = a),
        (d._super = e),
        c && la(d, c);
    }
    function j(a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    }
    function k(a, b) {
      return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a;
    }
    function l(a, b) {
      return a === d ? b : a;
    }
    function m(a, b, c) {
      g(q(b), function (b) {
        a.addEventListener(b, c, !1);
      });
    }
    function n(a, b, c) {
      g(q(b), function (b) {
        a.removeEventListener(b, c, !1);
      });
    }
    function o(a, b) {
      for (; a; ) {
        if (a == b) return !0;
        a = a.parentNode;
      }
      return !1;
    }
    function p(a, b) {
      return a.indexOf(b) > -1;
    }
    function q(a) {
      return a.trim().split(/\s+/g);
    }
    function r(a, b, c) {
      if (a.indexOf && !c) return a.indexOf(b);
      for (var d = 0; d < a.length; ) {
        if ((c && a[d][c] == b) || (!c && a[d] === b)) return d;
        d++;
      }
      return -1;
    }
    function s(a) {
      return Array.prototype.slice.call(a, 0);
    }
    function t(a, b, c) {
      for (var d = [], e = [], f = 0; f < a.length; ) {
        var g = b ? a[f][b] : a[f];
        r(e, g) < 0 && d.push(a[f]), (e[f] = g), f++;
      }
      return (
        c &&
          (d = b
            ? d.sort(function (a, c) {
                return a[b] > c[b];
              })
            : d.sort()),
        d
      );
    }
    function u(a, b) {
      for (
        var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0;
        g < ma.length;
  
      ) {
        if (((c = ma[g]), (e = c ? c + f : b), e in a)) return e;
        g++;
      }
      return d;
    }
    function v() {
      return ua++;
    }
    function w(b) {
      var c = b.ownerDocument || b;
      return c.defaultView || c.parentWindow || a;
    }
    function x(a, b) {
      var c = this;
      (this.manager = a),
        (this.callback = b),
        (this.element = a.element),
        (this.target = a.options.inputTarget),
        (this.domHandler = function (b) {
          k(a.options.enable, [a]) && c.handler(b);
        }),
        this.init();
    }
    function y(a) {
      var b,
        c = a.options.inputClass;
      return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
    }
    function z(a, b, c) {
      var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & Ea && d - e === 0,
        g = b & (Ga | Ha) && d - e === 0;
      (c.isFirst = !!f),
        (c.isFinal = !!g),
        f && (a.session = {}),
        (c.eventType = b),
        A(a, c),
        a.emit("hammer.input", c),
        a.recognize(c),
        (a.session.prevInput = c);
    }
    function A(a, b) {
      var c = a.session,
        d = b.pointers,
        e = d.length;
      c.firstInput || (c.firstInput = D(b)),
        e > 1 && !c.firstMultiple
          ? (c.firstMultiple = D(b))
          : 1 === e && (c.firstMultiple = !1);
      var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = (b.center = E(d));
      (b.timeStamp = ra()),
        (b.deltaTime = b.timeStamp - f.timeStamp),
        (b.angle = I(h, i)),
        (b.distance = H(h, i)),
        B(c, b),
        (b.offsetDirection = G(b.deltaX, b.deltaY));
      var j = F(b.deltaTime, b.deltaX, b.deltaY);
      (b.overallVelocityX = j.x),
        (b.overallVelocityY = j.y),
        (b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y),
        (b.scale = g ? K(g.pointers, d) : 1),
        (b.rotation = g ? J(g.pointers, d) : 0),
        (b.maxPointers = c.prevInput
          ? b.pointers.length > c.prevInput.maxPointers
            ? b.pointers.length
            : c.prevInput.maxPointers
          : b.pointers.length),
        C(c, b);
      var k = a.element;
      o(b.srcEvent.target, k) && (k = b.srcEvent.target), (b.target = k);
    }
    function B(a, b) {
      var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};
      (b.eventType !== Ea && f.eventType !== Ga) ||
        ((e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }),
        (d = a.offsetDelta = { x: c.x, y: c.y })),
        (b.deltaX = e.x + (c.x - d.x)),
        (b.deltaY = e.y + (c.y - d.y));
    }
    function C(a, b) {
      var c,
        e,
        f,
        g,
        h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;
      if (b.eventType != Ha && (i > Da || h.velocity === d)) {
        var j = b.deltaX - h.deltaX,
          k = b.deltaY - h.deltaY,
          l = F(i, j, k);
        (e = l.x),
          (f = l.y),
          (c = qa(l.x) > qa(l.y) ? l.x : l.y),
          (g = G(j, k)),
          (a.lastInterval = b);
      } else
        (c = h.velocity), (e = h.velocityX), (f = h.velocityY), (g = h.direction);
      (b.velocity = c), (b.velocityX = e), (b.velocityY = f), (b.direction = g);
    }
    function D(a) {
      for (var b = [], c = 0; c < a.pointers.length; )
        (b[c] = {
          clientX: pa(a.pointers[c].clientX),
          clientY: pa(a.pointers[c].clientY),
        }),
          c++;
      return {
        timeStamp: ra(),
        pointers: b,
        center: E(b),
        deltaX: a.deltaX,
        deltaY: a.deltaY,
      };
    }
    function E(a) {
      var b = a.length;
      if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };
      for (var c = 0, d = 0, e = 0; b > e; )
        (c += a[e].clientX), (d += a[e].clientY), e++;
      return { x: pa(c / b), y: pa(d / b) };
    }
    function F(a, b, c) {
      return { x: b / a || 0, y: c / a || 0 };
    }
    function G(a, b) {
      return a === b ? Ia : qa(a) >= qa(b) ? (0 > a ? Ja : Ka) : 0 > b ? La : Ma;
    }
    function H(a, b, c) {
      c || (c = Qa);
      var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
      return Math.sqrt(d * d + e * e);
    }
    function I(a, b, c) {
      c || (c = Qa);
      var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
      return (180 * Math.atan2(e, d)) / Math.PI;
    }
    function J(a, b) {
      return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
    }
    function K(a, b) {
      return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
    }
    function L() {
      (this.evEl = Ta),
        (this.evWin = Ua),
        (this.pressed = !1),
        x.apply(this, arguments);
    }
    function M() {
      (this.evEl = Xa),
        (this.evWin = Ya),
        x.apply(this, arguments),
        (this.store = this.manager.session.pointerEvents = []);
    }
    function N() {
      (this.evTarget = $a),
        (this.evWin = _a),
        (this.started = !1),
        x.apply(this, arguments);
    }
    function O(a, b) {
      var c = s(a.touches),
        d = s(a.changedTouches);
      return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
    }
    function P() {
      (this.evTarget = bb), (this.targetIds = {}), x.apply(this, arguments);
    }
    function Q(a, b) {
      var c = s(a.touches),
        d = this.targetIds;
      if (b & (Ea | Fa) && 1 === c.length)
        return (d[c[0].identifier] = !0), [c, c];
      var e,
        f,
        g = s(a.changedTouches),
        h = [],
        i = this.target;
      if (
        ((f = c.filter(function (a) {
          return o(a.target, i);
        })),
        b === Ea)
      )
        for (e = 0; e < f.length; ) (d[f[e].identifier] = !0), e++;
      for (e = 0; e < g.length; )
        d[g[e].identifier] && h.push(g[e]),
          b & (Ga | Ha) && delete d[g[e].identifier],
          e++;
      return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
    }
    function R() {
      x.apply(this, arguments);
      var a = j(this.handler, this);
      (this.touch = new P(this.manager, a)),
        (this.mouse = new L(this.manager, a)),
        (this.primaryTouch = null),
        (this.lastTouches = []);
    }
    function S(a, b) {
      a & Ea
        ? ((this.primaryTouch = b.changedPointers[0].identifier), T.call(this, b))
        : a & (Ga | Ha) && T.call(this, b);
    }
    function T(a) {
      var b = a.changedPointers[0];
      if (b.identifier === this.primaryTouch) {
        var c = { x: b.clientX, y: b.clientY };
        this.lastTouches.push(c);
        var d = this.lastTouches,
          e = function () {
            var a = d.indexOf(c);
            a > -1 && d.splice(a, 1);
          };
        setTimeout(e, cb);
      }
    }
    function U(a) {
      for (
        var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0;
        d < this.lastTouches.length;
        d++
      ) {
        var e = this.lastTouches[d],
          f = Math.abs(b - e.x),
          g = Math.abs(c - e.y);
        if (db >= f && db >= g) return !0;
      }
      return !1;
    }
    function V(a, b) {
      (this.manager = a), this.set(b);
    }
    function W(a) {
      if (p(a, jb)) return jb;
      var b = p(a, kb),
        c = p(a, lb);
      return b && c ? jb : b || c ? (b ? kb : lb) : p(a, ib) ? ib : hb;
    }
    function X() {
      if (!fb) return !1;
      var b = {},
        c = a.CSS && a.CSS.supports;
      return (
        ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(
          function (d) {
            b[d] = c ? a.CSS.supports("touch-action", d) : !0;
          }
        ),
        b
      );
    }
    function Y(a) {
      (this.options = la({}, this.defaults, a || {})),
        (this.id = v()),
        (this.manager = null),
        (this.options.enable = l(this.options.enable, !0)),
        (this.state = nb),
        (this.simultaneous = {}),
        (this.requireFail = []);
    }
    function Z(a) {
      return a & sb
        ? "cancel"
        : a & qb
        ? "end"
        : a & pb
        ? "move"
        : a & ob
        ? "start"
        : "";
    }
    function $(a) {
      return a == Ma
        ? "down"
        : a == La
        ? "up"
        : a == Ja
        ? "left"
        : a == Ka
        ? "right"
        : "";
    }
    function _(a, b) {
      var c = b.manager;
      return c ? c.get(a) : a;
    }
    function aa() {
      Y.apply(this, arguments);
    }
    function ba() {
      aa.apply(this, arguments), (this.pX = null), (this.pY = null);
    }
    function ca() {
      aa.apply(this, arguments);
    }
    function da() {
      Y.apply(this, arguments), (this._timer = null), (this._input = null);
    }
    function ea() {
      aa.apply(this, arguments);
    }
    function fa() {
      aa.apply(this, arguments);
    }
    function ga() {
      Y.apply(this, arguments),
        (this.pTime = !1),
        (this.pCenter = !1),
        (this._timer = null),
        (this._input = null),
        (this.count = 0);
    }
    function ha(a, b) {
      return (
        (b = b || {}),
        (b.recognizers = l(b.recognizers, ha.defaults.preset)),
        new ia(a, b)
      );
    }
    function ia(a, b) {
      (this.options = la({}, ha.defaults, b || {})),
        (this.options.inputTarget = this.options.inputTarget || a),
        (this.handlers = {}),
        (this.session = {}),
        (this.recognizers = []),
        (this.oldCssProps = {}),
        (this.element = a),
        (this.input = y(this)),
        (this.touchAction = new V(this, this.options.touchAction)),
        ja(this, !0),
        g(
          this.options.recognizers,
          function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
          },
          this
        );
    }
    function ja(a, b) {
      var c = a.element;
      if (c.style) {
        var d;
        g(a.options.cssProps, function (e, f) {
          (d = u(c.style, f)),
            b
              ? ((a.oldCssProps[d] = c.style[d]), (c.style[d] = e))
              : (c.style[d] = a.oldCssProps[d] || "");
        }),
          b || (a.oldCssProps = {});
      }
    }
    function ka(a, c) {
      var d = b.createEvent("Event");
      d.initEvent(a, !0, !0), (d.gesture = c), c.target.dispatchEvent(d);
    }
    var la,
      ma = ["", "webkit", "Moz", "MS", "ms", "o"],
      na = b.createElement("div"),
      oa = "function",
      pa = Math.round,
      qa = Math.abs,
      ra = Date.now;
    la =
      "function" != typeof Object.assign
        ? function (a) {
            if (a === d || null === a)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var b = Object(a), c = 1; c < arguments.length; c++) {
              var e = arguments[c];
              if (e !== d && null !== e)
                for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f]);
            }
            return b;
          }
        : Object.assign;
    var sa = h(
        function (a, b, c) {
          for (var e = Object.keys(b), f = 0; f < e.length; )
            (!c || (c && a[e[f]] === d)) && (a[e[f]] = b[e[f]]), f++;
          return a;
        },
        "extend",
        "Use `assign`."
      ),
      ta = h(
        function (a, b) {
          return sa(a, b, !0);
        },
        "merge",
        "Use `assign`."
      ),
      ua = 1,
      va = /mobile|tablet|ip(ad|hone|od)|android/i,
      wa = "ontouchstart" in a,
      xa = u(a, "PointerEvent") !== d,
      ya = wa && va.test(navigator.userAgent),
      za = "touch",
      Aa = "pen",
      Ba = "mouse",
      Ca = "kinect",
      Da = 25,
      Ea = 1,
      Fa = 2,
      Ga = 4,
      Ha = 8,
      Ia = 1,
      Ja = 2,
      Ka = 4,
      La = 8,
      Ma = 16,
      Na = Ja | Ka,
      Oa = La | Ma,
      Pa = Na | Oa,
      Qa = ["x", "y"],
      Ra = ["clientX", "clientY"];
    x.prototype = {
      handler: function () {},
      init: function () {
        this.evEl && m(this.element, this.evEl, this.domHandler),
          this.evTarget && m(this.target, this.evTarget, this.domHandler),
          this.evWin && m(w(this.element), this.evWin, this.domHandler);
      },
      destroy: function () {
        this.evEl && n(this.element, this.evEl, this.domHandler),
          this.evTarget && n(this.target, this.evTarget, this.domHandler),
          this.evWin && n(w(this.element), this.evWin, this.domHandler);
      },
    };
    var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
      Ta = "mousedown",
      Ua = "mousemove mouseup";
    i(L, x, {
      handler: function (a) {
        var b = Sa[a.type];
        b & Ea && 0 === a.button && (this.pressed = !0),
          b & Fa && 1 !== a.which && (b = Ga),
          this.pressed &&
            (b & Ga && (this.pressed = !1),
            this.callback(this.manager, b, {
              pointers: [a],
              changedPointers: [a],
              pointerType: Ba,
              srcEvent: a,
            }));
      },
    });
    var Va = {
        pointerdown: Ea,
        pointermove: Fa,
        pointerup: Ga,
        pointercancel: Ha,
        pointerout: Ha,
      },
      Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
      Xa = "pointerdown",
      Ya = "pointermove pointerup pointercancel";
    a.MSPointerEvent &&
      !a.PointerEvent &&
      ((Xa = "MSPointerDown"),
      (Ya = "MSPointerMove MSPointerUp MSPointerCancel")),
      i(M, x, {
        handler: function (a) {
          var b = this.store,
            c = !1,
            d = a.type.toLowerCase().replace("ms", ""),
            e = Va[d],
            f = Wa[a.pointerType] || a.pointerType,
            g = f == za,
            h = r(b, a.pointerId, "pointerId");
          e & Ea && (0 === a.button || g)
            ? 0 > h && (b.push(a), (h = b.length - 1))
            : e & (Ga | Ha) && (c = !0),
            0 > h ||
              ((b[h] = a),
              this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a,
              }),
              c && b.splice(h, 1));
        },
      });
    var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      $a = "touchstart",
      _a = "touchstart touchmove touchend touchcancel";
    i(N, x, {
      handler: function (a) {
        var b = Za[a.type];
        if ((b === Ea && (this.started = !0), this.started)) {
          var c = O.call(this, a, b);
          b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1),
            this.callback(this.manager, b, {
              pointers: c[0],
              changedPointers: c[1],
              pointerType: za,
              srcEvent: a,
            });
        }
      },
    });
    var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      bb = "touchstart touchmove touchend touchcancel";
    i(P, x, {
      handler: function (a) {
        var b = ab[a.type],
          c = Q.call(this, a, b);
        c &&
          this.callback(this.manager, b, {
            pointers: c[0],
            changedPointers: c[1],
            pointerType: za,
            srcEvent: a,
          });
      },
    });
    var cb = 2500,
      db = 25;
    i(R, x, {
      handler: function (a, b, c) {
        var d = c.pointerType == za,
          e = c.pointerType == Ba;
        if (
          !(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)
        ) {
          if (d) S.call(this, b, c);
          else if (e && U.call(this, c)) return;
          this.callback(a, b, c);
        }
      },
      destroy: function () {
        this.touch.destroy(), this.mouse.destroy();
      },
    });
    var eb = u(na.style, "touchAction"),
      fb = eb !== d,
      gb = "compute",
      hb = "auto",
      ib = "manipulation",
      jb = "none",
      kb = "pan-x",
      lb = "pan-y",
      mb = X();
    V.prototype = {
      set: function (a) {
        a == gb && (a = this.compute()),
          fb &&
            this.manager.element.style &&
            mb[a] &&
            (this.manager.element.style[eb] = a),
          (this.actions = a.toLowerCase().trim());
      },
      update: function () {
        this.set(this.manager.options.touchAction);
      },
      compute: function () {
        var a = [];
        return (
          g(this.manager.recognizers, function (b) {
            k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
          }),
          W(a.join(" "))
        );
      },
      preventDefaults: function (a) {
        var b = a.srcEvent,
          c = a.offsetDirection;
        if (this.manager.session.prevented) return void b.preventDefault();
        var d = this.actions,
          e = p(d, jb) && !mb[jb],
          f = p(d, lb) && !mb[lb],
          g = p(d, kb) && !mb[kb];
        if (e) {
          var h = 1 === a.pointers.length,
            i = a.distance < 2,
            j = a.deltaTime < 250;
          if (h && i && j) return;
        }
        return g && f
          ? void 0
          : e || (f && c & Na) || (g && c & Oa)
          ? this.preventSrc(b)
          : void 0;
      },
      preventSrc: function (a) {
        (this.manager.session.prevented = !0), a.preventDefault();
      },
    };
    var nb = 1,
      ob = 2,
      pb = 4,
      qb = 8,
      rb = qb,
      sb = 16,
      tb = 32;
    (Y.prototype = {
      defaults: {},
      set: function (a) {
        return (
          la(this.options, a),
          this.manager && this.manager.touchAction.update(),
          this
        );
      },
      recognizeWith: function (a) {
        if (f(a, "recognizeWith", this)) return this;
        var b = this.simultaneous;
        return (
          (a = _(a, this)),
          b[a.id] || ((b[a.id] = a), a.recognizeWith(this)),
          this
        );
      },
      dropRecognizeWith: function (a) {
        return f(a, "dropRecognizeWith", this)
          ? this
          : ((a = _(a, this)), delete this.simultaneous[a.id], this);
      },
      requireFailure: function (a) {
        if (f(a, "requireFailure", this)) return this;
        var b = this.requireFail;
        return (
          (a = _(a, this)),
          -1 === r(b, a) && (b.push(a), a.requireFailure(this)),
          this
        );
      },
      dropRequireFailure: function (a) {
        if (f(a, "dropRequireFailure", this)) return this;
        a = _(a, this);
        var b = r(this.requireFail, a);
        return b > -1 && this.requireFail.splice(b, 1), this;
      },
      hasRequireFailures: function () {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function (a) {
        return !!this.simultaneous[a.id];
      },
      emit: function (a) {
        function b(b) {
          c.manager.emit(b, a);
        }
        var c = this,
          d = this.state;
        qb > d && b(c.options.event + Z(d)),
          b(c.options.event),
          a.additionalEvent && b(a.additionalEvent),
          d >= qb && b(c.options.event + Z(d));
      },
      tryEmit: function (a) {
        return this.canEmit() ? this.emit(a) : void (this.state = tb);
      },
      canEmit: function () {
        for (var a = 0; a < this.requireFail.length; ) {
          if (!(this.requireFail[a].state & (tb | nb))) return !1;
          a++;
        }
        return !0;
      },
      recognize: function (a) {
        var b = la({}, a);
        return k(this.options.enable, [this, b])
          ? (this.state & (rb | sb | tb) && (this.state = nb),
            (this.state = this.process(b)),
            void (this.state & (ob | pb | qb | sb) && this.tryEmit(b)))
          : (this.reset(), void (this.state = tb));
      },
      process: function (a) {},
      getTouchAction: function () {},
      reset: function () {},
    }),
      i(aa, Y, {
        defaults: { pointers: 1 },
        attrTest: function (a) {
          var b = this.options.pointers;
          return 0 === b || a.pointers.length === b;
        },
        process: function (a) {
          var b = this.state,
            c = a.eventType,
            d = b & (ob | pb),
            e = this.attrTest(a);
          return d && (c & Ha || !e)
            ? b | sb
            : d || e
            ? c & Ga
              ? b | qb
              : b & ob
              ? b | pb
              : ob
            : tb;
        },
      }),
      i(ba, aa, {
        defaults: {
          event: "pan",
          threshold: 10,
          pointers: 1,
          direction: Pa,
        },
        getTouchAction: function () {
          var a = this.options.direction,
            b = [];
          return a & Na && b.push(lb), a & Oa && b.push(kb), b;
        },
        directionTest: function (a) {
          var b = this.options,
            c = !0,
            d = a.distance,
            e = a.direction,
            f = a.deltaX,
            g = a.deltaY;
          return (
            e & b.direction ||
              (b.direction & Na
                ? ((e = 0 === f ? Ia : 0 > f ? Ja : Ka),
                  (c = f != this.pX),
                  (d = Math.abs(a.deltaX)))
                : ((e = 0 === g ? Ia : 0 > g ? La : Ma),
                  (c = g != this.pY),
                  (d = Math.abs(a.deltaY)))),
            (a.direction = e),
            c && d > b.threshold && e & b.direction
          );
        },
        attrTest: function (a) {
          return (
            aa.prototype.attrTest.call(this, a) &&
            (this.state & ob || (!(this.state & ob) && this.directionTest(a)))
          );
        },
        emit: function (a) {
          (this.pX = a.deltaX), (this.pY = a.deltaY);
          var b = $(a.direction);
          b && (a.additionalEvent = this.options.event + b),
            this._super.emit.call(this, a);
        },
      }),
      i(ca, aa, {
        defaults: { event: "pinch", threshold: 0, pointers: 2 },
        getTouchAction: function () {
          return [jb];
        },
        attrTest: function (a) {
          return (
            this._super.attrTest.call(this, a) &&
            (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
          );
        },
        emit: function (a) {
          if (1 !== a.scale) {
            var b = a.scale < 1 ? "in" : "out";
            a.additionalEvent = this.options.event + b;
          }
          this._super.emit.call(this, a);
        },
      }),
      i(da, Y, {
        defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
        getTouchAction: function () {
          return [hb];
        },
        process: function (a) {
          var b = this.options,
            c = a.pointers.length === b.pointers,
            d = a.distance < b.threshold,
            f = a.deltaTime > b.time;
          if (((this._input = a), !d || !c || (a.eventType & (Ga | Ha) && !f)))
            this.reset();
          else if (a.eventType & Ea)
            this.reset(),
              (this._timer = e(
                function () {
                  (this.state = rb), this.tryEmit();
                },
                b.time,
                this
              ));
          else if (a.eventType & Ga) return rb;
          return tb;
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function (a) {
          this.state === rb &&
            (a && a.eventType & Ga
              ? this.manager.emit(this.options.event + "up", a)
              : ((this._input.timeStamp = ra()),
                this.manager.emit(this.options.event, this._input)));
        },
      }),
      i(ea, aa, {
        defaults: { event: "rotate", threshold: 0, pointers: 2 },
        getTouchAction: function () {
          return [jb];
        },
        attrTest: function (a) {
          return (
            this._super.attrTest.call(this, a) &&
            (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
          );
        },
      }),
      i(fa, aa, {
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.3,
          direction: Na | Oa,
          pointers: 1,
        },
        getTouchAction: function () {
          return ba.prototype.getTouchAction.call(this);
        },
        attrTest: function (a) {
          var b,
            c = this.options.direction;
          return (
            c & (Na | Oa)
              ? (b = a.overallVelocity)
              : c & Na
              ? (b = a.overallVelocityX)
              : c & Oa && (b = a.overallVelocityY),
            this._super.attrTest.call(this, a) &&
              c & a.offsetDirection &&
              a.distance > this.options.threshold &&
              a.maxPointers == this.options.pointers &&
              qa(b) > this.options.velocity &&
              a.eventType & Ga
          );
        },
        emit: function (a) {
          var b = $(a.offsetDirection);
          b && this.manager.emit(this.options.event + b, a),
            this.manager.emit(this.options.event, a);
        },
      }),
      i(ga, Y, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 9,
          posThreshold: 10,
        },
        getTouchAction: function () {
          return [ib];
        },
        process: function (a) {
          var b = this.options,
            c = a.pointers.length === b.pointers,
            d = a.distance < b.threshold,
            f = a.deltaTime < b.time;
          if ((this.reset(), a.eventType & Ea && 0 === this.count))
            return this.failTimeout();
          if (d && f && c) {
            if (a.eventType != Ga) return this.failTimeout();
            var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
              h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
            (this.pTime = a.timeStamp),
              (this.pCenter = a.center),
              h && g ? (this.count += 1) : (this.count = 1),
              (this._input = a);
            var i = this.count % b.taps;
            if (0 === i)
              return this.hasRequireFailures()
                ? ((this._timer = e(
                    function () {
                      (this.state = rb), this.tryEmit();
                    },
                    b.interval,
                    this
                  )),
                  ob)
                : rb;
          }
          return tb;
        },
        failTimeout: function () {
          return (
            (this._timer = e(
              function () {
                this.state = tb;
              },
              this.options.interval,
              this
            )),
            tb
          );
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function () {
          this.state == rb &&
            ((this._input.tapCount = this.count),
            this.manager.emit(this.options.event, this._input));
        },
      }),
      (ha.VERSION = "2.0.8"),
      (ha.defaults = {
        domEvents: !1,
        touchAction: gb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [ea, { enable: !1 }],
          [ca, { enable: !1 }, ["rotate"]],
          [fa, { direction: Na }],
          [ba, { direction: Na }, ["swipe"]],
          [ga],
          [ga, { event: "doubletap", taps: 2 }, ["tap"]],
          [da],
        ],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)",
        },
      });
    var ub = 1,
      vb = 2;
    (ia.prototype = {
      set: function (a) {
        return (
          la(this.options, a),
          a.touchAction && this.touchAction.update(),
          a.inputTarget &&
            (this.input.destroy(),
            (this.input.target = a.inputTarget),
            this.input.init()),
          this
        );
      },
      stop: function (a) {
        this.session.stopped = a ? vb : ub;
      },
      recognize: function (a) {
        var b = this.session;
        if (!b.stopped) {
          this.touchAction.preventDefaults(a);
          var c,
            d = this.recognizers,
            e = b.curRecognizer;
          (!e || (e && e.state & rb)) && (e = b.curRecognizer = null);
          for (var f = 0; f < d.length; )
            (c = d[f]),
              b.stopped === vb || (e && c != e && !c.canRecognizeWith(e))
                ? c.reset()
                : c.recognize(a),
              !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c),
              f++;
        }
      },
      get: function (a) {
        if (a instanceof Y) return a;
        for (var b = this.recognizers, c = 0; c < b.length; c++)
          if (b[c].options.event == a) return b[c];
        return null;
      },
      add: function (a) {
        if (f(a, "add", this)) return this;
        var b = this.get(a.options.event);
        return (
          b && this.remove(b),
          this.recognizers.push(a),
          (a.manager = this),
          this.touchAction.update(),
          a
        );
      },
      remove: function (a) {
        if (f(a, "remove", this)) return this;
        if ((a = this.get(a))) {
          var b = this.recognizers,
            c = r(b, a);
          -1 !== c && (b.splice(c, 1), this.touchAction.update());
        }
        return this;
      },
      on: function (a, b) {
        if (a !== d && b !== d) {
          var c = this.handlers;
          return (
            g(q(a), function (a) {
              (c[a] = c[a] || []), c[a].push(b);
            }),
            this
          );
        }
      },
      off: function (a, b) {
        if (a !== d) {
          var c = this.handlers;
          return (
            g(q(a), function (a) {
              b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
            }),
            this
          );
        }
      },
      emit: function (a, b) {
        this.options.domEvents && ka(a, b);
        var c = this.handlers[a] && this.handlers[a].slice();
        if (c && c.length) {
          (b.type = a),
            (b.preventDefault = function () {
              b.srcEvent.preventDefault();
            });
          for (var d = 0; d < c.length; ) c[d](b), d++;
        }
      },
      destroy: function () {
        this.element && ja(this, !1),
          (this.handlers = {}),
          (this.session = {}),
          this.input.destroy(),
          (this.element = null);
      },
    }),
      la(ha, {
        INPUT_START: Ea,
        INPUT_MOVE: Fa,
        INPUT_END: Ga,
        INPUT_CANCEL: Ha,
        STATE_POSSIBLE: nb,
        STATE_BEGAN: ob,
        STATE_CHANGED: pb,
        STATE_ENDED: qb,
        STATE_RECOGNIZED: rb,
        STATE_CANCELLED: sb,
        STATE_FAILED: tb,
        DIRECTION_NONE: Ia,
        DIRECTION_LEFT: Ja,
        DIRECTION_RIGHT: Ka,
        DIRECTION_UP: La,
        DIRECTION_DOWN: Ma,
        DIRECTION_HORIZONTAL: Na,
        DIRECTION_VERTICAL: Oa,
        DIRECTION_ALL: Pa,
        Manager: ia,
        Input: x,
        TouchAction: V,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: Y,
        AttrRecognizer: aa,
        Tap: ga,
        Pan: ba,
        Swipe: fa,
        Pinch: ca,
        Rotate: ea,
        Press: da,
        on: m,
        off: n,
        each: g,
        merge: ta,
        extend: sa,
        assign: la,
        inherit: i,
        bindFn: j,
        prefixed: u,
      });
    var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
    (wb.Hammer = ha),
      "function" == typeof define && define.amd
        ? define(function () {
            return ha;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = ha)
        : (a[c] = ha);
  })(window, document, "Hammer");
  /*! VelocityJS.org (1.3.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
  /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
  !(function (a) {
    "use strict";
    function b(a) {
      var b = a.length,
        d = c.type(a);
      return (
        "function" !== d &&
        !c.isWindow(a) &&
        (!(1 !== a.nodeType || !b) ||
          "array" === d ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a))
      );
    }
    if (!a.jQuery) {
      var c = function (a, b) {
        return new c.fn.init(a, b);
      };
      (c.isWindow = function (a) {
        return a && a === a.window;
      }),
        (c.type = function (a) {
          return a
            ? "object" == typeof a || "function" == typeof a
              ? e[g.call(a)] || "object"
              : typeof a
            : a + "";
        }),
        (c.isArray =
          Array.isArray ||
          function (a) {
            return "array" === c.type(a);
          }),
        (c.isPlainObject = function (a) {
          var b;
          if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a))
            return !1;
          try {
            if (
              a.constructor &&
              !f.call(a, "constructor") &&
              !f.call(a.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (d) {
            return !1;
          }
          for (b in a);
          return void 0 === b || f.call(a, b);
        }),
        (c.each = function (a, c, d) {
          var e,
            f = 0,
            g = a.length,
            h = b(a);
          if (d) {
            if (h) for (; f < g && ((e = c.apply(a[f], d)), e !== !1); f++);
            else for (f in a) if (((e = c.apply(a[f], d)), e === !1)) break;
          } else if (h)
            for (; f < g && ((e = c.call(a[f], f, a[f])), e !== !1); f++);
          else for (f in a) if (((e = c.call(a[f], f, a[f])), e === !1)) break;
          return a;
        }),
        (c.data = function (a, b, e) {
          if (void 0 === e) {
            var f = a[c.expando],
              g = f && d[f];
            if (void 0 === b) return g;
            if (g && b in g) return g[b];
          } else if (void 0 !== b) {
            var h = a[c.expando] || (a[c.expando] = ++c.uuid);
            return (d[h] = d[h] || {}), (d[h][b] = e), e;
          }
        }),
        (c.removeData = function (a, b) {
          var e = a[c.expando],
            f = e && d[e];
          f &&
            (b
              ? c.each(b, function (a, b) {
                  delete f[b];
                })
              : delete d[e]);
        }),
        (c.extend = function () {
          var a,
            b,
            d,
            e,
            f,
            g,
            h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
          for (
            "boolean" == typeof h && ((k = h), (h = arguments[i] || {}), i++),
              "object" != typeof h && "function" !== c.type(h) && (h = {}),
              i === j && ((h = this), i--);
            i < j;
            i++
          )
            if ((f = arguments[i]))
              for (e in f)
                (a = h[e]),
                  (d = f[e]),
                  h !== d &&
                    (k && d && (c.isPlainObject(d) || (b = c.isArray(d)))
                      ? (b
                          ? ((b = !1), (g = a && c.isArray(a) ? a : []))
                          : (g = a && c.isPlainObject(a) ? a : {}),
                        (h[e] = c.extend(k, g, d)))
                      : void 0 !== d && (h[e] = d));
          return h;
        }),
        (c.queue = function (a, d, e) {
          function f(a, c) {
            var d = c || [];
            return (
              a &&
                (b(Object(a))
                  ? !(function (a, b) {
                      for (var c = +b.length, d = 0, e = a.length; d < c; )
                        a[e++] = b[d++];
                      if (c !== c) for (; void 0 !== b[d]; ) a[e++] = b[d++];
                      return (a.length = e), a;
                    })(d, "string" == typeof a ? [a] : a)
                  : [].push.call(d, a)),
              d
            );
          }
          if (a) {
            d = (d || "fx") + "queue";
            var g = c.data(a, d);
            return e
              ? (!g || c.isArray(e) ? (g = c.data(a, d, f(e))) : g.push(e), g)
              : g || [];
          }
        }),
        (c.dequeue = function (a, b) {
          c.each(a.nodeType ? [a] : a, function (a, d) {
            b = b || "fx";
            var e = c.queue(d, b),
              f = e.shift();
            "inprogress" === f && (f = e.shift()),
              f &&
                ("fx" === b && e.unshift("inprogress"),
                f.call(d, function () {
                  c.dequeue(d, b);
                }));
          });
        }),
        (c.fn = c.prototype =
          {
            init: function (a) {
              if (a.nodeType) return (this[0] = a), this;
              throw new Error("Not a DOM node.");
            },
            offset: function () {
              var b = this[0].getBoundingClientRect
                ? this[0].getBoundingClientRect()
                : { top: 0, left: 0 };
              return {
                top:
                  b.top +
                  (a.pageYOffset || document.scrollTop || 0) -
                  (document.clientTop || 0),
                left:
                  b.left +
                  (a.pageXOffset || document.scrollLeft || 0) -
                  (document.clientLeft || 0),
              };
            },
            position: function () {
              function a(a) {
                for (
                  var b = a.offsetParent || document;
                  b &&
                  "html" !== b.nodeType.toLowerCase &&
                  "static" === b.style.position;
  
                )
                  b = b.offsetParent;
                return b || document;
              }
              var b = this[0],
                d = a(b),
                e = this.offset(),
                f = /^(?:body|html)$/i.test(d.nodeName)
                  ? { top: 0, left: 0 }
                  : c(d).offset();
              return (
                (e.top -= parseFloat(b.style.marginTop) || 0),
                (e.left -= parseFloat(b.style.marginLeft) || 0),
                d.style &&
                  ((f.top += parseFloat(d.style.borderTopWidth) || 0),
                  (f.left += parseFloat(d.style.borderLeftWidth) || 0)),
                { top: e.top - f.top, left: e.left - f.left }
              );
            },
          });
      var d = {};
      (c.expando = "velocity" + new Date().getTime()), (c.uuid = 0);
      for (
        var e = {},
          f = e.hasOwnProperty,
          g = e.toString,
          h =
            "Boolean Number String Function Array Date RegExp Object Error".split(
              " "
            ),
          i = 0;
        i < h.length;
        i++
      )
        e["[object " + h[i] + "]"] = h[i].toLowerCase();
      (c.fn.init.prototype = c.fn), (a.Velocity = { Utilities: c });
    }
  })(window),
    (function (a) {
      "use strict";
      "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = a())
        : "function" == typeof define && define.amd
        ? define(a)
        : a();
    })(function () {
      "use strict";
      return (function (a, b, c, d) {
        function e(a) {
          for (var b = -1, c = a ? a.length : 0, d = []; ++b < c; ) {
            var e = a[b];
            e && d.push(e);
          }
          return d;
        }
        function f(a) {
          return (
            p.isWrapped(a) ? (a = [].slice.call(a)) : p.isNode(a) && (a = [a]), a
          );
        }
        function g(a) {
          var b = m.data(a, "velocity");
          return null === b ? d : b;
        }
        function h(a) {
          return function (b) {
            return Math.round(b * a) * (1 / a);
          };
        }
        function i(a, c, d, e) {
          function f(a, b) {
            return 1 - 3 * b + 3 * a;
          }
          function g(a, b) {
            return 3 * b - 6 * a;
          }
          function h(a) {
            return 3 * a;
          }
          function i(a, b, c) {
            return ((f(b, c) * a + g(b, c)) * a + h(b)) * a;
          }
          function j(a, b, c) {
            return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b);
          }
          function k(b, c) {
            for (var e = 0; e < p; ++e) {
              var f = j(c, a, d);
              if (0 === f) return c;
              var g = i(c, a, d) - b;
              c -= g / f;
            }
            return c;
          }
          function l() {
            for (var b = 0; b < t; ++b) x[b] = i(b * u, a, d);
          }
          function m(b, c, e) {
            var f,
              g,
              h = 0;
            do
              (g = c + (e - c) / 2),
                (f = i(g, a, d) - b),
                f > 0 ? (e = g) : (c = g);
            while (Math.abs(f) > r && ++h < s);
            return g;
          }
          function n(b) {
            for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e) c += u;
            --e;
            var g = (b - x[e]) / (x[e + 1] - x[e]),
              h = c + g * u,
              i = j(h, a, d);
            return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u);
          }
          function o() {
            (y = !0), (a === c && d === e) || l();
          }
          var p = 4,
            q = 0.001,
            r = 1e-7,
            s = 10,
            t = 11,
            u = 1 / (t - 1),
            v = "Float32Array" in b;
          if (4 !== arguments.length) return !1;
          for (var w = 0; w < 4; ++w)
            if (
              "number" != typeof arguments[w] ||
              isNaN(arguments[w]) ||
              !isFinite(arguments[w])
            )
              return !1;
          (a = Math.min(a, 1)),
            (d = Math.min(d, 1)),
            (a = Math.max(a, 0)),
            (d = Math.max(d, 0));
          var x = v ? new Float32Array(t) : new Array(t),
            y = !1,
            z = function (b) {
              return (
                y || o(),
                a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
              );
            };
          z.getControlPoints = function () {
            return [
              { x: a, y: c },
              { x: d, y: e },
            ];
          };
          var A = "generateBezier(" + [a, c, d, e] + ")";
          return (
            (z.toString = function () {
              return A;
            }),
            z
          );
        }
        function j(a, b) {
          var c = a;
          return (
            p.isString(a)
              ? t.Easings[a] || (c = !1)
              : (c =
                  p.isArray(a) && 1 === a.length
                    ? h.apply(null, a)
                    : p.isArray(a) && 2 === a.length
                    ? u.apply(null, a.concat([b]))
                    : !(!p.isArray(a) || 4 !== a.length) && i.apply(null, a)),
            c === !1 &&
              (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s),
            c
          );
        }
        function k(a) {
          if (a) {
            var b = new Date().getTime(),
              c = t.State.calls.length;
            c > 1e4 &&
              ((t.State.calls = e(t.State.calls)), (c = t.State.calls.length));
            for (var f = 0; f < c; f++)
              if (t.State.calls[f]) {
                var h = t.State.calls[f],
                  i = h[0],
                  j = h[2],
                  n = h[3],
                  o = !!n,
                  q = null;
                n || (n = t.State.calls[f][3] = b - 16);
                for (
                  var r = Math.min((b - n) / j.duration, 1), s = 0, u = i.length;
                  s < u;
                  s++
                ) {
                  var w = i[s],
                    y = w.element;
                  if (g(y)) {
                    var z = !1;
                    if (
                      j.display !== d &&
                      null !== j.display &&
                      "none" !== j.display
                    ) {
                      if ("flex" === j.display) {
                        var A = [
                          "-webkit-box",
                          "-moz-box",
                          "-ms-flexbox",
                          "-webkit-flex",
                        ];
                        m.each(A, function (a, b) {
                          v.setPropertyValue(y, "display", b);
                        });
                      }
                      v.setPropertyValue(y, "display", j.display);
                    }
                    j.visibility !== d &&
                      "hidden" !== j.visibility &&
                      v.setPropertyValue(y, "visibility", j.visibility);
                    for (var B in w)
                      if ("element" !== B) {
                        var C,
                          D = w[B],
                          E = p.isString(D.easing)
                            ? t.Easings[D.easing]
                            : D.easing;
                        if (1 === r) C = D.endValue;
                        else {
                          var F = D.endValue - D.startValue;
                          if (
                            ((C = D.startValue + F * E(r, j, F)),
                            !o && C === D.currentValue)
                          )
                            continue;
                        }
                        if (((D.currentValue = C), "tween" === B)) q = C;
                        else {
                          var G;
                          if (v.Hooks.registered[B]) {
                            G = v.Hooks.getRoot(B);
                            var H = g(y).rootPropertyValueCache[G];
                            H && (D.rootPropertyValue = H);
                          }
                          var I = v.setPropertyValue(
                            y,
                            B,
                            D.currentValue +
                              (0 === parseFloat(C) ? "" : D.unitType),
                            D.rootPropertyValue,
                            D.scrollData
                          );
                          v.Hooks.registered[B] &&
                            (v.Normalizations.registered[G]
                              ? (g(y).rootPropertyValueCache[G] =
                                  v.Normalizations.registered[G](
                                    "extract",
                                    null,
                                    I[1]
                                  ))
                              : (g(y).rootPropertyValueCache[G] = I[1])),
                            "transform" === I[0] && (z = !0);
                        }
                      }
                    j.mobileHA &&
                      g(y).transformCache.translate3d === d &&
                      ((g(y).transformCache.translate3d = "(0px, 0px, 0px)"),
                      (z = !0)),
                      z && v.flushTransformCache(y);
                  }
                }
                j.display !== d &&
                  "none" !== j.display &&
                  (t.State.calls[f][2].display = !1),
                  j.visibility !== d &&
                    "hidden" !== j.visibility &&
                    (t.State.calls[f][2].visibility = !1),
                  j.progress &&
                    j.progress.call(
                      h[1],
                      h[1],
                      r,
                      Math.max(0, n + j.duration - b),
                      n,
                      q
                    ),
                  1 === r && l(f);
              }
          }
          t.State.isTicking && x(k);
        }
        function l(a, b) {
          if (!t.State.calls[a]) return !1;
          for (
            var c = t.State.calls[a][0],
              e = t.State.calls[a][1],
              f = t.State.calls[a][2],
              h = t.State.calls[a][4],
              i = !1,
              j = 0,
              k = c.length;
            j < k;
            j++
          ) {
            var l = c[j].element;
            b ||
              f.loop ||
              ("none" === f.display &&
                v.setPropertyValue(l, "display", f.display),
              "hidden" === f.visibility &&
                v.setPropertyValue(l, "visibility", f.visibility));
            var n = g(l);
            if (
              f.loop !== !0 &&
              (m.queue(l)[1] === d ||
                !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) &&
              n
            ) {
              (n.isAnimating = !1), (n.rootPropertyValueCache = {});
              var o = !1;
              m.each(v.Lists.transforms3D, function (a, b) {
                var c = /^scale/.test(b) ? 1 : 0,
                  e = n.transformCache[b];
                n.transformCache[b] !== d &&
                  new RegExp("^\\(" + c + "[^.]").test(e) &&
                  ((o = !0), delete n.transformCache[b]);
              }),
                f.mobileHA && ((o = !0), delete n.transformCache.translate3d),
                o && v.flushTransformCache(l),
                v.Values.removeClass(l, "velocity-animating");
            }
            if (!b && f.complete && !f.loop && j === k - 1)
              try {
                f.complete.call(e, e);
              } catch (p) {
                setTimeout(function () {
                  throw p;
                }, 1);
              }
            h && f.loop !== !0 && h(e),
              n &&
                f.loop === !0 &&
                !b &&
                (m.each(n.tweensContainer, function (a, b) {
                  if (
                    /^rotate/.test(a) &&
                    (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 ===
                      0
                  ) {
                    var c = b.startValue;
                    (b.startValue = b.endValue), (b.endValue = c);
                  }
                  /^backgroundPosition/.test(a) &&
                    100 === parseFloat(b.endValue) &&
                    "%" === b.unitType &&
                    ((b.endValue = 0), (b.startValue = 100));
                }),
                t(l, "reverse", { loop: !0, delay: f.delay })),
              f.queue !== !1 && m.dequeue(l, f.queue);
          }
          t.State.calls[a] = !1;
          for (var q = 0, r = t.State.calls.length; q < r; q++)
            if (t.State.calls[q] !== !1) {
              i = !0;
              break;
            }
          i === !1 &&
            ((t.State.isTicking = !1),
            delete t.State.calls,
            (t.State.calls = []));
        }
        var m,
          n = (function () {
            if (c.documentMode) return c.documentMode;
            for (var a = 7; a > 4; a--) {
              var b = c.createElement("div");
              if (
                ((b.innerHTML =
                  "<!--[if IE " + a + "]><span></span><![endif]-->"),
                b.getElementsByTagName("span").length)
              )
                return (b = null), a;
            }
            return d;
          })(),
          o = (function () {
            var a = 0;
            return (
              b.webkitRequestAnimationFrame ||
              b.mozRequestAnimationFrame ||
              function (b) {
                var c,
                  d = new Date().getTime();
                return (
                  (c = Math.max(0, 16 - (d - a))),
                  (a = d + c),
                  setTimeout(function () {
                    b(d + c);
                  }, c)
                );
              }
            );
          })(),
          p = {
            isString: function (a) {
              return "string" == typeof a;
            },
            isArray:
              Array.isArray ||
              function (a) {
                return "[object Array]" === Object.prototype.toString.call(a);
              },
            isFunction: function (a) {
              return "[object Function]" === Object.prototype.toString.call(a);
            },
            isNode: function (a) {
              return a && a.nodeType;
            },
            isNodeList: function (a) {
              return (
                "object" == typeof a &&
                /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
                  Object.prototype.toString.call(a)
                ) &&
                a.length !== d &&
                (0 === a.length || ("object" == typeof a[0] && a[0].nodeType > 0))
              );
            },
            isWrapped: function (a) {
              return a && (a.jquery || (b.Zepto && b.Zepto.zepto.isZ(a)));
            },
            isSVG: function (a) {
              return b.SVGElement && a instanceof b.SVGElement;
            },
            isEmptyObject: function (a) {
              for (var b in a) return !1;
              return !0;
            },
          },
          q = !1;
        if (
          (a.fn && a.fn.jquery ? ((m = a), (q = !0)) : (m = b.Velocity.Utilities),
          n <= 8 && !q)
        )
          throw new Error(
            "Velocity: IE8 and below require jQuery to be loaded before Velocity."
          );
        if (n <= 7) return void (jQuery.fn.velocity = jQuery.fn.animate);
        var r = 400,
          s = "swing",
          t = {
            State: {
              isMobile:
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ),
              isAndroid: /Android/i.test(navigator.userAgent),
              isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
              isChrome: b.chrome,
              isFirefox: /Firefox/i.test(navigator.userAgent),
              prefixElement: c.createElement("div"),
              prefixMatches: {},
              scrollAnchor: null,
              scrollPropertyLeft: null,
              scrollPropertyTop: null,
              isTicking: !1,
              calls: [],
            },
            CSS: {},
            Utilities: m,
            Redirects: {},
            Easings: {},
            Promise: b.Promise,
            defaults: {
              queue: "",
              duration: r,
              easing: s,
              begin: d,
              complete: d,
              progress: d,
              display: d,
              visibility: d,
              loop: !1,
              delay: !1,
              mobileHA: !0,
              _cacheValues: !0,
            },
            init: function (a) {
              m.data(a, "velocity", {
                isSVG: p.isSVG(a),
                isAnimating: !1,
                computedStyle: null,
                tweensContainer: null,
                rootPropertyValueCache: {},
                transformCache: {},
              });
            },
            hook: null,
            mock: !1,
            version: { major: 1, minor: 3, patch: 0 },
            debug: !1,
          };
        b.pageYOffset !== d
          ? ((t.State.scrollAnchor = b),
            (t.State.scrollPropertyLeft = "pageXOffset"),
            (t.State.scrollPropertyTop = "pageYOffset"))
          : ((t.State.scrollAnchor =
              c.documentElement || c.body.parentNode || c.body),
            (t.State.scrollPropertyLeft = "scrollLeft"),
            (t.State.scrollPropertyTop = "scrollTop"));
        var u = (function () {
          function a(a) {
            return -a.tension * a.x - a.friction * a.v;
          }
          function b(b, c, d) {
            var e = {
              x: b.x + d.dx * c,
              v: b.v + d.dv * c,
              tension: b.tension,
              friction: b.friction,
            };
            return { dx: e.v, dv: a(e) };
          }
          function c(c, d) {
            var e = { dx: c.v, dv: a(c) },
              f = b(c, 0.5 * d, e),
              g = b(c, 0.5 * d, f),
              h = b(c, d, g),
              i = (1 / 6) * (e.dx + 2 * (f.dx + g.dx) + h.dx),
              j = (1 / 6) * (e.dv + 2 * (f.dv + g.dv) + h.dv);
            return (c.x = c.x + i * d), (c.v = c.v + j * d), c;
          }
          return function d(a, b, e) {
            var f,
              g,
              h,
              i = { x: -1, v: 0, tension: null, friction: null },
              j = [0],
              k = 0,
              l = 1e-4,
              m = 0.016;
            for (
              a = parseFloat(a) || 500,
                b = parseFloat(b) || 20,
                e = e || null,
                i.tension = a,
                i.friction = b,
                f = null !== e,
                f ? ((k = d(a, b)), (g = (k / e) * m)) : (g = m);
              ;
  
            )
              if (
                ((h = c(h || i, g)),
                j.push(1 + h.x),
                (k += 16),
                !(Math.abs(h.x) > l && Math.abs(h.v) > l))
              )
                break;
            return f
              ? function (a) {
                  return j[(a * (j.length - 1)) | 0];
                }
              : k;
          };
        })();
        (t.Easings = {
          linear: function (a) {
            return a;
          },
          swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2;
          },
          spring: function (a) {
            return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a);
          },
        }),
          m.each(
            [
              ["ease", [0.25, 0.1, 0.25, 1]],
              ["ease-in", [0.42, 0, 1, 1]],
              ["ease-out", [0, 0, 0.58, 1]],
              ["ease-in-out", [0.42, 0, 0.58, 1]],
              ["easeInSine", [0.47, 0, 0.745, 0.715]],
              ["easeOutSine", [0.39, 0.575, 0.565, 1]],
              ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
              ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
              ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
              ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
              ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
              ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
              ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
              ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
              ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
              ["easeInOutQuart", [0.77, 0, 0.175, 1]],
              ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
              ["easeOutQuint", [0.23, 1, 0.32, 1]],
              ["easeInOutQuint", [0.86, 0, 0.07, 1]],
              ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
              ["easeOutExpo", [0.19, 1, 0.22, 1]],
              ["easeInOutExpo", [1, 0, 0, 1]],
              ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
              ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
              ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]],
            ],
            function (a, b) {
              t.Easings[b[0]] = i.apply(null, b[1]);
            }
          );
        var v = (t.CSS = {
          RegEx: {
            isHex: /^#([A-f\d]{3}){1,2}$/i,
            valueUnwrap: /^[A-z]+\((.*)\)$/i,
            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi,
          },
          Lists: {
            colors: [
              "fill",
              "stroke",
              "stopColor",
              "color",
              "backgroundColor",
              "borderColor",
              "borderTopColor",
              "borderRightColor",
              "borderBottomColor",
              "borderLeftColor",
              "outlineColor",
            ],
            transformsBase: [
              "translateX",
              "translateY",
              "scale",
              "scaleX",
              "scaleY",
              "skewX",
              "skewY",
              "rotateZ",
            ],
            transforms3D: [
              "transformPerspective",
              "translateZ",
              "scaleZ",
              "rotateX",
              "rotateY",
            ],
          },
          Hooks: {
            templates: {
              textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
              boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
              clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
              backgroundPosition: ["X Y", "0% 0%"],
              transformOrigin: ["X Y Z", "50% 50% 0px"],
              perspectiveOrigin: ["X Y", "50% 50%"],
            },
            registered: {},
            register: function () {
              for (var a = 0; a < v.Lists.colors.length; a++) {
                var b =
                  "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                v.Hooks.templates[v.Lists.colors[a]] = [
                  "Red Green Blue Alpha",
                  b,
                ];
              }
              var c, d, e;
              if (n)
                for (c in v.Hooks.templates) {
                  (d = v.Hooks.templates[c]), (e = d[0].split(" "));
                  var f = d[1].match(v.RegEx.valueSplit);
                  "Color" === e[0] &&
                    (e.push(e.shift()),
                    f.push(f.shift()),
                    (v.Hooks.templates[c] = [e.join(" "), f.join(" ")]));
                }
              for (c in v.Hooks.templates) {
                (d = v.Hooks.templates[c]), (e = d[0].split(" "));
                for (var g in e) {
                  var h = c + e[g],
                    i = g;
                  v.Hooks.registered[h] = [c, i];
                }
              }
            },
            getRoot: function (a) {
              var b = v.Hooks.registered[a];
              return b ? b[0] : a;
            },
            cleanRootPropertyValue: function (a, b) {
              return (
                v.RegEx.valueUnwrap.test(b) &&
                  (b = b.match(v.RegEx.valueUnwrap)[1]),
                v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]),
                b
              );
            },
            extractValue: function (a, b) {
              var c = v.Hooks.registered[a];
              if (c) {
                var d = c[0],
                  e = c[1];
                return (
                  (b = v.Hooks.cleanRootPropertyValue(d, b)),
                  b.toString().match(v.RegEx.valueSplit)[e]
                );
              }
              return b;
            },
            injectValue: function (a, b, c) {
              var d = v.Hooks.registered[a];
              if (d) {
                var e,
                  f,
                  g = d[0],
                  h = d[1];
                return (
                  (c = v.Hooks.cleanRootPropertyValue(g, c)),
                  (e = c.toString().match(v.RegEx.valueSplit)),
                  (e[h] = b),
                  (f = e.join(" "))
                );
              }
              return c;
            },
          },
          Normalizations: {
            registered: {
              clip: function (a, b, c) {
                switch (a) {
                  case "name":
                    return "clip";
                  case "extract":
                    var d;
                    return (
                      v.RegEx.wrappedValueAlreadyExtracted.test(c)
                        ? (d = c)
                        : ((d = c.toString().match(v.RegEx.valueUnwrap)),
                          (d = d ? d[1].replace(/,(\s+)?/g, " ") : c)),
                      d
                    );
                  case "inject":
                    return "rect(" + c + ")";
                }
              },
              blur: function (a, b, c) {
                switch (a) {
                  case "name":
                    return t.State.isFirefox ? "filter" : "-webkit-filter";
                  case "extract":
                    var d = parseFloat(c);
                    if (!d && 0 !== d) {
                      var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                      d = e ? e[1] : 0;
                    }
                    return d;
                  case "inject":
                    return parseFloat(c) ? "blur(" + c + ")" : "none";
                }
              },
              opacity: function (a, b, c) {
                if (n <= 8)
                  switch (a) {
                    case "name":
                      return "filter";
                    case "extract":
                      var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                      return (c = d ? d[1] / 100 : 1);
                    case "inject":
                      return (
                        (b.style.zoom = 1),
                        parseFloat(c) >= 1
                          ? ""
                          : "alpha(opacity=" +
                            parseInt(100 * parseFloat(c), 10) +
                            ")"
                      );
                  }
                else
                  switch (a) {
                    case "name":
                      return "opacity";
                    case "extract":
                      return c;
                    case "inject":
                      return c;
                  }
              },
            },
            register: function () {
              (n && !(n > 9)) ||
                t.State.isGingerbread ||
                (v.Lists.transformsBase = v.Lists.transformsBase.concat(
                  v.Lists.transforms3D
                ));
              for (var a = 0; a < v.Lists.transformsBase.length; a++)
                !(function () {
                  var b = v.Lists.transformsBase[a];
                  v.Normalizations.registered[b] = function (a, c, e) {
                    switch (a) {
                      case "name":
                        return "transform";
                      case "extract":
                        return g(c) === d || g(c).transformCache[b] === d
                          ? /^scale/i.test(b)
                            ? 1
                            : 0
                          : g(c).transformCache[b].replace(/[()]/g, "");
                      case "inject":
                        var f = !1;
                        switch (b.substr(0, b.length - 1)) {
                          case "translate":
                            f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                            break;
                          case "scal":
                          case "scale":
                            t.State.isAndroid &&
                              g(c).transformCache[b] === d &&
                              e < 1 &&
                              (e = 1),
                              (f = !/(\d)$/i.test(e));
                            break;
                          case "skew":
                            f = !/(deg|\d)$/i.test(e);
                            break;
                          case "rotate":
                            f = !/(deg|\d)$/i.test(e);
                        }
                        return (
                          f || (g(c).transformCache[b] = "(" + e + ")"),
                          g(c).transformCache[b]
                        );
                    }
                  };
                })();
              for (var b = 0; b < v.Lists.colors.length; b++)
                !(function () {
                  var a = v.Lists.colors[b];
                  v.Normalizations.registered[a] = function (b, c, e) {
                    switch (b) {
                      case "name":
                        return a;
                      case "extract":
                        var f;
                        if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                        else {
                          var g,
                            h = {
                              black: "rgb(0, 0, 0)",
                              blue: "rgb(0, 0, 255)",
                              gray: "rgb(128, 128, 128)",
                              green: "rgb(0, 128, 0)",
                              red: "rgb(255, 0, 0)",
                              white: "rgb(255, 255, 255)",
                            };
                          /^[A-z]+$/i.test(e)
                            ? (g = h[e] !== d ? h[e] : h.black)
                            : v.RegEx.isHex.test(e)
                            ? (g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")")
                            : /^rgba?\(/i.test(e) || (g = h.black),
                            (f = (g || e)
                              .toString()
                              .match(v.RegEx.valueUnwrap)[1]
                              .replace(/,(\s+)?/g, " "));
                        }
                        return (
                          (!n || n > 8) &&
                            3 === f.split(" ").length &&
                            (f += " 1"),
                          f
                        );
                      case "inject":
                        return (
                          n <= 8
                            ? 4 === e.split(" ").length &&
                              (e = e.split(/\s+/).slice(0, 3).join(" "))
                            : 3 === e.split(" ").length && (e += " 1"),
                          (n <= 8 ? "rgb" : "rgba") +
                            "(" +
                            e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") +
                            ")"
                        );
                    }
                  };
                })();
            },
          },
          Names: {
            camelCase: function (a) {
              return a.replace(/-(\w)/g, function (a, b) {
                return b.toUpperCase();
              });
            },
            SVGAttribute: function (a) {
              var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
              return (
                (n || (t.State.isAndroid && !t.State.isChrome)) &&
                  (b += "|transform"),
                new RegExp("^(" + b + ")$", "i").test(a)
              );
            },
            prefixCheck: function (a) {
              if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];
              for (
                var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length;
                c < d;
                c++
              ) {
                var e;
                if (
                  ((e =
                    0 === c
                      ? a
                      : b[c] +
                        a.replace(/^\w/, function (a) {
                          return a.toUpperCase();
                        })),
                  p.isString(t.State.prefixElement.style[e]))
                )
                  return (t.State.prefixMatches[a] = e), [e, !0];
              }
              return [a, !1];
            },
          },
          Values: {
            hexToRgb: function (a) {
              var b,
                c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
              return (
                (a = a.replace(c, function (a, b, c, d) {
                  return b + b + c + c + d + d;
                })),
                (b = d.exec(a)),
                b
                  ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)]
                  : [0, 0, 0]
              );
            },
            isCSSNullValue: function (a) {
              return (
                !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
              );
            },
            getUnitType: function (a) {
              return /^(rotate|skew)/i.test(a)
                ? "deg"
                : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(
                    a
                  )
                ? ""
                : "px";
            },
            getDisplayType: function (a) {
              var b = a && a.tagName.toString().toLowerCase();
              return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(
                b
              )
                ? "inline"
                : /^(li)$/i.test(b)
                ? "list-item"
                : /^(tr)$/i.test(b)
                ? "table-row"
                : /^(table)$/i.test(b)
                ? "table"
                : /^(tbody)$/i.test(b)
                ? "table-row-group"
                : "block";
            },
            addClass: function (a, b) {
              a.classList
                ? a.classList.add(b)
                : (a.className += (a.className.length ? " " : "") + b);
            },
            removeClass: function (a, b) {
              a.classList
                ? a.classList.remove(b)
                : (a.className = a.className
                    .toString()
                    .replace(
                      new RegExp(
                        "(^|\\s)" + b.split(" ").join("|") + "(\\s|$)",
                        "gi"
                      ),
                      " "
                    ));
            },
          },
          getPropertyValue: function (a, c, e, f) {
            function h(a, c) {
              var e = 0;
              if (n <= 8) e = m.css(a, c);
              else {
                var i = !1;
                /^(width|height)$/.test(c) &&
                  0 === v.getPropertyValue(a, "display") &&
                  ((i = !0),
                  v.setPropertyValue(a, "display", v.Values.getDisplayType(a)));
                var j = function () {
                  i && v.setPropertyValue(a, "display", "none");
                };
                if (!f) {
                  if (
                    "height" === c &&
                    "border-box" !==
                      v.getPropertyValue(a, "boxSizing").toString().toLowerCase()
                  ) {
                    var k =
                      a.offsetHeight -
                      (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) -
                      (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) ||
                        0) -
                      (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) -
                      (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                    return j(), k;
                  }
                  if (
                    "width" === c &&
                    "border-box" !==
                      v.getPropertyValue(a, "boxSizing").toString().toLowerCase()
                  ) {
                    var l =
                      a.offsetWidth -
                      (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) ||
                        0) -
                      (parseFloat(v.getPropertyValue(a, "borderRightWidth")) ||
                        0) -
                      (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) -
                      (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                    return j(), l;
                  }
                }
                var o;
                (o =
                  g(a) === d
                    ? b.getComputedStyle(a, null)
                    : g(a).computedStyle
                    ? g(a).computedStyle
                    : (g(a).computedStyle = b.getComputedStyle(a, null))),
                  "borderColor" === c && (c = "borderTopColor"),
                  (e = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c]),
                  ("" !== e && null !== e) || (e = a.style[c]),
                  j();
              }
              if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) {
                var p = h(a, "position");
                ("fixed" === p || ("absolute" === p && /top|left/i.test(c))) &&
                  (e = m(a).position()[c] + "px");
              }
              return e;
            }
            var i;
            if (v.Hooks.registered[c]) {
              var j = c,
                k = v.Hooks.getRoot(j);
              e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])),
                v.Normalizations.registered[k] &&
                  (e = v.Normalizations.registered[k]("extract", a, e)),
                (i = v.Hooks.extractValue(j, e));
            } else if (v.Normalizations.registered[c]) {
              var l, o;
              (l = v.Normalizations.registered[c]("name", a)),
                "transform" !== l &&
                  ((o = h(a, v.Names.prefixCheck(l)[0])),
                  v.Values.isCSSNullValue(o) &&
                    v.Hooks.templates[c] &&
                    (o = v.Hooks.templates[c][1])),
                (i = v.Normalizations.registered[c]("extract", a, o));
            }
            if (!/^[\d-]/.test(i)) {
              var p = g(a);
              if (p && p.isSVG && v.Names.SVGAttribute(c))
                if (/^(height|width)$/i.test(c))
                  try {
                    i = a.getBBox()[c];
                  } catch (q) {
                    i = 0;
                  }
                else i = a.getAttribute(c);
              else i = h(a, v.Names.prefixCheck(c)[0]);
            }
            return (
              v.Values.isCSSNullValue(i) && (i = 0),
              t.debug >= 2 && console.log("Get " + c + ": " + i),
              i
            );
          },
          setPropertyValue: function (a, c, d, e, f) {
            var h = c;
            if ("scroll" === c)
              f.container
                ? (f.container["scroll" + f.direction] = d)
                : "Left" === f.direction
                ? b.scrollTo(d, f.alternateValue)
                : b.scrollTo(f.alternateValue, d);
            else if (
              v.Normalizations.registered[c] &&
              "transform" === v.Normalizations.registered[c]("name", a)
            )
              v.Normalizations.registered[c]("inject", a, d),
                (h = "transform"),
                (d = g(a).transformCache[c]);
            else {
              if (v.Hooks.registered[c]) {
                var i = c,
                  j = v.Hooks.getRoot(c);
                (e = e || v.getPropertyValue(a, j)),
                  (d = v.Hooks.injectValue(i, d, e)),
                  (c = j);
              }
              if (
                (v.Normalizations.registered[c] &&
                  ((d = v.Normalizations.registered[c]("inject", a, d)),
                  (c = v.Normalizations.registered[c]("name", a))),
                (h = v.Names.prefixCheck(c)[0]),
                n <= 8)
              )
                try {
                  a.style[h] = d;
                } catch (k) {
                  t.debug &&
                    console.log(
                      "Browser does not support [" + d + "] for [" + h + "]"
                    );
                }
              else {
                var l = g(a);
                l && l.isSVG && v.Names.SVGAttribute(c)
                  ? a.setAttribute(c, d)
                  : (a.style[h] = d);
              }
              t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d);
            }
            return [h, d];
          },
          flushTransformCache: function (a) {
            var b = "",
              c = g(a);
            if ((n || (t.State.isAndroid && !t.State.isChrome)) && c && c.isSVG) {
              var d = function (b) {
                  return parseFloat(v.getPropertyValue(a, b));
                },
                e = {
                  translate: [d("translateX"), d("translateY")],
                  skewX: [d("skewX")],
                  skewY: [d("skewY")],
                  scale:
                    1 !== d("scale")
                      ? [d("scale"), d("scale")]
                      : [d("scaleX"), d("scaleY")],
                  rotate: [d("rotateZ"), 0, 0],
                };
              m.each(g(a).transformCache, function (a) {
                /^translate/i.test(a)
                  ? (a = "translate")
                  : /^scale/i.test(a)
                  ? (a = "scale")
                  : /^rotate/i.test(a) && (a = "rotate"),
                  e[a] && ((b += a + "(" + e[a].join(" ") + ") "), delete e[a]);
              });
            } else {
              var f, h;
              m.each(g(a).transformCache, function (c) {
                return (
                  (f = g(a).transformCache[c]),
                  "transformPerspective" === c
                    ? ((h = f), !0)
                    : (9 === n && "rotateZ" === c && (c = "rotate"),
                      void (b += c + f + " "))
                );
              }),
                h && (b = "perspective" + h + " " + b);
            }
            v.setPropertyValue(a, "transform", b);
          },
        });
        v.Hooks.register(),
          v.Normalizations.register(),
          (t.hook = function (a, b, c) {
            var e;
            return (
              (a = f(a)),
              m.each(a, function (a, f) {
                if ((g(f) === d && t.init(f), c === d))
                  e === d && (e = t.CSS.getPropertyValue(f, b));
                else {
                  var h = t.CSS.setPropertyValue(f, b, c);
                  "transform" === h[0] && t.CSS.flushTransformCache(f), (e = h);
                }
              }),
              e
            );
          });
        var w = function () {
          function a() {
            return i ? C.promise || null : n;
          }
          function e(a, e) {
            function f(f) {
              var n, o;
              if (i.begin && 0 === z)
                try {
                  i.begin.call(q, q);
                } catch (r) {
                  setTimeout(function () {
                    throw r;
                  }, 1);
                }
              if ("scroll" === D) {
                var w,
                  x,
                  A,
                  B = /^x$/i.test(i.axis) ? "Left" : "Top",
                  E = parseFloat(i.offset) || 0;
                i.container
                  ? p.isWrapped(i.container) || p.isNode(i.container)
                    ? ((i.container = i.container[0] || i.container),
                      (w = i.container["scroll" + B]),
                      (A = w + m(a).position()[B.toLowerCase()] + E))
                    : (i.container = null)
                  : ((w = t.State.scrollAnchor[t.State["scrollProperty" + B]]),
                    (x =
                      t.State.scrollAnchor[
                        t.State[
                          "scrollProperty" + ("Left" === B ? "Top" : "Left")
                        ]
                      ]),
                    (A = m(a).offset()[B.toLowerCase()] + E)),
                  (l = {
                    scroll: {
                      rootPropertyValue: !1,
                      startValue: w,
                      currentValue: w,
                      endValue: A,
                      unitType: "",
                      easing: i.easing,
                      scrollData: {
                        container: i.container,
                        direction: B,
                        alternateValue: x,
                      },
                    },
                    element: a,
                  }),
                  t.debug &&
                    console.log("tweensContainer (scroll): ", l.scroll, a);
              } else if ("reverse" === D) {
                if (((n = g(a)), !n)) return;
                if (!n.tweensContainer) return void m.dequeue(a, i.queue);
                "none" === n.opts.display && (n.opts.display = "auto"),
                  "hidden" === n.opts.visibility &&
                    (n.opts.visibility = "visible"),
                  (n.opts.loop = !1),
                  (n.opts.begin = null),
                  (n.opts.complete = null),
                  u.easing || delete i.easing,
                  u.duration || delete i.duration,
                  (i = m.extend({}, n.opts, i)),
                  (o = m.extend(!0, {}, n ? n.tweensContainer : null));
                for (var F in o)
                  if ("element" !== F) {
                    var G = o[F].startValue;
                    (o[F].startValue = o[F].currentValue = o[F].endValue),
                      (o[F].endValue = G),
                      p.isEmptyObject(u) || (o[F].easing = i.easing),
                      t.debug &&
                        console.log(
                          "reverse tweensContainer (" +
                            F +
                            "): " +
                            JSON.stringify(o[F]),
                          a
                        );
                  }
                l = o;
              } else if ("start" === D) {
                (n = g(a)),
                  n &&
                    n.tweensContainer &&
                    n.isAnimating === !0 &&
                    (o = n.tweensContainer);
                var H = function (b, c) {
                  var f, g, h;
                  return (
                    p.isArray(b)
                      ? ((f = b[0]),
                        (!p.isArray(b[1]) && /^[\d-]/.test(b[1])) ||
                        p.isFunction(b[1]) ||
                        v.RegEx.isHex.test(b[1])
                          ? (h = b[1])
                          : ((p.isString(b[1]) && !v.RegEx.isHex.test(b[1])) ||
                              p.isArray(b[1])) &&
                            ((g = c ? b[1] : j(b[1], i.duration)),
                            b[2] !== d && (h = b[2])))
                      : (f = b),
                    c || (g = g || i.easing),
                    p.isFunction(f) && (f = f.call(a, e, y)),
                    p.isFunction(h) && (h = h.call(a, e, y)),
                    [f || 0, g, h]
                  );
                };
                m.each(s, function (a, b) {
                  if (
                    RegExp("^" + v.Lists.colors.join("$|^") + "$").test(
                      v.Names.camelCase(a)
                    )
                  ) {
                    var c = H(b, !0),
                      e = c[0],
                      f = c[1],
                      g = c[2];
                    if (v.RegEx.isHex.test(e)) {
                      for (
                        var h = ["Red", "Green", "Blue"],
                          i = v.Values.hexToRgb(e),
                          j = g ? v.Values.hexToRgb(g) : d,
                          k = 0;
                        k < h.length;
                        k++
                      ) {
                        var l = [i[k]];
                        f && l.push(f),
                          j !== d && l.push(j[k]),
                          (s[v.Names.camelCase(a) + h[k]] = l);
                      }
                      delete s[a];
                    }
                  }
                });
                for (var K in s) {
                  var L = H(s[K]),
                    M = L[0],
                    N = L[1],
                    O = L[2];
                  K = v.Names.camelCase(K);
                  var P = v.Hooks.getRoot(K),
                    Q = !1;
                  if (
                    (n && n.isSVG) ||
                    "tween" === P ||
                    v.Names.prefixCheck(P)[1] !== !1 ||
                    v.Normalizations.registered[P] !== d
                  ) {
                    ((i.display !== d &&
                      null !== i.display &&
                      "none" !== i.display) ||
                      (i.visibility !== d && "hidden" !== i.visibility)) &&
                      /opacity|filter/.test(K) &&
                      !O &&
                      0 !== M &&
                      (O = 0),
                      i._cacheValues && o && o[K]
                        ? (O === d && (O = o[K].endValue + o[K].unitType),
                          (Q = n.rootPropertyValueCache[P]))
                        : v.Hooks.registered[K]
                        ? O === d
                          ? ((Q = v.getPropertyValue(a, P)),
                            (O = v.getPropertyValue(a, K, Q)))
                          : (Q = v.Hooks.templates[P][1])
                        : O === d && (O = v.getPropertyValue(a, K));
                    var R,
                      S,
                      T,
                      U = !1,
                      V = function (a, b) {
                        var c, d;
                        return (
                          (d = (b || "0")
                            .toString()
                            .toLowerCase()
                            .replace(/[%A-z]+$/, function (a) {
                              return (c = a), "";
                            })),
                          c || (c = v.Values.getUnitType(a)),
                          [d, c]
                        );
                      };
                    (R = V(K, O)),
                      (O = R[0]),
                      (T = R[1]),
                      (R = V(K, M)),
                      (M = R[0].replace(/^([+-\/*])=/, function (a, b) {
                        return (U = b), "";
                      })),
                      (S = R[1]),
                      (O = parseFloat(O) || 0),
                      (M = parseFloat(M) || 0),
                      "%" === S &&
                        (/^(fontSize|lineHeight)$/.test(K)
                          ? ((M /= 100), (S = "em"))
                          : /^scale/.test(K)
                          ? ((M /= 100), (S = ""))
                          : /(Red|Green|Blue)$/i.test(K) &&
                            ((M = (M / 100) * 255), (S = "")));
                    var W = function () {
                      var d = {
                          myParent: a.parentNode || c.body,
                          position: v.getPropertyValue(a, "position"),
                          fontSize: v.getPropertyValue(a, "fontSize"),
                        },
                        e =
                          d.position === I.lastPosition &&
                          d.myParent === I.lastParent,
                        f = d.fontSize === I.lastFontSize;
                      (I.lastParent = d.myParent),
                        (I.lastPosition = d.position),
                        (I.lastFontSize = d.fontSize);
                      var g = 100,
                        h = {};
                      if (f && e)
                        (h.emToPx = I.lastEmToPx),
                          (h.percentToPxWidth = I.lastPercentToPxWidth),
                          (h.percentToPxHeight = I.lastPercentToPxHeight);
                      else {
                        var i =
                          n && n.isSVG
                            ? c.createElementNS(
                                "http://www.w3.org/2000/svg",
                                "rect"
                              )
                            : c.createElement("div");
                        t.init(i),
                          d.myParent.appendChild(i),
                          m.each(
                            ["overflow", "overflowX", "overflowY"],
                            function (a, b) {
                              t.CSS.setPropertyValue(i, b, "hidden");
                            }
                          ),
                          t.CSS.setPropertyValue(i, "position", d.position),
                          t.CSS.setPropertyValue(i, "fontSize", d.fontSize),
                          t.CSS.setPropertyValue(i, "boxSizing", "content-box"),
                          m.each(
                            [
                              "minWidth",
                              "maxWidth",
                              "width",
                              "minHeight",
                              "maxHeight",
                              "height",
                            ],
                            function (a, b) {
                              t.CSS.setPropertyValue(i, b, g + "%");
                            }
                          ),
                          t.CSS.setPropertyValue(i, "paddingLeft", g + "em"),
                          (h.percentToPxWidth = I.lastPercentToPxWidth =
                            (parseFloat(
                              v.getPropertyValue(i, "width", null, !0)
                            ) || 1) / g),
                          (h.percentToPxHeight = I.lastPercentToPxHeight =
                            (parseFloat(
                              v.getPropertyValue(i, "height", null, !0)
                            ) || 1) / g),
                          (h.emToPx = I.lastEmToPx =
                            (parseFloat(v.getPropertyValue(i, "paddingLeft")) ||
                              1) / g),
                          d.myParent.removeChild(i);
                      }
                      return (
                        null === I.remToPx &&
                          (I.remToPx =
                            parseFloat(v.getPropertyValue(c.body, "fontSize")) ||
                            16),
                        null === I.vwToPx &&
                          ((I.vwToPx = parseFloat(b.innerWidth) / 100),
                          (I.vhToPx = parseFloat(b.innerHeight) / 100)),
                        (h.remToPx = I.remToPx),
                        (h.vwToPx = I.vwToPx),
                        (h.vhToPx = I.vhToPx),
                        t.debug >= 1 &&
                          console.log("Unit ratios: " + JSON.stringify(h), a),
                        h
                      );
                    };
                    if (/[\/*]/.test(U)) S = T;
                    else if (T !== S && 0 !== O)
                      if (0 === M) S = T;
                      else {
                        h = h || W();
                        var X =
                          /margin|padding|left|right|width|text|word|letter/i.test(
                            K
                          ) ||
                          /X$/.test(K) ||
                          "x" === K
                            ? "x"
                            : "y";
                        switch (T) {
                          case "%":
                            O *=
                              "x" === X
                                ? h.percentToPxWidth
                                : h.percentToPxHeight;
                            break;
                          case "px":
                            break;
                          default:
                            O *= h[T + "ToPx"];
                        }
                        switch (S) {
                          case "%":
                            O *=
                              1 /
                              ("x" === X
                                ? h.percentToPxWidth
                                : h.percentToPxHeight);
                            break;
                          case "px":
                            break;
                          default:
                            O *= 1 / h[S + "ToPx"];
                        }
                      }
                    switch (U) {
                      case "+":
                        M = O + M;
                        break;
                      case "-":
                        M = O - M;
                        break;
                      case "*":
                        M = O * M;
                        break;
                      case "/":
                        M = O / M;
                    }
                    (l[K] = {
                      rootPropertyValue: Q,
                      startValue: O,
                      currentValue: O,
                      endValue: M,
                      unitType: S,
                      easing: N,
                    }),
                      t.debug &&
                        console.log(
                          "tweensContainer (" + K + "): " + JSON.stringify(l[K]),
                          a
                        );
                  } else
                    t.debug &&
                      console.log(
                        "Skipping [" + P + "] due to a lack of browser support."
                      );
                }
                l.element = a;
              }
              l.element &&
                (v.Values.addClass(a, "velocity-animating"),
                J.push(l),
                (n = g(a)),
                n &&
                  ("" === i.queue && ((n.tweensContainer = l), (n.opts = i)),
                  (n.isAnimating = !0)),
                z === y - 1
                  ? (t.State.calls.push([J, q, i, null, C.resolver]),
                    t.State.isTicking === !1 && ((t.State.isTicking = !0), k()))
                  : z++);
            }
            var h,
              i = m.extend({}, t.defaults, u),
              l = {};
            switch (
              (g(a) === d && t.init(a),
              parseFloat(i.delay) &&
                i.queue !== !1 &&
                m.queue(a, i.queue, function (b) {
                  (t.velocityQueueEntryFlag = !0),
                    (g(a).delayTimer = {
                      setTimeout: setTimeout(b, parseFloat(i.delay)),
                      next: b,
                    });
                }),
              i.duration.toString().toLowerCase())
            ) {
              case "fast":
                i.duration = 200;
                break;
              case "normal":
                i.duration = r;
                break;
              case "slow":
                i.duration = 600;
                break;
              default:
                i.duration = parseFloat(i.duration) || 1;
            }
            t.mock !== !1 &&
              (t.mock === !0
                ? (i.duration = i.delay = 1)
                : ((i.duration *= parseFloat(t.mock) || 1),
                  (i.delay *= parseFloat(t.mock) || 1))),
              (i.easing = j(i.easing, i.duration)),
              i.begin && !p.isFunction(i.begin) && (i.begin = null),
              i.progress && !p.isFunction(i.progress) && (i.progress = null),
              i.complete && !p.isFunction(i.complete) && (i.complete = null),
              i.display !== d &&
                null !== i.display &&
                ((i.display = i.display.toString().toLowerCase()),
                "auto" === i.display &&
                  (i.display = t.CSS.Values.getDisplayType(a))),
              i.visibility !== d &&
                null !== i.visibility &&
                (i.visibility = i.visibility.toString().toLowerCase()),
              (i.mobileHA =
                i.mobileHA && t.State.isMobile && !t.State.isGingerbread),
              i.queue === !1
                ? i.delay
                  ? setTimeout(f, i.delay)
                  : f()
                : m.queue(a, i.queue, function (a, b) {
                    return b === !0
                      ? (C.promise && C.resolver(q), !0)
                      : ((t.velocityQueueEntryFlag = !0), void f(a));
                  }),
              ("" !== i.queue && "fx" !== i.queue) ||
                "inprogress" === m.queue(a)[0] ||
                m.dequeue(a);
          }
          var h,
            i,
            n,
            o,
            q,
            s,
            u,
            x =
              arguments[0] &&
              (arguments[0].p ||
                (m.isPlainObject(arguments[0].properties) &&
                  !arguments[0].properties.names) ||
                p.isString(arguments[0].properties));
          if (
            (p.isWrapped(this)
              ? ((i = !1), (o = 0), (q = this), (n = this))
              : ((i = !0),
                (o = 1),
                (q = x ? arguments[0].elements || arguments[0].e : arguments[0])),
            (q = f(q)))
          ) {
            x
              ? ((s = arguments[0].properties || arguments[0].p),
                (u = arguments[0].options || arguments[0].o))
              : ((s = arguments[o]), (u = arguments[o + 1]));
            var y = q.length,
              z = 0;
            if (!/^(stop|finish|finishAll)$/i.test(s) && !m.isPlainObject(u)) {
              var A = o + 1;
              u = {};
              for (var B = A; B < arguments.length; B++)
                p.isArray(arguments[B]) ||
                (!/^(fast|normal|slow)$/i.test(arguments[B]) &&
                  !/^\d/.test(arguments[B]))
                  ? p.isString(arguments[B]) || p.isArray(arguments[B])
                    ? (u.easing = arguments[B])
                    : p.isFunction(arguments[B]) && (u.complete = arguments[B])
                  : (u.duration = arguments[B]);
            }
            var C = { promise: null, resolver: null, rejecter: null };
            i &&
              t.Promise &&
              (C.promise = new t.Promise(function (a, b) {
                (C.resolver = a), (C.rejecter = b);
              }));
            var D;
            switch (s) {
              case "scroll":
                D = "scroll";
                break;
              case "reverse":
                D = "reverse";
                break;
              case "finish":
              case "finishAll":
              case "stop":
                m.each(q, function (a, b) {
                  g(b) &&
                    g(b).delayTimer &&
                    (clearTimeout(g(b).delayTimer.setTimeout),
                    g(b).delayTimer.next && g(b).delayTimer.next(),
                    delete g(b).delayTimer),
                    "finishAll" !== s ||
                      (u !== !0 && !p.isString(u)) ||
                      (m.each(
                        m.queue(b, p.isString(u) ? u : ""),
                        function (a, b) {
                          p.isFunction(b) && b();
                        }
                      ),
                      m.queue(b, p.isString(u) ? u : "", []));
                });
                var E = [];
                return (
                  m.each(t.State.calls, function (a, b) {
                    b &&
                      m.each(b[1], function (c, e) {
                        var f = u === d ? "" : u;
                        return (
                          (f !== !0 &&
                            b[2].queue !== f &&
                            (u !== d || b[2].queue !== !1)) ||
                          void m.each(q, function (c, d) {
                            if (d === e)
                              if (
                                ((u === !0 || p.isString(u)) &&
                                  (m.each(
                                    m.queue(d, p.isString(u) ? u : ""),
                                    function (a, b) {
                                      p.isFunction(b) && b(null, !0);
                                    }
                                  ),
                                  m.queue(d, p.isString(u) ? u : "", [])),
                                "stop" === s)
                              ) {
                                var h = g(d);
                                h &&
                                  h.tweensContainer &&
                                  f !== !1 &&
                                  m.each(h.tweensContainer, function (a, b) {
                                    b.endValue = b.currentValue;
                                  }),
                                  E.push(a);
                              } else
                                ("finish" !== s && "finishAll" !== s) ||
                                  (b[2].duration = 1);
                          })
                        );
                      });
                  }),
                  "stop" === s &&
                    (m.each(E, function (a, b) {
                      l(b, !0);
                    }),
                    C.promise && C.resolver(q)),
                  a()
                );
              default:
                if (!m.isPlainObject(s) || p.isEmptyObject(s)) {
                  if (p.isString(s) && t.Redirects[s]) {
                    h = m.extend({}, u);
                    var F = h.duration,
                      G = h.delay || 0;
                    return (
                      h.backwards === !0 && (q = m.extend(!0, [], q).reverse()),
                      m.each(q, function (a, b) {
                        parseFloat(h.stagger)
                          ? (h.delay = G + parseFloat(h.stagger) * a)
                          : p.isFunction(h.stagger) &&
                            (h.delay = G + h.stagger.call(b, a, y)),
                          h.drag &&
                            ((h.duration =
                              parseFloat(F) ||
                              (/^(callout|transition)/.test(s) ? 1e3 : r)),
                            (h.duration = Math.max(
                              h.duration *
                                (h.backwards ? 1 - a / y : (a + 1) / y),
                              0.75 * h.duration,
                              200
                            ))),
                          t.Redirects[s].call(
                            b,
                            b,
                            h || {},
                            a,
                            y,
                            q,
                            C.promise ? C : d
                          );
                      }),
                      a()
                    );
                  }
                  var H =
                    "Velocity: First argument (" +
                    s +
                    ") was not a property map, a known action, or a registered redirect. Aborting.";
                  return (
                    C.promise ? C.rejecter(new Error(H)) : console.log(H), a()
                  );
                }
                D = "start";
            }
            var I = {
                lastParent: null,
                lastPosition: null,
                lastFontSize: null,
                lastPercentToPxWidth: null,
                lastPercentToPxHeight: null,
                lastEmToPx: null,
                remToPx: null,
                vwToPx: null,
                vhToPx: null,
              },
              J = [];
            m.each(q, function (a, b) {
              p.isNode(b) && e(b, a);
            }),
              (h = m.extend({}, t.defaults, u)),
              (h.loop = parseInt(h.loop, 10));
            var K = 2 * h.loop - 1;
            if (h.loop)
              for (var L = 0; L < K; L++) {
                var M = { delay: h.delay, progress: h.progress };
                L === K - 1 &&
                  ((M.display = h.display),
                  (M.visibility = h.visibility),
                  (M.complete = h.complete)),
                  w(q, "reverse", M);
              }
            return a();
          }
        };
        (t = m.extend(w, t)), (t.animate = w);
        var x = b.requestAnimationFrame || o;
        return (
          t.State.isMobile ||
            c.hidden === d ||
            c.addEventListener("visibilitychange", function () {
              c.hidden
                ? ((x = function (a) {
                    return setTimeout(function () {
                      a(!0);
                    }, 16);
                  }),
                  k())
                : (x = b.requestAnimationFrame || o);
            }),
          (a.Velocity = t),
          a !== b && ((a.fn.velocity = w), (a.fn.velocity.defaults = t.defaults)),
          m.each(["Down", "Up"], function (a, b) {
            t.Redirects["slide" + b] = function (a, c, e, f, g, h) {
              var i = m.extend({}, c),
                j = i.begin,
                k = i.complete,
                l = {
                  height: "",
                  marginTop: "",
                  marginBottom: "",
                  paddingTop: "",
                  paddingBottom: "",
                },
                n = {};
              i.display === d &&
                (i.display =
                  "Down" === b
                    ? "inline" === t.CSS.Values.getDisplayType(a)
                      ? "inline-block"
                      : "block"
                    : "none"),
                (i.begin = function () {
                  j && j.call(g, g);
                  for (var c in l) {
                    n[c] = a.style[c];
                    var d = t.CSS.getPropertyValue(a, c);
                    l[c] = "Down" === b ? [d, 0] : [0, d];
                  }
                  (n.overflow = a.style.overflow), (a.style.overflow = "hidden");
                }),
                (i.complete = function () {
                  for (var b in n) a.style[b] = n[b];
                  k && k.call(g, g), h && h.resolver(g);
                }),
                t(a, l, i);
            };
          }),
          m.each(["In", "Out"], function (a, b) {
            t.Redirects["fade" + b] = function (a, c, e, f, g, h) {
              var i = m.extend({}, c),
                j = i.complete,
                k = { opacity: "In" === b ? 1 : 0 };
              e !== f - 1
                ? (i.complete = i.begin = null)
                : (i.complete = function () {
                    j && j.call(g, g), h && h.resolver(g);
                  }),
                i.display === d && (i.display = "In" === b ? "auto" : "none"),
                t(this, k, i);
            };
          }),
          t
        );
      })(window.jQuery || window.Zepto || window, window, document);
    });
  
  // parallax
  !(function (t) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
      ("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).Parallax = t();
    }
  })(function () {
    return (function t(e, i, n) {
      function o(r, a) {
        if (!i[r]) {
          if (!e[r]) {
            var l = "function" == typeof require && require;
            if (!a && l) return l(r, !0);
            if (s) return s(r, !0);
            var h = new Error("Cannot find module '" + r + "'");
            throw ((h.code = "MODULE_NOT_FOUND"), h);
          }
          var u = (i[r] = { exports: {} });
          e[r][0].call(
            u.exports,
            function (t) {
              var i = e[r][1][t];
              return o(i || t);
            },
            u,
            u.exports,
            t,
            e,
            i,
            n
          );
        }
        return i[r].exports;
      }
      for (
        var s = "function" == typeof require && require, r = 0;
        r < n.length;
        r++
      )
        o(n[r]);
      return o;
    })(
      {
        1: [
          function (t, e, i) {
            "use strict";
            function n(t) {
              if (null === t || void 0 === t)
                throw new TypeError(
                  "Object.assign cannot be called with null or undefined"
                );
              return Object(t);
            }
            var o = Object.getOwnPropertySymbols,
              s = Object.prototype.hasOwnProperty,
              r = Object.prototype.propertyIsEnumerable;
            e.exports = (function () {
              try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
                  return !1;
                for (var e = {}, i = 0; i < 10; i++)
                  e["_" + String.fromCharCode(i)] = i;
                if (
                  "0123456789" !==
                  Object.getOwnPropertyNames(e)
                    .map(function (t) {
                      return e[t];
                    })
                    .join("")
                )
                  return !1;
                var n = {};
                return (
                  "abcdefghijklmnopqrst".split("").forEach(function (t) {
                    n[t] = t;
                  }),
                  "abcdefghijklmnopqrst" ===
                    Object.keys(Object.assign({}, n)).join("")
                );
              } catch (t) {
                return !1;
              }
            })()
              ? Object.assign
              : function (t, e) {
                  for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
                    i = Object(arguments[h]);
                    for (var u in i) s.call(i, u) && (l[u] = i[u]);
                    if (o) {
                      a = o(i);
                      for (var c = 0; c < a.length; c++)
                        r.call(i, a[c]) && (l[a[c]] = i[a[c]]);
                    }
                  }
                  return l;
                };
          },
          {},
        ],
        2: [
          function (t, e, i) {
            (function (t) {
              (function () {
                var i, n, o, s, r, a;
                "undefined" != typeof performance &&
                null !== performance &&
                performance.now
                  ? (e.exports = function () {
                      return performance.now();
                    })
                  : void 0 !== t && null !== t && t.hrtime
                  ? ((e.exports = function () {
                      return (i() - r) / 1e6;
                    }),
                    (n = t.hrtime),
                    (s = (i = function () {
                      var t;
                      return 1e9 * (t = n())[0] + t[1];
                    })()),
                    (a = 1e9 * t.uptime()),
                    (r = s - a))
                  : Date.now
                  ? ((e.exports = function () {
                      return Date.now() - o;
                    }),
                    (o = Date.now()))
                  : ((e.exports = function () {
                      return new Date().getTime() - o;
                    }),
                    (o = new Date().getTime()));
              }.call(this));
            }.call(this, t("_process")));
          },
          { _process: 3 },
        ],
        3: [
          function (t, e, i) {
            function n() {
              throw new Error("setTimeout has not been defined");
            }
            function o() {
              throw new Error("clearTimeout has not been defined");
            }
            function s(t) {
              if (c === setTimeout) return setTimeout(t, 0);
              if ((c === n || !c) && setTimeout)
                return (c = setTimeout), setTimeout(t, 0);
              try {
                return c(t, 0);
              } catch (e) {
                try {
                  return c.call(null, t, 0);
                } catch (e) {
                  return c.call(this, t, 0);
                }
              }
            }
            function r(t) {
              if (d === clearTimeout) return clearTimeout(t);
              if ((d === o || !d) && clearTimeout)
                return (d = clearTimeout), clearTimeout(t);
              try {
                return d(t);
              } catch (e) {
                try {
                  return d.call(null, t);
                } catch (e) {
                  return d.call(this, t);
                }
              }
            }
            function a() {
              v &&
                p &&
                ((v = !1),
                p.length ? (f = p.concat(f)) : (y = -1),
                f.length && l());
            }
            function l() {
              if (!v) {
                var t = s(a);
                v = !0;
                for (var e = f.length; e; ) {
                  for (p = f, f = []; ++y < e; ) p && p[y].run();
                  (y = -1), (e = f.length);
                }
                (p = null), (v = !1), r(t);
              }
            }
            function h(t, e) {
              (this.fun = t), (this.array = e);
            }
            function u() {}
            var c,
              d,
              m = (e.exports = {});
            !(function () {
              try {
                c = "function" == typeof setTimeout ? setTimeout : n;
              } catch (t) {
                c = n;
              }
              try {
                d = "function" == typeof clearTimeout ? clearTimeout : o;
              } catch (t) {
                d = o;
              }
            })();
            var p,
              f = [],
              v = !1,
              y = -1;
            (m.nextTick = function (t) {
              var e = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++)
                  e[i - 1] = arguments[i];
              f.push(new h(t, e)), 1 !== f.length || v || s(l);
            }),
              (h.prototype.run = function () {
                this.fun.apply(null, this.array);
              }),
              (m.title = "browser"),
              (m.browser = !0),
              (m.env = {}),
              (m.argv = []),
              (m.version = ""),
              (m.versions = {}),
              (m.on = u),
              (m.addListener = u),
              (m.once = u),
              (m.off = u),
              (m.removeListener = u),
              (m.removeAllListeners = u),
              (m.emit = u),
              (m.prependListener = u),
              (m.prependOnceListener = u),
              (m.listeners = function (t) {
                return [];
              }),
              (m.binding = function (t) {
                throw new Error("process.binding is not supported");
              }),
              (m.cwd = function () {
                return "/";
              }),
              (m.chdir = function (t) {
                throw new Error("process.chdir is not supported");
              }),
              (m.umask = function () {
                return 0;
              });
          },
          {},
        ],
        4: [
          function (t, e, i) {
            (function (i) {
              for (
                var n = t("performance-now"),
                  o = "undefined" == typeof window ? i : window,
                  s = ["moz", "webkit"],
                  r = "AnimationFrame",
                  a = o["request" + r],
                  l = o["cancel" + r] || o["cancelRequest" + r],
                  h = 0;
                !a && h < s.length;
                h++
              )
                (a = o[s[h] + "Request" + r]),
                  (l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r]);
              if (!a || !l) {
                var u = 0,
                  c = 0,
                  d = [];
                (a = function (t) {
                  if (0 === d.length) {
                    var e = n(),
                      i = Math.max(0, 1e3 / 60 - (e - u));
                    (u = i + e),
                      setTimeout(function () {
                        var t = d.slice(0);
                        d.length = 0;
                        for (var e = 0; e < t.length; e++)
                          if (!t[e].cancelled)
                            try {
                              t[e].callback(u);
                            } catch (t) {
                              setTimeout(function () {
                                throw t;
                              }, 0);
                            }
                      }, Math.round(i));
                  }
                  return d.push({ handle: ++c, callback: t, cancelled: !1 }), c;
                }),
                  (l = function (t) {
                    for (var e = 0; e < d.length; e++)
                      d[e].handle === t && (d[e].cancelled = !0);
                  });
              }
              (e.exports = function (t) {
                return a.call(o, t);
              }),
                (e.exports.cancel = function () {
                  l.apply(o, arguments);
                }),
                (e.exports.polyfill = function () {
                  (o.requestAnimationFrame = a), (o.cancelAnimationFrame = l);
                });
            }.call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            ));
          },
          { "performance-now": 2 },
        ],
        5: [
          function (t, e, i) {
            "use strict";
            function n(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            }
            var o = (function () {
                function t(t, e) {
                  for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(t, n.key, n);
                  }
                }
                return function (e, i, n) {
                  return i && t(e.prototype, i), n && t(e, n), e;
                };
              })(),
              s = t("raf"),
              r = t("object-assign"),
              a = {
                propertyCache: {},
                vendors: [
                  null,
                  ["-webkit-", "webkit"],
                  ["-moz-", "Moz"],
                  ["-o-", "O"],
                  ["-ms-", "ms"],
                ],
                clamp: function (t, e, i) {
                  return e < i
                    ? t < e
                      ? e
                      : t > i
                      ? i
                      : t
                    : t < i
                    ? i
                    : t > e
                    ? e
                    : t;
                },
                data: function (t, e) {
                  return a.deserialize(t.getAttribute("data-" + e));
                },
                deserialize: function (t) {
                  return (
                    "true" === t ||
                    ("false" !== t &&
                      ("null" === t
                        ? null
                        : !isNaN(parseFloat(t)) && isFinite(t)
                        ? parseFloat(t)
                        : t))
                  );
                },
                camelCase: function (t) {
                  return t.replace(/-+(.)?/g, function (t, e) {
                    return e ? e.toUpperCase() : "";
                  });
                },
                accelerate: function (t) {
                  a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"),
                    a.css(t, "transform-style", "preserve-3d"),
                    a.css(t, "backface-visibility", "hidden");
                },
                transformSupport: function (t) {
                  for (
                    var e = document.createElement("div"),
                      i = !1,
                      n = null,
                      o = !1,
                      s = null,
                      r = null,
                      l = 0,
                      h = a.vendors.length;
                    l < h;
                    l++
                  )
                    if (
                      (null !== a.vendors[l]
                        ? ((s = a.vendors[l][0] + "transform"),
                          (r = a.vendors[l][1] + "Transform"))
                        : ((s = "transform"), (r = "transform")),
                      void 0 !== e.style[r])
                    ) {
                      i = !0;
                      break;
                    }
                  switch (t) {
                    case "2D":
                      o = i;
                      break;
                    case "3D":
                      if (i) {
                        var u = document.body || document.createElement("body"),
                          c = document.documentElement,
                          d = c.style.overflow,
                          m = !1;
                        document.body ||
                          ((m = !0),
                          (c.style.overflow = "hidden"),
                          c.appendChild(u),
                          (u.style.overflow = "hidden"),
                          (u.style.background = "")),
                          u.appendChild(e),
                          (e.style[r] = "translate3d(1px,1px,1px)"),
                          (o =
                            void 0 !==
                              (n = window
                                .getComputedStyle(e)
                                .getPropertyValue(s)) &&
                            n.length > 0 &&
                            "none" !== n),
                          (c.style.overflow = d),
                          u.removeChild(e),
                          m &&
                            (u.removeAttribute("style"),
                            u.parentNode.removeChild(u));
                      }
                  }
                  return o;
                },
                css: function (t, e, i) {
                  var n = a.propertyCache[e];
                  if (!n)
                    for (var o = 0, s = a.vendors.length; o < s; o++)
                      if (
                        ((n =
                          null !== a.vendors[o]
                            ? a.camelCase(a.vendors[o][1] + "-" + e)
                            : e),
                        void 0 !== t.style[n])
                      ) {
                        a.propertyCache[e] = n;
                        break;
                      }
                  t.style[n] = i;
                },
              },
              l = {
                relativeInput: !1,
                clipRelativeInput: !1,
                inputElement: null,
                hoverOnly: !1,
                calibrationThreshold: 100,
                calibrationDelay: 500,
                supportDelay: 500,
                calibrateX: !1,
                calibrateY: !0,
                invertX: !0,
                invertY: !0,
                limitX: !1,
                limitY: !1,
                scalarX: 10,
                scalarY: 10,
                frictionX: 0.1,
                frictionY: 0.1,
                originX: 0.5,
                originY: 0.5,
                pointerEvents: !1,
                precision: 1,
                onReady: null,
                selector: null,
              },
              h = (function () {
                function t(e, i) {
                  n(this, t), (this.element = e);
                  var o = {
                    calibrateX: a.data(this.element, "calibrate-x"),
                    calibrateY: a.data(this.element, "calibrate-y"),
                    invertX: a.data(this.element, "invert-x"),
                    invertY: a.data(this.element, "invert-y"),
                    limitX: a.data(this.element, "limit-x"),
                    limitY: a.data(this.element, "limit-y"),
                    scalarX: a.data(this.element, "scalar-x"),
                    scalarY: a.data(this.element, "scalar-y"),
                    frictionX: a.data(this.element, "friction-x"),
                    frictionY: a.data(this.element, "friction-y"),
                    originX: a.data(this.element, "origin-x"),
                    originY: a.data(this.element, "origin-y"),
                    pointerEvents: a.data(this.element, "pointer-events"),
                    precision: a.data(this.element, "precision"),
                    relativeInput: a.data(this.element, "relative-input"),
                    clipRelativeInput: a.data(
                      this.element,
                      "clip-relative-input"
                    ),
                    hoverOnly: a.data(this.element, "hover-only"),
                    inputElement: document.querySelector(
                      a.data(this.element, "input-element")
                    ),
                    selector: a.data(this.element, "selector"),
                  };
                  for (var s in o) null === o[s] && delete o[s];
                  r(this, l, o, i),
                    this.inputElement || (this.inputElement = this.element),
                    (this.calibrationTimer = null),
                    (this.calibrationFlag = !0),
                    (this.enabled = !1),
                    (this.depthsX = []),
                    (this.depthsY = []),
                    (this.raf = null),
                    (this.bounds = null),
                    (this.elementPositionX = 0),
                    (this.elementPositionY = 0),
                    (this.elementWidth = 0),
                    (this.elementHeight = 0),
                    (this.elementCenterX = 0),
                    (this.elementCenterY = 0),
                    (this.elementRangeX = 0),
                    (this.elementRangeY = 0),
                    (this.calibrationX = 0),
                    (this.calibrationY = 0),
                    (this.inputX = 0),
                    (this.inputY = 0),
                    (this.motionX = 0),
                    (this.motionY = 0),
                    (this.velocityX = 0),
                    (this.velocityY = 0),
                    (this.onMouseMove = this.onMouseMove.bind(this)),
                    (this.onDeviceOrientation =
                      this.onDeviceOrientation.bind(this)),
                    (this.onDeviceMotion = this.onDeviceMotion.bind(this)),
                    (this.onOrientationTimer =
                      this.onOrientationTimer.bind(this)),
                    (this.onMotionTimer = this.onMotionTimer.bind(this)),
                    (this.onCalibrationTimer =
                      this.onCalibrationTimer.bind(this)),
                    (this.onAnimationFrame = this.onAnimationFrame.bind(this)),
                    (this.onWindowResize = this.onWindowResize.bind(this)),
                    (this.windowWidth = null),
                    (this.windowHeight = null),
                    (this.windowCenterX = null),
                    (this.windowCenterY = null),
                    (this.windowRadiusX = null),
                    (this.windowRadiusY = null),
                    (this.portrait = !1),
                    (this.desktop = !navigator.userAgent.match(
                      /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
                    )),
                    (this.motionSupport =
                      !!window.DeviceMotionEvent && !this.desktop),
                    (this.orientationSupport =
                      !!window.DeviceOrientationEvent && !this.desktop),
                    (this.orientationStatus = 0),
                    (this.motionStatus = 0),
                    this.initialise();
                }
                return (
                  o(t, [
                    {
                      key: "initialise",
                      value: function () {
                        void 0 === this.transform2DSupport &&
                          ((this.transform2DSupport = a.transformSupport("2D")),
                          (this.transform3DSupport = a.transformSupport("3D"))),
                          this.transform3DSupport && a.accelerate(this.element),
                          "static" ===
                            window
                              .getComputedStyle(this.element)
                              .getPropertyValue("position") &&
                            (this.element.style.position = "relative"),
                          this.pointerEvents ||
                            (this.element.style.pointerEvents = "none"),
                          this.updateLayers(),
                          this.updateDimensions(),
                          this.enable(),
                          this.queueCalibration(this.calibrationDelay);
                      },
                    },
                    {
                      key: "doReadyCallback",
                      value: function () {
                        this.onReady && this.onReady();
                      },
                    },
                    {
                      key: "updateLayers",
                      value: function () {
                        this.selector
                          ? (this.layers = this.element.querySelectorAll(
                              this.selector
                            ))
                          : (this.layers = this.element.children),
                          this.layers.length ||
                            console.warn(
                              "ParallaxJS: Your scene does not have any layers."
                            ),
                          (this.depthsX = []),
                          (this.depthsY = []);
                        for (var t = 0; t < this.layers.length; t++) {
                          var e = this.layers[t];
                          this.transform3DSupport && a.accelerate(e),
                            (e.style.position = t ? "absolute" : "relative"),
                            (e.style.display = "block"),
                            (e.style.left = 0),
                            (e.style.top = 0);
                          var i = a.data(e, "depth") || 0;
                          this.depthsX.push(a.data(e, "depth-x") || i),
                            this.depthsY.push(a.data(e, "depth-y") || i);
                        }
                      },
                    },
                    {
                      key: "updateDimensions",
                      value: function () {
                        (this.windowWidth = window.innerWidth),
                          (this.windowHeight = window.innerHeight),
                          (this.windowCenterX = this.windowWidth * this.originX),
                          (this.windowCenterY = this.windowHeight * this.originY),
                          (this.windowRadiusX = Math.max(
                            this.windowCenterX,
                            this.windowWidth - this.windowCenterX
                          )),
                          (this.windowRadiusY = Math.max(
                            this.windowCenterY,
                            this.windowHeight - this.windowCenterY
                          ));
                      },
                    },
                    {
                      key: "updateBounds",
                      value: function () {
                        (this.bounds = this.inputElement.getBoundingClientRect()),
                          (this.elementPositionX = this.bounds.left),
                          (this.elementPositionY = this.bounds.top),
                          (this.elementWidth = this.bounds.width),
                          (this.elementHeight = this.bounds.height),
                          (this.elementCenterX =
                            this.elementWidth * this.originX),
                          (this.elementCenterY =
                            this.elementHeight * this.originY),
                          (this.elementRangeX = Math.max(
                            this.elementCenterX,
                            this.elementWidth - this.elementCenterX
                          )),
                          (this.elementRangeY = Math.max(
                            this.elementCenterY,
                            this.elementHeight - this.elementCenterY
                          ));
                      },
                    },
                    {
                      key: "queueCalibration",
                      value: function (t) {
                        clearTimeout(this.calibrationTimer),
                          (this.calibrationTimer = setTimeout(
                            this.onCalibrationTimer,
                            t
                          ));
                      },
                    },
                    {
                      key: "enable",
                      value: function () {
                        this.enabled ||
                          ((this.enabled = !0),
                          this.orientationSupport
                            ? ((this.portrait = !1),
                              window.addEventListener(
                                "deviceorientation",
                                this.onDeviceOrientation
                              ),
                              (this.detectionTimer = setTimeout(
                                this.onOrientationTimer,
                                this.supportDelay
                              )))
                            : this.motionSupport
                            ? ((this.portrait = !1),
                              window.addEventListener(
                                "devicemotion",
                                this.onDeviceMotion
                              ),
                              (this.detectionTimer = setTimeout(
                                this.onMotionTimer,
                                this.supportDelay
                              )))
                            : ((this.calibrationX = 0),
                              (this.calibrationY = 0),
                              (this.portrait = !1),
                              window.addEventListener(
                                "mousemove",
                                this.onMouseMove
                              ),
                              this.doReadyCallback()),
                          window.addEventListener("resize", this.onWindowResize),
                          (this.raf = s(this.onAnimationFrame)));
                      },
                    },
                    {
                      key: "disable",
                      value: function () {
                        this.enabled &&
                          ((this.enabled = !1),
                          this.orientationSupport
                            ? window.removeEventListener(
                                "deviceorientation",
                                this.onDeviceOrientation
                              )
                            : this.motionSupport
                            ? window.removeEventListener(
                                "devicemotion",
                                this.onDeviceMotion
                              )
                            : window.removeEventListener(
                                "mousemove",
                                this.onMouseMove
                              ),
                          window.removeEventListener(
                            "resize",
                            this.onWindowResize
                          ),
                          s.cancel(this.raf));
                      },
                    },
                    {
                      key: "calibrate",
                      value: function (t, e) {
                        (this.calibrateX = void 0 === t ? this.calibrateX : t),
                          (this.calibrateY = void 0 === e ? this.calibrateY : e);
                      },
                    },
                    {
                      key: "invert",
                      value: function (t, e) {
                        (this.invertX = void 0 === t ? this.invertX : t),
                          (this.invertY = void 0 === e ? this.invertY : e);
                      },
                    },
                    {
                      key: "friction",
                      value: function (t, e) {
                        (this.frictionX = void 0 === t ? this.frictionX : t),
                          (this.frictionY = void 0 === e ? this.frictionY : e);
                      },
                    },
                    {
                      key: "scalar",
                      value: function (t, e) {
                        (this.scalarX = void 0 === t ? this.scalarX : t),
                          (this.scalarY = void 0 === e ? this.scalarY : e);
                      },
                    },
                    {
                      key: "limit",
                      value: function (t, e) {
                        (this.limitX = void 0 === t ? this.limitX : t),
                          (this.limitY = void 0 === e ? this.limitY : e);
                      },
                    },
                    {
                      key: "origin",
                      value: function (t, e) {
                        (this.originX = void 0 === t ? this.originX : t),
                          (this.originY = void 0 === e ? this.originY : e);
                      },
                    },
                    {
                      key: "setInputElement",
                      value: function (t) {
                        (this.inputElement = t), this.updateDimensions();
                      },
                    },
                    {
                      key: "setPosition",
                      value: function (t, e, i) {
                        (e = e.toFixed(this.precision) + "px"),
                          (i = i.toFixed(this.precision) + "px"),
                          this.transform3DSupport
                            ? a.css(
                                t,
                                "transform",
                                "translate3d(" + e + "," + i + ",0)"
                              )
                            : this.transform2DSupport
                            ? a.css(
                                t,
                                "transform",
                                "translate(" + e + "," + i + ")"
                              )
                            : ((t.style.left = e), (t.style.top = i));
                      },
                    },
                    {
                      key: "onOrientationTimer",
                      value: function () {
                        this.orientationSupport && 0 === this.orientationStatus
                          ? (this.disable(),
                            (this.orientationSupport = !1),
                            this.enable())
                          : this.doReadyCallback();
                      },
                    },
                    {
                      key: "onMotionTimer",
                      value: function () {
                        this.motionSupport && 0 === this.motionStatus
                          ? (this.disable(),
                            (this.motionSupport = !1),
                            this.enable())
                          : this.doReadyCallback();
                      },
                    },
                    {
                      key: "onCalibrationTimer",
                      value: function () {
                        this.calibrationFlag = !0;
                      },
                    },
                    {
                      key: "onWindowResize",
                      value: function () {
                        this.updateDimensions();
                      },
                    },
                    {
                      key: "onAnimationFrame",
                      value: function () {
                        this.updateBounds();
                        var t = this.inputX - this.calibrationX,
                          e = this.inputY - this.calibrationY;
                        (Math.abs(t) > this.calibrationThreshold ||
                          Math.abs(e) > this.calibrationThreshold) &&
                          this.queueCalibration(0),
                          this.portrait
                            ? ((this.motionX = this.calibrateX ? e : this.inputY),
                              (this.motionY = this.calibrateY ? t : this.inputX))
                            : ((this.motionX = this.calibrateX ? t : this.inputX),
                              (this.motionY = this.calibrateY ? e : this.inputY)),
                          (this.motionX *=
                            this.elementWidth * (this.scalarX / 100)),
                          (this.motionY *=
                            this.elementHeight * (this.scalarY / 100)),
                          isNaN(parseFloat(this.limitX)) ||
                            (this.motionX = a.clamp(
                              this.motionX,
                              -this.limitX,
                              this.limitX
                            )),
                          isNaN(parseFloat(this.limitY)) ||
                            (this.motionY = a.clamp(
                              this.motionY,
                              -this.limitY,
                              this.limitY
                            )),
                          (this.velocityX +=
                            (this.motionX - this.velocityX) * this.frictionX),
                          (this.velocityY +=
                            (this.motionY - this.velocityY) * this.frictionY);
                        for (var i = 0; i < this.layers.length; i++) {
                          var n = this.layers[i],
                            o = this.depthsX[i],
                            r = this.depthsY[i],
                            l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                            h = this.velocityY * (r * (this.invertY ? -1 : 1));
                          this.setPosition(n, l, h);
                        }
                        this.raf = s(this.onAnimationFrame);
                      },
                    },
                    {
                      key: "rotate",
                      value: function (t, e) {
                        var i = (t || 0) / 30,
                          n = (e || 0) / 30,
                          o = this.windowHeight > this.windowWidth;
                        this.portrait !== o &&
                          ((this.portrait = o), (this.calibrationFlag = !0)),
                          this.calibrationFlag &&
                            ((this.calibrationFlag = !1),
                            (this.calibrationX = i),
                            (this.calibrationY = n)),
                          (this.inputX = i),
                          (this.inputY = n);
                      },
                    },
                    {
                      key: "onDeviceOrientation",
                      value: function (t) {
                        var e = t.beta,
                          i = t.gamma;
                        null !== e &&
                          null !== i &&
                          ((this.orientationStatus = 1), this.rotate(e, i));
                      },
                    },
                    {
                      key: "onDeviceMotion",
                      value: function (t) {
                        var e = t.rotationRate.beta,
                          i = t.rotationRate.gamma;
                        null !== e &&
                          null !== i &&
                          ((this.motionStatus = 1), this.rotate(e, i));
                      },
                    },
                    {
                      key: "onMouseMove",
                      value: function (t) {
                        var e = t.clientX,
                          i = t.clientY;
                        if (
                          this.hoverOnly &&
                          (e < this.elementPositionX ||
                            e > this.elementPositionX + this.elementWidth ||
                            i < this.elementPositionY ||
                            i > this.elementPositionY + this.elementHeight)
                        )
                          return (this.inputX = 0), void (this.inputY = 0);
                        this.relativeInput
                          ? (this.clipRelativeInput &&
                              ((e = Math.max(e, this.elementPositionX)),
                              (e = Math.min(
                                e,
                                this.elementPositionX + this.elementWidth
                              )),
                              (i = Math.max(i, this.elementPositionY)),
                              (i = Math.min(
                                i,
                                this.elementPositionY + this.elementHeight
                              ))),
                            this.elementRangeX &&
                              this.elementRangeY &&
                              ((this.inputX =
                                (e -
                                  this.elementPositionX -
                                  this.elementCenterX) /
                                this.elementRangeX),
                              (this.inputY =
                                (i -
                                  this.elementPositionY -
                                  this.elementCenterY) /
                                this.elementRangeY)))
                          : this.windowRadiusX &&
                            this.windowRadiusY &&
                            ((this.inputX =
                              (e - this.windowCenterX) / this.windowRadiusX),
                            (this.inputY =
                              (i - this.windowCenterY) / this.windowRadiusY));
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.disable(),
                          clearTimeout(this.calibrationTimer),
                          clearTimeout(this.detectionTimer),
                          this.element.removeAttribute("style");
                        for (var t = 0; t < this.layers.length; t++)
                          this.layers[t].removeAttribute("style");
                        delete this.element, delete this.layers;
                      },
                    },
                    {
                      key: "version",
                      value: function () {
                        return "3.1.0";
                      },
                    },
                  ]),
                  t
                );
              })();
            e.exports = h;
          },
          { "object-assign": 1, raf: 4 },
        ],
      },
      {},
      [5]
    )(5);
  });
  //# sourceMappingURL=parallax.min.js.map
  
  // rz-lazy
  (function ($) {
    $.fn.rxLazy = function (settings) {
      if (!this[0]) {
        return this;
      }
  
      var items = $(this),
        mainClass = "rx-lazy_item",
        hiddenClass = "rx-lazy_hidden",
        imageBackGround = "#eff0f1";
  
      items.addClass(hiddenClass + " " + mainClass);
  
      if (!window.rxLazy_windowLoad) {
        $(window).on("load.rxLazy", init);
      } else {
        init();
      }
  
      function init() {
        $(window).on("scroll.rxLazy", setItemVisibile).trigger("scroll.rxLazy");
      }
  
      function setItemVisibile() {
        items = items.map(function (index, element) {
          var item = $(element);
  
          if (isInViewport(item)) {
            item.on("load", showAnimation).attr("src", item.data("src"));
          } else {
            return element;
          }
        });
      }
  
      function isInViewport(htmlElement, indent = 500) {
        var htmlElement = $(htmlElement);
  
        return (
          window.pageYOffset <= htmlElement.offset().top &&
          htmlElement.offset().top <=
            window.pageYOffset + window.innerHeight + indent
        );
      }
  
      function showAnimation() {
        var item = $(this);
        item.removeClass(hiddenClass);
      }
    };
  
    $(window).on("load.rxLazy", function () {
      window.rxLazy_windowLoad = true;
    });
  })(jQuery);
  
  // fancyBox
  // ==================================================
  // fancyBox v3.5.7
  //
  // Licensed GPLv3 for open source use
  // or fancyBox Commercial License for commercial use
  //
  // http://fancyapps.com/fancybox/
  // Copyright 2019 fancyApps
  //
  // ==================================================
  (function (window, document, $, undefined) {
    "use strict";
  
    window.console = window.console || {
      info: function (stuff) {},
    };
  
    // If there's no jQuery, fancyBox can't work
    // =========================================
  
    if (!$) {
      return;
    }
  
    // Check if fancyBox is already initialized
    // ========================================
  
    if ($.fn.fancybox) {
      console.info("fancyBox already initialized");
  
      return;
    }
  
    // Private default settings
    // ========================
  
    var defaults = {
      // Close existing modals
      // Set this to false if you do not need to stack multiple instances
      closeExisting: false,
  
      // Enable infinite gallery navigation
      loop: false,
  
      // Horizontal space between slides
      gutter: 50,
  
      // Enable keyboard navigation
      keyboard: true,
  
      // Should allow caption to overlap the content
      preventCaptionOverlap: true,
  
      // Should display navigation arrows at the screen edges
      arrows: true,
  
      // Should display counter at the top left corner
      infobar: true,
  
      // Should display close button (using `btnTpl.smallBtn` template) over the content
      // Can be true, false, "auto"
      // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
      smallBtn: "auto",
  
      // Should display toolbar (buttons at the top)
      // Can be true, false, "auto"
      // If "auto" - will be automatically hidden if "smallBtn" is enabled
      toolbar: "auto",
  
      // What buttons should appear in the top right corner.
      // Buttons will be created using templates from `btnTpl` option
      // and they will be placed into toolbar (class="fancybox-toolbar"` element)
      buttons: [
        "zoom",
        //"share",
        "slideShow",
        //"fullScreen",
        //"download",
        "thumbs",
        "close",
      ],
  
      // Detect "idle" time in seconds
      idleTime: 3,
  
      // Disable right-click and use simple image protection for images
      protect: false,
  
      // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
      modal: false,
  
      image: {
        // Wait for images to load before displaying
        //   true  - wait for image to load and then display;
        //   false - display thumbnail and load the full-sized image over top,
        //           requires predefined image dimensions (`data-width` and `data-height` attributes)
        preload: false,
      },
  
      ajax: {
        // Object containing settings for ajax request
        settings: {
          // This helps to indicate that request comes from the modal
          // Feel free to change naming
          data: {
            fancybox: true,
          },
        },
      },
  
      iframe: {
        // Iframe template
        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
  
        // Preload iframe before displaying it
        // This allows to calculate iframe content width and height
        // (note: Due to "Same Origin Policy", you can't get cross domain data).
        preload: true,
  
        // Custom CSS styling for iframe wrapping element
        // You can use this to set custom iframe dimensions
        css: {},
  
        // Iframe tag attributes
        attr: {
          scrolling: "auto",
        },
      },
  
      // For HTML5 video only
      video: {
        tpl:
          '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
          '<source src="{{src}}" type="{{format}}" />' +
          'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
          "</video>",
        format: "", // custom video format
        autoStart: true,
      },
  
      // Default content type if cannot be detected automatically
      defaultType: "image",
  
      // Open/close animation type
      // Possible values:
      //   false            - disable
      //   "zoom"           - zoom images from/to thumbnail
      //   "fade"
      //   "zoom-in-out"
      //
      animationEffect: "zoom",
  
      // Duration in ms for open/close animation
      animationDuration: 366,
  
      // Should image change opacity while zooming
      // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
      zoomOpacity: "auto",
  
      // Transition effect between slides
      //
      // Possible values:
      //   false            - disable
      //   "fade'
      //   "slide'
      //   "circular'
      //   "tube'
      //   "zoom-in-out'
      //   "rotate'
      //
      transitionEffect: "fade",
  
      // Duration in ms for transition animation
      transitionDuration: 366,
  
      // Custom CSS class for slide element
      slideClass: "",
  
      // Custom CSS class for layout
      baseClass: "",
  
      // Base template for layout
      baseTpl:
        '<div class="fancybox-container" role="dialog" tabindex="-1">' +
        '<div class="fancybox-bg"></div>' +
        '<div class="fancybox-inner">' +
        '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
        '<div class="fancybox-toolbar">{{buttons}}</div>' +
        '<div class="fancybox-navigation">{{arrows}}</div>' +
        '<div class="fancybox-stage"></div>' +
        '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
        "</div>" +
        "</div>",
  
      // Loading indicator template
      spinnerTpl: '<div class="fancybox-loading"></div>',
  
      // Error message template
      errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
  
      btnTpl: {
        download:
          '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
          "</a>",
  
        zoom:
          '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
          "</button>",
  
        close:
          '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
          "</button>",
  
        // Arrows
        arrowLeft:
          '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
          '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
          "</button>",
  
        arrowRight:
          '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
          '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
          "</button>",
  
        // This small close button will be appended to your html/inline/ajax content by default,
        // if "smallBtn" option is not set to false
        smallBtn:
          '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
          "</button>",
      },
  
      // Container is injected into this element
      parentEl: "body",
  
      // Hide browser vertical scrollbars; use at your own risk
      hideScrollbar: true,
  
      // Focus handling
      // ==============
  
      // Try to focus on the first focusable element after opening
      autoFocus: true,
  
      // Put focus back to active element after closing
      backFocus: true,
  
      // Do not let user to focus on element outside modal content
      trapFocus: true,
  
      // Module specific options
      // =======================
  
      fullScreen: {
        autoStart: false,
      },
  
      // Set `touch: false` to disable panning/swiping
      touch: {
        vertical: true, // Allow to drag content vertically
        momentum: true, // Continue movement after releasing mouse/touch when panning
      },
  
      // Hash value when initializing manually,
      // set `false` to disable hash change
      hash: null,
  
      // Customize or add new media types
      // Example:
      /*
        media : {
          youtube : {
            params : {
              autoplay : 0
            }
          }
        }
      */
      media: {},
  
      slideShow: {
        autoStart: false,
        speed: 3000,
      },
  
      thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y", // Vertical (y) or horizontal (x) scrolling
      },
  
      // Use mousewheel to navigate gallery
      // If 'auto' - enabled for images only
      wheel: "auto",
  
      // Callbacks
      //==========
  
      // See Documentation/API/Events for more information
      // Example:
      /*
        afterShow: function( instance, current ) {
          console.info( 'Clicked element:' );
          console.info( current.opts.$orig );
        }
      */
  
      onInit: $.noop, // When instance has been initialized
  
      beforeLoad: $.noop, // Before the content of a slide is being loaded
      afterLoad: $.noop, // When the content of a slide is done loading
  
      beforeShow: $.noop, // Before open animation starts
      afterShow: $.noop, // When content is done loading and animating
  
      beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
      afterClose: $.noop, // After instance has been closed
  
      onActivate: $.noop, // When instance is brought to front
      onDeactivate: $.noop, // When other instance has been activated
  
      // Interaction
      // ===========
  
      // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
      // each option can be string or method that returns value.
      //
      // Possible values:
      //   "close"           - close instance
      //   "next"            - move to next gallery item
      //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
      //   "toggleControls"  - show/hide controls
      //   "zoom"            - zoom image (if loaded)
      //   false             - do nothing
  
      // Clicked on the content
      clickContent: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      },
  
      // Clicked on the slide
      clickSlide: "close",
  
      // Clicked on the background (backdrop) element;
      // if you have not changed the layout, then most likely you need to use `clickSlide` option
      clickOutside: "close",
  
      // Same as previous two, but for double click
      dblclickContent: false,
      dblclickSlide: false,
      dblclickOutside: false,
  
      // Custom options when mobile device is detected
      // =============================================
  
      mobile: {
        preventCaptionOverlap: false,
        idleTime: false,
        clickContent: function (current, event) {
          return current.type === "image" ? "toggleControls" : false;
        },
        clickSlide: function (current, event) {
          return current.type === "image" ? "toggleControls" : "close";
        },
        dblclickContent: function (current, event) {
          return current.type === "image" ? "zoom" : false;
        },
        dblclickSlide: function (current, event) {
          return current.type === "image" ? "zoom" : false;
        },
      },
  
      // Internationalization
      // ====================
  
      lang: "en",
      i18n: {
        en: {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          ERROR:
            "The requested content cannot be loaded. <br/> Please try again later.",
          PLAY_START: "Start slideshow",
          PLAY_STOP: "Pause slideshow",
          FULL_SCREEN: "Full screen",
          THUMBS: "Thumbnails",
          DOWNLOAD: "Download",
          SHARE: "Share",
          ZOOM: "Zoom",
        },
        de: {
          CLOSE: "Schlie&szlig;en",
          NEXT: "Weiter",
          PREV: "Zur&uuml;ck",
          ERROR:
            "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
          PLAY_START: "Diaschau starten",
          PLAY_STOP: "Diaschau beenden",
          FULL_SCREEN: "Vollbild",
          THUMBS: "Vorschaubilder",
          DOWNLOAD: "Herunterladen",
          SHARE: "Teilen",
          ZOOM: "Vergr&ouml;&szlig;ern",
        },
      },
    };
  
    // Few useful variables and methods
    // ================================
  
    var $W = $(window);
    var $D = $(document);
  
    var called = 0;
  
    // Check if an object is a jQuery object and not a native JavaScript object
    // ========================================================================
    var isQuery = function (obj) {
      return obj && obj.hasOwnProperty && obj instanceof $;
    };
  
    // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
    // ===============================================================================
    var requestAFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
          return window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
  
    var cancelAFrame = (function () {
      return (
        window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        function (id) {
          window.clearTimeout(id);
        }
      );
    })();
  
    // Detect the supported transition-end event property name
    // =======================================================
    var transitionEnd = (function () {
      var el = document.createElement("fakeelement"),
        t;
  
      var transitions = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd",
      };
  
      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }
  
      return "transitionend";
    })();
  
    // Force redraw on an element.
    // This helps in cases where the browser doesn't redraw an updated element properly
    // ================================================================================
    var forceRedraw = function ($el) {
      return $el && $el.length && $el[0].offsetHeight;
    };
  
    // Exclude array (`buttons`) options from deep merging
    // ===================================================
    var mergeOpts = function (opts1, opts2) {
      var rez = $.extend(true, {}, opts1, opts2);
  
      $.each(opts2, function (key, value) {
        if ($.isArray(value)) {
          rez[key] = value;
        }
      });
  
      return rez;
    };
  
    // How much of an element is visible in viewport
    // =============================================
  
    var inViewport = function (elem) {
      var elemCenter, rez;
  
      if (!elem || elem.ownerDocument !== document) {
        return false;
      }
  
      $(".fancybox-container").css("pointer-events", "none");
  
      elemCenter = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
      };
  
      rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;
  
      $(".fancybox-container").css("pointer-events", "");
  
      return rez;
    };
  
    // Class definition
    // ================
  
    var FancyBox = function (content, opts, index) {
      var self = this;
  
      self.opts = mergeOpts(
        {
          index: index,
        },
        $.fancybox.defaults
      );
  
      if ($.isPlainObject(opts)) {
        self.opts = mergeOpts(self.opts, opts);
      }
  
      if ($.fancybox.isMobile) {
        self.opts = mergeOpts(self.opts, self.opts.mobile);
      }
  
      self.id = self.opts.id || ++called;
  
      self.currIndex = parseInt(self.opts.index, 10) || 0;
      self.prevIndex = null;
  
      self.prevPos = null;
      self.currPos = 0;
  
      self.firstRun = true;
  
      // All group items
      self.group = [];
  
      // Existing slides (for current, next and previous gallery items)
      self.slides = {};
  
      // Create group elements
      self.addContent(content);
  
      if (!self.group.length) {
        return;
      }
  
      self.init();
    };
  
    $.extend(FancyBox.prototype, {
      // Create DOM structure
      // ====================
  
      init: function () {
        var self = this,
          firstItem = self.group[self.currIndex],
          firstItemOpts = firstItem.opts,
          $container,
          buttonStr;
  
        if (firstItemOpts.closeExisting) {
          $.fancybox.close(true);
        }
  
        // Hide scrollbars
        // ===============
  
        $("body").addClass("fancybox-active");
  
        if (
          !$.fancybox.getInstance() &&
          firstItemOpts.hideScrollbar !== false &&
          !$.fancybox.isMobile &&
          document.body.scrollHeight > window.innerHeight
        ) {
          $("head").append(
            '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
              (window.innerWidth - document.documentElement.clientWidth) +
              "px;}</style>"
          );
  
          $("body").addClass("compensate-for-scrollbar");
        }
  
        // Build html markup and set references
        // ====================================
  
        // Build html code for buttons and insert into main template
        buttonStr = "";
  
        $.each(firstItemOpts.buttons, function (index, value) {
          buttonStr += firstItemOpts.btnTpl[value] || "";
        });
  
        // Create markup from base template, it will be initially hidden to
        // avoid unnecessary work like painting while initializing is not complete
        $container = $(
          self.translate(
            self,
            firstItemOpts.baseTpl
              .replace("{{buttons}}", buttonStr)
              .replace(
                "{{arrows}}",
                firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight
              )
          )
        )
          .attr("id", "fancybox-container-" + self.id)
          .addClass(firstItemOpts.baseClass)
          .data("FancyBox", self)
          .appendTo(firstItemOpts.parentEl);
  
        // Create object holding references to jQuery wrapped nodes
        self.$refs = {
          container: $container,
        };
  
        [
          "bg",
          "inner",
          "infobar",
          "toolbar",
          "stage",
          "caption",
          "navigation",
        ].forEach(function (item) {
          self.$refs[item] = $container.find(".fancybox-" + item);
        });
  
        self.trigger("onInit");
  
        // Enable events, deactive previous instances
        self.activate();
  
        // Build slides, load and reveal content
        self.jumpTo(self.currIndex);
      },
  
      // Simple i18n support - replaces object keys found in template
      // with corresponding values
      // ============================================================
  
      translate: function (obj, str) {
        var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;
  
        return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
          return arr[n] === undefined ? match : arr[n];
        });
      },
  
      // Populate current group with fresh content
      // Check if each object has valid type and content
      // ===============================================
  
      addContent: function (content) {
        var self = this,
          items = $.makeArray(content),
          thumbs;
  
        $.each(items, function (i, item) {
          var obj = {},
            opts = {},
            $item,
            type,
            found,
            src,
            srcParts;
  
          // Step 1 - Make sure we have an object
          // ====================================
  
          if ($.isPlainObject(item)) {
            // We probably have manual usage here, something like
            // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )
  
            obj = item;
            opts = item.opts || item;
          } else if ($.type(item) === "object" && $(item).length) {
            // Here we probably have jQuery collection returned by some selector
            $item = $(item);
  
            // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
            opts = $item.data() || {};
            opts = $.extend(true, {}, opts, opts.options);
  
            // Here we store clicked element
            opts.$orig = $item;
  
            obj.src = self.opts.src || opts.src || $item.attr("href");
  
            // Assume that simple syntax is used, for example:
            //   `$.fancybox.open( $("#test"), {} );`
            if (!obj.type && !obj.src) {
              obj.type = "inline";
              obj.src = item;
            }
          } else {
            // Assume we have a simple html code, for example:
            //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
            obj = {
              type: "html",
              src: item + "",
            };
          }
  
          // Each gallery object has full collection of options
          obj.opts = $.extend(true, {}, self.opts, opts);
  
          // Do not merge buttons array
          if ($.isArray(opts.buttons)) {
            obj.opts.buttons = opts.buttons;
          }
  
          if ($.fancybox.isMobile && obj.opts.mobile) {
            obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
          }
  
          // Step 2 - Make sure we have content type, if not - try to guess
          // ==============================================================
  
          type = obj.type || obj.opts.type;
          src = obj.src || "";
  
          if (!type && src) {
            if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
              type = "video";
  
              if (!obj.opts.video.format) {
                obj.opts.video.format =
                  "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
              }
            } else if (
              src.match(
                /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
              )
            ) {
              type = "image";
            } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
              type = "iframe";
              obj = $.extend(true, obj, {
                contentType: "pdf",
                opts: {
                  iframe: {
                    preload: false,
                  },
                },
              });
            } else if (src.charAt(0) === "#") {
              type = "inline";
            }
          }
  
          if (type) {
            obj.type = type;
          } else {
            self.trigger("objectNeedsType", obj);
          }
  
          if (!obj.contentType) {
            obj.contentType =
              $.inArray(obj.type, ["html", "inline", "ajax"]) > -1
                ? "html"
                : obj.type;
          }
  
          // Step 3 - Some adjustments
          // =========================
  
          obj.index = self.group.length;
  
          if (obj.opts.smallBtn == "auto") {
            obj.opts.smallBtn =
              $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
          }
  
          if (obj.opts.toolbar === "auto") {
            obj.opts.toolbar = !obj.opts.smallBtn;
          }
  
          // Find thumbnail image, check if exists and if is in the viewport
          obj.$thumb = obj.opts.$thumb || null;
  
          if (obj.opts.$trigger && obj.index === self.opts.index) {
            obj.$thumb = obj.opts.$trigger.find("img:first");
  
            if (obj.$thumb.length) {
              obj.opts.$orig = obj.opts.$trigger;
            }
          }
  
          if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
            obj.$thumb = obj.opts.$orig.find("img:first");
          }
  
          if (obj.$thumb && !obj.$thumb.length) {
            obj.$thumb = null;
          }
  
          obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);
  
          // "caption" is a "special" option, it can be used to customize caption per gallery item
          if ($.type(obj.opts.caption) === "function") {
            obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
          }
  
          if ($.type(self.opts.caption) === "function") {
            obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
          }
  
          // Make sure we have caption as a string or jQuery object
          if (!(obj.opts.caption instanceof $)) {
            obj.opts.caption =
              obj.opts.caption === undefined ? "" : obj.opts.caption + "";
          }
  
          // Check if url contains "filter" used to filter the content
          // Example: "ajax.html #something"
          if (obj.type === "ajax") {
            srcParts = src.split(/\s+/, 2);
  
            if (srcParts.length > 1) {
              obj.src = srcParts.shift();
  
              obj.opts.filter = srcParts.shift();
            }
          }
  
          // Hide all buttons and disable interactivity for modal items
          if (obj.opts.modal) {
            obj.opts = $.extend(true, obj.opts, {
              trapFocus: true,
              // Remove buttons
              infobar: 0,
              toolbar: 0,
  
              smallBtn: 0,
  
              // Disable keyboard navigation
              keyboard: 0,
  
              // Disable some modules
              slideShow: 0,
              fullScreen: 0,
              thumbs: 0,
              touch: 0,
  
              // Disable click event handlers
              clickContent: false,
              clickSlide: false,
              clickOutside: false,
              dblclickContent: false,
              dblclickSlide: false,
              dblclickOutside: false,
            });
          }
  
          // Step 4 - Add processed object to group
          // ======================================
  
          self.group.push(obj);
        });
  
        // Update controls if gallery is already opened
        if (Object.keys(self.slides).length) {
          self.updateControls();
  
          // Update thumbnails, if needed
          thumbs = self.Thumbs;
  
          if (thumbs && thumbs.isActive) {
            thumbs.create();
  
            thumbs.focus();
          }
        }
      },
  
      // Attach an event handler functions for:
      //   - navigation buttons
      //   - browser scrolling, resizing;
      //   - focusing
      //   - keyboard
      //   - detecting inactivity
      // ======================================
  
      addEvents: function () {
        var self = this;
  
        self.removeEvents();
  
        // Make navigation elements clickable
        // ==================================
  
        self.$refs.container
          .on("click.fb-close", "[data-fancybox-close]", function (e) {
            e.stopPropagation();
            e.preventDefault();
  
            self.close(e);
          })
          .on(
            "touchstart.fb-prev click.fb-prev",
            "[data-fancybox-prev]",
            function (e) {
              e.stopPropagation();
              e.preventDefault();
  
              self.previous();
            }
          )
          .on(
            "touchstart.fb-next click.fb-next",
            "[data-fancybox-next]",
            function (e) {
              e.stopPropagation();
              e.preventDefault();
  
              self.next();
            }
          )
          .on("click.fb", "[data-fancybox-zoom]", function (e) {
            // Click handler for zoom button
            self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
          });
  
        // Handle page scrolling and browser resizing
        // ==========================================
  
        $W.on("orientationchange.fb resize.fb", function (e) {
          if (e && e.originalEvent && e.originalEvent.type === "resize") {
            if (self.requestId) {
              cancelAFrame(self.requestId);
            }
  
            self.requestId = requestAFrame(function () {
              self.update(e);
            });
          } else {
            if (self.current && self.current.type === "iframe") {
              self.$refs.stage.hide();
            }
  
            setTimeout(
              function () {
                self.$refs.stage.show();
  
                self.update(e);
              },
              $.fancybox.isMobile ? 600 : 250
            );
          }
        });
  
        $D.on("keydown.fb", function (e) {
          var instance = $.fancybox ? $.fancybox.getInstance() : null,
            current = instance.current,
            keycode = e.keyCode || e.which;
  
          // Trap keyboard focus inside of the modal
          // =======================================
  
          if (keycode == 9) {
            if (current.opts.trapFocus) {
              self.focus(e);
            }
  
            return;
          }
  
          // Enable keyboard navigation
          // ==========================
  
          if (
            !current.opts.keyboard ||
            e.ctrlKey ||
            e.altKey ||
            e.shiftKey ||
            $(e.target).is("input,textarea,video,audio,select")
          ) {
            return;
          }
  
          // Backspace and Esc keys
          if (keycode === 8 || keycode === 27) {
            e.preventDefault();
  
            self.close(e);
  
            return;
          }
  
          // Left arrow and Up arrow
          if (keycode === 37 || keycode === 38) {
            e.preventDefault();
  
            self.previous();
  
            return;
          }
  
          // Righ arrow and Down arrow
          if (keycode === 39 || keycode === 40) {
            e.preventDefault();
  
            self.next();
  
            return;
          }
  
          self.trigger("afterKeydown", e, keycode);
        });
  
        // Hide controls after some inactivity period
        if (self.group[self.currIndex].opts.idleTime) {
          self.idleSecondsCounter = 0;
  
          $D.on(
            "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
            function (e) {
              self.idleSecondsCounter = 0;
  
              if (self.isIdle) {
                self.showControls();
              }
  
              self.isIdle = false;
            }
          );
  
          self.idleInterval = window.setInterval(function () {
            self.idleSecondsCounter++;
  
            if (
              self.idleSecondsCounter >=
                self.group[self.currIndex].opts.idleTime &&
              !self.isDragging
            ) {
              self.isIdle = true;
              self.idleSecondsCounter = 0;
  
              self.hideControls();
            }
          }, 1000);
        }
      },
  
      // Remove events added by the core
      // ===============================
  
      removeEvents: function () {
        var self = this;
  
        $W.off("orientationchange.fb resize.fb");
        $D.off("keydown.fb .fb-idle");
  
        this.$refs.container.off(".fb-close .fb-prev .fb-next");
  
        if (self.idleInterval) {
          window.clearInterval(self.idleInterval);
  
          self.idleInterval = null;
        }
      },
  
      // Change to previous gallery item
      // ===============================
  
      previous: function (duration) {
        return this.jumpTo(this.currPos - 1, duration);
      },
  
      // Change to next gallery item
      // ===========================
  
      next: function (duration) {
        return this.jumpTo(this.currPos + 1, duration);
      },
  
      // Switch to selected gallery item
      // ===============================
  
      jumpTo: function (pos, duration) {
        var self = this,
          groupLen = self.group.length,
          firstRun,
          isMoved,
          loop,
          current,
          previous,
          slidePos,
          stagePos,
          prop,
          diff;
  
        if (
          self.isDragging ||
          self.isClosing ||
          (self.isAnimating && self.firstRun)
        ) {
          return;
        }
  
        // Should loop?
        pos = parseInt(pos, 10);
        loop = self.current ? self.current.opts.loop : self.opts.loop;
  
        if (!loop && (pos < 0 || pos >= groupLen)) {
          return false;
        }
  
        // Check if opening for the first time; this helps to speed things up
        firstRun = self.firstRun = !Object.keys(self.slides).length;
  
        // Create slides
        previous = self.current;
  
        self.prevIndex = self.currIndex;
        self.prevPos = self.currPos;
  
        current = self.createSlide(pos);
  
        if (groupLen > 1) {
          if (loop || current.index < groupLen - 1) {
            self.createSlide(pos + 1);
          }
  
          if (loop || current.index > 0) {
            self.createSlide(pos - 1);
          }
        }
  
        self.current = current;
        self.currIndex = current.index;
        self.currPos = current.pos;
  
        self.trigger("beforeShow", firstRun);
  
        self.updateControls();
  
        // Validate duration length
        current.forcedDuration = undefined;
  
        if ($.isNumeric(duration)) {
          current.forcedDuration = duration;
        } else {
          duration =
            current.opts[firstRun ? "animationDuration" : "transitionDuration"];
        }
  
        duration = parseInt(duration, 10);
  
        // Check if user has swiped the slides or if still animating
        isMoved = self.isMoved(current);
  
        // Make sure current slide is visible
        current.$slide.addClass("fancybox-slide--current");
  
        // Fresh start - reveal container, current slide and start loading content
        if (firstRun) {
          if (current.opts.animationEffect && duration) {
            self.$refs.container.css("transition-duration", duration + "ms");
          }
  
          self.$refs.container.addClass("fancybox-is-open").trigger("focus");
  
          // Attempt to load content into slide
          // This will later call `afterLoad` -> `revealContent`
          self.loadSlide(current);
  
          self.preload("image");
  
          return;
        }
  
        // Get actual slide/stage positions (before cleaning up)
        slidePos = $.fancybox.getTranslate(previous.$slide);
        stagePos = $.fancybox.getTranslate(self.$refs.stage);
  
        // Clean up all slides
        $.each(self.slides, function (index, slide) {
          $.fancybox.stop(slide.$slide, true);
        });
  
        if (previous.pos !== current.pos) {
          previous.isComplete = false;
        }
  
        previous.$slide.removeClass(
          "fancybox-slide--complete fancybox-slide--current"
        );
  
        // If slides are out of place, then animate them to correct position
        if (isMoved) {
          // Calculate horizontal swipe distance
          diff =
            slidePos.left -
            (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);
  
          $.each(self.slides, function (index, slide) {
            slide.$slide
              .removeClass("fancybox-animated")
              .removeClass(function (index, className) {
                return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                  " "
                );
              });
  
            // Make sure that each slide is in equal distance
            // This is mostly needed for freshly added slides, because they are not yet positioned
            var leftPos =
              slide.pos * slidePos.width + slide.pos * slide.opts.gutter;
  
            $.fancybox.setTranslate(slide.$slide, {
              top: 0,
              left: leftPos - stagePos.left + diff,
            });
  
            if (slide.pos !== current.pos) {
              slide.$slide.addClass(
                "fancybox-slide--" +
                  (slide.pos > current.pos ? "next" : "previous")
              );
            }
  
            // Redraw to make sure that transition will start
            forceRedraw(slide.$slide);
  
            // Animate the slide
            $.fancybox.animate(
              slide.$slide,
              {
                top: 0,
                left:
                  (slide.pos - current.pos) * slidePos.width +
                  (slide.pos - current.pos) * slide.opts.gutter,
              },
              duration,
              function () {
                slide.$slide
                  .css({
                    transform: "",
                    opacity: "",
                  })
                  .removeClass("fancybox-slide--next fancybox-slide--previous");
  
                if (slide.pos === self.currPos) {
                  self.complete();
                }
              }
            );
          });
        } else if (duration && current.opts.transitionEffect) {
          // Set transition effect for previously active slide
          prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;
  
          previous.$slide.addClass(
            "fancybox-slide--" +
              (previous.pos > current.pos ? "next" : "previous")
          );
  
          $.fancybox.animate(
            previous.$slide,
            prop,
            duration,
            function () {
              previous.$slide
                .removeClass(prop)
                .removeClass("fancybox-slide--next fancybox-slide--previous");
            },
            false
          );
        }
  
        if (current.isLoaded) {
          self.revealContent(current);
        } else {
          self.loadSlide(current);
        }
  
        self.preload("image");
      },
  
      // Create new "slide" element
      // These are gallery items  that are actually added to DOM
      // =======================================================
  
      createSlide: function (pos) {
        var self = this,
          $slide,
          index;
  
        index = pos % self.group.length;
        index = index < 0 ? self.group.length + index : index;
  
        if (!self.slides[pos] && self.group[index]) {
          $slide = $('<div class="fancybox-slide"></div>').appendTo(
            self.$refs.stage
          );
  
          self.slides[pos] = $.extend(true, {}, self.group[index], {
            pos: pos,
            $slide: $slide,
            isLoaded: false,
          });
  
          self.updateSlide(self.slides[pos]);
        }
  
        return self.slides[pos];
      },
  
      // Scale image to the actual size of the image;
      // x and y values should be relative to the slide
      // ==============================================
  
      scaleToActual: function (x, y, duration) {
        var self = this,
          current = self.current,
          $content = current.$content,
          canvasWidth = $.fancybox.getTranslate(current.$slide).width,
          canvasHeight = $.fancybox.getTranslate(current.$slide).height,
          newImgWidth = current.width,
          newImgHeight = current.height,
          imgPos,
          posX,
          posY,
          scaleX,
          scaleY;
  
        if (
          self.isAnimating ||
          self.isMoved() ||
          !$content ||
          !(current.type == "image" && current.isLoaded && !current.hasError)
        ) {
          return;
        }
  
        self.isAnimating = true;
  
        $.fancybox.stop($content);
  
        x = x === undefined ? canvasWidth * 0.5 : x;
        y = y === undefined ? canvasHeight * 0.5 : y;
  
        imgPos = $.fancybox.getTranslate($content);
  
        imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
        imgPos.left -= $.fancybox.getTranslate(current.$slide).left;
  
        scaleX = newImgWidth / imgPos.width;
        scaleY = newImgHeight / imgPos.height;
  
        // Get center position for original image
        posX = canvasWidth * 0.5 - newImgWidth * 0.5;
        posY = canvasHeight * 0.5 - newImgHeight * 0.5;
  
        // Make sure image does not move away from edges
        if (newImgWidth > canvasWidth) {
          posX = imgPos.left * scaleX - (x * scaleX - x);
  
          if (posX > 0) {
            posX = 0;
          }
  
          if (posX < canvasWidth - newImgWidth) {
            posX = canvasWidth - newImgWidth;
          }
        }
  
        if (newImgHeight > canvasHeight) {
          posY = imgPos.top * scaleY - (y * scaleY - y);
  
          if (posY > 0) {
            posY = 0;
          }
  
          if (posY < canvasHeight - newImgHeight) {
            posY = canvasHeight - newImgHeight;
          }
        }
  
        self.updateCursor(newImgWidth, newImgHeight);
  
        $.fancybox.animate(
          $content,
          {
            top: posY,
            left: posX,
            scaleX: scaleX,
            scaleY: scaleY,
          },
          duration || 366,
          function () {
            self.isAnimating = false;
          }
        );
  
        // Stop slideshow
        if (self.SlideShow && self.SlideShow.isActive) {
          self.SlideShow.stop();
        }
      },
  
      // Scale image to fit inside parent element
      // ========================================
  
      scaleToFit: function (duration) {
        var self = this,
          current = self.current,
          $content = current.$content,
          end;
  
        if (
          self.isAnimating ||
          self.isMoved() ||
          !$content ||
          !(current.type == "image" && current.isLoaded && !current.hasError)
        ) {
          return;
        }
  
        self.isAnimating = true;
  
        $.fancybox.stop($content);
  
        end = self.getFitPos(current);
  
        self.updateCursor(end.width, end.height);
  
        $.fancybox.animate(
          $content,
          {
            top: end.top,
            left: end.left,
            scaleX: end.width / $content.width(),
            scaleY: end.height / $content.height(),
          },
          duration || 366,
          function () {
            self.isAnimating = false;
          }
        );
      },
  
      // Calculate image size to fit inside viewport
      // ===========================================
  
      getFitPos: function (slide) {
        var self = this,
          $content = slide.$content,
          $slide = slide.$slide,
          width = slide.width || slide.opts.width,
          height = slide.height || slide.opts.height,
          maxWidth,
          maxHeight,
          minRatio,
          aspectRatio,
          rez = {};
  
        if (!slide.isLoaded || !$content || !$content.length) {
          return false;
        }
  
        maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
        maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;
  
        maxWidth -=
          parseFloat($slide.css("paddingLeft")) +
          parseFloat($slide.css("paddingRight")) +
          parseFloat($content.css("marginLeft")) +
          parseFloat($content.css("marginRight"));
  
        maxHeight -=
          parseFloat($slide.css("paddingTop")) +
          parseFloat($slide.css("paddingBottom")) +
          parseFloat($content.css("marginTop")) +
          parseFloat($content.css("marginBottom"));
  
        if (!width || !height) {
          width = maxWidth;
          height = maxHeight;
        }
  
        minRatio = Math.min(1, maxWidth / width, maxHeight / height);
  
        width = minRatio * width;
        height = minRatio * height;
  
        // Adjust width/height to precisely fit into container
        if (width > maxWidth - 0.5) {
          width = maxWidth;
        }
  
        if (height > maxHeight - 0.5) {
          height = maxHeight;
        }
  
        if (slide.type === "image") {
          rez.top =
            Math.floor((maxHeight - height) * 0.5) +
            parseFloat($slide.css("paddingTop"));
          rez.left =
            Math.floor((maxWidth - width) * 0.5) +
            parseFloat($slide.css("paddingLeft"));
        } else if (slide.contentType === "video") {
          // Force aspect ratio for the video
          // "I say the whole world must learn of our peaceful ways… by force!"
          aspectRatio =
            slide.opts.width && slide.opts.height
              ? width / height
              : slide.opts.ratio || 16 / 9;
  
          if (height > width / aspectRatio) {
            height = width / aspectRatio;
          } else if (width > height * aspectRatio) {
            width = height * aspectRatio;
          }
        }
  
        rez.width = width;
        rez.height = height;
  
        return rez;
      },
  
      // Update content size and position for all slides
      // ==============================================
  
      update: function (e) {
        var self = this;
  
        $.each(self.slides, function (key, slide) {
          self.updateSlide(slide, e);
        });
      },
  
      // Update slide content position and size
      // ======================================
  
      updateSlide: function (slide, e) {
        var self = this,
          $content = slide && slide.$content,
          width = slide.width || slide.opts.width,
          height = slide.height || slide.opts.height,
          $slide = slide.$slide;
  
        // First, prevent caption overlap, if needed
        self.adjustCaption(slide);
  
        // Then resize content to fit inside the slide
        if (
          $content &&
          (width || height || slide.contentType === "video") &&
          !slide.hasError
        ) {
          $.fancybox.stop($content);
  
          $.fancybox.setTranslate($content, self.getFitPos(slide));
  
          if (slide.pos === self.currPos) {
            self.isAnimating = false;
  
            self.updateCursor();
          }
        }
  
        // Then some adjustments
        self.adjustLayout(slide);
  
        if ($slide.length) {
          $slide.trigger("refresh");
  
          if (slide.pos === self.currPos) {
            self.$refs.toolbar
              .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
              .toggleClass(
                "compensate-for-scrollbar",
                $slide.get(0).scrollHeight > $slide.get(0).clientHeight
              );
          }
        }
  
        self.trigger("onUpdate", slide, e);
      },
  
      // Horizontally center slide
      // =========================
  
      centerSlide: function (duration) {
        var self = this,
          current = self.current,
          $slide = current.$slide;
  
        if (self.isClosing || !current) {
          return;
        }
  
        $slide.siblings().css({
          transform: "",
          opacity: "",
        });
  
        $slide
          .parent()
          .children()
          .removeClass("fancybox-slide--previous fancybox-slide--next");
  
        $.fancybox.animate(
          $slide,
          {
            top: 0,
            left: 0,
            opacity: 1,
          },
          duration === undefined ? 0 : duration,
          function () {
            // Clean up
            $slide.css({
              transform: "",
              opacity: "",
            });
  
            if (!current.isComplete) {
              self.complete();
            }
          },
          false
        );
      },
  
      // Check if current slide is moved (swiped)
      // ========================================
  
      isMoved: function (slide) {
        var current = slide || this.current,
          slidePos,
          stagePos;
  
        if (!current) {
          return false;
        }
  
        stagePos = $.fancybox.getTranslate(this.$refs.stage);
        slidePos = $.fancybox.getTranslate(current.$slide);
  
        return (
          !current.$slide.hasClass("fancybox-animated") &&
          (Math.abs(slidePos.top - stagePos.top) > 0.5 ||
            Math.abs(slidePos.left - stagePos.left) > 0.5)
        );
      },
  
      // Update cursor style depending if content can be zoomed
      // ======================================================
  
      updateCursor: function (nextWidth, nextHeight) {
        var self = this,
          current = self.current,
          $container = self.$refs.container,
          canPan,
          isZoomable;
  
        if (!current || self.isClosing || !self.Guestures) {
          return;
        }
  
        $container.removeClass(
          "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
        );
  
        canPan = self.canPan(nextWidth, nextHeight);
  
        isZoomable = canPan ? true : self.isZoomable();
  
        $container.toggleClass("fancybox-is-zoomable", isZoomable);
  
        $("[data-fancybox-zoom]").prop("disabled", !isZoomable);
  
        if (canPan) {
          $container.addClass("fancybox-can-pan");
        } else if (
          isZoomable &&
          (current.opts.clickContent === "zoom" ||
            ($.isFunction(current.opts.clickContent) &&
              current.opts.clickContent(current) == "zoom"))
        ) {
          $container.addClass("fancybox-can-zoomIn");
        } else if (
          current.opts.touch &&
          (current.opts.touch.vertical || self.group.length > 1) &&
          current.contentType !== "video"
        ) {
          $container.addClass("fancybox-can-swipe");
        }
      },
  
      // Check if current slide is zoomable
      // ==================================
  
      isZoomable: function () {
        var self = this,
          current = self.current,
          fitPos;
  
        // Assume that slide is zoomable if:
        //   - image is still loading
        //   - actual size of the image is smaller than available area
        if (
          current &&
          !self.isClosing &&
          current.type === "image" &&
          !current.hasError
        ) {
          if (!current.isLoaded) {
            return true;
          }
  
          fitPos = self.getFitPos(current);
  
          if (
            fitPos &&
            (current.width > fitPos.width || current.height > fitPos.height)
          ) {
            return true;
          }
        }
  
        return false;
      },
  
      // Check if current image dimensions are smaller than actual
      // =========================================================
  
      isScaledDown: function (nextWidth, nextHeight) {
        var self = this,
          rez = false,
          current = self.current,
          $content = current.$content;
  
        if (nextWidth !== undefined && nextHeight !== undefined) {
          rez = nextWidth < current.width && nextHeight < current.height;
        } else if ($content) {
          rez = $.fancybox.getTranslate($content);
          rez = rez.width < current.width && rez.height < current.height;
        }
  
        return rez;
      },
  
      // Check if image dimensions exceed parent element
      // ===============================================
  
      canPan: function (nextWidth, nextHeight) {
        var self = this,
          current = self.current,
          pos = null,
          rez = false;
  
        if (
          current.type === "image" &&
          (current.isComplete || (nextWidth && nextHeight)) &&
          !current.hasError
        ) {
          rez = self.getFitPos(current);
  
          if (nextWidth !== undefined && nextHeight !== undefined) {
            pos = {
              width: nextWidth,
              height: nextHeight,
            };
          } else if (current.isComplete) {
            pos = $.fancybox.getTranslate(current.$content);
          }
  
          if (pos && rez) {
            rez =
              Math.abs(pos.width - rez.width) > 1.5 ||
              Math.abs(pos.height - rez.height) > 1.5;
          }
        }
  
        return rez;
      },
  
      // Load content into the slide
      // ===========================
  
      loadSlide: function (slide) {
        var self = this,
          type,
          $slide,
          ajaxLoad;
  
        if (slide.isLoading || slide.isLoaded) {
          return;
        }
  
        slide.isLoading = true;
  
        if (self.trigger("beforeLoad", slide) === false) {
          slide.isLoading = false;
  
          return false;
        }
  
        type = slide.type;
        $slide = slide.$slide;
  
        $slide.off("refresh").trigger("onReset").addClass(slide.opts.slideClass);
  
        // Create content depending on the type
        switch (type) {
          case "image":
            self.setImage(slide);
  
            break;
  
          case "iframe":
            self.setIframe(slide);
  
            break;
  
          case "html":
            self.setContent(slide, slide.src || slide.content);
  
            break;
  
          case "video":
            self.setContent(
              slide,
              slide.opts.video.tpl
                .replace(/\{\{src\}\}/gi, slide.src)
                .replace(
                  "{{format}}",
                  slide.opts.videoFormat || slide.opts.video.format || ""
                )
                .replace("{{poster}}", slide.thumb || "")
            );
  
            break;
  
          case "inline":
            if ($(slide.src).length) {
              self.setContent(slide, $(slide.src));
            } else {
              self.setError(slide);
            }
  
            break;
  
          case "ajax":
            self.showLoading(slide);
  
            ajaxLoad = $.ajax(
              $.extend({}, slide.opts.ajax.settings, {
                url: slide.src,
                success: function (data, textStatus) {
                  if (textStatus === "success") {
                    self.setContent(slide, data);
                  }
                },
                error: function (jqXHR, textStatus) {
                  if (jqXHR && textStatus !== "abort") {
                    self.setError(slide);
                  }
                },
              })
            );
  
            $slide.one("onReset", function () {
              ajaxLoad.abort();
            });
  
            break;
  
          default:
            self.setError(slide);
  
            break;
        }
  
        return true;
      },
  
      // Use thumbnail image, if possible
      // ================================
  
      setImage: function (slide) {
        var self = this,
          ghost;
  
        // Check if need to show loading icon
        setTimeout(function () {
          var $img = slide.$image;
  
          if (
            !self.isClosing &&
            slide.isLoading &&
            (!$img || !$img.length || !$img[0].complete) &&
            !slide.hasError
          ) {
            self.showLoading(slide);
          }
        }, 50);
  
        //Check if image has srcset
        self.checkSrcset(slide);
  
        // This will be wrapper containing both ghost and actual image
        slide.$content = $('<div class="fancybox-content"></div>')
          .addClass("fancybox-is-hidden")
          .appendTo(slide.$slide.addClass("fancybox-slide--image"));
  
        // If we have a thumbnail, we can display it while actual image is loading
        // Users will not stare at black screen and actual image will appear gradually
        if (
          slide.opts.preload !== false &&
          slide.opts.width &&
          slide.opts.height &&
          slide.thumb
        ) {
          slide.width = slide.opts.width;
          slide.height = slide.opts.height;
  
          ghost = document.createElement("img");
  
          ghost.onerror = function () {
            $(this).remove();
  
            slide.$ghost = null;
          };
  
          ghost.onload = function () {
            self.afterLoad(slide);
          };
  
          slide.$ghost = $(ghost)
            .addClass("fancybox-image")
            .appendTo(slide.$content)
            .attr("src", slide.thumb);
        }
  
        // Start loading actual image
        self.setBigImage(slide);
      },
  
      // Check if image has srcset and get the source
      // ============================================
      checkSrcset: function (slide) {
        var srcset = slide.opts.srcset || slide.opts.image.srcset,
          found,
          temp,
          pxRatio,
          windowWidth;
  
        // If we have "srcset", then we need to find first matching "src" value.
        // This is necessary, because when you set an src attribute, the browser will preload the image
        // before any javascript or even CSS is applied.
        if (srcset) {
          pxRatio = window.devicePixelRatio || 1;
          windowWidth = window.innerWidth * pxRatio;
  
          temp = srcset.split(",").map(function (el) {
            var ret = {};
  
            el.trim()
              .split(/\s+/)
              .forEach(function (el, i) {
                var value = parseInt(el.substring(0, el.length - 1), 10);
  
                if (i === 0) {
                  return (ret.url = el);
                }
  
                if (value) {
                  ret.value = value;
                  ret.postfix = el[el.length - 1];
                }
              });
  
            return ret;
          });
  
          // Sort by value
          temp.sort(function (a, b) {
            return a.value - b.value;
          });
  
          // Ok, now we have an array of all srcset values
          for (var j = 0; j < temp.length; j++) {
            var el = temp[j];
  
            if (
              (el.postfix === "w" && el.value >= windowWidth) ||
              (el.postfix === "x" && el.value >= pxRatio)
            ) {
              found = el;
              break;
            }
          }
  
          // If not found, take the last one
          if (!found && temp.length) {
            found = temp[temp.length - 1];
          }
  
          if (found) {
            slide.src = found.url;
  
            // If we have default width/height values, we can calculate height for matching source
            if (slide.width && slide.height && found.postfix == "w") {
              slide.height = (slide.width / slide.height) * found.value;
              slide.width = found.value;
            }
  
            slide.opts.srcset = srcset;
          }
        }
      },
  
      // Create full-size image
      // ======================
  
      setBigImage: function (slide) {
        var self = this,
          img = document.createElement("img"),
          $img = $(img);
  
        slide.$image = $img
          .one("error", function () {
            self.setError(slide);
          })
          .one("load", function () {
            var sizes;
  
            if (!slide.$ghost) {
              self.resolveImageSlideSize(
                slide,
                this.naturalWidth,
                this.naturalHeight
              );
  
              self.afterLoad(slide);
            }
  
            if (self.isClosing) {
              return;
            }
  
            if (slide.opts.srcset) {
              sizes = slide.opts.sizes;
  
              if (!sizes || sizes === "auto") {
                sizes =
                  (slide.width / slide.height > 1 && $W.width() / $W.height() > 1
                    ? "100"
                    : Math.round((slide.width / slide.height) * 100)) + "vw";
              }
  
              $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
            }
  
            // Hide temporary image after some delay
            if (slide.$ghost) {
              setTimeout(function () {
                if (slide.$ghost && !self.isClosing) {
                  slide.$ghost.hide();
                }
              }, Math.min(300, Math.max(1000, slide.height / 1600)));
            }
  
            self.hideLoading(slide);
          })
          .addClass("fancybox-image")
          .attr("src", slide.src)
          .appendTo(slide.$content);
  
        if (
          (img.complete || img.readyState == "complete") &&
          $img.naturalWidth &&
          $img.naturalHeight
        ) {
          $img.trigger("load");
        } else if (img.error) {
          $img.trigger("error");
        }
      },
  
      // Computes the slide size from image size and maxWidth/maxHeight
      // ==============================================================
  
      resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
        var maxWidth = parseInt(slide.opts.width, 10),
          maxHeight = parseInt(slide.opts.height, 10);
  
        // Sets the default values from the image
        slide.width = imgWidth;
        slide.height = imgHeight;
  
        if (maxWidth > 0) {
          slide.width = maxWidth;
          slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
        }
  
        if (maxHeight > 0) {
          slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
          slide.height = maxHeight;
        }
      },
  
      // Create iframe wrapper, iframe and bindings
      // ==========================================
  
      setIframe: function (slide) {
        var self = this,
          opts = slide.opts.iframe,
          $slide = slide.$slide,
          $iframe;
  
        slide.$content = $(
          '<div class="fancybox-content' +
            (opts.preload ? " fancybox-is-hidden" : "") +
            '"></div>'
        )
          .css(opts.css)
          .appendTo($slide);
  
        $slide.addClass("fancybox-slide--" + slide.contentType);
  
        slide.$iframe = $iframe = $(
          opts.tpl.replace(/\{rnd\}/g, new Date().getTime())
        )
          .attr(opts.attr)
          .appendTo(slide.$content);
  
        if (opts.preload) {
          self.showLoading(slide);
  
          // Unfortunately, it is not always possible to determine if iframe is successfully loaded
          // (due to browser security policy)
  
          $iframe.on("load.fb error.fb", function (e) {
            this.isReady = 1;
  
            slide.$slide.trigger("refresh");
  
            self.afterLoad(slide);
          });
  
          // Recalculate iframe content size
          // ===============================
  
          $slide.on("refresh.fb", function () {
            var $content = slide.$content,
              frameWidth = opts.css.width,
              frameHeight = opts.css.height,
              $contents,
              $body;
  
            if ($iframe[0].isReady !== 1) {
              return;
            }
  
            try {
              $contents = $iframe.contents();
              $body = $contents.find("body");
            } catch (ignore) {}
  
            // Calculate content dimensions, if it is accessible
            if ($body && $body.length && $body.children().length) {
              // Avoid scrolling to top (if multiple instances)
              $slide.css("overflow", "visible");
  
              $content.css({
                width: "100%",
                "max-width": "100%",
                height: "9999px",
              });
  
              if (frameWidth === undefined) {
                frameWidth = Math.ceil(
                  Math.max($body[0].clientWidth, $body.outerWidth(true))
                );
              }
  
              $content
                .css("width", frameWidth ? frameWidth : "")
                .css("max-width", "");
  
              if (frameHeight === undefined) {
                frameHeight = Math.ceil(
                  Math.max($body[0].clientHeight, $body.outerHeight(true))
                );
              }
  
              $content.css("height", frameHeight ? frameHeight : "");
  
              $slide.css("overflow", "auto");
            }
  
            $content.removeClass("fancybox-is-hidden");
          });
        } else {
          self.afterLoad(slide);
        }
  
        $iframe.attr("src", slide.src);
  
        // Remove iframe if closing or changing gallery item
        $slide.one("onReset", function () {
          // This helps IE not to throw errors when closing
          try {
            $(this).find("iframe").hide().unbind().attr("src", "//about:blank");
          } catch (ignore) {}
  
          $(this).off("refresh.fb").empty();
  
          slide.isLoaded = false;
          slide.isRevealed = false;
        });
      },
  
      // Wrap and append content to the slide
      // ======================================
  
      setContent: function (slide, content) {
        var self = this;
  
        if (self.isClosing) {
          return;
        }
  
        self.hideLoading(slide);
  
        if (slide.$content) {
          $.fancybox.stop(slide.$content);
        }
  
        slide.$slide.empty();
  
        // If content is a jQuery object, then it will be moved to the slide.
        // The placeholder is created so we will know where to put it back.
        if (isQuery(content) && content.parent().length) {
          // Make sure content is not already moved to fancyBox
          if (
            content.hasClass("fancybox-content") ||
            content.parent().hasClass("fancybox-content")
          ) {
            content.parents(".fancybox-slide").trigger("onReset");
          }
  
          // Create temporary element marking original place of the content
          slide.$placeholder = $("<div>").hide().insertAfter(content);
  
          // Make sure content is visible
          content.css("display", "inline-block");
        } else if (!slide.hasError) {
          // If content is just a plain text, try to convert it to html
          if ($.type(content) === "string") {
            content = $("<div>").append($.trim(content)).contents();
          }
  
          // If "filter" option is provided, then filter content
          if (slide.opts.filter) {
            content = $("<div>").html(content).find(slide.opts.filter);
          }
        }
  
        slide.$slide.one("onReset", function () {
          // Pause all html5 video/audio
          $(this).find("video,audio").trigger("pause");
  
          // Put content back
          if (slide.$placeholder) {
            slide.$placeholder
              .after(content.removeClass("fancybox-content").hide())
              .remove();
  
            slide.$placeholder = null;
          }
  
          // Remove custom close button
          if (slide.$smallBtn) {
            slide.$smallBtn.remove();
  
            slide.$smallBtn = null;
          }
  
          // Remove content and mark slide as not loaded
          if (!slide.hasError) {
            $(this).empty();
  
            slide.isLoaded = false;
            slide.isRevealed = false;
          }
        });
  
        $(content).appendTo(slide.$slide);
  
        if ($(content).is("video,audio")) {
          $(content).addClass("fancybox-video");
  
          $(content).wrap("<div></div>");
  
          slide.contentType = "video";
  
          slide.opts.width = slide.opts.width || $(content).attr("width");
          slide.opts.height = slide.opts.height || $(content).attr("height");
        }
  
        slide.$content = slide.$slide
          .children()
          .filter("div,form,main,video,audio,article,.fancybox-content")
          .first();
  
        slide.$content.siblings().hide();
  
        // Re-check if there is a valid content
        // (in some cases, ajax response can contain various elements or plain text)
        if (!slide.$content.length) {
          slide.$content = slide.$slide
            .wrapInner("<div></div>")
            .children()
            .first();
        }
  
        slide.$content.addClass("fancybox-content");
  
        slide.$slide.addClass("fancybox-slide--" + slide.contentType);
  
        self.afterLoad(slide);
      },
  
      // Display error message
      // =====================
  
      setError: function (slide) {
        slide.hasError = true;
  
        slide.$slide
          .trigger("onReset")
          .removeClass("fancybox-slide--" + slide.contentType)
          .addClass("fancybox-slide--error");
  
        slide.contentType = "html";
  
        this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
  
        if (slide.pos === this.currPos) {
          this.isAnimating = false;
        }
      },
  
      // Show loading icon inside the slide
      // ==================================
  
      showLoading: function (slide) {
        var self = this;
  
        slide = slide || self.current;
  
        if (slide && !slide.$spinner) {
          slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
            .appendTo(slide.$slide)
            .hide()
            .fadeIn("fast");
        }
      },
  
      // Remove loading icon from the slide
      // ==================================
  
      hideLoading: function (slide) {
        var self = this;
  
        slide = slide || self.current;
  
        if (slide && slide.$spinner) {
          slide.$spinner.stop().remove();
  
          delete slide.$spinner;
        }
      },
  
      // Adjustments after slide content has been loaded
      // ===============================================
  
      afterLoad: function (slide) {
        var self = this;
  
        if (self.isClosing) {
          return;
        }
  
        slide.isLoading = false;
        slide.isLoaded = true;
  
        self.trigger("afterLoad", slide);
  
        self.hideLoading(slide);
  
        // Add small close button
        if (
          slide.opts.smallBtn &&
          (!slide.$smallBtn || !slide.$smallBtn.length)
        ) {
          slide.$smallBtn = $(
            self.translate(slide, slide.opts.btnTpl.smallBtn)
          ).appendTo(slide.$content);
        }
  
        // Disable right click
        if (slide.opts.protect && slide.$content && !slide.hasError) {
          slide.$content.on("contextmenu.fb", function (e) {
            if (e.button == 2) {
              e.preventDefault();
            }
  
            return true;
          });
  
          // Add fake element on top of the image
          // This makes a bit harder for user to select image
          if (slide.type === "image") {
            $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
          }
        }
  
        self.adjustCaption(slide);
  
        self.adjustLayout(slide);
  
        if (slide.pos === self.currPos) {
          self.updateCursor();
        }
  
        self.revealContent(slide);
      },
  
      // Prevent caption overlap,
      // fix css inconsistency across browsers
      // =====================================
  
      adjustCaption: function (slide) {
        var self = this,
          current = slide || self.current,
          caption = current.opts.caption,
          preventOverlap = current.opts.preventCaptionOverlap,
          $caption = self.$refs.caption,
          $clone,
          captionH = false;
  
        $caption.toggleClass("fancybox-caption--separate", preventOverlap);
  
        if (preventOverlap && caption && caption.length) {
          if (current.pos !== self.currPos) {
            $clone = $caption.clone().appendTo($caption.parent());
  
            $clone.children().eq(0).empty().html(caption);
  
            captionH = $clone.outerHeight(true);
  
            $clone.empty().remove();
          } else if (self.$caption) {
            captionH = self.$caption.outerHeight(true);
          }
  
          current.$slide.css("padding-bottom", captionH || "");
        }
      },
  
      // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
      // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
      // ====================================================================================
  
      adjustLayout: function (slide) {
        var self = this,
          current = slide || self.current,
          scrollHeight,
          marginBottom,
          inlinePadding,
          actualPadding;
  
        if (current.isLoaded && current.opts.disableLayoutFix !== true) {
          current.$content.css("margin-bottom", "");
  
          // If we would always set margin-bottom for the content,
          // then it would potentially break vertical align
          if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
            inlinePadding = current.$slide[0].style["padding-bottom"];
            actualPadding = current.$slide.css("padding-bottom");
  
            if (parseFloat(actualPadding) > 0) {
              scrollHeight = current.$slide[0].scrollHeight;
  
              current.$slide.css("padding-bottom", 0);
  
              if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
                marginBottom = actualPadding;
              }
  
              current.$slide.css("padding-bottom", inlinePadding);
            }
          }
  
          current.$content.css("margin-bottom", marginBottom);
        }
      },
  
      // Make content visible
      // This method is called right after content has been loaded or
      // user navigates gallery and transition should start
      // ============================================================
  
      revealContent: function (slide) {
        var self = this,
          $slide = slide.$slide,
          end = false,
          start = false,
          isMoved = self.isMoved(slide),
          isRevealed = slide.isRevealed,
          effect,
          effectClassName,
          duration,
          opacity;
  
        slide.isRevealed = true;
  
        effect =
          slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
        duration =
          slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];
  
        duration = parseInt(
          slide.forcedDuration === undefined ? duration : slide.forcedDuration,
          10
        );
  
        if (isMoved || slide.pos !== self.currPos || !duration) {
          effect = false;
        }
  
        // Check if can zoom
        if (effect === "zoom") {
          if (
            slide.pos === self.currPos &&
            duration &&
            slide.type === "image" &&
            !slide.hasError &&
            (start = self.getThumbPos(slide))
          ) {
            end = self.getFitPos(slide);
          } else {
            effect = "fade";
          }
        }
  
        // Zoom animation
        // ==============
        if (effect === "zoom") {
          self.isAnimating = true;
  
          end.scaleX = end.width / start.width;
          end.scaleY = end.height / start.height;
  
          // Check if we need to animate opacity
          opacity = slide.opts.zoomOpacity;
  
          if (opacity == "auto") {
            opacity =
              Math.abs(slide.width / slide.height - start.width / start.height) >
              0.1;
          }
  
          if (opacity) {
            start.opacity = 0.1;
            end.opacity = 1;
          }
  
          // Draw image at start position
          $.fancybox.setTranslate(
            slide.$content.removeClass("fancybox-is-hidden"),
            start
          );
  
          forceRedraw(slide.$content);
  
          // Start animation
          $.fancybox.animate(slide.$content, end, duration, function () {
            self.isAnimating = false;
  
            self.complete();
          });
  
          return;
        }
  
        self.updateSlide(slide);
  
        // Simply show content if no effect
        // ================================
        if (!effect) {
          slide.$content.removeClass("fancybox-is-hidden");
  
          if (
            !isRevealed &&
            isMoved &&
            slide.type === "image" &&
            !slide.hasError
          ) {
            slide.$content.hide().fadeIn("fast");
          }
  
          if (slide.pos === self.currPos) {
            self.complete();
          }
  
          return;
        }
  
        // Prepare for CSS transiton
        // =========================
        $.fancybox.stop($slide);
  
        //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
        effectClassName =
          "fancybox-slide--" +
          (slide.pos >= self.prevPos ? "next" : "previous") +
          " fancybox-animated fancybox-fx-" +
          effect;
  
        $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);
  
        slide.$content.removeClass("fancybox-is-hidden");
  
        // Force reflow
        forceRedraw($slide);
  
        if (slide.type !== "image") {
          slide.$content.hide().show(0);
        }
  
        $.fancybox.animate(
          $slide,
          "fancybox-slide--current",
          duration,
          function () {
            $slide.removeClass(effectClassName).css({
              transform: "",
              opacity: "",
            });
  
            if (slide.pos === self.currPos) {
              self.complete();
            }
          },
          true
        );
      },
  
      // Check if we can and have to zoom from thumbnail
      //================================================
  
      getThumbPos: function (slide) {
        var rez = false,
          $thumb = slide.$thumb,
          thumbPos,
          btw,
          brw,
          bbw,
          blw;
  
        if (!$thumb || !inViewport($thumb[0])) {
          return false;
        }
  
        thumbPos = $.fancybox.getTranslate($thumb);
  
        btw = parseFloat($thumb.css("border-top-width") || 0);
        brw = parseFloat($thumb.css("border-right-width") || 0);
        bbw = parseFloat($thumb.css("border-bottom-width") || 0);
        blw = parseFloat($thumb.css("border-left-width") || 0);
  
        rez = {
          top: thumbPos.top + btw,
          left: thumbPos.left + blw,
          width: thumbPos.width - brw - blw,
          height: thumbPos.height - btw - bbw,
          scaleX: 1,
          scaleY: 1,
        };
  
        return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
      },
  
      // Final adjustments after current gallery item is moved to position
      // and it`s content is loaded
      // ==================================================================
  
      complete: function () {
        var self = this,
          current = self.current,
          slides = {},
          $el;
  
        if (self.isMoved() || !current.isLoaded) {
          return;
        }
  
        if (!current.isComplete) {
          current.isComplete = true;
  
          current.$slide.siblings().trigger("onReset");
  
          self.preload("inline");
  
          // Trigger any CSS transiton inside the slide
          forceRedraw(current.$slide);
  
          current.$slide.addClass("fancybox-slide--complete");
  
          // Remove unnecessary slides
          $.each(self.slides, function (key, slide) {
            if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
              slides[slide.pos] = slide;
            } else if (slide) {
              $.fancybox.stop(slide.$slide);
  
              slide.$slide.off().remove();
            }
          });
  
          self.slides = slides;
        }
  
        self.isAnimating = false;
  
        self.updateCursor();
  
        self.trigger("afterShow");
  
        // Autoplay first html5 video/audio
        if (!!current.opts.video.autoStart) {
          current.$slide
            .find("video,audio")
            .filter(":visible:first")
            .trigger("play")
            .one("ended", function () {
              if (Document.exitFullscreen) {
                Document.exitFullscreen();
              } else if (this.webkitExitFullscreen) {
                this.webkitExitFullscreen();
              }
  
              self.next();
            });
        }
  
        // Try to focus on the first focusable element
        if (current.opts.autoFocus && current.contentType === "html") {
          // Look for the first input with autofocus attribute
          $el = current.$content.find("input[autofocus]:enabled:visible:first");
  
          if ($el.length) {
            $el.trigger("focus");
          } else {
            self.focus(null, true);
          }
        }
  
        // Avoid jumping
        current.$slide.scrollTop(0).scrollLeft(0);
      },
  
      // Preload next and previous slides
      // ================================
  
      preload: function (type) {
        var self = this,
          prev,
          next;
  
        if (self.group.length < 2) {
          return;
        }
  
        next = self.slides[self.currPos + 1];
        prev = self.slides[self.currPos - 1];
  
        if (prev && prev.type === type) {
          self.loadSlide(prev);
        }
  
        if (next && next.type === type) {
          self.loadSlide(next);
        }
      },
  
      // Try to find and focus on the first focusable element
      // ====================================================
  
      focus: function (e, firstRun) {
        var self = this,
          focusableStr = [
            "a[href]",
            "area[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "button:not([disabled]):not([aria-hidden])",
            "iframe",
            "object",
            "embed",
            "video",
            "audio",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ].join(","),
          focusableItems,
          focusedItemIndex;
  
        if (self.isClosing) {
          return;
        }
  
        if (e || !self.current || !self.current.isComplete) {
          // Focus on any element inside fancybox
          focusableItems = self.$refs.container.find("*:visible");
        } else {
          // Focus inside current slide
          focusableItems = self.current.$slide.find(
            "*:visible" + (firstRun ? ":not(.fancybox-close-small)" : "")
          );
        }
  
        focusableItems = focusableItems.filter(focusableStr).filter(function () {
          return (
            $(this).css("visibility") !== "hidden" &&
            !$(this).hasClass("disabled")
          );
        });
  
        if (focusableItems.length) {
          focusedItemIndex = focusableItems.index(document.activeElement);
  
          if (e && e.shiftKey) {
            // Back tab
            if (focusedItemIndex < 0 || focusedItemIndex == 0) {
              e.preventDefault();
  
              focusableItems.eq(focusableItems.length - 1).trigger("focus");
            }
          } else {
            // Outside or Forward tab
            if (
              focusedItemIndex < 0 ||
              focusedItemIndex == focusableItems.length - 1
            ) {
              if (e) {
                e.preventDefault();
              }
  
              focusableItems.eq(0).trigger("focus");
            }
          }
        } else {
          self.$refs.container.trigger("focus");
        }
      },
  
      // Activates current instance - brings container to the front and enables keyboard,
      // notifies other instances about deactivating
      // =================================================================================
  
      activate: function () {
        var self = this;
  
        // Deactivate all instances
        $(".fancybox-container").each(function () {
          var instance = $(this).data("FancyBox");
  
          // Skip self and closing instances
          if (instance && instance.id !== self.id && !instance.isClosing) {
            instance.trigger("onDeactivate");
  
            instance.removeEvents();
  
            instance.isVisible = false;
          }
        });
  
        self.isVisible = true;
  
        if (self.current || self.isIdle) {
          self.update();
  
          self.updateControls();
        }
  
        self.trigger("onActivate");
  
        self.addEvents();
      },
  
      // Start closing procedure
      // This will start "zoom-out" animation if needed and clean everything up afterwards
      // =================================================================================
  
      close: function (e, d) {
        var self = this,
          current = self.current,
          effect,
          duration,
          $content,
          domRect,
          opacity,
          start,
          end;
  
        var done = function () {
          self.cleanUp(e);
        };
  
        if (self.isClosing) {
          return false;
        }
  
        self.isClosing = true;
  
        // If beforeClose callback prevents closing, make sure content is centered
        if (self.trigger("beforeClose", e) === false) {
          self.isClosing = false;
  
          requestAFrame(function () {
            self.update();
          });
  
          return false;
        }
  
        // Remove all events
        // If there are multiple instances, they will be set again by "activate" method
        self.removeEvents();
  
        $content = current.$content;
        effect = current.opts.animationEffect;
        duration = $.isNumeric(d)
          ? d
          : effect
          ? current.opts.animationDuration
          : 0;
  
        current.$slide.removeClass(
          "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
        );
  
        if (e !== true) {
          $.fancybox.stop(current.$slide);
        } else {
          effect = false;
        }
  
        // Remove other slides
        current.$slide.siblings().trigger("onReset").remove();
  
        // Trigger animations
        if (duration) {
          self.$refs.container
            .removeClass("fancybox-is-open")
            .addClass("fancybox-is-closing")
            .css("transition-duration", duration + "ms");
        }
  
        // Clean up
        self.hideLoading(current);
  
        self.hideControls(true);
  
        self.updateCursor();
  
        // Check if possible to zoom-out
        if (
          effect === "zoom" &&
          !(
            $content &&
            duration &&
            current.type === "image" &&
            !self.isMoved() &&
            !current.hasError &&
            (end = self.getThumbPos(current))
          )
        ) {
          effect = "fade";
        }
  
        if (effect === "zoom") {
          $.fancybox.stop($content);
  
          domRect = $.fancybox.getTranslate($content);
  
          start = {
            top: domRect.top,
            left: domRect.left,
            scaleX: domRect.width / end.width,
            scaleY: domRect.height / end.height,
            width: end.width,
            height: end.height,
          };
  
          // Check if we need to animate opacity
          opacity = current.opts.zoomOpacity;
  
          if (opacity == "auto") {
            opacity =
              Math.abs(current.width / current.height - end.width / end.height) >
              0.1;
          }
  
          if (opacity) {
            end.opacity = 0;
          }
  
          $.fancybox.setTranslate($content, start);
  
          forceRedraw($content);
  
          $.fancybox.animate($content, end, duration, done);
  
          return true;
        }
  
        if (effect && duration) {
          $.fancybox.animate(
            current.$slide
              .addClass("fancybox-slide--previous")
              .removeClass("fancybox-slide--current"),
            "fancybox-animated fancybox-fx-" + effect,
            duration,
            done
          );
        } else {
          // If skip animation
          if (e === true) {
            setTimeout(done, duration);
          } else {
            done();
          }
        }
  
        return true;
      },
  
      // Final adjustments after removing the instance
      // =============================================
  
      cleanUp: function (e) {
        var self = this,
          instance,
          $focus = self.current.opts.$orig,
          x,
          y;
  
        self.current.$slide.trigger("onReset");
  
        self.$refs.container.empty().remove();
  
        self.trigger("afterClose", e);
  
        // Place back focus
        if (!!self.current.opts.backFocus) {
          if (!$focus || !$focus.length || !$focus.is(":visible")) {
            $focus = self.$trigger;
          }
  
          if ($focus && $focus.length) {
            x = window.scrollX;
            y = window.scrollY;
  
            $focus.trigger("focus");
  
            $("html, body").scrollTop(y).scrollLeft(x);
          }
        }
  
        self.current = null;
  
        // Check if there are other instances
        instance = $.fancybox.getInstance();
  
        if (instance) {
          instance.activate();
        } else {
          $("body").removeClass("fancybox-active compensate-for-scrollbar");
  
          $("#fancybox-style-noscroll").remove();
        }
      },
  
      // Call callback and trigger an event
      // ==================================
  
      trigger: function (name, slide) {
        var args = Array.prototype.slice.call(arguments, 1),
          self = this,
          obj = slide && slide.opts ? slide : self.current,
          rez;
  
        if (obj) {
          args.unshift(obj);
        } else {
          obj = self;
        }
  
        args.unshift(self);
  
        if ($.isFunction(obj.opts[name])) {
          rez = obj.opts[name].apply(obj, args);
        }
  
        if (rez === false) {
          return rez;
        }
  
        if (name === "afterClose" || !self.$refs) {
          $D.trigger(name + ".fb", args);
        } else {
          self.$refs.container.trigger(name + ".fb", args);
        }
      },
  
      // Update infobar values, navigation button states and reveal caption
      // ==================================================================
  
      updateControls: function () {
        var self = this,
          current = self.current,
          index = current.index,
          $container = self.$refs.container,
          $caption = self.$refs.caption,
          caption = current.opts.caption;
  
        // Recalculate content dimensions
        current.$slide.trigger("refresh");
  
        // Set caption
        if (caption && caption.length) {
          self.$caption = $caption;
  
          $caption.children().eq(0).html(caption);
        } else {
          self.$caption = null;
        }
  
        if (!self.hasHiddenControls && !self.isIdle) {
          self.showControls();
        }
  
        // Update info and navigation elements
        $container.find("[data-fancybox-count]").html(self.group.length);
        $container.find("[data-fancybox-index]").html(index + 1);
  
        $container
          .find("[data-fancybox-prev]")
          .prop("disabled", !current.opts.loop && index <= 0);
        $container
          .find("[data-fancybox-next]")
          .prop("disabled", !current.opts.loop && index >= self.group.length - 1);
  
        if (current.type === "image") {
          // Re-enable buttons; update download button source
          $container
            .find("[data-fancybox-zoom]")
            .show()
            .end()
            .find("[data-fancybox-download]")
            .attr("href", current.opts.image.src || current.src)
            .show();
        } else if (current.opts.toolbar) {
          $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
        }
  
        // Make sure focus is not on disabled button/element
        if ($(document.activeElement).is(":hidden,[disabled]")) {
          self.$refs.container.trigger("focus");
        }
      },
  
      // Hide toolbar and caption
      // ========================
  
      hideControls: function (andCaption) {
        var self = this,
          arr = ["infobar", "toolbar", "nav"];
  
        if (andCaption || !self.current.opts.preventCaptionOverlap) {
          arr.push("caption");
        }
  
        this.$refs.container.removeClass(
          arr
            .map(function (i) {
              return "fancybox-show-" + i;
            })
            .join(" ")
        );
  
        this.hasHiddenControls = true;
      },
  
      showControls: function () {
        var self = this,
          opts = self.current ? self.current.opts : self.opts,
          $container = self.$refs.container;
  
        self.hasHiddenControls = false;
        self.idleSecondsCounter = 0;
  
        $container
          .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
          .toggleClass(
            "fancybox-show-infobar",
            !!(opts.infobar && self.group.length > 1)
          )
          .toggleClass("fancybox-show-caption", !!self.$caption)
          .toggleClass(
            "fancybox-show-nav",
            !!(opts.arrows && self.group.length > 1)
          )
          .toggleClass("fancybox-is-modal", !!opts.modal);
      },
  
      // Toggle toolbar and caption
      // ==========================
  
      toggleControls: function () {
        if (this.hasHiddenControls) {
          this.showControls();
        } else {
          this.hideControls();
        }
      },
    });
  
    $.fancybox = {
      version: "3.5.7",
      defaults: defaults,
  
      // Get current instance and execute a command.
      //
      // Examples of usage:
      //
      //   $instance = $.fancybox.getInstance();
      //   $.fancybox.getInstance().jumpTo( 1 );
      //   $.fancybox.getInstance( 'jumpTo', 1 );
      //   $.fancybox.getInstance( function() {
      //       console.info( this.currIndex );
      //   });
      // ======================================================
  
      getInstance: function (command) {
        var instance = $(
            '.fancybox-container:not(".fancybox-is-closing"):last'
          ).data("FancyBox"),
          args = Array.prototype.slice.call(arguments, 1);
  
        if (instance instanceof FancyBox) {
          if ($.type(command) === "string") {
            instance[command].apply(instance, args);
          } else if ($.type(command) === "function") {
            command.apply(instance, args);
          }
  
          return instance;
        }
  
        return false;
      },
  
      // Create new instance
      // ===================
  
      open: function (items, opts, index) {
        return new FancyBox(items, opts, index);
      },
  
      // Close current or all instances
      // ==============================
  
      close: function (all) {
        var instance = this.getInstance();
  
        if (instance) {
          instance.close();
  
          // Try to find and close next instance
          if (all === true) {
            this.close(all);
          }
        }
      },
  
      // Close all instances and unbind all events
      // =========================================
  
      destroy: function () {
        this.close(true);
  
        $D.add("body").off("click.fb-start", "**");
      },
  
      // Try to detect mobile devices
      // ============================
  
      isMobile:
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
  
      // Detect if 'translate3d' support is available
      // ============================================
  
      use3d: (function () {
        var div = document.createElement("div");
  
        return (
          window.getComputedStyle &&
          window.getComputedStyle(div) &&
          window.getComputedStyle(div).getPropertyValue("transform") &&
          !(document.documentMode && document.documentMode < 11)
        );
      })(),
  
      // Helper function to get current visual state of an element
      // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
      // =====================================================================
  
      getTranslate: function ($el) {
        var domRect;
  
        if (!$el || !$el.length) {
          return false;
        }
  
        domRect = $el[0].getBoundingClientRect();
  
        return {
          top: domRect.top || 0,
          left: domRect.left || 0,
          width: domRect.width,
          height: domRect.height,
          opacity: parseFloat($el.css("opacity")),
        };
      },
  
      // Shortcut for setting "translate3d" properties for element
      // Can set be used to set opacity, too
      // ========================================================
  
      setTranslate: function ($el, props) {
        var str = "",
          css = {};
  
        if (!$el || !props) {
          return;
        }
  
        if (props.left !== undefined || props.top !== undefined) {
          str =
            (props.left === undefined ? $el.position().left : props.left) +
            "px, " +
            (props.top === undefined ? $el.position().top : props.top) +
            "px";
  
          if (this.use3d) {
            str = "translate3d(" + str + ", 0px)";
          } else {
            str = "translate(" + str + ")";
          }
        }
  
        if (props.scaleX !== undefined && props.scaleY !== undefined) {
          str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
        } else if (props.scaleX !== undefined) {
          str += " scaleX(" + props.scaleX + ")";
        }
  
        if (str.length) {
          css.transform = str;
        }
  
        if (props.opacity !== undefined) {
          css.opacity = props.opacity;
        }
  
        if (props.width !== undefined) {
          css.width = props.width;
        }
  
        if (props.height !== undefined) {
          css.height = props.height;
        }
  
        return $el.css(css);
      },
  
      // Simple CSS transition handler
      // =============================
  
      animate: function ($el, to, duration, callback, leaveAnimationName) {
        var self = this,
          from;
  
        if ($.isFunction(duration)) {
          callback = duration;
          duration = null;
        }
  
        self.stop($el);
  
        from = self.getTranslate($el);
  
        $el.on(transitionEnd, function (e) {
          // Skip events from child elements and z-index change
          if (
            e &&
            e.originalEvent &&
            (!$el.is(e.originalEvent.target) ||
              e.originalEvent.propertyName == "z-index")
          ) {
            return;
          }
  
          self.stop($el);
  
          if ($.isNumeric(duration)) {
            $el.css("transition-duration", "");
          }
  
          if ($.isPlainObject(to)) {
            if (to.scaleX !== undefined && to.scaleY !== undefined) {
              self.setTranslate($el, {
                top: to.top,
                left: to.left,
                width: from.width * to.scaleX,
                height: from.height * to.scaleY,
                scaleX: 1,
                scaleY: 1,
              });
            }
          } else if (leaveAnimationName !== true) {
            $el.removeClass(to);
          }
  
          if ($.isFunction(callback)) {
            callback(e);
          }
        });
  
        if ($.isNumeric(duration)) {
          $el.css("transition-duration", duration + "ms");
        }
  
        // Start animation by changing CSS properties or class name
        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            delete to.width;
            delete to.height;
  
            if ($el.parent().hasClass("fancybox-slide--image")) {
              $el.parent().addClass("fancybox-is-scaling");
            }
          }
  
          $.fancybox.setTranslate($el, to);
        } else {
          $el.addClass(to);
        }
  
        // Make sure that `transitionend` callback gets fired
        $el.data(
          "timer",
          setTimeout(function () {
            $el.trigger(transitionEnd);
          }, duration + 33)
        );
      },
  
      stop: function ($el, callCallback) {
        if ($el && $el.length) {
          clearTimeout($el.data("timer"));
  
          if (callCallback) {
            $el.trigger(transitionEnd);
          }
  
          $el.off(transitionEnd).css("transition-duration", "");
  
          $el.parent().removeClass("fancybox-is-scaling");
        }
      },
    };
  
    // Default click handler for "fancyboxed" links
    // ============================================
  
    function _run(e, opts) {
      var items = [],
        index = 0,
        $target,
        value,
        instance;
  
      // Avoid opening multiple times
      if (e && e.isDefaultPrevented()) {
        return;
      }
  
      e.preventDefault();
  
      opts = opts || {};
  
      if (e && e.data) {
        opts = mergeOpts(e.data.options, opts);
      }
  
      $target = opts.$target || $(e.currentTarget).trigger("blur");
      instance = $.fancybox.getInstance();
  
      if (instance && instance.$trigger && instance.$trigger.is($target)) {
        return;
      }
  
      if (opts.selector) {
        items = $(opts.selector);
      } else {
        // Get all related items and find index for clicked one
        value = $target.attr("data-fancybox") || "";
  
        if (value) {
          items = e.data ? e.data.items : [];
          items = items.length
            ? items.filter('[data-fancybox="' + value + '"]')
            : $('[data-fancybox="' + value + '"]');
        } else {
          items = [$target];
        }
      }
  
      index = $(items).index($target);
  
      // Sometimes current item can not be found
      if (index < 0) {
        index = 0;
      }
  
      instance = $.fancybox.open(items, opts, index);
  
      // Save last active element
      instance.$trigger = $target;
    }
  
    // Create a jQuery plugin
    // ======================
  
    $.fn.fancybox = function (options) {
      var selector;
  
      options = options || {};
      selector = options.selector || false;
  
      if (selector) {
        // Use body element instead of document so it executes first
        $("body").off("click.fb-start", selector).on(
          "click.fb-start",
          selector,
          {
            options: options,
          },
          _run
        );
      } else {
        this.off("click.fb-start").on(
          "click.fb-start",
          {
            items: this,
            options: options,
          },
          _run
        );
      }
  
      return this;
    };
  
    // Self initializing plugin for all elements having `data-fancybox` attribute
    // ==========================================================================
  
    $D.on("click.fb-start", "[data-fancybox]", _run);
  
    // Enable "trigger elements"
    // =========================
  
    $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
      $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
        .eq($(this).attr("data-fancybox-index") || 0)
        .trigger("click.fb-start", {
          $trigger: $(this),
        });
    });
  
    // Track focus event for better accessibility styling
    // ==================================================
    (function () {
      var buttonStr = ".fancybox-button",
        focusStr = "fancybox-focus",
        $pressed = null;
  
      $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
        switch (e.type) {
          case "mousedown":
            $pressed = $(this);
            break;
          case "mouseup":
            $pressed = null;
            break;
          case "focusin":
            $(buttonStr).removeClass(focusStr);
  
            if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
              $(this).addClass(focusStr);
            }
            break;
          case "focusout":
            $(buttonStr).removeClass(focusStr);
            break;
        }
      });
    })();
  })(window, document, jQuery);
  // ==========================================================================
  //
  // Media
  // Adds additional media type support
  //
  // ==========================================================================
  (function ($) {
    "use strict";
  
    // Object containing properties for each media type
    var defaults = {
      youtube: {
        matcher:
          /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: "transparent",
          enablejsapi: 1,
          html5: 1,
        },
        paramPlace: 8,
        type: "iframe",
        url: "https://www.youtube-nocookie.com/embed/$4",
        thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
      },
  
      vimeo: {
        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1,
        },
        paramPlace: 3,
        type: "iframe",
        url: "//player.vimeo.com/video/$2",
      },
  
      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: "image",
        url: "//$1/p/$2/media/?size=l",
      },
  
      // Examples:
      // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
      // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
      // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
      // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
      gmap_place: {
        matcher:
          /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
        type: "iframe",
        url: function (rez) {
          return (
            "//maps.google." +
            rez[2] +
            "/?ll=" +
            (rez[9]
              ? rez[9] +
                "&z=" +
                Math.floor(rez[10]) +
                (rez[12] ? rez[12].replace(/^\//, "&") : "")
              : rez[12] + ""
            ).replace(/\?/, "&") +
            "&output=" +
            (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
          );
        },
      },
  
      // Examples:
      // https://www.google.com/maps/search/Empire+State+Building/
      // https://www.google.com/maps/search/?api=1&query=centurylink+field
      // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
      gmap_search: {
        matcher:
          /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
        type: "iframe",
        url: function (rez) {
          return (
            "//maps.google." +
            rez[2] +
            "/maps?q=" +
            rez[5].replace("query=", "q=").replace("api=1", "") +
            "&output=embed"
          );
        },
      },
    };
  
    // Formats matching url to final form
    var format = function (url, rez, params) {
      if (!url) {
        return;
      }
  
      params = params || "";
  
      if ($.type(params) === "object") {
        params = $.param(params, true);
      }
  
      $.each(rez, function (key, value) {
        url = url.replace("$" + key, value || "");
      });
  
      if (params.length) {
        url += (url.indexOf("?") > 0 ? "&" : "?") + params;
      }
  
      return url;
    };
  
    $(document).on("objectNeedsType.fb", function (e, instance, item) {
      var url = item.src || "",
        type = false,
        media,
        thumb,
        rez,
        params,
        urlParams,
        paramObj,
        provider;
  
      media = $.extend(true, {}, defaults, item.opts.media);
  
      // Look for any matching media type
      $.each(media, function (providerName, providerOpts) {
        rez = url.match(providerOpts.matcher);
  
        if (!rez) {
          return;
        }
  
        type = providerOpts.type;
        provider = providerName;
        paramObj = {};
  
        if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
          urlParams = rez[providerOpts.paramPlace];
  
          if (urlParams[0] == "?") {
            urlParams = urlParams.substring(1);
          }
  
          urlParams = urlParams.split("&");
  
          for (var m = 0; m < urlParams.length; ++m) {
            var p = urlParams[m].split("=", 2);
  
            if (p.length == 2) {
              paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
          }
        }
  
        params = $.extend(
          true,
          {},
          providerOpts.params,
          item.opts[providerName],
          paramObj
        );
  
        url =
          $.type(providerOpts.url) === "function"
            ? providerOpts.url.call(this, rez, params, item)
            : format(providerOpts.url, rez, params);
  
        thumb =
          $.type(providerOpts.thumb) === "function"
            ? providerOpts.thumb.call(this, rez, params, item)
            : format(providerOpts.thumb, rez);
  
        if (providerName === "youtube") {
          url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
            return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
          });
        } else if (providerName === "vimeo") {
          url = url.replace("&%23", "#");
        }
  
        return false;
      });
  
      // If it is found, then change content type and update the url
  
      if (type) {
        if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
          item.opts.thumb = thumb;
        }
  
        if (type === "iframe") {
          item.opts = $.extend(true, item.opts, {
            iframe: {
              preload: false,
              attr: {
                scrolling: "no",
              },
            },
          });
        }
  
        $.extend(item, {
          type: type,
          src: url,
          origSrc: item.src,
          contentSource: provider,
          contentType:
            type === "image"
              ? "image"
              : provider == "gmap_place" || provider == "gmap_search"
              ? "map"
              : "video",
        });
      } else if (url) {
        item.type = item.opts.defaultType;
      }
    });
  
    // Load YouTube/Video API on request to detect when video finished playing
    var VideoAPILoader = {
      youtube: {
        src: "https://www.youtube.com/iframe_api",
        class: "YT",
        loading: false,
        loaded: false,
      },
  
      vimeo: {
        src: "https://player.vimeo.com/api/player.js",
        class: "Vimeo",
        loading: false,
        loaded: false,
      },
  
      load: function (vendor) {
        var _this = this,
          script;
  
        if (this[vendor].loaded) {
          setTimeout(function () {
            _this.done(vendor);
          });
          return;
        }
  
        if (this[vendor].loading) {
          return;
        }
  
        this[vendor].loading = true;
  
        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = this[vendor].src;
  
        if (vendor === "youtube") {
          window.onYouTubeIframeAPIReady = function () {
            _this[vendor].loaded = true;
            _this.done(vendor);
          };
        } else {
          script.onload = function () {
            _this[vendor].loaded = true;
            _this.done(vendor);
          };
        }
  
        document.body.appendChild(script);
      },
      done: function (vendor) {
        var instance, $el, player;
  
        if (vendor === "youtube") {
          delete window.onYouTubeIframeAPIReady;
        }
  
        instance = $.fancybox.getInstance();
  
        if (instance) {
          $el = instance.current.$content.find("iframe");
  
          if (vendor === "youtube" && YT !== undefined && YT) {
            player = new YT.Player($el.attr("id"), {
              events: {
                onStateChange: function (e) {
                  if (e.data == 0) {
                    instance.next();
                  }
                },
              },
            });
          } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
            player = new Vimeo.Player($el);
  
            player.on("ended", function () {
              instance.next();
            });
          }
        }
      },
    };
  
    $(document).on({
      "afterShow.fb": function (e, instance, current) {
        if (
          instance.group.length > 1 &&
          (current.contentSource === "youtube" ||
            current.contentSource === "vimeo")
        ) {
          VideoAPILoader.load(current.contentSource);
        }
      },
    });
  })(jQuery);
  // ==========================================================================
  //
  // Guestures
  // Adds touch guestures, handles click and tap events
  //
  // ==========================================================================
  (function (window, document, $) {
    "use strict";
  
    var requestAFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
          return window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
  
    var cancelAFrame = (function () {
      return (
        window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        function (id) {
          window.clearTimeout(id);
        }
      );
    })();
  
    var getPointerXY = function (e) {
      var result = [];
  
      e = e.originalEvent || e || window.e;
      e =
        e.touches && e.touches.length
          ? e.touches
          : e.changedTouches && e.changedTouches.length
          ? e.changedTouches
          : [e];
  
      for (var key in e) {
        if (e[key].pageX) {
          result.push({
            x: e[key].pageX,
            y: e[key].pageY,
          });
        } else if (e[key].clientX) {
          result.push({
            x: e[key].clientX,
            y: e[key].clientY,
          });
        }
      }
  
      return result;
    };
  
    var distance = function (point2, point1, what) {
      if (!point1 || !point2) {
        return 0;
      }
  
      if (what === "x") {
        return point2.x - point1.x;
      } else if (what === "y") {
        return point2.y - point1.y;
      }
  
      return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
      );
    };
  
    var isClickable = function ($el) {
      if (
        $el.is(
          'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
        ) ||
        $.isFunction($el.get(0).onclick) ||
        $el.data("selectable")
      ) {
        return true;
      }
  
      // Check for attributes like data-fancybox-next or data-fancybox-close
      for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
        if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
          return true;
        }
      }
  
      return false;
    };
  
    var hasScrollbars = function (el) {
      var overflowY = window.getComputedStyle(el)["overflow-y"],
        overflowX = window.getComputedStyle(el)["overflow-x"],
        vertical =
          (overflowY === "scroll" || overflowY === "auto") &&
          el.scrollHeight > el.clientHeight,
        horizontal =
          (overflowX === "scroll" || overflowX === "auto") &&
          el.scrollWidth > el.clientWidth;
  
      return vertical || horizontal;
    };
  
    var isScrollable = function ($el) {
      var rez = false;
  
      while (true) {
        rez = hasScrollbars($el.get(0));
  
        if (rez) {
          break;
        }
  
        $el = $el.parent();
  
        if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
          break;
        }
      }
  
      return rez;
    };
  
    var Guestures = function (instance) {
      var self = this;
  
      self.instance = instance;
  
      self.$bg = instance.$refs.bg;
      self.$stage = instance.$refs.stage;
      self.$container = instance.$refs.container;
  
      self.destroy();
  
      self.$container.on(
        "touchstart.fb.touch mousedown.fb.touch",
        $.proxy(self, "ontouchstart")
      );
    };
  
    Guestures.prototype.destroy = function () {
      var self = this;
  
      self.$container.off(".fb.touch");
  
      $(document).off(".fb.touch");
  
      if (self.requestId) {
        cancelAFrame(self.requestId);
        self.requestId = null;
      }
  
      if (self.tapped) {
        clearTimeout(self.tapped);
        self.tapped = null;
      }
    };
  
    Guestures.prototype.ontouchstart = function (e) {
      var self = this,
        $target = $(e.target),
        instance = self.instance,
        current = instance.current,
        $slide = current.$slide,
        $content = current.$content,
        isTouchDevice = e.type == "touchstart";
  
      // Do not respond to both (touch and mouse) events
      if (isTouchDevice) {
        self.$container.off("mousedown.fb.touch");
      }
  
      // Ignore right click
      if (e.originalEvent && e.originalEvent.button == 2) {
        return;
      }
  
      // Ignore taping on links, buttons, input elements
      if (
        !$slide.length ||
        !$target.length ||
        isClickable($target) ||
        isClickable($target.parent())
      ) {
        return;
      }
      // Ignore clicks on the scrollbar
      if (
        !$target.is("img") &&
        e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left
      ) {
        return;
      }
  
      // Ignore clicks while zooming or closing
      if (
        !current ||
        instance.isAnimating ||
        current.$slide.hasClass("fancybox-animated")
      ) {
        e.stopPropagation();
        e.preventDefault();
  
        return;
      }
  
      self.realPoints = self.startPoints = getPointerXY(e);
  
      if (!self.startPoints.length) {
        return;
      }
  
      // Allow other scripts to catch touch event if "touch" is set to false
      if (current.touch) {
        e.stopPropagation();
      }
  
      self.startEvent = e;
  
      self.canTap = true;
      self.$target = $target;
      self.$content = $content;
      self.opts = current.opts.touch;
  
      self.isPanning = false;
      self.isSwiping = false;
      self.isZooming = false;
      self.isScrolling = false;
      self.canPan = instance.canPan();
  
      self.startTime = new Date().getTime();
      self.distanceX = self.distanceY = self.distance = 0;
  
      self.canvasWidth = Math.round($slide[0].clientWidth);
      self.canvasHeight = Math.round($slide[0].clientHeight);
  
      self.contentLastPos = null;
      self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
        top: 0,
        left: 0,
      };
      self.sliderStartPos = $.fancybox.getTranslate($slide);
  
      // Since position will be absolute, but we need to make it relative to the stage
      self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);
  
      self.sliderStartPos.top -= self.stagePos.top;
      self.sliderStartPos.left -= self.stagePos.left;
  
      self.contentStartPos.top -= self.stagePos.top;
      self.contentStartPos.left -= self.stagePos.left;
  
      $(document)
        .off(".fb.touch")
        .on(
          isTouchDevice
            ? "touchend.fb.touch touchcancel.fb.touch"
            : "mouseup.fb.touch mouseleave.fb.touch",
          $.proxy(self, "ontouchend")
        )
        .on(
          isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch",
          $.proxy(self, "ontouchmove")
        );
  
      if ($.fancybox.isMobile) {
        document.addEventListener("scroll", self.onscroll, true);
      }
  
      // Skip if clicked outside the sliding area
      if (
        !(self.opts || self.canPan) ||
        !($target.is(self.$stage) || self.$stage.find($target).length)
      ) {
        if ($target.is(".fancybox-image")) {
          e.preventDefault();
        }
  
        if (
          !($.fancybox.isMobile && $target.parents(".fancybox-caption").length)
        ) {
          return;
        }
      }
  
      self.isScrollable = isScrollable($target) || isScrollable($target.parent());
  
      // Check if element is scrollable and try to prevent default behavior (scrolling)
      if (!($.fancybox.isMobile && self.isScrollable)) {
        e.preventDefault();
      }
  
      // One finger or mouse click - swipe or pan an image
      if (self.startPoints.length === 1 || current.hasError) {
        if (self.canPan) {
          $.fancybox.stop(self.$content);
  
          self.isPanning = true;
        } else {
          self.isSwiping = true;
        }
  
        self.$container.addClass("fancybox-is-grabbing");
      }
  
      // Two fingers - zoom image
      if (
        self.startPoints.length === 2 &&
        current.type === "image" &&
        (current.isLoaded || current.$ghost)
      ) {
        self.canTap = false;
        self.isSwiping = false;
        self.isPanning = false;
  
        self.isZooming = true;
  
        $.fancybox.stop(self.$content);
  
        self.centerPointStartX =
          (self.startPoints[0].x + self.startPoints[1].x) * 0.5 -
          $(window).scrollLeft();
        self.centerPointStartY =
          (self.startPoints[0].y + self.startPoints[1].y) * 0.5 -
          $(window).scrollTop();
  
        self.percentageOfImageAtPinchPointX =
          (self.centerPointStartX - self.contentStartPos.left) /
          self.contentStartPos.width;
        self.percentageOfImageAtPinchPointY =
          (self.centerPointStartY - self.contentStartPos.top) /
          self.contentStartPos.height;
  
        self.startDistanceBetweenFingers = distance(
          self.startPoints[0],
          self.startPoints[1]
        );
      }
    };
  
    Guestures.prototype.onscroll = function (e) {
      var self = this;
  
      self.isScrolling = true;
  
      document.removeEventListener("scroll", self.onscroll, true);
    };
  
    Guestures.prototype.ontouchmove = function (e) {
      var self = this;
  
      // Make sure user has not released over iframe or disabled element
      if (
        e.originalEvent.buttons !== undefined &&
        e.originalEvent.buttons === 0
      ) {
        self.ontouchend(e);
        return;
      }
  
      if (self.isScrolling) {
        self.canTap = false;
        return;
      }
  
      self.newPoints = getPointerXY(e);
  
      if (
        !(self.opts || self.canPan) ||
        !self.newPoints.length ||
        !self.newPoints.length
      ) {
        return;
      }
  
      if (!(self.isSwiping && self.isSwiping === true)) {
        e.preventDefault();
      }
  
      self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
      self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");
  
      self.distance = distance(self.newPoints[0], self.startPoints[0]);
  
      // Skip false ontouchmove events (Chrome)
      if (self.distance > 0) {
        if (self.isSwiping) {
          self.onSwipe(e);
        } else if (self.isPanning) {
          self.onPan();
        } else if (self.isZooming) {
          self.onZoom();
        }
      }
    };
  
    Guestures.prototype.onSwipe = function (e) {
      var self = this,
        instance = self.instance,
        swiping = self.isSwiping,
        left = self.sliderStartPos.left || 0,
        angle;
  
      // If direction is not yet determined
      if (swiping === true) {
        // We need at least 10px distance to correctly calculate an angle
        if (Math.abs(self.distance) > 10) {
          self.canTap = false;
  
          if (instance.group.length < 2 && self.opts.vertical) {
            self.isSwiping = "y";
          } else if (
            instance.isDragging ||
            self.opts.vertical === false ||
            (self.opts.vertical === "auto" && $(window).width() > 800)
          ) {
            self.isSwiping = "x";
          } else {
            angle = Math.abs(
              (Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI
            );
  
            self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
          }
  
          if (
            self.isSwiping === "y" &&
            $.fancybox.isMobile &&
            self.isScrollable
          ) {
            self.isScrolling = true;
  
            return;
          }
  
          instance.isDragging = self.isSwiping;
  
          // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
          self.startPoints = self.newPoints;
  
          $.each(instance.slides, function (index, slide) {
            var slidePos, stagePos;
  
            $.fancybox.stop(slide.$slide);
  
            slidePos = $.fancybox.getTranslate(slide.$slide);
            stagePos = $.fancybox.getTranslate(instance.$refs.stage);
  
            slide.$slide
              .css({
                transform: "",
                opacity: "",
                "transition-duration": "",
              })
              .removeClass("fancybox-animated")
              .removeClass(function (index, className) {
                return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                  " "
                );
              });
  
            if (slide.pos === instance.current.pos) {
              self.sliderStartPos.top = slidePos.top - stagePos.top;
              self.sliderStartPos.left = slidePos.left - stagePos.left;
            }
  
            $.fancybox.setTranslate(slide.$slide, {
              top: slidePos.top - stagePos.top,
              left: slidePos.left - stagePos.left,
            });
          });
  
          // Stop slideshow
          if (instance.SlideShow && instance.SlideShow.isActive) {
            instance.SlideShow.stop();
          }
        }
  
        return;
      }
  
      // Sticky edges
      if (swiping == "x") {
        if (
          self.distanceX > 0 &&
          (self.instance.group.length < 2 ||
            (self.instance.current.index === 0 &&
              !self.instance.current.opts.loop))
        ) {
          left = left + Math.pow(self.distanceX, 0.8);
        } else if (
          self.distanceX < 0 &&
          (self.instance.group.length < 2 ||
            (self.instance.current.index === self.instance.group.length - 1 &&
              !self.instance.current.opts.loop))
        ) {
          left = left - Math.pow(-self.distanceX, 0.8);
        } else {
          left = left + self.distanceX;
        }
      }
  
      self.sliderLastPos = {
        top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
        left: left,
      };
  
      if (self.requestId) {
        cancelAFrame(self.requestId);
  
        self.requestId = null;
      }
  
      self.requestId = requestAFrame(function () {
        if (self.sliderLastPos) {
          $.each(self.instance.slides, function (index, slide) {
            var pos = slide.pos - self.instance.currPos;
  
            $.fancybox.setTranslate(slide.$slide, {
              top: self.sliderLastPos.top,
              left:
                self.sliderLastPos.left +
                pos * self.canvasWidth +
                pos * slide.opts.gutter,
            });
          });
  
          self.$container.addClass("fancybox-is-sliding");
        }
      });
    };
  
    Guestures.prototype.onPan = function () {
      var self = this;
  
      // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
      if (
        distance(self.newPoints[0], self.realPoints[0]) <
        ($.fancybox.isMobile ? 10 : 5)
      ) {
        self.startPoints = self.newPoints;
        return;
      }
  
      self.canTap = false;
  
      self.contentLastPos = self.limitMovement();
  
      if (self.requestId) {
        cancelAFrame(self.requestId);
      }
  
      self.requestId = requestAFrame(function () {
        $.fancybox.setTranslate(self.$content, self.contentLastPos);
      });
    };
  
    // Make panning sticky to the edges
    Guestures.prototype.limitMovement = function () {
      var self = this;
  
      var canvasWidth = self.canvasWidth;
      var canvasHeight = self.canvasHeight;
  
      var distanceX = self.distanceX;
      var distanceY = self.distanceY;
  
      var contentStartPos = self.contentStartPos;
  
      var currentOffsetX = contentStartPos.left;
      var currentOffsetY = contentStartPos.top;
  
      var currentWidth = contentStartPos.width;
      var currentHeight = contentStartPos.height;
  
      var minTranslateX,
        minTranslateY,
        maxTranslateX,
        maxTranslateY,
        newOffsetX,
        newOffsetY;
  
      if (currentWidth > canvasWidth) {
        newOffsetX = currentOffsetX + distanceX;
      } else {
        newOffsetX = currentOffsetX;
      }
  
      newOffsetY = currentOffsetY + distanceY;
  
      // Slow down proportionally to traveled distance
      minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
      minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);
  
      maxTranslateX = Math.min(
        canvasWidth - currentWidth,
        canvasWidth * 0.5 - currentWidth * 0.5
      );
      maxTranslateY = Math.min(
        canvasHeight - currentHeight,
        canvasHeight * 0.5 - currentHeight * 0.5
      );
  
      //   ->
      if (distanceX > 0 && newOffsetX > minTranslateX) {
        newOffsetX =
          minTranslateX -
            1 +
            Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
      }
  
      //    <-
      if (distanceX < 0 && newOffsetX < maxTranslateX) {
        newOffsetX =
          maxTranslateX +
            1 -
            Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
      }
  
      //   \/
      if (distanceY > 0 && newOffsetY > minTranslateY) {
        newOffsetY =
          minTranslateY -
            1 +
            Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
      }
  
      //   /\
      if (distanceY < 0 && newOffsetY < maxTranslateY) {
        newOffsetY =
          maxTranslateY +
            1 -
            Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
      }
  
      return {
        top: newOffsetY,
        left: newOffsetX,
      };
    };
  
    Guestures.prototype.limitPosition = function (
      newOffsetX,
      newOffsetY,
      newWidth,
      newHeight
    ) {
      var self = this;
  
      var canvasWidth = self.canvasWidth;
      var canvasHeight = self.canvasHeight;
  
      if (newWidth > canvasWidth) {
        newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
        newOffsetX =
          newOffsetX < canvasWidth - newWidth
            ? canvasWidth - newWidth
            : newOffsetX;
      } else {
        // Center horizontally
        newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
      }
  
      if (newHeight > canvasHeight) {
        newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
        newOffsetY =
          newOffsetY < canvasHeight - newHeight
            ? canvasHeight - newHeight
            : newOffsetY;
      } else {
        // Center vertically
        newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
      }
  
      return {
        top: newOffsetY,
        left: newOffsetX,
      };
    };
  
    Guestures.prototype.onZoom = function () {
      var self = this;
  
      // Calculate current distance between points to get pinch ratio and new width and height
      var contentStartPos = self.contentStartPos;
  
      var currentWidth = contentStartPos.width;
      var currentHeight = contentStartPos.height;
  
      var currentOffsetX = contentStartPos.left;
      var currentOffsetY = contentStartPos.top;
  
      var endDistanceBetweenFingers = distance(
        self.newPoints[0],
        self.newPoints[1]
      );
  
      var pinchRatio =
        endDistanceBetweenFingers / self.startDistanceBetweenFingers;
  
      var newWidth = Math.floor(currentWidth * pinchRatio);
      var newHeight = Math.floor(currentHeight * pinchRatio);
  
      // This is the translation due to pinch-zooming
      var translateFromZoomingX =
        (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
      var translateFromZoomingY =
        (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;
  
      // Point between the two touches
      var centerPointEndX =
        (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
      var centerPointEndY =
        (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();
  
      // And this is the translation due to translation of the centerpoint
      // between the two fingers
      var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
      var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;
  
      // The new offset is the old/current one plus the total translation
      var newOffsetX =
        currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
      var newOffsetY =
        currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
  
      var newPos = {
        top: newOffsetY,
        left: newOffsetX,
        scaleX: pinchRatio,
        scaleY: pinchRatio,
      };
  
      self.canTap = false;
  
      self.newWidth = newWidth;
      self.newHeight = newHeight;
  
      self.contentLastPos = newPos;
  
      if (self.requestId) {
        cancelAFrame(self.requestId);
      }
  
      self.requestId = requestAFrame(function () {
        $.fancybox.setTranslate(self.$content, self.contentLastPos);
      });
    };
  
    Guestures.prototype.ontouchend = function (e) {
      var self = this;
  
      var swiping = self.isSwiping;
      var panning = self.isPanning;
      var zooming = self.isZooming;
      var scrolling = self.isScrolling;
  
      self.endPoints = getPointerXY(e);
      self.dMs = Math.max(new Date().getTime() - self.startTime, 1);
  
      self.$container.removeClass("fancybox-is-grabbing");
  
      $(document).off(".fb.touch");
  
      document.removeEventListener("scroll", self.onscroll, true);
  
      if (self.requestId) {
        cancelAFrame(self.requestId);
  
        self.requestId = null;
      }
  
      self.isSwiping = false;
      self.isPanning = false;
      self.isZooming = false;
      self.isScrolling = false;
  
      self.instance.isDragging = false;
  
      if (self.canTap) {
        return self.onTap(e);
      }
  
      self.speed = 100;
  
      // Speed in px/ms
      self.velocityX = (self.distanceX / self.dMs) * 0.5;
      self.velocityY = (self.distanceY / self.dMs) * 0.5;
  
      if (panning) {
        self.endPanning();
      } else if (zooming) {
        self.endZooming();
      } else {
        self.endSwiping(swiping, scrolling);
      }
  
      return;
    };
  
    Guestures.prototype.endSwiping = function (swiping, scrolling) {
      var self = this,
        ret = false,
        len = self.instance.group.length,
        distanceX = Math.abs(self.distanceX),
        canAdvance =
          swiping == "x" &&
          len > 1 &&
          ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
        speedX = 300;
  
      self.sliderLastPos = null;
  
      // Close if swiped vertically / navigate if horizontally
      if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
        // Continue vertical movement
        $.fancybox.animate(
          self.instance.current.$slide,
          {
            top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
            opacity: 0,
          },
          200
        );
        ret = self.instance.close(true, 250);
      } else if (canAdvance && self.distanceX > 0) {
        ret = self.instance.previous(speedX);
      } else if (canAdvance && self.distanceX < 0) {
        ret = self.instance.next(speedX);
      }
  
      if (ret === false && (swiping == "x" || swiping == "y")) {
        self.instance.centerSlide(200);
      }
  
      self.$container.removeClass("fancybox-is-sliding");
    };
  
    // Limit panning from edges
    // ========================
    Guestures.prototype.endPanning = function () {
      var self = this,
        newOffsetX,
        newOffsetY,
        newPos;
  
      if (!self.contentLastPos) {
        return;
      }
  
      if (self.opts.momentum === false || self.dMs > 350) {
        newOffsetX = self.contentLastPos.left;
        newOffsetY = self.contentLastPos.top;
      } else {
        // Continue movement
        newOffsetX = self.contentLastPos.left + self.velocityX * 500;
        newOffsetY = self.contentLastPos.top + self.velocityY * 500;
      }
  
      newPos = self.limitPosition(
        newOffsetX,
        newOffsetY,
        self.contentStartPos.width,
        self.contentStartPos.height
      );
  
      newPos.width = self.contentStartPos.width;
      newPos.height = self.contentStartPos.height;
  
      $.fancybox.animate(self.$content, newPos, 366);
    };
  
    Guestures.prototype.endZooming = function () {
      var self = this;
  
      var current = self.instance.current;
  
      var newOffsetX, newOffsetY, newPos, reset;
  
      var newWidth = self.newWidth;
      var newHeight = self.newHeight;
  
      if (!self.contentLastPos) {
        return;
      }
  
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
  
      reset = {
        top: newOffsetY,
        left: newOffsetX,
        width: newWidth,
        height: newHeight,
        scaleX: 1,
        scaleY: 1,
      };
  
      // Reset scalex/scaleY values; this helps for perfomance and does not break animation
      $.fancybox.setTranslate(self.$content, reset);
  
      if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
        self.instance.scaleToFit(150);
      } else if (newWidth > current.width || newHeight > current.height) {
        self.instance.scaleToActual(
          self.centerPointStartX,
          self.centerPointStartY,
          150
        );
      } else {
        newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
  
        $.fancybox.animate(self.$content, newPos, 150);
      }
    };
  
    Guestures.prototype.onTap = function (e) {
      var self = this;
      var $target = $(e.target);
  
      var instance = self.instance;
      var current = instance.current;
  
      var endPoints = (e && getPointerXY(e)) || self.startPoints;
  
      var tapX = endPoints[0]
        ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left
        : 0;
      var tapY = endPoints[0]
        ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top
        : 0;
  
      var where;
  
      var process = function (prefix) {
        var action = current.opts[prefix];
  
        if ($.isFunction(action)) {
          action = action.apply(instance, [current, e]);
        }
  
        if (!action) {
          return;
        }
  
        switch (action) {
          case "close":
            instance.close(self.startEvent);
  
            break;
  
          case "toggleControls":
            instance.toggleControls();
  
            break;
  
          case "next":
            instance.next();
  
            break;
  
          case "nextOrClose":
            if (instance.group.length > 1) {
              instance.next();
            } else {
              instance.close(self.startEvent);
            }
  
            break;
  
          case "zoom":
            if (current.type == "image" && (current.isLoaded || current.$ghost)) {
              if (instance.canPan()) {
                instance.scaleToFit();
              } else if (instance.isScaledDown()) {
                instance.scaleToActual(tapX, tapY);
              } else if (instance.group.length < 2) {
                instance.close(self.startEvent);
              }
            }
  
            break;
        }
      };
  
      // Ignore right click
      if (e.originalEvent && e.originalEvent.button == 2) {
        return;
      }
  
      // Skip if clicked on the scrollbar
      if (
        !$target.is("img") &&
        tapX > $target[0].clientWidth + $target.offset().left
      ) {
        return;
      }
  
      // Check where is clicked
      if (
        $target.is(
          ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
        )
      ) {
        where = "Outside";
      } else if ($target.is(".fancybox-slide")) {
        where = "Slide";
      } else if (
        instance.current.$content &&
        instance.current.$content.find($target).addBack().filter($target).length
      ) {
        where = "Content";
      } else {
        return;
      }
  
      // Check if this is a double tap
      if (self.tapped) {
        // Stop previously created single tap
        clearTimeout(self.tapped);
        self.tapped = null;
  
        // Skip if distance between taps is too big
        if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
          return this;
        }
  
        // OK, now we assume that this is a double-tap
        process("dblclick" + where);
      } else {
        // Single tap will be processed if user has not clicked second time within 300ms
        // or there is no need to wait for double-tap
        self.tapX = tapX;
        self.tapY = tapY;
  
        if (
          current.opts["dblclick" + where] &&
          current.opts["dblclick" + where] !== current.opts["click" + where]
        ) {
          self.tapped = setTimeout(function () {
            self.tapped = null;
  
            if (!instance.isAnimating) {
              process("click" + where);
            }
          }, 500);
        } else {
          process("click" + where);
        }
      }
  
      return this;
    };
  
    $(document)
      .on("onActivate.fb", function (e, instance) {
        if (instance && !instance.Guestures) {
          instance.Guestures = new Guestures(instance);
        }
      })
      .on("beforeClose.fb", function (e, instance) {
        if (instance && instance.Guestures) {
          instance.Guestures.destroy();
        }
      });
  })(window, document, jQuery);
  // ==========================================================================
  //
  // SlideShow
  // Enables slideshow functionality
  //
  // Example of usage:
  // $.fancybox.getInstance().SlideShow.start()
  //
  // ==========================================================================
  (function (document, $) {
    "use strict";
  
    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
          "</button>",
      },
      slideShow: {
        autoStart: false,
        speed: 3000,
        progress: true,
      },
    });
  
    var SlideShow = function (instance) {
      this.instance = instance;
      this.init();
    };
  
    $.extend(SlideShow.prototype, {
      timer: null,
      isActive: false,
      $button: null,
  
      init: function () {
        var self = this,
          instance = self.instance,
          opts = instance.group[instance.currIndex].opts.slideShow;
  
        self.$button = instance.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            self.toggle();
          });
  
        if (instance.group.length < 2 || !opts) {
          self.$button.hide();
        } else if (opts.progress) {
          self.$progress = $('<div class="fancybox-progress"></div>').appendTo(
            instance.$refs.inner
          );
        }
      },
  
      set: function (force) {
        var self = this,
          instance = self.instance,
          current = instance.current;
  
        // Check if reached last element
        if (
          current &&
          (force === true ||
            current.opts.loop ||
            instance.currIndex < instance.group.length - 1)
        ) {
          if (self.isActive && current.contentType !== "video") {
            if (self.$progress) {
              $.fancybox.animate(
                self.$progress.show(),
                {
                  scaleX: 1,
                },
                current.opts.slideShow.speed
              );
            }
  
            self.timer = setTimeout(function () {
              if (
                !instance.current.opts.loop &&
                instance.current.index == instance.group.length - 1
              ) {
                instance.jumpTo(0);
              } else {
                instance.next();
              }
            }, current.opts.slideShow.speed);
          }
        } else {
          self.stop();
          instance.idleSecondsCounter = 0;
          instance.showControls();
        }
      },
  
      clear: function () {
        var self = this;
  
        clearTimeout(self.timer);
  
        self.timer = null;
  
        if (self.$progress) {
          self.$progress.removeAttr("style").hide();
        }
      },
  
      start: function () {
        var self = this,
          current = self.instance.current;
  
        if (current) {
          self.$button
            .attr(
              "title",
              (current.opts.i18n[current.opts.lang] || current.opts.i18n.en)
                .PLAY_STOP
            )
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause");
  
          self.isActive = true;
  
          if (current.isComplete) {
            self.set(true);
          }
  
          self.instance.trigger("onSlideShowChange", true);
        }
      },
  
      stop: function () {
        var self = this,
          current = self.instance.current;
  
        self.clear();
  
        self.$button
          .attr(
            "title",
            (current.opts.i18n[current.opts.lang] || current.opts.i18n.en)
              .PLAY_START
          )
          .removeClass("fancybox-button--pause")
          .addClass("fancybox-button--play");
  
        self.isActive = false;
  
        self.instance.trigger("onSlideShowChange", false);
  
        if (self.$progress) {
          self.$progress.removeAttr("style").hide();
        }
      },
  
      toggle: function () {
        var self = this;
  
        if (self.isActive) {
          self.stop();
        } else {
          self.start();
        }
      },
    });
  
    $(document).on({
      "onInit.fb": function (e, instance) {
        if (instance && !instance.SlideShow) {
          instance.SlideShow = new SlideShow(instance);
        }
      },
  
      "beforeShow.fb": function (e, instance, current, firstRun) {
        var SlideShow = instance && instance.SlideShow;
  
        if (firstRun) {
          if (SlideShow && current.opts.slideShow.autoStart) {
            SlideShow.start();
          }
        } else if (SlideShow && SlideShow.isActive) {
          SlideShow.clear();
        }
      },
  
      "afterShow.fb": function (e, instance, current) {
        var SlideShow = instance && instance.SlideShow;
  
        if (SlideShow && SlideShow.isActive) {
          SlideShow.set();
        }
      },
  
      "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
        var SlideShow = instance && instance.SlideShow;
  
        // "P" or Spacebar
        if (
          SlideShow &&
          current.opts.slideShow &&
          (keycode === 80 || keycode === 32) &&
          !$(document.activeElement).is("button,a,input")
        ) {
          keypress.preventDefault();
  
          SlideShow.toggle();
        }
      },
  
      "beforeClose.fb onDeactivate.fb": function (e, instance) {
        var SlideShow = instance && instance.SlideShow;
  
        if (SlideShow) {
          SlideShow.stop();
        }
      },
    });
  
    // Page Visibility API to pause slideshow when window is not active
    $(document).on("visibilitychange", function () {
      var instance = $.fancybox.getInstance(),
        SlideShow = instance && instance.SlideShow;
  
      if (SlideShow && SlideShow.isActive) {
        if (document.hidden) {
          SlideShow.clear();
        } else {
          SlideShow.set();
        }
      }
    });
  })(document, jQuery);
  // ==========================================================================
  //
  // FullScreen
  // Adds fullscreen functionality
  //
  // ==========================================================================
  (function (document, $) {
    "use strict";
  
    // Collection of methods supported by user browser
    var fn = (function () {
      var fnMap = [
        [
          "requestFullscreen",
          "exitFullscreen",
          "fullscreenElement",
          "fullscreenEnabled",
          "fullscreenchange",
          "fullscreenerror",
        ],
        // new WebKit
        [
          "webkitRequestFullscreen",
          "webkitExitFullscreen",
          "webkitFullscreenElement",
          "webkitFullscreenEnabled",
          "webkitfullscreenchange",
          "webkitfullscreenerror",
        ],
        // old WebKit (Safari 5.1)
        [
          "webkitRequestFullScreen",
          "webkitCancelFullScreen",
          "webkitCurrentFullScreenElement",
          "webkitCancelFullScreen",
          "webkitfullscreenchange",
          "webkitfullscreenerror",
        ],
        [
          "mozRequestFullScreen",
          "mozCancelFullScreen",
          "mozFullScreenElement",
          "mozFullScreenEnabled",
          "mozfullscreenchange",
          "mozfullscreenerror",
        ],
        [
          "msRequestFullscreen",
          "msExitFullscreen",
          "msFullscreenElement",
          "msFullscreenEnabled",
          "MSFullscreenChange",
          "MSFullscreenError",
        ],
      ];
  
      var ret = {};
  
      for (var i = 0; i < fnMap.length; i++) {
        var val = fnMap[i];
  
        if (val && val[1] in document) {
          for (var j = 0; j < val.length; j++) {
            ret[fnMap[0][j]] = val[j];
          }
  
          return ret;
        }
      }
  
      return false;
    })();
  
    if (fn) {
      var FullScreen = {
        request: function (elem) {
          elem = elem || document.documentElement;
  
          elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
        },
        exit: function () {
          document[fn.exitFullscreen]();
        },
        toggle: function (elem) {
          elem = elem || document.documentElement;
  
          if (this.isFullscreen()) {
            this.exit();
          } else {
            this.request(elem);
          }
        },
        isFullscreen: function () {
          return Boolean(document[fn.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(document[fn.fullscreenEnabled]);
        },
      };
  
      $.extend(true, $.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
            "</button>",
        },
        fullScreen: {
          autoStart: false,
        },
      });
  
      $(document).on(fn.fullscreenchange, function () {
        var isFullscreen = FullScreen.isFullscreen(),
          instance = $.fancybox.getInstance();
  
        if (instance) {
          // If image is zooming, then force to stop and reposition properly
          if (
            instance.current &&
            instance.current.type === "image" &&
            instance.isAnimating
          ) {
            instance.isAnimating = false;
  
            instance.update(true, true, 0);
  
            if (!instance.isComplete) {
              instance.complete();
            }
          }
  
          instance.trigger("onFullscreenChange", isFullscreen);
  
          instance.$refs.container.toggleClass(
            "fancybox-is-fullscreen",
            isFullscreen
          );
  
          instance.$refs.toolbar
            .find("[data-fancybox-fullscreen]")
            .toggleClass("fancybox-button--fsenter", !isFullscreen)
            .toggleClass("fancybox-button--fsexit", isFullscreen);
        }
      });
    }
  
    $(document).on({
      "onInit.fb": function (e, instance) {
        var $container;
  
        if (!fn) {
          instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
  
          return;
        }
  
        if (instance && instance.group[instance.currIndex].opts.fullScreen) {
          $container = instance.$refs.container;
  
          $container.on(
            "click.fb-fullscreen",
            "[data-fancybox-fullscreen]",
            function (e) {
              e.stopPropagation();
              e.preventDefault();
  
              FullScreen.toggle();
            }
          );
  
          if (
            instance.opts.fullScreen &&
            instance.opts.fullScreen.autoStart === true
          ) {
            FullScreen.request();
          }
  
          // Expose API
          instance.FullScreen = FullScreen;
        } else if (instance) {
          instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
        }
      },
  
      "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
        // "F"
        if (instance && instance.FullScreen && keycode === 70) {
          keypress.preventDefault();
  
          instance.FullScreen.toggle();
        }
      },
  
      "beforeClose.fb": function (e, instance) {
        if (
          instance &&
          instance.FullScreen &&
          instance.$refs.container.hasClass("fancybox-is-fullscreen")
        ) {
          FullScreen.exit();
        }
      },
    });
  })(document, jQuery);
  // ==========================================================================
  //
  // Thumbs
  // Displays thumbnails in a grid
  //
  // ==========================================================================
  (function (document, $) {
    "use strict";
  
    var CLASS = "fancybox-thumbs",
      CLASS_ACTIVE = CLASS + "-active";
  
    // Make sure there are default values
    $.fancybox.defaults = $.extend(
      true,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
            "</button>",
        },
        thumbs: {
          autoStart: false, // Display thumbnails on opening
          hideOnClose: true, // Hide thumbnail grid when closing animation starts
          parentEl: ".fancybox-container", // Container is injected into this element
          axis: "y", // Vertical (y) or horizontal (x) scrolling
        },
      },
      $.fancybox.defaults
    );
  
    var FancyThumbs = function (instance) {
      this.init(instance);
    };
  
    $.extend(FancyThumbs.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: false,
      isActive: false,
  
      init: function (instance) {
        var self = this,
          group = instance.group,
          enabled = 0;
  
        self.instance = instance;
        self.opts = group[instance.currIndex].opts.thumbs;
  
        instance.Thumbs = self;
  
        self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");
  
        // Enable thumbs if at least two group items have thumbnails
        for (var i = 0, len = group.length; i < len; i++) {
          if (group[i].thumb) {
            enabled++;
          }
  
          if (enabled > 1) {
            break;
          }
        }
  
        if (enabled > 1 && !!self.opts) {
          self.$button.removeAttr("style").on("click", function () {
            self.toggle();
          });
  
          self.isActive = true;
        } else {
          self.$button.hide();
        }
      },
  
      create: function () {
        var self = this,
          instance = self.instance,
          parentEl = self.opts.parentEl,
          list = [],
          src;
  
        if (!self.$grid) {
          // Create main element
          self.$grid = $(
            '<div class="' +
              CLASS +
              " " +
              CLASS +
              "-" +
              self.opts.axis +
              '"></div>'
          ).appendTo(
            instance.$refs.container.find(parentEl).addBack().filter(parentEl)
          );
  
          // Add "click" event that performs gallery navigation
          self.$grid.on("click", "a", function () {
            instance.jumpTo($(this).attr("data-index"));
          });
        }
  
        // Build the list
        if (!self.$list) {
          self.$list = $('<div class="' + CLASS + '__list">').appendTo(
            self.$grid
          );
        }
  
        $.each(instance.group, function (i, item) {
          src = item.thumb;
  
          if (!src && item.type === "image") {
            src = item.src;
          }
  
          list.push(
            '<a href="javascript:;" tabindex="0" data-index="' +
              i +
              '"' +
              (src && src.length
                ? ' style="background-image:url(' + src + ')"'
                : 'class="fancybox-thumbs-missing"') +
              "></a>"
          );
        });
  
        self.$list[0].innerHTML = list.join("");
  
        if (self.opts.axis === "x") {
          // Set fixed width for list element to enable horizontal scrolling
          self.$list.width(
            parseInt(self.$grid.css("padding-right"), 10) +
              instance.group.length * self.$list.children().eq(0).outerWidth(true)
          );
        }
      },
  
      focus: function (duration) {
        var self = this,
          $list = self.$list,
          $grid = self.$grid,
          thumb,
          thumbPos;
  
        if (!self.instance.current) {
          return;
        }
  
        thumb = $list
          .children()
          .removeClass(CLASS_ACTIVE)
          .filter('[data-index="' + self.instance.current.index + '"]')
          .addClass(CLASS_ACTIVE);
  
        thumbPos = thumb.position();
  
        // Check if need to scroll to make current thumb visible
        if (
          self.opts.axis === "y" &&
          (thumbPos.top < 0 ||
            thumbPos.top > $list.height() - thumb.outerHeight())
        ) {
          $list.stop().animate(
            {
              scrollTop: $list.scrollTop() + thumbPos.top,
            },
            duration
          );
        } else if (
          self.opts.axis === "x" &&
          (thumbPos.left < $grid.scrollLeft() ||
            thumbPos.left >
              $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
        ) {
          $list.parent().stop().animate(
            {
              scrollLeft: thumbPos.left,
            },
            duration
          );
        }
      },
  
      update: function () {
        var that = this;
        that.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        );
  
        if (that.isVisible) {
          if (!that.$grid) {
            that.create();
          }
  
          that.instance.trigger("onThumbsShow");
  
          that.focus(0);
        } else if (that.$grid) {
          that.instance.trigger("onThumbsHide");
        }
  
        // Update content position
        that.instance.update();
      },
  
      hide: function () {
        this.isVisible = false;
        this.update();
      },
  
      show: function () {
        this.isVisible = true;
        this.update();
      },
  
      toggle: function () {
        this.isVisible = !this.isVisible;
        this.update();
      },
    });
  
    $(document).on({
      "onInit.fb": function (e, instance) {
        var Thumbs;
  
        if (instance && !instance.Thumbs) {
          Thumbs = new FancyThumbs(instance);
  
          if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
            Thumbs.show();
          }
        }
      },
  
      "beforeShow.fb": function (e, instance, item, firstRun) {
        var Thumbs = instance && instance.Thumbs;
  
        if (Thumbs && Thumbs.isVisible) {
          Thumbs.focus(firstRun ? 0 : 250);
        }
      },
  
      "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
        var Thumbs = instance && instance.Thumbs;
  
        // "G"
        if (Thumbs && Thumbs.isActive && keycode === 71) {
          keypress.preventDefault();
  
          Thumbs.toggle();
        }
      },
  
      "beforeClose.fb": function (e, instance) {
        var Thumbs = instance && instance.Thumbs;
  
        if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
          Thumbs.$grid.hide();
        }
      },
    });
  })(document, jQuery);
  //// ==========================================================================
  //
  // Share
  // Displays simple form for sharing current url
  //
  // ==========================================================================
  (function (document, $) {
    "use strict";
  
    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
          "</button>",
      },
      share: {
        url: function (instance, item) {
          return (
            (!instance.currentHash &&
            !(item.type === "inline" || item.type === "html")
              ? item.origSrc || item.src
              : false) || window.location
          );
        },
        tpl:
          '<div class="fancybox-share">' +
          "<h1>{{SHARE}}</h1>" +
          "<p>" +
          '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
          '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
          "<span>Facebook</span>" +
          "</a>" +
          '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
          '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
          "<span>Twitter</span>" +
          "</a>" +
          '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
          '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
          "<span>Pinterest</span>" +
          "</a>" +
          "</p>" +
          '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
          "</div>",
      },
    });
  
    function escapeHtml(string) {
      var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
      };
  
      return String(string).replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
      });
    }
  
    $(document).on("click", "[data-fancybox-share]", function () {
      var instance = $.fancybox.getInstance(),
        current = instance.current || null,
        url,
        tpl;
  
      if (!current) {
        return;
      }
  
      if ($.type(current.opts.share.url) === "function") {
        url = current.opts.share.url.apply(current, [instance, current]);
      }
  
      tpl = current.opts.share.tpl
        .replace(
          /\{\{media\}\}/g,
          current.type === "image" ? encodeURIComponent(current.src) : ""
        )
        .replace(/\{\{url\}\}/g, encodeURIComponent(url))
        .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
        .replace(
          /\{\{descr\}\}/g,
          instance.$caption ? encodeURIComponent(instance.$caption.text()) : ""
        );
  
      $.fancybox.open({
        src: instance.translate(instance, tpl),
        type: "html",
        opts: {
          touch: false,
          animationEffect: false,
          afterLoad: function (shareInstance, shareCurrent) {
            // Close self if parent instance is closing
            instance.$refs.container.one("beforeClose.fb", function () {
              shareInstance.close(null, 0);
            });
  
            // Opening links in a popup window
            shareCurrent.$content
              .find(".fancybox-share__button")
              .click(function () {
                window.open(this.href, "Share", "width=550, height=450");
                return false;
              });
          },
          mobile: {
            autoFocus: false,
          },
        },
      });
    });
  })(document, jQuery);
  // ==========================================================================
  //
  // Hash
  // Enables linking to each modal
  //
  // ==========================================================================
  (function (window, document, $) {
    "use strict";
  
    // Simple $.escapeSelector polyfill (for jQuery prior v3)
    if (!$.escapeSelector) {
      $.escapeSelector = function (sel) {
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        var fcssescape = function (ch, asCodePoint) {
          if (asCodePoint) {
            // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
            if (ch === "\0") {
              return "\uFFFD";
            }
  
            // Control characters and (dependent upon position) numbers get escaped as code points
            return (
              ch.slice(0, -1) +
              "\\" +
              ch.charCodeAt(ch.length - 1).toString(16) +
              " "
            );
          }
  
          // Other potentially-special ASCII characters get backslash-escaped
          return "\\" + ch;
        };
  
        return (sel + "").replace(rcssescape, fcssescape);
      };
    }
  
    // Get info about gallery name and current index from url
    function parseUrl() {
      var hash = window.location.hash.substr(1),
        rez = hash.split("-"),
        index =
          rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1])
            ? parseInt(rez.pop(-1), 10) || 1
            : 1,
        gallery = rez.join("-");
  
      return {
        hash: hash,
        /* Index is starting from 1 */
        index: index < 1 ? 1 : index,
        gallery: gallery,
      };
    }
  
    // Trigger click evnt on links to open new fancyBox instance
    function triggerFromUrl(url) {
      if (url.gallery !== "") {
        // If we can find element matching 'data-fancybox' atribute,
        // then triggering click event should start fancyBox
        $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
          .eq(url.index - 1)
          .focus()
          .trigger("click.fb-start");
      }
    }
  
    // Get gallery name from current instance
    function getGalleryID(instance) {
      var opts, ret;
  
      if (!instance) {
        return false;
      }
  
      opts = instance.current ? instance.current.opts : instance.opts;
      ret =
        opts.hash ||
        (opts.$orig
          ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger")
          : "");
  
      return ret === "" ? false : ret;
    }
  
    // Start when DOM becomes ready
    $(function () {
      // Check if user has disabled this module
      if ($.fancybox.defaults.hash === false) {
        return;
      }
  
      // Update hash when opening/closing fancyBox
      $(document).on({
        "onInit.fb": function (e, instance) {
          var url, gallery;
  
          if (instance.group[instance.currIndex].opts.hash === false) {
            return;
          }
  
          url = parseUrl();
          gallery = getGalleryID(instance);
  
          // Make sure gallery start index matches index from hash
          if (gallery && url.gallery && gallery == url.gallery) {
            instance.currIndex = url.index - 1;
          }
        },
  
        "beforeShow.fb": function (e, instance, current, firstRun) {
          var gallery;
  
          if (!current || current.opts.hash === false) {
            return;
          }
  
          // Check if need to update window hash
          gallery = getGalleryID(instance);
  
          if (!gallery) {
            return;
          }
  
          // Variable containing last hash value set by fancyBox
          // It will be used to determine if fancyBox needs to close after hash change is detected
          instance.currentHash =
            gallery +
            (instance.group.length > 1 ? "-" + (current.index + 1) : "");
  
          // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
          if (window.location.hash === "#" + instance.currentHash) {
            return;
          }
  
          if (firstRun && !instance.origHash) {
            instance.origHash = window.location.hash;
          }
  
          if (instance.hashTimer) {
            clearTimeout(instance.hashTimer);
          }
  
          // Update hash
          instance.hashTimer = setTimeout(function () {
            if ("replaceState" in window.history) {
              window.history[firstRun ? "pushState" : "replaceState"](
                {},
                document.title,
                window.location.pathname +
                  window.location.search +
                  "#" +
                  instance.currentHash
              );
  
              if (firstRun) {
                instance.hasCreatedHistory = true;
              }
            } else {
              window.location.hash = instance.currentHash;
            }
  
            instance.hashTimer = null;
          }, 300);
        },
  
        "beforeClose.fb": function (e, instance, current) {
          if (!current || current.opts.hash === false) {
            return;
          }
  
          clearTimeout(instance.hashTimer);
  
          // Goto previous history entry
          if (instance.currentHash && instance.hasCreatedHistory) {
            window.history.back();
          } else if (instance.currentHash) {
            if ("replaceState" in window.history) {
              window.history.replaceState(
                {},
                document.title,
                window.location.pathname +
                  window.location.search +
                  (instance.origHash || "")
              );
            } else {
              window.location.hash = instance.origHash;
            }
          }
  
          instance.currentHash = null;
        },
      });
  
      // Check if need to start/close after url has changed
      $(window).on("hashchange.fb", function () {
        var url = parseUrl(),
          fb = null;
  
        // Find last fancyBox instance that has "hash"
        $.each($(".fancybox-container").get().reverse(), function (index, value) {
          var tmp = $(value).data("FancyBox");
  
          if (tmp && tmp.currentHash) {
            fb = tmp;
            return false;
          }
        });
  
        if (fb) {
          // Now, compare hash values
          if (
            fb.currentHash !== url.gallery + "-" + url.index &&
            !(url.index === 1 && fb.currentHash == url.gallery)
          ) {
            fb.currentHash = null;
  
            fb.close();
          }
        } else if (url.gallery !== "") {
          triggerFromUrl(url);
        }
      });
  
      // Check current hash and trigger click event on matching element to start fancyBox, if needed
      setTimeout(function () {
        if (!$.fancybox.getInstance()) {
          triggerFromUrl(parseUrl());
        }
      }, 50);
    });
  })(window, document, jQuery);
  // ==========================================================================
  //
  // Wheel
  // Basic mouse weheel support for gallery navigation
  //
  // ==========================================================================
  (function (document, $) {
    "use strict";
  
    var prevTime = new Date().getTime();
  
    $(document).on({
      "onInit.fb": function (e, instance, current) {
        instance.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (e) {
            var current = instance.current,
              currTime = new Date().getTime();
  
            if (
              instance.group.length < 2 ||
              current.opts.wheel === false ||
              (current.opts.wheel === "auto" && current.type !== "image")
            ) {
              return;
            }
  
            e.preventDefault();
            e.stopPropagation();
  
            if (current.$slide.hasClass("fancybox-animated")) {
              return;
            }
  
            e = e.originalEvent || e;
  
            if (currTime - prevTime < 250) {
              return;
            }
  
            prevTime = currTime;
  
            instance[
              (-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0
                ? "next"
                : "previous"
            ]();
          }
        );
      },
    });
  })(document, jQuery);
  
  // isotope pkgd
  /*!
   * Isotope PACKAGED v3.0.6
   *
   * Licensed GPLv3 for open source use
   * or Isotope Commercial License for commercial use
   *
   * https://isotope.metafizzy.co
   * Copyright 2010-2018 Metafizzy
   */
  
  /**
   * Bridget makes jQuery widgets
   * v2.0.1
   * MIT license
   */
  
  /* jshint browser: true, strict: true, undef: true, unused: true */
  
  (function (window, factory) {
    // universal module definition
    /*jshint strict: false */ /* globals define, module, require */
    if (typeof define == "function" && define.amd) {
      // AMD
      define("jquery-bridget/jquery-bridget", ["jquery"], function (jQuery) {
        return factory(window, jQuery);
      });
    } else if (typeof module == "object" && module.exports) {
      // CommonJS
      module.exports = factory(window, require("jquery"));
    } else {
      // browser global
      window.jQueryBridget = factory(window, window.jQuery);
    }
  })(window, function factory(window, jQuery) {
    "use strict";
  
    // ----- utils ----- //
  
    var arraySlice = Array.prototype.slice;
  
    // helper function for logging errors
    // $.error breaks jQuery chaining
    var console = window.console;
    var logError =
      typeof console == "undefined"
        ? function () {}
        : function (message) {
            console.error(message);
          };
  
    // ----- jQueryBridget ----- //
  
    function jQueryBridget(namespace, PluginClass, $) {
      $ = $ || jQuery || window.jQuery;
      if (!$) {
        return;
      }
  
      // add option method -> $().plugin('option', {...})
      if (!PluginClass.prototype.option) {
        // option setter
        PluginClass.prototype.option = function (opts) {
          // bail out if not an object
          if (!$.isPlainObject(opts)) {
            return;
          }
          this.options = $.extend(true, this.options, opts);
        };
      }
  
      // make jQuery plugin
      $.fn[namespace] = function (arg0 /*, arg1 */) {
        if (typeof arg0 == "string") {
          // method call $().plugin( 'methodName', { options } )
          // shift arguments by 1
          var args = arraySlice.call(arguments, 1);
          return methodCall(this, arg0, args);
        }
        // just $().plugin({ options })
        plainCall(this, arg0);
        return this;
      };
  
      // $().plugin('methodName')
      function methodCall($elems, methodName, args) {
        var returnValue;
        var pluginMethodStr = "$()." + namespace + '("' + methodName + '")';
  
        $elems.each(function (i, elem) {
          // get instance
          var instance = $.data(elem, namespace);
          if (!instance) {
            logError(
              namespace +
                " not initialized. Cannot call methods, i.e. " +
                pluginMethodStr
            );
            return;
          }
  
          var method = instance[methodName];
          if (!method || methodName.charAt(0) == "_") {
            logError(pluginMethodStr + " is not a valid method");
            return;
          }
  
          // apply method, get return value
          var value = method.apply(instance, args);
          // set return value if value is returned, use only first value
          returnValue = returnValue === undefined ? value : returnValue;
        });
  
        return returnValue !== undefined ? returnValue : $elems;
      }
  
      function plainCall($elems, options) {
        $elems.each(function (i, elem) {
          var instance = $.data(elem, namespace);
          if (instance) {
            // set options & init
            instance.option(options);
            instance._init();
          } else {
            // initialize new instance
            instance = new PluginClass(elem, options);
            $.data(elem, namespace, instance);
          }
        });
      }
  
      updateJQuery($);
    }
  
    // ----- updateJQuery ----- //
  
    // set $.bridget for v1 backwards compatibility
    function updateJQuery($) {
      if (!$ || ($ && $.bridget)) {
        return;
      }
      $.bridget = jQueryBridget;
    }
  
    updateJQuery(jQuery || window.jQuery);
  
    // -----  ----- //
  
    return jQueryBridget;
  });
  
  /**
   * EvEmitter v1.1.0
   * Lil' event emitter
   * MIT License
   */
  
  /* jshint unused: true, undef: true, strict: true */
  
  (function (global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */
    if (typeof define == "function" && define.amd) {
      // AMD - RequireJS
      define("ev-emitter/ev-emitter", factory);
    } else if (typeof module == "object" && module.exports) {
      // CommonJS - Browserify, Webpack
      module.exports = factory();
    } else {
      // Browser globals
      global.EvEmitter = factory();
    }
  })(typeof window != "undefined" ? window : this, function () {
    function EvEmitter() {}
  
    var proto = EvEmitter.prototype;
  
    proto.on = function (eventName, listener) {
      if (!eventName || !listener) {
        return;
      }
      // set events hash
      var events = (this._events = this._events || {});
      // set listeners array
      var listeners = (events[eventName] = events[eventName] || []);
      // only add once
      if (listeners.indexOf(listener) == -1) {
        listeners.push(listener);
      }
  
      return this;
    };
  
    proto.once = function (eventName, listener) {
      if (!eventName || !listener) {
        return;
      }
      // add event
      this.on(eventName, listener);
      // set once flag
      // set onceEvents hash
      var onceEvents = (this._onceEvents = this._onceEvents || {});
      // set onceListeners object
      var onceListeners = (onceEvents[eventName] = onceEvents[eventName] || {});
      // set flag
      onceListeners[listener] = true;
  
      return this;
    };
  
    proto.off = function (eventName, listener) {
      var listeners = this._events && this._events[eventName];
      if (!listeners || !listeners.length) {
        return;
      }
      var index = listeners.indexOf(listener);
      if (index != -1) {
        listeners.splice(index, 1);
      }
  
      return this;
    };
  
    proto.emitEvent = function (eventName, args) {
      var listeners = this._events && this._events[eventName];
      if (!listeners || !listeners.length) {
        return;
      }
      // copy over to avoid interference if .off() in listener
      listeners = listeners.slice(0);
      args = args || [];
      // once stuff
      var onceListeners = this._onceEvents && this._onceEvents[eventName];
  
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        var isOnce = onceListeners && onceListeners[listener];
        if (isOnce) {
          // remove listener
          // remove before trigger to prevent recursion
          this.off(eventName, listener);
          // unset once flag
          delete onceListeners[listener];
        }
        // trigger listener
        listener.apply(this, args);
      }
  
      return this;
    };
  
    proto.allOff = function () {
      delete this._events;
      delete this._onceEvents;
    };
  
    return EvEmitter;
  });
  
  /*!
   * getSize v2.0.3
   * measure size of elements
   * MIT license
   */
  
  /* jshint browser: true, strict: true, undef: true, unused: true */
  /* globals console: false */
  
  (function (window, factory) {
    /* jshint strict: false */ /* globals define, module */
    if (typeof define == "function" && define.amd) {
      // AMD
      define("get-size/get-size", factory);
    } else if (typeof module == "object" && module.exports) {
      // CommonJS
      module.exports = factory();
    } else {
      // browser global
      window.getSize = factory();
    }
  })(window, function factory() {
    "use strict";
  
    // -------------------------- helpers -------------------------- //
  
    // get a number from a string, not a percentage
    function getStyleSize(value) {
      var num = parseFloat(value);
      // not a percent like '100%', and a number
      var isValid = value.indexOf("%") == -1 && !isNaN(num);
      return isValid && num;
    }
  
    function noop() {}
  
    var logError =
      typeof console == "undefined"
        ? noop
        : function (message) {
            console.error(message);
          };
  
    // -------------------------- measurements -------------------------- //
  
    var measurements = [
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "marginLeft",
      "marginRight",
      "marginTop",
      "marginBottom",
      "borderLeftWidth",
      "borderRightWidth",
      "borderTopWidth",
      "borderBottomWidth",
    ];
  
    var measurementsLength = measurements.length;
  
    function getZeroSize() {
      var size = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0,
      };
      for (var i = 0; i < measurementsLength; i++) {
        var measurement = measurements[i];
        size[measurement] = 0;
      }
      return size;
    }
  
    // -------------------------- getStyle -------------------------- //
  
    /**
     * getStyle, get style of element, check for Firefox bug
     * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
     */
    function getStyle(elem) {
      var style = getComputedStyle(elem);
      if (!style) {
        logError(
          "Style returned " +
            style +
            ". Are you running this code in a hidden iframe on Firefox? " +
            "See https://bit.ly/getsizebug1"
        );
      }
      return style;
    }
  
    // -------------------------- setup -------------------------- //
  
    var isSetup = false;
  
    var isBoxSizeOuter;
  
    /**
     * setup
     * check isBoxSizerOuter
     * do on first getSize() rather than on page load for Firefox bug
     */
    function setup() {
      // setup once
      if (isSetup) {
        return;
      }
      isSetup = true;
  
      // -------------------------- box sizing -------------------------- //
  
      /**
       * Chrome & Safari measure the outer-width on style.width on border-box elems
       * IE11 & Firefox<29 measures the inner-width
       */
      var div = document.createElement("div");
      div.style.width = "200px";
      div.style.padding = "1px 2px 3px 4px";
      div.style.borderStyle = "solid";
      div.style.borderWidth = "1px 2px 3px 4px";
      div.style.boxSizing = "border-box";
  
      var body = document.body || document.documentElement;
      body.appendChild(div);
      var style = getStyle(div);
      // round value for browser zoom. desandro/masonry#928
      isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
      getSize.isBoxSizeOuter = isBoxSizeOuter;
  
      body.removeChild(div);
    }
  
    // -------------------------- getSize -------------------------- //
  
    function getSize(elem) {
      setup();
  
      // use querySeletor if elem is string
      if (typeof elem == "string") {
        elem = document.querySelector(elem);
      }
  
      // do not proceed on non-objects
      if (!elem || typeof elem != "object" || !elem.nodeType) {
        return;
      }
  
      var style = getStyle(elem);
  
      // if hidden, everything is 0
      if (style.display == "none") {
        return getZeroSize();
      }
  
      var size = {};
      size.width = elem.offsetWidth;
      size.height = elem.offsetHeight;
  
      var isBorderBox = (size.isBorderBox = style.boxSizing == "border-box");
  
      // get all measurements
      for (var i = 0; i < measurementsLength; i++) {
        var measurement = measurements[i];
        var value = style[measurement];
        var num = parseFloat(value);
        // any 'auto', 'medium' value will be 0
        size[measurement] = !isNaN(num) ? num : 0;
      }
  
      var paddingWidth = size.paddingLeft + size.paddingRight;
      var paddingHeight = size.paddingTop + size.paddingBottom;
      var marginWidth = size.marginLeft + size.marginRight;
      var marginHeight = size.marginTop + size.marginBottom;
      var borderWidth = size.borderLeftWidth + size.borderRightWidth;
      var borderHeight = size.borderTopWidth + size.borderBottomWidth;
  
      var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
  
      // overwrite width and height if we can get it from style
      var styleWidth = getStyleSize(style.width);
      if (styleWidth !== false) {
        size.width =
          styleWidth +
          // add padding and border unless it's already including it
          (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
      }
  
      var styleHeight = getStyleSize(style.height);
      if (styleHeight !== false) {
        size.height =
          styleHeight +
          // add padding and border unless it's already including it
          (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
      }
  
      size.innerWidth = size.width - (paddingWidth + borderWidth);
      size.innerHeight = size.height - (paddingHeight + borderHeight);
  
      size.outerWidth = size.width + marginWidth;
      size.outerHeight = size.height + marginHeight;
  
      return size;
    }
  
    return getSize;
  });
  
  /**
   * matchesSelector v2.0.2
   * matchesSelector( element, '.selector' )
   * MIT license
   */
  
  /*jshint browser: true, strict: true, undef: true, unused: true */
  
  (function (window, factory) {
    /*global define: false, module: false */
    "use strict";
    // universal module definition
    if (typeof define == "function" && define.amd) {
      // AMD
      define("desandro-matches-selector/matches-selector", factory);
    } else if (typeof module == "object" && module.exports) {
      // CommonJS
      module.exports = factory();
    } else {
      // browser global
      window.matchesSelector = factory();
    }
  })(window, function factory() {
    "use strict";
  
    var matchesMethod = (function () {
      var ElemProto = window.Element.prototype;
      // check for the standard method name first
      if (ElemProto.matches) {
        return "matches";
      }
      // check un-prefixed
      if (ElemProto.matchesSelector) {
        return "matchesSelector";
      }
      // check vendor prefixes
      var prefixes = ["webkit", "moz", "ms", "o"];
  
      for (var i = 0; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        var method = prefix + "MatchesSelector";
        if (ElemProto[method]) {
          return method;
        }
      }
    })();
  
    return function matchesSelector(elem, selector) {
      return elem[matchesMethod](selector);
    };
  });
  
  /**
   * Fizzy UI utils v2.0.7
   * MIT license
   */
  
  /*jshint browser: true, undef: true, unused: true, strict: true */
  
  (function (window, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */
  
    if (typeof define == "function" && define.amd) {
      // AMD
      define("fizzy-ui-utils/utils", [
        "desandro-matches-selector/matches-selector",
      ], function (matchesSelector) {
        return factory(window, matchesSelector);
      });
    } else if (typeof module == "object" && module.exports) {
      // CommonJS
      module.exports = factory(window, require("desandro-matches-selector"));
    } else {
      // browser global
      window.fizzyUIUtils = factory(window, window.matchesSelector);
    }
  })(window, function factory(window, matchesSelector) {
    var utils = {};
  
    // ----- extend ----- //
  
    // extends objects
    utils.extend = function (a, b) {
      for (var prop in b) {
        a[prop] = b[prop];
      }
      return a;
    };
  
    // ----- modulo ----- //
  
    utils.modulo = function (num, div) {
      return ((num % div) + div) % div;
    };
  
    // ----- makeArray ----- //
  
    var arraySlice = Array.prototype.slice;
  
    // turn element or nodeList into an array
    utils.makeArray = function (obj) {
      if (Array.isArray(obj)) {
        // use object if already an array
        return obj;
      }
      // return empty array if undefined or null. #6
      if (obj === null || obj === undefined) {
        return [];
      }
  
      var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
      if (isArrayLike) {
        // convert nodeList to array
        return arraySlice.call(obj);
      }
  
      // array of single index
      return [obj];
    };
  
    // ----- removeFrom ----- //
  
    utils.removeFrom = function (ary, obj) {
      var index = ary.indexOf(obj);
      if (index != -1) {
        ary.splice(index, 1);
      }
    };
  
    // ----- getParent ----- //
  
    utils.getParent = function (elem, selector) {
      while (elem.parentNode && elem != document.body) {
        elem = elem.parentNode;
        if (matchesSelector(elem, selector)) {
          return elem;
        }
      }
    };
  
    // ----- getQueryElement ----- //
  
    // use element as selector string
    utils.getQueryElement = function (elem) {
      if (typeof elem == "string") {
        return document.querySelector(elem);
      }
      return elem;
    };
  
    // ----- handleEvent ----- //
  
    // enable .ontype to trigger from .addEventListener( elem, 'type' )
    utils.handleEvent = function (event) {
      var method = "on" + event.type;
      if (this[method]) {
        this[method](event);
      }
    };
  
    // ----- filterFindElements ----- //
  
    utils.filterFindElements = function (elems, selector) {
      // make array of elems
      elems = utils.makeArray(elems);
      var ffElems = [];
  
      elems.forEach(function (elem) {
        // check that elem is an actual element
        if (!(elem instanceof HTMLElement)) {
          return;
        }
        // add elem if no selector
        if (!selector) {
          ffElems.push(elem);
          return;
        }
        // filter & find items if we have a selector
        // filter
        if (matchesSelector(elem, selector)) {
          ffElems.push(elem);
        }
        // find children
        var childElems = elem.querySelectorAll(selector);
        // concat childElems to filterFound array
        for (var i = 0; i < childElems.length; i++) {
          ffElems.push(childElems[i]);
        }
      });
  
      return ffElems;
    };
  
    // ----- debounceMethod ----- //
  
    utils.debounceMethod = function (_class, methodName, threshold) {
      threshold = threshold || 100;
      // original method
      var method = _class.prototype[methodName];
      var timeoutName = methodName + "Timeout";
  
      _class.prototype[methodName] = function () {
        var timeout = this[timeoutName];
        clearTimeout(timeout);
  
        var args = arguments;
        var _this = this;
        this[timeoutName] = setTimeout(function () {
          method.apply(_this, args);
          delete _this[timeoutName];
        }, threshold);
      };
    };
  
    // ----- docReady ----- //
  
    utils.docReady = function (callback) {
      var readyState = document.readyState;
      if (readyState == "complete" || readyState == "interactive") {
        // do async to allow for other scripts to run. metafizzy/flickity#441
        setTimeout(callback);
      } else {
        document.addEventListener("DOMContentLoaded", callback);
      }
    };
  
    // ----- htmlInit ----- //
  
    // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    utils.toDashed = function (str) {
      return str
        .replace(/(.)([A-Z])/g, function (match, $1, $2) {
          return $1 + "-" + $2;
        })
        .toLowerCase();
    };
  
    var console = window.console;
    /**
     * allow user to initialize classes via [data-namespace] or .js-namespace class
     * htmlInit( Widget, 'widgetName' )
     * options are parsed from data-namespace-options
     */
    utils.htmlInit = function (WidgetClass, namespace) {
      utils.docReady(function () {
        var dashedNamespace = utils.toDashed(namespace);
        var dataAttr = "data-" + dashedNamespace;
        var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
        var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
        var elems = utils
          .makeArray(dataAttrElems)
          .concat(utils.makeArray(jsDashElems));
        var dataOptionsAttr = dataAttr + "-options";
        var jQuery = window.jQuery;
  
        elems.forEach(function (elem) {
          var attr =
            elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
          var options;
          try {
            options = attr && JSON.parse(attr);
          } catch (error) {
            // log error, do not initialize
            if (console) {
              console.error(
                "Error parsing " +
                  dataAttr +
                  " on " +
                  elem.className +
                  ": " +
                  error
              );
            }
            return;
          }
          // initialize
          var instance = new WidgetClass(elem, options);
          // make available via $().data('namespace')
          if (jQuery) {
            jQuery.data(elem, namespace, instance);
          }
        });
      });
    };
  
    // -----  ----- //
  
    return utils;
  });
  
  /**
   * Outlayer Item
   */
  
  (function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */
    if (typeof define == "function" && define.amd) {
      // AMD - RequireJS
      define("outlayer/item", [
        "ev-emitter/ev-emitter",
        "get-size/get-size",
      ], factory);
    } else if (typeof module == "object" && module.exports) {
      // CommonJS - Browserify, Webpack
      module.exports = factory(require("ev-emitter"), require("get-size"));
    } else {
      // browser global
      window.Outlayer = {};
      window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
    }
  })(window, function factory(EvEmitter, getSize) {
    "use strict";
  
    // ----- helpers ----- //
  
    function isEmptyObj(obj) {
      for (var prop in obj) {
        return false;
      }
      prop = null;
      return true;
    }
  
    // -------------------------- CSS3 support -------------------------- //
  
    var docElemStyle = document.documentElement.style;
  
    var transitionProperty =
      typeof docElemStyle.transition == "string"
        ? "transition"
        : "WebkitTransition";
    var transformProperty =
      typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
  
    var transitionEndEvent = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend",
    }[transitionProperty];
  
    // cache all vendor properties that could have vendor prefix
    var vendorProperties = {
      transform: transformProperty,
      transition: transitionProperty,
      transitionDuration: transitionProperty + "Duration",
      transitionProperty: transitionProperty + "Property",
      transitionDelay: transitionProperty + "Delay",
    };
  
    // -------------------------- Item -------------------------- //
  
    function Item(element, layout) {
      if (!element) {
        return;
      }
  
      this.element = element;
      // parent layout class, i.e. Masonry, Isotope, or Packery
      this.layout = layout;
      this.position = {
        x: 0,
        y: 0,
      };
  
      this._create();
    }
  
    // inherit EvEmitter
    var proto = (Item.prototype = Object.create(EvEmitter.prototype));
    proto.constructor = Item;
  
    proto._create = function () {
      // transition objects
      this._transn = {
        ingProperties: {},
        clean: {},
        onEnd: {},
      };
  
      this.css({
        position: "absolute",
      });
    };
  
    // trigger specified handler for event type
    proto.handleEvent = function (event) {
      var method = "on" + event.type;
      if (this[method]) {
        this[method](event);
      }
    };
  
    proto.getSize = function () {
      this.size = getSize(this.element);
    };
  
    /**
     * apply CSS styles to element
     * @param {Object} style
     */
    proto.css = function (style) {
      var elemStyle = this.element.style;
  
      for (var prop in style) {
        // use vendor property if available
        var supportedProp = vendorProperties[prop] || prop;
        elemStyle[supportedProp] = style[prop];
      }
    };
  
    // measure position, and sets it
    proto.getPosition = function () {
      var style = getComputedStyle(this.element);
      var isOriginLeft = this.layout._getOption("originLeft");
      var isOriginTop = this.layout._getOption("originTop");
      var xValue = style[isOriginLeft ? "left" : "right"];
      var yValue = style[isOriginTop ? "top" : "bottom"];
      var x = parseFloat(xValue);
      var y = parseFloat(yValue);
      // convert percent to pixels
      var layoutSize = this.layout.size;
      if (xValue.indexOf("%") != -1) {
        x = (x / 100) * layoutSize.width;
      }
      if (yValue.indexOf("%") != -1) {
        y = (y / 100) * layoutSize.height;
      }
      // clean up 'auto' or other non-integer values
      x = isNaN(x) ? 0 : x;
      y = isNaN(y) ? 0 : y;
      // remove padding from measurement
      x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
      y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
  
      this.position.x = x;
      this.position.y = y;
    };
  
    // set settled position, apply padding
    proto.layoutPosition = function () {
      var layoutSize = this.layout.size;
      var style = {};
      var isOriginLeft = this.layout._getOption("originLeft");
      var isOriginTop = this.layout._getOption("originTop");
  
      // x
      var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
      var xProperty = isOriginLeft ? "left" : "right";
      var xResetProperty = isOriginLeft ? "right" : "left";
  
      var x = this.position.x + layoutSize[xPadding];
      // set in percentage or pixels
      style[xProperty] = this.getXValue(x);
      // reset other property
      style[xResetProperty] = "";
  
      // y
      var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
      var yProperty = isOriginTop ? "top" : "bottom";
      var yResetProperty = isOriginTop ? "bottom" : "top";
  
      var y = this.position.y + layoutSize[yPadding];
      // set in percentage or pixels
      style[yProperty] = this.getYValue(y);
      // reset other property
      style[yResetProperty] = "";
  
      this.css(style);
      this.emitEvent("layout", [this]);
    };
  
    proto.getXValue = function (x) {
      var isHorizontal = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && !isHorizontal
        ? (x / this.layout.size.width) * 100 + "%"
        : x + "px";
    };
  
    proto.getYValue = function (y) {
      var isHorizontal = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && isHorizontal
        ? (y / this.layout.size.height) * 100 + "%"
        : y + "px";
    };
  
    proto._transitionTo = function (x, y) {
      this.getPosition();
      // get current x & y from top/left
      var curX = this.position.x;
      var curY = this.position.y;
  
      var didNotMove = x == this.position.x && y == this.position.y;
  
      // save end position
      this.setPosition(x, y);
  
      // if did not move and not transitioning, just go to layout
      if (didNotMove && !this.isTransitioning) {
        this.layoutPosition();
        return;
      }
  
      var transX = x - curX;
      var transY = y - curY;
      var transitionStyle = {};
      transitionStyle.transform = this.getTranslate(transX, transY);
  
      this.transition({
        to: transitionStyle,
        onTransitionEnd: {
          transform: this.layoutPosition,
        },
        isCleaning: true,
      });
    };
  
    proto.getTranslate = function (x, y) {
      // flip cooridinates if origin on right or bottom
      var isOriginLeft = this.layout._getOption("originLeft");
      var isOriginTop = this.layout._getOption("originTop");
      x = isOriginLeft ? x : -x;
      y = isOriginTop ? y : -y;
      return "translate3d(" + x + "px, " + y + "px, 0)";
    };
  
    // non transition + transform support
    proto.goTo = function (x, y) {
      this.setPosition(x, y);
      this.layoutPosition();
    };
  
    proto.moveTo = proto._transitionTo;
  
    proto.setPosition = function (x, y) {
      this.position.x = parseFloat(x);
      this.position.y = parseFloat(y);
    };
  
    // ----- transition ----- //
  
    /**
     * @param {Object} style - CSS
     * @param {Function} onTransitionEnd
     */
  
    // non transition, just trigger callback
    proto._nonTransition = function (args) {
      this.css(args.to);
      if (args.isCleaning) {
        this._removeStyles(args.to);
      }
      for (var prop in args.onTransitionEnd) {
        args.onTransitionEnd[prop].call(this);
      }
    };
  
    /**
     * proper transition
     * @param {Object} args - arguments
     *   @param {Object} to - style to transition to
     *   @param {Object} from - style to start transition from
     *   @param {Boolean} isCleaning - removes transition styles after transition
     *   @param {Function} onTransitionEnd - callback
     */
    proto.transition = function (args) {
      // redirect to nonTransition if no transition duration
      if (!parseFloat(this.layout.options.transitionDuration)) {
        this._nonTransition(args);
        return;
      }
  
      var _transition = this._transn;
      // keep track of onTransitionEnd callback by css property
      for (var prop in args.onTransitionEnd) {
        _transition.onEnd[prop] = args.onTransitionEnd[prop];
      }
      // keep track of properties that are transitioning
      for (prop in args.to) {
        _transition.ingProperties[prop] = true;
        // keep track of properties to clean up when transition is done
        if (args.isCleaning) {
          _transition.clean[prop] = true;
        }
      }
  
      // set from styles
      if (args.from) {
        this.css(args.from);
        // force redraw. http://blog.alexmaccaw.com/css-transitions
        var h = this.element.offsetHeight;
        // hack for JSHint to hush about unused var
        h = null;
      }
      // enable transition
      this.enableTransition(args.to);
      // set styles that are transitioning
      this.css(args.to);
  
      this.isTransitioning = true;
    };
  
    // dash before all cap letters, including first for
    // WebkitTransform => -webkit-transform
    function toDashedAll(str) {
      return str.replace(/([A-Z])/g, function ($1) {
        return "-" + $1.toLowerCase();
      });
    }
  
    var transitionProps = "opacity," + toDashedAll(transformProperty);
  
    proto.enableTransition = function (/* style */) {
      // HACK changing transitionProperty during a transition
      // will cause transition to jump
      if (this.isTransitioning) {
        return;
      }
  
      // make `transition: foo, bar, baz` from style object
      // HACK un-comment this when enableTransition can work
      // while a transition is happening
      // var transitionValues = [];
      // for ( var prop in style ) {
      //   // dash-ify camelCased properties like WebkitTransition
      //   prop = vendorProperties[ prop ] || prop;
      //   transitionValues.push( toDashedAll( prop ) );
      // }
      // munge number to millisecond, to match stagger
      var duration = this.layout.options.transitionDuration;
      duration = typeof duration == "number" ? duration + "ms" : duration;
      // enable transition styles
      this.css({
        transitionProperty: transitionProps,
        transitionDuration: duration,
        transitionDelay: this.staggerDelay || 0,
      });
      // listen for transition end event
      this.element.addEventListener(transitionEndEvent, this, false);
    };
  
    // ----- events ----- //
  
    proto.onwebkitTransitionEnd = function (event) {
      this.ontransitionend(event);
    };
  
    proto.onotransitionend = function (event) {
      this.ontransitionend(event);
    };
  
    // properties that I munge to make my life easier
    var dashedVendorProperties = {
      "-webkit-transform": "transform",
    };
  
    proto.ontransitionend = function (event) {
      // disregard bubbled events from children
      if (event.target !== this.element) {
        return;
      }
      var _transition = this._transn;
      // get property name of transitioned property, convert to prefix-free
      var propertyName =
        dashedVendorProperties[event.propertyName] || event.propertyName;
  
      // remove property that has completed transitioning
      delete _transition.ingProperties[propertyName];
      // check if any properties are still transitioning
      if (isEmptyObj(_transition.ingProperties)) {
        // all properties have completed transitioning
        this.disableTransition();
      }
      // clean style
      if (propertyName in _transition.clean) {
        // clean up style
        this.element.style[event.propertyName] = "";
        delete _transition.clean[propertyName];
      }
      // trigger onTransitionEnd callback
      if (propertyName in _transition.onEnd) {
        var onTransitionEnd = _transition.onEnd[propertyName];
        onTransitionEnd.call(this);
        delete _transition.onEnd[propertyName];
      }
  
      this.emitEvent("transitionEnd", [this]);
    };
  
    proto.disableTransition = function () {
      this.removeTransitionStyles();
      this.element.removeEventListener(transitionEndEvent, this, false);
      this.isTransitioning = false;
    };
  
    /**
     * removes style property from element
     * @param {Object} style
     **/
    proto._removeStyles = function (style) {
      // clean up transition styles
      var cleanStyle = {};
      for (var prop in style) {
        cleanStyle[prop] = "";
      }
      this.css(cleanStyle);
    };
  
    var cleanTransitionStyle = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
  
    proto.removeTransitionStyles = function () {
      // remove transition
      this.css(cleanTransitionStyle);
    };
  
    // ----- stagger ----- //
  
    proto.stagger = function (delay) {
      delay = isNaN(delay) ? 0 : delay;
      this.staggerDelay = delay + "ms";
    };
  
    // ----- show/hide/remove ----- //
  
    // remove element from DOM
    proto.removeElem = function () {
      this.element.parentNode.removeChild(this.element);
      // remove display: none
      this.css({ display: "" });
      this.emitEvent("remove", [this]);
    };
  
    proto.remove = function () {
      // just remove element if no transition support or no transition
      if (
        !transitionProperty ||
        !parseFloat(this.layout.options.transitionDuration)
      ) {
        this.removeElem();
        return;
      }
  
      // start transition
      this.once("transitionEnd", function () {
        this.removeElem();
      });
      this.hide();
    };
  
    proto.reveal = function () {
      delete this.isHidden;
      // remove display: none
      this.css({ display: "" });
  
      var options = this.layout.options;
  
      var onTransitionEnd = {};
      var transitionEndProperty =
        this.getHideRevealTransitionEndProperty("visibleStyle");
      onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
  
      this.transition({
        from: options.hiddenStyle,
        to: options.visibleStyle,
        isCleaning: true,
        onTransitionEnd: onTransitionEnd,
      });
    };
  
    proto.onRevealTransitionEnd = function () {
      // check if still visible
      // during transition, item may have been hidden
      if (!this.isHidden) {
        this.emitEvent("reveal");
      }
    };
  
    /**
     * get style property use for hide/reveal transition end
     * @param {String} styleProperty - hiddenStyle/visibleStyle
     * @returns {String}
     */
    proto.getHideRevealTransitionEndProperty = function (styleProperty) {
      var optionStyle = this.layout.options[styleProperty];
      // use opacity
      if (optionStyle.opacity) {
        return "opacity";
      }
      // get first property
      for (var prop in optionStyle) {
        return prop;
      }
    };
  
    proto.hide = function () {
      // set flag
      this.isHidden = true;
      // remove display: none
      this.css({ display: "" });
  
      var options = this.layout.options;
  
      var onTransitionEnd = {};
      var transitionEndProperty =
        this.getHideRevealTransitionEndProperty("hiddenStyle");
      onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
  
      this.transition({
        from: options.visibleStyle,
        to: options.hiddenStyle,
        // keep hidden stuff hidden
        isCleaning: true,
        onTransitionEnd: onTransitionEnd,
      });
    };
  
    proto.onHideTransitionEnd = function () {
      // check if still hidden
      // during transition, item may have been un-hidden
      if (this.isHidden) {
        this.css({ display: "none" });
        this.emitEvent("hide");
      }
    };
  
    proto.destroy = function () {
      this.css({
        position: "",
        left: "",
        right: "",
        top: "",
        bottom: "",
        transition: "",
        transform: "",
      });
    };
  
    return Item;
  });
  
  /*!
   * Outlayer v2.1.1
   * the brains and guts of a layout library
   * MIT license
   */
  
  (function (window, factory) {
    "use strict";
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */
    if (typeof define == "function" && define.amd) {
      // AMD - RequireJS
      define("outlayer/outlayer", [
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./item",
      ], function (EvEmitter, getSize, utils, Item) {
        return factory(window, EvEmitter, getSize, utils, Item);
      });
    } else if (typeof module == "object" && module.exports) {
      // CommonJS - Browserify, Webpack
      module.exports = factory(
        window,
        require("ev-emitter"),
        require("get-size"),
        require("fizzy-ui-utils"),
        require("./item")
      );
    } else {
      // browser global
      window.Outlayer = factory(
        window,
        window.EvEmitter,
        window.getSize,
        window.fizzyUIUtils,
        window.Outlayer.Item
      );
    }
  })(window, function factory(window, EvEmitter, getSize, utils, Item) {
    "use strict";
  
    // ----- vars ----- //
  
    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function () {};
  
    // -------------------------- Outlayer -------------------------- //
  
    // globally unique identifiers
    var GUID = 0;
    // internal store of all Outlayer intances
    var instances = {};
  
    /**
     * @param {Element, String} element
     * @param {Object} options
     * @constructor
     */
    function Outlayer(element, options) {
      var queryElement = utils.getQueryElement(element);
      if (!queryElement) {
        if (console) {
          console.error(
            "Bad element for " +
              this.constructor.namespace +
              ": " +
              (queryElement || element)
          );
        }
        return;
      }
      this.element = queryElement;
      // add jQuery
      if (jQuery) {
        this.$element = jQuery(this.element);
      }
  
      // options
      this.options = utils.extend({}, this.constructor.defaults);
      this.option(options);
  
      // add id for Outlayer.getFromElement
      var id = ++GUID;
      this.element.outlayerGUID = id; // expando
      instances[id] = this; // associate via id
  
      // kick it off
      this._create();
  
      var isInitLayout = this._getOption("initLayout");
      if (isInitLayout) {
        this.layout();
      }
    }
  
    // settings are for internal use only
    Outlayer.namespace = "outlayer";
    Outlayer.Item = Item;
  
    // default options
    Outlayer.defaults = {
      containerStyle: {
        position: "relative",
      },
      initLayout: true,
      originLeft: true,
      originTop: true,
      resize: true,
      resizeContainer: true,
      // item options
      transitionDuration: "0.4s",
      hiddenStyle: {
        opacity: 0,
        transform: "scale(0.001)",
      },
      visibleStyle: {
        opacity: 1,
        transform: "scale(1)",
      },
    };
  
    var proto = Outlayer.prototype;
    // inherit EvEmitter
    utils.extend(proto, EvEmitter.prototype);
  
    /**
     * set options
     * @param {Object} opts
     */
    proto.option = function (opts) {
      utils.extend(this.options, opts);
    };
  
    /**
     * get backwards compatible option value, check old name
     */
    proto._getOption = function (option) {
      var oldOption = this.constructor.compatOptions[option];
      return oldOption && this.options[oldOption] !== undefined
        ? this.options[oldOption]
        : this.options[option];
    };
  
    Outlayer.compatOptions = {
      // currentName: oldName
      initLayout: "isInitLayout",
      horizontal: "isHorizontal",
      layoutInstant: "isLayoutInstant",
      originLeft: "isOriginLeft",
      originTop: "isOriginTop",
      resize: "isResizeBound",
      resizeContainer: "isResizingContainer",
    };
  
    proto._create = function () {
      // get items from children
      this.reloadItems();
      // elements that affect layout, but are not laid out
      this.stamps = [];
      this.stamp(this.options.stamp);
      // set container style
      utils.extend(this.element.style, this.options.containerStyle);
  
      // bind resize method
      var canBindResize = this._getOption("resize");
      if (canBindResize) {
        this.bindResize();
      }
    };
  
    // goes through all children again and gets bricks in proper order
    proto.reloadItems = function () {
      // collection of item elements
      this.items = this._itemize(this.element.children);
    };
  
    /**
     * turn elements into Outlayer.Items to be used in layout
     * @param {Array or NodeList or HTMLElement} elems
     * @returns {Array} items - collection of new Outlayer Items
     */
    proto._itemize = function (elems) {
      var itemElems = this._filterFindItemElements(elems);
      var Item = this.constructor.Item;
  
      // create new Outlayer Items for collection
      var items = [];
      for (var i = 0; i < itemElems.length; i++) {
        var elem = itemElems[i];
        var item = new Item(elem, this);
        items.push(item);
      }
  
      return items;
    };
  
    /**
     * get item elements to be used in layout
     * @param {Array or NodeList or HTMLElement} elems
     * @returns {Array} items - item elements
     */
    proto._filterFindItemElements = function (elems) {
      return utils.filterFindElements(elems, this.options.itemSelector);
    };
  
    /**
     * getter method for getting item elements
     * @returns {Array} elems - collection of item elements
     */
    proto.getItemElements = function () {
      return this.items.map(function (item) {
        return item.element;
      });
    };
  
    // ----- init & layout ----- //
  
    /**
     * lays out all items
     */
    proto.layout = function () {
      this._resetLayout();
      this._manageStamps();
  
      // don't animate first layout
      var layoutInstant = this._getOption("layoutInstant");
      var isInstant =
        layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
      this.layoutItems(this.items, isInstant);
  
      // flag for initalized
      this._isLayoutInited = true;
    };
  
    // _init is alias for layout
    proto._init = proto.layout;
  
    /**
     * logic before any new layout
     */
    proto._resetLayout = function () {
      this.getSize();
    };
  
    proto.getSize = function () {
      this.size = getSize(this.element);
    };
  
    /**
     * get measurement from option, for columnWidth, rowHeight, gutter
     * if option is String -> get element from selector string, & get size of element
     * if option is Element -> get size of element
     * else use option as a number
     *
     * @param {String} measurement
     * @param {String} size - width or height
     * @private
     */
    proto._getMeasurement = function (measurement, size) {
      var option = this.options[measurement];
      var elem;
      if (!option) {
        // default to 0
        this[measurement] = 0;
      } else {
        // use option as an element
        if (typeof option == "string") {
          elem = this.element.querySelector(option);
        } else if (option instanceof HTMLElement) {
          elem = option;
        }
        // use size of element, if element
        this[measurement] = elem ? getSize(elem)[size] : option;
      }
    };
  
    /**
     * layout a collection of item elements
     * @api public
     */
    proto.layoutItems = function (items, isInstant) {
      items = this._getItemsForLayout(items);
  
      this._layoutItems(items, isInstant);
  
      this._postLayout();
    };
  
    /**
     * get the items to be laid out
     * you may want to skip over some items
     * @param {Array} items
     * @returns {Array} items
     */
    proto._getItemsForLayout = function (items) {
      return items.filter(function (item) {
        return !item.isIgnored;
      });
    };
  
    /**
     * layout items
     * @param {Array} items
     * @param {Boolean} isInstant
     */
    proto._layoutItems = function (items, isInstant) {
      this._emitCompleteOnItems("layout", items);
  
      if (!items || !items.length) {
        // no items, emit event with empty array
        return;
      }
  
      var queue = [];
  
      items.forEach(function (item) {
        // get x/y object from method
        var position = this._getItemLayoutPosition(item);
        // enqueue
        position.item = item;
        position.isInstant = isInstant || item.isLayoutInstant;
        queue.push(position);
      }, this);
  
      this._processLayoutQueue(queue);
    };
  
    /**
     * get item layout position
     * @param {Outlayer.Item} item
     * @returns {Object} x and y position
     */
    proto._getItemLayoutPosition = function (/* item */) {
      return {
        x: 0,
        y: 0,
      };
    };
  
    /**
     * iterate over array and position each item
     * Reason being - separating this logic prevents 'layout invalidation'
     * thx @paul_irish
     * @param {Array} queue
     */
    proto._processLayoutQueue = function (queue) {
      this.updateStagger();
      queue.forEach(function (obj, i) {
        this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
      }, this);
    };
  
    // set stagger from option in milliseconds number
    proto.updateStagger = function () {
      var stagger = this.options.stagger;
      if (stagger === null || stagger === undefined) {
        this.stagger = 0;
        return;
      }
      this.stagger = getMilliseconds(stagger);
      return this.stagger;
    };
  
    /**
     * Sets position of item in DOM
     * @param {Outlayer.Item} item
     * @param {Number} x - horizontal position
     * @param {Number} y - vertical position
     * @param {Boolean} isInstant - disables transitions
     */
    proto._positionItem = function (item, x, y, isInstant, i) {
      if (isInstant) {
        // if not transition, just set CSS
        item.goTo(x, y);
      } else {
        item.stagger(i * this.stagger);
        item.moveTo(x, y);
      }
    };
  
    /**
     * Any logic you want to do after each layout,
     * i.e. size the container
     */
    proto._postLayout = function () {
      this.resizeContainer();
    };
  
    proto.resizeContainer = function () {
      var isResizingContainer = this._getOption("resizeContainer");
      if (!isResizingContainer) {
        return;
      }
      var size = this._getContainerSize();
      if (size) {
        this._setContainerMeasure(size.width, true);
        this._setContainerMeasure(size.height, false);
      }
    };
  
    /**
     * Sets width or height of container if returned
     * @returns {Object} size
     *   @param {Number} width
     *   @param {Number} height
     */
    proto._getContainerSize = noop;
  
    /**
     * @param {Number} measure - size of width or height
     * @param {Boolean} isWidth
     */
    proto._setContainerMeasure = function (measure, isWidth) {
      if (measure === undefined) {
        return;
      }
  
      var elemSize = this.size;
      // add padding and border width if border box
      if (elemSize.isBorderBox) {
        measure += isWidth
          ? elemSize.paddingLeft +
            elemSize.paddingRight +
            elemSize.borderLeftWidth +
            elemSize.borderRightWidth
          : elemSize.paddingBottom +
            elemSize.paddingTop +
            elemSize.borderTopWidth +
            elemSize.borderBottomWidth;
      }
  
      measure = Math.max(measure, 0);
      this.element.style[isWidth ? "width" : "height"] = measure + "px";
    };
  
    /**
     * emit eventComplete on a collection of items events
     * @param {String} eventName
     * @param {Array} items - Outlayer.Items
     */
    proto._emitCompleteOnItems = function (eventName, items) {
      var _this = this;
      function onComplete() {
        _this.dispatchEvent(eventName + "Complete", null, [items]);
      }
  
      var count = items.length;
      if (!items || !count) {
        onComplete();
        return;
      }
  
      var doneCount = 0;
      function tick() {
        doneCount++;
        if (doneCount == count) {
          onComplete();
        }
      }
  
      // bind callback
      items.forEach(function (item) {
        item.once(eventName, tick);
      });
    };
  
    /**
     * emits events via EvEmitter and jQuery events
     * @param {String} type - name of event
     * @param {Event} event - original event
     * @param {Array} args - extra arguments
     */
    proto.dispatchEvent = function (type, event, args) {
      // add original event to arguments
      var emitArgs = event ? [event].concat(args) : args;
      this.emitEvent(type, emitArgs);
  
      if (jQuery) {
        // set this.$element
        this.$element = this.$element || jQuery(this.element);
        if (event) {
          // create jQuery event
          var $event = jQuery.Event(event);
          $event.type = type;
          this.$element.trigger($event, args);
        } else {
          // just trigger with type if no event available
          this.$element.trigger(type, args);
        }
      }
    };
  
    // -------------------------- ignore & stamps -------------------------- //
  
    /**
     * keep item in collection, but do not lay it out
     * ignored items do not get skipped in layout
     * @param {Element} elem
     */
    proto.ignore = function (elem) {
      var item = this.getItem(elem);
      if (item) {
        item.isIgnored = true;
      }
    };
  
    /**
     * return item to layout collection
     * @param {Element} elem
     */
    proto.unignore = function (elem) {
      var item = this.getItem(elem);
      if (item) {
        delete item.isIgnored;
      }
    };
  
    /**
     * adds elements to stamps
     * @param {NodeList, Array, Element, or String} elems
     */
    proto.stamp = function (elems) {
      elems = this._find(elems);
      if (!elems) {
        return;
      }
  
      this.stamps = this.stamps.concat(elems);
      // ignore
      elems.forEach(this.ignore, this);
    };
  
    /**
     * removes elements to stamps
     * @param {NodeList, Array, or Element} elems
     */
    proto.unstamp = function (elems) {
      elems = this._find(elems);
      if (!elems) {
        return;
      }
  
      elems.forEach(function (elem) {
        // filter out removed stamp elements
        utils.removeFrom(this.stamps, elem);
        this.unignore(elem);
      }, this);
    };
  
    /**
     * finds child elements
     * @param {NodeList, Array, Element, or String} elems
     * @returns {Array} elems
     */
    proto._find = function (elems) {
      if (!elems) {
        return;
      }
      // if string, use argument as selector string
      if (typeof elems == "string") {
        elems = this.element.querySelectorAll(elems);
      }
      elems = utils.makeArray(elems);
      return elems;
    };
  
    proto._manageStamps = function () {
      if (!this.stamps || !this.stamps.length) {
        return;
      }
  
      this._getBoundingRect();
  
      this.stamps.forEach(this._manageStamp, this);
    };
  
    // update boundingLeft / Top
    proto._getBoundingRect = function () {
      // get bounding rect for container element
      var boundingRect = this.element.getBoundingClientRect();
      var size = this.size;
      this._boundingRect = {
        left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
        top: boundingRect.top + size.paddingTop + size.borderTopWidth,
        right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
        bottom:
          boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth),
      };
    };
  
    /**
     * @param {Element} stamp
     **/
    proto._manageStamp = noop;
  
    /**
     * get x/y position of element relative to container element
     * @param {Element} elem
     * @returns {Object} offset - has left, top, right, bottom
     */
    proto._getElementOffset = function (elem) {
      var boundingRect = elem.getBoundingClientRect();
      var thisRect = this._boundingRect;
      var size = getSize(elem);
      var offset = {
        left: boundingRect.left - thisRect.left - size.marginLeft,
        top: boundingRect.top - thisRect.top - size.marginTop,
        right: thisRect.right - boundingRect.right - size.marginRight,
        bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom,
      };
      return offset;
    };
  
    // -------------------------- resize -------------------------- //
  
    // enable event handlers for listeners
    // i.e. resize -> onresize
    proto.handleEvent = utils.handleEvent;
  
    /**
     * Bind layout to window resizing
     */
    proto.bindResize = function () {
      window.addEventListener("resize", this);
      this.isResizeBound = true;
    };
  
    /**
     * Unbind layout to window resizing
     */
    proto.unbindResize = function () {
      window.removeEventListener("resize", this);
      this.isResizeBound = false;
    };
  
    proto.onresize = function () {
      this.resize();
    };
  
    utils.debounceMethod(Outlayer, "onresize", 100);
  
    proto.resize = function () {
      // don't trigger if size did not change
      // or if resize was unbound. See #9
      if (!this.isResizeBound || !this.needsResizeLayout()) {
        return;
      }
  
      this.layout();
    };
  
    /**
     * check if layout is needed post layout
     * @returns Boolean
     */
    proto.needsResizeLayout = function () {
      var size = getSize(this.element);
      // check that this.size and size are there
      // IE8 triggers resize on body size change, so they might not be
      var hasSizes = this.size && size;
      return hasSizes && size.innerWidth !== this.size.innerWidth;
    };
  
    // -------------------------- methods -------------------------- //
  
    /**
     * add items to Outlayer instance
     * @param {Array or NodeList or Element} elems
     * @returns {Array} items - Outlayer.Items
     **/
    proto.addItems = function (elems) {
      var items = this._itemize(elems);
      // add items to collection
      if (items.length) {
        this.items = this.items.concat(items);
      }
      return items;
    };
  
    /**
     * Layout newly-appended item elements
     * @param {Array or NodeList or Element} elems
     */
    proto.appended = function (elems) {
      var items = this.addItems(elems);
      if (!items.length) {
        return;
      }
      // layout and reveal just the new items
      this.layoutItems(items, true);
      this.reveal(items);
    };
  
    /**
     * Layout prepended elements
     * @param {Array or NodeList or Element} elems
     */
    proto.prepended = function (elems) {
      var items = this._itemize(elems);
      if (!items.length) {
        return;
      }
      // add items to beginning of collection
      var previousItems = this.items.slice(0);
      this.items = items.concat(previousItems);
      // start new layout
      this._resetLayout();
      this._manageStamps();
      // layout new stuff without transition
      this.layoutItems(items, true);
      this.reveal(items);
      // layout previous items
      this.layoutItems(previousItems);
    };
  
    /**
     * reveal a collection of items
     * @param {Array of Outlayer.Items} items
     */
    proto.reveal = function (items) {
      this._emitCompleteOnItems("reveal", items);
      if (!items || !items.length) {
        return;
      }
      var stagger = this.updateStagger();
      items.forEach(function (item, i) {
        item.stagger(i * stagger);
        item.reveal();
      });
    };
  
    /**
     * hide a collection of items
     * @param {Array of Outlayer.Items} items
     */
    proto.hide = function (items) {
      this._emitCompleteOnItems("hide", items);
      if (!items || !items.length) {
        return;
      }
      var stagger = this.updateStagger();
      items.forEach(function (item, i) {
        item.stagger(i * stagger);
        item.hide();
      });
    };
  
    /**
     * reveal item elements
     * @param {Array}, {Element}, {NodeList} items
     */
    proto.revealItemElements = function (elems) {
      var items = this.getItems(elems);
      this.reveal(items);
    };
  
    /**
     * hide item elements
     * @param {Array}, {Element}, {NodeList} items
     */
    proto.hideItemElements = function (elems) {
      var items = this.getItems(elems);
      this.hide(items);
    };
  
    /**
     * get Outlayer.Item, given an Element
     * @param {Element} elem
     * @param {Function} callback
     * @returns {Outlayer.Item} item
     */
    proto.getItem = function (elem) {
      // loop through items to get the one that matches
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (item.element == elem) {
          // return item
          return item;
        }
      }
    };
  
    /**
     * get collection of Outlayer.Items, given Elements
     * @param {Array} elems
     * @returns {Array} items - Outlayer.Items
     */
    proto.getItems = function (elems) {
      elems = utils.makeArray(elems);
      var items = [];
      elems.forEach(function (elem) {
        var item = this.getItem(elem);
        if (item) {
          items.push(item);
        }
      }, this);
  
      return items;
    };
  
    /**
     * remove element(s) from instance and DOM
     * @param {Array or NodeList or Element} elems
     */
    proto.remove = function (elems) {
      var removeItems = this.getItems(elems);
  
      this._emitCompleteOnItems("remove", removeItems);
  
      // bail if no items to remove
      if (!removeItems || !removeItems.length) {
        return;
      }
  
      removeItems.forEach(function (item) {
        item.remove();
        // remove item from collection
        utils.removeFrom(this.items, item);
      }, this);
    };
  
    // ----- destroy ----- //
  
    // remove and disable Outlayer instance
    proto.destroy = function () {
      // clean up dynamic styles
      var style = this.element.style;
      style.height = "";
      style.position = "";
      style.width = "";
      // destroy items
      this.items.forEach(function (item) {
        item.destroy();
      });
  
      this.unbindResize();
  
      var id = this.element.outlayerGUID;
      delete instances[id]; // remove reference to instance by id
      delete this.element.outlayerGUID;
      // remove data for jQuery
      if (jQuery) {
        jQuery.removeData(this.element, this.constructor.namespace);
      }
    };
  
    // -------------------------- data -------------------------- //
  
    /**
     * get Outlayer instance from element
     * @param {Element} elem
     * @returns {Outlayer}
     */
    Outlayer.data = function (elem) {
      elem = utils.getQueryElement(elem);
      var id = elem && elem.outlayerGUID;
      return id && instances[id];
    };
  
    // -------------------------- create Outlayer class -------------------------- //
  
    /**
     * create a layout class
     * @param {String} namespace
     */
    Outlayer.create = function (namespace, options) {
      // sub-class Outlayer
      var Layout = subclass(Outlayer);
      // apply new options and compatOptions
      Layout.defaults = utils.extend({}, Outlayer.defaults);
      utils.extend(Layout.defaults, options);
      Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
  
      Layout.namespace = namespace;
  
      Layout.data = Outlayer.data;
  
      // sub-class Item
      Layout.Item = subclass(Item);
  
      // -------------------------- declarative -------------------------- //
  
      utils.htmlInit(Layout, namespace);
  
      // -------------------------- jQuery bridge -------------------------- //
  
      // make into jQuery plugin
      if (jQuery && jQuery.bridget) {
        jQuery.bridget(namespace, Layout);
      }
  
      return Layout;
    };
  
    function subclass(Parent) {
      function SubClass() {
        Parent.apply(this, arguments);
      }
  
      SubClass.prototype = Object.create(Parent.prototype);
      SubClass.prototype.constructor = SubClass;
  
      return SubClass;
    }
  
    // ----- helpers ----- //
  
    // how many milliseconds are in each unit
    var msUnits = {
      ms: 1,
      s: 1000,
    };
  
    // munge time-like parameter into millisecond number
    // '0.4s' -> 40
    function getMilliseconds(time) {
      if (typeof time == "number") {
        return time;
      }
      var matches = time.match(/(^\d*\.?\d*)(\w*)/);
      var num = matches && matches[1];
      var unit = matches && matches[2];
      if (!num.length) {
        return 0;
      }
      num = parseFloat(num);
      var mult = msUnits[unit] || 1;
      return num * mult;
    }
  
    // ----- fin ----- //
  
    // back in global
    Outlayer.Item = Item;
  
    return Outlayer;
  });
  
  /**
   * Isotope Item
   **/
  
  (function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == "function" && define.amd) {
      // AMD
      define("isotope-layout/js/item", ["outlayer/outlayer"], factory);
    } else if (typeof module == "object" && module.exports) {
      // CommonJS
      module.exports = factory(require("outlayer"));
    } else {
      // browser global
      window.Isotope = window.Isotope || {};
      window.Isotope.Item = factory(window.Outlayer);
    }
  })(window, function factory(Outlayer) {
    "use strict";
  
    // -------------------------- Item -------------------------- //
  
    // sub-class Outlayer Item
    function Item() {
      Outlayer.Item.apply(this, arguments);
    }
  
    var proto = (Item.prototype = Object.create(Outlayer.Item.prototype));
  
    var _create = proto._create;
    proto._create = function () {
      // assign id, used for original-order sorting
      this.id = this.layout.itemGUID++;
      _create.call(this);
      this.sortData = {};
    };
  
    proto.updateSortData = function () {
      if (this.isIgnored) {
        return;
      }
      // default sorters
      this.sortData.id = this.id;
      // for backward compatibility
      this.sortData["original-order"] = this.id;
      this.sortData.random = Math.random();
      // go thru getSortData obj and apply the sorters
      var getSortData = this.layout.options.getSortData;
      var sorters = this.layout._sorters;
      for (var key in getSortData) {
        var sorter = sorters[key];
        this.sortData[key] = sorter(this.element, this);
      }
    };
  
    var _destroy = proto.destroy;
    proto.destroy = function () {
      // call super
      _destroy.apply(this, arguments);
      // reset display, #741
      this.css({
        display: "",
      });
    };
  
    return Item;
  });
  
  /**
   * Isotope LayoutMode
   */
  
  (function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == "function" && define.amd) {
      // AMD
      define("isotope-layout/js/layout-mode", [
        "get-size/get-size",
        "outlayer/outlayer",
      ], factory);
    } else if (typeof module == "object" && module.exports) {
      // CommonJS
      module.exports = factory(require("get-size"), require("outlayer"));
    } else {
      // browser global
      window.Isotope = window.Isotope || {};
      window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
    }
  })(window, function factory(getSize, Outlayer) {
    "use strict";
  
    // layout mode class
    function LayoutMode(isotope) {
      this.isotope = isotope;
      // link properties
      if (isotope) {
        this.options = isotope.options[this.namespace];
        this.element = isotope.element;
        this.items = isotope.filteredItems;
        this.size = isotope.size;
      }
    }
  
    var proto = LayoutMode.prototype;
  
    /**
     * some methods should just defer to default Outlayer method
     * and reference the Isotope instance as `this`
     **/
    var facadeMethods = [
      "_resetLayout",
      "_getItemLayoutPosition",
      "_manageStamp",
      "_getContainerSize",
      "_getElementOffset",
      "needsResizeLayout",
      "_getOption",
    ];
  
    facadeMethods.forEach(function (methodName) {
      proto[methodName] = function () {
        return Outlayer.prototype[methodName].apply(this.isotope, arguments);
      };
    });
  
    // -----  ----- //
  
    // for horizontal layout modes, check vertical size
    proto.needsVerticalResizeLayout = function () {
      // don't trigger if size did not change
      var size = getSize(this.isotope.element);
      // check that this.size and size are there
      // IE8 triggers resize on body size change, so they might not be
      var hasSizes = this.isotope.size && size;
      return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    };
  
    // ----- measurements ----- //
  
    proto._getMeasurement = function () {
      this.isotope._getMeasurement.apply(this, arguments);
    };
  
    proto.getColumnWidth = function () {
      this.getSegmentSize("column", "Width");
    };
  
    proto.getRowHeight = function () {
      this.getSegmentSize("row", "Height");
    };
  
    /**
     * get columnWidth or rowHeight
     * segment: 'column' or 'row'
     * size 'Width' or 'Height'
     **/
    proto.getSegmentSize = function (segment, size) {
      var segmentName = segment + size;
      var outerSize = "outer" + size;
      // columnWidth / outerWidth // rowHeight / outerHeight
      this._getMeasurement(segmentName, outerSize);
      // got rowHeight or columnWidth, we can chill
      if (this[segmentName]) {
        return;
      }
      // fall back to item of first element
      var firstItemSize = this.getFirstItemSize();
      this[segmentName] =
        (firstItemSize && firstItemSize[outerSize]) ||
        // or size of container
        this.isotope.size["inner" + size];
    };
  
    proto.getFirstItemSize = function () {
      var firstItem = this.isotope.filteredItems[0];
      return firstItem && firstItem.element && getSize(firstItem.element);
    };
  
    // ----- methods that should reference isotope ----- //
  
    proto.layout = function () {
      this.isotope.layout.apply(this.isotope, arguments);
    };
  
    proto.getSize = function () {
      this.isotope.getSize();
      this.size = this.isotope.size;
    };
  
    // -------------------------- create -------------------------- //
  
    LayoutMode.modes = {};
  
    LayoutMode.create = function (namespace, options) {
      function Mode() {
        LayoutMode.apply(this, arguments);
      }
  
      Mode.prototype = Object.create(proto);
      Mode.prototype.constructor = Mode;
  
      // default options
      if (options) {
        Mode.options = options;
      }
  
      Mode.prototype.namespace = namespace;
      // register in Isotope
      LayoutMode.modes[namespace] = Mode;
  
      return Mode;
    };
  
    return LayoutMode;
  });
  
  /*!
   * Masonry v4.2.1
   * Cascading grid layout library
   * https://masonry.desandro.com
   * MIT License
   * by David DeSandro
   */
  
  (function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == "function" && define.amd) {
      // AMD
      define("masonry-layout/masonry", [
        "outlayer/outlayer",
        "get-size/get-size",
      ], factory);
    } else if (typeof module == "object" && module.exports) {
      // CommonJS
      module.exports = factory(require("outlayer"), require("get-size"));
    } else {
      // browser global
      window.Masonry = factory(window.Outlayer, window.getSize);
    }
  })(window, function factory(Outlayer, getSize) {
    // -------------------------- masonryDefinition -------------------------- //
  
    // create an Outlayer layout class
    var Masonry = Outlayer.create("masonry");
    // isFitWidth -> fitWidth
    Masonry.compatOptions.fitWidth = "isFitWidth";
  
    var proto = Masonry.prototype;
  
    proto._resetLayout = function () {
      this.getSize();
      this._getMeasurement("columnWidth", "outerWidth");
      this._getMeasurement("gutter", "outerWidth");
      this.measureColumns();
  
      // reset column Y
      this.colYs = [];
      for (var i = 0; i < this.cols; i++) {
        this.colYs.push(0);
      }
  
      this.maxY = 0;
      this.horizontalColIndex = 0;
    };
  
    proto.measureColumns = function () {
      this.getContainerWidth();
      // if columnWidth is 0, default to outerWidth of first item
      if (!this.columnWidth) {
        var firstItem = this.items[0];
        var firstItemElem = firstItem && firstItem.element;
        // columnWidth fall back to item of first element
        this.columnWidth =
          (firstItemElem && getSize(firstItemElem).outerWidth) ||
          // if first elem has no width, default to size of container
          this.containerWidth;
      }
  
      var columnWidth = (this.columnWidth += this.gutter);
  
      // calculate columns
      var containerWidth = this.containerWidth + this.gutter;
      var cols = containerWidth / columnWidth;
      // fix rounding errors, typically with gutters
      var excess = columnWidth - (containerWidth % columnWidth);
      // if overshoot is less than a pixel, round up, otherwise floor it
      var mathMethod = excess && excess < 1 ? "round" : "floor";
      cols = Math[mathMethod](cols);
      this.cols = Math.max(cols, 1);
    };
  
    proto.getContainerWidth = function () {
      // container is parent if fit width
      var isFitWidth = this._getOption("fitWidth");
      var container = isFitWidth ? this.element.parentNode : this.element;
      // check that this.size and size are there
      // IE8 triggers resize on body size change, so they might not be
      var size = getSize(container);
      this.containerWidth = size && size.innerWidth;
    };
  
    proto._getItemLayoutPosition = function (item) {
      item.getSize();
      // how many columns does this brick span
      var remainder = item.size.outerWidth % this.columnWidth;
      var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
      // round if off by 1 pixel, otherwise use ceil
      var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
      colSpan = Math.min(colSpan, this.cols);
      // use horizontal or top column position
      var colPosMethod = this.options.horizontalOrder
        ? "_getHorizontalColPosition"
        : "_getTopColPosition";
      var colPosition = this[colPosMethod](colSpan, item);
      // position the brick
      var position = {
        x: this.columnWidth * colPosition.col,
        y: colPosition.y,
      };
      // apply setHeight to necessary columns
      var setHeight = colPosition.y + item.size.outerHeight;
      var setMax = colSpan + colPosition.col;
      for (var i = colPosition.col; i < setMax; i++) {
        this.colYs[i] = setHeight;
      }
  
      return position;
    };
  
    proto._getTopColPosition = function (colSpan) {
      var colGroup = this._getTopColGroup(colSpan);
      // get the minimum Y value from the columns
      var minimumY = Math.min.apply(Math, colGroup);
  
      return {
        col: colGroup.indexOf(minimumY),
        y: minimumY,
      };
    };
  
    /**
     * @param {Number} colSpan - number of columns the element spans
     * @returns {Array} colGroup
     */
    proto._getTopColGroup = function (colSpan) {
      if (colSpan < 2) {
        // if brick spans only one column, use all the column Ys
        return this.colYs;
      }
  
      var colGroup = [];
      // how many different places could this brick fit horizontally
      var groupCount = this.cols + 1 - colSpan;
      // for each group potential horizontal position
      for (var i = 0; i < groupCount; i++) {
        colGroup[i] = this._getColGroupY(i, colSpan);
      }
      return colGroup;
    };
  
    proto._getColGroupY = function (col, colSpan) {
      if (colSpan < 2) {
        return this.colYs[col];
      }
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice(col, col + colSpan);
      // and get the max value of the array
      return Math.max.apply(Math, groupColYs);
    };
  
    // get column position based on horizontal index. #873
    proto._getHorizontalColPosition = function (colSpan, item) {
      var col = this.horizontalColIndex % this.cols;
      var isOver = colSpan > 1 && col + colSpan > this.cols;
      // shift to next row if item can't fit on current row
      col = isOver ? 0 : col;
      // don't let zero-size items take up space
      var hasSize = item.size.outerWidth && item.size.outerHeight;
      this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
  
      return {
        col: col,
        y: this._getColGroupY(col, colSpan),
      };
    };
  
    proto._manageStamp = function (stamp) {
      var stampSize = getSize(stamp);
      var offset = this._getElementOffset(stamp);
      // get the columns that this stamp affects
      var isOriginLeft = this._getOption("originLeft");
      var firstX = isOriginLeft ? offset.left : offset.right;
      var lastX = firstX + stampSize.outerWidth;
      var firstCol = Math.floor(firstX / this.columnWidth);
      firstCol = Math.max(0, firstCol);
      var lastCol = Math.floor(lastX / this.columnWidth);
      // lastCol should not go over if multiple of columnWidth #425
      lastCol -= lastX % this.columnWidth ? 0 : 1;
      lastCol = Math.min(this.cols - 1, lastCol);
      // set colYs to bottom of the stamp
  
      var isOriginTop = this._getOption("originTop");
      var stampMaxY =
        (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
      for (var i = firstCol; i <= lastCol; i++) {
        this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
      }
    };
  
    proto._getContainerSize = function () {
      this.maxY = Math.max.apply(Math, this.colYs);
      var size = {
        height: this.maxY,
      };
  
      if (this._getOption("fitWidth")) {
        size.width = this._getContainerFitWidth();
      }
  
      return size;
    };
  
    proto._getContainerFitWidth = function () {
      var unusedCols = 0;
      // count unused columns
      var i = this.cols;
      while (--i) {
        if (this.colYs[i] !== 0) {
          break;
        }
        unusedCols++;
      }
      // fit container to columns that have been used
      return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    };
  
    proto.needsResizeLayout = function () {
      var previousWidth = this.containerWidth;
      this.getContainerWidth();
      return previousWidth != this.containerWidth;
    };
  
    return Masonry;
  });
  
  /*!
   * Masonry layout mode
   * sub-classes Masonry
   * https://masonry.desandro.com
   */
  
  (function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == "function" && define.amd) {
      // AMD
      define("isotope-layout/js/layout-modes/masonry", [
        "../layout-mode",
        "masonry-layout/masonry",
      ], factory);
    } else if (typeof module == "object" && module.exports) {
      // CommonJS
      module.exports = factory(
        require("../layout-mode"),
        require("masonry-layout")
      );
    } else {
      // browser global
      factory(window.Isotope.LayoutMode, window.Masonry);
    }
  })(window, function factory(LayoutMode, Masonry) {
    "use strict";
  
    // -------------------------- masonryDefinition -------------------------- //
  
    // create an Outlayer layout class
    var MasonryMode = LayoutMode.create("masonry");
  
    var proto = MasonryMode.prototype;
  
    var keepModeMethods = {
      _getElementOffset: true,
      layout: true,
      _getMeasurement: true,
    };
  
    // inherit Masonry prototype
    for (var method in Masonry.prototype) {
      // do not inherit mode methods
      if (!keepModeMethods[method]) {
        proto[method] = Masonry.prototype[method];
      }
    }
  
    var measureColumns = proto.measureColumns;
    proto.measureColumns = function () {
      // set items, used if measuring first item
      this.items = this.isotope.filteredItems;
      measureColumns.call(this);
    };
  
    // point to mode options for fitWidth
    var _getOption = proto._getOption;
    proto._getOption = function (option) {
      if (option == "fitWidth") {
        return this.options.isFitWidth !== undefined
          ? this.options.isFitWidth
          : this.options.fitWidth;
      }
      return _getOption.apply(this.isotope, arguments);
    };
  
    return MasonryMode;
  });
  
  /**
   * fitRows layout mode
   */
  
  (function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == "function" && define.amd) {
      // AMD
      define("isotope-layout/js/layout-modes/fit-rows", [
        "../layout-mode",
      ], factory);
    } else if (typeof exports == "object") {
      // CommonJS
      module.exports = factory(require("../layout-mode"));
    } else {
      // browser global
      factory(window.Isotope.LayoutMode);
    }
  })(window, function factory(LayoutMode) {
    "use strict";
  
    var FitRows = LayoutMode.create("fitRows");
  
    var proto = FitRows.prototype;
  
    proto._resetLayout = function () {
      this.x = 0;
      this.y = 0;
      this.maxY = 0;
      this._getMeasurement("gutter", "outerWidth");
    };
  
    proto._getItemLayoutPosition = function (item) {
      item.getSize();
  
      var itemWidth = item.size.outerWidth + this.gutter;
      // if this element cannot fit in the current row
      var containerWidth = this.isotope.size.innerWidth + this.gutter;
      if (this.x !== 0 && itemWidth + this.x > containerWidth) {
        this.x = 0;
        this.y = this.maxY;
      }
  
      var position = {
        x: this.x,
        y: this.y,
      };
  
      this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
      this.x += itemWidth;
  
      return position;
    };
  
    proto._getContainerSize = function () {
      return { height: this.maxY };
    };
  
    return FitRows;
  });
  
  /**
   * vertical layout mode
   */
  
  (function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == "function" && define.amd) {
      // AMD
      define("isotope-layout/js/layout-modes/vertical", [
        "../layout-mode",
      ], factory);
    } else if (typeof module == "object" && module.exports) {
      // CommonJS
      module.exports = factory(require("../layout-mode"));
    } else {
      // browser global
      factory(window.Isotope.LayoutMode);
    }
  })(window, function factory(LayoutMode) {
    "use strict";
  
    var Vertical = LayoutMode.create("vertical", {
      horizontalAlignment: 0,
    });
  
    var proto = Vertical.prototype;
  
    proto._resetLayout = function () {
      this.y = 0;
    };
  
    proto._getItemLayoutPosition = function (item) {
      item.getSize();
      var x =
        (this.isotope.size.innerWidth - item.size.outerWidth) *
        this.options.horizontalAlignment;
      var y = this.y;
      this.y += item.size.outerHeight;
      return { x: x, y: y };
    };
  
    proto._getContainerSize = function () {
      return { height: this.y };
    };
  
    return Vertical;
  });
  
  /*!
   * Isotope v3.0.6
   *
   * Licensed GPLv3 for open source use
   * or Isotope Commercial License for commercial use
   *
   * https://isotope.metafizzy.co
   * Copyright 2010-2018 Metafizzy
   */
  
  (function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == "function" && define.amd) {
      // AMD
      define([
        "outlayer/outlayer",
        "get-size/get-size",
        "desandro-matches-selector/matches-selector",
        "fizzy-ui-utils/utils",
        "isotope-layout/js/item",
        "isotope-layout/js/layout-mode",
        // include default layout modes
        "isotope-layout/js/layout-modes/masonry",
        "isotope-layout/js/layout-modes/fit-rows",
        "isotope-layout/js/layout-modes/vertical",
      ], function (Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
        return factory(
          window,
          Outlayer,
          getSize,
          matchesSelector,
          utils,
          Item,
          LayoutMode
        );
      });
    } else if (typeof module == "object" && module.exports) {
      // CommonJS
      module.exports = factory(
        window,
        require("outlayer"),
        require("get-size"),
        require("desandro-matches-selector"),
        require("fizzy-ui-utils"),
        require("isotope-layout/js/item"),
        require("isotope-layout/js/layout-mode"),
        // include default layout modes
        require("isotope-layout/js/layout-modes/masonry"),
        require("isotope-layout/js/layout-modes/fit-rows"),
        require("isotope-layout/js/layout-modes/vertical")
      );
    } else {
      // browser global
      window.Isotope = factory(
        window,
        window.Outlayer,
        window.getSize,
        window.matchesSelector,
        window.fizzyUIUtils,
        window.Isotope.Item,
        window.Isotope.LayoutMode
      );
    }
  })(
    window,
    function factory(
      window,
      Outlayer,
      getSize,
      matchesSelector,
      utils,
      Item,
      LayoutMode
    ) {
      // -------------------------- vars -------------------------- //
  
      var jQuery = window.jQuery;
  
      // -------------------------- helpers -------------------------- //
  
      var trim = String.prototype.trim
        ? function (str) {
            return str.trim();
          }
        : function (str) {
            return str.replace(/^\s+|\s+$/g, "");
          };
  
      // -------------------------- isotopeDefinition -------------------------- //
  
      // create an Outlayer layout class
      var Isotope = Outlayer.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: true,
        sortAscending: true,
      });
  
      Isotope.Item = Item;
      Isotope.LayoutMode = LayoutMode;
  
      var proto = Isotope.prototype;
  
      proto._create = function () {
        this.itemGUID = 0;
        // functions that sort items
        this._sorters = {};
        this._getSorters();
        // call super
        Outlayer.prototype._create.call(this);
  
        // create layout modes
        this.modes = {};
        // start filteredItems with all items
        this.filteredItems = this.items;
        // keep of track of sortBys
        this.sortHistory = ["original-order"];
        // create from registered layout modes
        for (var name in LayoutMode.modes) {
          this._initLayoutMode(name);
        }
      };
  
      proto.reloadItems = function () {
        // reset item ID counter
        this.itemGUID = 0;
        // call super
        Outlayer.prototype.reloadItems.call(this);
      };
  
      proto._itemize = function () {
        var items = Outlayer.prototype._itemize.apply(this, arguments);
        // assign ID for original-order
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          item.id = this.itemGUID++;
        }
        this._updateItemsSortData(items);
        return items;
      };
  
      // -------------------------- layout -------------------------- //
  
      proto._initLayoutMode = function (name) {
        var Mode = LayoutMode.modes[name];
        // set mode options
        // HACK extend initial options, back-fill in default options
        var initialOpts = this.options[name] || {};
        this.options[name] = Mode.options
          ? utils.extend(Mode.options, initialOpts)
          : initialOpts;
        // init layout mode instance
        this.modes[name] = new Mode(this);
      };
  
      proto.layout = function () {
        // if first time doing layout, do all magic
        if (!this._isLayoutInited && this._getOption("initLayout")) {
          this.arrange();
          return;
        }
        this._layout();
      };
  
      // private method to be used in layout() & magic()
      proto._layout = function () {
        // don't animate first layout
        var isInstant = this._getIsInstant();
        // layout flow
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);
  
        // flag for initalized
        this._isLayoutInited = true;
      };
  
      // filter + sort + layout
      proto.arrange = function (opts) {
        // set any options pass
        this.option(opts);
        this._getIsInstant();
        // filter, sort, and layout
  
        // filter
        var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches;
  
        this._bindArrangeComplete();
  
        if (this._isInstant) {
          this._noTransition(this._hideReveal, [filtered]);
        } else {
          this._hideReveal(filtered);
        }
  
        this._sort();
        this._layout();
      };
      // alias to _init for main plugin method
      proto._init = proto.arrange;
  
      proto._hideReveal = function (filtered) {
        this.reveal(filtered.needReveal);
        this.hide(filtered.needHide);
      };
  
      // HACK
      // Don't animate/transition first layout
      // Or don't animate/transition other layouts
      proto._getIsInstant = function () {
        var isLayoutInstant = this._getOption("layoutInstant");
        var isInstant =
          isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
      };
  
      // listen for layoutComplete, hideComplete and revealComplete
      // to trigger arrangeComplete
      proto._bindArrangeComplete = function () {
        // listen for 3 events to trigger arrangeComplete
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;
        function arrangeParallelCallback() {
          if (isLayoutComplete && isHideComplete && isRevealComplete) {
            _this.dispatchEvent("arrangeComplete", null, [_this.filteredItems]);
          }
        }
        this.once("layoutComplete", function () {
          isLayoutComplete = true;
          arrangeParallelCallback();
        });
        this.once("hideComplete", function () {
          isHideComplete = true;
          arrangeParallelCallback();
        });
        this.once("revealComplete", function () {
          isRevealComplete = true;
          arrangeParallelCallback();
        });
      };
  
      // -------------------------- filter -------------------------- //
  
      proto._filter = function (items) {
        var filter = this.options.filter;
        filter = filter || "*";
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];
  
        var test = this._getFilterTest(filter);
  
        // test each item
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (item.isIgnored) {
            continue;
          }
          // add item to either matched or unmatched group
          var isMatched = test(item);
          // item.isFilterMatched = isMatched;
          // add to matches if its a match
          if (isMatched) {
            matches.push(item);
          }
          // add to additional group if item needs to be hidden or revealed
          if (isMatched && item.isHidden) {
            hiddenMatched.push(item);
          } else if (!isMatched && !item.isHidden) {
            visibleUnmatched.push(item);
          }
        }
  
        // return collections of items to be manipulated
        return {
          matches: matches,
          needReveal: hiddenMatched,
          needHide: visibleUnmatched,
        };
      };
  
      // get a jQuery, function, or a matchesSelector test given the filter
      proto._getFilterTest = function (filter) {
        if (jQuery && this.options.isJQueryFiltering) {
          // use jQuery
          return function (item) {
            return jQuery(item.element).is(filter);
          };
        }
        if (typeof filter == "function") {
          // use filter as function
          return function (item) {
            return filter(item.element);
          };
        }
        // default, use filter as selector string
        return function (item) {
          return matchesSelector(item.element, filter);
        };
      };
  
      // -------------------------- sorting -------------------------- //
  
      /**
       * @params {Array} elems
       * @public
       */
      proto.updateSortData = function (elems) {
        // get items
        var items;
        if (elems) {
          elems = utils.makeArray(elems);
          items = this.getItems(elems);
        } else {
          // update all items if no elems provided
          items = this.items;
        }
  
        this._getSorters();
        this._updateItemsSortData(items);
      };
  
      proto._getSorters = function () {
        var getSortData = this.options.getSortData;
        for (var key in getSortData) {
          var sorter = getSortData[key];
          this._sorters[key] = mungeSorter(sorter);
        }
      };
  
      /**
       * @params {Array} items - of Isotope.Items
       * @private
       */
      proto._updateItemsSortData = function (items) {
        // do not update if no items
        var len = items && items.length;
  
        for (var i = 0; len && i < len; i++) {
          var item = items[i];
          item.updateSortData();
        }
      };
  
      // ----- munge sorter ----- //
  
      // encapsulate this, as we just need mungeSorter
      // other functions in here are just for munging
      var mungeSorter = (function () {
        // add a magic layer to sorters for convienent shorthands
        // `.foo-bar` will use the text of .foo-bar querySelector
        // `[foo-bar]` will use attribute
        // you can also add parser
        // `.foo-bar parseInt` will parse that as a number
        function mungeSorter(sorter) {
          // if not a string, return function or whatever it is
          if (typeof sorter != "string") {
            return sorter;
          }
          // parse the sorter string
          var args = trim(sorter).split(" ");
          var query = args[0];
          // check if query looks like [an-attribute]
          var attrMatch = query.match(/^\[(.+)\]$/);
          var attr = attrMatch && attrMatch[1];
          var getValue = getValueGetter(attr, query);
          // use second argument as a parser
          var parser = Isotope.sortDataParsers[args[1]];
          // parse the value, if there was a parser
          sorter = parser
            ? function (elem) {
                return elem && parser(getValue(elem));
              }
            : // otherwise just return value
              function (elem) {
                return elem && getValue(elem);
              };
  
          return sorter;
        }
  
        // get an attribute getter, or get text of the querySelector
        function getValueGetter(attr, query) {
          // if query looks like [foo-bar], get attribute
          if (attr) {
            return function getAttribute(elem) {
              return elem.getAttribute(attr);
            };
          }
  
          // otherwise, assume its a querySelector, and get its text
          return function getChildText(elem) {
            var child = elem.querySelector(query);
            return child && child.textContent;
          };
        }
  
        return mungeSorter;
      })();
  
      // parsers used in getSortData shortcut strings
      Isotope.sortDataParsers = {
        parseInt: function (val) {
          return parseInt(val, 10);
        },
        parseFloat: function (val) {
          return parseFloat(val);
        },
      };
  
      // ----- sort method ----- //
  
      // sort filteredItem order
      proto._sort = function () {
        if (!this.options.sortBy) {
          return;
        }
        // keep track of sortBy History
        var sortBys = utils.makeArray(this.options.sortBy);
        if (!this._getIsSameSortBy(sortBys)) {
          // concat all sortBy and sortHistory, add to front, oldest goes in last
          this.sortHistory = sortBys.concat(this.sortHistory);
        }
        // sort magic
        var itemSorter = getItemSorter(
          this.sortHistory,
          this.options.sortAscending
        );
        this.filteredItems.sort(itemSorter);
      };
  
      // check if sortBys is same as start of sortHistory
      proto._getIsSameSortBy = function (sortBys) {
        for (var i = 0; i < sortBys.length; i++) {
          if (sortBys[i] != this.sortHistory[i]) {
            return false;
          }
        }
        return true;
      };
  
      // returns a function used for sorting
      function getItemSorter(sortBys, sortAsc) {
        return function sorter(itemA, itemB) {
          // cycle through all sortKeys
          for (var i = 0; i < sortBys.length; i++) {
            var sortBy = sortBys[i];
            var a = itemA.sortData[sortBy];
            var b = itemB.sortData[sortBy];
            if (a > b || a < b) {
              // if sortAsc is an object, use the value given the sortBy key
              var isAscending =
                sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
              var direction = isAscending ? 1 : -1;
              return (a > b ? 1 : -1) * direction;
            }
          }
          return 0;
        };
      }
  
      // -------------------------- methods -------------------------- //
  
      // get layout mode
      proto._mode = function () {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[layoutMode];
        if (!mode) {
          // TODO console.error
          throw new Error("No layout mode: " + layoutMode);
        }
        // HACK sync mode's options
        // any options set after init for layout mode need to be synced
        mode.options = this.options[layoutMode];
        return mode;
      };
  
      proto._resetLayout = function () {
        // trigger original reset layout
        Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout();
      };
  
      proto._getItemLayoutPosition = function (item) {
        return this._mode()._getItemLayoutPosition(item);
      };
  
      proto._manageStamp = function (stamp) {
        this._mode()._manageStamp(stamp);
      };
  
      proto._getContainerSize = function () {
        return this._mode()._getContainerSize();
      };
  
      proto.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      };
  
      // -------------------------- adding & removing -------------------------- //
  
      // HEADS UP overwrites default Outlayer appended
      proto.appended = function (elems) {
        var items = this.addItems(elems);
        if (!items.length) {
          return;
        }
        // filter, layout, reveal new items
        var filteredItems = this._filterRevealAdded(items);
        // add to filteredItems
        this.filteredItems = this.filteredItems.concat(filteredItems);
      };
  
      // HEADS UP overwrites default Outlayer prepended
      proto.prepended = function (elems) {
        var items = this._itemize(elems);
        if (!items.length) {
          return;
        }
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // filter, layout, reveal new items
        var filteredItems = this._filterRevealAdded(items);
        // layout previous items
        this.layoutItems(this.filteredItems);
        // add to items and filteredItems
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items);
      };
  
      proto._filterRevealAdded = function (items) {
        var filtered = this._filter(items);
        this.hide(filtered.needHide);
        // reveal all new items
        this.reveal(filtered.matches);
        // layout new items, no transition
        this.layoutItems(filtered.matches, true);
        return filtered.matches;
      };
  
      /**
       * Filter, sort, and layout newly-appended item elements
       * @param {Array or NodeList or Element} elems
       */
      proto.insert = function (elems) {
        var items = this.addItems(elems);
        if (!items.length) {
          return;
        }
        // append item elements
        var i, item;
        var len = items.length;
        for (i = 0; i < len; i++) {
          item = items[i];
          this.element.appendChild(item.element);
        }
        // filter new stuff
        var filteredInsertItems = this._filter(items).matches;
        // set flag
        for (i = 0; i < len; i++) {
          items[i].isLayoutInstant = true;
        }
        this.arrange();
        // reset flag
        for (i = 0; i < len; i++) {
          delete items[i].isLayoutInstant;
        }
        this.reveal(filteredInsertItems);
      };
  
      var _remove = proto.remove;
      proto.remove = function (elems) {
        elems = utils.makeArray(elems);
        var removeItems = this.getItems(elems);
        // do regular thing
        _remove.call(this, elems);
        // bail if no items to remove
        var len = removeItems && removeItems.length;
        // remove elems from filteredItems
        for (var i = 0; len && i < len; i++) {
          var item = removeItems[i];
          // remove item from collection
          utils.removeFrom(this.filteredItems, item);
        }
      };
  
      proto.shuffle = function () {
        // update random sortData
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          item.sortData.random = Math.random();
        }
        this.options.sortBy = "random";
        this._sort();
        this._layout();
      };
  
      /**
       * trigger fn without transition
       * kind of hacky to have this in the first place
       * @param {Function} fn
       * @param {Array} args
       * @returns ret
       * @private
       */
      proto._noTransition = function (fn, args) {
        // save transitionDuration before disabling
        var transitionDuration = this.options.transitionDuration;
        // disable transition
        this.options.transitionDuration = 0;
        // do it
        var returnValue = fn.apply(this, args);
        // re-enable transition for reveal
        this.options.transitionDuration = transitionDuration;
        return returnValue;
      };
  
      // ----- helper methods ----- //
  
      /**
       * getter method for getting filtered item elements
       * @returns {Array} elems - collection of item elements
       */
      proto.getFilteredItemElements = function () {
        return this.filteredItems.map(function (item) {
          return item.element;
        });
      };
  
      // -----  ----- //
  
      return Isotope;
    }
  );
  
  // slick cdn
  !(function (a) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "undefined" != typeof exports
      ? (module.exports = a(require("jquery")))
      : a(jQuery);
  })(function (a) {
    "use strict";
    var b = window.Slick || {};
    (b = (function () {
      function c(c, d) {
        var f,
          e = this;
        (e.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: a(c),
          appendDots: a(c),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
          nextArrow:
            '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (b, c) {
            return a(
              '<button type="button" data-role="none" role="button" tabindex="0" />'
            ).text(c + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (e.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          a.extend(e, e.initials),
          (e.activeBreakpoint = null),
          (e.animType = null),
          (e.animProp = null),
          (e.breakpoints = []),
          (e.breakpointSettings = []),
          (e.cssTransitions = !1),
          (e.focussed = !1),
          (e.interrupted = !1),
          (e.hidden = "hidden"),
          (e.paused = !0),
          (e.positionProp = null),
          (e.respondTo = null),
          (e.rowCount = 1),
          (e.shouldClick = !0),
          (e.$slider = a(c)),
          (e.$slidesCache = null),
          (e.transformType = null),
          (e.transitionType = null),
          (e.visibilityChange = "visibilitychange"),
          (e.windowWidth = 0),
          (e.windowTimer = null),
          (f = a(c).data("slick") || {}),
          (e.options = a.extend({}, e.defaults, d, f)),
          (e.currentSlide = e.options.initialSlide),
          (e.originalSettings = e.options),
          "undefined" != typeof document.mozHidden
            ? ((e.hidden = "mozHidden"),
              (e.visibilityChange = "mozvisibilitychange"))
            : "undefined" != typeof document.webkitHidden &&
              ((e.hidden = "webkitHidden"),
              (e.visibilityChange = "webkitvisibilitychange")),
          (e.autoPlay = a.proxy(e.autoPlay, e)),
          (e.autoPlayClear = a.proxy(e.autoPlayClear, e)),
          (e.autoPlayIterator = a.proxy(e.autoPlayIterator, e)),
          (e.changeSlide = a.proxy(e.changeSlide, e)),
          (e.clickHandler = a.proxy(e.clickHandler, e)),
          (e.selectHandler = a.proxy(e.selectHandler, e)),
          (e.setPosition = a.proxy(e.setPosition, e)),
          (e.swipeHandler = a.proxy(e.swipeHandler, e)),
          (e.dragHandler = a.proxy(e.dragHandler, e)),
          (e.keyHandler = a.proxy(e.keyHandler, e)),
          (e.instanceUid = b++),
          (e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          e.registerBreakpoints(),
          e.init(!0);
      }
      var b = 0;
      return c;
    })()),
      (b.prototype.activateADA = function () {
        var a = this;
        a.$slideTrack
          .find(".slick-active")
          .attr({ "aria-hidden": "false" })
          .find("a, input, button, select")
          .attr({ tabindex: "0" });
      }),
      (b.prototype.addSlide = b.prototype.slickAdd =
        function (b, c, d) {
          var e = this;
          if ("boolean" == typeof c) (d = c), (c = null);
          else if (0 > c || c >= e.slideCount) return !1;
          e.unload(),
            "number" == typeof c
              ? 0 === c && 0 === e.$slides.length
                ? a(b).appendTo(e.$slideTrack)
                : d
                ? a(b).insertBefore(e.$slides.eq(c))
                : a(b).insertAfter(e.$slides.eq(c))
              : d === !0
              ? a(b).prependTo(e.$slideTrack)
              : a(b).appendTo(e.$slideTrack),
            (e.$slides = e.$slideTrack.children(this.options.slide)),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slideTrack.append(e.$slides),
            e.$slides.each(function (b, c) {
              a(c).attr("data-slick-index", b);
            }),
            (e.$slidesCache = e.$slides),
            e.reinit();
        }),
      (b.prototype.animateHeight = function () {
        var a = this;
        if (
          1 === a.options.slidesToShow &&
          a.options.adaptiveHeight === !0 &&
          a.options.vertical === !1
        ) {
          var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
          a.$list.animate({ height: b }, a.options.speed);
        }
      }),
      (b.prototype.animateSlide = function (b, c) {
        var d = {},
          e = this;
        e.animateHeight(),
          e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
          e.transformsEnabled === !1
            ? e.options.vertical === !1
              ? e.$slideTrack.animate(
                  { left: b },
                  e.options.speed,
                  e.options.easing,
                  c
                )
              : e.$slideTrack.animate(
                  { top: b },
                  e.options.speed,
                  e.options.easing,
                  c
                )
            : e.cssTransitions === !1
            ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
              a({ animStart: e.currentLeft }).animate(
                { animStart: b },
                {
                  duration: e.options.speed,
                  easing: e.options.easing,
                  step: function (a) {
                    (a = Math.ceil(a)),
                      e.options.vertical === !1
                        ? ((d[e.animType] = "translate(" + a + "px, 0px)"),
                          e.$slideTrack.css(d))
                        : ((d[e.animType] = "translate(0px," + a + "px)"),
                          e.$slideTrack.css(d));
                  },
                  complete: function () {
                    c && c.call();
                  },
                }
              ))
            : (e.applyTransition(),
              (b = Math.ceil(b)),
              e.options.vertical === !1
                ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)")
                : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
              e.$slideTrack.css(d),
              c &&
                setTimeout(function () {
                  e.disableTransition(), c.call();
                }, e.options.speed));
      }),
      (b.prototype.getNavTarget = function () {
        var b = this,
          c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c;
      }),
      (b.prototype.asNavFor = function (b) {
        var c = this,
          d = c.getNavTarget();
        null !== d &&
          "object" == typeof d &&
          d.each(function () {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0);
          });
      }),
      (b.prototype.applyTransition = function (a) {
        var b = this,
          c = {};
        b.options.fade === !1
          ? (c[b.transitionType] =
              b.transformType + " " + b.options.speed + "ms " + b.options.cssEase)
          : (c[b.transitionType] =
              "opacity " + b.options.speed + "ms " + b.options.cssEase),
          b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
      }),
      (b.prototype.autoPlay = function () {
        var a = this;
        a.autoPlayClear(),
          a.slideCount > a.options.slidesToShow &&
            (a.autoPlayTimer = setInterval(
              a.autoPlayIterator,
              a.options.autoplaySpeed
            ));
      }),
      (b.prototype.autoPlayClear = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer);
      }),
      (b.prototype.autoPlayIterator = function () {
        var a = this,
          b = a.currentSlide + a.options.slidesToScroll;
        a.paused ||
          a.interrupted ||
          a.focussed ||
          (a.options.infinite === !1 &&
            (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1
              ? (a.direction = 0)
              : 0 === a.direction &&
                ((b = a.currentSlide - a.options.slidesToScroll),
                a.currentSlide - 1 === 0 && (a.direction = 1))),
          a.slideHandler(b));
      }),
      (b.prototype.buildArrows = function () {
        var b = this;
        b.options.arrows === !0 &&
          ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
          (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
          b.slideCount > b.options.slidesToShow
            ? (b.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              b.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              b.htmlExpr.test(b.options.prevArrow) &&
                b.$prevArrow.prependTo(b.options.appendArrows),
              b.htmlExpr.test(b.options.nextArrow) &&
                b.$nextArrow.appendTo(b.options.appendArrows),
              b.options.infinite !== !0 &&
                b.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : b.$prevArrow
                .add(b.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (b.prototype.buildDots = function () {
        var c,
          d,
          b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
          for (
            b.$slider.addClass("slick-dotted"),
              d = a("<ul />").addClass(b.options.dotsClass),
              c = 0;
            c <= b.getDotCount();
            c += 1
          )
            d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
          (b.$dots = d.appendTo(b.options.appendDots)),
            b.$dots
              .find("li")
              .first()
              .addClass("slick-active")
              .attr("aria-hidden", "false");
        }
      }),
      (b.prototype.buildOut = function () {
        var b = this;
        (b.$slides = b.$slider
          .children(b.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (b.slideCount = b.$slides.length),
          b.$slides.each(function (b, c) {
            a(c)
              .attr("data-slick-index", b)
              .data("originalStyling", a(c).attr("style") || "");
          }),
          b.$slider.addClass("slick-slider"),
          (b.$slideTrack =
            0 === b.slideCount
              ? a('<div class="slick-track"/>').appendTo(b.$slider)
              : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (b.$list = b.$slideTrack
            .wrap('<div aria-live="polite" class="slick-list"/>')
            .parent()),
          b.$slideTrack.css("opacity", 0),
          (b.options.centerMode === !0 || b.options.swipeToSlide === !0) &&
            (b.options.slidesToScroll = 1),
          a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
          b.setupInfinite(),
          b.buildArrows(),
          b.buildDots(),
          b.updateDots(),
          b.setSlideClasses(
            "number" == typeof b.currentSlide ? b.currentSlide : 0
          ),
          b.options.draggable === !0 && b.$list.addClass("draggable");
      }),
      (b.prototype.buildRows = function () {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          a = this;
        if (
          ((e = document.createDocumentFragment()),
          (g = a.$slider.children()),
          a.options.rows > 1)
        ) {
          for (
            h = a.options.slidesPerRow * a.options.rows,
              f = Math.ceil(g.length / h),
              b = 0;
            f > b;
            b++
          ) {
            var i = document.createElement("div");
            for (c = 0; c < a.options.rows; c++) {
              var j = document.createElement("div");
              for (d = 0; d < a.options.slidesPerRow; d++) {
                var k = b * h + (c * a.options.slidesPerRow + d);
                g.get(k) && j.appendChild(g.get(k));
              }
              i.appendChild(j);
            }
            e.appendChild(i);
          }
          a.$slider.empty().append(e),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (b.prototype.checkResponsive = function (b, c) {
        var e,
          f,
          g,
          d = this,
          h = !1,
          i = d.$slider.width(),
          j = window.innerWidth || a(window).width();
        if (
          ("window" === d.respondTo
            ? (g = j)
            : "slider" === d.respondTo
            ? (g = i)
            : "min" === d.respondTo && (g = Math.min(j, i)),
          d.options.responsive &&
            d.options.responsive.length &&
            null !== d.options.responsive)
        ) {
          f = null;
          for (e in d.breakpoints)
            d.breakpoints.hasOwnProperty(e) &&
              (d.originalSettings.mobileFirst === !1
                ? g < d.breakpoints[e] && (f = d.breakpoints[e])
                : g > d.breakpoints[e] && (f = d.breakpoints[e]));
          null !== f
            ? null !== d.activeBreakpoint
              ? (f !== d.activeBreakpoint || c) &&
                ((d.activeBreakpoint = f),
                "unslick" === d.breakpointSettings[f]
                  ? d.unslick(f)
                  : ((d.options = a.extend(
                      {},
                      d.originalSettings,
                      d.breakpointSettings[f]
                    )),
                    b === !0 && (d.currentSlide = d.options.initialSlide),
                    d.refresh(b)),
                (h = f))
              : ((d.activeBreakpoint = f),
                "unslick" === d.breakpointSettings[f]
                  ? d.unslick(f)
                  : ((d.options = a.extend(
                      {},
                      d.originalSettings,
                      d.breakpointSettings[f]
                    )),
                    b === !0 && (d.currentSlide = d.options.initialSlide),
                    d.refresh(b)),
                (h = f))
            : null !== d.activeBreakpoint &&
              ((d.activeBreakpoint = null),
              (d.options = d.originalSettings),
              b === !0 && (d.currentSlide = d.options.initialSlide),
              d.refresh(b),
              (h = f)),
            b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
        }
      }),
      (b.prototype.changeSlide = function (b, c) {
        var f,
          g,
          h,
          d = this,
          e = a(b.currentTarget);
        switch (
          (e.is("a") && b.preventDefault(),
          e.is("li") || (e = e.closest("li")),
          (h = d.slideCount % d.options.slidesToScroll !== 0),
          (f = h
            ? 0
            : (d.slideCount - d.currentSlide) % d.options.slidesToScroll),
          b.data.message)
        ) {
          case "previous":
            (g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f),
              d.slideCount > d.options.slidesToShow &&
                d.slideHandler(d.currentSlide - g, !1, c);
            break;
          case "next":
            (g = 0 === f ? d.options.slidesToScroll : f),
              d.slideCount > d.options.slidesToShow &&
                d.slideHandler(d.currentSlide + g, !1, c);
            break;
          case "index":
            var i =
              0 === b.data.index
                ? 0
                : b.data.index || e.index() * d.options.slidesToScroll;
            d.slideHandler(d.checkNavigable(i), !1, c),
              e.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (b.prototype.checkNavigable = function (a) {
        var c,
          d,
          b = this;
        if (((c = b.getNavigableIndexes()), (d = 0), a > c[c.length - 1]))
          a = c[c.length - 1];
        else
          for (var e in c) {
            if (a < c[e]) {
              a = d;
              break;
            }
            d = c[e];
          }
        return a;
      }),
      (b.prototype.cleanUpEvents = function () {
        var b = this;
        b.options.dots &&
          null !== b.$dots &&
          a("li", b.$dots)
            .off("click.slick", b.changeSlide)
            .off("mouseenter.slick", a.proxy(b.interrupt, b, !0))
            .off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
          b.$slider.off("focus.slick blur.slick"),
          b.options.arrows === !0 &&
            b.slideCount > b.options.slidesToShow &&
            (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
            b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
          b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
          b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
          b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
          b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
          b.$list.off("click.slick", b.clickHandler),
          a(document).off(b.visibilityChange, b.visibility),
          b.cleanUpSlideEvents(),
          b.options.accessibility === !0 &&
            b.$list.off("keydown.slick", b.keyHandler),
          b.options.focusOnSelect === !0 &&
            a(b.$slideTrack).children().off("click.slick", b.selectHandler),
          a(window).off(
            "orientationchange.slick.slick-" + b.instanceUid,
            b.orientationChange
          ),
          a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
          a("[draggable!=true]", b.$slideTrack).off(
            "dragstart",
            b.preventDefault
          ),
          a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
          a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
      }),
      (b.prototype.cleanUpSlideEvents = function () {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
          b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
      }),
      (b.prototype.cleanUpRows = function () {
        var b,
          a = this;
        a.options.rows > 1 &&
          ((b = a.$slides.children().children()),
          b.removeAttr("style"),
          a.$slider.empty().append(b));
      }),
      (b.prototype.clickHandler = function (a) {
        var b = this;
        b.shouldClick === !1 &&
          (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
      }),
      (b.prototype.destroy = function (b) {
        var c = this;
        c.autoPlayClear(),
          (c.touchObject = {}),
          c.cleanUpEvents(),
          a(".slick-cloned", c.$slider).detach(),
          c.$dots && c.$dots.remove(),
          c.$prevArrow &&
            c.$prevArrow.length &&
            (c.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
          c.$nextArrow &&
            c.$nextArrow.length &&
            (c.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
          c.$slides &&
            (c.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                a(this).attr("style", a(this).data("originalStyling"));
              }),
            c.$slideTrack.children(this.options.slide).detach(),
            c.$slideTrack.detach(),
            c.$list.detach(),
            c.$slider.append(c.$slides)),
          c.cleanUpRows(),
          c.$slider.removeClass("slick-slider"),
          c.$slider.removeClass("slick-initialized"),
          c.$slider.removeClass("slick-dotted"),
          (c.unslicked = !0),
          b || c.$slider.trigger("destroy", [c]);
      }),
      (b.prototype.disableTransition = function (a) {
        var b = this,
          c = {};
        (c[b.transitionType] = ""),
          b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
      }),
      (b.prototype.fadeSlide = function (a, b) {
        var c = this;
        c.cssTransitions === !1
          ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }),
            c.$slides
              .eq(a)
              .animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
          : (c.applyTransition(a),
            c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
            b &&
              setTimeout(function () {
                c.disableTransition(a), b.call();
              }, c.options.speed));
      }),
      (b.prototype.fadeSlideOut = function (a) {
        var b = this;
        b.cssTransitions === !1
          ? b.$slides
              .eq(a)
              .animate(
                { opacity: 0, zIndex: b.options.zIndex - 2 },
                b.options.speed,
                b.options.easing
              )
          : (b.applyTransition(a),
            b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
      }),
      (b.prototype.filterSlides = b.prototype.slickFilter =
        function (a) {
          var b = this;
          null !== a &&
            ((b.$slidesCache = b.$slides),
            b.unload(),
            b.$slideTrack.children(this.options.slide).detach(),
            b.$slidesCache.filter(a).appendTo(b.$slideTrack),
            b.reinit());
        }),
      (b.prototype.focusHandler = function () {
        var b = this;
        b.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function () {
              b.options.pauseOnFocus &&
                ((b.focussed = d.is(":focus")), b.autoPlay());
            }, 0);
          });
      }),
      (b.prototype.getCurrent = b.prototype.slickCurrentSlide =
        function () {
          var a = this;
          return a.currentSlide;
        }),
      (b.prototype.getDotCount = function () {
        var a = this,
          b = 0,
          c = 0,
          d = 0;
        if (a.options.infinite === !0)
          for (; b < a.slideCount; )
            ++d,
              (b = c + a.options.slidesToScroll),
              (c +=
                a.options.slidesToScroll <= a.options.slidesToShow
                  ? a.options.slidesToScroll
                  : a.options.slidesToShow);
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
          for (; b < a.slideCount; )
            ++d,
              (b = c + a.options.slidesToScroll),
              (c +=
                a.options.slidesToScroll <= a.options.slidesToShow
                  ? a.options.slidesToScroll
                  : a.options.slidesToShow);
        else
          d =
            1 +
            Math.ceil(
              (a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll
            );
        return d - 1;
      }),
      (b.prototype.getLeft = function (a) {
        var c,
          d,
          f,
          b = this,
          e = 0;
        return (
          (b.slideOffset = 0),
          (d = b.$slides.first().outerHeight(!0)),
          b.options.infinite === !0
            ? (b.slideCount > b.options.slidesToShow &&
                ((b.slideOffset = b.slideWidth * b.options.slidesToShow * -1),
                (e = d * b.options.slidesToShow * -1)),
              b.slideCount % b.options.slidesToScroll !== 0 &&
                a + b.options.slidesToScroll > b.slideCount &&
                b.slideCount > b.options.slidesToShow &&
                (a > b.slideCount
                  ? ((b.slideOffset =
                      (b.options.slidesToShow - (a - b.slideCount)) *
                      b.slideWidth *
                      -1),
                    (e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1))
                  : ((b.slideOffset =
                      (b.slideCount % b.options.slidesToScroll) *
                      b.slideWidth *
                      -1),
                    (e = (b.slideCount % b.options.slidesToScroll) * d * -1))))
            : a + b.options.slidesToShow > b.slideCount &&
              ((b.slideOffset =
                (a + b.options.slidesToShow - b.slideCount) * b.slideWidth),
              (e = (a + b.options.slidesToShow - b.slideCount) * d)),
          b.slideCount <= b.options.slidesToShow &&
            ((b.slideOffset = 0), (e = 0)),
          b.options.centerMode === !0 && b.options.infinite === !0
            ? (b.slideOffset +=
                b.slideWidth * Math.floor(b.options.slidesToShow / 2) -
                b.slideWidth)
            : b.options.centerMode === !0 &&
              ((b.slideOffset = 0),
              (b.slideOffset +=
                b.slideWidth * Math.floor(b.options.slidesToShow / 2))),
          (c =
            b.options.vertical === !1
              ? a * b.slideWidth * -1 + b.slideOffset
              : a * d * -1 + e),
          b.options.variableWidth === !0 &&
            ((f =
              b.slideCount <= b.options.slidesToShow || b.options.infinite === !1
                ? b.$slideTrack.children(".slick-slide").eq(a)
                : b.$slideTrack
                    .children(".slick-slide")
                    .eq(a + b.options.slidesToShow)),
            (c =
              b.options.rtl === !0
                ? f[0]
                  ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                  : 0
                : f[0]
                ? -1 * f[0].offsetLeft
                : 0),
            b.options.centerMode === !0 &&
              ((f =
                b.slideCount <= b.options.slidesToShow ||
                b.options.infinite === !1
                  ? b.$slideTrack.children(".slick-slide").eq(a)
                  : b.$slideTrack
                      .children(".slick-slide")
                      .eq(a + b.options.slidesToShow + 1)),
              (c =
                b.options.rtl === !0
                  ? f[0]
                    ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                    : 0
                  : f[0]
                  ? -1 * f[0].offsetLeft
                  : 0),
              (c += (b.$list.width() - f.outerWidth()) / 2))),
          c
        );
      }),
      (b.prototype.getOption = b.prototype.slickGetOption =
        function (a) {
          var b = this;
          return b.options[a];
        }),
      (b.prototype.getNavigableIndexes = function () {
        var e,
          a = this,
          b = 0,
          c = 0,
          d = [];
        for (
          a.options.infinite === !1
            ? (e = a.slideCount)
            : ((b = -1 * a.options.slidesToScroll),
              (c = -1 * a.options.slidesToScroll),
              (e = 2 * a.slideCount));
          e > b;
  
        )
          d.push(b),
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
        return d;
      }),
      (b.prototype.getSlick = function () {
        return this;
      }),
      (b.prototype.getSlideCount = function () {
        var c,
          d,
          e,
          b = this;
        return (
          (e =
            b.options.centerMode === !0
              ? b.slideWidth * Math.floor(b.options.slidesToShow / 2)
              : 0),
          b.options.swipeToSlide === !0
            ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
                return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft
                  ? ((d = f), !1)
                  : void 0;
              }),
              (c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1))
            : b.options.slidesToScroll
        );
      }),
      (b.prototype.goTo = b.prototype.slickGoTo =
        function (a, b) {
          var c = this;
          c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
        }),
      (b.prototype.init = function (b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") ||
          (a(c.$slider).addClass("slick-initialized"),
          c.buildRows(),
          c.buildOut(),
          c.setProps(),
          c.startLoad(),
          c.loadSlider(),
          c.initializeEvents(),
          c.updateArrows(),
          c.updateDots(),
          c.checkResponsive(!0),
          c.focusHandler()),
          b && c.$slider.trigger("init", [c]),
          c.options.accessibility === !0 && c.initADA(),
          c.options.autoplay && ((c.paused = !1), c.autoPlay());
      }),
      (b.prototype.initADA = function () {
        var b = this;
        b.$slides
          .add(b.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          b.$slideTrack.attr("role", "listbox"),
          b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
            a(this).attr({
              role: "option",
              "aria-describedby": "slick-slide" + b.instanceUid + c,
            });
          }),
          null !== b.$dots &&
            b.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (c) {
                a(this).attr({
                  role: "presentation",
                  "aria-selected": "false",
                  "aria-controls": "navigation" + b.instanceUid + c,
                  id: "slick-slide" + b.instanceUid + c,
                });
              })
              .first()
              .attr("aria-selected", "true")
              .end()
              .find("button")
              .attr("role", "button")
              .end()
              .closest("div")
              .attr("role", "toolbar"),
          b.activateADA();
      }),
      (b.prototype.initArrowEvents = function () {
        var a = this;
        a.options.arrows === !0 &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, a.changeSlide),
          a.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, a.changeSlide));
      }),
      (b.prototype.initDotEvents = function () {
        var b = this;
        b.options.dots === !0 &&
          b.slideCount > b.options.slidesToShow &&
          a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide),
          b.options.dots === !0 &&
            b.options.pauseOnDotsHover === !0 &&
            a("li", b.$dots)
              .on("mouseenter.slick", a.proxy(b.interrupt, b, !0))
              .on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
      }),
      (b.prototype.initSlideEvents = function () {
        var b = this;
        b.options.pauseOnHover &&
          (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
          b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
      }),
      (b.prototype.initializeEvents = function () {
        var b = this;
        b.initArrowEvents(),
          b.initDotEvents(),
          b.initSlideEvents(),
          b.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            b.swipeHandler
          ),
          b.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            b.swipeHandler
          ),
          b.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            b.swipeHandler
          ),
          b.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            b.swipeHandler
          ),
          b.$list.on("click.slick", b.clickHandler),
          a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
          b.options.accessibility === !0 &&
            b.$list.on("keydown.slick", b.keyHandler),
          b.options.focusOnSelect === !0 &&
            a(b.$slideTrack).children().on("click.slick", b.selectHandler),
          a(window).on(
            "orientationchange.slick.slick-" + b.instanceUid,
            a.proxy(b.orientationChange, b)
          ),
          a(window).on(
            "resize.slick.slick-" + b.instanceUid,
            a.proxy(b.resize, b)
          ),
          a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
          a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
          a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
      }),
      (b.prototype.initUI = function () {
        var a = this;
        a.options.arrows === !0 &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow.show(), a.$nextArrow.show()),
          a.options.dots === !0 &&
            a.slideCount > a.options.slidesToShow &&
            a.$dots.show();
      }),
      (b.prototype.keyHandler = function (a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === a.keyCode && b.options.accessibility === !0
            ? b.changeSlide({
                data: { message: b.options.rtl === !0 ? "next" : "previous" },
              })
            : 39 === a.keyCode &&
              b.options.accessibility === !0 &&
              b.changeSlide({
                data: { message: b.options.rtl === !0 ? "previous" : "next" },
              }));
      }),
      (b.prototype.lazyLoad = function () {
        function g(c) {
          a("img[data-lazy]", c).each(function () {
            var c = a(this),
              d = a(this).attr("data-lazy"),
              e = document.createElement("img");
            (e.onload = function () {
              c.animate({ opacity: 0 }, 100, function () {
                c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                  c.removeAttr("data-lazy").removeClass("slick-loading");
                }),
                  b.$slider.trigger("lazyLoaded", [b, c, d]);
              });
            }),
              (e.onerror = function () {
                c
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  b.$slider.trigger("lazyLoadError", [b, c, d]);
              }),
              (e.src = d);
          });
        }
        var c,
          d,
          e,
          f,
          b = this;
        b.options.centerMode === !0
          ? b.options.infinite === !0
            ? ((e = b.currentSlide + (b.options.slidesToShow / 2 + 1)),
              (f = e + b.options.slidesToShow + 2))
            : ((e = Math.max(
                0,
                b.currentSlide - (b.options.slidesToShow / 2 + 1)
              )),
              (f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide))
          : ((e = b.options.infinite
              ? b.options.slidesToShow + b.currentSlide
              : b.currentSlide),
            (f = Math.ceil(e + b.options.slidesToShow)),
            b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)),
          (c = b.$slider.find(".slick-slide").slice(e, f)),
          g(c),
          b.slideCount <= b.options.slidesToShow
            ? ((d = b.$slider.find(".slick-slide")), g(d))
            : b.currentSlide >= b.slideCount - b.options.slidesToShow
            ? ((d = b.$slider
                .find(".slick-cloned")
                .slice(0, b.options.slidesToShow)),
              g(d))
            : 0 === b.currentSlide &&
              ((d = b.$slider
                .find(".slick-cloned")
                .slice(-1 * b.options.slidesToShow)),
              g(d));
      }),
      (b.prototype.loadSlider = function () {
        var a = this;
        a.setPosition(),
          a.$slideTrack.css({ opacity: 1 }),
          a.$slider.removeClass("slick-loading"),
          a.initUI(),
          "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
      }),
      (b.prototype.next = b.prototype.slickNext =
        function () {
          var a = this;
          a.changeSlide({ data: { message: "next" } });
        }),
      (b.prototype.orientationChange = function () {
        var a = this;
        a.checkResponsive(), a.setPosition();
      }),
      (b.prototype.pause = b.prototype.slickPause =
        function () {
          var a = this;
          a.autoPlayClear(), (a.paused = !0);
        }),
      (b.prototype.play = b.prototype.slickPlay =
        function () {
          var a = this;
          a.autoPlay(),
            (a.options.autoplay = !0),
            (a.paused = !1),
            (a.focussed = !1),
            (a.interrupted = !1);
        }),
      (b.prototype.postSlide = function (a) {
        var b = this;
        b.unslicked ||
          (b.$slider.trigger("afterChange", [b, a]),
          (b.animating = !1),
          b.setPosition(),
          (b.swipeLeft = null),
          b.options.autoplay && b.autoPlay(),
          b.options.accessibility === !0 && b.initADA());
      }),
      (b.prototype.prev = b.prototype.slickPrev =
        function () {
          var a = this;
          a.changeSlide({ data: { message: "previous" } });
        }),
      (b.prototype.preventDefault = function (a) {
        a.preventDefault();
      }),
      (b.prototype.progressiveLazyLoad = function (b) {
        b = b || 1;
        var e,
          f,
          g,
          c = this,
          d = a("img[data-lazy]", c.$slider);
        d.length
          ? ((e = d.first()),
            (f = e.attr("data-lazy")),
            (g = document.createElement("img")),
            (g.onload = function () {
              e
                .attr("src", f)
                .removeAttr("data-lazy")
                .removeClass("slick-loading"),
                c.options.adaptiveHeight === !0 && c.setPosition(),
                c.$slider.trigger("lazyLoaded", [c, e, f]),
                c.progressiveLazyLoad();
            }),
            (g.onerror = function () {
              3 > b
                ? setTimeout(function () {
                    c.progressiveLazyLoad(b + 1);
                  }, 500)
                : (e
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  c.$slider.trigger("lazyLoadError", [c, e, f]),
                  c.progressiveLazyLoad());
            }),
            (g.src = f))
          : c.$slider.trigger("allImagesLoaded", [c]);
      }),
      (b.prototype.refresh = function (b) {
        var d,
          e,
          c = this;
        (e = c.slideCount - c.options.slidesToShow),
          !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
          c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
          (d = c.currentSlide),
          c.destroy(!0),
          a.extend(c, c.initials, { currentSlide: d }),
          c.init(),
          b || c.changeSlide({ data: { message: "index", index: d } }, !1);
      }),
      (b.prototype.registerBreakpoints = function () {
        var c,
          d,
          e,
          b = this,
          f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
          b.respondTo = b.options.respondTo || "window";
          for (c in f)
            if (
              ((e = b.breakpoints.length - 1),
              (d = f[c].breakpoint),
              f.hasOwnProperty(c))
            ) {
              for (; e >= 0; )
                b.breakpoints[e] &&
                  b.breakpoints[e] === d &&
                  b.breakpoints.splice(e, 1),
                  e--;
              b.breakpoints.push(d), (b.breakpointSettings[d] = f[c].settings);
            }
          b.breakpoints.sort(function (a, c) {
            return b.options.mobileFirst ? a - c : c - a;
          });
        }
      }),
      (b.prototype.reinit = function () {
        var b = this;
        (b.$slides = b.$slideTrack
          .children(b.options.slide)
          .addClass("slick-slide")),
          (b.slideCount = b.$slides.length),
          b.currentSlide >= b.slideCount &&
            0 !== b.currentSlide &&
            (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
          b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
          b.registerBreakpoints(),
          b.setProps(),
          b.setupInfinite(),
          b.buildArrows(),
          b.updateArrows(),
          b.initArrowEvents(),
          b.buildDots(),
          b.updateDots(),
          b.initDotEvents(),
          b.cleanUpSlideEvents(),
          b.initSlideEvents(),
          b.checkResponsive(!1, !0),
          b.options.focusOnSelect === !0 &&
            a(b.$slideTrack).children().on("click.slick", b.selectHandler),
          b.setSlideClasses(
            "number" == typeof b.currentSlide ? b.currentSlide : 0
          ),
          b.setPosition(),
          b.focusHandler(),
          (b.paused = !b.options.autoplay),
          b.autoPlay(),
          b.$slider.trigger("reInit", [b]);
      }),
      (b.prototype.resize = function () {
        var b = this;
        a(window).width() !== b.windowWidth &&
          (clearTimeout(b.windowDelay),
          (b.windowDelay = window.setTimeout(function () {
            (b.windowWidth = a(window).width()),
              b.checkResponsive(),
              b.unslicked || b.setPosition();
          }, 50)));
      }),
      (b.prototype.removeSlide = b.prototype.slickRemove =
        function (a, b, c) {
          var d = this;
          return (
            "boolean" == typeof a
              ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1))
              : (a = b === !0 ? --a : a),
            d.slideCount < 1 || 0 > a || a > d.slideCount - 1
              ? !1
              : (d.unload(),
                c === !0
                  ? d.$slideTrack.children().remove()
                  : d.$slideTrack.children(this.options.slide).eq(a).remove(),
                (d.$slides = d.$slideTrack.children(this.options.slide)),
                d.$slideTrack.children(this.options.slide).detach(),
                d.$slideTrack.append(d.$slides),
                (d.$slidesCache = d.$slides),
                void d.reinit())
          );
        }),
      (b.prototype.setCSS = function (a) {
        var d,
          e,
          b = this,
          c = {};
        b.options.rtl === !0 && (a = -a),
          (d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
          (e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
          (c[b.positionProp] = a),
          b.transformsEnabled === !1
            ? b.$slideTrack.css(c)
            : ((c = {}),
              b.cssTransitions === !1
                ? ((c[b.animType] = "translate(" + d + ", " + e + ")"),
                  b.$slideTrack.css(c))
                : ((c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)"),
                  b.$slideTrack.css(c)));
      }),
      (b.prototype.setDimensions = function () {
        var a = this;
        a.options.vertical === !1
          ? a.options.centerMode === !0 &&
            a.$list.css({ padding: "0px " + a.options.centerPadding })
          : (a.$list.height(
              a.$slides.first().outerHeight(!0) * a.options.slidesToShow
            ),
            a.options.centerMode === !0 &&
              a.$list.css({ padding: a.options.centerPadding + " 0px" })),
          (a.listWidth = a.$list.width()),
          (a.listHeight = a.$list.height()),
          a.options.vertical === !1 && a.options.variableWidth === !1
            ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)),
              a.$slideTrack.width(
                Math.ceil(
                  a.slideWidth * a.$slideTrack.children(".slick-slide").length
                )
              ))
            : a.options.variableWidth === !0
            ? a.$slideTrack.width(5e3 * a.slideCount)
            : ((a.slideWidth = Math.ceil(a.listWidth)),
              a.$slideTrack.height(
                Math.ceil(
                  a.$slides.first().outerHeight(!0) *
                    a.$slideTrack.children(".slick-slide").length
                )
              ));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 &&
          a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
      }),
      (b.prototype.setFade = function () {
        var c,
          b = this;
        b.$slides.each(function (d, e) {
          (c = b.slideWidth * d * -1),
            b.options.rtl === !0
              ? a(e).css({
                  position: "relative",
                  right: c,
                  top: 0,
                  zIndex: b.options.zIndex - 2,
                  opacity: 0,
                })
              : a(e).css({
                  position: "relative",
                  left: c,
                  top: 0,
                  zIndex: b.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          b.$slides
            .eq(b.currentSlide)
            .css({ zIndex: b.options.zIndex - 1, opacity: 1 });
      }),
      (b.prototype.setHeight = function () {
        var a = this;
        if (
          1 === a.options.slidesToShow &&
          a.options.adaptiveHeight === !0 &&
          a.options.vertical === !1
        ) {
          var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
          a.$list.css("height", b);
        }
      }),
      (b.prototype.setOption = b.prototype.slickSetOption =
        function () {
          var c,
            d,
            e,
            f,
            h,
            b = this,
            g = !1;
          if (
            ("object" === a.type(arguments[0])
              ? ((e = arguments[0]), (g = arguments[1]), (h = "multiple"))
              : "string" === a.type(arguments[0]) &&
                ((e = arguments[0]),
                (f = arguments[1]),
                (g = arguments[2]),
                "responsive" === arguments[0] && "array" === a.type(arguments[1])
                  ? (h = "responsive")
                  : "undefined" != typeof arguments[1] && (h = "single")),
            "single" === h)
          )
            b.options[e] = f;
          else if ("multiple" === h)
            a.each(e, function (a, c) {
              b.options[a] = c;
            });
          else if ("responsive" === h)
            for (d in f)
              if ("array" !== a.type(b.options.responsive))
                b.options.responsive = [f[d]];
              else {
                for (c = b.options.responsive.length - 1; c >= 0; )
                  b.options.responsive[c].breakpoint === f[d].breakpoint &&
                    b.options.responsive.splice(c, 1),
                    c--;
                b.options.responsive.push(f[d]);
              }
          g && (b.unload(), b.reinit());
        }),
      (b.prototype.setPosition = function () {
        var a = this;
        a.setDimensions(),
          a.setHeight(),
          a.options.fade === !1
            ? a.setCSS(a.getLeft(a.currentSlide))
            : a.setFade(),
          a.$slider.trigger("setPosition", [a]);
      }),
      (b.prototype.setProps = function () {
        var a = this,
          b = document.body.style;
        (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
          "top" === a.positionProp
            ? a.$slider.addClass("slick-vertical")
            : a.$slider.removeClass("slick-vertical"),
          (void 0 !== b.WebkitTransition ||
            void 0 !== b.MozTransition ||
            void 0 !== b.msTransition) &&
            a.options.useCSS === !0 &&
            (a.cssTransitions = !0),
          a.options.fade &&
            ("number" == typeof a.options.zIndex
              ? a.options.zIndex < 3 && (a.options.zIndex = 3)
              : (a.options.zIndex = a.defaults.zIndex)),
          void 0 !== b.OTransform &&
            ((a.animType = "OTransform"),
            (a.transformType = "-o-transform"),
            (a.transitionType = "OTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.webkitPerspective &&
              (a.animType = !1)),
          void 0 !== b.MozTransform &&
            ((a.animType = "MozTransform"),
            (a.transformType = "-moz-transform"),
            (a.transitionType = "MozTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.MozPerspective &&
              (a.animType = !1)),
          void 0 !== b.webkitTransform &&
            ((a.animType = "webkitTransform"),
            (a.transformType = "-webkit-transform"),
            (a.transitionType = "webkitTransition"),
            void 0 === b.perspectiveProperty &&
              void 0 === b.webkitPerspective &&
              (a.animType = !1)),
          void 0 !== b.msTransform &&
            ((a.animType = "msTransform"),
            (a.transformType = "-ms-transform"),
            (a.transitionType = "msTransition"),
            void 0 === b.msTransform && (a.animType = !1)),
          void 0 !== b.transform &&
            a.animType !== !1 &&
            ((a.animType = "transform"),
            (a.transformType = "transform"),
            (a.transitionType = "transition")),
          (a.transformsEnabled =
            a.options.useTransform && null !== a.animType && a.animType !== !1);
      }),
      (b.prototype.setSlideClasses = function (a) {
        var c,
          d,
          e,
          f,
          b = this;
        (d = b.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
          b.$slides.eq(a).addClass("slick-current"),
          b.options.centerMode === !0
            ? ((c = Math.floor(b.options.slidesToShow / 2)),
              b.options.infinite === !0 &&
                (a >= c && a <= b.slideCount - 1 - c
                  ? b.$slides
                      .slice(a - c, a + c + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((e = b.options.slidesToShow + a),
                    d
                      .slice(e - c + 1, e + c + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === a
                  ? d
                      .eq(d.length - 1 - b.options.slidesToShow)
                      .addClass("slick-center")
                  : a === b.slideCount - 1 &&
                    d.eq(b.options.slidesToShow).addClass("slick-center")),
              b.$slides.eq(a).addClass("slick-center"))
            : a >= 0 && a <= b.slideCount - b.options.slidesToShow
            ? b.$slides
                .slice(a, a + b.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : d.length <= b.options.slidesToShow
            ? d.addClass("slick-active").attr("aria-hidden", "false")
            : ((f = b.slideCount % b.options.slidesToShow),
              (e = b.options.infinite === !0 ? b.options.slidesToShow + a : a),
              b.options.slidesToShow == b.options.slidesToScroll &&
              b.slideCount - a < b.options.slidesToShow
                ? d
                    .slice(e - (b.options.slidesToShow - f), e + f)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : d
                    .slice(e, e + b.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
          "ondemand" === b.options.lazyLoad && b.lazyLoad();
      }),
      (b.prototype.setupInfinite = function () {
        var c,
          d,
          e,
          b = this;
        if (
          (b.options.fade === !0 && (b.options.centerMode = !1),
          b.options.infinite === !0 &&
            b.options.fade === !1 &&
            ((d = null), b.slideCount > b.options.slidesToShow))
        ) {
          for (
            e =
              b.options.centerMode === !0
                ? b.options.slidesToShow + 1
                : b.options.slidesToShow,
              c = b.slideCount;
            c > b.slideCount - e;
            c -= 1
          )
            (d = c - 1),
              a(b.$slides[d])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", d - b.slideCount)
                .prependTo(b.$slideTrack)
                .addClass("slick-cloned");
          for (c = 0; e > c; c += 1)
            (d = c),
              a(b.$slides[d])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", d + b.slideCount)
                .appendTo(b.$slideTrack)
                .addClass("slick-cloned");
          b.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              a(this).attr("id", "");
            });
        }
      }),
      (b.prototype.interrupt = function (a) {
        var b = this;
        a || b.autoPlay(), (b.interrupted = a);
      }),
      (b.prototype.selectHandler = function (b) {
        var c = this,
          d = a(b.target).is(".slick-slide")
            ? a(b.target)
            : a(b.target).parents(".slick-slide"),
          e = parseInt(d.attr("data-slick-index"));
        return (
          e || (e = 0),
          c.slideCount <= c.options.slidesToShow
            ? (c.setSlideClasses(e), void c.asNavFor(e))
            : void c.slideHandler(e)
        );
      }),
      (b.prototype.slideHandler = function (a, b, c) {
        var d,
          e,
          f,
          g,
          j,
          h = null,
          i = this;
        return (
          (b = b || !1),
          (i.animating === !0 && i.options.waitForAnimate === !0) ||
          (i.options.fade === !0 && i.currentSlide === a) ||
          i.slideCount <= i.options.slidesToShow
            ? void 0
            : (b === !1 && i.asNavFor(a),
              (d = a),
              (h = i.getLeft(d)),
              (g = i.getLeft(i.currentSlide)),
              (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
              i.options.infinite === !1 &&
              i.options.centerMode === !1 &&
              (0 > a || a > i.getDotCount() * i.options.slidesToScroll)
                ? void (
                    i.options.fade === !1 &&
                    ((d = i.currentSlide),
                    c !== !0
                      ? i.animateSlide(g, function () {
                          i.postSlide(d);
                        })
                      : i.postSlide(d))
                  )
                : i.options.infinite === !1 &&
                  i.options.centerMode === !0 &&
                  (0 > a || a > i.slideCount - i.options.slidesToScroll)
                ? void (
                    i.options.fade === !1 &&
                    ((d = i.currentSlide),
                    c !== !0
                      ? i.animateSlide(g, function () {
                          i.postSlide(d);
                        })
                      : i.postSlide(d))
                  )
                : (i.options.autoplay && clearInterval(i.autoPlayTimer),
                  (e =
                    0 > d
                      ? i.slideCount % i.options.slidesToScroll !== 0
                        ? i.slideCount - (i.slideCount % i.options.slidesToScroll)
                        : i.slideCount + d
                      : d >= i.slideCount
                      ? i.slideCount % i.options.slidesToScroll !== 0
                        ? 0
                        : d - i.slideCount
                      : d),
                  (i.animating = !0),
                  i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
                  (f = i.currentSlide),
                  (i.currentSlide = e),
                  i.setSlideClasses(i.currentSlide),
                  i.options.asNavFor &&
                    ((j = i.getNavTarget()),
                    (j = j.slick("getSlick")),
                    j.slideCount <= j.options.slidesToShow &&
                      j.setSlideClasses(i.currentSlide)),
                  i.updateDots(),
                  i.updateArrows(),
                  i.options.fade === !0
                    ? (c !== !0
                        ? (i.fadeSlideOut(f),
                          i.fadeSlide(e, function () {
                            i.postSlide(e);
                          }))
                        : i.postSlide(e),
                      void i.animateHeight())
                    : void (c !== !0
                        ? i.animateSlide(h, function () {
                            i.postSlide(e);
                          })
                        : i.postSlide(e))))
        );
      }),
      (b.prototype.startLoad = function () {
        var a = this;
        a.options.arrows === !0 &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow.hide(), a.$nextArrow.hide()),
          a.options.dots === !0 &&
            a.slideCount > a.options.slidesToShow &&
            a.$dots.hide(),
          a.$slider.addClass("slick-loading");
      }),
      (b.prototype.swipeDirection = function () {
        var a,
          b,
          c,
          d,
          e = this;
        return (
          (a = e.touchObject.startX - e.touchObject.curX),
          (b = e.touchObject.startY - e.touchObject.curY),
          (c = Math.atan2(b, a)),
          (d = Math.round((180 * c) / Math.PI)),
          0 > d && (d = 360 - Math.abs(d)),
          45 >= d && d >= 0
            ? e.options.rtl === !1
              ? "left"
              : "right"
            : 360 >= d && d >= 315
            ? e.options.rtl === !1
              ? "left"
              : "right"
            : d >= 135 && 225 >= d
            ? e.options.rtl === !1
              ? "right"
              : "left"
            : e.options.verticalSwiping === !0
            ? d >= 35 && 135 >= d
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (b.prototype.swipeEnd = function (a) {
        var c,
          d,
          b = this;
        if (
          ((b.dragging = !1),
          (b.interrupted = !1),
          (b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0),
          void 0 === b.touchObject.curX)
        )
          return !1;
        if (
          (b.touchObject.edgeHit === !0 &&
            b.$slider.trigger("edge", [b, b.swipeDirection()]),
          b.touchObject.swipeLength >= b.touchObject.minSwipe)
        ) {
          switch ((d = b.swipeDirection())) {
            case "left":
            case "down":
              (c = b.options.swipeToSlide
                ? b.checkNavigable(b.currentSlide + b.getSlideCount())
                : b.currentSlide + b.getSlideCount()),
                (b.currentDirection = 0);
              break;
            case "right":
            case "up":
              (c = b.options.swipeToSlide
                ? b.checkNavigable(b.currentSlide - b.getSlideCount())
                : b.currentSlide - b.getSlideCount()),
                (b.currentDirection = 1);
          }
          "vertical" != d &&
            (b.slideHandler(c),
            (b.touchObject = {}),
            b.$slider.trigger("swipe", [b, d]));
        } else
          b.touchObject.startX !== b.touchObject.curX &&
            (b.slideHandler(b.currentSlide), (b.touchObject = {}));
      }),
      (b.prototype.swipeHandler = function (a) {
        var b = this;
        if (
          !(
            b.options.swipe === !1 ||
            ("ontouchend" in document && b.options.swipe === !1) ||
            (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))
          )
        )
          switch (
            ((b.touchObject.fingerCount =
              a.originalEvent && void 0 !== a.originalEvent.touches
                ? a.originalEvent.touches.length
                : 1),
            (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
            b.options.verticalSwiping === !0 &&
              (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
            a.data.action)
          ) {
            case "start":
              b.swipeStart(a);
              break;
            case "move":
              b.swipeMove(a);
              break;
            case "end":
              b.swipeEnd(a);
          }
      }),
      (b.prototype.swipeMove = function (a) {
        var d,
          e,
          f,
          g,
          h,
          b = this;
        return (
          (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
          !b.dragging || (h && 1 !== h.length)
            ? !1
            : ((d = b.getLeft(b.currentSlide)),
              (b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
              (b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
              (b.touchObject.swipeLength = Math.round(
                Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))
              )),
              b.options.verticalSwiping === !0 &&
                (b.touchObject.swipeLength = Math.round(
                  Math.sqrt(
                    Math.pow(b.touchObject.curY - b.touchObject.startY, 2)
                  )
                )),
              (e = b.swipeDirection()),
              "vertical" !== e
                ? (void 0 !== a.originalEvent &&
                    b.touchObject.swipeLength > 4 &&
                    a.preventDefault(),
                  (g =
                    (b.options.rtl === !1 ? 1 : -1) *
                    (b.touchObject.curX > b.touchObject.startX ? 1 : -1)),
                  b.options.verticalSwiping === !0 &&
                    (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
                  (f = b.touchObject.swipeLength),
                  (b.touchObject.edgeHit = !1),
                  b.options.infinite === !1 &&
                    ((0 === b.currentSlide && "right" === e) ||
                      (b.currentSlide >= b.getDotCount() && "left" === e)) &&
                    ((f = b.touchObject.swipeLength * b.options.edgeFriction),
                    (b.touchObject.edgeHit = !0)),
                  b.options.vertical === !1
                    ? (b.swipeLeft = d + f * g)
                    : (b.swipeLeft =
                        d + f * (b.$list.height() / b.listWidth) * g),
                  b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
                  b.options.fade === !0 || b.options.touchMove === !1
                    ? !1
                    : b.animating === !0
                    ? ((b.swipeLeft = null), !1)
                    : void b.setCSS(b.swipeLeft))
                : void 0)
        );
      }),
      (b.prototype.swipeStart = function (a) {
        var c,
          b = this;
        return (
          (b.interrupted = !0),
          1 !== b.touchObject.fingerCount ||
          b.slideCount <= b.options.slidesToShow
            ? ((b.touchObject = {}), !1)
            : (void 0 !== a.originalEvent &&
                void 0 !== a.originalEvent.touches &&
                (c = a.originalEvent.touches[0]),
              (b.touchObject.startX = b.touchObject.curX =
                void 0 !== c ? c.pageX : a.clientX),
              (b.touchObject.startY = b.touchObject.curY =
                void 0 !== c ? c.pageY : a.clientY),
              void (b.dragging = !0))
        );
      }),
      (b.prototype.unfilterSlides = b.prototype.slickUnfilter =
        function () {
          var a = this;
          null !== a.$slidesCache &&
            (a.unload(),
            a.$slideTrack.children(this.options.slide).detach(),
            a.$slidesCache.appendTo(a.$slideTrack),
            a.reinit());
        }),
      (b.prototype.unload = function () {
        var b = this;
        a(".slick-cloned", b.$slider).remove(),
          b.$dots && b.$dots.remove(),
          b.$prevArrow &&
            b.htmlExpr.test(b.options.prevArrow) &&
            b.$prevArrow.remove(),
          b.$nextArrow &&
            b.htmlExpr.test(b.options.nextArrow) &&
            b.$nextArrow.remove(),
          b.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (b.prototype.unslick = function (a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy();
      }),
      (b.prototype.updateArrows = function () {
        var b,
          a = this;
        (b = Math.floor(a.options.slidesToShow / 2)),
          a.options.arrows === !0 &&
            a.slideCount > a.options.slidesToShow &&
            !a.options.infinite &&
            (a.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            a.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === a.currentSlide
              ? (a.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : a.currentSlide >= a.slideCount - a.options.slidesToShow &&
                a.options.centerMode === !1
              ? (a.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : a.currentSlide >= a.slideCount - 1 &&
                a.options.centerMode === !0 &&
                (a.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (b.prototype.updateDots = function () {
        var a = this;
        null !== a.$dots &&
          (a.$dots
            .find("li")
            .removeClass("slick-active")
            .attr("aria-hidden", "true"),
          a.$dots
            .find("li")
            .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
            .addClass("slick-active")
            .attr("aria-hidden", "false"));
      }),
      (b.prototype.visibility = function () {
        var a = this;
        a.options.autoplay &&
          (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
      }),
      (a.fn.slick = function () {
        var f,
          g,
          a = this,
          c = arguments[0],
          d = Array.prototype.slice.call(arguments, 1),
          e = a.length;
        for (f = 0; e > f; f++)
          if (
            ("object" == typeof c || "undefined" == typeof c
              ? (a[f].slick = new b(a[f], c))
              : (g = a[f].slick[c].apply(a[f].slick, d)),
            "undefined" != typeof g)
          )
            return g;
        return a;
      });
  });
  /*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!(function (a) {
  function b() {}
  function c(a) {
    function c(b) {
      b.prototype.option ||
        (b.prototype.option = function (b) {
          a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b));
        });
    }
    function e(b, c) {
      a.fn[b] = function (e) {
        if ("string" == typeof e) {
          for (
            var g = d.call(arguments, 1), h = 0, i = this.length;
            i > h;
            h++
          ) {
            var j = this[h],
              k = a.data(j, b);
            if (k)
              if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                var l = k[e].apply(k, g);
                if (void 0 !== l) return l;
              } else f("no such method '" + e + "' for " + b + " instance");
            else
              f(
                "cannot call methods on " +
                  b +
                  " prior to initialization; attempted to call '" +
                  e +
                  "'"
              );
          }
          return this;
        }
        return this.each(function () {
          var d = a.data(this, b);
          d
            ? (d.option(e), d._init())
            : ((d = new c(this, e)), a.data(this, b, d));
        });
      };
    }
    if (a) {
      var f =
        "undefined" == typeof console
          ? b
          : function (a) {
              console.error(a);
            };
      return (
        (a.bridget = function (a, b) {
          c(b), e(a, b);
        }),
        a.bridget
      );
    }
  }
  var d = Array.prototype.slice;
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery.bridget", ["jquery"], c)
    : c("object" == typeof exports ? require("jquery") : a.jQuery);
})(window),
  (function (a) {
    function b(b) {
      var c = a.event;
      return (c.target = c.target || c.srcElement || b), c;
    }
    var c = document.documentElement,
      d = function () {};
    c.addEventListener
      ? (d = function (a, b, c) {
          a.addEventListener(b, c, !1);
        })
      : c.attachEvent &&
        (d = function (a, c, d) {
          (a[c + d] = d.handleEvent
            ? function () {
                var c = b(a);
                d.handleEvent.call(d, c);
              }
            : function () {
                var c = b(a);
                d.call(a, c);
              }),
            a.attachEvent("on" + c, a[c + d]);
        });
    var e = function () {};
    c.removeEventListener
      ? (e = function (a, b, c) {
          a.removeEventListener(b, c, !1);
        })
      : c.detachEvent &&
        (e = function (a, b, c) {
          a.detachEvent("on" + b, a[b + c]);
          try {
            delete a[b + c];
          } catch (d) {
            a[b + c] = void 0;
          }
        });
    var f = { bind: d, unbind: e };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", f)
      : "object" == typeof exports
      ? (module.exports = f)
      : (a.eventie = f);
  })(window),
  function () {
    "use strict";
    function a() {}
    function b(a, b) {
      for (var c = a.length; c--; ) if (a[c].listener === b) return c;
      return -1;
    }
    function c(a) {
      return function () {
        return this[a].apply(this, arguments);
      };
    }
    var d = a.prototype,
      e = this,
      f = e.EventEmitter;
    (d.getListeners = function (a) {
      var b,
        c,
        d = this._getEvents();
      if (a instanceof RegExp) {
        b = {};
        for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]);
      } else b = d[a] || (d[a] = []);
      return b;
    }),
      (d.flattenListeners = function (a) {
        var b,
          c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c;
      }),
      (d.getListenersAsObject = function (a) {
        var b,
          c = this.getListeners(a);
        return c instanceof Array && ((b = {}), (b[a] = c)), b || c;
      }),
      (d.addListener = function (a, c) {
        var d,
          e = this.getListenersAsObject(a),
          f = "object" == typeof c;
        for (d in e)
          e.hasOwnProperty(d) &&
            -1 === b(e[d], c) &&
            e[d].push(f ? c : { listener: c, once: !1 });
        return this;
      }),
      (d.on = c("addListener")),
      (d.addOnceListener = function (a, b) {
        return this.addListener(a, { listener: b, once: !0 });
      }),
      (d.once = c("addOnceListener")),
      (d.defineEvent = function (a) {
        return this.getListeners(a), this;
      }),
      (d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this;
      }),
      (d.removeListener = function (a, c) {
        var d,
          e,
          f = this.getListenersAsObject(a);
        for (e in f)
          f.hasOwnProperty(e) &&
            ((d = b(f[e], c)), -1 !== d && f[e].splice(d, 1));
        return this;
      }),
      (d.off = c("removeListener")),
      (d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b);
      }),
      (d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b);
      }),
      (d.manipulateListeners = function (a, b, c) {
        var d,
          e,
          f = a ? this.removeListener : this.addListener,
          g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
          for (d = c.length; d--; ) f.call(this, b, c[d]);
        else
          for (d in b)
            b.hasOwnProperty(d) &&
              (e = b[d]) &&
              ("function" == typeof e
                ? f.call(this, d, e)
                : g.call(this, d, e));
        return this;
      }),
      (d.removeEvent = function (a) {
        var b,
          c = typeof a,
          d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
          for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this;
      }),
      (d.removeAllListeners = c("removeEvent")),
      (d.emitEvent = function (a, b) {
        var c,
          d,
          e,
          f,
          g = this.getListenersAsObject(a);
        for (e in g)
          if (g.hasOwnProperty(e))
            for (d = g[e].length; d--; )
              (c = g[e][d]),
                c.once === !0 && this.removeListener(a, c.listener),
                (f = c.listener.apply(this, b || [])),
                f === this._getOnceReturnValue() &&
                  this.removeListener(a, c.listener);
        return this;
      }),
      (d.trigger = c("emitEvent")),
      (d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b);
      }),
      (d.setOnceReturnValue = function (a) {
        return (this._onceReturnValue = a), this;
      }),
      (d._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (d._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (a.noConflict = function () {
        return (e.EventEmitter = f), a;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return a;
          })
        : "object" == typeof module && module.exports
        ? (module.exports = a)
        : (e.EventEmitter = a);
  }.call(this),
  (function (a) {
    function b(a) {
      if (a) {
        if ("string" == typeof d[a]) return a;
        a = a.charAt(0).toUpperCase() + a.slice(1);
        for (var b, e = 0, f = c.length; f > e; e++)
          if (((b = c[e] + a), "string" == typeof d[b])) return b;
      }
    }
    var c = "Webkit Moz ms Ms O".split(" "),
      d = document.documentElement.style;
    "function" == typeof define && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return b;
        })
      : "object" == typeof exports
      ? (module.exports = b)
      : (a.getStyleProperty = b);
  })(window),
  (function (a, b) {
    function c(a) {
      var b = parseFloat(a),
        c = -1 === a.indexOf("%") && !isNaN(b);
      return c && b;
    }
    function d() {}
    function e() {
      for (
        var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          b = 0,
          c = h.length;
        c > b;
        b++
      ) {
        var d = h[b];
        a[d] = 0;
      }
      return a;
    }
    function f(b) {
      function d() {
        if (!m) {
          m = !0;
          var d = a.getComputedStyle;
          if (
            ((j = (function () {
              var a = d
                ? function (a) {
                    return d(a, null);
                  }
                : function (a) {
                    return a.currentStyle;
                  };
              return function (b) {
                var c = a(b);
                return (
                  c ||
                    g(
                      "Style returned " +
                        c +
                        ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                    ),
                  c
                );
              };
            })()),
            (k = b("boxSizing")))
          ) {
            var e = document.createElement("div");
            (e.style.width = "200px"),
              (e.style.padding = "1px 2px 3px 4px"),
              (e.style.borderStyle = "solid"),
              (e.style.borderWidth = "1px 2px 3px 4px"),
              (e.style[k] = "border-box");
            var f = document.body || document.documentElement;
            f.appendChild(e);
            var h = j(e);
            (l = 200 === c(h.width)), f.removeChild(e);
          }
        }
      }
      function f(a) {
        if (
          (d(),
          "string" == typeof a && (a = document.querySelector(a)),
          a && "object" == typeof a && a.nodeType)
        ) {
          var b = j(a);
          if ("none" === b.display) return e();
          var f = {};
          (f.width = a.offsetWidth), (f.height = a.offsetHeight);
          for (
            var g = (f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k])),
              m = 0,
              n = h.length;
            n > m;
            m++
          ) {
            var o = h[m],
              p = b[o];
            p = i(a, p);
            var q = parseFloat(p);
            f[o] = isNaN(q) ? 0 : q;
          }
          var r = f.paddingLeft + f.paddingRight,
            s = f.paddingTop + f.paddingBottom,
            t = f.marginLeft + f.marginRight,
            u = f.marginTop + f.marginBottom,
            v = f.borderLeftWidth + f.borderRightWidth,
            w = f.borderTopWidth + f.borderBottomWidth,
            x = g && l,
            y = c(b.width);
          y !== !1 && (f.width = y + (x ? 0 : r + v));
          var z = c(b.height);
          return (
            z !== !1 && (f.height = z + (x ? 0 : s + w)),
            (f.innerWidth = f.width - (r + v)),
            (f.innerHeight = f.height - (s + w)),
            (f.outerWidth = f.width + t),
            (f.outerHeight = f.height + u),
            f
          );
        }
      }
      function i(b, c) {
        if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
        var d = b.style,
          e = d.left,
          f = b.runtimeStyle,
          g = f && f.left;
        return (
          g && (f.left = b.currentStyle.left),
          (d.left = c),
          (c = d.pixelLeft),
          (d.left = e),
          g && (f.left = g),
          c
        );
      }
      var j,
        k,
        l,
        m = !1;
      return f;
    }
    var g =
        "undefined" == typeof console
          ? d
          : function (a) {
              console.error(a);
            },
      h = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ];
    "function" == typeof define && define.amd
      ? define(
          "get-size/get-size",
          ["get-style-property/get-style-property"],
          f
        )
      : "object" == typeof exports
      ? (module.exports = f(require("desandro-get-style-property")))
      : (a.getSize = f(a.getStyleProperty));
  })(window),
  (function (a) {
    function b(a) {
      "function" == typeof a && (b.isReady ? a() : g.push(a));
    }
    function c(a) {
      var c = "readystatechange" === a.type && "complete" !== f.readyState;
      b.isReady || c || d();
    }
    function d() {
      b.isReady = !0;
      for (var a = 0, c = g.length; c > a; a++) {
        var d = g[a];
        d();
      }
    }
    function e(e) {
      return (
        "complete" === f.readyState
          ? d()
          : (e.bind(f, "DOMContentLoaded", c),
            e.bind(f, "readystatechange", c),
            e.bind(a, "load", c)),
        b
      );
    }
    var f = a.document,
      g = [];
    (b.isReady = !1),
      "function" == typeof define && define.amd
        ? define("doc-ready/doc-ready", ["eventie/eventie"], e)
        : "object" == typeof exports
        ? (module.exports = e(require("eventie")))
        : (a.docReady = e(a.eventie));
  })(window),
  (function (a) {
    "use strict";
    function b(a, b) {
      return a[g](b);
    }
    function c(a) {
      if (!a.parentNode) {
        var b = document.createDocumentFragment();
        b.appendChild(a);
      }
    }
    function d(a, b) {
      c(a);
      for (
        var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length;
        f > e;
        e++
      )
        if (d[e] === a) return !0;
      return !1;
    }
    function e(a, d) {
      return c(a), b(a, d);
    }
    var f,
      g = (function () {
        if (a.matches) return "matches";
        if (a.matchesSelector) return "matchesSelector";
        for (
          var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length;
          d > c;
          c++
        ) {
          var e = b[c],
            f = e + "MatchesSelector";
          if (a[f]) return f;
        }
      })();
    if (g) {
      var h = document.createElement("div"),
        i = b(h, "div");
      f = i ? b : e;
    } else f = d;
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return f;
        })
      : "object" == typeof exports
      ? (module.exports = f)
      : (window.matchesSelector = f);
  })(Element.prototype),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["doc-ready/doc-ready", "matches-selector/matches-selector"],
          function (c, d) {
            return b(a, c, d);
          }
        )
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("doc-ready"),
          require("desandro-matches-selector")
        ))
      : (a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector));
  })(window, function (a, b, c) {
    var d = {};
    (d.extend = function (a, b) {
      for (var c in b) a[c] = b[c];
      return a;
    }),
      (d.modulo = function (a, b) {
        return ((a % b) + b) % b;
      });
    var e = Object.prototype.toString;
    (d.isArray = function (a) {
      return "[object Array]" == e.call(a);
    }),
      (d.makeArray = function (a) {
        var b = [];
        if (d.isArray(a)) b = a;
        else if (a && "number" == typeof a.length)
          for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
        else b.push(a);
        return b;
      }),
      (d.indexOf = Array.prototype.indexOf
        ? function (a, b) {
            return a.indexOf(b);
          }
        : function (a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
          }),
      (d.removeFrom = function (a, b) {
        var c = d.indexOf(a, b);
        -1 != c && a.splice(c, 1);
      }),
      (d.isElement =
        "function" == typeof HTMLElement || "object" == typeof HTMLElement
          ? function (a) {
              return a instanceof HTMLElement;
            }
          : function (a) {
              return (
                a &&
                "object" == typeof a &&
                1 == a.nodeType &&
                "string" == typeof a.nodeName
              );
            }),
      (d.setText = (function () {
        function a(a, c) {
          (b =
            b ||
            (void 0 !== document.documentElement.textContent
              ? "textContent"
              : "innerText")),
            (a[b] = c);
        }
        var b;
        return a;
      })()),
      (d.getParent = function (a, b) {
        for (; a != document.body; )
          if (((a = a.parentNode), c(a, b))) return a;
      }),
      (d.getQueryElement = function (a) {
        return "string" == typeof a ? document.querySelector(a) : a;
      }),
      (d.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a);
      }),
      (d.filterFindElements = function (a, b) {
        a = d.makeArray(a);
        for (var e = [], f = 0, g = a.length; g > f; f++) {
          var h = a[f];
          if (d.isElement(h))
            if (b) {
              c(h, b) && e.push(h);
              for (
                var i = h.querySelectorAll(b), j = 0, k = i.length;
                k > j;
                j++
              )
                e.push(i[j]);
            } else e.push(h);
        }
        return e;
      }),
      (d.debounceMethod = function (a, b, c) {
        var d = a.prototype[b],
          e = b + "Timeout";
        a.prototype[b] = function () {
          var a = this[e];
          a && clearTimeout(a);
          var b = arguments,
            f = this;
          this[e] = setTimeout(function () {
            d.apply(f, b), delete f[e];
          }, c || 100);
        };
      }),
      (d.toDashed = function (a) {
        return a
          .replace(/(.)([A-Z])/g, function (a, b, c) {
            return b + "-" + c;
          })
          .toLowerCase();
      });
    var f = a.console;
    return (
      (d.htmlInit = function (c, e) {
        b(function () {
          for (
            var b = d.toDashed(e),
              g = document.querySelectorAll(".js-" + b),
              h = "data-" + b + "-options",
              i = 0,
              j = g.length;
            j > i;
            i++
          ) {
            var k,
              l = g[i],
              m = l.getAttribute(h);
            try {
              k = m && JSON.parse(m);
            } catch (n) {
              f &&
                f.error(
                  "Error parsing " +
                    h +
                    " on " +
                    l.nodeName.toLowerCase() +
                    (l.id ? "#" + l.id : "") +
                    ": " +
                    n
                );
              continue;
            }
            var o = new c(l, k),
              p = a.jQuery;
            p && p.data(l, e, o);
          }
        });
      }),
      d
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          [
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "get-style-property/get-style-property",
            "fizzy-ui-utils/utils",
          ],
          function (c, d, e, f) {
            return b(a, c, d, e, f);
          }
        )
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-get-style-property"),
          require("fizzy-ui-utils")
        ))
      : ((a.Outlayer = {}),
        (a.Outlayer.Item = b(
          a,
          a.EventEmitter,
          a.getSize,
          a.getStyleProperty,
          a.fizzyUIUtils
        )));
  })(window, function (a, b, c, d, e) {
    "use strict";
    function f(a) {
      for (var b in a) return !1;
      return (b = null), !0;
    }
    function g(a, b) {
      a &&
        ((this.element = a),
        (this.layout = b),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function h(a) {
      return a.replace(/([A-Z])/g, function (a) {
        return "-" + a.toLowerCase();
      });
    }
    var i = a.getComputedStyle,
      j = i
        ? function (a) {
            return i(a, null);
          }
        : function (a) {
            return a.currentStyle;
          },
      k = d("transition"),
      l = d("transform"),
      m = k && l,
      n = !!d("perspective"),
      o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend",
      }[k],
      p = [
        "transform",
        "transition",
        "transitionDuration",
        "transitionProperty",
      ],
      q = (function () {
        for (var a = {}, b = 0, c = p.length; c > b; b++) {
          var e = p[b],
            f = d(e);
          f && f !== e && (a[e] = f);
        }
        return a;
      })();
    e.extend(g.prototype, b.prototype),
      (g.prototype._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a);
      }),
      (g.prototype.getSize = function () {
        this.size = c(this.element);
      }),
      (g.prototype.css = function (a) {
        var b = this.element.style;
        for (var c in a) {
          var d = q[c] || c;
          b[d] = a[c];
        }
      }),
      (g.prototype.getPosition = function () {
        var a = j(this.element),
          b = this.layout.options,
          c = b.isOriginLeft,
          d = b.isOriginTop,
          e = a[c ? "left" : "right"],
          f = a[d ? "top" : "bottom"],
          g = this.layout.size,
          h =
            -1 != e.indexOf("%")
              ? (parseFloat(e) / 100) * g.width
              : parseInt(e, 10),
          i =
            -1 != f.indexOf("%")
              ? (parseFloat(f) / 100) * g.height
              : parseInt(f, 10);
        (h = isNaN(h) ? 0 : h),
          (i = isNaN(i) ? 0 : i),
          (h -= c ? g.paddingLeft : g.paddingRight),
          (i -= d ? g.paddingTop : g.paddingBottom),
          (this.position.x = h),
          (this.position.y = i);
      }),
      (g.prototype.layoutPosition = function () {
        var a = this.layout.size,
          b = this.layout.options,
          c = {},
          d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
          e = b.isOriginLeft ? "left" : "right",
          f = b.isOriginLeft ? "right" : "left",
          g = this.position.x + a[d];
        (c[e] = this.getXValue(g)), (c[f] = "");
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
          i = b.isOriginTop ? "top" : "bottom",
          j = b.isOriginTop ? "bottom" : "top",
          k = this.position.y + a[h];
        (c[i] = this.getYValue(k)),
          (c[j] = ""),
          this.css(c),
          this.emitEvent("layout", [this]);
      }),
      (g.prototype.getXValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && !b.isHorizontal
          ? (a / this.layout.size.width) * 100 + "%"
          : a + "px";
      }),
      (g.prototype.getYValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && b.isHorizontal
          ? (a / this.layout.size.height) * 100 + "%"
          : a + "px";
      }),
      (g.prototype._transitionTo = function (a, b) {
        this.getPosition();
        var c = this.position.x,
          d = this.position.y,
          e = parseInt(a, 10),
          f = parseInt(b, 10),
          g = e === this.position.x && f === this.position.y;
        if ((this.setPosition(a, b), g && !this.isTransitioning))
          return void this.layoutPosition();
        var h = a - c,
          i = b - d,
          j = {};
        (j.transform = this.getTranslate(h, i)),
          this.transition({
            to: j,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (g.prototype.getTranslate = function (a, b) {
        var c = this.layout.options;
        return (
          (a = c.isOriginLeft ? a : -a),
          (b = c.isOriginTop ? b : -b),
          n
            ? "translate3d(" + a + "px, " + b + "px, 0)"
            : "translate(" + a + "px, " + b + "px)"
        );
      }),
      (g.prototype.goTo = function (a, b) {
        this.setPosition(a, b), this.layoutPosition();
      }),
      (g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo),
      (g.prototype.setPosition = function (a, b) {
        (this.position.x = parseInt(a, 10)),
          (this.position.y = parseInt(b, 10));
      }),
      (g.prototype._nonTransition = function (a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this);
      }),
      (g.prototype._transition = function (a) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to)
          (b.ingProperties[c] = !0), a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
          this.css(a.from);
          var d = this.element.offsetHeight;
          d = null;
        }
        this.enableTransition(a.to),
          this.css(a.to),
          (this.isTransitioning = !0);
      });
    var r = "opacity," + h(q.transform || "transform");
    (g.prototype.enableTransition = function () {
      this.isTransitioning ||
        (this.css({
          transitionProperty: r,
          transitionDuration: this.layout.options.transitionDuration,
        }),
        this.element.addEventListener(o, this, !1));
    }),
      (g.prototype.transition =
        g.prototype[k ? "_transition" : "_nonTransition"]),
      (g.prototype.onwebkitTransitionEnd = function (a) {
        this.ontransitionend(a);
      }),
      (g.prototype.onotransitionend = function (a) {
        this.ontransitionend(a);
      });
    var s = {
      "-webkit-transform": "transform",
      "-moz-transform": "transform",
      "-o-transform": "transform",
    };
    (g.prototype.ontransitionend = function (a) {
      if (a.target === this.element) {
        var b = this._transn,
          c = s[a.propertyName] || a.propertyName;
        if (
          (delete b.ingProperties[c],
          f(b.ingProperties) && this.disableTransition(),
          c in b.clean &&
            ((this.element.style[a.propertyName] = ""), delete b.clean[c]),
          c in b.onEnd)
        ) {
          var d = b.onEnd[c];
          d.call(this), delete b.onEnd[c];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (g.prototype.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(o, this, !1),
          (this.isTransitioning = !1);
      }),
      (g.prototype._removeStyles = function (a) {
        var b = {};
        for (var c in a) b[c] = "";
        this.css(b);
      });
    var t = { transitionProperty: "", transitionDuration: "" };
    return (
      (g.prototype.removeTransitionStyles = function () {
        this.css(t);
      }),
      (g.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (g.prototype.remove = function () {
        if (!k || !parseFloat(this.layout.options.transitionDuration))
          return void this.removeElem();
        var a = this;
        this.once("transitionEnd", function () {
          a.removeElem();
        }),
          this.hide();
      }),
      (g.prototype.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var a = this.layout.options,
          b = {},
          c = this.getHideRevealTransitionEndProperty("visibleStyle");
        (b[c] = this.onRevealTransitionEnd),
          this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b,
          });
      }),
      (g.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (g.prototype.getHideRevealTransitionEndProperty = function (a) {
        var b = this.layout.options[a];
        if (b.opacity) return "opacity";
        for (var c in b) return c;
      }),
      (g.prototype.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var a = this.layout.options,
          b = {},
          c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (b[c] = this.onHideTransitionEnd),
          this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b,
          });
      }),
      (g.prototype.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (g.prototype.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      g
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "eventie/eventie",
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (c, d, e, f, g) {
            return b(a, c, d, e, f, g);
          }
        )
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("eventie"),
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (a.Outlayer = b(
          a,
          a.eventie,
          a.EventEmitter,
          a.getSize,
          a.fizzyUIUtils,
          a.Outlayer.Item
        ));
  })(window, function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
      var c = e.getQueryElement(a);
      if (!c)
        return void (
          h &&
          h.error(
            "Bad element for " + this.constructor.namespace + ": " + (c || a)
          )
        );
      (this.element = c),
        i && (this.$element = i(this.element)),
        (this.options = e.extend({}, this.constructor.defaults)),
        this.option(b);
      var d = ++k;
      (this.element.outlayerGUID = d),
        (l[d] = this),
        this._create(),
        this.options.isInitLayout && this.layout();
    }
    var h = a.console,
      i = a.jQuery,
      j = function () {},
      k = 0,
      l = {};
    return (
      (g.namespace = "outlayer"),
      (g.Item = f),
      (g.defaults = {
        containerStyle: { position: "relative" },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      }),
      e.extend(g.prototype, c.prototype),
      (g.prototype.option = function (a) {
        e.extend(this.options, a);
      }),
      (g.prototype._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          e.extend(this.element.style, this.options.containerStyle),
          this.options.isResizeBound && this.bindResize();
      }),
      (g.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (g.prototype._itemize = function (a) {
        for (
          var b = this._filterFindItemElements(a),
            c = this.constructor.Item,
            d = [],
            e = 0,
            f = b.length;
          f > e;
          e++
        ) {
          var g = b[e],
            h = new c(g, this);
          d.push(h);
        }
        return d;
      }),
      (g.prototype._filterFindItemElements = function (a) {
        return e.filterFindElements(a, this.options.itemSelector);
      }),
      (g.prototype.getItemElements = function () {
        for (var a = [], b = 0, c = this.items.length; c > b; b++)
          a.push(this.items[b].element);
        return a;
      }),
      (g.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var a =
          void 0 !== this.options.isLayoutInstant
            ? this.options.isLayoutInstant
            : !this._isLayoutInited;
        this.layoutItems(this.items, a), (this._isLayoutInited = !0);
      }),
      (g.prototype._init = g.prototype.layout),
      (g.prototype._resetLayout = function () {
        this.getSize();
      }),
      (g.prototype.getSize = function () {
        this.size = d(this.element);
      }),
      (g.prototype._getMeasurement = function (a, b) {
        var c,
          f = this.options[a];
        f
          ? ("string" == typeof f
              ? (c = this.element.querySelector(f))
              : e.isElement(f) && (c = f),
            (this[a] = c ? d(c)[b] : f))
          : (this[a] = 0);
      }),
      (g.prototype.layoutItems = function (a, b) {
        (a = this._getItemsForLayout(a)),
          this._layoutItems(a, b),
          this._postLayout();
      }),
      (g.prototype._getItemsForLayout = function (a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var e = a[c];
          e.isIgnored || b.push(e);
        }
        return b;
      }),
      (g.prototype._layoutItems = function (a, b) {
        if ((this._emitCompleteOnItems("layout", a), a && a.length)) {
          for (var c = [], d = 0, e = a.length; e > d; d++) {
            var f = a[d],
              g = this._getItemLayoutPosition(f);
            (g.item = f), (g.isInstant = b || f.isLayoutInstant), c.push(g);
          }
          this._processLayoutQueue(c);
        }
      }),
      (g.prototype._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (g.prototype._processLayoutQueue = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b];
          this._positionItem(d.item, d.x, d.y, d.isInstant);
        }
      }),
      (g.prototype._positionItem = function (a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c);
      }),
      (g.prototype._postLayout = function () {
        this.resizeContainer();
      }),
      (g.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
          var a = this._getContainerSize();
          a &&
            (this._setContainerMeasure(a.width, !0),
            this._setContainerMeasure(a.height, !1));
        }
      }),
      (g.prototype._getContainerSize = j),
      (g.prototype._setContainerMeasure = function (a, b) {
        if (void 0 !== a) {
          var c = this.size;
          c.isBorderBox &&
            (a += b
              ? c.paddingLeft +
                c.paddingRight +
                c.borderLeftWidth +
                c.borderRightWidth
              : c.paddingBottom +
                c.paddingTop +
                c.borderTopWidth +
                c.borderBottomWidth),
            (a = Math.max(a, 0)),
            (this.element.style[b ? "width" : "height"] = a + "px");
        }
      }),
      (g.prototype._emitCompleteOnItems = function (a, b) {
        function c() {
          e.dispatchEvent(a + "Complete", null, [b]);
        }
        function d() {
          g++, g === f && c();
        }
        var e = this,
          f = b.length;
        if (!b || !f) return void c();
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
          var j = b[h];
          j.once(a, d);
        }
      }),
      (g.prototype.dispatchEvent = function (a, b, c) {
        var d = b ? [b].concat(c) : c;
        if ((this.emitEvent(a, d), i))
          if (((this.$element = this.$element || i(this.element)), b)) {
            var e = i.Event(b);
            (e.type = a), this.$element.trigger(e, c);
          } else this.$element.trigger(a, c);
      }),
      (g.prototype.ignore = function (a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0);
      }),
      (g.prototype.unignore = function (a) {
        var b = this.getItem(a);
        b && delete b.isIgnored;
      }),
      (g.prototype.stamp = function (a) {
        if ((a = this._find(a))) {
          this.stamps = this.stamps.concat(a);
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this.ignore(d);
          }
        }
      }),
      (g.prototype.unstamp = function (a) {
        if ((a = this._find(a)))
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            e.removeFrom(this.stamps, d), this.unignore(d);
          }
      }),
      (g.prototype._find = function (a) {
        return a
          ? ("string" == typeof a && (a = this.element.querySelectorAll(a)),
            (a = e.makeArray(a)))
          : void 0;
      }),
      (g.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
          this._getBoundingRect();
          for (var a = 0, b = this.stamps.length; b > a; a++) {
            var c = this.stamps[a];
            this._manageStamp(c);
          }
        }
      }),
      (g.prototype._getBoundingRect = function () {
        var a = this.element.getBoundingClientRect(),
          b = this.size;
        this._boundingRect = {
          left: a.left + b.paddingLeft + b.borderLeftWidth,
          top: a.top + b.paddingTop + b.borderTopWidth,
          right: a.right - (b.paddingRight + b.borderRightWidth),
          bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth),
        };
      }),
      (g.prototype._manageStamp = j),
      (g.prototype._getElementOffset = function (a) {
        var b = a.getBoundingClientRect(),
          c = this._boundingRect,
          e = d(a),
          f = {
            left: b.left - c.left - e.marginLeft,
            top: b.top - c.top - e.marginTop,
            right: c.right - b.right - e.marginRight,
            bottom: c.bottom - b.bottom - e.marginBottom,
          };
        return f;
      }),
      (g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a);
      }),
      (g.prototype.bindResize = function () {
        this.isResizeBound ||
          (b.bind(a, "resize", this), (this.isResizeBound = !0));
      }),
      (g.prototype.unbindResize = function () {
        this.isResizeBound && b.unbind(a, "resize", this),
          (this.isResizeBound = !1);
      }),
      (g.prototype.onresize = function () {
        function a() {
          b.resize(), delete b.resizeTimeout;
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var b = this;
        this.resizeTimeout = setTimeout(a, 100);
      }),
      (g.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (g.prototype.needsResizeLayout = function () {
        var a = d(this.element),
          b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth;
      }),
      (g.prototype.addItems = function (a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)), b;
      }),
      (g.prototype.appended = function (a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0), this.reveal(b));
      }),
      (g.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
          var c = this.items.slice(0);
          (this.items = b.concat(c)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(b, !0),
            this.reveal(b),
            this.layoutItems(c);
        }
      }),
      (g.prototype.reveal = function (a) {
        this._emitCompleteOnItems("reveal", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          var d = a[c];
          d.reveal();
        }
      }),
      (g.prototype.hide = function (a) {
        this._emitCompleteOnItems("hide", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          var d = a[c];
          d.hide();
        }
      }),
      (g.prototype.revealItemElements = function (a) {
        var b = this.getItems(a);
        this.reveal(b);
      }),
      (g.prototype.hideItemElements = function (a) {
        var b = this.getItems(a);
        this.hide(b);
      }),
      (g.prototype.getItem = function (a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
          var d = this.items[b];
          if (d.element === a) return d;
        }
      }),
      (g.prototype.getItems = function (a) {
        a = e.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var f = a[c],
            g = this.getItem(f);
          g && b.push(g);
        }
        return b;
      }),
      (g.prototype.remove = function (a) {
        var b = this.getItems(a);
        if ((this._emitCompleteOnItems("remove", b), b && b.length))
          for (var c = 0, d = b.length; d > c; c++) {
            var f = b[c];
            f.remove(), e.removeFrom(this.items, f);
          }
      }),
      (g.prototype.destroy = function () {
        var a = this.element.style;
        (a.height = ""), (a.position = ""), (a.width = "");
        for (var b = 0, c = this.items.length; c > b; b++) {
          var d = this.items[b];
          d.destroy();
        }
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e],
          delete this.element.outlayerGUID,
          i && i.removeData(this.element, this.constructor.namespace);
      }),
      (g.data = function (a) {
        a = e.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && l[b];
      }),
      (g.create = function (a, b) {
        function c() {
          g.apply(this, arguments);
        }
        return (
          Object.create
            ? (c.prototype = Object.create(g.prototype))
            : e.extend(c.prototype, g.prototype),
          (c.prototype.constructor = c),
          (c.defaults = e.extend({}, g.defaults)),
          e.extend(c.defaults, b),
          (c.prototype.settings = {}),
          (c.namespace = a),
          (c.data = g.data),
          (c.Item = function () {
            f.apply(this, arguments);
          }),
          (c.Item.prototype = new f()),
          e.htmlInit(c, a),
          i && i.bridget && i.bridget(a, c),
          c
        );
      }),
      (g.Item = f),
      g
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], b)
      : "object" == typeof exports
      ? (module.exports = b(require("outlayer")))
      : ((a.Isotope = a.Isotope || {}), (a.Isotope.Item = b(a.Outlayer)));
  })(window, function (a) {
    "use strict";
    function b() {
      a.Item.apply(this, arguments);
    }
    (b.prototype = new a.Item()),
      (b.prototype._create = function () {
        (this.id = this.layout.itemGUID++),
          a.Item.prototype._create.call(this),
          (this.sortData = {});
      }),
      (b.prototype.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var a = this.layout.options.getSortData,
            b = this.layout._sorters;
          for (var c in a) {
            var d = b[c];
            this.sortData[c] = d(this.element, this);
          }
        }
      });
    var c = b.prototype.destroy;
    return (
      (b.prototype.destroy = function () {
        c.apply(this, arguments), this.css({ display: "" });
      }),
      b
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          b
        )
      : "object" == typeof exports
      ? (module.exports = b(require("get-size"), require("outlayer")))
      : ((a.Isotope = a.Isotope || {}),
        (a.Isotope.LayoutMode = b(a.getSize, a.Outlayer)));
  })(window, function (a, b) {
    "use strict";
    function c(a) {
      (this.isotope = a),
        a &&
          ((this.options = a.options[this.namespace]),
          (this.element = a.element),
          (this.items = a.filteredItems),
          (this.size = a.size));
    }
    return (
      (function () {
        function a(a) {
          return function () {
            return b.prototype[a].apply(this.isotope, arguments);
          };
        }
        for (
          var d = [
              "_resetLayout",
              "_getItemLayoutPosition",
              "_manageStamp",
              "_getContainerSize",
              "_getElementOffset",
              "needsResizeLayout",
            ],
            e = 0,
            f = d.length;
          f > e;
          e++
        ) {
          var g = d[e];
          c.prototype[g] = a(g);
        }
      })(),
      (c.prototype.needsVerticalResizeLayout = function () {
        var b = a(this.isotope.element),
          c = this.isotope.size && b;
        return c && b.innerHeight != this.isotope.size.innerHeight;
      }),
      (c.prototype._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (c.prototype.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (c.prototype.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (c.prototype.getSegmentSize = function (a, b) {
        var c = a + b,
          d = "outer" + b;
        if ((this._getMeasurement(c, d), !this[c])) {
          var e = this.getFirstItemSize();
          this[c] = (e && e[d]) || this.isotope.size["inner" + b];
        }
      }),
      (c.prototype.getFirstItemSize = function () {
        var b = this.isotope.filteredItems[0];
        return b && b.element && a(b.element);
      }),
      (c.prototype.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (c.prototype.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (c.modes = {}),
      (c.create = function (a, b) {
        function d() {
          c.apply(this, arguments);
        }
        return (
          (d.prototype = new c()),
          b && (d.options = b),
          (d.prototype.namespace = a),
          (c.modes[a] = d),
          d
        );
      }),
      c
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "masonry/masonry",
          ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"],
          b
        )
      : "object" == typeof exports
      ? (module.exports = b(
          require("outlayer"),
          require("get-size"),
          require("fizzy-ui-utils")
        ))
      : (a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils));
  })(window, function (a, b, c) {
    var d = a.create("masonry");
    return (
      (d.prototype._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--; ) this.colYs.push(0);
        this.maxY = 0;
      }),
      (d.prototype.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var a = this.items[0],
            c = a && a.element;
          this.columnWidth = (c && b(c).outerWidth) || this.containerWidth;
        }
        var d = (this.columnWidth += this.gutter),
          e = this.containerWidth + this.gutter,
          f = e / d,
          g = d - (e % d),
          h = g && 1 > g ? "round" : "floor";
        (f = Math[h](f)), (this.cols = Math.max(f, 1));
      }),
      (d.prototype.getContainerWidth = function () {
        var a = this.options.isFitWidth
            ? this.element.parentNode
            : this.element,
          c = b(a);
        this.containerWidth = c && c.innerWidth;
      }),
      (d.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth,
          d = b && 1 > b ? "round" : "ceil",
          e = Math[d](a.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (
          var f = this._getColGroup(e),
            g = Math.min.apply(Math, f),
            h = c.indexOf(f, g),
            i = { x: this.columnWidth * h, y: g },
            j = g + a.size.outerHeight,
            k = this.cols + 1 - f.length,
            l = 0;
          k > l;
          l++
        )
          this.colYs[h + l] = j;
        return i;
      }),
      (d.prototype._getColGroup = function (a) {
        if (2 > a) return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
          var e = this.colYs.slice(d, d + a);
          b[d] = Math.max.apply(Math, e);
        }
        return b;
      }),
      (d.prototype._manageStamp = function (a) {
        var c = b(a),
          d = this._getElementOffset(a),
          e = this.options.isOriginLeft ? d.left : d.right,
          f = e + c.outerWidth,
          g = Math.floor(e / this.columnWidth);
        g = Math.max(0, g);
        var h = Math.floor(f / this.columnWidth);
        (h -= f % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
        for (
          var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight,
            j = g;
          h >= j;
          j++
        )
          this.colYs[j] = Math.max(i, this.colYs[j]);
      }),
      (d.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = { height: this.maxY };
        return (
          this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        );
      }),
      (d.prototype._getContainerFitWidth = function () {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; ) a++;
        return (this.cols - a) * this.columnWidth - this.gutter;
      }),
      (d.prototype.needsResizeLayout = function () {
        var a = this.containerWidth;
        return this.getContainerWidth(), a !== this.containerWidth;
      }),
      d
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          b
        )
      : "object" == typeof exports
      ? (module.exports = b(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : b(a.Isotope.LayoutMode, a.Masonry);
  })(window, function (a, b) {
    "use strict";
    function c(a, b) {
      for (var c in b) a[c] = b[c];
      return a;
    }
    var d = a.create("masonry"),
      e = d.prototype._getElementOffset,
      f = d.prototype.layout,
      g = d.prototype._getMeasurement;
    c(d.prototype, b.prototype),
      (d.prototype._getElementOffset = e),
      (d.prototype.layout = f),
      (d.prototype._getMeasurement = g);
    var h = d.prototype.measureColumns;
    d.prototype.measureColumns = function () {
      (this.items = this.isotope.filteredItems), h.call(this);
    };
    var i = d.prototype._manageStamp;
    return (
      (d.prototype._manageStamp = function () {
        (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
          (this.options.isOriginTop = this.isotope.options.isOriginTop),
          i.apply(this, arguments);
      }),
      d
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b)
      : "object" == typeof exports
      ? (module.exports = b(require("../layout-mode")))
      : b(a.Isotope.LayoutMode);
  })(window, function (a) {
    "use strict";
    var b = a.create("fitRows");
    return (
      (b.prototype._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth + this.gutter,
          c = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && b + this.x > c && ((this.x = 0), (this.y = this.maxY));
        var d = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight)),
          (this.x += b),
          d
        );
      }),
      (b.prototype._getContainerSize = function () {
        return { height: this.maxY };
      }),
      b
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b)
      : "object" == typeof exports
      ? (module.exports = b(require("../layout-mode")))
      : b(a.Isotope.LayoutMode);
  })(window, function (a) {
    "use strict";
    var b = a.create("vertical", { horizontalAlignment: 0 });
    return (
      (b.prototype._resetLayout = function () {
        this.y = 0;
      }),
      (b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b =
            (this.isotope.size.innerWidth - a.size.outerWidth) *
            this.options.horizontalAlignment,
          c = this.y;
        return (this.y += a.size.outerHeight), { x: b, y: c };
      }),
      (b.prototype._getContainerSize = function () {
        return { height: this.y };
      }),
      b
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          function (c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h);
          }
        )
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("./item"),
          require("./layout-mode"),
          require("./layout-modes/masonry"),
          require("./layout-modes/fit-rows"),
          require("./layout-modes/vertical")
        ))
      : (a.Isotope = b(
          a,
          a.Outlayer,
          a.getSize,
          a.matchesSelector,
          a.fizzyUIUtils,
          a.Isotope.Item,
          a.Isotope.LayoutMode
        ));
  })(window, function (a, b, c, d, e, f, g) {
    function h(a, b) {
      return function (c, d) {
        for (var e = 0, f = a.length; f > e; e++) {
          var g = a[e],
            h = c.sortData[g],
            i = d.sortData[g];
          if (h > i || i > h) {
            var j = void 0 !== b[g] ? b[g] : b,
              k = j ? 1 : -1;
            return (h > i ? 1 : -1) * k;
          }
        }
        return 0;
      };
    }
    var i = a.jQuery,
      j = String.prototype.trim
        ? function (a) {
            return a.trim();
          }
        : function (a) {
            return a.replace(/^\s+|\s+$/g, "");
          },
      k = document.documentElement,
      l = k.textContent
        ? function (a) {
            return a.textContent;
          }
        : function (a) {
            return a.innerText;
          },
      m = b.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (m.Item = f),
      (m.LayoutMode = g),
      (m.prototype._create = function () {
        (this.itemGUID = 0),
          (this._sorters = {}),
          this._getSorters(),
          b.prototype._create.call(this),
          (this.modes = {}),
          (this.filteredItems = this.items),
          (this.sortHistory = ["original-order"]);
        for (var a in g.modes) this._initLayoutMode(a);
      }),
      (m.prototype.reloadItems = function () {
        (this.itemGUID = 0), b.prototype.reloadItems.call(this);
      }),
      (m.prototype._itemize = function () {
        for (
          var a = b.prototype._itemize.apply(this, arguments),
            c = 0,
            d = a.length;
          d > c;
          c++
        ) {
          var e = a[c];
          e.id = this.itemGUID++;
        }
        return this._updateItemsSortData(a), a;
      }),
      (m.prototype._initLayoutMode = function (a) {
        var b = g.modes[a],
          c = this.options[a] || {};
        (this.options[a] = b.options ? e.extend(b.options, c) : c),
          (this.modes[a] = new b(this));
      }),
      (m.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout
          ? void this.arrange()
          : void this._layout();
      }),
      (m.prototype._layout = function () {
        var a = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, a),
          (this._isLayoutInited = !0);
      }),
      (m.prototype.arrange = function (a) {
        function b() {
          d.reveal(c.needReveal), d.hide(c.needHide);
        }
        this.option(a), this._getIsInstant();
        var c = this._filter(this.items);
        this.filteredItems = c.matches;
        var d = this;
        this._bindArrangeComplete(),
          this._isInstant ? this._noTransition(b) : b(),
          this._sort(),
          this._layout();
      }),
      (m.prototype._init = m.prototype.arrange),
      (m.prototype._getIsInstant = function () {
        var a =
          void 0 !== this.options.isLayoutInstant
            ? this.options.isLayoutInstant
            : !this._isLayoutInited;
        return (this._isInstant = a), a;
      }),
      (m.prototype._bindArrangeComplete = function () {
        function a() {
          b &&
            c &&
            d &&
            e.dispatchEvent("arrangeComplete", null, [e.filteredItems]);
        }
        var b,
          c,
          d,
          e = this;
        this.once("layoutComplete", function () {
          (b = !0), a();
        }),
          this.once("hideComplete", function () {
            (c = !0), a();
          }),
          this.once("revealComplete", function () {
            (d = !0), a();
          });
      }),
      (m.prototype._filter = function (a) {
        var b = this.options.filter;
        b = b || "*";
        for (
          var c = [],
            d = [],
            e = [],
            f = this._getFilterTest(b),
            g = 0,
            h = a.length;
          h > g;
          g++
        ) {
          var i = a[g];
          if (!i.isIgnored) {
            var j = f(i);
            j && c.push(i),
              j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i);
          }
        }
        return { matches: c, needReveal: d, needHide: e };
      }),
      (m.prototype._getFilterTest = function (a) {
        return i && this.options.isJQueryFiltering
          ? function (b) {
              return i(b.element).is(a);
            }
          : "function" == typeof a
          ? function (b) {
              return a(b.element);
            }
          : function (b) {
              return d(b.element, a);
            };
      }),
      (m.prototype.updateSortData = function (a) {
        var b;
        a ? ((a = e.makeArray(a)), (b = this.getItems(a))) : (b = this.items),
          this._getSorters(),
          this._updateItemsSortData(b);
      }),
      (m.prototype._getSorters = function () {
        var a = this.options.getSortData;
        for (var b in a) {
          var c = a[b];
          this._sorters[b] = n(c);
        }
      }),
      (m.prototype._updateItemsSortData = function (a) {
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          var d = a[c];
          d.updateSortData();
        }
      });
    var n = (function () {
      function a(a) {
        if ("string" != typeof a) return a;
        var c = j(a).split(" "),
          d = c[0],
          e = d.match(/^\[(.+)\]$/),
          f = e && e[1],
          g = b(f, d),
          h = m.sortDataParsers[c[1]];
        return (a = h
          ? function (a) {
              return a && h(g(a));
            }
          : function (a) {
              return a && g(a);
            });
      }
      function b(a, b) {
        var c;
        return (c = a
          ? function (b) {
              return b.getAttribute(a);
            }
          : function (a) {
              var c = a.querySelector(b);
              return c && l(c);
            });
      }
      return a;
    })();
    (m.sortDataParsers = {
      parseInt: function (a) {
        return parseInt(a, 10);
      },
      parseFloat: function (a) {
        return parseFloat(a);
      },
    }),
      (m.prototype._sort = function () {
        var a = this.options.sortBy;
        if (a) {
          var b = [].concat.apply(a, this.sortHistory),
            c = h(b, this.options.sortAscending);
          this.filteredItems.sort(c),
            a != this.sortHistory[0] && this.sortHistory.unshift(a);
        }
      }),
      (m.prototype._mode = function () {
        var a = this.options.layoutMode,
          b = this.modes[a];
        if (!b) throw new Error("No layout mode: " + a);
        return (b.options = this.options[a]), b;
      }),
      (m.prototype._resetLayout = function () {
        b.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (m.prototype._getItemLayoutPosition = function (a) {
        return this._mode()._getItemLayoutPosition(a);
      }),
      (m.prototype._manageStamp = function (a) {
        this._mode()._manageStamp(a);
      }),
      (m.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (m.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (m.prototype.appended = function (a) {
        var b = this.addItems(a);
        if (b.length) {
          var c = this._filterRevealAdded(b);
          this.filteredItems = this.filteredItems.concat(c);
        }
      }),
      (m.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
          this._resetLayout(), this._manageStamps();
          var c = this._filterRevealAdded(b);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = c.concat(this.filteredItems)),
            (this.items = b.concat(this.items));
        }
      }),
      (m.prototype._filterRevealAdded = function (a) {
        var b = this._filter(a);
        return (
          this.hide(b.needHide),
          this.reveal(b.matches),
          this.layoutItems(b.matches, !0),
          b.matches
        );
      }),
      (m.prototype.insert = function (a) {
        var b = this.addItems(a);
        if (b.length) {
          var c,
            d,
            e = b.length;
          for (c = 0; e > c; c++)
            (d = b[c]), this.element.appendChild(d.element);
          var f = this._filter(b).matches;
          for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
          for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
          this.reveal(f);
        }
      });
    var o = m.prototype.remove;
    return (
      (m.prototype.remove = function (a) {
        a = e.makeArray(a);
        var b = this.getItems(a);
        o.call(this, a);
        var c = b && b.length;
        if (c)
          for (var d = 0; c > d; d++) {
            var f = b[d];
            e.removeFrom(this.filteredItems, f);
          }
      }),
      (m.prototype.shuffle = function () {
        for (var a = 0, b = this.items.length; b > a; a++) {
          var c = this.items[a];
          c.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (m.prototype._noTransition = function (a) {
        var b = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var c = a.call(this);
        return (this.options.transitionDuration = b), c;
      }),
      (m.prototype.getFilteredItemElements = function () {
        for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++)
          a.push(this.filteredItems[b].element);
        return a;
      }),
      m
    );
  });
/**
 * Scroller
 */
function Scroller() {
  this.latestKnownScrollY = 0;
  this.ticking = false;
}

Scroller.prototype = {
  /**
   * Initialize
   */
  init: function (o) {
    window.addEventListener("scroll", this.onScroll.bind(this), false);
    this.content = o.content;
    this.test = o.test;
  },

  /**
   * Capture Scroll
   */
  onScroll: function () {
    this.latestKnownScrollY = window.scrollY;
    this.requestTick();
  },

  /**
   * Request a Tick
   */
  requestTick: function () {
    if (!this.ticking) {
      window.requestAnimFrame(this.update.bind(this));
    }
    this.ticking = true;
  },

  /**
   * Update.
   */
  update: function () {
    var currentScrollY = this.latestKnownScrollY;
    this.ticking = false;

    /**
     * Do The Dirty Work Here
     */
    var slowScroll = currentScrollY / 4,
      blurScroll = currentScrollY * 2;

    this.test.css({
      "-webkit-filter": "blur(" + slowScroll / 10 + "px)",
      "-moz-filter": "blur(" + slowScroll / 10 + "px)",
      "-filter": "blur(" + slowScroll / 10 + "px)",
    });
  },
};
