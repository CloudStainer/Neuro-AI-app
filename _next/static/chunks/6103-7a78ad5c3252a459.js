"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6103],
  {
    80485: function (e, t, s) {
      s.r(t),
        s.d(t, {
          Headers: function () {
            return n;
          },
          Request: function () {
            return a;
          },
          Response: function () {
            return o;
          },
          fetch: function () {
            return i;
          },
        });
      var r = (function () {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== s.g) return s.g;
        throw Error("unable to locate global object");
      })();
      let i = r.fetch;
      t.default = r.fetch.bind(r);
      let n = r.Headers,
        a = r.Request,
        o = r.Response;
    },
    35257: function (e, t, s) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(s(80485)),
        n = r(s(63038));
      class a {
        constructor(e) {
          (this.shouldThrowOnError = !1),
            (this.method = e.method),
            (this.url = e.url),
            (this.headers = e.headers),
            (this.schema = e.schema),
            (this.body = e.body),
            (this.shouldThrowOnError = e.shouldThrowOnError),
            (this.signal = e.signal),
            (this.isMaybeSingle = e.isMaybeSingle),
            e.fetch
              ? (this.fetch = e.fetch)
              : "undefined" == typeof fetch
              ? (this.fetch = i.default)
              : (this.fetch = fetch);
        }
        throwOnError() {
          return (this.shouldThrowOnError = !0), this;
        }
        setHeader(e, t) {
          return (
            (this.headers = Object.assign({}, this.headers)),
            (this.headers[e] = t),
            this
          );
        }
        then(e, t) {
          void 0 === this.schema ||
            (["GET", "HEAD"].includes(this.method)
              ? (this.headers["Accept-Profile"] = this.schema)
              : (this.headers["Content-Profile"] = this.schema)),
            "GET" !== this.method &&
              "HEAD" !== this.method &&
              (this.headers["Content-Type"] = "application/json");
          let s = (0, this.fetch)(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal,
          }).then(async (e) => {
            var t, s, r;
            let i = null,
              a = null,
              o = null,
              l = e.status,
              h = e.statusText;
            if (e.ok) {
              if ("HEAD" !== this.method) {
                let t = await e.text();
                "" === t ||
                  (a =
                    "text/csv" === this.headers.Accept
                      ? t
                      : this.headers.Accept &&
                        this.headers.Accept.includes(
                          "application/vnd.pgrst.plan+text"
                        )
                      ? t
                      : JSON.parse(t));
              }
              let r =
                  null === (t = this.headers.Prefer) || void 0 === t
                    ? void 0
                    : t.match(/count=(exact|planned|estimated)/),
                n =
                  null === (s = e.headers.get("content-range")) || void 0 === s
                    ? void 0
                    : s.split("/");
              r && n && n.length > 1 && (o = parseInt(n[1])),
                this.isMaybeSingle &&
                  "GET" === this.method &&
                  Array.isArray(a) &&
                  (a.length > 1
                    ? ((i = {
                        code: "PGRST116",
                        details: `Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                        hint: null,
                        message:
                          "JSON object requested, multiple (or no) rows returned",
                      }),
                      (a = null),
                      (o = null),
                      (l = 406),
                      (h = "Not Acceptable"))
                    : (a = 1 === a.length ? a[0] : null));
            } else {
              let t = await e.text();
              try {
                (i = JSON.parse(t)),
                  Array.isArray(i) &&
                    404 === e.status &&
                    ((a = []), (i = null), (l = 200), (h = "OK"));
              } catch (s) {
                404 === e.status && "" === t
                  ? ((l = 204), (h = "No Content"))
                  : (i = { message: t });
              }
              if (
                (i &&
                  this.isMaybeSingle &&
                  (null === (r = null == i ? void 0 : i.details) || void 0 === r
                    ? void 0
                    : r.includes("0 rows")) &&
                  ((i = null), (l = 200), (h = "OK")),
                i && this.shouldThrowOnError)
              )
                throw new n.default(i);
            }
            return { error: i, data: a, count: o, status: l, statusText: h };
          });
          return (
            this.shouldThrowOnError ||
              (s = s.catch((e) => {
                var t, s, r;
                return {
                  error: {
                    message: `${
                      null !== (t = null == e ? void 0 : e.name) && void 0 !== t
                        ? t
                        : "FetchError"
                    }: ${null == e ? void 0 : e.message}`,
                    details: `${
                      null !== (s = null == e ? void 0 : e.stack) &&
                      void 0 !== s
                        ? s
                        : ""
                    }`,
                    hint: "",
                    code: `${
                      null !== (r = null == e ? void 0 : e.code) && void 0 !== r
                        ? r
                        : ""
                    }`,
                  },
                  data: null,
                  count: null,
                  status: 0,
                  statusText: "",
                };
              })),
            s.then(e, t)
          );
        }
      }
      t.default = a;
    },
    79590: function (e, t, s) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(s(40934)),
        n = r(s(22495)),
        a = s(62168);
      class o {
        constructor(e, { headers: t = {}, schema: s, fetch: r } = {}) {
          (this.url = e),
            (this.headers = Object.assign(
              Object.assign({}, a.DEFAULT_HEADERS),
              t
            )),
            (this.schemaName = s),
            (this.fetch = r);
        }
        from(e) {
          let t = new URL(`${this.url}/${e}`);
          return new i.default(t, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
          });
        }
        schema(e) {
          return new o(this.url, {
            headers: this.headers,
            schema: e,
            fetch: this.fetch,
          });
        }
        rpc(e, t = {}, { head: s = !1, get: r = !1, count: i } = {}) {
          let a, o;
          let l = new URL(`${this.url}/rpc/${e}`);
          s || r
            ? ((a = s ? "HEAD" : "GET"),
              Object.entries(t)
                .filter(([e, t]) => void 0 !== t)
                .map(([e, t]) => [
                  e,
                  Array.isArray(t) ? `{${t.join(",")}}` : `${t}`,
                ])
                .forEach(([e, t]) => {
                  l.searchParams.append(e, t);
                }))
            : ((a = "POST"), (o = t));
          let h = Object.assign({}, this.headers);
          return (
            i && (h.Prefer = `count=${i}`),
            new n.default({
              method: a,
              url: l,
              headers: h,
              schema: this.schemaName,
              body: o,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      t.default = o;
    },
    63038: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      class s extends Error {
        constructor(e) {
          super(e.message),
            (this.name = "PostgrestError"),
            (this.details = e.details),
            (this.hint = e.hint),
            (this.code = e.code);
        }
      }
      t.default = s;
    },
    22495: function (e, t, s) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(s(3377));
      class n extends i.default {
        eq(e, t) {
          return this.url.searchParams.append(e, `eq.${t}`), this;
        }
        neq(e, t) {
          return this.url.searchParams.append(e, `neq.${t}`), this;
        }
        gt(e, t) {
          return this.url.searchParams.append(e, `gt.${t}`), this;
        }
        gte(e, t) {
          return this.url.searchParams.append(e, `gte.${t}`), this;
        }
        lt(e, t) {
          return this.url.searchParams.append(e, `lt.${t}`), this;
        }
        lte(e, t) {
          return this.url.searchParams.append(e, `lte.${t}`), this;
        }
        like(e, t) {
          return this.url.searchParams.append(e, `like.${t}`), this;
        }
        likeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this
          );
        }
        likeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this
          );
        }
        ilike(e, t) {
          return this.url.searchParams.append(e, `ilike.${t}`), this;
        }
        ilikeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this
          );
        }
        ilikeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this
          );
        }
        is(e, t) {
          return this.url.searchParams.append(e, `is.${t}`), this;
        }
        in(e, t) {
          let s = Array.from(new Set(t))
            .map((e) =>
              "string" == typeof e && RegExp("[,()]").test(e)
                ? `"${e}"`
                : `${e}`
            )
            .join(",");
          return this.url.searchParams.append(e, `in.(${s})`), this;
        }
        contains(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cs.${t}`)
              : Array.isArray(t)
              ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
              : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
            this
          );
        }
        containedBy(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cd.${t}`)
              : Array.isArray(t)
              ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
              : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
            this
          );
        }
        rangeGt(e, t) {
          return this.url.searchParams.append(e, `sr.${t}`), this;
        }
        rangeGte(e, t) {
          return this.url.searchParams.append(e, `nxl.${t}`), this;
        }
        rangeLt(e, t) {
          return this.url.searchParams.append(e, `sl.${t}`), this;
        }
        rangeLte(e, t) {
          return this.url.searchParams.append(e, `nxr.${t}`), this;
        }
        rangeAdjacent(e, t) {
          return this.url.searchParams.append(e, `adj.${t}`), this;
        }
        overlaps(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `ov.${t}`)
              : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
            this
          );
        }
        textSearch(e, t, { config: s, type: r } = {}) {
          let i = "";
          "plain" === r
            ? (i = "pl")
            : "phrase" === r
            ? (i = "ph")
            : "websearch" === r && (i = "w");
          let n = void 0 === s ? "" : `(${s})`;
          return this.url.searchParams.append(e, `${i}fts${n}.${t}`), this;
        }
        match(e) {
          return (
            Object.entries(e).forEach(([e, t]) => {
              this.url.searchParams.append(e, `eq.${t}`);
            }),
            this
          );
        }
        not(e, t, s) {
          return this.url.searchParams.append(e, `not.${t}.${s}`), this;
        }
        or(e, { foreignTable: t, referencedTable: s = t } = {}) {
          let r = s ? `${s}.or` : "or";
          return this.url.searchParams.append(r, `(${e})`), this;
        }
        filter(e, t, s) {
          return this.url.searchParams.append(e, `${t}.${s}`), this;
        }
      }
      t.default = n;
    },
    40934: function (e, t, s) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(s(22495));
      class n {
        constructor(e, { headers: t = {}, schema: s, fetch: r }) {
          (this.url = e),
            (this.headers = t),
            (this.schema = s),
            (this.fetch = r);
        }
        select(e, { head: t = !1, count: s } = {}) {
          let r = !1,
            n = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !r ? "" : ('"' === e && (r = !r), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", n),
            s && (this.headers.Prefer = `count=${s}`),
            new i.default({
              method: t ? "HEAD" : "GET",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        insert(e, { count: t, defaultToNull: s = !0 } = {}) {
          let r = [];
          if (
            (this.headers.Prefer && r.push(this.headers.Prefer),
            t && r.push(`count=${t}`),
            s || r.push("missing=default"),
            (this.headers.Prefer = r.join(",")),
            Array.isArray(e))
          ) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              let e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new i.default({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        upsert(
          e,
          {
            onConflict: t,
            ignoreDuplicates: s = !1,
            count: r,
            defaultToNull: n = !0,
          } = {}
        ) {
          let a = [`resolution=${s ? "ignore" : "merge"}-duplicates`];
          if (
            (void 0 !== t && this.url.searchParams.set("on_conflict", t),
            this.headers.Prefer && a.push(this.headers.Prefer),
            r && a.push(`count=${r}`),
            n || a.push("missing=default"),
            (this.headers.Prefer = a.join(",")),
            Array.isArray(e))
          ) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              let e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new i.default({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        update(e, { count: t } = {}) {
          let s = [];
          return (
            this.headers.Prefer && s.push(this.headers.Prefer),
            t && s.push(`count=${t}`),
            (this.headers.Prefer = s.join(",")),
            new i.default({
              method: "PATCH",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              body: e,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        delete({ count: e } = {}) {
          let t = [];
          return (
            e && t.push(`count=${e}`),
            this.headers.Prefer && t.unshift(this.headers.Prefer),
            (this.headers.Prefer = t.join(",")),
            new i.default({
              method: "DELETE",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      t.default = n;
    },
    3377: function (e, t, s) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(s(35257));
      class n extends i.default {
        select(e) {
          let t = !1,
            s = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", s),
            this.headers.Prefer && (this.headers.Prefer += ","),
            (this.headers.Prefer += "return=representation"),
            this
          );
        }
        order(
          e,
          {
            ascending: t = !0,
            nullsFirst: s,
            foreignTable: r,
            referencedTable: i = r,
          } = {}
        ) {
          let n = i ? `${i}.order` : "order",
            a = this.url.searchParams.get(n);
          return (
            this.url.searchParams.set(
              n,
              `${a ? `${a},` : ""}${e}.${t ? "asc" : "desc"}${
                void 0 === s ? "" : s ? ".nullsfirst" : ".nullslast"
              }`
            ),
            this
          );
        }
        limit(e, { foreignTable: t, referencedTable: s = t } = {}) {
          let r = void 0 === s ? "limit" : `${s}.limit`;
          return this.url.searchParams.set(r, `${e}`), this;
        }
        range(e, t, { foreignTable: s, referencedTable: r = s } = {}) {
          let i = void 0 === r ? "offset" : `${r}.offset`,
            n = void 0 === r ? "limit" : `${r}.limit`;
          return (
            this.url.searchParams.set(i, `${e}`),
            this.url.searchParams.set(n, `${t - e + 1}`),
            this
          );
        }
        abortSignal(e) {
          return (this.signal = e), this;
        }
        single() {
          return (
            (this.headers.Accept = "application/vnd.pgrst.object+json"), this
          );
        }
        maybeSingle() {
          return (
            "GET" === this.method
              ? (this.headers.Accept = "application/json")
              : (this.headers.Accept = "application/vnd.pgrst.object+json"),
            (this.isMaybeSingle = !0),
            this
          );
        }
        csv() {
          return (this.headers.Accept = "text/csv"), this;
        }
        geojson() {
          return (this.headers.Accept = "application/geo+json"), this;
        }
        explain({
          analyze: e = !1,
          verbose: t = !1,
          settings: s = !1,
          buffers: r = !1,
          wal: i = !1,
          format: n = "text",
        } = {}) {
          var a;
          let o = [
              e ? "analyze" : null,
              t ? "verbose" : null,
              s ? "settings" : null,
              r ? "buffers" : null,
              i ? "wal" : null,
            ]
              .filter(Boolean)
              .join("|"),
            l =
              null !== (a = this.headers.Accept) && void 0 !== a
                ? a
                : "application/json";
          return (
            (this.headers.Accept = `application/vnd.pgrst.plan+${n}; for="${l}"; options=${o};`),
            this
          );
        }
        rollback() {
          var e;
          return (
            (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim()
              .length > 0
              ? (this.headers.Prefer += ",tx=rollback")
              : (this.headers.Prefer = "tx=rollback"),
            this
          );
        }
        returns() {
          return this;
        }
      }
      t.default = n;
    },
    62168: function (e, t, s) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DEFAULT_HEADERS = void 0);
      let r = s(51780);
      t.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${r.version}` };
    },
    19640: function (e, t, s) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PostgrestBuilder =
          t.PostgrestTransformBuilder =
          t.PostgrestFilterBuilder =
          t.PostgrestQueryBuilder =
          t.PostgrestClient =
            void 0);
      let i = r(s(79590));
      t.PostgrestClient = i.default;
      let n = r(s(40934));
      t.PostgrestQueryBuilder = n.default;
      let a = r(s(22495));
      t.PostgrestFilterBuilder = a.default;
      let o = r(s(3377));
      t.PostgrestTransformBuilder = o.default;
      let l = r(s(35257));
      (t.PostgrestBuilder = l.default),
        (t.default = {
          PostgrestClient: i.default,
          PostgrestQueryBuilder: n.default,
          PostgrestFilterBuilder: a.default,
          PostgrestTransformBuilder: o.default,
          PostgrestBuilder: l.default,
        });
    },
    51780: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0),
        (t.version = "0.0.0-automated");
    },
    93777: function (e, t, s) {
      s.d(t, {
        eI: function () {
          return tC;
        },
      });
      let r = (e) => {
        let t;
        return (
          e
            ? (t = e)
            : "undefined" == typeof fetch
            ? (t = (...e) =>
                Promise.resolve()
                  .then(s.bind(s, 80485))
                  .then(({ default: t }) => t(...e)))
            : (t = fetch),
          (...e) => t(...e)
        );
      };
      class i extends Error {
        constructor(e, t = "FunctionsError", s) {
          super(e), (this.name = t), (this.context = s);
        }
      }
      class n extends i {
        constructor(e) {
          super(
            "Failed to send a request to the Edge Function",
            "FunctionsFetchError",
            e
          );
        }
      }
      class a extends i {
        constructor(e) {
          super(
            "Relay Error invoking the Edge Function",
            "FunctionsRelayError",
            e
          );
        }
      }
      class o extends i {
        constructor(e) {
          super(
            "Edge Function returned a non-2xx status code",
            "FunctionsHttpError",
            e
          );
        }
      }
      ((M = q || (q = {})).Any = "any"),
        (M.ApNortheast1 = "ap-northeast-1"),
        (M.ApNortheast2 = "ap-northeast-2"),
        (M.ApSouth1 = "ap-south-1"),
        (M.ApSoutheast1 = "ap-southeast-1"),
        (M.ApSoutheast2 = "ap-southeast-2"),
        (M.CaCentral1 = "ca-central-1"),
        (M.EuCentral1 = "eu-central-1"),
        (M.EuWest1 = "eu-west-1"),
        (M.EuWest2 = "eu-west-2"),
        (M.EuWest3 = "eu-west-3"),
        (M.SaEast1 = "sa-east-1"),
        (M.UsEast1 = "us-east-1"),
        (M.UsWest1 = "us-west-1"),
        (M.UsWest2 = "us-west-2");
      class l {
        constructor(
          e,
          { headers: t = {}, customFetch: s, region: i = q.Any } = {}
        ) {
          (this.url = e),
            (this.headers = t),
            (this.region = i),
            (this.fetch = r(s));
        }
        setAuth(e) {
          this.headers.Authorization = `Bearer ${e}`;
        }
        invoke(e, t = {}) {
          var s, r, i, l, h;
          return (
            (r = this),
            (i = void 0),
            (l = void 0),
            (h = function* () {
              try {
                let r;
                let { headers: i, method: l, body: h } = t,
                  c = {},
                  { region: u } = t;
                u || (u = this.region),
                  u && "any" !== u && (c["x-region"] = u),
                  h &&
                    ((i &&
                      !Object.prototype.hasOwnProperty.call(
                        i,
                        "Content-Type"
                      )) ||
                      !i) &&
                    (("undefined" != typeof Blob && h instanceof Blob) ||
                    h instanceof ArrayBuffer
                      ? ((c["Content-Type"] = "application/octet-stream"),
                        (r = h))
                      : "string" == typeof h
                      ? ((c["Content-Type"] = "text/plain"), (r = h))
                      : "undefined" != typeof FormData && h instanceof FormData
                      ? (r = h)
                      : ((c["Content-Type"] = "application/json"),
                        (r = JSON.stringify(h))));
                let d = yield this.fetch(`${this.url}/${e}`, {
                    method: l || "POST",
                    headers: Object.assign(
                      Object.assign(Object.assign({}, c), this.headers),
                      i
                    ),
                    body: r,
                  }).catch((e) => {
                    throw new n(e);
                  }),
                  f = d.headers.get("x-relay-error");
                if (f && "true" === f) throw new a(d);
                if (!d.ok) throw new o(d);
                let p = (
                  null !== (s = d.headers.get("Content-Type")) && void 0 !== s
                    ? s
                    : "text/plain"
                )
                  .split(";")[0]
                  .trim();
                return {
                  data:
                    "application/json" === p
                      ? yield d.json()
                      : "application/octet-stream" === p
                      ? yield d.blob()
                      : "text/event-stream" === p
                      ? d
                      : "multipart/form-data" === p
                      ? yield d.formData()
                      : yield d.text(),
                  error: null,
                };
              } catch (e) {
                return { data: null, error: e };
              }
            }),
            new (l || (l = Promise))(function (e, t) {
              function s(e) {
                try {
                  a(h.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function n(e) {
                try {
                  a(h.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function a(t) {
                var r;
                t.done
                  ? e(t.value)
                  : ((r = t.value) instanceof l
                      ? r
                      : new l(function (e) {
                          e(r);
                        })
                    ).then(s, n);
              }
              a((h = h.apply(r, i || [])).next());
            })
          );
        }
      }
      let {
          PostgrestClient: h,
          PostgrestQueryBuilder: c,
          PostgrestFilterBuilder: u,
          PostgrestTransformBuilder: d,
          PostgrestBuilder: f,
        } = s(19640),
        p = { "X-Client-Info": "realtime-js/2.10.2" };
      ((Z = z || (z = {}))[(Z.connecting = 0)] = "connecting"),
        (Z[(Z.open = 1)] = "open"),
        (Z[(Z.closing = 2)] = "closing"),
        (Z[(Z.closed = 3)] = "closed"),
        ((ee = J || (J = {})).closed = "closed"),
        (ee.errored = "errored"),
        (ee.joined = "joined"),
        (ee.joining = "joining"),
        (ee.leaving = "leaving"),
        ((et = K || (K = {})).close = "phx_close"),
        (et.error = "phx_error"),
        (et.join = "phx_join"),
        (et.reply = "phx_reply"),
        (et.leave = "phx_leave"),
        (et.access_token = "access_token"),
        ((G || (G = {})).websocket = "websocket"),
        ((es = H || (H = {})).Connecting = "connecting"),
        (es.Open = "open"),
        (es.Closing = "closing"),
        (es.Closed = "closed");
      class g {
        constructor() {
          this.HEADER_LENGTH = 1;
        }
        decode(e, t) {
          return e.constructor === ArrayBuffer
            ? t(this._binaryDecode(e))
            : "string" == typeof e
            ? t(JSON.parse(e))
            : t({});
        }
        _binaryDecode(e) {
          let t = new DataView(e),
            s = new TextDecoder();
          return this._decodeBroadcast(e, t, s);
        }
        _decodeBroadcast(e, t, s) {
          let r = t.getUint8(1),
            i = t.getUint8(2),
            n = this.HEADER_LENGTH + 2,
            a = s.decode(e.slice(n, n + r));
          n += r;
          let o = s.decode(e.slice(n, n + i));
          return (
            (n += i),
            {
              ref: null,
              topic: a,
              event: o,
              payload: JSON.parse(s.decode(e.slice(n, e.byteLength))),
            }
          );
        }
      }
      class y {
        constructor(e, t) {
          (this.callback = e),
            (this.timerCalc = t),
            (this.timer = void 0),
            (this.tries = 0),
            (this.callback = e),
            (this.timerCalc = t);
        }
        reset() {
          (this.tries = 0), clearTimeout(this.timer);
        }
        scheduleTimeout() {
          clearTimeout(this.timer),
            (this.timer = setTimeout(() => {
              (this.tries = this.tries + 1), this.callback();
            }, this.timerCalc(this.tries + 1)));
        }
      }
      ((er = W || (W = {})).abstime = "abstime"),
        (er.bool = "bool"),
        (er.date = "date"),
        (er.daterange = "daterange"),
        (er.float4 = "float4"),
        (er.float8 = "float8"),
        (er.int2 = "int2"),
        (er.int4 = "int4"),
        (er.int4range = "int4range"),
        (er.int8 = "int8"),
        (er.int8range = "int8range"),
        (er.json = "json"),
        (er.jsonb = "jsonb"),
        (er.money = "money"),
        (er.numeric = "numeric"),
        (er.oid = "oid"),
        (er.reltime = "reltime"),
        (er.text = "text"),
        (er.time = "time"),
        (er.timestamp = "timestamp"),
        (er.timestamptz = "timestamptz"),
        (er.timetz = "timetz"),
        (er.tsrange = "tsrange"),
        (er.tstzrange = "tstzrange");
      let v = (e, t, s = {}) => {
          var r;
          let i = null !== (r = s.skipTypes) && void 0 !== r ? r : [];
          return Object.keys(t).reduce(
            (s, r) => ((s[r] = m(r, e, t, i)), s),
            {}
          );
        },
        m = (e, t, s, r) => {
          let i = t.find((t) => t.name === e),
            n = null == i ? void 0 : i.type,
            a = s[e];
          return n && !r.includes(n) ? _(n, a) : w(a);
        },
        _ = (e, t) => {
          if ("_" === e.charAt(0)) return T(t, e.slice(1, e.length));
          switch (e) {
            case W.bool:
              return b(t);
            case W.float4:
            case W.float8:
            case W.int2:
            case W.int4:
            case W.int8:
            case W.numeric:
            case W.oid:
              return k(t);
            case W.json:
            case W.jsonb:
              return S(t);
            case W.timestamp:
              return j(t);
            case W.abstime:
            case W.date:
            case W.daterange:
            case W.int4range:
            case W.int8range:
            case W.money:
            case W.reltime:
            case W.text:
            case W.time:
            case W.timestamptz:
            case W.timetz:
            case W.tsrange:
            case W.tstzrange:
            default:
              return w(t);
          }
        },
        w = (e) => e,
        b = (e) => {
          switch (e) {
            case "t":
              return !0;
            case "f":
              return !1;
            default:
              return e;
          }
        },
        k = (e) => {
          if ("string" == typeof e) {
            let t = parseFloat(e);
            if (!Number.isNaN(t)) return t;
          }
          return e;
        },
        S = (e) => {
          if ("string" == typeof e)
            try {
              return JSON.parse(e);
            } catch (e) {
              console.log(`JSON parse error: ${e}`);
            }
          return e;
        },
        T = (e, t) => {
          if ("string" != typeof e) return e;
          let s = e.length - 1,
            r = e[s];
          if ("{" === e[0] && "}" === r) {
            let r;
            let i = e.slice(1, s);
            try {
              r = JSON.parse("[" + i + "]");
            } catch (e) {
              r = i ? i.split(",") : [];
            }
            return r.map((e) => _(t, e));
          }
          return e;
        },
        j = (e) => ("string" == typeof e ? e.replace(" ", "T") : e),
        E = (e) => {
          let t = e;
          return (t = (t = t.replace(/^ws/i, "http")).replace(
            /(\/socket\/websocket|\/socket|\/websocket)\/?$/i,
            ""
          )).replace(/\/+$/, "");
        };
      class O {
        constructor(e, t, s = {}, r = 1e4) {
          (this.channel = e),
            (this.event = t),
            (this.payload = s),
            (this.timeout = r),
            (this.sent = !1),
            (this.timeoutTimer = void 0),
            (this.ref = ""),
            (this.receivedResp = null),
            (this.recHooks = []),
            (this.refEvent = null);
        }
        resend(e) {
          (this.timeout = e),
            this._cancelRefEvent(),
            (this.ref = ""),
            (this.refEvent = null),
            (this.receivedResp = null),
            (this.sent = !1),
            this.send();
        }
        send() {
          this._hasReceived("timeout") ||
            (this.startTimeout(),
            (this.sent = !0),
            this.channel.socket.push({
              topic: this.channel.topic,
              event: this.event,
              payload: this.payload,
              ref: this.ref,
              join_ref: this.channel._joinRef(),
            }));
        }
        updatePayload(e) {
          this.payload = Object.assign(Object.assign({}, this.payload), e);
        }
        receive(e, t) {
          var s;
          return (
            this._hasReceived(e) &&
              t(
                null === (s = this.receivedResp) || void 0 === s
                  ? void 0
                  : s.response
              ),
            this.recHooks.push({ status: e, callback: t }),
            this
          );
        }
        startTimeout() {
          this.timeoutTimer ||
            ((this.ref = this.channel.socket._makeRef()),
            (this.refEvent = this.channel._replyEventName(this.ref)),
            this.channel._on(this.refEvent, {}, (e) => {
              this._cancelRefEvent(),
                this._cancelTimeout(),
                (this.receivedResp = e),
                this._matchReceive(e);
            }),
            (this.timeoutTimer = setTimeout(() => {
              this.trigger("timeout", {});
            }, this.timeout)));
        }
        trigger(e, t) {
          this.refEvent &&
            this.channel._trigger(this.refEvent, { status: e, response: t });
        }
        destroy() {
          this._cancelRefEvent(), this._cancelTimeout();
        }
        _cancelRefEvent() {
          this.refEvent && this.channel._off(this.refEvent, {});
        }
        _cancelTimeout() {
          clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
        }
        _matchReceive({ status: e, response: t }) {
          this.recHooks
            .filter((t) => t.status === e)
            .forEach((e) => e.callback(t));
        }
        _hasReceived(e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      }
      ((ei = V || (V = {})).SYNC = "sync"),
        (ei.JOIN = "join"),
        (ei.LEAVE = "leave");
      class P {
        constructor(e, t) {
          (this.channel = e),
            (this.state = {}),
            (this.pendingDiffs = []),
            (this.joinRef = null),
            (this.caller = {
              onJoin: () => {},
              onLeave: () => {},
              onSync: () => {},
            });
          let s = (null == t ? void 0 : t.events) || {
            state: "presence_state",
            diff: "presence_diff",
          };
          this.channel._on(s.state, {}, (e) => {
            let { onJoin: t, onLeave: s, onSync: r } = this.caller;
            (this.joinRef = this.channel._joinRef()),
              (this.state = P.syncState(this.state, e, t, s)),
              this.pendingDiffs.forEach((e) => {
                this.state = P.syncDiff(this.state, e, t, s);
              }),
              (this.pendingDiffs = []),
              r();
          }),
            this.channel._on(s.diff, {}, (e) => {
              let { onJoin: t, onLeave: s, onSync: r } = this.caller;
              this.inPendingSyncState()
                ? this.pendingDiffs.push(e)
                : ((this.state = P.syncDiff(this.state, e, t, s)), r());
            }),
            this.onJoin((e, t, s) => {
              this.channel._trigger("presence", {
                event: "join",
                key: e,
                currentPresences: t,
                newPresences: s,
              });
            }),
            this.onLeave((e, t, s) => {
              this.channel._trigger("presence", {
                event: "leave",
                key: e,
                currentPresences: t,
                leftPresences: s,
              });
            }),
            this.onSync(() => {
              this.channel._trigger("presence", { event: "sync" });
            });
        }
        static syncState(e, t, s, r) {
          let i = this.cloneDeep(e),
            n = this.transformState(t),
            a = {},
            o = {};
          return (
            this.map(i, (e, t) => {
              n[e] || (o[e] = t);
            }),
            this.map(n, (e, t) => {
              let s = i[e];
              if (s) {
                let r = t.map((e) => e.presence_ref),
                  i = s.map((e) => e.presence_ref),
                  n = t.filter((e) => 0 > i.indexOf(e.presence_ref)),
                  l = s.filter((e) => 0 > r.indexOf(e.presence_ref));
                n.length > 0 && (a[e] = n), l.length > 0 && (o[e] = l);
              } else a[e] = t;
            }),
            this.syncDiff(i, { joins: a, leaves: o }, s, r)
          );
        }
        static syncDiff(e, t, s, r) {
          let { joins: i, leaves: n } = {
            joins: this.transformState(t.joins),
            leaves: this.transformState(t.leaves),
          };
          return (
            s || (s = () => {}),
            r || (r = () => {}),
            this.map(i, (t, r) => {
              var i;
              let n = null !== (i = e[t]) && void 0 !== i ? i : [];
              if (((e[t] = this.cloneDeep(r)), n.length > 0)) {
                let s = e[t].map((e) => e.presence_ref),
                  r = n.filter((e) => 0 > s.indexOf(e.presence_ref));
                e[t].unshift(...r);
              }
              s(t, n, r);
            }),
            this.map(n, (t, s) => {
              let i = e[t];
              if (!i) return;
              let n = s.map((e) => e.presence_ref);
              (i = i.filter((e) => 0 > n.indexOf(e.presence_ref))),
                (e[t] = i),
                r(t, i, s),
                0 === i.length && delete e[t];
            }),
            e
          );
        }
        static map(e, t) {
          return Object.getOwnPropertyNames(e).map((s) => t(s, e[s]));
        }
        static transformState(e) {
          return Object.getOwnPropertyNames((e = this.cloneDeep(e))).reduce(
            (t, s) => {
              let r = e[s];
              return (
                "metas" in r
                  ? (t[s] = r.metas.map(
                      (e) => (
                        (e.presence_ref = e.phx_ref),
                        delete e.phx_ref,
                        delete e.phx_ref_prev,
                        e
                      )
                    ))
                  : (t[s] = r),
                t
              );
            },
            {}
          );
        }
        static cloneDeep(e) {
          return JSON.parse(JSON.stringify(e));
        }
        onJoin(e) {
          this.caller.onJoin = e;
        }
        onLeave(e) {
          this.caller.onLeave = e;
        }
        onSync(e) {
          this.caller.onSync = e;
        }
        inPendingSyncState() {
          return !this.joinRef || this.joinRef !== this.channel._joinRef();
        }
      }
      ((en = Y || (Y = {})).ALL = "*"),
        (en.INSERT = "INSERT"),
        (en.UPDATE = "UPDATE"),
        (en.DELETE = "DELETE"),
        ((ea = X || (X = {})).BROADCAST = "broadcast"),
        (ea.PRESENCE = "presence"),
        (ea.POSTGRES_CHANGES = "postgres_changes"),
        ((eo = Q || (Q = {})).SUBSCRIBED = "SUBSCRIBED"),
        (eo.TIMED_OUT = "TIMED_OUT"),
        (eo.CLOSED = "CLOSED"),
        (eo.CHANNEL_ERROR = "CHANNEL_ERROR");
      class $ {
        constructor(e, t = { config: {} }, s) {
          (this.topic = e),
            (this.params = t),
            (this.socket = s),
            (this.bindings = {}),
            (this.state = J.closed),
            (this.joinedOnce = !1),
            (this.pushBuffer = []),
            (this.subTopic = e.replace(/^realtime:/i, "")),
            (this.params.config = Object.assign(
              {
                broadcast: { ack: !1, self: !1 },
                presence: { key: "" },
                private: !1,
              },
              t.config
            )),
            (this.timeout = this.socket.timeout),
            (this.joinPush = new O(this, K.join, this.params, this.timeout)),
            (this.rejoinTimer = new y(
              () => this._rejoinUntilConnected(),
              this.socket.reconnectAfterMs
            )),
            this.joinPush.receive("ok", () => {
              (this.state = J.joined),
                this.rejoinTimer.reset(),
                this.pushBuffer.forEach((e) => e.send()),
                (this.pushBuffer = []);
            }),
            this._onClose(() => {
              this.rejoinTimer.reset(),
                this.socket.log(
                  "channel",
                  `close ${this.topic} ${this._joinRef()}`
                ),
                (this.state = J.closed),
                this.socket._remove(this);
            }),
            this._onError((e) => {
              this._isLeaving() ||
                this._isClosed() ||
                (this.socket.log("channel", `error ${this.topic}`, e),
                (this.state = J.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this.joinPush.receive("timeout", () => {
              this._isJoining() &&
                (this.socket.log(
                  "channel",
                  `timeout ${this.topic}`,
                  this.joinPush.timeout
                ),
                (this.state = J.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this._on(K.reply, {}, (e, t) => {
              this._trigger(this._replyEventName(t), e);
            }),
            (this.presence = new P(this)),
            (this.broadcastEndpointURL =
              E(this.socket.endPoint) + "/api/broadcast");
        }
        subscribe(e, t = this.timeout) {
          var s, r;
          if (
            (this.socket.isConnected() || this.socket.connect(),
            this.joinedOnce)
          )
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
          {
            let {
              config: { broadcast: i, presence: n, private: a },
            } = this.params;
            this._onError((t) => e && e("CHANNEL_ERROR", t)),
              this._onClose(() => e && e("CLOSED"));
            let o = {},
              l = {
                broadcast: i,
                presence: n,
                postgres_changes:
                  null !==
                    (r =
                      null === (s = this.bindings.postgres_changes) ||
                      void 0 === s
                        ? void 0
                        : s.map((e) => e.filter)) && void 0 !== r
                    ? r
                    : [],
                private: a,
              };
            this.socket.accessToken &&
              (o.access_token = this.socket.accessToken),
              this.updateJoinPayload(Object.assign({ config: l }, o)),
              (this.joinedOnce = !0),
              this._rejoin(t),
              this.joinPush
                .receive("ok", ({ postgres_changes: t }) => {
                  var s;
                  if (
                    (this.socket.accessToken &&
                      this.socket.setAuth(this.socket.accessToken),
                    void 0 === t)
                  ) {
                    e && e("SUBSCRIBED");
                    return;
                  }
                  {
                    let r = this.bindings.postgres_changes,
                      i =
                        null !== (s = null == r ? void 0 : r.length) &&
                        void 0 !== s
                          ? s
                          : 0,
                      n = [];
                    for (let s = 0; s < i; s++) {
                      let i = r[s],
                        {
                          filter: { event: a, schema: o, table: l, filter: h },
                        } = i,
                        c = t && t[s];
                      if (
                        c &&
                        c.event === a &&
                        c.schema === o &&
                        c.table === l &&
                        c.filter === h
                      )
                        n.push(
                          Object.assign(Object.assign({}, i), { id: c.id })
                        );
                      else {
                        this.unsubscribe(),
                          e &&
                            e(
                              "CHANNEL_ERROR",
                              Error(
                                "mismatch between server and client bindings for postgres changes"
                              )
                            );
                        return;
                      }
                    }
                    (this.bindings.postgres_changes = n), e && e("SUBSCRIBED");
                    return;
                  }
                })
                .receive("error", (t) => {
                  e &&
                    e(
                      "CHANNEL_ERROR",
                      Error(
                        JSON.stringify(Object.values(t).join(", ") || "error")
                      )
                    );
                })
                .receive("timeout", () => {
                  e && e("TIMED_OUT");
                });
          }
          return this;
        }
        presenceState() {
          return this.presence.state;
        }
        async track(e, t = {}) {
          return await this.send(
            { type: "presence", event: "track", payload: e },
            t.timeout || this.timeout
          );
        }
        async untrack(e = {}) {
          return await this.send({ type: "presence", event: "untrack" }, e);
        }
        on(e, t, s) {
          return this._on(e, t, s);
        }
        async send(e, t = {}) {
          var s, r;
          if (this._canPush() || "broadcast" !== e.type)
            return new Promise((s) => {
              var r, i, n;
              let a = this._push(e.type, e, t.timeout || this.timeout);
              "broadcast" !== e.type ||
                (null ===
                  (n =
                    null ===
                      (i =
                        null === (r = this.params) || void 0 === r
                          ? void 0
                          : r.config) || void 0 === i
                      ? void 0
                      : i.broadcast) || void 0 === n
                  ? void 0
                  : n.ack) ||
                s("ok"),
                a.receive("ok", () => s("ok")),
                a.receive("error", () => s("error")),
                a.receive("timeout", () => s("timed out"));
            });
          {
            let { event: i, payload: n } = e,
              a = {
                method: "POST",
                headers: {
                  Authorization: this.socket.accessToken
                    ? `Bearer ${this.socket.accessToken}`
                    : "",
                  apikey: this.socket.apiKey ? this.socket.apiKey : "",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  messages: [{ topic: this.subTopic, event: i, payload: n }],
                }),
              };
            try {
              let e = await this._fetchWithTimeout(
                this.broadcastEndpointURL,
                a,
                null !== (s = t.timeout) && void 0 !== s ? s : this.timeout
              );
              return (
                await (null === (r = e.body) || void 0 === r
                  ? void 0
                  : r.cancel()),
                e.ok ? "ok" : "error"
              );
            } catch (e) {
              if ("AbortError" === e.name) return "timed out";
              return "error";
            }
          }
        }
        updateJoinPayload(e) {
          this.joinPush.updatePayload(e);
        }
        unsubscribe(e = this.timeout) {
          this.state = J.leaving;
          let t = () => {
            this.socket.log("channel", `leave ${this.topic}`),
              this._trigger(K.close, "leave", this._joinRef());
          };
          return (
            this.rejoinTimer.reset(),
            this.joinPush.destroy(),
            new Promise((s) => {
              let r = new O(this, K.leave, {}, e);
              r
                .receive("ok", () => {
                  t(), s("ok");
                })
                .receive("timeout", () => {
                  t(), s("timed out");
                })
                .receive("error", () => {
                  s("error");
                }),
                r.send(),
                this._canPush() || r.trigger("ok", {});
            })
          );
        }
        async _fetchWithTimeout(e, t, s) {
          let r = new AbortController(),
            i = setTimeout(() => r.abort(), s),
            n = await this.socket.fetch(
              e,
              Object.assign(Object.assign({}, t), { signal: r.signal })
            );
          return clearTimeout(i), n;
        }
        _push(e, t, s = this.timeout) {
          if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
          let r = new O(this, e, t, s);
          return (
            this._canPush()
              ? r.send()
              : (r.startTimeout(), this.pushBuffer.push(r)),
            r
          );
        }
        _onMessage(e, t, s) {
          return t;
        }
        _isMember(e) {
          return this.topic === e;
        }
        _joinRef() {
          return this.joinPush.ref;
        }
        _trigger(e, t, s) {
          var r, i;
          let n = e.toLocaleLowerCase(),
            { close: a, error: o, leave: l, join: h } = K;
          if (s && [a, o, l, h].indexOf(n) >= 0 && s !== this._joinRef())
            return;
          let c = this._onMessage(n, t, s);
          if (t && !c)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
          ["insert", "update", "delete"].includes(n)
            ? null === (r = this.bindings.postgres_changes) ||
              void 0 === r ||
              r
                .filter((e) => {
                  var t, s, r;
                  return (
                    (null === (t = e.filter) || void 0 === t
                      ? void 0
                      : t.event) === "*" ||
                    (null ===
                      (r =
                        null === (s = e.filter) || void 0 === s
                          ? void 0
                          : s.event) || void 0 === r
                      ? void 0
                      : r.toLocaleLowerCase()) === n
                  );
                })
                .map((e) => e.callback(c, s))
            : null === (i = this.bindings[n]) ||
              void 0 === i ||
              i
                .filter((e) => {
                  var s, r, i, a, o, l;
                  if (
                    !["broadcast", "presence", "postgres_changes"].includes(n)
                  )
                    return e.type.toLocaleLowerCase() === n;
                  if ("id" in e) {
                    let n = e.id,
                      a =
                        null === (s = e.filter) || void 0 === s
                          ? void 0
                          : s.event;
                    return (
                      n &&
                      (null === (r = t.ids) || void 0 === r
                        ? void 0
                        : r.includes(n)) &&
                      ("*" === a ||
                        (null == a ? void 0 : a.toLocaleLowerCase()) ===
                          (null === (i = t.data) || void 0 === i
                            ? void 0
                            : i.type.toLocaleLowerCase()))
                    );
                  }
                  {
                    let s =
                      null ===
                        (o =
                          null === (a = null == e ? void 0 : e.filter) ||
                          void 0 === a
                            ? void 0
                            : a.event) || void 0 === o
                        ? void 0
                        : o.toLocaleLowerCase();
                    return (
                      "*" === s ||
                      s ===
                        (null === (l = null == t ? void 0 : t.event) ||
                        void 0 === l
                          ? void 0
                          : l.toLocaleLowerCase())
                    );
                  }
                })
                .map((e) => {
                  if ("object" == typeof c && "ids" in c) {
                    let e = c.data,
                      {
                        schema: t,
                        table: s,
                        commit_timestamp: r,
                        type: i,
                        errors: n,
                      } = e;
                    c = Object.assign(
                      Object.assign(
                        {},
                        {
                          schema: t,
                          table: s,
                          commit_timestamp: r,
                          eventType: i,
                          new: {},
                          old: {},
                          errors: n,
                        }
                      ),
                      this._getPayloadRecords(e)
                    );
                  }
                  e.callback(c, s);
                });
        }
        _isClosed() {
          return this.state === J.closed;
        }
        _isJoined() {
          return this.state === J.joined;
        }
        _isJoining() {
          return this.state === J.joining;
        }
        _isLeaving() {
          return this.state === J.leaving;
        }
        _replyEventName(e) {
          return `chan_reply_${e}`;
        }
        _on(e, t, s) {
          let r = e.toLocaleLowerCase(),
            i = { type: r, filter: t, callback: s };
          return (
            this.bindings[r]
              ? this.bindings[r].push(i)
              : (this.bindings[r] = [i]),
            this
          );
        }
        _off(e, t) {
          let s = e.toLocaleLowerCase();
          return (
            (this.bindings[s] = this.bindings[s].filter((e) => {
              var r;
              return !(
                (null === (r = e.type) || void 0 === r
                  ? void 0
                  : r.toLocaleLowerCase()) === s && $.isEqual(e.filter, t)
              );
            })),
            this
          );
        }
        static isEqual(e, t) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (let s in e) if (e[s] !== t[s]) return !1;
          return !0;
        }
        _rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(),
            this.socket.isConnected() && this._rejoin();
        }
        _onClose(e) {
          this._on(K.close, {}, e);
        }
        _onError(e) {
          this._on(K.error, {}, (t) => e(t));
        }
        _canPush() {
          return this.socket.isConnected() && this._isJoined();
        }
        _rejoin(e = this.timeout) {
          this._isLeaving() ||
            (this.socket._leaveOpenTopic(this.topic),
            (this.state = J.joining),
            this.joinPush.resend(e));
        }
        _getPayloadRecords(e) {
          let t = { new: {}, old: {} };
          return (
            ("INSERT" === e.type || "UPDATE" === e.type) &&
              (t.new = v(e.columns, e.record)),
            ("UPDATE" === e.type || "DELETE" === e.type) &&
              (t.old = v(e.columns, e.old_record)),
            t
          );
        }
      }
      let A = () => {},
        C = "undefined" != typeof WebSocket;
      class R {
        constructor(e, t) {
          var r;
          (this.accessToken = null),
            (this.apiKey = null),
            (this.channels = []),
            (this.endPoint = ""),
            (this.httpEndpoint = ""),
            (this.headers = p),
            (this.params = {}),
            (this.timeout = 1e4),
            (this.heartbeatIntervalMs = 3e4),
            (this.heartbeatTimer = void 0),
            (this.pendingHeartbeatRef = null),
            (this.ref = 0),
            (this.logger = A),
            (this.conn = null),
            (this.sendBuffer = []),
            (this.serializer = new g()),
            (this.stateChangeCallbacks = {
              open: [],
              close: [],
              error: [],
              message: [],
            }),
            (this._resolveFetch = (e) => {
              let t;
              return (
                e
                  ? (t = e)
                  : "undefined" == typeof fetch
                  ? (t = (...e) =>
                      Promise.resolve()
                        .then(s.bind(s, 80485))
                        .then(({ default: t }) => t(...e)))
                  : (t = fetch),
                (...e) => t(...e)
              );
            }),
            (this.endPoint = `${e}/${G.websocket}`),
            (this.httpEndpoint = E(e)),
            (null == t ? void 0 : t.transport)
              ? (this.transport = t.transport)
              : (this.transport = null),
            (null == t ? void 0 : t.params) && (this.params = t.params),
            (null == t ? void 0 : t.headers) &&
              (this.headers = Object.assign(
                Object.assign({}, this.headers),
                t.headers
              )),
            (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
            (null == t ? void 0 : t.logger) && (this.logger = t.logger),
            (null == t ? void 0 : t.heartbeatIntervalMs) &&
              (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
          let i =
            null === (r = null == t ? void 0 : t.params) || void 0 === r
              ? void 0
              : r.apikey;
          i && ((this.accessToken = i), (this.apiKey = i)),
            (this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs)
              ? t.reconnectAfterMs
              : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
            (this.encode = (null == t ? void 0 : t.encode)
              ? t.encode
              : (e, t) => t(JSON.stringify(e))),
            (this.decode = (null == t ? void 0 : t.decode)
              ? t.decode
              : this.serializer.decode.bind(this.serializer)),
            (this.reconnectTimer = new y(async () => {
              this.disconnect(), this.connect();
            }, this.reconnectAfterMs)),
            (this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch));
        }
        connect() {
          if (!this.conn) {
            if (this.transport) {
              this.conn = new this.transport(this._endPointURL(), void 0, {
                headers: this.headers,
              });
              return;
            }
            if (C) {
              (this.conn = new WebSocket(this._endPointURL())),
                this.setupConnection();
              return;
            }
            (this.conn = new x(this._endPointURL(), void 0, {
              close: () => {
                this.conn = null;
              },
            })),
              s
                .e(4495)
                .then(s.t.bind(s, 84495, 23))
                .then(({ default: e }) => {
                  (this.conn = new e(this._endPointURL(), void 0, {
                    headers: this.headers,
                  })),
                    this.setupConnection();
                });
          }
        }
        disconnect(e, t) {
          this.conn &&
            ((this.conn.onclose = function () {}),
            e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
            (this.conn = null),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.reset());
        }
        getChannels() {
          return this.channels;
        }
        async removeChannel(e) {
          let t = await e.unsubscribe();
          return 0 === this.channels.length && this.disconnect(), t;
        }
        async removeAllChannels() {
          let e = await Promise.all(this.channels.map((e) => e.unsubscribe()));
          return this.disconnect(), e;
        }
        log(e, t, s) {
          this.logger(e, t, s);
        }
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case z.connecting:
              return H.Connecting;
            case z.open:
              return H.Open;
            case z.closing:
              return H.Closing;
            default:
              return H.Closed;
          }
        }
        isConnected() {
          return this.connectionState() === H.Open;
        }
        channel(e, t = { config: {} }) {
          let s = new $(`realtime:${e}`, t, this);
          return this.channels.push(s), s;
        }
        push(e) {
          let { topic: t, event: s, payload: r, ref: i } = e,
            n = () => {
              this.encode(e, (e) => {
                var t;
                null === (t = this.conn) || void 0 === t || t.send(e);
              });
            };
          this.log("push", `${t} ${s} (${i})`, r),
            this.isConnected() ? n() : this.sendBuffer.push(n);
        }
        setAuth(e) {
          (this.accessToken = e),
            this.channels.forEach((t) => {
              e && t.updateJoinPayload({ access_token: e }),
                t.joinedOnce &&
                  t._isJoined() &&
                  t._push(K.access_token, { access_token: e });
            });
        }
        _makeRef() {
          let e = this.ref + 1;
          return (
            e === this.ref ? (this.ref = 0) : (this.ref = e),
            this.ref.toString()
          );
        }
        _leaveOpenTopic(e) {
          let t = this.channels.find(
            (t) => t.topic === e && (t._isJoined() || t._isJoining())
          );
          t &&
            (this.log("transport", `leaving duplicate topic "${e}"`),
            t.unsubscribe());
        }
        _remove(e) {
          this.channels = this.channels.filter(
            (t) => t._joinRef() !== e._joinRef()
          );
        }
        setupConnection() {
          this.conn &&
            ((this.conn.binaryType = "arraybuffer"),
            (this.conn.onopen = () => this._onConnOpen()),
            (this.conn.onerror = (e) => this._onConnError(e)),
            (this.conn.onmessage = (e) => this._onConnMessage(e)),
            (this.conn.onclose = (e) => this._onConnClose(e)));
        }
        _endPointURL() {
          return this._appendParams(
            this.endPoint,
            Object.assign({}, this.params, { vsn: "1.0.0" })
          );
        }
        _onConnMessage(e) {
          this.decode(e.data, (e) => {
            let { topic: t, event: s, payload: r, ref: i } = e;
            ((i && i === this.pendingHeartbeatRef) ||
              s === (null == r ? void 0 : r.type)) &&
              (this.pendingHeartbeatRef = null),
              this.log(
                "receive",
                `${r.status || ""} ${t} ${s} ${(i && "(" + i + ")") || ""}`,
                r
              ),
              this.channels
                .filter((e) => e._isMember(t))
                .forEach((e) => e._trigger(s, r, i)),
              this.stateChangeCallbacks.message.forEach((t) => t(e));
          });
        }
        _onConnOpen() {
          this.log("transport", `connected to ${this._endPointURL()}`),
            this._flushSendBuffer(),
            this.reconnectTimer.reset(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            (this.heartbeatTimer = setInterval(
              () => this._sendHeartbeat(),
              this.heartbeatIntervalMs
            )),
            this.stateChangeCallbacks.open.forEach((e) => e());
        }
        _onConnClose(e) {
          this.log("transport", "close", e),
            this._triggerChanError(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((t) => t(e));
        }
        _onConnError(e) {
          this.log("transport", e.message),
            this._triggerChanError(),
            this.stateChangeCallbacks.error.forEach((t) => t(e));
        }
        _triggerChanError() {
          this.channels.forEach((e) => e._trigger(K.error));
        }
        _appendParams(e, t) {
          if (0 === Object.keys(t).length) return e;
          let s = e.match(/\?/) ? "&" : "?",
            r = new URLSearchParams(t);
          return `${e}${s}${r}`;
        }
        _flushSendBuffer() {
          this.isConnected() &&
            this.sendBuffer.length > 0 &&
            (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
        }
        _sendHeartbeat() {
          var e;
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
              (this.pendingHeartbeatRef = null),
                this.log(
                  "transport",
                  "heartbeat timeout. Attempting to re-establish connection"
                ),
                null === (e = this.conn) ||
                  void 0 === e ||
                  e.close(1e3, "hearbeat timeout");
              return;
            }
            (this.pendingHeartbeatRef = this._makeRef()),
              this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef,
              }),
              this.setAuth(this.accessToken);
          }
        }
      }
      class x {
        constructor(e, t, s) {
          (this.binaryType = "arraybuffer"),
            (this.onclose = () => {}),
            (this.onerror = () => {}),
            (this.onmessage = () => {}),
            (this.onopen = () => {}),
            (this.readyState = z.connecting),
            (this.send = () => {}),
            (this.url = null),
            (this.url = e),
            (this.close = s.close);
        }
      }
      class I extends Error {
        constructor(e) {
          super(e), (this.__isStorageError = !0), (this.name = "StorageError");
        }
      }
      function L(e) {
        return "object" == typeof e && null !== e && "__isStorageError" in e;
      }
      class U extends I {
        constructor(e, t) {
          super(e), (this.name = "StorageApiError"), (this.status = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      }
      class D extends I {
        constructor(e, t) {
          super(e),
            (this.name = "StorageUnknownError"),
            (this.originalError = t);
        }
      }
      let N = (e) => {
          let t;
          return (
            e
              ? (t = e)
              : "undefined" == typeof fetch
              ? (t = (...e) =>
                  Promise.resolve()
                    .then(s.bind(s, 80485))
                    .then(({ default: t }) => t(...e)))
              : (t = fetch),
            (...e) => t(...e)
          );
        },
        B = () => {
          var e, t, r, i;
          return (
            (e = void 0),
            (t = void 0),
            (r = void 0),
            (i = function* () {
              return "undefined" == typeof Response
                ? (yield Promise.resolve().then(s.bind(s, 80485))).Response
                : Response;
            }),
            new (r || (r = Promise))(function (s, n) {
              function a(e) {
                try {
                  l(i.next(e));
                } catch (e) {
                  n(e);
                }
              }
              function o(e) {
                try {
                  l(i.throw(e));
                } catch (e) {
                  n(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? s(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(a, o);
              }
              l((i = i.apply(e, t || [])).next());
            })
          );
        },
        F = (e) => {
          if (Array.isArray(e)) return e.map((e) => F(e));
          if ("function" == typeof e || e !== Object(e)) return e;
          let t = {};
          return (
            Object.entries(e).forEach(([e, s]) => {
              t[
                e.replace(/([-_][a-z])/gi, (e) =>
                  e.toUpperCase().replace(/[-_]/g, "")
                )
              ] = F(s);
            }),
            t
          );
        };
      var M,
        q,
        z,
        J,
        K,
        G,
        H,
        W,
        V,
        Y,
        X,
        Q,
        Z,
        ee,
        et,
        es,
        er,
        ei,
        en,
        ea,
        eo,
        el = function (e, t, s, r) {
          return new (s || (s = Promise))(function (i, n) {
            function a(e) {
              try {
                l(r.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })
                  ).then(a, o);
            }
            l((r = r.apply(e, t || [])).next());
          });
        };
      let eh = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        ec = (e, t, s) =>
          el(void 0, void 0, void 0, function* () {
            e instanceof (yield B()) && !(null == s ? void 0 : s.noResolveJson)
              ? e
                  .json()
                  .then((s) => {
                    t(new U(eh(s), e.status || 500));
                  })
                  .catch((e) => {
                    t(new D(eh(e), e));
                  })
              : t(new D(eh(e), e));
          }),
        eu = (e, t, s, r) => {
          let i = {
            method: e,
            headers: (null == t ? void 0 : t.headers) || {},
          };
          return "GET" === e
            ? i
            : ((i.headers = Object.assign(
                { "Content-Type": "application/json" },
                null == t ? void 0 : t.headers
              )),
              r && (i.body = JSON.stringify(r)),
              Object.assign(Object.assign({}, i), s));
        };
      function ed(e, t, s, r, i, n) {
        return el(this, void 0, void 0, function* () {
          return new Promise((a, o) => {
            e(s, eu(t, r, i, n))
              .then((e) => {
                if (!e.ok) throw e;
                return (null == r ? void 0 : r.noResolveJson) ? e : e.json();
              })
              .then((e) => a(e))
              .catch((e) => ec(e, o, r));
          });
        });
      }
      function ef(e, t, s, r) {
        return el(this, void 0, void 0, function* () {
          return ed(e, "GET", t, s, r);
        });
      }
      function ep(e, t, s, r, i) {
        return el(this, void 0, void 0, function* () {
          return ed(e, "POST", t, r, i, s);
        });
      }
      function eg(e, t, s, r, i) {
        return el(this, void 0, void 0, function* () {
          return ed(e, "DELETE", t, r, i, s);
        });
      }
      var ey = s(82957).Buffer,
        ev = function (e, t, s, r) {
          return new (s || (s = Promise))(function (i, n) {
            function a(e) {
              try {
                l(r.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })
                  ).then(a, o);
            }
            l((r = r.apply(e, t || [])).next());
          });
        };
      let em = {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        },
        e_ = {
          cacheControl: "3600",
          contentType: "text/plain;charset=UTF-8",
          upsert: !1,
        };
      class ew {
        constructor(e, t = {}, s, r) {
          (this.url = e),
            (this.headers = t),
            (this.bucketId = s),
            (this.fetch = N(r));
        }
        uploadOrUpdate(e, t, s, r) {
          return ev(this, void 0, void 0, function* () {
            try {
              let i;
              let n = Object.assign(Object.assign({}, e_), r),
                a = Object.assign(
                  Object.assign({}, this.headers),
                  "POST" === e && { "x-upsert": String(n.upsert) }
                ),
                o = n.metadata;
              "undefined" != typeof Blob && s instanceof Blob
                ? ((i = new FormData()).append("cacheControl", n.cacheControl),
                  i.append("", s),
                  o && i.append("metadata", this.encodeMetadata(o)))
                : "undefined" != typeof FormData && s instanceof FormData
                ? ((i = s).append("cacheControl", n.cacheControl),
                  o && i.append("metadata", this.encodeMetadata(o)))
                : ((i = s),
                  (a["cache-control"] = `max-age=${n.cacheControl}`),
                  (a["content-type"] = n.contentType),
                  o &&
                    (a["x-metadata"] = this.toBase64(this.encodeMetadata(o)))),
                (null == r ? void 0 : r.headers) &&
                  (a = Object.assign(Object.assign({}, a), r.headers));
              let l = this._removeEmptyFolders(t),
                h = this._getFinalPath(l),
                c = yield this.fetch(
                  `${this.url}/object/${h}`,
                  Object.assign(
                    { method: e, body: i, headers: a },
                    (null == n ? void 0 : n.duplex) ? { duplex: n.duplex } : {}
                  )
                ),
                u = yield c.json();
              if (c.ok)
                return {
                  data: { path: l, id: u.Id, fullPath: u.Key },
                  error: null,
                };
              return { data: null, error: u };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        upload(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("POST", e, t, s);
          });
        }
        uploadToSignedUrl(e, t, s, r) {
          return ev(this, void 0, void 0, function* () {
            let i = this._removeEmptyFolders(e),
              n = this._getFinalPath(i),
              a = new URL(this.url + `/object/upload/sign/${n}`);
            a.searchParams.set("token", t);
            try {
              let e;
              let t = Object.assign({ upsert: e_.upsert }, r),
                n = Object.assign(Object.assign({}, this.headers), {
                  "x-upsert": String(t.upsert),
                });
              "undefined" != typeof Blob && s instanceof Blob
                ? ((e = new FormData()).append("cacheControl", t.cacheControl),
                  e.append("", s))
                : "undefined" != typeof FormData && s instanceof FormData
                ? (e = s).append("cacheControl", t.cacheControl)
                : ((e = s),
                  (n["cache-control"] = `max-age=${t.cacheControl}`),
                  (n["content-type"] = t.contentType));
              let o = yield this.fetch(a.toString(), {
                  method: "PUT",
                  body: e,
                  headers: n,
                }),
                l = yield o.json();
              if (o.ok)
                return { data: { path: i, fullPath: l.Key }, error: null };
              return { data: null, error: l };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUploadUrl(e, t) {
          return ev(this, void 0, void 0, function* () {
            try {
              let s = this._getFinalPath(e),
                r = Object.assign({}, this.headers);
              (null == t ? void 0 : t.upsert) && (r["x-upsert"] = "true");
              let i = yield ep(
                  this.fetch,
                  `${this.url}/object/upload/sign/${s}`,
                  {},
                  { headers: r }
                ),
                n = new URL(this.url + i.url),
                a = n.searchParams.get("token");
              if (!a) throw new I("No token returned by API");
              return {
                data: { signedUrl: n.toString(), path: e, token: a },
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        update(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("PUT", e, t, s);
          });
        }
        move(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ep(
                  this.fetch,
                  `${this.url}/object/move`,
                  {
                    bucketId: this.bucketId,
                    sourceKey: e,
                    destinationKey: t,
                    destinationBucket: null == s ? void 0 : s.destinationBucket,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        copy(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            try {
              return {
                data: {
                  path: (yield ep(
                    this.fetch,
                    `${this.url}/object/copy`,
                    {
                      bucketId: this.bucketId,
                      sourceKey: e,
                      destinationKey: t,
                      destinationBucket:
                        null == s ? void 0 : s.destinationBucket,
                    },
                    { headers: this.headers }
                  )).Key,
                },
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrl(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            try {
              let r = this._getFinalPath(e),
                i = yield ep(
                  this.fetch,
                  `${this.url}/object/sign/${r}`,
                  Object.assign(
                    { expiresIn: t },
                    (null == s ? void 0 : s.transform)
                      ? { transform: s.transform }
                      : {}
                  ),
                  { headers: this.headers }
                ),
                n = (null == s ? void 0 : s.download)
                  ? `&download=${!0 === s.download ? "" : s.download}`
                  : "";
              return {
                data: (i = {
                  signedUrl: encodeURI(`${this.url}${i.signedURL}${n}`),
                }),
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrls(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            try {
              let r = yield ep(
                  this.fetch,
                  `${this.url}/object/sign/${this.bucketId}`,
                  { expiresIn: t, paths: e },
                  { headers: this.headers }
                ),
                i = (null == s ? void 0 : s.download)
                  ? `&download=${!0 === s.download ? "" : s.download}`
                  : "";
              return {
                data: r.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    signedUrl: e.signedURL
                      ? encodeURI(`${this.url}${e.signedURL}${i}`)
                      : null,
                  })
                ),
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        download(e, t) {
          return ev(this, void 0, void 0, function* () {
            let s = void 0 !== (null == t ? void 0 : t.transform),
              r = this.transformOptsToQueryString(
                (null == t ? void 0 : t.transform) || {}
              ),
              i = r ? `?${r}` : "";
            try {
              let t = this._getFinalPath(e),
                r = yield ef(
                  this.fetch,
                  `${this.url}/${
                    s ? "render/image/authenticated" : "object"
                  }/${t}${i}`,
                  { headers: this.headers, noResolveJson: !0 }
                );
              return { data: yield r.blob(), error: null };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        info(e) {
          return ev(this, void 0, void 0, function* () {
            let t = this._getFinalPath(e);
            try {
              let e = yield ef(this.fetch, `${this.url}/object/info/${t}`, {
                headers: this.headers,
              });
              return { data: F(e), error: null };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        exists(e) {
          return ev(this, void 0, void 0, function* () {
            let t = this._getFinalPath(e);
            try {
              return (
                yield (function (e, t, s, r) {
                  return el(this, void 0, void 0, function* () {
                    return ed(
                      e,
                      "HEAD",
                      t,
                      Object.assign(Object.assign({}, s), {
                        noResolveJson: !0,
                      }),
                      void 0
                    );
                  });
                })(this.fetch, `${this.url}/object/${t}`, {
                  headers: this.headers,
                }),
                { data: !0, error: null }
              );
            } catch (e) {
              if (L(e) && e instanceof D) {
                let t = e.originalError;
                if ([400, 404].includes(null == t ? void 0 : t.status))
                  return { data: !1, error: e };
              }
              throw e;
            }
          });
        }
        getPublicUrl(e, t) {
          let s = this._getFinalPath(e),
            r = [],
            i = (null == t ? void 0 : t.download)
              ? `download=${!0 === t.download ? "" : t.download}`
              : "";
          "" !== i && r.push(i);
          let n = void 0 !== (null == t ? void 0 : t.transform),
            a = this.transformOptsToQueryString(
              (null == t ? void 0 : t.transform) || {}
            );
          "" !== a && r.push(a);
          let o = r.join("&");
          return (
            "" !== o && (o = `?${o}`),
            {
              data: {
                publicUrl: encodeURI(
                  `${this.url}/${n ? "render/image" : "object"}/public/${s}${o}`
                ),
              },
            }
          );
        }
        remove(e) {
          return ev(this, void 0, void 0, function* () {
            try {
              return {
                data: yield eg(
                  this.fetch,
                  `${this.url}/object/${this.bucketId}`,
                  { prefixes: e },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        list(e, t, s) {
          return ev(this, void 0, void 0, function* () {
            try {
              let r = Object.assign(Object.assign(Object.assign({}, em), t), {
                prefix: e || "",
              });
              return {
                data: yield ep(
                  this.fetch,
                  `${this.url}/object/list/${this.bucketId}`,
                  r,
                  { headers: this.headers },
                  s
                ),
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        encodeMetadata(e) {
          return JSON.stringify(e);
        }
        toBase64(e) {
          return void 0 !== ey ? ey.from(e).toString("base64") : btoa(e);
        }
        _getFinalPath(e) {
          return `${this.bucketId}/${e}`;
        }
        _removeEmptyFolders(e) {
          return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
        }
        transformOptsToQueryString(e) {
          let t = [];
          return (
            e.width && t.push(`width=${e.width}`),
            e.height && t.push(`height=${e.height}`),
            e.resize && t.push(`resize=${e.resize}`),
            e.format && t.push(`format=${e.format}`),
            e.quality && t.push(`quality=${e.quality}`),
            t.join("&")
          );
        }
      }
      let eb = { "X-Client-Info": "storage-js/2.7.0" };
      var ek = function (e, t, s, r) {
        return new (s || (s = Promise))(function (i, n) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      class eS {
        constructor(e, t = {}, s) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, eb), t)),
            (this.fetch = N(s));
        }
        listBuckets() {
          return ek(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ef(this.fetch, `${this.url}/bucket`, {
                  headers: this.headers,
                }),
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getBucket(e) {
          return ek(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ef(this.fetch, `${this.url}/bucket/${e}`, {
                  headers: this.headers,
                }),
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createBucket(e, t = { public: !1 }) {
          return ek(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ep(
                  this.fetch,
                  `${this.url}/bucket`,
                  {
                    id: e,
                    name: e,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        updateBucket(e, t) {
          return ek(this, void 0, void 0, function* () {
            try {
              return {
                data: yield (function (e, t, s, r, i) {
                  return el(this, void 0, void 0, function* () {
                    return ed(e, "PUT", t, r, void 0, s);
                  });
                })(
                  this.fetch,
                  `${this.url}/bucket/${e}`,
                  {
                    id: e,
                    name: e,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        emptyBucket(e) {
          return ek(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ep(
                  this.fetch,
                  `${this.url}/bucket/${e}/empty`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        deleteBucket(e) {
          return ek(this, void 0, void 0, function* () {
            try {
              return {
                data: yield eg(
                  this.fetch,
                  `${this.url}/bucket/${e}`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (L(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
      }
      class eT extends eS {
        constructor(e, t = {}, s) {
          super(e, t, s);
        }
        from(e) {
          return new ew(this.url, this.headers, e, this.fetch);
        }
      }
      let ej = "";
      "undefined" != typeof Deno
        ? (ej = "deno")
        : "undefined" != typeof document
        ? (ej = "web")
        : "undefined" != typeof navigator && "ReactNative" === navigator.product
        ? (ej = "react-native")
        : (ej = "node");
      let eE = { headers: { "X-Client-Info": `supabase-js-${ej}/2.45.4` } },
        eO = { schema: "public" },
        eP = {
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          flowType: "implicit",
        },
        e$ = {};
      var eA = s(80485);
      let eC = (e) => {
          let t;
          return (
            e
              ? (t = e)
              : "undefined" == typeof fetch
              ? (t = eA.default)
              : (t = fetch),
            (...e) => t(...e)
          );
        },
        eR = () => ("undefined" == typeof Headers ? eA.Headers : Headers),
        ex = (e, t, s) => {
          let r = eC(s),
            i = eR();
          return (s, n) => {
            var a, o, l, h;
            return (
              (a = void 0),
              (o = void 0),
              (l = void 0),
              (h = function* () {
                var a;
                let o = null !== (a = yield t()) && void 0 !== a ? a : e,
                  l = new i(null == n ? void 0 : n.headers);
                return (
                  l.has("apikey") || l.set("apikey", e),
                  l.has("Authorization") ||
                    l.set("Authorization", `Bearer ${o}`),
                  r(s, Object.assign(Object.assign({}, n), { headers: l }))
                );
              }),
              new (l || (l = Promise))(function (e, t) {
                function s(e) {
                  try {
                    i(h.next(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function r(e) {
                  try {
                    i(h.throw(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function i(t) {
                  var i;
                  t.done
                    ? e(t.value)
                    : ((i = t.value) instanceof l
                        ? i
                        : new l(function (e) {
                            e(i);
                          })
                      ).then(s, r);
                }
                i((h = h.apply(a, o || [])).next());
              })
            );
          };
        },
        eI = "2.65.0",
        eL = { "X-Client-Info": `gotrue-js/${eI}` },
        eU = "X-Supabase-Api-Version",
        eD = {
          "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01",
          },
        },
        eN = () => "undefined" != typeof document,
        eB = { tested: !1, writable: !1 },
        eF = () => {
          if (!eN()) return !1;
          try {
            if ("object" != typeof globalThis.localStorage) return !1;
          } catch (e) {
            return !1;
          }
          if (eB.tested) return eB.writable;
          let e = `lswt-${Math.random()}${Math.random()}`;
          try {
            globalThis.localStorage.setItem(e, e),
              globalThis.localStorage.removeItem(e),
              (eB.tested = !0),
              (eB.writable = !0);
          } catch (e) {
            (eB.tested = !0), (eB.writable = !1);
          }
          return eB.writable;
        };
      function eM(e) {
        let t = {},
          s = new URL(e);
        if (s.hash && "#" === s.hash[0])
          try {
            new URLSearchParams(s.hash.substring(1)).forEach((e, s) => {
              t[s] = e;
            });
          } catch (e) {}
        return (
          s.searchParams.forEach((e, s) => {
            t[s] = e;
          }),
          t
        );
      }
      let eq = (e) => {
          let t;
          return (
            e
              ? (t = e)
              : "undefined" == typeof fetch
              ? (t = (...e) =>
                  Promise.resolve()
                    .then(s.bind(s, 80485))
                    .then(({ default: t }) => t(...e)))
              : (t = fetch),
            (...e) => t(...e)
          );
        },
        ez = (e) =>
          "object" == typeof e &&
          null !== e &&
          "status" in e &&
          "ok" in e &&
          "json" in e &&
          "function" == typeof e.json,
        eJ = async (e, t, s) => {
          await e.setItem(t, JSON.stringify(s));
        },
        eK = async (e, t) => {
          let s = await e.getItem(t);
          if (!s) return null;
          try {
            return JSON.parse(s);
          } catch (e) {
            return s;
          }
        },
        eG = async (e, t) => {
          await e.removeItem(t);
        };
      class eH {
        constructor() {
          this.promise = new eH.promiseConstructor((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      }
      function eW(e) {
        let t = e.split(".");
        if (3 !== t.length)
          throw Error("JWT is not valid: not a JWT structure");
        if (
          !/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
            t[1]
          )
        )
          throw Error("JWT is not valid: payload is not in base64url format");
        return JSON.parse(
          (function (e) {
            let t, s, r, i, n, a, o;
            let l =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              h = "",
              c = 0;
            for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
              (i = l.indexOf(e.charAt(c++))),
                (n = l.indexOf(e.charAt(c++))),
                (a = l.indexOf(e.charAt(c++))),
                (o = l.indexOf(e.charAt(c++))),
                (t = (i << 2) | (n >> 4)),
                (s = ((15 & n) << 4) | (a >> 2)),
                (r = ((3 & a) << 6) | o),
                (h += String.fromCharCode(t)),
                64 != a && 0 != s && (h += String.fromCharCode(s)),
                64 != o && 0 != r && (h += String.fromCharCode(r));
            return h;
          })(t[1])
        );
      }
      async function eV(e) {
        return await new Promise((t) => {
          setTimeout(() => t(null), e);
        });
      }
      function eY(e) {
        return ("0" + e.toString(16)).substr(-2);
      }
      async function eX(e) {
        let t = new TextEncoder().encode(e);
        return Array.from(
          new Uint8Array(await crypto.subtle.digest("SHA-256", t))
        )
          .map((e) => String.fromCharCode(e))
          .join("");
      }
      async function eQ(e) {
        return "undefined" != typeof crypto &&
          void 0 !== crypto.subtle &&
          "undefined" != typeof TextEncoder
          ? btoa(await eX(e))
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "")
          : (console.warn(
              "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
            ),
            e);
      }
      async function eZ(e, t, s = !1) {
        let r = (function () {
            let e = new Uint32Array(56);
            if ("undefined" == typeof crypto) {
              let e =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
                t = e.length,
                s = "";
              for (let r = 0; r < 56; r++)
                s += e.charAt(Math.floor(Math.random() * t));
              return s;
            }
            return crypto.getRandomValues(e), Array.from(e, eY).join("");
          })(),
          i = r;
        s && (i += "/PASSWORD_RECOVERY"), await eJ(e, `${t}-code-verifier`, i);
        let n = await eQ(r),
          a = r === n ? "plain" : "s256";
        return [n, a];
      }
      eH.promiseConstructor = Promise;
      let e0 = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
      class e1 extends Error {
        constructor(e, t, s) {
          super(e),
            (this.__isAuthError = !0),
            (this.name = "AuthError"),
            (this.status = t),
            (this.code = s);
        }
      }
      function e4(e) {
        return "object" == typeof e && null !== e && "__isAuthError" in e;
      }
      class e2 extends e1 {
        constructor(e, t, s) {
          super(e, t, s),
            (this.name = "AuthApiError"),
            (this.status = t),
            (this.code = s);
        }
      }
      class e3 extends e1 {
        constructor(e, t) {
          super(e), (this.name = "AuthUnknownError"), (this.originalError = t);
        }
      }
      class e5 extends e1 {
        constructor(e, t, s, r) {
          super(e, s, r), (this.name = t), (this.status = s);
        }
      }
      class e8 extends e5 {
        constructor() {
          super(
            "Auth session missing!",
            "AuthSessionMissingError",
            400,
            void 0
          );
        }
      }
      class e6 extends e5 {
        constructor() {
          super(
            "Auth session or user missing",
            "AuthInvalidTokenResponseError",
            500,
            void 0
          );
        }
      }
      class e9 extends e5 {
        constructor(e) {
          super(e, "AuthInvalidCredentialsError", 400, void 0);
        }
      }
      class e7 extends e5 {
        constructor(e, t = null) {
          super(e, "AuthImplicitGrantRedirectError", 500, void 0),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class te extends e5 {
        constructor(e, t = null) {
          super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class tt extends e5 {
        constructor(e, t) {
          super(e, "AuthRetryableFetchError", t, void 0);
        }
      }
      function ts(e) {
        return e4(e) && "AuthRetryableFetchError" === e.name;
      }
      class tr extends e5 {
        constructor(e, t, s) {
          super(e, "AuthWeakPasswordError", t, "weak_password"),
            (this.reasons = s);
        }
      }
      var ti = function (e, t) {
        var s = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (s[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (s[r[i]] = e[r[i]]);
        return s;
      };
      let tn = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        ta = [502, 503, 504];
      async function to(e) {
        var t;
        let s, r;
        if (!ez(e)) throw new tt(tn(e), 0);
        if (ta.includes(e.status)) throw new tt(tn(e), e.status);
        try {
          s = await e.json();
        } catch (e) {
          throw new e3(tn(e), e);
        }
        let i = (function (e) {
          let t = e.headers.get(eU);
          if (!t || !t.match(e0)) return null;
          try {
            return new Date(`${t}T00:00:00.0Z`);
          } catch (e) {
            return null;
          }
        })(e);
        if (
          (i &&
          i.getTime() >= eD["2024-01-01"].timestamp &&
          "object" == typeof s &&
          s &&
          "string" == typeof s.code
            ? (r = s.code)
            : "object" == typeof s &&
              s &&
              "string" == typeof s.error_code &&
              (r = s.error_code),
          r)
        ) {
          if ("weak_password" === r)
            throw new tr(
              tn(s),
              e.status,
              (null === (t = s.weak_password) || void 0 === t
                ? void 0
                : t.reasons) || []
            );
          if ("session_not_found" === r) throw new e8();
        } else if (
          "object" == typeof s &&
          s &&
          "object" == typeof s.weak_password &&
          s.weak_password &&
          Array.isArray(s.weak_password.reasons) &&
          s.weak_password.reasons.length &&
          s.weak_password.reasons.reduce(
            (e, t) => e && "string" == typeof t,
            !0
          )
        )
          throw new tr(tn(s), e.status, s.weak_password.reasons);
        throw new e2(tn(s), e.status || 500, r);
      }
      let tl = (e, t, s, r) => {
        let i = { method: e, headers: (null == t ? void 0 : t.headers) || {} };
        return "GET" === e
          ? i
          : ((i.headers = Object.assign(
              { "Content-Type": "application/json;charset=UTF-8" },
              null == t ? void 0 : t.headers
            )),
            (i.body = JSON.stringify(r)),
            Object.assign(Object.assign({}, i), s));
      };
      async function th(e, t, s, r) {
        var i;
        let n = Object.assign({}, null == r ? void 0 : r.headers);
        n[eU] || (n[eU] = eD["2024-01-01"].name),
          (null == r ? void 0 : r.jwt) && (n.Authorization = `Bearer ${r.jwt}`);
        let a =
          null !== (i = null == r ? void 0 : r.query) && void 0 !== i ? i : {};
        (null == r ? void 0 : r.redirectTo) && (a.redirect_to = r.redirectTo);
        let o = Object.keys(a).length
            ? "?" + new URLSearchParams(a).toString()
            : "",
          l = await tc(
            e,
            t,
            s + o,
            { headers: n, noResolveJson: null == r ? void 0 : r.noResolveJson },
            {},
            null == r ? void 0 : r.body
          );
        return (null == r ? void 0 : r.xform)
          ? null == r
            ? void 0
            : r.xform(l)
          : { data: Object.assign({}, l), error: null };
      }
      async function tc(e, t, s, r, i, n) {
        let a;
        let o = tl(t, r, i, n);
        try {
          a = await e(s, Object.assign({}, o));
        } catch (e) {
          throw (console.error(e), new tt(tn(e), 0));
        }
        if ((a.ok || (await to(a)), null == r ? void 0 : r.noResolveJson))
          return a;
        try {
          return await a.json();
        } catch (e) {
          await to(e);
        }
      }
      function tu(e) {
        var t, s;
        let r = null;
        return (
          e.access_token &&
            e.refresh_token &&
            e.expires_in &&
            ((r = Object.assign({}, e)), !e.expires_at) &&
            (r.expires_at =
              ((s = e.expires_in), Math.round(Date.now() / 1e3) + s)),
          {
            data: {
              session: r,
              user: null !== (t = e.user) && void 0 !== t ? t : e,
            },
            error: null,
          }
        );
      }
      function td(e) {
        let t = tu(e);
        return (
          !t.error &&
            e.weak_password &&
            "object" == typeof e.weak_password &&
            Array.isArray(e.weak_password.reasons) &&
            e.weak_password.reasons.length &&
            e.weak_password.message &&
            "string" == typeof e.weak_password.message &&
            e.weak_password.reasons.reduce(
              (e, t) => e && "string" == typeof t,
              !0
            ) &&
            (t.data.weak_password = e.weak_password),
          t
        );
      }
      function tf(e) {
        var t;
        return {
          data: { user: null !== (t = e.user) && void 0 !== t ? t : e },
          error: null,
        };
      }
      function tp(e) {
        return { data: e, error: null };
      }
      function tg(e) {
        let {
          action_link: t,
          email_otp: s,
          hashed_token: r,
          redirect_to: i,
          verification_type: n,
        } = e;
        return {
          data: {
            properties: {
              action_link: t,
              email_otp: s,
              hashed_token: r,
              redirect_to: i,
              verification_type: n,
            },
            user: Object.assign(
              {},
              ti(e, [
                "action_link",
                "email_otp",
                "hashed_token",
                "redirect_to",
                "verification_type",
              ])
            ),
          },
          error: null,
        };
      }
      function ty(e) {
        return e;
      }
      var tv = function (e, t) {
        var s = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (s[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (s[r[i]] = e[r[i]]);
        return s;
      };
      class tm {
        constructor({ url: e = "", headers: t = {}, fetch: s }) {
          (this.url = e),
            (this.headers = t),
            (this.fetch = eq(s)),
            (this.mfa = {
              listFactors: this._listFactors.bind(this),
              deleteFactor: this._deleteFactor.bind(this),
            });
        }
        async signOut(e, t = "global") {
          try {
            return (
              await th(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
                headers: this.headers,
                jwt: e,
                noResolveJson: !0,
              }),
              { data: null, error: null }
            );
          } catch (e) {
            if (e4(e)) return { data: null, error: e };
            throw e;
          }
        }
        async inviteUserByEmail(e, t = {}) {
          try {
            return await th(this.fetch, "POST", `${this.url}/invite`, {
              body: { email: e, data: t.data },
              headers: this.headers,
              redirectTo: t.redirectTo,
              xform: tf,
            });
          } catch (e) {
            if (e4(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async generateLink(e) {
          try {
            let { options: t } = e,
              s = tv(e, ["options"]),
              r = Object.assign(Object.assign({}, s), t);
            return (
              "newEmail" in s &&
                ((r.new_email = null == s ? void 0 : s.newEmail),
                delete r.newEmail),
              await th(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: r,
                headers: this.headers,
                xform: tg,
                redirectTo: null == t ? void 0 : t.redirectTo,
              })
            );
          } catch (e) {
            if (e4(e))
              return { data: { properties: null, user: null }, error: e };
            throw e;
          }
        }
        async createUser(e) {
          try {
            return await th(this.fetch, "POST", `${this.url}/admin/users`, {
              body: e,
              headers: this.headers,
              xform: tf,
            });
          } catch (e) {
            if (e4(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async listUsers(e) {
          var t, s, r, i, n, a, o;
          try {
            let l = { nextPage: null, lastPage: 0, total: 0 },
              h = await th(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                  page:
                    null !==
                      (s =
                        null === (t = null == e ? void 0 : e.page) ||
                        void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== s
                      ? s
                      : "",
                  per_page:
                    null !==
                      (i =
                        null === (r = null == e ? void 0 : e.perPage) ||
                        void 0 === r
                          ? void 0
                          : r.toString()) && void 0 !== i
                      ? i
                      : "",
                },
                xform: ty,
              });
            if (h.error) throw h.error;
            let c = await h.json(),
              u =
                null !== (n = h.headers.get("x-total-count")) && void 0 !== n
                  ? n
                  : 0,
              d =
                null !==
                  (o =
                    null === (a = h.headers.get("link")) || void 0 === a
                      ? void 0
                      : a.split(",")) && void 0 !== o
                  ? o
                  : [];
            return (
              d.length > 0 &&
                (d.forEach((e) => {
                  let t = parseInt(
                      e.split(";")[0].split("=")[1].substring(0, 1)
                    ),
                    s = JSON.parse(e.split(";")[1].split("=")[1]);
                  l[`${s}Page`] = t;
                }),
                (l.total = parseInt(u))),
              { data: Object.assign(Object.assign({}, c), l), error: null }
            );
          } catch (e) {
            if (e4(e)) return { data: { users: [] }, error: e };
            throw e;
          }
        }
        async getUserById(e) {
          try {
            return await th(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
              headers: this.headers,
              xform: tf,
            });
          } catch (e) {
            if (e4(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUserById(e, t) {
          try {
            return await th(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
              body: t,
              headers: this.headers,
              xform: tf,
            });
          } catch (e) {
            if (e4(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async deleteUser(e, t = !1) {
          try {
            return await th(
              this.fetch,
              "DELETE",
              `${this.url}/admin/users/${e}`,
              {
                headers: this.headers,
                body: { should_soft_delete: t },
                xform: tf,
              }
            );
          } catch (e) {
            if (e4(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async _listFactors(e) {
          try {
            let { data: t, error: s } = await th(
              this.fetch,
              "GET",
              `${this.url}/admin/users/${e.userId}/factors`,
              {
                headers: this.headers,
                xform: (e) => ({ data: { factors: e }, error: null }),
              }
            );
            return { data: t, error: s };
          } catch (e) {
            if (e4(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _deleteFactor(e) {
          try {
            return {
              data: await th(
                this.fetch,
                "DELETE",
                `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
                { headers: this.headers }
              ),
              error: null,
            };
          } catch (e) {
            if (e4(e)) return { data: null, error: e };
            throw e;
          }
        }
      }
      let t_ = {
        getItem: (e) => (eF() ? globalThis.localStorage.getItem(e) : null),
        setItem: (e, t) => {
          eF() && globalThis.localStorage.setItem(e, t);
        },
        removeItem: (e) => {
          eF() && globalThis.localStorage.removeItem(e);
        },
      };
      function tw(e = {}) {
        return {
          getItem: (t) => e[t] || null,
          setItem: (t, s) => {
            e[t] = s;
          },
          removeItem: (t) => {
            delete e[t];
          },
        };
      }
      let tb = {
        debug: !!(
          globalThis &&
          eF() &&
          globalThis.localStorage &&
          "true" ===
            globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")
        ),
      };
      class tk extends Error {
        constructor(e) {
          super(e), (this.isAcquireTimeout = !0);
        }
      }
      class tS extends tk {}
      async function tT(e, t, s) {
        tb.debug &&
          console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
        let r = new globalThis.AbortController();
        return (
          t > 0 &&
            setTimeout(() => {
              r.abort(),
                tb.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock acquire timed out",
                    e
                  );
            }, t),
          await globalThis.navigator.locks.request(
            e,
            0 === t
              ? { mode: "exclusive", ifAvailable: !0 }
              : { mode: "exclusive", signal: r.signal },
            async (r) => {
              if (r) {
                tb.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: acquired",
                    e,
                    r.name
                  );
                try {
                  return await s();
                } finally {
                  tb.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: released",
                      e,
                      r.name
                    );
                }
              } else {
                if (0 === t)
                  throw (
                    (tb.debug &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock: not immediately available",
                        e
                      ),
                    new tS(
                      `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
                    ))
                  );
                if (tb.debug)
                  try {
                    let e = await globalThis.navigator.locks.query();
                    console.log(
                      "@supabase/gotrue-js: Navigator LockManager state",
                      JSON.stringify(e, null, "  ")
                    );
                  } catch (e) {
                    console.warn(
                      "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                      e
                    );
                  }
                return (
                  console.warn(
                    "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
                  ),
                  await s()
                );
              }
            }
          )
        );
      }
      !(function () {
        if ("object" != typeof globalThis)
          try {
            Object.defineProperty(Object.prototype, "__magic__", {
              get: function () {
                return this;
              },
              configurable: !0,
            }),
              (__magic__.globalThis = __magic__),
              delete Object.prototype.__magic__;
          } catch (e) {
            "undefined" != typeof self && (self.globalThis = self);
          }
      })();
      let tj = {
        url: "http://localhost:9999",
        storageKey: "supabase.auth.token",
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        headers: eL,
        flowType: "implicit",
        debug: !1,
        hasCustomAuthorizationHeader: !1,
      };
      async function tE(e, t, s) {
        return await s();
      }
      class tO {
        constructor(e) {
          var t, s;
          (this.memoryStorage = null),
            (this.stateChangeEmitters = new Map()),
            (this.autoRefreshTicker = null),
            (this.visibilityChangedCallback = null),
            (this.refreshingDeferred = null),
            (this.initializePromise = null),
            (this.detectSessionInUrl = !0),
            (this.hasCustomAuthorizationHeader = !1),
            (this.suppressGetSessionWarning = !1),
            (this.lockAcquired = !1),
            (this.pendingInLock = []),
            (this.broadcastChannel = null),
            (this.logger = console.log),
            (this.instanceID = tO.nextInstanceID),
            (tO.nextInstanceID += 1),
            this.instanceID > 0 &&
              eN() &&
              console.warn(
                "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
              );
          let r = Object.assign(Object.assign({}, tj), e);
          if (
            ((this.logDebugMessages = !!r.debug),
            "function" == typeof r.debug && (this.logger = r.debug),
            (this.persistSession = r.persistSession),
            (this.storageKey = r.storageKey),
            (this.autoRefreshToken = r.autoRefreshToken),
            (this.admin = new tm({
              url: r.url,
              headers: r.headers,
              fetch: r.fetch,
            })),
            (this.url = r.url),
            (this.headers = r.headers),
            (this.fetch = eq(r.fetch)),
            (this.lock = r.lock || tE),
            (this.detectSessionInUrl = r.detectSessionInUrl),
            (this.flowType = r.flowType),
            (this.hasCustomAuthorizationHeader =
              r.hasCustomAuthorizationHeader),
            r.lock
              ? (this.lock = r.lock)
              : eN() &&
                (null ===
                  (t = null == globalThis ? void 0 : globalThis.navigator) ||
                void 0 === t
                  ? void 0
                  : t.locks)
              ? (this.lock = tT)
              : (this.lock = tE),
            (this.mfa = {
              verify: this._verify.bind(this),
              enroll: this._enroll.bind(this),
              unenroll: this._unenroll.bind(this),
              challenge: this._challenge.bind(this),
              listFactors: this._listFactors.bind(this),
              challengeAndVerify: this._challengeAndVerify.bind(this),
              getAuthenticatorAssuranceLevel:
                this._getAuthenticatorAssuranceLevel.bind(this),
            }),
            this.persistSession
              ? r.storage
                ? (this.storage = r.storage)
                : eF()
                ? (this.storage = t_)
                : ((this.memoryStorage = {}),
                  (this.storage = tw(this.memoryStorage)))
              : ((this.memoryStorage = {}),
                (this.storage = tw(this.memoryStorage))),
            eN() &&
              globalThis.BroadcastChannel &&
              this.persistSession &&
              this.storageKey)
          ) {
            try {
              this.broadcastChannel = new globalThis.BroadcastChannel(
                this.storageKey
              );
            } catch (e) {
              console.error(
                "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
                e
              );
            }
            null === (s = this.broadcastChannel) ||
              void 0 === s ||
              s.addEventListener("message", async (e) => {
                this._debug(
                  "received broadcast notification from other tab or client",
                  e
                ),
                  await this._notifyAllSubscribers(
                    e.data.event,
                    e.data.session,
                    !1
                  );
              });
          }
          this.initialize();
        }
        _debug(...e) {
          return (
            this.logDebugMessages &&
              this.logger(
                `GoTrueClient@${
                  this.instanceID
                } (${eI}) ${new Date().toISOString()}`,
                ...e
              ),
            this
          );
        }
        async initialize() {
          return (
            this.initializePromise ||
              (this.initializePromise = (async () =>
                await this._acquireLock(
                  -1,
                  async () => await this._initialize()
                ))()),
            await this.initializePromise
          );
        }
        async _initialize() {
          try {
            let e = !!eN() && (await this._isPKCEFlow());
            if (
              (this._debug("#_initialize()", "begin", "is PKCE flow", e),
              e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
            ) {
              let { data: t, error: s } = await this._getSessionFromURL(e);
              if (s) {
                if (
                  (this._debug(
                    "#_initialize()",
                    "error detecting session from URL",
                    s
                  ),
                  (null == s ? void 0 : s.message) ===
                    "Identity is already linked" ||
                    (null == s ? void 0 : s.message) ===
                      "Identity is already linked to another user")
                )
                  return { error: s };
                return await this._removeSession(), { error: s };
              }
              let { session: r, redirectType: i } = t;
              return (
                this._debug(
                  "#_initialize()",
                  "detected session in URL",
                  r,
                  "redirect type",
                  i
                ),
                await this._saveSession(r),
                setTimeout(async () => {
                  "recovery" === i
                    ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", r)
                    : await this._notifyAllSubscribers("SIGNED_IN", r);
                }, 0),
                { error: null }
              );
            }
            return await this._recoverAndRefresh(), { error: null };
          } catch (e) {
            if (e4(e)) return { error: e };
            return {
              error: new e3("Unexpected error during initialization", e),
            };
          } finally {
            await this._handleVisibilityChange(),
              this._debug("#_initialize()", "end");
          }
        }
        async signInAnonymously(e) {
          var t, s, r;
          try {
            let { data: i, error: n } = await th(
              this.fetch,
              "POST",
              `${this.url}/signup`,
              {
                headers: this.headers,
                body: {
                  data:
                    null !==
                      (s =
                        null === (t = null == e ? void 0 : e.options) ||
                        void 0 === t
                          ? void 0
                          : t.data) && void 0 !== s
                      ? s
                      : {},
                  gotrue_meta_security: {
                    captcha_token:
                      null === (r = null == e ? void 0 : e.options) ||
                      void 0 === r
                        ? void 0
                        : r.captchaToken,
                  },
                },
                xform: tu,
              }
            );
            if (n || !i)
              return { data: { user: null, session: null }, error: n };
            let a = i.session,
              o = i.user;
            return (
              i.session &&
                (await this._saveSession(i.session),
                await this._notifyAllSubscribers("SIGNED_IN", a)),
              { data: { user: o, session: a }, error: null }
            );
          } catch (e) {
            if (e4(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signUp(e) {
          var t, s, r;
          try {
            let i;
            if ("email" in e) {
              let { email: s, password: r, options: n } = e,
                a = null,
                o = null;
              "pkce" === this.flowType &&
                ([a, o] = await eZ(this.storage, this.storageKey)),
                (i = await th(this.fetch, "POST", `${this.url}/signup`, {
                  headers: this.headers,
                  redirectTo: null == n ? void 0 : n.emailRedirectTo,
                  body: {
                    email: s,
                    password: r,
                    data:
                      null !== (t = null == n ? void 0 : n.data) && void 0 !== t
                        ? t
                        : {},
                    gotrue_meta_security: {
                      captcha_token: null == n ? void 0 : n.captchaToken,
                    },
                    code_challenge: a,
                    code_challenge_method: o,
                  },
                  xform: tu,
                }));
            } else if ("phone" in e) {
              let { phone: t, password: n, options: a } = e;
              i = await th(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                  phone: t,
                  password: n,
                  data:
                    null !== (s = null == a ? void 0 : a.data) && void 0 !== s
                      ? s
                      : {},
                  channel:
                    null !== (r = null == a ? void 0 : a.channel) &&
                    void 0 !== r
                      ? r
                      : "sms",
                  gotrue_meta_security: {
                    captcha_token: null == a ? void 0 : a.captchaToken,
                  },
                },
                xform: tu,
              });
            } else
              throw new e9(
                "You must provide either an email or phone number and a password"
              );
            let { data: n, error: a } = i;
            if (a || !n)
              return { data: { user: null, session: null }, error: a };
            let o = n.session,
              l = n.user;
            return (
              n.session &&
                (await this._saveSession(n.session),
                await this._notifyAllSubscribers("SIGNED_IN", o)),
              { data: { user: l, session: o }, error: null }
            );
          } catch (e) {
            if (e4(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithPassword(e) {
          try {
            let t;
            if ("email" in e) {
              let { email: s, password: r, options: i } = e;
              t = await th(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    email: s,
                    password: r,
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                  },
                  xform: td,
                }
              );
            } else if ("phone" in e) {
              let { phone: s, password: r, options: i } = e;
              t = await th(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    phone: s,
                    password: r,
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                  },
                  xform: td,
                }
              );
            } else
              throw new e9(
                "You must provide either an email or phone number and a password"
              );
            let { data: s, error: r } = t;
            if (r) return { data: { user: null, session: null }, error: r };
            if (!s || !s.session || !s.user)
              return { data: { user: null, session: null }, error: new e6() };
            return (
              s.session &&
                (await this._saveSession(s.session),
                await this._notifyAllSubscribers("SIGNED_IN", s.session)),
              {
                data: Object.assign(
                  { user: s.user, session: s.session },
                  s.weak_password ? { weakPassword: s.weak_password } : null
                ),
                error: r,
              }
            );
          } catch (e) {
            if (e4(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOAuth(e) {
          var t, s, r, i;
          return await this._handleProviderSignIn(e.provider, {
            redirectTo:
              null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo,
            scopes:
              null === (s = e.options) || void 0 === s ? void 0 : s.scopes,
            queryParams:
              null === (r = e.options) || void 0 === r ? void 0 : r.queryParams,
            skipBrowserRedirect:
              null === (i = e.options) || void 0 === i
                ? void 0
                : i.skipBrowserRedirect,
          });
        }
        async exchangeCodeForSession(e) {
          return (
            await this.initializePromise,
            this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
          );
        }
        async _exchangeCodeForSession(e) {
          let t = await eK(this.storage, `${this.storageKey}-code-verifier`),
            [s, r] = (null != t ? t : "").split("/");
          try {
            let { data: t, error: i } = await th(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=pkce`,
              {
                headers: this.headers,
                body: { auth_code: e, code_verifier: s },
                xform: tu,
              }
            );
            if ((await eG(this.storage, `${this.storageKey}-code-verifier`), i))
              throw i;
            if (!t || !t.session || !t.user)
              return {
                data: { user: null, session: null, redirectType: null },
                error: new e6(),
              };
            return (
              t.session &&
                (await this._saveSession(t.session),
                await this._notifyAllSubscribers("SIGNED_IN", t.session)),
              {
                data: Object.assign(Object.assign({}, t), {
                  redirectType: null != r ? r : null,
                }),
                error: i,
              }
            );
          } catch (e) {
            if (e4(e))
              return {
                data: { user: null, session: null, redirectType: null },
                error: e,
              };
            throw e;
          }
        }
        async signInWithIdToken(e) {
          try {
            let {
                options: t,
                provider: s,
                token: r,
                access_token: i,
                nonce: n,
              } = e,
              { data: a, error: o } = await th(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=id_token`,
                {
                  headers: this.headers,
                  body: {
                    provider: s,
                    id_token: r,
                    access_token: i,
                    nonce: n,
                    gotrue_meta_security: {
                      captcha_token: null == t ? void 0 : t.captchaToken,
                    },
                  },
                  xform: tu,
                }
              );
            if (o) return { data: { user: null, session: null }, error: o };
            if (!a || !a.session || !a.user)
              return { data: { user: null, session: null }, error: new e6() };
            return (
              a.session &&
                (await this._saveSession(a.session),
                await this._notifyAllSubscribers("SIGNED_IN", a.session)),
              { data: a, error: o }
            );
          } catch (e) {
            if (e4(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOtp(e) {
          var t, s, r, i, n;
          try {
            if ("email" in e) {
              let { email: r, options: i } = e,
                n = null,
                a = null;
              "pkce" === this.flowType &&
                ([n, a] = await eZ(this.storage, this.storageKey));
              let { error: o } = await th(
                this.fetch,
                "POST",
                `${this.url}/otp`,
                {
                  headers: this.headers,
                  body: {
                    email: r,
                    data:
                      null !== (t = null == i ? void 0 : i.data) && void 0 !== t
                        ? t
                        : {},
                    create_user:
                      null === (s = null == i ? void 0 : i.shouldCreateUser) ||
                      void 0 === s ||
                      s,
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                    code_challenge: n,
                    code_challenge_method: a,
                  },
                  redirectTo: null == i ? void 0 : i.emailRedirectTo,
                }
              );
              return { data: { user: null, session: null }, error: o };
            }
            if ("phone" in e) {
              let { phone: t, options: s } = e,
                { data: a, error: o } = await th(
                  this.fetch,
                  "POST",
                  `${this.url}/otp`,
                  {
                    headers: this.headers,
                    body: {
                      phone: t,
                      data:
                        null !== (r = null == s ? void 0 : s.data) &&
                        void 0 !== r
                          ? r
                          : {},
                      create_user:
                        null ===
                          (i = null == s ? void 0 : s.shouldCreateUser) ||
                        void 0 === i ||
                        i,
                      gotrue_meta_security: {
                        captcha_token: null == s ? void 0 : s.captchaToken,
                      },
                      channel:
                        null !== (n = null == s ? void 0 : s.channel) &&
                        void 0 !== n
                          ? n
                          : "sms",
                    },
                  }
                );
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == a ? void 0 : a.message_id,
                },
                error: o,
              };
            }
            throw new e9("You must provide either an email or phone number.");
          } catch (e) {
            if (e4(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async verifyOtp(e) {
          var t, s;
          try {
            let r, i;
            "options" in e &&
              ((r =
                null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.redirectTo),
              (i =
                null === (s = e.options) || void 0 === s
                  ? void 0
                  : s.captchaToken));
            let { data: n, error: a } = await th(
              this.fetch,
              "POST",
              `${this.url}/verify`,
              {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                  gotrue_meta_security: { captcha_token: i },
                }),
                redirectTo: r,
                xform: tu,
              }
            );
            if (a) throw a;
            if (!n) throw Error("An error occurred on token verification.");
            let o = n.session,
              l = n.user;
            return (
              (null == o ? void 0 : o.access_token) &&
                (await this._saveSession(o),
                await this._notifyAllSubscribers(
                  "recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN",
                  o
                )),
              { data: { user: l, session: o }, error: null }
            );
          } catch (e) {
            if (e4(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithSSO(e) {
          var t, s, r;
          try {
            let i = null,
              n = null;
            return (
              "pkce" === this.flowType &&
                ([i, n] = await eZ(this.storage, this.storageKey)),
              await th(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          {},
                          "providerId" in e
                            ? { provider_id: e.providerId }
                            : null
                        ),
                        "domain" in e ? { domain: e.domain } : null
                      ),
                      {
                        redirect_to:
                          null !==
                            (s =
                              null === (t = e.options) || void 0 === t
                                ? void 0
                                : t.redirectTo) && void 0 !== s
                            ? s
                            : void 0,
                      }
                    ),
                    (
                      null === (r = null == e ? void 0 : e.options) ||
                      void 0 === r
                        ? void 0
                        : r.captchaToken
                    )
                      ? {
                          gotrue_meta_security: {
                            captcha_token: e.options.captchaToken,
                          },
                        }
                      : null
                  ),
                  {
                    skip_http_redirect: !0,
                    code_challenge: i,
                    code_challenge_method: n,
                  }
                ),
                headers: this.headers,
                xform: tp,
              })
            );
          } catch (e) {
            if (e4(e)) return { data: null, error: e };
            throw e;
          }
        }
        async reauthenticate() {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._reauthenticate()
            )
          );
        }
        async _reauthenticate() {
          try {
            return await this._useSession(async (e) => {
              let {
                data: { session: t },
                error: s,
              } = e;
              if (s) throw s;
              if (!t) throw new e8();
              let { error: r } = await th(
                this.fetch,
                "GET",
                `${this.url}/reauthenticate`,
                { headers: this.headers, jwt: t.access_token }
              );
              return { data: { user: null, session: null }, error: r };
            });
          } catch (e) {
            if (e4(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async resend(e) {
          try {
            let t = `${this.url}/resend`;
            if ("email" in e) {
              let { email: s, type: r, options: i } = e,
                { error: n } = await th(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    email: s,
                    type: r,
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                  },
                  redirectTo: null == i ? void 0 : i.emailRedirectTo,
                });
              return { data: { user: null, session: null }, error: n };
            }
            if ("phone" in e) {
              let { phone: s, type: r, options: i } = e,
                { data: n, error: a } = await th(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    phone: s,
                    type: r,
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                  },
                });
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == n ? void 0 : n.message_id,
                },
                error: a,
              };
            }
            throw new e9(
              "You must provide either an email or phone number and a type"
            );
          } catch (e) {
            if (e4(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async getSession() {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () =>
              this._useSession(async (e) => e)
            )
          );
        }
        async _acquireLock(e, t) {
          this._debug("#_acquireLock", "begin", e);
          try {
            if (this.lockAcquired) {
              let e = this.pendingInLock.length
                  ? this.pendingInLock[this.pendingInLock.length - 1]
                  : Promise.resolve(),
                s = (async () => (await e, await t()))();
              return (
                this.pendingInLock.push(
                  (async () => {
                    try {
                      await s;
                    } catch (e) {}
                  })()
                ),
                s
              );
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
              this._debug(
                "#_acquireLock",
                "lock acquired for storage key",
                this.storageKey
              );
              try {
                this.lockAcquired = !0;
                let e = t();
                for (
                  this.pendingInLock.push(
                    (async () => {
                      try {
                        await e;
                      } catch (e) {}
                    })()
                  ),
                    await e;
                  this.pendingInLock.length;

                ) {
                  let e = [...this.pendingInLock];
                  await Promise.all(e), this.pendingInLock.splice(0, e.length);
                }
                return await e;
              } finally {
                this._debug(
                  "#_acquireLock",
                  "lock released for storage key",
                  this.storageKey
                ),
                  (this.lockAcquired = !1);
              }
            });
          } finally {
            this._debug("#_acquireLock", "end");
          }
        }
        async _useSession(e) {
          this._debug("#_useSession", "begin");
          try {
            let t = await this.__loadSession();
            return await e(t);
          } finally {
            this._debug("#_useSession", "end");
          }
        }
        async __loadSession() {
          this._debug("#__loadSession()", "begin"),
            this.lockAcquired ||
              this._debug(
                "#__loadSession()",
                "used outside of an acquired lock!",
                Error().stack
              );
          try {
            let e = null,
              t = await eK(this.storage, this.storageKey);
            if (
              (this._debug("#getSession()", "session from storage", t),
              null !== t &&
                (this._isValidSession(t)
                  ? (e = t)
                  : (this._debug(
                      "#getSession()",
                      "session from storage is not valid"
                    ),
                    await this._removeSession())),
              !e)
            )
              return { data: { session: null }, error: null };
            let s = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
            if (
              (this._debug(
                "#__loadSession()",
                `session has${s ? "" : " not"} expired`,
                "expires_at",
                e.expires_at
              ),
              !s)
            ) {
              if (this.storage.isServer) {
                let t = this.suppressGetSessionWarning;
                e = new Proxy(e, {
                  get: (e, s, r) => (
                    t ||
                      "user" !== s ||
                      (console.warn(
                        "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                      ),
                      (t = !0),
                      (this.suppressGetSessionWarning = !0)),
                    Reflect.get(e, s, r)
                  ),
                });
              }
              return { data: { session: e }, error: null };
            }
            let { session: r, error: i } = await this._callRefreshToken(
              e.refresh_token
            );
            if (i) return { data: { session: null }, error: i };
            return { data: { session: r }, error: null };
          } finally {
            this._debug("#__loadSession()", "end");
          }
        }
        async getUser(e) {
          return e
            ? await this._getUser(e)
            : (await this.initializePromise,
              await this._acquireLock(-1, async () => await this._getUser()));
        }
        async _getUser(e) {
          try {
            if (e)
              return await th(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: tf,
              });
            return await this._useSession(async (e) => {
              var t, s, r;
              let { data: i, error: n } = e;
              if (n) throw n;
              return (null === (t = i.session) || void 0 === t
                ? void 0
                : t.access_token) || this.hasCustomAuthorizationHeader
                ? await th(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt:
                      null !==
                        (r =
                          null === (s = i.session) || void 0 === s
                            ? void 0
                            : s.access_token) && void 0 !== r
                        ? r
                        : void 0,
                    xform: tf,
                  })
                : { data: { user: null }, error: new e8() };
            });
          } catch (e) {
            if (e4(e))
              return (
                e4(e) &&
                  "AuthSessionMissingError" === e.name &&
                  (await this._removeSession(),
                  await eG(this.storage, `${this.storageKey}-code-verifier`),
                  await this._notifyAllSubscribers("SIGNED_OUT", null)),
                { data: { user: null }, error: e }
              );
            throw e;
          }
        }
        async updateUser(e, t = {}) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._updateUser(e, t)
            )
          );
        }
        async _updateUser(e, t = {}) {
          try {
            return await this._useSession(async (s) => {
              let { data: r, error: i } = s;
              if (i) throw i;
              if (!r.session) throw new e8();
              let n = r.session,
                a = null,
                o = null;
              "pkce" === this.flowType &&
                null != e.email &&
                ([a, o] = await eZ(this.storage, this.storageKey));
              let { data: l, error: h } = await th(
                this.fetch,
                "PUT",
                `${this.url}/user`,
                {
                  headers: this.headers,
                  redirectTo: null == t ? void 0 : t.emailRedirectTo,
                  body: Object.assign(Object.assign({}, e), {
                    code_challenge: a,
                    code_challenge_method: o,
                  }),
                  jwt: n.access_token,
                  xform: tf,
                }
              );
              if (h) throw h;
              return (
                (n.user = l.user),
                await this._saveSession(n),
                await this._notifyAllSubscribers("USER_UPDATED", n),
                { data: { user: n.user }, error: null }
              );
            });
          } catch (e) {
            if (e4(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        _decodeJWT(e) {
          return eW(e);
        }
        async setSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._setSession(e))
          );
        }
        async _setSession(e) {
          try {
            if (!e.access_token || !e.refresh_token) throw new e8();
            let t = Date.now() / 1e3,
              s = t,
              r = !0,
              i = null,
              n = eW(e.access_token);
            if ((n.exp && (r = (s = n.exp) <= t), r)) {
              let { session: t, error: s } = await this._callRefreshToken(
                e.refresh_token
              );
              if (s) return { data: { user: null, session: null }, error: s };
              if (!t)
                return { data: { user: null, session: null }, error: null };
              i = t;
            } else {
              let { data: r, error: n } = await this._getUser(e.access_token);
              if (n) throw n;
              (i = {
                access_token: e.access_token,
                refresh_token: e.refresh_token,
                user: r.user,
                token_type: "bearer",
                expires_in: s - t,
                expires_at: s,
              }),
                await this._saveSession(i),
                await this._notifyAllSubscribers("SIGNED_IN", i);
            }
            return { data: { user: i.user, session: i }, error: null };
          } catch (e) {
            if (e4(e)) return { data: { session: null, user: null }, error: e };
            throw e;
          }
        }
        async refreshSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._refreshSession(e)
            )
          );
        }
        async _refreshSession(e) {
          try {
            return await this._useSession(async (t) => {
              var s;
              if (!e) {
                let { data: r, error: i } = t;
                if (i) throw i;
                e = null !== (s = r.session) && void 0 !== s ? s : void 0;
              }
              if (!(null == e ? void 0 : e.refresh_token)) throw new e8();
              let { session: r, error: i } = await this._callRefreshToken(
                e.refresh_token
              );
              return i
                ? { data: { user: null, session: null }, error: i }
                : r
                ? { data: { user: r.user, session: r }, error: null }
                : { data: { user: null, session: null }, error: null };
            });
          } catch (e) {
            if (e4(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async _getSessionFromURL(e) {
          try {
            if (!eN()) throw new e7("No browser detected.");
            if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
              if ("pkce" == this.flowType && !e)
                throw new te("Not a valid PKCE flow url.");
            } else throw new e7("Not a valid implicit grant flow url.");
            let t = eM(window.location.href);
            if (e) {
              if (!t.code) throw new te("No code detected.");
              let { data: e, error: s } = await this._exchangeCodeForSession(
                t.code
              );
              if (s) throw s;
              let r = new URL(window.location.href);
              return (
                r.searchParams.delete("code"),
                window.history.replaceState(
                  window.history.state,
                  "",
                  r.toString()
                ),
                {
                  data: { session: e.session, redirectType: null },
                  error: null,
                }
              );
            }
            if (t.error || t.error_description || t.error_code)
              throw new e7(
                t.error_description ||
                  "Error in URL with unspecified error_description",
                {
                  error: t.error || "unspecified_error",
                  code: t.error_code || "unspecified_code",
                }
              );
            let {
              provider_token: s,
              provider_refresh_token: r,
              access_token: i,
              refresh_token: n,
              expires_in: a,
              expires_at: o,
              token_type: l,
            } = t;
            if (!i || !a || !n || !l) throw new e7("No session defined in URL");
            let h = Math.round(Date.now() / 1e3),
              c = parseInt(a),
              u = h + c;
            o && (u = parseInt(o));
            let d = u - h;
            1e3 * d <= 3e4 &&
              console.warn(
                `@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${c}s`
              );
            let f = u - c;
            h - f >= 120
              ? console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                  f,
                  u,
                  h
                )
              : h - f < 0 &&
                console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
                  f,
                  u,
                  h
                );
            let { data: p, error: g } = await this._getUser(i);
            if (g) throw g;
            let y = {
              provider_token: s,
              provider_refresh_token: r,
              access_token: i,
              expires_in: c,
              expires_at: u,
              refresh_token: n,
              token_type: l,
              user: p.user,
            };
            return (
              (window.location.hash = ""),
              this._debug(
                "#_getSessionFromURL()",
                "clearing window.location.hash"
              ),
              { data: { session: y, redirectType: t.type }, error: null }
            );
          } catch (e) {
            if (e4(e))
              return { data: { session: null, redirectType: null }, error: e };
            throw e;
          }
        }
        _isImplicitGrantFlow() {
          let e = eM(window.location.href);
          return !!(eN() && (e.access_token || e.error_description));
        }
        async _isPKCEFlow() {
          let e = eM(window.location.href),
            t = await eK(this.storage, `${this.storageKey}-code-verifier`);
          return !!(e.code && t);
        }
        async signOut(e = { scope: "global" }) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._signOut(e))
          );
        }
        async _signOut({ scope: e } = { scope: "global" }) {
          return await this._useSession(async (t) => {
            var s;
            let { data: r, error: i } = t;
            if (i) return { error: i };
            let n =
              null === (s = r.session) || void 0 === s
                ? void 0
                : s.access_token;
            if (n) {
              let { error: t } = await this.admin.signOut(n, e);
              if (
                t &&
                !(
                  e4(t) &&
                  "AuthApiError" === t.name &&
                  (404 === t.status || 401 === t.status || 403 === t.status)
                )
              )
                return { error: t };
            }
            return (
              "others" !== e &&
                (await this._removeSession(),
                await eG(this.storage, `${this.storageKey}-code-verifier`),
                await this._notifyAllSubscribers("SIGNED_OUT", null)),
              { error: null }
            );
          });
        }
        onAuthStateChange(e) {
          let t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                let t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            ),
            s = {
              id: t,
              callback: e,
              unsubscribe: () => {
                this._debug(
                  "#unsubscribe()",
                  "state change callback with id removed",
                  t
                ),
                  this.stateChangeEmitters.delete(t);
              },
            };
          return (
            this._debug(
              "#onAuthStateChange()",
              "registered callback with id",
              t
            ),
            this.stateChangeEmitters.set(t, s),
            (async () => {
              await this.initializePromise,
                await this._acquireLock(-1, async () => {
                  this._emitInitialSession(t);
                });
            })(),
            { data: { subscription: s } }
          );
        }
        async _emitInitialSession(e) {
          return await this._useSession(async (t) => {
            var s, r;
            try {
              let {
                data: { session: r },
                error: i,
              } = t;
              if (i) throw i;
              await (null === (s = this.stateChangeEmitters.get(e)) ||
              void 0 === s
                ? void 0
                : s.callback("INITIAL_SESSION", r)),
                this._debug("INITIAL_SESSION", "callback id", e, "session", r);
            } catch (t) {
              await (null === (r = this.stateChangeEmitters.get(e)) ||
              void 0 === r
                ? void 0
                : r.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", e, "error", t),
                console.error(t);
            }
          });
        }
        async resetPasswordForEmail(e, t = {}) {
          let s = null,
            r = null;
          "pkce" === this.flowType &&
            ([s, r] = await eZ(this.storage, this.storageKey, !0));
          try {
            return await th(this.fetch, "POST", `${this.url}/recover`, {
              body: {
                email: e,
                code_challenge: s,
                code_challenge_method: r,
                gotrue_meta_security: { captcha_token: t.captchaToken },
              },
              headers: this.headers,
              redirectTo: t.redirectTo,
            });
          } catch (e) {
            if (e4(e)) return { data: null, error: e };
            throw e;
          }
        }
        async getUserIdentities() {
          var e;
          try {
            let { data: t, error: s } = await this.getUser();
            if (s) throw s;
            return {
              data: {
                identities:
                  null !== (e = t.user.identities) && void 0 !== e ? e : [],
              },
              error: null,
            };
          } catch (e) {
            if (e4(e)) return { data: null, error: e };
            throw e;
          }
        }
        async linkIdentity(e) {
          var t;
          try {
            let { data: s, error: r } = await this._useSession(async (t) => {
              var s, r, i, n, a;
              let { data: o, error: l } = t;
              if (l) throw l;
              let h = await this._getUrlForProvider(
                `${this.url}/user/identities/authorize`,
                e.provider,
                {
                  redirectTo:
                    null === (s = e.options) || void 0 === s
                      ? void 0
                      : s.redirectTo,
                  scopes:
                    null === (r = e.options) || void 0 === r
                      ? void 0
                      : r.scopes,
                  queryParams:
                    null === (i = e.options) || void 0 === i
                      ? void 0
                      : i.queryParams,
                  skipBrowserRedirect: !0,
                }
              );
              return await th(this.fetch, "GET", h, {
                headers: this.headers,
                jwt:
                  null !==
                    (a =
                      null === (n = o.session) || void 0 === n
                        ? void 0
                        : n.access_token) && void 0 !== a
                    ? a
                    : void 0,
              });
            });
            if (r) throw r;
            return (
              !eN() ||
                (null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.skipBrowserRedirect) ||
                window.location.assign(null == s ? void 0 : s.url),
              {
                data: { provider: e.provider, url: null == s ? void 0 : s.url },
                error: null,
              }
            );
          } catch (t) {
            if (e4(t))
              return { data: { provider: e.provider, url: null }, error: t };
            throw t;
          }
        }
        async unlinkIdentity(e) {
          try {
            return await this._useSession(async (t) => {
              var s, r;
              let { data: i, error: n } = t;
              if (n) throw n;
              return await th(
                this.fetch,
                "DELETE",
                `${this.url}/user/identities/${e.identity_id}`,
                {
                  headers: this.headers,
                  jwt:
                    null !==
                      (r =
                        null === (s = i.session) || void 0 === s
                          ? void 0
                          : s.access_token) && void 0 !== r
                      ? r
                      : void 0,
                }
              );
            });
          } catch (e) {
            if (e4(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _refreshAccessToken(e) {
          let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
          this._debug(t, "begin");
          try {
            var s, r;
            let i = Date.now();
            return await ((s = async (s) => (
              s > 0 && (await eV(200 * Math.pow(2, s - 1))),
              this._debug(t, "refreshing attempt", s),
              await th(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=refresh_token`,
                { body: { refresh_token: e }, headers: this.headers, xform: tu }
              )
            )),
            (r = (e, t) =>
              t && ts(t) && Date.now() + 200 * Math.pow(2, e) - i < 3e4),
            new Promise((e, t) => {
              (async () => {
                for (let i = 0; i < 1 / 0; i++)
                  try {
                    let t = await s(i);
                    if (!r(i, null, t)) {
                      e(t);
                      return;
                    }
                  } catch (e) {
                    if (!r(i, e)) {
                      t(e);
                      return;
                    }
                  }
              })();
            }));
          } catch (e) {
            if ((this._debug(t, "error", e), e4(e)))
              return { data: { session: null, user: null }, error: e };
            throw e;
          } finally {
            this._debug(t, "end");
          }
        }
        _isValidSession(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "access_token" in e &&
            "refresh_token" in e &&
            "expires_at" in e
          );
        }
        async _handleProviderSignIn(e, t) {
          let s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: t.redirectTo,
            scopes: t.scopes,
            queryParams: t.queryParams,
          });
          return (
            this._debug(
              "#_handleProviderSignIn()",
              "provider",
              e,
              "options",
              t,
              "url",
              s
            ),
            eN() && !t.skipBrowserRedirect && window.location.assign(s),
            { data: { provider: e, url: s }, error: null }
          );
        }
        async _recoverAndRefresh() {
          var e;
          let t = "#_recoverAndRefresh()";
          this._debug(t, "begin");
          try {
            let s = await eK(this.storage, this.storageKey);
            if (
              (this._debug(t, "session from storage", s),
              !this._isValidSession(s))
            ) {
              this._debug(t, "session is not valid"),
                null !== s && (await this._removeSession());
              return;
            }
            let r = Math.round(Date.now() / 1e3),
              i =
                (null !== (e = s.expires_at) && void 0 !== e ? e : 1 / 0) <
                r + 10;
            if (
              (this._debug(
                t,
                `session has${i ? "" : " not"} expired with margin of 10s`
              ),
              i)
            ) {
              if (this.autoRefreshToken && s.refresh_token) {
                let { error: e } = await this._callRefreshToken(
                  s.refresh_token
                );
                e &&
                  (console.error(e),
                  ts(e) ||
                    (this._debug(
                      t,
                      "refresh failed with a non-retryable error, removing the session",
                      e
                    ),
                    await this._removeSession()));
              }
            } else await this._notifyAllSubscribers("SIGNED_IN", s);
          } catch (e) {
            this._debug(t, "error", e), console.error(e);
            return;
          } finally {
            this._debug(t, "end");
          }
        }
        async _callRefreshToken(e) {
          var t, s;
          if (!e) throw new e8();
          if (this.refreshingDeferred) return this.refreshingDeferred.promise;
          let r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
          this._debug(r, "begin");
          try {
            this.refreshingDeferred = new eH();
            let { data: t, error: s } = await this._refreshAccessToken(e);
            if (s) throw s;
            if (!t.session) throw new e8();
            await this._saveSession(t.session),
              await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
            let r = { session: t.session, error: null };
            return this.refreshingDeferred.resolve(r), r;
          } catch (e) {
            if ((this._debug(r, "error", e), e4(e))) {
              let s = { session: null, error: e };
              return (
                ts(e) ||
                  (await this._removeSession(),
                  await this._notifyAllSubscribers("SIGNED_OUT", null)),
                null === (t = this.refreshingDeferred) ||
                  void 0 === t ||
                  t.resolve(s),
                s
              );
            }
            throw (
              (null === (s = this.refreshingDeferred) ||
                void 0 === s ||
                s.reject(e),
              e)
            );
          } finally {
            (this.refreshingDeferred = null), this._debug(r, "end");
          }
        }
        async _notifyAllSubscribers(e, t, s = !0) {
          let r = `#_notifyAllSubscribers(${e})`;
          this._debug(r, "begin", t, `broadcast = ${s}`);
          try {
            this.broadcastChannel &&
              s &&
              this.broadcastChannel.postMessage({ event: e, session: t });
            let r = [],
              i = Array.from(this.stateChangeEmitters.values()).map(
                async (s) => {
                  try {
                    await s.callback(e, t);
                  } catch (e) {
                    r.push(e);
                  }
                }
              );
            if ((await Promise.all(i), r.length > 0)) {
              for (let e = 0; e < r.length; e += 1) console.error(r[e]);
              throw r[0];
            }
          } finally {
            this._debug(r, "end");
          }
        }
        async _saveSession(e) {
          this._debug("#_saveSession()", e),
            (this.suppressGetSessionWarning = !0),
            await eJ(this.storage, this.storageKey, e);
        }
        async _removeSession() {
          this._debug("#_removeSession()"),
            await eG(this.storage, this.storageKey);
        }
        _removeVisibilityChangedCallback() {
          this._debug("#_removeVisibilityChangedCallback()");
          let e = this.visibilityChangedCallback;
          this.visibilityChangedCallback = null;
          try {
            e &&
              eN() &&
              (null == window ? void 0 : window.removeEventListener) &&
              window.removeEventListener("visibilitychange", e);
          } catch (e) {
            console.error("removing visibilitychange callback failed", e);
          }
        }
        async _startAutoRefresh() {
          await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
          let e = setInterval(() => this._autoRefreshTokenTick(), 3e4);
          (this.autoRefreshTicker = e),
            e && "object" == typeof e && "function" == typeof e.unref
              ? e.unref()
              : "undefined" != typeof Deno &&
                "function" == typeof Deno.unrefTimer &&
                Deno.unrefTimer(e),
            setTimeout(async () => {
              await this.initializePromise, await this._autoRefreshTokenTick();
            }, 0);
        }
        async _stopAutoRefresh() {
          this._debug("#_stopAutoRefresh()");
          let e = this.autoRefreshTicker;
          (this.autoRefreshTicker = null), e && clearInterval(e);
        }
        async startAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._startAutoRefresh();
        }
        async stopAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._stopAutoRefresh();
        }
        async _autoRefreshTokenTick() {
          this._debug("#_autoRefreshTokenTick()", "begin");
          try {
            await this._acquireLock(0, async () => {
              try {
                let e = Date.now();
                try {
                  return await this._useSession(async (t) => {
                    let {
                      data: { session: s },
                    } = t;
                    if (!s || !s.refresh_token || !s.expires_at) {
                      this._debug("#_autoRefreshTokenTick()", "no session");
                      return;
                    }
                    let r = Math.floor((1e3 * s.expires_at - e) / 3e4);
                    this._debug(
                      "#_autoRefreshTokenTick()",
                      `access token expires in ${r} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`
                    ),
                      r <= 3 && (await this._callRefreshToken(s.refresh_token));
                  });
                } catch (e) {
                  console.error(
                    "Auto refresh tick failed with error. This is likely a transient error.",
                    e
                  );
                }
              } finally {
                this._debug("#_autoRefreshTokenTick()", "end");
              }
            });
          } catch (e) {
            if (e.isAcquireTimeout || e instanceof tk)
              this._debug("auto refresh token tick lock not available");
            else throw e;
          }
        }
        async _handleVisibilityChange() {
          if (
            (this._debug("#_handleVisibilityChange()"),
            !eN() || !(null == window ? void 0 : window.addEventListener))
          )
            return this.autoRefreshToken && this.startAutoRefresh(), !1;
          try {
            (this.visibilityChangedCallback = async () =>
              await this._onVisibilityChanged(!1)),
              null == window ||
                window.addEventListener(
                  "visibilitychange",
                  this.visibilityChangedCallback
                ),
              await this._onVisibilityChanged(!0);
          } catch (e) {
            console.error("_handleVisibilityChange", e);
          }
        }
        async _onVisibilityChanged(e) {
          let t = `#_onVisibilityChanged(${e})`;
          this._debug(t, "visibilityState", document.visibilityState),
            "visible" === document.visibilityState
              ? (this.autoRefreshToken && this._startAutoRefresh(),
                e ||
                  (await this.initializePromise,
                  await this._acquireLock(-1, async () => {
                    if ("visible" !== document.visibilityState) {
                      this._debug(
                        t,
                        "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                      );
                      return;
                    }
                    await this._recoverAndRefresh();
                  })))
              : "hidden" === document.visibilityState &&
                this.autoRefreshToken &&
                this._stopAutoRefresh();
        }
        async _getUrlForProvider(e, t, s) {
          let r = [`provider=${encodeURIComponent(t)}`];
          if (
            ((null == s ? void 0 : s.redirectTo) &&
              r.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),
            (null == s ? void 0 : s.scopes) &&
              r.push(`scopes=${encodeURIComponent(s.scopes)}`),
            "pkce" === this.flowType)
          ) {
            let [e, t] = await eZ(this.storage, this.storageKey),
              s = new URLSearchParams({
                code_challenge: `${encodeURIComponent(e)}`,
                code_challenge_method: `${encodeURIComponent(t)}`,
              });
            r.push(s.toString());
          }
          if (null == s ? void 0 : s.queryParams) {
            let e = new URLSearchParams(s.queryParams);
            r.push(e.toString());
          }
          return (
            (null == s ? void 0 : s.skipBrowserRedirect) &&
              r.push(`skip_http_redirect=${s.skipBrowserRedirect}`),
            `${e}?${r.join("&")}`
          );
        }
        async _unenroll(e) {
          try {
            return await this._useSession(async (t) => {
              var s;
              let { data: r, error: i } = t;
              return i
                ? { data: null, error: i }
                : await th(
                    this.fetch,
                    "DELETE",
                    `${this.url}/factors/${e.factorId}`,
                    {
                      headers: this.headers,
                      jwt:
                        null === (s = null == r ? void 0 : r.session) ||
                        void 0 === s
                          ? void 0
                          : s.access_token,
                    }
                  );
            });
          } catch (e) {
            if (e4(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _enroll(e) {
          try {
            return await this._useSession(async (t) => {
              var s, r;
              let { data: i, error: n } = t;
              if (n) return { data: null, error: n };
              let a = Object.assign(
                  { friendly_name: e.friendlyName, factor_type: e.factorType },
                  "phone" === e.factorType
                    ? { phone: e.phone }
                    : { issuer: e.issuer }
                ),
                { data: o, error: l } = await th(
                  this.fetch,
                  "POST",
                  `${this.url}/factors`,
                  {
                    body: a,
                    headers: this.headers,
                    jwt:
                      null === (s = null == i ? void 0 : i.session) ||
                      void 0 === s
                        ? void 0
                        : s.access_token,
                  }
                );
              return l
                ? { data: null, error: l }
                : ("phone" === e.factorType && delete o.totp,
                  "totp" === e.factorType &&
                    (null === (r = null == o ? void 0 : o.totp) || void 0 === r
                      ? void 0
                      : r.qr_code) &&
                    (o.totp.qr_code = `data:image/svg+xml;utf-8,${o.totp.qr_code}`),
                  { data: o, error: null });
            });
          } catch (e) {
            if (e4(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _verify(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var s;
                let { data: r, error: i } = t;
                if (i) return { data: null, error: i };
                let { data: n, error: a } = await th(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${e.factorId}/verify`,
                  {
                    body: { code: e.code, challenge_id: e.challengeId },
                    headers: this.headers,
                    jwt:
                      null === (s = null == r ? void 0 : r.session) ||
                      void 0 === s
                        ? void 0
                        : s.access_token,
                  }
                );
                return a
                  ? { data: null, error: a }
                  : (await this._saveSession(
                      Object.assign(
                        {
                          expires_at:
                            Math.round(Date.now() / 1e3) + n.expires_in,
                        },
                        n
                      )
                    ),
                    await this._notifyAllSubscribers(
                      "MFA_CHALLENGE_VERIFIED",
                      n
                    ),
                    { data: n, error: a });
              });
            } catch (e) {
              if (e4(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challenge(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var s;
                let { data: r, error: i } = t;
                return i
                  ? { data: null, error: i }
                  : await th(
                      this.fetch,
                      "POST",
                      `${this.url}/factors/${e.factorId}/challenge`,
                      {
                        body: { channel: e.channel },
                        headers: this.headers,
                        jwt:
                          null === (s = null == r ? void 0 : r.session) ||
                          void 0 === s
                            ? void 0
                            : s.access_token,
                      }
                    );
              });
            } catch (e) {
              if (e4(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challengeAndVerify(e) {
          let { data: t, error: s } = await this._challenge({
            factorId: e.factorId,
          });
          return s
            ? { data: null, error: s }
            : await this._verify({
                factorId: e.factorId,
                challengeId: t.id,
                code: e.code,
              });
        }
        async _listFactors() {
          let {
            data: { user: e },
            error: t,
          } = await this.getUser();
          if (t) return { data: null, error: t };
          let s = (null == e ? void 0 : e.factors) || [],
            r = s.filter(
              (e) => "totp" === e.factor_type && "verified" === e.status
            ),
            i = s.filter(
              (e) => "phone" === e.factor_type && "verified" === e.status
            );
          return { data: { all: s, totp: r, phone: i }, error: null };
        }
        async _getAuthenticatorAssuranceLevel() {
          return this._acquireLock(
            -1,
            async () =>
              await this._useSession(async (e) => {
                var t, s;
                let {
                  data: { session: r },
                  error: i,
                } = e;
                if (i) return { data: null, error: i };
                if (!r)
                  return {
                    data: {
                      currentLevel: null,
                      nextLevel: null,
                      currentAuthenticationMethods: [],
                    },
                    error: null,
                  };
                let n = this._decodeJWT(r.access_token),
                  a = null;
                n.aal && (a = n.aal);
                let o = a;
                return (
                  (null !==
                    (s =
                      null === (t = r.user.factors) || void 0 === t
                        ? void 0
                        : t.filter((e) => "verified" === e.status)) &&
                  void 0 !== s
                    ? s
                    : []
                  ).length > 0 && (o = "aal2"),
                  {
                    data: {
                      currentLevel: a,
                      nextLevel: o,
                      currentAuthenticationMethods: n.amr || [],
                    },
                    error: null,
                  }
                );
              })
          );
        }
      }
      tO.nextInstanceID = 0;
      var tP = tO;
      class t$ extends tP {
        constructor(e) {
          super(e);
        }
      }
      class tA {
        constructor(e, t, s) {
          var r, i, n;
          if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
            throw Error("supabaseUrl is required.");
          if (!t) throw Error("supabaseKey is required.");
          let a = e.replace(/\/$/, "");
          (this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, "ws")),
            (this.authUrl = `${a}/auth/v1`),
            (this.storageUrl = `${a}/storage/v1`),
            (this.functionsUrl = `${a}/functions/v1`);
          let o = `sb-${
              new URL(this.authUrl).hostname.split(".")[0]
            }-auth-token`,
            l = (function (e, t) {
              let { db: s, auth: r, realtime: i, global: n } = e,
                { db: a, auth: o, realtime: l, global: h } = t,
                c = {
                  db: Object.assign(Object.assign({}, a), s),
                  auth: Object.assign(Object.assign({}, o), r),
                  realtime: Object.assign(Object.assign({}, l), i),
                  global: Object.assign(Object.assign({}, h), n),
                  accessToken: () => {
                    var e, t, s, r;
                    return (
                      (e = this),
                      (t = void 0),
                      (r = function* () {
                        return "";
                      }),
                      new ((s = void 0), (s = Promise))(function (i, n) {
                        function a(e) {
                          try {
                            l(r.next(e));
                          } catch (e) {
                            n(e);
                          }
                        }
                        function o(e) {
                          try {
                            l(r.throw(e));
                          } catch (e) {
                            n(e);
                          }
                        }
                        function l(e) {
                          var t;
                          e.done
                            ? i(e.value)
                            : ((t = e.value) instanceof s
                                ? t
                                : new s(function (e) {
                                    e(t);
                                  })
                              ).then(a, o);
                        }
                        l((r = r.apply(e, t || [])).next());
                      })
                    );
                  },
                };
              return (
                e.accessToken
                  ? (c.accessToken = e.accessToken)
                  : delete c.accessToken,
                c
              );
            })(null != s ? s : {}, {
              db: eO,
              realtime: e$,
              auth: Object.assign(Object.assign({}, eP), { storageKey: o }),
              global: eE,
            });
          (this.storageKey =
            null !== (r = l.auth.storageKey) && void 0 !== r ? r : ""),
            (this.headers =
              null !== (i = l.global.headers) && void 0 !== i ? i : {}),
            l.accessToken
              ? ((this.accessToken = l.accessToken),
                (this.auth = new Proxy(
                  {},
                  {
                    get: (e, t) => {
                      throw Error(
                        `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(
                          t
                        )} is not possible`
                      );
                    },
                  }
                )))
              : (this.auth = this._initSupabaseAuthClient(
                  null !== (n = l.auth) && void 0 !== n ? n : {},
                  this.headers,
                  l.global.fetch
                )),
            (this.fetch = ex(
              t,
              this._getAccessToken.bind(this),
              l.global.fetch
            )),
            (this.realtime = this._initRealtimeClient(
              Object.assign({ headers: this.headers }, l.realtime)
            )),
            (this.rest = new h(`${a}/rest/v1`, {
              headers: this.headers,
              schema: l.db.schema,
              fetch: this.fetch,
            })),
            l.accessToken || this._listenForAuthEvents();
        }
        get functions() {
          return new l(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch,
          });
        }
        get storage() {
          return new eT(this.storageUrl, this.headers, this.fetch);
        }
        from(e) {
          return this.rest.from(e);
        }
        schema(e) {
          return this.rest.schema(e);
        }
        rpc(e, t = {}, s = {}) {
          return this.rest.rpc(e, t, s);
        }
        channel(e, t = { config: {} }) {
          return this.realtime.channel(e, t);
        }
        getChannels() {
          return this.realtime.getChannels();
        }
        removeChannel(e) {
          return this.realtime.removeChannel(e);
        }
        removeAllChannels() {
          return this.realtime.removeAllChannels();
        }
        _getAccessToken() {
          var e, t, s, r, i, n;
          return (
            (s = this),
            (r = void 0),
            (i = void 0),
            (n = function* () {
              if (this.accessToken) return yield this.accessToken();
              let { data: s } = yield this.auth.getSession();
              return null !==
                (t =
                  null === (e = s.session) || void 0 === e
                    ? void 0
                    : e.access_token) && void 0 !== t
                ? t
                : null;
            }),
            new (i || (i = Promise))(function (e, t) {
              function a(e) {
                try {
                  l(n.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function o(e) {
                try {
                  l(n.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function l(t) {
                var s;
                t.done
                  ? e(t.value)
                  : ((s = t.value) instanceof i
                      ? s
                      : new i(function (e) {
                          e(s);
                        })
                    ).then(a, o);
              }
              l((n = n.apply(s, r || [])).next());
            })
          );
        }
        _initSupabaseAuthClient(
          {
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: s,
            storage: r,
            storageKey: i,
            flowType: n,
            lock: a,
            debug: o,
          },
          l,
          h
        ) {
          var c;
          let u = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`,
          };
          return new t$({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, u), l),
            storageKey: i,
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: s,
            storage: r,
            flowType: n,
            lock: a,
            debug: o,
            fetch: h,
            hasCustomAuthorizationHeader: "Authorization" in this.headers,
          });
        }
        _initRealtimeClient(e) {
          return new R(
            this.realtimeUrl,
            Object.assign(Object.assign({}, e), {
              params: Object.assign(
                { apikey: this.supabaseKey },
                null == e ? void 0 : e.params
              ),
            })
          );
        }
        _listenForAuthEvents() {
          return this.auth.onAuthStateChange((e, t) => {
            this._handleTokenChanged(
              e,
              "CLIENT",
              null == t ? void 0 : t.access_token
            );
          });
        }
        _handleTokenChanged(e, t, s) {
          ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) &&
          this.changedAccessToken !== s
            ? (this.realtime.setAuth(null != s ? s : null),
              (this.changedAccessToken = s))
            : "SIGNED_OUT" === e &&
              (this.realtime.setAuth(this.supabaseKey),
              "STORAGE" == t && this.auth.signOut(),
              (this.changedAccessToken = void 0));
        }
      }
      let tC = (e, t, s) => new tA(e, t, s);
    },
    5264: function (e, t, s) {
      s.d(t, {
        D: function () {
          return a;
        },
      });
      var r = s(31229),
        i = s(25566),
        n = s(25566);
      function a(e) {
        let t = "object" == typeof e.client ? e.client : {},
          s = "object" == typeof e.server ? e.server : {},
          a = e.shared,
          o = e.runtimeEnv
            ? e.runtimeEnv
            : { ...n.env, ...e.experimental__runtimeEnv };
        return (function (e) {
          let t = e.runtimeEnvStrict ?? e.runtimeEnv ?? i.env;
          if (e.emptyStringAsUndefined)
            for (let [e, s] of Object.entries(t)) "" === s && delete t[e];
          if (e.skipValidation) return t;
          let s = "object" == typeof e.client ? e.client : {},
            n = "object" == typeof e.server ? e.server : {},
            a = "object" == typeof e.shared ? e.shared : {},
            o = (0, r.Ry)(s),
            l = (0, r.Ry)(n),
            h = (0, r.Ry)(a),
            c =
              e.isServer ?? ("undefined" == typeof window || "Deno" in window),
            u = o.merge(h),
            d = l.merge(h).merge(o),
            f = c ? d.safeParse(t) : u.safeParse(t),
            p =
              e.onValidationError ??
              ((e) => {
                throw (
                  (console.error(
                    "❌ Invalid environment variables:",
                    e.flatten().fieldErrors
                  ),
                  Error("Invalid environment variables"))
                );
              }),
            g =
              e.onInvalidAccess ??
              ((e) => {
                throw Error(
                  "❌ Attempted to access a server-side environment variable on the client"
                );
              });
          if (!1 === f.success) return p(f.error);
          let y = (t) =>
              !e.clientPrefix ||
              (!t.startsWith(e.clientPrefix) && !(t in h.shape)),
            v = (e) => c || !y(e),
            m = (e) => "__esModule" === e || "$$typeof" === e,
            _ = (e.extends ?? []).reduce((e, t) => Object.assign(e, t), {});
          return new Proxy(Object.assign(f.data, _), {
            get(e, t) {
              if ("string" == typeof t && !m(t))
                return v(t) ? Reflect.get(e, t) : g(t);
            },
          });
        })({
          ...e,
          shared: a,
          client: t,
          server: s,
          clientPrefix: "NEXT_PUBLIC_",
          runtimeEnv: o,
        });
      }
    },
  },
]);
