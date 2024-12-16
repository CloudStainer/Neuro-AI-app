(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    35883: function () {},
    46601: function () {},
    89214: function () {},
    64198: function (e, n, r) {
      Promise.resolve().then(r.t.bind(r, 56799, 23)),
        Promise.resolve().then(r.t.bind(r, 36539, 23)),
        Promise.resolve().then(r.bind(r, 7261)),
        Promise.resolve().then(r.t.bind(r, 2648, 23)),
        Promise.resolve().then(r.bind(r, 70335)),
        Promise.resolve().then(r.bind(r, 64707)),
        Promise.resolve().then(r.bind(r, 89472)),
        Promise.resolve().then(r.bind(r, 12620)),
        Promise.resolve().then(r.bind(r, 394)),
        Promise.resolve().then(r.bind(r, 23383)),
        Promise.resolve().then(r.bind(r, 69372)),
        Promise.resolve().then(r.bind(r, 18716)),
        Promise.resolve().then(r.bind(r, 45432)),
        Promise.resolve().then(r.bind(r, 44005)),
        Promise.resolve().then(r.bind(r, 54283)),
        Promise.resolve().then(r.bind(r, 94825)),
        Promise.resolve().then(r.bind(r, 12364)),
        Promise.resolve().then(r.bind(r, 39629)),
        Promise.resolve().then(r.bind(r, 17949)),
        Promise.resolve().then(r.bind(r, 21267)),
        Promise.resolve().then(r.bind(r, 85157)),
        Promise.resolve().then(r.bind(r, 55113)),
        Promise.resolve().then(r.bind(r, 32233)),
        Promise.resolve().then(r.bind(r, 32400)),
        Promise.resolve().then(r.bind(r, 60823)),
        Promise.resolve().then(r.bind(r, 95138)),
        Promise.resolve().then(r.bind(r, 67970)),
        Promise.resolve().then(r.bind(r, 67010)),
        Promise.resolve().then(r.bind(r, 34087)),
        Promise.resolve().then(r.bind(r, 28153)),
        Promise.resolve().then(r.bind(r, 26290)),
        Promise.resolve().then(r.bind(r, 75888)),
        Promise.resolve().then(r.bind(r, 77494)),
        Promise.resolve().then(r.bind(r, 38862)),
        Promise.resolve().then(r.bind(r, 66929)),
        Promise.resolve().then(r.bind(r, 84690)),
        Promise.resolve().then(r.bind(r, 38914)),
        Promise.resolve().then(r.bind(r, 27323)),
        Promise.resolve().then(r.bind(r, 16986)),
        Promise.resolve().then(r.bind(r, 91300)),
        Promise.resolve().then(r.bind(r, 48320)),
        Promise.resolve().then(r.bind(r, 91196)),
        Promise.resolve().then(r.bind(r, 83034)),
        Promise.resolve().then(r.bind(r, 24533)),
        Promise.resolve().then(r.bind(r, 37635)),
        Promise.resolve().then(r.bind(r, 51292)),
        Promise.resolve().then(r.bind(r, 46327)),
        Promise.resolve().then(r.bind(r, 33017)),
        Promise.resolve().then(r.bind(r, 71353)),
        Promise.resolve().then(r.bind(r, 81574)),
        Promise.resolve().then(r.bind(r, 39488)),
        Promise.resolve().then(r.bind(r, 63146)),
        Promise.resolve().then(r.bind(r, 50372)),
        Promise.resolve().then(r.bind(r, 13237)),
        Promise.resolve().then(r.bind(r, 2398)),
        Promise.resolve().then(r.bind(r, 37073)),
        Promise.resolve().then(r.bind(r, 67185)),
        Promise.resolve().then(r.bind(r, 13359)),
        Promise.resolve().then(r.bind(r, 49487)),
        Promise.resolve().then(r.bind(r, 43946)),
        Promise.resolve().then(r.bind(r, 2724)),
        Promise.resolve().then(r.bind(r, 78787)),
        Promise.resolve().then(r.bind(r, 41599)),
        Promise.resolve().then(r.bind(r, 19838)),
        Promise.resolve().then(r.bind(r, 48958)),
        Promise.resolve().then(r.bind(r, 96709)),
        Promise.resolve().then(r.t.bind(r, 69268, 23)),
        Promise.resolve().then(r.bind(r, 62170));
    },
    19838: function (e, n, r) {
      "use strict";
      r.d(n, {
        MetamaskProvider: function () {
          return d;
        },
        U: function () {
          return a;
        },
      });
      var i = r(57437),
        t = r(2265);
      let o = {
        wallet: null,
        isMetamaskInstalled: !1,
        status: "loading",
        balance: null,
      };
      function s(e, n) {
        switch (n.type) {
          case "connect": {
            let { wallet: r, balance: i } = n,
              t = { ...e, wallet: r, balance: i, status: "idle" },
              o = JSON.stringify(t);
            return window.localStorage.setItem("metamaskState", o), t;
          }
          case "disconnect":
            var r;
            return (
              window.localStorage.removeItem("metamaskState"),
              window.ethereum,
              null === (r = window.ethereum) ||
                void 0 === r ||
                r.removeAllListeners("accountsChanged"),
              { ...e, wallet: null, balance: null }
            );
          case "pageLoaded": {
            let { isMetamaskInstalled: r, balance: i, wallet: t } = n;
            return {
              ...e,
              isMetamaskInstalled: r,
              status: "idle",
              wallet: t,
              balance: i,
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
      let l = t.createContext(void 0);
      function d(e) {
        let { children: n } = e,
          [r, d] = t.useReducer(s, o);
        return (0, i.jsx)(l.Provider, {
          value: { state: r, dispatch: d },
          children: n,
        });
      }
      function a() {
        let e = t.useContext(l);
        if (void 0 === e)
          throw Error("useMetamask must be used within a MetamaskProvider");
        return e;
      }
    },
    48958: function (e, n, r) {
      "use strict";
      var i = r(80605);
      n.default = i.SessionProvider;
    },
    96709: function (e, n, r) {
      "use strict";
      r.d(n, {
        default: function () {
          return g;
        },
      });
      var i = r(57437);
      r(2265);
      var t = r(21758),
        o = r(51153),
        s = r(31213),
        l = r(64314),
        d = r(54518),
        a = r(52054),
        m = r(55625);
      let h = "5d7adf77baee6a01ad5b08905b5fbfb0";
      if (!h) throw Error("Project ID is not defined");
      let v = {
          name: "deepsouth",
          description: "AppKit Example",
          url: "https://reown.com/appkit",
          icons: ["https://assets.reown.com/reown-profile-pic.png"],
        },
        b = [l.R, d.y, a.u, m.F],
        P = (0, t.o)({
          chains: b,
          projectId: h,
          metadata: v,
          auth: { email: !1, socials: [], showWallets: !0, walletFeatures: !0 },
          ssr: !0,
          storage: (0, o.o)({ storage: s.Dr }),
        });
      var u = r(11822),
        c = r(54114),
        f = r(29827),
        w = r(70335);
      let p = new c.S();
      if (!h) throw Error("Project ID is not defined");
      function g(e) {
        let { children: n, initialState: r } = e;
        return (0, i.jsx)(w.WagmiProvider, {
          config: P,
          initialState: r,
          children: (0, i.jsx)(f.aH, { client: p, children: n }),
        });
      }
      (0, u.OY)({
        metadata: v,
        wagmiConfig: P,
        projectId: h,
        enableAnalytics: !0,
        enableOnramp: !0,
        themeMode: "dark",
        themeVariables: {
          "--w3m-font-family": "Verdana",
          "--w3m-border-radius-master": "2px",
          "--w3m-z-index": 100,
        },
      });
    },
    62170: function (e, n, r) {
      "use strict";
      let i;
      r.d(n, {
        TRPCReactProvider: function () {
          return P;
        },
        h: function () {
          return b;
        },
      });
      var t = r(57437),
        o = r(54114),
        s = r(29827),
        l = r(70284),
        d = r(3413),
        a = r(2265),
        m = r(48080);
      r(25566);
      let h = () => new o.S(),
        v = () => (null != i ? i : (i = h())),
        b = (0, d.ec)();
      function P(e) {
        let n = v(),
          [r] = (0, a.useState)(() =>
            b.createClient({
              links: [
                (0, l.gb)({
                  enabled: (e) =>
                    "down" === e.direction && e.result instanceof Error,
                }),
                (0, l.Pq)({
                  transformer: m.ZP,
                  url: window.location.origin + "/api/trpc",
                  headers: () => {
                    let e = new Headers();
                    return e.set("x-trpc-source", "nextjs-react"), e;
                  },
                }),
              ],
            })
          );
        return (0, t.jsx)(s.aH, {
          client: n,
          children: (0, t.jsx)(b.Provider, {
            client: r,
            queryClient: n,
            children: e.children,
          }),
        });
      }
    },
    69268: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        5300, 7825, 3840, 605, 2957, 7261, 1770, 6670, 4735, 5835, 483, 2435,
        2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 64198));
      }
    ),
      (_N_E = e.O());
  },
]);
