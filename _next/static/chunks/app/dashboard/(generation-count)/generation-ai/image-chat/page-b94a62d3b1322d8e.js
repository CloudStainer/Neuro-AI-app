(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [34],
  {
    1572: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 98889));
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
    98889: function (e, t, n) {
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
                "w-full max-w-[300px] sm:max-w-[540px] lg:max-w-[1000px] h-fit",
              children: (0, l.jsx)(r.HoverEffect, {
                items: [
                  {
                    title: "DALL\xb7E 3",
                    img: "/assets/gpt.svg",
                    description: "",
                    link: "/dashboard/generation-ai/image-chat/dalle",
                  },
                  {
                    title: "Corcel",
                    img: "/assets/cortel.png",
                    description: "",
                    link: "/dashboard/generation-ai/image-chat/corcel",
                  },
                  {
                    title: "Playground 2.5",
                    img: "/assets/playground.png",
                    description: "",
                    link: "/dashboard/playground",
                  },
                ],
                className:
                  "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 gap-4",
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
        a = n(33145),
        o = n(27648),
        c = n(2265);
      let u = (e) => {
          let { items: t, className: n } = e,
            [u, p] = (0, c.useState)(null);
          return (0, l.jsx)("div", {
            className: (0, r.cn)(n),
            children: t.map((e, t) =>
              (0, l.jsxs)(
                o.default,
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
                          children: (0, l.jsx)(a.default, {
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
        a = n(45750);
      class o extends r.Component {
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
          { nonce: u } = (0, r.useContext)(a._);
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: t, top: l, left: r } = c.current;
            if (n || !s.current || !e || !t) return;
            s.current.dataset.motionPopId = i;
            let a = document.createElement("style");
            return (
              u && (a.nonce = u),
              document.head.appendChild(a),
              a.sheet &&
                a.sheet.insertRule(
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
                document.head.removeChild(a);
              }
            );
          }, [n]),
          (0, l.jsx)(o, {
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
            isPresent: a,
            onExitComplete: o,
            custom: u,
            presenceAffectsLayout: f,
            mode: h,
          } = e,
          p = (0, s.h)(d),
          m = (0, r.useId)(),
          x = (0, r.useMemo)(
            () => ({
              id: m,
              initial: n,
              isPresent: a,
              custom: u,
              onExitComplete: (e) => {
                for (let t of (p.set(e, !0), p.values())) if (!t) return;
                o && o();
              },
              register: (e) => (p.set(e, !1), () => p.delete(e)),
            }),
            f ? [Math.random()] : [a]
          );
        return (
          (0, r.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [a]),
          r.useEffect(() => {
            a || p.size || !o || o();
          }, [a]),
          "popLayout" === h &&
            (t = (0, l.jsx)(c, { isPresent: a, children: t })),
          (0, l.jsx)(i.O.Provider, { value: x, children: t })
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
          r.Children.forEach(e, (e) => {
            (0, r.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var x = n(11534);
      let g = (e) => {
        let {
          children: t,
          exitBeforeEnter: n,
          custom: i,
          initial: a = !0,
          onExitComplete: o,
          presenceAffectsLayout: c = !0,
          mode: d = "sync",
        } = e;
        (0, h.k)(!n, "Replace exitBeforeEnter with mode='wait'");
        let g = (0, r.useMemo)(() => m(t), [t]),
          v = g.map(p),
          w = (0, r.useRef)(!0),
          b = (0, r.useRef)(g),
          j = (0, s.h)(() => new Map()),
          [k, y] = (0, r.useState)(g),
          [E, N] = (0, r.useState)(g);
        (0, x.L)(() => {
          (w.current = !1), (b.current = g);
          for (let e = 0; e < E.length; e++) {
            let t = p(E[e]);
            v.includes(t) ? j.delete(t) : !0 !== j.get(t) && j.set(t, !1);
          }
        }, [E, v.length, v.join("-")]);
        let C = [];
        if (g !== k) {
          let e = [...g];
          for (let t = 0; t < E.length; t++) {
            let n = E[t],
              l = p(n);
            v.includes(l) || (e.splice(t, 0, n), C.push(n));
          }
          "wait" === d && C.length && (e = C), N(m(e)), y(g);
          return;
        }
        let { forceRender: M } = (0, r.useContext)(f.p);
        return (0, l.jsx)(l.Fragment, {
          children: E.map((e) => {
            let t = p(e),
              n = g === E || v.includes(t);
            return (0, l.jsx)(
              u,
              {
                isPresent: n,
                initial: (!w.current || !!a) && void 0,
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
                        e && (null == M || M(), N(b.current), o && o());
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
      return e((e.s = 1572));
    }),
      (_N_E = e.O());
  },
]);
