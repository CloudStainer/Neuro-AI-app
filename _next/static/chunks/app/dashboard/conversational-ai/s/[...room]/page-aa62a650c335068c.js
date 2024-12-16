(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7766],
  {
    89346: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 78539));
    },
    50671: function (e, t, l) {
      "use strict";
      l.d(t, {
        Iu: function () {
          return o;
        },
        ND: function () {
          return a;
        },
        i5: function () {
          return r;
        },
        jU: function () {
          return i;
        },
        tv: function () {
          return s;
        },
      }),
        l(83079);
      var n = l(12119);
      (0, n.$)("7c8064231b74a7c16db16fad01ebb96fed6964c0");
      var s = (0, n.$)("4d435f58089ad8abc42b9d0569ca91017074ff46"),
        o = (0, n.$)("04fb90a1a59707577a05bbc3f352c1f213dd6992"),
        i = (0, n.$)("154443113486e15a32299cb8d85a965674fa7f66"),
        r = (0, n.$)("95922e08378dccece089998624657116ea32a519"),
        a = (0, n.$)("9b183ede8f87b2f71b5a5b09f43243c8a26491b2");
    },
    78539: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return j;
          },
        });
      var n = l(57437),
        s = l(36434),
        o = l(33145),
        i = l(2265);
      l(50933);
      var r = l(80605),
        a = l(99376),
        d = l(32903),
        u = l(31517),
        c = l(71915),
        m = l(26459),
        h = l(46106),
        v = l(62767),
        g = l(19803),
        f = l(50671),
        w = l(35915),
        p = l(93130);
      let x = [
          "Will Bitcoin reach $100,000 by the end of 2024?",
          "How many days does it take to grow apples?",
          "How many houses does Elon Musk own?",
          "Will the world end in 2025?",
        ],
        b = [
          { id: "gpt", name: "GPT-4o mini", imgUrl: "/assets/gpt.svg" },
          {
            id: "deepsouth",
            name: "DeepSouth+",
            imgUrl: "/assets/logo-light.webp",
          },
          {
            id: "bittensor",
            name: "Bittensor",
            imgUrl: "/assets/deepPlus.png",
          },
          { id: "llama", name: "Llama 3.1", imgUrl: "/assets/meta.svg" },
          { id: "gemma", name: "Gemma 2", imgUrl: "/assets/gemma.png" },
          { id: "mixtral", name: "Mixtral", imgUrl: "/assets/mistral.svg" },
          { id: "phi", name: "Phi-3", imgUrl: "/assets/ms.svg" },
        ];
      var j = (e) => {
        var t;
        let { params: l } = e,
          [j, y] = (0, i.useState)(""),
          [S, k] = (0, i.useState)(!1),
          [A, N] = (0, i.useState)(!1),
          [E, I] = (0, i.useState)(!1),
          [H, C] = (0, i.useState)([]),
          [Z, T] = (0, i.useState)(!1),
          L = (0, r.useSession)(),
          U = (0, a.useRouter)(),
          [D, z] = (0, i.useState)(),
          [_, B] = (0, i.useState)([]),
          [M, R] = (0, i.useState)([]),
          [$, W] = (0, i.useState)(null),
          [P, K] = (0, i.useState)(!1),
          [O, V] = (0, i.useState)([]),
          [F, G] = (0, i.useState)(""),
          [Q, Y] = (0, i.useState)(!1),
          [q, J] = (0, i.useState)(!1),
          [X, ee] = (0, i.useState)(!1),
          [et, el] = (0, i.useState)(0),
          en = (0, a.usePathname)(),
          es = (0, i.useRef)(null);
        function eo(e) {
          var t;
          e.preventDefault();
          let l =
            null === (t = e.clipboardData) || void 0 === t
              ? void 0
              : t.getData("text/plain");
          document.execCommand("insertText", !1, l);
        }
        async function ei(e) {
          if (null !== $) {
            var t,
              n,
              o,
              i,
              r,
              a,
              d,
              u,
              c,
              m,
              h,
              v,
              w,
              p,
              x,
              b,
              j,
              y,
              S,
              k,
              A,
              N,
              E,
              I,
              Z,
              T,
              L,
              U,
              D,
              z,
              B,
              W,
              K,
              V,
              G,
              Y,
              q,
              J,
              en,
              eo,
              ei,
              ea,
              ed,
              eu,
              ec,
              em,
              eh,
              ev;
            let eg = [
              ..._.map((e) => ({
                message: e.message,
                sender: e.sender,
                urlAttachments: e.urlAttachments,
              })),
              ...M.map((e) => ({
                message: e.message,
                sender: e.sender,
                urlAttachments: e.urlAttachments,
              })),
            ];
            console.log("Hello", _.length + M.length + 1);
            let ef = {
              id:
                M.length > 0
                  ? (null !==
                      (o =
                        null === (t = M[M.length - 1]) || void 0 === t
                          ? void 0
                          : t.id) && void 0 !== o
                      ? o
                      : 0) + 1
                  : _[_.length - 1].id + 1,
              message: e.toString(),
              roomId:
                null !==
                  (r = null !== (i = l.room[1]) && void 0 !== i ? i : $) &&
                void 0 !== r
                  ? r
                  : "",
              sender: "user",
              urlAttachments: P
                ? [
                    null !==
                      (a =
                        null === (n = O[0]) || void 0 === n
                          ? void 0
                          : n.toString()) && void 0 !== a
                      ? a
                      : "",
                  ]
                : H,
            };
            if (
              (R((e) => [...e, ef]),
              es.current && ((es.current.textContent = ""), C([])),
              await (0, s.Hz)(
                ef.id,
                null !==
                  (u = null !== (d = l.room[1]) && void 0 !== d ? d : $) &&
                  void 0 !== u
                  ? u
                  : "",
                ef.message,
                ef.sender,
                ef.urlAttachments
              ),
              "deepsouth" === l.room[0])
            ) {
              if (Q) {
                console.log("frames.length: ", O.length);
                let t =
                  null !==
                    (h = await (0, s.QE)(
                      e.toString(),
                      F,
                      O,
                      null !== (m = H[0]) && void 0 !== m ? m : ""
                    )) && void 0 !== h
                    ? h
                    : "";
                console.log(t);
                let n =
                  M.length > 0
                    ? (null !==
                        (v =
                          null === (c = M[M.length - 1]) || void 0 === c
                            ? void 0
                            : c.id) && void 0 !== v
                        ? v
                        : 0) + 2
                    : _[_.length - 1].id + 2;
                if (
                  ((ef = {
                    id: n,
                    message: "",
                    roomId:
                      null !==
                        (p =
                          null !== (w = l.room[1]) && void 0 !== w ? w : $) &&
                      void 0 !== p
                        ? p
                        : "",
                    sender: "bot",
                    urlAttachments: [],
                  }),
                  R((e) => [...e, ef]),
                  "deepsouth" === l.room[0] && t)
                ) {
                  for await (let e of (0, g.mj)(t))
                    er(n, null != e ? e : ""),
                      el(et + 1),
                      (ef = {
                        id:
                          (null !==
                            (b =
                              null === (x = M[M.length - 1]) || void 0 === x
                                ? void 0
                                : x.id) && void 0 !== b
                            ? b
                            : 0) + 2,
                        message: null != e ? e : "",
                        roomId:
                          null !==
                            (y =
                              null !== (j = l.room[1]) && void 0 !== j
                                ? j
                                : $) && void 0 !== y
                            ? y
                            : "",
                        sender: "bot",
                        urlAttachments: [],
                      }),
                      ee(!X);
                  el(0),
                    await (0, s.Hz)(
                      ef.id,
                      null !==
                        (k =
                          null !== (S = l.room[1]) && void 0 !== S ? S : $) &&
                        void 0 !== k
                        ? k
                        : "",
                      ef.message,
                      ef.sender,
                      ef.urlAttachments
                    );
                }
              } else {
                let t =
                    null !==
                      (N = await (0, s.l8)(
                        e.toString(),
                        eg,
                        ef.urlAttachments
                      )) && void 0 !== N
                      ? N
                      : "",
                  n =
                    M.length > 0
                      ? (null !==
                          (E =
                            null === (A = M[M.length - 1]) || void 0 === A
                              ? void 0
                              : A.id) && void 0 !== E
                          ? E
                          : 0) + 2
                      : _[_.length - 1].id + 2;
                if (
                  ((ef = {
                    id: n,
                    message: "",
                    roomId:
                      null !==
                        (Z =
                          null !== (I = l.room[1]) && void 0 !== I ? I : $) &&
                      void 0 !== Z
                        ? Z
                        : "",
                    sender: "bot",
                    urlAttachments: [],
                  }),
                  R((e) => [...e, ef]),
                  "deepsouth" === l.room[0] && t)
                ) {
                  for await (let e of (0, g.mj)(t))
                    er(n, null != e ? e : ""),
                      el(et + 1),
                      (ef = {
                        id:
                          M.length > 0
                            ? (null !==
                                (L =
                                  null === (T = M[M.length - 1]) || void 0 === T
                                    ? void 0
                                    : T.id) && void 0 !== L
                                ? L
                                : 0) + 2
                            : _[_.length - 1].id + 2,
                        message: null != e ? e : "",
                        roomId:
                          null !==
                            (D =
                              null !== (U = l.room[1]) && void 0 !== U
                                ? U
                                : $) && void 0 !== D
                            ? D
                            : "",
                        sender: "bot",
                        urlAttachments: [],
                      }),
                      ee(!X);
                  el(0),
                    await (0, s.Hz)(
                      ef.id,
                      null !==
                        (B =
                          null !== (z = l.room[1]) && void 0 !== z ? z : $) &&
                        void 0 !== B
                        ? B
                        : "",
                      ef.message,
                      ef.sender,
                      ef.urlAttachments
                    );
                }
              }
            } else {
              let t;
              switch (l.room[0]) {
                case "gpt":
                  t =
                    null !== (K = await (0, s.nv)(e.toString(), eg)) &&
                    void 0 !== K
                      ? K
                      : "";
                  break;
                case "bittensor":
                  t =
                    null !== (V = await (0, s.nv)(e.toString(), eg)) &&
                    void 0 !== V
                      ? V
                      : "";
                  break;
                case "llama":
                  t =
                    null !== (G = await (0, f.Iu)(e.toString(), eg)) &&
                    void 0 !== G
                      ? G
                      : "";
                  break;
                case "gemma":
                  t =
                    null !== (Y = await (0, f.jU)(e.toString(), eg)) &&
                    void 0 !== Y
                      ? Y
                      : "";
                  break;
                case "mixtral":
                  t =
                    null !== (q = await (0, f.i5)(e.toString(), eg)) &&
                    void 0 !== q
                      ? q
                      : "";
                  break;
                case "phi":
                  t =
                    null !== (J = await (0, f.ND)(e.toString(), eg)) &&
                    void 0 !== J
                      ? J
                      : "";
                  break;
                default:
                  t =
                    null !== (en = await (0, s.nv)(e.toString(), eg)) &&
                    void 0 !== en
                      ? en
                      : "";
              }
              let n =
                M.length > 0
                  ? (null !==
                      (eo =
                        null === (W = M[M.length - 1]) || void 0 === W
                          ? void 0
                          : W.id) && void 0 !== eo
                      ? eo
                      : 0) + 2
                  : _[_.length - 1].id + 2;
              if (
                ((ef = {
                  id: n,
                  message: "",
                  roomId:
                    null !==
                      (ea =
                        null !== (ei = l.room[1]) && void 0 !== ei ? ei : $) &&
                    void 0 !== ea
                      ? ea
                      : "",
                  sender: "bot",
                  urlAttachments: [],
                }),
                R((e) => [...e, ef]),
                t)
              ) {
                for await (let e of (0, g.mj)(t))
                  er(n, null != e ? e : ""),
                    el(et + 1),
                    (ef = {
                      id:
                        M.length > 0
                          ? (null !==
                              (eu =
                                null === (ed = M[M.length - 1]) || void 0 === ed
                                  ? void 0
                                  : ed.id) && void 0 !== eu
                              ? eu
                              : 0) + 2
                          : _[_.length - 1].id + 2,
                      message: null != e ? e : "",
                      roomId:
                        null !==
                          (em =
                            null !== (ec = l.room[1]) && void 0 !== ec
                              ? ec
                              : $) && void 0 !== em
                          ? em
                          : "",
                      sender: "bot",
                      urlAttachments: [],
                    }),
                    ee(!X);
                el(0),
                  await (0, s.Hz)(
                    ef.id,
                    null !==
                      (ev =
                        null !== (eh = l.room[1]) && void 0 !== eh ? eh : $) &&
                      void 0 !== ev
                      ? ev
                      : "",
                    ef.message,
                    ef.sender,
                    ef.urlAttachments
                  );
              }
            }
          }
        }
        function er(e, t) {
          R((l) => l.map((l) => (l.id === e ? { ...l, message: t } : l)));
        }
        async function ea(e) {
          var t,
            n,
            o,
            i,
            r,
            a,
            u,
            c,
            m,
            h,
            v,
            w,
            p,
            x,
            b,
            j,
            S,
            k,
            A,
            N,
            E,
            I,
            Z,
            T,
            U,
            D,
            z,
            _,
            B,
            $,
            K,
            V,
            G,
            Y,
            q,
            J,
            eo;
          let ei = (0, d.r)(),
            ea = {
              id:
                (null !==
                  (a =
                    null === (t = M[M.length - 1]) || void 0 === t
                      ? void 0
                      : t.id) && void 0 !== a
                  ? a
                  : 0) + 1,
              message: e.toString(),
              roomId: ei.toString(),
              sender: "user",
              urlAttachments: P
                ? [
                    null !==
                      (u =
                        null === (n = O[0]) || void 0 === n
                          ? void 0
                          : n.toString()) && void 0 !== u
                      ? u
                      : "",
                  ]
                : H,
            };
          if (
            (R((e) => [...e, ea]),
            y(""),
            es.current && ((es.current.textContent = ""), C([])),
            await (0, s.dB)(
              null !== (c = ea.message.slice(0, 20)) && void 0 !== c
                ? c
                : "No Title",
              null !==
                (m =
                  null === (r = L.data) || void 0 === r
                    ? void 0
                    : null === (i = r.user) || void 0 === i
                    ? void 0
                    : null === (o = i.email) || void 0 === o
                    ? void 0
                    : o.toString()) && void 0 !== m
                ? m
                : "",
              null !== (h = l.room[0]) && void 0 !== h ? h : "gpt",
              "conversational",
              ei.toString()
            ),
            W(ei.toString()),
            await (0, s.Hz)(
              ea.id,
              ei,
              ea.message,
              ea.sender,
              ea.urlAttachments
            ),
            "deepsouth" === l.room[0])
          ) {
            if ((console.log("videoStatus: ", Q), Q)) {
              console.log("frames.length: ", O.length);
              let t =
                null !==
                  (p = await (0, s.QE)(
                    e.toString(),
                    F,
                    O,
                    null !== (w = H[0]) && void 0 !== w ? w : ""
                  )) && void 0 !== p
                  ? p
                  : "";
              console.log(t);
              let n =
                (null !==
                  (x =
                    null === (v = M[M.length - 1]) || void 0 === v
                      ? void 0
                      : v.id) && void 0 !== x
                  ? x
                  : 0) + 2;
              if (
                ((ea = {
                  id: n,
                  message: "",
                  roomId: ei.toString(),
                  sender: "bot",
                  urlAttachments: [],
                }),
                R((e) => [...e, ea]),
                "deepsouth" === l.room[0] && t)
              ) {
                for await (let e of (0, g.mj)(t))
                  console.log(e),
                    er(n, null != e ? e : ""),
                    el(et + 1),
                    (ea = {
                      id:
                        (null !==
                          (j =
                            null === (b = M[M.length - 1]) || void 0 === b
                              ? void 0
                              : b.id) && void 0 !== j
                          ? j
                          : 0) + 2,
                      message: null != e ? e : "",
                      roomId: ei.toString(),
                      sender: "bot",
                      urlAttachments: [],
                    }),
                    ee(!X);
                el(0),
                  await (0, s.Hz)(
                    ea.id,
                    ei.toString(),
                    ea.message,
                    ea.sender,
                    ea.urlAttachments
                  );
                let e = ""
                  .concat(en, "/")
                  .concat(
                    null !==
                      (k =
                        null !== (S = l.room[1]) && void 0 !== S
                          ? S
                          : ei.toString()) && void 0 !== k
                      ? k
                      : ""
                  );
                void 0 !== window &&
                  window.history.pushState(
                    { ...window.history.state, as: e, url: e },
                    "",
                    e
                  );
              }
            } else {
              let t =
                  null !==
                    (N = await (0, s.l8)(
                      e.toString(),
                      [],
                      ea.urlAttachments
                    )) && void 0 !== N
                    ? N
                    : "",
                n =
                  (null !==
                    (E =
                      null === (A = M[M.length - 1]) || void 0 === A
                        ? void 0
                        : A.id) && void 0 !== E
                    ? E
                    : 0) + 2;
              if (
                ((ea = {
                  id: n,
                  message: "",
                  roomId: ei.toString(),
                  sender: "bot",
                  urlAttachments: [],
                }),
                R((e) => [...e, ea]),
                "deepsouth" === l.room[0] && t)
              ) {
                for await (let e of (0, g.mj)(t))
                  console.log(e),
                    er(n, null != e ? e : ""),
                    el(et + 1),
                    (ea = {
                      id:
                        (null !==
                          (Z =
                            null === (I = M[M.length - 1]) || void 0 === I
                              ? void 0
                              : I.id) && void 0 !== Z
                          ? Z
                          : 0) + 2,
                      message: null != e ? e : "",
                      roomId: ei.toString(),
                      sender: "bot",
                      urlAttachments: [],
                    }),
                    ee(!X);
                el(0),
                  await (0, s.Hz)(
                    ea.id,
                    ei.toString(),
                    ea.message,
                    ea.sender,
                    ea.urlAttachments
                  );
                let e = ""
                  .concat(en, "/")
                  .concat(
                    null !==
                      (U =
                        null !== (T = l.room[1]) && void 0 !== T
                          ? T
                          : ei.toString()) && void 0 !== U
                      ? U
                      : ""
                  );
                void 0 !== window &&
                  window.history.pushState(
                    { ...window.history.state, as: e, url: e },
                    "",
                    e
                  );
              }
            }
          } else {
            let t;
            switch (l.room[0]) {
              case "gpt":
                t =
                  null !== (z = await (0, s.nv)(e.toString(), [])) &&
                  void 0 !== z
                    ? z
                    : "";
                break;
              case "bittensor":
                t =
                  null !== (_ = await (0, s.nv)(e.toString(), [])) &&
                  void 0 !== _
                    ? _
                    : "";
                break;
              case "llama":
                t =
                  null !== (B = await (0, f.Iu)(e.toString(), [])) &&
                  void 0 !== B
                    ? B
                    : "";
                break;
              case "gemma":
                t =
                  null !== ($ = await (0, f.jU)(e.toString(), [])) &&
                  void 0 !== $
                    ? $
                    : "";
                break;
              case "mixtral":
                t =
                  null !== (K = await (0, f.i5)(e.toString(), [])) &&
                  void 0 !== K
                    ? K
                    : "";
                break;
              default:
                t =
                  null !== (V = await (0, s.nv)(e.toString(), [])) &&
                  void 0 !== V
                    ? V
                    : "";
            }
            let n =
              (null !==
                (G =
                  null === (D = M[M.length - 1]) || void 0 === D
                    ? void 0
                    : D.id) && void 0 !== G
                ? G
                : 0) + 2;
            for await (let e of ((ea = {
              id: n,
              message: "",
              roomId: ei.toString(),
              sender: "bot",
              urlAttachments: [],
            }),
            R((e) => [...e, ea]),
            (0, g.mj)(t)))
              console.log(e),
                er(n, null != e ? e : ""),
                el(et + 1),
                (ea = {
                  id:
                    (null !==
                      (q =
                        null === (Y = M[M.length - 1]) || void 0 === Y
                          ? void 0
                          : Y.id) && void 0 !== q
                      ? q
                      : 0) + 2,
                  message: null != e ? e : "",
                  roomId: ei.toString(),
                  sender: "bot",
                  urlAttachments: [],
                }),
                ee(!X);
            el(0),
              await (0, s.Hz)(
                ea.id,
                ei.toString(),
                ea.message,
                ea.sender,
                ea.urlAttachments
              );
            let o = ""
              .concat(en, "/")
              .concat(
                null !==
                  (eo =
                    null !== (J = l.room[1]) && void 0 !== J
                      ? J
                      : ei.toString()) && void 0 !== eo
                  ? eo
                  : ""
              );
            void 0 !== window &&
              window.history.pushState(
                { ...window.history.state, as: o, url: o },
                "",
                o
              );
          }
        }
        (0, i.useEffect)(() => {
          var e;
          let t = (e) => {
            es.current &&
              !es.current.contains(e.target) &&
              (es.current.contentEditable = "false");
          };
          return (
            null === (e = es.current) ||
              void 0 === e ||
              e.addEventListener("paste", eo),
            void 0 !== window && window.addEventListener("mousedown", t),
            () => {
              window.removeEventListener("mousedown", t);
            }
          );
        }, [es]);
        let ed = async (e) => {
            null !== $
              ? (console.log("stateRoomId jin: ", $), await ei(e))
              : (console.log("stateRoomId: ", $), await ea(e));
          },
          eu = async () => {
            if (l.room.length > 1 && l.room[1]) {
              var e, t;
              let n = (
                await (0, s.DH)(
                  null !==
                    (t = null !== (e = l.room[1]) && void 0 !== e ? e : $) &&
                    void 0 !== t
                    ? t
                    : ""
                )
              ).map((e) => {
                var t, l, n, s;
                return {
                  id: null !== (t = e.id) && void 0 !== t ? t : 0,
                  message: null !== (l = e.message) && void 0 !== l ? l : "",
                  roomId: null !== (n = e.roomId) && void 0 !== n ? n : "",
                  sender: null !== (s = e.sender) && void 0 !== s ? s : "user",
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
              console.log(n), B(n);
            }
          };
        (0, i.useEffect)(() => {
          if (l.room.length > 1 && l.room[1])
            try {
              var e;
              W(null !== (e = l.room[1]) && void 0 !== e ? e : $),
                k(!0),
                eu()
                  .then(() => {
                    k(!1);
                  })
                  .catch(() => {
                    k(!1), U.push("/dashboard/conversational-ai");
                  });
            } catch (e) {
              console.error(e);
            }
        }, [l.room]),
          (0, i.useEffect)(() => {
            z(b.filter((e) => e.id === l.room[0])[0]);
          }, [l.room]);
        let ec = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
          var e, t;
          _.length &&
            (null === (e = ec.current) ||
              void 0 === e ||
              e.scrollIntoView({ behavior: "instant", block: "end" })),
            M.length &&
              (null === (t = ec.current) ||
                void 0 === t ||
                t.scrollIntoView({ behavior: "smooth", block: "end" }));
        }, [M.length, _.length, Z, et, X]);
        let em = (e) => {
          "Enter" === e.key && e.ctrlKey && I(!0);
        };
        (0, i.useEffect)(
          () => (
            document.addEventListener("keydown", em),
            () => {
              document.removeEventListener("keydown", em);
            }
          ),
          [em]
        );
        let eh = async (e) => {
          e.preventDefault(), await ed(j);
        };
        return (0, n.jsxs)("div", {
          className: "h-full w-full pb-4 sm:pt-8",
          children: [
            E &&
              (0, n.jsx)(c.Z, {
                setAttachmentsOpen: N,
                setAttachments: C,
                setFrames: V,
                frames: O,
                setAudioTranscript: G,
              }),
            A &&
              (0, n.jsx)(h.Z, {
                setVideoStatus: Y,
                setYoutubeStatus: J,
                setAttachmentsOpen: N,
                setAttachments: C,
                setFrames: V,
                frames: O,
                setAudioTranscript: G,
              }),
            (0, n.jsx)("div", {
              className:
                "flex h-full w-full items-center justify-center overflow-visible" +
                (M.length || _.length
                  ? " md:px-4 md:py-2 lg:px-24 lg:py-2 xl:px-24 xl:py-2"
                  : ""),
              children: (0, n.jsx)("div", {
                className:
                  "relative flex h-full w-full items-center justify-center" +
                  (M.length || _.length ? " md:rounded-lg md:px-16" : ""),
                children: (0, n.jsxs)("div", {
                  className:
                    "flex h-full w-full flex-col items-center rounded-xl text-white xl:w-[800px]" +
                    (M.length || _.length
                      ? " justify-between"
                      : " justify-center gap-10"),
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "scroll-y-auto flex h-fit w-full items-center justify-center overflow-y-auto",
                      children:
                        M.length || _.length || l.room.length > 1
                          ? (0, n.jsxs)("div", {
                              className: "flex h-full w-full flex-col",
                              children: [
                                _.sort((e, t) => (e.id > t.id ? 1 : -1)).map(
                                  (e, t) => {
                                    var s, i, r, a, d, u, c, h, v, g;
                                    return (0, n.jsx)(
                                      "div",
                                      {
                                        className:
                                          "flex h-fit w-full items-start ".concat(
                                            (e.sender, "justify-start"),
                                            " p-4"
                                          ),
                                        children: (0, n.jsxs)("div", {
                                          className:
                                            "flex flex-col items-start justify-start gap-2 rounded-xl p-4 text-xs sm:text-sm ".concat(
                                              "user" === e.sender
                                                ? " w-full bg-[#1E1E1E]"
                                                : " w-full"
                                            ),
                                          children: [
                                            (0, n.jsx)("div", {
                                              className: "flex w-full gap-2",
                                              children:
                                                0 !== e.urlAttachments.length &&
                                                (e.urlAttachments.length >= 2
                                                  ? (0, n.jsx)(o.default, {
                                                      width: 1e3,
                                                      height: 1e3,
                                                      src:
                                                        null !==
                                                          (c =
                                                            null ===
                                                              (s =
                                                                e
                                                                  .urlAttachments[0]) ||
                                                            void 0 === s
                                                              ? void 0
                                                              : s.concat(
                                                                  ",",
                                                                  null !==
                                                                    (u =
                                                                      e
                                                                        .urlAttachments[1]) &&
                                                                    void 0 !== u
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
                                                  : (0, n.jsx)(o.default, {
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
                                            (0, n.jsxs)("div", {
                                              className:
                                                "flex items-center justify-center gap-2",
                                              children: [
                                                (0, n.jsx)(o.default, {
                                                  width: 100,
                                                  height: 100,
                                                  src:
                                                    "user" === e.sender
                                                      ? null !==
                                                          (v =
                                                            null ===
                                                              (r = L.data) ||
                                                            void 0 === r
                                                              ? void 0
                                                              : null ===
                                                                  (i =
                                                                    r.user) ||
                                                                void 0 === i
                                                              ? void 0
                                                              : i.image) &&
                                                        void 0 !== v
                                                        ? v
                                                        : "/assets/user-fallback.png"
                                                      : null !==
                                                          (g =
                                                            null == D
                                                              ? void 0
                                                              : D.imgUrl) &&
                                                        void 0 !== g
                                                      ? g
                                                      : "",
                                                  alt: "Avatar",
                                                  className:
                                                    "h-6 w-6 rounded-full",
                                                }),
                                                "user" === e.sender
                                                  ? (0, n.jsx)("strong", {
                                                      children:
                                                        null === (d = L.data) ||
                                                        void 0 === d
                                                          ? void 0
                                                          : null ===
                                                              (a = d.user) ||
                                                            void 0 === a
                                                          ? void 0
                                                          : a.name,
                                                    })
                                                  : (0, n.jsx)("strong", {
                                                      children:
                                                        null == D
                                                          ? void 0
                                                          : D.name,
                                                    }),
                                              ],
                                            }),
                                            (0, n.jsxs)("div", {
                                              className:
                                                "w-full overflow-hidden pr-4 sm:pl-8",
                                              children: [
                                                (e.sender,
                                                (0, n.jsx)("div", {
                                                  className: "overflow-hidden",
                                                  dangerouslySetInnerHTML: {
                                                    __html: (0, w.Z)(e.message),
                                                  },
                                                })),
                                                "user" !== e.sender &&
                                                  "deepsouth" === l.room[0] &&
                                                  (0, n.jsxs)("div", {
                                                    className:
                                                      "flex w-full items-center justify-start gap-2",
                                                    children: [
                                                      (0, n.jsx)(m.Z, {
                                                        content: e.message,
                                                      }),
                                                      (0, n.jsx)(o.default, {
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
                                          ],
                                        }),
                                      },
                                      t
                                    );
                                  }
                                ),
                                M.map((e, t) => {
                                  var s, i, r, a, d, u, c, h, v, g;
                                  return (0, n.jsx)(
                                    "div",
                                    {
                                      className:
                                        "flex h-fit w-full items-start ".concat(
                                          "user" === e.sender
                                            ? "justify-start"
                                            : "justify-end",
                                          " p-4"
                                        ),
                                      children: (0, n.jsxs)("div", {
                                        className:
                                          "flex flex-col items-start justify-start gap-2 rounded-xl p-4 text-xs sm:text-sm ".concat(
                                            "user" === e.sender
                                              ? " w-full bg-[#1E1E1E]"
                                              : " w-full"
                                          ),
                                        children: [
                                          (0, n.jsx)("div", {
                                            className: "flex w-full gap-2",
                                            children:
                                              0 !== e.urlAttachments.length &&
                                              (e.urlAttachments.length >= 2
                                                ? (0, n.jsx)(o.default, {
                                                    width: 1e3,
                                                    height: 1e3,
                                                    src:
                                                      null !==
                                                        (c =
                                                          null ===
                                                            (s =
                                                              e
                                                                .urlAttachments[0]) ||
                                                          void 0 === s
                                                            ? void 0
                                                            : s.concat(
                                                                ",",
                                                                null !==
                                                                  (u =
                                                                    e
                                                                      .urlAttachments[1]) &&
                                                                  void 0 !== u
                                                                  ? u
                                                                  : ""
                                                              )) && void 0 !== c
                                                        ? c
                                                        : "/assets/user-fallback.png",
                                                    alt: "Avatar",
                                                    className:
                                                      "relative flex w-full items-center gap-2 overflow-hidden rounded-lg bg-[#3b3b3c]",
                                                  })
                                                : (0, n.jsx)(o.default, {
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
                                          (0, n.jsxs)("div", {
                                            className:
                                              "flex items-center justify-center gap-2",
                                            children: [
                                              (0, n.jsx)(o.default, {
                                                width: 100,
                                                height: 100,
                                                src:
                                                  "user" === e.sender
                                                    ? null !==
                                                        (v =
                                                          null ===
                                                            (r = L.data) ||
                                                          void 0 === r
                                                            ? void 0
                                                            : null ===
                                                                (i = r.user) ||
                                                              void 0 === i
                                                            ? void 0
                                                            : i.image) &&
                                                      void 0 !== v
                                                      ? v
                                                      : "/assets/user-fallback.png"
                                                    : null !==
                                                        (g =
                                                          null == D
                                                            ? void 0
                                                            : D.imgUrl) &&
                                                      void 0 !== g
                                                    ? g
                                                    : "",
                                                alt: "Avatar",
                                                className:
                                                  "h-6 w-6 rounded-full",
                                              }),
                                              "user" === e.sender
                                                ? (0, n.jsx)("strong", {
                                                    children:
                                                      null === (d = L.data) ||
                                                      void 0 === d
                                                        ? void 0
                                                        : null ===
                                                            (a = d.user) ||
                                                          void 0 === a
                                                        ? void 0
                                                        : a.name,
                                                  })
                                                : (0, n.jsx)("strong", {
                                                    children:
                                                      null == D
                                                        ? void 0
                                                        : D.name,
                                                  }),
                                            ],
                                          }),
                                          (0, n.jsxs)("div", {
                                            className:
                                              "w-full overflow-hidden pr-4 sm:pl-8",
                                            children: [
                                              ("user" === e.sender ||
                                                (M.length === t + 1 &&
                                                  l.room[0]),
                                              (0, n.jsx)("div", {
                                                dangerouslySetInnerHTML: {
                                                  __html: (0, w.Z)(e.message),
                                                },
                                              })),
                                              "user" !== e.sender &&
                                                "deepsouth" === l.room[0] &&
                                                (0, n.jsxs)("div", {
                                                  className:
                                                    "flex w-full items-center justify-start gap-2",
                                                  children: [
                                                    (0, n.jsx)(m.Z, {
                                                      content: e.message,
                                                    }),
                                                    (0, n.jsx)(o.default, {
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
                                        ],
                                      }),
                                    },
                                    t
                                  );
                                }),
                                (0, n.jsx)("div", { ref: ec }),
                              ],
                            })
                          : (0, n.jsxs)("div", {
                              className: "flex h-full w-full flex-col gap-8",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex h-full flex-col items-center justify-center gap-6 text-center",
                                  children: [
                                    (0, n.jsx)(o.default, {
                                      width: 100,
                                      height: 100,
                                      src:
                                        null !==
                                          (t = null == D ? void 0 : D.imgUrl) &&
                                        void 0 !== t
                                          ? t
                                          : "/assets/circle.png",
                                      alt: "Avatar",
                                      className: "h-12 w-12 rounded-full",
                                    }),
                                    (0, n.jsx)("h1", {
                                      className: "text-2xl",
                                      children: "How can I help you today?",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "flex flex-col gap-6",
                                  children: [
                                    (0, n.jsx)(u.Z, {
                                      title: "Will Bitcoin hit 75k?",
                                      content:
                                        "I can't predict future prices. Bitcoin is highly volatile and its value depends on various market factors and investor sentiments. Always consider seeking financial advice before investing.",
                                      onClick: ed,
                                    }),
                                    (0, n.jsx)(u.Z, {
                                      title:
                                        "How many days does it take to grow apples?",
                                      content:
                                        "The time it takes for an apple tree to produce fruit depends on several factors, including the variety of the apple and the tree's growing conditions. Typically, apple trees grown from seed can take 6 to 10 years to bear fruit. ",
                                      onClick: ed,
                                    }),
                                    (0, n.jsx)(u.Z, {
                                      title:
                                        "How many houses does Elon Musk own?",
                                      content:
                                        "As of the latest public information, Elon Musk has stated that he plans to own no houses, having sold multiple properties he owned. By 2021, he had reportedly sold several homes but the exact number of houses he currently owns is unknown without more recent data.",
                                      onClick: ed,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "start flex max-h-full min-h-fit w-full flex-col justify-center gap-2 py-4",
                      children: [
                        H.length > 0 &&
                          (0, n.jsx)("div", {
                            className: "flex gap-2",
                            children: H.map((e, t) =>
                              (0, n.jsxs)(
                                "div",
                                {
                                  className:
                                    "relative flex h-16 items-center gap-2 overflow-hidden rounded-lg border border-white bg-[#3b3b3c]",
                                  children: [
                                    (0, n.jsx)("div", {
                                      onClick: () => {
                                        C(H.filter((e, l) => l !== t));
                                      },
                                      className:
                                        "absolute right-1 top-0 cursor-pointer hover:text-red-500",
                                      children: "\xd7",
                                    }),
                                    (0, n.jsx)(o.default, {
                                      src: e,
                                      alt: "attached Image",
                                      width: 100,
                                      height: 100,
                                      onError: () => {
                                        K(!0);
                                      },
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                          }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex h-full w-full items-center overflow-hidden rounded-full border border-[#3b3b3c] bg-black sm:rounded-2xl",
                          children: [
                            (0, n.jsx)(p.A, {
                              placeholders: x,
                              onChange: (e) => {
                                y(e.target.value);
                              },
                              onSubmit: eh,
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex gap-2 p-1 sm:p-2",
                              children: [
                                "deepsouth" === l.room[0] &&
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex justify-center items-center gap-4",
                                    children: [
                                      (0, n.jsx)(v.Z, {
                                        setVideoStatus: Y,
                                        setTranscriptionAudio: (e) => {
                                          es.current &&
                                            ((es.current.innerText = e), y(e));
                                        },
                                      }),
                                      (0, n.jsx)("button", {
                                        type: "button",
                                        onClick: async () => {
                                          N(!0);
                                        },
                                        className:
                                          "flex h-fit w-fit items-center justify-center rounded-full p-2 text-white transition duration-200 sm:rounded-xl sm:p-2 sm:py-1",
                                        children: (0, n.jsx)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "24",
                                          height: "24",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          className: "lucide lucide-paperclip",
                                          children: (0, n.jsx)("path", {
                                            d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                (0, n.jsx)("button", {
                                  type: "button",
                                  onClick: async () => {
                                    await ed(j);
                                  },
                                  className:
                                    "flex h-fit w-fit items-center justify-center rounded-full bg-[#3b3b3c] p-2 text-white transition duration-200 hover:bg-[#202020] sm:rounded-xl sm:p-4 sm:py-1",
                                  children: (0, n.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    className: "h-6 w-6",
                                    children: (0, n.jsx)("path", {
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
        });
      };
    },
    93130: function (e, t, l) {
      "use strict";
      l.d(t, {
        A: function () {
          return a;
        },
      });
      var n = l(57437),
        s = l(48614),
        o = l(91926),
        i = l(2265),
        r = l(93448);
      function a(e) {
        let { placeholders: t, onChange: l, onSubmit: a } = e,
          [d, u] = (0, i.useState)(0),
          [c, m] = (0, i.useState)(""),
          [h, v] = (0, i.useState)(!1),
          g = (0, i.useRef)(null),
          f = (0, i.useRef)(null),
          w = () => {
            g.current = setInterval(() => {
              u((e) => (e + 1) % t.length);
            }, 3e3);
          },
          p = () => {
            g.current && (clearInterval(g.current), (g.current = null));
          };
        (0, i.useEffect)(() => (w(), p), [t]);
        let x = () => {
          !h &&
            (v(!0),
            setTimeout(() => {
              m(""), v(!1), a(new Event("submit"));
            }, 1e3),
            f.current &&
              ((f.current.style.height = "auto"), (f.current.scrollTop = 0)));
        };
        return (0, n.jsxs)("form", {
          className: (0, r.cn)(
            "w-full h-full text-white relative bg-transparent overflow-hidden shadow-md rounded-lg transition duration-200"
          ),
          onSubmit: (e) => {
            e.preventDefault(), x();
          },
          children: [
            (0, n.jsx)("textarea", {
              ref: f,
              value: c,
              onChange: (e) => {
                h || (m(e.target.value), l(e));
              },
              className: (0, r.cn)(
                "w-full h-full resize-none p-4 bg-transparent text-sm sm:text-base text-white border-none rounded-lg focus:outline-none focus:ring-0 dark:focus:ring-0",
                h && "text-transparent"
              ),
              rows: 1,
              onKeyDown: (e) => {
                if ("Enter" === e.key && e.shiftKey) {
                  var t, l;
                  e.preventDefault();
                  let n =
                    null !==
                      (l =
                        null === (t = f.current) || void 0 === t
                          ? void 0
                          : t.selectionStart) && void 0 !== l
                      ? l
                      : 0;
                  m(c.slice(0, n) + "\n" + c.slice(n)),
                    setTimeout(() => {
                      f.current &&
                        ((f.current.selectionStart = n + 1),
                        (f.current.selectionEnd = n + 1));
                    }, 0);
                } else
                  "Enter" !== e.key ||
                    e.shiftKey ||
                    (e.preventDefault(), h || x());
              },
              onFocus: p,
              onBlur: w,
              onInput: (e) => {
                let t = e.target;
                (t.style.height = "auto"),
                  (t.style.height = "".concat(t.scrollHeight, "px"));
              },
            }),
            (0, n.jsx)("div", {
              className:
                "absolute inset-0 flex items-center pointer-events-none",
              children: (0, n.jsx)(s.M, {
                mode: "wait",
                children:
                  !c &&
                  !h &&
                  (0, n.jsx)(
                    o.E.p,
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
    35915: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = l(19983),
        s = l(56500),
        o = l(40019),
        i = l(81740),
        r = l(4327);
      l(50933);
      var a = l(55769);
      function d(e) {
        return new n.Z({
          linkify: !0,
          typographer: !0,
          html: !0,
          breaks: !0,
          highlight: function (e, t) {
            if (t && i.Z.getLanguage(t))
              try {
                return (
                  '<div class="chat-bubble"><br /><pre>' +
                  t +
                  '</pre><pre class="chat-code"><code class="hljs">' +
                  i.Z.highlight(e, { language: t, ignoreIllegals: !0 }).value +
                  "</code></pre></div>"
                );
              } catch (e) {}
            return '<pre><code class="hljs">' + e + "</code></pre>";
          },
        })
          .use(s.Z)
          .use(o.Z)
          .use(r.Z)
          .use(a.Z)
          .render(e);
      }
    },
    93448: function (e, t, l) {
      "use strict";
      l.d(t, {
        cn: function () {
          return o;
        },
      });
      var n = l(61994),
        s = l(53335);
      function o() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, s.m6)((0, n.W)(t));
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        4868, 3145, 605, 2957, 1926, 6314, 6137, 6103, 8728, 9803, 9383, 8492,
        4068, 5089, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 89346));
      }
    ),
      (_N_E = e.O());
  },
]);
