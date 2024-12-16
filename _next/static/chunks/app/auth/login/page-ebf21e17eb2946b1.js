(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6716],
  {
    35883: function () {},
    46601: function () {},
    89214: function () {},
    80435: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 95045));
    },
    95045: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return S;
          },
        });
      var n = a(57437),
        s = a(2265),
        r = a(93448),
        l = a(92287),
        i = a(40279),
        o = a(27648),
        d = a(29501),
        c = a(13590),
        u = a(31229),
        m = a(99376),
        x = a(80605);
      let p =
          'rounded-full h-2 w-2 mx-0.5 bg-current animate-[blink_1s_ease_0s_infinite_normal_both]"',
        h = () =>
          (0, n.jsxs)("span", {
            className: "inline-flex text-center items-center leading-7 h-6",
            children: [
              (0, n.jsx)("span", { className: p }, "dot_1'"),
              (0, n.jsx)(
                "span",
                { className: p, style: { animationDelay: "0.2s" } },
                "dot_2"
              ),
              (0, n.jsx)(
                "span",
                { className: p, style: { animationDelay: "0.2s" } },
                "dot_3"
              ),
            ],
          });
      var f = a(19838);
      let b = () => {
        let { dispatch: e } = (0, f.U)();
        return () => {
          var t;
          null === (t = window.ethereum) ||
            void 0 === t ||
            t.on("accountsChanged", async function () {
              for (
                var t, a, n, s = arguments.length, r = Array(s), l = 0;
                l < s;
                l++
              )
                r[l] = arguments[l];
              let i = r[0];
              if (Array.isArray(i) && i.length > 0) {
                let s = await (null === (t = window.ethereum) || void 0 === t
                  ? void 0
                  : t.request({
                      method: "eth_getBalance",
                      params: [i[0], "latest"],
                    }));
                e({
                  type: "connect",
                  wallet: null !== (a = i[0]) && void 0 !== a ? a : "",
                  balance:
                    null !== (n = null == s ? void 0 : s.toString()) &&
                    void 0 !== n
                      ? n
                      : "",
                });
              } else e({ type: "disconnect" });
            });
        };
      };
      var g = a(33145),
        w = a(7261);
      function v() {
        let {
            dispatch: e,
            state: { status: t, isMetamaskInstalled: a, wallet: r, balance: l },
          } = (0, f.U)(),
          i = b(),
          d = (0, m.useRouter)(),
          [c, u] = (0, s.useState)("pageNotLoaded" !== t && !a),
          [p, v] = (0, s.useState)("pageNotLoaded" !== t && a && !r),
          y = "pageNotLoaded" !== t && "string" == typeof r,
          _ = async () => {
            var t, a, n;
            w.Am.loading("Connecting to Metamask..."), e({ type: "loading" });
            let s = await (null === (t = window.ethereum) || void 0 === t
              ? void 0
              : t.request({ method: "eth_requestAccounts" }));
            if (Array.isArray(s) && s.length > 0) {
              let t = await window.ethereum.request({
                method: "eth_getBalance",
                params: [s[0], "latest"],
              });
              e({
                type: "connect",
                wallet: null !== (a = s[0]) && void 0 !== a ? a : "",
                balance:
                  null !== (n = null == t ? void 0 : t.toString()) &&
                  void 0 !== n
                    ? n
                    : "",
              }),
                i(),
                w.Am.dismiss(),
                w.Am.success("Connected to Metamask!");
            }
          },
          N = async () => {
            w.Am.loading("Logging in with Metamask...");
            let e = await (0, x.signIn)("credentials", {
              metaAddress: r,
              metamask: !0,
              redirect: !1,
              chainName: "MetaMask (".concat(r, ")"),
            });
            (null == e ? void 0 : e.status) === 200 &&
              (w.Am.dismiss(),
              w.Am.success("Successfully Logged in!"),
              d.push("/dashboard"));
          };
        return (
          (0, s.useEffect)(() => {
            u("pageNotLoaded" !== t && !a), v("pageNotLoaded" !== t && a && !r);
          }, [y, a, t, r]),
          (0, n.jsxs)("div", {
            className: y
              ? "relative group group/btn flex flex-col p-4 gap-4 items-center justify-start px-4 h-fit w-full text-black rounded-md font-medium border border-zinc-800 bg-transparent shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              : "",
            children: [
              r &&
                l &&
                (0, n.jsxs)("div", {
                  className:
                    "overflow-hidden text-ellipsis whitespace-nowrap w-full text-white rounded-md",
                  children: [
                    (0, n.jsxs)("h3", {
                      className: "text-sm flex font-medium text-white",
                      children: [
                        "Address: ",
                        (0, n.jsx)("span", { children: r }),
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      className: "text-sm text-white",
                      children: [
                        "Balance:",
                        " ",
                        (0, n.jsxs)("span", {
                          children: [
                            (parseInt(l) / 1e18).toFixed(4),
                            " ",
                            "ETH",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              p &&
                (0, n.jsxs)("button", {
                  type: "button",
                  className:
                    " relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium border border-zinc-800 bg-transparent shadow-[0px_0px_1px_1px_var(--neutral-800)]",
                  onClick: _,
                  children: [
                    (0, n.jsx)(g.default, {
                      width: 100,
                      height: 100,
                      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png",
                      alt: "",
                      className: "w-4 h-4",
                    }),
                    (0, n.jsx)("span", {
                      className: "text-neutral-300 text-sm",
                      children:
                        "loading" === t
                          ? (0, n.jsx)(h, {})
                          : "Continue with Metamask",
                    }),
                    (0, n.jsx)(j, {}),
                  ],
                }),
              c &&
                (0, n.jsx)(o.default, {
                  href: "https://metamask.io/",
                  target: "_blank",
                  children: (0, n.jsxs)("button", {
                    type: "button",
                    className:
                      " relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium border border-zinc-800 bg-transparent shadow-[0px_0px_1px_1px_var(--neutral-800)]",
                    onClick: _,
                    children: [
                      (0, n.jsx)(g.default, {
                        width: 100,
                        height: 100,
                        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png",
                        alt: "",
                        className: "w-4 h-4",
                      }),
                      (0, n.jsx)("span", {
                        className: "text-neutral-300 text-sm",
                        children: "Install Metamask",
                      }),
                    ],
                  }),
                }),
              y &&
                (0, n.jsxs)("div", {
                  className: "flex w-full justify-center gap-2",
                  children: [
                    (0, n.jsx)("button", {
                      type: "button",
                      onClick: () => {
                        e({ type: "disconnect" });
                      },
                      className:
                        " relative group/btn flex items-center justify-center p-2 w-full text-white rounded-md h-fit font-medium border border-red-800 bg-transparent shadow-[0px_0px_1px_1px_var(--neutral-800)]",
                      children: "Disconnect",
                    }),
                    (0, n.jsx)("button", {
                      type: "button",
                      onClick: N,
                      className:
                        " relative group/btn flex items-center justify-center p-2 w-full text-white rounded-md h-fit font-medium border border-zinc-800 bg-green-800 shadow-[0px_0px_1px_1px_var(--neutral-800)]",
                      children: "loading" === t ? (0, n.jsx)(h, {}) : "Login",
                    }),
                  ],
                }),
            ],
          })
        );
      }
      let j = () =>
        (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("span", {
              className:
                "group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent",
            }),
            (0, n.jsx)("span", {
              className:
                "group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent",
            }),
          ],
        });
      var y = a(64707),
        _ = a(11822),
        N = a(32233);
      let k = (0, a(43664).Z)("Wallet", [
        [
          "path",
          {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6",
          },
        ],
        [
          "path",
          { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" },
        ],
      ]);
      function A(e) {
        let { handleLogin: t } = e,
          { open: a } = (0, _.k_)(),
          { isConnected: s } = (0, y.useAccount)(),
          { disconnect: r } = (0, N.useDisconnect)();
        return s;
      }
      let C = () =>
        (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("span", {
              className:
                "group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent",
            }),
            (0, n.jsx)("span", {
              className:
                "group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent",
            }),
          ],
        });
      function M() {
        let { isConnected: e, address: t, chain: a } = (0, y.useAccount)(),
          s = (0, m.useRouter)(),
          r = async () => {
            w.Am.loading("Logging in with WalletConnect...");
            let e = await (0, x.signIn)("credentials", {
              metaAddress: t,
              metamask: !0,
              redirect: !1,
              chainName: ""
                .concat(null == a ? void 0 : a.name, " (")
                .concat(t, ")"),
            });
            (null == e ? void 0 : e.status) === 200 &&
              (w.Am.dismiss(),
              w.Am.success("Successfully Logged in!"),
              s.push("/dashboard"));
          };
        return (0, n.jsxs)("div", {
          className: e
            ? "z-[100] relative group group/btn flex flex-col p-4 gap-4 items-center justify-start px-4 h-fit w-full text-black rounded-md font-medium border border-zinc-800 bg-transparent shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            : " z-[100]",
          children: [
            e &&
              (0, n.jsx)(n.Fragment, {
                children: (0, n.jsxs)("div", {
                  className:
                    "overflow-hidden text-ellipsis whitespace-nowrap w-full text-white rounded-md",
                  children: [
                    (0, n.jsx)("h3", {
                      className: "text-sm flex font-medium text-white",
                      children: (0, n.jsx)("w3m-account-button", {
                        balance: "show",
                      }),
                    }),
                    (0, n.jsx)("p", {
                      className: "text-sm text-white",
                      children: (0, n.jsx)("w3m-network-button", {}),
                    }),
                  ],
                }),
              }),
            (0, n.jsx)(A, { handleLogin: r }),
          ],
        });
      }
      let L = u.Ry({ email: u.Z_().email(), password: u.Z_().min(8) });
      function S() {
        let { dispatch: e } = (0, f.U)(),
          t = b();
        (0, s.useEffect)(() => {
          {
            var a;
            let n =
                void 0 !== window.ethereum &&
                !!(null === (a = window.ethereum) || void 0 === a
                  ? void 0
                  : a.isMetaMask),
              s = window.localStorage.getItem("metamaskState");
            s && t();
            let { wallet: r, balance: l } = s
              ? JSON.parse(s)
              : { wallet: null, balance: null };
            e({
              type: "pageLoaded",
              isMetamaskInstalled: n,
              wallet: r,
              balance: l,
            });
          }
        }, []);
        let a = (0, m.useRouter)(),
          {
            register: r,
            handleSubmit: u,
            formState: { errors: p },
          } = (0, d.cI)({ resolver: (0, c.F)(L) }),
          h = async (e) => {
            w.Am.loading("Logging in...");
            let t = await (0, x.signIn)("credentials", {
              ...e,
              metamask: !1,
              redirect: !1,
              chainName: "MetaMask User",
            });
            (null == t ? void 0 : t.status) === 200
              ? (w.Am.dismiss(),
                w.Am.success("Successfully Logged in!"),
                a.push("/dashboard"))
              : (w.Am.dismiss(), w.Am.error("Invalid Credentials"));
          };
        return (0, n.jsxs)("div", {
          className:
            "max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 border border-zinc-800 bg-black/10 backdrop-blur-lg",
          children: [
            (0, n.jsx)("h2", {
              className: "font-bold text-2xl text-neutral-200 text-center",
              children: "Welcome to Deepsouth",
            }),
            (0, n.jsx)("p", {
              className: "text-xs max-w-sm mt-2 text-neutral-300 text-center",
              children: "Login to your account.",
            }),
            (0, n.jsxs)("form", {
              className: "my-8",
              onSubmit: u(h),
              children: [
                  (0, n.jsx)("div", {
                  className:
                    "bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full",
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "flex flex-col space-y-4",
              children: [(0, n.jsx)(M, {}), (0, n.jsx)(v, {})],
            }),
          ],
        });
      }
      let z = () =>
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("span", {
                className:
                  "group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent",
              }),
              (0, n.jsx)("span", {
                className:
                  "group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent",
              }),
            ],
          }),
        I = (e) => {
          let { children: t, className: a } = e;
          return (0, n.jsx)("div", {
            className: (0, r.cn)("flex flex-col space-y-2 w-full", a),
            children: t,
          });
        };
    },
    40279: function (e, t, a) {
      "use strict";
      a.d(t, {
        I: function () {
          return u;
        },
      });
      var n = a(45008),
        s = a(57437),
        r = a(2265),
        l = a(93448),
        i = a(81906),
        o = a(91926),
        d = a(22117);
      function c() {
        let e = (0, n._)([
          "\n        radial-gradient(\n          ",
          " circle at ",
          "px ",
          "px,\n          var(--blue-500),\n          transparent 80%\n        )\n      ",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      let u = r.forwardRef((e, t) => {
        let { className: a, type: n, ...u } = e,
          [m, x] = r.useState(!1),
          p = (0, i.c)(0),
          h = (0, i.c)(0);
        return (0, s.jsx)(o.E.div, {
          style: { background: (0, d.Y)(c(), m ? "100px" : "0px", p, h) },
          onMouseMove: function (e) {
            let { currentTarget: t, clientX: a, clientY: n } = e,
              { left: s, top: r } = t.getBoundingClientRect();
            p.set(a - s), h.set(n - r);
          },
          onMouseEnter: () => x(!0),
          onMouseLeave: () => x(!1),
          className: "p-[2px] rounded-lg transition duration-300 group/input",
          children: (0, s.jsx)("input", {
            type: n,
            className: (0, l.cn)(
              "flex h-10 w-full bg-transparent text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent\n          file:text-sm file:font-medium placeholder-text-neutral-600 \n          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-zinc-800\n           disabled:cursor-not-allowed disabled:opacity-50\n           shadow-[0px_0px_1px_1px_var(--zinc-800)]\n           group-hover/input:shadow-none transition duration-400 border border-zinc-800\n           ",
              a
            ),
            ref: t,
            ...u,
          }),
        });
      });
      u.displayName = "Input";
    },
    92287: function (e, t, a) {
      "use strict";
      a.d(t, {
        _: function () {
          return i;
        },
      });
      var n = a(57437),
        s = a(2265),
        r = a(6394),
        l = a(93448);
      let i = s.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, n.jsx)(r.f, {
          ref: t,
          className: (0, l.cn)(
            "text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            a
          ),
          ...s,
        });
      });
      i.displayName = r.f.displayName;
    },
    19838: function (e, t, a) {
      "use strict";
      a.d(t, {
        MetamaskProvider: function () {
          return o;
        },
        U: function () {
          return d;
        },
      });
      var n = a(57437),
        s = a(2265);
      let r = {
        wallet: null,
        isMetamaskInstalled: !1,
        status: "loading",
        balance: null,
      };
      function l(e, t) {
        switch (t.type) {
          case "connect": {
            let { wallet: a, balance: n } = t,
              s = { ...e, wallet: a, balance: n, status: "idle" },
              r = JSON.stringify(s);
            return window.localStorage.setItem("metamaskState", r), s;
          }
          case "disconnect":
            var a;
            return (
              window.localStorage.removeItem("metamaskState"),
              window.ethereum,
              null === (a = window.ethereum) ||
                void 0 === a ||
                a.removeAllListeners("accountsChanged"),
              { ...e, wallet: null, balance: null }
            );
          case "pageLoaded": {
            let { isMetamaskInstalled: a, balance: n, wallet: s } = t;
            return {
              ...e,
              isMetamaskInstalled: a,
              status: "idle",
              wallet: s,
              balance: n,
            };
          }
          case "loading":
            return { ...e, status: "loading" };
          case "idle":
            return { ...e, status: "idle" };
          default:
            throw Error("Unhandled action type");
        }
      }
      let i = s.createContext(void 0);
      function o(e) {
        let { children: t } = e,
          [a, o] = s.useReducer(l, r);
        return (0, n.jsx)(i.Provider, {
          value: { state: a, dispatch: o },
          children: t,
        });
      }
      function d() {
        let e = s.useContext(i);
        if (void 0 === e)
          throw Error("useMetamask must be used within a MetamaskProvider");
        return e;
      }
    },
    93448: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return r;
        },
      });
      var n = a(61994),
        s = a(53335);
      function r() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, s.m6)((0, n.W)(t));
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        3840, 3145, 605, 2972, 2957, 1926, 6314, 6137, 7261, 1770, 6670, 9442,
        2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 80435));
      }
    ),
      (_N_E = e.O());
  },
]);
