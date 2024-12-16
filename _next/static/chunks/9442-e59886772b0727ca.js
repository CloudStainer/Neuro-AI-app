"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9442],
  {
    43664: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = r(2265),
        a = {
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
      let s = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        l = (e, t) => {
          let r = (0, i.forwardRef)((r, l) => {
            let {
              color: n = "currentColor",
              size: u = 24,
              strokeWidth: o = 2,
              absoluteStrokeWidth: d,
              className: f = "",
              children: c,
              ...y
            } = r;
            return (0, i.createElement)(
              "svg",
              {
                ref: l,
                ...a,
                width: u,
                height: u,
                stroke: n,
                strokeWidth: d ? (24 * Number(o)) / Number(u) : o,
                className: ["lucide", "lucide-".concat(s(e)), f].join(" "),
                ...y,
              },
              [
                ...t.map((e) => {
                  let [t, r] = e;
                  return (0, i.createElement)(t, r);
                }),
                ...(Array.isArray(c) ? c : [c]),
              ]
            );
          });
          return (r.displayName = "".concat(e)), r;
        };
    },
    27648: function (e, t, r) {
      r.d(t, {
        default: function () {
          return a.a;
        },
      });
      var i = r(72972),
        a = r.n(i);
    },
    13590: function (e, t, r) {
      r.d(t, {
        F: function () {
          return o;
        },
      });
      var i = r(29501);
      let a = (e, t, r) => {
          if (e && "reportValidity" in e) {
            let a = (0, i.U2)(r, t);
            e.setCustomValidity((a && a.message) || ""), e.reportValidity();
          }
        },
        s = (e, t) => {
          for (let r in t.fields) {
            let i = t.fields[r];
            i && i.ref && "reportValidity" in i.ref
              ? a(i.ref, r, e)
              : i.refs && i.refs.forEach((t) => a(t, r, e));
          }
        },
        l = (e, t) => {
          t.shouldUseNativeValidation && s(e, t);
          let r = {};
          for (let a in e) {
            let s = (0, i.U2)(t.fields, a),
              l = Object.assign(e[a] || {}, { ref: s && s.ref });
            if (n(t.names || Object.keys(e), a)) {
              let e = Object.assign({}, (0, i.U2)(r, a));
              (0, i.t8)(e, "root", l), (0, i.t8)(r, a, e);
            } else (0, i.t8)(r, a, l);
          }
          return r;
        },
        n = (e, t) => e.some((e) => e.startsWith(t + "."));
      var u = function (e, t) {
          for (var r = {}; e.length; ) {
            var a = e[0],
              s = a.code,
              l = a.message,
              n = a.path.join(".");
            if (!r[n]) {
              if ("unionErrors" in a) {
                var u = a.unionErrors[0].errors[0];
                r[n] = { message: u.message, type: u.code };
              } else r[n] = { message: l, type: s };
            }
            if (
              ("unionErrors" in a &&
                a.unionErrors.forEach(function (t) {
                  return t.errors.forEach(function (t) {
                    return e.push(t);
                  });
                }),
              t)
            ) {
              var o = r[n].types,
                d = o && o[a.code];
              r[n] = (0, i.KN)(
                n,
                t,
                r,
                s,
                d ? [].concat(d, a.message) : a.message
              );
            }
            e.shift();
          }
          return r;
        },
        o = function (e, t, r) {
          return (
            void 0 === r && (r = {}),
            function (i, a, n) {
              try {
                return Promise.resolve(
                  (function (a, l) {
                    try {
                      var u = Promise.resolve(
                        e["sync" === r.mode ? "parse" : "parseAsync"](i, t)
                      ).then(function (e) {
                        return (
                          n.shouldUseNativeValidation && s({}, n),
                          { errors: {}, values: r.raw ? i : e }
                        );
                      });
                    } catch (e) {
                      return l(e);
                    }
                    return u && u.then ? u.then(void 0, l) : u;
                  })(0, function (e) {
                    if (Array.isArray(null == e ? void 0 : e.errors))
                      return {
                        values: {},
                        errors: l(
                          u(
                            e.errors,
                            !n.shouldUseNativeValidation &&
                              "all" === n.criteriaMode
                          ),
                          n
                        ),
                      };
                    throw e;
                  })
                );
              } catch (e) {
                return Promise.reject(e);
              }
            }
          );
        };
    },
    98575: function (e, t, r) {
      r.d(t, {
        F: function () {
          return a;
        },
        e: function () {
          return s;
        },
      });
      var i = r(2265);
      function a(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function s(...e) {
        return i.useCallback(a(...e), e);
      }
    },
    6394: function (e, t, r) {
      r.d(t, {
        f: function () {
          return n;
        },
      });
      var i = r(2265),
        a = r(66840),
        s = r(57437),
        l = i.forwardRef((e, t) =>
          (0, s.jsx)(a.WV.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              var r;
              t.target.closest("button, input, select, textarea") ||
                (null === (r = e.onMouseDown) || void 0 === r || r.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          })
        );
      l.displayName = "Label";
      var n = l;
    },
    66840: function (e, t, r) {
      r.d(t, {
        WV: function () {
          return n;
        },
        jH: function () {
          return u;
        },
      });
      var i = r(2265),
        a = r(54887),
        s = r(37053),
        l = r(57437),
        n = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = i.forwardRef((e, r) => {
            let { asChild: i, ...a } = e,
              n = i ? s.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(n, { ...a, ref: r })
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {});
      function u(e, t) {
        e && a.flushSync(() => e.dispatchEvent(t));
      }
    },
    37053: function (e, t, r) {
      r.d(t, {
        g7: function () {
          return l;
        },
      });
      var i = r(2265),
        a = r(98575),
        s = r(57437),
        l = i.forwardRef((e, t) => {
          let { children: r, ...a } = e,
            l = i.Children.toArray(r),
            u = l.find(o);
          if (u) {
            let e = u.props.children,
              r = l.map((t) =>
                t !== u
                  ? t
                  : i.Children.count(e) > 1
                  ? i.Children.only(null)
                  : i.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, s.jsx)(n, {
              ...a,
              ref: t,
              children: i.isValidElement(e)
                ? i.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, s.jsx)(n, { ...a, ref: t, children: r });
        });
      l.displayName = "Slot";
      var n = i.forwardRef((e, t) => {
        let { children: r, ...s } = e;
        if (i.isValidElement(r)) {
          let e, l;
          let n =
            (e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? r.ref
              : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? r.props.ref
              : r.props.ref || r.ref;
          return i.cloneElement(r, {
            ...(function (e, t) {
              let r = { ...t };
              for (let i in t) {
                let a = e[i],
                  s = t[i];
                /^on[A-Z]/.test(i)
                  ? a && s
                    ? (r[i] = (...e) => {
                        s(...e), a(...e);
                      })
                    : a && (r[i] = a)
                  : "style" === i
                  ? (r[i] = { ...a, ...s })
                  : "className" === i &&
                    (r[i] = [a, s].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(s, r.props),
            ref: t ? (0, a.F)(t, n) : n,
          });
        }
        return i.Children.count(r) > 1 ? i.Children.only(null) : null;
      });
      n.displayName = "SlotClone";
      var u = ({ children: e }) => (0, s.jsx)(s.Fragment, { children: e });
      function o(e) {
        return i.isValidElement(e) && e.type === u;
      }
    },
    45008: function (e, t, r) {
      r.d(t, {
        _: function () {
          return i;
        },
      });
      function i(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
    },
    22117: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return n;
        },
      });
      var i = r(81906),
        a = r(11534),
        s = r(45414),
        l = r(23999);
      function n(e, ...t) {
        let r = e.length;
        return (function (e, t) {
          let r = (0, i.c)(t()),
            l = () => r.set(t());
          return (
            l(),
            (0, a.L)(() => {
              let t = () => s.Wi.preRender(l, !1, !0),
                r = e.map((e) => e.on("change", t));
              return () => {
                r.forEach((e) => e()), (0, s.Pn)(l);
              };
            }),
            r
          );
        })(t.filter(l.i), function () {
          let i = "";
          for (let a = 0; a < r; a++) {
            i += e[a];
            let r = t[a];
            r && (i += (0, l.i)(r) ? r.get() : r);
          }
          return i;
        });
      }
    },
    81906: function (e, t, r) {
      r.d(t, {
        c: function () {
          return n;
        },
      });
      var i = r(2265),
        a = r(3078),
        s = r(45750),
        l = r(53576);
      function n(e) {
        let t = (0, l.h)(() => (0, a.BX)(e)),
          { isStatic: r } = (0, i.useContext)(s._);
        if (r) {
          let [, r] = (0, i.useState)(e);
          (0, i.useEffect)(() => t.on("change", r), []);
        }
        return t;
      }
    },
    29501: function (e, t, r) {
      r.d(t, {
        KN: function () {
          return j;
        },
        U2: function () {
          return p;
        },
        cI: function () {
          return ep;
        },
        t8: function () {
          return V;
        },
      });
      var i = r(2265),
        a = (e) => "checkbox" === e.type,
        s = (e) => e instanceof Date,
        l = (e) => null == e;
      let n = (e) => "object" == typeof e;
      var u = (e) => !l(e) && !Array.isArray(e) && n(e) && !s(e),
        o = (e) =>
          u(e) && e.target
            ? a(e.target)
              ? e.target.checked
              : e.target.value
            : e,
        d = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
        f = (e, t) => e.has(d(t)),
        c = (e) => {
          let t = e.constructor && e.constructor.prototype;
          return u(t) && t.hasOwnProperty("isPrototypeOf");
        },
        y =
          "undefined" != typeof window &&
          void 0 !== window.HTMLElement &&
          "undefined" != typeof document;
      function m(e) {
        let t;
        let r = Array.isArray(e);
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else if (
          !(!(y && (e instanceof Blob || e instanceof FileList)) && (r || u(e)))
        )
          return e;
        else if (((t = r ? [] : {}), r || c(e)))
          for (let r in e) e.hasOwnProperty(r) && (t[r] = m(e[r]));
        else t = e;
        return t;
      }
      var v = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        h = (e) => void 0 === e,
        p = (e, t, r) => {
          if (!t || !u(e)) return r;
          let i = v(t.split(/[,[\].]+?/)).reduce(
            (e, t) => (l(e) ? e : e[t]),
            e
          );
          return h(i) || i === e ? (h(e[t]) ? r : e[t]) : i;
        },
        g = (e) => "boolean" == typeof e,
        b = (e) => /^\w*$/.test(e),
        _ = (e) => v(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
        V = (e, t, r) => {
          let i = -1,
            a = b(t) ? [t] : _(t),
            s = a.length,
            l = s - 1;
          for (; ++i < s; ) {
            let t = a[i],
              s = r;
            if (i !== l) {
              let r = e[t];
              s = u(r) || Array.isArray(r) ? r : isNaN(+a[i + 1]) ? {} : [];
            }
            if ("__proto__" === t) return;
            (e[t] = s), (e = e[t]);
          }
          return e;
        };
      let w = { BLUR: "blur", FOCUS_OUT: "focusout" },
        A = {
          onBlur: "onBlur",
          onChange: "onChange",
          onSubmit: "onSubmit",
          onTouched: "onTouched",
          all: "all",
        },
        F = {
          max: "max",
          min: "min",
          maxLength: "maxLength",
          minLength: "minLength",
          pattern: "pattern",
          required: "required",
          validate: "validate",
        };
      i.createContext(null);
      var x = (e, t, r, i = !0) => {
          let a = { defaultValues: t._defaultValues };
          for (let s in e)
            Object.defineProperty(a, s, {
              get: () => (
                t._proxyFormState[s] !== A.all &&
                  (t._proxyFormState[s] = !i || A.all),
                r && (r[s] = !0),
                e[s]
              ),
            });
          return a;
        },
        k = (e) => u(e) && !Object.keys(e).length,
        S = (e, t, r, i) => {
          r(e);
          let { name: a, ...s } = e;
          return (
            k(s) ||
            Object.keys(s).length >= Object.keys(t).length ||
            Object.keys(s).find((e) => t[e] === (!i || A.all))
          );
        },
        D = (e) => (Array.isArray(e) ? e : [e]),
        E = (e) => "string" == typeof e,
        O = (e, t, r, i, a) =>
          E(e)
            ? (i && t.watch.add(e), p(r, e, a))
            : Array.isArray(e)
            ? e.map((e) => (i && t.watch.add(e), p(r, e)))
            : (i && (t.watchAll = !0), r),
        j = (e, t, r, i, a) =>
          t
            ? {
                ...r[e],
                types: {
                  ...(r[e] && r[e].types ? r[e].types : {}),
                  [i]: a || !0,
                },
              }
            : {},
        C = (e) => ({
          isOnSubmit: !e || e === A.onSubmit,
          isOnBlur: e === A.onBlur,
          isOnChange: e === A.onChange,
          isOnAll: e === A.all,
          isOnTouch: e === A.onTouched,
        }),
        N = (e, t, r) =>
          !r &&
          (t.watchAll ||
            t.watch.has(e) ||
            [...t.watch].some(
              (t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))
            ));
      let U = (e, t, r, i) => {
        for (let a of r || Object.keys(e)) {
          let r = p(e, a);
          if (r) {
            let { _f: e, ...s } = r;
            if (e) {
              if (
                (e.refs && e.refs[0] && t(e.refs[0], a) && !i) ||
                (e.ref && t(e.ref, e.name) && !i)
              )
                return !0;
              if (U(s, t)) break;
            } else if (u(s) && U(s, t)) break;
          }
        }
      };
      var L = (e, t, r) => {
          let i = D(p(e, r));
          return V(i, "root", t[r]), V(e, r, i), e;
        },
        T = (e) => "file" === e.type,
        B = (e) => "function" == typeof e,
        R = (e) => {
          if (!y) return !1;
          let t = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
          );
        },
        M = (e) => E(e),
        P = (e) => "radio" === e.type,
        W = (e) => e instanceof RegExp;
      let q = { value: !1, isValid: !1 },
        $ = { value: !0, isValid: !0 };
      var I = (e) => {
        if (Array.isArray(e)) {
          if (e.length > 1) {
            let t = e
              .filter((e) => e && e.checked && !e.disabled)
              .map((e) => e.value);
            return { value: t, isValid: !!t.length };
          }
          return e[0].checked && !e[0].disabled
            ? e[0].attributes && !h(e[0].attributes.value)
              ? h(e[0].value) || "" === e[0].value
                ? $
                : { value: e[0].value, isValid: !0 }
              : $
            : q;
        }
        return q;
      };
      let H = { isValid: !1, value: null };
      var z = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, t) =>
                t && t.checked && !t.disabled
                  ? { isValid: !0, value: t.value }
                  : e,
              H
            )
          : H;
      function Z(e, t, r = "validate") {
        if (M(e) || (Array.isArray(e) && e.every(M)) || (g(e) && !e))
          return { type: r, message: M(e) ? e : "", ref: t };
      }
      var K = (e) => (u(e) && !W(e) ? e : { value: e, message: "" }),
        X = async (e, t, r, i, s) => {
          let {
              ref: n,
              refs: o,
              required: d,
              maxLength: f,
              minLength: c,
              min: y,
              max: m,
              pattern: v,
              validate: b,
              name: _,
              valueAsNumber: V,
              mount: w,
              disabled: A,
            } = e._f,
            x = p(t, _);
          if (!w || A) return {};
          let S = o ? o[0] : n,
            D = (e) => {
              i &&
                S.reportValidity &&
                (S.setCustomValidity(g(e) ? "" : e || ""), S.reportValidity());
            },
            O = {},
            C = P(n),
            N = a(n),
            U =
              ((V || T(n)) && h(n.value) && h(x)) ||
              (R(n) && "" === n.value) ||
              "" === x ||
              (Array.isArray(x) && !x.length),
            L = j.bind(null, _, r, O),
            q = (e, t, r, i = F.maxLength, a = F.minLength) => {
              let s = e ? t : r;
              O[_] = {
                type: e ? i : a,
                message: s,
                ref: n,
                ...L(e ? i : a, s),
              };
            };
          if (
            s
              ? !Array.isArray(x) || !x.length
              : d &&
                ((!(C || N) && (U || l(x))) ||
                  (g(x) && !x) ||
                  (N && !I(o).isValid) ||
                  (C && !z(o).isValid))
          ) {
            let { value: e, message: t } = M(d)
              ? { value: !!d, message: d }
              : K(d);
            if (
              e &&
              ((O[_] = {
                type: F.required,
                message: t,
                ref: S,
                ...L(F.required, t),
              }),
              !r)
            )
              return D(t), O;
          }
          if (!U && (!l(y) || !l(m))) {
            let e, t;
            let i = K(m),
              a = K(y);
            if (l(x) || isNaN(x)) {
              let r = n.valueAsDate || new Date(x),
                s = (e) => new Date(new Date().toDateString() + " " + e),
                l = "time" == n.type,
                u = "week" == n.type;
              E(i.value) &&
                x &&
                (e = l
                  ? s(x) > s(i.value)
                  : u
                  ? x > i.value
                  : r > new Date(i.value)),
                E(a.value) &&
                  x &&
                  (t = l
                    ? s(x) < s(a.value)
                    : u
                    ? x < a.value
                    : r < new Date(a.value));
            } else {
              let r = n.valueAsNumber || (x ? +x : x);
              l(i.value) || (e = r > i.value), l(a.value) || (t = r < a.value);
            }
            if ((e || t) && (q(!!e, i.message, a.message, F.max, F.min), !r))
              return D(O[_].message), O;
          }
          if ((f || c) && !U && (E(x) || (s && Array.isArray(x)))) {
            let e = K(f),
              t = K(c),
              i = !l(e.value) && x.length > +e.value,
              a = !l(t.value) && x.length < +t.value;
            if ((i || a) && (q(i, e.message, t.message), !r))
              return D(O[_].message), O;
          }
          if (v && !U && E(x)) {
            let { value: e, message: t } = K(v);
            if (
              W(e) &&
              !x.match(e) &&
              ((O[_] = {
                type: F.pattern,
                message: t,
                ref: n,
                ...L(F.pattern, t),
              }),
              !r)
            )
              return D(t), O;
          }
          if (b) {
            if (B(b)) {
              let e = Z(await b(x, t), S);
              if (e && ((O[_] = { ...e, ...L(F.validate, e.message) }), !r))
                return D(e.message), O;
            } else if (u(b)) {
              let e = {};
              for (let i in b) {
                if (!k(e) && !r) break;
                let a = Z(await b[i](x, t), S, i);
                a &&
                  ((e = { ...a, ...L(i, a.message) }),
                  D(a.message),
                  r && (O[_] = e));
              }
              if (!k(e) && ((O[_] = { ref: S, ...e }), !r)) return O;
            }
          }
          return D(!0), O;
        };
      function Y(e, t) {
        let r = Array.isArray(t) ? t : b(t) ? [t] : _(t),
          i =
            1 === r.length
              ? e
              : (function (e, t) {
                  let r = t.slice(0, -1).length,
                    i = 0;
                  for (; i < r; ) e = h(e) ? i++ : e[t[i++]];
                  return e;
                })(e, r),
          a = r.length - 1,
          s = r[a];
        return (
          i && delete i[s],
          0 !== a &&
            ((u(i) && k(i)) ||
              (Array.isArray(i) &&
                (function (e) {
                  for (let t in e)
                    if (e.hasOwnProperty(t) && !h(e[t])) return !1;
                  return !0;
                })(i))) &&
            Y(e, r.slice(0, -1)),
          e
        );
      }
      var G = () => {
          let e = [];
          return {
            get observers() {
              return e;
            },
            next: (t) => {
              for (let r of e) r.next && r.next(t);
            },
            subscribe: (t) => (
              e.push(t),
              {
                unsubscribe: () => {
                  e = e.filter((e) => e !== t);
                },
              }
            ),
            unsubscribe: () => {
              e = [];
            },
          };
        },
        J = (e) => l(e) || !n(e);
      function Q(e, t) {
        if (J(e) || J(t)) return e === t;
        if (s(e) && s(t)) return e.getTime() === t.getTime();
        let r = Object.keys(e),
          i = Object.keys(t);
        if (r.length !== i.length) return !1;
        for (let a of r) {
          let r = e[a];
          if (!i.includes(a)) return !1;
          if ("ref" !== a) {
            let e = t[a];
            if (
              (s(r) && s(e)) ||
              (u(r) && u(e)) ||
              (Array.isArray(r) && Array.isArray(e))
                ? !Q(r, e)
                : r !== e
            )
              return !1;
          }
        }
        return !0;
      }
      var ee = (e) => "select-multiple" === e.type,
        et = (e) => P(e) || a(e),
        er = (e) => R(e) && e.isConnected,
        ei = (e) => {
          for (let t in e) if (B(e[t])) return !0;
          return !1;
        };
      function ea(e, t = {}) {
        let r = Array.isArray(e);
        if (u(e) || r)
          for (let r in e)
            Array.isArray(e[r]) || (u(e[r]) && !ei(e[r]))
              ? ((t[r] = Array.isArray(e[r]) ? [] : {}), ea(e[r], t[r]))
              : l(e[r]) || (t[r] = !0);
        return t;
      }
      var es = (e, t) =>
          (function e(t, r, i) {
            let a = Array.isArray(t);
            if (u(t) || a)
              for (let a in t)
                Array.isArray(t[a]) || (u(t[a]) && !ei(t[a]))
                  ? h(r) || J(i[a])
                    ? (i[a] = Array.isArray(t[a])
                        ? ea(t[a], [])
                        : { ...ea(t[a]) })
                    : e(t[a], l(r) ? {} : r[a], i[a])
                  : (i[a] = !Q(t[a], r[a]));
            return i;
          })(e, t, ea(t)),
        el = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: i }) =>
          h(e)
            ? e
            : t
            ? "" === e
              ? NaN
              : e
              ? +e
              : e
            : r && E(e)
            ? new Date(e)
            : i
            ? i(e)
            : e;
      function en(e) {
        let t = e.ref;
        return (e.refs ? e.refs.every((e) => e.disabled) : t.disabled)
          ? void 0
          : T(t)
          ? t.files
          : P(t)
          ? z(e.refs).value
          : ee(t)
          ? [...t.selectedOptions].map(({ value: e }) => e)
          : a(t)
          ? I(e.refs).value
          : el(h(t.value) ? e.ref.value : t.value, e);
      }
      var eu = (e, t, r, i) => {
          let a = {};
          for (let r of e) {
            let e = p(t, r);
            e && V(a, r, e._f);
          }
          return {
            criteriaMode: r,
            names: [...e],
            fields: a,
            shouldUseNativeValidation: i,
          };
        },
        eo = (e) =>
          h(e)
            ? e
            : W(e)
            ? e.source
            : u(e)
            ? W(e.value)
              ? e.value.source
              : e.value
            : e;
      let ed = "AsyncFunction";
      var ef = (e) =>
          (!e || !e.validate) &&
          !!(
            (B(e.validate) && e.validate.constructor.name === ed) ||
            (u(e.validate) &&
              Object.values(e.validate).find((e) => e.constructor.name === ed))
          ),
        ec = (e) =>
          e.mount &&
          (e.required ||
            e.min ||
            e.max ||
            e.maxLength ||
            e.minLength ||
            e.pattern ||
            e.validate);
      function ey(e, t, r) {
        let i = p(e, r);
        if (i || b(r)) return { error: i, name: r };
        let a = r.split(".");
        for (; a.length; ) {
          let i = a.join("."),
            s = p(t, i),
            l = p(e, i);
          if (s && !Array.isArray(s) && r !== i) break;
          if (l && l.type) return { name: i, error: l };
          a.pop();
        }
        return { name: r };
      }
      var em = (e, t, r, i, a) =>
          !a.isOnAll &&
          (!r && a.isOnTouch
            ? !(t || e)
            : (r ? i.isOnBlur : a.isOnBlur)
            ? !e
            : (r ? !i.isOnChange : !a.isOnChange) || e),
        ev = (e, t) => !v(p(e, t)).length && Y(e, t);
      let eh = {
        mode: A.onSubmit,
        reValidateMode: A.onChange,
        shouldFocusError: !0,
      };
      function ep(e = {}) {
        let t = i.useRef(),
          r = i.useRef(),
          [n, d] = i.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: B(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: e.errors || {},
            disabled: e.disabled || !1,
            defaultValues: B(e.defaultValues) ? void 0 : e.defaultValues,
          });
        t.current ||
          (t.current = {
            ...(function (e = {}) {
              let t,
                r = { ...eh, ...e },
                i = {
                  submitCount: 0,
                  isDirty: !1,
                  isLoading: B(r.defaultValues),
                  isValidating: !1,
                  isSubmitted: !1,
                  isSubmitting: !1,
                  isSubmitSuccessful: !1,
                  isValid: !1,
                  touchedFields: {},
                  dirtyFields: {},
                  validatingFields: {},
                  errors: r.errors || {},
                  disabled: r.disabled || !1,
                },
                n = {},
                d =
                  ((u(r.defaultValues) || u(r.values)) &&
                    m(r.defaultValues || r.values)) ||
                  {},
                c = r.shouldUnregister ? {} : m(d),
                b = { action: !1, mount: !1, watch: !1 },
                _ = {
                  mount: new Set(),
                  unMount: new Set(),
                  array: new Set(),
                  watch: new Set(),
                },
                F = 0,
                x = {
                  isDirty: !1,
                  dirtyFields: !1,
                  validatingFields: !1,
                  touchedFields: !1,
                  isValidating: !1,
                  isValid: !1,
                  errors: !1,
                },
                S = { values: G(), array: G(), state: G() },
                j = C(r.mode),
                M = C(r.reValidateMode),
                P = r.criteriaMode === A.all,
                W = (e) => (t) => {
                  clearTimeout(F), (F = setTimeout(e, t));
                },
                q = async (e) => {
                  if (x.isValid || e) {
                    let e = r.resolver
                      ? k((await K()).errors)
                      : await ea(n, !0);
                    e !== i.isValid && S.state.next({ isValid: e });
                  }
                },
                $ = (e, t) => {
                  (x.isValidating || x.validatingFields) &&
                    ((e || Array.from(_.mount)).forEach((e) => {
                      e &&
                        (t
                          ? V(i.validatingFields, e, t)
                          : Y(i.validatingFields, e));
                    }),
                    S.state.next({
                      validatingFields: i.validatingFields,
                      isValidating: !k(i.validatingFields),
                    }));
                },
                I = (e, t) => {
                  V(i.errors, e, t), S.state.next({ errors: i.errors });
                },
                H = (e, t, r, i) => {
                  let a = p(n, e);
                  if (a) {
                    let s = p(c, e, h(r) ? p(d, e) : r);
                    h(s) || (i && i.defaultChecked) || t
                      ? V(c, e, t ? s : en(a._f))
                      : eg(e, s),
                      b.mount && q();
                  }
                },
                z = (e, t, r, a, s) => {
                  let l = !1,
                    u = !1,
                    o = { name: e },
                    f = !!(p(n, e) && p(n, e)._f && p(n, e)._f.disabled);
                  if (!r || a) {
                    x.isDirty &&
                      ((u = i.isDirty),
                      (i.isDirty = o.isDirty = ed()),
                      (l = u !== o.isDirty));
                    let r = f || Q(p(d, e), t);
                    (u = !!(!f && p(i.dirtyFields, e))),
                      r || f ? Y(i.dirtyFields, e) : V(i.dirtyFields, e, !0),
                      (o.dirtyFields = i.dirtyFields),
                      (l = l || (x.dirtyFields && !r !== u));
                  }
                  if (r) {
                    let t = p(i.touchedFields, e);
                    t ||
                      (V(i.touchedFields, e, r),
                      (o.touchedFields = i.touchedFields),
                      (l = l || (x.touchedFields && t !== r)));
                  }
                  return l && s && S.state.next(o), l ? o : {};
                },
                Z = (r, a, s, l) => {
                  let n = p(i.errors, r),
                    u = x.isValid && g(a) && i.isValid !== a;
                  if (
                    (e.delayError && s
                      ? (t = W(() => I(r, s)))(e.delayError)
                      : (clearTimeout(F),
                        (t = null),
                        s ? V(i.errors, r, s) : Y(i.errors, r)),
                    (s ? !Q(n, s) : n) || !k(l) || u)
                  ) {
                    let e = {
                      ...l,
                      ...(u && g(a) ? { isValid: a } : {}),
                      errors: i.errors,
                      name: r,
                    };
                    (i = { ...i, ...e }), S.state.next(e);
                  }
                },
                K = async (e) => {
                  $(e, !0);
                  let t = await r.resolver(
                    c,
                    r.context,
                    eu(
                      e || _.mount,
                      n,
                      r.criteriaMode,
                      r.shouldUseNativeValidation
                    )
                  );
                  return $(e), t;
                },
                ei = async (e) => {
                  let { errors: t } = await K(e);
                  if (e)
                    for (let r of e) {
                      let e = p(t, r);
                      e ? V(i.errors, r, e) : Y(i.errors, r);
                    }
                  else i.errors = t;
                  return t;
                },
                ea = async (e, t, a = { valid: !0 }) => {
                  for (let s in e) {
                    let l = e[s];
                    if (l) {
                      let { _f: e, ...n } = l;
                      if (e) {
                        let n = _.array.has(e.name),
                          u = l._f && ef(l._f);
                        u && x.validatingFields && $([s], !0);
                        let o = await X(
                          l,
                          c,
                          P,
                          r.shouldUseNativeValidation && !t,
                          n
                        );
                        if (
                          (u && x.validatingFields && $([s]),
                          o[e.name] && ((a.valid = !1), t))
                        )
                          break;
                        t ||
                          (p(o, e.name)
                            ? n
                              ? L(i.errors, o, e.name)
                              : V(i.errors, e.name, o[e.name])
                            : Y(i.errors, e.name));
                      }
                      k(n) || (await ea(n, t, a));
                    }
                  }
                  return a.valid;
                },
                ed = (e, t) => (e && t && V(c, e, t), !Q(eF(), d)),
                ep = (e, t, r) =>
                  O(
                    e,
                    _,
                    { ...(b.mount ? c : h(t) ? d : E(e) ? { [e]: t } : t) },
                    r,
                    t
                  ),
                eg = (e, t, r = {}) => {
                  let i = p(n, e),
                    s = t;
                  if (i) {
                    let r = i._f;
                    r &&
                      (r.disabled || V(c, e, el(t, r)),
                      (s = R(r.ref) && l(t) ? "" : t),
                      ee(r.ref)
                        ? [...r.ref.options].forEach(
                            (e) => (e.selected = s.includes(e.value))
                          )
                        : r.refs
                        ? a(r.ref)
                          ? r.refs.length > 1
                            ? r.refs.forEach(
                                (e) =>
                                  (!e.defaultChecked || !e.disabled) &&
                                  (e.checked = Array.isArray(s)
                                    ? !!s.find((t) => t === e.value)
                                    : s === e.value)
                              )
                            : r.refs[0] && (r.refs[0].checked = !!s)
                          : r.refs.forEach((e) => (e.checked = e.value === s))
                        : T(r.ref)
                        ? (r.ref.value = "")
                        : ((r.ref.value = s),
                          r.ref.type ||
                            S.values.next({ name: e, values: { ...c } })));
                  }
                  (r.shouldDirty || r.shouldTouch) &&
                    z(e, s, r.shouldTouch, r.shouldDirty, !0),
                    r.shouldValidate && eA(e);
                },
                eb = (e, t, r) => {
                  for (let i in t) {
                    let a = t[i],
                      l = `${e}.${i}`,
                      u = p(n, l);
                    (!_.array.has(e) && J(a) && (!u || u._f)) || s(a)
                      ? eg(l, a, r)
                      : eb(l, a, r);
                  }
                },
                e_ = (e, t, r = {}) => {
                  let a = p(n, e),
                    s = _.array.has(e),
                    u = m(t);
                  V(c, e, u),
                    s
                      ? (S.array.next({ name: e, values: { ...c } }),
                        (x.isDirty || x.dirtyFields) &&
                          r.shouldDirty &&
                          S.state.next({
                            name: e,
                            dirtyFields: es(d, c),
                            isDirty: ed(e, u),
                          }))
                      : !a || a._f || l(u)
                      ? eg(e, u, r)
                      : eb(e, u, r),
                    N(e, _) && S.state.next({ ...i }),
                    S.values.next({
                      name: b.mount ? e : void 0,
                      values: { ...c },
                    });
                },
                eV = async (a) => {
                  b.mount = !0;
                  let s = a.target,
                    l = s.name,
                    u = !0,
                    d = p(n, l),
                    f = (e) => {
                      u = Number.isNaN(e) || Q(e, p(c, l, e));
                    };
                  if (d) {
                    let y, m;
                    let v = s.type ? en(d._f) : o(a),
                      h = a.type === w.BLUR || a.type === w.FOCUS_OUT,
                      g =
                        (!ec(d._f) &&
                          !r.resolver &&
                          !p(i.errors, l) &&
                          !d._f.deps) ||
                        em(h, p(i.touchedFields, l), i.isSubmitted, M, j),
                      b = N(l, _, h);
                    V(c, l, v),
                      h
                        ? (d._f.onBlur && d._f.onBlur(a), t && t(0))
                        : d._f.onChange && d._f.onChange(a);
                    let A = z(l, v, h, !1),
                      F = !k(A) || b;
                    if (
                      (h ||
                        S.values.next({
                          name: l,
                          type: a.type,
                          values: { ...c },
                        }),
                      g)
                    )
                      return (
                        x.isValid && ("onBlur" === e.mode ? h && q() : q()),
                        F && S.state.next({ name: l, ...(b ? {} : A) })
                      );
                    if ((!h && b && S.state.next({ ...i }), r.resolver)) {
                      let { errors: e } = await K([l]);
                      if ((f(v), u)) {
                        let t = ey(i.errors, n, l),
                          r = ey(e, n, t.name || l);
                        (y = r.error), (l = r.name), (m = k(e));
                      }
                    } else
                      $([l], !0),
                        (y = (await X(d, c, P, r.shouldUseNativeValidation))[
                          l
                        ]),
                        $([l]),
                        f(v),
                        u &&
                          (y ? (m = !1) : x.isValid && (m = await ea(n, !0)));
                    u && (d._f.deps && eA(d._f.deps), Z(l, m, y, A));
                  }
                },
                ew = (e, t) => {
                  if (p(i.errors, t) && e.focus) return e.focus(), 1;
                },
                eA = async (e, t = {}) => {
                  let a, s;
                  let l = D(e);
                  if (r.resolver) {
                    let t = await ei(h(e) ? e : l);
                    (a = k(t)), (s = e ? !l.some((e) => p(t, e)) : a);
                  } else
                    e
                      ? ((s = (
                          await Promise.all(
                            l.map(async (e) => {
                              let t = p(n, e);
                              return await ea(t && t._f ? { [e]: t } : t);
                            })
                          )
                        ).every(Boolean)) ||
                          i.isValid) &&
                        q()
                      : (s = a = await ea(n));
                  return (
                    S.state.next({
                      ...(!E(e) || (x.isValid && a !== i.isValid)
                        ? {}
                        : { name: e }),
                      ...(r.resolver || !e ? { isValid: a } : {}),
                      errors: i.errors,
                    }),
                    t.shouldFocus && !s && U(n, ew, e ? l : _.mount),
                    s
                  );
                },
                eF = (e) => {
                  let t = { ...(b.mount ? c : d) };
                  return h(e) ? t : E(e) ? p(t, e) : e.map((e) => p(t, e));
                },
                ex = (e, t) => ({
                  invalid: !!p((t || i).errors, e),
                  isDirty: !!p((t || i).dirtyFields, e),
                  error: p((t || i).errors, e),
                  isValidating: !!p(i.validatingFields, e),
                  isTouched: !!p((t || i).touchedFields, e),
                }),
                ek = (e, t, r) => {
                  let a = (p(n, e, { _f: {} })._f || {}).ref,
                    {
                      ref: s,
                      message: l,
                      type: u,
                      ...o
                    } = p(i.errors, e) || {};
                  V(i.errors, e, { ...o, ...t, ref: a }),
                    S.state.next({ name: e, errors: i.errors, isValid: !1 }),
                    r && r.shouldFocus && a && a.focus && a.focus();
                },
                eS = (e, t = {}) => {
                  for (let a of e ? D(e) : _.mount)
                    _.mount.delete(a),
                      _.array.delete(a),
                      t.keepValue || (Y(n, a), Y(c, a)),
                      t.keepError || Y(i.errors, a),
                      t.keepDirty || Y(i.dirtyFields, a),
                      t.keepTouched || Y(i.touchedFields, a),
                      t.keepIsValidating || Y(i.validatingFields, a),
                      r.shouldUnregister || t.keepDefaultValue || Y(d, a);
                  S.values.next({ values: { ...c } }),
                    S.state.next({
                      ...i,
                      ...(t.keepDirty ? { isDirty: ed() } : {}),
                    }),
                    t.keepIsValid || q();
                },
                eD = ({
                  disabled: e,
                  name: t,
                  field: r,
                  fields: i,
                  value: a,
                }) => {
                  if ((g(e) && b.mount) || e) {
                    let s = e ? void 0 : h(a) ? en(r ? r._f : p(i, t)._f) : a;
                    V(c, t, s), z(t, s, !1, !1, !0);
                  }
                },
                eE = (t, i = {}) => {
                  let a = p(n, t),
                    s = g(i.disabled) || g(e.disabled);
                  return (
                    V(n, t, {
                      ...(a || {}),
                      _f: {
                        ...(a && a._f ? a._f : { ref: { name: t } }),
                        name: t,
                        mount: !0,
                        ...i,
                      },
                    }),
                    _.mount.add(t),
                    a
                      ? eD({
                          field: a,
                          disabled: g(i.disabled) ? i.disabled : e.disabled,
                          name: t,
                          value: i.value,
                        })
                      : H(t, !0, i.value),
                    {
                      ...(s ? { disabled: i.disabled || e.disabled } : {}),
                      ...(r.progressive
                        ? {
                            required: !!i.required,
                            min: eo(i.min),
                            max: eo(i.max),
                            minLength: eo(i.minLength),
                            maxLength: eo(i.maxLength),
                            pattern: eo(i.pattern),
                          }
                        : {}),
                      name: t,
                      onChange: eV,
                      onBlur: eV,
                      ref: (e) => {
                        if (e) {
                          eE(t, i), (a = p(n, t));
                          let r =
                              (h(e.value) &&
                                e.querySelectorAll &&
                                e.querySelectorAll(
                                  "input,select,textarea"
                                )[0]) ||
                              e,
                            s = et(r),
                            l = a._f.refs || [];
                          (s ? l.find((e) => e === r) : r === a._f.ref) ||
                            (V(n, t, {
                              _f: {
                                ...a._f,
                                ...(s
                                  ? {
                                      refs: [
                                        ...l.filter(er),
                                        r,
                                        ...(Array.isArray(p(d, t)) ? [{}] : []),
                                      ],
                                      ref: { type: r.type, name: t },
                                    }
                                  : { ref: r }),
                              },
                            }),
                            H(t, !1, void 0, r));
                        } else
                          (a = p(n, t, {}))._f && (a._f.mount = !1),
                            (r.shouldUnregister || i.shouldUnregister) &&
                              !(f(_.array, t) && b.action) &&
                              _.unMount.add(t);
                      },
                    }
                  );
                },
                eO = () => r.shouldFocusError && U(n, ew, _.mount),
                ej = (e, t) => async (a) => {
                  let s;
                  a &&
                    (a.preventDefault && a.preventDefault(),
                    a.persist && a.persist());
                  let l = m(c);
                  if ((S.state.next({ isSubmitting: !0 }), r.resolver)) {
                    let { errors: e, values: t } = await K();
                    (i.errors = e), (l = t);
                  } else await ea(n);
                  if ((Y(i.errors, "root"), k(i.errors))) {
                    S.state.next({ errors: {} });
                    try {
                      await e(l, a);
                    } catch (e) {
                      s = e;
                    }
                  } else
                    t && (await t({ ...i.errors }, a)), eO(), setTimeout(eO);
                  if (
                    (S.state.next({
                      isSubmitted: !0,
                      isSubmitting: !1,
                      isSubmitSuccessful: k(i.errors) && !s,
                      submitCount: i.submitCount + 1,
                      errors: i.errors,
                    }),
                    s)
                  )
                    throw s;
                },
                eC = (t, r = {}) => {
                  let a = t ? m(t) : d,
                    s = m(a),
                    l = k(t),
                    u = l ? d : s;
                  if ((r.keepDefaultValues || (d = a), !r.keepValues)) {
                    if (r.keepDirtyValues)
                      for (let e of _.mount)
                        p(i.dirtyFields, e) ? V(u, e, p(c, e)) : e_(e, p(u, e));
                    else {
                      if (y && h(t))
                        for (let e of _.mount) {
                          let t = p(n, e);
                          if (t && t._f) {
                            let e = Array.isArray(t._f.refs)
                              ? t._f.refs[0]
                              : t._f.ref;
                            if (R(e)) {
                              let t = e.closest("form");
                              if (t) {
                                t.reset();
                                break;
                              }
                            }
                          }
                        }
                      n = {};
                    }
                    (c = e.shouldUnregister
                      ? r.keepDefaultValues
                        ? m(d)
                        : {}
                      : m(u)),
                      S.array.next({ values: { ...u } }),
                      S.values.next({ values: { ...u } });
                  }
                  (_ = {
                    mount: r.keepDirtyValues ? _.mount : new Set(),
                    unMount: new Set(),
                    array: new Set(),
                    watch: new Set(),
                    watchAll: !1,
                    focus: "",
                  }),
                    (b.mount =
                      !x.isValid || !!r.keepIsValid || !!r.keepDirtyValues),
                    (b.watch = !!e.shouldUnregister),
                    S.state.next({
                      submitCount: r.keepSubmitCount ? i.submitCount : 0,
                      isDirty:
                        !l &&
                        (r.keepDirty
                          ? i.isDirty
                          : !!(r.keepDefaultValues && !Q(t, d))),
                      isSubmitted: !!r.keepIsSubmitted && i.isSubmitted,
                      dirtyFields: l
                        ? {}
                        : r.keepDirtyValues
                        ? r.keepDefaultValues && c
                          ? es(d, c)
                          : i.dirtyFields
                        : r.keepDefaultValues && t
                        ? es(d, t)
                        : r.keepDirty
                        ? i.dirtyFields
                        : {},
                      touchedFields: r.keepTouched ? i.touchedFields : {},
                      errors: r.keepErrors ? i.errors : {},
                      isSubmitSuccessful:
                        !!r.keepIsSubmitSuccessful && i.isSubmitSuccessful,
                      isSubmitting: !1,
                    });
                },
                eN = (e, t) => eC(B(e) ? e(c) : e, t);
              return {
                control: {
                  register: eE,
                  unregister: eS,
                  getFieldState: ex,
                  handleSubmit: ej,
                  setError: ek,
                  _executeSchema: K,
                  _getWatch: ep,
                  _getDirty: ed,
                  _updateValid: q,
                  _removeUnmounted: () => {
                    for (let e of _.unMount) {
                      let t = p(n, e);
                      t &&
                        (t._f.refs
                          ? t._f.refs.every((e) => !er(e))
                          : !er(t._f.ref)) &&
                        eS(e);
                    }
                    _.unMount = new Set();
                  },
                  _updateFieldArray: (e, t = [], r, a, s = !0, l = !0) => {
                    if (a && r) {
                      if (((b.action = !0), l && Array.isArray(p(n, e)))) {
                        let t = r(p(n, e), a.argA, a.argB);
                        s && V(n, e, t);
                      }
                      if (l && Array.isArray(p(i.errors, e))) {
                        let t = r(p(i.errors, e), a.argA, a.argB);
                        s && V(i.errors, e, t), ev(i.errors, e);
                      }
                      if (
                        x.touchedFields &&
                        l &&
                        Array.isArray(p(i.touchedFields, e))
                      ) {
                        let t = r(p(i.touchedFields, e), a.argA, a.argB);
                        s && V(i.touchedFields, e, t);
                      }
                      x.dirtyFields && (i.dirtyFields = es(d, c)),
                        S.state.next({
                          name: e,
                          isDirty: ed(e, t),
                          dirtyFields: i.dirtyFields,
                          errors: i.errors,
                          isValid: i.isValid,
                        });
                    } else V(c, e, t);
                  },
                  _updateDisabledField: eD,
                  _getFieldArray: (t) =>
                    v(
                      p(
                        b.mount ? c : d,
                        t,
                        e.shouldUnregister ? p(d, t, []) : []
                      )
                    ),
                  _reset: eC,
                  _resetDefaultValues: () =>
                    B(r.defaultValues) &&
                    r.defaultValues().then((e) => {
                      eN(e, r.resetOptions), S.state.next({ isLoading: !1 });
                    }),
                  _updateFormState: (e) => {
                    i = { ...i, ...e };
                  },
                  _disableForm: (e) => {
                    g(e) &&
                      (S.state.next({ disabled: e }),
                      U(
                        n,
                        (t, r) => {
                          let i = p(n, r);
                          i &&
                            ((t.disabled = i._f.disabled || e),
                            Array.isArray(i._f.refs) &&
                              i._f.refs.forEach((t) => {
                                t.disabled = i._f.disabled || e;
                              }));
                        },
                        0,
                        !1
                      ));
                  },
                  _subjects: S,
                  _proxyFormState: x,
                  _setErrors: (e) => {
                    (i.errors = e),
                      S.state.next({ errors: i.errors, isValid: !1 });
                  },
                  get _fields() {
                    return n;
                  },
                  get _formValues() {
                    return c;
                  },
                  get _state() {
                    return b;
                  },
                  set _state(value) {
                    b = value;
                  },
                  get _defaultValues() {
                    return d;
                  },
                  get _names() {
                    return _;
                  },
                  set _names(value) {
                    _ = value;
                  },
                  get _formState() {
                    return i;
                  },
                  set _formState(value) {
                    i = value;
                  },
                  get _options() {
                    return r;
                  },
                  set _options(value) {
                    r = { ...r, ...value };
                  },
                },
                trigger: eA,
                register: eE,
                handleSubmit: ej,
                watch: (e, t) =>
                  B(e)
                    ? S.values.subscribe({ next: (r) => e(ep(void 0, t), r) })
                    : ep(e, t, !0),
                setValue: e_,
                getValues: eF,
                reset: eN,
                resetField: (e, t = {}) => {
                  p(n, e) &&
                    (h(t.defaultValue)
                      ? e_(e, m(p(d, e)))
                      : (e_(e, t.defaultValue), V(d, e, m(t.defaultValue))),
                    t.keepTouched || Y(i.touchedFields, e),
                    t.keepDirty ||
                      (Y(i.dirtyFields, e),
                      (i.isDirty = t.defaultValue ? ed(e, m(p(d, e))) : ed())),
                    !t.keepError && (Y(i.errors, e), x.isValid && q()),
                    S.state.next({ ...i }));
                },
                clearErrors: (e) => {
                  e && D(e).forEach((e) => Y(i.errors, e)),
                    S.state.next({ errors: e ? i.errors : {} });
                },
                unregister: eS,
                setError: ek,
                setFocus: (e, t = {}) => {
                  let r = p(n, e),
                    i = r && r._f;
                  if (i) {
                    let e = i.refs ? i.refs[0] : i.ref;
                    e.focus && (e.focus(), t.shouldSelect && e.select());
                  }
                },
                getFieldState: ex,
              };
            })(e),
            formState: n,
          });
        let c = t.current.control;
        return (
          (c._options = e),
          !(function (e) {
            let t = i.useRef(e);
            (t.current = e),
              i.useEffect(() => {
                let r =
                  !e.disabled &&
                  t.current.subject &&
                  t.current.subject.subscribe({ next: t.current.next });
                return () => {
                  r && r.unsubscribe();
                };
              }, [e.disabled]);
          })({
            subject: c._subjects.state,
            next: (e) => {
              S(e, c._proxyFormState, c._updateFormState, !0) &&
                d({ ...c._formState });
            },
          }),
          i.useEffect(() => c._disableForm(e.disabled), [c, e.disabled]),
          i.useEffect(() => {
            if (c._proxyFormState.isDirty) {
              let e = c._getDirty();
              e !== n.isDirty && c._subjects.state.next({ isDirty: e });
            }
          }, [c, n.isDirty]),
          i.useEffect(() => {
            e.values && !Q(e.values, r.current)
              ? (c._reset(e.values, c._options.resetOptions),
                (r.current = e.values),
                d((e) => ({ ...e })))
              : c._resetDefaultValues();
          }, [e.values, c]),
          i.useEffect(() => {
            e.errors && c._setErrors(e.errors);
          }, [e.errors, c]),
          i.useEffect(() => {
            c._state.mount || (c._updateValid(), (c._state.mount = !0)),
              c._state.watch &&
                ((c._state.watch = !1),
                c._subjects.state.next({ ...c._formState })),
              c._removeUnmounted();
          }),
          i.useEffect(() => {
            e.shouldUnregister &&
              c._subjects.values.next({ values: c._getWatch() });
          }, [e.shouldUnregister, c]),
          (t.current.formState = x(n, c)),
          t.current
        );
      }
    },
  },
]);
