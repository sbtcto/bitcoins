(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        86430: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return l
                }
            });
            var r = e(85893);

            function o(t, n, e) {
                return n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e, t
            }
            e(94299), e(98949);
            var c = e(51355),
                u = e(94660),
                i = (0, c.xC)({
                    reducer: {
                        common: u.ZP
                    }
                }),
                s = e(17714),
                a = (e(32577), e(1818)),
                f = e.n(a);

            function p(t, n) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function b(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? p(Object(e), !0).forEach((function(n) {
                        o(t, n, e[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : p(Object(e)).forEach((function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                    }))
                }
                return t
            }
            var l = function(t) {
                var n = t.Component,
                    e = t.pageProps;
                return (0, r.jsxs)(s.zt, {
                    store: i,
                    children: [(0, r.jsx)(f(), {}), (0, r.jsx)(n, b({}, e))]
                })
            }
        },
        94660: function(t, n, e) {
            "use strict";
            e.d(n, {
                hv: function() {
                    return c
                },
                _Y: function() {
                    return u
                },
                y_: function() {
                    return i
                },
                bW: function() {
                    return s
                }
            });
            var r = (0, e(51355).oM)({
                    name: "common",
                    initialState: {
                        address: null,
                        stats: {}
                    },
                    reducers: {
                        setAccount: function(t, n) {
                            t.address = n.payload
                        },
                        setStats: function(t, n) {
                            t.stats = n.payload
                        }
                    }
                }),
                o = r.actions,
                c = o.setAccount,
                u = o.setStats,
                i = function(t) {
                    return t.common.address
                },
                s = function(t) {
                    return t.common.stats
                };
            n.ZP = r.reducer
        },
        81780: function(t, n, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return e(86430)
            }])
        },
        32577: function() {},
        94299: function() {},
        98949: function() {}
    },
    function(t) {
        var n = function(n) {
            return t(t.s = n)
        };
        t.O(0, [774, 94, 351, 219], (function() {
            return n(81780), n(72441)
        }));
        var e = t.O();
        _N_E = e
    }
]);