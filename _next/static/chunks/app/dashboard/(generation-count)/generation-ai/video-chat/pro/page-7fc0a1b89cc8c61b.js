(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6650],
  {
    55609: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 89081));
    },
    89081: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return N;
          },
        });
      var s = l(57437),
        i = l(36434),
        n = l(74599),
        r = l(32903),
        a = l(99388);
      let d = (0, l(43664).Z)("Paperclip", [
        [
          "path",
          {
            d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
            key: "1u3ebp",
          },
        ],
      ]);
      var c = l(5865),
        o = l(92261),
        u = l(36715),
        x = l(26327),
        m = l(41414),
        h = l(69076),
        v = l(43391),
        g = l(45802),
        f = l(80605),
        p = l(99376),
        j = l(2265),
        b = l(91926),
        w = l(53017),
        y = l(33145),
        E = l(43464),
        N = () => {
          let [e, t] = (0, j.useState)(!1),
            [l, N] = (0, j.useState)(""),
            [k, F] = (0, j.useState)(""),
            C = (0, f.useSession)(),
            D = (0, p.useRouter)(),
            [S, Z] = (0, j.useState)([]),
            [I, L] = (0, j.useState)(null),
            P = (0, j.useRef)(null),
            q = (0, j.useRef)(null),
            [H, R] = (0, j.useState)(""),
            [T, M] = (0, j.useState)("1:1"),
            [U, B] = (0, j.useState)(20),
            [_, z] = (0, j.useState)(!1),
            [A, O] = (0, j.useState)("right"),
            [V, K] = (0, j.useState)("up"),
            [G, J] = (0, j.useState)("cw"),
            [Y, Q] = (0, j.useState)("in"),
            [W, X] = (0, j.useState)(16),
            [$, ee] = (0, j.useState)(2),
            [et, el] = (0, j.useState)(""),
            [es, ei] = (0, j.useState)(144124),
            [en, er] = (0, j.useState)(!1),
            [ea, ed] = (0, j.useState)(null),
            [ec, eo] = (0, j.useState)(!1),
            [eu, ex] = (0, j.useState)(""),
            [em, eh] = (0, j.useState)(!1),
            ev = (0, j.useRef)(null),
            eg = ["mpg", "mp2", "mpeg", "mpe", "mpv", "mp4"],
            ef = (e) => {
              let t = !1;
              return (
                null !== e &&
                  eg.map((l) => {
                    var s;
                    t =
                      null !== (s = null == e ? void 0 : e.type.includes(l)) &&
                      void 0 !== s &&
                      s;
                  }),
                t
              );
            };
          async function ep(e) {
            var t, l, s;
            let n = (0, r.r)(),
              a = {
                id: S.length + 1,
                message: e.toString(),
                roomId: n.toString(),
                sender: "user",
                jobId: "",
                isPending: !1,
                urlAttachments: [],
              };
            Z((e) => [...e, a]),
              F(""),
              P.current && (P.current.textContent = "");
            let d = await (0, i.I9)(
              T,
              U,
              e.toString(),
              _,
              A,
              V,
              G,
              Y,
              W,
              $,
              et,
              es,
              !1,
              null !==
                (s =
                  null === (l = C.data) || void 0 === l
                    ? void 0
                    : null === (t = l.user) || void 0 === t
                    ? void 0
                    : t.email) && void 0 !== s
                ? s
                : "",
              H,
              ef(ea)
            );
            if ((console.log(d), "limit" === d)) {
              eb("Your Credit limit Reached");
              return;
            }
            (a = {
              id: S.length + 2,
              message:
                "https://www.shutterstock.com/shutterstock/videos/1105057845/thumb/1.jpg?ip=x480",
              roomId: n.toString(),
              sender: "bot",
              jobId: d,
              isPending: !0,
              urlAttachments: [],
            }),
              R(""),
              null != d && (L(d.toString()), er(!0)),
              Z((e) => [...e, a]);
          }
          async function ej(e) {
            await ep(e);
          }
          let eb = (e) => {
              N(e), t(!0), setTimeout(() => t(!1), 3e3);
            },
            ew = async (e) => {
              var t;
              "Enter" === e.key &&
                (null == P
                  ? void 0
                  : null === (t = P.current) || void 0 === t
                  ? void 0
                  : t.innerText) &&
                P.current.innerText.length > 0 &&
                (e.preventDefault(), await ej(k));
            };
          function ey(e) {
            var t;
            e.preventDefault();
            let l =
              null === (t = e.clipboardData) || void 0 === t
                ? void 0
                : t.getData("text/plain");
            document.execCommand("insertText", !1, l);
          }
          async function eE() {
            console.log("Hello", I);
            let e = await (0, i.Uq)(null != I ? I : "");
            if (null !== e) {
              var t;
              (null === (t = e.videos[0]) || void 0 === t
                ? void 0
                : t.status) === "finished" &&
                null !== e &&
                (S.filter((t) => {
                  if (t.jobId === I) {
                    var l, s;
                    (t.isPending = !1),
                      (t.message =
                        null !==
                          (s =
                            null == e
                              ? void 0
                              : null === (l = e.videos[0]) || void 0 === l
                              ? void 0
                              : l.resultUrl) && void 0 !== s
                          ? s
                          : "");
                  }
                }),
                er(!1));
            }
          }
          function eN(e, t) {
            er(!0),
              L(t),
              Z((l) =>
                l.map(
                  (l) => (
                    l.jobId === e && ((l.jobId = t), (l.isPending = !0)), l
                  )
                )
              );
          }
          return (
            (0, j.useEffect)(() => {
              var e;
              let t = (e) => {
                P.current &&
                  !P.current.contains(e.target) &&
                  (P.current.contentEditable = "false");
              };
              return (
                null === (e = P.current) ||
                  void 0 === e ||
                  e.addEventListener("paste", ey),
                void 0 !== window && window.addEventListener("mousedown", t),
                () => {
                  window.removeEventListener("mousedown", t);
                }
              );
            }, [P]),
            (0, j.useEffect)(() => {
              if (S.length) {
                var e;
                null === (e = q.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "smooth", block: "end" });
              }
            }, [S.length]),
            (0, j.useEffect)(() => {
              if (!en) return;
              let e = setInterval(() => {
                eE();
              }, 5e3);
              return () => clearInterval(e);
            }, [en]),
            (0, s.jsxs)("div", {
              className: "h-full w-full",
              children: [
                (0, s.jsx)(a.Z, {
                  onClick: () => {
                    D.push("/dashboard/generation-ai/video-chat");
                  },
                  className:
                    "absolute top-4 right-24 text-white cursor-pointer z-50",
                }),
                (0, s.jsxs)("div", {
                  className: "relative w-full h-full rounded-xl text-white",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "h-full w-full flex overflow-y-auto justify-center items-start pt-12 pb-20 px-4",
                      children: (0, s.jsxs)("div", {
                        className: "flex gap-2 flex-col w-full h-fit",
                        children: [
                          S.map((e, t) => {
                            var l, i, n, r, a, d, c, o, u;
                            return (0, s.jsx)(
                              b.E.div,
                              {
                                initial: "hidden",
                                animate: "visible",
                                className:
                                  "mx-auto p-2 duration-1000 flex-grow w-full h-fit max-w-[45rem] bg-black bg-opacity-60 rounded-md border border-[#3b3b3c]",
                                children: (0, s.jsx)("div", {
                                  children:
                                    "user" === e.sender
                                      ? (0, s.jsxs)("div", {
                                          className:
                                            "flex items-center space-x-2 py-3 text-white h-fit",
                                          children: [
                                            (0, s.jsx)(y.default, {
                                              width: 100,
                                              height: 100,
                                              src:
                                                null !==
                                                  (c =
                                                    null === (i = C.data) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : null === (l = i.user) ||
                                                        void 0 === l
                                                      ? void 0
                                                      : l.image) && void 0 !== c
                                                  ? c
                                                  : "/assets/user-fallback.png",
                                              alt:
                                                null !==
                                                  (o =
                                                    null === (r = C.data) ||
                                                    void 0 === r
                                                      ? void 0
                                                      : null === (n = r.user) ||
                                                        void 0 === n
                                                      ? void 0
                                                      : n.name) && void 0 !== o
                                                  ? o
                                                  : "User",
                                              className:
                                                "w-8 ml-2 h-8 rounded-full",
                                            }),
                                            (0, s.jsxs)("div", {
                                              children: [
                                                (0, s.jsx)("p", {
                                                  className:
                                                    "text-sm font-semibold",
                                                  children:
                                                    null !==
                                                      (u =
                                                        null === (d = C.data) ||
                                                        void 0 === d
                                                          ? void 0
                                                          : null ===
                                                              (a = d.user) ||
                                                            void 0 === a
                                                          ? void 0
                                                          : a.name) &&
                                                    void 0 !== u
                                                      ? u
                                                      : "User",
                                                }),
                                                (0, s.jsx)("p", {
                                                  className: "text-sm",
                                                  children: e.message,
                                                }),
                                              ],
                                            }),
                                          ],
                                        })
                                      : (0, s.jsx)(w.Z, {
                                          images: e.message,
                                          isPending: e.isPending,
                                          options: !0,
                                          jobId: e.jobId,
                                          updateJobId: eN,
                                          setStateRoomId: L,
                                        }),
                                }),
                              },
                              t
                            );
                          }),
                          (0, s.jsx)("div", { ref: q }),
                        ],
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "absolute bottom-2 w-full flex items-end justify-center px-2",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex w-full h-fit max-w-[45rem] items-center justify-center rounded-lg border border-[#3b3b3c] bg-black bg-opacity-60 p-1",
                          children: [
                            (0, s.jsx)("div", {
                              contentEditable: !1,
                              id: "text",
                              onKeyDown: ew,
                              ref: P,
                              onClick: () => {
                                P.current &&
                                  ((P.current.contentEditable = "true"),
                                  P.current.focus());
                              },
                              onKeyUp: () => {
                                var e, t;
                                return F(
                                  null !==
                                    (t =
                                      null === (e = P.current) || void 0 === e
                                        ? void 0
                                        : e.innerText) && void 0 !== t
                                    ? t
                                    : ""
                                );
                              },
                              "data-placeholder": "Define your story......",
                              className:
                                "flex flex-grow p-2 bg-opacity-55 text-white placeholder-[#3b3b3c] focus:outline-none rounded-lg resize-none w-full h-fit col-span-1 hover:cursor-text overflow-x-auto max-h-96 overflow-auto",
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "relative w-fit h-full flex justify-center items-center gap-[1px]",
                              children: [
                                (0, s.jsx)("input", {
                                  title: "fileInput",
                                  type: "file",
                                  ref: ev,
                                  onChange: (e) => {
                                    var t, l, s;
                                    let i = null;
                                    (i =
                                      "target" in e
                                        ? null !==
                                            (l =
                                              null === (t = e.target.files) ||
                                              void 0 === t
                                                ? void 0
                                                : t[0]) && void 0 !== l
                                          ? l
                                          : null
                                        : null !== (s = e[0]) && void 0 !== s
                                        ? s
                                        : null) &&
                                      (console.log(i.type),
                                      ed(i),
                                      ex(""),
                                      eo(!0));
                                  },
                                  accept:
                                    "video/mp4,video/MP4,video/x-m4v,video/*,image/*",
                                  className: "hidden",
                                }),
                                (0, s.jsx)("button", {
                                  type: "button",
                                  onClick:
                                    "" === H
                                      ? () => {
                                          var e;
                                          null === (e = ev.current) ||
                                            void 0 === e ||
                                            e.click();
                                        }
                                      : () => {
                                          console.log("Image already selected");
                                        },
                                  title: "uploadButton",
                                  className: "w-full",
                                  children:
                                    "" === H
                                      ? (0, s.jsx)(d, {})
                                      : (0, s.jsxs)("div", {
                                          className:
                                            "relative border border-white rounded-md overflow-hidden h-8 object-contain",
                                          children: [
                                            (0, s.jsx)(y.default, {
                                              width: 100,
                                              height: 100,
                                              src: "/assets/delete.svg",
                                              alt: "",
                                              className:
                                                "absolute w-3 h-3 right-1 top-1",
                                              onClick: () => {
                                                R(""), ed(null);
                                              },
                                            }),
                                            (0, s.jsx)(y.default, {
                                              width: 100,
                                              height: 100,
                                              src: H,
                                              alt: "",
                                            }),
                                          ],
                                        }),
                                }),
                                (0, s.jsx)("button", {
                                  type: "button",
                                  onClick: async () => eh(!em),
                                  className:
                                    "flex items-center justify-center rounded-xl p-2 text-white transition duration-200",
                                  children: (0, s.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    height: "24px",
                                    viewBox: "0 -960 960 960",
                                    width: "24px",
                                    fill: "#e8eaed",
                                    children: (0, s.jsx)("path", {
                                      d: "M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z",
                                    }),
                                  }),
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "absolute xl:-right-40 lg:-right-14 -right-12 z-50 flex flex-row items-center justify-center sm:w-[500px] w-screen font-extralight transition-all duration-500" +
                                    (em
                                      ? " visible opacity-100 scale-100 -translate-y-72"
                                      : " invisible opacity-0 z-0 scale-0 translate-y-20"),
                                  children: (0, s.jsx)("div", {
                                    className:
                                      "bg-black p-4 border border-[#3b3b3c] min-w-[50%] w-fit h-fit text-white rounded-xl font-extralight",
                                    children: (0, s.jsxs)("div", {
                                      className:
                                        "sm:grid sm:grid-cols-2 grid-cols-none flex flex-col gap-2 w-full sm:h-full h-[480px] overflow-y-auto font-extralight",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "sm:grid sm:grid-rows-2 grid-rows-none flex flex-col gap-2 w-full sm:h-full h-fit font-extralight",
                                          children: [
                                            (0, s.jsxs)("div", {
                                              className:
                                                "flex flex-col gap-4 bg-[#1F1F1F] p-4 rounded-md",
                                              children: [
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "grid grid-cols-3 gap-4 justify-start items-center",
                                                  children: [
                                                    (0, s.jsx)("div", {
                                                      className: "w-16",
                                                      children: "Pan",
                                                    }),
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("left" === A &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => O("left"),
                                                      children: [
                                                        (0, s.jsx)(c.Z, {}),
                                                        " ",
                                                      ],
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("right" === A &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => O("right"),
                                                      children: (0, s.jsx)(
                                                        o.Z,
                                                        {}
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "grid grid-cols-3 gap-4 justify-start items-center",
                                                  children: [
                                                    (0, s.jsx)("div", {
                                                      className: "w-16",
                                                      children: "Tilt",
                                                    }),
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("up" === V &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => K("up"),
                                                      children: [
                                                        (0, s.jsx)(u.Z, {}),
                                                        " ",
                                                      ],
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("down" === V &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => K("down"),
                                                      children: (0, s.jsx)(
                                                        x.Z,
                                                        {}
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "grid grid-cols-3 gap-4 justify-start items-center",
                                                  children: [
                                                    (0, s.jsx)("div", {
                                                      className: "w-16",
                                                      children: "Rotate",
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("cw" === G &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => J("cw"),
                                                      children: (0, s.jsx)(
                                                        m.Z,
                                                        {}
                                                      ),
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("ccw" === G &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => J("ccw"),
                                                      children: (0, s.jsx)(
                                                        h.Z,
                                                        {}
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "grid grid-cols-3 gap-4 justify-start items-center",
                                                  children: [
                                                    (0, s.jsx)("div", {
                                                      className: "w-16",
                                                      children: "Zoom",
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("in" === Y &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => Q("in"),
                                                      children: (0, s.jsx)(
                                                        v.Z,
                                                        {}
                                                      ),
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("out" === Y &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => Q("out"),
                                                      children: (0, s.jsx)(
                                                        g.Z,
                                                        {}
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, s.jsxs)("div", {
                                              className:
                                                "flex flex-col gap-4 bg-[#1F1F1F] p-4 rounded-md",
                                              children: [
                                                (0, s.jsx)("div", {
                                                  className: "w-16",
                                                  children: "Zoom",
                                                }),
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "grid grid-cols-2 gap-4",
                                                  children: [
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("16:9" === T &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => M("16:9"),
                                                      children: "16:9",
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("9:16" === T &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => M("9:16"),
                                                      children: "9:16",
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("1:1" === T &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => M("1:1"),
                                                      children: "1:1",
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("5:2" === T &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => M("5:2"),
                                                      children: "5:2",
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("4:5" === T &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => M("4:5"),
                                                      children: "4:5",
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                        ("4:3" === T &&
                                                          " bg-[#FFEDD2] text-black"),
                                                      onClick: () => M("4:3"),
                                                      children: "4:3",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex flex-col gap-2 bg-[#1F1F1F] p-2 w-full rounded-md",
                                          children: [
                                            (0, s.jsxs)("div", {
                                              className:
                                                "flex flex-col gap-2 bg-[#1F1F1F] p-2",
                                              children: [
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "flex gap-2 flex-col",
                                                  children: [
                                                    (0, s.jsx)("label", {
                                                      className: "font-bold",
                                                      htmlFor: "negativePrompt",
                                                      children:
                                                        "Negative Prompt",
                                                    }),
                                                    (0, s.jsx)("input", {
                                                      type: "text",
                                                      id: "negativePrompt",
                                                      placeholder:
                                                        "e.g. ugly, bad, terrible",
                                                      className:
                                                        "text-white bg-transparent border border-white rounded-lg p-2",
                                                      value: et,
                                                      onChange: (e) =>
                                                        el(e.target.value),
                                                    }),
                                                  ],
                                                }),
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "flex gap-2 flex-col",
                                                  children: [
                                                    (0, s.jsx)("label", {
                                                      className: "font-bold",
                                                      htmlFor: "seed",
                                                      children: "Seed",
                                                    }),
                                                    (0, s.jsx)("input", {
                                                      type: "text",
                                                      id: "seed",
                                                      className:
                                                        "text-white bg-transparent border border-white rounded-lg p-2",
                                                      value: es,
                                                      placeholder:
                                                        "e.g. 1234567890",
                                                      onChange: (e) =>
                                                        ei(
                                                          parseInt(
                                                            e.target.value
                                                          )
                                                        ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, s.jsxs)("div", {
                                              className:
                                                "flex flex-col gap-4 bg-[#1F1F1F] p-2 w-full",
                                              children: [
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "flex gap-2 flex-col w-full",
                                                  children: [
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "flex justify-between items-center",
                                                      children: [
                                                        (0, s.jsx)("p", {
                                                          children:
                                                            "Frame per second",
                                                        }),
                                                        (0, s.jsx)("div", {
                                                          className:
                                                            "bg-[#2E2E2E] py-2 px-4 rounded-md w-16 text-center",
                                                          children: U,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "flex gap-2 w-full justify-center items-center",
                                                      children: [
                                                        (0, s.jsx)("p", {
                                                          children: "0",
                                                        }),
                                                        (0, s.jsx)("input", {
                                                          type: "range",
                                                          min: "1",
                                                          max: "24",
                                                          id: "frameRate",
                                                          className:
                                                            "w-full bg-[#FFEDD2]",
                                                          value: U,
                                                          onChange: (e) =>
                                                            B(
                                                              parseInt(
                                                                e.target.value
                                                              )
                                                            ),
                                                        }),
                                                        (0, s.jsx)("p", {
                                                          children: "24",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "flex gap-2 flex-col",
                                                  children: [
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "flex justify-between items-center",
                                                      children: [
                                                        (0, s.jsx)("p", {
                                                          children:
                                                            "Guidance Scale",
                                                        }),
                                                        (0, s.jsx)("div", {
                                                          className:
                                                            "bg-[#2E2E2E] py-2 px-4 rounded-md w-16 text-center",
                                                          children: W,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "flex gap-2 w-full justify-center items-center",
                                                      children: [
                                                        (0, s.jsx)("p", {
                                                          children: "5",
                                                        }),
                                                        (0, s.jsx)("input", {
                                                          type: "range",
                                                          min: "5",
                                                          max: "25",
                                                          id: "guidanceScale",
                                                          className:
                                                            "text-white border border-white rounded-lg p-2 w-full bg-[#FFEDD2]",
                                                          value: W,
                                                          onChange: (e) =>
                                                            X(
                                                              parseInt(
                                                                e.target.value
                                                              )
                                                            ),
                                                        }),
                                                        (0, s.jsx)("p", {
                                                          children: "25",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "flex gap-2 flex-col",
                                                  children: [
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "flex justify-between items-center",
                                                      children: [
                                                        (0, s.jsx)("p", {
                                                          children: "Motion",
                                                        }),
                                                        (0, s.jsx)("div", {
                                                          className:
                                                            "bg-[#2E2E2E] py-2 px-4 rounded-md w-16 text-center",
                                                          children: $,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "flex gap-2 w-full justify-center items-center",
                                                      children: [
                                                        (0, s.jsx)("p", {
                                                          children: "1",
                                                        }),
                                                        (0, s.jsx)("input", {
                                                          type: "range",
                                                          min: "1",
                                                          max: "4",
                                                          id: "motion",
                                                          className:
                                                            "text-white bg-[#FFEDD2] border border-white rounded-lg p-2 w-full",
                                                          value: $,
                                                          onChange: (e) =>
                                                            ee(
                                                              parseInt(
                                                                e.target.value
                                                              )
                                                            ),
                                                        }),
                                                        (0, s.jsx)("p", {
                                                          children: "4",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                (0, s.jsx)("button", {
                                  type: "button",
                                  onClick: () => z(!_),
                                  className:
                                    "flex items-center justify-center rounded-[8px] p-2 h-9 w-9 text-white transition duration-200 group" +
                                    (_ && " bg-[#3b3b3c]"),
                                  children: _
                                    ? (0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        height: "20px",
                                        viewBox: "0 -960 960 960",
                                        width: "20px",
                                        className: "w-6 h-6",
                                        fill: "#e8eaed",
                                        children: (0, s.jsx)("path", {
                                          d: "M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z",
                                        }),
                                      })
                                    : (0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        height: "24px",
                                        viewBox: "0 -960 960 960",
                                        width: "24px",
                                        fill: "#e8eaed",
                                        children: (0, s.jsx)("path", {
                                          d: "M792-56 56-792l56-56 736 736-56 56ZM560-514l-80-80v-246h240v160H560v166ZM400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-62l80 80v120q0 66-47 113t-113 47Z",
                                        }),
                                      }),
                                }),
                                (0, s.jsx)("button", {
                                  type: "button",
                                  onClick: async () => await ej(k),
                                  className:
                                    "flex items-center justify-center rounded-[8px] bg-[#3b3b3c] p-2 text-white transition duration-200 hover:bg-black group",
                                  children: (0, s.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "white",
                                    stroke: "none",
                                    className:
                                      "fill-dark-background group-hover:scale-125 duration-1000",
                                    children: (0, s.jsx)("path", {
                                      d: "M10.475 2.34378C10.4075 2.13853 10.2158 1.99987 9.9997 2C9.78364 2.00013 9.59211 2.13902 9.52485 2.34435L7.94151 7.17768L7.94087 7.17966C7.88412 7.35536 7.78647 7.5151 7.65595 7.64571C7.52544 7.77633 7.36578 7.87409 7.19012 7.93098L2.34378 9.52503C2.13853 9.59254 1.99987 9.78424 2 10.0003C2.00013 10.2164 2.13902 10.4079 2.34435 10.4752L7.17768 12.0585L7.17966 12.0591C7.35536 12.1159 7.5151 12.2135 7.64571 12.344C7.77633 12.4746 7.8741 12.6342 7.93099 12.8099L7.9317 12.8121L9.52503 17.6562C9.59254 17.8615 9.78424 18.0001 10.0003 18C10.2164 17.9999 10.4079 17.861 10.4752 17.6557L12.0585 12.8223L12.0591 12.8203C12.1159 12.6446 12.2135 12.4849 12.344 12.3543C12.4746 12.2237 12.6342 12.1259 12.8099 12.069L12.8121 12.0683L17.6562 10.475C17.8615 10.4075 18.0001 10.2158 18 9.9997C17.9999 9.78364 17.861 9.59211 17.6557 9.52485L12.8223 7.94151L12.8203 7.94087C12.6446 7.88412 12.4849 7.78647 12.3543 7.65595C12.2237 7.52544 12.1259 7.36578 12.069 7.19012L10.475 2.34378Z",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {}),
                      ],
                    }),
                    (0, s.jsx)(E.Z, {
                      isVideo: ef(ea),
                      imageFile: ea,
                      imageURL: eu,
                      isOpen: ec,
                      onClose: () => eo(!1),
                      setVideoUrl: R,
                      buttonText: "Process",
                      cancelButton: !0,
                    }),
                    (0, s.jsx)(n.Z, { message: l, show: e }),
                  ],
                }),
              ],
            })
          );
        };
    },
  },
  function (e) {
    e.O(
      0,
      [
        4705, 3145, 605, 2957, 1926, 6314, 6103, 8350, 4068, 902, 2971, 2117,
        1744,
      ],
      function () {
        return e((e.s = 55609));
      }
    ),
      (_N_E = e.O());
  },
]);
