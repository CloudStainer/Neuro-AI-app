(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7486],
  {
    74161: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 96942));
    },
    95640: function (e, t, l) {
      "use strict";
      l.d(t, {
        $i: function () {
          return o;
        },
        DH: function () {
          return a;
        },
        Hz: function () {
          return s;
        },
        dB: function () {
          return r;
        },
        eF: function () {
          return n;
        },
      }),
        l(83079);
      var i = l(12119),
        n = (0, i.$)("6544161653e34805527385cae73648305883bce6"),
        r = (0, i.$)("3d1285b678a24c4f19e293a542ac93cc62e45853"),
        s = (0, i.$)("015980ac8f754eef066b3d5d8edb5f2801cdc351"),
        a = (0, i.$)("e14949336df7cb2c2e916a12b1ccbeac7029566a"),
        o = (0, i.$)("733a2294a7df8e84a763064861968c178b1dc709");
      (0, i.$)("fb572f37cf6114a5ada53d7a187747e009c91f9e");
    },
    50907: function (e, t, l) {
      "use strict";
      l.d(t, {
        Fi: function () {
          return n;
        },
        HS: function () {
          return r;
        },
        Yv: function () {
          return s;
        },
      }),
        l(83079);
      var i = l(12119),
        n = (0, i.$)("8580955685f891cf125c6ed2a95f5c5c570c7e15"),
        r = (0, i.$)("12520cd2450fb25c202e9fd80b9c8878536a0caf"),
        s = (0, i.$)("59df820609ebda4d8a5a2dd26c9bca2b76d18a49");
      (0, i.$)("a58bfe260709999af34023c2e0c30e50cd1ebaba");
    },
    74599: function (e, t, l) {
      "use strict";
      var i = l(57437);
      t.Z = (e) => {
        let { message: t, show: l } = e;
        return l
          ? (0, i.jsx)("div", {
              className:
                "fixed z-[100] top-0 md:px-6 md:top-4 md:right-0 md:min-w-[450px] md:max-w-md w-full bg-gradient-to-r from-[#141414] to-[#7A7A7A] text-white py-5 flex items-center border rounded-b-xl border-gray-600 md:rounded-l-3xl md:rounded-none justify-center shadow-md shadow-gray-300",
              role: "alert",
              children: t,
            })
          : null;
      };
    },
    96942: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return k;
          },
        });
      var i = l(57437),
        n = l(95640),
        r = l(50907),
        s = l(74599),
        a = l(30166),
        o = l(91926),
        d = l(48614),
        u = l(2265),
        c = l(93448),
        f = l(15626);
      function m(e) {
        let {
            placeholders: t,
            onChange: l,
            onSubmit: n,
            instrumental: r,
            setInstrumental: s,
          } = e,
          [a, m] = (0, u.useState)(0),
          v = (0, u.useRef)(null),
          x = () => {
            v.current = setInterval(() => {
              m((e) => (e + 1) % t.length);
            }, 3e3);
          },
          h = () => {
            "visible" !== document.visibilityState && v.current
              ? (clearInterval(v.current), (v.current = null))
              : "visible" === document.visibilityState && x();
          };
        (0, u.useEffect)(
          () => (
            x(),
            document.addEventListener("visibilitychange", h),
            () => {
              v.current && clearInterval(v.current),
                document.removeEventListener("visibilitychange", h);
            }
          ),
          [t]
        );
        let p = (0, u.useRef)(null),
          b = (0, u.useRef)([]),
          g = (0, u.useRef)(null),
          [w, j] = (0, u.useState)(""),
          [y, N] = (0, u.useState)(!1),
          k = (0, u.useCallback)(() => {
            if (!g.current) return;
            let e = p.current;
            if (!e) return;
            let t = e.getContext("2d");
            if (!t) return;
            (e.width = 800), (e.height = 800), t.clearRect(0, 0, 800, 800);
            let l = getComputedStyle(g.current),
              i = parseFloat(l.getPropertyValue("font-size"));
            (t.font = "".concat(2 * i, "px ").concat(l.fontFamily)),
              (t.fillStyle = "#FFF"),
              t.fillText(w, 16, 40);
            let n = t.getImageData(0, 0, 800, 800).data,
              r = [];
            for (let e = 0; e < 800; e++) {
              let t = 4 * e * 800;
              for (let l = 0; l < 800; l++) {
                let i = t + 4 * l;
                0 !== n[i] &&
                  0 !== n[i + 1] &&
                  0 !== n[i + 2] &&
                  r.push({
                    x: l,
                    y: e,
                    color: [n[i], n[i + 1], n[i + 2], n[i + 3]],
                  });
              }
            }
            b.current = r.map((e) => {
              let { x: t, y: l, color: i } = e;
              return {
                x: t,
                y: l,
                r: 1,
                color: "rgba("
                  .concat(i[0], ", ")
                  .concat(i[1], ", ")
                  .concat(i[2], ", ")
                  .concat(i[3], ")"),
              };
            });
          }, [w]);
        (0, u.useEffect)(() => {
          k();
        }, [w, k]);
        let S = (e) => {
            let t = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              requestAnimationFrame(() => {
                var l;
                let i = [];
                for (let t = 0; t < b.current.length; t++) {
                  let l = b.current[t];
                  if (l.x < e) i.push(l);
                  else {
                    if (l.r <= 0) {
                      l.r = 0;
                      continue;
                    }
                    (l.x += Math.random() > 0.5 ? 1 : -1),
                      (l.y += Math.random() > 0.5 ? 1 : -1),
                      (l.r -= 0.05 * Math.random()),
                      i.push(l);
                  }
                }
                b.current = i;
                let n =
                  null === (l = p.current) || void 0 === l
                    ? void 0
                    : l.getContext("2d");
                n &&
                  (n.clearRect(e, 0, 800, 800),
                  b.current.forEach((t) => {
                    let { x: l, y: i, r: r, color: s } = t;
                    l > e &&
                      (n.beginPath(),
                      n.rect(l, i, r, r),
                      (n.fillStyle = s),
                      (n.strokeStyle = s),
                      n.stroke());
                  })),
                  b.current.length > 0 ? t(e - 8) : (j(""), N(!1));
              });
            };
            t(e);
          },
          _ = () => {
            var e, t;
            N(!0),
              k(),
              (null !==
                (t =
                  null === (e = g.current) || void 0 === e
                    ? void 0
                    : e.value) && void 0 !== t
                ? t
                : "") &&
                g.current &&
                S(b.current.reduce((e, t) => (t.x > e ? t.x : e), 0));
          };
        return (0, i.jsxs)("form", {
          className: (0, c.cn)(
            "w-full h-full text-white relative bg-transparent overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200"
          ),
          onSubmit: (e) => {
            e.preventDefault(), _(), n && n(e);
          },
          children: [
            (0, i.jsx)("canvas", {
              className: (0, c.cn)(
                "absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0",
                y ? "opacity-100" : "opacity-0"
              ),
              ref: p,
            }),
            (0, i.jsx)("input", {
              onChange: (e) => {
                !y && (j(e.target.value), l && l(e));
              },
              onKeyDown: (e) => {
                "Enter" !== e.key || y || _();
              },
              ref: g,
              value: w,
              type: "text",
              className: (0, c.cn)(
                "w-full relative text-sm sm:text-base z-50 border-none text-white bg-transparent h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-2",
                y && "text-transparent dark:text-transparent"
              ),
            }),
            (0, i.jsxs)("div", {
              className:
                "absolute right-0 top-0 z-50 flex justify-end items-center h-full w-fit group gap-[1px]",
              children: [
                (0, i.jsx)("button", {
                  type: "button",
                  onClick: async () => s(!r),
                  className:
                    "z-50 flex items-center justify-center h-full sm:px-4 py-1 sm:min-w-14 text-white transition duration-200 sm:hover:bg-[#3b3b3c]" +
                    (r ? " rounded-l-md sm:bg-[#3b3b3c]" : " rounded-full"),
                  children: (0, i.jsx)(f.Z, {
                    className:
                      "w-4" +
                      (r ? " text-white" : " sm:text-white text-[#3b3b3c]"),
                  }),
                }),
                (0, i.jsx)("button", {
                  disabled: !w,
                  type: "submit",
                  className:
                    "z-50 h-full sm:disabled:bg-[#3b3b3c] sm:dark:disabled:bg-zinc-800 sm:min-w-14 flex items-center justify-center sm:bg-[#3b3b3c] sm:px-4 px-1 py-1 transition duration-200 hover:bg-[#3b3b3c]" +
                    (r ? " rounded-r-full" : " rounded-full"),
                  children: (0, i.jsxs)(o.E.svg, {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "text-white h-6 w-6",
                    children: [
                      (0, i.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1,
                        d: "M14 5l7 7m0 0l-7 7m7-7H3",
                      }),
                      (0, i.jsx)(o.E.path, {
                        d: "M5 12l14 0",
                        initial: {
                          strokeDasharray: "50%",
                          strokeDashoffset: "50%",
                        },
                        animate: { strokeDashoffset: w ? 0 : "50%" },
                        transition: { duration: 0.3, ease: "linear" },
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className:
                "absolute inset-0 flex items-center rounded-full pointer-events-none",
              children: (0, i.jsx)(d.M, {
                mode: "wait",
                children:
                  !w &&
                  (0, i.jsx)(
                    o.E.p,
                    {
                      initial: { y: 5, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      exit: { y: -15, opacity: 0 },
                      transition: { duration: 0.3, ease: "linear" },
                      className:
                        "dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-2 text-left w-[calc(100%-2rem)] truncate",
                      children: t[a],
                    },
                    "current-placeholder-".concat(a)
                  ),
              }),
            }),
          ],
        });
      }
      var v = l(32903),
        x = l(71769),
        h = l(92735),
        p = l(99397),
        b = l(80605),
        g = l(33145),
        w = l(99376),
        j = l(99274);
      let y = (0, a.default)(
          () => Promise.all([l.e(6689), l.e(8187)]).then(l.bind(l, 48187)),
          { loadableGenerated: { webpack: () => [48187] }, ssr: !1 }
        ),
        N = [
          "Longing for Simpler Times",
          "Falling for the Wrong Person",
          "The Fear of Missing Out",
          "Love After Heartbreak",
          "Life in the Digital Age",
          "Self - Empowerment Anthem",
          "The Beauty of Imperfection",
          "Finding Peace in Chaos",
          "A Love That Never Was",
          "Chasing Dreams Against the Odds",
        ];
      var k = () => {
        let [e, t] = (0, u.useState)(!1),
          [l, a] = (0, u.useState)(""),
          [o, d] = (0, u.useState)(""),
          [c, f] = (0, u.useState)(!1),
          k = (0, b.useSession)(),
          [S, _] = (0, u.useState)(!1),
          [U, C] = (0, u.useState)([]),
          [E, z] = (0, u.useState)([]),
          [A, I] = (0, u.useState)(null),
          [L, D] = (0, u.useState)(!1),
          [F, R] = (0, u.useState)(null),
          [P, T] = (0, u.useState)(!0),
          $ = (0, w.usePathname)(),
          M = (0, w.useSearchParams)().get("roomId"),
          H = (e) => {
            a(e), t(!0), setTimeout(() => t(!1), 3e3);
          };
        async function Z(e) {
          var t, l, i, s, a, o, u, c, m, x, h, p, b, g, w, j, y, N, S, _;
          if ("" === e) {
            H("Please enter a question.");
            return;
          }
          let U = null != A ? A : (0, v.r)(),
            C = {
              id: E.length + 1,
              message: e.toString(),
              audioUrl: null,
              roomId: U.toString(),
              sender: "user",
              urlAttachments: [],
            };
          null === A &&
            (await (0, n.dB)(
              null !==
                (x =
                  null === (o = C.message) || void 0 === o
                    ? void 0
                    : o.slice(0, 20)) && void 0 !== x
                ? x
                : "No Title",
              null !==
                (h =
                  null === (m = k.data) || void 0 === m
                    ? void 0
                    : null === (c = m.user) || void 0 === c
                    ? void 0
                    : null === (u = c.email) || void 0 === u
                    ? void 0
                    : u.toString()) && void 0 !== h
                ? h
                : "",
              "suno",
              "suno",
              U.toString()
            )),
            await (0, n.Hz)(
              C.id,
              null !== (p = C.roomId) && void 0 !== p ? p : "",
              null !==
                (g = null !== (b = C.message) && void 0 !== b ? b : null) &&
                void 0 !== g
                ? g
                : "",
              C.sender,
              null !== (w = C.urlAttachments) && void 0 !== w ? w : []
            ),
            z((e) => [...e, C]),
            d(""),
            f(!0),
            T(!0);
          let D = await (0, r.Fi)(
            e.toString(),
            L,
            null !==
              (j =
                null === (l = k.data) || void 0 === l
                  ? void 0
                  : null === (t = l.user) || void 0 === t
                  ? void 0
                  : t.email) && void 0 !== j
              ? j
              : ""
          );
          if (
            (null == D
              ? void 0
              : null === (i = D.clips[0]) || void 0 === i
              ? void 0
              : i.id) === null &&
            (null == D
              ? void 0
              : null === (s = D.clips[0]) || void 0 === s
              ? void 0
              : s.display_name) === "limit"
          ) {
            H("Your Credit limit Reached"), f(!1);
            return;
          }
          (C = {
            id: E.length + 2,
            message:
              null !==
                (y =
                  null == D
                    ? void 0
                    : null === (a = D.clips[0]) || void 0 === a
                    ? void 0
                    : a.id) && void 0 !== y
                ? y
                : "",
            audioUrl: null != D ? D : null,
            roomId: null == U ? void 0 : U.toString(),
            sender: "bot",
            urlAttachments: [],
          }),
            console.log("response:", D),
            await (0, n.Hz)(
              C.id,
              null !== (N = C.roomId) && void 0 !== N ? N : "",
              null !== (S = C.message) && void 0 !== S ? S : "",
              C.sender,
              null !== (_ = C.urlAttachments) && void 0 !== _ ? _ : []
            ),
            z((e) => [...e, C]);
          let F = "".concat($, "?roomId=").concat(U);
          null === A &&
            (void 0 !== window &&
              window.history.pushState(
                { ...window.history.state, as: F, url: F },
                "",
                F
              ),
            I(U)),
            f(!1);
        }
        async function O(e) {
          await Z(e);
        }
        let W = async (e) => {
            e.preventDefault(), await O(o);
          },
          B = (0, u.useRef)(null);
        (0, u.useEffect)(() => {
          if (E.length) {
            var e;
            null === (e = B.current) ||
              void 0 === e ||
              e.scrollIntoView({ behavior: "smooth", block: "end" });
          }
        }, [E.length]);
        let Y = async () => {
          if (M) {
            let e = (await (0, n.DH)(M)).map((e) => {
              var t, l, i, n;
              return {
                id: null !== (t = e.id) && void 0 !== t ? t : 0,
                message: null !== (l = e.message) && void 0 !== l ? l : "",
                roomId: null !== (i = e.roomId) && void 0 !== i ? i : "",
                sender: null !== (n = e.sender) && void 0 !== n ? n : "user",
                urlAttachments: [],
              };
            });
            console.log(e);
            let t = await (0, r.HS)();
            z([]),
              R(null),
              C(
                await Promise.all(
                  e.map(
                    async (e) => (
                      console.log(e),
                      {
                        ...e,
                        message: e.message,
                        audioUrl:
                          "bot" === e.sender
                            ? await (0, r.Yv)(e.message, t)
                            : null,
                      }
                    )
                  )
                )
              );
          }
        };
        (0, u.useEffect)(() => {
          M && (I(M), Y());
        }, [M, S]);
        let q = async (e) => {
          let t = await fetch(e),
            l = await t.blob(),
            i = window.URL.createObjectURL(l),
            n = document.createElement("a");
          (n.href = i),
            (n.download = "audio.mp3"),
            n.click(),
            window.URL.revokeObjectURL(i);
        };
        return (0, i.jsxs)("div", {
          className: "relative flex gap-2 flex-1 w-full h-full",
          children: [
            (0, i.jsx)("div", {
              className: "flex w-full h-full rounded-xl text-white",
              children: (0, i.jsx)("div", {
                className:
                  "z-50 flex h-full w-full items-center justify-center",
                children: F
                  ? (0, i.jsx)("div", {
                      className:
                        "absolute left-0 flex justify-end items-end w-fit h-full",
                      children: (0, i.jsx)(y, {
                        audioSrc: F,
                        setEndedPlayback: _,
                      }),
                    })
                  : (0, i.jsx)("div", {
                      className:
                        "h-full w-full flex items-end justify-center md:px-0 px-2 pb-2",
                      children: (0, i.jsx)("div", {
                        className:
                          "relative flex w-full h-12 max-w-full md:max-w-[60%] items-center justify-center rounded-full border border-[#3b3b3c] bg-black bg-opacity-60 p-1",
                        children: (0, i.jsx)(m, {
                          placeholders: N,
                          onChange: (e) => {
                            d(e.target.value);
                          },
                          onSubmit: W,
                          instrumental: L,
                          setInstrumental: D,
                        }),
                      }),
                    }),
              }),
            }),
            (0, i.jsx)("div", {
              className: "absolute z-50 top-2 right-2 flex gap-4",
              children: (0, i.jsx)(x.Z, {
                onClick: () => {
                  T(!P);
                },
                className:
                  "z-50 md:hidden text-white md:text-neutral-700 stroke-2 md:stroke-1 cursor-pointer",
              }),
            }),
            (0, i.jsxs)("div", {
              className:
                "z-50 absolute md:flex flex-col gap-2 h-fit max-h-[80%] w-[97%] sm:max-w-96 items-end justify-start top-12 sm:top-16 right-2 bg-black/30 backdrop-blur-lg p-4 border border-neutral-700 rounded-2xl overflow-y-auto" +
                (P ? " flex" : " hidden"),
              children: [
                U.map((e, t) => {
                  var l, n, r, s, a, o, d, u, c, f, m;
                  return (
                    "bot" === e.sender &&
                    (0, i.jsxs)(
                      "div",
                      {
                        className:
                          "flex h-20 gap-2 w-full bg-black/30 backdrop-blur-lg p-[1px] rounded-lg border border-white/20",
                        children: [
                          (0, i.jsx)("div", {
                            onClick: () => {
                              R(null),
                                setTimeout(() => {
                                  var t, l;
                                  let i =
                                    null === (l = e.audioUrl) || void 0 === l
                                      ? void 0
                                      : null ===
                                          (t = l.clips.filter((e) =>
                                            e.audio_url.includes("cdn")
                                          )[0]) || void 0 === t
                                      ? void 0
                                      : t.audio_url;
                                  R(null != i ? i : null), T(!1);
                                }, 2e3);
                            },
                            className:
                              "flex justify-center items-center w-fit h-fit cursor-pointer",
                            children: (0, i.jsx)(g.default, {
                              width: 100,
                              height: 100,
                              src: "/assets/music_logo.png",
                              className: "rounded-l-[6px] p-3",
                              alt: "",
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex justify-between items-center w-full p-2",
                            children: [
                              (0, i.jsxs)("div", {
                                className:
                                  "flex flex-col justify-center items-start",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-start text-sm font-medium text-white",
                                    children:
                                      null === (r = e.audioUrl) || void 0 === r
                                        ? void 0
                                        : null === (n = r.clips[0]) ||
                                          void 0 === n
                                        ? void 0
                                        : null ===
                                            (l =
                                              n.metadata
                                                .gpt_description_prompt) ||
                                          void 0 === l
                                        ? void 0
                                        : l.slice(0, 35),
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-sm italic font-thin text-start" +
                                      ((null === (a = e.audioUrl) ||
                                      void 0 === a
                                        ? void 0
                                        : null === (s = a.clips[0]) ||
                                          void 0 === s
                                        ? void 0
                                        : s.title) === ""
                                        ? " text-red-500"
                                        : " text-white"),
                                    children:
                                      (null === (d = e.audioUrl) || void 0 === d
                                        ? void 0
                                        : null === (o = d.clips[0]) ||
                                          void 0 === o
                                        ? void 0
                                        : o.title) !== ""
                                        ? null === (c = e.audioUrl) ||
                                          void 0 === c
                                          ? void 0
                                          : null === (u = c.clips[0]) ||
                                            void 0 === u
                                          ? void 0
                                          : u.title
                                        : "Music not generated",
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "flex flex-col gap-2 justify-between items-center",
                                children: [
                                  (0, i.jsx)("div", {
                                    onClick: () => {
                                      R(null),
                                        setTimeout(() => {
                                          var t, l, i;
                                          R(
                                            null !==
                                              (i =
                                                null === (l = e.audioUrl) ||
                                                void 0 === l
                                                  ? void 0
                                                  : null === (t = l.clips[0]) ||
                                                    void 0 === t
                                                  ? void 0
                                                  : t.audio_url) && void 0 !== i
                                              ? i
                                              : null
                                          ),
                                            T(!1);
                                        }, 2e3);
                                    },
                                    className:
                                      "w-fit justify-center items-center",
                                    children: (0, i.jsx)(j.Z, {
                                      className:
                                        "text-white cursor-pointer w-4 h-4",
                                    }),
                                  }),
                                  (null === (m = e.audioUrl) || void 0 === m
                                    ? void 0
                                    : null === (f = m.clips[0]) || void 0 === f
                                    ? void 0
                                    : f.audio_url.includes("cdn")) &&
                                    (0, i.jsx)("button", {
                                      onClick: () => {
                                        var t, l, i;
                                        return q(
                                          null !==
                                            (i =
                                              null === (l = e.audioUrl) ||
                                              void 0 === l
                                                ? void 0
                                                : null === (t = l.clips[0]) ||
                                                  void 0 === t
                                                ? void 0
                                                : t.audio_url) && void 0 !== i
                                            ? i
                                            : ""
                                        );
                                      },
                                      className:
                                        "w-fit justify-center items-center",
                                      children: (0, i.jsx)(h.Z, {
                                        className: "text-white w-4 h-4",
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  );
                }),
                E.map((e, t) => {
                  var l, n, r, s, a, o, d, u, c, f, m;
                  return (
                    "bot" === e.sender &&
                    (0, i.jsxs)(
                      "div",
                      {
                        className:
                          "flex h-20 gap-2 w-full bg-black/30 backdrop-blur-lg rounded-lg border border-white/20 p-4",
                        children: [
                          (0, i.jsx)("div", {
                            onClick: () => {
                              R(null),
                                setTimeout(() => {
                                  var t, l, i;
                                  R(
                                    null !==
                                      (i =
                                        null === (l = e.audioUrl) ||
                                        void 0 === l
                                          ? void 0
                                          : null === (t = l.clips[0]) ||
                                            void 0 === t
                                          ? void 0
                                          : t.audio_url) && void 0 !== i
                                      ? i
                                      : null
                                  ),
                                    T(!1);
                                }, 2e3);
                            },
                            className:
                              "flex justify-center items-center w-fit h-fit cursor-pointer",
                            children: (0, i.jsx)(g.default, {
                              width: 100,
                              height: 100,
                              src: "/assets/music_logo.png",
                              className: "rounded-l-[6px] p-3",
                              alt: "",
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex justify-between items-center w-full p-2",
                            children: [
                              (0, i.jsxs)("div", {
                                className:
                                  "flex flex-col justify-center items-start",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-start text-sm font-medium text-white",
                                    children:
                                      null === (r = e.audioUrl) || void 0 === r
                                        ? void 0
                                        : null === (n = r.clips[0]) ||
                                          void 0 === n
                                        ? void 0
                                        : null ===
                                            (l =
                                              n.metadata
                                                .gpt_description_prompt) ||
                                          void 0 === l
                                        ? void 0
                                        : l.slice(0, 35),
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-sm italic font-thin text-start" +
                                      ((null === (a = e.audioUrl) ||
                                      void 0 === a
                                        ? void 0
                                        : null === (s = a.clips[0]) ||
                                          void 0 === s
                                        ? void 0
                                        : s.title) === ""
                                        ? " text-red-500"
                                        : " text-white"),
                                    children:
                                      (null === (d = e.audioUrl) || void 0 === d
                                        ? void 0
                                        : null === (o = d.clips[0]) ||
                                          void 0 === o
                                        ? void 0
                                        : o.title) !== ""
                                        ? null === (c = e.audioUrl) ||
                                          void 0 === c
                                          ? void 0
                                          : null === (u = c.clips[0]) ||
                                            void 0 === u
                                          ? void 0
                                          : u.title
                                        : "Music not generated",
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "flex flex-col gap-2 justify-between items-center",
                                children: [
                                  (0, i.jsx)("div", {
                                    onClick: () => {
                                      R(null),
                                        setTimeout(() => {
                                          var t, l, i;
                                          R(
                                            null !==
                                              (i =
                                                null === (l = e.audioUrl) ||
                                                void 0 === l
                                                  ? void 0
                                                  : null === (t = l.clips[0]) ||
                                                    void 0 === t
                                                  ? void 0
                                                  : t.audio_url) && void 0 !== i
                                              ? i
                                              : null
                                          ),
                                            T(!1);
                                        }, 2e3);
                                    },
                                    className:
                                      "w-fit justify-center items-center",
                                    children: (0, i.jsx)(j.Z, {
                                      className:
                                        "text-white cursor-pointer w-4 h-4",
                                    }),
                                  }),
                                  (null === (m = e.audioUrl) || void 0 === m
                                    ? void 0
                                    : null === (f = m.clips[0]) || void 0 === f
                                    ? void 0
                                    : f.audio_url.includes("cdn")) &&
                                    (0, i.jsx)("button", {
                                      onClick: () => {
                                        var t, l, i;
                                        return q(
                                          null !==
                                            (i =
                                              null === (l = e.audioUrl) ||
                                              void 0 === l
                                                ? void 0
                                                : null === (t = l.clips[0]) ||
                                                  void 0 === t
                                                ? void 0
                                                : t.audio_url) && void 0 !== i
                                            ? i
                                            : ""
                                        );
                                      },
                                      className:
                                        "w-fit justify-center items-center",
                                      children: (0, i.jsx)(h.Z, {
                                        className: "text-white w-4 h-4",
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  );
                }),
                c &&
                  (0, i.jsxs)("div", {
                    className:
                      "flex gap-2 h-20 w-full bg-black/30 backdrop-blur-lg p-[1px] rounded-lg border border-white/20",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "flex justify-center items-center w-fit h-fit",
                        children: (0, i.jsx)("div", {
                          className:
                            "w-20 h-20 bg-gray-600 animate-pulse rounded-l-[6px]",
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "flex justify-between items-center w-full p-2",
                        children: [
                          (0, i.jsxs)("div", {
                            className:
                              "flex flex-col justify-center items-start space-y-2",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "w-[60px] h-[20px] bg-gray-600 animate-pulse rounded-full",
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "w-[80px] h-[15px] bg-gray-500 animate-pulse rounded-full",
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "w-6 h-6 bg-gray-600 animate-pulse rounded-full",
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, i.jsx)("div", {
                  onClick: () => {
                    R(null);
                  },
                  className:
                    "border border-dashed w-full p-4 flex justify-center items-center cursor-pointer rounded-lg",
                  children: (0, i.jsx)(p.Z, { className: "text-white" }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "absolute z-50",
              children: (0, i.jsx)(s.Z, { message: l, show: e }),
            }),
          ],
        });
      };
    },
    93448: function (e, t, l) {
      "use strict";
      l.d(t, {
        cn: function () {
          return r;
        },
      });
      var i = l(61994),
        n = l(53335);
      function r() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, n.m6)((0, i.W)(t));
      }
    },
    32903: function (e, t, l) {
      "use strict";
      function i() {
        return (
          Date.now().toString(36) + Math.random().toString(36).slice(2, 18)
        );
      }
      l.d(t, {
        r: function () {
          return i;
        },
      });
    },
  },
  function (e) {
    e.O(0, [3145, 605, 1926, 6137, 1879, 2971, 2117, 1744], function () {
      return e((e.s = 74161));
    }),
      (_N_E = e.O());
  },
]);
