"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6908],
  {
    16605: function (e, t, r) {
      r.d(t, {
        VY: function () {
          return D;
        },
        fC: function () {
          return T;
        },
        xz: function () {
          return j;
        },
      });
      var n,
        o = r(2265),
        i = r(6741),
        s = r(73966),
        u = r(80886),
        a = r(98575),
        c = r(35345),
        l = (r(83832), r(71599)),
        d = r(66840),
        f = r(15278),
        p = r(57437),
        h = "HoverCard",
        [v, m] = (0, s.b)(h, [c.D7]),
        g = (0, c.D7)(),
        [x, w] = v(h),
        C = (e) => {
          let {
              __scopeHoverCard: t,
              children: r,
              open: n,
              defaultOpen: i,
              onOpenChange: s,
              openDelay: a = 700,
              closeDelay: l = 300,
            } = e,
            d = g(t),
            f = o.useRef(0),
            h = o.useRef(0),
            v = o.useRef(!1),
            m = o.useRef(!1),
            [w = !1, C] = (0, u.T)({ prop: n, defaultProp: i, onChange: s }),
            E = o.useCallback(() => {
              clearTimeout(h.current),
                (f.current = window.setTimeout(() => C(!0), a));
            }, [a, C]),
            R = o.useCallback(() => {
              clearTimeout(f.current),
                v.current ||
                  m.current ||
                  (h.current = window.setTimeout(() => C(!1), l));
            }, [l, C]),
            y = o.useCallback(() => C(!1), [C]);
          return (
            o.useEffect(
              () => () => {
                clearTimeout(f.current), clearTimeout(h.current);
              },
              []
            ),
            (0, p.jsx)(x, {
              scope: t,
              open: w,
              onOpenChange: C,
              onOpen: E,
              onClose: R,
              onDismiss: y,
              hasSelectionRef: v,
              isPointerDownOnContentRef: m,
              children: (0, p.jsx)(c.fC, { ...d, children: r }),
            })
          );
        };
      C.displayName = h;
      var E = "HoverCardTrigger",
        R = o.forwardRef((e, t) => {
          let { __scopeHoverCard: r, ...n } = e,
            o = w(E, r),
            s = g(r);
          return (0, p.jsx)(c.ee, {
            asChild: !0,
            ...s,
            children: (0, p.jsx)(d.WV.a, {
              "data-state": o.open ? "open" : "closed",
              ...n,
              ref: t,
              onPointerEnter: (0, i.M)(e.onPointerEnter, M(o.onOpen)),
              onPointerLeave: (0, i.M)(e.onPointerLeave, M(o.onClose)),
              onFocus: (0, i.M)(e.onFocus, o.onOpen),
              onBlur: (0, i.M)(e.onBlur, o.onClose),
              onTouchStart: (0, i.M)(e.onTouchStart, (e) => e.preventDefault()),
            }),
          });
        });
      R.displayName = E;
      var [y, P] = v("HoverCardPortal", { forceMount: void 0 }),
        k = "HoverCardContent",
        S = o.forwardRef((e, t) => {
          let r = P(k, e.__scopeHoverCard),
            { forceMount: n = r.forceMount, ...o } = e,
            s = w(k, e.__scopeHoverCard);
          return (0, p.jsx)(l.z, {
            present: n || s.open,
            children: (0, p.jsx)(b, {
              "data-state": s.open ? "open" : "closed",
              ...o,
              onPointerEnter: (0, i.M)(e.onPointerEnter, M(s.onOpen)),
              onPointerLeave: (0, i.M)(e.onPointerLeave, M(s.onClose)),
              ref: t,
            }),
          });
        });
      S.displayName = k;
      var b = o.forwardRef((e, t) => {
        let {
            __scopeHoverCard: r,
            onEscapeKeyDown: s,
            onPointerDownOutside: u,
            onFocusOutside: l,
            onInteractOutside: d,
            ...h
          } = e,
          v = w(k, r),
          m = g(r),
          x = o.useRef(null),
          C = (0, a.e)(t, x),
          [E, R] = o.useState(!1);
        return (
          o.useEffect(() => {
            if (E) {
              let e = document.body;
              return (
                (n = e.style.userSelect || e.style.webkitUserSelect),
                (e.style.userSelect = "none"),
                (e.style.webkitUserSelect = "none"),
                () => {
                  (e.style.userSelect = n), (e.style.webkitUserSelect = n);
                }
              );
            }
          }, [E]),
          o.useEffect(() => {
            if (x.current) {
              let e = () => {
                R(!1),
                  (v.isPointerDownOnContentRef.current = !1),
                  setTimeout(() => {
                    var e;
                    (null === (e = document.getSelection()) || void 0 === e
                      ? void 0
                      : e.toString()) !== "" &&
                      (v.hasSelectionRef.current = !0);
                  });
              };
              return (
                document.addEventListener("pointerup", e),
                () => {
                  document.removeEventListener("pointerup", e),
                    (v.hasSelectionRef.current = !1),
                    (v.isPointerDownOnContentRef.current = !1);
                }
              );
            }
          }, [v.isPointerDownOnContentRef, v.hasSelectionRef]),
          o.useEffect(() => {
            x.current &&
              (function (e) {
                let t = [],
                  r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: (e) =>
                      e.tabIndex >= 0
                        ? NodeFilter.FILTER_ACCEPT
                        : NodeFilter.FILTER_SKIP,
                  });
                for (; r.nextNode(); ) t.push(r.currentNode);
                return t;
              })(x.current).forEach((e) => e.setAttribute("tabindex", "-1"));
          }),
          (0, p.jsx)(f.XB, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: u,
            onFocusOutside: (0, i.M)(l, (e) => {
              e.preventDefault();
            }),
            onDismiss: v.onDismiss,
            children: (0, p.jsx)(c.VY, {
              ...m,
              ...h,
              onPointerDown: (0, i.M)(h.onPointerDown, (e) => {
                e.currentTarget.contains(e.target) && R(!0),
                  (v.hasSelectionRef.current = !1),
                  (v.isPointerDownOnContentRef.current = !0);
              }),
              ref: C,
              style: {
                ...h.style,
                userSelect: E ? "text" : void 0,
                WebkitUserSelect: E ? "text" : void 0,
                "--radix-hover-card-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-hover-card-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-hover-card-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-hover-card-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-hover-card-trigger-height":
                  "var(--radix-popper-anchor-height)",
              },
            }),
          })
        );
      });
      function M(e) {
        return (t) => ("touch" === t.pointerType ? void 0 : e());
      }
      o.forwardRef((e, t) => {
        let { __scopeHoverCard: r, ...n } = e,
          o = g(r);
        return (0, p.jsx)(c.Eh, { ...o, ...n, ref: t });
      }).displayName = "HoverCardArrow";
      var T = C,
        j = R,
        D = S;
    },
    3243: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(2265),
        o = {
          outline: {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          filled: {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            stroke: "none",
          },
        };
      let i = (e, t, r, i) => {
        let s = (0, n.forwardRef)((r, s) => {
          let {
            color: u = "currentColor",
            size: a = 24,
            stroke: c = 2,
            title: l,
            className: d,
            children: f,
            ...p
          } = r;
          return (0, n.createElement)(
            "svg",
            {
              ref: s,
              ...o[e],
              width: a,
              height: a,
              className: ["tabler-icon", "tabler-icon-".concat(t), d].join(" "),
              ...("filled" === e ? { fill: u } : { strokeWidth: c, stroke: u }),
              ...p,
            },
            [
              l && (0, n.createElement)("title", { key: "svg-title" }, l),
              ...i.map((e) => {
                let [t, r] = e;
                return (0, n.createElement)(t, r);
              }),
              ...(Array.isArray(f) ? f : [f]),
            ]
          );
        });
        return (s.displayName = "".concat(r)), s;
      };
    },
    91443: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = (0, r(3243).Z)("outline", "x", "IconX", [
        ["path", { d: "M18 6l-12 12", key: "svg-0" }],
        ["path", { d: "M6 6l12 12", key: "svg-1" }],
      ]);
    },
    48614: function (e, t, r) {
      r.d(t, {
        M: function () {
          return g;
        },
      });
      var n = r(57437),
        o = r(2265),
        i = r(64252),
        s = r(53576),
        u = r(45750);
      class a extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c(e) {
        let { children: t, isPresent: r } = e,
          i = (0, o.useId)(),
          s = (0, o.useRef)(null),
          c = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: l } = (0, o.useContext)(u._);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: t, top: n, left: o } = c.current;
            if (r || !s.current || !e || !t) return;
            s.current.dataset.motionPopId = i;
            let u = document.createElement("style");
            return (
              l && (u.nonce = l),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      i,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(n, "px !important;\n            left: ")
                    .concat(o, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [r]),
          (0, n.jsx)(a, {
            isPresent: r,
            childRef: s,
            sizeRef: c,
            children: o.cloneElement(t, { ref: s }),
          })
        );
      }
      let l = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: u,
            onExitComplete: a,
            custom: l,
            presenceAffectsLayout: f,
            mode: p,
          } = e,
          h = (0, s.h)(d),
          v = (0, o.useId)(),
          m = (0, o.useMemo)(
            () => ({
              id: v,
              initial: r,
              isPresent: u,
              custom: l,
              onExitComplete: (e) => {
                for (let t of (h.set(e, !0), h.values())) if (!t) return;
                a && a();
              },
              register: (e) => (h.set(e, !1), () => h.delete(e)),
            }),
            f ? [Math.random()] : [u]
          );
        return (
          (0, o.useMemo)(() => {
            h.forEach((e, t) => h.set(t, !1));
          }, [u]),
          o.useEffect(() => {
            u || h.size || !a || a();
          }, [u]),
          "popLayout" === p &&
            (t = (0, n.jsx)(c, { isPresent: u, children: t })),
          (0, n.jsx)(i.O.Provider, { value: m, children: t })
        );
      };
      function d() {
        return new Map();
      }
      var f = r(58881),
        p = r(13223);
      let h = (e) => e.key || "";
      function v(e) {
        let t = [];
        return (
          o.Children.forEach(e, (e) => {
            (0, o.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var m = r(11534);
      let g = (e) => {
        let {
          children: t,
          exitBeforeEnter: r,
          custom: i,
          initial: u = !0,
          onExitComplete: a,
          presenceAffectsLayout: c = !0,
          mode: d = "sync",
        } = e;
        (0, p.k)(!r, "Replace exitBeforeEnter with mode='wait'");
        let g = (0, o.useMemo)(() => v(t), [t]),
          x = g.map(h),
          w = (0, o.useRef)(!0),
          C = (0, o.useRef)(g),
          E = (0, s.h)(() => new Map()),
          [R, y] = (0, o.useState)(g),
          [P, k] = (0, o.useState)(g);
        (0, m.L)(() => {
          (w.current = !1), (C.current = g);
          for (let e = 0; e < P.length; e++) {
            let t = h(P[e]);
            x.includes(t) ? E.delete(t) : !0 !== E.get(t) && E.set(t, !1);
          }
        }, [P, x.length, x.join("-")]);
        let S = [];
        if (g !== R) {
          let e = [...g];
          for (let t = 0; t < P.length; t++) {
            let r = P[t],
              n = h(r);
            x.includes(n) || (e.splice(t, 0, r), S.push(r));
          }
          "wait" === d && S.length && (e = S), k(v(e)), y(g);
          return;
        }
        let { forceRender: b } = (0, o.useContext)(f.p);
        return (0, n.jsx)(n.Fragment, {
          children: P.map((e) => {
            let t = h(e),
              r = g === P || x.includes(t);
            return (0, n.jsx)(
              l,
              {
                isPresent: r,
                initial: (!w.current || !!u) && void 0,
                custom: r ? void 0 : i,
                presenceAffectsLayout: c,
                mode: d,
                onExitComplete: r
                  ? void 0
                  : () => {
                      if (!E.has(t)) return;
                      E.set(t, !0);
                      let e = !0;
                      E.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == b || b(), k(C.current), a && a());
                    },
                children: e,
              },
              t
            );
          }),
        });
      };
    },
    81906: function (e, t, r) {
      r.d(t, {
        c: function () {
          return u;
        },
      });
      var n = r(2265),
        o = r(3078),
        i = r(45750),
        s = r(53576);
      function u(e) {
        let t = (0, s.h)(() => (0, o.BX)(e)),
          { isStatic: r } = (0, n.useContext)(i._);
        if (r) {
          let [, r] = (0, n.useState)(e);
          (0, n.useEffect)(() => t.on("change", r), []);
        }
        return t;
      }
    },
    85318: function (e, t, r) {
      r.d(t, {
        q: function () {
          return d;
        },
      });
      var n = r(2265),
        o = r(23999),
        i = r(81906),
        s = r(45750),
        u = r(11534),
        a = r(21792),
        c = r(45414);
      function l(e) {
        return "number" == typeof e ? e : parseFloat(e);
      }
      function d(e, t = {}) {
        let { isStatic: r } = (0, n.useContext)(s._),
          d = (0, n.useRef)(null),
          f = (0, i.c)((0, o.i)(e) ? l(e.get()) : e),
          p = (0, n.useRef)(f.get()),
          h = (0, n.useRef)(() => {}),
          v = () => {
            let e = d.current;
            e && 0 === e.time && e.sample(c.frameData.delta),
              m(),
              (d.current = (0, a.y)({
                keyframes: [f.get(), p.current],
                velocity: f.getVelocity(),
                type: "spring",
                restDelta: 0.001,
                restSpeed: 0.01,
                ...t,
                onUpdate: h.current,
              }));
          },
          m = () => {
            d.current && d.current.stop();
          };
        return (
          (0, n.useInsertionEffect)(
            () =>
              f.attach(
                (e, t) =>
                  r
                    ? t(e)
                    : ((p.current = e),
                      (h.current = t),
                      c.Wi.update(v),
                      f.get()),
                m
              ),
            [JSON.stringify(t)]
          ),
          (0, u.L)(() => {
            if ((0, o.i)(e)) return e.on("change", (e) => f.set(l(e)));
          }, [f]),
          f
        );
      }
    },
    12239: function (e, t, r) {
      r.d(t, {
        c: function () {
          return n;
        },
      });
      function n(e, t) {
        var r,
          n,
          o,
          i = "";
        for (r in e)
          if (void 0 !== (o = e[r])) {
            if (Array.isArray(o))
              for (n = 0; n < o.length; n++)
                i && (i += "&"),
                  (i += encodeURIComponent(r) + "=" + encodeURIComponent(o[n]));
            else
              i && (i += "&"),
                (i += encodeURIComponent(r) + "=" + encodeURIComponent(o));
          }
        return (t || "") + i;
      }
    },
  },
]);
