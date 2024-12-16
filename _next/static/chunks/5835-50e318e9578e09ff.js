"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5835],
  {
    54114: function (e, t, r) {
      r.d(t, {
        S: function () {
          return d;
        },
      });
      var n = r(45345),
        i = r(21733),
        s = r(18238),
        a = r(24112),
        u = class extends a.l {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, r) {
            let s = t.queryKey,
              a = t.queryHash ?? (0, n.Rm)(s, t),
              u = this.get(a);
            return (
              u ||
                ((u = new i.A({
                  cache: this,
                  queryKey: s,
                  queryHash: a,
                  options: e.defaultQueryOptions(t),
                  state: r,
                  defaultOptions: e.getQueryDefaults(s),
                })),
                this.add(u)),
              u
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            s.V.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, n._x)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, n._x)(e, t))
              : t;
          }
          notify(e) {
            s.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            s.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            s.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        o = r(2894),
        l = class extends a.l {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#t = new Map()),
              (this.#r = Date.now());
          }
          #t;
          #r;
          build(e, t, r) {
            let n = new o.m({
              mutationCache: this,
              mutationId: ++this.#r,
              options: e.defaultMutationOptions(t),
              state: r,
            });
            return this.add(n), n;
          }
          add(e) {
            let t = c(e),
              r = this.#t.get(t) ?? [];
            r.push(e),
              this.#t.set(t, r),
              this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            let t = c(e);
            if (this.#t.has(t)) {
              let r = this.#t.get(t)?.filter((t) => t !== e);
              r && (0 === r.length ? this.#t.delete(t) : this.#t.set(t, r));
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = this.#t
              .get(c(e))
              ?.find((e) => "pending" === e.state.status);
            return !t || t === e;
          }
          runNext(e) {
            let t = this.#t.get(c(e))?.find((t) => t !== e && t.state.isPaused);
            return t?.continue() ?? Promise.resolve();
          }
          clear() {
            s.V.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          getAll() {
            return [...this.#t.values()].flat();
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, n.X7)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, n.X7)(e, t));
          }
          notify(e) {
            s.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return s.V.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(n.ZT)))
            );
          }
        };
      function c(e) {
        return e.options.scope?.id ?? String(e.mutationId);
      }
      var f = r(87045),
        p = r(57853),
        h = r(21636),
        d = class {
          #n;
          #i;
          #s;
          #a;
          #u;
          #o;
          #l;
          #c;
          constructor(e = {}) {
            (this.#n = e.queryCache || new u()),
              (this.#i = e.mutationCache || new l()),
              (this.#s = e.defaultOptions || {}),
              (this.#a = new Map()),
              (this.#u = new Map()),
              (this.#o = 0);
          }
          mount() {
            this.#o++,
              1 === this.#o &&
                ((this.#l = f.j.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#n.onFocus());
                })),
                (this.#c = p.N.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#n.onOnline());
                })));
          }
          unmount() {
            this.#o--,
              0 === this.#o &&
                (this.#l?.(),
                (this.#l = void 0),
                this.#c?.(),
                (this.#c = void 0));
          }
          isFetching(e) {
            return this.#n.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#i.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#n.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.getQueryData(e.queryKey);
            if (void 0 === t) return this.fetchQuery(e);
            {
              let r = this.defaultQueryOptions(e),
                i = this.#n.build(this, r);
              return (
                e.revalidateIfStale &&
                  i.isStaleByTime((0, n.KC)(r.staleTime, i)) &&
                  this.prefetchQuery(r),
                Promise.resolve(t)
              );
            }
          }
          getQueriesData(e) {
            return this.#n
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, r) {
            let i = this.defaultQueryOptions({ queryKey: e }),
              s = this.#n.get(i.queryHash),
              a = s?.state.data,
              u = (0, n.SE)(t, a);
            if (void 0 !== u)
              return this.#n.build(this, i).setData(u, { ...r, manual: !0 });
          }
          setQueriesData(e, t, r) {
            return s.V.batch(() =>
              this.#n
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#n.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#n;
            s.V.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let r = this.#n,
              n = { type: "active", ...e };
            return s.V.batch(
              () => (
                r.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries(n, t)
              )
            );
          }
          cancelQueries(e = {}, t = {}) {
            let r = { revert: !0, ...t };
            return Promise.all(
              s.V.batch(() => this.#n.findAll(e).map((e) => e.cancel(r)))
            )
              .then(n.ZT)
              .catch(n.ZT);
          }
          invalidateQueries(e = {}, t = {}) {
            return s.V.batch(() => {
              if (
                (this.#n.findAll(e).forEach((e) => {
                  e.invalidate();
                }),
                "none" === e.refetchType)
              )
                return Promise.resolve();
              let r = { ...e, type: e.refetchType ?? e.type ?? "active" };
              return this.refetchQueries(r, t);
            });
          }
          refetchQueries(e = {}, t) {
            let r = { ...t, cancelRefetch: t?.cancelRefetch ?? !0 };
            return Promise.all(
              s.V.batch(() =>
                this.#n
                  .findAll(e)
                  .filter((e) => !e.isDisabled())
                  .map((e) => {
                    let t = e.fetch(void 0, r);
                    return (
                      r.throwOnError || (t = t.catch(n.ZT)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(n.ZT);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let r = this.#n.build(this, t);
            return r.isStaleByTime((0, n.KC)(t.staleTime, r))
              ? r.fetch(t)
              : Promise.resolve(r.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(n.ZT).catch(n.ZT);
          }
          fetchInfiniteQuery(e) {
            return (e.behavior = (0, h.Gm)(e.pages)), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(n.ZT).catch(n.ZT);
          }
          ensureInfiniteQueryData(e) {
            return (e.behavior = (0, h.Gm)(e.pages)), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return p.N.isOnline()
              ? this.#i.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#n;
          }
          getMutationCache() {
            return this.#i;
          }
          getDefaultOptions() {
            return this.#s;
          }
          setDefaultOptions(e) {
            this.#s = e;
          }
          setQueryDefaults(e, t) {
            this.#a.set((0, n.Ym)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#a.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, n.to)(e, t.queryKey) && (r = { ...r, ...t.defaultOptions });
              }),
              r
            );
          }
          setMutationDefaults(e, t) {
            this.#u.set((0, n.Ym)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#u.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, n.to)(e, t.mutationKey) &&
                  (r = { ...r, ...t.defaultOptions });
              }),
              r
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#s.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, n.Rm)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              !0 !== t.enabled && t.queryFn === n.CN && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#s.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#n.clear(), this.#i.clear();
          }
        };
    },
    70284: function (e, t, r) {
      function n(e) {
        let t = {
          subscribe(t) {
            let r = null,
              n = !1,
              i = !1,
              s = !1;
            function a() {
              if (null === r) {
                s = !0;
                return;
              }
              !i &&
                ((i = !0), "function" == typeof r ? r() : r && r.unsubscribe());
            }
            return (
              (r = e({
                next(e) {
                  n || t.next?.(e);
                },
                error(e) {
                  n || ((n = !0), t.error?.(e), a());
                },
                complete() {
                  n || ((n = !0), t.complete?.(), a());
                },
              })),
              s && a(),
              { unsubscribe: a }
            );
          },
          pipe: (...e) => e.reduce(i, t),
        };
        return t;
      }
      function i(e, t) {
        return t(e);
      }
      r.d(t, {
        NT: function () {
          return u;
        },
        Bm: function () {
          return f;
        },
        fE: function () {
          return o;
        },
        ny: function () {
          return p;
        },
        gb: function () {
          return x;
        },
        Pq: function () {
          return q;
        },
      });
      var s = r(49975);
      class a extends Error {
        static from(e, t = {}) {
          return e instanceof a ||
            (e instanceof Error && "TRPCClientError" === e.name)
            ? (t.meta && (e.meta = { ...e.meta, ...t.meta }), e)
            : (0, s.Kn)(e) &&
              (0, s.Kn)(e.error) &&
              "number" == typeof e.error.code &&
              "string" == typeof e.error.message
            ? new a(e.error.message, { ...t, result: e })
            : new a(
                "string" == typeof e
                  ? e
                  : (0, s.Kn)(e) && "string" == typeof e.message
                  ? e.message
                  : "Unknown error",
                { ...t, cause: e }
              );
        }
        constructor(e, t) {
          let r = t?.cause;
          super(e, { cause: r }),
            (this.meta = t?.meta),
            (this.cause = r),
            (this.shape = t?.result?.error),
            (this.data = t?.result?.error.data),
            (this.name = "TRPCClientError"),
            Object.setPrototypeOf(this, a.prototype);
        }
      }
      class u {
        $request(e) {
          var t;
          return ((t = {
            links: this.links,
            op: { ...e, context: e.context ?? {}, id: ++this.requestId },
          }),
          n((e) =>
            (function e(r = 0, n = t.op) {
              let i = t.links[r];
              if (!i)
                throw Error(
                  "No more links to execute - did you forget to add an ending link?"
                );
              return i({ op: n, next: (t) => e(r + 1, t) });
            })().subscribe(e)
          )).pipe((e) => {
            let t = 0,
              r = null,
              i = [];
            return n(
              (n) => (
                t++,
                i.push(n),
                r ||
                  (r = e.subscribe({
                    next(e) {
                      for (let t of i) t.next?.(e);
                    },
                    error(e) {
                      for (let t of i) t.error?.(e);
                    },
                    complete() {
                      for (let e of i) e.complete?.();
                    },
                  })),
                {
                  unsubscribe() {
                    t--,
                      (function () {
                        if (0 === t && r) {
                          let e = r;
                          (r = null), e.unsubscribe();
                        }
                      })();
                    let e = i.findIndex((e) => e === n);
                    e > -1 && i.splice(e, 1);
                  },
                }
              )
            );
          });
        }
        async requestAsPromise(e) {
          try {
            let t = this.$request(e);
            return (
              await (function (e) {
                let t = new AbortController();
                return new Promise((r, n) => {
                  let i = !1;
                  function s() {
                    i || ((i = !0), a.unsubscribe());
                  }
                  t.signal.addEventListener("abort", () => {
                    n(t.signal.reason);
                  });
                  let a = e.subscribe({
                    next(e) {
                      (i = !0), r(e), s();
                    },
                    error(e) {
                      n(e);
                    },
                    complete() {
                      t.abort(), s();
                    },
                  });
                });
              })(t)
            ).result.data;
          } catch (e) {
            throw a.from(e);
          }
        }
        query(e, t, r) {
          return this.requestAsPromise({
            type: "query",
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        mutation(e, t, r) {
          return this.requestAsPromise({
            type: "mutation",
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        subscription(e, t, r) {
          return this.$request({
            type: "subscription",
            path: e,
            input: t,
            context: r?.context,
            signal: null,
          }).subscribe({
            next(e) {
              "started" === e.result.type
                ? r.onStarted?.({ context: e.context })
                : "stopped" === e.result.type
                ? r.onStopped?.()
                : r.onData?.(e.result.data);
            },
            error(e) {
              r.onError?.(e);
            },
            complete() {
              r.onComplete?.();
            },
          });
        }
        constructor(e) {
          (this.requestId = 0),
            (this.runtime = {}),
            (this.links = e.links.map((e) => e(this.runtime)));
        }
      }
      function o(e) {
        return new u(e);
      }
      let l = { query: "query", mutate: "mutation", subscribe: "subscription" },
        c = (e) => l[e];
      function f(e) {
        let t = (0, s.IX)(({ path: t, args: r }) => {
          let n = [...t],
            i = c(n.pop()),
            s = n.join(".");
          return e[i](s, ...r);
        });
        return (0, s.yh)((r) =>
          e.hasOwnProperty(r) ? e[r] : "__untypedClient" === r ? e : t[r]
        );
      }
      function p(e) {
        return e.__untypedClient;
      }
      let h = (e) => "function" == typeof e,
        d = { query: "GET", mutation: "POST", subscription: "PATCH" };
      function y(e) {
        return "input" in e
          ? e.transformer.input.serialize(e.input)
          : (function (e) {
              let t = {};
              for (let r = 0; r < e.length; r++) {
                let n = e[r];
                t[r] = n;
              }
              return t;
            })(e.inputs.map((t) => e.transformer.input.serialize(t)));
      }
      let m = (e) => {
          let t = e.url.split("?"),
            r = t[0].replace(/\/$/, "") + "/" + e.path,
            n = [];
          if (
            (t[1] && n.push(t[1]),
            "inputs" in e && n.push("batch=1"),
            "query" === e.type || "subscription" === e.type)
          ) {
            let t = y(e);
            void 0 !== t &&
              "POST" !== e.methodOverride &&
              n.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
          }
          return n.length && (r += "?" + n.join("&")), r;
        },
        g = (e) => {
          if ("query" === e.type && "POST" !== e.methodOverride) return;
          let t = y(e);
          return void 0 !== t ? JSON.stringify(t) : void 0;
        };
      class b extends Error {
        constructor() {
          let e = "AbortError";
          super(e), (this.name = e), (this.message = e);
        }
      }
      let w = (e) => {
        if (e?.aborted) {
          if ((e.throwIfAborted?.(), "undefined" != typeof DOMException))
            throw new DOMException("AbortError", "AbortError");
          throw new b();
        }
      };
      async function v(e) {
        w(e.signal);
        let t = e.getUrl(e),
          r = e.getBody(e),
          { type: n } = e,
          i = await (async () => {
            let t = await e.headers();
            return Symbol.iterator in t ? Object.fromEntries(t) : t;
          })(),
          s = {
            ...(e.contentTypeHeader
              ? { "content-type": e.contentTypeHeader }
              : {}),
            ...(e.trpcAcceptHeader
              ? { "trpc-accept": e.trpcAcceptHeader }
              : void 0),
            ...i,
          };
        return (function (e) {
          if (e) return e;
          if ("undefined" != typeof window && h(window.fetch))
            return window.fetch;
          if ("undefined" != typeof globalThis && h(globalThis.fetch))
            return globalThis.fetch;
          throw Error("No fetch implementation found");
        })(e.fetch)(t, {
          method: e.methodOverride ?? d[n],
          signal: e.signal,
          body: r,
          headers: s,
        });
      }
      let O = () => {
        throw Error(
          "Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new"
        );
      };
      function E(e) {
        let t = null,
          r = null,
          n = () => {
            clearTimeout(r), (r = null), (t = null);
          };
        function i() {
          let r = (function (t) {
            let r = [[]],
              n = 0;
            for (;;) {
              let i = t[n];
              if (!i) break;
              let s = r[r.length - 1];
              if (i.aborted) {
                i.reject?.(Error("Aborted")), n++;
                continue;
              }
              if (e.validate(s.concat(i).map((e) => e.key))) {
                s.push(i), n++;
                continue;
              }
              if (0 === s.length) {
                i.reject?.(Error("Input is too big for a single dispatch")),
                  n++;
                continue;
              }
              r.push([]);
            }
            return r;
          })(t);
          for (let t of (n(), r)) {
            if (!t.length) continue;
            let r = { items: t };
            for (let e of t) e.batch = r;
            e.fetch(r.items.map((e) => e.key))
              .then(async (e) => {
                for (let t of (await Promise.all(
                  e.map(async (e, t) => {
                    let n = r.items[t];
                    try {
                      let t = await Promise.resolve(e);
                      n.resolve?.(t);
                    } catch (e) {
                      n.reject?.(e);
                    }
                    (n.batch = null), (n.reject = null), (n.resolve = null);
                  })
                ),
                r.items))
                  t.reject?.(Error("Missing result")), (t.batch = null);
              })
              .catch((e) => {
                for (let t of r.items) t.reject?.(e), (t.batch = null);
              });
          }
        }
        return {
          load: function (e) {
            let n = { aborted: !1, key: e, batch: null, resolve: O, reject: O },
              s = new Promise((e, r) => {
                (n.reject = r), (n.resolve = e), t || (t = []), t.push(n);
              });
            return r || (r = setTimeout(i)), s;
          },
        };
      }
      function q(e) {
        var t;
        let r = {
            url: e.url.toString(),
            fetch: e.fetch,
            transformer: (t = e.transformer)
              ? "input" in t
                ? t
                : { input: t, output: t }
              : {
                  input: { serialize: (e) => e, deserialize: (e) => e },
                  output: { serialize: (e) => e, deserialize: (e) => e },
                },
            methodOverride: e.methodOverride,
          },
          i = e.maxURLLength ?? 1 / 0,
          u = e.maxItems ?? 1 / 0;
        return () => {
          let t = (t) => ({
              validate(e) {
                if (i === 1 / 0 && u === 1 / 0) return !0;
                if (e.length > u) return !1;
                let n = e.map((e) => e.path).join(","),
                  s = e.map((e) => e.input);
                return (
                  m({ ...r, type: t, path: n, inputs: s, signal: null })
                    .length <= i
                );
              },
              async fetch(n) {
                let i = n.map((e) => e.path).join(","),
                  u = n.map((e) => e.input),
                  o = (function (e) {
                    let t = new AbortController();
                    if (e.some((e) => !e.signal)) return t;
                    let r = e.length,
                      n = 0,
                      i = () => {
                        ++n === r && t.abort();
                      };
                    for (let t of e) {
                      let e = t.signal;
                      e.aborted
                        ? i()
                        : e.addEventListener("abort", i, { once: !0 });
                    }
                    return t;
                  })(n),
                  l = v({
                    ...r,
                    signal: o.signal,
                    type: t,
                    contentTypeHeader: "application/json",
                    trpcAcceptHeader: "application/jsonl",
                    getUrl: m,
                    getBody: g,
                    inputs: u,
                    path: i,
                    headers: () =>
                      e.headers
                        ? "function" == typeof e.headers
                          ? e.headers({ opList: n })
                          : e.headers
                        : {},
                  }),
                  c = await l,
                  [f] = await (0, s.$N)({
                    from: c.body,
                    deserialize: r.transformer.output.deserialize,
                    formatError(e) {
                      let t = e.error;
                      return a.from({ error: t });
                    },
                    abortController: o,
                  });
                return Object.keys(n).map(async (e) => {
                  let t = await Promise.resolve(f[e]);
                  if ("result" in t) {
                    let e = await Promise.resolve(t.result);
                    t = { result: { data: await Promise.resolve(e.data) } };
                  }
                  return { json: t, meta: { response: c } };
                });
              },
            }),
            o = { query: E(t("query")), mutation: E(t("mutation")) };
          return ({ op: e }) =>
            n((t) => {
              let r;
              if ("subscription" === e.type)
                throw Error(
                  "Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`"
                );
              return (
                o[e.type]
                  .load(e)
                  .then((e) => {
                    if (((r = e), "error" in e.json)) {
                      t.error(a.from(e.json, { meta: e.meta }));
                      return;
                    }
                    if ("result" in e.json) {
                      t.next({ context: e.meta, result: e.json.result }),
                        t.complete();
                      return;
                    }
                    t.complete();
                  })
                  .catch((e) => {
                    t.error(a.from(e, { meta: r?.meta }));
                  }),
                () => {}
              );
            });
        };
      }
      let Q = {
          css: {
            query: ["72e3ff", "3fb0d8"],
            mutation: ["c5a3fc", "904dfc"],
            subscription: ["ff49e1", "d83fbe"],
          },
          ansi: {
            regular: {
              query: ["\x1b[30;46m", "\x1b[97;46m"],
              mutation: ["\x1b[30;45m", "\x1b[97;45m"],
              subscription: ["\x1b[30;42m", "\x1b[97;42m"],
            },
            bold: {
              query: ["\x1b[1;30;46m", "\x1b[1;97;46m"],
              mutation: ["\x1b[1;30;45m", "\x1b[1;97;45m"],
              subscription: ["\x1b[1;30;42m", "\x1b[1;97;42m"],
            },
          },
        },
        C =
          ({ c: e = console, colorMode: t = "css", withContext: r }) =>
          (n) => {
            let i = n.input,
              s =
                "undefined" != typeof FormData && i instanceof FormData
                  ? Object.fromEntries(i)
                  : i,
              { parts: a, args: u } = (function (e) {
                let {
                    direction: t,
                    type: r,
                    withContext: n,
                    path: i,
                    id: s,
                    input: a,
                  } = e,
                  u = [],
                  o = [];
                if ("none" === e.colorMode)
                  u.push("up" === t ? ">>" : "<<", r, `#${s}`, i);
                else if ("ansi" === e.colorMode) {
                  let [e, n] = Q.ansi.regular[r],
                    [a, o] = Q.ansi.bold[r];
                  u.push(
                    "up" === t ? e : n,
                    "up" === t ? ">>" : "<<",
                    r,
                    "up" === t ? a : o,
                    `#${s}`,
                    i,
                    "\x1b[0m"
                  );
                } else {
                  let [e, n] = Q.css[r],
                    a = `
    background-color: #${"up" === t ? e : n};
    color: ${"up" === t ? "black" : "white"};
    padding: 2px;
  `;
                  u.push(
                    "%c",
                    "up" === t ? ">>" : "<<",
                    r,
                    `#${s}`,
                    `%c${i}%c`,
                    "%O"
                  ),
                    o.push(
                      a,
                      `${a}; font-weight: bold;`,
                      `${a}; font-weight: normal;`
                    );
                }
                return (
                  "up" === t
                    ? o.push(
                        n ? { input: a, context: e.context } : { input: a }
                      )
                    : o.push({
                        input: a,
                        result: e.result,
                        elapsedMs: e.elapsedMs,
                        ...(n && { context: e.context }),
                      }),
                  { parts: u, args: o }
                );
              })({ ...n, colorMode: t, input: s, withContext: r });
            e[
              "down" === n.direction &&
              n.result &&
              (n.result instanceof Error || "error" in n.result.result)
                ? "error"
                : "log"
            ].apply(null, [a.join(" ")].concat(u));
          };
      function x(e = {}) {
        let { enabled: t = () => !0 } = e,
          r = e.colorMode ?? ("undefined" == typeof window ? "ansi" : "css"),
          i = e.withContext ?? "css" === r,
          { logger: s = C({ c: e.console, colorMode: r, withContext: i }) } = e;
        return () =>
          ({ op: e, next: r }) =>
            n((i) => {
              var a;
              t({ ...e, direction: "up" }) && s({ ...e, direction: "up" });
              let u = Date.now();
              function o(r) {
                let n = Date.now() - u;
                t({ ...e, direction: "down", result: r }) &&
                  s({ ...e, direction: "down", elapsedMs: n, result: r });
              }
              return r(e)
                .pipe(
                  ((a = {
                    next(e) {
                      o(e);
                    },
                    error(e) {
                      o(e);
                    },
                  }),
                  (e) =>
                    n((t) =>
                      e.subscribe({
                        next(e) {
                          a.next?.(e), t.next(e);
                        },
                        error(e) {
                          a.error?.(e), t.error(e);
                        },
                        complete() {
                          a.complete?.(), t.complete();
                        },
                      })
                    ))
                )
                .subscribe(i);
            });
      }
    },
    3413: function (e, t, r) {
      r.d(t, {
        ec: function () {
          return _;
        },
      });
      var n = r(70284),
        i = r(45345),
        s = r(49975);
      function a(e, t, r) {
        let n = e.flatMap((e) => e.split("."));
        if (!t && (!r || "any" === r)) return n.length ? [n] : [];
        if (
          "infinite" === r &&
          (0, s.Kn)(t) &&
          ("direction" in t || "cursor" in t)
        ) {
          let { cursor: e, direction: r, ...i } = t;
          return [n, { input: i, type: "infinite" }];
        }
        return [
          n,
          {
            ...(void 0 !== t && t !== i.CN && { input: t }),
            ...(r && "any" !== r && { type: r }),
          },
        ];
      }
      function u(e) {
        return a(e, void 0, "any");
      }
      var o = r(2265);
      let l = ["client", "ssrContext", "ssrState", "abortOnUnmount"],
        c = o.createContext?.(null),
        f = (e) => {
          switch (e) {
            case "fetch":
            case "ensureData":
            case "prefetch":
            case "getData":
            case "setData":
            case "setQueriesData":
              return "query";
            case "fetchInfinite":
            case "prefetchInfinite":
            case "getInfiniteData":
            case "setInfiniteData":
              return "infinite";
            case "setMutationDefaults":
            case "getMutationDefaults":
            case "isMutating":
            case "cancel":
            case "invalidate":
            case "refetch":
            case "reset":
              return "any";
          }
        };
      var p = r(71632),
        h = r(29827),
        d = r(86900),
        y = r(99285),
        m = r(58386),
        g = r(21770),
        b = r(2868),
        w = r(63611),
        v = r(18238),
        O = r(24112);
      function E(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var q = class extends O.l {
          #f;
          #p;
          #e;
          #h;
          #d;
          #y;
          #m;
          constructor(e, t, r) {
            super(),
              (this.#f = e),
              (this.#e = []),
              (this.#h = []),
              (this.#p = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#h.forEach((e) => {
                e.subscribe((t) => {
                  this.#g(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#h.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, r) {
            (this.#e = e),
              v.V.batch(() => {
                let e = this.#h,
                  t = this.#b(this.#e);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, r)
                );
                let n = t.map((e) => e.observer),
                  i = n.map((e) => e.getCurrentResult()),
                  s = n.some((t, r) => t !== e[r]);
                (e.length !== n.length || s) &&
                  ((this.#h = n),
                  (this.#p = i),
                  this.hasListeners() &&
                    (E(e, n).forEach((e) => {
                      e.destroy();
                    }),
                    E(n, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#g(e, t);
                      });
                    }),
                    this.#w()));
              });
          }
          getCurrentResult() {
            return this.#p;
          }
          getQueries() {
            return this.#h.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#h;
          }
          getOptimisticResult(e, t) {
            let r = this.#b(e),
              n = r.map((e) =>
                e.observer.getOptimisticResult(e.defaultedQueryOptions)
              );
            return [
              n,
              (e) => this.#v(e ?? n, t),
              () =>
                r.map((e, t) => {
                  let i = n[t];
                  return e.defaultedQueryOptions.notifyOnChangeProps
                    ? i
                    : e.observer.trackResult(i, (e) => {
                        r.forEach((t) => {
                          t.observer.trackProp(e);
                        });
                      });
                }),
            ];
          }
          #v(e, t) {
            return t
              ? ((this.#d && this.#p === this.#m && t === this.#y) ||
                  ((this.#y = t),
                  (this.#m = this.#p),
                  (this.#d = (0, i.Q$)(this.#d, t(e)))),
                this.#d)
              : e;
          }
          #b(e) {
            let t = new Map(this.#h.map((e) => [e.options.queryHash, e])),
              r = e.map((e) => this.#f.defaultQueryOptions(e)),
              n = r.flatMap((e) => {
                let r = t.get(e.queryHash);
                return null != r
                  ? [{ defaultedQueryOptions: e, observer: r }]
                  : [];
              }),
              i = new Set(n.map((e) => e.defaultedQueryOptions.queryHash)),
              s = r.filter((e) => !i.has(e.queryHash)),
              a = (e) => {
                let t = this.#f.defaultQueryOptions(e);
                return (
                  this.#h.find((e) => e.options.queryHash === t.queryHash) ??
                  new d.z(this.#f, t)
                );
              },
              u = s.map((e) => ({ defaultedQueryOptions: e, observer: a(e) }));
            return n
              .concat(u)
              .sort(
                (e, t) =>
                  r.indexOf(e.defaultedQueryOptions) -
                  r.indexOf(t.defaultedQueryOptions)
              );
          }
          #g(e, t) {
            let r = this.#h.indexOf(e);
            -1 !== r &&
              ((this.#p = (function (e, t, r) {
                let n = e.slice(0);
                return (n[t] = r), n;
              })(this.#p, r, t)),
              this.#w());
          }
          #w() {
            v.V.batch(() => {
              this.listeners.forEach((e) => {
                e(this.#p);
              });
            });
          }
        },
        Q = r(39791),
        C = r(84147),
        x = r(50674);
      function D(e, t) {
        let { queries: r, ...n } = e,
          i = (0, h.NL)(t),
          s = (0, Q.S)(),
          a = (0, C._)(),
          u = o.useMemo(
            () =>
              r.map((e) => {
                let t = i.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = s ? "isRestoring" : "optimistic"), t
                );
              }),
            [r, i, s]
          );
        u.forEach((e) => {
          (0, m.A8)(e), (0, x.pf)(e, a);
        }),
          (0, x.JN)(a);
        let [l] = o.useState(() => new q(i, u, n)),
          [c, f, p] = l.getOptimisticResult(u, n.combine);
        o.useSyncExternalStore(
          o.useCallback(
            (e) => (s ? () => void 0 : l.subscribe(v.V.batchCalls(e))),
            [l, s]
          ),
          () => l.getCurrentResult(),
          () => l.getCurrentResult()
        ),
          o.useEffect(() => {
            l.setQueries(u, n, { listeners: !1 });
          }, [u, n, l]);
        let y = c.some((e, t) => (0, m.SB)(u[t], e))
          ? c.flatMap((e, t) => {
              let r = u[t];
              if (r) {
                let t = new d.z(i, r);
                if ((0, m.SB)(r, e)) return (0, m.j8)(r, t, a);
                (0, m.Z$)(e, s) && (0, m.j8)(r, t, a);
              }
              return [];
            })
          : [];
        if (y.length > 0) throw Promise.all(y);
        let g = c.find((e, t) => {
          let r = u[t];
          return (
            r &&
            (0, x.KJ)({
              result: e,
              errorResetBoundary: a,
              throwOnError: r.throwOnError,
              query: i.getQueryCache().get(r.queryHash),
            })
          );
        });
        if (null == g ? void 0 : g.error) throw g.error;
        return f(p());
      }
      function S(e, t, r) {
        let n = e[0],
          i = e[1]?.input;
        return (
          r &&
            (i = {
              ...(i ?? {}),
              ...(r.pageParam ? { cursor: r.pageParam } : {}),
              direction: r.direction,
            }),
          [n.join("."), i, t?.trpc]
        );
      }
      function R(e) {
        let t = e.path.join(".");
        return o.useMemo(() => ({ path: t }), [t]);
      }
      function I(e) {
        return (0, s.IX)((t) => {
          let r = t.path,
            n = r.join("."),
            [i, s] = t.args;
          return {
            queryKey: a(r, i, "query"),
            queryFn: () => e.query(n, i, s?.trpc),
            ...s,
          };
        });
      }
      function _(e) {
        return (function (e) {
          let t = (0, s.IX)(({ path: t, args: r }) => {
            let n = [...t],
              i = n.pop();
            if ("useMutation" === i) return e[i](n, ...r);
            if ("_def" === i) return { path: n };
            let [s, ...a] = r,
              u = a[0] || {};
            return e[i](n, s, u);
          });
          return (0, s.yh)((r) =>
            "useContext" === r || "useUtils" === r
              ? () => {
                  let t = e.useUtils();
                  return o.useMemo(
                    () =>
                      (function (e) {
                        let t = (0, n.Bm)(e.client),
                          r = (0, s.IX)((t) => {
                            let r = [...t.path],
                              n = r.pop(),
                              i = [...t.args],
                              s = i.shift(),
                              o = a(r, s, f(n));
                            return {
                              fetch: () => e.fetchQuery(o, ...i),
                              fetchInfinite: () =>
                                e.fetchInfiniteQuery(o, i[0]),
                              prefetch: () => e.prefetchQuery(o, ...i),
                              prefetchInfinite: () =>
                                e.prefetchInfiniteQuery(o, i[0]),
                              ensureData: () => e.ensureQueryData(o, ...i),
                              invalidate: () => e.invalidateQueries(o, ...i),
                              reset: () => e.resetQueries(o, ...i),
                              refetch: () => e.refetchQueries(o, ...i),
                              cancel: () => e.cancelQuery(o, ...i),
                              setData: () => {
                                e.setQueryData(o, i[0], i[1]);
                              },
                              setQueriesData: () =>
                                e.setQueriesData(o, i[0], i[1], i[2]),
                              setInfiniteData: () => {
                                e.setInfiniteQueryData(o, i[0], i[1]);
                              },
                              getData: () => e.getQueryData(o),
                              getInfiniteData: () => e.getInfiniteQueryData(o),
                              setMutationDefaults: () =>
                                e.setMutationDefaults(u(r), s),
                              getMutationDefaults: () =>
                                e.getMutationDefaults(u(r)),
                              isMutating: () =>
                                e.isMutating({ mutationKey: u(r) }),
                            }[n]();
                          });
                        return (0, s.yh)((n) =>
                          "client" === n ? t : l.includes(n) ? e[n] : r[n]
                        );
                      })(t),
                    [t]
                  );
                }
              : e.hasOwnProperty(r)
              ? e[r]
              : t[r]
          );
        })(
          (function (e) {
            let t =
                e?.overrides?.useMutation?.onSuccess ?? ((e) => e.originalFn()),
              r = e?.context ?? c;
            function l() {
              let e = o.useContext(r);
              if (!e)
                throw Error(
                  "Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?"
                );
              return e;
            }
            function f(e, t) {
              let { queryClient: r, ssrState: n } = l();
              return n &&
                "mounted" !== n &&
                r.getQueryCache().find({ queryKey: e })?.state.status ===
                  "error"
                ? { retryOnMount: !1, ...t }
                : t;
            }
            return {
              Provider: (e) => {
                let {
                    abortOnUnmount: t = !1,
                    client: i,
                    queryClient: s,
                    ssrContext: a,
                  } = e,
                  [u, l] = o.useState(e.ssrState ?? !1),
                  c = o.useMemo(
                    () =>
                      (function (e) {
                        let { client: t, queryClient: r } = e,
                          i = t instanceof n.NT ? t : (0, n.ny)(t);
                        return {
                          fetchQuery: (e, t) =>
                            r.fetchQuery({
                              ...t,
                              queryKey: e,
                              queryFn: () => i.query(...S(e, t)),
                            }),
                          fetchInfiniteQuery: (e, t) =>
                            r.fetchInfiniteQuery({
                              ...t,
                              queryKey: e,
                              queryFn: ({ pageParam: r, direction: n }) =>
                                i.query(
                                  ...S(e, t, { pageParam: r, direction: n })
                                ),
                              initialPageParam: t?.initialCursor ?? null,
                            }),
                          prefetchQuery: (e, t) =>
                            r.prefetchQuery({
                              ...t,
                              queryKey: e,
                              queryFn: () => i.query(...S(e, t)),
                            }),
                          prefetchInfiniteQuery: (e, t) =>
                            r.prefetchInfiniteQuery({
                              ...t,
                              queryKey: e,
                              queryFn: ({ pageParam: r, direction: n }) =>
                                i.query(
                                  ...S(e, t, { pageParam: r, direction: n })
                                ),
                              initialPageParam: t?.initialCursor ?? null,
                            }),
                          ensureQueryData: (e, t) =>
                            r.ensureQueryData({
                              ...t,
                              queryKey: e,
                              queryFn: () => i.query(...S(e, t)),
                            }),
                          invalidateQueries: (e, t, n) =>
                            r.invalidateQueries({ ...t, queryKey: e }, n),
                          resetQueries: (e, t, n) =>
                            r.resetQueries({ ...t, queryKey: e }, n),
                          refetchQueries: (e, t, n) =>
                            r.refetchQueries({ ...t, queryKey: e }, n),
                          cancelQuery: (e, t) =>
                            r.cancelQueries({ queryKey: e }, t),
                          setQueryData: (e, t, n) => r.setQueryData(e, t, n),
                          setQueriesData: (e, t, n, i) =>
                            r.setQueriesData({ ...t, queryKey: e }, n, i),
                          getQueryData: (e) => r.getQueryData(e),
                          setInfiniteQueryData: (e, t, n) =>
                            r.setQueryData(e, t, n),
                          getInfiniteQueryData: (e) => r.getQueryData(e),
                          setMutationDefaults: (t, n) => {
                            let s = t[0];
                            return r.setMutationDefaults(
                              t,
                              "function" == typeof n
                                ? n({
                                    canonicalMutationFn: (t) =>
                                      i.mutation(...S([s, { input: t }], e)),
                                  })
                                : n
                            );
                          },
                          getMutationDefaults: (e) => r.getMutationDefaults(e),
                          isMutating: (e) => r.isMutating({ ...e, exact: !0 }),
                        };
                      })({ client: i, queryClient: s }),
                    [i, s]
                  ),
                  f = o.useMemo(
                    () => ({
                      abortOnUnmount: t,
                      queryClient: s,
                      client: i,
                      ssrContext: a ?? null,
                      ssrState: u,
                      ...c,
                    }),
                    [t, i, c, s, a, u]
                  );
                return (
                  o.useEffect(() => {
                    l((e) => !!e && "mounted");
                  }, []),
                  o.createElement(r.Provider, { value: f }, e.children)
                );
              },
              createClient: (e) => (0, n.fE)(e),
              useContext: l,
              useUtils: l,
              useQuery: function (t, r, n) {
                let {
                    abortOnUnmount: u,
                    client: o,
                    ssrState: c,
                    queryClient: h,
                    prefetchQuery: d,
                  } = l(),
                  y = a(t, r, "query"),
                  m = h.getQueryDefaults(y),
                  g = r === i.CN;
                "undefined" != typeof window ||
                  "prepass" !== c ||
                  n?.trpc?.ssr === !1 ||
                  (n?.enabled ?? m?.enabled) === !1 ||
                  g ||
                  h.getQueryCache().find({ queryKey: y }) ||
                  d(y, n);
                let b = f(y, { ...m, ...n }),
                  w = n?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? u,
                  v = (0, p.a)(
                    {
                      ...b,
                      queryKey: y,
                      queryFn: g
                        ? r
                        : async (e) => {
                            let t = {
                                ...b,
                                trpc: {
                                  ...b?.trpc,
                                  ...(w
                                    ? { signal: e.signal }
                                    : { signal: null }),
                                },
                              },
                              r = await o.query(...S(y, t));
                            if ((0, s.D0)(r)) {
                              let t = h
                                .getQueryCache()
                                .build(e.queryKey, { queryKey: y });
                              t.setState({ data: [], status: "success" });
                              let n = [];
                              for await (let e of r)
                                n.push(e), t.setState({ data: [...n] });
                              return n;
                            }
                            return r;
                          },
                    },
                    h
                  );
                return (v.trpc = R({ path: t })), v;
              },
              usePrefetchQuery: function (t, r, n) {
                let s = l(),
                  u = a(t, r, "query"),
                  o = r === i.CN,
                  c =
                    n?.trpc?.abortOnUnmount ??
                    e?.abortOnUnmount ??
                    s.abortOnUnmount;
                !(function (e, t) {
                  let r = (0, h.NL)(void 0);
                  r.getQueryState(e.queryKey) || r.prefetchQuery(e);
                })({
                  ...n,
                  queryKey: u,
                  queryFn: o
                    ? r
                    : (e) => {
                        let t = {
                          trpc: { ...(c ? { signal: e.signal } : {}) },
                        };
                        return s.client.query(...S(u, t));
                      },
                });
              },
              useSuspenseQuery: function (t, r, n) {
                var i, s;
                let u = l(),
                  o = a(t, r, "query"),
                  c =
                    n?.trpc?.abortOnUnmount ??
                    e?.abortOnUnmount ??
                    u.abortOnUnmount,
                  f =
                    ((i = {
                      ...n,
                      queryKey: o,
                      queryFn: (e) => {
                        let t = {
                          trpc: {
                            ...(c ? { signal: e.signal } : { signal: null }),
                          },
                        };
                        return u.client.query(...S(o, t));
                      },
                    }),
                    (s = u.queryClient),
                    (0, y.r)(
                      {
                        ...i,
                        enabled: !0,
                        suspense: !0,
                        throwOnError: m.Ct,
                        placeholderData: void 0,
                      },
                      d.z,
                      s
                    ));
                return (f.trpc = R({ path: t })), [f.data, f];
              },
              useQueries: (e) => {
                let {
                    ssrState: t,
                    queryClient: r,
                    prefetchQuery: n,
                    client: i,
                  } = l(),
                  s = e(I(i));
                if ("undefined" == typeof window && "prepass" === t)
                  for (let e of s)
                    e.trpc?.ssr === !1 ||
                      r.getQueryCache().find({ queryKey: e.queryKey }) ||
                      n(e.queryKey, e);
                return D(
                  { queries: s.map((e) => ({ ...e, queryKey: e.queryKey })) },
                  r
                );
              },
              useSuspenseQueries: (e) => {
                var t;
                let { queryClient: r, client: n } = l(),
                  i = D(
                    {
                      ...(t = {
                        queries: e(I(n)).map((e) => ({
                          ...e,
                          queryKey: e.queryKey,
                        })),
                      }),
                      queries: t.queries.map((e) => ({
                        ...e,
                        suspense: !0,
                        throwOnError: m.Ct,
                        enabled: !0,
                        placeholderData: void 0,
                      })),
                    },
                    r
                  );
                return [i.map((e) => e.data), i];
              },
              useMutation: function (e, r) {
                let { client: n, queryClient: i } = l(),
                  s = u(e),
                  a = i.defaultMutationOptions(i.getMutationDefaults(s)),
                  o = (0, g.D)(
                    {
                      ...r,
                      mutationKey: s,
                      mutationFn: (t) => n.mutation(...S([e, { input: t }], r)),
                      onSuccess: (...e) =>
                        t({
                          originalFn: () =>
                            r?.onSuccess?.(...e) ?? a?.onSuccess?.(...e),
                          queryClient: i,
                          meta: r?.meta ?? a?.meta ?? {},
                        }),
                    },
                    i
                  );
                return (o.trpc = R({ path: e })), o;
              },
              useSubscription: function (e, t, r) {
                let n = r?.enabled ?? t !== i.CN,
                  s = (0, i.Ym)(a(e, t, "any")),
                  { client: u } = l(),
                  c = o.useRef(r);
                (c.current = r),
                  o.useEffect(() => {
                    if (!n) return;
                    let r = !1,
                      i = u.subscription(e.join("."), t ?? void 0, {
                        onStarted: () => {
                          r || c.current.onStarted?.();
                        },
                        onData: (e) => {
                          r || c.current.onData(e);
                        },
                        onError: (e) => {
                          r || c.current.onError?.(e);
                        },
                      });
                    return () => {
                      (r = !0), i.unsubscribe();
                    };
                  }, [s, n]);
              },
              useInfiniteQuery: function (e, t, r) {
                let {
                    client: n,
                    ssrState: s,
                    prefetchInfiniteQuery: u,
                    queryClient: o,
                    abortOnUnmount: c,
                  } = l(),
                  p = a(e, t, "infinite"),
                  h = o.getQueryDefaults(p),
                  d = t === i.CN;
                "undefined" != typeof window ||
                  "prepass" !== s ||
                  r?.trpc?.ssr === !1 ||
                  (r?.enabled ?? h?.enabled) === !1 ||
                  d ||
                  o.getQueryCache().find({ queryKey: p }) ||
                  u(p, { ...h, ...r });
                let y = f(p, { ...h, ...r }),
                  m = r?.trpc?.abortOnUnmount ?? c,
                  g = (0, b.N)(
                    {
                      ...y,
                      initialPageParam: r.initialCursor ?? null,
                      persister: r.persister,
                      queryKey: p,
                      queryFn: d
                        ? t
                        : (e) => {
                            let t = {
                              ...y,
                              trpc: {
                                ...y?.trpc,
                                ...(m
                                  ? { signal: e.signal }
                                  : { signal: null }),
                              },
                            };
                            return n.query(
                              ...S(p, t, {
                                pageParam: e.pageParam ?? r.initialCursor,
                                direction: e.direction,
                              })
                            );
                          },
                    },
                    o
                  );
                return (g.trpc = R({ path: e })), g;
              },
              usePrefetchInfiniteQuery: function (e, t, r) {
                let n = l(),
                  s = a(e, t, "infinite"),
                  u = n.queryClient.getQueryDefaults(s),
                  o = t === i.CN,
                  c = f(s, { ...u, ...r }),
                  p = r?.trpc?.abortOnUnmount ?? n.abortOnUnmount;
                !(function (e, t) {
                  let r = (0, h.NL)(void 0);
                  r.getQueryState(e.queryKey) || r.prefetchInfiniteQuery(e);
                })({
                  ...r,
                  initialPageParam: r.initialCursor ?? null,
                  queryKey: s,
                  queryFn: o
                    ? t
                    : (e) => {
                        let t = {
                          ...c,
                          trpc: {
                            ...c?.trpc,
                            ...(p ? { signal: e.signal } : {}),
                          },
                        };
                        return n.client.query(
                          ...S(s, t, {
                            pageParam: e.pageParam ?? r.initialCursor,
                            direction: e.direction,
                          })
                        );
                      },
                });
              },
              useSuspenseInfiniteQuery: function (e, t, r) {
                var n, i;
                let s = l(),
                  u = a(e, t, "infinite"),
                  o = s.queryClient.getQueryDefaults(u),
                  c = f(u, { ...o, ...r }),
                  p = r?.trpc?.abortOnUnmount ?? s.abortOnUnmount,
                  h =
                    ((n = {
                      ...r,
                      initialPageParam: r.initialCursor ?? null,
                      queryKey: u,
                      queryFn: (e) => {
                        let t = {
                          ...c,
                          trpc: {
                            ...c?.trpc,
                            ...(p ? { signal: e.signal } : {}),
                          },
                        };
                        return s.client.query(
                          ...S(u, t, {
                            pageParam: e.pageParam ?? r.initialCursor,
                            direction: e.direction,
                          })
                        );
                      },
                    }),
                    (i = s.queryClient),
                    (0, y.r)(
                      { ...n, enabled: !0, suspense: !0, throwOnError: m.Ct },
                      w.c,
                      i
                    ));
                return (h.trpc = R({ path: e })), [h.data, h];
              },
            };
          })(e)
        );
      }
    },
    49975: function (e, t, r) {
      var n, i;
      r.d(t, {
        yh: function () {
          return o;
        },
        IX: function () {
          return u;
        },
        D0: function () {
          return h;
        },
        Kn: function () {
          return c;
        },
        $N: function () {
          return q;
        },
      });
      let s = () => {},
        a = (e) => {
          Object.freeze && Object.freeze(e);
        },
        u = (e) =>
          (function e(t, r, u) {
            let o = r.join(".");
            return (
              (n = u)[(i = o)] ??
                (n[i] = new Proxy(s, {
                  get(n, i) {
                    if ("string" == typeof i && "then" !== i)
                      return e(t, [...r, i], u);
                  },
                  apply(e, n, i) {
                    let s = r[r.length - 1],
                      u = { args: i, path: r };
                    return (
                      "call" === s
                        ? (u = {
                            args: i.length >= 2 ? [i[1]] : [],
                            path: r.slice(0, -1),
                          })
                        : "apply" === s &&
                          (u = {
                            args: i.length >= 2 ? i[1] : [],
                            path: r.slice(0, -1),
                          }),
                      a(u.args),
                      a(u.path),
                      t(u)
                    );
                  },
                })),
              u[o]
            );
          })(e, [], Object.create(null)),
        o = (e) =>
          new Proxy(s, {
            get(t, r) {
              if ("string" == typeof r && "then" !== r) return e(r);
            },
          });
      function l(e, ...t) {
        let r = Object.assign(Object.create(null), e);
        for (let e of t)
          for (let t in e) {
            if (t in r && r[t] !== e[t]) throw Error(`Duplicate key ${t}`);
            r[t] = e[t];
          }
        return r;
      }
      function c(e) {
        return !!e && !Array.isArray(e) && "object" == typeof e;
      }
      function f(e) {
        return Object.assign(Object.create(null), e);
      }
      Symbol("unsetMarker");
      let p = "function" == typeof Symbol && !!Symbol.asyncIterator;
      function h(e) {
        return p && c(e) && Symbol.asyncIterator in e;
      }
      class d extends Error {}
      function y(e) {
        if (e instanceof m || (e instanceof Error && "TRPCError" === e.name))
          return e;
        let t = new m({ code: "INTERNAL_SERVER_ERROR", cause: e });
        return e instanceof Error && e.stack && (t.stack = e.stack), t;
      }
      class m extends Error {
        constructor(e) {
          let t = (function (e) {
            if (e instanceof Error) return e;
            let t = typeof e;
            if ("undefined" !== t && "function" !== t && null !== e) {
              if ("object" !== t) return Error(String(e));
              if (c(e)) {
                let t = new d();
                for (let r in e) t[r] = e[r];
                return t;
              }
            }
          })(e.cause);
          super(e.message ?? t?.message ?? e.code, { cause: t }),
            (this.code = e.code),
            (this.name = "TRPCError"),
            this.cause || (this.cause = t);
        }
      }
      function g() {
        let e, t;
        return {
          promise: new Promise((r, n) => {
            (e = r), (t = n);
          }),
          resolve: e,
          reject: t,
        };
      }
      let b = Symbol("cancelledReadableStream");
      function w() {
        let e = null,
          t = g(),
          r = !1;
        return {
          readable: new ReadableStream({
            start(t) {
              e = t;
            },
            cancel() {
              t.resolve(b), (r = !0);
            },
          }),
          controller: e,
          cancelledPromise: t.promise,
          cancelled: () => r,
        };
      }
      class v extends Error {
        constructor(e) {
          super("Invalid response or stream interrupted", { cause: e });
        }
      }
      class O extends Error {
        constructor(e) {
          super("Received error from server"), (this.data = e);
        }
      }
      let E = (e) => ({
        getReader() {
          let { readable: t, controller: r } = w();
          return (
            e.on("data", (e) => {
              r.enqueue(e);
            }),
            e.on("end", () => {
              r.close();
            }),
            e.on("error", (e) => {
              r.error(e);
            }),
            t.getReader()
          );
        },
      });
      async function q(e) {
        let { deserialize: t = (e) => e } = e,
          r = (function (e) {
            let t = (function (e) {
                let t = "getReader" in e ? e.getReader() : E(e).getReader(),
                  r = "";
                return new ReadableStream({
                  async pull(e) {
                    let { done: r, value: n } = await t.read();
                    r ? e.close() : e.enqueue(n);
                  },
                  cancel: () => t.cancel(),
                })
                  .pipeThrough(new TextDecoderStream())
                  .pipeThrough(
                    new TransformStream({
                      transform(e, t) {
                        let n = (r += e).split("\n");
                        for (let e of ((r = n.pop() ?? ""), n)) t.enqueue(e);
                      },
                    })
                  );
              })(e),
              r = !1;
            return t.pipeThrough(
              new TransformStream({
                transform(e, t) {
                  if (r) {
                    let r = JSON.parse(e);
                    t.enqueue(r);
                  } else {
                    let n = JSON.parse(e);
                    t.enqueue(n), (r = !0);
                  }
                },
              })
            );
          })(e.from);
        t &&
          (r = r.pipeThrough(
            new TransformStream({
              transform(e, r) {
                r.enqueue(t(e));
              },
            })
          ));
        let n = g(),
          i = new Map(),
          s = new Map(),
          a = () => {
            0 === i.size &&
              Array.from(s.values()).every((e) => e.returned) &&
              e.abortController?.abort();
          },
          u = (e) => {
            let t = new v(e);
            for (let e of (n?.reject(t), i.values())) e.reject(t);
            for (let { controller: e } of (i.clear(), s.values()))
              e.enqueue(t), e.close();
            s.clear();
          };
        return (
          r
            .pipeTo(
              new WritableStream({
                async write(t) {
                  if (n) {
                    for (let [r, n] of Object.entries(t)) {
                      let u = (function t(r) {
                        let [[n], ...u] = r;
                        for (let r of u) {
                          let [u] = r,
                            o = (function (r) {
                              let [n, u, o] = r,
                                { readable: l, controller: c } = w(),
                                f = { controller: c, returned: !1 };
                              s.set(o, f);
                              let p = i.get(o);
                              switch ((p && (p.resolve(f), i.delete(o)), u)) {
                                case 0:
                                  return new Promise((r, n) => {
                                    l.getReader()
                                      .read()
                                      .then((i) => {
                                        if (i.done) {
                                          n(
                                            Error(
                                              "Promise chunk ended without value"
                                            )
                                          );
                                          return;
                                        }
                                        if (i.value instanceof v) {
                                          n(i.value);
                                          return;
                                        }
                                        let [s, a, u] = i.value;
                                        switch (a) {
                                          case 0:
                                            r(t(u));
                                            break;
                                          case 1:
                                            n(
                                              e.formatError?.({ error: u }) ??
                                                new O(u)
                                            );
                                        }
                                      })
                                      .catch(n)
                                      .finally(() => {
                                        s.delete(o), a();
                                      });
                                  });
                                case 1:
                                  return {
                                    [Symbol.asyncIterator]: () => {
                                      let r = l.getReader();
                                      return {
                                        next: async () => {
                                          let { done: n, value: i } =
                                            await r.read();
                                          if (i instanceof v) throw i;
                                          if (n)
                                            return (
                                              s.delete(o),
                                              a(),
                                              { done: !0, value: void 0 }
                                            );
                                          let [u, l, c] = i;
                                          switch (l) {
                                            case 1:
                                              return { done: !1, value: t(c) };
                                            case 0:
                                              return (
                                                s.delete(o),
                                                a(),
                                                { done: !0, value: t(c) }
                                              );
                                            case 2:
                                              throw (
                                                (s.delete(o),
                                                a(),
                                                e.formatError?.({ error: c }) ??
                                                  new O(c))
                                              );
                                          }
                                        },
                                        return: async () => (
                                          (f.returned = !0),
                                          a(),
                                          { done: !0, value: void 0 }
                                        ),
                                      };
                                    },
                                  };
                              }
                            })(r);
                          if (null === u) return o;
                          n[u] = o;
                        }
                        return n;
                      })(n);
                      t[r] = u;
                    }
                    n.resolve(t), (n = null);
                    return;
                  }
                  let [r] = t,
                    u = s.get(r);
                  if (!u) {
                    let e = i.get(r);
                    e || ((e = g()), i.set(r, e)), (u = await e.promise);
                  }
                  u.controller.enqueue(t);
                },
                close: u,
                abort: u,
              })
            )
            .catch((t) => {
              e.onError?.({ error: t }), u(t);
            }),
          [await n.promise, { controllers: s }]
        );
      }
      Symbol("TrackedEnvelope");
      let Q = {
          input: { serialize: (e) => e, deserialize: (e) => e },
          output: { serialize: (e) => e, deserialize: (e) => e },
        },
        C = ({ shape: e }) => e,
        x = "middlewareMarker";
      function D(e) {
        if ("function" == typeof e && "function" == typeof e.assert)
          return e.assert.bind(e);
        if ("function" == typeof e) return e;
        if ("function" == typeof e.parseAsync) return e.parseAsync.bind(e);
        if ("function" == typeof e.parse) return e.parse.bind(e);
        if ("function" == typeof e.validateSync) return e.validateSync.bind(e);
        if ("function" == typeof e.create) return e.create.bind(e);
        if ("function" == typeof e.assert) return (t) => (e.assert(t), t);
        throw Error("Could not find a validator fn");
      }
      function S(e, t) {
        let { middlewares: r = [], inputs: n, meta: i, ...s } = t;
        return R({
          ...l(e, s),
          inputs: [...e.inputs, ...(n ?? [])],
          middlewares: [...e.middlewares, ...r],
          meta: e.meta && i ? { ...e.meta, ...i } : i ?? e.meta,
        });
      }
      function R(e = {}) {
        let t = { procedure: !0, inputs: [], middlewares: [], ...e };
        return {
          _def: t,
          input(e) {
            let r = D(e);
            return S(t, {
              inputs: [e],
              middlewares: [
                (function (e) {
                  let t = async function (t) {
                    let r;
                    let n = await t.getRawInput();
                    try {
                      r = await e(n);
                    } catch (e) {
                      throw new m({ code: "BAD_REQUEST", cause: e });
                    }
                    let i = c(t.input) && c(r) ? { ...t.input, ...r } : r;
                    return t.next({ input: i });
                  };
                  return (t._type = "input"), t;
                })(r),
              ],
            });
          },
          output(e) {
            let r = D(e);
            return S(t, {
              output: e,
              middlewares: [
                (function (e) {
                  let t = async function ({ next: t }) {
                    let r = await t();
                    if (!r.ok) return r;
                    try {
                      let t = await e(r.data);
                      return { ...r, data: t };
                    } catch (e) {
                      throw new m({
                        message: "Output validation failed",
                        code: "INTERNAL_SERVER_ERROR",
                        cause: e,
                      });
                    }
                  };
                  return (t._type = "output"), t;
                })(r),
              ],
            });
          },
          meta: (e) => S(t, { meta: e }),
          use: (e) =>
            S(t, { middlewares: "_middlewares" in e ? e._middlewares : [e] }),
          unstable_concat: (e) => S(t, e._def),
          query: (e) => I({ ...t, type: "query" }, e),
          mutation: (e) => I({ ...t, type: "mutation" }, e),
          subscription: (e) => I({ ...t, type: "subscription" }, e),
          experimental_caller: (e) => S(t, { caller: e }),
        };
      }
      function I(e, t) {
        let r = S(e, {
            resolver: t,
            middlewares: [
              async function (e) {
                return { marker: x, ok: !0, data: await t(e), ctx: e.ctx };
              },
            ],
          }),
          n = {
            ...r._def,
            type: e.type,
            experimental_caller: !!r._def.caller,
            meta: r._def.meta,
            $types: null,
          },
          i = (function (e) {
            async function t(t) {
              if (!t || !("getRawInput" in t)) throw Error(_);
              async function r(n = { index: 0, ctx: t.ctx }) {
                try {
                  let i = e.middlewares[n.index];
                  return await i({
                    ctx: n.ctx,
                    type: t.type,
                    path: t.path,
                    getRawInput: n.getRawInput ?? t.getRawInput,
                    meta: e.meta,
                    input: n.input,
                    next: (e) =>
                      r({
                        index: n.index + 1,
                        ctx: e && "ctx" in e ? { ...n.ctx, ...e.ctx } : n.ctx,
                        input: e && "input" in e ? e.input : n.input,
                        getRawInput:
                          e && "getRawInput" in e
                            ? e.getRawInput
                            : n.getRawInput,
                      }),
                  });
                } catch (e) {
                  return { ok: !1, error: y(e), marker: x };
                }
              }
              let n = await r();
              if (!n)
                throw new m({
                  code: "INTERNAL_SERVER_ERROR",
                  message:
                    "No result from middlewares - did you forget to `return next()`?",
                });
              if (!n.ok) throw n.error;
              return n.data;
            }
            return (t._def = e), t;
          })(r._def),
          s = r._def.caller;
        if (!s) return i;
        let a = async (...e) => await s({ args: e, invoke: i, _def: n });
        return (a._def = n), a;
      }
      let _ = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim(),
        P =
          "undefined" == typeof window ||
          "Deno" in window ||
          globalThis.process?.env?.NODE_ENV === "test" ||
          !!globalThis.process?.env?.JEST_WORKER_ID ||
          !!globalThis.process?.env?.VITEST_WORKER_ID,
        T = {
          _ctx: null,
          _errorShape: null,
          _meta: null,
          queries: {},
          mutations: {},
          subscriptions: {},
          errorFormatter: C,
          transformer: Q,
        },
        k = ["then", "call", "apply"];
      function j(e) {
        return function (t) {
          let r = new Set(Object.keys(t).filter((e) => k.includes(e)));
          if (r.size > 0)
            throw Error(
              "Reserved words used in `router({})` call: " +
                Array.from(r).join(", ")
            );
          let n = f({}),
            i = (function e(t, r = []) {
              let i = f({});
              for (let [s, a] of Object.entries(t ?? {})) {
                if (a._def && "router" in a._def) {
                  i[s] = e(a._def.record, [...r, s]);
                  continue;
                }
                if ("function" != typeof a) {
                  i[s] = e(a, [...r, s]);
                  continue;
                }
                let t = [...r, s].join(".");
                if (n[t]) throw Error(`Duplicate key: ${t}`);
                (n[t] = a), (i[s] = a);
              }
              return i;
            })(t),
            s = { _config: e, router: !0, procedures: n, ...T, record: i };
          return { ...i, _def: s, createCaller: A()({ _def: s }) };
        };
      }
      function A() {
        return function (e) {
          let t = e._def;
          return function (e, r) {
            return u(async ({ path: n, args: i }) => {
              let s;
              let a = n.join(".");
              if (1 === n.length && "_def" === n[0]) return t;
              let u = t.procedures[a];
              try {
                return (
                  (s = "function" == typeof e ? await Promise.resolve(e()) : e),
                  await u({
                    path: a,
                    getRawInput: async () => i[0],
                    ctx: s,
                    type: u._def.type,
                  })
                );
              } catch (e) {
                throw (
                  (r?.onError?.({
                    ctx: s,
                    error: y(e),
                    input: i[0],
                    path: a,
                    type: u._def.type,
                  }),
                  e)
                );
              }
            });
          };
        };
      }
      function M(...e) {
        let t = l({}, ...e.map((e) => e._def.record));
        return j({
          errorFormatter: e.reduce((e, t) => {
            if (
              t._def._config.errorFormatter &&
              t._def._config.errorFormatter !== C
            ) {
              if (e !== C && e !== t._def._config.errorFormatter)
                throw Error("You seem to have several error formatters");
              return t._def._config.errorFormatter;
            }
            return e;
          }, C),
          transformer: e.reduce((e, t) => {
            if (
              t._def._config.transformer &&
              t._def._config.transformer !== Q
            ) {
              if (e !== Q && e !== t._def._config.transformer)
                throw Error("You seem to have several transformers");
              return t._def._config.transformer;
            }
            return e;
          }, Q),
          isDev: e.every((e) => e._def._config.isDev),
          allowOutsideOfServer: e.every(
            (e) => e._def._config.allowOutsideOfServer
          ),
          isServer: e.every((e) => e._def._config.isServer),
          $types: e[0]?._def._config.$types,
        })(t);
      }
      class N {
        context() {
          return new N();
        }
        meta() {
          return new N();
        }
        create(e) {
          var t;
          let r = {
            transformer:
              "input" in (t = e?.transformer ?? Q)
                ? t
                : { input: t, output: t },
            isDev:
              e?.isDev ?? globalThis.process?.env.NODE_ENV !== "production",
            allowOutsideOfServer: e?.allowOutsideOfServer ?? !1,
            errorFormatter: e?.errorFormatter ?? C,
            isServer: e?.isServer ?? P,
            $types: null,
            experimental: e?.experimental ?? {},
          };
          if (!(e?.isServer ?? P) && e?.allowOutsideOfServer !== !0)
            throw Error(
              "You're trying to use @trpc/server in a non-server environment. This is not supported by default."
            );
          return {
            _config: r,
            procedure: R({ meta: e?.defaultMeta }),
            middleware: function (e) {
              return (function e(t) {
                return {
                  _middlewares: t,
                  unstable_pipe: (r) =>
                    e([...t, ...("_middlewares" in r ? r._middlewares : [r])]),
                };
              })([e]);
            },
            router: j(r),
            mergeRouters: M,
            createCallerFactory: A(),
          };
        }
      }
      new N(), Symbol("TypeError");
    },
    48080: function (e, t, r) {
      var n, i;
      r.d(t, {
        ZP: function () {
          return Y;
        },
      });
      class s {
        constructor() {
          (this.keyToValue = new Map()), (this.valueToKey = new Map());
        }
        set(e, t) {
          this.keyToValue.set(e, t), this.valueToKey.set(t, e);
        }
        getByKey(e) {
          return this.keyToValue.get(e);
        }
        getByValue(e) {
          return this.valueToKey.get(e);
        }
        clear() {
          this.keyToValue.clear(), this.valueToKey.clear();
        }
      }
      class a {
        constructor(e) {
          (this.generateIdentifier = e), (this.kv = new s());
        }
        register(e, t) {
          this.kv.getByValue(e) ||
            (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
        }
        clear() {
          this.kv.clear();
        }
        getIdentifier(e) {
          return this.kv.getByValue(e);
        }
        getValue(e) {
          return this.kv.getByKey(e);
        }
      }
      class u extends a {
        constructor() {
          super((e) => e.name), (this.classToAllowedProps = new Map());
        }
        register(e, t) {
          "object" == typeof t
            ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps),
              super.register(e, t.identifier))
            : super.register(e, t);
        }
        getAllowedProps(e) {
          return this.classToAllowedProps.get(e);
        }
      }
      function o(e, t) {
        Object.entries(e).forEach(([e, r]) => t(r, e));
      }
      function l(e, t) {
        return -1 !== e.indexOf(t);
      }
      function c(e, t) {
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          if (t(n)) return n;
        }
      }
      class f {
        constructor() {
          this.transfomers = {};
        }
        register(e) {
          this.transfomers[e.name] = e;
        }
        findApplicable(e) {
          return (function (e, t) {
            let r = (function (e) {
              if ("values" in Object) return Object.values(e);
              let t = [];
              for (let r in e) e.hasOwnProperty(r) && t.push(e[r]);
              return t;
            })(e);
            if ("find" in r) return r.find(t);
            for (let e = 0; e < r.length; e++) {
              let n = r[e];
              if (t(n)) return n;
            }
          })(this.transfomers, (t) => t.isApplicable(e));
        }
        findByName(e) {
          return this.transfomers[e];
        }
      }
      let p = (e) => Object.prototype.toString.call(e).slice(8, -1),
        h = (e) => void 0 === e,
        d = (e) => null === e,
        y = (e) =>
          "object" == typeof e &&
          null !== e &&
          e !== Object.prototype &&
          (null === Object.getPrototypeOf(e) ||
            Object.getPrototypeOf(e) === Object.prototype),
        m = (e) => y(e) && 0 === Object.keys(e).length,
        g = (e) => Array.isArray(e),
        b = (e) => "string" == typeof e,
        w = (e) => "number" == typeof e && !isNaN(e),
        v = (e) => "boolean" == typeof e,
        O = (e) => e instanceof Map,
        E = (e) => e instanceof Set,
        q = (e) => "Symbol" === p(e),
        Q = (e) => "number" == typeof e && isNaN(e),
        C = (e) => v(e) || d(e) || h(e) || w(e) || b(e) || q(e),
        x = (e) => e === 1 / 0 || e === -1 / 0,
        D = (e) => e.replace(/\./g, "\\."),
        S = (e) => e.map(String).map(D).join("."),
        R = (e) => {
          let t = [],
            r = "";
          for (let n = 0; n < e.length; n++) {
            let i = e.charAt(n);
            if ("\\" === i && "." === e.charAt(n + 1)) {
              (r += "."), n++;
              continue;
            }
            if ("." === i) {
              t.push(r), (r = "");
              continue;
            }
            r += i;
          }
          let n = r;
          return t.push(n), t;
        };
      function I(e, t, r, n) {
        return { isApplicable: e, annotation: t, transform: r, untransform: n };
      }
      let _ = [
        I(
          h,
          "undefined",
          () => null,
          () => void 0
        ),
        I(
          (e) => "bigint" == typeof e,
          "bigint",
          (e) => e.toString(),
          (e) =>
            "undefined" != typeof BigInt
              ? BigInt(e)
              : (console.error("Please add a BigInt polyfill."), e)
        ),
        I(
          (e) => e instanceof Date && !isNaN(e.valueOf()),
          "Date",
          (e) => e.toISOString(),
          (e) => new Date(e)
        ),
        I(
          (e) => e instanceof Error,
          "Error",
          (e, t) => {
            let r = { name: e.name, message: e.message };
            return (
              t.allowedErrorProps.forEach((t) => {
                r[t] = e[t];
              }),
              r
            );
          },
          (e, t) => {
            let r = Error(e.message);
            return (
              (r.name = e.name),
              (r.stack = e.stack),
              t.allowedErrorProps.forEach((t) => {
                r[t] = e[t];
              }),
              r
            );
          }
        ),
        I(
          (e) => e instanceof RegExp,
          "regexp",
          (e) => "" + e,
          (e) =>
            new RegExp(
              e.slice(1, e.lastIndexOf("/")),
              e.slice(e.lastIndexOf("/") + 1)
            )
        ),
        I(
          E,
          "set",
          (e) => [...e.values()],
          (e) => new Set(e)
        ),
        I(
          O,
          "map",
          (e) => [...e.entries()],
          (e) => new Map(e)
        ),
        I(
          (e) => Q(e) || x(e),
          "number",
          (e) => (Q(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity"),
          Number
        ),
        I(
          (e) => 0 === e && 1 / e == -1 / 0,
          "number",
          () => "-0",
          Number
        ),
        I(
          (e) => e instanceof URL,
          "URL",
          (e) => e.toString(),
          (e) => new URL(e)
        ),
      ];
      function P(e, t, r, n) {
        return { isApplicable: e, annotation: t, transform: r, untransform: n };
      }
      let T = P(
          (e, t) => !!q(e) && !!t.symbolRegistry.getIdentifier(e),
          (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)],
          (e) => e.description,
          (e, t, r) => {
            let n = r.symbolRegistry.getValue(t[1]);
            if (!n) throw Error("Trying to deserialize unknown symbol");
            return n;
          }
        ),
        k = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          Uint8ClampedArray,
        ].reduce((e, t) => ((e[t.name] = t), e), {}),
        j = P(
          (e) => ArrayBuffer.isView(e) && !(e instanceof DataView),
          (e) => ["typed-array", e.constructor.name],
          (e) => [...e],
          (e, t) => {
            let r = k[t[1]];
            if (!r) throw Error("Trying to deserialize unknown typed array");
            return new r(e);
          }
        );
      function A(e, t) {
        return (
          !!e?.constructor && !!t.classRegistry.getIdentifier(e.constructor)
        );
      }
      let M = P(
          A,
          (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)],
          (e, t) => {
            let r = t.classRegistry.getAllowedProps(e.constructor);
            if (!r) return { ...e };
            let n = {};
            return (
              r.forEach((t) => {
                n[t] = e[t];
              }),
              n
            );
          },
          (e, t, r) => {
            let n = r.classRegistry.getValue(t[1]);
            if (!n)
              throw Error(
                "Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564"
              );
            return Object.assign(Object.create(n.prototype), e);
          }
        ),
        N = P(
          (e, t) => !!t.customTransformerRegistry.findApplicable(e),
          (e, t) => [
            "custom",
            t.customTransformerRegistry.findApplicable(e).name,
          ],
          (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e),
          (e, t, r) => {
            let n = r.customTransformerRegistry.findByName(t[1]);
            if (!n) throw Error("Trying to deserialize unknown custom value");
            return n.deserialize(e);
          }
        ),
        K = [M, T, N, j],
        V = (e, t) => {
          let r = c(K, (r) => r.isApplicable(e, t));
          if (r) return { value: r.transform(e, t), type: r.annotation(e, t) };
          let n = c(_, (r) => r.isApplicable(e, t));
          if (n) return { value: n.transform(e, t), type: n.annotation };
        },
        z = {};
      _.forEach((e) => {
        z[e.annotation] = e;
      });
      let F = (e, t, r) => {
          if (g(t))
            switch (t[0]) {
              case "symbol":
                return T.untransform(e, t, r);
              case "class":
                return M.untransform(e, t, r);
              case "custom":
                return N.untransform(e, t, r);
              case "typed-array":
                return j.untransform(e, t, r);
              default:
                throw Error("Unknown transformation: " + t);
            }
          else {
            let n = z[t];
            if (!n) throw Error("Unknown transformation: " + t);
            return n.untransform(e, r);
          }
        },
        U = (e, t) => {
          let r = e.keys();
          for (; t > 0; ) r.next(), t--;
          return r.next().value;
        };
      function H(e) {
        if (l(e, "__proto__"))
          throw Error("__proto__ is not allowed as a property");
        if (l(e, "prototype"))
          throw Error("prototype is not allowed as a property");
        if (l(e, "constructor"))
          throw Error("constructor is not allowed as a property");
      }
      let $ = (e, t) => {
          H(t);
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            if (E(e)) e = U(e, +n);
            else if (O(e)) {
              let i = +n,
                s = 0 == +t[++r] ? "key" : "value",
                a = U(e, i);
              switch (s) {
                case "key":
                  e = a;
                  break;
                case "value":
                  e = e.get(a);
              }
            } else e = e[n];
          }
          return e;
        },
        B = (e, t, r) => {
          if ((H(t), 0 === t.length)) return r(e);
          let n = e;
          for (let e = 0; e < t.length - 1; e++) {
            let r = t[e];
            if (g(n)) n = n[+r];
            else if (y(n)) n = n[r];
            else if (E(n)) n = U(n, +r);
            else if (O(n)) {
              if (e === t.length - 2) break;
              let i = +r,
                s = 0 == +t[++e] ? "key" : "value",
                a = U(n, i);
              switch (s) {
                case "key":
                  n = a;
                  break;
                case "value":
                  n = n.get(a);
              }
            }
          }
          let i = t[t.length - 1];
          if ((g(n) ? (n[+i] = r(n[+i])) : y(n) && (n[i] = r(n[i])), E(n))) {
            let e = U(n, +i),
              t = r(e);
            e !== t && (n.delete(e), n.add(t));
          }
          if (O(n)) {
            let e = U(n, +t[t.length - 2]);
            switch (0 == +i ? "key" : "value") {
              case "key": {
                let t = r(e);
                n.set(t, n.get(e)), t !== e && n.delete(e);
                break;
              }
              case "value":
                n.set(e, r(n.get(e)));
            }
          }
          return e;
        },
        L = (e, t) => y(e) || g(e) || O(e) || E(e) || A(e, t),
        Z = (e, t, r, n, i = [], s = [], a = new Map()) => {
          let u = C(e);
          if (!u) {
            !(function (e, t, r) {
              let n = r.get(e);
              n ? n.push(t) : r.set(e, [t]);
            })(e, i, t);
            let r = a.get(e);
            if (r) return n ? { transformedValue: null } : r;
          }
          if (!L(e, r)) {
            let t = V(e, r),
              n = t
                ? { transformedValue: t.value, annotations: [t.type] }
                : { transformedValue: e };
            return u || a.set(e, n), n;
          }
          if (l(s, e)) return { transformedValue: null };
          let c = V(e, r),
            f = c?.value ?? e,
            p = g(f) ? [] : {},
            h = {};
          o(f, (u, l) => {
            if ("__proto__" === l || "constructor" === l || "prototype" === l)
              throw Error(
                `Detected property ${l}. This is a prototype pollution risk, please remove it from your object.`
              );
            let c = Z(u, t, r, n, [...i, l], [...s, e], a);
            (p[l] = c.transformedValue),
              g(c.annotations)
                ? (h[l] = c.annotations)
                : y(c.annotations) &&
                  o(c.annotations, (e, t) => {
                    h[D(l) + "." + t] = e;
                  });
          });
          let d = m(h)
            ? { transformedValue: p, annotations: c ? [c.type] : void 0 }
            : { transformedValue: p, annotations: c ? [c.type, h] : h };
          return u || a.set(e, d), d;
        };
      function J(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }
      function X(e) {
        return "Array" === J(e);
      }
      (n = function (e) {
        return "Null" === J(e);
      }),
        (i = function (e) {
          return "Undefined" === J(e);
        }),
        (e) => n(e) || i(e) || !1;
      class Y {
        constructor({ dedupe: e = !1 } = {}) {
          (this.classRegistry = new u()),
            (this.symbolRegistry = new a((e) => e.description ?? "")),
            (this.customTransformerRegistry = new f()),
            (this.allowedErrorProps = []),
            (this.dedupe = e);
        }
        serialize(e) {
          let t = new Map(),
            r = Z(e, t, this, this.dedupe),
            n = { json: r.transformedValue };
          r.annotations && (n.meta = { ...n.meta, values: r.annotations });
          let i = (function (e, t) {
            let r;
            let n = {};
            return (e.forEach((e) => {
              if (e.length <= 1) return;
              t ||
                (e = e
                  .map((e) => e.map(String))
                  .sort((e, t) => e.length - t.length));
              let [i, ...s] = e;
              0 === i.length ? (r = s.map(S)) : (n[S(i)] = s.map(S));
            }),
            r)
              ? m(n)
                ? [r]
                : [r, n]
              : m(n)
              ? void 0
              : n;
          })(t, this.dedupe);
          return i && (n.meta = { ...n.meta, referentialEqualities: i }), n;
        }
        deserialize(e) {
          let { json: t, meta: r } = e,
            n = (function e(t, r = {}) {
              return X(t)
                ? t.map((t) => e(t, r))
                : !(function (e) {
                    if ("Object" !== J(e)) return !1;
                    let t = Object.getPrototypeOf(e);
                    return (
                      !!t && t.constructor === Object && t === Object.prototype
                    );
                  })(t)
                ? t
                : [
                    ...Object.getOwnPropertyNames(t),
                    ...Object.getOwnPropertySymbols(t),
                  ].reduce((n, i) => {
                    if (X(r.props) && !r.props.includes(i)) return n;
                    let s = e(t[i], r);
                    return (
                      !(function (e, t, r, n, i) {
                        let s = {}.propertyIsEnumerable.call(n, t)
                          ? "enumerable"
                          : "nonenumerable";
                        "enumerable" === s && (e[t] = r),
                          i &&
                            "nonenumerable" === s &&
                            Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !1,
                              writable: !0,
                              configurable: !0,
                            });
                      })(n, i, s, t, r.nonenumerable),
                      n
                    );
                  }, {});
            })(t);
          if (r?.values) {
            var i, s, a;
            (i = n),
              (s = r.values),
              (a = this),
              (function e(t, r, n = []) {
                if (!t) return;
                if (!g(t)) {
                  o(t, (t, i) => e(t, r, [...n, ...R(i)]));
                  return;
                }
                let [i, s] = t;
                s &&
                  o(s, (t, i) => {
                    e(t, r, [...n, ...R(i)]);
                  }),
                  r(i, n);
              })(s, (e, t) => {
                i = B(i, t, (t) => F(t, e, a));
              }),
              (n = i);
          }
          return (
            r?.referentialEqualities &&
              (n = (function (e, t) {
                function r(t, r) {
                  let n = $(e, R(r));
                  t.map(R).forEach((t) => {
                    e = B(e, t, () => n);
                  });
                }
                if (g(t)) {
                  let [n, i] = t;
                  n.forEach((t) => {
                    e = B(e, R(t), () => e);
                  }),
                    i && o(i, r);
                } else o(t, r);
                return e;
              })(n, r.referentialEqualities)),
            n
          );
        }
        stringify(e) {
          return JSON.stringify(this.serialize(e));
        }
        parse(e) {
          return this.deserialize(JSON.parse(e));
        }
        registerClass(e, t) {
          this.classRegistry.register(e, t);
        }
        registerSymbol(e, t) {
          this.symbolRegistry.register(e, t);
        }
        registerCustom(e, t) {
          this.customTransformerRegistry.register({ name: t, ...e });
        }
        allowErrorProps(...e) {
          this.allowedErrorProps.push(...e);
        }
      }
      (Y.defaultInstance = new Y()),
        (Y.serialize = Y.defaultInstance.serialize.bind(Y.defaultInstance)),
        (Y.deserialize = Y.defaultInstance.deserialize.bind(Y.defaultInstance)),
        (Y.stringify = Y.defaultInstance.stringify.bind(Y.defaultInstance)),
        (Y.parse = Y.defaultInstance.parse.bind(Y.defaultInstance)),
        (Y.registerClass = Y.defaultInstance.registerClass.bind(
          Y.defaultInstance
        )),
        (Y.registerSymbol = Y.defaultInstance.registerSymbol.bind(
          Y.defaultInstance
        )),
        (Y.registerCustom = Y.defaultInstance.registerCustom.bind(
          Y.defaultInstance
        )),
        (Y.allowErrorProps = Y.defaultInstance.allowErrorProps.bind(
          Y.defaultInstance
        )),
        Y.serialize,
        Y.deserialize,
        Y.stringify,
        Y.parse,
        Y.registerClass,
        Y.registerCustom,
        Y.registerSymbol,
        Y.allowErrorProps;
    },
  },
]);
