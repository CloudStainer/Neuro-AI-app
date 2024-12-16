(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2435],
  {
    36539: function (e, t, n) {
      "use strict";
      var r = Object.create,
        i = Object.defineProperty,
        a = Object.getOwnPropertyDescriptor,
        o = Object.getOwnPropertyNames,
        s = Object.getPrototypeOf,
        u = Object.prototype.hasOwnProperty,
        c = (e, t) => i(e, "name", { value: t, configurable: !0 }),
        l = (e, t, n, r) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let s of o(t))
              u.call(e, s) ||
                s === n ||
                i(e, s, {
                  get: () => t[s],
                  enumerable: !(r = a(t, s)) || r.enumerable,
                });
          return e;
        },
        d = (e, t, n) => (
          (n = null != e ? r(s(e)) : {}),
          l(
            !t && e && e.__esModule
              ? n
              : i(n, "default", { value: e, enumerable: !0 }),
            e
          )
        ),
        f = {};
      ((e, t) => {
        for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
      })(f, { default: () => m }),
        (e.exports = l(i({}, "__esModule", { value: !0 }), f));
      var y = d(n(40718)),
        h = d(n(2265)),
        p = d(n(71318)),
        v = c((e) => {
          let {
              color: t,
              height: n,
              showSpinner: r,
              crawl: i,
              crawlSpeed: a,
              initialPosition: o,
              easing: s,
              speed: u,
              shadow: l,
              template: d,
              zIndex: f = 1600,
              showAtBottom: y = !1,
            } = e,
            v = null != t ? t : "#29d",
            m =
              l || void 0 === l
                ? l
                  ? "box-shadow:".concat(l)
                  : "box-shadow:0 0 10px ".concat(v, ",0 0 5px ").concat(v)
                : "",
            g = h.createElement(
              "style",
              null,
              "#nprogress{pointer-events:none}#nprogress .bar{background:"
                .concat(v, ";position:fixed;z-index:")
                .concat(f, ";")
                .concat(
                  y ? "bottom: 0;" : "top: 0;",
                  "left:0;width:100%;height:"
                )
                .concat(
                  null != n ? n : 3,
                  "px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;"
                )
                .concat(
                  m,
                  ";opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:"
                )
                .concat(f, ";")
                .concat(
                  y ? "bottom: 15px;" : "top: 15px;",
                  "right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:"
                )
                .concat(v, ";border-left-color:")
                .concat(
                  v,
                  ";border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}"
                )
            ),
            b = c(
              (e) => new URL(e, window.location.href).href,
              "toAbsoluteURL"
            ),
            w = c((e, t) => {
              let n = new URL(b(e)),
                r = new URL(b(t));
              return n.href.split("#")[0] === r.href.split("#")[0];
            }, "isHashAnchor"),
            C = c((e, t) => {
              let n = new URL(b(e)),
                r = new URL(b(t));
              return (
                n.hostname.replace(/^www\./, "") ===
                r.hostname.replace(/^www\./, "")
              );
            }, "isSameHostName");
          return (
            h.useEffect(() => {
              let e, t;
              function n(e, t) {
                let n = new URL(e),
                  r = new URL(t);
                if (
                  n.hostname === r.hostname &&
                  n.pathname === r.pathname &&
                  n.search === r.search
                ) {
                  let e = n.hash,
                    t = r.hash;
                  return (
                    e !== t && n.href.replace(e, "") === r.href.replace(t, "")
                  );
                }
                return !1;
              }
              p.configure({
                showSpinner: null == r || r,
                trickle: null == i || i,
                trickleSpeed: null != a ? a : 200,
                minimum: null != o ? o : 0.08,
                easing: null != s ? s : "ease",
                speed: null != u ? u : 200,
                template:
                  null != d
                    ? d
                    : '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
              }),
                c(n, "isAnchorOfCurrentUrl");
              var l,
                f,
                y = document.querySelectorAll("html");
              let h = c(
                () => y.forEach((e) => e.classList.remove("nprogress-busy")),
                "removeNProgressClass"
              );
              function v(e) {
                for (; e && "a" !== e.tagName.toLowerCase(); )
                  e = e.parentElement;
                return e;
              }
              function m(e) {
                try {
                  let t = e.target,
                    r = v(t),
                    i = null == r ? void 0 : r.href;
                  if (i) {
                    let t = window.location.href,
                      a = "_blank" === r.target,
                      o = [
                        "tel:",
                        "mailto:",
                        "sms:",
                        "blob:",
                        "download:",
                      ].some((e) => i.startsWith(e)),
                      s = n(t, i);
                    if (!C(window.location.href, r.href)) return;
                    i === t ||
                    s ||
                    a ||
                    o ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    e.altKey ||
                    w(window.location.href, r.href) ||
                    !b(r.href).startsWith("http")
                      ? (p.start(), p.done(), h())
                      : p.start();
                  }
                } catch (e) {
                  p.start(), p.done();
                }
              }
              function g() {
                p.done(), h();
              }
              function I() {
                p.done();
              }
              return (
                c(v, "findClosestAnchor"),
                c(m, "handleClick"),
                (e = (l = window.history).pushState),
                (l.pushState = function () {
                  for (
                    var t = arguments.length, n = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  return p.done(), h(), e.apply(l, n);
                }),
                (t = (f = window.history).replaceState),
                (f.replaceState = function () {
                  for (
                    var e = arguments.length, n = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  return p.done(), h(), t.apply(f, n);
                }),
                c(g, "handlePageHide"),
                c(I, "handleBackAndForth"),
                window.addEventListener("popstate", I),
                document.addEventListener("click", m),
                window.addEventListener("pagehide", g),
                () => {
                  document.removeEventListener("click", m),
                    window.removeEventListener("pagehide", g),
                    window.removeEventListener("popstate", I);
                }
              );
            }, []),
            g
          );
        }, "NextTopLoader"),
        m = v;
      v.propTypes = {
        color: y.string,
        height: y.number,
        showSpinner: y.bool,
        crawl: y.bool,
        crawlSpeed: y.number,
        initialPosition: y.number,
        easing: y.string,
        speed: y.number,
        template: y.string,
        shadow: y.oneOfType([y.string, y.bool]),
        zIndex: y.number,
        showAtBottom: y.bool,
      };
    },
    71318: function (e, t, n) {
      var r, i;
      void 0 !==
        (i =
          "function" ==
          typeof (r = function () {
            var e,
              t,
              n,
              r = {};
            r.version = "0.2.0";
            var i = (r.settings = {
              minimum: 0.08,
              easing: "ease",
              positionUsing: "",
              speed: 200,
              trickle: !0,
              trickleRate: 0.02,
              trickleSpeed: 800,
              showSpinner: !0,
              barSelector: '[role="bar"]',
              spinnerSelector: '[role="spinner"]',
              parent: "body",
              template:
                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
            });
            function a(e, t, n) {
              return e < t ? t : e > n ? n : e;
            }
            (r.configure = function (e) {
              var t, n;
              for (t in e)
                void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (i[t] = n);
              return this;
            }),
              (r.status = null),
              (r.set = function (e) {
                var t = r.isStarted();
                (e = a(e, i.minimum, 1)), (r.status = 1 === e ? null : e);
                var n = r.render(!t),
                  u = n.querySelector(i.barSelector),
                  c = i.speed,
                  l = i.easing;
                return (
                  n.offsetWidth,
                  o(function (t) {
                    var a, o;
                    "" === i.positionUsing &&
                      (i.positionUsing = r.getPositioningCSS()),
                      s(
                        u,
                        ((a = e),
                        ((o =
                          "translate3d" === i.positionUsing
                            ? {
                                transform:
                                  "translate3d(" + (-1 + a) * 100 + "%,0,0)",
                              }
                            : "translate" === i.positionUsing
                            ? {
                                transform:
                                  "translate(" + (-1 + a) * 100 + "%,0)",
                              }
                            : {
                                "margin-left": (-1 + a) * 100 + "%",
                              }).transition = "all " + c + "ms " + l),
                        o)
                      ),
                      1 === e
                        ? (s(n, { transition: "none", opacity: 1 }),
                          n.offsetWidth,
                          setTimeout(function () {
                            s(n, {
                              transition: "all " + c + "ms linear",
                              opacity: 0,
                            }),
                              setTimeout(function () {
                                r.remove(), t();
                              }, c);
                          }, c))
                        : setTimeout(t, c);
                  }),
                  this
                );
              }),
              (r.isStarted = function () {
                return "number" == typeof r.status;
              }),
              (r.start = function () {
                r.status || r.set(0);
                var e = function () {
                  setTimeout(function () {
                    r.status && (r.trickle(), e());
                  }, i.trickleSpeed);
                };
                return i.trickle && e(), this;
              }),
              (r.done = function (e) {
                return e || r.status
                  ? r.inc(0.3 + 0.5 * Math.random()).set(1)
                  : this;
              }),
              (r.inc = function (e) {
                var t = r.status;
                return t
                  ? ("number" != typeof e &&
                      (e = (1 - t) * a(Math.random() * t, 0.1, 0.95)),
                    (t = a(t + e, 0, 0.994)),
                    r.set(t))
                  : r.start();
              }),
              (r.trickle = function () {
                return r.inc(Math.random() * i.trickleRate);
              }),
              (e = 0),
              (t = 0),
              (r.promise = function (n) {
                return (
                  n &&
                    "resolved" !== n.state() &&
                    (0 === t && r.start(),
                    e++,
                    t++,
                    n.always(function () {
                      0 == --t ? ((e = 0), r.done()) : r.set((e - t) / e);
                    })),
                  this
                );
              }),
              (r.render = function (e) {
                if (r.isRendered()) return document.getElementById("nprogress");
                c(document.documentElement, "nprogress-busy");
                var t = document.createElement("div");
                (t.id = "nprogress"), (t.innerHTML = i.template);
                var n,
                  a = t.querySelector(i.barSelector),
                  o = e ? "-100" : (-1 + (r.status || 0)) * 100,
                  u = document.querySelector(i.parent);
                return (
                  s(a, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + o + "%,0,0)",
                  }),
                  !i.showSpinner &&
                    (n = t.querySelector(i.spinnerSelector)) &&
                    f(n),
                  u != document.body && c(u, "nprogress-custom-parent"),
                  u.appendChild(t),
                  t
                );
              }),
              (r.remove = function () {
                l(document.documentElement, "nprogress-busy"),
                  l(
                    document.querySelector(i.parent),
                    "nprogress-custom-parent"
                  );
                var e = document.getElementById("nprogress");
                e && f(e);
              }),
              (r.isRendered = function () {
                return !!document.getElementById("nprogress");
              }),
              (r.getPositioningCSS = function () {
                var e = document.body.style,
                  t =
                    "WebkitTransform" in e
                      ? "Webkit"
                      : "MozTransform" in e
                      ? "Moz"
                      : "msTransform" in e
                      ? "ms"
                      : "OTransform" in e
                      ? "O"
                      : "";
                return t + "Perspective" in e
                  ? "translate3d"
                  : t + "Transform" in e
                  ? "translate"
                  : "margin";
              });
            var o =
                ((n = []),
                function (e) {
                  n.push(e),
                    1 == n.length &&
                      (function e() {
                        var t = n.shift();
                        t && t(e);
                      })();
                }),
              s = (function () {
                var e = ["Webkit", "O", "Moz", "ms"],
                  t = {};
                function n(n, r, i) {
                  var a;
                  (r =
                    t[
                      (a = (a = r)
                        .replace(/^-ms-/, "ms-")
                        .replace(/-([\da-z])/gi, function (e, t) {
                          return t.toUpperCase();
                        }))
                    ] ||
                    (t[a] = (function (t) {
                      var n = document.body.style;
                      if (t in n) return t;
                      for (
                        var r,
                          i = e.length,
                          a = t.charAt(0).toUpperCase() + t.slice(1);
                        i--;

                      )
                        if ((r = e[i] + a) in n) return r;
                      return t;
                    })(a))),
                    (n.style[r] = i);
                }
                return function (e, t) {
                  var r,
                    i,
                    a = arguments;
                  if (2 == a.length)
                    for (r in t)
                      void 0 !== (i = t[r]) &&
                        t.hasOwnProperty(r) &&
                        n(e, r, i);
                  else n(e, a[1], a[2]);
                };
              })();
            function u(e, t) {
              return (
                ("string" == typeof e ? e : d(e)).indexOf(" " + t + " ") >= 0
              );
            }
            function c(e, t) {
              var n = d(e),
                r = n + t;
              u(n, t) || (e.className = r.substring(1));
            }
            function l(e, t) {
              var n,
                r = d(e);
              u(e, t) &&
                ((n = r.replace(" " + t + " ", " ")),
                (e.className = n.substring(1, n.length - 1)));
            }
            function d(e) {
              return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
            }
            function f(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            }
            return r;
          })
            ? r.call(t, n, t, e)
            : r) && (e.exports = i);
    },
    48049: function (e, t, n) {
      "use strict";
      var r = n(14397);
      function i() {}
      function a() {}
      (a.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, a, o) {
            if (o !== r) {
              var s = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    40718: function (e, t, n) {
      e.exports = n(48049)();
    },
    14397: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    2648: function () {},
    56799: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_d65c78', '__Inter_Fallback_d65c78'",
          fontStyle: "normal",
        },
        className: "__className_d65c78",
        variable: "__variable_d65c78",
      };
    },
    94197: function (e, t, n) {
      "use strict";
      function r(e, t = {}) {
        let n;
        try {
          n = e.getClient(t);
        } catch {}
        return n;
      }
      n.d(t, {
        s: function () {
          return r;
        },
      });
    },
    27534: function (e, t, n) {
      "use strict";
      n.d(t, {
        OP: function () {
          return u;
        },
        if: function () {
          return a;
        },
        kq: function () {
          return o;
        },
      });
      var r = n(45345),
        i = n(52123);
      function a(e, t) {
        return (0, i.v)(e, t) ? e : (0, r.Q$)(e, t);
      }
      function o(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!s(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let n = t.prototype;
            return !!(s(n) && n.hasOwnProperty("isPrototypeOf"));
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
        );
      }
      function s(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function u(e) {
        let {
          _defaulted: t,
          behavior: n,
          gcTime: r,
          initialData: i,
          initialDataUpdatedAt: a,
          maxPages: o,
          meta: s,
          networkMode: u,
          queryFn: c,
          queryHash: l,
          queryKey: d,
          queryKeyHashFn: f,
          retry: y,
          retryDelay: h,
          structuralSharing: p,
          getPreviousPageParam: v,
          getNextPageParam: m,
          initialPageParam: g,
          _optimisticResults: b,
          enabled: w,
          notifyOnChangeProps: C,
          placeholderData: I,
          refetchInterval: x,
          refetchIntervalInBackground: q,
          refetchOnMount: E,
          refetchOnReconnect: P,
          refetchOnWindowFocus: k,
          retryOnMount: T,
          select: N,
          staleTime: F,
          suspense: S,
          throwOnError: K,
          config: O,
          connector: B,
          query: A,
          ...M
        } = e;
        return M;
      }
    },
    31213: function (e, t, n) {
      "use strict";
      n.d(t, {
        Dr: function () {
          return r;
        },
      });
      let r = {
        getItem: (e) =>
          "undefined" == typeof window
            ? null
            : (function (e, t) {
                let n = e.split("; ").find((e) => e.startsWith(`${t}=`));
                if (n) return n.substring(t.length + 1);
              })(document.cookie, e) ?? null,
        setItem(e, t) {
          "undefined" != typeof window &&
            (document.cookie = `${e}=${t};path=/;samesite=Lax`);
        },
        removeItem(e) {
          "undefined" != typeof window &&
            (document.cookie = `${e}=;max-age=-1;path=/`);
        },
      };
    },
    21758: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return r.o1;
        },
      });
      var r = n(59914);
    },
    61994: function (e, t, n) {
      "use strict";
      function r() {
        for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var a = t.length;
                  for (n = 0; n < a; n++)
                    t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                } else for (r in t) t[r] && (i && (i += " "), (i += r));
              }
              return i;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      n.d(t, {
        W: function () {
          return r;
        },
      }),
        (t.Z = r);
    },
    32457: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return u;
        },
      });
      var r = n(93627),
        i = n(59455),
        a = n(98707),
        o = n(82645),
        s = n(28766);
      async function u(
        e,
        { blockNumber: t, blockTag: n, name: u, universalResolverAddress: c }
      ) {
        let l = c;
        if (!l) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          l = (0, r.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let [d] = await (0, o.s)(
          e,
          s.L,
          "readContract"
        )({
          address: l,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [{ type: "address" }, { type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, i.NC)((0, a.T)(u))],
          blockNumber: t,
          blockTag: n,
        });
        return d;
      }
    },
    31111: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return o;
        },
      });
      var r = n(25727),
        i = n(59455),
        a = n(46908);
      async function o(e, t) {
        let {
            address: n,
            abi: o,
            args: s,
            eventName: u,
            fromBlock: c,
            strict: l,
            toBlock: d,
          } = t,
          f = (0, a.g)(e, { method: "eth_newFilter" }),
          y = u ? (0, r.O)({ abi: o, args: s, eventName: u }) : void 0,
          h = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" == typeof c ? (0, i.eC)(c) : c,
                toBlock: "bigint" == typeof d ? (0, i.eC)(d) : d,
                topics: y,
              },
            ],
          });
        return {
          abi: o,
          args: s,
          eventName: u,
          id: h,
          request: f(h),
          strict: !!l,
          type: "event",
        };
      }
    },
    13716: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var r = n(46908);
      async function i(e) {
        let t = (0, r.g)(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
    },
    85682: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return a;
        },
      });
      var r = n(72932),
        i = n(59455);
      async function a(
        e,
        { blockHash: t, blockNumber: n, blockTag: a = "latest" } = {}
      ) {
        let o;
        let s = void 0 !== n ? (0, i.eC)(n) : void 0;
        return (
          (o = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [s || a],
                },
                { dedupe: !!s }
              )),
          (0, r.ly)(o)
        );
      }
    },
    56570: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return i;
        },
      });
      var r = n(59455);
      async function i(
        e,
        { address: t, blockNumber: n, blockTag: i = "latest" }
      ) {
        let a = void 0 !== n ? (0, r.eC)(n) : void 0,
          o = await e.request(
            { method: "eth_getCode", params: [t, a || i] },
            { dedupe: !!a }
          );
        if ("0x" !== o) return o;
      }
    },
    99474: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return o;
        },
      });
      var r = n(64043),
        i = n(82645),
        a = n(63108);
      async function o(e, t) {
        let {
            abi: n,
            address: o,
            args: s,
            blockHash: u,
            eventName: c,
            fromBlock: l,
            toBlock: d,
            strict: f,
          } = t,
          y = c ? (0, r.mE)({ abi: n, name: c }) : void 0,
          h = y ? void 0 : n.filter((e) => "event" === e.type);
        return (0, i.s)(
          e,
          a.y,
          "getLogs"
        )({
          address: o,
          args: s,
          blockHash: u,
          event: y,
          events: h,
          fromBlock: l,
          toBlock: d,
          strict: f,
        });
      }
    },
    2054: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(59455);
      async function i(
        e,
        {
          blockCount: t,
          blockNumber: n,
          blockTag: i = "latest",
          rewardPercentiles: a,
        }
      ) {
        var o;
        let s = n ? (0, r.eC)(n) : void 0;
        return {
          baseFeePerGas: (o = await e.request(
            { method: "eth_feeHistory", params: [(0, r.eC)(t), s || i, a] },
            { dedupe: !!s }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: o.gasUsedRatio,
          oldestBlock: BigInt(o.oldestBlock),
          reward: o.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
    },
    18789: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return a;
        },
      });
      var r = n(42133),
        i = n(55668);
      async function a(e, { filter: t }) {
        let n = "strict" in t && t.strict,
          a = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof a[0]) return a;
        let o = a.map((e) => (0, i.U)(e));
        return "abi" in t && t.abi
          ? (0, r.h)({ abi: t.abi, logs: o, strict: n })
          : o;
      }
    },
    63108: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return s;
        },
      });
      var r = n(25727),
        i = n(42133),
        a = n(59455),
        o = n(55668);
      async function s(
        e,
        {
          address: t,
          blockHash: n,
          fromBlock: s,
          toBlock: u,
          event: c,
          events: l,
          args: d,
          strict: f,
        } = {}
      ) {
        let y = l ?? (c ? [c] : void 0),
          h = [];
        y &&
          ((h = [
            y.flatMap((e) =>
              (0, r.O)({ abi: [e], eventName: e.name, args: l ? void 0 : d })
            ),
          ]),
          c && (h = h[0]));
        let p = (
          n
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: h, blockHash: n }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: h,
                    fromBlock: "bigint" == typeof s ? (0, a.eC)(s) : s,
                    toBlock: "bigint" == typeof u ? (0, a.eC)(u) : u,
                  },
                ],
              })
        ).map((e) => (0, o.U)(e));
        return y ? (0, i.h)({ abi: y, args: d, logs: p, strict: f ?? !1 }) : p;
      }
    },
    90587: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return a;
        },
      });
      var r = n(59455),
        i = n(72932);
      async function a(
        e,
        { address: t, blockNumber: n, blockTag: a, storageKeys: o }
      ) {
        var s;
        let u = void 0 !== n ? (0, r.eC)(n) : void 0;
        return {
          ...(s = await e.request({
            method: "eth_getProof",
            params: [t, o, u || (a ?? "latest")],
          })),
          balance: s.balance ? BigInt(s.balance) : void 0,
          nonce: s.nonce ? (0, i.ly)(s.nonce) : void 0,
          storageProof: s.storageProof
            ? s.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
    },
    14205: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return i;
        },
      });
      var r = n(59455);
      async function i(
        e,
        { address: t, blockNumber: n, blockTag: i = "latest", slot: a }
      ) {
        let o = void 0 !== n ? (0, r.eC)(n) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, a, o || i],
        });
      }
    },
    68847: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var r = n(82645),
        i = n(13708),
        a = n(39277);
      async function o(e, { hash: t, transactionReceipt: n }) {
        let [o, s] = await Promise.all([
            (0, r.s)(e, i.z, "getBlockNumber")({}),
            t ? (0, r.s)(e, a.f, "getTransaction")({ hash: t }) : void 0,
          ]),
          u = n?.blockNumber || s?.blockNumber;
        return u ? o - u + 1n : 0n;
      }
    },
    97638: function (e, t, n) {
      "use strict";
      async function r(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
      n.d(t, {
        W: function () {
          return r;
        },
      });
    },
    75233: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var r = n(98158),
        i = n(45434),
        a = n(20010),
        o = n(23010),
        s = n(31669),
        u = n(93637),
        c = n(45872),
        l = n(44659),
        d = n(93610),
        f = n(59455),
        y = n(82645);
      let h =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      var p = n(69921),
        v = n(69021),
        m = n(30056),
        g = n(89256),
        b = n(40483),
        w = n(72932),
        C = n(25664);
      async function I(e, t) {
        let {
            address: n,
            factory: I,
            factoryData: x,
            hash: q,
            signature: E,
            ...P
          } = t,
          k = (0, d.v)(E)
            ? E
            : "object" == typeof E && "r" in E && "s" in E
            ? (function ({ r: e, s: t, to: n = "hex", v: r, yParity: i }) {
                let a = (() => {
                    if (0 === i || 1 === i) return i;
                    if (r && (27n === r || 28n === r || r >= 35n))
                      return r % 2n === 0n ? 1 : 0;
                    throw Error("Invalid `v` or `yParity` value");
                  })(),
                  o = `0x${new b.secp256k1.Signature(
                    (0, w.y_)(e),
                    (0, w.y_)(t)
                  ).toCompactHex()}${0 === a ? "1b" : "1c"}`;
                return "hex" === n ? o : (0, l.nr)(o);
              })(E)
            : (0, f.ci)(E),
          T = await (async () =>
            I || x
              ? (0, p.p5)(k, -32) === h
                ? k
                : (function (e) {
                    let {
                        address: t,
                        data: n,
                        signature: r,
                        to: i = "hex",
                      } = e,
                      a = (0, g.SM)([
                        (0, m.E)(
                          [
                            { type: "address" },
                            { type: "bytes" },
                            { type: "bytes" },
                          ],
                          [t, n, r]
                        ),
                        h,
                      ]);
                    return "hex" === i ? a : (0, l.nr)(a);
                  })({ address: I, data: x, signature: k })
              : k)();
        try {
          let { data: t } = await (0, y.s)(
            e,
            C.R,
            "call"
          )({
            data: (0, o.w)({ abi: r.$o, args: [n, q, T], bytecode: i.ST }),
            ...P,
          });
          return (function (e, t) {
            let n = (0, d.v)(e) ? (0, l.O0)(e) : e,
              r = (0, d.v)("0x1") ? (0, l.O0)("0x1") : "0x1";
            return (0, c.Wd)(n, r);
          })(t ?? "0x0", "0x1");
        } catch (e) {
          try {
            if (
              (0, u.E)((0, s.K)(n), await (0, v.R)({ hash: q, signature: E }))
            )
              return !0;
          } catch {}
          if (e instanceof a.cg) return !1;
          throw e;
        }
      }
    },
    41969: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return a;
        },
      });
      var r = n(15566),
        i = n(75233);
      async function a(
        e,
        {
          address: t,
          message: n,
          factory: a,
          factoryData: o,
          signature: s,
          ...u
        }
      ) {
        let c = (0, r.r)(n);
        return (0, i.Z)(e, {
          address: t,
          factory: a,
          factoryData: o,
          hash: c,
          signature: s,
          ...u,
        });
      }
    },
    33438: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return l;
        },
      });
      var r = n(30056),
        i = n(89256),
        a = n(59455),
        o = n(88748),
        s = n(15209);
      function u({ data: e, primaryType: t, types: n }) {
        let i = (function e({ data: t, primaryType: n, types: i }) {
          let s = [{ type: "bytes32" }],
            u = [
              (function ({ primaryType: e, types: t }) {
                let n = (0, a.NC)(
                  (function ({ primaryType: e, types: t }) {
                    let n = "",
                      r = (function e(
                        { primaryType: t, types: n },
                        r = new Set()
                      ) {
                        let i = t.match(/^\w*/u),
                          a = i?.[0];
                        if (r.has(a) || void 0 === n[a]) return r;
                        for (let t of (r.add(a), n[a]))
                          e({ primaryType: t.type, types: n }, r);
                        return r;
                      })({ primaryType: e, types: t });
                    for (let i of (r.delete(e), [e, ...Array.from(r).sort()]))
                      n += `${i}(${t[i]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: e, types: t })
                );
                return (0, o.w)(n);
              })({ primaryType: n, types: i }),
            ];
          for (let c of i[n]) {
            let [n, l] = (function t({ types: n, name: i, type: s, value: u }) {
              if (void 0 !== n[s])
                return [
                  { type: "bytes32" },
                  (0, o.w)(e({ data: u, primaryType: s, types: n })),
                ];
              if ("bytes" === s) {
                let e = u.length % 2 ? "0" : "";
                return (
                  (u = `0x${e + u.slice(2)}`),
                  [{ type: "bytes32" }, (0, o.w)(u)]
                );
              }
              if ("string" === s)
                return [{ type: "bytes32" }, (0, o.w)((0, a.NC)(u))];
              if (s.lastIndexOf("]") === s.length - 1) {
                let e = s.slice(0, s.lastIndexOf("[")),
                  a = u.map((r) => t({ name: i, type: e, types: n, value: r }));
                return [
                  { type: "bytes32" },
                  (0, o.w)(
                    (0, r.E)(
                      a.map(([e]) => e),
                      a.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: s }, u];
            })({ types: i, name: c.name, type: c.type, value: t[c.name] });
            s.push(n), u.push(l);
          }
          return (0, r.E)(s, u);
        })({ data: e, primaryType: t, types: n });
        return (0, o.w)(i);
      }
      var c = n(75233);
      async function l(e, t) {
        let {
            address: n,
            factory: r,
            factoryData: a,
            signature: l,
            message: d,
            primaryType: f,
            types: y,
            domain: h,
            ...p
          } = t,
          v = (function (e) {
            let { domain: t = {}, message: n, primaryType: r } = e,
              a = { EIP712Domain: (0, s.cj)({ domain: t }), ...e.types };
            (0, s.iC)({ domain: t, message: n, primaryType: r, types: a });
            let c = ["0x1901"];
            return (
              t &&
                c.push(
                  (function ({ domain: e, types: t }) {
                    return u({
                      data: e,
                      primaryType: "EIP712Domain",
                      types: t,
                    });
                  })({ domain: t, types: a })
                ),
              "EIP712Domain" !== r &&
                c.push(u({ data: n, primaryType: r, types: a })),
              (0, o.w)((0, i.zo)(c))
            );
          })({ message: d, primaryType: f, types: y, domain: h });
        return (0, c.Z)(e, {
          address: n,
          factory: r,
          factoryData: a,
          hash: v,
          signature: l,
          ...p,
        });
      }
    },
    45789: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return c;
        },
      });
      var r = n(59069),
        i = n(82645),
        a = n(36478),
        o = n(41495),
        s = n(31853),
        u = n(74587);
      function c(
        e,
        {
          blockTag: t = "latest",
          emitMissed: n = !1,
          emitOnBegin: c = !1,
          onBlock: l,
          onError: d,
          includeTransactions: f,
          poll: y,
          pollingInterval: h = e.pollingInterval,
        }
      ) {
        let p, v, m, g;
        let b =
            void 0 !== y
              ? y
              : "webSocket" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  "webSocket" !== e.transport.transports[0].config.type),
          w = f ?? !1;
        return b
          ? (() => {
              let r = (0, s.P)(["watchBlocks", e.uid, t, n, c, w, h]);
              return (0, a.N7)(r, { onBlock: l, onError: d }, (r) =>
                (0, o.$)(
                  async () => {
                    try {
                      let a = await (0, i.s)(
                        e,
                        u.Q,
                        "getBlock"
                      )({ blockTag: t, includeTransactions: w });
                      if (a.number && p?.number) {
                        if (a.number === p.number) return;
                        if (a.number - p.number > 1 && n)
                          for (let t = p?.number + 1n; t < a.number; t++) {
                            let n = await (0, i.s)(
                              e,
                              u.Q,
                              "getBlock"
                            )({ blockNumber: t, includeTransactions: w });
                            r.onBlock(n, p), (p = n);
                          }
                      }
                      (!p?.number ||
                        ("pending" === t && !a?.number) ||
                        (a.number && a.number > p.number)) &&
                        (r.onBlock(a, p), (p = a));
                    } catch (e) {
                      r.onError?.(e);
                    }
                  },
                  { emitOnBegin: c, interval: h }
                )
              );
            })()
          : ((v = !0),
            (m = !0),
            (g = () => (v = !1)),
            (async () => {
              try {
                c &&
                  (0, i.s)(
                    e,
                    u.Q,
                    "getBlock"
                  )({ blockTag: t, includeTransactions: w }).then((e) => {
                    v && m && (l(e, void 0), (m = !1));
                  });
                let n = (() => {
                    if ("fallback" === e.transport.type) {
                      let t = e.transport.transports.find(
                        (e) => "webSocket" === e.config.type
                      );
                      return t ? t.value : e.transport;
                    }
                    return e.transport;
                  })(),
                  { unsubscribe: a } = await n.subscribe({
                    params: ["newHeads"],
                    onData(t) {
                      if (!v) return;
                      let n = (e.chain?.formatters?.block?.format || r.Z)(
                        t.result
                      );
                      l(n, p), (m = !1), (p = n);
                    },
                    onError(e) {
                      d?.(e);
                    },
                  });
                (g = a), v || g();
              } catch (e) {
                d?.(e);
              }
            })(),
            () => g());
      }
    },
    91583: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return m;
        },
      });
      var r = n(65531),
        i = n(77014),
        a = n(27964),
        o = n(25727),
        s = n(55668),
        u = n(82645),
        c = n(36478),
        l = n(41495),
        d = n(31853),
        f = n(31111),
        y = n(13708),
        h = n(99474),
        p = n(18789),
        v = n(97638);
      function m(e, t) {
        let {
          abi: n,
          address: m,
          args: g,
          batch: b = !0,
          eventName: w,
          fromBlock: C,
          onError: I,
          onLogs: x,
          poll: q,
          pollingInterval: E = e.pollingInterval,
          strict: P,
        } = t;
        return (
          void 0 !== q
            ? q
            : "bigint" == typeof C ||
              ("webSocket" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  "webSocket" !== e.transport.transports[0].config.type))
        )
          ? (() => {
              let t = P ?? !1,
                r = (0, d.P)([
                  "watchContractEvent",
                  m,
                  g,
                  b,
                  e.uid,
                  w,
                  E,
                  t,
                  C,
                ]);
              return (0, c.N7)(r, { onLogs: x, onError: I }, (r) => {
                let a, o;
                void 0 !== C && (a = C - 1n);
                let s = !1,
                  c = (0, l.$)(
                    async () => {
                      if (!s) {
                        try {
                          o = await (0, u.s)(
                            e,
                            f.A,
                            "createContractEventFilter"
                          )({
                            abi: n,
                            address: m,
                            args: g,
                            eventName: w,
                            strict: t,
                            fromBlock: C,
                          });
                        } catch {}
                        s = !0;
                        return;
                      }
                      try {
                        let i;
                        if (o)
                          i = await (0, u.s)(
                            e,
                            p.K,
                            "getFilterChanges"
                          )({ filter: o });
                        else {
                          let r = await (0, u.s)(e, y.z, "getBlockNumber")({});
                          (i =
                            a && a < r
                              ? await (0, u.s)(
                                  e,
                                  h.m,
                                  "getContractEvents"
                                )({
                                  abi: n,
                                  address: m,
                                  args: g,
                                  eventName: w,
                                  fromBlock: a + 1n,
                                  toBlock: r,
                                  strict: t,
                                })
                              : []),
                            (a = r);
                        }
                        if (0 === i.length) return;
                        if (b) r.onLogs(i);
                        else for (let e of i) r.onLogs([e]);
                      } catch (e) {
                        o && e instanceof i.yR && (s = !1), r.onError?.(e);
                      }
                    },
                    { emitOnBegin: !0, interval: E }
                  );
                return async () => {
                  o &&
                    (await (0, u.s)(e, v.W, "uninstallFilter")({ filter: o })),
                    c();
                };
              });
            })()
          : (() => {
              let t = (0, d.P)([
                  "watchContractEvent",
                  m,
                  g,
                  b,
                  e.uid,
                  w,
                  E,
                  P ?? !1,
                ]),
                i = !0,
                u = () => (i = !1);
              return (0, c.N7)(
                t,
                { onLogs: x, onError: I },
                (t) => (
                  (async () => {
                    try {
                      let c = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        l = w
                          ? (0, o.O)({ abi: n, eventName: w, args: g })
                          : [],
                        { unsubscribe: d } = await c.subscribe({
                          params: ["logs", { address: m, topics: l }],
                          onData(e) {
                            if (!i) return;
                            let o = e.result;
                            try {
                              let { eventName: e, args: r } = (0, a.F)({
                                  abi: n,
                                  data: o.data,
                                  topics: o.topics,
                                  strict: P,
                                }),
                                i = (0, s.U)(o, { args: r, eventName: e });
                              t.onLogs([i]);
                            } catch (a) {
                              let e, n;
                              if (a instanceof r.SM || a instanceof r.Gy) {
                                if (P) return;
                                (e = a.abiItem.name),
                                  (n = a.abiItem.inputs?.some(
                                    (e) => !("name" in e && e.name)
                                  ));
                              }
                              let i = (0, s.U)(o, {
                                args: n ? [] : {},
                                eventName: e,
                              });
                              t.onLogs([i]);
                            }
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (u = d), i || u();
                    } catch (e) {
                      I?.(e);
                    }
                  })(),
                  () => u()
                )
              );
            })();
      }
    },
    1337: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return l;
        },
      });
      var r = n(82645),
        i = n(36478),
        a = n(41495),
        o = n(31853),
        s = n(13716),
        u = n(18789),
        c = n(97638);
      function l(
        e,
        {
          batch: t = !0,
          onError: n,
          onTransactions: l,
          poll: d,
          pollingInterval: f = e.pollingInterval,
        }
      ) {
        let y, h;
        return (void 0 !== d ? d : "webSocket" !== e.transport.type)
          ? (() => {
              let d = (0, o.P)(["watchPendingTransactions", e.uid, t, f]);
              return (0, i.N7)(d, { onTransactions: l, onError: n }, (n) => {
                let i;
                let o = (0, a.$)(
                  async () => {
                    try {
                      if (!i)
                        try {
                          i = await (0, r.s)(
                            e,
                            s.W,
                            "createPendingTransactionFilter"
                          )({});
                          return;
                        } catch (e) {
                          throw (o(), e);
                        }
                      let a = await (0, r.s)(
                        e,
                        u.K,
                        "getFilterChanges"
                      )({ filter: i });
                      if (0 === a.length) return;
                      if (t) n.onTransactions(a);
                      else for (let e of a) n.onTransactions([e]);
                    } catch (e) {
                      n.onError?.(e);
                    }
                  },
                  { emitOnBegin: !0, interval: f }
                );
                return async () => {
                  i &&
                    (await (0, r.s)(e, c.W, "uninstallFilter")({ filter: i })),
                    o();
                };
              });
            })()
          : ((y = !0),
            (h = () => (y = !1)),
            (async () => {
              try {
                let { unsubscribe: t } = await e.transport.subscribe({
                  params: ["newPendingTransactions"],
                  onData(e) {
                    if (!y) return;
                    let t = e.result;
                    l([t]);
                  },
                  onError(e) {
                    n?.(e);
                  },
                });
                (h = t), y || h();
              } catch (e) {
                n?.(e);
              }
            })(),
            () => h());
      }
    },
    79078: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return a;
        },
      });
      var r = n(23010),
        i = n(19443);
      function a(e, t) {
        let { abi: n, args: a, bytecode: o, ...s } = t,
          u = (0, r.w)({ abi: n, args: a, bytecode: o });
        return (0, i.T)(e, { ...s, data: u });
      }
    },
    69133: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return o;
        },
      });
      var r = n(19775),
        i = n(65704),
        a = n(15209);
      async function o(e, t) {
        let {
          account: n = e.account,
          domain: o,
          message: s,
          primaryType: u,
        } = t;
        if (!n)
          throw new i.o({ docsPath: "/docs/actions/wallet/signTypedData" });
        let c = (0, r.T)(n),
          l = { EIP712Domain: (0, a.cj)({ domain: o }), ...t.types };
        if (
          ((0, a.iC)({ domain: o, message: s, primaryType: u, types: l }),
          c.signTypedData)
        )
          return c.signTypedData({
            domain: o,
            message: s,
            primaryType: u,
            types: l,
          });
        let d = (0, a.H6)({ domain: o, message: s, primaryType: u, types: l });
        return e.request(
          { method: "eth_signTypedData_v4", params: [c.address, d] },
          { retryCount: 0 }
        );
      }
    },
    81821: function (e, t, n) {
      "use strict";
      async function r(e, t) {
        return await e.request(
          { method: "wallet_watchAsset", params: t },
          { retryCount: 0 }
        );
      }
      n.d(t, {
        d: function () {
          return r;
        },
      });
    },
    54518: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return r;
        },
      });
      let r = (0, n(90328).a)({
        id: 42161,
        name: "Arbitrum One",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
        blockExplorers: {
          default: {
            name: "Arbiscan",
            url: "https://arbiscan.io",
            apiUrl: "https://api.arbiscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 7654707,
          },
        },
      });
    },
    52054: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return K;
        },
      });
      var r = n(72932),
        i = n(59069),
        a = n(27481),
        o = n(13550);
      let s = {
        block: (0, i.G)({
          format: (e) => ({
            transactions: e.transactions?.map((e) => {
              if ("string" == typeof e) return e;
              let t = a.Tr(e);
              return (
                "0x7e" === t.typeHex &&
                  ((t.isSystemTx = e.isSystemTx),
                  (t.mint = e.mint ? r.y_(e.mint) : void 0),
                  (t.sourceHash = e.sourceHash),
                  (t.type = "deposit")),
                t
              );
            }),
            stateRoot: e.stateRoot,
          }),
        }),
        transaction: (0, a.y_)({
          format(e) {
            let t = {};
            return (
              "0x7e" === e.type &&
                ((t.isSystemTx = e.isSystemTx),
                (t.mint = e.mint ? (0, r.y_)(e.mint) : void 0),
                (t.sourceHash = e.sourceHash),
                (t.type = "deposit")),
              t
            );
          },
        }),
        transactionReceipt: (0, o.dI)({
          format: (e) => ({
            l1GasPrice: e.l1GasPrice ? (0, r.y_)(e.l1GasPrice) : null,
            l1GasUsed: e.l1GasUsed ? (0, r.y_)(e.l1GasUsed) : null,
            l1Fee: e.l1Fee ? (0, r.y_)(e.l1Fee) : null,
            l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
          }),
        }),
      };
      var u = n(10052),
        c = n(4012),
        l = n(89256),
        d = n(59455),
        f = n(70044),
        y = n(63228),
        h = n(63563),
        p = n(67496),
        v = n(98328),
        m = n(10932),
        g = n(36826),
        b = n(43188),
        w = n(75018),
        C = n(81544),
        I = n(48073),
        x = n(35586),
        q = n(78125),
        E = n(20556),
        P = n(69921);
      function k(e) {
        let { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: r, to: i } = e;
        if (t <= 0) throw new x.hJ({ chainId: t });
        if (i && !(0, c.U)(i)) throw new u.b({ address: i });
        if (r && r > w.zL) throw new q.Hh({ maxFeePerGas: r });
        if (n && r && n > r)
          throw new q.cs({ maxFeePerGas: r, maxPriorityFeePerGas: n });
      }
      var T = n(90683);
      function N(e) {
        if (!e || 0 === e.length) return [];
        let t = [];
        for (let n = 0; n < e.length; n++) {
          let { address: r, storageKeys: i } = e[n];
          for (let e = 0; e < i.length; e++)
            if (i[e].length - 2 != 64) throw new y.JC({ storageKey: i[e] });
          if (!(0, c.U)(r, { strict: !1 })) throw new u.b({ address: r });
          t.push([r, i]);
        }
        return t;
      }
      function F(e, t) {
        let n = t ?? e,
          { v: r, yParity: i } = n;
        if (void 0 === n.r || void 0 === n.s || (void 0 === r && void 0 === i))
          return [];
        let a = (0, g.f)(n.r),
          o = (0, g.f)(n.s);
        return [
          "number" == typeof i
            ? i
              ? (0, d.NC)(1)
              : "0x"
            : 0n === r
            ? "0x"
            : 1n === r
            ? (0, d.NC)(1)
            : 27n === r
            ? "0x"
            : (0, d.NC)(1),
          "0x00" === a ? "0x" : a,
          "0x00" === o ? "0x" : o,
        ];
      }
      let S = {
          contracts: {
            gasPriceOracle: {
              address: "0x420000000000000000000000000000000000000F",
            },
            l1Block: { address: "0x4200000000000000000000000000000000000015" },
            l2CrossDomainMessenger: {
              address: "0x4200000000000000000000000000000000000007",
            },
            l2Erc721Bridge: {
              address: "0x4200000000000000000000000000000000000014",
            },
            l2StandardBridge: {
              address: "0x4200000000000000000000000000000000000010",
            },
            l2ToL1MessagePasser: {
              address: "0x4200000000000000000000000000000000000016",
            },
          },
          formatters: s,
          serializers: {
            transaction: function (e, t) {
              return "deposit" === e.type || void 0 !== e.sourceHash
                ? (function (e) {
                    !(function (e) {
                      let { from: t, to: n } = e;
                      if (t && !(0, c.U)(t)) throw new u.b({ address: t });
                      if (n && !(0, c.U)(n)) throw new u.b({ address: n });
                    })(e);
                    let {
                        sourceHash: t,
                        data: n,
                        from: r,
                        gas: i,
                        isSystemTx: a,
                        mint: o,
                        to: s,
                        value: y,
                      } = e,
                      h = [
                        t,
                        r,
                        s ?? "0x",
                        o ? (0, d.NC)(o) : "0x",
                        y ? (0, d.NC)(y) : "0x",
                        i ? (0, d.NC)(i) : "0x",
                        a ? "0x1" : "0x",
                        n ?? "0x",
                      ];
                    return (0, l.SM)(["0x7e", (0, f.LV)(h)]);
                  })(e)
                : (function (e, t) {
                    let n = (0, T.l)(e);
                    return "eip1559" === n
                      ? (function (e, t) {
                          let {
                            chainId: n,
                            gas: r,
                            nonce: i,
                            to: a,
                            value: o,
                            maxFeePerGas: s,
                            maxPriorityFeePerGas: u,
                            accessList: c,
                            data: y,
                          } = e;
                          k(e);
                          let h = N(c),
                            p = [
                              (0, d.NC)(n),
                              i ? (0, d.NC)(i) : "0x",
                              u ? (0, d.NC)(u) : "0x",
                              s ? (0, d.NC)(s) : "0x",
                              r ? (0, d.NC)(r) : "0x",
                              a ?? "0x",
                              o ? (0, d.NC)(o) : "0x",
                              y ?? "0x",
                              h,
                              ...F(e, t),
                            ];
                          return (0, l.SM)(["0x02", (0, f.LV)(p)]);
                        })(e, t)
                      : "eip2930" === n
                      ? (function (e, t) {
                          let {
                            chainId: n,
                            gas: r,
                            data: i,
                            nonce: a,
                            to: o,
                            value: s,
                            accessList: y,
                            gasPrice: h,
                          } = e;
                          !(function (e) {
                            let {
                              chainId: t,
                              maxPriorityFeePerGas: n,
                              gasPrice: r,
                              maxFeePerGas: i,
                              to: a,
                            } = e;
                            if (t <= 0) throw new x.hJ({ chainId: t });
                            if (a && !(0, c.U)(a))
                              throw new u.b({ address: a });
                            if (n || i)
                              throw new C.G(
                                "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
                              );
                            if (r && r > w.zL)
                              throw new q.Hh({ maxFeePerGas: r });
                          })(e);
                          let p = N(y),
                            v = [
                              (0, d.NC)(n),
                              a ? (0, d.NC)(a) : "0x",
                              h ? (0, d.NC)(h) : "0x",
                              r ? (0, d.NC)(r) : "0x",
                              o ?? "0x",
                              s ? (0, d.NC)(s) : "0x",
                              i ?? "0x",
                              p,
                              ...F(e, t),
                            ];
                          return (0, l.SM)(["0x01", (0, f.LV)(v)]);
                        })(e, t)
                      : "eip4844" === n
                      ? (function (e, t) {
                          let {
                            chainId: n,
                            gas: i,
                            nonce: a,
                            to: o,
                            value: s,
                            maxFeePerBlobGas: u,
                            maxFeePerGas: c,
                            maxPriorityFeePerGas: y,
                            accessList: g,
                            data: w,
                          } = e;
                          !(function (e) {
                            let { blobVersionedHashes: t } = e;
                            if (t) {
                              if (0 === t.length) throw new I.RX();
                              for (let e of t) {
                                let t = (0, E.d)(e),
                                  n = (0, r.ly)((0, P.tP)(e, 0, 1));
                                if (32 !== t)
                                  throw new I.xd({ hash: e, size: t });
                                if (n !== b.l)
                                  throw new I.cJ({ hash: e, version: n });
                              }
                            }
                            k(e);
                          })(e);
                          let C = e.blobVersionedHashes,
                            x = e.sidecars;
                          if (e.blobs && (void 0 === C || void 0 === x)) {
                            let t =
                                "string" == typeof e.blobs[0]
                                  ? e.blobs
                                  : e.blobs.map((e) => (0, d.ci)(e)),
                              n = e.kzg,
                              r = (0, h.P)({ blobs: t, kzg: n });
                            if (
                              (void 0 === C &&
                                (C = (0, v.C)({ commitments: r })),
                              void 0 === x)
                            ) {
                              let e = (0, p.y)({
                                blobs: t,
                                commitments: r,
                                kzg: n,
                              });
                              x = (0, m.j)({
                                blobs: t,
                                commitments: r,
                                proofs: e,
                              });
                            }
                          }
                          let q = N(g),
                            T = [
                              (0, d.NC)(n),
                              a ? (0, d.NC)(a) : "0x",
                              y ? (0, d.NC)(y) : "0x",
                              c ? (0, d.NC)(c) : "0x",
                              i ? (0, d.NC)(i) : "0x",
                              o ?? "0x",
                              s ? (0, d.NC)(s) : "0x",
                              w ?? "0x",
                              q,
                              u ? (0, d.NC)(u) : "0x",
                              C ?? [],
                              ...F(e, t),
                            ],
                            S = [],
                            K = [],
                            O = [];
                          if (x)
                            for (let e = 0; e < x.length; e++) {
                              let { blob: t, commitment: n, proof: r } = x[e];
                              S.push(t), K.push(n), O.push(r);
                            }
                          return (0, l.SM)([
                            "0x03",
                            x ? (0, f.LV)([T, S, K, O]) : (0, f.LV)(T),
                          ]);
                        })(e, t)
                      : "eip7702" === n
                      ? (function (e, t) {
                          let {
                            authorizationList: n,
                            chainId: r,
                            gas: i,
                            nonce: a,
                            to: o,
                            value: s,
                            maxFeePerGas: y,
                            maxPriorityFeePerGas: h,
                            accessList: p,
                            data: v,
                          } = e;
                          !(function (e) {
                            let { authorizationList: t } = e;
                            if (t)
                              for (let e of t) {
                                let { contractAddress: t, chainId: n } = e;
                                if (!(0, c.U)(t)) throw new u.b({ address: t });
                                if (n <= 0) throw new x.hJ({ chainId: n });
                              }
                            k(e);
                          })(e);
                          let m = N(p),
                            g = (function (e) {
                              if (!e || 0 === e.length) return [];
                              let t = [];
                              for (let n of e) {
                                let {
                                  contractAddress: e,
                                  chainId: r,
                                  nonce: i,
                                  ...a
                                } = n;
                                t.push([
                                  (0, d.NC)(r),
                                  e,
                                  i ? (0, d.NC)(i) : "0x",
                                  ...F({}, a),
                                ]);
                              }
                              return t;
                            })(n);
                          return (0, l.SM)([
                            "0x04",
                            (0, f.LV)([
                              (0, d.NC)(r),
                              a ? (0, d.NC)(a) : "0x",
                              h ? (0, d.NC)(h) : "0x",
                              y ? (0, d.NC)(y) : "0x",
                              i ? (0, d.NC)(i) : "0x",
                              o ?? "0x",
                              s ? (0, d.NC)(s) : "0x",
                              v ?? "0x",
                              m,
                              g,
                              ...F(e, t),
                            ]),
                          ]);
                        })(e, t)
                      : (function (e, t) {
                          let {
                            chainId: n = 0,
                            gas: r,
                            data: i,
                            nonce: a,
                            to: o,
                            value: s,
                            gasPrice: l,
                          } = e;
                          !(function (e) {
                            let {
                              chainId: t,
                              maxPriorityFeePerGas: n,
                              gasPrice: r,
                              maxFeePerGas: i,
                              to: a,
                            } = e;
                            if (a && !(0, c.U)(a))
                              throw new u.b({ address: a });
                            if (void 0 !== t && t <= 0)
                              throw new x.hJ({ chainId: t });
                            if (n || i)
                              throw new C.G(
                                "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
                              );
                            if (r && r > w.zL)
                              throw new q.Hh({ maxFeePerGas: r });
                          })(e);
                          let h = [
                            a ? (0, d.NC)(a) : "0x",
                            l ? (0, d.NC)(l) : "0x",
                            r ? (0, d.NC)(r) : "0x",
                            o ?? "0x",
                            s ? (0, d.NC)(s) : "0x",
                            i ?? "0x",
                          ];
                          if (t) {
                            let e = (() => {
                                if (t.v >= 35n)
                                  return (t.v - 35n) / 2n > 0
                                    ? t.v
                                    : 27n + (35n === t.v ? 0n : 1n);
                                if (n > 0)
                                  return (
                                    BigInt(2 * n) + BigInt(35n + t.v - 27n)
                                  );
                                let e = 27n + (27n === t.v ? 0n : 1n);
                                if (t.v !== e) throw new y.vl({ v: t.v });
                                return e;
                              })(),
                              r = (0, g.f)(t.r),
                              i = (0, g.f)(t.s);
                            h = [
                              ...h,
                              (0, d.NC)(e),
                              "0x00" === r ? "0x" : r,
                              "0x00" === i ? "0x" : i,
                            ];
                          } else
                            n > 0 && (h = [...h, (0, d.NC)(n), "0x", "0x"]);
                          return (0, f.LV)(h);
                        })(e, t);
                  })(e, t);
            },
          },
        },
        K = (0, n(90328).a)({
          ...S,
          id: 8453,
          name: "Base",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
          blockExplorers: {
            default: {
              name: "Basescan",
              url: "https://basescan.org",
              apiUrl: "https://api.basescan.org/api",
            },
          },
          contracts: {
            ...S.contracts,
            l2OutputOracle: {
              1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 5022,
            },
            portal: {
              1: {
                address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                blockCreated: 17482143,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                blockCreated: 17482143,
              },
            },
          },
          sourceId: 1,
        });
    },
    55625: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return r;
        },
      });
      let r = (0, n(90328).a)({
        id: 11155111,
        name: "Sepolia",
        nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://rpc2.sepolia.org"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io",
            apiUrl: "https://api-sepolia.etherscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 751532,
          },
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
            blockCreated: 5317080,
          },
        },
        testnet: !0,
      });
    },
    27964: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return l;
        },
      });
      var r = n(65531),
        i = n(20556),
        a = n(45392),
        o = n(33630),
        s = n(2742),
        u = n(7275);
      let c = "/docs/contract/decodeEventLog";
      function l(e) {
        let { abi: t, data: n, strict: l, topics: d } = e,
          f = l ?? !0,
          [y, ...h] = d;
        if (!y) throw new r.FM({ docsPath: c });
        let p =
          1 === t.length
            ? t[0]
            : t.find((e) => "event" === e.type && y === (0, a.n)((0, u.t)(e)));
        if (!(p && "name" in p) || "event" !== p.type)
          throw new r.lC(y, { docsPath: c });
        let { name: v, inputs: m } = p,
          g = m?.some((e) => !("name" in e && e.name)),
          b = g ? [] : {},
          w = m.filter((e) => "indexed" in e && e.indexed);
        for (let e = 0; e < w.length; e++) {
          let t = w[e],
            n = h[e];
          if (!n) throw new r.Gy({ abiItem: p, param: t });
          b[g ? e : t.name || e] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, s.r)([e], t) || [])[0];
          })({ param: t, value: n });
        }
        let C = m.filter((e) => !("indexed" in e && e.indexed));
        if (C.length > 0) {
          if (n && "0x" !== n)
            try {
              let e = (0, s.r)(C, n);
              if (e) {
                if (g) b = [...b, ...e];
                else for (let t = 0; t < C.length; t++) b[C[t].name] = e[t];
              }
            } catch (e) {
              if (f) {
                if (e instanceof r.xB || e instanceof o.lQ)
                  throw new r.SM({
                    abiItem: p,
                    data: n,
                    params: C,
                    size: (0, i.d)(n),
                  });
                throw e;
              }
            }
          else if (f)
            throw new r.SM({ abiItem: p, data: "0x", params: C, size: 0 });
        }
        return { eventName: v, args: Object.values(b).length > 0 ? b : void 0 };
      }
    },
    25727: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return y;
        },
      });
      var r = n(65531),
        i = n(81544);
      class a extends i.G {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var o = n(44659),
        s = n(88748),
        u = n(45392),
        c = n(30056),
        l = n(7275),
        d = n(64043);
      let f = "/docs/contract/encodeEventTopics";
      function y(e) {
        let { abi: t, eventName: n, args: i } = e,
          a = t[0];
        if (n) {
          let e = (0, d.mE)({ abi: t, name: n });
          if (!e) throw new r.mv(n, { docsPath: f });
          a = e;
        }
        if ("event" !== a.type) throw new r.mv(void 0, { docsPath: f });
        let o = (0, l.t)(a),
          s = (0, u.n)(o),
          c = [];
        if (i && "inputs" in a) {
          let e = a.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(i)
              ? i
              : Object.values(i).length > 0
              ? e?.map((e) => i[e.name]) ?? []
              : [];
          t.length > 0 &&
            (c =
              e?.map((e, n) =>
                Array.isArray(t[n])
                  ? t[n].map((r, i) => h({ param: e, value: t[n][i] }))
                  : t[n]
                  ? h({ param: e, value: t[n] })
                  : null
              ) ?? []);
        }
        return [s, ...c];
      }
      function h({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, s.w)((0, o.O0)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new a(e.type);
        return (0, c.E)([e], [t]);
      }
    },
    42133: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return c;
        },
      });
      var r = n(65531),
        i = n(93637),
        a = n(44659),
        o = n(88748),
        s = n(45392),
        u = n(27964);
      function c(e) {
        let { abi: t, args: n, logs: c, strict: l = !0 } = e,
          d = (() => {
            if (e.eventName)
              return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })();
        return c
          .map((e) => {
            try {
              let r = t.find(
                (t) => "event" === t.type && e.topics[0] === (0, s.n)(t)
              );
              if (!r) return null;
              let c = (0, u.F)({ ...e, abi: [r], strict: l });
              if (
                (d && !d.includes(c.eventName)) ||
                !(function (e) {
                  let { args: t, inputs: n, matchArgs: r } = e;
                  if (!r) return !0;
                  if (!t) return !1;
                  function s(e, t, n) {
                    try {
                      if ("address" === e.type) return (0, i.E)(t, n);
                      if ("string" === e.type || "bytes" === e.type)
                        return (0, o.w)((0, a.O0)(t)) === n;
                      return t === n;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(t) && Array.isArray(r)
                    ? r.every((e, r) => {
                        if (null === e) return !0;
                        let i = n[r];
                        return (
                          !!i &&
                          (Array.isArray(e) ? e : [e]).some((e) =>
                            s(i, e, t[r])
                          )
                        );
                      })
                    : !(
                        "object" != typeof t ||
                        Array.isArray(t) ||
                        "object" != typeof r ||
                        Array.isArray(r)
                      ) &&
                        Object.entries(r).every(([e, r]) => {
                          if (null === r) return !0;
                          let i = n.find((t) => t.name === e);
                          return (
                            !!i &&
                            (Array.isArray(r) ? r : [r]).some((n) =>
                              s(i, n, t[e])
                            )
                          );
                        });
                })({ args: c.args, inputs: r.inputs, matchArgs: n })
              )
                return null;
              return { ...c, ...e };
            } catch (i) {
              let t, n;
              if (i instanceof r.lC) return null;
              if (i instanceof r.SM || i instanceof r.Gy) {
                if (l) return null;
                (t = i.abiItem.name),
                  (n = i.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: n ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
    },
    93637: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return a;
        },
      });
      var r = n(10052),
        i = n(4012);
      function a(e, t) {
        if (!(0, i.U)(e, { strict: !1 })) throw new r.b({ address: e });
        if (!(0, i.U)(t, { strict: !1 })) throw new r.b({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    46908: function (e, t, n) {
      "use strict";
      function r(e, { method: t }) {
        let n = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: r, status: i, transport: a }) => {
                "success" === i && t === e && (n[r] = a.request);
              }
            ),
          (t) => n[t] || e.request
        );
      }
      n.d(t, {
        g: function () {
          return r;
        },
      });
    },
    15566: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return s;
        },
      });
      var r = n(88748),
        i = n(89256),
        a = n(20556),
        o = n(59455);
      function s(e, t) {
        return (0, r.w)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, o.$G)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, o.ci)(e.raw),
              n = (0, o.$G)(`\x19Ethereum Signed Message:
${(0, a.d)(t)}`);
            return (0, i.zo)([n, t]);
          })(e),
          t
        );
      }
    },
    15209: function (e, t, n) {
      "use strict";
      n.d(t, {
        cj: function () {
          return y;
        },
        H6: function () {
          return d;
        },
        iC: function () {
          return f;
        },
      });
      var r = n(65531),
        i = n(10052),
        a = n(4012),
        o = n(20556),
        s = n(59455);
      let u = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        c =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      var l = n(31853);
      function d(e) {
        let { domain: t, message: n, primaryType: r, types: i } = e,
          a = (e, t) => {
            let n = { ...t };
            for (let t of e) {
              let { name: e, type: r } = t;
              "address" === r && (n[e] = n[e].toLowerCase());
            }
            return n;
          },
          o = i.EIP712Domain && t ? a(i.EIP712Domain, t) : {},
          s = (() => {
            if ("EIP712Domain" !== r) return a(i[r], n);
          })();
        return (0, l.P)({ domain: o, message: s, primaryType: r, types: i });
      }
      function f(e) {
        let { domain: t, message: n, primaryType: l, types: d } = e,
          f = (e, t) => {
            for (let n of e) {
              let { name: e, type: l } = n,
                y = t[e],
                h = l.match(c);
              if (h && ("number" == typeof y || "bigint" == typeof y)) {
                let [e, t, n] = h;
                (0, s.eC)(y, {
                  signed: "int" === t,
                  size: Number.parseInt(n) / 8,
                });
              }
              if ("address" === l && "string" == typeof y && !(0, a.U)(y))
                throw new i.b({ address: y });
              let p = l.match(u);
              if (p) {
                let [e, t] = p;
                if (t && (0, o.d)(y) !== Number.parseInt(t))
                  throw new r.KY({
                    expectedSize: Number.parseInt(t),
                    givenSize: (0, o.d)(y),
                  });
              }
              let v = d[l];
              v && f(v, y);
            }
          };
        d.EIP712Domain && t && f(d.EIP712Domain, t),
          "EIP712Domain" !== l && f(d[l], n);
      }
      function y({ domain: e }) {
        return [
          "string" == typeof e?.name && { name: "name", type: "string" },
          e?.version && { name: "version", type: "string" },
          "number" == typeof e?.chainId && { name: "chainId", type: "uint256" },
          e?.verifyingContract && {
            name: "verifyingContract",
            type: "address",
          },
          e?.salt && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
    },
    89472: function (e, t, n) {
      "use strict";
      n.d(t, {
        useAccountEffect: function () {
          return o;
        },
      });
      var r = n(55911),
        i = n(2265),
        a = n(12364);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onConnect: t, onDisconnect: n } = e,
          o = (0, a.useConfig)(e);
        (0, i.useEffect)(
          () =>
            (0, r.u)(o, {
              onChange(e, r) {
                if (
                  ("reconnecting" === r.status ||
                    ("connecting" === r.status && void 0 === r.address)) &&
                  "connected" === e.status
                ) {
                  let {
                      address: n,
                      addresses: i,
                      chain: a,
                      chainId: o,
                      connector: s,
                    } = e,
                    u = "reconnecting" === r.status || void 0 === r.status;
                  null == t ||
                    t({
                      address: n,
                      addresses: i,
                      chain: a,
                      chainId: o,
                      connector: s,
                      isReconnected: u,
                    });
                } else
                  "connected" === r.status &&
                    "disconnected" === e.status &&
                    (null == n || n());
              },
            }),
          [o, t, n]
        );
      }
    },
    12620: function (e, t, n) {
      "use strict";
      n.d(t, {
        useBalance: function () {
          return u;
        },
      });
      var r = n(91805),
        i = n(27534),
        a = n(24432),
        o = n(44005),
        s = n(12364);
      function u() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: u, query: c = {} } = n,
          l = (0, s.useConfig)(n),
          d = (0, o.useChainId)({ config: l }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: i, ...a } = t[1];
                if (!n) throw Error("address is required");
                return (await (0, r.s)(e, { ...a, address: n })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["balance", (0, i.OP)(e)];
              })(t),
            };
          })(l, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          y = !!(u && (null === (t = c.enabled) || void 0 === t || t));
        return (0, a.aM)({ ...c, ...f, enabled: y });
      }
    },
    394: function (e, t, n) {
      "use strict";
      n.d(t, {
        useBlock: function () {
          return f;
        },
      });
      var r = n(29827),
        i = n(74587),
        a = n(44199);
      async function o(e, t = {}) {
        let { chainId: n, ...r } = t,
          o = e.getClient({ chainId: n }),
          s = (0, a.s)(o, i.Q, "getBlock");
        return { ...(await s(r)), chainId: o.chain.id };
      }
      var s = n(27534),
        u = n(24432),
        c = n(44005),
        l = n(12364),
        d = n(49487);
      function f() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: i = {}, watch: a } = n,
          f = (0, l.useConfig)(n),
          y = (0, r.NL)(),
          h = (0, c.useChainId)({ config: f }),
          p = null !== (e = n.chainId) && void 0 !== e ? e : h,
          v = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...r } = t[1];
                return (await o(e, r)) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["block", (0, s.OP)(e)];
              })(t),
            };
          })(f, { ...n, chainId: p }),
          m = !!(null === (t = i.enabled) || void 0 === t || t);
        return (
          (0, d.useWatchBlocks)({
            ...{
              config: n.config,
              chainId: n.chainId,
              ...("object" == typeof a ? a : {}),
            },
            enabled: !!(m && ("object" == typeof a ? a.enabled : a)),
            onBlock(e) {
              y.setQueryData(v.queryKey, e);
            },
          }),
          (0, u.aM)({ ...i, ...v, enabled: m })
        );
      }
    },
    23383: function (e, t, n) {
      "use strict";
      n.d(t, {
        useBlockNumber: function () {
          return d;
        },
      });
      var r = n(29827),
        i = n(13708),
        a = n(44199),
        o = n(27534),
        s = n(24432),
        u = n(44005),
        c = n(12364),
        l = n(13359);
      function d() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: d = {}, watch: f } = n,
          y = (0, c.useConfig)(n),
          h = (0, r.NL)(),
          p = (0, u.useChainId)({ config: y }),
          v = null !== (e = n.chainId) && void 0 !== e ? e : p,
          m = (function (e, t = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...r } = t[1];
                return (
                  (await (function (e, t = {}) {
                    let { chainId: n, ...r } = t,
                      o = e.getClient({ chainId: n });
                    return (0, a.s)(o, i.z, "getBlockNumber")(r);
                  })(e, r)) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["blockNumber", (0, o.OP)(e)];
              })(t),
            };
          })(y, { ...n, chainId: v });
        return (
          (0, l.useWatchBlockNumber)({
            ...{
              config: n.config,
              chainId: n.chainId,
              ...("object" == typeof f ? f : {}),
            },
            enabled: !!(
              (null === (t = d.enabled) || void 0 === t || t) &&
              ("object" == typeof f ? f.enabled : f)
            ),
            onBlockNumber(e) {
              h.setQueryData(m.queryKey, e);
            },
          }),
          (0, s.aM)({ ...d, ...m })
        );
      }
    },
    69372: function (e, t, n) {
      "use strict";
      n.d(t, {
        useBlockTransactionCount: function () {
          return c;
        },
      });
      var r = n(85682),
        i = n(44199),
        a = n(27534),
        o = n(24432),
        s = n(44005),
        u = n(12364);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          c = (0, u.useConfig)(t),
          l = (0, s.useChainId)({ config: c }),
          d = null !== (e = t.chainId) && void 0 !== e ? e : l,
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...a } = t[1];
                return (
                  (await (function (e, t = {}) {
                    let { chainId: n, ...a } = t,
                      o = e.getClient({ chainId: n });
                    return (0, i.s)(o, r.c, "getBlockTransactionCount")(a);
                  })(e, a)) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["blockTransactionCount", (0, a.OP)(e)];
              })(t),
            };
          })(c, { ...t, chainId: d });
        return (0, o.aM)({ ...n, ...f });
      }
    },
    18716: function (e, t, n) {
      "use strict";
      n.d(t, {
        useBytecode: function () {
          return l;
        },
      });
      var r = n(56570),
        i = n(44199);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.C, "getBytecode")(a);
      }
      var o = n(27534),
        s = n(24432),
        u = n(44005),
        c = n(12364);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: i = {} } = n,
          l = (0, c.useConfig)(n),
          d = (0, u.useChainId)({ config: l }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...i } = t[1];
                if (!n) throw Error("address is required");
                return (await a(e, { ...i, address: n })) ?? null;
              },
              queryKey: ["getBytecode", (0, o.OP)(t)],
            };
          })(l, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          y = !!(r && (null === (t = i.enabled) || void 0 === t || t));
        return (0, s.aM)({ ...i, ...f, enabled: y });
      }
    },
    45432: function (e, t, n) {
      "use strict";
      n.d(t, {
        useCall: function () {
          return l;
        },
      });
      var r = n(25664),
        i = n(44199);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.R, "call")(a);
      }
      var o = n(27534),
        s = n(24432),
        u = n(44005),
        c = n(12364);
      function l() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          r = (0, c.useConfig)(t),
          i = (0, u.useChainId)({ config: r }),
          l = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...r } = t[1];
                return (await a(e, { ...r })) ?? null;
              },
              queryKey: ["call", (0, o.OP)(t)],
            };
          })(r, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : i,
          });
        return (0, s.aM)({ ...n, ...l });
      }
    },
    44005: function (e, t, n) {
      "use strict";
      function r(e) {
        return e.state.chainId;
      }
      n.d(t, {
        useChainId: function () {
          return o;
        },
      });
      var i = n(2265),
        a = n(12364);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, a.useConfig)(e);
        return (0, i.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe((e) => e.chainId, n);
            })(t, { onChange: e }),
          () => r(t),
          () => r(t)
        );
      }
    },
    54283: function (e, t, n) {
      "use strict";
      n.d(t, {
        useChains: function () {
          return u;
        },
      });
      var r = n(52123);
      let i = [];
      function a(e) {
        let t = e.chains;
        return (0, r.v)(i, t) ? i : ((i = t), t);
      }
      var o = n(2265),
        s = n(12364);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, s.useConfig)(e);
        return (0, o.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e._internal.chains.subscribe((e, t) => {
                n(e, t);
              });
            })(t, { onChange: e }),
          () => a(t),
          () => a(t)
        );
      }
    },
    94825: function (e, t, n) {
      "use strict";
      n.d(t, {
        useClient: function () {
          return o;
        },
      });
      var r = n(94197),
        i = n(35195),
        a = n(12364);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, a.useConfig)(e);
        return (0, i.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => (0, r.s)(e), n, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => (0, r.s)(t, e),
          () => (0, r.s)(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    39629: function (e, t, n) {
      "use strict";
      n.d(t, {
        useConnect: function () {
          return u;
        },
      });
      var r = n(21770),
        i = n(22076),
        a = n(2265),
        o = n(12364),
        s = n(85157);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, o.useConfig)(e),
          {
            mutate: u,
            mutateAsync: c,
            ...l
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => (0, i.$)(n, e),
            mutationKey: ["connect"],
          });
        return (
          (0, a.useEffect)(
            () =>
              n.subscribe(
                (e) => {
                  let { status: t } = e;
                  return t;
                },
                (e, t) => {
                  "connected" === t && "disconnected" === e && l.reset();
                }
              ),
            [n, l.reset]
          ),
          {
            ...l,
            connect: u,
            connectAsync: c,
            connectors: (0, s.useConnectors)({ config: n }),
          }
        );
      }
    },
    21267: function (e, t, n) {
      "use strict";
      n.d(t, {
        useConnectorClient: function () {
          return d;
        },
      });
      var r = n(29827),
        i = n(18849),
        a = n(27534),
        o = n(2265),
        s = n(24432),
        u = n(64707),
        c = n(44005),
        l = n(12364);
      function d() {
        var e, t, n;
        let d =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: f = {}, ...y } = d,
          h = (0, l.useConfig)(y),
          p = (0, r.NL)(),
          {
            address: v,
            connector: m,
            status: g,
          } = (0, u.useAccount)({ config: h }),
          b = (0, c.useChainId)({ config: h }),
          w = null !== (e = d.connector) && void 0 !== e ? e : m,
          { queryKey: C, ...I } = (function (e, t = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: n }) {
                let { connector: r } = t,
                  { connectorUid: a, scopeKey: o, ...s } = n[1];
                return (0, i.e)(e, { ...s, connector: r });
              },
              queryKey: (function (e = {}) {
                let { connector: t, ...n } = e;
                return [
                  "connectorClient",
                  { ...(0, a.OP)(n), connectorUid: t?.uid },
                ];
              })(t),
            };
          })(h, {
            ...d,
            chainId: null !== (t = d.chainId) && void 0 !== t ? t : b,
            connector: w,
          }),
          x = !!(
            ("connected" === g ||
              ("reconnecting" === g && (null == w ? void 0 : w.getProvider))) &&
            (null === (n = f.enabled) || void 0 === n || n)
          ),
          q = (0, o.useRef)(v);
        return (
          (0, o.useEffect)(() => {
            let e = q.current;
            !v && e
              ? (p.removeQueries({ queryKey: C }), (q.current = void 0))
              : v !== e &&
                (p.invalidateQueries({ queryKey: C }), (q.current = v));
          }, [v, p]),
          (0, s.aM)({
            ...f,
            ...I,
            queryKey: C,
            enabled: x,
            staleTime: Number.POSITIVE_INFINITY,
          })
        );
      }
    },
    85157: function (e, t, n) {
      "use strict";
      n.d(t, {
        useConnectors: function () {
          return c;
        },
      });
      var r = n(65066),
        i = n(52123);
      let a = [];
      function o(e) {
        let t = e.connectors;
        return (0, i.v)(a, t) ? a : ((a = t), t);
      }
      var s = n(2265),
        u = n(12364);
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, u.useConfig)(e);
        return (0, s.useSyncExternalStore)(
          (e) => (0, r.f)(t, { onChange: e }),
          () => o(t),
          () => o(t)
        );
      }
    },
    55113: function (e, t, n) {
      "use strict";
      n.d(t, {
        useDeployContract: function () {
          return c;
        },
      });
      var r = n(21770),
        i = n(79078),
        a = n(44199),
        o = n(18849);
      async function s(e, t) {
        let n;
        let { account: r, chainId: s, connector: u, ...c } = t;
        n =
          "object" == typeof r && "local" === r.type
            ? e.getClient({ chainId: s })
            : await (0, o.e)(e, { account: r, chainId: s, connector: u });
        let l = (0, a.s)(n, i.P, "deployContract");
        return await l({
          ...c,
          ...(r ? { account: r } : {}),
          chain: s ? { id: s } : null,
        });
      }
      var u = n(12364);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          i =
            ((e = (0, u.useConfig)(t)),
            { mutationFn: (t) => s(e, t), mutationKey: ["deployContract"] }),
          { mutate: a, mutateAsync: o, ...c } = (0, r.D)({ ...n, ...i });
        return { ...c, deployContract: a, deployContractAsync: o };
      }
    },
    32400: function (e, t, n) {
      "use strict";
      n.d(t, {
        useEnsAddress: function () {
          return u;
        },
      });
      var r = n(87818),
        i = n(27534),
        a = n(24432),
        o = n(44005),
        s = n(12364);
      function u() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: u, query: c = {} } = n,
          l = (0, s.useConfig)(n),
          d = (0, o.useChainId)({ config: l }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: n, scopeKey: i, ...a } = t[1];
                if (!n) throw Error("name is required");
                return (0, r.O)(e, { ...a, name: n });
              },
              queryKey: (function (e = {}) {
                return ["ensAddress", (0, i.OP)(e)];
              })(t),
            };
          })(l, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          y = !!(u && (null === (t = c.enabled) || void 0 === t || t));
        return (0, a.aM)({ ...c, ...f, enabled: y });
      }
    },
    60823: function (e, t, n) {
      "use strict";
      n.d(t, {
        useEnsAvatar: function () {
          return u;
        },
      });
      var r = n(68620),
        i = n(27534),
        a = n(24432),
        o = n(44005),
        s = n(12364);
      function u() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: u, query: c = {} } = n,
          l = (0, s.useConfig)(n),
          d = (0, o.useChainId)({ config: l }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: n, scopeKey: i, ...a } = t[1];
                if (!n) throw Error("name is required");
                return (0, r.r)(e, { ...a, name: n });
              },
              queryKey: (function (e = {}) {
                return ["ensAvatar", (0, i.OP)(e)];
              })(t),
            };
          })(l, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          y = !!(u && (null === (t = c.enabled) || void 0 === t || t));
        return (0, a.aM)({ ...c, ...f, enabled: y });
      }
    },
    95138: function (e, t, n) {
      "use strict";
      n.d(t, {
        useEnsName: function () {
          return u;
        },
      });
      var r = n(6788),
        i = n(27534),
        a = n(24432),
        o = n(44005),
        s = n(12364);
      function u() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: u, query: c = {} } = n,
          l = (0, s.useConfig)(n),
          d = (0, o.useChainId)({ config: l }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: i, ...a } = t[1];
                if (!n) throw Error("address is required");
                return (0, r.w)(e, { ...a, address: n });
              },
              queryKey: (function (e = {}) {
                return ["ensName", (0, i.OP)(e)];
              })(t),
            };
          })(l, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          y = !!(u && (null === (t = c.enabled) || void 0 === t || t));
        return (0, a.aM)({ ...c, ...f, enabled: y });
      }
    },
    67970: function (e, t, n) {
      "use strict";
      n.d(t, {
        useEnsResolver: function () {
          return c;
        },
      });
      var r = n(32457),
        i = n(44199),
        a = n(27534),
        o = n(24432),
        s = n(44005),
        u = n(12364);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: c, query: l = {} } = n,
          d = (0, u.useConfig)(n),
          f = (0, s.useChainId)({ config: d }),
          y = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: n, scopeKey: a, ...o } = t[1];
                if (!n) throw Error("name is required");
                return (function (e, t) {
                  let { chainId: n, ...a } = t,
                    o = e.getClient({ chainId: n });
                  return (0, i.s)(o, r.S, "getEnsResolver")(a);
                })(e, { ...o, name: n });
              },
              queryKey: (function (e = {}) {
                return ["ensResolver", (0, a.OP)(e)];
              })(t),
            };
          })(d, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : f,
          }),
          h = !!(c && (null === (t = l.enabled) || void 0 === t || t));
        return (0, o.aM)({ ...l, ...y, enabled: h });
      }
    },
    67010: function (e, t, n) {
      "use strict";
      n.d(t, {
        useEnsText: function () {
          return c;
        },
      });
      var r = n(99861),
        i = n(44199),
        a = n(27534),
        o = n(24432),
        s = n(44005),
        u = n(12364);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { key: c, name: l, query: d = {} } = n,
          f = (0, u.useConfig)(n),
          y = (0, s.useChainId)({ config: f }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { key: n, name: a, scopeKey: o, ...s } = t[1];
                if (!n || !a) throw Error("key and name are required");
                return (function (e, t) {
                  let { chainId: n, ...a } = t,
                    o = e.getClient({ chainId: n });
                  return (0, i.s)(o, r.g, "getEnsText")(a);
                })(e, { ...s, key: n, name: a });
              },
              queryKey: (function (e = {}) {
                return ["ensText", (0, a.OP)(e)];
              })(t),
            };
          })(f, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : y,
          }),
          p = !!(c && l && (null === (t = d.enabled) || void 0 === t || t));
        return (0, o.aM)({ ...d, ...h, enabled: p });
      }
    },
    34087: function (e, t, n) {
      "use strict";
      n.d(t, {
        useEstimateFeesPerGas: function () {
          return f;
        },
      });
      var r = n(39502),
        i = n(6458),
        a = n(44199),
        o = n(10816);
      async function s(e, t = {}) {
        let { chainId: n, formatUnits: s = "gwei", ...u } = t,
          c = e.getClient({ chainId: n }),
          l = (0, a.s)(c, i.X, "estimateFeesPerGas"),
          {
            gasPrice: d,
            maxFeePerGas: f,
            maxPriorityFeePerGas: y,
          } = await l({ ...u, chain: c.chain }),
          h = (0, o.W)(s);
        return {
          formatted: {
            gasPrice: d ? (0, r.b)(d, h) : void 0,
            maxFeePerGas: f ? (0, r.b)(f, h) : void 0,
            maxPriorityFeePerGas: y ? (0, r.b)(y, h) : void 0,
          },
          gasPrice: d,
          maxFeePerGas: f,
          maxPriorityFeePerGas: y,
        };
      }
      var u = n(27534),
        c = n(24432),
        l = n(44005),
        d = n(12364);
      function f() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          r = (0, d.useConfig)(t),
          i = (0, l.useChainId)({ config: r }),
          a = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...r } = t[1];
                return s(e, r);
              },
              queryKey: (function (e = {}) {
                return ["estimateFeesPerGas", (0, u.OP)(e)];
              })(t),
            };
          })(r, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : i,
          });
        return (0, c.aM)({ ...n, ...a });
      }
    },
    28153: function (e, t, n) {
      "use strict";
      n.d(t, {
        useEstimateGas: function () {
          return c;
        },
      });
      var r = n(56929),
        i = n(27534),
        a = n(24432),
        o = n(44005),
        s = n(12364),
        u = n(21267);
      function c() {
        var e, t, n;
        let c =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { connector: l, query: d = {} } = c,
          f = (0, s.useConfig)(c),
          { data: y } = (0, u.useConnectorClient)({
            connector: l,
            query: { enabled: void 0 === c.account },
          }),
          h =
            null !== (e = c.account) && void 0 !== e
              ? e
              : null == y
              ? void 0
              : y.account,
          p = (0, o.useChainId)({ config: f }),
          v = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { connector: i } = t,
                  { account: a, scopeKey: o, ...s } = n[1];
                if (!a && !i) throw Error("account or connector is required");
                return (0, r.Q)(e, { account: a, connector: i, ...s });
              },
              queryKey: (function (e = {}) {
                let { connector: t, ...n } = e;
                return ["estimateGas", (0, i.OP)(n)];
              })(t),
            };
          })(f, {
            ...c,
            account: h,
            chainId: null !== (t = c.chainId) && void 0 !== t ? t : p,
            connector: l,
          }),
          m = !!((h || l) && (null === (n = d.enabled) || void 0 === n || n));
        return (0, a.aM)({ ...d, ...v, enabled: m });
      }
    },
    26290: function (e, t, n) {
      "use strict";
      n.d(t, {
        useEstimateMaxPriorityFeePerGas: function () {
          return l;
        },
      });
      var r = n(96174),
        i = n(44199);
      async function a(e, t = {}) {
        let { chainId: n } = t,
          a = e.getClient({ chainId: n });
        return (0, i.s)(
          a,
          r._,
          "estimateMaxPriorityFeePerGas"
        )({ chain: a.chain });
      }
      var o = n(27534),
        s = n(24432),
        u = n(44005),
        c = n(12364);
      function l() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          r = (0, c.useConfig)(t),
          i = (0, u.useChainId)({ config: r }),
          l = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...r } = t[1];
                return a(e, r);
              },
              queryKey: (function (e = {}) {
                return ["estimateMaxPriorityFeePerGas", (0, o.OP)(e)];
              })(t),
            };
          })(r, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : i,
          });
        return (0, s.aM)({ ...n, ...l });
      }
    },
    75888: function (e, t, n) {
      "use strict";
      n.d(t, {
        useFeeHistory: function () {
          return c;
        },
      });
      var r = n(2054),
        i = n(44199),
        a = n(27534),
        o = n(24432),
        s = n(44005),
        u = n(12364);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { blockCount: c, rewardPercentiles: l, query: d = {} } = n,
          f = (0, u.useConfig)(n),
          y = (0, s.useChainId)({ config: f }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let {
                  blockCount: n,
                  rewardPercentiles: a,
                  scopeKey: o,
                  ...s
                } = t[1];
                if (!n) throw Error("blockCount is required");
                if (!a) throw Error("rewardPercentiles is required");
                return (
                  (await (function (e, t) {
                    let { chainId: n, ...a } = t,
                      o = e.getClient({ chainId: n });
                    return (0, i.s)(o, r.Z, "getFeeHistory")(a);
                  })(e, { ...s, blockCount: n, rewardPercentiles: a })) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["feeHistory", (0, a.OP)(e)];
              })(t),
            };
          })(f, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : y,
          }),
          p = !!(c && l && (null === (t = d.enabled) || void 0 === t || t));
        return (0, o.aM)({ ...d, ...h, enabled: p });
      }
    },
    77494: function (e, t, n) {
      "use strict";
      n.d(t, {
        useGasPrice: function () {
          return c;
        },
      });
      var r = n(25283),
        i = n(44199),
        a = n(27534),
        o = n(24432),
        s = n(44005),
        u = n(12364);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          c = (0, u.useConfig)(t),
          l = (0, s.useChainId)({ config: c }),
          d = null !== (e = t.chainId) && void 0 !== e ? e : l,
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...a } = t[1];
                return (
                  (await (function (e, t = {}) {
                    let { chainId: n } = t,
                      a = e.getClient({ chainId: n });
                    return (0, i.s)(a, r.o, "getGasPrice")({});
                  })(e, a)) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["gasPrice", (0, a.OP)(e)];
              })(t),
            };
          })(c, { ...t, chainId: d });
        return (0, o.aM)({ ...n, ...f });
      }
    },
    38862: function (e, t, n) {
      "use strict";
      n.d(t, {
        useInfiniteReadContracts: function () {
          return u;
        },
      });
      var r = n(75079),
        i = n(27534),
        a = n(24432),
        o = n(44005),
        s = n(12364);
      function u(e) {
        var t, n;
        let { contracts: u = [], query: c } = e,
          l = (0, s.useConfig)(e),
          d = (0, o.useChainId)({ config: l }),
          f = {
            ...(n = { ...e, chainId: d, contracts: u, query: c }).query,
            async queryFn({ pageParam: e, queryKey: t }) {
              let { contracts: i } = n,
                { cacheKey: a, scopeKey: o, ...s } = t[1];
              return await (0, r.J)(l, { ...s, contracts: i(e) });
            },
            queryKey: (function (e) {
              let { contracts: t, query: n, ...r } = e;
              return ["infiniteReadContracts", (0, i.OP)(r)];
            })(n),
          };
        return (0, a.NS)({
          ...c,
          ...f,
          initialPageParam: f.initialPageParam,
          structuralSharing:
            null !== (t = c.structuralSharing) && void 0 !== t ? t : i.if,
        });
      }
    },
    66929: function (e, t, n) {
      "use strict";
      n.d(t, {
        usePrepareTransactionRequest: function () {
          return u;
        },
      });
      var r = n(2298),
        i = n(27534),
        a = n(24432),
        o = n(44005),
        s = n(12364);
      function u() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { to: u, query: c = {} } = n,
          l = (0, s.useConfig)(n),
          d = (0, o.useChainId)({ config: l }),
          f = (function (e, t = {}) {
            return {
              queryFn({ queryKey: t }) {
                let { scopeKey: n, to: i, ...a } = t[1];
                if (!i) throw Error("to is required");
                return (0, r.Z)(e, { to: i, ...a });
              },
              queryKey: ["prepareTransactionRequest", (0, i.OP)(t)],
            };
          })(l, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          y = !!(u && (null === (t = c.enabled) || void 0 === t || t));
        return (0, a.aM)({ ...c, ...f, enabled: y });
      }
    },
    84690: function (e, t, n) {
      "use strict";
      n.d(t, {
        useProof: function () {
          return l;
        },
      });
      var r = n(90587),
        i = n(44199);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.S, "getProof")(a);
      }
      var o = n(27534),
        s = n(24432),
        u = n(44005),
        c = n(12364);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, storageKeys: i, query: l = {} } = n,
          d = (0, c.useConfig)(n),
          f = (0, u.useChainId)({ config: d }),
          y = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, storageKeys: i, ...o } = t[1];
                if (!n || !i)
                  throw Error("address and storageKeys are required");
                return a(e, { ...o, address: n, storageKeys: i });
              },
              queryKey: ["getProof", (0, o.OP)(t)],
            };
          })(d, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : f,
          }),
          h = !!(r && i && (null === (t = l.enabled) || void 0 === t || t));
        return (0, s.aM)({ ...l, ...y, enabled: h });
      }
    },
    38914: function (e, t, n) {
      "use strict";
      n.d(t, {
        usePublicClient: function () {
          return eE;
        },
      });
      var r = n(52530),
        i = n(96698),
        a = n(72609),
        o = n(32457),
        s = n(99861),
        u = n(25664),
        c = n(46908);
      async function l(e) {
        let t = (0, c.g)(e, { method: "eth_newBlockFilter" }),
          n = await e.request({ method: "eth_newBlockFilter" });
        return { id: n, request: t(n), type: "block" };
      }
      var d = n(31111),
        f = n(25727),
        y = n(59455);
      async function h(
        e,
        {
          address: t,
          args: n,
          event: r,
          events: i,
          fromBlock: a,
          strict: o,
          toBlock: s,
        } = {}
      ) {
        let u = i ?? (r ? [r] : void 0),
          l = (0, c.g)(e, { method: "eth_newFilter" }),
          d = [];
        u &&
          ((d = [
            u.flatMap((e) =>
              (0, f.O)({ abi: [e], eventName: e.name, args: n })
            ),
          ]),
          r && (d = d[0]));
        let h = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof a ? (0, y.eC)(a) : a,
              toBlock: "bigint" == typeof s ? (0, y.eC)(s) : s,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: u,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: a,
          id: h,
          request: l(h),
          strict: !!o,
          toBlock: s,
          type: "event",
        };
      }
      var p = n(13716),
        v = n(19775),
        m = n(17283),
        g = n(34180),
        b = n(82645),
        w = n(8741);
      async function C(e, t) {
        let { abi: n, address: r, args: i, functionName: a, ...o } = t,
          s = (0, m.R)({ abi: n, args: i, functionName: a });
        try {
          return await (0, b.s)(
            e,
            w.Q,
            "estimateGas"
          )({ data: s, to: r, ...o });
        } catch (t) {
          let e = o.account ? (0, v.T)(o.account) : void 0;
          throw (0, g.S)(t, {
            abi: n,
            address: r,
            args: i,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: a,
            sender: e?.address,
          });
        }
      }
      var I = n(6458),
        x = n(96174),
        q = n(32807);
      async function E(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      var P = n(74587),
        k = n(13708),
        T = n(85682),
        N = n(12363),
        F = n(56570),
        S = n(99474),
        K = n(81544);
      class O extends K.G {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${e}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      var B = n(28766);
      async function A(e, t) {
        let { address: n, factory: r, factoryData: i } = t;
        try {
          let [t, a, o, s, u, c, l] = await (0, b.s)(
            e,
            B.L,
            "readContract"
          )({
            abi: M,
            address: n,
            functionName: "eip712Domain",
            factory: r,
            factoryData: i,
          });
          return {
            domain: {
              name: a,
              version: o,
              chainId: Number(s),
              verifyingContract: u,
              salt: c,
            },
            extensions: l,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new O({ address: n });
          throw e;
        }
      }
      let M = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      var _ = n(2054),
        R = n(18789),
        D = n(42133),
        L = n(55668);
      async function U(e, { filter: t }) {
        let n = t.strict ?? !1,
          r = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, L.U)(e));
        return t.abi ? (0, D.h)({ abi: t.abi, logs: r, strict: n }) : r;
      }
      var G = n(25283),
        W = n(63108),
        z = n(90587),
        j = n(14205),
        H = n(39277),
        $ = n(68847),
        Z = n(16689),
        Q = n(78526),
        V = n(94797),
        J = n(21541),
        Y = n(97638),
        X = n(41969),
        ee = n(33438),
        et = n(67348),
        en = n(2228),
        er = n(45789),
        ei = n(91583),
        ea = n(36478),
        eo = n(41495),
        es = n(31853),
        eu = n(65531),
        ec = n(77014),
        el = n(27964),
        ed = n(1337),
        ef = n(15566);
      let ey =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        eh =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      var ep = n(93637),
        ev = n(75233);
      async function em(e, t) {
        let {
            address: n,
            domain: r,
            message: i,
            nonce: a,
            scheme: o,
            signature: s,
            time: u = new Date(),
            ...c
          } = t,
          l = (function (e) {
            let { scheme: t, statement: n, ...r } = e.match(ey)?.groups ?? {},
              {
                chainId: i,
                expirationTime: a,
                issuedAt: o,
                notBefore: s,
                requestId: u,
                ...c
              } = e.match(eh)?.groups ?? {},
              l = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...r,
              ...c,
              ...(i ? { chainId: Number(i) } : {}),
              ...(a ? { expirationTime: new Date(a) } : {}),
              ...(o ? { issuedAt: new Date(o) } : {}),
              ...(s ? { notBefore: new Date(s) } : {}),
              ...(u ? { requestId: u } : {}),
              ...(l ? { resources: l } : {}),
              ...(t ? { scheme: t } : {}),
              ...(n ? { statement: n } : {}),
            };
          })(i);
        if (
          !l.address ||
          !(function (e) {
            let {
              address: t,
              domain: n,
              message: r,
              nonce: i,
              scheme: a,
              time: o = new Date(),
            } = e;
            if (
              (n && r.domain !== n) ||
              (i && r.nonce !== i) ||
              (a && r.scheme !== a) ||
              (r.expirationTime && o >= r.expirationTime) ||
              (r.notBefore && o < r.notBefore)
            )
              return !1;
            try {
              if (!r.address || (t && !(0, ep.E)(r.address, t))) return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: n,
            domain: r,
            message: l,
            nonce: a,
            scheme: o,
            time: u,
          })
        )
          return !1;
        let d = (0, ef.r)(i);
        return (0, ev.Z)(e, {
          address: l.address,
          hash: d,
          signature: s,
          ...c,
        });
      }
      var eg = n(34467),
        eb = n(9769);
      function ew(e) {
        return {
          call: (t) => (0, u.R)(e, t),
          createBlockFilter: () => l(e),
          createContractEventFilter: (t) => (0, d.A)(e, t),
          createEventFilter: (t) => h(e, t),
          createPendingTransactionFilter: () => (0, p.W)(e),
          estimateContractGas: (t) => C(e, t),
          estimateGas: (t) => (0, w.Q)(e, t),
          getBalance: (t) => (0, q.s)(e, t),
          getBlobBaseFee: () => E(e),
          getBlock: (t) => (0, P.Q)(e, t),
          getBlockNumber: (t) => (0, k.z)(e, t),
          getBlockTransactionCount: (t) => (0, T.c)(e, t),
          getBytecode: (t) => (0, F.C)(e, t),
          getChainId: () => (0, N.L)(e),
          getCode: (t) => (0, F.C)(e, t),
          getContractEvents: (t) => (0, S.m)(e, t),
          getEip712Domain: (t) => A(e, t),
          getEnsAddress: (t) => (0, r.O)(e, t),
          getEnsAvatar: (t) => (0, i.r)(e, t),
          getEnsName: (t) => (0, a.w)(e, t),
          getEnsResolver: (t) => (0, o.S)(e, t),
          getEnsText: (t) => (0, s.g)(e, t),
          getFeeHistory: (t) => (0, _.Z)(e, t),
          estimateFeesPerGas: (t) => (0, I.X)(e, t),
          getFilterChanges: (t) => (0, R.K)(e, t),
          getFilterLogs: (t) => U(e, t),
          getGasPrice: () => (0, G.o)(e),
          getLogs: (t) => (0, W.y)(e, t),
          getProof: (t) => (0, z.S)(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, x._)(e, t),
          getStorageAt: (t) => (0, j.Y)(e, t),
          getTransaction: (t) => (0, H.f)(e, t),
          getTransactionConfirmations: (t) => (0, $.a)(e, t),
          getTransactionCount: (t) => (0, Z.K)(e, t),
          getTransactionReceipt: (t) => (0, Q.a)(e, t),
          multicall: (t) => (0, V.A)(e, t),
          prepareTransactionRequest: (t) => (0, eg.Z)(e, t),
          readContract: (t) => (0, B.L)(e, t),
          sendRawTransaction: (t) => (0, eb.p)(e, t),
          simulateContract: (t) => (0, J.a)(e, t),
          verifyMessage: (t) => (0, X.n)(e, t),
          verifySiweMessage: (t) => em(e, t),
          verifyTypedData: (t) => (0, ee.B)(e, t),
          uninstallFilter: (t) => (0, Y.W)(e, t),
          waitForTransactionReceipt: (t) => (0, et.e)(e, t),
          watchBlocks: (t) => (0, er.p)(e, t),
          watchBlockNumber: (t) => (0, en.q)(e, t),
          watchContractEvent: (t) => (0, ei.Y)(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: n,
                batch: r = !0,
                event: i,
                events: a,
                fromBlock: o,
                onError: s,
                onLogs: u,
                poll: c,
                pollingInterval: l = e.pollingInterval,
                strict: d,
              }
            ) {
              let y, p;
              let v =
                  void 0 !== c
                    ? c
                    : "bigint" == typeof o ||
                      ("webSocket" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          "webSocket" !==
                            e.transport.transports[0].config.type)),
                m = d ?? !1;
              return v
                ? (() => {
                    let c = (0, es.P)(["watchEvent", t, n, r, e.uid, i, l, o]);
                    return (0, ea.N7)(c, { onLogs: u, onError: s }, (s) => {
                      let u, c;
                      void 0 !== o && (u = o - 1n);
                      let d = !1,
                        f = (0, eo.$)(
                          async () => {
                            if (!d) {
                              try {
                                c = await (0, b.s)(
                                  e,
                                  h,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: n,
                                  event: i,
                                  events: a,
                                  strict: m,
                                  fromBlock: o,
                                });
                              } catch {}
                              d = !0;
                              return;
                            }
                            try {
                              let o;
                              if (c)
                                o = await (0, b.s)(
                                  e,
                                  R.K,
                                  "getFilterChanges"
                                )({ filter: c });
                              else {
                                let r = await (0, b.s)(
                                  e,
                                  k.z,
                                  "getBlockNumber"
                                )({});
                                (o =
                                  u && u !== r
                                    ? await (0, b.s)(
                                        e,
                                        W.y,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: n,
                                        event: i,
                                        events: a,
                                        fromBlock: u + 1n,
                                        toBlock: r,
                                      })
                                    : []),
                                  (u = r);
                              }
                              if (0 === o.length) return;
                              if (r) s.onLogs(o);
                              else for (let e of o) s.onLogs([e]);
                            } catch (e) {
                              c && e instanceof ec.yR && (d = !1),
                                s.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: l }
                        );
                      return async () => {
                        c &&
                          (await (0, b.s)(
                            e,
                            Y.W,
                            "uninstallFilter"
                          )({ filter: c })),
                          f();
                      };
                    });
                  })()
                : ((y = !0),
                  (p = () => (y = !1)),
                  (async () => {
                    try {
                      let r = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        o = a ?? (i ? [i] : void 0),
                        c = [];
                      o &&
                        ((c = [
                          o.flatMap((e) =>
                            (0, f.O)({ abi: [e], eventName: e.name, args: n })
                          ),
                        ]),
                        i && (c = c[0]));
                      let { unsubscribe: l } = await r.subscribe({
                        params: ["logs", { address: t, topics: c }],
                        onData(e) {
                          if (!y) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: n } = (0, el.F)({
                                abi: o ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: m,
                              }),
                              r = (0, L.U)(t, { args: n, eventName: e });
                            u([r]);
                          } catch (i) {
                            let e, n;
                            if (i instanceof eu.SM || i instanceof eu.Gy) {
                              if (d) return;
                              (e = i.abiItem.name),
                                (n = i.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let r = (0, L.U)(t, {
                              args: n ? [] : {},
                              eventName: e,
                            });
                            u([r]);
                          }
                        },
                        onError(e) {
                          s?.(e);
                        },
                      });
                      (p = l), y || p();
                    } catch (e) {
                      s?.(e);
                    }
                  })(),
                  () => p());
            })(e, t),
          watchPendingTransactions: (t) => (0, ed.O)(e, t),
        };
      }
      var eC = n(94197);
      function eI(e, t = {}) {
        let n = (0, eC.s)(e, t);
        return n?.extend(ew);
      }
      var ex = n(35195),
        eq = n(12364);
      function eE() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, eq.useConfig)(e);
        return (0, ex.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => eI(e), n, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => eI(t, e),
          () => eI(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    27323: function (e, t, n) {
      "use strict";
      n.d(t, {
        useReadContract: function () {
          return u;
        },
      });
      var r = n(37691),
        i = n(27534),
        a = n(24432),
        o = n(44005),
        s = n(12364);
      function u() {
        var e, t, n;
        let u =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: c, address: l, functionName: d, query: f = {} } = u,
          y = u.code,
          h = (0, s.useConfig)(u),
          p = (0, o.useChainId)({ config: h }),
          v = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let i = t.abi;
                if (!i) throw Error("abi is required");
                let { functionName: a, scopeKey: o, ...s } = n[1],
                  u = (() => {
                    let e = n[1];
                    if (e.address) return { address: e.address };
                    if (e.code) return { code: e.code };
                    throw Error("address or code is required");
                  })();
                if (!a) throw Error("functionName is required");
                return (0, r.L)(e, {
                  abi: i,
                  functionName: a,
                  args: s.args,
                  ...u,
                  ...s,
                });
              },
              queryKey: (function (e = {}) {
                let { abi: t, ...n } = e;
                return ["readContract", (0, i.OP)(n)];
              })(t),
            };
          })(h, {
            ...u,
            chainId: null !== (e = u.chainId) && void 0 !== e ? e : p,
          }),
          m = !!(
            (l || y) &&
            c &&
            d &&
            (null === (t = f.enabled) || void 0 === t || t)
          );
        return (0, a.aM)({
          ...f,
          ...v,
          enabled: m,
          structuralSharing:
            null !== (n = f.structuralSharing) && void 0 !== n ? n : i.if,
        });
      }
    },
    16986: function (e, t, n) {
      "use strict";
      n.d(t, {
        useReadContracts: function () {
          return c;
        },
      });
      var r = n(75079),
        i = n(27534),
        a = n(2265),
        o = n(24432),
        s = n(44005),
        u = n(12364);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { contracts: n = [], query: c = {} } = t,
          l = (0, u.useConfig)(t),
          d = (0, s.useChainId)({ config: l }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let i = [],
                  a = n[1].contracts.length;
                for (let e = 0; e < a; e++) {
                  let r = n[1].contracts[e],
                    a = (t.contracts?.[e]).abi;
                  i.push({ ...r, abi: a });
                }
                let { scopeKey: o, ...s } = n[1];
                return (0, r.J)(e, { ...s, contracts: i });
              },
              queryKey: (function (e = {}) {
                let t = [];
                for (let n of e.contracts ?? []) {
                  let { abi: r, ...i } = n;
                  t.push({ ...i, chainId: i.chainId ?? e.chainId });
                }
                return ["readContracts", (0, i.OP)({ ...e, contracts: t })];
              })(t),
            };
          })(l, { ...t, chainId: d }),
          y = (0, a.useMemo)(() => {
            var e;
            let t = !1;
            for (let e of n) {
              let { abi: n, address: r, functionName: i } = e;
              if (!n || !r || !i) {
                t = !1;
                break;
              }
              t = !0;
            }
            return !!(t && (null === (e = c.enabled) || void 0 === e || e));
          }, [n, c.enabled]);
        return (0, o.aM)({
          ...f,
          ...c,
          enabled: y,
          structuralSharing:
            null !== (e = c.structuralSharing) && void 0 !== e ? e : i.if,
        });
      }
    },
    91300: function (e, t, n) {
      "use strict";
      n.d(t, {
        useReconnect: function () {
          return o;
        },
      });
      var r = n(21770),
        i = n(54026),
        a = n(12364);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, a.useConfig)(e),
          {
            mutate: o,
            mutateAsync: s,
            ...u
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => (0, i.G)(n, e),
            mutationKey: ["reconnect"],
          });
        return {
          ...u,
          connectors: n.connectors,
          reconnect: o,
          reconnectAsync: s,
        };
      }
    },
    48320: function (e, t, n) {
      "use strict";
      n.d(t, {
        useSendTransaction: function () {
          return o;
        },
      });
      var r = n(21770),
        i = n(48135),
        a = n(12364);
      function o() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          o =
            ((e = (0, a.useConfig)(t)),
            {
              mutationFn: (t) => (0, i.T)(e, t),
              mutationKey: ["sendTransaction"],
            }),
          { mutate: s, mutateAsync: u, ...c } = (0, r.D)({ ...n, ...o });
        return { ...c, sendTransaction: s, sendTransactionAsync: u };
      }
    },
    91196: function (e, t, n) {
      "use strict";
      n.d(t, {
        useSignMessage: function () {
          return o;
        },
      });
      var r = n(21770),
        i = n(40136),
        a = n(12364);
      function o() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          o =
            ((e = (0, a.useConfig)(t)),
            {
              mutationFn: (t) => (0, i.l)(e, t),
              mutationKey: ["signMessage"],
            }),
          { mutate: s, mutateAsync: u, ...c } = (0, r.D)({ ...n, ...o });
        return { ...c, signMessage: s, signMessageAsync: u };
      }
    },
    83034: function (e, t, n) {
      "use strict";
      n.d(t, {
        useSignTypedData: function () {
          return c;
        },
      });
      var r = n(21770),
        i = n(69133),
        a = n(44199),
        o = n(18849);
      async function s(e, t) {
        let n;
        let { account: r, connector: s, ...u } = t;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await (0, o.e)(e, { account: r, connector: s })),
          (0, a.s)(
            n,
            i.x,
            "signTypedData"
          )({ ...u, ...(r ? { account: r } : {}) })
        );
      }
      var u = n(12364);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          i =
            ((e = (0, u.useConfig)(t)),
            { mutationFn: (t) => s(e, t), mutationKey: ["signTypedData"] }),
          { mutate: a, mutateAsync: o, ...c } = (0, r.D)({ ...n, ...i });
        return { ...c, signTypedData: a, signTypedDataAsync: o };
      }
    },
    24533: function (e, t, n) {
      "use strict";
      n.d(t, {
        useSimulateContract: function () {
          return c;
        },
      });
      var r = n(39855),
        i = n(27534),
        a = n(24432),
        o = n(44005),
        s = n(12364),
        u = n(21267);
      function c() {
        var e, t, n;
        let c =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            abi: l,
            address: d,
            connector: f,
            functionName: y,
            query: h = {},
          } = c,
          p = (0, s.useConfig)(c),
          { data: v } = (0, u.useConnectorClient)({
            connector: f,
            query: { enabled: void 0 === c.account },
          }),
          m = (0, o.useChainId)({ config: p }),
          g = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { abi: i, connector: a } = t;
                if (!i) throw Error("abi is required");
                let { scopeKey: o, ...s } = n[1],
                  { address: u, functionName: c } = s;
                if (!u) throw Error("address is required");
                if (!c) throw Error("functionName is required");
                return (0, r.a)(e, { abi: i, connector: a, ...s });
              },
              queryKey: (function (e = {}) {
                let { abi: t, connector: n, ...r } = e;
                return ["simulateContract", (0, i.OP)(r)];
              })(t),
            };
          })(p, {
            ...c,
            account:
              null !== (e = c.account) && void 0 !== e
                ? e
                : null == v
                ? void 0
                : v.account,
            chainId: null !== (t = c.chainId) && void 0 !== t ? t : m,
          }),
          b = !!(
            l &&
            d &&
            y &&
            (null === (n = h.enabled) || void 0 === n || n)
          );
        return (0, a.aM)({ ...h, ...g, enabled: b });
      }
    },
    37635: function (e, t, n) {
      "use strict";
      n.d(t, {
        useStorageAt: function () {
          return l;
        },
      });
      var r = n(14205),
        i = n(44199);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.Y, "getStorageAt")(a);
      }
      var o = n(27534),
        s = n(24432),
        u = n(44005),
        c = n(12364);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, slot: i, query: l = {} } = n,
          d = (0, c.useConfig)(n),
          f = (0, u.useChainId)({ config: d }),
          y = (function (e, t = {}) {
            return {
              queryFn({ queryKey: t }) {
                let { address: n, slot: r, scopeKey: i, ...o } = t[1];
                if (!n || !r) throw Error("address and slot are required");
                return a(e, { ...o, address: n, slot: r });
              },
              queryKey: ["getStorageAt", (0, o.OP)(t)],
            };
          })(d, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : f,
          }),
          h = !!(r && i && (null === (t = l.enabled) || void 0 === t || t));
        return (0, s.aM)({ ...l, ...y, enabled: h });
      }
    },
    51292: function (e, t, n) {
      "use strict";
      n.d(t, {
        useSwitchAccount: function () {
          return s;
        },
      });
      var r = n(21770),
        i = n(13642),
        a = n(12364),
        o = n(17949);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, a.useConfig)(e),
          {
            mutate: s,
            mutateAsync: u,
            ...c
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => (0, i.y)(n, e),
            mutationKey: ["switchAccount"],
          });
        return {
          ...c,
          connectors: (0, o.useConnections)({ config: n }).map(
            (e) => e.connector
          ),
          switchAccount: s,
          switchAccountAsync: u,
        };
      }
    },
    46327: function (e, t, n) {
      "use strict";
      n.d(t, {
        useSwitchChain: function () {
          return s;
        },
      });
      var r = n(21770),
        i = n(54728),
        a = n(54283),
        o = n(12364);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, o.useConfig)(e),
          {
            mutate: s,
            mutateAsync: u,
            ...c
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => (0, i.c)(n, e),
            mutationKey: ["switchChain"],
          });
        return {
          ...c,
          chains: (0, a.useChains)({ config: n }),
          switchChain: s,
          switchChainAsync: u,
        };
      }
    },
    33017: function (e, t, n) {
      "use strict";
      n.d(t, {
        useToken: function () {
          return h;
        },
      });
      var r = n(20010),
        i = n(39502),
        a = n(72932),
        o = n(36826),
        s = n(10816),
        u = n(75079);
      async function c(e, t) {
        let { address: n, chainId: c, formatUnits: l = 18 } = t;
        function d(e) {
          return [
            {
              type: "function",
              name: "decimals",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: "uint8" }],
            },
            {
              type: "function",
              name: "name",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: e }],
            },
            {
              type: "function",
              name: "symbol",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: e }],
            },
            {
              type: "function",
              name: "totalSupply",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: "uint256" }],
            },
          ];
        }
        try {
          let t = d("string"),
            a = { address: n, abi: t, chainId: c },
            [o, f, y, h] = await (0, u.J)(e, {
              allowFailure: !0,
              contracts: [
                { ...a, functionName: "decimals" },
                { ...a, functionName: "name" },
                { ...a, functionName: "symbol" },
                { ...a, functionName: "totalSupply" },
              ],
            });
          if (f.error instanceof r.uq) throw f.error;
          if (y.error instanceof r.uq) throw y.error;
          if (o.error) throw o.error;
          if (h.error) throw h.error;
          return {
            address: n,
            decimals: o.result,
            name: f.result,
            symbol: y.result,
            totalSupply: {
              formatted: (0, i.b)(h.result, (0, s.W)(l)),
              value: h.result,
            },
          };
        } catch (t) {
          if (t instanceof r.uq) {
            let t = { address: n, abi: d("bytes32"), chainId: c },
              [r, f, y, h] = await (0, u.J)(e, {
                allowFailure: !1,
                contracts: [
                  { ...t, functionName: "decimals" },
                  { ...t, functionName: "name" },
                  { ...t, functionName: "symbol" },
                  { ...t, functionName: "totalSupply" },
                ],
              });
            return {
              address: n,
              decimals: r,
              name: (0, a.rR)((0, o.f)(f, { dir: "right" })),
              symbol: (0, a.rR)((0, o.f)(y, { dir: "right" })),
              totalSupply: { formatted: (0, i.b)(h, (0, s.W)(l)), value: h },
            };
          }
          throw t;
        }
      }
      var l = n(27534),
        d = n(24432),
        f = n(44005),
        y = n(12364);
      function h() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: i = {} } = n,
          a = (0, y.useConfig)(n),
          o = (0, f.useChainId)({ config: a }),
          s = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...i } = t[1];
                if (!n) throw Error("address is required");
                return c(e, { ...i, address: n });
              },
              queryKey: (function (e = {}) {
                return ["token", (0, l.OP)(e)];
              })(t),
            };
          })(a, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : o,
          }),
          u = !!(r && (null === (t = i.enabled) || void 0 === t || t));
        return (0, d.aM)({ ...i, ...s, enabled: u });
      }
    },
    71353: function (e, t, n) {
      "use strict";
      n.d(t, {
        useTransaction: function () {
          return c;
        },
      });
      var r = n(39277),
        i = n(44199),
        a = n(27534),
        o = n(24432),
        s = n(44005),
        u = n(12364);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            blockHash: c,
            blockNumber: l,
            blockTag: d,
            hash: f,
            query: y = {},
          } = n,
          h = (0, u.useConfig)(n),
          p = (0, s.useChainId)({ config: h }),
          v = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let {
                  blockHash: n,
                  blockNumber: a,
                  blockTag: o,
                  hash: s,
                  index: u,
                } = t[1];
                if (!n && !a && !o && !s)
                  throw Error(
                    "blockHash, blockNumber, blockTag, or hash is required"
                  );
                if (!s && !u)
                  throw Error(
                    "index is required for blockHash, blockNumber, or blockTag"
                  );
                let { scopeKey: c, ...l } = t[1];
                return (function (e, t) {
                  let { chainId: n, ...a } = t,
                    o = e.getClient({ chainId: n });
                  return (0, i.s)(o, r.f, "getTransaction")(a);
                })(e, l);
              },
              queryKey: (function (e = {}) {
                return ["transaction", (0, a.OP)(e)];
              })(t),
            };
          })(h, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : p,
          }),
          m = !!(
            !(c && l && d && f) &&
            (null === (t = y.enabled) || void 0 === t || t)
          );
        return (0, o.aM)({ ...y, ...v, enabled: m });
      }
    },
    81574: function (e, t, n) {
      "use strict";
      n.d(t, {
        useTransactionConfirmations: function () {
          return c;
        },
      });
      var r = n(68847),
        i = n(44199),
        a = n(27534),
        o = n(24432),
        s = n(44005),
        u = n(12364);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: c, transactionReceipt: l, query: d = {} } = n,
          f = (0, u.useConfig)(n),
          y = (0, s.useChainId)({ config: f }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let {
                  hash: n,
                  transactionReceipt: a,
                  scopeKey: o,
                  ...s
                } = t[1];
                if (!n && !a)
                  throw Error("hash or transactionReceipt is required");
                return (
                  (await (function (e, t) {
                    let { chainId: n, ...a } = t,
                      o = e.getClient({ chainId: n });
                    return (0, i.s)(o, r.a, "getTransactionConfirmations")(a);
                  })(e, { hash: n, transactionReceipt: a, ...s })) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["transactionConfirmations", (0, a.OP)(e)];
              })(t),
            };
          })(f, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : y,
          }),
          p = !!(
            !(c && l) &&
            (c || l) &&
            (null === (t = d.enabled) || void 0 === t || t)
          );
        return (0, o.aM)({ ...d, ...h, enabled: p });
      }
    },
    39488: function (e, t, n) {
      "use strict";
      n.d(t, {
        useTransactionCount: function () {
          return l;
        },
      });
      var r = n(16689),
        i = n(44199);
      async function a(e, t) {
        let { address: n, blockNumber: a, blockTag: o, chainId: s } = t,
          u = e.getClient({ chainId: s });
        return (0, i.s)(
          u,
          r.K,
          "getTransactionCount"
        )(a ? { address: n, blockNumber: a } : { address: n, blockTag: o });
      }
      var o = n(27534),
        s = n(24432),
        u = n(44005),
        c = n(12364);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: i = {} } = n,
          l = (0, c.useConfig)(n),
          d = (0, u.useChainId)({ config: l }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...i } = t[1];
                if (!n) throw Error("address is required");
                return (await a(e, { ...i, address: n })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["transactionCount", (0, o.OP)(e)];
              })(t),
            };
          })(l, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          y = !!(r && (null === (t = i.enabled) || void 0 === t || t));
        return (0, s.aM)({ ...i, ...f, enabled: y });
      }
    },
    63146: function (e, t, n) {
      "use strict";
      n.d(t, {
        useTransactionReceipt: function () {
          return l;
        },
      });
      var r = n(78526),
        i = n(44199);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.a, "getTransactionReceipt")(a);
      }
      var o = n(27534),
        s = n(24432),
        u = n(44005),
        c = n(12364);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: r, query: i = {} } = n,
          l = (0, c.useConfig)(n),
          d = (0, u.useChainId)({ config: l }),
          f = (function (e, t = {}) {
            return {
              queryFn({ queryKey: t }) {
                let { hash: n, scopeKey: r, ...i } = t[1];
                if (!n) throw Error("hash is required");
                return a(e, { ...i, hash: n });
              },
              queryKey: ["getTransactionReceipt", (0, o.OP)(t)],
            };
          })(l, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          y = !!(r && (null === (t = i.enabled) || void 0 === t || t));
        return (0, s.aM)({ ...i, ...f, enabled: y });
      }
    },
    50372: function (e, t, n) {
      "use strict";
      n.d(t, {
        useVerifyMessage: function () {
          return l;
        },
      });
      var r = n(41969),
        i = n(44199);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.n, "verifyMessage")(a);
      }
      var o = n(27534),
        s = n(24432),
        u = n(44005),
        c = n(12364);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, message: i, signature: l, query: d = {} } = n,
          f = (0, c.useConfig)(n),
          y = (0, u.useChainId)({ config: f }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, message: r, signature: i } = t[1];
                if (!n || !r || !i)
                  throw Error("address, message, and signature are required");
                let { scopeKey: o, ...s } = t[1];
                return (await a(e, s)) ?? null;
              },
              queryKey: ["verifyMessage", (0, o.OP)(t)],
            };
          })(f, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : y,
          }),
          p = !!(
            r &&
            i &&
            l &&
            (null === (t = d.enabled) || void 0 === t || t)
          );
        return (0, s.aM)({ ...d, ...h, enabled: p });
      }
    },
    13237: function (e, t, n) {
      "use strict";
      n.d(t, {
        useVerifyTypedData: function () {
          return l;
        },
      });
      var r = n(33438),
        i = n(44199);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.B, "verifyTypedData")(a);
      }
      var o = n(27534),
        s = n(24432),
        u = n(44005),
        c = n(12364);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            address: r,
            message: i,
            primaryType: l,
            signature: d,
            types: f,
            query: y = {},
          } = n,
          h = (0, c.useConfig)(n),
          p = (0, u.useChainId)({ config: h }),
          v = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let {
                  address: n,
                  message: r,
                  primaryType: i,
                  signature: o,
                  types: s,
                  scopeKey: u,
                  ...c
                } = t[1];
                if (!n) throw Error("address is required");
                if (!r) throw Error("message is required");
                if (!i) throw Error("primaryType is required");
                if (!o) throw Error("signature is required");
                if (!s) throw Error("types is required");
                return (
                  (await a(e, {
                    ...c,
                    address: n,
                    message: r,
                    primaryType: i,
                    signature: o,
                    types: s,
                  })) ?? null
                );
              },
              queryKey: ["verifyTypedData", (0, o.OP)(t)],
            };
          })(h, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : p,
          }),
          m = !!(
            r &&
            i &&
            l &&
            d &&
            f &&
            (null === (t = y.enabled) || void 0 === t || t)
          );
        return (0, s.aM)({ ...y, ...v, enabled: m });
      }
    },
    2398: function (e, t, n) {
      "use strict";
      n.d(t, {
        useWaitForTransactionReceipt: function () {
          return u;
        },
      });
      var r = n(93184),
        i = n(27534),
        a = n(24432),
        o = n(44005),
        s = n(12364);
      function u() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: u, query: c = {} } = n,
          l = (0, s.useConfig)(n),
          d = (0, o.useChainId)({ config: l }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { hash: i, ...a } = n[1];
                if (!i) throw Error("hash is required");
                return (0, r.e)(e, { ...a, onReplaced: t.onReplaced, hash: i });
              },
              queryKey: (function (e = {}) {
                let { onReplaced: t, ...n } = e;
                return ["waitForTransactionReceipt", (0, i.OP)(n)];
              })(t),
            };
          })(l, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          y = !!(u && (null === (t = c.enabled) || void 0 === t || t));
        return (0, a.aM)({ ...c, ...f, enabled: y });
      }
    },
    37073: function (e, t, n) {
      "use strict";
      n.d(t, {
        useWalletClient: function () {
          return _;
        },
      });
      var r = n(29827),
        i = n(12363),
        a = n(59455);
      async function o(e, { chain: t }) {
        let {
          id: n,
          name: r,
          nativeCurrency: i,
          rpcUrls: o,
          blockExplorers: s,
        } = t;
        await e.request(
          {
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: (0, a.eC)(n),
                chainName: r,
                nativeCurrency: i,
                rpcUrls: o.default.http,
                blockExplorerUrls: s
                  ? Object.values(s).map(({ url: e }) => e)
                  : void 0,
              },
            ],
          },
          { dedupe: !0, retryCount: 0 }
        );
      }
      var s = n(79078),
        u = n(31669);
      async function c(e) {
        return e.account?.type === "local"
          ? [e.account.address]
          : (await e.request({ method: "eth_accounts" }, { dedupe: !0 })).map(
              (e) => (0, u.x)(e)
            );
      }
      async function l(e) {
        return await e.request(
          { method: "wallet_getPermissions" },
          { dedupe: !0 }
        );
      }
      var d = n(34467);
      async function f(e) {
        return (
          await e.request(
            { method: "eth_requestAccounts" },
            { dedupe: !0, retryCount: 0 }
          )
        ).map((e) => (0, u.K)(e));
      }
      async function y(e, t) {
        return e.request(
          { method: "wallet_requestPermissions", params: [t] },
          { retryCount: 0 }
        );
      }
      var h = n(9769),
        p = n(19443),
        v = n(70550),
        m = n(19775),
        g = n(65704),
        b = n(40402),
        w = n(92614),
        C = n(82645),
        I = n(54605);
      async function x(e, t) {
        let { account: n = e.account, chain: r = e.chain, ...o } = t;
        if (!n)
          throw new g.o({ docsPath: "/docs/actions/wallet/signTransaction" });
        let s = (0, m.T)(n);
        (0, I.F)({ account: s, ...t });
        let u = await (0, C.s)(e, i.L, "getChainId")({});
        null !== r && (0, b.q)({ currentChainId: u, chain: r });
        let c = r?.formatters || e.chain?.formatters,
          l = c?.transactionRequest?.format || w.tG;
        return s.signTransaction
          ? s.signTransaction(
              { ...o, chainId: u },
              { serializer: e.chain?.serializers?.transaction }
            )
          : await e.request(
              {
                method: "eth_signTransaction",
                params: [{ ...l(o), chainId: (0, a.eC)(u), from: s.address }],
              },
              { retryCount: 0 }
            );
      }
      var q = n(69133);
      async function E(e, { id: t }) {
        await e.request(
          {
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0, a.eC)(t) }],
          },
          { retryCount: 0 }
        );
      }
      var P = n(81821),
        k = n(50825);
      function T(e) {
        return {
          addChain: (t) => o(e, t),
          deployContract: (t) => (0, s.P)(e, t),
          getAddresses: () => c(e),
          getChainId: () => (0, i.L)(e),
          getPermissions: () => l(e),
          prepareTransactionRequest: (t) => (0, d.Z)(e, t),
          requestAddresses: () => f(e),
          requestPermissions: (t) => y(e, t),
          sendRawTransaction: (t) => (0, h.p)(e, t),
          sendTransaction: (t) => (0, p.T)(e, t),
          signMessage: (t) => (0, v.l)(e, t),
          signTransaction: (t) => x(e, t),
          signTypedData: (t) => (0, q.x)(e, t),
          switchChain: (t) => E(e, t),
          watchAsset: (t) => (0, P.d)(e, t),
          writeContract: (t) => (0, k.n)(e, t),
        };
      }
      var N = n(18849);
      async function F(e, t = {}) {
        let n = await (0, N.e)(e, t);
        return n.extend(T), n.extend(T);
      }
      var S = n(27534),
        K = n(2265),
        O = n(24432),
        B = n(64707),
        A = n(44005),
        M = n(12364);
      function _() {
        var e, t, n, i;
        let a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: o = {}, ...s } = a,
          u = (0, M.useConfig)(s),
          c = (0, r.NL)(),
          {
            address: l,
            connector: d,
            status: f,
          } = (0, B.useAccount)({ config: u }),
          y = (0, A.useChainId)({ config: u }),
          h = null !== (e = a.connector) && void 0 !== e ? e : d,
          { queryKey: p, ...v } = (function (e, t = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: n }) {
                let { connector: r } = t,
                  { connectorUid: i, scopeKey: a, ...o } = n[1];
                return F(e, { ...o, connector: r });
              },
              queryKey: (function (e = {}) {
                let { connector: t, ...n } = e;
                return [
                  "walletClient",
                  { ...(0, S.OP)(n), connectorUid: t?.uid },
                ];
              })(t),
            };
          })(u, {
            ...a,
            chainId: null !== (t = a.chainId) && void 0 !== t ? t : y,
            connector: null !== (n = a.connector) && void 0 !== n ? n : d,
          }),
          m = !!(
            ("connected" === f ||
              ("reconnecting" === f && (null == h ? void 0 : h.getProvider))) &&
            (null === (i = o.enabled) || void 0 === i || i)
          ),
          g = (0, K.useRef)(l);
        return (
          (0, K.useEffect)(() => {
            let e = g.current;
            !l && e
              ? (c.removeQueries({ queryKey: p }), (g.current = void 0))
              : l !== e &&
                (c.invalidateQueries({ queryKey: p }), (g.current = l));
          }, [l, c]),
          (0, O.aM)({
            ...o,
            ...v,
            queryKey: p,
            enabled: m,
            staleTime: Number.POSITIVE_INFINITY,
          })
        );
      }
    },
    67185: function (e, t, n) {
      "use strict";
      n.d(t, {
        useWatchAsset: function () {
          return c;
        },
      });
      var r = n(21770),
        i = n(81821),
        a = n(44199),
        o = n(18849);
      async function s(e, t) {
        let { connector: n, ...r } = t,
          s = await (0, o.e)(e, { connector: n });
        return (0, a.s)(s, i.d, "watchAsset")(r);
      }
      var u = n(12364);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          i =
            ((e = (0, u.useConfig)(t)),
            { mutationFn: (t) => s(e, t), mutationKey: ["watchAsset"] }),
          { mutate: a, mutateAsync: o, ...c } = (0, r.D)({ ...n, ...i });
        return { ...c, watchAsset: a, watchAssetAsync: o };
      }
    },
    13359: function (e, t, n) {
      "use strict";
      n.d(t, {
        useWatchBlockNumber: function () {
          return u;
        },
      });
      var r = n(2228),
        i = n(44199),
        a = n(2265),
        o = n(44005),
        s = n(12364);
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onBlockNumber: u, config: c, ...l } = t,
          d = (0, s.useConfig)(t),
          f = (0, o.useChainId)({ config: d }),
          y = null !== (e = t.chainId) && void 0 !== e ? e : f;
        (0, a.useEffect)(() => {
          if (n && u)
            return (function (e, t) {
              let n, a;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...s
                } = t,
                u = (t) => {
                  n && n();
                  let a = e.getClient({ chainId: t });
                  return (n = (0, i.s)(a, r.q, "watchBlockNumber")(s));
                },
                c = u(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (a = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => u(e)
                  )),
                () => {
                  c?.(), a?.();
                }
              );
            })(d, { ...l, chainId: y, onBlockNumber: u });
        }, [
          y,
          d,
          n,
          u,
          l.onError,
          l.emitMissed,
          l.emitOnBegin,
          l.poll,
          l.pollingInterval,
          l.syncConnectedChain,
        ]);
      }
    },
    49487: function (e, t, n) {
      "use strict";
      n.d(t, {
        useWatchBlocks: function () {
          return u;
        },
      });
      var r = n(45789),
        i = n(44199),
        a = n(2265),
        o = n(44005),
        s = n(12364);
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onBlock: u, config: c, ...l } = t,
          d = (0, s.useConfig)(t),
          f = (0, o.useChainId)({ config: d }),
          y = null !== (e = t.chainId) && void 0 !== e ? e : f;
        (0, a.useEffect)(() => {
          if (n && u)
            return (function (e, t) {
              let n, a;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...s
                } = t,
                u = (t) => {
                  n && n();
                  let a = e.getClient({ chainId: t });
                  return (n = (0, i.s)(a, r.p, "watchBlocks")(s));
                },
                c = u(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (a = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => u(e)
                  )),
                () => {
                  c?.(), a?.();
                }
              );
            })(d, { ...l, chainId: y, onBlock: u });
        }, [
          y,
          d,
          n,
          u,
          l.blockTag,
          l.emitMissed,
          l.emitOnBegin,
          l.includeTransactions,
          l.onError,
          l.poll,
          l.pollingInterval,
          l.syncConnectedChain,
        ]);
      }
    },
    43946: function (e, t, n) {
      "use strict";
      n.d(t, {
        useWatchContractEvent: function () {
          return u;
        },
      });
      var r = n(91583),
        i = n(44199),
        a = n(2265),
        o = n(44005),
        s = n(12364);
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onLogs: u, config: c, ...l } = t,
          d = (0, s.useConfig)(t),
          f = (0, o.useChainId)({ config: d }),
          y = null !== (e = t.chainId) && void 0 !== e ? e : f;
        (0, a.useEffect)(() => {
          if (n && u)
            return (function (e, t) {
              let n, a;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...s
                } = t,
                u = (t) => {
                  n && n();
                  let a = e.getClient({ chainId: t });
                  return (n = (0, i.s)(a, r.Y, "watchContractEvent")(s));
                },
                c = u(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (a = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => u(e)
                  )),
                () => {
                  c?.(), a?.();
                }
              );
            })(d, { ...l, chainId: y, onLogs: u });
        }, [
          y,
          d,
          n,
          u,
          l.abi,
          l.address,
          l.args,
          l.batch,
          l.eventName,
          l.fromBlock,
          l.onError,
          l.poll,
          l.pollingInterval,
          l.strict,
          l.syncConnectedChain,
        ]);
      }
    },
    2724: function (e, t, n) {
      "use strict";
      n.d(t, {
        useWatchPendingTransactions: function () {
          return u;
        },
      });
      var r = n(1337),
        i = n(44199),
        a = n(2265),
        o = n(44005),
        s = n(12364);
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onTransactions: u, config: c, ...l } = t,
          d = (0, s.useConfig)(t),
          f = (0, o.useChainId)({ config: d }),
          y = null !== (e = t.chainId) && void 0 !== e ? e : f;
        (0, a.useEffect)(() => {
          if (n && u)
            return (function (e, t) {
              let n, a;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...s
                } = t,
                u = (t) => {
                  n && n();
                  let a = e.getClient({ chainId: t });
                  return (n = (0, i.s)(a, r.O, "watchPendingTransactions")(s));
                },
                c = u(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (a = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => u(e)
                  )),
                () => {
                  c?.(), a?.();
                }
              );
            })(d, { ...l, chainId: y, onTransactions: u });
        }, [
          y,
          d,
          n,
          u,
          l.batch,
          l.onError,
          l.poll,
          l.pollingInterval,
          l.syncConnectedChain,
        ]);
      }
    },
    78787: function (e, t, n) {
      "use strict";
      n.d(t, {
        useWriteContract: function () {
          return o;
        },
      });
      var r = n(21770),
        i = n(18470),
        a = n(12364);
      function o() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          o =
            ((e = (0, a.useConfig)(t)),
            {
              mutationFn: (t) => (0, i.n)(e, t),
              mutationKey: ["writeContract"],
            }),
          { mutate: s, mutateAsync: u, ...c } = (0, r.D)({ ...n, ...o });
        return { ...c, writeContract: s, writeContractAsync: u };
      }
    },
    24432: function (e, t, n) {
      "use strict";
      n.d(t, {
        NS: function () {
          return s;
        },
        aM: function () {
          return o;
        },
      });
      var r = n(71632),
        i = n(2868),
        a = n(27534);
      function o(e) {
        let t = (0, r.a)({ ...e, queryKeyHashFn: a.kq });
        return (t.queryKey = e.queryKey), t;
      }
      function s(e) {
        let t = (0, i.N)({ ...e, queryKeyHashFn: a.kq });
        return (t.queryKey = e.queryKey), t;
      }
    },
  },
]);
