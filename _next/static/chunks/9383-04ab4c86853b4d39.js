"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9383, 5482],
  {
    43664: function (t, e, s) {
      s.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = s(2265),
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
      let r = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        o = (t, e) => {
          let s = (0, n.forwardRef)((s, o) => {
            let {
              color: a = "currentColor",
              size: u = 24,
              strokeWidth: c = 2,
              absoluteStrokeWidth: p,
              className: l = "",
              children: h,
              ...d
            } = s;
            return (0, n.createElement)(
              "svg",
              {
                ref: o,
                ...i,
                width: u,
                height: u,
                stroke: a,
                strokeWidth: p ? (24 * Number(c)) / Number(u) : c,
                className: ["lucide", "lucide-".concat(r(t)), l].join(" "),
                ...d,
              },
              [
                ...e.map((t) => {
                  let [e, s] = t;
                  return (0, n.createElement)(e, s);
                }),
                ...(Array.isArray(h) ? h : [h]),
              ]
            );
          });
          return (s.displayName = "".concat(t)), s;
        };
    },
    76858: function (t, e, s) {
      s.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (0, s(43664).Z)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    51817: function (t, e, s) {
      s.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (0, s(43664).Z)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    48614: function (t, e, s) {
      s.d(e, {
        M: function () {
          return m;
        },
      });
      var n = s(57437),
        i = s(2265),
        r = s(64252),
        o = s(53576),
        a = s(45750);
      class u extends i.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c(t) {
        let { children: e, isPresent: s } = t,
          r = (0, i.useId)(),
          o = (0, i.useRef)(null),
          c = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: p } = (0, i.useContext)(a._);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: t, height: e, top: n, left: i } = c.current;
            if (s || !o.current || !t || !e) return;
            o.current.dataset.motionPopId = r;
            let a = document.createElement("style");
            return (
              p && (a.nonce = p),
              document.head.appendChild(a),
              a.sheet &&
                a.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      r,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            top: ")
                    .concat(n, "px !important;\n            left: ")
                    .concat(i, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(a);
              }
            );
          }, [s]),
          (0, n.jsx)(u, {
            isPresent: s,
            childRef: o,
            sizeRef: c,
            children: i.cloneElement(e, { ref: o }),
          })
        );
      }
      let p = (t) => {
        let {
            children: e,
            initial: s,
            isPresent: a,
            onExitComplete: u,
            custom: p,
            presenceAffectsLayout: h,
            mode: d,
          } = t,
          f = (0, o.h)(l),
          y = (0, i.useId)(),
          g = (0, i.useMemo)(
            () => ({
              id: y,
              initial: s,
              isPresent: a,
              custom: p,
              onExitComplete: (t) => {
                for (let e of (f.set(t, !0), f.values())) if (!e) return;
                u && u();
              },
              register: (t) => (f.set(t, !1), () => f.delete(t)),
            }),
            h ? [Math.random()] : [a]
          );
        return (
          (0, i.useMemo)(() => {
            f.forEach((t, e) => f.set(e, !1));
          }, [a]),
          i.useEffect(() => {
            a || f.size || !u || u();
          }, [a]),
          "popLayout" === d &&
            (e = (0, n.jsx)(c, { isPresent: a, children: e })),
          (0, n.jsx)(r.O.Provider, { value: g, children: e })
        );
      };
      function l() {
        return new Map();
      }
      var h = s(58881),
        d = s(13223);
      let f = (t) => t.key || "";
      function y(t) {
        let e = [];
        return (
          i.Children.forEach(t, (t) => {
            (0, i.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      var g = s(11534);
      let m = (t) => {
        let {
          children: e,
          exitBeforeEnter: s,
          custom: r,
          initial: a = !0,
          onExitComplete: u,
          presenceAffectsLayout: c = !0,
          mode: l = "sync",
        } = t;
        (0, d.k)(!s, "Replace exitBeforeEnter with mode='wait'");
        let m = (0, i.useMemo)(() => y(e), [e]),
          C = m.map(f),
          b = (0, i.useRef)(!0),
          v = (0, i.useRef)(m),
          k = (0, o.h)(() => new Map()),
          [w, P] = (0, i.useState)(m),
          [E, S] = (0, i.useState)(m);
        (0, g.L)(() => {
          (b.current = !1), (v.current = m);
          for (let t = 0; t < E.length; t++) {
            let e = f(E[t]);
            C.includes(e) ? k.delete(e) : !0 !== k.get(e) && k.set(e, !1);
          }
        }, [E, C.length, C.join("-")]);
        let T = [];
        if (m !== w) {
          let t = [...m];
          for (let e = 0; e < E.length; e++) {
            let s = E[e],
              n = f(s);
            C.includes(n) || (t.splice(e, 0, s), T.push(s));
          }
          "wait" === l && T.length && (t = T), S(y(t)), P(m);
          return;
        }
        let { forceRender: x } = (0, i.useContext)(h.p);
        return (0, n.jsx)(n.Fragment, {
          children: E.map((t) => {
            let e = f(t),
              s = m === E || C.includes(e);
            return (0, n.jsx)(
              p,
              {
                isPresent: s,
                initial: (!b.current || !!a) && void 0,
                custom: s ? void 0 : r,
                presenceAffectsLayout: c,
                mode: l,
                onExitComplete: s
                  ? void 0
                  : () => {
                      if (!k.has(e)) return;
                      k.set(e, !0);
                      let t = !0;
                      k.forEach((e) => {
                        e || (t = !1);
                      }),
                        t && (null == x || x(), S(v.current), u && u());
                    },
                children: t,
              },
              e
            );
          }),
        });
      };
    },
    61499: function (t, e, s) {
      s.d(e, {
        x: function () {
          return c;
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
                        c = t.substring(u.length + 1, e + i);
                      (t = u + c + t.substring(e + i + 1)), i--;
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
      let c = (0, n.memo)(
        ({
          style: t,
          className: e,
          typedRef: s,
          parseRef: i,
          stopped: r,
          children: o,
          startWhenVisible: a,
          ...c
        }) => {
          let p = (0, n.useRef)(null),
            l = (0, n.useMemo)(
              () => [
                ...Object.values(c).filter(
                  (t) =>
                    "boolean" == typeof t ||
                    "number" == typeof t ||
                    "string" == typeof t
                ),
                c.strings?.join(","),
              ],
              [c]
            );
          (0, n.useEffect)(() => {
            let t = (i && i(p)) || p.current,
              e = new u(t, { ...c });
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
          }, l);
          let h = o
            ? n.cloneElement(o, { ref: p })
            : n.createElement("span", { style: t, ref: p });
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
