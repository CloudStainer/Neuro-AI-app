(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1238, 7341],
  {
    47662: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 22195));
    },
    27648: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return l.a;
        },
      });
      var r = n(72972),
        l = n.n(r);
    },
    22195: function (e, t, n) {
      "use strict";
      n.d(t, {
        HoverEffect: function () {
          return c;
        },
      });
      var r = n(57437),
        l = n(93448),
        i = n(48614),
        s = n(91926),
        o = n(33145),
        u = n(27648),
        a = n(2265);
      let c = (e) => {
          let { items: t, className: n } = e,
            [c, p] = (0, a.useState)(null);
          return (0, r.jsx)("div", {
            className: (0, l.cn)(n),
            children: t.map((e, t) =>
              (0, r.jsxs)(
                u.default,
                {
                  href: null == e ? void 0 : e.link,
                  className:
                    "relative group block p-1 h-full w-full" +
                    ((null == e ? void 0 : e.link) === ""
                      ? " cursor-pointer"
                      : ""),
                  onMouseEnter: () => p(t),
                  onMouseLeave: () => p(null),
                  children: [
                    (0, r.jsx)(i.M, {
                      children:
                        c === t &&
                        (0, r.jsx)(s.E.span, {
                          className:
                            "absolute inset-0 h-full w-full aspect-square bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-[14px]",
                          layoutId: "hoverBackground",
                          initial: { opacity: 0 },
                          animate: {
                            opacity: 1,
                            transition: { duration: 0.15 },
                          },
                          exit: {
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.2 },
                          },
                        }),
                    }),
                    (0, r.jsxs)(d, {
                      className:
                        "bg-gradient-to-t from-black via-black to-[#161618] rounded-xl w-full h-full flex flex-col justify-center items-center" +
                        ("" === e.link ? " cursor-wait" : ""),
                      children: [
                        (0, r.jsx)(f, {
                          className:
                            "text-2xl md:text-2xl lg:text-3xl font-semibold text-center w-full whitespace-nowrap",
                          children: e.title,
                        }),
                        (0, r.jsx)(h, {
                          className:
                            "w-full h-full flex justify-center items-center",
                          children: (0, r.jsx)(o.default, {
                            src: e.img,
                            width: 100,
                            height: 100,
                            alt: e.title,
                            className:
                              "h-full w-fit object-contain aspect-square",
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                null == e ? void 0 : e.link
              )
            ),
          });
        },
        d = (e) => {
          let { className: t, children: n } = e;
          return (0, r.jsx)("div", {
            className: (0, l.cn)(
              "rounded-2xl h-full w-full aspect-square p-4 overflow-hidden bg-black border border-[#3b3b3c]/80 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
              t
            ),
            children: (0, r.jsx)("div", {
              className: "z-50 h-full w-full py-4 md:py-8",
              children: n,
            }),
          });
        },
        f = (e) => {
          let { className: t, children: n } = e;
          return (0, r.jsx)("h4", {
            className: (0, l.cn)("text-zinc-100 font-bold tracking-wide", t),
            children: n,
          });
        },
        h = (e) => {
          let { className: t, children: n } = e;
          return (0, r.jsx)("p", {
            className: (0, l.cn)(
              "text-zinc-400 tracking-wide leading-relaxed text-sm py-4 md:py-8",
              t
            ),
            children: n,
          });
        };
    },
    93448: function (e, t, n) {
      "use strict";
      n.d(t, {
        cn: function () {
          return i;
        },
      });
      var r = n(61994),
        l = n(53335);
      function i() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, l.m6)((0, r.W)(t));
      }
    },
    48614: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return v;
        },
      });
      var r = n(57437),
        l = n(2265),
        i = n(64252),
        s = n(53576),
        o = n(45750);
      class u extends l.Component {
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
      function a(e) {
        let { children: t, isPresent: n } = e,
          i = (0, l.useId)(),
          s = (0, l.useRef)(null),
          a = (0, l.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: c } = (0, l.useContext)(o._);
        return (
          (0, l.useInsertionEffect)(() => {
            let { width: e, height: t, top: r, left: l } = a.current;
            if (n || !s.current || !e || !t) return;
            s.current.dataset.motionPopId = i;
            let o = document.createElement("style");
            return (
              c && (o.nonce = c),
              document.head.appendChild(o),
              o.sheet &&
                o.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      i,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(r, "px !important;\n            left: ")
                    .concat(l, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(o);
              }
            );
          }, [n]),
          (0, r.jsx)(u, {
            isPresent: n,
            childRef: s,
            sizeRef: a,
            children: l.cloneElement(t, { ref: s }),
          })
        );
      }
      let c = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: o,
            onExitComplete: u,
            custom: c,
            presenceAffectsLayout: f,
            mode: h,
          } = e,
          p = (0, s.h)(d),
          m = (0, l.useId)(),
          x = (0, l.useMemo)(
            () => ({
              id: m,
              initial: n,
              isPresent: o,
              custom: c,
              onExitComplete: (e) => {
                for (let t of (p.set(e, !0), p.values())) if (!t) return;
                u && u();
              },
              register: (e) => (p.set(e, !1), () => p.delete(e)),
            }),
            f ? [Math.random()] : [o]
          );
        return (
          (0, l.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [o]),
          l.useEffect(() => {
            o || p.size || !u || u();
          }, [o]),
          "popLayout" === h &&
            (t = (0, r.jsx)(a, { isPresent: o, children: t })),
          (0, r.jsx)(i.O.Provider, { value: x, children: t })
        );
      };
      function d() {
        return new Map();
      }
      var f = n(58881),
        h = n(13223);
      let p = (e) => e.key || "";
      function m(e) {
        let t = [];
        return (
          l.Children.forEach(e, (e) => {
            (0, l.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var x = n(11534);
      let v = (e) => {
        let {
          children: t,
          exitBeforeEnter: n,
          custom: i,
          initial: o = !0,
          onExitComplete: u,
          presenceAffectsLayout: a = !0,
          mode: d = "sync",
        } = e;
        (0, h.k)(!n, "Replace exitBeforeEnter with mode='wait'");
        let v = (0, l.useMemo)(() => m(t), [t]),
          g = v.map(p),
          w = (0, l.useRef)(!0),
          b = (0, l.useRef)(v),
          j = (0, s.h)(() => new Map()),
          [k, y] = (0, l.useState)(v),
          [E, N] = (0, l.useState)(v);
        (0, x.L)(() => {
          (w.current = !1), (b.current = v);
          for (let e = 0; e < E.length; e++) {
            let t = p(E[e]);
            g.includes(t) ? j.delete(t) : !0 !== j.get(t) && j.set(t, !1);
          }
        }, [E, g.length, g.join("-")]);
        let C = [];
        if (v !== k) {
          let e = [...v];
          for (let t = 0; t < E.length; t++) {
            let n = E[t],
              r = p(n);
            g.includes(r) || (e.splice(t, 0, n), C.push(n));
          }
          "wait" === d && C.length && (e = C), N(m(e)), y(v);
          return;
        }
        let { forceRender: M } = (0, l.useContext)(f.p);
        return (0, r.jsx)(r.Fragment, {
          children: E.map((e) => {
            let t = p(e),
              n = v === E || g.includes(t);
            return (0, r.jsx)(
              c,
              {
                isPresent: n,
                initial: (!w.current || !!o) && void 0,
                custom: n ? void 0 : i,
                presenceAffectsLayout: a,
                mode: d,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!j.has(t)) return;
                      j.set(t, !0);
                      let e = !0;
                      j.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == M || M(), N(b.current), u && u());
                    },
                children: e,
              },
              t
            );
          }),
        });
      };
    },
  },
  function (e) {
    e.O(0, [3145, 2972, 1926, 6137, 2971, 2117, 1744], function () {
      return e((e.s = 47662));
    }),
      (_N_E = e.O());
  },
]);
