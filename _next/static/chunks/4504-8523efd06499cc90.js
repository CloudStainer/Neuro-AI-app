"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4504],
  {
    43664: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = n(2265),
        i = {
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
      let r = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        a = (e, t) => {
          let n = (0, o.forwardRef)((n, a) => {
            let {
              color: l = "currentColor",
              size: d = 24,
              strokeWidth: s = 2,
              absoluteStrokeWidth: c,
              className: u = "",
              children: m,
              ..._
            } = n;
            return (0, o.createElement)(
              "svg",
              {
                ref: a,
                ...i,
                width: d,
                height: d,
                stroke: l,
                strokeWidth: c ? (24 * Number(s)) / Number(d) : s,
                className: ["lucide", "lucide-".concat(r(e)), u].join(" "),
                ..._,
              },
              [
                ...t.map((e) => {
                  let [t, n] = e;
                  return (0, o.createElement)(t, n);
                }),
                ...(Array.isArray(m) ? m : [m]),
              ]
            );
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    99388: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      let o = (0, n(43664).Z)("CircleX", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
        ["path", { d: "m9 9 6 6", key: "z0biqf" }],
      ]);
    },
    91679: function (e, t, n) {
      var o = n(57437),
        i = n(11475),
        r = n(33145),
        a = n(2265),
        l = n(54887),
        d = n(74599),
        s = n(98364),
        c = n(67491);
      t.Z = (e) => {
        var t, n;
        let {
            imageFile: u,
            imageURL: m,
            getTranscript: _,
            isOpen: E,
            onClose: p,
            buttonText: v,
            cancelButton: f,
            setImageArray: h,
            isVideo: g,
            setAudioTranscript: I,
          } = e,
          [y, w] = (0, a.useState)(void 0),
          [A, P] = (0, a.useState)(!1),
          [x, b] = (0, a.useState)(""),
          [N, T] = (0, a.useState)(!1);
        async function L(e) {
          var t, n;
          let o = await fetch(e);
          o.ok ||
            console.log(
              "Failed to fetch image from "
                .concat(e.toString(), ". Status: ")
                .concat(o.status)
            );
          let i =
            null !== (t = o.headers.get("content-type")) && void 0 !== t
              ? t
              : void 0;
          return (
            i &&
              !i.startsWith("image/") &&
              console.log(
                "Retrieved content type (".concat(i, ") is not an image")
              ),
            new File(
              [await o.blob()],
              null !==
                (n = (function (e) {
                  let t = e.split("/");
                  return t[t.length - 1];
                })(e)) && void 0 !== n
                ? n
                : "temp",
              { type: i }
            )
          );
        }
        async function U(e) {
          let t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            o = URL.createObjectURL(e),
            i = document.createElement("video");
          async function r() {
            t && t(1);
          }
          for (
            i.addEventListener("seeked", r), i.src = o;
            (i.duration === 1 / 0 || isNaN(i.duration)) && i.readyState < 2;

          )
            await new Promise((e) => setTimeout(e, 1e3)),
              (i.currentTime = 1e7 * Math.random());
          let a = i.duration;
          console.log(o, a);
          let l = document.createElement("canvas"),
            d = l.getContext("2d"),
            [s, c] = [i.videoWidth, i.videoHeight];
          (l.width = s), (l.height = c), console.log("duration: ", a);
          let u = [],
            m =
              a > 180 ? (a > 300 ? (a > 480 ? 15 / n : 10 / n) : 5 / n) : 1 / n;
          console.log(m);
          let _ = 0;
          for (; _ < a; ) {
            (i.currentTime = _),
              await new Promise((e) => (t = e)),
              null == d || d.drawImage(i, 0, 0, s, c);
            let e = l.toDataURL();
            u.push(e), (_ += m);
          }
          return h && h(u), { frames: u, transcription: "" };
        }
        if (
          ((0, a.useEffect)(() => {
            if (u) {
              let e;
              return (
                "image/heic" === u.type || "image/heif" === u.type
                  ? void 0 !== window &&
                    (0, s.e)(u)
                      .then((t) => {
                        w((e = t));
                      })
                      .catch((e) => {
                        console.error(e);
                      })
                  : w((e = URL.createObjectURL(u))),
                () => {
                  URL.revokeObjectURL(e);
                }
              );
            }
          }, [u]),
          !E)
        )
          return null;
        async function C() {
          if (u) {
            console.log(u.type);
            try {
              var e, t, n, o;
              if ("image/heic" === u.type || "image/heif" === u.type)
                void 0 !== window &&
                  (0, s.e)(u)
                    .then(async (e) => {
                      P(!0);
                      let t = await L(e),
                        n = await (0, i.Z)(t);
                      P(!1),
                        _({ frames: [...n.toString()], transcription: "" });
                    })
                    .catch((e) => {
                      console.error(e);
                    });
              else if (
                (null == u ? void 0 : u.type) === "video/mp4" ||
                (null == u ? void 0 : u.type) === "video/MP4" ||
                (null == u ? void 0 : u.type) === "video/x-m4v" ||
                (null == u ? void 0 : u.type) === "video/*" ||
                (null == u ? void 0 : u.type) === "video/quicktime" ||
                (null == u ? void 0 : u.type) === "video/3gpp" ||
                (null == u ? void 0 : u.type) === "video/webm" ||
                (null == u ? void 0 : u.type) === "video/avi" ||
                (null == u ? void 0 : u.type) === "video/msvideo" ||
                (null == u ? void 0 : u.type) === "video/x-msvideo" ||
                (null == u ? void 0 : u.type) === "video/webm;codecs=h264"
              ) {
                P(!0);
                let n = await U(u),
                  o = new FormData();
                o.append("file", u), o.append("model", "whisper-1"), P(!1);
                let i = await fetch(
                  "https://api.openai.com/v1/audio/transcriptions",
                  {
                    method: "POST",
                    headers: {
                      Authorization: "Bearer ".concat(
                        c.O.NEXT_PUBLIC_OPENAI_API_KEY
                      ),
                    },
                    body: o,
                  }
                );
                i.ok || console.log("HTTP error! Status: ".concat(i.status));
                let r = await i.json();
                I &&
                  I(null !== (e = r.text.toString()) && void 0 !== e ? e : ""),
                  _({
                    frames: n.frames,
                    transcription:
                      null !== (t = r.text.toString()) && void 0 !== t ? t : "",
                  }),
                  _(n);
              } else if (
                (null == u ? void 0 : u.type) === "audio/mpeg" ||
                (null == u ? void 0 : u.type) === "audio/mp3" ||
                (null == u ? void 0 : u.type) === "audio/wav" ||
                (null == u ? void 0 : u.type) === "audio/ogg" ||
                (null == u ? void 0 : u.type) === "audio/webm" ||
                (null == u ? void 0 : u.type) === "audio/x-wav" ||
                (null == u ? void 0 : u.type) === "audio/x-ms-wma" ||
                (null == u ? void 0 : u.type) === "audio/vnd.wave" ||
                (null == u ? void 0 : u.type) === "audio/wave" ||
                (null == u ? void 0 : u.type) === "audio/x-pn-wav" ||
                (null == u ? void 0 : u.type) === "audio/x-wav" ||
                (null == u ? void 0 : u.type) === "audio/x-ms-wma" ||
                (null == u ? void 0 : u.type) === "audio/x-m4a"
              ) {
                P(!0), console.log("Hello Hi");
                let e = new FormData();
                e.append("file", u), e.append("model", "whisper-1");
                let t = await fetch(
                  "https://api.openai.com/v1/audio/transcriptions",
                  {
                    method: "POST",
                    headers: {
                      Authorization: "Bearer ".concat(
                        c.O.NEXT_PUBLIC_OPENAI_API_KEY
                      ),
                    },
                    body: e,
                  }
                );
                t.ok ||
                  console.log("HTTP error! Status: ".concat(await t.json()));
                let i = await t.json();
                I &&
                  I(null !== (n = i.text.toString()) && void 0 !== n ? n : ""),
                  console.log(i.text.toString()),
                  _({
                    frames: [],
                    transcription:
                      null !== (o = i.text.toString()) && void 0 !== o ? o : "",
                  }),
                  P(!1);
              } else {
                P(!0);
                let e = await (0, i.Z)(u);
                P(!1), _({ frames: [...e.toString()], transcription: "" });
              }
            } catch (e) {
              P(!1);
            }
          } else m && _({ frames: [...m], transcription: "" });
        }
        let S =
          null !== (t = null != y ? y : m) && void 0 !== t
            ? t
            : "/assets/image-icon.png";
        return (0, l.createPortal)(
          (0, o.jsxs)("div", {
            className:
              "fixed inset-0 z-50 flex flex-row items-center justify-center bg-black bg-opacity-50 p-4",
            children: [
              (0, o.jsx)("div", {
                className:
                  " h-fit w-4/5 overflow-hidden overflow-y-auto rounded-xl border border-[#DDDDF0]/50 bg-[#161618] bg-opacity-95 shadow-2xl md:w-8/12",
                children: (0, o.jsxs)("div", {
                  className: "relative px-4 py-8 text-center md:px-10",
                  children: [
                    (0, o.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, o.jsx)("h3", {
                          className:
                            "mb-4 mt-4 flex-1 text-center text-lg font-semibold text-white md:mt-8 md:text-xl",
                          children: "Audio Preview",
                        }),
                        (0, o.jsx)("button", {
                          type: "button",
                          onClick: () => {
                            T(!1), w(void 0), p();
                          },
                          className:
                            "absolute right-5 top-5 rounded-full border border-white/60 px-2 text-white transition duration-150 ease-in-out hover:bg-gray-700",
                          children: "\xd7",
                        }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: "mb-8 mt-4 flex items-center justify-center",
                      children: (0, o.jsx)("div", {
                        className:
                          "shadow-3xl inline-flex items-center justify-center p-2",
                        children: g
                          ? (0, o.jsx)("audio", {
                              src: S,
                              className:
                                "w-48 object-contain h-[4rem] md:w-[26rem]",
                              autoPlay: !0,
                              controls: !0,
                            })
                          : (0, o.jsx)(r.default, {
                              src: S,
                              alt: "Preview",
                              width: 500,
                              height: 500,
                              className:
                                "h-48 w-48 object-contain md:h-[26rem] md:w-[26rem]",
                              unoptimized: !0,
                            }),
                      }),
                    }),
                    (0, o.jsxs)("div", {
                      className:
                        "mt-4 flex justify-center space-x-2 md:space-x-4",
                      children: [
                        f &&
                          (0, o.jsx)("button", {
                            type: "button",
                            onClick: () => {
                              T(!1), w(void 0), p();
                            },
                            className:
                              "px-3 py-2 text-sm text-red-800 underline transition duration-300 hover:text-red-900 focus:outline-none md:px-6 md:text-base",
                            children: "Cancel",
                          }),
                        "Download" == v
                          ? (0, o.jsx)("a", {
                              href: null != m ? m : "",
                              rel: "noopener noreferrer",
                              download: m,
                              target: "_blank",
                              className:
                                "rounded-full bg-gray-500 px-3 py-2 text-sm font-bold text-white transition duration-300 hover:bg-gray-600 focus:outline-none md:px-6 md:text-base",
                              children: v,
                            })
                          : (0, o.jsx)("button", {
                              type: "button",
                              onClick: C,
                              className:
                                "rounded-full bg-gray-500 px-3 py-2 text-sm font-bold text-white transition duration-300 hover:bg-gray-600 focus:outline-none md:px-6 md:text-base",
                              children: A ? "uploading..." : v,
                            }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, o.jsx)(d.Z, { message: x, show: N }),
            ],
          }),
          null !== (n = document.getElementById("modal-root")) && void 0 !== n
            ? n
            : document.body
        );
      };
    },
    74599: function (e, t, n) {
      var o = n(57437);
      t.Z = (e) => {
        let { message: t, show: n } = e;
        return n
          ? (0, o.jsx)("div", {
              className:
                "fixed z-[100] top-0 md:px-6 md:top-4 md:right-0 md:min-w-[450px] md:max-w-md w-full bg-gradient-to-r from-[#141414] to-[#7A7A7A] text-white py-5 flex items-center border rounded-b-xl border-gray-600 md:rounded-l-3xl md:rounded-none justify-center shadow-md shadow-gray-300",
              role: "alert",
              children: t,
            })
          : null;
      };
    },
    11475: function (e, t, n) {
      var o = n(67491),
        i = n(93777);
      let r = o.O.NEXT_PUBLIC_SUPABASE_URL,
        a = o.O.NEXT_PUBLIC_SUPABASE_KEY,
        l = o.O.NEXT_PUBLIC_SUPABASE_STORAGE_URL,
        d = (0, i.eI)(r, a);
      async function s(e) {
        let { data: t, error: n } = await d.storage
          .from("deepsouth")
          .upload("".concat(new Date().toString(), "-").concat(e.name), e);
        return (
          console.log(n), "".concat(l, "/").concat(null == t ? void 0 : t.path)
        );
      }
      t.Z = s;
    },
    98364: function (e, t, n) {
      n.d(t, {
        e: function () {
          return o;
        },
      });
      async function o(e) {
        try {
          {
            let t = await e.arrayBuffer(),
              o = new Blob([t], { type: e.type }),
              i = (await n.e(2156).then(n.t.bind(n, 39140, 23))).default,
              r = await i({ blob: o, toType: "image/jpeg", quality: 1 });
            return URL.createObjectURL(r);
          }
        } catch (t) {
          return (
            console.error("Error converting image:", t), URL.createObjectURL(e)
          );
        }
      }
    },
    67491: function (e, t, n) {
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var o = n(5264),
        i = n(31229),
        r = n(25566);
      let a = (0, o.D)({
        server: {
          DATABASE_URL: i.z
            .string()
            .url()
            .refine(
              (e) => !e.includes("YOUR_MYSQL_URL_HERE"),
              "You forgot to change the default URL"
            ),
          NODE_ENV: i.z
            .enum(["development", "test", "production"])
            .default("development"),
          OPENAI_API_KEY: i.z.string(),
          GEMINI_API_KEY: i.z.string(),
          REPLICATE_API_KEY: i.z.string(),
          NEXTAUTH_SECRET: i.z.string(),
        },
        client: {
          NEXT_PUBLIC_GOOGLE_CLIENT_ID: i.z.string(),
          NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: i.z.string(),
          NEXT_PUBLIC_JWT_SECRET: i.z.string(),
          NEXT_PUBLIC_SUPABASE_KEY: i.z.string(),
          NEXT_PUBLIC_SUPABASE_URL: i.z.string(),
          NEXT_PUBLIC_SUPABASE_STORAGE_URL: i.z.string(),
          NEXT_PUBLIC_GROQ_API_KEY: i.z.string(),
          NEXT_PUBLIC_OPENAI_API_KEY: i.z.string(),
          NEXT_PUBLIC_FIREWORK_AI_API_KEY: i.z.string(),
          NEXT_PUBLIC_FIREWORK_AI_API_OPENAI_API_BASE: i.z.string(),
          NEXT_PUBLIC_PROJECT_ID: i.z.string(),
        },
        runtimeEnv: {
          DATABASE_URL: r.env.DATABASE_URL,
          NODE_ENV: "production",
          NEXT_PUBLIC_JWT_SECRET:
            "d030e3202b2e0bbc3c1801bde306559febde1c1c9bb29ec1adc13d92b79f75ad4d343dbefcbacf113eeab2822a5fdfc54d387f03df63df2d564eaca876e14504",
          OPENAI_API_KEY: r.env.OPENAI_API_KEY,
          GEMINI_API_KEY: r.env.GEMINI_API_KEY,
          REPLICATE_API_KEY: r.env.REPLICATE_API_KEY,
          NEXTAUTH_SECRET: r.env.NEXTAUTH_SECRET,
          NEXT_PUBLIC_SUPABASE_KEY:
            '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2cm56cnJsbWVsZGhoaXJzcWl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMDcxMjYsImV4cCI6MjAyODY4MzEyNn0.KKlSzQpZ3nhIYXJzFulKGE4vrmXVaO>',
          NEXT_PUBLIC_SUPABASE_URL: "https://zvrnzrrlmeldhhirsqiz.supabase.co",
          NEXT_PUBLIC_SUPABASE_STORAGE_URL:
            "https://zvrnzrrlmeldhhirsqiz.supabase.co/storage/v1/object/public/deepsouth",
          NEXT_PUBLIC_GROQ_API_KEY:
            "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",
          NEXT_PUBLIC_FIREWORK_AI_API_KEY: "fw_3ZKgWivs3Cey5f8CTfsmwmER",
          NEXT_PUBLIC_FIREWORK_AI_API_OPENAI_API_BASE:
            "https://api.fireworks.ai/inference/v1",
          NEXT_PUBLIC_PROJECT_ID: "5d7adf77baee6a01ad5b08905b5fbfb0",
        },
        skipValidation: !!r.env.SKIP_ENV_VALIDATION,
        emptyStringAsUndefined: !0,
      });
    },
  },
]);
