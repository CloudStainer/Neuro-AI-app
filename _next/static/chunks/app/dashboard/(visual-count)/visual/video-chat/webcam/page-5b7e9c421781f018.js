(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9297],
  {
    8902: function (e, t, o) {
      Promise.resolve().then(o.bind(o, 92385));
    },
    36983: function (e, t, o) {
      "use strict";
      var s = o(57437),
        i = o(33145);
      t.Z = (e) => {
        let { title: t, imgSrc: o, tag: a, content: n } = e;
        return (0, s.jsxs)("div", {
          className:
            "relative bg-gradient-to-t from-black/95 via-black/95 to-[#161618]/95 w-full h-40 md:h-64 rounded-2xl border border-[#DDDDF0]/50 text-white flex flex-col items-center justify-center transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-white/80 hover:shadow-opacity-70 my-4 aspect-square",
          children: [
            a &&
              (0, s.jsx)("span", {
                className:
                  "absolute -top-3 -right-5 bg-red-100 text-red-900/40 backdrop-blur-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900/40 dark:text-red-300 sm:hidden sm:cursor-pointer cursor-not-allowed",
                children: n,
              }),
            (0, s.jsx)("h2", {
              className: "text-lg xl:text-3xl font-semibold mt-2 mb-0 md:mb-4",
              children: t,
            }),
            (0, s.jsx)(i.default, {
              src: o,
              width: 100,
              height: 100,
              alt: t,
              className: "h-16 md:h-24 my-4 w-full object-contain",
            }),
          ],
        });
      };
    },
    61810: function (e, t, o) {
      "use strict";
      var s = o(57437),
        i = o(33145),
        a = o(2265);
      t.Z = (e) => {
        let { onCapture: t, isMicOn: o, setIsMicOn: n } = e,
          r = (0, a.useRef)(null),
          [l, c] = a.useState(!1),
          [d, u] = a.useState(null);
        (0, a.useEffect)(() => {
          let e = null,
            s = async () => {
              try {
                (e = await navigator.mediaDevices.getUserMedia({ audio: !0 })),
                  r.current && (r.current.srcObject = e);
              } catch (e) {
                console.error("Error accessing the webcam:", e), n(!1);
              }
            };
          async function i() {
            if (r.current) {
              let e = await navigator.mediaDevices.getUserMedia({ audio: !0 });
              (r.current.srcObject = e),
                MediaRecorder.isTypeSupported("audio/webm") ||
                  console.warn("audio/webm is not supported");
              let o = new MediaRecorder(e, { mimeType: "audio/webm" }),
                s = [];
              o.addEventListener("dataavailable", (e) => {
                e.data.size > 0 && s.push(e.data);
              }),
                o.addEventListener("stop", () => {
                  t(
                    new File(
                      [new Blob(s, { type: "audio/webm" })],
                      "recording.webm",
                      { type: "audio/webm" }
                    )
                  ),
                    e.getTracks().forEach((e) => e.stop());
                }),
                u(o);
            }
          }
          return (
            o && (s(), i()),
            () => {
              e && e.getTracks().forEach((e) => e.stop());
            }
          );
        }, [o]);
        let m = async (e) => {
          if (d)
            try {
              e
                ? (console.log("Hello starting"), d.start())
                : (console.log("Hello stop"), d.stop());
            } catch (e) {
              console.error("Error accessing media devices.", e);
            }
        };
        return (0, s.jsx)(s.Fragment, {
          children:
            o &&
            (0, s.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ".concat(
                  o ? "" : "hidden"
                ),
              children: (0, s.jsxs)("div", {
                className:
                  "rounded-lg bg-[#161618] p-8 pt-0 flex flex-col justify-center items-center",
                children: [
                  (0, s.jsx)("h1", {
                    className: "p-8 text-2xl font-bold text-white",
                    children: "Record Audio",
                  }),
                  (0, s.jsx)(i.default, {
                    src: "/assets/microphone2.png",
                    alt: "Microphone",
                    width: 100,
                    height: 100,
                    className: "pb-8",
                  }),
                  (0, s.jsx)("audio", { ref: r, style: { width: "100%" } }),
                  (0, s.jsxs)("div", {
                    className:
                      "mt-4 flex justify-center space-x-2 md:space-x-4",
                    children: [
                      (0, s.jsx)("button", {
                        type: "button",
                        onClick: () => n(!1),
                        className:
                          "px-3 py-2 text-sm text-red-800 underline transition duration-300 hover:text-red-900 focus:outline-none md:px-6 md:text-base",
                        children: "Cancel",
                      }),
                      (0, s.jsx)("button", {
                        type: "button",
                        onClick: async () => {
                          l ? c(!1) : c(!0), await m(!l);
                        },
                        className:
                          "rounded-full bg-gray-500 px-3 py-2 text-sm font-bold text-white transition duration-300 hover:bg-gray-600 focus:outline-none md:px-6 md:text-base",
                        children: l ? "Stop Recording" : "Start Recording",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        });
      };
    },
    59495: function (e, t, o) {
      "use strict";
      var s = o(57437),
        i = o(2265);
      t.Z = (e) => {
        let { onCapture: t, isCameraOn: o, setIsCameraOn: a } = e,
          n = (0, i.useRef)(null),
          [r, l] = i.useState(!1),
          [c, d] = i.useState(null);
        (0, i.useEffect)(() => {
          let e = null,
            s = async () => {
              try {
                (e = await navigator.mediaDevices.getUserMedia({
                  video: !0,
                  audio: !0,
                })),
                  n.current && (n.current.srcObject = e);
              } catch (e) {
                console.error("Error accessing the webcam:", e), a(!1);
              }
            };
          async function i() {
            if (n.current) {
              let e = await navigator.mediaDevices.getUserMedia({
                video: !0,
                audio: !0,
              });
              (n.current.srcObject = e),
                MediaRecorder.isTypeSupported("video/webm") ||
                  console.warn("video/webm is not supported");
              let o = new MediaRecorder(e, { mimeType: "video/webm" }),
                s = [];
              o.addEventListener("dataavailable", (e) => {
                e.data.size > 0 && s.push(e.data);
              }),
                o.addEventListener("stop", () => {
                  t(
                    new File(
                      [new Blob(s, { type: "video/webm" })],
                      "recording.webm",
                      { type: "video/webm" }
                    )
                  ),
                    e.getTracks().forEach((e) => e.stop());
                }),
                d(o);
            }
          }
          return (
            o && (s(), i()),
            () => {
              e && e.getTracks().forEach((e) => e.stop());
            }
          );
        }, [o]);
        let u = async (e) => {
          if (c)
            try {
              e
                ? (console.log("Hello starting"), c.start())
                : (console.log("Hello stop"), c.stop());
            } catch (e) {
              console.error("Error accessing media devices.", e);
            }
        };
        return (0, s.jsx)(s.Fragment, {
          children:
            o &&
            (0, s.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ".concat(
                  o ? "" : "hidden"
                ),
              children: (0, s.jsxs)("div", {
                className: "rounded-lg bg-[#161618] p-8 pt-0",
                children: [
                  (0, s.jsx)("h1", {
                    className: "p-8 text-2xl font-bold text-white",
                    children: "Record Video",
                  }),
                  (0, s.jsx)("video", {
                    ref: n,
                    autoPlay: !0,
                    style: { width: "100%" },
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "mt-4 flex justify-center space-x-2 md:space-x-4",
                    children: [
                      (0, s.jsx)("button", {
                        type: "button",
                        onClick: () => a(!1),
                        className:
                          "px-3 py-2 text-sm text-red-800 underline transition duration-300 hover:text-red-900 focus:outline-none md:px-6 md:text-base",
                        children: "Cancel",
                      }),
                      (0, s.jsx)("button", {
                        type: "button",
                        onClick: async () => {
                          r ? l(!1) : l(!0), await u(!r);
                        },
                        className:
                          "rounded-full bg-gray-500 px-3 py-2 text-sm font-bold text-white transition duration-300 hover:bg-gray-600 focus:outline-none md:px-6 md:text-base",
                        children: r ? "Stop Recording" : "Start Recording",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        });
      };
    },
    92385: function (e, t, o) {
      "use strict";
      o.r(t);
      var s = o(57437),
        i = o(2265),
        a = o(36983),
        n = o(74599),
        r = o(43414),
        l = o(76127),
        c = o(36434),
        d = o(80605),
        u = o(95279),
        m = o(61810),
        x = o(59495),
        p = o(91679),
        h = o(99376),
        f = o(99388),
        b = o(82957).Buffer;
      t.default = () => {
        let [e, t] = (0, i.useState)(!1),
          [o, g] = (0, i.useState)(!1),
          [w, v] = (0, i.useState)(null),
          [y, j] = (0, i.useState)(!1),
          [S, N] = (0, i.useState)(!1),
          [k, R] = (0, i.useState)(""),
          [C, T] = (0, i.useState)(!1),
          [E, O] = (0, i.useState)(""),
          [Z, A] = (0, i.useState)(!1),
          D = (0, h.useRouter)(),
          [M, V] = (0, i.useState)({
            label: "Male (default)",
            openAi: !0,
            voiceId: "0",
            prompt: "",
          }),
          [I, L] = (0, i.useState)(
            "Record Video/Audio to get transcription....."
          ),
          [P, U] = (0, i.useState)(!1),
          [B, F] = (0, i.useState)(!1),
          [_, z] = (0, i.useState)(!1),
          H = (0, d.useSession)(),
          W = (e) => {
            R(e), T(!0), setTimeout(() => T(!1), 3e3);
          };
        async function q(e) {
          try {
            let t;
            if (null == e ? void 0 : e.openAi) {
              let o = await (0, c.kL)(
                I,
                parseInt(null == e ? void 0 : e.voiceId)
              );
              t = b.from(o.audio);
            } else {
              let o = await (0, c.P1)(I, null == e ? void 0 : e.voiceId);
              t = b.from(o.audio);
            }
            let o = new Blob([t], { type: "audio/mpeg" }),
              s = URL.createObjectURL(o);
            A(!1), O(s), W("Voice Transcription Done");
          } catch (e) {
            W("Something is Wrong! Please Try Again");
          }
        }
        let Y = async (e) => {
          try {
            var t, o, s, i, a, n, r;
            U(!0), console.log(e.transcription, e.frames);
            let l =
              null !==
                (i = await (0, c.cp)(
                  null == M ? void 0 : M.prompt,
                  e.transcription,
                  e.frames,
                  "",
                  null !==
                    (s =
                      null === (o = H.data) || void 0 === o
                        ? void 0
                        : null === (t = o.user) || void 0 === t
                        ? void 0
                        : t.email) && void 0 !== s
                    ? s
                    : ""
                )) && void 0 !== i
                ? i
                : "";
            if (null !== l) {
              let e;
              if (
                (j(!1),
                N(!1),
                U(!1),
                L(
                  null !== (a = null == l ? void 0 : l.toString()) &&
                    void 0 !== a
                    ? a
                    : ""
                ),
                null == M ? void 0 : M.openAi)
              ) {
                let t = await (0, c.kL)(
                  null !== (n = null == l ? void 0 : l.toString()) &&
                    void 0 !== n
                    ? n
                    : "",
                  parseInt(null == M ? void 0 : M.voiceId)
                );
                e = b.from(t.audio);
              } else {
                let t = await (0, c.P1)(
                  null !== (r = null == l ? void 0 : l.toString()) &&
                    void 0 !== r
                    ? r
                    : "",
                  null == M ? void 0 : M.voiceId
                );
                e = b.from(t.audio);
              }
              let t = new Blob([e], { type: "audio/mpeg" }),
                o = URL.createObjectURL(t);
              A(!1), console.log(o), O(o), l && W("Voice Transcription Done");
            } else W("Your Credit limit Reached");
          } catch (e) {
            W("Something is Wrong! Please Try Again"), U(!1);
          }
        };
        return (0, s.jsxs)("div", {
          className:
            "flex flex-col items-center justify-center px-10 text-center xl:px-36 2xl:px-48 w-full",
          children: [
            (0, s.jsx)(f.Z, {
              onClick: () => {
                D.back();
              },
              className: "absolute top-4 right-24 text-white cursor-pointer",
            }),
            (0, s.jsx)("h1", {
              className:
                "mt-12 inline-block  bg-gradient-to-r from-[#878787] to-white bg-clip-text text-5xl font-bold text-transparent md:mt-20 md:text-6xl",
              children: "Visual AI",
            }),
            (0, s.jsx)("h2", {
              className: "mb-0 text-2xl font-bold text-white md:mt-4",
              children: "Record",
            }),
            (0, s.jsx)("p", {
              className:
                "mx-auto mb-12 mt-4 w-3/5 text-center text-xs font-light text-white md:mb-2 md:mt-2 md:w-[16rem]",
            }),
            (0, s.jsxs)("div", {
              className:
                "mt-8 flex md:flex-row flex-col gap-4 items-center justify-center w-full",
              children: [
                (0, s.jsx)("button", {
                  title: "showCapture",
                  type: "button",
                  onClick: () => {
                    t(!0), F(!0);
                  },
                  className: "w-full",
                  children: (0, s.jsx)(a.Z, {
                    title: "Record a Video",
                    imgSrc: "/assets/webcam.svg",
                  }),
                }),
                (0, s.jsx)("button", {
                  title: "showCapture",
                  type: "button",
                  onClick: () => {
                    g(!0), z(!0);
                  },
                  className: "w-full",
                  children: (0, s.jsx)(a.Z, {
                    title: "Record an Audio",
                    imgSrc: "/assets/microphone2.png",
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "mt-8 mb-16 flex w-full flex-col items-center justify-center md:my-0 md:space-x-0 xl:flex-row xl:space-x-4",
              children: [
                (0, s.jsx)(r.Z, {
                  title: "Transcription",
                  staged: !0,
                  audio: E,
                  content: I,
                  audioShow: Z,
                  setAudioShow: A,
                }),
                (0, s.jsx)(l.Z, {
                  audioShow: Z,
                  setAudioShow: A,
                  getNewVoiceContent: q,
                  voices: M,
                  setVoices: V,
                  title: "Voices",
                }),
              ],
            }),
            e &&
              (0, s.jsx)(x.Z, {
                onCapture: (e) => {
                  v(e), t(!1), F(!1), j(!0);
                },
                isCameraOn: B,
                setIsCameraOn: F,
              }),
            o &&
              (0, s.jsx)(m.Z, {
                onCapture: (e) => {
                  v(e), g(!1), z(!1), N(!0);
                },
                isMicOn: _,
                setIsMicOn: z,
              }),
            y &&
              w &&
              (0, s.jsx)(u.Z, {
                isVideo: !0,
                isOpen: y,
                onClose: () => j(!1),
                getTranscript: Y,
                buttonText: P ? "Decoding Video..." : "Process",
                cancelButton: !0,
                imageFile: w,
              }),
            S &&
              w &&
              (0, s.jsx)(p.Z, {
                isVideo: !0,
                isOpen: S,
                onClose: () => N(!1),
                getTranscript: Y,
                buttonText: P ? "Decoding Audio..." : "Process",
                cancelButton: !0,
                imageFile: w,
              }),
            (0, s.jsx)(n.Z, { message: k, show: C }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        4868, 3145, 605, 2957, 6314, 6103, 8728, 4068, 1940, 4504, 2971, 2117,
        1744,
      ],
      function () {
        return e((e.s = 8902));
      }
    ),
      (_N_E = e.O());
  },
]);
