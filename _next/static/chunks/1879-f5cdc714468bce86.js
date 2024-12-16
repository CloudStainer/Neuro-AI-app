"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1879],
  {
    43664: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(2265),
        o = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      let l = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        u = (e, t) => {
          let n = (0, r.forwardRef)((n, u) => {
            let {
              color: i = "currentColor",
              size: a = 24,
              strokeWidth: s = 2,
              absoluteStrokeWidth: c,
              className: d = "",
              children: f,
              ...h
            } = n;
            return (0, r.createElement)(
              "svg",
              {
                ref: u,
                ...o,
                width: a,
                height: a,
                stroke: i,
                strokeWidth: c ? (24 * Number(s)) / Number(a) : s,
                className: ["lucide", "lucide-".concat(l(e)), d].join(" "),
                ...h,
              },
              [
                ...t.map((e) => {
                  let [t, n] = e;
                  return (0, r.createElement)(t, n);
                }),
                ...(Array.isArray(f) ? f : [f]),
              ]
            );
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    71769: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(43664).Z)("BookOpen", [
        [
          "path",
          { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" },
        ],
        [
          "path",
          { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" },
        ],
      ]);
    },
    92735: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(43664).Z)("Download", [
        [
          "path",
          { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
        ],
        ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
        ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
      ]);
    },
    15626: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(43664).Z)("Music2", [
        ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
        ["path", { d: "M12 18V2l7 4", key: "g04rme" }],
      ]);
    },
    99397: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(43664).Z)("Plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
    30166: function (e, t, n) {
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(55775),
        o = n.n(r);
    },
    99376: function (e, t, n) {
      var r = n(35475);
      n.o(r, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        n.o(r, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          });
    },
    12119: function (e, t, n) {
      Object.defineProperty(t, "$", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
      let r = n(83079);
      function o(e) {
        let { createServerReference: t } = n(6671);
        return t(e, r.callServer);
      }
    },
    55775: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(47043);
      n(57437), n(2265);
      let o = r._(n(15602));
      function l(e, t) {
        var n;
        let r = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        "function" == typeof e && (r.loader = e);
        let l = { ...r, ...t };
        return (0, o.default)({
          ...l,
          modules: null == (n = l.loadableGenerated) ? void 0 : n.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    81523: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(18993);
      function o(e) {
        let { reason: t, children: n } = e;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
        return n;
      }
    },
    15602: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(57437),
        o = n(2265),
        l = n(81523),
        u = n(70049);
      function i(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let a = {
          loader: () => Promise.resolve(i(() => null)),
          loading: null,
          ssr: !0,
        },
        s = function (e) {
          let t = { ...a, ...e },
            n = (0, o.lazy)(() => t.loader().then(i)),
            s = t.loading;
          function c(e) {
            let i = s
                ? (0, r.jsx)(s, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              a = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, r.jsx)(u.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(n, { ...e }),
                    ],
                  })
                : (0, r.jsx)(l.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(o.Suspense, { fallback: i, children: a });
          }
          return (c.displayName = "LoadableComponent"), c;
        };
    },
    70049: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(57437),
        o = n(20544);
      function l(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, o.getExpectedRequestStore)("next/dynamic css"),
          l = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith(".css"));
            l.push(...t);
          }
        }
        return 0 === l.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: l.map((e) =>
                (0, r.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    3243: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(2265),
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
      let l = (e, t, n, l) => {
        let u = (0, r.forwardRef)((n, u) => {
          let {
            color: i = "currentColor",
            size: a = 24,
            stroke: s = 2,
            title: c,
            className: d,
            children: f,
            ...h
          } = n;
          return (0, r.createElement)(
            "svg",
            {
              ref: u,
              ...o[e],
              width: a,
              height: a,
              className: ["tabler-icon", "tabler-icon-".concat(t), d].join(" "),
              ...("filled" === e ? { fill: i } : { strokeWidth: s, stroke: i }),
              ...h,
            },
            [
              c && (0, r.createElement)("title", { key: "svg-title" }, c),
              ...l.map((e) => {
                let [t, n] = e;
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(f) ? f : [f]),
            ]
          );
        });
        return (u.displayName = "".concat(n)), u;
      };
    },
    99274: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var r = (0, n(3243).Z)("outline", "player-play", "IconPlayerPlay", [
        ["path", { d: "M7 4v16l13 -8z", key: "svg-0" }],
      ]);
    },
    48614: function (e, t, n) {
      n.d(t, {
        M: function () {
          return g;
        },
      });
      var r = n(57437),
        o = n(2265),
        l = n(64252),
        u = n(53576),
        i = n(45750);
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
      function s(e) {
        let { children: t, isPresent: n } = e,
          l = (0, o.useId)(),
          u = (0, o.useRef)(null),
          s = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: c } = (0, o.useContext)(i._);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: t, top: r, left: o } = s.current;
            if (n || !u.current || !e || !t) return;
            u.current.dataset.motionPopId = l;
            let i = document.createElement("style");
            return (
              c && (i.nonce = c),
              document.head.appendChild(i),
              i.sheet &&
                i.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      l,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(r, "px !important;\n            left: ")
                    .concat(o, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(i);
              }
            );
          }, [n]),
          (0, r.jsx)(a, {
            isPresent: n,
            childRef: u,
            sizeRef: s,
            children: o.cloneElement(t, { ref: u }),
          })
        );
      }
      let c = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: i,
            onExitComplete: a,
            custom: c,
            presenceAffectsLayout: f,
            mode: h,
          } = e,
          p = (0, u.h)(d),
          m = (0, o.useId)(),
          y = (0, o.useMemo)(
            () => ({
              id: m,
              initial: n,
              isPresent: i,
              custom: c,
              onExitComplete: (e) => {
                for (let t of (p.set(e, !0), p.values())) if (!t) return;
                a && a();
              },
              register: (e) => (p.set(e, !1), () => p.delete(e)),
            }),
            f ? [Math.random()] : [i]
          );
        return (
          (0, o.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [i]),
          o.useEffect(() => {
            i || p.size || !a || a();
          }, [i]),
          "popLayout" === h &&
            (t = (0, r.jsx)(s, { isPresent: i, children: t })),
          (0, r.jsx)(l.O.Provider, { value: y, children: t })
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
          o.Children.forEach(e, (e) => {
            (0, o.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var y = n(11534);
      let g = (e) => {
        let {
          children: t,
          exitBeforeEnter: n,
          custom: l,
          initial: i = !0,
          onExitComplete: a,
          presenceAffectsLayout: s = !0,
          mode: d = "sync",
        } = e;
        (0, h.k)(!n, "Replace exitBeforeEnter with mode='wait'");
        let g = (0, o.useMemo)(() => m(t), [t]),
          v = g.map(p),
          w = (0, o.useRef)(!0),
          x = (0, o.useRef)(g),
          k = (0, u.h)(() => new Map()),
          [j, P] = (0, o.useState)(g),
          [b, M] = (0, o.useState)(g);
        (0, y.L)(() => {
          (w.current = !1), (x.current = g);
          for (let e = 0; e < b.length; e++) {
            let t = p(b[e]);
            v.includes(t) ? k.delete(t) : !0 !== k.get(t) && k.set(t, !1);
          }
        }, [b, v.length, v.join("-")]);
        let C = [];
        if (g !== j) {
          let e = [...g];
          for (let t = 0; t < b.length; t++) {
            let n = b[t],
              r = p(n);
            v.includes(r) || (e.splice(t, 0, n), C.push(n));
          }
          "wait" === d && C.length && (e = C), M(m(e)), P(g);
          return;
        }
        let { forceRender: R } = (0, o.useContext)(f.p);
        return (0, r.jsx)(r.Fragment, {
          children: b.map((e) => {
            let t = p(e),
              n = g === b || v.includes(t);
            return (0, r.jsx)(
              c,
              {
                isPresent: n,
                initial: (!w.current || !!i) && void 0,
                custom: n ? void 0 : l,
                presenceAffectsLayout: s,
                mode: d,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!k.has(t)) return;
                      k.set(t, !0);
                      let e = !0;
                      k.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == R || R(), M(x.current), a && a());
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
]);
