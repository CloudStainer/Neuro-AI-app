(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7165],
  {
    74528: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 49332));
    },
    27648: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return r.a;
        },
      });
      var l = n(72972),
        r = n.n(l);
    },
    49332: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n(57437),
        r = n(22195);
      t.default = () =>
        (0, l.jsxs)("div", {
          className:
            "text-center w-full h-full flex flex-col lg:justify-center items-center p-6 overflow-y-auto",
          children: [
            (0, l.jsx)("h1", {
              className:
                "bg-gradient-to-r from-gray-700 via-white to-white inline-block text-transparent bg-clip-text text-5xl md:text-6xl font-bold mb-4",
              children: "Generation AI",
            }),
            (0, l.jsx)("h1", {
              className:
                "text-xl md:text-4xl inline-block text-white bg-clip-text",
              children: "Select Model",
            }),
            (0, l.jsx)("div", {
              className:
                "w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[700px] h-fit",
              children: (0, l.jsx)(r.HoverEffect, {
                items: [
                  {
                    title: "FAST",
                    img: "/assets/fast.png",
                    description: "",
                    link: "/dashboard/generation-ai/video-chat/fast",
                  },
                  {
                    title: "PRO",
                    img: "/assets/pro.png",
                    description: "",
                    link: "/dashboard/generation-ai/video-chat/pro",
                  },
                ],
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10 gap-4",
              }),
            }),
          ],
        });
    },
    22195: function (e, t, n) {
      "use strict";
      n.d(t, {
        HoverEffect: function () {
          return u;
        },
      });
      var l = n(57437),
        r = n(93448),
        i = n(48614),
        s = n(91926),
        o = n(33145),
        a = n(27648),
        c = n(2265);
      let u = (e) => {
          let { items: t, className: n } = e,
            [u, p] = (0, c.useState)(null);
          return (0, l.jsx)("div", {
            className: (0, r.cn)(n),
            children: t.map((e, t) =>
              (0, l.jsxs)(
                a.default,
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
                    (0, l.jsx)(i.M, {
                      children:
                        u === t &&
                        (0, l.jsx)(s.E.span, {
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
                    (0, l.jsxs)(d, {
                      className:
                        "bg-gradient-to-t from-black via-black to-[#161618] rounded-xl w-full h-full flex flex-col justify-center items-center" +
                        ("" === e.link ? " cursor-wait" : ""),
                      children: [
                        (0, l.jsx)(f, {
                          className:
                            "text-2xl md:text-2xl lg:text-3xl font-semibold text-center w-full whitespace-nowrap",
                          children: e.title,
                        }),
                        (0, l.jsx)(h, {
                          className:
                            "w-full h-full flex justify-center items-center",
                          children: (0, l.jsx)(o.default, {
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
          return (0, l.jsx)("div", {
            className: (0, r.cn)(
              "rounded-2xl h-full w-full aspect-square p-4 overflow-hidden bg-black border border-[#3b3b3c]/80 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
              t
            ),
            children: (0, l.jsx)("div", {
              className: "z-50 h-full w-full py-4 md:py-8",
              children: n,
            }),
          });
        },
        f = (e) => {
          let { className: t, children: n } = e;
          return (0, l.jsx)("h4", {
            className: (0, r.cn)("text-zinc-100 font-bold tracking-wide", t),
            children: n,
          });
        },
        h = (e) => {
          let { className: t, children: n } = e;
          return (0, l.jsx)("p", {
            className: (0, r.cn)(
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
      var l = n(61994),
        r = n(53335);
      function i() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.m6)((0, l.W)(t));
      }
    },
    48614: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return g;
        },
      });
      var l = n(57437),
        r = n(2265),
        i = n(64252),
        s = n(53576),
        o = n(45750);
      class a extends r.Component {
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
        let { children: t, isPresent: n } = e,
          i = (0, r.useId)(),
          s = (0, r.useRef)(null),
          c = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: u } = (0, r.useContext)(o._);
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: t, top: l, left: r } = c.current;
            if (n || !s.current || !e || !t) return;
            s.current.dataset.motionPopId = i;
            let o = document.createElement("style");
            return (
              u && (o.nonce = u),
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
                    .concat(l, "px !important;\n            left: ")
                    .concat(r, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(o);
              }
            );
          }, [n]),
          (0, l.jsx)(a, {
            isPresent: n,
            childRef: s,
            sizeRef: c,
            children: r.cloneElement(t, { ref: s }),
          })
        );
      }
      let u = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: o,
            onExitComplete: a,
            custom: u,
            presenceAffectsLayout: f,
            mode: h,
          } = e,
          p = (0, s.h)(d),
          x = (0, r.useId)(),
          m = (0, r.useMemo)(
            () => ({
              id: x,
              initial: n,
              isPresent: o,
              custom: u,
              onExitComplete: (e) => {
                for (let t of (p.set(e, !0), p.values())) if (!t) return;
                a && a();
              },
              register: (e) => (p.set(e, !1), () => p.delete(e)),
            }),
            f ? [Math.random()] : [o]
          );
        return (
          (0, r.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [o]),
          r.useEffect(() => {
            o || p.size || !a || a();
          }, [o]),
          "popLayout" === h &&
            (t = (0, l.jsx)(c, { isPresent: o, children: t })),
          (0, l.jsx)(i.O.Provider, { value: m, children: t })
        );
      };
      function d() {
        return new Map();
      }
      var f = n(58881),
        h = n(13223);
      let p = (e) => e.key || "";
      function x(e) {
        let t = [];
        return (
          r.Children.forEach(e, (e) => {
            (0, r.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var m = n(11534);
      let g = (e) => {
        let {
          children: t,
          exitBeforeEnter: n,
          custom: i,
          initial: o = !0,
          onExitComplete: a,
          presenceAffectsLayout: c = !0,
          mode: d = "sync",
        } = e;
        (0, h.k)(!n, "Replace exitBeforeEnter with mode='wait'");
        let g = (0, r.useMemo)(() => x(t), [t]),
          v = g.map(p),
          w = (0, r.useRef)(!0),
          b = (0, r.useRef)(g),
          j = (0, s.h)(() => new Map()),
          [k, y] = (0, r.useState)(g),
          [N, E] = (0, r.useState)(g);
        (0, m.L)(() => {
          (w.current = !1), (b.current = g);
          for (let e = 0; e < N.length; e++) {
            let t = p(N[e]);
            v.includes(t) ? j.delete(t) : !0 !== j.get(t) && j.set(t, !1);
          }
        }, [N, v.length, v.join("-")]);
        let M = [];
        if (g !== k) {
          let e = [...g];
          for (let t = 0; t < N.length; t++) {
            let n = N[t],
              l = p(n);
            v.includes(l) || (e.splice(t, 0, n), M.push(n));
          }
          "wait" === d && M.length && (e = M), E(x(e)), y(g);
          return;
        }
        let { forceRender: R } = (0, r.useContext)(f.p);
        return (0, l.jsx)(l.Fragment, {
          children: N.map((e) => {
            let t = p(e),
              n = g === N || v.includes(t);
            return (0, l.jsx)(
              u,
              {
                isPresent: n,
                initial: (!w.current || !!o) && void 0,
                custom: n ? void 0 : i,
                presenceAffectsLayout: c,
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
                        e && (null == R || R(), E(b.current), a && a());
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
      return e((e.s = 74528));
    }),
      (_N_E = e.O());
  },
]);
