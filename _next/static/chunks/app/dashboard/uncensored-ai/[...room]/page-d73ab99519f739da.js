(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4889],
  {
    45e3: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 47010));
    },
    47010: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l(57437),
        n = l(36434),
        a = l(33145),
        r = l(2265);
      l(50933);
      var i = l(87151),
        o = l(80605),
        d = l(99376),
        u = l(32903),
        c = l(31517),
        h = l(19983),
        m = l(56500),
        v = l(40019),
        g = l(81740),
        f = l(4327),
        x = l(55769),
        w = l(71915),
        p = l(26459),
        b = l(46106),
        j = l(62767),
        y = l(93130);
      let S = [
          "Will Bitcoin reach $100,000 by the end of 2024?",
          "How many days does it take to grow apples?",
          "How many houses does Elon Musk own?",
          "Will the world end in 2025?",
        ],
        k = [{ id: "ava", name: "AVA", imgUrl: "/assets/avaLogo.png" }];
      t.default = (e) => {
        var t;
        let { params: l } = e,
          [N, A] = (0, r.useState)(""),
          [E, H] = (0, r.useState)(!1),
          [C, T] = (0, r.useState)(!1),
          [I, Z] = (0, r.useState)(!1),
          [L, M] = (0, r.useState)([]),
          [_, B] = (0, r.useState)(!1),
          D = (0, o.useSession)(),
          O = (0, d.useRouter)(),
          [z, W] = (0, r.useState)(),
          [X, R] = (0, r.useState)([]),
          [V, q] = (0, r.useState)([]),
          [K, U] = (0, r.useState)(null),
          [F, J] = (0, r.useState)(!1),
          [P, Y] = (0, r.useState)([]),
          [$, G] = (0, r.useState)(""),
          [Q, ee] = (0, r.useState)(!1),
          [et, el] = (0, r.useState)(!1),
          es = (0, r.useRef)(null),
          en = (0, d.usePathname)(),
          ea = (0, r.useRef)(null);
        function er(e) {
          return new h.Z({
            linkify: !0,
            typographer: !0,
            html: !0,
            breaks: !0,
            highlight: function (e, t) {
              if (t && g.Z.getLanguage(t))
                try {
                  return (
                    '<div class="chat-bubble"><br /><pre>' +
                    t +
                    '</pre><pre class="chat-code"><code class="hljs">' +
                    g.Z.highlight(e, { language: t, ignoreIllegals: !0 })
                      .value +
                    "</code></pre></div>"
                  );
                } catch (e) {}
              return '<pre><code class="hljs">' + e + "</code></pre>";
            },
          })
            .use(m.Z)
            .use(v.Z)
            .use(f.Z)
            .use(x.Z)
            .render(e);
        }
        function ei(e) {
          var t;
          e.preventDefault();
          let l =
            null === (t = e.clipboardData) || void 0 === t
              ? void 0
              : t.getData("text/plain");
          document.execCommand("insertText", !1, l);
        }
        async function eo(e) {
          if (null !== K) {
            var t,
              s,
              a,
              r,
              i,
              o,
              d,
              u,
              c,
              h,
              m,
              v,
              g,
              f,
              x,
              w,
              p,
              b,
              j,
              y,
              S,
              k,
              N,
              E,
              H,
              C,
              T,
              I;
            let Z = [
                ...X.map((e) => ({
                  message: e.message,
                  sender: e.sender,
                  urlAttachments: e.urlAttachments,
                })),
                ...V.map((e) => ({
                  message: e.message,
                  sender: e.sender,
                  urlAttachments: e.urlAttachments,
                })),
              ],
              _ = {
                id: X.length + V.length + 1,
                message: e.toString(),
                roomId:
                  null !==
                    (a = null !== (s = l.room[1]) && void 0 !== s ? s : K) &&
                  void 0 !== a
                    ? a
                    : "",
                sender: "user",
                urlAttachments: F
                  ? [
                      null !==
                        (r =
                          null === (t = P[0]) || void 0 === t
                            ? void 0
                            : t.toString()) && void 0 !== r
                        ? r
                        : "",
                    ]
                  : L,
              };
            console.log(_),
              q((e) => [...e, _]),
              ea.current && ((ea.current.textContent = ""), M([])),
              await (0, n.Hz)(
                _.id,
                null !==
                  (o = null !== (i = l.room[1]) && void 0 !== i ? i : K) &&
                  void 0 !== o
                  ? o
                  : "",
                _.message,
                _.sender,
                _.urlAttachments
              );
            let O = "";
            switch (l.room[0]) {
              case "gpt":
                O =
                  null !== (d = await (0, n.H0)(e.toString(), Z)) &&
                  void 0 !== d
                    ? d
                    : "";
                break;
              case "neverNoromaid":
                O =
                  null !== (u = await (0, n.sX)(e.toString(), Z)) &&
                  void 0 !== u
                    ? u
                    : "";
                break;
              case "neverLlama":
                O =
                  null !== (c = await (0, n.ZT)(e.toString(), Z)) &&
                  void 0 !== c
                    ? c
                    : "";
                break;
              case "ava":
                O =
                  null !== (h = await (0, n.l3)(e.toString(), Z)) &&
                  void 0 !== h
                    ? h
                    : "";
                break;
              case "gemma":
                O =
                  null !== (m = await (0, n.CM)(e.toString(), Z)) &&
                  void 0 !== m
                    ? m
                    : "";
                break;
              case "mixtral":
                O =
                  null !== (v = await (0, n.OM)(e.toString(), Z)) &&
                  void 0 !== v
                    ? v
                    : "";
                break;
              case "phi":
                O =
                  null !== (g = await (0, n.Xw)(e.toString())) && void 0 !== g
                    ? g
                    : "";
                break;
              case "llama":
                O = await (0, n.OA)(e.toString(), Z);
                break;
              case "bittensor":
                O =
                  null !== (f = await (0, n.qX)(e.toString(), [])) &&
                  void 0 !== f
                    ? f
                    : "";
                break;
              case "deepsouth":
                console.log("videoStatus: ", Q),
                  Q
                    ? (console.log("frames.length: ", P.length),
                      (O =
                        null !==
                          (w = await (0, n.Ju)(
                            e.toString(),
                            $,
                            P,
                            null !== (x = L[0]) && void 0 !== x ? x : ""
                          )) && void 0 !== w
                          ? w
                          : ""))
                    : et
                    ? (A(null !== (j = P[0]) && void 0 !== j ? j : ""),
                      (O =
                        null !==
                          (k = await (0, n.qN)(
                            null !== (y = P[0]) && void 0 !== y ? y : "",
                            null !==
                              (S =
                                null === (b = D.data) || void 0 === b
                                  ? void 0
                                  : null === (p = b.user) || void 0 === p
                                  ? void 0
                                  : p.email) && void 0 !== S
                              ? S
                              : ""
                          )) && void 0 !== k
                          ? k
                          : ""))
                    : (O =
                        null !==
                          (N = await (0, n.HS)(
                            e.toString(),
                            Z,
                            _.urlAttachments
                          )) && void 0 !== N
                          ? N
                          : "");
                break;
              case "turbo":
                O =
                  null !==
                    (E = await (0, n.HS)(e.toString(), Z, _.urlAttachments)) &&
                  void 0 !== E
                    ? E
                    : "";
            }
            B(!1),
              (_ = {
                id: X.length + V.length + 2,
                message: O,
                roomId:
                  null !==
                    (C = null !== (H = l.room[1]) && void 0 !== H ? H : K) &&
                  void 0 !== C
                    ? C
                    : "",
                sender: "bot",
                urlAttachments: [],
              }),
              q((e) => [...e, _]),
              await (0, n.Hz)(
                _.id,
                null !==
                  (I = null !== (T = l.room[1]) && void 0 !== T ? T : K) &&
                  void 0 !== I
                  ? I
                  : "",
                _.message,
                _.sender,
                _.urlAttachments
              );
          }
        }
        async function ed(e) {
          var t,
            s,
            a,
            r,
            i,
            o,
            d,
            c,
            h,
            m,
            v,
            g,
            f,
            x,
            w,
            p,
            b,
            j,
            y,
            S,
            k,
            N,
            E,
            H,
            C,
            T,
            I;
          let Z = (0, u.r)(),
            _ = {
              id: V.length + 1,
              message: e.toString(),
              roomId: Z.toString(),
              sender: "user",
              urlAttachments: F
                ? [
                    null !==
                      (i =
                        null === (t = P[0]) || void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== i
                      ? i
                      : "",
                  ]
                : L,
            };
          q((e) => [...e, _]),
            A(""),
            ea.current && ((ea.current.textContent = ""), M([])),
            await (0, n.dB)(
              null !== (o = _.message.slice(0, 20)) && void 0 !== o
                ? o
                : "No Title",
              null !==
                (d =
                  null === (r = D.data) || void 0 === r
                    ? void 0
                    : null === (a = r.user) || void 0 === a
                    ? void 0
                    : null === (s = a.email) || void 0 === s
                    ? void 0
                    : s.toString()) && void 0 !== d
                ? d
                : "",
              null !== (c = l.room[0]) && void 0 !== c ? c : "gpt",
              "conversational",
              Z.toString()
            ),
            U(Z.toString()),
            await (0, n.Hz)(_.id, Z, _.message, _.sender, _.urlAttachments);
          let B = "";
          switch (l.room[0]) {
            case "gpt":
              B =
                null !== (h = await (0, n.H0)(e.toString(), [])) && void 0 !== h
                  ? h
                  : "";
              break;
            case "neverNoromaid":
              B =
                null !== (m = await (0, n.sX)(e.toString(), [])) && void 0 !== m
                  ? m
                  : "";
              break;
            case "neverLlama":
              B =
                null !== (v = await (0, n.ZT)(e.toString(), [])) && void 0 !== v
                  ? v
                  : "";
              break;
            case "ava":
              B =
                null !== (g = await (0, n.l3)(e.toString(), [])) && void 0 !== g
                  ? g
                  : "";
              break;
            case "gemma":
              B =
                null !== (f = await (0, n.CM)(e.toString(), [])) && void 0 !== f
                  ? f
                  : "";
              break;
            case "mixtral":
              B =
                null !== (x = await (0, n.OM)(e.toString(), [])) && void 0 !== x
                  ? x
                  : "";
              break;
            case "phi":
              B =
                null !== (w = await (0, n.Xw)(e.toString())) && void 0 !== w
                  ? w
                  : "";
              break;
            case "llama":
              B = await (0, n.OA)(e.toString(), []);
              break;
            case "bittensor":
              B =
                null !== (p = await (0, n.qX)(e.toString(), [])) && void 0 !== p
                  ? p
                  : "";
              break;
            case "gemma":
              B =
                null !== (b = await (0, n.CM)(e.toString(), [])) && void 0 !== b
                  ? b
                  : "";
              break;
            case "deepsouth":
              console.log("videoStatus: ", Q),
                Q
                  ? (console.log("frames.length: ", P.length),
                    (B =
                      null !==
                        (y = await (0, n.Ju)(
                          e.toString(),
                          $,
                          P,
                          null !== (j = L[0]) && void 0 !== j ? j : ""
                        )) && void 0 !== y
                        ? y
                        : ""))
                  : et
                  ? (A(null !== (N = P[0]) && void 0 !== N ? N : ""),
                    (B =
                      null !==
                        (C = await (0, n.qN)(
                          null !== (E = P[0]) && void 0 !== E ? E : "",
                          null !==
                            (H =
                              null === (k = D.data) || void 0 === k
                                ? void 0
                                : null === (S = k.user) || void 0 === S
                                ? void 0
                                : S.email) && void 0 !== H
                            ? H
                            : ""
                        )) && void 0 !== C
                        ? C
                        : ""))
                  : (B =
                      null !==
                        (T = await (0, n.HS)(
                          e.toString(),
                          [],
                          _.urlAttachments
                        )) && void 0 !== T
                        ? T
                        : "");
              break;
            case "turbo":
              B =
                null !==
                  (I = await (0, n.HS)(e.toString(), [], _.urlAttachments)) &&
                void 0 !== I
                  ? I
                  : "";
          }
          (_ = {
            id: V.length + 2,
            message: B,
            roomId: Z.toString(),
            sender: "bot",
            urlAttachments: [],
          }),
            q((e) => [...e, _]),
            await (0, n.Hz)(
              _.id,
              Z.toString(),
              _.message,
              _.sender,
              _.urlAttachments
            );
          let O = "".concat(en, "/").concat(Z.toString());
          void 0 !== window &&
            window.history.pushState(
              { ...window.history.state, as: O, url: O },
              "",
              O
            );
        }
        (0, r.useEffect)(() => {
          var e;
          let t = (e) => {
            ea.current &&
              !ea.current.contains(e.target) &&
              (ea.current.contentEditable = "false");
          };
          return (
            null === (e = ea.current) ||
              void 0 === e ||
              e.addEventListener("paste", ei),
            void 0 !== window && window.addEventListener("mousedown", t),
            () => {
              window.removeEventListener("mousedown", t);
            }
          );
        }, [ea]);
        let eu = async (e) => {
            null !== K ? await eo(e) : await ed(e);
          },
          ec = async () => {
            if (l.room.length > 1 && l.room[1]) {
              var e, t;
              let s = (
                await (0, n.DH)(
                  null !==
                    (t = null !== (e = l.room[1]) && void 0 !== e ? e : K) &&
                    void 0 !== t
                    ? t
                    : ""
                )
              ).map((e) => {
                var t, l, s, n;
                return {
                  id: null !== (t = e.id) && void 0 !== t ? t : 0,
                  message: null !== (l = e.message) && void 0 !== l ? l : "",
                  roomId: null !== (s = e.roomId) && void 0 !== s ? s : "",
                  sender: null !== (n = e.sender) && void 0 !== n ? n : "user",
                  urlAttachments: (function (e) {
                    try {
                      var t;
                      if ("" === e) return [];
                      return null !== (t = null == e ? void 0 : e.split(",")) &&
                        void 0 !== t
                        ? t
                        : [];
                    } catch (e) {
                      return [];
                    }
                  })(e.urlAttachments),
                };
              });
              console.log(s), R(s);
            }
          },
          eh = async (e) => {
            e.preventDefault(), await eu(N);
          },
          em = (e) => {
            "Enter" === e.key && e.ctrlKey && Z(!0);
          };
        return (
          (0, r.useEffect)(
            () => (
              document.addEventListener("keydown", em),
              () => {
                document.removeEventListener("keydown", em);
              }
            ),
            [em]
          ),
          (0, r.useEffect)(() => {
            W(k.filter((e) => e.id === l.room[0])[0]);
          }, [l.room]),
          (0, r.useEffect)(() => {
            if (l.room.length > 1 && l.room[1])
              try {
                var e;
                U(null !== (e = l.room[1]) && void 0 !== e ? e : K),
                  H(!0),
                  ec()
                    .then(() => {
                      H(!1);
                    })
                    .catch(() => {
                      H(!1), O.push("/dashboard/conversational-ai");
                    });
              } catch (e) {
                console.error(e);
              }
          }, [l.room]),
          (0, r.useEffect)(() => {
            var e, t;
            X.length &&
              (null === (e = es.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "instant", block: "end" })),
              V.length &&
                (null === (t = es.current) ||
                  void 0 === t ||
                  t.scrollIntoView({ behavior: "smooth", block: "end" }));
          }, [V.length, X.length, _]),
          (0, s.jsxs)("div", {
            className: "h-full w-full p-4 sm:p-8",
            children: [
              I &&
                (0, s.jsx)(w.Z, {
                  setAttachmentsOpen: T,
                  setAttachments: M,
                  setFrames: Y,
                  frames: P,
                  setAudioTranscript: G,
                }),
              C &&
                (0, s.jsx)(b.Z, {
                  setVideoStatus: ee,
                  setYoutubeStatus: el,
                  setAttachmentsOpen: T,
                  setAttachments: M,
                  setFrames: Y,
                  frames: P,
                  setAudioTranscript: G,
                }),
              (0, s.jsx)("div", {
                className:
                  "flex h-full w-full items-center justify-center overflow-visible" +
                  (V.length || X.length
                    ? " md:px-4 md:py-4 lg:px-24 lg:py-16 xl:px-24 xl:py-10"
                    : ""),
                children: (0, s.jsx)("div", {
                  className:
                    "relative flex h-full w-full items-center justify-center",
                  children: (0, s.jsxs)("div", {
                    className:
                      "flex h-full w-full flex-col items-center rounded-xl text-white xl:w-[800px]" +
                      (V.length || X.length
                        ? " justify-between"
                        : " justify-center gap-10"),
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "scroll-y-auto flex h-fit w-full items-center justify-center overflow-y-auto",
                        children:
                          V.length || X.length || l.room.length > 1
                            ? (0, s.jsxs)("div", {
                                className: "flex h-full w-full flex-col",
                                children: [
                                  X.sort((e, t) => (e.id > t.id ? 1 : -1)).map(
                                    (e, t) => {
                                      var n, r, i, o, d, u, c, h, m, v;
                                      return (0, s.jsx)(
                                        "div",
                                        {
                                          className:
                                            "flex h-fit w-full items-start ".concat(
                                              "user" === e.sender
                                                ? "justify-start"
                                                : "justify-end",
                                              " p-4"
                                            ),
                                          children: (0, s.jsxs)("div", {
                                            className:
                                              "flex flex-col items-start justify-start gap-2 rounded-xl p-4 text-xs sm:text-sm ".concat(
                                                "user" === e.sender
                                                  ? " w-11/12 bg-[#1E1E1E] sm:w-4/5"
                                                  : " sm:w-f w-11/12 bg-[#161616]"
                                              ),
                                            children: [
                                              (0, s.jsx)("div", {
                                                className: "flex w-full gap-2",
                                                children:
                                                  0 !==
                                                    e.urlAttachments.length &&
                                                  (e.urlAttachments.length >= 2
                                                    ? (0, s.jsx)(a.default, {
                                                        width: 1e3,
                                                        height: 1e3,
                                                        src:
                                                          null !==
                                                            (c =
                                                              null ===
                                                                (n =
                                                                  e
                                                                    .urlAttachments[0]) ||
                                                              void 0 === n
                                                                ? void 0
                                                                : n.concat(
                                                                    ",",
                                                                    null !==
                                                                      (u =
                                                                        e
                                                                          .urlAttachments[1]) &&
                                                                      void 0 !==
                                                                        u
                                                                      ? u
                                                                      : ""
                                                                  )) &&
                                                          void 0 !== c
                                                            ? c
                                                            : "/assets/user-fallback.png",
                                                        alt: "Avatar",
                                                        className:
                                                          "relative flex w-full items-center gap-2 overflow-hidden rounded-lg bg-[#3b3b3c]",
                                                      })
                                                    : (0, s.jsx)(a.default, {
                                                        width: 1e3,
                                                        height: 1e3,
                                                        src:
                                                          null !==
                                                            (h =
                                                              e
                                                                .urlAttachments[0]) &&
                                                          void 0 !== h
                                                            ? h
                                                            : "/assets/user-fallback.png",
                                                        alt: "Avatar",
                                                        className:
                                                          "relative flex w-full items-center gap-2 overflow-hidden rounded-lg bg-[#3b3b3c]",
                                                      })),
                                              }),
                                              (0, s.jsxs)("div", {
                                                className:
                                                  "flex items-center justify-center gap-2",
                                                children: [
                                                  (0, s.jsx)(a.default, {
                                                    width: 100,
                                                    height: 100,
                                                    src:
                                                      "user" === e.sender
                                                        ? null !==
                                                            (m =
                                                              null ===
                                                                (i = D.data) ||
                                                              void 0 === i
                                                                ? void 0
                                                                : null ===
                                                                    (r =
                                                                      i.user) ||
                                                                  void 0 === r
                                                                ? void 0
                                                                : r.image) &&
                                                          void 0 !== m
                                                          ? m
                                                          : "/assets/user-fallback.png"
                                                        : null !==
                                                            (v =
                                                              null == z
                                                                ? void 0
                                                                : z.imgUrl) &&
                                                          void 0 !== v
                                                        ? v
                                                        : "",
                                                    alt: "Avatar",
                                                    className:
                                                      "w-8 object-contain rounded-full",
                                                  }),
                                                  "user" === e.sender
                                                    ? (0, s.jsx)("strong", {
                                                        children:
                                                          null ===
                                                            (d = D.data) ||
                                                          void 0 === d
                                                            ? void 0
                                                            : null ===
                                                                (o = d.user) ||
                                                              void 0 === o
                                                            ? void 0
                                                            : o.name,
                                                      })
                                                    : (0, s.jsx)("strong", {
                                                        children:
                                                          null == z
                                                            ? void 0
                                                            : z.name,
                                                      }),
                                                ],
                                              }),
                                              (0, s.jsx)("div", {
                                                className:
                                                  "w-full overflow-hidden pr-4 sm:pl-8",
                                                children:
                                                  (e.sender,
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "overflow-hidden",
                                                    dangerouslySetInnerHTML: {
                                                      __html: er(e.message),
                                                    },
                                                  })),
                                              }),
                                              "user" !== e.sender &&
                                                "deepsouth" === l.room[0] &&
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "flex w-full items-center justify-start gap-2",
                                                  children: [
                                                    (0, s.jsx)(p.Z, {
                                                      content: e.message,
                                                    }),
                                                    (0, s.jsx)(a.default, {
                                                      onClick: () =>
                                                        navigator.clipboard.writeText(
                                                          e.message
                                                        ),
                                                      src: "/assets/copy.svg",
                                                      alt: "copy",
                                                      width: 1e3,
                                                      height: 1e3,
                                                      className:
                                                        "h-4 w-4 cursor-pointer",
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        },
                                        t
                                      );
                                    }
                                  ),
                                  V.map((e, t) => {
                                    var n, r, o, d, u, c, h, m, v, g;
                                    return (0, s.jsx)(
                                      "div",
                                      {
                                        className:
                                          "flex h-fit w-full items-start ".concat(
                                            "user" === e.sender
                                              ? "justify-start"
                                              : "justify-end",
                                            " p-4"
                                          ),
                                        children: (0, s.jsxs)("div", {
                                          className:
                                            "flex flex-col items-start justify-start gap-2 rounded-xl p-4 text-xs sm:text-sm ".concat(
                                              "user" === e.sender
                                                ? " w-11/12 bg-[#1E1E1E] sm:w-4/5"
                                                : " w-11/12 bg-[#161616] sm:w-4/5"
                                            ),
                                          children: [
                                            (0, s.jsx)("div", {
                                              className: "flex w-full gap-2",
                                              children:
                                                0 !== e.urlAttachments.length &&
                                                (e.urlAttachments.length >= 2
                                                  ? (0, s.jsx)(a.default, {
                                                      width: 1e3,
                                                      height: 1e3,
                                                      src:
                                                        null !==
                                                          (h =
                                                            null ===
                                                              (n =
                                                                e
                                                                  .urlAttachments[0]) ||
                                                            void 0 === n
                                                              ? void 0
                                                              : n.concat(
                                                                  ",",
                                                                  null !==
                                                                    (c =
                                                                      e
                                                                        .urlAttachments[1]) &&
                                                                    void 0 !== c
                                                                    ? c
                                                                    : ""
                                                                )) &&
                                                        void 0 !== h
                                                          ? h
                                                          : "/assets/user-fallback.png",
                                                      alt: "Avatar",
                                                      className:
                                                        "relative flex w-full items-center gap-2 overflow-hidden rounded-lg bg-[#3b3b3c]",
                                                    })
                                                  : (0, s.jsx)(a.default, {
                                                      width: 1e3,
                                                      height: 1e3,
                                                      src:
                                                        null !==
                                                          (m =
                                                            e
                                                              .urlAttachments[0]) &&
                                                        void 0 !== m
                                                          ? m
                                                          : "/assets/user-fallback.png",
                                                      alt: "Avatar",
                                                      className:
                                                        "relative flex w-full items-center gap-2 overflow-hidden rounded-lg bg-[#3b3b3c]",
                                                    })),
                                            }),
                                            (0, s.jsxs)("div", {
                                              className:
                                                "flex items-center justify-center gap-2",
                                              children: [
                                                (0, s.jsx)(a.default, {
                                                  width: 100,
                                                  height: 100,
                                                  src:
                                                    "user" === e.sender
                                                      ? null !==
                                                          (v =
                                                            null ===
                                                              (o = D.data) ||
                                                            void 0 === o
                                                              ? void 0
                                                              : null ===
                                                                  (r =
                                                                    o.user) ||
                                                                void 0 === r
                                                              ? void 0
                                                              : r.image) &&
                                                        void 0 !== v
                                                        ? v
                                                        : "/assets/user-fallback.png"
                                                      : null !==
                                                          (g =
                                                            null == z
                                                              ? void 0
                                                              : z.imgUrl) &&
                                                        void 0 !== g
                                                      ? g
                                                      : "",
                                                  alt: "Avatar",
                                                  className:
                                                    "w-8 object-contain rounded-full",
                                                }),
                                                "user" === e.sender
                                                  ? (0, s.jsx)("strong", {
                                                      children:
                                                        null === (u = D.data) ||
                                                        void 0 === u
                                                          ? void 0
                                                          : null ===
                                                              (d = u.user) ||
                                                            void 0 === d
                                                          ? void 0
                                                          : d.name,
                                                    })
                                                  : (0, s.jsx)("strong", {
                                                      children:
                                                        null == z
                                                          ? void 0
                                                          : z.name,
                                                    }),
                                              ],
                                            }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "w-full overflow-hidden pr-4 sm:pl-8",
                                              children:
                                                "user" === e.sender
                                                  ? (0, s.jsx)("div", {
                                                      dangerouslySetInnerHTML: {
                                                        __html: er(e.message),
                                                      },
                                                    })
                                                  : V.length === t + 1
                                                  ? "llama" === l.room[0]
                                                    ? (0, s.jsx)("div", {
                                                        dangerouslySetInnerHTML:
                                                          {
                                                            __html: er(
                                                              e.message
                                                            ),
                                                          },
                                                      })
                                                    : (0, s.jsx)("div", {
                                                        children: (0, s.jsx)(
                                                          i.Z,
                                                          {
                                                            message: e.message,
                                                            setTyped: B,
                                                          }
                                                        ),
                                                      })
                                                  : (0, s.jsx)("div", {
                                                      dangerouslySetInnerHTML: {
                                                        __html: er(e.message),
                                                      },
                                                    }),
                                            }),
                                            "user" !== e.sender &&
                                              "deepsouth" === l.room[0] &&
                                              (0, s.jsxs)("div", {
                                                className:
                                                  "flex w-full items-center justify-start gap-2",
                                                children: [
                                                  (0, s.jsx)(p.Z, {
                                                    content: e.message,
                                                  }),
                                                  (0, s.jsx)(a.default, {
                                                    onClick: () =>
                                                      navigator.clipboard.writeText(
                                                        e.message
                                                      ),
                                                    src: "/assets/copy.svg",
                                                    alt: "copy",
                                                    width: 1e3,
                                                    height: 1e3,
                                                    className:
                                                      "h-4 w-4 cursor-pointer",
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      },
                                      t
                                    );
                                  }),
                                  (0, s.jsx)("div", { ref: es }),
                                ],
                              })
                            : (0, s.jsxs)("div", {
                                className: "flex h-full w-full flex-col gap-8",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex h-full flex-col items-center justify-center gap-6 text-center",
                                    children: [
                                      (0, s.jsx)(a.default, {
                                        width: 100,
                                        height: 100,
                                        src:
                                          null !==
                                            (t =
                                              null == z ? void 0 : z.imgUrl) &&
                                          void 0 !== t
                                            ? t
                                            : "/assets/circle.png",
                                        alt: "Avatar",
                                        className: "h-16 p-2 object-contain",
                                      }),
                                      (0, s.jsx)("h1", {
                                        className: "text-2xl",
                                        children: "How can I help you today?",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "flex flex-col gap-6",
                                    children: (0, s.jsxs)("div", {
                                      className: "flex flex-col gap-6",
                                      children: [
                                        (0, s.jsx)(c.Z, {
                                          title: "Will Bitcoin hit 75k?",
                                          content:
                                            "I can't predict future prices. Bitcoin is highly volatile and its value depends on various market factors and investor sentiments. Always consider seeking financial advice before investing.",
                                          onClick: eu,
                                        }),
                                        (0, s.jsx)(c.Z, {
                                          title:
                                            "How many days does it take to grow apples?",
                                          content:
                                            "The time it takes for an apple tree to produce fruit depends on several factors, including the variety of the apple and the tree's growing conditions. Typically, apple trees grown from seed can take 6 to 10 years to bear fruit. ",
                                          onClick: eu,
                                        }),
                                        (0, s.jsx)(c.Z, {
                                          title:
                                            "How many houses does Elon Musk own?",
                                          content:
                                            "As of the latest public information, Elon Musk has stated that he plans to own no houses, having sold multiple properties he owned. By 2021, he had reportedly sold several homes but the exact number of houses he currently owns is unknown without more recent data.",
                                          onClick: eu,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "start flex max-h-full min-h-fit w-full flex-col justify-center gap-2 py-4",
                        children: [
                          L.length > 0 &&
                            (0, s.jsx)("div", {
                              className: "flex gap-2",
                              children: L.map((e, t) =>
                                (0, s.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "relative flex h-16 items-center gap-2 overflow-hidden rounded-lg border border-white bg-[#3b3b3c]",
                                    children: [
                                      (0, s.jsx)("div", {
                                        onClick: () => {
                                          M(L.filter((e, l) => l !== t));
                                        },
                                        className:
                                          "absolute right-1 top-0 cursor-pointer hover:text-red-500",
                                        children: "\xd7",
                                      }),
                                      (0, s.jsx)(a.default, {
                                        src: e,
                                        alt: "attached Image",
                                        width: 100,
                                        height: 100,
                                        onError: () => {
                                          J(!0);
                                        },
                                      }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex h-full w-full items-center overflow-hidden rounded-full border border-[#3b3b3c] bg-black sm:rounded-2xl",
                            children: [
                              (0, s.jsx)(y.A, {
                                placeholders: S,
                                onChange: (e) => {
                                  A(e.target.value);
                                },
                                onSubmit: eh,
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex gap-2 p-1 sm:p-2",
                                children: [
                                  "deepsouth" === l.room[0] &&
                                    (0, s.jsxs)("div", {
                                      className:
                                        "flex justify-center items-center gap-4",
                                      children: [
                                        (0, s.jsx)(j.Z, {
                                          setVideoStatus: ee,
                                          setTranscriptionAudio: (e) => {
                                            ea.current &&
                                              ((ea.current.innerText = e),
                                              A(e));
                                          },
                                        }),
                                        (0, s.jsx)("button", {
                                          title: "attachmentButton",
                                          type: "button",
                                          onClick: async () => {
                                            T(!0);
                                          },
                                          className:
                                            "flex h-fit w-fit items-center justify-center rounded-full p-2 text-white transition duration-200 sm:rounded-xl sm:p-2 sm:py-1",
                                          children: (0, s.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className:
                                              "lucide lucide-paperclip",
                                            children: (0, s.jsx)("path", {
                                              d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  (0, s.jsx)("button", {
                                    type: "button",
                                    onClick: async () => {
                                      await eu(N);
                                    },
                                    className:
                                      "flex h-fit w-fit items-center justify-center rounded-full bg-[#3b3b3c] p-2 text-white transition duration-200 hover:bg-[#202020] sm:rounded-xl sm:p-4 sm:py-1",
                                    children: (0, s.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      className: "h-6 w-6",
                                      children: (0, s.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                      }),
                                    }),
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
            ],
          })
        );
      };
    },
    93130: function (e, t, l) {
      "use strict";
      l.d(t, {
        A: function () {
          return o;
        },
      });
      var s = l(57437),
        n = l(48614),
        a = l(91926),
        r = l(2265),
        i = l(93448);
      function o(e) {
        let { placeholders: t, onChange: l, onSubmit: o } = e,
          [d, u] = (0, r.useState)(0),
          [c, h] = (0, r.useState)(""),
          [m, v] = (0, r.useState)(!1),
          g = (0, r.useRef)(null),
          f = (0, r.useRef)(null),
          x = () => {
            g.current = setInterval(() => {
              u((e) => (e + 1) % t.length);
            }, 3e3);
          },
          w = () => {
            g.current && (clearInterval(g.current), (g.current = null));
          };
        (0, r.useEffect)(() => (x(), w), [t]);
        let p = () => {
          !m &&
            (v(!0),
            setTimeout(() => {
              h(""), v(!1), o(new Event("submit"));
            }, 1e3),
            f.current &&
              ((f.current.style.height = "auto"), (f.current.scrollTop = 0)));
        };
        return (0, s.jsxs)("form", {
          className: (0, i.cn)(
            "w-full h-full text-white relative bg-transparent overflow-hidden shadow-md rounded-lg transition duration-200"
          ),
          onSubmit: (e) => {
            e.preventDefault(), p();
          },
          children: [
            (0, s.jsx)("textarea", {
              ref: f,
              value: c,
              onChange: (e) => {
                m || (h(e.target.value), l(e));
              },
              className: (0, i.cn)(
                "w-full h-full resize-none p-4 bg-transparent text-sm sm:text-base text-white border-none rounded-lg focus:outline-none focus:ring-0 dark:focus:ring-0",
                m && "text-transparent"
              ),
              rows: 1,
              onKeyDown: (e) => {
                if ("Enter" === e.key && e.shiftKey) {
                  var t, l;
                  e.preventDefault();
                  let s =
                    null !==
                      (l =
                        null === (t = f.current) || void 0 === t
                          ? void 0
                          : t.selectionStart) && void 0 !== l
                      ? l
                      : 0;
                  h(c.slice(0, s) + "\n" + c.slice(s)),
                    setTimeout(() => {
                      f.current &&
                        ((f.current.selectionStart = s + 1),
                        (f.current.selectionEnd = s + 1));
                    }, 0);
                } else
                  "Enter" !== e.key ||
                    e.shiftKey ||
                    (e.preventDefault(), m || p());
              },
              onFocus: w,
              onBlur: x,
              onInput: (e) => {
                let t = e.target;
                (t.style.height = "auto"),
                  (t.style.height = "".concat(t.scrollHeight, "px"));
              },
            }),
            (0, s.jsx)("div", {
              className:
                "absolute inset-0 flex items-center pointer-events-none",
              children: (0, s.jsx)(n.M, {
                mode: "wait",
                children:
                  !c &&
                  !m &&
                  (0, s.jsx)(
                    a.E.p,
                    {
                      initial: { opacity: 0, y: 0 },
                      animate: { opacity: 1, y: -3 },
                      exit: { opacity: 0, y: 3 },
                      transition: { duration: 0.3 },
                      className:
                        "text-neutral-500 dark:text-zinc-500 text-sm sm:text-base px-4 truncate",
                      children: t[d],
                    },
                    "placeholder-".concat(d)
                  ),
              }),
            }),
          ],
        });
      }
    },
    93448: function (e, t, l) {
      "use strict";
      l.d(t, {
        cn: function () {
          return a;
        },
      });
      var s = l(61994),
        n = l(53335);
      function a() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, n.m6)((0, s.W)(t));
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        4868, 3145, 605, 2957, 1926, 6314, 6137, 6103, 8728, 5482, 8492, 4068,
        5089, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 45e3));
      }
    ),
      (_N_E = e.O());
  },
]);
