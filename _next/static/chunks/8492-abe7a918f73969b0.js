"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8492],
  {
    48492: function (e, t, o) {
      var n = o(57437),
        i = o(11475),
        a = o(33145),
        r = o(2265),
        l = o(54887),
        d = o(74599),
        s = o(98364),
        c = o(67491);
      t.Z = (e) => {
        var t, o;
        let {
            imageFile: u,
            imageURL: _,
            getTranscript: m,
            isOpen: p,
            onClose: E,
            buttonText: v,
            cancelButton: f,
            setImageArray: I,
            isVideo: g,
            setAudioTranscript: h,
          } = e,
          [P, w] = (0, r.useState)(void 0),
          [y, A] = (0, r.useState)(!1),
          [b, x] = (0, r.useState)(""),
          [N, T] = (0, r.useState)(!1);
        async function L(e) {
          var t, o;
          let n = await fetch(e);
          n.ok ||
            console.log(
              "Failed to fetch image from "
                .concat(e.toString(), ". Status: ")
                .concat(n.status)
            );
          let i =
            null !== (t = n.headers.get("content-type")) && void 0 !== t
              ? t
              : void 0;
          return (
            i &&
              !i.startsWith("image/") &&
              console.log(
                "Retrieved content type (".concat(i, ") is not an image")
              ),
            new File(
              [await n.blob()],
              null !==
                (o = (function (e) {
                  let t = e.split("/");
                  return t[t.length - 1];
                })(e)) && void 0 !== o
                ? o
                : "temp",
              { type: i }
            )
          );
        }
        async function U(e) {
          let t,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            n = URL.createObjectURL(e),
            i = document.createElement("video");
          async function a() {
            t && t(1);
          }
          for (
            i.addEventListener("seeked", a),
              i.src = n,
              console.log("video.duration: ", i.duration);
            (i.duration === 1 / 0 || isNaN(i.duration)) && i.readyState < 2;

          )
            await new Promise((e) => setTimeout(e, 1e3)),
              (i.currentTime = 1e7 * Math.random());
          let r = i.duration,
            l = document.createElement("canvas"),
            d = l.getContext("2d"),
            [s, u] = [i.videoWidth, i.videoHeight];
          (l.width = s), (l.height = u), console.log("duration: ", r);
          let _ = [],
            m =
              r > 180 ? (r > 300 ? (r > 480 ? 15 / o : 10 / o) : 5 / o) : 1 / o;
          console.log(m);
          let p = 0;
          for (console.log("duration: ", r); p < r; ) {
            (i.currentTime = p),
              await new Promise((e) => (t = e)),
              null == d || d.drawImage(i, 0, 0, s, u);
            let e = l.toDataURL();
            _.push(e), (p += m);
          }
          let E = new FormData();
          E.append("file", e), E.append("model", "whisper-1");
          let v = await fetch(
            "https://api.openai.com/v1/audio/transcriptions",
            {
              method: "POST",
              headers: {
                Authorization: "Bearer ".concat(c.O.NEXT_PUBLIC_OPENAI_API_KEY),
              },
              body: E,
            }
          );
          if ((console.log(v), v.ok)) {
            let e = await v.json();
            if (h) {
              var f;
              h(null !== (f = e.text.toString()) && void 0 !== f ? f : "");
            }
          } else
            console.log("HTTP error! Status: ".concat(v.status)), h && h("");
          return I && I(_), _;
        }
        if (
          ((0, r.useEffect)(() => {
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
          !p)
        )
          return null;
        async function S() {
          if (u)
            try {
              var e, t, o, n;
              if ("image/heic" === u.type || "image/heif" === u.type)
                void 0 !== window &&
                  (0, s.e)(u)
                    .then(async (e) => {
                      A(!0);
                      let t = await L(e),
                        o = await (0, i.Z)(t);
                      A(!1), m({ frames: [o.toString()], transcription: "" });
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
                (null == u ? void 0 : u.type) === "video/x-ms-wmv"
              ) {
                A(!0);
                let o = await U(u);
                m({
                  frames: [
                    null !==
                      (t =
                        null === (e = o[0]) || void 0 === e
                          ? void 0
                          : e.toString()) && void 0 !== t
                      ? t
                      : "",
                  ],
                  transcription: "",
                });
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
                A(!0);
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
                h &&
                  h(null !== (o = i.text.toString()) && void 0 !== o ? o : ""),
                  m({
                    frames: [
                      "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/04/audio-file-types-17.jpg",
                    ],
                    transcription:
                      null !== (n = i.text.toString()) && void 0 !== n ? n : "",
                  });
              } else {
                A(!0);
                let e = await (0, i.Z)(u);
                A(!1), m({ frames: [e.toString()], transcription: "" });
              }
            } catch (e) {
              A(!1), console.log(e);
            }
          else _ && m({ frames: [_], transcription: "" });
        }
        let C =
          null !== (t = null != P ? P : _) && void 0 !== t
            ? t
            : "/assets/image-icon.png";
        return (0, l.createPortal)(
          (0, n.jsxs)("div", {
            className:
              "fixed inset-0 z-50 flex flex-row items-center justify-center bg-black bg-opacity-50 p-4",
            children: [
              (0, n.jsx)("div", {
                className:
                  " h-fit w-4/5 overflow-hidden overflow-y-auto rounded-xl border border-[#DDDDF0]/50 bg-[#161618] bg-opacity-95 shadow-2xl md:w-8/12",
                children: (0, n.jsxs)("div", {
                  className: "relative px-4 py-8 text-center md:px-10",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, n.jsx)("h3", {
                          className:
                            "mb-4 mt-4 flex-1 text-center text-lg font-semibold text-white md:mt-8 md:text-xl",
                          children: g ? "Media Preview" : "Image Preview",
                        }),
                        (0, n.jsx)("button", {
                          type: "button",
                          onClick: () => {
                            T(!1), w(void 0), E();
                          },
                          className:
                            "absolute right-5 top-5 rounded-full border border-white/60 px-2 text-white transition duration-150 ease-in-out hover:bg-gray-700",
                          children: "\xd7",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "mb-8 mt-4 flex items-center justify-center",
                      children: (0, n.jsx)("div", {
                        className:
                          "shadow-3xl inline-flex items-center justify-center rounded-2xl border border-white bg-[#111112] p-2 shadow-[0_0_15px_5px_rgba(75,75,75,0.5)]",
                        children: g
                          ? (0, n.jsx)("video", {
                              src: C,
                              className:
                                "h-48 w-48 object-contain md:h-[26rem] md:w-[26rem]",
                              autoPlay: !0,
                              controls: !0,
                            })
                          : (0, n.jsx)(a.default, {
                              src: C,
                              alt: "Preview",
                              width: 500,
                              height: 500,
                              className:
                                "h-48 w-48 object-contain md:h-[26rem] md:w-[26rem]",
                              unoptimized: !0,
                            }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-4 flex justify-center space-x-2 md:space-x-4",
                      children: [
                        f &&
                          (0, n.jsx)("button", {
                            type: "button",
                            onClick: () => {
                              T(!1), w(void 0), E();
                            },
                            className:
                              "px-3 py-2 text-sm text-red-800 underline transition duration-300 hover:text-red-900 focus:outline-none md:px-6 md:text-base",
                            children: "Cancel",
                          }),
                        "Download" == v
                          ? (0, n.jsx)("a", {
                              href: null != _ ? _ : "",
                              download: _,
                              rel: "noopener noreferrer",
                              target: "_blank",
                              className:
                                "rounded-full bg-gray-500 px-3 py-2 text-sm font-bold text-white transition duration-300 hover:bg-gray-600 focus:outline-none md:px-6 md:text-base",
                              children: v,
                            })
                          : (0, n.jsx)("button", {
                              type: "button",
                              onClick: S,
                              disabled: y,
                              className:
                                "rounded-full bg-gray-500 px-3 py-2 text-sm font-bold text-white transition duration-300 hover:bg-gray-600 focus:outline-none md:px-6 md:text-base" +
                                (y ? " cursor-not-allowed" : ""),
                              children: y ? "uploading..." : v,
                            }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(d.Z, { message: b, show: N }),
            ],
          }),
          null !== (o = document.getElementById("modal-root")) && void 0 !== o
            ? o
            : document.body
        );
      };
    },
    74599: function (e, t, o) {
      var n = o(57437);
      t.Z = (e) => {
        let { message: t, show: o } = e;
        return o
          ? (0, n.jsx)("div", {
              className:
                "fixed z-[100] top-0 md:px-6 md:top-4 md:right-0 md:min-w-[450px] md:max-w-md w-full bg-gradient-to-r from-[#141414] to-[#7A7A7A] text-white py-5 flex items-center border rounded-b-xl border-gray-600 md:rounded-l-3xl md:rounded-none justify-center shadow-md shadow-gray-300",
              role: "alert",
              children: t,
            })
          : null;
      };
    },
    11475: function (e, t, o) {
      var n = o(67491),
        i = o(93777);
      let a = n.O.NEXT_PUBLIC_SUPABASE_URL,
        r = n.O.NEXT_PUBLIC_SUPABASE_KEY,
        l = n.O.NEXT_PUBLIC_SUPABASE_STORAGE_URL,
        d = (0, i.eI)(a, r);
      async function s(e) {
        let { data: t, error: o } = await d.storage
          .from("deepsouth")
          .upload("".concat(new Date().toString(), "-").concat(e.name), e);
        return (
          console.log(o), "".concat(l, "/").concat(null == t ? void 0 : t.path)
        );
      }
      t.Z = s;
    },
    98364: function (e, t, o) {
      o.d(t, {
        e: function () {
          return n;
        },
      });
      async function n(e) {
        try {
          {
            let t = await e.arrayBuffer(),
              n = new Blob([t], { type: e.type }),
              i = (await o.e(2156).then(o.t.bind(o, 39140, 23))).default,
              a = await i({ blob: n, toType: "image/jpeg", quality: 1 });
            return URL.createObjectURL(a);
          }
        } catch (t) {
          return (
            console.error("Error converting image:", t), URL.createObjectURL(e)
          );
        }
      }
    },
    67491: function (e, t, o) {
      o.d(t, {
        O: function () {
          return r;
        },
      });
      var n = o(5264),
        i = o(31229),
        a = o(25566);
      let r = (0, n.D)({
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
          DATABASE_URL: a.env.DATABASE_URL,
          NODE_ENV: "production",
          NEXT_PUBLIC_JWT_SECRET:
            "d030e3202b2e0bbc3c1801bde306559febde1c1c9bb29ec1adc13d92b79f75ad4d343dbefcbacf113eeab2822a5fdfc54d387f03df63df2d564eaca876e14504",
          OPENAI_API_KEY: a.env.OPENAI_API_KEY,
          GEMINI_API_KEY: a.env.GEMINI_API_KEY,
          REPLICATE_API_KEY: a.env.REPLICATE_API_KEY,
          NEXTAUTH_SECRET: a.env.NEXTAUTH_SECRET,
          NEXT_PUBLIC_SUPABASE_KEY:
            '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2cm56cnJsbWVsZGhoaXJzcWl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMDcxMjYsImV4cCI6MjAyODY4MzEyNn0.KKlSzQpZ3nhIYXJzFulKGE4vrmXVaO>',
          NEXT_PUBLIC_SUPABASE_URL: "https://zvrnzrrlmeldhhirsqiz.supabase.co",
          NEXT_PUBLIC_SUPABASE_STORAGE_URL:
            "https://zvrnzrrlmeldhhirsqiz.supabase.co/storage/v1/object/public/deepsouth",

            NEXT_PUBLIC_GOOGLE_CLIENT_ID: "1",
          NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: "2",
          NEXT_PUBLIC_OPENAI_API_KEY: "3",

          NEXT_PUBLIC_GROQ_API_KEY:
            "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",
          NEXT_PUBLIC_FIREWORK_AI_API_KEY: "fw_3ZKgWivs3Cey5f8CTfsmwmER",
          NEXT_PUBLIC_FIREWORK_AI_API_OPENAI_API_BASE:
            "https://api.fireworks.ai/inference/v1",
          NEXT_PUBLIC_PROJECT_ID: "5d7adf77baee6a01ad5b08905b5fbfb0",
        },
        skipValidation: !!a.env.SKIP_ENV_VALIDATION,
        emptyStringAsUndefined: !0,
      });
    },
  },
]);
