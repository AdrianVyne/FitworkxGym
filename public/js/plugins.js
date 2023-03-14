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
                    "undefined" != typeof this.settings[a] &&
                        (this.settings[a] = b);
                }, this)
            ),
                this.settings.autoload && !this.settings.viewport
                    ? this.load()
                    : this.settings.autoload &&
                      this.settings.viewport &&
                      this._scroll();
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
                                ? '<div style="background-image: url(' +
                                      b.src +
                                      ')" />'
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
                                        "function" ==
                                            typeof this.settings.onLoad &&
                                            this.settings.onLoad(c);
                                }, this),
                                50
                            ),
                            a(this.element)
                                .removeAttr("data-src")
                                .removeAttr("data-alt");
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
                                  "undefined" != typeof b &&
                                      b === !0 &&
                                      this.load();
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
                        if (
                            c &&
                            0 != b.indexOf("_") &&
                            c[b] &&
                            "function" == typeof c[b]
                        )
                            return c[b](
                                Array.prototype.slice.call(arguments, 1)
                            );
                        c
                            ? 0 == b.indexOf("_")
                                ? a.error("Method " + b + " is private!")
                                : a.error("Method " + b + " does not exist.")
                            : a.error(
                                  "Plugin must be initialised before using method: " +
                                      b
                              );
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
                              .replace(
                                  /^Object.<anonymous>\s*\(/gm,
                                  "{anonymous}()@"
                              )
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
            (c = h.velocity),
                (e = h.velocityX),
                (f = h.velocityY),
                (g = h.direction);
        (b.velocity = c),
            (b.velocityX = e),
            (b.velocityY = f),
            (b.direction = g);
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
        return a === b
            ? Ia
            : qa(a) >= qa(b)
            ? 0 > a
                ? Ja
                : Ka
            : 0 > b
            ? La
            : Ma;
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
            ? ((this.primaryTouch = b.changedPointers[0].identifier),
              T.call(this, b))
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
            [
                "auto",
                "manipulation",
                "pan-y",
                "pan-x",
                "pan-x pan-y",
                "none",
            ].forEach(function (d) {
                b[d] = c ? a.CSS.supports("touch-action", d) : !0;
            }),
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
                    a[2] && b.recognizeWith(a[2]),
                        a[3] && b.requireFailure(a[3]);
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
                      throw new TypeError(
                          "Cannot convert undefined or null to object"
                      );
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
                b & (Ga | Ha) &&
                    c[0].length - c[1].length === 0 &&
                    (this.started = !1),
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
                !(
                    e &&
                    c.sourceCapabilities &&
                    c.sourceCapabilities.firesTouchEvents
                )
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
                    k(b.options.enable, [b]) &&
                        (a = a.concat(b.getTouchAction()));
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
                    (this.state & ob ||
                        (!(this.state & ob) && this.directionTest(a)))
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
                    (Math.abs(a.scale - 1) > this.options.threshold ||
                        this.state & ob)
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
                if (
                    ((this._input = a),
                    !d || !c || (a.eventType & (Ga | Ha) && !f))
                )
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
                    (Math.abs(a.rotation) > this.options.threshold ||
                        this.state & ob)
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
                    var g = this.pTime
                            ? a.timeStamp - this.pTime < b.interval
                            : !0,
                        h =
                            !this.pCenter ||
                            H(this.pCenter, a.center) < b.posThreshold;
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
                        b.stopped === vb ||
                        (e && c != e && !c.canRecognizeWith(e))
                            ? c.reset()
                            : c.recognize(a),
                        !e &&
                            c.state & (ob | pb | qb) &&
                            (e = b.curRecognizer = c),
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
    var wb =
        "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
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
                    if (h)
                        for (
                            ;
                            f < g && ((e = c.apply(a[f], d)), e !== !1);
                            f++
                        );
                    else
                        for (f in a)
                            if (((e = c.apply(a[f], d)), e === !1)) break;
                } else if (h)
                    for (
                        ;
                        f < g && ((e = c.call(a[f], f, a[f])), e !== !1);
                        f++
                    );
                else
                    for (f in a)
                        if (((e = c.call(a[f], f, a[f])), e === !1)) break;
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
                    "boolean" == typeof h &&
                        ((k = h), (h = arguments[i] || {}), i++),
                        "object" != typeof h &&
                            "function" !== c.type(h) &&
                            (h = {}),
                        i === j && ((h = this), i--);
                    i < j;
                    i++
                )
                    if ((f = arguments[i]))
                        for (e in f)
                            (a = h[e]),
                                (d = f[e]),
                                h !== d &&
                                    (k &&
                                    d &&
                                    (c.isPlainObject(d) || (b = c.isArray(d)))
                                        ? (b
                                              ? ((b = !1),
                                                (g =
                                                    a && c.isArray(a) ? a : []))
                                              : (g =
                                                    a && c.isPlainObject(a)
                                                        ? a
                                                        : {}),
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
                                      for (
                                          var c = +b.length,
                                              d = 0,
                                              e = a.length;
                                          d < c;

                                      )
                                          a[e++] = b[d++];
                                      if (c !== c)
                                          for (; void 0 !== b[d]; )
                                              a[e++] = b[d++];
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
                        ? (!g || c.isArray(e)
                              ? (g = c.data(a, d, f(e)))
                              : g.push(e),
                          g)
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
                                ((f.top +=
                                    parseFloat(d.style.borderTopWidth) || 0),
                                (f.left +=
                                    parseFloat(d.style.borderLeftWidth) || 0)),
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
                    p.isWrapped(a)
                        ? (a = [].slice.call(a))
                        : p.isNode(a) && (a = [a]),
                    a
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
                    for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e)
                        c += u;
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
                            a === c && d === e
                                ? b
                                : 0 === b
                                ? 0
                                : 1 === b
                                ? 1
                                : i(n(b), c, e)
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
                                  : !(!p.isArray(a) || 4 !== a.length) &&
                                    i.apply(null, a)),
                    c === !1 &&
                        (c = t.Easings[t.defaults.easing]
                            ? t.defaults.easing
                            : s),
                    c
                );
            }
            function k(a) {
                if (a) {
                    var b = new Date().getTime(),
                        c = t.State.calls.length;
                    c > 1e4 &&
                        ((t.State.calls = e(t.State.calls)),
                        (c = t.State.calls.length));
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
                                var r = Math.min((b - n) / j.duration, 1),
                                    s = 0,
                                    u = i.length;
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
                                                v.setPropertyValue(
                                                    y,
                                                    "display",
                                                    b
                                                );
                                            });
                                        }
                                        v.setPropertyValue(
                                            y,
                                            "display",
                                            j.display
                                        );
                                    }
                                    j.visibility !== d &&
                                        "hidden" !== j.visibility &&
                                        v.setPropertyValue(
                                            y,
                                            "visibility",
                                            j.visibility
                                        );
                                    for (var B in w)
                                        if ("element" !== B) {
                                            var C,
                                                D = w[B],
                                                E = p.isString(D.easing)
                                                    ? t.Easings[D.easing]
                                                    : D.easing;
                                            if (1 === r) C = D.endValue;
                                            else {
                                                var F =
                                                    D.endValue - D.startValue;
                                                if (
                                                    ((C =
                                                        D.startValue +
                                                        F * E(r, j, F)),
                                                    !o && C === D.currentValue)
                                                )
                                                    continue;
                                            }
                                            if (
                                                ((D.currentValue = C),
                                                "tween" === B)
                                            )
                                                q = C;
                                            else {
                                                var G;
                                                if (v.Hooks.registered[B]) {
                                                    G = v.Hooks.getRoot(B);
                                                    var H =
                                                        g(y)
                                                            .rootPropertyValueCache[
                                                            G
                                                        ];
                                                    H &&
                                                        (D.rootPropertyValue =
                                                            H);
                                                }
                                                var I = v.setPropertyValue(
                                                    y,
                                                    B,
                                                    D.currentValue +
                                                        (0 === parseFloat(C)
                                                            ? ""
                                                            : D.unitType),
                                                    D.rootPropertyValue,
                                                    D.scrollData
                                                );
                                                v.Hooks.registered[B] &&
                                                    (v.Normalizations
                                                        .registered[G]
                                                        ? (g(
                                                              y
                                                          ).rootPropertyValueCache[
                                                              G
                                                          ] =
                                                              v.Normalizations.registered[
                                                                  G
                                                              ](
                                                                  "extract",
                                                                  null,
                                                                  I[1]
                                                              ))
                                                        : (g(
                                                              y
                                                          ).rootPropertyValueCache[
                                                              G
                                                          ] = I[1])),
                                                    "transform" === I[0] &&
                                                        (z = !0);
                                            }
                                        }
                                    j.mobileHA &&
                                        g(y).transformCache.translate3d === d &&
                                        ((g(y).transformCache.translate3d =
                                            "(0px, 0px, 0px)"),
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
                            f.mobileHA &&
                                ((o = !0), delete n.transformCache.translate3d),
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
                                    (parseFloat(b.startValue) -
                                        parseFloat(b.endValue)) %
                                        360 ===
                                        0
                                ) {
                                    var c = b.startValue;
                                    (b.startValue = b.endValue),
                                        (b.endValue = c);
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
                                "<!--[if IE " +
                                a +
                                "]><span></span><![endif]-->"),
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
                            return (
                                "[object Array]" ===
                                Object.prototype.toString.call(a)
                            );
                        },
                    isFunction: function (a) {
                        return (
                            "[object Function]" ===
                            Object.prototype.toString.call(a)
                        );
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
                            (0 === a.length ||
                                ("object" == typeof a[0] && a[0].nodeType > 0))
                        );
                    },
                    isWrapped: function (a) {
                        return (
                            a && (a.jquery || (b.Zepto && b.Zepto.zepto.isZ(a)))
                        );
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
                (a.fn && a.fn.jquery
                    ? ((m = a), (q = !0))
                    : (m = b.Velocity.Utilities),
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
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(
                            navigator.userAgent
                        ),
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
                    wrappedValueAlreadyExtracted:
                        /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
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
                        boxShadow: [
                            "Color X Y Blur Spread",
                            "black 0px 0px 0px 0px",
                        ],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"],
                    },
                    registered: {},
                    register: function () {
                        for (var a = 0; a < v.Lists.colors.length; a++) {
                            var b =
                                "color" === v.Lists.colors[a]
                                    ? "0 0 0 1"
                                    : "255 255 255 1";
                            v.Hooks.templates[v.Lists.colors[a]] = [
                                "Red Green Blue Alpha",
                                b,
                            ];
                        }
                        var c, d, e;
                        if (n)
                            for (c in v.Hooks.templates) {
                                (d = v.Hooks.templates[c]),
                                    (e = d[0].split(" "));
                                var f = d[1].match(v.RegEx.valueSplit);
                                "Color" === e[0] &&
                                    (e.push(e.shift()),
                                    f.push(f.shift()),
                                    (v.Hooks.templates[c] = [
                                        e.join(" "),
                                        f.join(" "),
                                    ]));
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
                            v.Values.isCSSNullValue(b) &&
                                (b = v.Hooks.templates[a][1]),
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
                                        v.RegEx.wrappedValueAlreadyExtracted.test(
                                            c
                                        )
                                            ? (d = c)
                                            : ((d = c
                                                  .toString()
                                                  .match(v.RegEx.valueUnwrap)),
                                              (d = d
                                                  ? d[1].replace(
                                                        /,(\s+)?/g,
                                                        " "
                                                    )
                                                  : c)),
                                        d
                                    );
                                case "inject":
                                    return "rect(" + c + ")";
                            }
                        },
                        blur: function (a, b, c) {
                            switch (a) {
                                case "name":
                                    return t.State.isFirefox
                                        ? "filter"
                                        : "-webkit-filter";
                                case "extract":
                                    var d = parseFloat(c);
                                    if (!d && 0 !== d) {
                                        var e = c
                                            .toString()
                                            .match(/blur\(([0-9]+[A-z]+)\)/i);
                                        d = e ? e[1] : 0;
                                    }
                                    return d;
                                case "inject":
                                    return parseFloat(c)
                                        ? "blur(" + c + ")"
                                        : "none";
                            }
                        },
                        opacity: function (a, b, c) {
                            if (n <= 8)
                                switch (a) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var d = c
                                            .toString()
                                            .match(/alpha\(opacity=(.*)\)/i);
                                        return (c = d ? d[1] / 100 : 1);
                                    case "inject":
                                        return (
                                            (b.style.zoom = 1),
                                            parseFloat(c) >= 1
                                                ? ""
                                                : "alpha(opacity=" +
                                                  parseInt(
                                                      100 * parseFloat(c),
                                                      10
                                                  ) +
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
                            (v.Lists.transformsBase =
                                v.Lists.transformsBase.concat(
                                    v.Lists.transforms3D
                                ));
                        for (var a = 0; a < v.Lists.transformsBase.length; a++)
                            !(function () {
                                var b = v.Lists.transformsBase[a];
                                v.Normalizations.registered[b] = function (
                                    a,
                                    c,
                                    e
                                ) {
                                    switch (a) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return g(c) === d ||
                                                g(c).transformCache[b] === d
                                                ? /^scale/i.test(b)
                                                    ? 1
                                                    : 0
                                                : g(c).transformCache[
                                                      b
                                                  ].replace(/[()]/g, "");
                                        case "inject":
                                            var f = !1;
                                            switch (b.substr(0, b.length - 1)) {
                                                case "translate":
                                                    f =
                                                        !/(%|px|em|rem|vw|vh|\d)$/i.test(
                                                            e
                                                        );
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    t.State.isAndroid &&
                                                        g(c).transformCache[
                                                            b
                                                        ] === d &&
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
                                                f ||
                                                    (g(c).transformCache[b] =
                                                        "(" + e + ")"),
                                                g(c).transformCache[b]
                                            );
                                    }
                                };
                            })();
                        for (var b = 0; b < v.Lists.colors.length; b++)
                            !(function () {
                                var a = v.Lists.colors[b];
                                v.Normalizations.registered[a] = function (
                                    b,
                                    c,
                                    e
                                ) {
                                    switch (b) {
                                        case "name":
                                            return a;
                                        case "extract":
                                            var f;
                                            if (
                                                v.RegEx.wrappedValueAlreadyExtracted.test(
                                                    e
                                                )
                                            )
                                                f = e;
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
                                                    ? (g =
                                                          h[e] !== d
                                                              ? h[e]
                                                              : h.black)
                                                    : v.RegEx.isHex.test(e)
                                                    ? (g =
                                                          "rgb(" +
                                                          v.Values.hexToRgb(
                                                              e
                                                          ).join(" ") +
                                                          ")")
                                                    : /^rgba?\(/i.test(e) ||
                                                      (g = h.black),
                                                    (f = (g || e)
                                                        .toString()
                                                        .match(
                                                            v.RegEx.valueUnwrap
                                                        )[1]
                                                        .replace(
                                                            /,(\s+)?/g,
                                                            " "
                                                        ));
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
                                                    ? 4 ===
                                                          e.split(" ").length &&
                                                      (e = e
                                                          .split(/\s+/)
                                                          .slice(0, 3)
                                                          .join(" "))
                                                    : 3 ===
                                                          e.split(" ").length &&
                                                      (e += " 1"),
                                                (n <= 8 ? "rgb" : "rgba") +
                                                    "(" +
                                                    e
                                                        .replace(/\s+/g, ",")
                                                        .replace(
                                                            /\.(\d)+(?=,)/g,
                                                            ""
                                                        ) +
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
                        if (t.State.prefixMatches[a])
                            return [t.State.prefixMatches[a], !0];
                        for (
                            var b = ["", "Webkit", "Moz", "ms", "O"],
                                c = 0,
                                d = b.length;
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
                                ? [
                                      parseInt(b[1], 16),
                                      parseInt(b[2], 16),
                                      parseInt(b[3], 16),
                                  ]
                                : [0, 0, 0]
                        );
                    },
                    isCSSNullValue: function (a) {
                        return (
                            !a ||
                            /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(
                                a
                            )
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
                            : (a.className +=
                                  (a.className.length ? " " : "") + b);
                    },
                    removeClass: function (a, b) {
                        a.classList
                            ? a.classList.remove(b)
                            : (a.className = a.className
                                  .toString()
                                  .replace(
                                      new RegExp(
                                          "(^|\\s)" +
                                              b.split(" ").join("|") +
                                              "(\\s|$)",
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
                                v.setPropertyValue(
                                    a,
                                    "display",
                                    v.Values.getDisplayType(a)
                                ));
                            var j = function () {
                                i && v.setPropertyValue(a, "display", "none");
                            };
                            if (!f) {
                                if (
                                    "height" === c &&
                                    "border-box" !==
                                        v
                                            .getPropertyValue(a, "boxSizing")
                                            .toString()
                                            .toLowerCase()
                                ) {
                                    var k =
                                        a.offsetHeight -
                                        (parseFloat(
                                            v.getPropertyValue(
                                                a,
                                                "borderTopWidth"
                                            )
                                        ) || 0) -
                                        (parseFloat(
                                            v.getPropertyValue(
                                                a,
                                                "borderBottomWidth"
                                            )
                                        ) || 0) -
                                        (parseFloat(
                                            v.getPropertyValue(a, "paddingTop")
                                        ) || 0) -
                                        (parseFloat(
                                            v.getPropertyValue(
                                                a,
                                                "paddingBottom"
                                            )
                                        ) || 0);
                                    return j(), k;
                                }
                                if (
                                    "width" === c &&
                                    "border-box" !==
                                        v
                                            .getPropertyValue(a, "boxSizing")
                                            .toString()
                                            .toLowerCase()
                                ) {
                                    var l =
                                        a.offsetWidth -
                                        (parseFloat(
                                            v.getPropertyValue(
                                                a,
                                                "borderLeftWidth"
                                            )
                                        ) || 0) -
                                        (parseFloat(
                                            v.getPropertyValue(
                                                a,
                                                "borderRightWidth"
                                            )
                                        ) || 0) -
                                        (parseFloat(
                                            v.getPropertyValue(a, "paddingLeft")
                                        ) || 0) -
                                        (parseFloat(
                                            v.getPropertyValue(
                                                a,
                                                "paddingRight"
                                            )
                                        ) || 0);
                                    return j(), l;
                                }
                            }
                            var o;
                            (o =
                                g(a) === d
                                    ? b.getComputedStyle(a, null)
                                    : g(a).computedStyle
                                    ? g(a).computedStyle
                                    : (g(a).computedStyle = b.getComputedStyle(
                                          a,
                                          null
                                      ))),
                                "borderColor" === c && (c = "borderTopColor"),
                                (e =
                                    9 === n && "filter" === c
                                        ? o.getPropertyValue(c)
                                        : o[c]),
                                ("" !== e && null !== e) || (e = a.style[c]),
                                j();
                        }
                        if (
                            "auto" === e &&
                            /^(top|right|bottom|left)$/i.test(c)
                        ) {
                            var p = h(a, "position");
                            ("fixed" === p ||
                                ("absolute" === p && /top|left/i.test(c))) &&
                                (e = m(a).position()[c] + "px");
                        }
                        return e;
                    }
                    var i;
                    if (v.Hooks.registered[c]) {
                        var j = c,
                            k = v.Hooks.getRoot(j);
                        e === d &&
                            (e = v.getPropertyValue(
                                a,
                                v.Names.prefixCheck(k)[0]
                            )),
                            v.Normalizations.registered[k] &&
                                (e = v.Normalizations.registered[k](
                                    "extract",
                                    a,
                                    e
                                )),
                            (i = v.Hooks.extractValue(j, e));
                    } else if (v.Normalizations.registered[c]) {
                        var l, o;
                        (l = v.Normalizations.registered[c]("name", a)),
                            "transform" !== l &&
                                ((o = h(a, v.Names.prefixCheck(l)[0])),
                                v.Values.isCSSNullValue(o) &&
                                    v.Hooks.templates[c] &&
                                    (o = v.Hooks.templates[c][1])),
                            (i = v.Normalizations.registered[c](
                                "extract",
                                a,
                                o
                            ));
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
                        "transform" ===
                            v.Normalizations.registered[c]("name", a)
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
                                ((d = v.Normalizations.registered[c](
                                    "inject",
                                    a,
                                    d
                                )),
                                (c = v.Normalizations.registered[c](
                                    "name",
                                    a
                                ))),
                            (h = v.Names.prefixCheck(c)[0]),
                            n <= 8)
                        )
                            try {
                                a.style[h] = d;
                            } catch (k) {
                                t.debug &&
                                    console.log(
                                        "Browser does not support [" +
                                            d +
                                            "] for [" +
                                            h +
                                            "]"
                                    );
                            }
                        else {
                            var l = g(a);
                            l && l.isSVG && v.Names.SVGAttribute(c)
                                ? a.setAttribute(c, d)
                                : (a.style[h] = d);
                        }
                        t.debug >= 2 &&
                            console.log("Set " + c + " (" + h + "): " + d);
                    }
                    return [h, d];
                },
                flushTransformCache: function (a) {
                    var b = "",
                        c = g(a);
                    if (
                        (n || (t.State.isAndroid && !t.State.isChrome)) &&
                        c &&
                        c.isSVG
                    ) {
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
                                e[a] &&
                                    ((b += a + "(" + e[a].join(" ") + ") "),
                                    delete e[a]);
                        });
                    } else {
                        var f, h;
                        m.each(g(a).transformCache, function (c) {
                            return (
                                (f = g(a).transformCache[c]),
                                "transformPerspective" === c
                                    ? ((h = f), !0)
                                    : (9 === n &&
                                          "rotateZ" === c &&
                                          (c = "rotate"),
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
                                "transform" === h[0] &&
                                    t.CSS.flushTransformCache(f),
                                    (e = h);
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
                                ? p.isWrapped(i.container) ||
                                  p.isNode(i.container)
                                    ? ((i.container =
                                          i.container[0] || i.container),
                                      (w = i.container["scroll" + B]),
                                      (A =
                                          w +
                                          m(a).position()[B.toLowerCase()] +
                                          E))
                                    : (i.container = null)
                                : ((w =
                                      t.State.scrollAnchor[
                                          t.State["scrollProperty" + B]
                                      ]),
                                  (x =
                                      t.State.scrollAnchor[
                                          t.State[
                                              "scrollProperty" +
                                                  ("Left" === B
                                                      ? "Top"
                                                      : "Left")
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
                                    console.log(
                                        "tweensContainer (scroll): ",
                                        l.scroll,
                                        a
                                    );
                        } else if ("reverse" === D) {
                            if (((n = g(a)), !n)) return;
                            if (!n.tweensContainer)
                                return void m.dequeue(a, i.queue);
                            "none" === n.opts.display &&
                                (n.opts.display = "auto"),
                                "hidden" === n.opts.visibility &&
                                    (n.opts.visibility = "visible"),
                                (n.opts.loop = !1),
                                (n.opts.begin = null),
                                (n.opts.complete = null),
                                u.easing || delete i.easing,
                                u.duration || delete i.duration,
                                (i = m.extend({}, n.opts, i)),
                                (o = m.extend(
                                    !0,
                                    {},
                                    n ? n.tweensContainer : null
                                ));
                            for (var F in o)
                                if ("element" !== F) {
                                    var G = o[F].startValue;
                                    (o[F].startValue = o[F].currentValue =
                                        o[F].endValue),
                                        (o[F].endValue = G),
                                        p.isEmptyObject(u) ||
                                            (o[F].easing = i.easing),
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
                                          (!p.isArray(b[1]) &&
                                              /^[\d-]/.test(b[1])) ||
                                          p.isFunction(b[1]) ||
                                          v.RegEx.isHex.test(b[1])
                                              ? (h = b[1])
                                              : ((p.isString(b[1]) &&
                                                    !v.RegEx.isHex.test(
                                                        b[1]
                                                    )) ||
                                                    p.isArray(b[1])) &&
                                                ((g = c
                                                    ? b[1]
                                                    : j(b[1], i.duration)),
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
                                    RegExp(
                                        "^" + v.Lists.colors.join("$|^") + "$"
                                    ).test(v.Names.camelCase(a))
                                ) {
                                    var c = H(b, !0),
                                        e = c[0],
                                        f = c[1],
                                        g = c[2];
                                    if (v.RegEx.isHex.test(e)) {
                                        for (
                                            var h = ["Red", "Green", "Blue"],
                                                i = v.Values.hexToRgb(e),
                                                j = g
                                                    ? v.Values.hexToRgb(g)
                                                    : d,
                                                k = 0;
                                            k < h.length;
                                            k++
                                        ) {
                                            var l = [i[k]];
                                            f && l.push(f),
                                                j !== d && l.push(j[k]),
                                                (s[
                                                    v.Names.camelCase(a) + h[k]
                                                ] = l);
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
                                        (i.visibility !== d &&
                                            "hidden" !== i.visibility)) &&
                                        /opacity|filter/.test(K) &&
                                        !O &&
                                        0 !== M &&
                                        (O = 0),
                                        i._cacheValues && o && o[K]
                                            ? (O === d &&
                                                  (O =
                                                      o[K].endValue +
                                                      o[K].unitType),
                                              (Q = n.rootPropertyValueCache[P]))
                                            : v.Hooks.registered[K]
                                            ? O === d
                                                ? ((Q = v.getPropertyValue(
                                                      a,
                                                      P
                                                  )),
                                                  (O = v.getPropertyValue(
                                                      a,
                                                      K,
                                                      Q
                                                  )))
                                                : (Q = v.Hooks.templates[P][1])
                                            : O === d &&
                                              (O = v.getPropertyValue(a, K));
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
                                                    .replace(
                                                        /[%A-z]+$/,
                                                        function (a) {
                                                            return (c = a), "";
                                                        }
                                                    )),
                                                c ||
                                                    (c =
                                                        v.Values.getUnitType(
                                                            a
                                                        )),
                                                [d, c]
                                            );
                                        };
                                    (R = V(K, O)),
                                        (O = R[0]),
                                        (T = R[1]),
                                        (R = V(K, M)),
                                        (M = R[0].replace(
                                            /^([+-\/*])=/,
                                            function (a, b) {
                                                return (U = b), "";
                                            }
                                        )),
                                        (S = R[1]),
                                        (O = parseFloat(O) || 0),
                                        (M = parseFloat(M) || 0),
                                        "%" === S &&
                                            (/^(fontSize|lineHeight)$/.test(K)
                                                ? ((M /= 100), (S = "em"))
                                                : /^scale/.test(K)
                                                ? ((M /= 100), (S = ""))
                                                : /(Red|Green|Blue)$/i.test(
                                                      K
                                                  ) &&
                                                  ((M = (M / 100) * 255),
                                                  (S = "")));
                                    var W = function () {
                                        var d = {
                                                myParent:
                                                    a.parentNode || c.body,
                                                position: v.getPropertyValue(
                                                    a,
                                                    "position"
                                                ),
                                                fontSize: v.getPropertyValue(
                                                    a,
                                                    "fontSize"
                                                ),
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
                                                (h.percentToPxWidth =
                                                    I.lastPercentToPxWidth),
                                                (h.percentToPxHeight =
                                                    I.lastPercentToPxHeight);
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
                                                    [
                                                        "overflow",
                                                        "overflowX",
                                                        "overflowY",
                                                    ],
                                                    function (a, b) {
                                                        t.CSS.setPropertyValue(
                                                            i,
                                                            b,
                                                            "hidden"
                                                        );
                                                    }
                                                ),
                                                t.CSS.setPropertyValue(
                                                    i,
                                                    "position",
                                                    d.position
                                                ),
                                                t.CSS.setPropertyValue(
                                                    i,
                                                    "fontSize",
                                                    d.fontSize
                                                ),
                                                t.CSS.setPropertyValue(
                                                    i,
                                                    "boxSizing",
                                                    "content-box"
                                                ),
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
                                                        t.CSS.setPropertyValue(
                                                            i,
                                                            b,
                                                            g + "%"
                                                        );
                                                    }
                                                ),
                                                t.CSS.setPropertyValue(
                                                    i,
                                                    "paddingLeft",
                                                    g + "em"
                                                ),
                                                (h.percentToPxWidth =
                                                    I.lastPercentToPxWidth =
                                                        (parseFloat(
                                                            v.getPropertyValue(
                                                                i,
                                                                "width",
                                                                null,
                                                                !0
                                                            )
                                                        ) || 1) / g),
                                                (h.percentToPxHeight =
                                                    I.lastPercentToPxHeight =
                                                        (parseFloat(
                                                            v.getPropertyValue(
                                                                i,
                                                                "height",
                                                                null,
                                                                !0
                                                            )
                                                        ) || 1) / g),
                                                (h.emToPx = I.lastEmToPx =
                                                    (parseFloat(
                                                        v.getPropertyValue(
                                                            i,
                                                            "paddingLeft"
                                                        )
                                                    ) || 1) / g),
                                                d.myParent.removeChild(i);
                                        }
                                        return (
                                            null === I.remToPx &&
                                                (I.remToPx =
                                                    parseFloat(
                                                        v.getPropertyValue(
                                                            c.body,
                                                            "fontSize"
                                                        )
                                                    ) || 16),
                                            null === I.vwToPx &&
                                                ((I.vwToPx =
                                                    parseFloat(b.innerWidth) /
                                                    100),
                                                (I.vhToPx =
                                                    parseFloat(b.innerHeight) /
                                                    100)),
                                            (h.remToPx = I.remToPx),
                                            (h.vwToPx = I.vwToPx),
                                            (h.vhToPx = I.vhToPx),
                                            t.debug >= 1 &&
                                                console.log(
                                                    "Unit ratios: " +
                                                        JSON.stringify(h),
                                                    a
                                                ),
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
                                                "tweensContainer (" +
                                                    K +
                                                    "): " +
                                                    JSON.stringify(l[K]),
                                                a
                                            );
                                } else
                                    t.debug &&
                                        console.log(
                                            "Skipping [" +
                                                P +
                                                "] due to a lack of browser support."
                                        );
                            }
                            l.element = a;
                        }
                        l.element &&
                            (v.Values.addClass(a, "velocity-animating"),
                            J.push(l),
                            (n = g(a)),
                            n &&
                                ("" === i.queue &&
                                    ((n.tweensContainer = l), (n.opts = i)),
                                (n.isAnimating = !0)),
                            z === y - 1
                                ? (t.State.calls.push([
                                      J,
                                      q,
                                      i,
                                      null,
                                      C.resolver,
                                  ]),
                                  t.State.isTicking === !1 &&
                                      ((t.State.isTicking = !0), k()))
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
                                        setTimeout: setTimeout(
                                            b,
                                            parseFloat(i.delay)
                                        ),
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
                        i.progress &&
                            !p.isFunction(i.progress) &&
                            (i.progress = null),
                        i.complete &&
                            !p.isFunction(i.complete) &&
                            (i.complete = null),
                        i.display !== d &&
                            null !== i.display &&
                            ((i.display = i.display.toString().toLowerCase()),
                            "auto" === i.display &&
                                (i.display = t.CSS.Values.getDisplayType(a))),
                        i.visibility !== d &&
                            null !== i.visibility &&
                            (i.visibility = i.visibility
                                .toString()
                                .toLowerCase()),
                        (i.mobileHA =
                            i.mobileHA &&
                            t.State.isMobile &&
                            !t.State.isGingerbread),
                        i.queue === !1
                            ? i.delay
                                ? setTimeout(f, i.delay)
                                : f()
                            : m.queue(a, i.queue, function (a, b) {
                                  return b === !0
                                      ? (C.promise && C.resolver(q), !0)
                                      : ((t.velocityQueueEntryFlag = !0),
                                        void f(a));
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
                          (q = x
                              ? arguments[0].elements || arguments[0].e
                              : arguments[0])),
                    (q = f(q)))
                ) {
                    x
                        ? ((s = arguments[0].properties || arguments[0].p),
                          (u = arguments[0].options || arguments[0].o))
                        : ((s = arguments[o]), (u = arguments[o + 1]));
                    var y = q.length,
                        z = 0;
                    if (
                        !/^(stop|finish|finishAll)$/i.test(s) &&
                        !m.isPlainObject(u)
                    ) {
                        var A = o + 1;
                        u = {};
                        for (var B = A; B < arguments.length; B++)
                            p.isArray(arguments[B]) ||
                            (!/^(fast|normal|slow)$/i.test(arguments[B]) &&
                                !/^\d/.test(arguments[B]))
                                ? p.isString(arguments[B]) ||
                                  p.isArray(arguments[B])
                                    ? (u.easing = arguments[B])
                                    : p.isFunction(arguments[B]) &&
                                      (u.complete = arguments[B])
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
                                    g(b).delayTimer.next &&
                                        g(b).delayTimer.next(),
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
                                                    (u !== d ||
                                                        b[2].queue !== !1)) ||
                                                void m.each(q, function (c, d) {
                                                    if (d === e)
                                                        if (
                                                            ((u === !0 ||
                                                                p.isString(
                                                                    u
                                                                )) &&
                                                                (m.each(
                                                                    m.queue(
                                                                        d,
                                                                        p.isString(
                                                                            u
                                                                        )
                                                                            ? u
                                                                            : ""
                                                                    ),
                                                                    function (
                                                                        a,
                                                                        b
                                                                    ) {
                                                                        p.isFunction(
                                                                            b
                                                                        ) &&
                                                                            b(
                                                                                null,
                                                                                !0
                                                                            );
                                                                    }
                                                                ),
                                                                m.queue(
                                                                    d,
                                                                    p.isString(
                                                                        u
                                                                    )
                                                                        ? u
                                                                        : "",
                                                                    []
                                                                )),
                                                            "stop" === s)
                                                        ) {
                                                            var h = g(d);
                                                            h &&
                                                                h.tweensContainer &&
                                                                f !== !1 &&
                                                                m.each(
                                                                    h.tweensContainer,
                                                                    function (
                                                                        a,
                                                                        b
                                                                    ) {
                                                                        b.endValue =
                                                                            b.currentValue;
                                                                    }
                                                                ),
                                                                E.push(a);
                                                        } else
                                                            ("finish" !== s &&
                                                                "finishAll" !==
                                                                    s) ||
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
                                        h.backwards === !0 &&
                                            (q = m.extend(!0, [], q).reverse()),
                                        m.each(q, function (a, b) {
                                            parseFloat(h.stagger)
                                                ? (h.delay =
                                                      G +
                                                      parseFloat(h.stagger) * a)
                                                : p.isFunction(h.stagger) &&
                                                  (h.delay =
                                                      G +
                                                      h.stagger.call(b, a, y)),
                                                h.drag &&
                                                    ((h.duration =
                                                        parseFloat(F) ||
                                                        (/^(callout|transition)/.test(
                                                            s
                                                        )
                                                            ? 1e3
                                                            : r)),
                                                    (h.duration = Math.max(
                                                        h.duration *
                                                            (h.backwards
                                                                ? 1 - a / y
                                                                : (a + 1) / y),
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
                                    C.promise
                                        ? C.rejecter(new Error(H))
                                        : console.log(H),
                                    a()
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
                a !== b &&
                    ((a.fn.velocity = w),
                    (a.fn.velocity.defaults = t.defaults)),
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
                                    ? "inline" ===
                                      t.CSS.Values.getDisplayType(a)
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
                                (n.overflow = a.style.overflow),
                                    (a.style.overflow = "hidden");
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
                            i.display === d &&
                                (i.display = "In" === b ? "auto" : "none"),
                            t(this, k, i);
                    };
                }),
                t
            );
        })(window.jQuery || window.Zepto || window, window, document);
    });

// parallax
//# sourceMappingURL=parallax.min.js.map
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
                            if (
                                ((t[5] = "de"),
                                "5" === Object.getOwnPropertyNames(t)[0])
                            )
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
                                "abcdefghijklmnopqrst"
                                    .split("")
                                    .forEach(function (t) {
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
                              for (
                                  var i, a, l = n(t), h = 1;
                                  h < arguments.length;
                                  h++
                              ) {
                                  i = Object(arguments[h]);
                                  for (var u in i)
                                      s.call(i, u) && (l[u] = i[u]);
                                  if (o) {
                                      a = o(i);
                                      for (var c = 0; c < a.length; c++)
                                          r.call(i, a[c]) &&
                                              (l[a[c]] = i[a[c]]);
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
                            c =
                                "function" == typeof setTimeout
                                    ? setTimeout
                                    : n;
                        } catch (t) {
                            c = n;
                        }
                        try {
                            d =
                                "function" == typeof clearTimeout
                                    ? clearTimeout
                                    : o;
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
                                (l =
                                    o[s[h] + "Cancel" + r] ||
                                    o[s[h] + "CancelRequest" + r]);
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
                                return (
                                    d.push({
                                        handle: ++c,
                                        callback: t,
                                        cancelled: !1,
                                    }),
                                    c
                                );
                            }),
                                (l = function (t) {
                                    for (var e = 0; e < d.length; e++)
                                        d[e].handle === t &&
                                            (d[e].cancelled = !0);
                                });
                        }
                        (e.exports = function (t) {
                            return a.call(o, t);
                        }),
                            (e.exports.cancel = function () {
                                l.apply(o, arguments);
                            }),
                            (e.exports.polyfill = function () {
                                (o.requestAnimationFrame = a),
                                    (o.cancelAnimationFrame = l);
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
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
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
                                return a.deserialize(
                                    t.getAttribute("data-" + e)
                                );
                            },
                            deserialize: function (t) {
                                return (
                                    "true" === t ||
                                    ("false" !== t &&
                                        ("null" === t
                                            ? null
                                            : !isNaN(parseFloat(t)) &&
                                              isFinite(t)
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
                                a.css(
                                    t,
                                    "transform",
                                    "translate3d(0,0,0) rotate(0.0001deg)"
                                ),
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
                                            ? ((s =
                                                  a.vendors[l][0] +
                                                  "transform"),
                                              (r =
                                                  a.vendors[l][1] +
                                                  "Transform"))
                                            : ((s = "transform"),
                                              (r = "transform")),
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
                                            var u =
                                                    document.body ||
                                                    document.createElement(
                                                        "body"
                                                    ),
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
                                                (e.style[r] =
                                                    "translate3d(1px,1px,1px)"),
                                                (o =
                                                    void 0 !==
                                                        (n = window
                                                            .getComputedStyle(e)
                                                            .getPropertyValue(
                                                                s
                                                            )) &&
                                                    n.length > 0 &&
                                                    "none" !== n),
                                                (c.style.overflow = d),
                                                u.removeChild(e),
                                                m &&
                                                    (u.removeAttribute("style"),
                                                    u.parentNode.removeChild(
                                                        u
                                                    ));
                                        }
                                }
                                return o;
                            },
                            css: function (t, e, i) {
                                var n = a.propertyCache[e];
                                if (!n)
                                    for (
                                        var o = 0, s = a.vendors.length;
                                        o < s;
                                        o++
                                    )
                                        if (
                                            ((n =
                                                null !== a.vendors[o]
                                                    ? a.camelCase(
                                                          a.vendors[o][1] +
                                                              "-" +
                                                              e
                                                      )
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
                                    calibrateX: a.data(
                                        this.element,
                                        "calibrate-x"
                                    ),
                                    calibrateY: a.data(
                                        this.element,
                                        "calibrate-y"
                                    ),
                                    invertX: a.data(this.element, "invert-x"),
                                    invertY: a.data(this.element, "invert-y"),
                                    limitX: a.data(this.element, "limit-x"),
                                    limitY: a.data(this.element, "limit-y"),
                                    scalarX: a.data(this.element, "scalar-x"),
                                    scalarY: a.data(this.element, "scalar-y"),
                                    frictionX: a.data(
                                        this.element,
                                        "friction-x"
                                    ),
                                    frictionY: a.data(
                                        this.element,
                                        "friction-y"
                                    ),
                                    originX: a.data(this.element, "origin-x"),
                                    originY: a.data(this.element, "origin-y"),
                                    pointerEvents: a.data(
                                        this.element,
                                        "pointer-events"
                                    ),
                                    precision: a.data(
                                        this.element,
                                        "precision"
                                    ),
                                    relativeInput: a.data(
                                        this.element,
                                        "relative-input"
                                    ),
                                    clipRelativeInput: a.data(
                                        this.element,
                                        "clip-relative-input"
                                    ),
                                    hoverOnly: a.data(
                                        this.element,
                                        "hover-only"
                                    ),
                                    inputElement: document.querySelector(
                                        a.data(this.element, "input-element")
                                    ),
                                    selector: a.data(this.element, "selector"),
                                };
                                for (var s in o) null === o[s] && delete o[s];
                                r(this, l, o, i),
                                    this.inputElement ||
                                        (this.inputElement = this.element),
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
                                    (this.onMouseMove =
                                        this.onMouseMove.bind(this)),
                                    (this.onDeviceOrientation =
                                        this.onDeviceOrientation.bind(this)),
                                    (this.onDeviceMotion =
                                        this.onDeviceMotion.bind(this)),
                                    (this.onOrientationTimer =
                                        this.onOrientationTimer.bind(this)),
                                    (this.onMotionTimer =
                                        this.onMotionTimer.bind(this)),
                                    (this.onCalibrationTimer =
                                        this.onCalibrationTimer.bind(this)),
                                    (this.onAnimationFrame =
                                        this.onAnimationFrame.bind(this)),
                                    (this.onWindowResize =
                                        this.onWindowResize.bind(this)),
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
                                        !!window.DeviceMotionEvent &&
                                        !this.desktop),
                                    (this.orientationSupport =
                                        !!window.DeviceOrientationEvent &&
                                        !this.desktop),
                                    (this.orientationStatus = 0),
                                    (this.motionStatus = 0),
                                    this.initialise();
                            }
                            return (
                                o(t, [
                                    {
                                        key: "initialise",
                                        value: function () {
                                            void 0 ===
                                                this.transform2DSupport &&
                                                ((this.transform2DSupport =
                                                    a.transformSupport("2D")),
                                                (this.transform3DSupport =
                                                    a.transformSupport("3D"))),
                                                this.transform3DSupport &&
                                                    a.accelerate(this.element),
                                                "static" ===
                                                    window
                                                        .getComputedStyle(
                                                            this.element
                                                        )
                                                        .getPropertyValue(
                                                            "position"
                                                        ) &&
                                                    (this.element.style.position =
                                                        "relative"),
                                                this.pointerEvents ||
                                                    (this.element.style.pointerEvents =
                                                        "none"),
                                                this.updateLayers(),
                                                this.updateDimensions(),
                                                this.enable(),
                                                this.queueCalibration(
                                                    this.calibrationDelay
                                                );
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
                                                ? (this.layers =
                                                      this.element.querySelectorAll(
                                                          this.selector
                                                      ))
                                                : (this.layers =
                                                      this.element.children),
                                                this.layers.length ||
                                                    console.warn(
                                                        "ParallaxJS: Your scene does not have any layers."
                                                    ),
                                                (this.depthsX = []),
                                                (this.depthsY = []);
                                            for (
                                                var t = 0;
                                                t < this.layers.length;
                                                t++
                                            ) {
                                                var e = this.layers[t];
                                                this.transform3DSupport &&
                                                    a.accelerate(e),
                                                    (e.style.position = t
                                                        ? "absolute"
                                                        : "relative"),
                                                    (e.style.display = "block"),
                                                    (e.style.left = 0),
                                                    (e.style.top = 0);
                                                var i = a.data(e, "depth") || 0;
                                                this.depthsX.push(
                                                    a.data(e, "depth-x") || i
                                                ),
                                                    this.depthsY.push(
                                                        a.data(e, "depth-y") ||
                                                            i
                                                    );
                                            }
                                        },
                                    },
                                    {
                                        key: "updateDimensions",
                                        value: function () {
                                            (this.windowWidth =
                                                window.innerWidth),
                                                (this.windowHeight =
                                                    window.innerHeight),
                                                (this.windowCenterX =
                                                    this.windowWidth *
                                                    this.originX),
                                                (this.windowCenterY =
                                                    this.windowHeight *
                                                    this.originY),
                                                (this.windowRadiusX = Math.max(
                                                    this.windowCenterX,
                                                    this.windowWidth -
                                                        this.windowCenterX
                                                )),
                                                (this.windowRadiusY = Math.max(
                                                    this.windowCenterY,
                                                    this.windowHeight -
                                                        this.windowCenterY
                                                ));
                                        },
                                    },
                                    {
                                        key: "updateBounds",
                                        value: function () {
                                            (this.bounds =
                                                this.inputElement.getBoundingClientRect()),
                                                (this.elementPositionX =
                                                    this.bounds.left),
                                                (this.elementPositionY =
                                                    this.bounds.top),
                                                (this.elementWidth =
                                                    this.bounds.width),
                                                (this.elementHeight =
                                                    this.bounds.height),
                                                (this.elementCenterX =
                                                    this.elementWidth *
                                                    this.originX),
                                                (this.elementCenterY =
                                                    this.elementHeight *
                                                    this.originY),
                                                (this.elementRangeX = Math.max(
                                                    this.elementCenterX,
                                                    this.elementWidth -
                                                        this.elementCenterX
                                                )),
                                                (this.elementRangeY = Math.max(
                                                    this.elementCenterY,
                                                    this.elementHeight -
                                                        this.elementCenterY
                                                ));
                                        },
                                    },
                                    {
                                        key: "queueCalibration",
                                        value: function (t) {
                                            clearTimeout(this.calibrationTimer),
                                                (this.calibrationTimer =
                                                    setTimeout(
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
                                                          this
                                                              .onDeviceOrientation
                                                      ),
                                                      (this.detectionTimer =
                                                          setTimeout(
                                                              this
                                                                  .onOrientationTimer,
                                                              this.supportDelay
                                                          )))
                                                    : this.motionSupport
                                                    ? ((this.portrait = !1),
                                                      window.addEventListener(
                                                          "devicemotion",
                                                          this.onDeviceMotion
                                                      ),
                                                      (this.detectionTimer =
                                                          setTimeout(
                                                              this
                                                                  .onMotionTimer,
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
                                                window.addEventListener(
                                                    "resize",
                                                    this.onWindowResize
                                                ),
                                                (this.raf = s(
                                                    this.onAnimationFrame
                                                )));
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
                                                          this
                                                              .onDeviceOrientation
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
                                            (this.calibrateX =
                                                void 0 === t
                                                    ? this.calibrateX
                                                    : t),
                                                (this.calibrateY =
                                                    void 0 === e
                                                        ? this.calibrateY
                                                        : e);
                                        },
                                    },
                                    {
                                        key: "invert",
                                        value: function (t, e) {
                                            (this.invertX =
                                                void 0 === t
                                                    ? this.invertX
                                                    : t),
                                                (this.invertY =
                                                    void 0 === e
                                                        ? this.invertY
                                                        : e);
                                        },
                                    },
                                    {
                                        key: "friction",
                                        value: function (t, e) {
                                            (this.frictionX =
                                                void 0 === t
                                                    ? this.frictionX
                                                    : t),
                                                (this.frictionY =
                                                    void 0 === e
                                                        ? this.frictionY
                                                        : e);
                                        },
                                    },
                                    {
                                        key: "scalar",
                                        value: function (t, e) {
                                            (this.scalarX =
                                                void 0 === t
                                                    ? this.scalarX
                                                    : t),
                                                (this.scalarY =
                                                    void 0 === e
                                                        ? this.scalarY
                                                        : e);
                                        },
                                    },
                                    {
                                        key: "limit",
                                        value: function (t, e) {
                                            (this.limitX =
                                                void 0 === t ? this.limitX : t),
                                                (this.limitY =
                                                    void 0 === e
                                                        ? this.limitY
                                                        : e);
                                        },
                                    },
                                    {
                                        key: "origin",
                                        value: function (t, e) {
                                            (this.originX =
                                                void 0 === t
                                                    ? this.originX
                                                    : t),
                                                (this.originY =
                                                    void 0 === e
                                                        ? this.originY
                                                        : e);
                                        },
                                    },
                                    {
                                        key: "setInputElement",
                                        value: function (t) {
                                            (this.inputElement = t),
                                                this.updateDimensions();
                                        },
                                    },
                                    {
                                        key: "setPosition",
                                        value: function (t, e, i) {
                                            (e =
                                                e.toFixed(this.precision) +
                                                "px"),
                                                (i =
                                                    i.toFixed(this.precision) +
                                                    "px"),
                                                this.transform3DSupport
                                                    ? a.css(
                                                          t,
                                                          "transform",
                                                          "translate3d(" +
                                                              e +
                                                              "," +
                                                              i +
                                                              ",0)"
                                                      )
                                                    : this.transform2DSupport
                                                    ? a.css(
                                                          t,
                                                          "transform",
                                                          "translate(" +
                                                              e +
                                                              "," +
                                                              i +
                                                              ")"
                                                      )
                                                    : ((t.style.left = e),
                                                      (t.style.top = i));
                                        },
                                    },
                                    {
                                        key: "onOrientationTimer",
                                        value: function () {
                                            this.orientationSupport &&
                                            0 === this.orientationStatus
                                                ? (this.disable(),
                                                  (this.orientationSupport =
                                                      !1),
                                                  this.enable())
                                                : this.doReadyCallback();
                                        },
                                    },
                                    {
                                        key: "onMotionTimer",
                                        value: function () {
                                            this.motionSupport &&
                                            0 === this.motionStatus
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
                                            var t =
                                                    this.inputX -
                                                    this.calibrationX,
                                                e =
                                                    this.inputY -
                                                    this.calibrationY;
                                            (Math.abs(t) >
                                                this.calibrationThreshold ||
                                                Math.abs(e) >
                                                    this
                                                        .calibrationThreshold) &&
                                                this.queueCalibration(0),
                                                this.portrait
                                                    ? ((this.motionX = this
                                                          .calibrateX
                                                          ? e
                                                          : this.inputY),
                                                      (this.motionY = this
                                                          .calibrateY
                                                          ? t
                                                          : this.inputX))
                                                    : ((this.motionX = this
                                                          .calibrateX
                                                          ? t
                                                          : this.inputX),
                                                      (this.motionY = this
                                                          .calibrateY
                                                          ? e
                                                          : this.inputY)),
                                                (this.motionX *=
                                                    this.elementWidth *
                                                    (this.scalarX / 100)),
                                                (this.motionY *=
                                                    this.elementHeight *
                                                    (this.scalarY / 100)),
                                                isNaN(
                                                    parseFloat(this.limitX)
                                                ) ||
                                                    (this.motionX = a.clamp(
                                                        this.motionX,
                                                        -this.limitX,
                                                        this.limitX
                                                    )),
                                                isNaN(
                                                    parseFloat(this.limitY)
                                                ) ||
                                                    (this.motionY = a.clamp(
                                                        this.motionY,
                                                        -this.limitY,
                                                        this.limitY
                                                    )),
                                                (this.velocityX +=
                                                    (this.motionX -
                                                        this.velocityX) *
                                                    this.frictionX),
                                                (this.velocityY +=
                                                    (this.motionY -
                                                        this.velocityY) *
                                                    this.frictionY);
                                            for (
                                                var i = 0;
                                                i < this.layers.length;
                                                i++
                                            ) {
                                                var n = this.layers[i],
                                                    o = this.depthsX[i],
                                                    r = this.depthsY[i],
                                                    l =
                                                        this.velocityX *
                                                        (o *
                                                            (this.invertX
                                                                ? -1
                                                                : 1)),
                                                    h =
                                                        this.velocityY *
                                                        (r *
                                                            (this.invertY
                                                                ? -1
                                                                : 1));
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
                                                o =
                                                    this.windowHeight >
                                                    this.windowWidth;
                                            this.portrait !== o &&
                                                ((this.portrait = o),
                                                (this.calibrationFlag = !0)),
                                                this.calibrationFlag &&
                                                    ((this.calibrationFlag =
                                                        !1),
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
                                                ((this.orientationStatus = 1),
                                                this.rotate(e, i));
                                        },
                                    },
                                    {
                                        key: "onDeviceMotion",
                                        value: function (t) {
                                            var e = t.rotationRate.beta,
                                                i = t.rotationRate.gamma;
                                            null !== e &&
                                                null !== i &&
                                                ((this.motionStatus = 1),
                                                this.rotate(e, i));
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
                                                    e >
                                                        this.elementPositionX +
                                                            this.elementWidth ||
                                                    i < this.elementPositionY ||
                                                    i >
                                                        this.elementPositionY +
                                                            this.elementHeight)
                                            )
                                                return (
                                                    (this.inputX = 0),
                                                    void (this.inputY = 0)
                                                );
                                            this.relativeInput
                                                ? (this.clipRelativeInput &&
                                                      ((e = Math.max(
                                                          e,
                                                          this.elementPositionX
                                                      )),
                                                      (e = Math.min(
                                                          e,
                                                          this
                                                              .elementPositionX +
                                                              this.elementWidth
                                                      )),
                                                      (i = Math.max(
                                                          i,
                                                          this.elementPositionY
                                                      )),
                                                      (i = Math.min(
                                                          i,
                                                          this
                                                              .elementPositionY +
                                                              this.elementHeight
                                                      ))),
                                                  this.elementRangeX &&
                                                      this.elementRangeY &&
                                                      ((this.inputX =
                                                          (e -
                                                              this
                                                                  .elementPositionX -
                                                              this
                                                                  .elementCenterX) /
                                                          this.elementRangeX),
                                                      (this.inputY =
                                                          (i -
                                                              this
                                                                  .elementPositionY -
                                                              this
                                                                  .elementCenterY) /
                                                          this.elementRangeY)))
                                                : this.windowRadiusX &&
                                                  this.windowRadiusY &&
                                                  ((this.inputX =
                                                      (e - this.windowCenterX) /
                                                      this.windowRadiusX),
                                                  (this.inputY =
                                                      (i - this.windowCenterY) /
                                                      this.windowRadiusY));
                                        },
                                    },
                                    {
                                        key: "destroy",
                                        value: function () {
                                            this.disable(),
                                                clearTimeout(
                                                    this.calibrationTimer
                                                ),
                                                clearTimeout(
                                                    this.detectionTimer
                                                ),
                                                this.element.removeAttribute(
                                                    "style"
                                                );
                                            for (
                                                var t = 0;
                                                t < this.layers.length;
                                                t++
                                            )
                                                this.layers[t].removeAttribute(
                                                    "style"
                                                );
                                            delete this.element,
                                                delete this.layers;
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

// 