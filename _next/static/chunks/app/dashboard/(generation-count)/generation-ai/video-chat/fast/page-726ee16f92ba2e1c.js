(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5093],
  {
    69553: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 75060));
    },
    75060: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l(57437),
        i = l(36434),
        n = l(53017),
        r = l(43464),
        a = l(32903),
        d = l(99388),
        c = l(5865),
        o = l(92261),
        u = l(36715),
        x = l(26327),
        m = l(41414),
        f = l(69076),
        g = l(43391),
        p = l(45802),
        v = l(80605),
        h = l(33145),
        b = l(99376),
        j = l(2265);
      t.default = () => {
        let [e, t] = (0, j.useState)(""),
          l = (0, v.useSession)(),
          w = (0, b.useRouter)(),
          [E, y] = (0, j.useState)([]),
          [N, F] = (0, j.useState)(null),
          k = (0, j.useRef)(null),
          C = (0, j.useRef)(null),
          [D, S] = (0, j.useState)(null),
          [I, L] = (0, j.useState)(!1),
          [P, Z] = (0, j.useState)(""),
          [R, U] = (0, j.useState)(!1),
          [T, _] = (0, j.useState)("1:1"),
          [z, A] = (0, j.useState)(20),
          [M, O] = (0, j.useState)(!1),
          [V, B] = (0, j.useState)("right"),
          [K, q] = (0, j.useState)("up"),
          [G, H] = (0, j.useState)("cw"),
          [J, Q] = (0, j.useState)("in"),
          [W, X] = (0, j.useState)(16),
          [Y, $] = (0, j.useState)(2),
          [ee, et] = (0, j.useState)(""),
          [el, es] = (0, j.useState)(""),
          [ei, en] = (0, j.useState)(""),
          [er, ea] = (0, j.useState)(!1),
          ed = (0, j.useRef)(null),
          ec = ["mpg", "mp2", "mpeg", "mpe", "mpv", "mp4"],
          eo = (e) => {
            let t = !1;
            return (
              null !== e &&
                ec.map((l) => {
                  var s;
                  t =
                    null !== (s = null == e ? void 0 : e.type.includes(l)) &&
                    void 0 !== s &&
                    s;
                }),
              t
            );
          };
        async function eu(e) {
          var s, n, r;
          let d = (0, a.r)(),
            c = {
              id: E.length + 1,
              message: e.toString(),
              roomId: d.toString(),
              sender: "user",
              jobId: "",
              isPending: !1,
              urlAttachments: [],
            };
          y((e) => [...e, c]),
            t(""),
            k.current && (k.current.textContent = ""),
            console.log("Asking Pika");
          let o = await (0, i.I9)(
            T,
            z,
            e.toString(),
            M,
            V,
            K,
            G,
            J,
            W,
            Y,
            ee,
            144124,
            !1,
            null !==
              (r =
                null === (n = l.data) || void 0 === n
                  ? void 0
                  : null === (s = n.user) || void 0 === s
                  ? void 0
                  : s.email) && void 0 !== r
              ? r
              : "",
            ei,
            eo(D)
          );
          console.log(o),
            null != o && (F(o.toString()), U(!0)),
            (c = {
              id: E.length + 2,
              message:
                "https://www.shutterstock.com/shutterstock/videos/1105057845/thumb/1.jpg?ip=x480",
              roomId: d.toString(),
              sender: "bot",
              jobId: null != o ? o : "",
              isPending: !0,
              urlAttachments: [],
            }),
            y((e) => [...e, c]);
        }
        async function ex(e) {
          await eu(e);
        }
        let em = async (t) => {
          var l;
          "Enter" === t.key &&
            (null == k
              ? void 0
              : null === (l = k.current) || void 0 === l
              ? void 0
              : l.innerText) &&
            k.current.innerText.length > 0 &&
            (t.preventDefault(), await ex(e));
        };
        function ef(e) {
          var t;
          e.preventDefault();
          let l =
            null === (t = e.clipboardData) || void 0 === t
              ? void 0
              : t.getData("text/plain");
          document.execCommand("insertText", !1, l);
        }
        async function eg() {
          console.log("Hello", N);
          let e = await (0, i.Uq)(null != N ? N : "");
          if (null !== e) {
            var t;
            (null === (t = e.videos[0]) || void 0 === t ? void 0 : t.status) ===
              "finished" &&
              null !== e &&
              (E.filter((t) => {
                if (t.jobId === N) {
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
              U(!1));
          }
        }
        function ep(e, t) {
          U(!0),
            F(t),
            y((l) =>
              l.map(
                (l) => (l.jobId === e && ((l.jobId = t), (l.isPending = !0)), l)
              )
            );
        }
        return (
          (0, j.useEffect)(() => {
            var e;
            let t = (e) => {
              k.current &&
                !k.current.contains(e.target) &&
                (k.current.contentEditable = "false");
            };
            return (
              null === (e = k.current) ||
                void 0 === e ||
                e.addEventListener("paste", ef),
              void 0 !== window && window.addEventListener("mousedown", t),
              () => {
                window.removeEventListener("mousedown", t);
              }
            );
          }, [k]),
          (0, j.useEffect)(() => {
            if (E.length) {
              var e;
              null === (e = C.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }, [E.length]),
          (0, j.useEffect)(() => {
            if (!R) return;
            let e = setInterval(() => {
              eg();
            }, 5e3);
            return () => clearInterval(e);
          }, [R]),
          (0, s.jsxs)("div", {
            className: "h-full w-full",
            children: [
              (0, s.jsx)(d.Z, {
                onClick: () => {
                  w.push("/dashboard/generation-ai/video-chat");
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
                        E.map((e, t) => {
                          var i, r, a, d, c, o, u, x, m;
                          return (0, s.jsx)(
                            "div",
                            {
                              className:
                                "mx-auto p-2 duration-1000 flex-grow w-full h-fit max-w-[45rem] bg-black bg-opacity-60 rounded-md border border-[#3b3b3c]",
                              children: (0, s.jsx)("div", {
                                children:
                                  "user" === e.sender
                                    ? (0, s.jsxs)("div", {
                                        className:
                                          "flex items-center space-x-2 py-3 text-white h-fit",
                                        children: [
                                          (0, s.jsx)(h.default, {
                                            width: 100,
                                            height: 100,
                                            src:
                                              null !==
                                                (u =
                                                  null === (r = l.data) ||
                                                  void 0 === r
                                                    ? void 0
                                                    : null === (i = r.user) ||
                                                      void 0 === i
                                                    ? void 0
                                                    : i.image) && void 0 !== u
                                                ? u
                                                : "/assets/user-fallback.png",
                                            alt:
                                              null !==
                                                (x =
                                                  null === (d = l.data) ||
                                                  void 0 === d
                                                    ? void 0
                                                    : null === (a = d.user) ||
                                                      void 0 === a
                                                    ? void 0
                                                    : a.name) && void 0 !== x
                                                ? x
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
                                                    (m =
                                                      null === (o = l.data) ||
                                                      void 0 === o
                                                        ? void 0
                                                        : null ===
                                                            (c = o.user) ||
                                                          void 0 === c
                                                        ? void 0
                                                        : c.name) &&
                                                  void 0 !== m
                                                    ? m
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
                                    : (0, s.jsx)(n.Z, {
                                        images: e.message,
                                        isPending: e.isPending,
                                        options: !1,
                                        jobId: e.jobId,
                                        setStateRoomId: F,
                                        updateJobId: ep,
                                      }),
                              }),
                            },
                            t
                          );
                        }),
                        (0, s.jsx)("div", { ref: C }),
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
                            onKeyDown: em,
                            ref: k,
                            onClick: () => {
                              k.current &&
                                ((k.current.contentEditable = "true"),
                                k.current.focus());
                            },
                            onKeyUp: () => {
                              var e, l;
                              return t(
                                null !==
                                  (l =
                                    null === (e = k.current) || void 0 === e
                                      ? void 0
                                      : e.innerText) && void 0 !== l
                                  ? l
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
                                ref: ed,
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
                                    (console.log(i.type), S(i), Z(""), L(!0));
                                },
                                accept:
                                  "video/mp4,video/MP4,video/x-m4v,video/*",
                                className: "hidden",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "absolute xl:-right-40 lg:-right-14 -right-12 z-50 flex flex-row items-center justify-center sm:w-[500px] w-screen font-extralight transition-all duration-500" +
                                  (er
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
                                                      ("left" === V &&
                                                        " bg-[#FFEDD2] text-black"),
                                                    onClick: () => B("left"),
                                                    children: [
                                                      (0, s.jsx)(c.Z, {}),
                                                      " ",
                                                    ],
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                      ("right" === V &&
                                                        " bg-[#FFEDD2] text-black"),
                                                    onClick: () => B("right"),
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
                                                      ("up" === K &&
                                                        " bg-[#FFEDD2] text-black"),
                                                    onClick: () => q("up"),
                                                    children: [
                                                      (0, s.jsx)(u.Z, {}),
                                                      " ",
                                                    ],
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                      ("down" === K &&
                                                        " bg-[#FFEDD2] text-black"),
                                                    onClick: () => q("down"),
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
                                                    onClick: () => H("cw"),
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
                                                    onClick: () => H("ccw"),
                                                    children: (0, s.jsx)(
                                                      f.Z,
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
                                                      ("in" === J &&
                                                        " bg-[#FFEDD2] text-black"),
                                                    onClick: () => Q("in"),
                                                    children: (0, s.jsx)(
                                                      g.Z,
                                                      {}
                                                    ),
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                      ("out" === J &&
                                                        " bg-[#FFEDD2] text-black"),
                                                    onClick: () => Q("out"),
                                                    children: (0, s.jsx)(
                                                      p.Z,
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
                                                    onClick: () => _("16:9"),
                                                    children: "16:9",
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                      ("9:16" === T &&
                                                        " bg-[#FFEDD2] text-black"),
                                                    onClick: () => _("9:16"),
                                                    children: "9:16",
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                      ("1:1" === T &&
                                                        " bg-[#FFEDD2] text-black"),
                                                    onClick: () => _("1:1"),
                                                    children: "1:1",
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                      ("5:2" === T &&
                                                        " bg-[#FFEDD2] text-black"),
                                                    onClick: () => _("5:2"),
                                                    children: "5:2",
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                      ("4:5" === T &&
                                                        " bg-[#FFEDD2] text-black"),
                                                    onClick: () => _("4:5"),
                                                    children: "4:5",
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "bg-[#2E2E2E] py-2 flex justify-center items-center rounded-md cursor-pointer" +
                                                      ("4:3" === T &&
                                                        " bg-[#FFEDD2] text-black"),
                                                    onClick: () => _("4:3"),
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
                                                    children: "Negative Prompt",
                                                  }),
                                                  (0, s.jsx)("input", {
                                                    type: "text",
                                                    id: "negativePrompt",
                                                    placeholder:
                                                      "e.g. ugly, bad, terrible",
                                                    className:
                                                      "text-white bg-transparent border border-white rounded-lg p-2",
                                                    value: ee,
                                                    onChange: (e) =>
                                                      et(e.target.value),
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
                                                    value: el,
                                                    placeholder:
                                                      "e.g. 1234567890",
                                                    onChange: (e) =>
                                                      es(e.target.value),
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
                                                        children: z,
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
                                                        value: z,
                                                        onChange: (e) =>
                                                          A(
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
                                                        children: Y,
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
                                                        value: Y,
                                                        onChange: (e) =>
                                                          $(
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
                                onClick: async () => await ex(e),
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
                  (0, s.jsx)(r.Z, {
                    isVideo: !0,
                    imageFile: D,
                    imageURL: P,
                    isOpen: I,
                    onClose: () => L(!1),
                    setVideoUrl: en,
                    buttonText: "Process",
                    cancelButton: !0,
                  }),
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
      [4705, 3145, 605, 2957, 6314, 6103, 8350, 4068, 902, 2971, 2117, 1744],
      function () {
        return e((e.s = 69553));
      }
    ),
      (_N_E = e.O());
  },
]);
