"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1940],
  {
    43414: function (t, e, s) {
      var n = s(57437),
        i = s(33145),
        r = s(2265),
        o = s(87151);
      e.Z = (t) => {
        var e, s, a, u, l;
        let {
            title: c,
            audio: p,
            content: h,
            audioShow: d,
            setAudioShow: f,
            staged: g,
          } = t,
          y = r.useRef(null),
          [m, b] = (0, r.useState)("00:00"),
          [v, w] = (0, r.useState)(0),
          [k, x] = (0, r.useState)(!1),
          C = [
            -21, 15, -7, 25, -2, 41, -1, 55, -2, 41, -2, 30, -21, 20, -7, 20,
            -2, 41, -1, 55, -2, 30, -7, 20, -21, 20, -2, 41, -1, 55, -2, 30, -7,
            20, -21, 15,
          ];
        return (
          (0, r.useEffect)(() => {
            "" !== p && !1 === d
              ? ((null == y ? void 0 : y.current) &&
                  (y.current.src = null != p ? p : ""),
                f(!0))
              : (null == y ? void 0 : y.current) && (y.current.pause(), w(0)),
              y.current &&
                y.current.addEventListener("timeupdate", function () {
                  b(
                    (function (t) {
                      let e = Math.floor((t = Number(t)) / 60),
                        s = t % 60,
                        n = String(e).padStart(2, "0"),
                        i = String(s).padStart(2, "0");
                      return "".concat(n, ":").concat(i);
                    })(parseInt(this.currentTime.toFixed(0)))
                  ),
                    w(this.currentTime / this.duration);
                });
          }, [p, d]),
          (0, n.jsxs)("div", {
            className:
              "md:mt-8 mb-8 bg-[#090909] text-white rounded-2xl border w-full md:h-72 h-64 border-[#DDDDF0]/25 shadow-lg p-4 overflow-auto",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "text-2xl font-bold mb-2 text-left md:pl-4 md:pt-4 flex md:flex-row flex-col md:justify-start justify-center items-center md:gap-8 gap-4",
                children: [
                  c,
                  d &&
                    (0, n.jsx)("audio", {
                      id: "player",
                      className: "hidden",
                      ref: y,
                      autoPlay: !0,
                      controls: !0,
                      children: (0, n.jsx)("source", {
                        src: p,
                        type: "audio/mpeg",
                      }),
                    }),
                  g &&
                    (0, n.jsxs)("div", {
                      className:
                        "flex w-64 h-12 justify-between items-center border border-[#AAAAAA] p-1 rounded-full bg-gradient-to-r from-black via-[#FFFFFF]/5 to-[#FFFFFF]/20",
                      children: [
                        (0, n.jsx)("div", {
                          onClick: async () => {
                            var t, e, s;
                            (
                              null === (t = y.current) || void 0 === t
                                ? void 0
                                : t.paused
                            )
                              ? await (null === (e = y.current) || void 0 === e
                                  ? void 0
                                  : e.play())
                              : null === (s = y.current) ||
                                void 0 === s ||
                                s.pause();
                          },
                          className:
                            "rounded-full cursor-pointer" +
                            ((
                              null === (e = y.current) || void 0 === e
                                ? void 0
                                : e.paused
                            )
                              ? " bg-gradient-to-b from-[#FFFFFF]/10 via-[#FFFFFF]/20 to-[#FFFFFF]/40 p-2"
                              : " bg-[#FFFFFF]/80 p-2"),
                          children: (0, n.jsx)(i.default, {
                            src: (
                              null === (s = y.current) || void 0 === s
                                ? void 0
                                : s.paused
                            )
                              ? "/assets/play.svg"
                              : "/assets/pause.svg",
                            alt: "pause",
                            width: 100,
                            height: 100,
                            className: "w-8",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "h-[40px] w-full flex items-center mx-2",
                          children: C.map((t, e) =>
                            (0, n.jsx)(
                              "div",
                              {
                                className:
                                  "flex flex-1  w-[1px] rounded-full duration-1000" +
                                  (v * C.length < e
                                    ? " bg-white/50"
                                    : " bg-blue-700"),
                                style: { height: "".concat(t, "%") },
                              },
                              "".concat(t, "-").concat(e)
                            )
                          ),
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "mr-2 flex justify-center items-center gap-2 noto-sans-font",
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "text-sm" +
                                ((null === (a = y.current) || void 0 === a
                                  ? void 0
                                  : a.volume) === 0
                                  ? " text-[#FFFFFF]/20"
                                  : " text-[#FFFFFF]/80"),
                              children: m,
                            }),
                            (0, n.jsx)("div", {
                              className: "w-4",
                              children: (0, n.jsx)(i.default, {
                                onClick: () => {
                                  if (y.current) {
                                    var t;
                                    (null === (t = y.current) || void 0 === t
                                      ? void 0
                                      : t.volume) !== 0
                                      ? (y.current.volume = 0)
                                      : (y.current.volume = 1);
                                  }
                                },
                                src:
                                  (null === (u = y.current) ||
                                    void 0 === u ||
                                    u.volume,
                                  "/assets/volume.svg"),
                                alt: "pause",
                                width: 100,
                                height: 100,
                                className: "w-14 fill-black cursor-pointer",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "text-left pl-4 pt-4",
                children: (0, n.jsx)(o.Z, {
                  message:
                    null !== (l = null == h ? void 0 : h.toString()) &&
                    void 0 !== l
                      ? l
                      : "",
                  setTyped: x,
                }),
              }),
            ],
          })
        );
      };
    },
    76127: function (t, e, s) {
      var n = s(57437);
      s(2265),
        (e.Z = (t) => {
          let {
            title: e,
            setVoices: s,
            getNewVoiceContent: i,
            audioShow: r,
            setAudioShow: o,
            voices: a,
          } = t;
          return (0, n.jsx)("div", {
            className:
              "bg-[#090909] text-white rounded-2xl border border-[#DDDDF0]/25 shadow-lg xl:p-4 xl:pr-0 xl:w-72 w-full xl:h-72 h-64 overflow-hidden",
            children: (0, n.jsxs)("div", {
              className: "overflow-auto h-full",
              children: [
                (0, n.jsx)("div", {
                  className: "text-2xl font-bold mt-4 text-center",
                  children: e,
                }),
                (0, n.jsx)("div", {
                  className: "p-2 h-full",
                  children: (0, n.jsx)("div", {
                    className: "flex flex-col space-y-2 h-full",
                    children: [
                      {
                        label: "Male (default)",
                        openAi: !0,
                        voiceId: "0",
                        prompt: "",
                      },
                      {
                        label: "Female (default)",
                        openAi: !0,
                        voiceId: "1",
                        prompt: "",
                      },
                      {
                        label: "J.A.R.V.I.S.",
                        openAi: !1,
                        voiceId: "kGWmSkn0bgJ9ashQPpIt",
                        prompt: "",
                      },
                      {
                        label: "Ryan Reynolds",
                        openAi: !1,
                        voiceId: "quywPDLfWCevfJEIjgsw",
                        prompt:
                          "You are Ryan Reynolds as Deadpool. Respond to the picture with signature blend of irreverent humor and sharp wit. Break the fourth wall, acknowledge the absurdity, and deliver your commentary with the snark and spontaneity that define you. Keep it concise, but make it hilariously memorable.",
                      },
                      {
                        label: "Elon Musk",
                        openAi: !1,
                        voiceId: "C1Niz6Kxe8zSZUznUpTf",
                        prompt:
                          "You are Elon Musk. Examine the picture as if it's the latest innovation in space or automotive technology. Infuse your analysis with visionary insight and a dash of humor, keeping it succinct.",
                      },
                      {
                        label: "Morgan Freeman",
                        openAi: !1,
                        voiceId: "8zp5WGNmlkFDj2BycZqJ",
                        prompt:
                          "You are Morgan Freeman. Narrate the picture with your iconic, soothing voice, adding a profound and philosophical perspective. Include a gentle touch of humor, but keep it brief.",
                      },
                      {
                        label: "Whoopi Goldberg",
                        openAi: !1,
                        voiceId: "fHgP6JAhL19jA5MglQr2",
                        prompt:
                          "You are Whoopi Goldberg. Give your take on the picture with the sharp wit and no-nonsense attitude you're known for. Make it snappy, funny, and straight to the point.",
                      },
                      {
                        label: "David Attenborough",
                        openAi: !1,
                        voiceId: "lyTz8bmGVZLogwuUfBPw",
                        prompt:
                          "You are Sir David Attenborough. Observe the picture as if you're uncovering a rare species in its natural habitat for the first time. Narrate with your signature blend of fascination and gentle humor, ensuring your commentary is insightful yet succinct.",
                      },
                      {
                        label: "Pattrick Stewart",
                        openAi: !1,
                        voiceId: "egfrtY0d2XOyBEVN12Iv",
                        prompt:
                          "You are Captain Picard. Commandingly interpret the picture as if you're analyzing a newly discovered planet from the bridge of the Enterprise. Blend your leadership qualities with a sense of wonder and a touch of Starfleet humor, but maintain brevity.",
                      },
                      {
                        label: "Milley Cyrus",
                        openAi: !1,
                        voiceId: "WS3alHPnYAwZbUjiOUua",
                        prompt:
                          "You are Milley Cyrus. Respond to the picture with the boldness and energy that defines your performances. Make it lively, amusing, and concise.",
                      },
                      {
                        label: "Margot Robbie",
                        openAi: !1,
                        voiceId: "bA9eJhSfMUZip1nCf1SN",
                        prompt:
                          "You are Margot Robbie as Harley Quinn. Dive into the chaos of the picture with the same unpredictable energy and mischief that Harley is known for. Twist your commentary with playful madness and sharp wit, making it as vibrant and edgy as a comic book caper, but keep it short and punchy.",
                      },
                    ].map((t, e) =>
                      (0, n.jsx)(
                        "button",
                        {
                          title: "VoiceButton",
                          type: "button",
                          className:
                            "hover:bg-[#222222] text-white pl-2 text-left border border-white/0 hover:border hover:rounded-md hover:border-[#DDDDF0]/25 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_15px_5px_rgba(75,75,75,0.2)]" +
                            (a.label === t.label
                              ? " bg-[#222222] border rounded-md border-[#DDDDF0]/25 shadow-[0_0_15px_5px_rgba(75,75,75,0.2)]"
                              : ""),
                          onClick: () => s(t),
                          children: t.label,
                        },
                        e
                      )
                    ),
                  }),
                }),
              ],
            }),
          });
        });
    },
    87151: function (t, e, s) {
      var n = s(57437),
        i = s(19983),
        r = s(56500),
        o = s(40019),
        a = s(81740),
        u = s(4327);
      s(50933);
      var l = s(55769),
        c = s(61499);
      let p = new i.Z({
        linkify: !0,
        typographer: !0,
        html: !0,
        breaks: !0,
        highlight: function (t, e) {
          if (e && a.Z.getLanguage(e))
            try {
              return (
                '<div class="chat-bubble"><br /><pre>' +
                e +
                '</pre><pre class="chat-code"><code class="hljs">' +
                a.Z.highlight(t, { language: e, ignoreIllegals: !0 }).value +
                "</code></pre></div>"
              );
            } catch (t) {}
          return '<pre><code class="hljs">' + t + "</code></pre>";
        },
      })
        .use(r.Z)
        .use(o.Z)
        .use(u.Z)
        .use(l.Z);
      e.Z = function (t) {
        let { message: e, setTyped: s } = t;
        return (0, n.jsx)(c.x, {
          strings: [p.render(e)],
          typeSpeed: 0,
          showCursor: !1,
          autoInsertCss: !0,
          onComplete: () => s(!0),
          loop: !1,
          startWhenVisible: !1,
        });
      };
    },
    61499: function (t, e, s) {
      s.d(e, {
        x: function () {
          return l;
        },
      });
      var n = s(2265);
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var s = arguments[e];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var r = {
          strings: [
            "These are the default values...",
            "You know what you should do?",
            "Use your own!",
            "Have a great day!",
          ],
          stringsElement: null,
          typeSpeed: 0,
          startDelay: 0,
          backSpeed: 0,
          smartBackspace: !0,
          shuffle: !1,
          backDelay: 700,
          fadeOut: !1,
          fadeOutClass: "typed-fade-out",
          fadeOutDelay: 500,
          loop: !1,
          loopCount: 1 / 0,
          showCursor: !0,
          cursorChar: "|",
          autoInsertCss: !0,
          attr: null,
          bindInputFocusEvents: !1,
          contentType: "html",
          onBegin: function (t) {},
          onComplete: function (t) {},
          preStringTyped: function (t, e) {},
          onStringTyped: function (t, e) {},
          onLastStringBackspaced: function (t) {},
          onTypingPaused: function (t, e) {},
          onTypingResumed: function (t, e) {},
          onReset: function (t) {},
          onStop: function (t, e) {},
          onStart: function (t, e) {},
          onDestroy: function (t) {},
        },
        o = new ((function () {
          function t() {}
          var e = t.prototype;
          return (
            (e.load = function (t, e, s) {
              if (
                ((t.el = "string" == typeof s ? document.querySelector(s) : s),
                (t.options = i({}, r, e)),
                (t.isInput = "input" === t.el.tagName.toLowerCase()),
                (t.attr = t.options.attr),
                (t.bindInputFocusEvents = t.options.bindInputFocusEvents),
                (t.showCursor = !t.isInput && t.options.showCursor),
                (t.cursorChar = t.options.cursorChar),
                (t.cursorBlinking = !0),
                (t.elContent = t.attr
                  ? t.el.getAttribute(t.attr)
                  : t.el.textContent),
                (t.contentType = t.options.contentType),
                (t.typeSpeed = t.options.typeSpeed),
                (t.startDelay = t.options.startDelay),
                (t.backSpeed = t.options.backSpeed),
                (t.smartBackspace = t.options.smartBackspace),
                (t.backDelay = t.options.backDelay),
                (t.fadeOut = t.options.fadeOut),
                (t.fadeOutClass = t.options.fadeOutClass),
                (t.fadeOutDelay = t.options.fadeOutDelay),
                (t.isPaused = !1),
                (t.strings = t.options.strings.map(function (t) {
                  return t.trim();
                })),
                (t.stringsElement =
                  "string" == typeof t.options.stringsElement
                    ? document.querySelector(t.options.stringsElement)
                    : t.options.stringsElement),
                t.stringsElement)
              ) {
                (t.strings = []),
                  (t.stringsElement.style.cssText =
                    "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
                var n = Array.prototype.slice.apply(t.stringsElement.children),
                  o = n.length;
                if (o)
                  for (var a = 0; a < o; a += 1)
                    t.strings.push(n[a].innerHTML.trim());
              }
              for (var u in ((t.strPos = 0),
              (t.currentElContent = this.getCurrentElContent(t)),
              t.currentElContent &&
                t.currentElContent.length > 0 &&
                ((t.strPos = t.currentElContent.length - 1),
                t.strings.unshift(t.currentElContent)),
              (t.sequence = []),
              t.strings))
                t.sequence[u] = u;
              (t.arrayPos = 0),
                (t.stopNum = 0),
                (t.loop = t.options.loop),
                (t.loopCount = t.options.loopCount),
                (t.curLoop = 0),
                (t.shuffle = t.options.shuffle),
                (t.pause = {
                  status: !1,
                  typewrite: !0,
                  curString: "",
                  curStrPos: 0,
                }),
                (t.typingComplete = !1),
                (t.autoInsertCss = t.options.autoInsertCss),
                t.autoInsertCss &&
                  (this.appendCursorAnimationCss(t),
                  this.appendFadeOutAnimationCss(t));
            }),
            (e.getCurrentElContent = function (t) {
              return t.attr
                ? t.el.getAttribute(t.attr)
                : t.isInput
                ? t.el.value
                : "html" === t.contentType
                ? t.el.innerHTML
                : t.el.textContent;
            }),
            (e.appendCursorAnimationCss = function (t) {
              var e = "data-typed-js-cursor-css";
              if (t.showCursor && !document.querySelector("[" + e + "]")) {
                var s = document.createElement("style");
                s.setAttribute(e, "true"),
                  (s.innerHTML =
                    "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                  document.body.appendChild(s);
              }
            }),
            (e.appendFadeOutAnimationCss = function (t) {
              var e = "data-typed-fadeout-js-css";
              if (t.fadeOut && !document.querySelector("[" + e + "]")) {
                var s = document.createElement("style");
                s.setAttribute(e, "true"),
                  (s.innerHTML =
                    "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                  document.body.appendChild(s);
              }
            }),
            t
          );
        })())(),
        a = new ((function () {
          function t() {}
          var e = t.prototype;
          return (
            (e.typeHtmlChars = function (t, e, s) {
              if ("html" !== s.contentType) return e;
              var n,
                i = t.substring(e).charAt(0);
              if ("<" === i || "&" === i) {
                for (
                  n = "<" === i ? ">" : ";";
                  t.substring(e + 1).charAt(0) !== n && !(1 + ++e > t.length);

                );
                e++;
              }
              return e;
            }),
            (e.backSpaceHtmlChars = function (t, e, s) {
              if ("html" !== s.contentType) return e;
              var n,
                i = t.substring(e).charAt(0);
              if (">" === i || ";" === i) {
                for (
                  n = ">" === i ? "<" : "&";
                  t.substring(e - 1).charAt(0) !== n && !(--e < 0);

                );
                e--;
              }
              return e;
            }),
            t
          );
        })())(),
        u = (function () {
          function t(t, e) {
            o.load(this, e, t), this.begin();
          }
          var e = t.prototype;
          return (
            (e.toggle = function () {
              this.pause.status ? this.start() : this.stop();
            }),
            (e.stop = function () {
              this.typingComplete ||
                this.pause.status ||
                (this.toggleBlinking(!0),
                (this.pause.status = !0),
                this.options.onStop(this.arrayPos, this));
            }),
            (e.start = function () {
              this.typingComplete ||
                (this.pause.status &&
                  ((this.pause.status = !1),
                  this.pause.typewrite
                    ? this.typewrite(this.pause.curString, this.pause.curStrPos)
                    : this.backspace(
                        this.pause.curString,
                        this.pause.curStrPos
                      ),
                  this.options.onStart(this.arrayPos, this)));
            }),
            (e.destroy = function () {
              this.reset(!1), this.options.onDestroy(this);
            }),
            (e.reset = function (t) {
              void 0 === t && (t = !0),
                clearInterval(this.timeout),
                this.replaceText(""),
                this.cursor &&
                  this.cursor.parentNode &&
                  (this.cursor.parentNode.removeChild(this.cursor),
                  (this.cursor = null)),
                (this.strPos = 0),
                (this.arrayPos = 0),
                (this.curLoop = 0),
                t &&
                  (this.insertCursor(),
                  this.options.onReset(this),
                  this.begin());
            }),
            (e.begin = function () {
              var t = this;
              this.options.onBegin(this),
                (this.typingComplete = !1),
                this.shuffleStringsIfNeeded(this),
                this.insertCursor(),
                this.bindInputFocusEvents && this.bindFocusEvents(),
                (this.timeout = setTimeout(function () {
                  0 === t.strPos
                    ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                    : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
                }, this.startDelay));
            }),
            (e.typewrite = function (t, e) {
              var s = this;
              this.fadeOut &&
                this.el.classList.contains(this.fadeOutClass) &&
                (this.el.classList.remove(this.fadeOutClass),
                this.cursor && this.cursor.classList.remove(this.fadeOutClass));
              var n = this.humanizer(this.typeSpeed),
                i = 1;
              !0 !== this.pause.status
                ? (this.timeout = setTimeout(function () {
                    e = a.typeHtmlChars(t, e, s);
                    var n,
                      r = 0,
                      o = t.substring(e);
                    if (
                      ("^" === o.charAt(0) &&
                        /^\^\d+/.test(o) &&
                        ((n = 1 + (o = /\d+/.exec(o)[0]).length),
                        (r = parseInt(o)),
                        (s.temporaryPause = !0),
                        s.options.onTypingPaused(s.arrayPos, s),
                        (t = t.substring(0, e) + t.substring(e + n)),
                        s.toggleBlinking(!0)),
                      "`" === o.charAt(0))
                    ) {
                      for (
                        ;
                        "`" !== t.substring(e + i).charAt(0) &&
                        (i++, !(e + i > t.length));

                      );
                      var u = t.substring(0, e),
                        l = t.substring(u.length + 1, e + i);
                      (t = u + l + t.substring(e + i + 1)), i--;
                    }
                    s.timeout = setTimeout(function () {
                      s.toggleBlinking(!1),
                        e >= t.length
                          ? s.doneTyping(t, e)
                          : s.keepTyping(t, e, i),
                        s.temporaryPause &&
                          ((s.temporaryPause = !1),
                          s.options.onTypingResumed(s.arrayPos, s));
                    }, r);
                  }, n))
                : this.setPauseStatus(t, e, !0);
            }),
            (e.keepTyping = function (t, e, s) {
              0 === e &&
                (this.toggleBlinking(!1),
                this.options.preStringTyped(this.arrayPos, this));
              var n = t.substring(0, (e += s));
              this.replaceText(n), this.typewrite(t, e);
            }),
            (e.doneTyping = function (t, e) {
              var s = this;
              this.options.onStringTyped(this.arrayPos, this),
                this.toggleBlinking(!0),
                (this.arrayPos === this.strings.length - 1 &&
                  (this.complete(),
                  !1 === this.loop || this.curLoop === this.loopCount)) ||
                  (this.timeout = setTimeout(function () {
                    s.backspace(t, e);
                  }, this.backDelay));
            }),
            (e.backspace = function (t, e) {
              var s = this;
              if (!0 !== this.pause.status) {
                if (this.fadeOut) return this.initFadeOut();
                this.toggleBlinking(!1);
                var n = this.humanizer(this.backSpeed);
                this.timeout = setTimeout(function () {
                  e = a.backSpaceHtmlChars(t, e, s);
                  var n = t.substring(0, e);
                  if ((s.replaceText(n), s.smartBackspace)) {
                    var i = s.strings[s.arrayPos + 1];
                    s.stopNum = i && n === i.substring(0, e) ? e : 0;
                  }
                  e > s.stopNum
                    ? (e--, s.backspace(t, e))
                    : e <= s.stopNum &&
                      (s.arrayPos++,
                      s.arrayPos === s.strings.length
                        ? ((s.arrayPos = 0),
                          s.options.onLastStringBackspaced(),
                          s.shuffleStringsIfNeeded(),
                          s.begin())
                        : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
                }, n);
              } else this.setPauseStatus(t, e, !1);
            }),
            (e.complete = function () {
              this.options.onComplete(this),
                this.loop ? this.curLoop++ : (this.typingComplete = !0);
            }),
            (e.setPauseStatus = function (t, e, s) {
              (this.pause.typewrite = s),
                (this.pause.curString = t),
                (this.pause.curStrPos = e);
            }),
            (e.toggleBlinking = function (t) {
              this.cursor &&
                (this.pause.status ||
                  (this.cursorBlinking !== t &&
                    ((this.cursorBlinking = t),
                    t
                      ? this.cursor.classList.add("typed-cursor--blink")
                      : this.cursor.classList.remove("typed-cursor--blink"))));
            }),
            (e.humanizer = function (t) {
              return Math.round((Math.random() * t) / 2) + t;
            }),
            (e.shuffleStringsIfNeeded = function () {
              this.shuffle &&
                (this.sequence = this.sequence.sort(function () {
                  return Math.random() - 0.5;
                }));
            }),
            (e.initFadeOut = function () {
              var t = this;
              return (
                (this.el.className += " " + this.fadeOutClass),
                this.cursor &&
                  (this.cursor.className += " " + this.fadeOutClass),
                setTimeout(function () {
                  t.arrayPos++,
                    t.replaceText(""),
                    t.strings.length > t.arrayPos
                      ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
                      : (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
                }, this.fadeOutDelay)
              );
            }),
            (e.replaceText = function (t) {
              this.attr
                ? this.el.setAttribute(this.attr, t)
                : this.isInput
                ? (this.el.value = t)
                : "html" === this.contentType
                ? (this.el.innerHTML = t)
                : (this.el.textContent = t);
            }),
            (e.bindFocusEvents = function () {
              var t = this;
              this.isInput &&
                (this.el.addEventListener("focus", function (e) {
                  t.stop();
                }),
                this.el.addEventListener("blur", function (e) {
                  (t.el.value && 0 !== t.el.value.length) || t.start();
                }));
            }),
            (e.insertCursor = function () {
              this.showCursor &&
                (this.cursor ||
                  ((this.cursor = document.createElement("span")),
                  (this.cursor.className = "typed-cursor"),
                  this.cursor.setAttribute("aria-hidden", !0),
                  (this.cursor.innerHTML = this.cursorChar),
                  this.el.parentNode &&
                    this.el.parentNode.insertBefore(
                      this.cursor,
                      this.el.nextSibling
                    )));
            }),
            t
          );
        })();
      let l = (0, n.memo)(
        ({
          style: t,
          className: e,
          typedRef: s,
          parseRef: i,
          stopped: r,
          children: o,
          startWhenVisible: a,
          ...l
        }) => {
          let c = (0, n.useRef)(null),
            p = (0, n.useMemo)(
              () => [
                ...Object.values(l).filter(
                  (t) =>
                    "boolean" == typeof t ||
                    "number" == typeof t ||
                    "string" == typeof t
                ),
                l.strings?.join(","),
              ],
              [l]
            );
          (0, n.useEffect)(() => {
            let t = (i && i(c)) || c.current,
              e = new u(t, { ...l });
            if (((r || a) && e?.stop(), a)) {
              let s = new IntersectionObserver(([t]) => {
                t.isIntersecting && (e?.start(), s.disconnect());
              });
              s.observe(t);
            }
            return (
              s && e && s(e),
              () => {
                e.destroy();
              }
            );
          }, p);
          let h = o
            ? n.cloneElement(o, { ref: c })
            : n.createElement("span", { style: t, ref: c });
          return n.createElement(
            "span",
            { style: t, className: e, "data-testid": "react-typed" },
            h
          );
        }
      );
    },
  },
]);
