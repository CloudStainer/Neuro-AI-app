"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6182],
  {
    27648: function (e, t, n) {
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(72972),
        i = n.n(r);
    },
    6741: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    98575: function (e, t, n) {
      n.d(t, {
        F: function () {
          return i;
        },
        e: function () {
          return o;
        },
      });
      var r = n(2265);
      function i(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function o(...e) {
        return r.useCallback(i(...e), e);
      }
    },
    73966: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(2265),
        i = n(57437);
      function o(e, t = []) {
        let n = [],
          o = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let i = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: i } }),
                [n, i]
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let l = r.createContext(o),
                u = n.length;
              function a(t) {
                let { scope: n, children: o, ...a } = t,
                  s = n?.[e][u] || l,
                  c = r.useMemo(() => a, Object.values(a));
                return (0, i.jsx)(s.Provider, { value: c, children: o });
              }
              return (
                (n = [...n, o]),
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (n, i) {
                    let a = i?.[e][u] || l,
                      s = r.useContext(a);
                    if (s) return s;
                    if (void 0 !== o) return o;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let i = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let i = n(e)[`__scope${r}`];
                    return { ...t, ...i };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: i }),
                    [i]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(o, ...t),
          ]
        );
      }
    },
    15278: function (e, t, n) {
      n.d(t, {
        XB: function () {
          return d;
        },
      });
      var r,
        i = n(2265),
        o = n(6741),
        l = n(66840),
        u = n(98575),
        a = n(26606),
        s = n(57437),
        c = "dismissableLayer.update",
        f = i.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        d = i.forwardRef((e, t) => {
          var n, d;
          let {
              disableOutsidePointerEvents: h = !1,
              onEscapeKeyDown: v,
              onPointerDownOutside: g,
              onFocusOutside: y,
              onInteractOutside: w,
              onDismiss: b,
              ...x
            } = e,
            E = i.useContext(f),
            [R, A] = i.useState(null),
            O =
              null !== (d = null == R ? void 0 : R.ownerDocument) &&
              void 0 !== d
                ? d
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, C] = i.useState({}),
            L = (0, u.e)(t, (e) => A(e)),
            P = Array.from(E.layers),
            [T] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            N = P.indexOf(T),
            S = R ? P.indexOf(R) : -1,
            D = E.layersWithOutsidePointerEventsDisabled.size > 0,
            W = S >= N,
            k = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, a.W)(e),
                o = i.useRef(!1),
                l = i.useRef(() => {});
              return (
                i.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            m("dismissableLayer.pointerDownOutside", r, i, {
                              discrete: !0,
                            });
                          },
                          i = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", l.current),
                            (l.current = t),
                            n.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", l.current);
                      o.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", l.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...E.branches].some((e) => e.contains(t));
              !W ||
                n ||
                (null == g || g(e),
                null == w || w(e),
                e.defaultPrevented || null == b || b());
            }, O),
            M = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, a.W)(e),
                o = i.useRef(!1);
              return (
                i.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      m(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (o.current = !0),
                  onBlurCapture: () => (o.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...E.branches].some((e) => e.contains(t)) ||
                (null == y || y(e),
                null == w || w(e),
                e.defaultPrevented || null == b || b());
            }, O);
          return (
            !(function (e, t = globalThis?.document) {
              let n = (0, a.W)(e);
              i.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              S !== E.layers.size - 1 ||
                (null == v || v(e),
                !e.defaultPrevented && b && (e.preventDefault(), b()));
            }, O),
            i.useEffect(() => {
              if (R)
                return (
                  h &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = O.body.style.pointerEvents),
                      (O.body.style.pointerEvents = "none")),
                    E.layersWithOutsidePointerEventsDisabled.add(R)),
                  E.layers.add(R),
                  p(),
                  () => {
                    h &&
                      1 === E.layersWithOutsidePointerEventsDisabled.size &&
                      (O.body.style.pointerEvents = r);
                  }
                );
            }, [R, O, h, E]),
            i.useEffect(
              () => () => {
                R &&
                  (E.layers.delete(R),
                  E.layersWithOutsidePointerEventsDisabled.delete(R),
                  p());
              },
              [R, E]
            ),
            i.useEffect(() => {
              let e = () => C({});
              return (
                document.addEventListener(c, e),
                () => document.removeEventListener(c, e)
              );
            }, []),
            (0, s.jsx)(l.WV.div, {
              ...x,
              ref: L,
              style: {
                pointerEvents: D ? (W ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, o.M)(e.onFocusCapture, M.onFocusCapture),
              onBlurCapture: (0, o.M)(e.onBlurCapture, M.onBlurCapture),
              onPointerDownCapture: (0, o.M)(
                e.onPointerDownCapture,
                k.onPointerDownCapture
              ),
            })
          );
        });
      function p() {
        let e = new CustomEvent(c);
        document.dispatchEvent(e);
      }
      function m(e, t, n, r) {
        let { discrete: i } = r,
          o = n.originalEvent.target,
          u = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          i ? (0, l.jH)(o, u) : o.dispatchEvent(u);
      }
      (d.displayName = "DismissableLayer"),
        (i.forwardRef((e, t) => {
          let n = i.useContext(f),
            r = i.useRef(null),
            o = (0, u.e)(t, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, s.jsx)(l.WV.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch");
    },
    35345: function (e, t, n) {
      n.d(t, {
        ee: function () {
          return eX;
        },
        Eh: function () {
          return eZ;
        },
        VY: function () {
          return eq;
        },
        fC: function () {
          return eY;
        },
        D7: function () {
          return eN;
        },
      });
      var r = n(2265);
      let i = ["top", "right", "bottom", "left"],
        o = Math.min,
        l = Math.max,
        u = Math.round,
        a = Math.floor,
        s = (e) => ({ x: e, y: e }),
        c = { left: "right", right: "left", bottom: "top", top: "bottom" },
        f = { start: "end", end: "start" };
      function d(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split("-")[0];
      }
      function m(e) {
        return e.split("-")[1];
      }
      function h(e) {
        return "x" === e ? "y" : "x";
      }
      function v(e) {
        return "y" === e ? "height" : "width";
      }
      function g(e) {
        return ["top", "bottom"].includes(p(e)) ? "y" : "x";
      }
      function y(e) {
        return e.replace(/start|end/g, (e) => f[e]);
      }
      function w(e) {
        return e.replace(/left|right|bottom|top/g, (e) => c[e]);
      }
      function b(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function x(e) {
        let { x: t, y: n, width: r, height: i } = e;
        return {
          width: r,
          height: i,
          top: n,
          left: t,
          right: t + r,
          bottom: n + i,
          x: t,
          y: n,
        };
      }
      function E(e, t, n) {
        let r,
          { reference: i, floating: o } = e,
          l = g(t),
          u = h(g(t)),
          a = v(u),
          s = p(t),
          c = "y" === l,
          f = i.x + i.width / 2 - o.width / 2,
          d = i.y + i.height / 2 - o.height / 2,
          y = i[a] / 2 - o[a] / 2;
        switch (s) {
          case "top":
            r = { x: f, y: i.y - o.height };
            break;
          case "bottom":
            r = { x: f, y: i.y + i.height };
            break;
          case "right":
            r = { x: i.x + i.width, y: d };
            break;
          case "left":
            r = { x: i.x - o.width, y: d };
            break;
          default:
            r = { x: i.x, y: i.y };
        }
        switch (m(t)) {
          case "start":
            r[u] -= y * (n && c ? -1 : 1);
            break;
          case "end":
            r[u] += y * (n && c ? -1 : 1);
        }
        return r;
      }
      let R = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: i = "absolute",
            middleware: o = [],
            platform: l,
          } = n,
          u = o.filter(Boolean),
          a = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          s = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: c, y: f } = E(s, r, a),
          d = r,
          p = {},
          m = 0;
        for (let n = 0; n < u.length; n++) {
          let { name: o, fn: h } = u[n],
            {
              x: v,
              y: g,
              data: y,
              reset: w,
            } = await h({
              x: c,
              y: f,
              initialPlacement: r,
              placement: d,
              strategy: i,
              middlewareData: p,
              rects: s,
              platform: l,
              elements: { reference: e, floating: t },
            });
          (c = null != v ? v : c),
            (f = null != g ? g : f),
            (p = { ...p, [o]: { ...p[o], ...y } }),
            w &&
              m <= 50 &&
              (m++,
              "object" == typeof w &&
                (w.placement && (d = w.placement),
                w.rects &&
                  (s =
                    !0 === w.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : w.rects),
                ({ x: c, y: f } = E(s, d, a))),
              (n = -1));
        }
        return { x: c, y: f, placement: d, strategy: i, middlewareData: p };
      };
      async function A(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: i, platform: o, rects: l, elements: u, strategy: a } = e,
          {
            boundary: s = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: f = "floating",
            altBoundary: p = !1,
            padding: m = 0,
          } = d(t, e),
          h = b(m),
          v = u[p ? ("floating" === f ? "reference" : "floating") : f],
          g = x(
            await o.getClippingRect({
              element:
                null ==
                  (n = await (null == o.isElement ? void 0 : o.isElement(v))) ||
                n
                  ? v
                  : v.contextElement ||
                    (await (null == o.getDocumentElement
                      ? void 0
                      : o.getDocumentElement(u.floating))),
              boundary: s,
              rootBoundary: c,
              strategy: a,
            })
          ),
          y =
            "floating" === f
              ? {
                  x: r,
                  y: i,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          w = await (null == o.getOffsetParent
            ? void 0
            : o.getOffsetParent(u.floating)),
          E = ((await (null == o.isElement ? void 0 : o.isElement(w))) &&
            (await (null == o.getScale ? void 0 : o.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          R = x(
            o.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: u,
                  rect: y,
                  offsetParent: w,
                  strategy: a,
                })
              : y
          );
        return {
          top: (g.top - R.top + h.top) / E.y,
          bottom: (R.bottom - g.bottom + h.bottom) / E.y,
          left: (g.left - R.left + h.left) / E.x,
          right: (R.right - g.right + h.right) / E.x,
        };
      }
      function O(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function C(e) {
        return i.some((t) => e[t] >= 0);
      }
      async function L(e, t) {
        let { placement: n, platform: r, elements: i } = e,
          o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)),
          l = p(n),
          u = m(n),
          a = "y" === g(n),
          s = ["left", "top"].includes(l) ? -1 : 1,
          c = o && a ? -1 : 1,
          f = d(t, e),
          {
            mainAxis: h,
            crossAxis: v,
            alignmentAxis: y,
          } = "number" == typeof f
            ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: f.mainAxis || 0,
                crossAxis: f.crossAxis || 0,
                alignmentAxis: f.alignmentAxis,
              };
        return (
          u && "number" == typeof y && (v = "end" === u ? -1 * y : y),
          a ? { x: v * c, y: h * s } : { x: h * s, y: v * c }
        );
      }
      function P() {
        return "undefined" != typeof window;
      }
      function T(e) {
        return D(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function N(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function S(e) {
        var t;
        return null ==
          (t = (D(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function D(e) {
        return !!P() && (e instanceof Node || e instanceof N(e).Node);
      }
      function W(e) {
        return !!P() && (e instanceof Element || e instanceof N(e).Element);
      }
      function k(e) {
        return (
          !!P() && (e instanceof HTMLElement || e instanceof N(e).HTMLElement)
        );
      }
      function M(e) {
        return (
          !!P() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof N(e).ShadowRoot)
        );
      }
      function j(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: i } = B(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(i)
        );
      }
      function H(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function F(e) {
        let t = V(),
          n = W(e) ? B(e) : e;
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function V() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function z(e) {
        return ["html", "body", "#document"].includes(T(e));
      }
      function B(e) {
        return N(e).getComputedStyle(e);
      }
      function _(e) {
        return W(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function I(e) {
        if ("html" === T(e)) return e;
        let t = e.assignedSlot || e.parentNode || (M(e) && e.host) || S(e);
        return M(t) ? t.host : t;
      }
      function U(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let i = (function e(t) {
            let n = I(t);
            return z(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : k(n) && j(n)
              ? n
              : e(n);
          })(e),
          o = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = N(i);
        if (o) {
          let e = $(l);
          return t.concat(
            l,
            l.visualViewport || [],
            j(i) ? i : [],
            e && n ? U(e) : []
          );
        }
        return t.concat(i, U(i, [], n));
      }
      function $(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function Y(e) {
        let t = B(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          i = k(e),
          o = i ? e.offsetWidth : n,
          l = i ? e.offsetHeight : r,
          a = u(n) !== o || u(r) !== l;
        return a && ((n = o), (r = l)), { width: n, height: r, $: a };
      }
      function X(e) {
        return W(e) ? e : e.contextElement;
      }
      function q(e) {
        let t = X(e);
        if (!k(t)) return s(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: i, $: o } = Y(t),
          l = (o ? u(n.width) : n.width) / r,
          a = (o ? u(n.height) : n.height) / i;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: l, y: a }
        );
      }
      let Z = s(0);
      function G(e) {
        let t = N(e);
        return V() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : Z;
      }
      function J(e, t, n, r) {
        var i;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let o = e.getBoundingClientRect(),
          l = X(e),
          u = s(1);
        t && (r ? W(r) && (u = q(r)) : (u = q(e)));
        let a = (void 0 === (i = n) && (i = !1), r && (!i || r === N(l)) && i)
            ? G(l)
            : s(0),
          c = (o.left + a.x) / u.x,
          f = (o.top + a.y) / u.y,
          d = o.width / u.x,
          p = o.height / u.y;
        if (l) {
          let e = N(l),
            t = r && W(r) ? N(r) : r,
            n = e,
            i = $(n);
          for (; i && r && t !== n; ) {
            let e = q(i),
              t = i.getBoundingClientRect(),
              r = B(i),
              o = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (f *= e.y),
              (d *= e.x),
              (p *= e.y),
              (c += o),
              (f += l),
              (i = $((n = N(i))));
          }
        }
        return x({ width: d, height: p, x: c, y: f });
      }
      function K(e, t) {
        let n = _(e).scrollLeft;
        return t ? t.left + n : J(S(e)).left + n;
      }
      function Q(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = N(e),
              r = S(e),
              i = n.visualViewport,
              o = r.clientWidth,
              l = r.clientHeight,
              u = 0,
              a = 0;
            if (i) {
              (o = i.width), (l = i.height);
              let e = V();
              (!e || (e && "fixed" === t)) &&
                ((u = i.offsetLeft), (a = i.offsetTop));
            }
            return { width: o, height: l, x: u, y: a };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = S(e),
              n = _(e),
              r = e.ownerDocument.body,
              i = l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              o = l(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              u = -n.scrollLeft + K(e),
              a = -n.scrollTop;
            return (
              "rtl" === B(r).direction &&
                (u += l(t.clientWidth, r.clientWidth) - i),
              { width: i, height: o, x: u, y: a }
            );
          })(S(e));
        else if (W(t))
          r = (function (e, t) {
            let n = J(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              i = n.left + e.clientLeft,
              o = k(e) ? q(e) : s(1),
              l = e.clientWidth * o.x;
            return {
              width: l,
              height: e.clientHeight * o.y,
              x: i * o.x,
              y: r * o.y,
            };
          })(t, n);
        else {
          let n = G(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return x(r);
      }
      function ee(e) {
        return "static" === B(e).position;
      }
      function et(e, t) {
        if (!k(e) || "fixed" === B(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return S(e) === n && (n = n.ownerDocument.body), n;
      }
      function en(e, t) {
        let n = N(e);
        if (H(e)) return n;
        if (!k(e)) {
          let t = I(e);
          for (; t && !z(t); ) {
            if (W(t) && !ee(t)) return t;
            t = I(t);
          }
          return n;
        }
        let r = et(e, t);
        for (; r && ["table", "td", "th"].includes(T(r)) && ee(r); )
          r = et(r, t);
        return r && z(r) && ee(r) && !F(r)
          ? n
          : r ||
              (function (e) {
                let t = I(e);
                for (; k(t) && !z(t); ) {
                  if (F(t)) return t;
                  if (H(t)) break;
                  t = I(t);
                }
                return null;
              })(e) ||
              n;
      }
      let er = async function (e) {
          let t = this.getOffsetParent || en,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = k(t),
                i = S(t),
                o = "fixed" === n,
                l = J(e, !0, o, t),
                u = { scrollLeft: 0, scrollTop: 0 },
                a = s(0);
              if (r || (!r && !o)) {
                if ((("body" !== T(t) || j(i)) && (u = _(t)), r)) {
                  let e = J(t, !0, o, t);
                  (a.x = e.x + t.clientLeft), (a.y = e.y + t.clientTop);
                } else i && (a.x = K(i));
              }
              let c = 0,
                f = 0;
              if (i && !r && !o) {
                let e = i.getBoundingClientRect();
                (f = e.top + u.scrollTop),
                  (c = e.left + u.scrollLeft - K(i, e));
              }
              return {
                x: l.left + u.scrollLeft - a.x - c,
                y: l.top + u.scrollTop - a.y - f,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        ei = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
              o = "fixed" === i,
              l = S(r),
              u = !!t && H(t.floating);
            if (r === l || (u && o)) return n;
            let a = { scrollLeft: 0, scrollTop: 0 },
              c = s(1),
              f = s(0),
              d = k(r);
            if (
              (d || (!d && !o)) &&
              (("body" !== T(r) || j(l)) && (a = _(r)), k(r))
            ) {
              let e = J(r);
              (c = q(r)), (f.x = e.x + r.clientLeft), (f.y = e.y + r.clientTop);
            }
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - a.scrollLeft * c.x + f.x,
              y: n.y * c.y - a.scrollTop * c.y + f.y,
            };
          },
          getDocumentElement: S,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
              u = [
                ...("clippingAncestors" === n
                  ? H(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = U(e, [], !1).filter(
                            (e) => W(e) && "body" !== T(e)
                          ),
                          i = null,
                          o = "fixed" === B(e).position,
                          l = o ? I(e) : e;
                        for (; W(l) && !z(l); ) {
                          let t = B(l),
                            n = F(l);
                          n || "fixed" !== t.position || (i = null),
                            (
                              o
                                ? !n && !i
                                : (!n &&
                                    "static" === t.position &&
                                    !!i &&
                                    ["absolute", "fixed"].includes(
                                      i.position
                                    )) ||
                                  (j(l) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = I(t);
                                      return (
                                        !(r === n || !W(r) || z(r)) &&
                                        ("fixed" === B(r).position || e(r, n))
                                      );
                                    })(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (i = t),
                            (l = I(l));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              a = u[0],
              s = u.reduce((e, n) => {
                let r = Q(t, n, i);
                return (
                  (e.top = l(r.top, e.top)),
                  (e.right = o(r.right, e.right)),
                  (e.bottom = o(r.bottom, e.bottom)),
                  (e.left = l(r.left, e.left)),
                  e
                );
              }, Q(t, a, i));
            return {
              width: s.right - s.left,
              height: s.bottom - s.top,
              x: s.left,
              y: s.top,
            };
          },
          getOffsetParent: en,
          getElementRects: er,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = Y(e);
            return { width: t, height: n };
          },
          getScale: q,
          isElement: W,
          isRTL: function (e) {
            return "rtl" === B(e).direction;
          },
        },
        eo = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: i,
                rects: u,
                platform: a,
                elements: s,
                middlewareData: c,
              } = t,
              { element: f, padding: p = 0 } = d(e, t) || {};
            if (null == f) return {};
            let y = b(p),
              w = { x: n, y: r },
              x = h(g(i)),
              E = v(x),
              R = await a.getDimensions(f),
              A = "y" === x,
              O = A ? "clientHeight" : "clientWidth",
              C = u.reference[E] + u.reference[x] - w[x] - u.floating[E],
              L = w[x] - u.reference[x],
              P = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(f)),
              T = P ? P[O] : 0;
            (T && (await (null == a.isElement ? void 0 : a.isElement(P)))) ||
              (T = s.floating[O] || u.floating[E]);
            let N = T / 2 - R[E] / 2 - 1,
              S = o(y[A ? "top" : "left"], N),
              D = o(y[A ? "bottom" : "right"], N),
              W = T - R[E] - D,
              k = T / 2 - R[E] / 2 + (C / 2 - L / 2),
              M = l(S, o(k, W)),
              j =
                !c.arrow &&
                null != m(i) &&
                k !== M &&
                u.reference[E] / 2 - (k < S ? S : D) - R[E] / 2 < 0,
              H = j ? (k < S ? k - S : k - W) : 0;
            return {
              [x]: w[x] + H,
              data: {
                [x]: M,
                centerOffset: k - M - H,
                ...(j && { alignmentOffset: H }),
              },
              reset: j,
            };
          },
        }),
        el = (e, t, n) => {
          let r = new Map(),
            i = { platform: ei, ...n },
            o = { ...i.platform, _c: r };
          return R(e, t, { ...i, platform: o });
        };
      var eu = n(54887),
        ea = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function es(e, t) {
        let n, r, i;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!es(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, i[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = i[r];
            if (("_owner" !== n || !e.$$typeof) && !es(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ec(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ef(e, t) {
        let n = ec(e);
        return Math.round(t * n) / n;
      }
      function ed(e) {
        let t = r.useRef(e);
        return (
          ea(() => {
            t.current = e;
          }),
          t
        );
      }
      let ep = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? eo({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? eo({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        em = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: "offset",
              options: n,
              async fn(e) {
                var t, r;
                let { x: i, y: o, placement: l, middlewareData: u } = e,
                  a = await L(e, n);
                return l === (null == (t = u.offset) ? void 0 : t.placement) &&
                  null != (r = u.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: i + a.x, y: o + a.y, data: { ...a, placement: l } };
              },
            }),
            options: [e, t],
          };
        },
        eh = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "shift",
              options: n,
              async fn(e) {
                let { x: t, y: r, placement: i } = e,
                  {
                    mainAxis: u = !0,
                    crossAxis: a = !1,
                    limiter: s = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...c
                  } = d(n, e),
                  f = { x: t, y: r },
                  m = await A(e, c),
                  v = g(p(i)),
                  y = h(v),
                  w = f[y],
                  b = f[v];
                if (u) {
                  let e = "y" === y ? "top" : "left",
                    t = "y" === y ? "bottom" : "right",
                    n = w + m[e],
                    r = w - m[t];
                  w = l(n, o(w, r));
                }
                if (a) {
                  let e = "y" === v ? "top" : "left",
                    t = "y" === v ? "bottom" : "right",
                    n = b + m[e],
                    r = b - m[t];
                  b = l(n, o(b, r));
                }
                let x = s.fn({ ...e, [y]: w, [v]: b });
                return {
                  ...x,
                  data: { x: x.x - t, y: x.y - r, enabled: { [y]: u, [v]: a } },
                };
              },
            }),
            options: [e, t],
          };
        },
        ev = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              options: n,
              fn(e) {
                let {
                    x: t,
                    y: r,
                    placement: i,
                    rects: o,
                    middlewareData: l,
                  } = e,
                  {
                    offset: u = 0,
                    mainAxis: a = !0,
                    crossAxis: s = !0,
                  } = d(n, e),
                  c = { x: t, y: r },
                  f = g(i),
                  m = h(f),
                  v = c[m],
                  y = c[f],
                  w = d(u, e),
                  b =
                    "number" == typeof w
                      ? { mainAxis: w, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...w };
                if (a) {
                  let e = "y" === m ? "height" : "width",
                    t = o.reference[m] - o.floating[e] + b.mainAxis,
                    n = o.reference[m] + o.reference[e] - b.mainAxis;
                  v < t ? (v = t) : v > n && (v = n);
                }
                if (s) {
                  var x, E;
                  let e = "y" === m ? "width" : "height",
                    t = ["top", "left"].includes(p(i)),
                    n =
                      o.reference[f] -
                      o.floating[e] +
                      ((t && (null == (x = l.offset) ? void 0 : x[f])) || 0) +
                      (t ? 0 : b.crossAxis),
                    r =
                      o.reference[f] +
                      o.reference[e] +
                      (t ? 0 : (null == (E = l.offset) ? void 0 : E[f]) || 0) -
                      (t ? b.crossAxis : 0);
                  y < n ? (y = n) : y > r && (y = r);
                }
                return { [m]: v, [f]: y };
              },
            }),
            options: [e, t],
          };
        },
        eg = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "flip",
              options: n,
              async fn(e) {
                var t, r, i, o, l;
                let {
                    placement: u,
                    middlewareData: a,
                    rects: s,
                    initialPlacement: c,
                    platform: f,
                    elements: b,
                  } = e,
                  {
                    mainAxis: x = !0,
                    crossAxis: E = !0,
                    fallbackPlacements: R,
                    fallbackStrategy: O = "bestFit",
                    fallbackAxisSideDirection: C = "none",
                    flipAlignment: L = !0,
                    ...P
                  } = d(n, e);
                if (null != (t = a.arrow) && t.alignmentOffset) return {};
                let T = p(u),
                  N = g(c),
                  S = p(c) === c,
                  D = await (null == f.isRTL ? void 0 : f.isRTL(b.floating)),
                  W =
                    R ||
                    (S || !L
                      ? [w(c)]
                      : (function (e) {
                          let t = w(e);
                          return [y(e), t, y(t)];
                        })(c)),
                  k = "none" !== C;
                !R &&
                  k &&
                  W.push(
                    ...(function (e, t, n, r) {
                      let i = m(e),
                        o = (function (e, t, n) {
                          let r = ["left", "right"],
                            i = ["right", "left"];
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? i : r;
                              return t ? r : i;
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(p(e), "start" === n, r);
                      return (
                        i &&
                          ((o = o.map((e) => e + "-" + i)),
                          t && (o = o.concat(o.map(y)))),
                        o
                      );
                    })(c, L, C, D)
                  );
                let M = [c, ...W],
                  j = await A(e, P),
                  H = [],
                  F = (null == (r = a.flip) ? void 0 : r.overflows) || [];
                if ((x && H.push(j[T]), E)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = m(e),
                      i = h(g(e)),
                      o = v(i),
                      l =
                        "x" === i
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                          ? "bottom"
                          : "top";
                    return (
                      t.reference[o] > t.floating[o] && (l = w(l)), [l, w(l)]
                    );
                  })(u, s, D);
                  H.push(j[e[0]], j[e[1]]);
                }
                if (
                  ((F = [...F, { placement: u, overflows: H }]),
                  !H.every((e) => e <= 0))
                ) {
                  let e = ((null == (i = a.flip) ? void 0 : i.index) || 0) + 1,
                    t = M[e];
                  if (t)
                    return {
                      data: { index: e, overflows: F },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (o = F.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : o.placement;
                  if (!n)
                    switch (O) {
                      case "bestFit": {
                        let e =
                          null ==
                          (l = F.filter((e) => {
                            if (k) {
                              let t = g(e.placement);
                              return t === N || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : l[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = c;
                    }
                  if (u !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }),
            options: [e, t],
          };
        },
        ey = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "size",
              options: n,
              async fn(e) {
                var t, r;
                let i, u;
                let { placement: a, rects: s, platform: c, elements: f } = e,
                  { apply: h = () => {}, ...v } = d(n, e),
                  y = await A(e, v),
                  w = p(a),
                  b = m(a),
                  x = "y" === g(a),
                  { width: E, height: R } = s.floating;
                "top" === w || "bottom" === w
                  ? ((i = w),
                    (u =
                      b ===
                      ((await (null == c.isRTL ? void 0 : c.isRTL(f.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((u = w), (i = "end" === b ? "top" : "bottom"));
                let O = R - y.top - y.bottom,
                  C = E - y.left - y.right,
                  L = o(R - y[i], O),
                  P = o(E - y[u], C),
                  T = !e.middlewareData.shift,
                  N = L,
                  S = P;
                if (
                  (null != (t = e.middlewareData.shift) &&
                    t.enabled.x &&
                    (S = C),
                  null != (r = e.middlewareData.shift) &&
                    r.enabled.y &&
                    (N = O),
                  T && !b)
                ) {
                  let e = l(y.left, 0),
                    t = l(y.right, 0),
                    n = l(y.top, 0),
                    r = l(y.bottom, 0);
                  x
                    ? (S =
                        E -
                        2 * (0 !== e || 0 !== t ? e + t : l(y.left, y.right)))
                    : (N =
                        R -
                        2 * (0 !== n || 0 !== r ? n + r : l(y.top, y.bottom)));
                }
                await h({ ...e, availableWidth: S, availableHeight: N });
                let D = await c.getDimensions(f.floating);
                return E !== D.width || R !== D.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }),
            options: [e, t],
          };
        },
        ew = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "hide",
              options: n,
              async fn(e) {
                let { rects: t } = e,
                  { strategy: r = "referenceHidden", ...i } = d(n, e);
                switch (r) {
                  case "referenceHidden": {
                    let n = O(
                      await A(e, { ...i, elementContext: "reference" }),
                      t.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: n,
                        referenceHidden: C(n),
                      },
                    };
                  }
                  case "escaped": {
                    let n = O(
                      await A(e, { ...i, altBoundary: !0 }),
                      t.floating
                    );
                    return { data: { escapedOffsets: n, escaped: C(n) } };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [e, t],
          };
        },
        eb = (e, t) => ({ ...ep(e), options: [e, t] });
      var ex = n(66840),
        eE = n(57437),
        eR = r.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: i = 5, ...o } = e;
          return (0, eE.jsx)(ex.WV.svg, {
            ...o,
            ref: t,
            width: r,
            height: i,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, eE.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      eR.displayName = "Arrow";
      var eA = n(98575),
        eO = n(73966),
        eC = n(26606),
        eL = n(61188),
        eP = "Popper",
        [eT, eN] = (0, eO.b)(eP),
        [eS, eD] = eT(eP),
        eW = (e) => {
          let { __scopePopper: t, children: n } = e,
            [i, o] = r.useState(null);
          return (0, eE.jsx)(eS, {
            scope: t,
            anchor: i,
            onAnchorChange: o,
            children: n,
          });
        };
      eW.displayName = eP;
      var ek = "PopperAnchor",
        eM = r.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: i, ...o } = e,
            l = eD(ek, n),
            u = r.useRef(null),
            a = (0, eA.e)(t, u);
          return (
            r.useEffect(() => {
              l.onAnchorChange((null == i ? void 0 : i.current) || u.current);
            }),
            i ? null : (0, eE.jsx)(ex.WV.div, { ...o, ref: a })
          );
        });
      eM.displayName = ek;
      var ej = "PopperContent",
        [eH, eF] = eT(ej),
        eV = r.forwardRef((e, t) => {
          var n, i, u, s, c, f, d, p;
          let {
              __scopePopper: m,
              side: h = "bottom",
              sideOffset: v = 0,
              align: g = "center",
              alignOffset: y = 0,
              arrowPadding: w = 0,
              avoidCollisions: b = !0,
              collisionBoundary: x = [],
              collisionPadding: E = 0,
              sticky: R = "partial",
              hideWhenDetached: A = !1,
              updatePositionStrategy: O = "optimized",
              onPlaced: C,
              ...L
            } = e,
            P = eD(ej, m),
            [T, N] = r.useState(null),
            D = (0, eA.e)(t, (e) => N(e)),
            [W, k] = r.useState(null),
            M = (function (e) {
              let [t, n] = r.useState(void 0);
              return (
                (0, eL.b)(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, i;
                      if (!Array.isArray(t) || !t.length) return;
                      let o = t[0];
                      if ("borderBoxSize" in o) {
                        let e = o.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (i = t.blockSize);
                      } else (r = e.offsetWidth), (i = e.offsetHeight);
                      n({ width: r, height: i });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(W),
            j =
              null !== (d = null == M ? void 0 : M.width) && void 0 !== d
                ? d
                : 0,
            H =
              null !== (p = null == M ? void 0 : M.height) && void 0 !== p
                ? p
                : 0,
            F =
              "number" == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            V = Array.isArray(x) ? x : [x],
            z = V.length > 0,
            B = { padding: F, boundary: V.filter(eI), altBoundary: z },
            {
              refs: _,
              floatingStyles: I,
              placement: $,
              isPositioned: Y,
              middlewareData: q,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: i = [],
                  platform: o,
                  elements: { reference: l, floating: u } = {},
                  transform: a = !0,
                  whileElementsMounted: s,
                  open: c,
                } = e,
                [f, d] = r.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, m] = r.useState(i);
              es(p, i) || m(i);
              let [h, v] = r.useState(null),
                [g, y] = r.useState(null),
                w = r.useCallback((e) => {
                  e !== R.current && ((R.current = e), v(e));
                }, []),
                b = r.useCallback((e) => {
                  e !== A.current && ((A.current = e), y(e));
                }, []),
                x = l || h,
                E = u || g,
                R = r.useRef(null),
                A = r.useRef(null),
                O = r.useRef(f),
                C = null != s,
                L = ed(s),
                P = ed(o),
                T = ed(c),
                N = r.useCallback(() => {
                  if (!R.current || !A.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  P.current && (e.platform = P.current),
                    el(R.current, A.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== T.current };
                      S.current &&
                        !es(O.current, t) &&
                        ((O.current = t),
                        eu.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [p, t, n, P, T]);
              ea(() => {
                !1 === c &&
                  O.current.isPositioned &&
                  ((O.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [c]);
              let S = r.useRef(!1);
              ea(
                () => (
                  (S.current = !0),
                  () => {
                    S.current = !1;
                  }
                ),
                []
              ),
                ea(() => {
                  if ((x && (R.current = x), E && (A.current = E), x && E)) {
                    if (L.current) return L.current(x, E, N);
                    N();
                  }
                }, [x, E, N, L, C]);
              let D = r.useMemo(
                  () => ({
                    reference: R,
                    floating: A,
                    setReference: w,
                    setFloating: b,
                  }),
                  [w, b]
                ),
                W = r.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                k = r.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!W.floating) return e;
                  let t = ef(W.floating, f.x),
                    r = ef(W.floating, f.y);
                  return a
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(ec(W.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, a, W.floating, f.x, f.y]);
              return r.useMemo(
                () => ({
                  ...f,
                  update: N,
                  refs: D,
                  elements: W,
                  floatingStyles: k,
                }),
                [f, N, D, W, k]
              );
            })({
              strategy: "fixed",
              placement: h + ("center" !== g ? "-" + g : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let i;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: u = !0,
                      ancestorResize: s = !0,
                      elementResize: c = "function" == typeof ResizeObserver,
                      layoutShift: f = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: d = !1,
                    } = r,
                    p = X(e),
                    m = u || s ? [...(p ? U(p) : []), ...U(t)] : [];
                  m.forEach((e) => {
                    u && e.addEventListener("scroll", n, { passive: !0 }),
                      s && e.addEventListener("resize", n);
                  });
                  let h =
                      p && f
                        ? (function (e, t) {
                            let n,
                              r = null,
                              i = S(e);
                            function u() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function s(c, f) {
                                void 0 === c && (c = !1),
                                  void 0 === f && (f = 1),
                                  u();
                                let {
                                  left: d,
                                  top: p,
                                  width: m,
                                  height: h,
                                } = e.getBoundingClientRect();
                                if ((c || t(), !m || !h)) return;
                                let v = a(p),
                                  g = a(i.clientWidth - (d + m)),
                                  y = {
                                    rootMargin:
                                      -v +
                                      "px " +
                                      -g +
                                      "px " +
                                      -a(i.clientHeight - (p + h)) +
                                      "px " +
                                      -a(d) +
                                      "px",
                                    threshold: l(0, o(1, f)) || 1,
                                  },
                                  w = !0;
                                function b(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== f) {
                                    if (!w) return s();
                                    t
                                      ? s(!1, t)
                                      : (n = setTimeout(() => {
                                          s(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  w = !1;
                                }
                                try {
                                  r = new IntersectionObserver(b, {
                                    ...y,
                                    root: i.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(b, y);
                                }
                                r.observe(e);
                              })(!0),
                              u
                            );
                          })(p, n)
                        : null,
                    v = -1,
                    g = null;
                  c &&
                    ((g = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === p &&
                        g &&
                        (g.unobserve(t),
                        cancelAnimationFrame(v),
                        (v = requestAnimationFrame(() => {
                          var e;
                          null == (e = g) || e.observe(t);
                        }))),
                        n();
                    })),
                    p && !d && g.observe(p),
                    g.observe(t));
                  let y = d ? J(e) : null;
                  return (
                    d &&
                      (function t() {
                        let r = J(e);
                        y &&
                          (r.x !== y.x ||
                            r.y !== y.y ||
                            r.width !== y.width ||
                            r.height !== y.height) &&
                          n(),
                          (y = r),
                          (i = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      m.forEach((e) => {
                        u && e.removeEventListener("scroll", n),
                          s && e.removeEventListener("resize", n);
                      }),
                        null == h || h(),
                        null == (e = g) || e.disconnect(),
                        (g = null),
                        d && cancelAnimationFrame(i);
                    }
                  );
                })(...t, { animationFrame: "always" === O });
              },
              elements: { reference: P.anchor },
              middleware: [
                em({ mainAxis: v + H, alignmentAxis: y }),
                b &&
                  eh({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === R ? ev() : void 0,
                    ...B,
                  }),
                b && eg({ ...B }),
                ey({
                  ...B,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: i,
                      } = e,
                      { width: o, height: l } = n.reference,
                      u = t.floating.style;
                    u.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      u.setProperty(
                        "--radix-popper-available-height",
                        "".concat(i, "px")
                      ),
                      u.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(o, "px")
                      ),
                      u.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(l, "px")
                      );
                  },
                }),
                W && eb({ element: W, padding: w }),
                eU({ arrowWidth: j, arrowHeight: H }),
                A && ew({ strategy: "referenceHidden", ...B }),
              ],
            }),
            [Z, G] = e$($),
            K = (0, eC.W)(C);
          (0, eL.b)(() => {
            Y && (null == K || K());
          }, [Y, K]);
          let Q = null === (n = q.arrow) || void 0 === n ? void 0 : n.x,
            ee = null === (i = q.arrow) || void 0 === i ? void 0 : i.y,
            et =
              (null === (u = q.arrow) || void 0 === u
                ? void 0
                : u.centerOffset) !== 0,
            [en, er] = r.useState();
          return (
            (0, eL.b)(() => {
              T && er(window.getComputedStyle(T).zIndex);
            }, [T]),
            (0, eE.jsx)("div", {
              ref: _.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...I,
                transform: Y ? I.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: en,
                "--radix-popper-transform-origin": [
                  null === (s = q.transformOrigin) || void 0 === s
                    ? void 0
                    : s.x,
                  null === (c = q.transformOrigin) || void 0 === c
                    ? void 0
                    : c.y,
                ].join(" "),
                ...((null === (f = q.hide) || void 0 === f
                  ? void 0
                  : f.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, eE.jsx)(eH, {
                scope: m,
                placedSide: Z,
                onArrowChange: k,
                arrowX: Q,
                arrowY: ee,
                shouldHideArrow: et,
                children: (0, eE.jsx)(ex.WV.div, {
                  "data-side": Z,
                  "data-align": G,
                  ...L,
                  ref: D,
                  style: { ...L.style, animation: Y ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      eV.displayName = ej;
      var ez = "PopperArrow",
        eB = { top: "bottom", right: "left", bottom: "top", left: "right" },
        e_ = r.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            i = eF(ez, n),
            o = eB[i.placedSide];
          return (0,
          eE.jsx)("span", { ref: i.onArrowChange, style: { position: "absolute", left: i.arrowX, top: i.arrowY, [o]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[i.placedSide], visibility: i.shouldHideArrow ? "hidden" : void 0 }, children: (0, eE.jsx)(eR, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function eI(e) {
        return null !== e;
      }
      e_.displayName = ez;
      var eU = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, i, o, l;
          let { placement: u, rects: a, middlewareData: s } = t,
            c =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            f = c ? 0 : e.arrowWidth,
            d = c ? 0 : e.arrowHeight,
            [p, m] = e$(u),
            h = { start: "0%", center: "50%", end: "100%" }[m],
            v =
              (null !==
                (o = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== o
                ? o
                : 0) +
              f / 2,
            g =
              (null !==
                (l = null === (i = s.arrow) || void 0 === i ? void 0 : i.y) &&
              void 0 !== l
                ? l
                : 0) +
              d / 2,
            y = "",
            w = "";
          return (
            "bottom" === p
              ? ((y = c ? h : "".concat(v, "px")), (w = "".concat(-d, "px")))
              : "top" === p
              ? ((y = c ? h : "".concat(v, "px")),
                (w = "".concat(a.floating.height + d, "px")))
              : "right" === p
              ? ((y = "".concat(-d, "px")), (w = c ? h : "".concat(g, "px")))
              : "left" === p &&
                ((y = "".concat(a.floating.width + d, "px")),
                (w = c ? h : "".concat(g, "px"))),
            { data: { x: y, y: w } }
          );
        },
      });
      function e$(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var eY = eW,
        eX = eM,
        eq = eV,
        eZ = e_;
    },
    83832: function (e, t, n) {
      n.d(t, {
        h: function () {
          return a;
        },
      });
      var r = n(2265),
        i = n(54887),
        o = n(66840),
        l = n(61188),
        u = n(57437),
        a = r.forwardRef((e, t) => {
          var n, a;
          let { container: s, ...c } = e,
            [f, d] = r.useState(!1);
          (0, l.b)(() => d(!0), []);
          let p =
            s ||
            (f &&
              (null === (a = globalThis) || void 0 === a
                ? void 0
                : null === (n = a.document) || void 0 === n
                ? void 0
                : n.body));
          return p
            ? i.createPortal((0, u.jsx)(o.WV.div, { ...c, ref: t }), p)
            : null;
        });
      a.displayName = "Portal";
    },
    71599: function (e, t, n) {
      n.d(t, {
        z: function () {
          return u;
        },
      });
      var r = n(2265),
        i = n(54887),
        o = n(98575),
        l = n(61188),
        u = (e) => {
          var t, n;
          let u, s;
          let { present: c, children: f } = e,
            d = (function (e) {
              var t, n;
              let [o, u] = r.useState(),
                s = r.useRef({}),
                c = r.useRef(e),
                f = r.useRef("none"),
                [d, p] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = a(s.current);
                  f.current = "mounted" === d ? e : "none";
                }, [d]),
                (0, l.b)(() => {
                  let t = s.current,
                    n = c.current;
                  if (n !== e) {
                    let r = f.current,
                      i = a(t);
                    e
                      ? p("MOUNT")
                      : "none" === i ||
                        (null == t ? void 0 : t.display) === "none"
                      ? p("UNMOUNT")
                      : n && r !== i
                      ? p("ANIMATION_OUT")
                      : p("UNMOUNT"),
                      (c.current = e);
                  }
                }, [e, p]),
                (0, l.b)(() => {
                  if (o) {
                    let e = (e) => {
                        let t = a(s.current).includes(e.animationName);
                        e.target === o &&
                          t &&
                          i.flushSync(() => p("ANIMATION_END"));
                      },
                      t = (e) => {
                        e.target === o && (f.current = a(s.current));
                      };
                    return (
                      o.addEventListener("animationstart", t),
                      o.addEventListener("animationcancel", e),
                      o.addEventListener("animationend", e),
                      () => {
                        o.removeEventListener("animationstart", t),
                          o.removeEventListener("animationcancel", e),
                          o.removeEventListener("animationend", e);
                      }
                    );
                  }
                  p("ANIMATION_END");
                }, [o, p]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(d),
                  ref: r.useCallback((e) => {
                    e && (s.current = getComputedStyle(e)), u(e);
                  }, []),
                }
              );
            })(c),
            p =
              "function" == typeof f
                ? f({ present: d.isPresent })
                : r.Children.only(f),
            m = (0, o.e)(
              d.ref,
              (u =
                null ===
                  (t = Object.getOwnPropertyDescriptor(p.props, "ref")) ||
                void 0 === t
                  ? void 0
                  : t.get) &&
                "isReactWarning" in u &&
                u.isReactWarning
                ? p.ref
                : (u =
                    null === (n = Object.getOwnPropertyDescriptor(p, "ref")) ||
                    void 0 === n
                      ? void 0
                      : n.get) &&
                  "isReactWarning" in u &&
                  u.isReactWarning
                ? p.props.ref
                : p.props.ref || p.ref
            );
          return "function" == typeof f || d.isPresent
            ? r.cloneElement(p, { ref: m })
            : null;
        };
      function a(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      u.displayName = "Presence";
    },
    66840: function (e, t, n) {
      n.d(t, {
        WV: function () {
          return u;
        },
        jH: function () {
          return a;
        },
      });
      var r = n(2265),
        i = n(54887),
        o = n(37053),
        l = n(57437),
        u = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...i } = e,
              u = r ? o.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(u, { ...i, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function a(e, t) {
        e && i.flushSync(() => e.dispatchEvent(t));
      }
    },
    37053: function (e, t, n) {
      n.d(t, {
        g7: function () {
          return l;
        },
      });
      var r = n(2265),
        i = n(98575),
        o = n(57437),
        l = r.forwardRef((e, t) => {
          let { children: n, ...i } = e,
            l = r.Children.toArray(n),
            a = l.find(s);
          if (a) {
            let e = a.props.children,
              n = l.map((t) =>
                t !== a
                  ? t
                  : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, o.jsx)(u, {
              ...i,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, o.jsx)(u, { ...i, ref: t, children: n });
        });
      l.displayName = "Slot";
      var u = r.forwardRef((e, t) => {
        let { children: n, ...o } = e;
        if (r.isValidElement(n)) {
          let e, l;
          let u =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return r.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let i = e[r],
                  o = t[r];
                /^on[A-Z]/.test(r)
                  ? i && o
                    ? (n[r] = (...e) => {
                        o(...e), i(...e);
                      })
                    : i && (n[r] = i)
                  : "style" === r
                  ? (n[r] = { ...i, ...o })
                  : "className" === r &&
                    (n[r] = [i, o].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(o, n.props),
            ref: t ? (0, i.F)(t, u) : u,
          });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      u.displayName = "SlotClone";
      var a = ({ children: e }) => (0, o.jsx)(o.Fragment, { children: e });
      function s(e) {
        return r.isValidElement(e) && e.type === a;
      }
    },
    26606: function (e, t, n) {
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var r = n(2265);
      function i(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    80886: function (e, t, n) {
      n.d(t, {
        T: function () {
          return o;
        },
      });
      var r = n(2265),
        i = n(26606);
      function o({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [o, l] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [o] = n,
              l = r.useRef(o),
              u = (0, i.W)(t);
            return (
              r.useEffect(() => {
                l.current !== o && (u(o), (l.current = o));
              }, [o, l, u]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          u = void 0 !== e,
          a = u ? e : o,
          s = (0, i.W)(n);
        return [
          a,
          r.useCallback(
            (t) => {
              if (u) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && s(n);
              } else l(t);
            },
            [u, e, l, s]
          ),
        ];
      }
    },
    61188: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(2265),
        i = globalThis?.document ? r.useLayoutEffect : () => {};
    },
  },
]);
