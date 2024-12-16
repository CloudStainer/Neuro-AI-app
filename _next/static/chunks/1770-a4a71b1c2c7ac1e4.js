"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1770],
  {
    87045: function (t, e, n) {
      n.d(e, {
        j: function () {
          return r;
        },
      });
      var i = n(24112),
        s = n(45345),
        r = new (class extends i.l {
          #t;
          #e;
          #n;
          constructor() {
            super(),
              (this.#n = (t) => {
                if (!s.sk && window.addEventListener) {
                  let e = () => t();
                  return (
                    window.addEventListener("visibilitychange", e, !1),
                    () => {
                      window.removeEventListener("visibilitychange", e);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#n = t),
              this.#e?.(),
              (this.#e = t((t) => {
                "boolean" == typeof t ? this.setFocused(t) : this.onFocus();
              }));
          }
          setFocused(t) {
            this.#t !== t && ((this.#t = t), this.onFocus());
          }
          onFocus() {
            let t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#t
              ? this.#t
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    2894: function (t, e, n) {
      n.d(e, {
        R: function () {
          return u;
        },
        m: function () {
          return o;
        },
      });
      var i = n(18238),
        s = n(7989),
        r = n(11255),
        o = class extends s.F {
          #i;
          #s;
          #r;
          constructor(t) {
            super(),
              (this.mutationId = t.mutationId),
              (this.#s = t.mutationCache),
              (this.#i = []),
              (this.state = t.state || u()),
              this.setOptions(t.options),
              this.scheduleGc();
          }
          setOptions(t) {
            (this.options = t), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#i.includes(t) ||
              (this.#i.push(t),
              this.clearGcTimeout(),
              this.#s.notify({
                type: "observerAdded",
                mutation: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            (this.#i = this.#i.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#s.notify({
                type: "observerRemoved",
                mutation: this,
                observer: t,
              });
          }
          optionalRemove() {
            this.#i.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#s.remove(this));
          }
          continue() {
            return this.#r?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            this.#r = (0, r.Mz)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (t, e) => {
                this.#o({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#o({ type: "pause" });
              },
              onContinue: () => {
                this.#o({ type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#s.canRun(this),
            });
            let e = "pending" === this.state.status,
              n = !this.#r.canStart();
            try {
              if (!e) {
                this.#o({ type: "pending", variables: t, isPaused: n }),
                  await this.#s.config.onMutate?.(t, this);
                let e = await this.options.onMutate?.(t);
                e !== this.state.context &&
                  this.#o({
                    type: "pending",
                    context: e,
                    variables: t,
                    isPaused: n,
                  });
              }
              let i = await this.#r.start();
              return (
                await this.#s.config.onSuccess?.(
                  i,
                  t,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(i, t, this.state.context),
                await this.#s.config.onSettled?.(
                  i,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(i, null, t, this.state.context),
                this.#o({ type: "success", data: i }),
                i
              );
            } catch (e) {
              try {
                throw (
                  (await this.#s.config.onError?.(
                    e,
                    t,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(e, t, this.state.context),
                  await this.#s.config.onSettled?.(
                    void 0,
                    e,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    e,
                    t,
                    this.state.context
                  ),
                  e)
                );
              } finally {
                this.#o({ type: "error", error: e });
              }
            } finally {
              this.#s.runNext(this);
            }
          }
          #o(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    failureCount: t.failureCount,
                    failureReason: t.error,
                  };
                case "pause":
                  return { ...e, isPaused: !0 };
                case "continue":
                  return { ...e, isPaused: !1 };
                case "pending":
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              i.V.batch(() => {
                this.#i.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#s.notify({
                    mutation: this,
                    type: "updated",
                    action: t,
                  });
              });
          }
        };
      function u() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    18238: function (t, e, n) {
      n.d(e, {
        V: function () {
          return i;
        },
      });
      var i = (function () {
        let t = [],
          e = 0,
          n = (t) => {
            t();
          },
          i = (t) => {
            t();
          },
          s = (t) => setTimeout(t, 0),
          r = (i) => {
            e
              ? t.push(i)
              : s(() => {
                  n(i);
                });
          },
          o = () => {
            let e = t;
            (t = []),
              e.length &&
                s(() => {
                  i(() => {
                    e.forEach((t) => {
                      n(t);
                    });
                  });
                });
          };
        return {
          batch: (t) => {
            let n;
            e++;
            try {
              n = t();
            } finally {
              --e || o();
            }
            return n;
          },
          batchCalls:
            (t) =>
            (...e) => {
              r(() => {
                t(...e);
              });
            },
          schedule: r,
          setNotifyFunction: (t) => {
            n = t;
          },
          setBatchNotifyFunction: (t) => {
            i = t;
          },
          setScheduler: (t) => {
            s = t;
          },
        };
      })();
    },
    57853: function (t, e, n) {
      n.d(e, {
        N: function () {
          return r;
        },
      });
      var i = n(24112),
        s = n(45345),
        r = new (class extends i.l {
          #u = !0;
          #e;
          #n;
          constructor() {
            super(),
              (this.#n = (t) => {
                if (!s.sk && window.addEventListener) {
                  let e = () => t(!0),
                    n = () => t(!1);
                  return (
                    window.addEventListener("online", e, !1),
                    window.addEventListener("offline", n, !1),
                    () => {
                      window.removeEventListener("online", e),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#n = t),
              this.#e?.(),
              (this.#e = t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            this.#u !== t &&
              ((this.#u = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#u;
          }
        })();
    },
    7989: function (t, e, n) {
      n.d(e, {
        F: function () {
          return s;
        },
      });
      var i = n(45345),
        s = class {
          #a;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, i.PN)(this.gcTime) &&
                (this.#a = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ?? (i.sk ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#a && (clearTimeout(this.#a), (this.#a = void 0));
          }
        };
    },
    11255: function (t, e, n) {
      n.d(e, {
        DV: function () {
          return c;
        },
        Kw: function () {
          return u;
        },
        Mz: function () {
          return h;
        },
      });
      var i = n(87045),
        s = n(57853),
        r = n(45345);
      function o(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function u(t) {
        return (t ?? "online") !== "online" || s.N.isOnline();
      }
      var a = class extends Error {
        constructor(t) {
          super("CancelledError"),
            (this.revert = t?.revert),
            (this.silent = t?.silent);
        }
      };
      function c(t) {
        return t instanceof a;
      }
      function h(t) {
        let e,
          n,
          c,
          h = !1,
          l = 0,
          f = !1,
          d = new Promise((t, e) => {
            (n = t), (c = e);
          }),
          p = () =>
            i.j.isFocused() &&
            ("always" === t.networkMode || s.N.isOnline()) &&
            t.canRun(),
          y = () => u(t.networkMode) && t.canRun(),
          m = (i) => {
            f || ((f = !0), t.onSuccess?.(i), e?.(), n(i));
          },
          v = (n) => {
            f || ((f = !0), t.onError?.(n), e?.(), c(n));
          },
          b = () =>
            new Promise((n) => {
              (e = (t) => {
                (f || p()) && n(t);
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), f || t.onContinue?.();
            }),
          w = () => {
            let e;
            if (f) return;
            let n = 0 === l ? t.initialPromise : void 0;
            try {
              e = n ?? t.fn();
            } catch (t) {
              e = Promise.reject(t);
            }
            Promise.resolve(e)
              .then(m)
              .catch((e) => {
                if (f) return;
                let n = t.retry ?? (r.sk ? 0 : 3),
                  i = t.retryDelay ?? o,
                  s = "function" == typeof i ? i(l, e) : i,
                  u =
                    !0 === n ||
                    ("number" == typeof n && l < n) ||
                    ("function" == typeof n && n(l, e));
                if (h || !u) {
                  v(e);
                  return;
                }
                l++,
                  t.onFail?.(l, e),
                  (0, r._v)(s)
                    .then(() => (p() ? void 0 : b()))
                    .then(() => {
                      h ? v(e) : w();
                    });
              });
          };
        return {
          promise: d,
          cancel: (e) => {
            f || (v(new a(e)), t.abort?.());
          },
          continue: () => (e?.(), d),
          cancelRetry: () => {
            h = !0;
          },
          continueRetry: () => {
            h = !1;
          },
          canStart: y,
          start: () => (y() ? w() : b().then(w), d),
        };
      }
    },
    24112: function (t, e, n) {
      n.d(e, {
        l: function () {
          return i;
        },
      });
      var i = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    45345: function (t, e, n) {
      n.d(e, {
        CN: function () {
          return S;
        },
        Ht: function () {
          return E;
        },
        KC: function () {
          return a;
        },
        Kp: function () {
          return u;
        },
        Nc: function () {
          return c;
        },
        PN: function () {
          return o;
        },
        Q$: function () {
          return y;
        },
        Rm: function () {
          return f;
        },
        SE: function () {
          return r;
        },
        VS: function () {
          return m;
        },
        VX: function () {
          return C;
        },
        X7: function () {
          return l;
        },
        Ym: function () {
          return d;
        },
        ZT: function () {
          return s;
        },
        _v: function () {
          return g;
        },
        _x: function () {
          return h;
        },
        cG: function () {
          return M;
        },
        oE: function () {
          return O;
        },
        sk: function () {
          return i;
        },
        to: function () {
          return p;
        },
      });
      var i = "undefined" == typeof window || "Deno" in globalThis;
      function s() {}
      function r(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function o(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0;
      }
      function u(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function a(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function c(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function h(t, e) {
        let {
          type: n = "all",
          exact: i,
          fetchStatus: s,
          predicate: r,
          queryKey: o,
          stale: u,
        } = t;
        if (o) {
          if (i) {
            if (e.queryHash !== f(o, e.options)) return !1;
          } else if (!p(e.queryKey, o)) return !1;
        }
        if ("all" !== n) {
          let t = e.isActive();
          if (("active" === n && !t) || ("inactive" === n && t)) return !1;
        }
        return (
          ("boolean" != typeof u || e.isStale() === u) &&
          (!s || s === e.state.fetchStatus) &&
          (!r || !!r(e))
        );
      }
      function l(t, e) {
        let { exact: n, status: i, predicate: s, mutationKey: r } = t;
        if (r) {
          if (!e.options.mutationKey) return !1;
          if (n) {
            if (d(e.options.mutationKey) !== d(r)) return !1;
          } else if (!p(e.options.mutationKey, r)) return !1;
        }
        return (!i || e.state.status === i) && (!s || !!s(e));
      }
      function f(t, e) {
        return (e?.queryKeyHashFn || d)(t);
      }
      function d(t) {
        return JSON.stringify(t, (t, e) =>
          b(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, n) => ((t[n] = e[n]), t), {})
            : e
        );
      }
      function p(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            "object" == typeof t &&
            "object" == typeof e &&
            !Object.keys(e).some((n) => !p(t[n], e[n])))
        );
      }
      function y(t, e) {
        if (t === e) return t;
        let n = v(t) && v(e);
        if (n || (b(t) && b(e))) {
          let i = n ? t : Object.keys(t),
            s = i.length,
            r = n ? e : Object.keys(e),
            o = r.length,
            u = n ? [] : {},
            a = 0;
          for (let s = 0; s < o; s++) {
            let o = n ? s : r[s];
            ((!n && i.includes(o)) || n) && void 0 === t[o] && void 0 === e[o]
              ? ((u[o] = void 0), a++)
              : ((u[o] = y(t[o], e[o])),
                u[o] === t[o] && void 0 !== t[o] && a++);
          }
          return s === o && a === s ? t : u;
        }
        return e;
      }
      function m(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let n in t) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function v(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function b(t) {
        if (!w(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let n = e.prototype;
        return (
          !!(w(n) && n.hasOwnProperty("isPrototypeOf")) &&
          Object.getPrototypeOf(t) === Object.prototype
        );
      }
      function w(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function g(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function O(t, e, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(t, e)
          : !1 !== n.structuralSharing
          ? y(t, e)
          : e;
      }
      function C(t, e, n = 0) {
        let i = [...t, e];
        return n && i.length > n ? i.slice(1) : i;
      }
      function E(t, e, n = 0) {
        let i = [e, ...t];
        return n && i.length > n ? i.slice(0, -1) : i;
      }
      var S = Symbol();
      function M(t, e) {
        return !t.queryFn && e?.initialPromise
          ? () => e.initialPromise
          : t.queryFn && t.queryFn !== S
          ? t.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`));
      }
    },
    29827: function (t, e, n) {
      n.d(e, {
        NL: function () {
          return o;
        },
        aH: function () {
          return u;
        },
      });
      var i = n(2265),
        s = n(57437),
        r = i.createContext(void 0),
        o = (t) => {
          let e = i.useContext(r);
          if (t) return t;
          if (!e)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return e;
        },
        u = (t) => {
          let { client: e, children: n } = t;
          return (
            i.useEffect(
              () => (
                e.mount(),
                () => {
                  e.unmount();
                }
              ),
              [e]
            ),
            (0, s.jsx)(r.Provider, { value: e, children: n })
          );
        };
    },
    21770: function (t, e, n) {
      n.d(e, {
        D: function () {
          return l;
        },
      });
      var i = n(2265),
        s = n(2894),
        r = n(18238),
        o = n(24112),
        u = n(45345),
        a = class extends o.l {
          #c;
          #h = void 0;
          #l;
          #f;
          constructor(t, e) {
            super(),
              (this.#c = t),
              this.setOptions(e),
              this.bindMethods(),
              this.#d();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(t) {
            let e = this.options;
            (this.options = this.#c.defaultMutationOptions(t)),
              (0, u.VS)(this.options, e) ||
                this.#c
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#l,
                    observer: this,
                  }),
              e?.mutationKey &&
              this.options.mutationKey &&
              (0, u.Ym)(e.mutationKey) !== (0, u.Ym)(this.options.mutationKey)
                ? this.reset()
                : this.#l?.state.status === "pending" &&
                  this.#l.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#l?.removeObserver(this);
          }
          onMutationUpdate(t) {
            this.#d(), this.#p(t);
          }
          getCurrentResult() {
            return this.#h;
          }
          reset() {
            this.#l?.removeObserver(this),
              (this.#l = void 0),
              this.#d(),
              this.#p();
          }
          mutate(t, e) {
            return (
              (this.#f = e),
              this.#l?.removeObserver(this),
              (this.#l = this.#c
                .getMutationCache()
                .build(this.#c, this.options)),
              this.#l.addObserver(this),
              this.#l.execute(t)
            );
          }
          #d() {
            let t = this.#l?.state ?? (0, s.R)();
            this.#h = {
              ...t,
              isPending: "pending" === t.status,
              isSuccess: "success" === t.status,
              isError: "error" === t.status,
              isIdle: "idle" === t.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #p(t) {
            r.V.batch(() => {
              if (this.#f && this.hasListeners()) {
                let e = this.#h.variables,
                  n = this.#h.context;
                t?.type === "success"
                  ? (this.#f.onSuccess?.(t.data, e, n),
                    this.#f.onSettled?.(t.data, null, e, n))
                  : t?.type === "error" &&
                    (this.#f.onError?.(t.error, e, n),
                    this.#f.onSettled?.(void 0, t.error, e, n));
              }
              this.listeners.forEach((t) => {
                t(this.#h);
              });
            });
          }
        },
        c = n(29827),
        h = n(51172);
      function l(t, e) {
        let n = (0, c.NL)(e),
          [s] = i.useState(() => new a(n, t));
        i.useEffect(() => {
          s.setOptions(t);
        }, [s, t]);
        let o = i.useSyncExternalStore(
            i.useCallback((t) => s.subscribe(r.V.batchCalls(t)), [s]),
            () => s.getCurrentResult(),
            () => s.getCurrentResult()
          ),
          u = i.useCallback(
            (t, e) => {
              s.mutate(t, e).catch(h.Z);
            },
            [s]
          );
        if (o.error && (0, h.L)(s.options.throwOnError, [o.error]))
          throw o.error;
        return { ...o, mutate: u, mutateAsync: o.mutate };
      }
    },
    51172: function (t, e, n) {
      function i(t, e) {
        return "function" == typeof t ? t(...e) : !!t;
      }
      function s() {}
      n.d(e, {
        L: function () {
          return i;
        },
        Z: function () {
          return s;
        },
      });
    },
  },
]);