"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4735],
  {
    21636: function (t, e, s) {
      s.d(e, {
        Gm: function () {
          return i;
        },
        Qy: function () {
          return u;
        },
        ZF: function () {
          return o;
        },
      });
      var r = s(45345);
      function i(t) {
        return {
          onFetch: (e, s) => {
            let i = e.options,
              u = e.fetchOptions?.meta?.fetchMore?.direction,
              o = e.state.data?.pages || [],
              h = e.state.data?.pageParams || [],
              c = { pages: [], pageParams: [] },
              l = 0,
              d = async () => {
                let s = !1,
                  d = (t) => {
                    Object.defineProperty(t, "signal", {
                      enumerable: !0,
                      get: () => (
                        e.signal.aborted
                          ? (s = !0)
                          : e.signal.addEventListener("abort", () => {
                              s = !0;
                            }),
                        e.signal
                      ),
                    });
                  },
                  p = (0, r.cG)(e.options, e.fetchOptions),
                  f = async (t, i, n) => {
                    if (s) return Promise.reject();
                    if (null == i && t.pages.length) return Promise.resolve(t);
                    let a = {
                      queryKey: e.queryKey,
                      pageParam: i,
                      direction: n ? "backward" : "forward",
                      meta: e.options.meta,
                    };
                    d(a);
                    let u = await p(a),
                      { maxPages: o } = e.options,
                      h = n ? r.Ht : r.VX;
                    return {
                      pages: h(t.pages, u, o),
                      pageParams: h(t.pageParams, i, o),
                    };
                  };
                if (u && o.length) {
                  let t = "backward" === u,
                    e = { pages: o, pageParams: h },
                    s = (t ? a : n)(i, e);
                  c = await f(e, s, t);
                } else {
                  let e = t ?? o.length;
                  do {
                    let t = 0 === l ? h[0] ?? i.initialPageParam : n(i, c);
                    if (l > 0 && null == t) break;
                    (c = await f(c, t)), l++;
                  } while (l < e);
                }
                return c;
              };
            e.options.persister
              ? (e.fetchFn = () =>
                  e.options.persister?.(
                    d,
                    {
                      queryKey: e.queryKey,
                      meta: e.options.meta,
                      signal: e.signal,
                    },
                    s
                  ))
              : (e.fetchFn = d);
          },
        };
      }
      function n(t, { pages: e, pageParams: s }) {
        let r = e.length - 1;
        return e.length > 0 ? t.getNextPageParam(e[r], e, s[r], s) : void 0;
      }
      function a(t, { pages: e, pageParams: s }) {
        return e.length > 0
          ? t.getPreviousPageParam?.(e[0], e, s[0], s)
          : void 0;
      }
      function u(t, e) {
        return !!e && null != n(t, e);
      }
      function o(t, e) {
        return !!e && !!t.getPreviousPageParam && null != a(t, e);
      }
    },
    63611: function (t, e, s) {
      s.d(e, {
        c: function () {
          return n;
        },
      });
      var r = s(86900),
        i = s(21636),
        n = class extends r.z {
          constructor(t, e) {
            super(t, e);
          }
          bindMethods() {
            super.bindMethods(),
              (this.fetchNextPage = this.fetchNextPage.bind(this)),
              (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
          }
          setOptions(t, e) {
            super.setOptions({ ...t, behavior: (0, i.Gm)() }, e);
          }
          getOptimisticResult(t) {
            return (t.behavior = (0, i.Gm)()), super.getOptimisticResult(t);
          }
          fetchNextPage(t) {
            return this.fetch({
              ...t,
              meta: { fetchMore: { direction: "forward" } },
            });
          }
          fetchPreviousPage(t) {
            return this.fetch({
              ...t,
              meta: { fetchMore: { direction: "backward" } },
            });
          }
          createResult(t, e) {
            let { state: s } = t,
              r = super.createResult(t, e),
              {
                isFetching: n,
                isRefetching: a,
                isError: u,
                isRefetchError: o,
              } = r,
              h = s.fetchMeta?.fetchMore?.direction,
              c = u && "forward" === h,
              l = n && "forward" === h,
              d = u && "backward" === h,
              p = n && "backward" === h;
            return {
              ...r,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, i.Qy)(e, s.data),
              hasPreviousPage: (0, i.ZF)(e, s.data),
              isFetchNextPageError: c,
              isFetchingNextPage: l,
              isFetchPreviousPageError: d,
              isFetchingPreviousPage: p,
              isRefetchError: o && !c && !d,
              isRefetching: a && !l && !p,
            };
          }
        };
    },
    21733: function (t, e, s) {
      s.d(e, {
        A: function () {
          return u;
        },
        z: function () {
          return o;
        },
      });
      var r = s(45345),
        i = s(18238),
        n = s(11255),
        a = s(7989),
        u = class extends a.F {
          #t;
          #e;
          #s;
          #r;
          #i;
          #n;
          constructor(t) {
            super(),
              (this.#n = !1),
              (this.#i = t.defaultOptions),
              this.setOptions(t.options),
              (this.observers = []),
              (this.#s = t.cache),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              (this.#t = (function (t) {
                let e =
                    "function" == typeof t.initialData
                      ? t.initialData()
                      : t.initialData,
                  s = void 0 !== e,
                  r = s
                    ? "function" == typeof t.initialDataUpdatedAt
                      ? t.initialDataUpdatedAt()
                      : t.initialDataUpdatedAt
                    : 0;
                return {
                  data: e,
                  dataUpdateCount: 0,
                  dataUpdatedAt: s ? r ?? Date.now() : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: s ? "success" : "pending",
                  fetchStatus: "idle",
                };
              })(this.options)),
              (this.state = t.state ?? this.#t),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#r?.promise;
          }
          setOptions(t) {
            (this.options = { ...this.#i, ...t }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#s.remove(this);
          }
          setData(t, e) {
            let s = (0, r.oE)(this.state.data, t, this.options);
            return (
              this.#a({
                data: s,
                type: "success",
                dataUpdatedAt: e?.updatedAt,
                manual: e?.manual,
              }),
              s
            );
          }
          setState(t, e) {
            this.#a({ type: "setState", state: t, setStateOptions: e });
          }
          cancel(t) {
            let e = this.#r?.promise;
            return (
              this.#r?.cancel(t),
              e ? e.then(r.ZT).catch(r.ZT) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#t);
          }
          isActive() {
            return this.observers.some(
              (t) => !1 !== (0, r.Nc)(t.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive();
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((t) => t.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(t = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !(0, r.Kp)(this.state.dataUpdatedAt, t)
            );
          }
          onFocus() {
            let t = this.observers.find((t) => t.shouldFetchOnWindowFocus());
            t?.refetch({ cancelRefetch: !1 }), this.#r?.continue();
          }
          onOnline() {
            let t = this.observers.find((t) => t.shouldFetchOnReconnect());
            t?.refetch({ cancelRefetch: !1 }), this.#r?.continue();
          }
          addObserver(t) {
            this.observers.includes(t) ||
              (this.observers.push(t),
              this.clearGcTimeout(),
              this.#s.notify({
                type: "observerAdded",
                query: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            this.observers.includes(t) &&
              ((this.observers = this.observers.filter((e) => e !== t)),
              this.observers.length ||
                (this.#r &&
                  (this.#n
                    ? this.#r.cancel({ revert: !0 })
                    : this.#r.cancelRetry()),
                this.scheduleGc()),
              this.#s.notify({
                type: "observerRemoved",
                query: this,
                observer: t,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#a({ type: "invalidate" });
          }
          fetch(t, e) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && e?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
            }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
              let t = this.observers.find((t) => t.options.queryFn);
              t && this.setOptions(t.options);
            }
            let s = new AbortController(),
              i = (t) => {
                Object.defineProperty(t, "signal", {
                  enumerable: !0,
                  get: () => ((this.#n = !0), s.signal),
                });
              },
              a = {
                fetchOptions: e,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () => {
                  let t = (0, r.cG)(this.options, e),
                    s = { queryKey: this.queryKey, meta: this.meta };
                  return (i(s), (this.#n = !1), this.options.persister)
                    ? this.options.persister(t, s, this)
                    : t(s);
                },
              };
            i(a),
              this.options.behavior?.onFetch(a, this),
              (this.#e = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== a.fetchOptions?.meta) &&
                this.#a({ type: "fetch", meta: a.fetchOptions?.meta });
            let u = (t) => {
              ((0, n.DV)(t) && t.silent) ||
                this.#a({ type: "error", error: t }),
                (0, n.DV)(t) ||
                  (this.#s.config.onError?.(t, this),
                  this.#s.config.onSettled?.(this.state.data, t, this)),
                this.isFetchingOptimistic || this.scheduleGc(),
                (this.isFetchingOptimistic = !1);
            };
            return (
              (this.#r = (0, n.Mz)({
                initialPromise: e?.initialPromise,
                fn: a.fetchFn,
                abort: s.abort.bind(s),
                onSuccess: (t) => {
                  if (void 0 === t) {
                    u(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(t);
                  } catch (t) {
                    u(t);
                    return;
                  }
                  this.#s.config.onSuccess?.(t, this),
                    this.#s.config.onSettled?.(t, this.state.error, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1);
                },
                onError: u,
                onFail: (t, e) => {
                  this.#a({ type: "failed", failureCount: t, error: e });
                },
                onPause: () => {
                  this.#a({ type: "pause" });
                },
                onContinue: () => {
                  this.#a({ type: "continue" });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0,
              })),
              this.#r.start()
            );
          }
          #a(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error,
                  };
                case "pause":
                  return { ...e, fetchStatus: "paused" };
                case "continue":
                  return { ...e, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...e,
                    ...o(e.data, this.options),
                    fetchMeta: t.meta ?? null,
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    dataUpdateCount: e.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!t.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case "error":
                  let s = t.error;
                  if ((0, n.DV)(s) && s.revert && this.#e)
                    return { ...this.#e, fetchStatus: "idle" };
                  return {
                    ...e,
                    error: s,
                    errorUpdateCount: e.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: e.fetchFailureCount + 1,
                    fetchFailureReason: s,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...e, isInvalidated: !0 };
                case "setState":
                  return { ...e, ...t.state };
              }
            })(this.state)),
              i.V.batch(() => {
                this.observers.forEach((t) => {
                  t.onQueryUpdate();
                }),
                  this.#s.notify({ query: this, type: "updated", action: t });
              });
          }
        };
      function o(t, e) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, n.Kw)(e.networkMode) ? "fetching" : "paused",
          ...(void 0 === t && { error: null, status: "pending" }),
        };
      }
    },
    86900: function (t, e, s) {
      s.d(e, {
        z: function () {
          return o;
        },
      });
      var r = s(45345),
        i = s(18238),
        n = s(87045),
        a = s(24112),
        u = s(21733),
        o = class extends a.l {
          constructor(t, e) {
            super(),
              (this.options = e),
              (this.#u = t),
              (this.#o = null),
              this.bindMethods(),
              this.setOptions(e);
          }
          #u;
          #h = void 0;
          #c = void 0;
          #l = void 0;
          #d;
          #p;
          #o;
          #f;
          #y;
          #v;
          #g;
          #b;
          #m;
          #R = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#h.addObserver(this),
              h(this.#h, this.options) ? this.#O() : this.updateResult(),
              this.#S());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return c(this.#h, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return c(this.#h, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#C(),
              this.#P(),
              this.#h.removeObserver(this);
          }
          setOptions(t, e) {
            let s = this.options,
              i = this.#h;
            if (
              ((this.options = this.#u.defaultQueryOptions(t)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, r.Nc)(this.options.enabled, this.#h))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#Q(),
              this.#h.setOptions(this.options),
              s._defaulted &&
                !(0, r.VS)(this.options, s) &&
                this.#u
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#h,
                    observer: this,
                  });
            let n = this.hasListeners();
            n && l(this.#h, i, this.options, s) && this.#O(),
              this.updateResult(e),
              n &&
                (this.#h !== i ||
                  (0, r.Nc)(this.options.enabled, this.#h) !==
                    (0, r.Nc)(s.enabled, this.#h) ||
                  (0, r.KC)(this.options.staleTime, this.#h) !==
                    (0, r.KC)(s.staleTime, this.#h)) &&
                this.#F();
            let a = this.#w();
            n &&
              (this.#h !== i ||
                (0, r.Nc)(this.options.enabled, this.#h) !==
                  (0, r.Nc)(s.enabled, this.#h) ||
                a !== this.#m) &&
              this.#I(a);
          }
          getOptimisticResult(t) {
            let e = this.#u.getQueryCache().build(this.#u, t),
              s = this.createResult(e, t);
            return (
              (0, r.VS)(this.getCurrentResult(), s) ||
                ((this.#l = s),
                (this.#p = this.options),
                (this.#d = this.#h.state)),
              s
            );
          }
          getCurrentResult() {
            return this.#l;
          }
          trackResult(t, e) {
            let s = {};
            return (
              Object.keys(t).forEach((r) => {
                Object.defineProperty(s, r, {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (this.trackProp(r), e?.(r), t[r]),
                });
              }),
              s
            );
          }
          trackProp(t) {
            this.#R.add(t);
          }
          getCurrentQuery() {
            return this.#h;
          }
          refetch({ ...t } = {}) {
            return this.fetch({ ...t });
          }
          fetchOptimistic(t) {
            let e = this.#u.defaultQueryOptions(t),
              s = this.#u.getQueryCache().build(this.#u, e);
            return (
              (s.isFetchingOptimistic = !0),
              s.fetch().then(() => this.createResult(s, e))
            );
          }
          fetch(t) {
            return this.#O({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#l)
            );
          }
          #O(t) {
            this.#Q();
            let e = this.#h.fetch(this.options, t);
            return t?.throwOnError || (e = e.catch(r.ZT)), e;
          }
          #F() {
            this.#C();
            let t = (0, r.KC)(this.options.staleTime, this.#h);
            if (r.sk || this.#l.isStale || !(0, r.PN)(t)) return;
            let e = (0, r.Kp)(this.#l.dataUpdatedAt, t);
            this.#g = setTimeout(() => {
              this.#l.isStale || this.updateResult();
            }, e + 1);
          }
          #w() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#h)
                : this.options.refetchInterval) ?? !1
            );
          }
          #I(t) {
            this.#P(),
              (this.#m = t),
              !r.sk &&
                !1 !== (0, r.Nc)(this.options.enabled, this.#h) &&
                (0, r.PN)(this.#m) &&
                0 !== this.#m &&
                (this.#b = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    n.j.isFocused()) &&
                    this.#O();
                }, this.#m));
          }
          #S() {
            this.#F(), this.#I(this.#w());
          }
          #C() {
            this.#g && (clearTimeout(this.#g), (this.#g = void 0));
          }
          #P() {
            this.#b && (clearInterval(this.#b), (this.#b = void 0));
          }
          createResult(t, e) {
            let s;
            let i = this.#h,
              n = this.options,
              a = this.#l,
              o = this.#d,
              c = this.#p,
              p = t !== i ? t.state : this.#c,
              { state: f } = t,
              y = { ...f },
              v = !1;
            if (e._optimisticResults) {
              let s = this.hasListeners(),
                r = !s && h(t, e),
                a = s && l(t, i, e, n);
              (r || a) && (y = { ...y, ...(0, u.z)(f.data, t.options) }),
                "isRestoring" === e._optimisticResults &&
                  (y.fetchStatus = "idle");
            }
            let { error: g, errorUpdatedAt: b, status: m } = y;
            if (e.select && void 0 !== y.data) {
              if (a && y.data === o?.data && e.select === this.#f) s = this.#y;
              else
                try {
                  (this.#f = e.select),
                    (s = e.select(y.data)),
                    (s = (0, r.oE)(a?.data, s, e)),
                    (this.#y = s),
                    (this.#o = null);
                } catch (t) {
                  this.#o = t;
                }
            } else s = y.data;
            if (
              void 0 !== e.placeholderData &&
              void 0 === s &&
              "pending" === m
            ) {
              let t;
              if (
                a?.isPlaceholderData &&
                e.placeholderData === c?.placeholderData
              )
                t = a.data;
              else if (
                ((t =
                  "function" == typeof e.placeholderData
                    ? e.placeholderData(this.#v?.state.data, this.#v)
                    : e.placeholderData),
                e.select && void 0 !== t)
              )
                try {
                  (t = e.select(t)), (this.#o = null);
                } catch (t) {
                  this.#o = t;
                }
              void 0 !== t &&
                ((m = "success"), (s = (0, r.oE)(a?.data, t, e)), (v = !0));
            }
            this.#o &&
              ((g = this.#o), (s = this.#y), (b = Date.now()), (m = "error"));
            let R = "fetching" === y.fetchStatus,
              O = "pending" === m,
              S = "error" === m,
              C = O && R,
              P = void 0 !== s;
            return {
              status: m,
              fetchStatus: y.fetchStatus,
              isPending: O,
              isSuccess: "success" === m,
              isError: S,
              isInitialLoading: C,
              isLoading: C,
              data: s,
              dataUpdatedAt: y.dataUpdatedAt,
              error: g,
              errorUpdatedAt: b,
              failureCount: y.fetchFailureCount,
              failureReason: y.fetchFailureReason,
              errorUpdateCount: y.errorUpdateCount,
              isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
              isFetchedAfterMount:
                y.dataUpdateCount > p.dataUpdateCount ||
                y.errorUpdateCount > p.errorUpdateCount,
              isFetching: R,
              isRefetching: R && !O,
              isLoadingError: S && !P,
              isPaused: "paused" === y.fetchStatus,
              isPlaceholderData: v,
              isRefetchError: S && P,
              isStale: d(t, e),
              refetch: this.refetch,
            };
          }
          updateResult(t) {
            let e = this.#l,
              s = this.createResult(this.#h, this.options);
            if (
              ((this.#d = this.#h.state),
              (this.#p = this.options),
              void 0 !== this.#d.data && (this.#v = this.#h),
              (0, r.VS)(s, e))
            )
              return;
            this.#l = s;
            let i = {};
            t?.listeners !== !1 &&
              (() => {
                if (!e) return !0;
                let { notifyOnChangeProps: t } = this.options,
                  s = "function" == typeof t ? t() : t;
                if ("all" === s || (!s && !this.#R.size)) return !0;
                let r = new Set(s ?? this.#R);
                return (
                  this.options.throwOnError && r.add("error"),
                  Object.keys(this.#l).some(
                    (t) => this.#l[t] !== e[t] && r.has(t)
                  )
                );
              })() &&
              (i.listeners = !0),
              this.#D({ ...i, ...t });
          }
          #Q() {
            let t = this.#u.getQueryCache().build(this.#u, this.options);
            if (t === this.#h) return;
            let e = this.#h;
            (this.#h = t),
              (this.#c = t.state),
              this.hasListeners() &&
                (e?.removeObserver(this), t.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#S();
          }
          #D(t) {
            i.V.batch(() => {
              t.listeners &&
                this.listeners.forEach((t) => {
                  t(this.#l);
                }),
                this.#u
                  .getQueryCache()
                  .notify({ query: this.#h, type: "observerResultsUpdated" });
            });
          }
        };
      function h(t, e) {
        return (
          (!1 !== (0, r.Nc)(e.enabled, t) &&
            void 0 === t.state.data &&
            !("error" === t.state.status && !1 === e.retryOnMount)) ||
          (void 0 !== t.state.data && c(t, e, e.refetchOnMount))
        );
      }
      function c(t, e, s) {
        if (!1 !== (0, r.Nc)(e.enabled, t)) {
          let r = "function" == typeof s ? s(t) : s;
          return "always" === r || (!1 !== r && d(t, e));
        }
        return !1;
      }
      function l(t, e, s, i) {
        return (
          (t !== e || !1 === (0, r.Nc)(i.enabled, t)) &&
          (!s.suspense || "error" !== t.state.status) &&
          d(t, s)
        );
      }
      function d(t, e) {
        return (
          !1 !== (0, r.Nc)(e.enabled, t) &&
          t.isStaleByTime((0, r.KC)(e.staleTime, t))
        );
      }
    },
    84147: function (t, e, s) {
      let r;
      s.d(e, {
        _: function () {
          return a;
        },
      });
      var i = s(2265);
      s(57437);
      var n = i.createContext(
          ((r = !1),
          {
            clearReset: () => {
              r = !1;
            },
            reset: () => {
              r = !0;
            },
            isReset: () => r,
          })
        ),
        a = () => i.useContext(n);
    },
    50674: function (t, e, s) {
      s.d(e, {
        JN: function () {
          return a;
        },
        KJ: function () {
          return u;
        },
        pf: function () {
          return n;
        },
      });
      var r = s(2265),
        i = s(51172),
        n = (t, e) => {
          (t.suspense || t.throwOnError) &&
            !e.isReset() &&
            (t.retryOnMount = !1);
        },
        a = (t) => {
          r.useEffect(() => {
            t.clearReset();
          }, [t]);
        },
        u = (t) => {
          let {
            result: e,
            errorResetBoundary: s,
            throwOnError: r,
            query: n,
          } = t;
          return (
            e.isError &&
            !s.isReset() &&
            !e.isFetching &&
            n &&
            (0, i.L)(r, [e.error, n])
          );
        };
    },
    39791: function (t, e, s) {
      s.d(e, {
        S: function () {
          return n;
        },
      });
      var r = s(2265),
        i = r.createContext(!1),
        n = () => r.useContext(i);
      i.Provider;
    },
    58386: function (t, e, s) {
      s.d(e, {
        A8: function () {
          return i;
        },
        Ct: function () {
          return r;
        },
        SB: function () {
          return a;
        },
        Z$: function () {
          return n;
        },
        j8: function () {
          return u;
        },
      });
      var r = (t, e) => void 0 === e.state.data,
        i = (t) => {
          t.suspense &&
            ("number" != typeof t.staleTime && (t.staleTime = 1e3),
            "number" == typeof t.gcTime &&
              (t.gcTime = Math.max(t.gcTime, 1e3)));
        },
        n = (t, e) => t.isLoading && t.isFetching && !e,
        a = (t, e) => t?.suspense && e.isPending,
        u = (t, e, s) =>
          e.fetchOptimistic(t).catch(() => {
            s.clearReset();
          });
    },
    99285: function (t, e, s) {
      s.d(e, {
        r: function () {
          return c;
        },
      });
      var r = s(2265),
        i = s(18238),
        n = s(84147),
        a = s(29827),
        u = s(39791),
        o = s(50674),
        h = s(58386);
      function c(t, e, s) {
        var c, l, d, p;
        let f = (0, a.NL)(s),
          y = (0, u.S)(),
          v = (0, n._)(),
          g = f.defaultQueryOptions(t);
        null === (l = f.getDefaultOptions().queries) ||
          void 0 === l ||
          null === (c = l._experimental_beforeQuery) ||
          void 0 === c ||
          c.call(l, g),
          (g._optimisticResults = y ? "isRestoring" : "optimistic"),
          (0, h.A8)(g),
          (0, o.pf)(g, v),
          (0, o.JN)(v);
        let [b] = r.useState(() => new e(f, g)),
          m = b.getOptimisticResult(g);
        if (
          (r.useSyncExternalStore(
            r.useCallback(
              (t) => {
                let e = y ? () => void 0 : b.subscribe(i.V.batchCalls(t));
                return b.updateResult(), e;
              },
              [b, y]
            ),
            () => b.getCurrentResult(),
            () => b.getCurrentResult()
          ),
          r.useEffect(() => {
            b.setOptions(g, { listeners: !1 });
          }, [g, b]),
          (0, h.SB)(g, m))
        )
          throw (0, h.j8)(g, b, v);
        if (
          (0, o.KJ)({
            result: m,
            errorResetBoundary: v,
            throwOnError: g.throwOnError,
            query: f.getQueryCache().get(g.queryHash),
          })
        )
          throw m.error;
        return (
          null === (p = f.getDefaultOptions().queries) ||
            void 0 === p ||
            null === (d = p._experimental_afterQuery) ||
            void 0 === d ||
            d.call(p, g, m),
          g.notifyOnChangeProps ? m : b.trackResult(m)
        );
      }
    },
    2868: function (t, e, s) {
      s.d(e, {
        N: function () {
          return n;
        },
      });
      var r = s(63611),
        i = s(99285);
      function n(t, e) {
        return (0, i.r)(t, r.c, e);
      }
    },
    71632: function (t, e, s) {
      s.d(e, {
        a: function () {
          return n;
        },
      });
      var r = s(86900),
        i = s(99285);
      function n(t, e) {
        return (0, i.r)(t, r.z, e);
      }
    },
  },
]);
