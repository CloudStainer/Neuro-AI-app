(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2029],
  {
    68409: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 66615));
    },
    76858: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, l(43664).Z)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    51817: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, l(43664).Z)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    75341: function (e, t, l) {
      "use strict";
      var i = l(57437),
        o = l(51817),
        a = l(76858),
        n = l(33145);
      t.Z = (e) => {
        let {
          title: t,
          imgSrc: l,
          inputValue: s,
          onChange: d,
          onKeyDown: r,
          submitImageURLEnter: u,
          youtubeLoading: c,
        } = e;
        return (0, i.jsxs)("div", {
          className:
            "bg-gradient-to-t from-black to-[#161618] rounded-xl border border-[#DDDDF0]/50 text-white flex flex-col md:flex-row items-center justify-start h-fit sm:h-52 md:h-28 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-white/80 hover:shadow-opacity-70 p-4 sm:gap-10 gap-4 w-full",
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex my-8 md:my-0 flex-row items-center justify-start w-fit",
              children: [
                (0, i.jsx)(n.default, {
                  width: 100,
                  height: 100,
                  src: l,
                  alt: t,
                  className:
                    "w-8 h-8 md:w-10 md:h-10 mx-1 md:mx-4 ml-0 md:ml-0",
                }),
                (0, i.jsx)("h2", {
                  className:
                    "text-lg md:text-2xl font-semibold whitespace-nowrap",
                  children: t,
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className:
                "w-full border-2 border-[#333333] rounded-2xl ml-0 md:ml-4 flex pr-4",
              children: [
                (0, i.jsx)("input", {
                  "aria-label": "weblink",
                  value: s,
                  onChange: d,
                  onKeyDown: r,
                  id: "weblink",
                  type: "text",
                  placeholder: "Enter weblink",
                  className:
                    "w-full text-start py-2 ml-4 bg-transparent border-none text-white placeholder-gray-400 focus:outline-none focus:border-white rounded-2xl",
                }),
                (0, i.jsx)("button", {
                  type: "button",
                  onClick: u,
                  children: c
                    ? (0, i.jsx)(o.Z, { className: "animate-spin" })
                    : (0, i.jsx)(a.Z, {}),
                }),
              ],
            }),
          ],
        });
      };
    },
    61665: function (e, t, l) {
      "use strict";
      var i = l(57437),
        o = l(33145);
      t.Z = (e) => {
        let { imgSrc: t, text: l } = e;
        return (0, i.jsxs)("div", {
          className:
            "bg-gradient-to-t from-black/95 via-black/95 to-[#161618]/95 h-52 md:h-52 border-dotted rounded-2xl border-2 border-[#DDDDF0]/50 text-white flex flex-col items-center justify-center transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-white/80 hover:shadow-opacity-70 my-4 aspect-square w-full xl:w-full",
          children: [
            (0, i.jsxs)("h2", {
              className: "text-lg md:text-lg font-bold mt-2 md:mb-6 mb-4 px-2",
              children: [
                "Upload ",
                l,
                " files or ",
                (0, i.jsx)("span", {
                  className: "text-[#5C5C64]",
                  children: "drop",
                }),
              ],
            }),
            (0, i.jsx)(o.default, {
              src: t,
              width: 100,
              height: 100,
              alt: "Drop files to upload or browse",
              className: "h-16 md:h-20 w-full object-contain",
            }),
          ],
        });
      };
    },
    66615: function (e, t, l) {
      "use strict";
      l.r(t);
      var i = l(57437),
        o = l(2265),
        a = l(74599),
        n = l(43414),
        s = l(76127),
        d = l(75341),
        r = l(61665),
        u = l(36434),
        c = l(80605),
        m = l(95279),
        x = l(91679),
        f = l(99388),
        p = l(99376),
        v = l(82957).Buffer;
      t.default = () => {
        let [e, t] = (0, o.useState)(null),
          [l, h] = (0, o.useState)(""),
          [g, w] = (0, o.useState)(!1),
          [b, j] = (0, o.useState)(!1),
          [y, N] = (0, o.useState)(""),
          [S, k] = (0, o.useState)(!1),
          [D, I] = (0, o.useState)(!1),
          [L, A] = (0, o.useState)(""),
          [C, Z] = (0, o.useState)(!1),
          [R, T] = (0, o.useState)([]),
          [U, P] = (0, o.useState)(""),
          V = (0, p.useRouter)(),
          [O, B] = (0, o.useState)({
            label: "Male (default)",
            openAi: !0,
            voiceId: "0",
            prompt: "",
          }),
          [_, E] = (0, o.useState)(
            "Upload Video/Audio files to get transcription.........."
          ),
          M = (0, o.useRef)(null),
          q = (0, o.useRef)(null),
          [F, z] = (0, o.useState)(!1),
          K = (0, c.useSession)(),
          W = (e) => {
            N(e), k(!0), setTimeout(() => k(!1), 3e3);
          },
          Y = (e) => {
            var l, i, o;
            let a = null;
            (a =
              "target" in e
                ? null !==
                    (i =
                      null === (l = e.target.files) || void 0 === l
                        ? void 0
                        : l[0]) && void 0 !== i
                  ? i
                  : null
                : null !== (o = e[0]) && void 0 !== o
                ? o
                : null) && (t(a), h(""), w(!0));
          },
          G = (e) => {
            e.preventDefault(), e.stopPropagation(), Y(e.dataTransfer.files);
          },
          H = async (e) => {
            if ("Enter" === e.key) {
              var t, i, o, a, n, s;
              let e;
              z(!0), I(!0);
              let d = await (0, u.qN)(
                l,
                null !==
                  (o =
                    null === (i = K.data) || void 0 === i
                      ? void 0
                      : null === (t = i.user) || void 0 === t
                      ? void 0
                      : t.email) && void 0 !== o
                  ? o
                  : ""
              );
              if (
                (E(
                  null !== (a = null == d ? void 0 : d.toString()) &&
                    void 0 !== a
                    ? a
                    : ""
                ),
                I(!1),
                z(!1),
                null == O ? void 0 : O.openAi)
              ) {
                let t = await (0, u.kL)(
                  null !== (n = null == d ? void 0 : d.toString()) &&
                    void 0 !== n
                    ? n
                    : "",
                  parseInt(null == O ? void 0 : O.voiceId)
                );
                e = v.from(t.audio);
              } else {
                let t = await (0, u.P1)(
                  null !== (s = null == d ? void 0 : d.toString()) &&
                    void 0 !== s
                    ? s
                    : "",
                  null == O ? void 0 : O.voiceId
                );
                e = v.from(t.audio);
              }
              let r = new Blob([e], { type: "audio/mpeg" }),
                c = URL.createObjectURL(r);
              Z(!1), console.log(c), A(c), d && W("Voice Transcription Done");
            }
          },
          J = async () => {
            var e, t, i, o, a, n;
            let s;
            z(!0), I(!0);
            let d = await (0, u.qN)(
              l,
              null !==
                (i =
                  null === (t = K.data) || void 0 === t
                    ? void 0
                    : null === (e = t.user) || void 0 === e
                    ? void 0
                    : e.email) && void 0 !== i
                ? i
                : ""
            );
            if (
              (E(
                null !== (o = null == d ? void 0 : d.toString()) && void 0 !== o
                  ? o
                  : ""
              ),
              I(!1),
              z(!1),
              null == O ? void 0 : O.openAi)
            ) {
              let e = await (0, u.kL)(
                null !== (a = null == d ? void 0 : d.toString()) && void 0 !== a
                  ? a
                  : "",
                parseInt(null == O ? void 0 : O.voiceId)
              );
              s = v.from(e.audio);
            } else {
              let e = await (0, u.P1)(
                null !== (n = null == d ? void 0 : d.toString()) && void 0 !== n
                  ? n
                  : "",
                null == O ? void 0 : O.voiceId
              );
              s = v.from(e.audio);
            }
            let r = new Blob([s], { type: "audio/mpeg" }),
              c = URL.createObjectURL(r);
            Z(!1), console.log(c), A(c), d && W("Voice Transcription Done");
          },
          Q = async (e) => {
            try {
              var t, l, i, o, a, n, s;
              I(!0), console.log(e.transcription, e.frames);
              let d =
                null !==
                  (o = await (0, u.cp)(
                    null == O ? void 0 : O.prompt,
                    e.transcription,
                    e.frames,
                    "",
                    null !==
                      (i =
                        null === (l = K.data) || void 0 === l
                          ? void 0
                          : null === (t = l.user) || void 0 === t
                          ? void 0
                          : t.email) && void 0 !== i
                      ? i
                      : ""
                  )) && void 0 !== o
                  ? o
                  : "";
              if (null !== d) {
                let e;
                if (
                  (w(!1),
                  j(!1),
                  I(!1),
                  E(
                    null !== (a = null == d ? void 0 : d.toString()) &&
                      void 0 !== a
                      ? a
                      : ""
                  ),
                  null == O ? void 0 : O.openAi)
                ) {
                  let t = await (0, u.kL)(
                    null !== (n = null == d ? void 0 : d.toString()) &&
                      void 0 !== n
                      ? n
                      : "",
                    parseInt(null == O ? void 0 : O.voiceId)
                  );
                  e = v.from(t.audio);
                } else {
                  let t = await (0, u.P1)(
                    null !== (s = null == d ? void 0 : d.toString()) &&
                      void 0 !== s
                      ? s
                      : "",
                    null == O ? void 0 : O.voiceId
                  );
                  e = v.from(t.audio);
                }
                let t = new Blob([e], { type: "audio/mpeg" }),
                  l = URL.createObjectURL(t);
                Z(!1), console.log(l), A(l), d && W("Voice Transcription Done");
              } else W("Your Credit limit Reached");
            } catch (e) {
              W("Something is Wrong! Please Try Again");
            }
          };
        async function X(e) {
          try {
            let t;
            if (null == e ? void 0 : e.openAi) {
              let l = await (0, u.kL)(
                null != _ ? _ : "",
                parseInt(null == e ? void 0 : e.voiceId)
              );
              t = v.from(l.audio);
            } else {
              let l = await (0, u.P1)(
                null != _ ? _ : "",
                null == e ? void 0 : e.voiceId
              );
              t = v.from(l.audio);
            }
            let l = new Blob([t], { type: "audio/mpeg" }),
              i = URL.createObjectURL(l);
            Z(!1), A(i), W("Voice Transcription Done");
          } catch (e) {
            W("Something is Wrong! Please Try Again"), I(!1);
          }
        }
        return (0, i.jsxs)("div", {
          className: "flex flex-col items-center justify-center",
          children: [
            (0, i.jsx)(f.Z, {
              onClick: () => {
                V.back();
              },
              className: "absolute top-4 right-24 text-white cursor-pointer",
            }),
            (0, i.jsxs)("div", {
              className: "flex w-full flex-col items-center justify-center",
              children: [
                (0, i.jsx)("h1", {
                  className:
                    "mt-12 inline-block  bg-gradient-to-r from-[#878787] to-white bg-clip-text text-5xl font-bold text-transparent md:mt-20 md:text-6xl",
                  children: "Visual AI",
                }),
                (0, i.jsx)("h2", {
                  className: "mb-0 text-2xl font-bold text-white md:mt-4",
                  children: "Media Upload",
                }),
                (0, i.jsx)("p", {
                  className:
                    "mx-auto mb-4 mt-4 w-3/5 text-center text-xs font-light text-white md:mb-4 md:mt-2 md:w-[16rem]",
                }),
                (0, i.jsx)("div", {
                  className:
                    "mb-4 mt-16 flex w-full flex-col items-center justify-center px-10 md:my-0 xl:space-x-16 xl:px-36 2xl:px-48",
                  children: (0, i.jsxs)("div", {
                    className:
                      "w-full flex md:flex-row flex-col justify-center items-center gap-4",
                    children: [
                      (0, i.jsx)("div", {
                        onDrop: G,
                        className: "w-full",
                        onDragOver: (e) => {
                          e.preventDefault(), e.stopPropagation();
                        },
                        children: (0, i.jsx)("button", {
                          type: "button",
                          onClick: () => {
                            var e;
                            null === (e = M.current) ||
                              void 0 === e ||
                              e.click();
                          },
                          title: "uploadButton",
                          className: "w-full",
                          children: (0, i.jsx)(r.Z, {
                            text: "video",
                            imgSrc: "/assets/video_upload.png",
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        onDrop: G,
                        className: "w-full",
                        onDragOver: (e) => {
                          e.preventDefault(), e.stopPropagation();
                        },
                        children: (0, i.jsx)("button", {
                          type: "button",
                          onClick: () => {
                            var e;
                            null === (e = q.current) ||
                              void 0 === e ||
                              e.click();
                          },
                          title: "uploadButton",
                          className: "w-full",
                          children: (0, i.jsx)(r.Z, {
                            text: "audio",
                            imgSrc: "/assets/audio_upload.png",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "flex h-fit w-full flex-col items-center justify-center md:flex-col px-10 md:my-0 xl:space-x-16 xl:px-36 2xl:px-48",
                  children: (0, i.jsx)(d.Z, {
                    title: "YouTube Link",
                    imgSrc: "/assets/web.png",
                    inputValue: l,
                    onChange: (e) => {
                      h(e.target.value);
                    },
                    onKeyDown: H,
                    submitImageURLEnter: J,
                    youtubeLoading: F,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className:
                    "mb-16 mt-4 flex w-full flex-col items-center justify-center px-10 md:my-0 xl:flex-row xl:space-x-4 xl:px-36 2xl:px-48",
                  children: [
                    (0, i.jsx)(n.Z, {
                      title: "Transcript",
                      staged: !0,
                      audio: L,
                      content: _,
                      audioShow: C,
                      setAudioShow: Z,
                    }),
                    (0, i.jsx)(s.Z, {
                      audioShow: C,
                      setAudioShow: Z,
                      voices: O,
                      title: "Voices",
                      getNewVoiceContent: X,
                      setVoices: B,
                    }),
                  ],
                }),
                (0, i.jsx)("input", {
                  title: "fileInput",
                  type: "file",
                  ref: q,
                  onChange: (e) => {
                    var l, i;
                    let o =
                      null !==
                        (i =
                          null === (l = e.target.files) || void 0 === l
                            ? void 0
                            : l[0]) && void 0 !== i
                        ? i
                        : null;
                    o && (t(o), h(""), j(!0));
                  },
                  accept:
                    "audio/mp3,audio/wav,audio/mpeg,audio/ogg,audio/m4a,audio/x-m4a,audio/aac,audio/x-aac,audio/aiff,audio/x-aiff,audio/x-ms-wma,audio/x-wav",
                  className: "hidden",
                }),
                (0, i.jsx)("input", {
                  title: "fileInput",
                  type: "file",
                  ref: M,
                  onChange: Y,
                  accept: "video/mp4,video/MP4,video/x-m4v,video/*",
                  className: "hidden",
                }),
                (0, i.jsx)(m.Z, {
                  isVideo: !0,
                  imageFile: e,
                  imageURL: l,
                  isOpen: g,
                  onClose: () => w(!1),
                  getTranscript: Q,
                  buttonText: D ? "Decoding Video..." : "Process",
                  cancelButton: !0,
                  setImageArray: T,
                  setAudioTranscript: P,
                }),
                (0, i.jsx)(x.Z, {
                  isVideo: !0,
                  imageFile: e,
                  imageURL: l,
                  isOpen: b,
                  onClose: () => j(!1),
                  getTranscript: Q,
                  buttonText: D ? "Decoding Audio..." : "Process",
                  cancelButton: !0,
                  setImageArray: T,
                  setAudioTranscript: P,
                }),
                (0, i.jsx)(a.Z, { message: y, show: S }),
              ],
            }),
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
        return e((e.s = 68409));
      }
    ),
      (_N_E = e.O());
  },
]);
