"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5089],
  {
    15318: function (e, t, a) {
      var i = a(57437),
        s = a(2265);
      t.Z = (e) => {
        let { onCapture: t, isCameraOn: a, setIsCameraOn: n } = e,
          l = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = null,
              t = async () => {
                try {
                  (e = await navigator.mediaDevices.getUserMedia({
                    video: !0,
                  })),
                    l.current && (l.current.srcObject = e);
                } catch (e) {
                  console.error("Error accessing the webcam:", e), n(!1);
                }
              };
            return (
              a && t(),
              () => {
                e && e.getTracks().forEach((e) => e.stop());
              }
            );
          }, [a]),
          (0, i.jsx)(i.Fragment, {
            children:
              a &&
              (0, i.jsx)("div", {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ".concat(
                    a ? "" : "hidden"
                  ),
                children: (0, i.jsxs)("div", {
                  className: "rounded-lg bg-[#161618] p-8 pt-0",
                  children: [
                    (0, i.jsx)("h1", {
                      className: "p-8 text-2xl font-bold text-white",
                      children: "Camera Capture",
                    }),
                    (0, i.jsx)("video", {
                      ref: l,
                      autoPlay: !0,
                      playsInline: !0,
                      style: { width: "100%" },
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "mt-4 flex justify-center space-x-2 md:space-x-4",
                      children: [
                        (0, i.jsx)("button", {
                          type: "button",
                          onClick: () => n(!1),
                          className:
                            "px-3 py-2 text-sm text-red-800 underline transition duration-300 hover:text-red-900 focus:outline-none md:px-6 md:text-base",
                          children: "Cancel",
                        }),
                        (0, i.jsx)("button", {
                          type: "button",
                          onClick: () => {
                            if (l.current) {
                              let e = document.createElement("canvas"),
                                a = e.getContext("2d");
                              (e.width = l.current.videoWidth),
                                (e.height = l.current.videoHeight),
                                a &&
                                  (a.drawImage(
                                    l.current,
                                    0,
                                    0,
                                    e.width,
                                    e.height
                                  ),
                                  e.toBlob((e) => {
                                    e &&
                                      (t(
                                        new File(
                                          [e],
                                          "".concat(
                                            new Date().toString(),
                                            "-capture.jpg"
                                          ),
                                          { type: "image/jpeg" }
                                        )
                                      ),
                                      n(!1));
                                  }, "image/jpeg"));
                            }
                          },
                          className:
                            "rounded-full bg-gray-500 px-3 py-2 text-sm font-bold text-white transition duration-300 hover:bg-gray-600 focus:outline-none md:px-6 md:text-base",
                          children: "Capture",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          })
        );
      };
    },
    36983: function (e, t, a) {
      var i = a(57437),
        s = a(33145);
      t.Z = (e) => {
        let { title: t, imgSrc: a, tag: n, content: l } = e;
        return (0, i.jsxs)("div", {
          className:
            "relative bg-gradient-to-t from-black/95 via-black/95 to-[#161618]/95 w-full h-40 md:h-64 rounded-2xl border border-[#DDDDF0]/50 text-white flex flex-col items-center justify-center transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-white/80 hover:shadow-opacity-70 my-4 aspect-square",
          children: [
            n &&
              (0, i.jsx)("span", {
                className:
                  "absolute -top-3 -right-5 bg-red-100 text-red-900/40 backdrop-blur-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900/40 dark:text-red-300 sm:hidden sm:cursor-pointer cursor-not-allowed",
                children: l,
              }),
            (0, i.jsx)("h2", {
              className: "text-lg xl:text-3xl font-semibold mt-2 mb-0 md:mb-4",
              children: t,
            }),
            (0, i.jsx)(s.default, {
              src: a,
              width: 100,
              height: 100,
              alt: t,
              className: "h-16 md:h-24 my-4 w-full object-contain",
            }),
          ],
        });
      };
    },
    75341: function (e, t, a) {
      var i = a(57437),
        s = a(51817),
        n = a(76858),
        l = a(33145);
      t.Z = (e) => {
        let {
          title: t,
          imgSrc: a,
          inputValue: o,
          onChange: r,
          onKeyDown: d,
          submitImageURLEnter: c,
          youtubeLoading: u,
        } = e;
        return (0, i.jsxs)("div", {
          className:
            "bg-gradient-to-t from-black to-[#161618] rounded-xl border border-[#DDDDF0]/50 text-white flex flex-col md:flex-row items-center justify-start h-fit sm:h-52 md:h-28 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-white/80 hover:shadow-opacity-70 p-4 sm:gap-10 gap-4 w-full",
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex my-8 md:my-0 flex-row items-center justify-start w-fit",
              children: [
                (0, i.jsx)(l.default, {
                  width: 100,
                  height: 100,
                  src: a,
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
                  value: o,
                  onChange: r,
                  onKeyDown: d,
                  id: "weblink",
                  type: "text",
                  placeholder: "Enter weblink",
                  className:
                    "w-full text-start py-2 ml-4 bg-transparent border-none text-white placeholder-gray-400 focus:outline-none focus:border-white rounded-2xl",
                }),
                (0, i.jsx)("button", {
                  type: "button",
                  onClick: c,
                  children: u
                    ? (0, i.jsx)(s.Z, { className: "animate-spin" })
                    : (0, i.jsx)(n.Z, {}),
                }),
              ],
            }),
          ],
        });
      };
    },
    31517: function (e, t, a) {
      var i = a(57437),
        s = a(2265),
        n = a(87151);
      t.Z = (e) => {
        let { title: t, content: a, onClick: l } = e,
          [o, r] = (0, s.useState)(!1),
          [d, c] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            setTimeout(() => {
              c(!1);
            }, 2e3);
          }, []),
          (0, i.jsxs)("div", {
            className:
              "bg-[#090909] border border-[#3b3b3c] rounded-xl py-4 px-8 cursor-pointer flex flex-col gap-2 h-fit w-full duration-500 transition-all overflow-hidden",
            onClick: () => l(t),
            children: [
              (0, i.jsx)("h2", {
                className: "text-white text-xl font-bold",
                children: t,
              }),
              d
                ? (0, i.jsxs)("div", {
                    className: "w-full flex flex-col gap-2 text-xs",
                    children: [
                      (0, i.jsx)("p", {
                        className:
                          "text-[#AAAAAA] w-full h-4 bg-[#393939] animate-pulse text-xs rounded-full",
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-[#AAAAAA] w-full h-4 bg-[#393939] animate-pulse text-xs rounded-full",
                      }),
                    ],
                  })
                : (0, i.jsx)(n.Z, { message: a, setTyped: r }),
            ],
          })
        );
      };
    },
    56151: function (e, t, a) {
      var i = a(57437);
      a(2265);
      var s = a(36983);
      t.Z = (e) => {
        let { onCapture: t } = e,
          a = async () => {
            try {
              let i;
              let s = (
                await navigator.mediaDevices.getDisplayMedia({ video: !0 })
              ).getVideoTracks()[0];
              if (s) {
                var e, a;
                i = new ImageCapture(s);
                let n = await (null == i ? void 0 : i.grabFrame());
                null == s || s.stop();
                let l = document.createElement("canvas");
                (l.width =
                  null !== (e = null == n ? void 0 : n.width) && void 0 !== e
                    ? e
                    : 0),
                  (l.height =
                    null !== (a = null == n ? void 0 : n.height) && void 0 !== a
                      ? a
                      : 0);
                let o = l.getContext("2d");
                null == o || o.drawImage(n, 0, 0, l.width, l.height);
                let r = await new Promise((e) => l.toBlob(e, "image/jpeg"));
                if (!r) throw Error("Canvas to Blob conversion failed");
                let d = new File(
                  [r],
                  "".concat(new Date().toString(), "-screenshot.jpg"),
                  { type: "image/jpeg" }
                );
                t(d);
              }
            } catch (e) {
              console.error("Error capturing the screen:", e);
            }
          };
        return (0, i.jsx)("button", {
          type: "button",
          title: "screenCapture",
          onClick: a,
          children: (0, i.jsx)(s.Z, {
            title: "Screen Capture",
            imgSrc: "/assets/screen.webp",
            tag: !0,
            content: "Web only",
          }),
        });
      };
    },
    71915: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = a(57437),
        s = a(2265),
        n = a(74599),
        l = a(15318),
        o = a(36983),
        r = a(56151),
        d = a(75341),
        c = a(48492);
      function u(e) {
        let {
            setAttachmentsOpen: t,
            setAttachments: a,
            setFrames: u,
            setAudioTranscript: m,
          } = e,
          [p, x] = (0, s.useState)(!1),
          [h, f] = (0, s.useState)(""),
          [g, v] = (0, s.useState)(!1),
          [b, w] = (0, s.useState)(!1),
          [y, j] = (0, s.useState)(""),
          N = (0, s.useRef)(null),
          S = (0, s.useRef)(null),
          [C, k] = (0, s.useState)(!1),
          [D, E] = (0, s.useState)(!1),
          [Z, T] = (0, s.useState)(!1),
          [I, A] = (0, s.useState)(null),
          R = async (e) => {
            A(e), E(!0), k(!0);
          },
          F = (e) => {
            f(e), x(!0), setTimeout(() => x(!1), 3e3);
          },
          M = (e) => {
            var t, a, i;
            let s = null;
            ((null ==
            (s =
              "target" in e
                ? null !==
                    (a =
                      null === (t = e.target.files) || void 0 === t
                        ? void 0
                        : t[0]) && void 0 !== a
                  ? a
                  : null
                : null !== (i = e[0]) && void 0 !== i
                ? i
                : null)
              ? void 0
              : s.type) === "video/mp4" ||
              (null == s ? void 0 : s.type) === "video/MP4" ||
              (null == s ? void 0 : s.type) === "video/x-m4v" ||
              (null == s ? void 0 : s.type) === "video/*") &&
              (T(!0), A(s), j(""), E(!0), k(!0)),
              s && (A(s), j(""), E(!0), k(!0));
          };
        return (0, i.jsxs)("div", {
          className:
            "fixed inset-0 z-50 flex flex-row items-center justify-center bg-black bg-opacity-50 p-4",
          children: [
            g &&
              (0, i.jsx)(l.Z, {
                onCapture: (e) => {
                  A(e), E(!0), k(!0);
                },
                isCameraOn: b,
                setIsCameraOn: w,
              }),
            (0, i.jsx)("input", {
              title: "fileInput",
              type: "file",
              ref: N,
              onChange: M,
              accept: "image/*",
              className: "hidden",
            }),
            (0, i.jsx)("input", {
              title: "fileInput",
              type: "file",
              ref: S,
              onChange: M,
              accept: "video/mp4,video/MP4,video/x-m4v,video/*",
              className: "hidden",
            }),
            (0, i.jsx)("div", {
              className:
                " h-fit w-fit overflow-hidden overflow-y-auto rounded-xl border border-[#DDDDF0]/50 bg-[#161618] bg-opacity-95 shadow-2xl md:w-fit",
              children: C
                ? (0, i.jsx)(c.Z, {
                    isVideo: Z,
                    imageFile: I,
                    imageURL: y,
                    isOpen: D,
                    onClose: () => k(!1),
                    getTranscript: function (e) {
                      a((t) => {
                        var a;
                        return [
                          ...t,
                          null !== (a = e.frames[0]) && void 0 !== a ? a : "",
                        ];
                      }),
                        A(null),
                        k(!1),
                        t(!1);
                    },
                    buttonText: "Attach",
                    cancelButton: !0,
                    setImageArray: u,
                    setAudioTranscript: m,
                  })
                : (0, i.jsxs)("div", {
                    className: "relative px-4 py-8 text-center md:px-10",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, i.jsx)("h3", {
                            className:
                              "mb-4 mt-4 flex-1 text-center text-lg font-semibold text-white md:mt-8 md:text-xl",
                            children: "Attachments",
                          }),
                          (0, i.jsx)("button", {
                            type: "button",
                            onClick: async () => {
                              t(!1);
                            },
                            className:
                              "absolute right-5 top-5 rounded-full border border-white/60 px-2 text-white transition duration-150 ease-in-out hover:bg-gray-700",
                            children: "\xd7",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, i.jsxs)("div", {
                            className:
                              "mb-4 mt-4 grid 2xl:grid-cols-3 grid-cols-2 items-center justify-center gap-4 ",
                            children: [
                              (0, i.jsx)("button", {
                                type: "button",
                                onClick: async () => {
                                  w(!0), v(!0);
                                },
                                children: (0, i.jsx)(o.Z, {
                                  title: "Camera",
                                  imgSrc: "/assets/camera.svg",
                                }),
                              }),
                              (0, i.jsx)(r.Z, { onCapture: R }),
                              (0, i.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                  var e;
                                  null === (e = N.current) ||
                                    void 0 === e ||
                                    e.click();
                                },
                                title: "uploadButton",
                                className: "w-full xl:w-fit",
                                children: (0, i.jsx)(o.Z, {
                                  title: "Upload File",
                                  imgSrc: "/assets/upload.png",
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex h-fit w-full flex-col items-center justify-center md:flex-col",
                            children: (0, i.jsx)(d.Z, {
                              title: "Web Link",
                              imgSrc: "/assets/web.png",
                              inputValue: y,
                              onChange: (e) => {
                                j(e.target.value), E(!0), k(!0);
                              },
                              onKeyDown: (e) => {
                                if ("Enter" === e.key) {
                                  e.preventDefault();
                                  let t = new Image();
                                  (t.onload = () => {
                                    A(null), E(!0), k(!0);
                                  }),
                                    (t.onerror = () => {
                                      F("The image is not accessible.");
                                    }),
                                    (t.src = y);
                                }
                              },
                              submitImageURLEnter: () => {
                                let e = new Image();
                                (e.onload = () => {
                                  A(null), E(!0), k(!0);
                                }),
                                  (e.onerror = () => {
                                    F("The image is not accessible.");
                                  }),
                                  (e.src = y);
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "mt-4 flex justify-center space-x-2 md:space-x-4",
                      }),
                    ],
                  }),
            }),
            (0, i.jsx)(n.Z, { message: h, show: p }),
          ],
        });
      }
    },
    46106: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = a(57437),
        s = a(2265),
        n = a(74599),
        l = a(15318),
        o = a(48492),
        r = a(59495),
        d = a(95279),
        c = a(33145),
        u = (e) => {
          let { title: t, imgSrc: a, tag: s, content: n } = e;
          return (0, i.jsxs)("div", {
            className:
              "relative bg-gradient-to-t from-black/95 via-black/95 to-[#161618]/95 w-full h-[160px] md:h-48 2xl:h-64 rounded-2xl border border-[#DDDDF0]/50 text-white flex flex-col items-center justify-center transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-white/80 hover:shadow-opacity-70 aspect-square",
            children: [
              s &&
                (0, i.jsx)("span", {
                  className:
                    "absolute -top-3 -right-5 bg-red-100 text-red-900/40 backdrop-blur-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900/40 dark:text-red-300 sm:hidden sm:cursor-pointer cursor-not-allowed",
                  children: n,
                }),
              (0, i.jsx)("h2", {
                className:
                  "text-lg xl:text-xl 2xl:text-3xl font-semibold mt-2 mb-0 md:mb-2 sm:block hidden",
                children: t,
              }),
              (0, i.jsx)(c.default, {
                src: a,
                width: 100,
                height: 100,
                alt: t,
                className: "h-16 md:h-20 2xl:h-24 my-4 w-full object-contain",
              }),
            ],
          });
        },
        m = (e) => {
          let { onCapture: t } = e,
            a = async () => {
              try {
                let i;
                let s = (
                  await navigator.mediaDevices.getDisplayMedia({ video: !0 })
                ).getVideoTracks()[0];
                if (s) {
                  var e, a;
                  i = new ImageCapture(s);
                  let n = await (null == i ? void 0 : i.grabFrame());
                  null == s || s.stop();
                  let l = document.createElement("canvas");
                  (l.width =
                    null !== (e = null == n ? void 0 : n.width) && void 0 !== e
                      ? e
                      : 0),
                    (l.height =
                      null !== (a = null == n ? void 0 : n.height) &&
                      void 0 !== a
                        ? a
                        : 0);
                  let o = l.getContext("2d");
                  null == o || o.drawImage(n, 0, 0, l.width, l.height);
                  let r = await new Promise((e) => l.toBlob(e, "image/jpeg"));
                  if (!r) throw Error("Canvas to Blob conversion failed");
                  let d = new File(
                    [r],
                    "".concat(new Date().toString(), "-screenshot.jpg"),
                    { type: "image/jpeg" }
                  );
                  t(d);
                }
              } catch (e) {
                console.error("Error capturing the screen:", e);
              }
            };
          return (0, i.jsx)("button", {
            type: "button",
            title: "screenCapture",
            onClick: a,
            children: (0, i.jsx)(u, {
              title: "Screen Capture",
              imgSrc: "/assets/screen.webp",
              tag: !0,
              content: "Web only",
            }),
          });
        },
        p = a(51817),
        x = a(76858),
        h = (e) => {
          let {
            title: t,
            imgSrc: a,
            inputValue: s,
            onChange: n,
            onKeyDown: l,
            submitImageURLEnter: o,
            youtubeLoading: r,
          } = e;
          return (0, i.jsxs)("div", {
            className:
              "bg-gradient-to-t from-black to-[#161618] rounded-xl border border-[#DDDDF0]/50 text-white flex flex-col sm:flex-row items-center justify-start h-fit sm:h-32 md:h-28 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-white/80 hover:shadow-opacity-70 p-4 sm:gap-10 gap-4 w-full",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex my-2 sm:my-8 md:my-0 flex-row items-center justify-start w-fit",
                children: [
                  (0, i.jsx)(c.default, {
                    width: 100,
                    height: 100,
                    src: a,
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
                    onChange: n,
                    onKeyDown: l,
                    id: "weblink",
                    type: "text",
                    placeholder: "Enter weblink",
                    className:
                      "w-full text-start py-2 ml-4 bg-transparent border-none text-white placeholder-gray-400 focus:outline-none focus:border-white rounded-2xl",
                  }),
                  (0, i.jsx)("button", {
                    type: "button",
                    onClick: o,
                    children: r
                      ? (0, i.jsx)(p.Z, { className: "animate-spin" })
                      : (0, i.jsx)(x.Z, {}),
                  }),
                ],
              }),
            ],
          });
        },
        f = a(80605);
      function g(e) {
        let {
            setVideoStatus: t,
            setYoutubeStatus: a,
            setAttachmentsOpen: c,
            setAttachments: p,
            setFrames: x,
            setAudioTranscript: g,
          } = e,
          [v, b] = (0, s.useState)(!1),
          [w, y] = (0, s.useState)(""),
          [j, N] = (0, s.useState)(!1),
          [S, C] = (0, s.useState)(!1),
          [k, D] = (0, s.useState)(""),
          E = (0, s.useRef)(null),
          Z = (0, s.useRef)(null),
          T = (0, s.useRef)(null),
          [I, A] = (0, s.useState)(!1),
          [R, F] = (0, s.useState)(!1),
          [M, O] = (0, s.useState)(!1),
          [B, L] = (0, s.useState)(!1),
          [P, U] = (0, s.useState)(!1),
          [V, _] = (0, s.useState)(!1),
          [z, H] = (0, s.useState)(null),
          [W, K] = (0, s.useState)(!1);
        (0, f.useSession)();
        let q = async (e) => {
            H(e), F(!0), A(!0);
          },
          X = (e) => {
            y(e), b(!0), setTimeout(() => b(!1), 3e3);
          },
          Y = (e) => {
            var a, i, s;
            let n = null;
            ((null ==
            (n =
              "target" in e
                ? null !==
                    (i =
                      null === (a = e.target.files) || void 0 === a
                        ? void 0
                        : a[0]) && void 0 !== i
                  ? i
                  : null
                : null !== (s = e[0]) && void 0 !== s
                ? s
                : null)
              ? void 0
              : n.type) === "video/mp4" ||
              (null == n ? void 0 : n.type) === "video/MP4" ||
              (null == n ? void 0 : n.type) === "video/x-m4v" ||
              (null == n ? void 0 : n.type) === "video/*") &&
              (L(!0), H(n), D(""), F(!0), A(!0), t(!0)),
              ((null == n ? void 0 : n.type) === "audio/mpeg" ||
                (null == n ? void 0 : n.type) === "audio/mp3" ||
                (null == n ? void 0 : n.type) === "audio/wav" ||
                (null == n ? void 0 : n.type) === "audio/ogg" ||
                (null == n ? void 0 : n.type) === "audio/m4a" ||
                (null == n ? void 0 : n.type) === "audio/x-m4a" ||
                (null == n ? void 0 : n.type) === "audio/aac" ||
                (null == n ? void 0 : n.type) === "audio/x-aac" ||
                (null == n ? void 0 : n.type) === "audio/aiff" ||
                (null == n ? void 0 : n.type) === "audio/x-aiff" ||
                (null == n ? void 0 : n.type) === "audio/x-ms-wma" ||
                (null == n ? void 0 : n.type) === "audio/x-wav") &&
                (L(!0), H(n), D(""), F(!0), A(!0), t(!0)),
              n && (H(n), D(""), F(!0), A(!0));
          };
        function G(e) {
          p((t) => {
            var a;
            return [
              ...t,
              ...(null !== (a = e.frames) && void 0 !== a ? a : ""),
            ];
          }),
            H(null),
            A(!1),
            c(!1);
        }
        let J = async () => {
          p([
            "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png",
          ]),
            x([k]),
            H(null),
            t(!1),
            a(!0),
            A(!1),
            c(!1);
        };
        return (0, i.jsxs)("div", {
          className:
            "fixed inset-0 z-50 flex flex-row items-center justify-center bg-black bg-opacity-50 p-4",
          children: [
            j &&
              (0, i.jsx)(l.Z, {
                onCapture: (e) => {
                  H(e), C(!1), F(!0), A(!0);
                },
                isCameraOn: S,
                setIsCameraOn: C,
              }),
            P &&
              (0, i.jsx)(r.Z, {
                onCapture: (e) => {
                  t(!0), L(!0), H(e), D(""), F(!0), A(!0), C(!1);
                },
                isCameraOn: S,
                setIsCameraOn: C,
              }),
            (0, i.jsx)("input", {
              title: "fileInput",
              type: "file",
              ref: E,
              onChange: Y,
              accept: "image/*",
              className: "hidden",
            }),
            (0, i.jsx)("input", {
              title: "fileInput",
              type: "file",
              ref: Z,
              onChange: Y,
              accept: "video/mp4,video/MP4,video/x-m4v,video/*",
              className: "hidden",
            }),
            (0, i.jsx)("input", {
              title: "fileInput",
              type: "file",
              ref: T,
              onChange: Y,
              accept:
                "audio/mp3,audio/wav,audio/mpeg,audio/ogg,audio/m4a,audio/x-m4a,audio/aac,audio/x-aac,audio/aiff,audio/x-aiff,audio/x-ms-wma,audio/x-wav",
              className: "hidden",
            }),
            (0, i.jsx)("div", {
              className:
                "h-fit w-fit overflow-hidden overflow-y-auto rounded-xl border border-[#DDDDF0]/50 bg-[#161618] bg-opacity-95 shadow-2xl md:w-fit",
              children: I
                ? (0, i.jsx)(i.Fragment, {
                    children: M
                      ? (0, i.jsx)(d.Z, {
                          isVideo: !0,
                          isOpen: M,
                          onClose: () => O(!1),
                          getTranscript: G,
                          buttonText: V ? "Decoding Video..." : "Process",
                          cancelButton: !0,
                          imageFile: z,
                        })
                      : (0, i.jsx)(o.Z, {
                          isVideo: B,
                          imageFile: z,
                          imageURL: k,
                          isOpen: R,
                          onClose: () => {
                            t(!0), A(!1);
                          },
                          getTranscript: G,
                          buttonText: "Attach",
                          cancelButton: !0,
                          setImageArray: x,
                          setAudioTranscript: g,
                        }),
                  })
                : (0, i.jsxs)("div", {
                    className: "relative px-4 py-8 text-center md:px-10",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, i.jsx)("h3", {
                            className:
                              "mb-4 mt-4 flex-1 text-center text-2xl font-semibold text-white md:mt-8 md:text-4xl",
                            children: "Attachments",
                          }),
                          (0, i.jsx)("button", {
                            type: "button",
                            onClick: async () => {
                              c(!1);
                            },
                            className:
                              "absolute right-5 top-5 rounded-full border border-white/60 px-2 text-white transition duration-150 ease-in-out hover:bg-gray-700",
                            children: "\xd7",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, i.jsxs)("div", {
                            className:
                              "mb-4 mt-4 grid 2xl:grid-cols-3 grid-cols-2 sm:grid-cols-3 gap-4 h-[80%] overflow-auto",
                            children: [
                              (0, i.jsx)("button", {
                                type: "button",
                                onClick: async () => {
                                  C(!0), N(!0);
                                },
                                className: "w-full xl:w-fit",
                                children: (0, i.jsx)(u, {
                                  title: "Camera",
                                  imgSrc: "/assets/camera.svg",
                                }),
                              }),
                              (0, i.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                  U(!0), C(!0);
                                },
                                title: "uploadButton",
                                className: "w-full xl:w-fit",
                                children: (0, i.jsx)(u, {
                                  title: "Record Video",
                                  imgSrc: "/assets/record_video.png",
                                }),
                              }),
                              (0, i.jsx)(m, { onCapture: q }),
                              (0, i.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                  var e;
                                  null === (e = E.current) ||
                                    void 0 === e ||
                                    e.click();
                                },
                                title: "uploadButton",
                                className: "w-full xl:w-fit",
                                children: (0, i.jsx)(u, {
                                  title: "Upload Image",
                                  imgSrc: "/assets/image_upload.png",
                                }),
                              }),
                              (0, i.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                  var e;
                                  null === (e = Z.current) ||
                                    void 0 === e ||
                                    e.click();
                                },
                                title: "uploadButton",
                                className: "w-full xl:w-fit",
                                children: (0, i.jsx)(u, {
                                  title: "Upload Video",
                                  imgSrc: "/assets/video_upload.png",
                                }),
                              }),
                              (0, i.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                  var e;
                                  null === (e = T.current) ||
                                    void 0 === e ||
                                    e.click();
                                },
                                title: "uploadButton",
                                className: "w-full xl:w-fit",
                                children: (0, i.jsx)(u, {
                                  title: "Upload Audio",
                                  imgSrc: "/assets/audio_upload.png",
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex h-fit w-full flex-col items-center justify-center md:flex-col",
                            children: (0, i.jsx)(h, {
                              title: "Link",
                              imgSrc: "/assets/web.png",
                              inputValue: k,
                              onChange: (e) => {
                                D(e.target.value);
                              },
                              onKeyDown: (e) => {
                                if ("Enter" === e.key) {
                                  e.preventDefault();
                                  let t = new Image();
                                  (t.onload = () => {
                                    k.includes("youtube")
                                      ? (H(null), F(!1), A(!1))
                                      : (H(null), F(!0), A(!0));
                                  }),
                                    (t.onerror = () => {
                                      X("The image is not accessible.");
                                    }),
                                    (t.src = k),
                                    k.includes("youtube") && J();
                                }
                              },
                              submitImageURLEnter: () => {
                                let e = new Image();
                                (e.onload = () => {
                                  k.includes("youtube")
                                    ? (H(null), F(!1), A(!1))
                                    : (H(null), F(!0), A(!0));
                                }),
                                  (e.onerror = () => {
                                    X("The image is not accessible.");
                                  }),
                                  (e.src = k),
                                  k.includes("youtube") && J();
                              },
                              youtubeLoading: W,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
            (0, i.jsx)(n.Z, { message: w, show: v }),
          ],
        });
      }
    },
    26459: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = a(57437),
        s = a(36434),
        n = a(33145),
        l = a(2265),
        o = a(82957).Buffer;
      function r(e) {
        let { content: t } = e,
          a = (0, l.useRef)(null),
          [r, d] = (0, l.useState)("00:00"),
          [c, u] = (0, l.useState)(0),
          [m, p] = (0, l.useState)(!1),
          [x, h] = (0, l.useState)(!1),
          [f, g] = (0, l.useState)(!1),
          [v, b] = (0, l.useState)(""),
          [w, y] = (0, l.useState)(!1),
          [j, N] = (0, l.useState)(""),
          [S, C] = (0, l.useState)(!1),
          [k, D] = (0, l.useState)(!1),
          [E, Z] = (0, l.useState)(!1),
          [T, I] = (0, l.useState)("/assets/sound.svg"),
          [A, R] = (0, l.useState)({
            label: "Echo",
            openAi: !0,
            voiceId: "0",
            prompt: "",
          }),
          F = (e) => {
            b(e), y(!0), setTimeout(() => y(!1), 3e3);
          },
          M = async () => {
            try {
              let e;
              if ((h(!0), g(!0), null == A ? void 0 : A.openAi)) {
                let a = await (0, s.kL)(
                  null != t ? t : "",
                  parseInt(null == A ? void 0 : A.voiceId)
                );
                e = o.from(a.audio);
                let i = new Blob([e], { type: "audio/mpeg" }),
                  n = URL.createObjectURL(i);
                C(!1), N(n);
              } else F("Something is Wrong! Please Try Again");
            } catch (e) {
              F("Something is Wrong! Please Try Again"), g(!1);
            }
          };
        return (
          (0, l.useEffect)(() => {
            "" !== j && !1 === S
              ? ((null == a ? void 0 : a.current) &&
                  (a.current.src = null != j ? j : ""),
                C(!0))
              : (null == a ? void 0 : a.current) &&
                (I("/assets/pause2.svg"), u(0)),
              a.current &&
                a.current.addEventListener("timeupdate", function () {
                  d(
                    (function (e) {
                      let t = Math.floor((e = Number(e)) / 60),
                        a = e % 60,
                        i = String(t).padStart(2, "0"),
                        s = String(a).padStart(2, "0");
                      return "".concat(i, ":").concat(s);
                    })(parseInt(this.currentTime.toFixed(0)))
                  ),
                    u(this.currentTime / this.duration);
                });
          }, [j, S]),
          (0, i.jsxs)("div", {
            className:
              "mb-2 flex flex-col items-center justify-center gap-4 text-left text-2xl font-bold md:flex-row md:justify-start md:gap-8 md:pt-4",
            children: [
              S &&
                (0, i.jsx)("audio", {
                  id: "player",
                  onEnded: () => {
                    I("/assets/sound.svg");
                  },
                  className: "hidden",
                  ref: a,
                  autoPlay: !0,
                  controls: !0,
                  children: (0, i.jsx)("source", {
                    src: j,
                    type: "audio/mpeg",
                  }),
                }),
              (0, i.jsx)("div", {
                className: "flex h-6 w-6 items-center justify-between",
                children: (0, i.jsx)("div", {
                  onClick: async () => {
                    if (!k) {
                      if (E) {
                        var e, t, i;
                        (
                          null === (e = a.current) || void 0 === e
                            ? void 0
                            : e.paused
                        )
                          ? (I("/assets/pause2.svg"),
                            await (null === (t = a.current) || void 0 === t
                              ? void 0
                              : t.play()))
                          : (null === (i = a.current) ||
                              void 0 === i ||
                              i.pause(),
                            I("/assets/sound.svg"));
                      } else
                        Z(!0),
                          D(!0),
                          M()
                            .then(async () => {
                              var e, t, i;
                              D(!1),
                                C(!0),
                                h(!0),
                                Z(!0),
                                (
                                  null === (e = a.current) || void 0 === e
                                    ? void 0
                                    : e.paused
                                )
                                  ? (await (null === (t = a.current) ||
                                    void 0 === t
                                      ? void 0
                                      : t.play()),
                                    I("/assets/pause2.svg"))
                                  : (null === (i = a.current) ||
                                      void 0 === i ||
                                      i.pause(),
                                    I("/assets/sound.svg"));
                            })
                            .catch(() => {
                              C(!1), h(!1);
                            });
                    }
                  },
                  className:
                    "h-6 w-6 rounded-full text-white" +
                    (k ? " cursor-wait" : " cursor-pointer"),
                  children: (0, i.jsx)(n.default, {
                    src: k ? "/assets/loading.svg" : T,
                    alt: "pause",
                    width: 100,
                    height: 100,
                    className:
                      "h-4 w-4 text-white" +
                      (k ? " cursor-wait animate-spin" : ""),
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    62767: function (e, t, a) {
      var i = a(57437),
        s = a(33145),
        n = a(2265),
        l = a(61810),
        o = a(11475),
        r = a(67491);
      t.Z = function (e) {
        let { setTranscriptionAudio: t, setVideoStatus: a } = e,
          [d, c] = (0, n.useState)(!1),
          [u, m] = (0, n.useState)(!1),
          [p, x] = (0, n.useState)(!1),
          [h, f] = (0, n.useState)(!1),
          [g, v] = (0, n.useState)(!1),
          b = async (e) => {
            var i;
            c(!0),
              a(!1),
              t(null !== (i = e.transcription) && void 0 !== i ? i : ""),
              c(!1),
              x(!1);
          },
          w = async (e) => {
            if ((v(!1), e)) {
              console.log(e.type);
              try {
                if (
                  (null == e ? void 0 : e.type) === "audio/mpeg" ||
                  (null == e ? void 0 : e.type) === "audio/mp3" ||
                  (null == e ? void 0 : e.type) === "audio/wav" ||
                  (null == e ? void 0 : e.type) === "audio/ogg" ||
                  (null == e ? void 0 : e.type) === "audio/webm" ||
                  (null == e ? void 0 : e.type) === "audio/x-wav" ||
                  (null == e ? void 0 : e.type) === "audio/x-ms-wma" ||
                  (null == e ? void 0 : e.type) === "audio/vnd.wave" ||
                  (null == e ? void 0 : e.type) === "audio/wave" ||
                  (null == e ? void 0 : e.type) === "audio/x-pn-wav" ||
                  (null == e ? void 0 : e.type) === "audio/x-wav" ||
                  (null == e ? void 0 : e.type) === "audio/x-ms-wma" ||
                  (null == e ? void 0 : e.type) === "audio/x-m4a"
                ) {
                  var t;
                  f(!0), console.log("Hello Hi");
                  let a = new FormData();
                  a.append("file", e), a.append("model", "whisper-1");
                  let i = await fetch(
                    "https://api.openai.com/v1/audio/transcriptions",
                    {
                      method: "POST",
                      headers: {
                        Authorization: "Bearer ".concat(
                          r.O.NEXT_PUBLIC_OPENAI_API_KEY
                        ),
                      },
                      body: a,
                    }
                  );
                  i.ok ||
                    console.log("HTTP error! Status: ".concat(await i.json()));
                  let s = await i.json();
                  console.log(s.text.toString()),
                    await b({
                      frames: [],
                      transcription:
                        null !== (t = s.text.toString()) && void 0 !== t
                          ? t
                          : "",
                    }),
                    f(!1);
                } else {
                  f(!0);
                  let t = await (0, o.Z)(e);
                  f(!1),
                    await b({ frames: [...t.toString()], transcription: "" }),
                    m(!1);
                }
              } catch (e) {
                f(!1), m(!1);
              }
            }
          };
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(s.default, {
              src: "/assets/microphone.png",
              alt: "image",
              width: 100,
              height: 100,
              className: "w-4 object-contain cursor-pointer",
              onClick: () => {
                m(!0), v(!0);
              },
            }),
            u && (0, i.jsx)(l.Z, { onCapture: w, isMicOn: g, setIsMicOn: v }),
          ],
        });
      };
    },
    61810: function (e, t, a) {
      var i = a(57437),
        s = a(33145),
        n = a(2265);
      t.Z = (e) => {
        let { onCapture: t, isMicOn: a, setIsMicOn: l } = e,
          o = (0, n.useRef)(null),
          [r, d] = n.useState(!1),
          [c, u] = n.useState(null);
        (0, n.useEffect)(() => {
          let e = null,
            i = async () => {
              try {
                (e = await navigator.mediaDevices.getUserMedia({ audio: !0 })),
                  o.current && (o.current.srcObject = e);
              } catch (e) {
                console.error("Error accessing the webcam:", e), l(!1);
              }
            };
          async function s() {
            if (o.current) {
              let e = await navigator.mediaDevices.getUserMedia({ audio: !0 });
              (o.current.srcObject = e),
                MediaRecorder.isTypeSupported("audio/webm") ||
                  console.warn("audio/webm is not supported");
              let a = new MediaRecorder(e, { mimeType: "audio/webm" }),
                i = [];
              a.addEventListener("dataavailable", (e) => {
                e.data.size > 0 && i.push(e.data);
              }),
                a.addEventListener("stop", () => {
                  t(
                    new File(
                      [new Blob(i, { type: "audio/webm" })],
                      "recording.webm",
                      { type: "audio/webm" }
                    )
                  ),
                    e.getTracks().forEach((e) => e.stop());
                }),
                u(a);
            }
          }
          return (
            a && (i(), s()),
            () => {
              e && e.getTracks().forEach((e) => e.stop());
            }
          );
        }, [a]);
        let m = async (e) => {
          if (c)
            try {
              e
                ? (console.log("Hello starting"), c.start())
                : (console.log("Hello stop"), c.stop());
            } catch (e) {
              console.error("Error accessing media devices.", e);
            }
        };
        return (0, i.jsx)(i.Fragment, {
          children:
            a &&
            (0, i.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ".concat(
                  a ? "" : "hidden"
                ),
              children: (0, i.jsxs)("div", {
                className:
                  "rounded-lg bg-[#161618] p-8 pt-0 flex flex-col justify-center items-center",
                children: [
                  (0, i.jsx)("h1", {
                    className: "p-8 text-2xl font-bold text-white",
                    children: "Record Audio",
                  }),
                  (0, i.jsx)(s.default, {
                    src: "/assets/microphone2.png",
                    alt: "Microphone",
                    width: 100,
                    height: 100,
                    className: "pb-8",
                  }),
                  (0, i.jsx)("audio", { ref: o, style: { width: "100%" } }),
                  (0, i.jsxs)("div", {
                    className:
                      "mt-4 flex justify-center space-x-2 md:space-x-4",
                    children: [
                      (0, i.jsx)("button", {
                        type: "button",
                        onClick: () => l(!1),
                        className:
                          "px-3 py-2 text-sm text-red-800 underline transition duration-300 hover:text-red-900 focus:outline-none md:px-6 md:text-base",
                        children: "Cancel",
                      }),
                      (0, i.jsx)("button", {
                        type: "button",
                        onClick: async () => {
                          r ? d(!1) : d(!0), await m(!r);
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
    87151: function (e, t, a) {
      var i = a(57437),
        s = a(19983),
        n = a(56500),
        l = a(40019),
        o = a(81740),
        r = a(4327);
      a(50933);
      var d = a(55769),
        c = a(61499);
      let u = new s.Z({
        linkify: !0,
        typographer: !0,
        html: !0,
        breaks: !0,
        highlight: function (e, t) {
          if (t && o.Z.getLanguage(t))
            try {
              return (
                '<div class="chat-bubble"><br /><pre>' +
                t +
                '</pre><pre class="chat-code"><code class="hljs">' +
                o.Z.highlight(e, { language: t, ignoreIllegals: !0 }).value +
                "</code></pre></div>"
              );
            } catch (e) {}
          return '<pre><code class="hljs">' + e + "</code></pre>";
        },
      })
        .use(n.Z)
        .use(l.Z)
        .use(r.Z)
        .use(d.Z);
      t.Z = function (e) {
        let { message: t, setTyped: a } = e;
        return (0, i.jsx)(c.x, {
          strings: [u.render(t)],
          typeSpeed: 0,
          showCursor: !1,
          autoInsertCss: !0,
          onComplete: () => a(!0),
          loop: !1,
          startWhenVisible: !1,
        });
      };
    },
    59495: function (e, t, a) {
      var i = a(57437),
        s = a(2265);
      t.Z = (e) => {
        let { onCapture: t, isCameraOn: a, setIsCameraOn: n } = e,
          l = (0, s.useRef)(null),
          [o, r] = s.useState(!1),
          [d, c] = s.useState(null);
        (0, s.useEffect)(() => {
          let e = null,
            i = async () => {
              try {
                (e = await navigator.mediaDevices.getUserMedia({
                  video: !0,
                  audio: !0,
                })),
                  l.current && (l.current.srcObject = e);
              } catch (e) {
                console.error("Error accessing the webcam:", e), n(!1);
              }
            };
          async function s() {
            if (l.current) {
              let e = await navigator.mediaDevices.getUserMedia({
                video: !0,
                audio: !0,
              });
              (l.current.srcObject = e),
                MediaRecorder.isTypeSupported("video/webm") ||
                  console.warn("video/webm is not supported");
              let a = new MediaRecorder(e, { mimeType: "video/webm" }),
                i = [];
              a.addEventListener("dataavailable", (e) => {
                e.data.size > 0 && i.push(e.data);
              }),
                a.addEventListener("stop", () => {
                  t(
                    new File(
                      [new Blob(i, { type: "video/webm" })],
                      "recording.webm",
                      { type: "video/webm" }
                    )
                  ),
                    e.getTracks().forEach((e) => e.stop());
                }),
                c(a);
            }
          }
          return (
            a && (i(), s()),
            () => {
              e && e.getTracks().forEach((e) => e.stop());
            }
          );
        }, [a]);
        let u = async (e) => {
          if (d)
            try {
              e
                ? (console.log("Hello starting"), d.start())
                : (console.log("Hello stop"), d.stop());
            } catch (e) {
              console.error("Error accessing media devices.", e);
            }
        };
        return (0, i.jsx)(i.Fragment, {
          children:
            a &&
            (0, i.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ".concat(
                  a ? "" : "hidden"
                ),
              children: (0, i.jsxs)("div", {
                className: "rounded-lg bg-[#161618] p-8 pt-0",
                children: [
                  (0, i.jsx)("h1", {
                    className: "p-8 text-2xl font-bold text-white",
                    children: "Record Video",
                  }),
                  (0, i.jsx)("video", {
                    ref: l,
                    autoPlay: !0,
                    style: { width: "100%" },
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "mt-4 flex justify-center space-x-2 md:space-x-4",
                    children: [
                      (0, i.jsx)("button", {
                        type: "button",
                        onClick: () => n(!1),
                        className:
                          "px-3 py-2 text-sm text-red-800 underline transition duration-300 hover:text-red-900 focus:outline-none md:px-6 md:text-base",
                        children: "Cancel",
                      }),
                      (0, i.jsx)("button", {
                        type: "button",
                        onClick: async () => {
                          o ? r(!1) : r(!0), await u(!o);
                        },
                        className:
                          "rounded-full bg-gray-500 px-3 py-2 text-sm font-bold text-white transition duration-300 hover:bg-gray-600 focus:outline-none md:px-6 md:text-base",
                        children: o ? "Stop Recording" : "Start Recording",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        });
      };
    },
    32903: function (e, t, a) {
      a.d(t, {
        r: function () {
          return i;
        },
      });
      function i() {
        return (
          Date.now().toString(36) + Math.random().toString(36).slice(2, 18)
        );
      }
    },
  },
]);
