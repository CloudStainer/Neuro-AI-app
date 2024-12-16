(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9355],
  {
    11981: function (e, t, i) {
      "use strict";
      let r;
      i.d(t, {
        EthereumProvider: function () {
          return r9;
        },
      });
      var s = i(55445),
        n = i.n(s),
        a = i(74466);
      let o =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        c =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        h = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function l(e, t) {
        if (
          "__proto__" === e ||
          ("constructor" === e && t && "object" == typeof t && "prototype" in t)
        ) {
          console.warn(
            `[destr] Dropping "${e}" key to prevent prototype pollution.`
          );
          return;
        }
        return t;
      }
      function u(e, t = {}) {
        if ("string" != typeof e) return e;
        let i = e.trim();
        if ('"' === e[0] && e.endsWith('"') && !e.includes("\\"))
          return i.slice(1, -1);
        if (i.length <= 9) {
          let e = i.toLowerCase();
          if ("true" === e) return !0;
          if ("false" === e) return !1;
          if ("undefined" === e) return;
          if ("null" === e) return null;
          if ("nan" === e) return Number.NaN;
          if ("infinity" === e) return Number.POSITIVE_INFINITY;
          if ("-infinity" === e) return Number.NEGATIVE_INFINITY;
        }
        if (!h.test(e)) {
          if (t.strict) throw SyntaxError("[destr] Invalid JSON");
          return e;
        }
        try {
          if (o.test(e) || c.test(e)) {
            if (t.strict) throw Error("[destr] Possible prototype pollution");
            return JSON.parse(e, l);
          }
          return JSON.parse(e);
        } catch (i) {
          if (t.strict) throw i;
          return e;
        }
      }
      var p = i(82957).Buffer;
      function d(e, ...t) {
        try {
          var i;
          return (i = e(...t)) && "function" == typeof i.then
            ? i
            : Promise.resolve(i);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      function g(e) {
        if (
          (function (e) {
            let t = typeof e;
            return null === e || ("object" !== t && "function" !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            let t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ("function" == typeof e.toJSON) return g(e.toJSON());
        throw Error("[unstorage] Cannot stringify value!");
      }
      function f() {
        if (void 0 === p)
          throw TypeError("[unstorage] Buffer is not supported!");
      }
      let y = "base64:";
      function m(e) {
        return e
          ? e
              .split("?")[0]
              .replace(/[/\\]/g, ":")
              .replace(/:+/g, ":")
              .replace(/^:|:$/g, "")
          : "";
      }
      function v(e) {
        return (e = m(e)) ? e + ":" : "";
      }
      let w = () => {
        let e = new Map();
        return {
          name: "memory",
          getInstance: () => e,
          hasItem: (t) => e.has(t),
          getItem: (t) => e.get(t) ?? null,
          getItemRaw: (t) => e.get(t) ?? null,
          setItem(t, i) {
            e.set(t, i);
          },
          setItemRaw(t, i) {
            e.set(t, i);
          },
          removeItem(t) {
            e.delete(t);
          },
          getKeys: () => [...e.keys()],
          clear() {
            e.clear();
          },
          dispose() {
            e.clear();
          },
        };
      };
      function _(e, t, i) {
        return e.watch ? e.watch((e, r) => t(e, i + r)) : () => {};
      }
      async function b(e) {
        "function" == typeof e.dispose && (await d(e.dispose));
      }
      function I(e) {
        return new Promise((t, i) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => i(e.error));
        });
      }
      function E(e, t) {
        let i = indexedDB.open(e);
        i.onupgradeneeded = () => i.result.createObjectStore(t);
        let r = I(i);
        return (e, i) => r.then((r) => i(r.transaction(t, e).objectStore(t)));
      }
      function P() {
        return r || (r = E("keyval-store", "keyval")), r;
      }
      function S(e, t = P()) {
        return t("readonly", (t) => I(t.get(e)));
      }
      var C = i(80577),
        R = (e = {}) => {
          let t;
          let i = e.base && e.base.length > 0 ? `${e.base}:` : "",
            r = (e) => i + e;
          return (
            e.dbName && e.storeName && (t = E(e.dbName, e.storeName)),
            {
              name: "idb-keyval",
              options: e,
              hasItem: async (e) => !(typeof (await S(r(e), t)) > "u"),
              getItem: async (e) => (await S(r(e), t)) ?? null,
              setItem: (e, i) =>
                (function (e, t, i = P()) {
                  return i("readwrite", (i) => (i.put(t, e), I(i.transaction)));
                })(r(e), i, t),
              removeItem: (e) =>
                (function (e, t = P()) {
                  return t("readwrite", (t) => (t.delete(e), I(t.transaction)));
                })(r(e), t),
              getKeys: () =>
                (function (e = P()) {
                  return e("readonly", (e) => {
                    var t;
                    if (e.getAllKeys) return I(e.getAllKeys());
                    let i = [];
                    return ((t = (e) => i.push(e.key)),
                    (e.openCursor().onsuccess = function () {
                      this.result && (t(this.result), this.result.continue());
                    }),
                    I(e.transaction)).then(() => i);
                  });
                })(t),
              clear: () =>
                (function (e = P()) {
                  return e("readwrite", (e) => (e.clear(), I(e.transaction)));
                })(t),
            }
          );
        };
      class O {
        constructor() {
          this.indexedDb = (function (e = {}) {
            let t = {
                mounts: { "": e.driver || w() },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              i = (e) => {
                for (let i of t.mountpoints)
                  if (e.startsWith(i))
                    return {
                      base: i,
                      relativeKey: e.slice(i.length),
                      driver: t.mounts[i],
                    };
                return { base: "", relativeKey: e, driver: t.mounts[""] };
              },
              r = (e, i) =>
                t.mountpoints
                  .filter((t) => t.startsWith(e) || (i && e.startsWith(t)))
                  .map((i) => ({
                    relativeBase:
                      e.length > i.length ? e.slice(i.length) : void 0,
                    mountpoint: i,
                    driver: t.mounts[i],
                  })),
              s = (e, i) => {
                if (t.watching)
                  for (let r of ((i = m(i)), t.watchListeners)) r(e, i);
              },
              n = async () => {
                if (!t.watching)
                  for (let e in ((t.watching = !0), t.mounts))
                    t.unwatch[e] = await _(t.mounts[e], s, e);
              },
              a = async () => {
                if (t.watching) {
                  for (let e in t.unwatch) await t.unwatch[e]();
                  (t.unwatch = {}), (t.watching = !1);
                }
              },
              o = (e, t, r) => {
                let s = new Map(),
                  n = (e) => {
                    let t = s.get(e.base);
                    return (
                      t ||
                        ((t = { driver: e.driver, base: e.base, items: [] }),
                        s.set(e.base, t)),
                      t
                    );
                  };
                for (let r of e) {
                  let e = "string" == typeof r,
                    s = m(e ? r : r.key),
                    a = e ? void 0 : r.value,
                    o = e || !r.options ? t : { ...t, ...r.options },
                    c = i(s);
                  n(c).items.push({
                    key: s,
                    value: a,
                    relativeKey: c.relativeKey,
                    options: o,
                  });
                }
                return Promise.all([...s.values()].map((e) => r(e))).then((e) =>
                  e.flat()
                );
              },
              c = {
                hasItem(e, t = {}) {
                  let { relativeKey: r, driver: s } = i((e = m(e)));
                  return d(s.hasItem, r, t);
                },
                getItem(e, t = {}) {
                  let { relativeKey: r, driver: s } = i((e = m(e)));
                  return d(s.getItem, r, t).then((e) => u(e));
                },
                getItems: (e, t) =>
                  o(e, t, (e) =>
                    e.driver.getItems
                      ? d(
                          e.driver.getItems,
                          e.items.map((e) => ({
                            key: e.relativeKey,
                            options: e.options,
                          })),
                          t
                        ).then((t) =>
                          t.map((t) => ({
                            key: (function (...e) {
                              return m(e.join(":"));
                            })(e.base, t.key),
                            value: u(t.value),
                          }))
                        )
                      : Promise.all(
                          e.items.map((t) =>
                            d(e.driver.getItem, t.relativeKey, t.options).then(
                              (e) => ({ key: t.key, value: u(e) })
                            )
                          )
                        )
                  ),
                getItemRaw(e, t = {}) {
                  let { relativeKey: r, driver: s } = i((e = m(e)));
                  return s.getItemRaw
                    ? d(s.getItemRaw, r, t)
                    : d(s.getItem, r, t).then((e) =>
                        "string" == typeof e && e.startsWith(y)
                          ? (f(), p.from(e.slice(y.length), "base64"))
                          : e
                      );
                },
                async setItem(e, t, r = {}) {
                  if (void 0 === t) return c.removeItem(e);
                  let { relativeKey: n, driver: a } = i((e = m(e)));
                  a.setItem &&
                    (await d(a.setItem, n, g(t), r), a.watch || s("update", e));
                },
                async setItems(e, t) {
                  await o(e, t, async (e) => {
                    if (e.driver.setItems)
                      return d(
                        e.driver.setItems,
                        e.items.map((e) => ({
                          key: e.relativeKey,
                          value: g(e.value),
                          options: e.options,
                        })),
                        t
                      );
                    e.driver.setItem &&
                      (await Promise.all(
                        e.items.map((t) =>
                          d(
                            e.driver.setItem,
                            t.relativeKey,
                            g(t.value),
                            t.options
                          )
                        )
                      ));
                  });
                },
                async setItemRaw(e, t, r = {}) {
                  if (void 0 === t) return c.removeItem(e, r);
                  let { relativeKey: n, driver: a } = i((e = m(e)));
                  if (a.setItemRaw) await d(a.setItemRaw, n, t, r);
                  else {
                    if (!a.setItem) return;
                    await d(
                      a.setItem,
                      n,
                      "string" == typeof t
                        ? t
                        : (f(), y + p.from(t).toString("base64")),
                      r
                    );
                  }
                  a.watch || s("update", e);
                },
                async removeItem(e, t = {}) {
                  "boolean" == typeof t && (t = { removeMeta: t });
                  let { relativeKey: r, driver: n } = i((e = m(e)));
                  n.removeItem &&
                    (await d(n.removeItem, r, t),
                    (t.removeMeta || t.removeMata) &&
                      (await d(n.removeItem, r + "$", t)),
                    n.watch || s("remove", e));
                },
                async getMeta(e, t = {}) {
                  "boolean" == typeof t && (t = { nativeOnly: t });
                  let { relativeKey: r, driver: s } = i((e = m(e))),
                    n = Object.create(null);
                  if (
                    (s.getMeta && Object.assign(n, await d(s.getMeta, r, t)),
                    !t.nativeOnly)
                  ) {
                    let e = await d(s.getItem, r + "$", t).then((e) => u(e));
                    e &&
                      "object" == typeof e &&
                      ("string" == typeof e.atime &&
                        (e.atime = new Date(e.atime)),
                      "string" == typeof e.mtime &&
                        (e.mtime = new Date(e.mtime)),
                      Object.assign(n, e));
                  }
                  return n;
                },
                setMeta(e, t, i = {}) {
                  return this.setItem(e + "$", t, i);
                },
                removeMeta(e, t = {}) {
                  return this.removeItem(e + "$", t);
                },
                async getKeys(e, t = {}) {
                  let i = r((e = v(e)), !0),
                    s = [],
                    n = [];
                  for (let e of i) {
                    for (let i of await d(
                      e.driver.getKeys,
                      e.relativeBase,
                      t
                    )) {
                      let t = e.mountpoint + m(i);
                      s.some((e) => t.startsWith(e)) || n.push(t);
                    }
                    s = [
                      e.mountpoint,
                      ...s.filter((t) => !t.startsWith(e.mountpoint)),
                    ];
                  }
                  return e
                    ? n.filter(
                        (t) => t.startsWith(e) && "$" !== t[t.length - 1]
                      )
                    : n.filter((e) => "$" !== e[e.length - 1]);
                },
                async clear(e, t = {}) {
                  (e = v(e)),
                    await Promise.all(
                      r(e, !1).map(async (e) =>
                        e.driver.clear
                          ? d(e.driver.clear, e.relativeBase, t)
                          : e.driver.removeItem
                          ? Promise.all(
                              (
                                await e.driver.getKeys(e.relativeBase || "", t)
                              ).map((i) => e.driver.removeItem(i, t))
                            )
                          : void 0
                      )
                    );
                },
                async dispose() {
                  await Promise.all(Object.values(t.mounts).map((e) => b(e)));
                },
                watch: async (e) => (
                  await n(),
                  t.watchListeners.push(e),
                  async () => {
                    (t.watchListeners = t.watchListeners.filter(
                      (t) => t !== e
                    )),
                      0 === t.watchListeners.length && (await a());
                  }
                ),
                async unwatch() {
                  (t.watchListeners = []), await a();
                },
                mount(e, i) {
                  if ((e = v(e)) && t.mounts[e])
                    throw Error(`already mounted at ${e}`);
                  return (
                    e &&
                      (t.mountpoints.push(e),
                      t.mountpoints.sort((e, t) => t.length - e.length)),
                    (t.mounts[e] = i),
                    t.watching &&
                      Promise.resolve(_(i, s, e))
                        .then((i) => {
                          t.unwatch[e] = i;
                        })
                        .catch(console.error),
                    c
                  );
                },
                async unmount(e, i = !0) {
                  (e = v(e)) &&
                    t.mounts[e] &&
                    (t.watching &&
                      e in t.unwatch &&
                      (t.unwatch[e](), delete t.unwatch[e]),
                    i && (await b(t.mounts[e])),
                    (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                    delete t.mounts[e]);
                },
                getMount(e = "") {
                  let t = i((e = m(e) + ":"));
                  return { driver: t.driver, base: t.base };
                },
                getMounts: (e = "", t = {}) =>
                  r((e = m(e)), t.parents).map((e) => ({
                    driver: e.driver,
                    base: e.mountpoint,
                  })),
                keys: (e, t = {}) => c.getKeys(e, t),
                get: (e, t = {}) => c.getItem(e, t),
                set: (e, t, i = {}) => c.setItem(e, t, i),
                has: (e, t = {}) => c.hasItem(e, t),
                del: (e, t = {}) => c.removeItem(e, t),
                remove: (e, t = {}) => c.removeItem(e, t),
              };
            return c;
          })({
            driver: R({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((e) => [e.key, e.value]);
        }
        async getItem(e) {
          let t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, (0, C.u)(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var x =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof i.g
            ? i.g
            : "u" > typeof self
            ? self
            : {},
        T = { exports: {} };
      function q(e) {
        var t;
        return [e[0], (0, C.D)(null != (t = e[1]) ? t : "")];
      }
      !(function () {
        function e() {}
        (e.prototype.getItem = function (e) {
          return this.hasOwnProperty(e) ? String(this[e]) : null;
        }),
          (e.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (e.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (e.prototype.clear = function () {
            let e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (e.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          e.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          "u" > typeof x && x.localStorage
            ? (T.exports = x.localStorage)
            : "u" > typeof window && window.localStorage
            ? (T.exports = window.localStorage)
            : (T.exports = new e());
      })();
      class k {
        constructor() {
          this.localStorage = T.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(q);
        }
        async getItem(e) {
          let t = this.localStorage.getItem(e);
          if (null !== t) return (0, C.D)(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, (0, C.u)(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      let A = async (e, t, i) => {
          let r = "wc_storage_version",
            s = await t.getItem(r);
          if (s && s >= 1) {
            i(t);
            return;
          }
          let n = await e.getKeys();
          if (!n.length) {
            i(t);
            return;
          }
          let a = [];
          for (; n.length; ) {
            let i = n.shift();
            if (!i) continue;
            let r = i.toLowerCase();
            if (
              r.includes("wc@") ||
              r.includes("walletconnect") ||
              r.includes("wc_") ||
              r.includes("wallet_connect")
            ) {
              let r = await e.getItem(i);
              await t.setItem(i, r), a.push(i);
            }
          }
          await t.setItem(r, 1), i(t), N(e, a);
        },
        N = async (e, t) => {
          t.length &&
            t.forEach(async (t) => {
              await e.removeItem(t);
            });
        };
      class D {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          let e = new k();
          this.storage = e;
          try {
            let t = new O();
            A(e, t, this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(e) {
          return await this.initialize(), this.storage.getItem(e);
        }
        async setItem(e, t) {
          return await this.initialize(), this.storage.setItem(e, t);
        }
        async removeItem(e) {
          return await this.initialize(), this.storage.removeItem(e);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
      var M = i(40537);
      class j {}
      class $ extends j {
        constructor(e) {
          super();
        }
      }
      let z = M.FIVE_SECONDS,
        L = "heartbeat_pulse";
      class U extends $ {
        constructor(e) {
          super(e),
            (this.events = new s.EventEmitter()),
            (this.interval = z),
            (this.interval = e?.interval || z);
        }
        static async init(e) {
          let t = new U(e);
          return await t.init(), t;
        }
        async init() {
          await this.initialize();
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async initialize() {
          this.intervalRef = setInterval(
            () => this.pulse(),
            (0, M.toMiliseconds)(this.interval)
          );
        }
        pulse() {
          this.events.emit(L);
        }
      }
      var K = i(15133);
      class V extends j {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class H extends j {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class F {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class W extends j {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class B extends j {
        constructor(e) {
          super();
        }
      }
      class J {
        constructor(e, t, i, r) {
          (this.core = e), (this.logger = t), (this.name = i);
        }
      }
      class G extends j {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class Y extends j {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class Q {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.store = i);
        }
      }
      class Z {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class X {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = i);
        }
      }
      class ee {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class et {
        constructor(e) {
          this.client = e;
        }
      }
      var ei = i(11857),
        er = i(65221),
        es = i(42058),
        en = i(38979),
        ea = i(5276);
      let eo = () =>
          "u" > typeof WebSocket ||
          ("u" > typeof i.g && "u" > typeof i.g.WebSocket) ||
          ("u" > typeof window && "u" > typeof window.WebSocket) ||
          ("u" > typeof self && "u" > typeof self.WebSocket),
        ec = (e) => e.split("?")[0],
        eh =
          "u" > typeof WebSocket
            ? WebSocket
            : "u" > typeof i.g && "u" > typeof i.g.WebSocket
            ? i.g.WebSocket
            : "u" > typeof window && "u" > typeof window.WebSocket
            ? window.WebSocket
            : "u" > typeof self && "u" > typeof self.WebSocket
            ? self.WebSocket
            : i(16854);
      class el {
        constructor(e) {
          if (
            ((this.url = e),
            (this.events = new s.EventEmitter()),
            (this.registering = !1),
            !(0, ea.isWsUrl)(e))
          )
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          this.url = e;
        }
        get connected() {
          return "u" > typeof this.socket;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            if (typeof this.socket > "u") {
              t(Error("Connection already closed"));
              return;
            }
            (this.socket.onclose = (t) => {
              this.onClose(t), e();
            }),
              this.socket.close();
          });
        }
        async send(e) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send((0, C.u)(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register(e = this.url) {
          if (!(0, ea.isWsUrl)(e))
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return t(
                        Error("WebSocket connection is missing or invalid")
                      );
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, i) => {
              let r = new URLSearchParams(e).get("origin"),
                s = (0, ea.isReactNative)()
                  ? { headers: { origin: r } }
                  : { rejectUnauthorized: !(0, ea.isLocalhostUrl)(e) },
                n = new eh(e, [], s);
              eo()
                ? (n.onerror = (e) => {
                    i(this.emitError(e.error));
                  })
                : n.on("error", (e) => {
                    i(this.emitError(e));
                  }),
                (n.onopen = () => {
                  this.onOpen(n), t(n);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(e) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", e);
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          let t = "string" == typeof e.data ? (0, C.D)(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          let i = this.parseError(t),
            r = i.message || i.toString(),
            s = (0, ea.formatJsonRpcError)(e, r);
          this.events.emit("payload", s);
        }
        parseError(e, t = this.url) {
          return (0, ea.parseConnectionError)(e, ec(t), "WS");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          let t = this.parseError(
            Error(
              e?.message ||
                `WebSocket connection failed for host: ${ec(this.url)}`
            )
          );
          return this.events.emit("register_error", t), t;
        }
      }
      var eu = i(15586),
        ep = i.n(eu),
        ed = i(25566),
        eg = function (e, t) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          for (var i = new Uint8Array(256), r = 0; r < i.length; r++)
            i[r] = 255;
          for (var s = 0; s < e.length; s++) {
            var n = e.charAt(s),
              a = n.charCodeAt(0);
            if (255 !== i[a]) throw TypeError(n + " is ambiguous");
            i[a] = s;
          }
          var o = e.length,
            c = e.charAt(0),
            h = Math.log(o) / Math.log(256),
            l = Math.log(256) / Math.log(o);
          function u(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[0]) {
              for (var r = 0, s = 0; e[t] === c; ) r++, t++;
              for (
                var n = ((e.length - t) * h + 1) >>> 0, a = new Uint8Array(n);
                e[t];

              ) {
                var l = i[e.charCodeAt(t)];
                if (255 === l) return;
                for (
                  var u = 0, p = n - 1;
                  (0 !== l || u < s) && -1 !== p;
                  p--, u++
                )
                  (l += (o * a[p]) >>> 0),
                    (a[p] = l % 256 >>> 0),
                    (l = (l / 256) >>> 0);
                if (0 !== l) throw Error("Non-zero carry");
                (s = u), t++;
              }
              if (" " !== e[t]) {
                for (var d = n - s; d !== n && 0 === a[d]; ) d++;
                for (var g = new Uint8Array(r + (n - d)), f = r; d !== n; )
                  g[f++] = a[d++];
                return g;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var i = 0, r = 0, s = 0, n = t.length;
                s !== n && 0 === t[s];

              )
                s++, i++;
              for (
                var a = ((n - s) * l + 1) >>> 0, h = new Uint8Array(a);
                s !== n;

              ) {
                for (
                  var u = t[s], p = 0, d = a - 1;
                  (0 !== u || p < r) && -1 !== d;
                  d--, p++
                )
                  (u += (256 * h[d]) >>> 0),
                    (h[d] = u % o >>> 0),
                    (u = (u / o) >>> 0);
                if (0 !== u) throw Error("Non-zero carry");
                (r = p), s++;
              }
              for (var g = a - r; g !== a && 0 === h[g]; ) g++;
              for (var f = c.repeat(i); g < a; ++g) f += e.charAt(h[g]);
              return f;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var i = u(e);
              if (i) return i;
              throw Error(`Non-${t} character`);
            },
          };
        };
      let ef = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        ey = (e) => new TextEncoder().encode(e),
        em = (e) => new TextDecoder().decode(e);
      class ev {
        constructor(e, t, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = i);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class ew {
        constructor(e, t, i) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return eb(this, e);
        }
      }
      class e_ {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return eb(this, e);
        }
        decode(e) {
          let t = e[0],
            i = this.decoders[t];
          if (i) return i.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let eb = (e, t) =>
        new e_({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class eI {
        constructor(e, t, i, r) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = i),
            (this.baseDecode = r),
            (this.encoder = new ev(e, t, i)),
            (this.decoder = new ew(e, t, r));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let eE = ({ name: e, prefix: t, encode: i, decode: r }) =>
          new eI(e, t, i, r),
        eP = ({ prefix: e, name: t, alphabet: i }) => {
          let { encode: r, decode: s } = eg(i, t);
          return eE({ prefix: e, name: t, encode: r, decode: (e) => ef(s(e)) });
        },
        eS = (e, t, i, r) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; "=" === e[n - 1]; ) --n;
          let a = new Uint8Array(((n * i) / 8) | 0),
            o = 0,
            c = 0,
            h = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${r} character`);
            (c = (c << i) | n),
              (o += i) >= 8 && ((o -= 8), (a[h++] = 255 & (c >> o)));
          }
          if (o >= i || 255 & (c << (8 - o)))
            throw SyntaxError("Unexpected end of data");
          return a;
        },
        eC = (e, t, i) => {
          let r = "=" === t[t.length - 1],
            s = (1 << i) - 1,
            n = "",
            a = 0,
            o = 0;
          for (let r = 0; r < e.length; ++r)
            for (o = (o << 8) | e[r], a += 8; a > i; )
              (a -= i), (n += t[s & (o >> a)]);
          if ((a && (n += t[s & (o << (i - a))]), r))
            for (; (n.length * i) & 7; ) n += "=";
          return n;
        },
        eR = ({ name: e, prefix: t, bitsPerChar: i, alphabet: r }) =>
          eE({
            prefix: t,
            name: e,
            encode: (e) => eC(e, r, i),
            decode: (t) => eS(t, r, i, e),
          });
      var eO = Object.freeze({
          __proto__: null,
          identity: eE({
            prefix: "\0",
            name: "identity",
            encode: (e) => em(e),
            decode: (e) => ey(e),
          }),
        }),
        ex = Object.freeze({
          __proto__: null,
          base2: eR({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1,
          }),
        }),
        eT = Object.freeze({
          __proto__: null,
          base8: eR({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3,
          }),
        }),
        eq = Object.freeze({
          __proto__: null,
          base10: eP({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        }),
        ek = Object.freeze({
          __proto__: null,
          base16: eR({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4,
          }),
          base16upper: eR({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4,
          }),
        });
      let eA = eR({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        eN = eR({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        eD = eR({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        eM = eR({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        ej = eR({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        e$ = eR({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        });
      var ez = Object.freeze({
          __proto__: null,
          base32: eA,
          base32upper: eN,
          base32pad: eD,
          base32padupper: eM,
          base32hex: ej,
          base32hexupper: e$,
          base32hexpad: eR({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5,
          }),
          base32hexpadupper: eR({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5,
          }),
          base32z: eR({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5,
          }),
        }),
        eL = Object.freeze({
          __proto__: null,
          base36: eP({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
          }),
          base36upper: eP({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }),
        }),
        eU = Object.freeze({
          __proto__: null,
          base58btc: eP({
            name: "base58btc",
            prefix: "z",
            alphabet:
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          }),
          base58flickr: eP({
            name: "base58flickr",
            prefix: "Z",
            alphabet:
              "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          }),
        });
      let eK = eR({
        prefix: "m",
        name: "base64",
        alphabet:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6,
      });
      var eV = Object.freeze({
        __proto__: null,
        base64: eK,
        base64pad: eR({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        base64url: eR({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        base64urlpad: eR({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
      });
      let eH = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        eF = eH.reduce((e, t, i) => ((e[i] = t), e), []),
        eW = eH.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
      var eB = Object.freeze({
        __proto__: null,
        base256emoji: eE({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += eF[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let i of e) {
              let e = eW[i.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${i}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function eJ(e, t) {
        var i,
          r = 0,
          t = t || 0,
          s = 0,
          n = t,
          a = e.length;
        do {
          if (n >= a)
            throw ((eJ.bytes = 0), RangeError("Could not decode varint"));
          (i = e[n++]),
            (r += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)),
            (s += 7);
        } while (i >= 128);
        return (eJ.bytes = n - t), r;
      }
      var eG = function e(t, i, r) {
        (i = i || []), (r = r || 0);
        for (var s = r; t >= 2147483648; )
          (i[r++] = (255 & t) | 128), (t /= 128);
        for (; -128 & t; ) (i[r++] = (255 & t) | 128), (t >>>= 7);
        return (i[r] = 0 | t), (e.bytes = r - s + 1), i;
      };
      let eY = (e, t, i = 0) => (eG(e, t, i), t),
        eQ = (e) =>
          e < 128
            ? 1
            : e < 16384
            ? 2
            : e < 2097152
            ? 3
            : e < 268435456
            ? 4
            : e < 34359738368
            ? 5
            : e < 4398046511104
            ? 6
            : e < 562949953421312
            ? 7
            : e < 72057594037927940
            ? 8
            : e < 0x7fffffffffffffff
            ? 9
            : 10,
        eZ = (e, t) => {
          let i = t.byteLength,
            r = eQ(e),
            s = r + eQ(i),
            n = new Uint8Array(s + i);
          return eY(e, n, 0), eY(i, n, r), n.set(t, s), new eX(e, i, t, n);
        };
      class eX {
        constructor(e, t, i, r) {
          (this.code = e), (this.size = t), (this.digest = i), (this.bytes = r);
        }
      }
      let e0 = ({ name: e, code: t, encode: i }) => new e1(e, t, i);
      class e1 {
        constructor(e, t, i) {
          (this.name = e), (this.code = t), (this.encode = i);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? eZ(this.code, t)
              : t.then((e) => eZ(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let e2 = (e) => async (t) =>
        new Uint8Array(await crypto.subtle.digest(e, t));
      var e9 = Object.freeze({
          __proto__: null,
          sha256: e0({ name: "sha2-256", code: 18, encode: e2("SHA-256") }),
          sha512: e0({ name: "sha2-512", code: 19, encode: e2("SHA-512") }),
        }),
        e5 = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: ef,
            digest: (e) => eZ(0, ef(e)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let e3 = {
        ...eO,
        ...ex,
        ...eT,
        ...eq,
        ...ek,
        ...ez,
        ...eL,
        ...eU,
        ...eV,
        ...eB,
      };
      function e6(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      ({ ...e9, ...e5 });
      let e4 = e6(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        e8 = e6(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        e7 = {
          utf8: e4,
          "utf-8": e4,
          hex: e3.base16,
          latin1: e8,
          ascii: e8,
          binary: e8,
          ...e3,
        },
        te = "core",
        tt = `wc@2:${te}:`,
        ti = { logger: "error" },
        tr = { database: ":memory:" },
        ts = "client_ed25519_seed",
        tn = M.ONE_DAY,
        ta = M.SIX_HOURS,
        to = "wss://relay.walletconnect.org",
        tc = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          publish: "relayer_publish",
        },
        th = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        tl = "2.16.1",
        tu = { link_mode: "link_mode", relay: "relay" },
        tp = "WALLETCONNECT_LINK_MODE_APPS",
        td = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        tg = 1e3 * M.FIVE_SECONDS,
        tf = {
          wc_pairingDelete: {
            req: { ttl: M.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: M.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: M.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: M.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: M.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: M.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        ty = {
          create: "pairing_create",
          expire: "pairing_expire",
          delete: "pairing_delete",
          ping: "pairing_ping",
        },
        tm = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        tv = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        tw = "https://verify.walletconnect.org",
        t_ = `${tw}/v3`,
        tb = ["https://verify.walletconnect.com", tw],
        tI = {
          pairing_started: "pairing_started",
          pairing_uri_validation_success: "pairing_uri_validation_success",
          pairing_uri_not_expired: "pairing_uri_not_expired",
          store_new_pairing: "store_new_pairing",
          subscribing_pairing_topic: "subscribing_pairing_topic",
          subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
          existing_pairing: "existing_pairing",
          pairing_not_expired: "pairing_not_expired",
          emit_inactive_pairing: "emit_inactive_pairing",
          emit_session_proposal: "emit_session_proposal",
        },
        tE = {
          no_internet_connection: "no_internet_connection",
          malformed_pairing_uri: "malformed_pairing_uri",
          active_pairing_already_exists: "active_pairing_already_exists",
          subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
          pairing_expired: "pairing_expired",
          proposal_listener_not_found: "proposal_listener_not_found",
        },
        tP = {
          session_approve_started: "session_approve_started",
          session_namespaces_validation_success:
            "session_namespaces_validation_success",
          subscribing_session_topic: "subscribing_session_topic",
          subscribe_session_topic_success: "subscribe_session_topic_success",
          publishing_session_approve: "publishing_session_approve",
          session_approve_publish_success: "session_approve_publish_success",
          store_session: "store_session",
          publishing_session_settle: "publishing_session_settle",
          session_settle_publish_success: "session_settle_publish_success",
        },
        tS = {
          no_internet_connection: "no_internet_connection",
          proposal_expired: "proposal_expired",
          subscribe_session_topic_failure: "subscribe_session_topic_failure",
          session_approve_publish_failure: "session_approve_publish_failure",
          session_settle_publish_failure: "session_settle_publish_failure",
          session_approve_namespace_validation_failure:
            "session_approve_namespace_validation_failure",
          proposal_not_found: "proposal_not_found",
        },
        tC = {
          authenticated_session_approve_started:
            "authenticated_session_approve_started",
          create_authenticated_session_topic:
            "create_authenticated_session_topic",
          cacaos_verified: "cacaos_verified",
          store_authenticated_session: "store_authenticated_session",
          subscribing_authenticated_session_topic:
            "subscribing_authenticated_session_topic",
          subscribe_authenticated_session_topic_success:
            "subscribe_authenticated_session_topic_success",
          publishing_authenticated_session_approve:
            "publishing_authenticated_session_approve",
        },
        tR = {
          no_internet_connection: "no_internet_connection",
          invalid_cacao: "invalid_cacao",
          subscribe_authenticated_session_topic_failure:
            "subscribe_authenticated_session_topic_failure",
          authenticated_session_approve_publish_failure:
            "authenticated_session_approve_publish_failure",
          authenticated_session_pending_request_not_found:
            "authenticated_session_pending_request_not_found",
        };
      class tO {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = tt),
            (this.init = async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                "u" > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > "u") {
                let { message: t } = (0, er.kCb)(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, K.Ep)(t, this.name));
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, (0, er.KCv)(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? (0, er.IPd)(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, er.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class tx {
        constructor(e, t, i) {
          (this.core = e),
            (this.logger = t),
            (this.name = "crypto"),
            (this.randomSessionIdentifier = (0, er.jdp)()),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = ei.generateKeyPair(e);
              return ei.encodeIss(t.publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              let e = (0, er.Au2)();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                i = ei.generateKeyPair(t),
                r = this.randomSessionIdentifier;
              return await ei.signJWT(r, e, tn, i);
            }),
            (this.generateSharedKey = (e, t, i) => {
              this.isInitialized();
              let r = this.getPrivateKey(e),
                s = (0, er.m$A)(r, t);
              return this.setSymKey(s, i);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              let i = t || (0, er.YmJ)(e);
              return await this.keychain.set(i, e), i;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, i) => {
              this.isInitialized();
              let r = (0, er.ENt)(i),
                s = (0, C.u)(t);
              if ((0, er.Hs$)(r)) return (0, er.Spz)(s, i?.encoding);
              if ((0, er.Q8x)(r)) {
                let t = r.senderPublicKey,
                  i = r.receiverPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              let n = this.getSymKey(e),
                { type: a, senderPublicKey: o } = r;
              return (0, er.HIp)({
                type: a,
                symKey: n,
                message: s,
                senderPublicKey: o,
                encoding: i?.encoding,
              });
            }),
            (this.decode = async (e, t, i) => {
              this.isInitialized();
              let r = (0, er.Llj)(t, i);
              if ((0, er.Hs$)(r)) {
                let e = (0, er.xQU)(t, i?.encoding);
                return (0, C.D)(e);
              }
              if ((0, er.Q8x)(r)) {
                let t = r.receiverPublicKey,
                  i = r.senderPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              try {
                let r = this.getSymKey(e),
                  s = (0, er.peR)({
                    symKey: r,
                    encoded: t,
                    encoding: i?.encoding,
                  });
                return (0, C.D)(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            (this.getPayloadType = (e, t = er.$dT) => {
              let i = (0, er.vBi)({ encoded: e, encoding: t });
              return (0, er.WGe)(i.type);
            }),
            (this.getPayloadSenderPublicKey = (e, t = er.$dT) => {
              let i = (0, er.vBi)({ encoded: e, encoding: t });
              return i.senderPublicKey
                ? (0, es.BB)(i.senderPublicKey, er.AWt)
                : void 0;
            }),
            (this.core = e),
            (this.logger = (0, K.Ep)(t, this.name)),
            (this.keychain = i || new tO(this.core, this.logger));
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(ts);
          } catch {
            (e = (0, er.jdp)()), await this.keychain.set(ts, e);
          }
          return (function (e, t = "utf8") {
            let i = e7[t];
            if (!i) throw Error(`Unsupported encoding "${t}"`);
            return ("utf8" === t || "utf-8" === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, "utf8")
              : i.decoder.decode(`${i.prefix}${e}`);
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, er.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class tT extends F {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = tt),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  let e = await this.getRelayerMessages();
                  "u" > typeof e && (this.messages = e),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              let i = (0, er.rjm)(t),
                r = this.messages.get(e);
              return (
                typeof r > "u" && (r = {}),
                "u" > typeof r[i] ||
                  ((r[i] = t), this.messages.set(e, r), await this.persist()),
                i
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            (this.has = (e, t) => (
              this.isInitialized(), "u" > typeof this.get(e)[(0, er.rjm)(t)]
            )),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = (0, K.Ep)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, (0, er.KCv)(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? (0, er.IPd)(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, er.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class tq extends W {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new s.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, M.toMiliseconds)(M.ONE_MINUTE)),
            (this.failedPublishTimeout = (0, M.toMiliseconds)(M.ONE_SECOND)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, i) => {
              var r;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: i },
                });
              let s = i?.ttl || ta,
                n = (0, er._HE)(i),
                a = i?.prompt || !1,
                o = i?.tag || 0,
                c = i?.id || (0, ea.getBigIntRpcId)().toString(),
                h = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: s,
                    relay: n,
                    prompt: a,
                    tag: o,
                    id: c,
                    attestation: i?.attestation,
                  },
                },
                l = `Failed to publish payload, please try again. id:${c} tag:${o}`,
                u = Date.now(),
                p,
                d = 1;
              try {
                for (; void 0 === p; ) {
                  if (Date.now() - u > this.publishTimeout) throw Error(l);
                  this.logger.trace(
                    { id: c, attempts: d },
                    `publisher.publish - attempt ${d}`
                  ),
                    (p = await await (0, er.hFY)(
                      this.rpcPublish(
                        e,
                        t,
                        s,
                        n,
                        a,
                        o,
                        c,
                        i?.attestation
                      ).catch((e) => this.logger.warn(e)),
                      this.publishTimeout,
                      l
                    )),
                    d++,
                    p ||
                      (await new Promise((e) =>
                        setTimeout(e, this.failedPublishTimeout)
                      ));
                }
                this.relayer.events.emit(tc.publish, h),
                  this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { id: c, topic: e, message: t, opts: i },
                  });
              } catch (e) {
                if (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  null != (r = i?.internal) && r.throwOnFailedPublish)
                )
                  throw e;
                this.queue.set(c, h);
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, K.Ep)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        rpcPublish(e, t, i, r, s, n, a, o) {
          var c, h, l, u;
          let p = {
            method: (0, er.cOS)(r.protocol).publish,
            params: {
              topic: e,
              message: t,
              ttl: i,
              prompt: s,
              tag: n,
              attestation: o,
            },
            id: a,
          };
          return (
            (0, er.o8e)(null == (c = p.params) ? void 0 : c.prompt) &&
              (null == (h = p.params) || delete h.prompt),
            (0, er.o8e)(null == (l = p.params) ? void 0 : l.tag) &&
              (null == (u = p.params) || delete u.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: p,
            }),
            this.relayer.request(p)
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            let { topic: t, message: i, opts: r } = e;
            await this.publish(t, i, r);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(L, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(tc.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(tc.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      class tk {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              let i = this.get(e);
              this.exists(e, t) || this.map.set(e, [...i, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > "u") {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let i = this.get(e);
              if (!this.exists(e, t)) return;
              let r = i.filter((e) => e !== t);
              if (!r.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, r);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var tA = Object.defineProperty,
        tN = Object.defineProperties,
        tD = Object.getOwnPropertyDescriptors,
        tM = Object.getOwnPropertySymbols,
        tj = Object.prototype.hasOwnProperty,
        t$ = Object.prototype.propertyIsEnumerable,
        tz = (e, t, i) =>
          t in e
            ? tA(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        tL = (e, t) => {
          for (var i in t || (t = {})) tj.call(t, i) && tz(e, i, t[i]);
          if (tM) for (var i of tM(t)) t$.call(t, i) && tz(e, i, t[i]);
          return e;
        },
        tU = (e, t) => tN(e, tD(t));
      class tK extends G {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new tk()),
            (this.events = new s.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = tt),
            (this.subscribeTimeout = (0, M.toMiliseconds)(M.ONE_MINUTE)),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.pendingBatchMessages = []),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()),
                await this.restore()),
                (this.initialized = !0);
            }),
            (this.subscribe = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                let i = (0, er._HE)(t),
                  r = { topic: e, relay: i, transportType: t?.transportType };
                this.pending.set(e, r);
                let s = await this.rpcSubscribe(e, i, t?.transportType);
                return (
                  "string" == typeof s &&
                    (this.onSubscribe(s, r),
                    this.logger.debug("Successfully Subscribed Topic"),
                    this.logger.trace({
                      type: "method",
                      method: "subscribe",
                      params: { topic: e, opts: t },
                    })),
                  s
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                "u" > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) => {
              if (this.topics.includes(e)) return !0;
              let t = `${this.pendingSubscriptionWatchLabel}_${e}`;
              return await new Promise((i, r) => {
                let s = new M.Watch();
                s.start(t);
                let n = setInterval(() => {
                  !this.pending.has(e) &&
                    this.topics.includes(e) &&
                    (clearInterval(n), s.stop(t), i(!0)),
                    s.elapsed(t) >= tg &&
                      (clearInterval(n),
                      s.stop(t),
                      r(Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1);
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.start = async () => {
              await this.onConnect();
            }),
            (this.stop = async () => {
              await this.onDisconnect();
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = (0, K.Ep)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let i = !1;
          try {
            i = this.getSubscription(e).topic === t;
          } catch {}
          return i;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let i = this.topicMap.get(e);
          await Promise.all(
            i.map(async (i) => await this.unsubscribeById(e, i, t))
          );
        }
        async unsubscribeById(e, t, i) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: i },
            });
          try {
            let r = (0, er._HE)(i);
            await this.rpcUnsubscribe(e, t, r);
            let s = (0, er.D6H)("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, s),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: i },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t, i = tu.relay) {
          i === tu.relay && (await this.restartToComplete());
          let r = {
            method: (0, er.cOS)(t.protocol).subscribe,
            params: { topic: e },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            let t = (0, er.rjm)(e + this.clientId);
            return i === tu.link_mode
              ? (setTimeout(() => {
                  (this.relayer.connected || this.relayer.connecting) &&
                    this.relayer.request(r).catch((e) => this.logger.warn(e));
                }, (0, M.toMiliseconds)(M.ONE_SECOND)),
                t)
              : (await await (0, er.hFY)(
                  this.relayer.request(r).catch((e) => this.logger.warn(e)),
                  this.subscribeTimeout
                ))
              ? t
              : null;
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(tc.connection_stalled);
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = e[0].relay,
            i = {
              method: (0, er.cOS)(t.protocol).batchSubscribe,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            });
          try {
            return await await (0, er.hFY)(
              this.relayer.request(i).catch((e) => this.logger.warn(e)),
              this.subscribeTimeout
            );
          } catch {
            this.relayer.events.emit(tc.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let i = e[0].relay,
            r = {
              method: (0, er.cOS)(i.protocol).batchFetchMessages,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            t = await await (0, er.hFY)(
              this.relayer.request(r).catch((e) => this.logger.warn(e)),
              this.subscribeTimeout
            );
          } catch {
            this.relayer.events.emit(tc.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, i) {
          let r = {
            method: (0, er.cOS)(i.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            }),
            this.relayer.request(r)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, tU(tL({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, tL({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, i) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, i),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t);
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, tL({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(td.created, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = (0, er.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          let i = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(i.topic, e),
            this.events.emit(td.deleted, tU(tL({}, i), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(td.sync);
        }
        async reset() {
          if (this.cached.length) {
            let e = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit
            );
            for (let t = 0; t < e; t++) {
              let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchFetchMessages(e), await this.batchSubscribe(e);
            }
          }
          this.events.emit(td.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = (0, er.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          let t = await this.rpcBatchSubscribe(e);
          (0, er.qt8)(t) &&
            this.onBatchSubscribe(t.map((t, i) => tU(tL({}, e[i]), { id: t })));
        }
        async batchFetchMessages(e) {
          if (!e.length) return;
          this.logger.trace(
            `Fetching batch messages for ${e.length} subscriptions`
          );
          let t = await this.rpcBatchFetchMessages(e);
          t &&
            t.messages &&
            (this.pendingBatchMessages = this.pendingBatchMessages.concat(
              t.messages
            ));
        }
        async onConnect() {
          await this.restart(), this.onEnable();
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (!this.initialized || !this.relayer.connected) return;
          let e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e),
            this.pendingBatchMessages.length &&
              (await this.relayer.handleBatchMessageEvents(
                this.pendingBatchMessages
              ),
              (this.pendingBatchMessages = []));
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(L, async () => {
            await this.checkPending();
          }),
            this.events.on(td.created, async (e) => {
              let t = td.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            }),
            this.events.on(td.deleted, async (e) => {
              let t = td.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, er.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async restartToComplete() {
          this.relayer.connected ||
            this.relayer.connecting ||
            (await this.relayer.transportOpen()),
            this.restartInProgress &&
              (await new Promise((e) => {
                let t = setInterval(() => {
                  this.restartInProgress || (clearInterval(t), e());
                }, this.pollingInterval);
              }));
        }
      }
      var tV = Object.defineProperty,
        tH = Object.getOwnPropertySymbols,
        tF = Object.prototype.hasOwnProperty,
        tW = Object.prototype.propertyIsEnumerable,
        tB = (e, t, i) =>
          t in e
            ? tV(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        tJ = (e, t) => {
          for (var i in t || (t = {})) tF.call(t, i) && tB(e, i, t[i]);
          if (tH) for (var i of tH(t)) tW.call(t, i) && tB(e, i, t[i]);
          return e;
        };
      class tG extends B {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new s.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = [
              "socket hang up",
              "stalled",
              "interrupted",
            ]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.requestsInFlight = new Map()),
            (this.heartBeatTimeout = (0, M.toMiliseconds)(
              M.THIRTY_SECONDS + M.ONE_SECOND
            )),
            (this.request = async (e) => {
              var t, i;
              this.logger.debug("Publishing Request Payload");
              let r = e.id || (0, ea.getBigIntRpcId)().toString();
              await this.toEstablishConnection();
              try {
                let s = this.provider.request(e);
                this.requestsInFlight.set(r, { promise: s, request: e }),
                  this.logger.trace(
                    {
                      id: r,
                      method: e.method,
                      topic: null == (t = e.params) ? void 0 : t.topic,
                    },
                    "relayer.request - attempt to publish..."
                  );
                let n = await new Promise(async (e, t) => {
                  let i = () => {
                    t(Error(`relayer.request - publish interrupted, id: ${r}`));
                  };
                  this.provider.on(th.disconnect, i);
                  let n = await s;
                  this.provider.off(th.disconnect, i), e(n);
                });
                return (
                  this.logger.trace(
                    {
                      id: r,
                      method: e.method,
                      topic: null == (i = e.params) ? void 0 : i.topic,
                    },
                    "relayer.request - published"
                  ),
                  n
                );
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${r}`), e);
              } finally {
                this.requestsInFlight.delete(r);
              }
            }),
            (this.resetPingTimeout = () => {
              if ((0, er.UGU)())
                try {
                  clearTimeout(this.pingTimeout),
                    (this.pingTimeout = setTimeout(() => {
                      var e, t, i;
                      null ==
                        (i =
                          null ==
                          (t =
                            null == (e = this.provider) ? void 0 : e.connection)
                            ? void 0
                            : t.socket) || i.terminate();
                    }, this.heartBeatTimeout));
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            (this.onPayloadHandler = (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            (this.onConnectHandler = () => {
              this.logger.trace("relayer connected"),
                this.startPingTimeout(),
                this.events.emit(tc.connect);
            }),
            (this.onDisconnectHandler = () => {
              this.logger.trace("relayer disconnected"),
                this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (e) => {
              this.logger.error(e),
                this.events.emit(tc.error, e),
                this.logger.info(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(th.payload, this.onPayloadHandler),
                this.provider.on(th.connect, this.onConnectHandler),
                this.provider.on(th.disconnect, this.onDisconnectHandler),
                this.provider.on(th.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              "u" > typeof e.logger && "string" != typeof e.logger
                ? (0, K.Ep)(e.logger, this.name)
                : (0, K.gw)((0, K.jI)({ level: e.logger || "error" }))),
            (this.messages = new tT(this.logger, e.core)),
            (this.subscriber = new tK(this, this.logger)),
            (this.publisher = new tq(this, this.logger)),
            (this.relayUrl = e?.relayUrl || to),
            (this.projectId = e.projectId),
            (this.bundleId = (0, er.X_B)()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.cached.length > 0)
          )
            try {
              await this.transportOpen();
            } catch (e) {
              this.logger.warn(e);
            }
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        get connected() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : i.readyState) === 1
          );
        }
        get connecting() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : i.readyState) === 0
          );
        }
        async publish(e, t, i) {
          this.isInitialized(),
            await this.publisher.publish(e, t, i),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
              transportType: tu.relay,
            });
        }
        async subscribe(e, t) {
          var i;
          this.isInitialized(),
            t?.transportType === "relay" &&
              (await this.toEstablishConnection());
          let r =
              (null == (i = this.subscriber.topicMap.get(e)) ? void 0 : i[0]) ||
              "",
            s,
            n = (t) => {
              t.topic === e && (this.subscriber.off(td.created, n), s());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (s = e), this.subscriber.on(td.created, n);
              }),
              new Promise(async (i) => {
                (r = (await this.subscriber.subscribe(e, t)) || r), i();
              }),
            ]),
            r
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportDisconnect() {
          if (
            !this.hasExperiencedNetworkDisruption &&
            this.connected &&
            this.requestsInFlight.size > 0
          )
            try {
              await Promise.all(
                Array.from(this.requestsInFlight.values()).map((e) => e.promise)
              );
            } catch (e) {
              this.logger.warn(e);
            }
          this.hasExperiencedNetworkDisruption || this.connected
            ? await (0, er.hFY)(
                this.provider.disconnect(),
                2e3,
                "provider.disconnect()"
              ).catch(() => this.onProviderDisconnect())
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            await this.transportDisconnect();
        }
        async transportOpen(e) {
          await this.confirmOnlineStateOrThrow(),
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e), await this.transportDisconnect()),
            await this.createProvider(),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          try {
            await new Promise(async (e, t) => {
              let i = () => {
                this.provider.off(th.disconnect, i),
                  t(Error("Connection interrupted while trying to subscribe"));
              };
              this.provider.on(th.disconnect, i),
                await (0, er.hFY)(
                  this.provider.connect(),
                  (0, M.toMiliseconds)(M.ONE_MINUTE),
                  `Socket stalled when trying to connect to ${this.relayUrl}`
                )
                  .catch((e) => {
                    t(e);
                  })
                  .finally(() => {
                    clearTimeout(this.reconnectTimeout),
                      (this.reconnectTimeout = void 0);
                  }),
                this.subscriber.start().catch((e) => {
                  this.logger.error(e), this.onDisconnectHandler();
                }),
                (this.hasExperiencedNetworkDisruption = !1),
                e();
            });
          } catch (e) {
            if (
              (this.logger.error(e),
              (this.hasExperiencedNetworkDisruption = !0),
              !this.isConnectionStalled(e.message))
            )
              throw e;
          } finally {
            this.connectionAttemptInProgress = !1;
          }
        }
        async restartTransport(e) {
          this.connectionAttemptInProgress ||
            ((this.relayUrl = e || this.relayUrl),
            await this.confirmOnlineStateOrThrow(),
            await this.transportClose(),
            await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await (0, er.Ggh)()))
            throw Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        async handleBatchMessageEvents(e) {
          if (e?.length === 0) {
            this.logger.trace("Batch message events is empty. Ignoring...");
            return;
          }
          let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
          for (let e of (this.logger.trace(
            `Batch of ${t.length} message events sorted`
          ),
          t))
            try {
              await this.onMessageEvent(e);
            } catch (e) {
              this.logger.warn(e);
            }
          this.logger.trace(`Batch of ${t.length} message events processed`);
        }
        async onLinkMessageEvent(e, t) {
          let { topic: i } = e;
          if (!t.sessionExists) {
            let e = (0, er.gn4)(M.FIVE_MINUTES);
            await this.core.pairing.pairings.set(i, {
              topic: i,
              expiry: e,
              relay: { protocol: "irn" },
              active: !1,
            });
          }
          this.events.emit(tc.message, e), await this.recordMessageEvent(e);
        }
        startPingTimeout() {
          var e, t, i, r, s;
          if ((0, er.UGU)())
            try {
              null !=
                (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (s =
                    null ==
                    (r = null == (i = this.provider) ? void 0 : i.connection)
                      ? void 0
                      : r.socket) ||
                  s.once("ping", () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (e) {
              this.logger.warn(e);
            }
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((t) => e.includes(t));
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new en.r(
            new el(
              (0, er.$0m)({
                sdkVersion: tl,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          let { topic: t, message: i } = e;
          await this.messages.set(t, i);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: i } = e;
          if (!i || 0 === i.length)
            return (
              this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0
            );
          if (!(await this.subscriber.isSubscribed(t)))
            return (
              this.logger.debug(
                `Ignoring message for non-subscribed topic ${t}`
              ),
              !0
            );
          let r = this.messages.has(t, i);
          return r && this.logger.debug(`Ignoring duplicate message: ${i}`), r;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            (0, ea.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            let t = e.params,
              { topic: i, message: r, publishedAt: s, attestation: n } = t.data,
              a = {
                topic: i,
                message: r,
                publishedAt: s,
                transportType: tu.relay,
                attestation: n,
              };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(tJ({ type: "event", event: t.id }, a)),
              this.events.emit(t.id, a),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(a);
          } else
            (0, ea.isJsonRpcResponse)(e) && this.events.emit(tc.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(tc.message, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          let t = (0, ea.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(th.payload, this.onPayloadHandler),
            this.provider.off(th.connect, this.onConnectHandler),
            this.provider.off(th.disconnect, this.onDisconnectHandler),
            this.provider.off(th.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await (0, er.Ggh)();
          (0, er.uwg)(async (t) => {
            e !== t &&
              ((e = t),
              t
                ? await this.restartTransport().catch((e) =>
                    this.logger.error(e)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          });
        }
        async onProviderDisconnect() {
          await this.subscriber.stop(),
            this.requestsInFlight.clear(),
            clearTimeout(this.pingTimeout),
            this.events.emit(tc.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.transportExplicitlyClosed &&
              (this.reconnectTimeout ||
                (this.reconnectTimeout = setTimeout(async () => {
                  await this.transportOpen().catch((e) => this.logger.error(e));
                }, (0, M.toMiliseconds)(0.1))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, er.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(),
            this.connected ||
              (this.connectionAttemptInProgress &&
                (await new Promise((e) => {
                  let t = setInterval(() => {
                    this.connected && (clearInterval(t), e());
                  }, this.connectionStatusPollingInterval);
                })),
              await this.transportOpen());
        }
      }
      var tY = Object.defineProperty,
        tQ = Object.getOwnPropertySymbols,
        tZ = Object.prototype.hasOwnProperty,
        tX = Object.prototype.propertyIsEnumerable,
        t0 = (e, t, i) =>
          t in e
            ? tY(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        t1 = (e, t) => {
          for (var i in t || (t = {})) tZ.call(t, i) && t0(e, i, t[i]);
          if (tQ) for (var i of tQ(t)) tX.call(t, i) && t0(e, i, t[i]);
          return e;
        };
      class t2 extends J {
        constructor(e, t, i, r = tt, s) {
          super(e, t, i, r),
            (this.core = e),
            (this.logger = t),
            (this.name = i),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = tt),
            (this.recentlyDeleted = []),
            (this.recentlyDeletedLimit = 200),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !(0, er.o8e)(e)
                    ? this.map.set(this.getKey(e), e)
                    : (0, er.xWS)(e)
                    ? this.map.set(e.id, e)
                    : (0, er.h1R)(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((i) => ep()(t[i], e[i]))
                  )
                : this.values
            )),
            (this.update = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              let i = t1(t1({}, this.getData(e)), t);
              this.map.set(e, i), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = (0, K.Ep)(t, this.name)),
            (this.storagePrefix = r),
            (this.getKey = s);
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(e) {
          this.recentlyDeleted.push(e),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            if (this.recentlyDeleted.includes(e)) {
              let { message: t } = (0, er.kCb)(
                "MISSING_OR_INVALID",
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = (0, er.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              let { message: e } = (0, er.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, er.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class t9 {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (n())()),
            (this.initialized = !1),
            (this.storagePrefix = tt),
            (this.ignoredPayloadTypes = [er.rVF]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            (this.create = async (e) => {
              this.isInitialized();
              let t = (0, er.jdp)(),
                i = await this.core.crypto.setSymKey(t),
                r = (0, er.gn4)(M.FIVE_MINUTES),
                s = { protocol: "irn" },
                n = (0, er.Bvr)({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: i,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: r,
                  methods: e?.methods,
                });
              return (
                this.core.expirer.set(i, r),
                await this.pairings.set(i, {
                  topic: i,
                  expiry: r,
                  relay: s,
                  active: !1,
                }),
                await this.core.relayer.subscribe(i, {
                  transportType: e?.transportType,
                }),
                { topic: i, uri: n }
              );
            }),
            (this.pair = async (e) => {
              let t;
              this.isInitialized();
              let i = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [tI.pairing_started] },
              });
              this.isValidPair(e, i);
              let {
                topic: r,
                symKey: s,
                relay: n,
                expiryTimestamp: a,
                methods: o,
              } = (0, er.heJ)(e.uri);
              if (
                ((i.props.properties.topic = r),
                i.addTrace(tI.pairing_uri_validation_success),
                i.addTrace(tI.pairing_uri_not_expired),
                this.pairings.keys.includes(r))
              ) {
                if (
                  ((t = this.pairings.get(r)),
                  i.addTrace(tI.existing_pairing),
                  t.active)
                )
                  throw (
                    (i.setError(tE.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${r}. Please try again with a new connection URI.`
                    ))
                  );
                i.addTrace(tI.pairing_not_expired);
              }
              let c = a || (0, er.gn4)(M.FIVE_MINUTES),
                h = { topic: r, relay: n, expiry: c, active: !1, methods: o };
              this.core.expirer.set(r, c),
                await this.pairings.set(r, h),
                i.addTrace(tI.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: r })),
                this.events.emit(ty.create, h),
                i.addTrace(tI.emit_inactive_pairing),
                this.core.crypto.keychain.has(r) ||
                  (await this.core.crypto.setSymKey(s, r)),
                i.addTrace(tI.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                i.setError(tE.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(r, { relay: n });
              } catch (e) {
                throw (i.setError(tE.subscribe_pairing_topic_failure), e);
              }
              return i.addTrace(tI.subscribe_pairing_topic_success), h;
            }),
            (this.activate = async ({ topic: e }) => {
              this.isInitialized();
              let t = (0, er.gn4)(M.THIRTY_DAYS);
              this.core.expirer.set(e, t),
                await this.pairings.update(e, { active: !0, expiry: t });
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: i, resolve: r, reject: s } = (0, er.H1S)();
                this.events.once(
                  (0, er.E0T)("pairing_ping", e),
                  ({ error: e }) => {
                    e ? s(e) : r();
                  }
                ),
                  await i();
              }
            }),
            (this.updateExpiry = async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            (this.updateMetadata = async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  (0, er.D6H)("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            (this.sendRequest = async (e, t, i) => {
              let r = (0, ea.formatJsonRpcRequest)(t, i),
                s = await this.core.crypto.encode(e, r),
                n = tf[t].req;
              return (
                this.core.history.set(e, r),
                this.core.relayer.publish(e, s, n),
                r.id
              );
            }),
            (this.sendResult = async (e, t, i) => {
              let r = (0, ea.formatJsonRpcResult)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = tf[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, n),
                await this.core.history.resolve(r);
            }),
            (this.sendError = async (e, t, i) => {
              let r = (0, ea.formatJsonRpcError)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = await this.core.history.get(t, e),
                a = tf[n.request.method]
                  ? tf[n.request.method].res
                  : tf.unregistered_method.res;
              await this.core.relayer.publish(t, s, a),
                await this.core.history.resolve(r);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, (0, er.D6H)("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              let e = this.pairings
                .getAll()
                .filter((e) => (0, er.BwD)(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              let { topic: t, payload: i } = e;
              switch (i.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(t, i);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(t, i);
                default:
                  return this.onUnknownRpcMethodRequest(t, i);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: i } = e,
                r = (await this.core.history.get(t, i.id)).request.method;
              return "wc_pairingPing" === r
                ? this.onPairingPingResponse(t, i)
                : this.onUnknownRpcMethodResponse(r);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(i, e, !0),
                  this.events.emit(ty.ping, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              let { id: i } = t;
              setTimeout(() => {
                (0, ea.isJsonRpcResult)(t)
                  ? this.events.emit((0, er.E0T)("pairing_ping", i), {})
                  : (0, ea.isJsonRpcError)(t) &&
                    this.events.emit((0, er.E0T)("pairing_ping", i), {
                      error: t.error,
                    });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(ty.delete, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              let { id: i, method: r } = t;
              try {
                if (this.registeredMethods.includes(r)) return;
                let t = (0, er.D6H)("WC_METHOD_UNSUPPORTED", r);
                await this.sendError(i, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error((0, er.D6H)("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e, t) => {
              var i;
              if (!(0, er.EJd)(e)) {
                let { message: i } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw (t.setError(tE.malformed_pairing_uri), Error(i));
              }
              if (!(0, er.jvJ)(e.uri)) {
                let { message: i } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw (t.setError(tE.malformed_pairing_uri), Error(i));
              }
              let r = (0, er.heJ)(e?.uri);
              if (!(null != (i = r?.relay) && i.protocol)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw (t.setError(tE.malformed_pairing_uri), Error(e));
              }
              if (!(null != r && r.symKey)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw (t.setError(tE.malformed_pairing_uri), Error(e));
              }
              if (
                null != r &&
                r.expiryTimestamp &&
                (0, M.toMiliseconds)(r?.expiryTimestamp) < Date.now()
              ) {
                t.setError(tE.pairing_expired);
                let { message: e } = (0, er.kCb)(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!(0, er.M_r)(e, !1)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = (0, er.kCb)(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw Error(t);
              }
              if ((0, er.BwD)(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = (0, er.kCb)(
                  "EXPIRED",
                  `pairing topic: ${e}`
                );
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, K.Ep)(t, this.name)),
            (this.pairings = new t2(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, er.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(tc.message, async (e) => {
            let { topic: t, message: i, transportType: r } = e;
            if (
              !this.pairings.keys.includes(t) ||
              r === tu.link_mode ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(i)
              )
            )
              return;
            let s = await this.core.crypto.decode(t, i);
            try {
              (0, ea.isJsonRpcRequest)(s)
                ? (this.core.history.set(t, s),
                  this.onRelayEventRequest({ topic: t, payload: s }))
                : (0, ea.isJsonRpcResponse)(s) &&
                  (await this.core.history.resolve(s),
                  await this.onRelayEventResponse({ topic: t, payload: s }),
                  this.core.history.delete(t, s.id));
            } catch (e) {
              this.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(tv.expired, async (e) => {
            let { topic: t } = (0, er.iPz)(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(ty.expire, { topic: t }));
          });
        }
      }
      class t5 extends H {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new s.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = tt),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, t, i) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: i,
                }),
                this.records.has(t.id))
              )
                return;
              let r = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: i,
                expiry: (0, er.gn4)(M.THIRTY_DAYS),
              };
              this.records.set(r.id, r),
                this.persist(),
                this.events.emit(tm.created, r);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = (0, ea.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(tm.updated, t));
            }),
            (this.get = async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((i) => {
                  i.topic !== e ||
                    ("u" > typeof t && i.id !== t) ||
                    (this.records.delete(i.id),
                    this.events.emit(tm.deleted, i));
                }),
                this.persist();
            }),
            (this.exists = async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, K.Ep)(t, this.name));
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ("u" > typeof t.response) return;
              let i = {
                topic: t.topic,
                request: (0, ea.formatJsonRpcRequest)(
                  t.request.method,
                  t.request.params,
                  t.id
                ),
                chainId: t.chainId,
              };
              return e.push(i);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = (0, er.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(tm.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              let { message: e } = (0, er.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(tm.created, (e) => {
            let t = tm.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e });
          }),
            this.events.on(tm.updated, (e) => {
              let t = tm.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.events.on(tm.deleted, (e) => {
              let t = tm.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.core.heartbeat.on(L, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, M.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(tm.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, er.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class t3 extends Y {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new s.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = tt),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                let t = this.formatTarget(e);
                return "u" > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              let i = this.formatTarget(e),
                r = { target: i, expiry: t };
              this.expirations.set(i, r),
                this.checkExpiry(i, r),
                this.events.emit(tv.created, { target: i, expiration: r });
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  i = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(tv.deleted, { target: t, expiration: i });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, K.Ep)(t, this.name));
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e) return (0, er.Z42)(e);
          if ("number" == typeof e) return (0, er.GqV)(e);
          let { message: t } = (0, er.kCb)(
            "UNKNOWN_TYPE",
            `Target type: ${typeof e}`
          );
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(tv.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = (0, er.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = (0, er.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: i } = t;
          (0, M.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(tv.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(L, () => this.checkExpirations()),
            this.events.on(tv.created, (e) => {
              let t = tv.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(tv.expired, (e) => {
              let t = tv.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(tv.deleted, (e) => {
              let t = tv.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, er.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var t6 = {};
      function t4(e) {
        let t;
        return (
          "u" > typeof window && "u" > typeof window[e] && (t = window[e]), t
        );
      }
      function t8(e) {
        let t = t4(e);
        if (!t) throw Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t6, "__esModule", { value: !0 }),
        (t6.getLocalStorage =
          t6.getLocalStorageOrThrow =
          t6.getCrypto =
          t6.getCryptoOrThrow =
          t6.getLocation =
          t6.getLocationOrThrow =
          t6.getNavigator =
          t6.getNavigatorOrThrow =
          t7 =
          t6.getDocument =
          t6.getDocumentOrThrow =
          t6.getFromWindowOrThrow =
          t6.getFromWindow =
            void 0),
        (t6.getFromWindow = t4),
        (t6.getFromWindowOrThrow = t8),
        (t6.getDocumentOrThrow = function () {
          return t8("document");
        });
      var t7 = (t6.getDocument = function () {
        return t4("document");
      });
      (t6.getNavigatorOrThrow = function () {
        return t8("navigator");
      }),
        (t6.getNavigator = function () {
          return t4("navigator");
        }),
        (t6.getLocationOrThrow = function () {
          return t8("location");
        }),
        (t6.getLocation = function () {
          return t4("location");
        }),
        (t6.getCryptoOrThrow = function () {
          return t8("crypto");
        }),
        (t6.getCrypto = function () {
          return t4("crypto");
        }),
        (t6.getLocalStorageOrThrow = function () {
          return t8("localStorage");
        }),
        (t6.getLocalStorage = function () {
          return t4("localStorage");
        });
      class ie extends Q {
        constructor(e, t, i) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            (this.store = i),
            (this.name = "verify-api"),
            (this.verifyUrlV3 = t_),
            (this.storagePrefix = tt),
            (this.version = 2),
            (this.init = async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, M.toMiliseconds)(
                    null == (e = this.publicKey) ? void 0 : e.expiresAt
                  ) < Date.now() &&
                  (this.logger.debug("verify v2 public key expired"),
                  await this.removePublicKey()));
            }),
            (this.register = async (e) => {
              if (!(0, er.jUY)() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: i, decryptedId: r } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${i}&decryptedId=${r}`;
              try {
                let e = t7(),
                  t = this.startAbortTimer(5 * M.ONE_SECOND),
                  r = await new Promise((r, n) => {
                    let a = () => {
                      window.removeEventListener("message", c),
                        e.body.removeChild(o),
                        n("attestation aborted");
                    };
                    this.abortController.signal.addEventListener("abort", a);
                    let o = e.createElement("iframe");
                    (o.src = s),
                      (o.style.display = "none"),
                      o.addEventListener("error", a, {
                        signal: this.abortController.signal,
                      });
                    let c = (s) => {
                      if (!s.data) return;
                      let n = JSON.parse(s.data);
                      if ("verify_attestation" === n.type) {
                        if ((0, ei.decodeJWT)(n.attestation).payload.id !== i)
                          return;
                        clearInterval(t),
                          e.body.removeChild(o),
                          this.abortController.signal.removeEventListener(
                            "abort",
                            a
                          ),
                          window.removeEventListener("message", c),
                          r(null === n.attestation ? "" : n.attestation);
                      }
                    };
                    e.body.appendChild(o),
                      window.addEventListener("message", c, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug("jwt attestation", r), r;
              } catch (e) {
                this.logger.warn(e);
              }
              return "";
            }),
            (this.resolve = async (e) => {
              if (this.isDevEnv) return "";
              let { attestationId: t, hash: i, encryptedId: r } = e;
              if ("" === t) {
                this.logger.debug("resolve: attestationId is empty, skipping");
                return;
              }
              if (t) {
                if ((0, ei.decodeJWT)(t).payload.id !== r) return;
                let e = await this.isValidJwtAttestation(t);
                if (e) {
                  if (!e.isVerified) {
                    this.logger.warn(
                      "resolve: jwt attestation: origin url not verified"
                    );
                    return;
                  }
                  return e;
                }
              }
              if (!i) return;
              let s = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(i, s);
            }),
            (this.fetchAttestation = async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let i = this.startAbortTimer(5 * M.ONE_SECOND),
                r = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(i), 200 === r.status ? await r.json() : void 0
              );
            }),
            (this.getVerifyUrl = (e) => {
              let t = e || tw;
              return (
                tb.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${tw}`
                  ),
                  (t = tw)),
                t
              );
            }),
            (this.fetchPublicKey = async () => {
              try {
                this.logger.debug(
                  `fetching public key from: ${this.verifyUrlV3}`
                );
                let e = this.startAbortTimer(M.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            (this.persistPublicKey = async (e) => {
              this.logger.debug("persisting public key to local storage", e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            (this.removePublicKey = async () => {
              this.logger.debug("removing verify v2 public key from storage"),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            (this.isValidJwtAttestation = async (e) => {
              let t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
              let i = await this.fetchAndPersistPublicKey();
              try {
                if (i) return this.validateAttestation(e, i);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
            }),
            (this.getPublicKey = async () =>
              this.publicKey
                ? this.publicKey
                : await this.fetchAndPersistPublicKey()),
            (this.fetchAndPersistPublicKey = async () => {
              if (this.fetchPromise)
                return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            (this.validateAttestation = (e, t) => {
              let i = (0, er.NbI)(e, t.publicKey),
                r = {
                  hasExpired: (0, M.toMiliseconds)(i.exp) < Date.now(),
                  payload: i,
                };
              if (r.hasExpired)
                throw (
                  (this.logger.warn("resolve: jwt attestation expired"),
                  Error("JWT attestation expired"))
                );
              return {
                origin: r.payload.origin,
                isScam: r.payload.isScam,
                isVerified: r.payload.isVerified,
              };
            }),
            (this.logger = (0, K.Ep)(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = (0, er.UGU)() && ed.env.IS_VITEST),
            this.init();
        }
        get storeKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//verify:public:key"
          );
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, M.toMiliseconds)(e)
            )
          );
        }
      }
      class it extends Z {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.context = "echo"),
            (this.registerDeviceToken = async (e) => {
              let {
                  clientId: t,
                  token: i,
                  notificationType: r,
                  enableEncrypted: s = !1,
                } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(n, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: t,
                  type: r,
                  token: i,
                  always_raw: s,
                }),
              });
            }),
            (this.logger = (0, K.Ep)(t, this.context));
        }
      }
      var ii = Object.defineProperty,
        ir = Object.getOwnPropertySymbols,
        is = Object.prototype.hasOwnProperty,
        ia = Object.prototype.propertyIsEnumerable,
        io = (e, t, i) =>
          t in e
            ? ii(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        ic = (e, t) => {
          for (var i in t || (t = {})) is.call(t, i) && io(e, i, t[i]);
          if (ir) for (var i of ir(t)) ia.call(t, i) && io(e, i, t[i]);
          return e;
        };
      class ih extends X {
        constructor(e, t, i = !0) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            (this.context = "event-client"),
            (this.storagePrefix = tt),
            (this.storageVersion = 0.1),
            (this.events = new Map()),
            (this.shouldPersist = !1),
            (this.createEvent = (e) => {
              let {
                  event: t = "ERROR",
                  type: i = "",
                  properties: { topic: r, trace: s },
                } = e,
                n = (0, er.k$y)(),
                a = ic(
                  {
                    eventId: n,
                    bundleId: this.core.projectId || "",
                    timestamp: Date.now(),
                    props: {
                      event: t,
                      type: i,
                      properties: { topic: r, trace: s },
                    },
                  },
                  this.setMethods(n)
                );
              return (
                this.telemetryEnabled &&
                  (this.events.set(n, a), (this.shouldPersist = !0)),
                a
              );
            }),
            (this.getEvent = (e) => {
              let { eventId: t, topic: i } = e;
              if (t) return this.events.get(t);
              let r = Array.from(this.events.values()).find(
                (e) => e.props.properties.topic === i
              );
              if (r) return ic(ic({}, r), this.setMethods(r.eventId));
            }),
            (this.deleteEvent = (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            (this.setEventListeners = () => {
              this.core.heartbeat.on(L, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, M.fromMiliseconds)(Date.now()) -
                      (0, M.fromMiliseconds)(e.timestamp) >
                      86400 &&
                      (this.events.delete(e.eventId),
                      (this.shouldPersist = !0));
                  });
              });
            }),
            (this.setMethods = (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            (this.addTrace = (e, t) => {
              let i = this.events.get(e);
              i &&
                (i.props.properties.trace.push(t),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            (this.setError = (e, t) => {
              let i = this.events.get(e);
              i &&
                ((i.props.type = t),
                (i.timestamp = Date.now()),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            (this.persist = async () => {
              await this.core.storage.setItem(
                this.storageKey,
                Array.from(this.events.values())
              ),
                (this.shouldPersist = !1);
            }),
            (this.restore = async () => {
              try {
                let e =
                  (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(
                    e.eventId,
                    ic(ic({}, e), this.setMethods(e.eventId))
                  );
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            (this.submit = async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [t, i] of this.events) i.props.type && e.push(i);
              if (0 !== e.length)
                try {
                  if (
                    (
                      await fetch(
                        `https://pulse.walletconnect.com/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${tl}`,
                        { method: "POST", body: JSON.stringify(e) }
                      )
                    ).ok
                  )
                    for (let t of e)
                      this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            (this.logger = (0, K.Ep)(t, this.context)),
            i
              ? this.restore().then(async () => {
                  await this.submit(), this.setEventListeners();
                })
              : this.persist();
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.storageVersion +
            this.core.customStoragePrefix +
            "//" +
            this.context
          );
        }
      }
      var il = Object.defineProperty,
        iu = Object.getOwnPropertySymbols,
        ip = Object.prototype.hasOwnProperty,
        id = Object.prototype.propertyIsEnumerable,
        ig = (e, t, i) =>
          t in e
            ? il(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        iy = (e, t) => {
          for (var i in t || (t = {})) ip.call(t, i) && ig(e, i, t[i]);
          if (iu) for (var i of iu(t)) id.call(t, i) && ig(e, i, t[i]);
          return e;
        };
      class im extends V {
        constructor(e) {
          var t;
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = te),
            (this.events = new s.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.dispatchEnvelope = ({
              topic: e,
              message: t,
              sessionExists: i,
            }) => {
              if (!e || !t) return;
              let r = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: tu.link_mode,
              };
              this.relayer.onLinkMessageEvent(r, { sessionExists: i });
            }),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || to),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? `:${e.customStoragePrefix}`
                : "");
          let i = (0, K.jI)({
              level:
                "string" == typeof e?.logger && e.logger ? e.logger : ti.logger,
            }),
            { logger: r, chunkLoggerController: n } = (0, K.Rt)({
              opts: i,
              maxSizeInBytes: e?.maxLogBlobSizeInBytes,
              loggerOverride: e?.logger,
            });
          (this.logChunkController = n),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({
                      clientId: await this.crypto.getClientId(),
                    }));
              }),
            (this.logger = (0, K.Ep)(r, this.name)),
            (this.heartbeat = new U()),
            (this.crypto = new tx(this, this.logger, e?.keychain)),
            (this.history = new t5(this, this.logger)),
            (this.expirer = new t3(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new D(iy(iy({}, tr), e?.storageOptions))),
            (this.relayer = new tG({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new t9(this, this.logger)),
            (this.verify = new ie(this, this.logger, this.storage)),
            (this.echoClient = new it(this.projectId || "", this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new ih(this, this.logger, e?.telemetryEnabled));
        }
        static async init(e) {
          let t = new im(e);
          await t.initialize();
          let i = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", i), t;
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async getLogsBlob() {
          var e;
          return null == (e = this.logChunkController)
            ? void 0
            : e.logsToBlob({ clientId: await this.crypto.getClientId() });
        }
        async addLinkModeSupportedApp(e) {
          this.linkModeSupportedApps.includes(e) ||
            (this.linkModeSupportedApps.push(e),
            await this.storage.setItem(tp, this.linkModeSupportedApps));
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.linkModeSupportedApps =
                (await this.storage.getItem(tp)) || []),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var iv = i(25566);
      let iw = "client",
        i_ = `wc@2:${iw}:`,
        ib = { name: iw, logger: "error" },
        iI = "WALLETCONNECT_DEEPLINK_CHOICE",
        iE = "Proposal expired",
        iP = M.SEVEN_DAYS,
        iS = {
          wc_sessionPropose: {
            req: { ttl: M.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: M.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: M.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: M.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: M.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: M.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: M.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: M.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: M.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: M.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: M.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: M.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: M.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: M.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: M.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: M.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: M.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: M.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: M.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: M.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: M.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: M.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        iC = { min: M.FIVE_MINUTES, max: M.SEVEN_DAYS },
        iR = { idle: "IDLE", active: "ACTIVE" },
        iO = [
          "wc_sessionPropose",
          "wc_sessionRequest",
          "wc_authRequest",
          "wc_sessionAuthenticate",
        ],
        ix = "wc@1.5:auth:",
        iT = `${ix}:PUB_KEY`;
      var iq = Object.defineProperty,
        ik = Object.defineProperties,
        iA = Object.getOwnPropertyDescriptors,
        iN = Object.getOwnPropertySymbols,
        iD = Object.prototype.hasOwnProperty,
        iM = Object.prototype.propertyIsEnumerable,
        ij = (e, t, i) =>
          t in e
            ? iq(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        i$ = (e, t) => {
          for (var i in t || (t = {})) iD.call(t, i) && ij(e, i, t[i]);
          if (iN) for (var i of iN(t)) iM.call(t, i) && ij(e, i, t[i]);
          return e;
        },
        iz = (e, t) => ik(e, iA(t));
      class iL extends et {
        constructor(e) {
          super(e),
            (this.name = "engine"),
            (this.events = new (n())()),
            (this.initialized = !1),
            (this.requestQueue = { state: iR.idle, queue: [] }),
            (this.sessionRequestQueue = { state: iR.idle, queue: [] }),
            (this.requestQueueDelay = M.ONE_SECOND),
            (this.expectedPairingMethodMap = new Map()),
            (this.recentlyDeletedMap = new Map()),
            (this.recentlyDeletedLimit = 200),
            (this.relayMessageCache = []),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(iS) }),
                (this.initialized = !0),
                setTimeout(() => {
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, M.toMiliseconds)(this.requestQueueDelay)));
            }),
            (this.connect = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let t = iz(i$({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              let {
                  pairingTopic: i,
                  requiredNamespaces: r,
                  optionalNamespaces: s,
                  sessionProperties: n,
                  relays: a,
                } = t,
                o = i,
                c,
                h = !1;
              try {
                o && (h = this.client.core.pairing.pairings.get(o).active);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `connect() -> pairing.get(${o}) failed`
                  ),
                  e)
                );
              }
              if (!o || !h) {
                let { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (o = e), (c = t);
              }
              if (!o) {
                let { message: e } = (0, er.kCb)(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${o}`
                );
                throw Error(e);
              }
              let l = await this.client.core.crypto.generateKeyPair(),
                u = iS.wc_sessionPropose.req.ttl || M.FIVE_MINUTES,
                p = (0, er.gn4)(u),
                d = i$(
                  {
                    requiredNamespaces: r,
                    optionalNamespaces: s,
                    relays: a ?? [{ protocol: "irn" }],
                    proposer: { publicKey: l, metadata: this.client.metadata },
                    expiryTimestamp: p,
                    pairingTopic: o,
                  },
                  n && { sessionProperties: n }
                ),
                { reject: g, resolve: f, done: y } = (0, er.H1S)(u, iE);
              this.events.once(
                (0, er.E0T)("session_connect"),
                async ({ error: e, session: t }) => {
                  if (e) g(e);
                  else if (t) {
                    t.self.publicKey = l;
                    let e = iz(i$({}, t), {
                      pairingTopic: d.pairingTopic,
                      requiredNamespaces: d.requiredNamespaces,
                      optionalNamespaces: d.optionalNamespaces,
                      transportType: tu.relay,
                    });
                    await this.client.session.set(t.topic, e),
                      await this.setExpiry(t.topic, t.expiry),
                      o &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: o,
                          metadata: t.peer.metadata,
                        })),
                      this.cleanupDuplicatePairings(e),
                      f(e);
                  }
                }
              );
              let m = await this.sendRequest({
                topic: o,
                method: "wc_sessionPropose",
                params: d,
                throwOnFailedPublish: !0,
              });
              return (
                await this.setProposal(m, i$({ id: m }, d)),
                { uri: c, approval: y }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (e) {
                throw (this.client.logger.error("pair() failed"), e);
              }
            }),
            (this.approve = async (e) => {
              var t, i, r;
              let s = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (t = e?.id) ? void 0 : t.toString(),
                  trace: [tP.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (e) {
                throw (s.setError(tS.no_internet_connection), e);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (t) {
                throw (
                  (this.client.logger.error(
                    `approve() -> proposal.get(${e?.id}) failed`
                  ),
                  s.setError(tS.proposal_not_found),
                  t)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "approve() -> isValidApprove() failed"
                  ),
                  s.setError(tS.session_approve_namespace_validation_failure),
                  e)
                );
              }
              let {
                  id: n,
                  relayProtocol: a,
                  namespaces: o,
                  sessionProperties: c,
                  sessionConfig: h,
                } = e,
                l = this.client.proposal.get(n);
              this.client.core.eventClient.deleteEvent({ eventId: s.eventId });
              let {
                  pairingTopic: u,
                  proposer: p,
                  requiredNamespaces: d,
                  optionalNamespaces: g,
                } = l,
                f =
                  null == (i = this.client.core.eventClient)
                    ? void 0
                    : i.getEvent({ topic: u });
              f ||
                (f =
                  null == (r = this.client.core.eventClient)
                    ? void 0
                    : r.createEvent({
                        type: tP.session_approve_started,
                        properties: {
                          topic: u,
                          trace: [
                            tP.session_approve_started,
                            tP.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let y = await this.client.core.crypto.generateKeyPair(),
                m = p.publicKey,
                v = await this.client.core.crypto.generateSharedKey(y, m),
                w = i$(
                  i$(
                    {
                      relay: { protocol: a ?? "irn" },
                      namespaces: o,
                      controller: {
                        publicKey: y,
                        metadata: this.client.metadata,
                      },
                      expiry: (0, er.gn4)(iP),
                    },
                    c && { sessionProperties: c }
                  ),
                  h && { sessionConfig: h }
                ),
                _ = tu.relay;
              f.addTrace(tP.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(v, {
                  transportType: _,
                });
              } catch (e) {
                throw (f.setError(tS.subscribe_session_topic_failure), e);
              }
              f.addTrace(tP.subscribe_session_topic_success);
              let b = iz(i$({}, w), {
                topic: v,
                requiredNamespaces: d,
                optionalNamespaces: g,
                pairingTopic: u,
                acknowledged: !1,
                self: w.controller,
                peer: { publicKey: p.publicKey, metadata: p.metadata },
                controller: y,
                transportType: tu.relay,
              });
              await this.client.session.set(v, b), f.addTrace(tP.store_session);
              try {
                f.addTrace(tP.publishing_session_settle),
                  await this.sendRequest({
                    topic: v,
                    method: "wc_sessionSettle",
                    params: w,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (f?.setError(tS.session_settle_publish_failure), e);
                  }),
                  f.addTrace(tP.session_settle_publish_success),
                  f.addTrace(tP.publishing_session_approve),
                  await this.sendResult({
                    id: n,
                    topic: u,
                    result: {
                      relay: { protocol: a ?? "irn" },
                      responderPublicKey: y,
                    },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (f?.setError(tS.session_approve_publish_failure), e);
                  }),
                  f.addTrace(tP.session_approve_publish_success);
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(
                    v,
                    (0, er.D6H)("USER_DISCONNECTED")
                  ),
                  await this.client.core.relayer.unsubscribe(v),
                  e)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({
                  eventId: f.eventId,
                }),
                await this.client.core.pairing.updateMetadata({
                  topic: u,
                  metadata: p.metadata,
                }),
                await this.client.proposal.delete(
                  n,
                  (0, er.D6H)("USER_DISCONNECTED")
                ),
                await this.client.core.pairing.activate({ topic: u }),
                await this.setExpiry(v, (0, er.gn4)(iP)),
                {
                  topic: v,
                  acknowledged: () =>
                    Promise.resolve(this.client.session.get(v)),
                }
              );
            }),
            (this.reject = async (e) => {
              let t;
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "reject() -> isValidReject() failed"
                  ),
                  e)
                );
              }
              let { id: i, reason: r } = e;
              try {
                t = this.client.proposal.get(i).pairingTopic;
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `reject() -> proposal.get(${i}) failed`
                  ),
                  e)
                );
              }
              t &&
                (await this.sendError({
                  id: i,
                  topic: t,
                  error: r,
                  rpcOpts: iS.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(
                  i,
                  (0, er.D6H)("USER_DISCONNECTED")
                ));
            }),
            (this.update = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "update() -> isValidUpdate() failed"
                  ),
                  e)
                );
              }
              let { topic: t, namespaces: i } = e,
                { done: r, resolve: s, reject: n } = (0, er.H1S)(),
                a = (0, ea.payloadId)(),
                o = (0, ea.getBigIntRpcId)().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once(
                  (0, er.E0T)("session_update", a),
                  ({ error: e }) => {
                    e ? n(e) : s();
                  }
                ),
                await this.client.session.update(t, { namespaces: i }),
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: i },
                  throwOnFailedPublish: !0,
                  clientRpcId: a,
                  relayRpcId: o,
                }).catch((e) => {
                  this.client.logger.error(e),
                    this.client.session.update(t, { namespaces: c }),
                    n(e);
                }),
                { acknowledged: r }
              );
            }),
            (this.extend = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "extend() -> isValidExtend() failed"
                  ),
                  e)
                );
              }
              let { topic: t } = e,
                i = (0, ea.payloadId)(),
                { done: r, resolve: s, reject: n } = (0, er.H1S)();
              return (
                this.events.once(
                  (0, er.E0T)("session_extend", i),
                  ({ error: e }) => {
                    e ? n(e) : s();
                  }
                ),
                await this.setExpiry(t, (0, er.gn4)(iP)),
                this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                  clientRpcId: i,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  n(e);
                }),
                { acknowledged: r }
              );
            }),
            (this.request = async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "request() -> isValidRequest() failed"
                  ),
                  e)
                );
              }
              let {
                  chainId: t,
                  request: i,
                  topic: r,
                  expiry: s = iS.wc_sessionRequest.req.ttl,
                } = e,
                n = this.client.session.get(r);
              n?.transportType === tu.relay &&
                (await this.confirmOnlineStateOrThrow());
              let a = (0, ea.payloadId)(),
                o = (0, ea.getBigIntRpcId)().toString(),
                {
                  done: c,
                  resolve: h,
                  reject: l,
                } = (0, er.H1S)(s, "Request expired. Please try again.");
              this.events.once(
                (0, er.E0T)("session_request", a),
                ({ error: e, result: t }) => {
                  e ? l(e) : h(t);
                }
              );
              let u = this.getAppLinkIfEnabled(
                n.peer.metadata,
                n.transportType
              );
              return u
                ? (await this.sendRequest({
                    clientRpcId: a,
                    relayRpcId: o,
                    topic: r,
                    method: "wc_sessionRequest",
                    params: {
                      request: iz(i$({}, i), {
                        expiryTimestamp: (0, er.gn4)(s),
                      }),
                      chainId: t,
                    },
                    expiry: s,
                    throwOnFailedPublish: !0,
                    appLink: u,
                  }).catch((e) => l(e)),
                  this.client.events.emit("session_request_sent", {
                    topic: r,
                    request: i,
                    chainId: t,
                    id: a,
                  }),
                  await c())
                : await Promise.all([
                    new Promise(async (e) => {
                      await this.sendRequest({
                        clientRpcId: a,
                        relayRpcId: o,
                        topic: r,
                        method: "wc_sessionRequest",
                        params: {
                          request: iz(i$({}, i), {
                            expiryTimestamp: (0, er.gn4)(s),
                          }),
                          chainId: t,
                        },
                        expiry: s,
                        throwOnFailedPublish: !0,
                      }).catch((e) => l(e)),
                        this.client.events.emit("session_request_sent", {
                          topic: r,
                          request: i,
                          chainId: t,
                          id: a,
                        }),
                        e();
                    }),
                    new Promise(async (e) => {
                      var t;
                      if (
                        !(null != (t = n.sessionConfig) && t.disableDeepLink)
                      ) {
                        let e = await (0, er.bW6)(this.client.core.storage, iI);
                        (0, er.HhN)({ id: a, topic: r, wcDeepLink: e });
                      }
                      e();
                    }),
                    c(),
                  ]).then((e) => e[2]);
            }),
            (this.respond = async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: i } = e,
                { id: r } = i,
                s = this.client.session.get(t);
              s.transportType === tu.relay &&
                (await this.confirmOnlineStateOrThrow());
              let n = this.getAppLinkIfEnabled(
                s.peer.metadata,
                s.transportType
              );
              (0, ea.isJsonRpcResult)(i)
                ? await this.sendResult({
                    id: r,
                    topic: t,
                    result: i.result,
                    throwOnFailedPublish: !0,
                    appLink: n,
                  })
                : (0, ea.isJsonRpcError)(i) &&
                  (await this.sendError({
                    id: r,
                    topic: t,
                    error: i.error,
                    appLink: n,
                  })),
                this.cleanupAfterResponse(e);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (e) {
                throw (
                  (this.client.logger.error("ping() -> isValidPing() failed"),
                  e)
                );
              }
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = (0, ea.payloadId)(),
                  i = (0, ea.getBigIntRpcId)().toString(),
                  { done: r, resolve: s, reject: n } = (0, er.H1S)();
                this.events.once(
                  (0, er.E0T)("session_ping", e),
                  ({ error: e }) => {
                    e ? n(e) : s();
                  }
                ),
                  await Promise.all([
                    this.sendRequest({
                      topic: t,
                      method: "wc_sessionPing",
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: e,
                      relayRpcId: i,
                    }),
                    r(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              let { topic: t, event: i, chainId: r } = e,
                s = (0, ea.getBigIntRpcId)().toString();
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: i, chainId: r },
                throwOnFailedPublish: !0,
                relayRpcId: s,
              });
            }),
            (this.disconnect = async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionDelete",
                  params: (0, er.D6H)("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = (0, er.kCb)(
                  "MISMATCHED_TOPIC",
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) => (0, er.Ih8)(t, e))
            )),
            (this.getPendingSessionRequests = () =>
              this.client.pendingRequest.getAll()),
            (this.authenticate = async (e, t) => {
              var i;
              let r;
              this.isInitialized(), this.isValidAuthenticate(e);
              let s =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (i = this.client.metadata.redirect)
                    ? void 0
                    : i.linkMode),
                n = s ? tu.link_mode : tu.relay;
              n === tu.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: a,
                  statement: o = "",
                  uri: c,
                  domain: h,
                  nonce: l,
                  type: u,
                  exp: p,
                  nbf: d,
                  methods: g = [],
                  expiry: f,
                } = e,
                y = [...(e.resources || [])],
                { topic: m, uri: v } = await this.client.core.pairing.create({
                  methods: ["wc_sessionAuthenticate"],
                  transportType: n,
                });
              this.client.logger.info({
                message: "Generated new pairing",
                pairing: { topic: m, uri: v },
              });
              let w = await this.client.core.crypto.generateKeyPair(),
                _ = (0, er.YmJ)(w);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(iT, {
                    responseTopic: _,
                    publicKey: w,
                  }),
                  this.client.auth.pairingTopics.set(_, {
                    topic: _,
                    pairingTopic: m,
                  }),
                ]),
                await this.client.core.relayer.subscribe(_, {
                  transportType: n,
                }),
                this.client.logger.info(
                  `sending request to new pairing topic: ${m}`
                ),
                g.length > 0)
              ) {
                let { namespace: e } = (0, er.DQe)(a[0]),
                  t = (0, er.IkP)(e, "request", g);
                (0, er.hA9)(y) && (t = (0, er.qJM)(t, y.pop())), y.push(t);
              }
              let b =
                  f && f > iS.wc_sessionAuthenticate.req.ttl
                    ? f
                    : iS.wc_sessionAuthenticate.req.ttl,
                I = {
                  authPayload: {
                    type: u ?? "caip122",
                    chains: a,
                    statement: o,
                    aud: c,
                    domain: h,
                    version: "1",
                    nonce: l,
                    iat: new Date().toISOString(),
                    exp: p,
                    nbf: d,
                    resources: y,
                  },
                  requester: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: (0, er.gn4)(b),
                },
                E = {
                  requiredNamespaces: {},
                  optionalNamespaces: {
                    eip155: {
                      chains: a,
                      methods: [...new Set(["personal_sign", ...g])],
                      events: ["chainChanged", "accountsChanged"],
                    },
                  },
                  relays: [{ protocol: "irn" }],
                  pairingTopic: m,
                  proposer: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: (0, er.gn4)(iS.wc_sessionPropose.req.ttl),
                },
                {
                  done: P,
                  resolve: S,
                  reject: C,
                } = (0, er.H1S)(b, "Request expired"),
                R = async ({ error: e, session: t }) => {
                  if (
                    (this.events.off((0, er.E0T)("session_request", x), O), e)
                  )
                    C(e);
                  else if (t) {
                    (t.self.publicKey = w),
                      await this.client.session.set(t.topic, t),
                      await this.setExpiry(t.topic, t.expiry),
                      m &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: m,
                          metadata: t.peer.metadata,
                        }));
                    let e = this.client.session.get(t.topic);
                    await this.deleteProposal(T), S({ session: e });
                  }
                },
                O = async (e) => {
                  var i, r, s;
                  let a;
                  if (
                    (await this.deletePendingAuthRequest(x, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    e.error)
                  ) {
                    let t = (0, er.D6H)(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off((0, er.E0T)("session_connect"), R),
                        C(e.error.message));
                  }
                  await this.deleteProposal(T),
                    this.events.off((0, er.E0T)("session_connect"), R);
                  let { cacaos: o, responder: c } = e.result,
                    h = [],
                    l = [];
                  for (let e of o) {
                    (await (0, er.c4l)({
                      cacao: e,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        e,
                        "Signature verification failed"
                      ),
                      C(
                        (0, er.D6H)(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    let { p: t } = e,
                      i = (0, er.hA9)(t.resources),
                      r = [(0, er.DJo)(t.iss)],
                      s = (0, er.NmC)(t.iss);
                    if (i) {
                      let e = (0, er.Y31)(i),
                        t = (0, er.ouN)(i);
                      h.push(...e), r.push(...t);
                    }
                    for (let e of r) l.push(`${e}:${s}`);
                  }
                  let u = await this.client.core.crypto.generateSharedKey(
                    w,
                    c.publicKey
                  );
                  h.length > 0 &&
                    ((a = {
                      topic: u,
                      acknowledged: !0,
                      self: { publicKey: w, metadata: this.client.metadata },
                      peer: c,
                      controller: c.publicKey,
                      expiry: (0, er.gn4)(iP),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: m,
                      namespaces: (0, er.E12)([...new Set(h)], [...new Set(l)]),
                      transportType: n,
                    }),
                    await this.client.core.relayer.subscribe(u, {
                      transportType: n,
                    }),
                    await this.client.session.set(u, a),
                    m &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: m,
                        metadata: c.metadata,
                      })),
                    (a = this.client.session.get(u))),
                    null != (i = this.client.metadata.redirect) &&
                      i.linkMode &&
                      null != (r = c.metadata.redirect) &&
                      r.linkMode &&
                      null != (s = c.metadata.redirect) &&
                      s.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(
                        c.metadata.redirect.universal
                      ),
                      this.client.session.update(u, {
                        transportType: tu.link_mode,
                      })),
                    S({ auths: o, session: a });
                },
                x = (0, ea.payloadId)(),
                T = (0, ea.payloadId)();
              this.events.once((0, er.E0T)("session_connect"), R),
                this.events.once((0, er.E0T)("session_request", x), O);
              try {
                if (s) {
                  let e = (0, ea.formatJsonRpcRequest)(
                    "wc_sessionAuthenticate",
                    I,
                    x
                  );
                  this.client.core.history.set(m, e);
                  let i = await this.client.core.crypto.encode("", e, {
                    type: er.FpL,
                    encoding: er.zl_,
                  });
                  r = (0, er.L9d)(t, m, i);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: m,
                      method: "wc_sessionAuthenticate",
                      params: I,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: x,
                    }),
                    this.sendRequest({
                      topic: m,
                      method: "wc_sessionPropose",
                      params: E,
                      expiry: iS.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: T,
                    }),
                  ]);
              } catch (e) {
                throw (
                  (this.events.off((0, er.E0T)("session_connect"), R),
                  this.events.off((0, er.E0T)("session_request", x), O),
                  e)
                );
              }
              return (
                await this.setProposal(T, i$({ id: T }, E)),
                await this.setAuthRequest(x, {
                  request: iz(i$({}, I), { verifyContext: {} }),
                  pairingTopic: m,
                  transportType: n,
                }),
                { uri: r ?? v, response: P }
              );
            }),
            (this.approveSessionAuthenticate = async (e) => {
              let t;
              let { id: i, auths: r } = e,
                s = this.client.core.eventClient.createEvent({
                  properties: {
                    topic: i.toString(),
                    trace: [tC.authenticated_session_approve_started],
                  },
                });
              try {
                this.isInitialized();
              } catch (e) {
                throw (s.setError(tR.no_internet_connection), e);
              }
              let n = this.getPendingAuthRequest(i);
              if (!n)
                throw (
                  (s.setError(
                    tR.authenticated_session_pending_request_not_found
                  ),
                  Error(`Could not find pending auth request with id ${i}`))
                );
              let a = n.transportType || tu.relay;
              a === tu.relay && (await this.confirmOnlineStateOrThrow());
              let o = n.requester.publicKey,
                c = await this.client.core.crypto.generateKeyPair(),
                h = (0, er.YmJ)(o),
                l = { type: er.rVF, receiverPublicKey: o, senderPublicKey: c },
                u = [],
                p = [];
              for (let e of r) {
                if (
                  !(await (0, er.c4l)({
                    cacao: e,
                    projectId: this.client.core.projectId,
                  }))
                ) {
                  s.setError(tR.invalid_cacao);
                  let e = (0, er.D6H)(
                    "SESSION_SETTLEMENT_FAILED",
                    "Signature verification failed"
                  );
                  throw (
                    (await this.sendError({
                      id: i,
                      topic: h,
                      error: e,
                      encodeOpts: l,
                    }),
                    Error(e.message))
                  );
                }
                s.addTrace(tC.cacaos_verified);
                let { p: t } = e,
                  r = (0, er.hA9)(t.resources),
                  n = [(0, er.DJo)(t.iss)],
                  a = (0, er.NmC)(t.iss);
                if (r) {
                  let e = (0, er.Y31)(r),
                    t = (0, er.ouN)(r);
                  u.push(...e), n.push(...t);
                }
                for (let e of n) p.push(`${e}:${a}`);
              }
              let d = await this.client.core.crypto.generateSharedKey(c, o);
              if (
                (s.addTrace(tC.create_authenticated_session_topic),
                u?.length > 0)
              ) {
                (t = {
                  topic: d,
                  acknowledged: !0,
                  self: { publicKey: c, metadata: this.client.metadata },
                  peer: { publicKey: o, metadata: n.requester.metadata },
                  controller: o,
                  expiry: (0, er.gn4)(iP),
                  authentication: r,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: "irn" },
                  pairingTopic: n.pairingTopic,
                  namespaces: (0, er.E12)([...new Set(u)], [...new Set(p)]),
                  transportType: a,
                }),
                  s.addTrace(tC.subscribing_authenticated_session_topic);
                try {
                  await this.client.core.relayer.subscribe(d, {
                    transportType: a,
                  });
                } catch (e) {
                  throw (
                    (s.setError(
                      tR.subscribe_authenticated_session_topic_failure
                    ),
                    e)
                  );
                }
                s.addTrace(tC.subscribe_authenticated_session_topic_success),
                  await this.client.session.set(d, t),
                  s.addTrace(tC.store_authenticated_session),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              s.addTrace(tC.publishing_authenticated_session_approve);
              try {
                await this.sendResult({
                  topic: h,
                  id: i,
                  result: {
                    cacaos: r,
                    responder: { publicKey: c, metadata: this.client.metadata },
                  },
                  encodeOpts: l,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(n.requester.metadata, a),
                });
              } catch (e) {
                throw (
                  (s.setError(tR.authenticated_session_approve_publish_failure),
                  e)
                );
              }
              return (
                await this.client.auth.requests.delete(i, {
                  message: "fulfilled",
                  code: 0,
                }),
                await this.client.core.pairing.activate({
                  topic: n.pairingTopic,
                }),
                this.client.core.eventClient.deleteEvent({
                  eventId: s.eventId,
                }),
                { session: t }
              );
            }),
            (this.rejectSessionAuthenticate = async (e) => {
              this.isInitialized();
              let { id: t, reason: i } = e,
                r = this.getPendingAuthRequest(t);
              if (!r)
                throw Error(`Could not find pending auth request with id ${t}`);
              r.transportType === tu.relay &&
                (await this.confirmOnlineStateOrThrow());
              let s = r.requester.publicKey,
                n = await this.client.core.crypto.generateKeyPair(),
                a = (0, er.YmJ)(s),
                o = { type: er.rVF, receiverPublicKey: s, senderPublicKey: n };
              await this.sendError({
                id: t,
                topic: a,
                error: i,
                encodeOpts: o,
                rpcOpts: iS.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(
                  r.requester.metadata,
                  r.transportType
                ),
              }),
                await this.client.auth.requests.delete(t, {
                  message: "rejected",
                  code: 0,
                }),
                await this.client.proposal.delete(
                  t,
                  (0, er.D6H)("USER_DISCONNECTED")
                );
            }),
            (this.formatAuthMessage = (e) => {
              this.isInitialized();
              let { request: t, iss: i } = e;
              return (0, er.wvx)(t, i);
            }),
            (this.processRelayMessageCache = () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      let e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (e) {
                      this.client.logger.error(e);
                    }
              }, 50);
            }),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    i = this.client.core.pairing.pairings
                      .getAll()
                      .filter((i) => {
                        var r, s;
                        return (
                          (null == (r = i.peerMetadata) ? void 0 : r.url) &&
                          (null == (s = i.peerMetadata) ? void 0 : s.url) ===
                            e.peer.metadata.url &&
                          i.topic &&
                          i.topic !== t.topic
                        );
                      });
                  if (0 === i.length) return;
                  this.client.logger.info(
                    `Cleaning up ${i.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      i.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (e) => {
              var t;
              let {
                  topic: i,
                  expirerHasDeleted: r = !1,
                  emitEvent: s = !0,
                  id: n = 0,
                } = e,
                { self: a } = this.client.session.get(i);
              await this.client.core.relayer.unsubscribe(i),
                await this.client.session.delete(
                  i,
                  (0, er.D6H)("USER_DISCONNECTED")
                ),
                this.addToRecentlyDeleted(i, "session"),
                this.client.core.crypto.keychain.has(a.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(a.publicKey)),
                this.client.core.crypto.keychain.has(i) &&
                  (await this.client.core.crypto.deleteSymKey(i)),
                r || this.client.core.expirer.del(i),
                this.client.core.storage
                  .removeItem(iI)
                  .catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === i &&
                    this.deletePendingSessionRequest(
                      e.id,
                      (0, er.D6H)("USER_DISCONNECTED")
                    );
                }),
                i ===
                  (null == (t = this.sessionRequestQueue.queue[0])
                    ? void 0
                    : t.topic) && (this.sessionRequestQueue.state = iR.idle),
                s &&
                  this.client.events.emit("session_delete", {
                    id: n,
                    topic: i,
                  });
            }),
            (this.deleteProposal = async (e, t) => {
              if (t)
                try {
                  let t = this.client.proposal.get(e),
                    i = this.client.core.eventClient.getEvent({
                      topic: t.pairingTopic,
                    });
                  i?.setError(tS.proposal_expired);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(
                  e,
                  (0, er.D6H)("USER_DISCONNECTED")
                ),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "proposal");
            }),
            (this.deletePendingSessionRequest = async (e, t, i = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                i ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "request"),
                (this.sessionRequestQueue.queue =
                  this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                i &&
                  ((this.sessionRequestQueue.state = iR.idle),
                  this.client.events.emit("session_request_expire", { id: e }));
            }),
            (this.deletePendingAuthRequest = async (e, t, i = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                i ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            (this.setProposal = async (e, t) => {
              this.client.core.expirer.set(
                e,
                (0, er.gn4)(iS.wc_sessionPropose.req.ttl)
              ),
                await this.client.proposal.set(e, t);
            }),
            (this.setAuthRequest = async (e, t) => {
              let {
                request: i,
                pairingTopic: r,
                transportType: s = tu.relay,
              } = t;
              this.client.core.expirer.set(e, i.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: i.authPayload,
                  requester: i.requester,
                  expiryTimestamp: i.expiryTimestamp,
                  id: e,
                  pairingTopic: r,
                  verifyContext: i.verifyContext,
                  transportType: s,
                });
            }),
            (this.setPendingSessionRequest = async (e) => {
              let { id: t, topic: i, params: r, verifyContext: s } = e,
                n =
                  r.request.expiryTimestamp ||
                  (0, er.gn4)(iS.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, n),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: i,
                  params: r,
                  verifyContext: s,
                });
            }),
            (this.sendRequest = async (e) => {
              let t, r;
              let {
                  topic: s,
                  method: n,
                  params: a,
                  expiry: o,
                  relayRpcId: c,
                  clientRpcId: h,
                  throwOnFailedPublish: l,
                  appLink: u,
                } = e,
                p = (0, ea.formatJsonRpcRequest)(n, a, h),
                d = !!u;
              try {
                let e = d ? er.zl_ : er.$dT;
                t = await this.client.core.crypto.encode(s, p, { encoding: e });
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${s} failed`
                  ),
                  e)
                );
              }
              if (iO.includes(n)) {
                let e = (0, er.rjm)(JSON.stringify(p)),
                  i = (0, er.rjm)(t);
                r = await this.client.core.verify.register({
                  id: i,
                  decryptedId: e,
                });
              }
              let g = iS[n].req;
              if (
                ((g.attestation = r),
                o && (g.ttl = o),
                c && (g.id = c),
                this.client.core.history.set(s, p),
                d)
              ) {
                let e = (0, er.L9d)(u, s, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = iS[n].req;
                o && (e.ttl = o),
                  c && (e.id = c),
                  l
                    ? ((e.internal = iz(i$({}, e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(s, t, e))
                    : this.client.core.relayer
                        .publish(s, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return p.id;
            }),
            (this.sendResult = async (e) => {
              let t, r;
              let {
                  id: s,
                  topic: n,
                  result: a,
                  throwOnFailedPublish: o,
                  encodeOpts: c,
                  appLink: h,
                } = e,
                l = (0, ea.formatJsonRpcResult)(s, a),
                u = h && "u" > typeof (null == i.g ? void 0 : i.g.Linking);
              try {
                let e = u ? er.zl_ : er.$dT;
                t = await this.client.core.crypto.encode(
                  n,
                  l,
                  iz(i$({}, c || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${n} failed`
                  ),
                  e)
                );
              }
              try {
                r = await this.client.core.history.get(n, s);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendResult() -> history.get(${n}, ${s}) failed`
                  ),
                  e)
                );
              }
              if (u) {
                let e = (0, er.L9d)(h, n, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = iS[r.request.method].res;
                o
                  ? ((e.internal = iz(i$({}, e.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(n, t, e))
                  : this.client.core.relayer
                      .publish(n, t, e)
                      .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(l);
            }),
            (this.sendError = async (e) => {
              let t, r;
              let {
                  id: s,
                  topic: n,
                  error: a,
                  encodeOpts: o,
                  rpcOpts: c,
                  appLink: h,
                } = e,
                l = (0, ea.formatJsonRpcError)(s, a),
                u = h && "u" > typeof (null == i.g ? void 0 : i.g.Linking);
              try {
                let e = u ? er.zl_ : er.$dT;
                t = await this.client.core.crypto.encode(
                  n,
                  l,
                  iz(i$({}, o || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${n} failed`
                  ),
                  e)
                );
              }
              try {
                r = await this.client.core.history.get(n, s);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendError() -> history.get(${n}, ${s}) failed`
                  ),
                  e)
                );
              }
              if (u) {
                let e = (0, er.L9d)(h, n, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = c || iS[r.request.method].res;
                this.client.core.relayer.publish(n, t, e);
              }
              await this.client.core.history.resolve(l);
            }),
            (this.cleanup = async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let i = !1;
                (0, er.BwD)(t.expiry) && (i = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (i = !0),
                  i && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  (0, er.BwD)(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state === iR.active) {
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
                return;
              }
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = iR.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    await this.processRequest(e);
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = iR.idle;
            }),
            (this.processRequest = async (e) => {
              let {
                  topic: t,
                  payload: i,
                  attestation: r,
                  transportType: s,
                  encryptedId: n,
                } = e,
                a = i.method;
              if (
                !this.shouldIgnorePairingRequest({ topic: t, requestMethod: a })
              )
                switch (a) {
                  case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: n,
                    });
                  case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(t, i);
                  case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(t, i);
                  case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(t, i);
                  case "wc_sessionPing":
                    return await this.onSessionPingRequest(t, i);
                  case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(t, i);
                  case "wc_sessionRequest":
                    return await this.onSessionRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: n,
                      transportType: s,
                    });
                  case "wc_sessionEvent":
                    return await this.onSessionEventRequest(t, i);
                  case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: n,
                      transportType: s,
                    });
                  default:
                    return this.client.logger.info(
                      `Unsupported request method ${a}`
                    );
                }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: i, transportType: r } = e,
                s = (await this.client.core.history.get(t, i.id)).request
                  .method;
              switch (s) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, i, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, i);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, i);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, i);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, i);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, i);
                case "wc_sessionAuthenticate":
                  return this.onSessionAuthenticateResponse(t, i);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${s}`
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              let { topic: t } = e,
                { message: i } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(i);
            }),
            (this.shouldIgnorePairingRequest = (e) => {
              let { topic: t, requestMethod: i } = e,
                r = this.expectedPairingMethodMap.get(t);
              return (
                !(!r || r.includes(i)) &&
                !!(
                  r.includes("wc_sessionAuthenticate") &&
                  this.client.events.listenerCount("session_authenticate") > 0
                )
              );
            }),
            (this.onSessionProposeRequest = async (e) => {
              let { topic: t, payload: i, attestation: r, encryptedId: s } = e,
                { params: n, id: a } = i;
              try {
                let e = this.client.core.eventClient.getEvent({ topic: t });
                this.isValidConnect(i$({}, i.params));
                let o =
                    n.expiryTimestamp ||
                    (0, er.gn4)(iS.wc_sessionPropose.req.ttl),
                  c = i$({ id: a, pairingTopic: t, expiryTimestamp: o }, n);
                await this.setProposal(a, c);
                let h = await this.getVerifyContext({
                  attestationId: r,
                  hash: (0, er.rjm)(JSON.stringify(i)),
                  encryptedId: s,
                  metadata: c.proposer.metadata,
                });
                0 === this.client.events.listenerCount("session_proposal") &&
                  (console.warn("No listener for session_proposal event"),
                  e?.setError(tE.proposal_listener_not_found)),
                  e?.addTrace(tI.emit_session_proposal),
                  this.client.events.emit("session_proposal", {
                    id: a,
                    params: c,
                    verifyContext: h,
                  });
              } catch (e) {
                await this.sendError({
                  id: a,
                  topic: t,
                  error: e,
                  rpcOpts: iS.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(e);
              }
            }),
            (this.onSessionProposeResponse = async (e, t, i) => {
              let { id: r } = t;
              if ((0, ea.isJsonRpcResult)(t)) {
                let { result: s } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: s,
                });
                let n = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: n,
                });
                let a = n.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: a,
                });
                let o = s.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                let c = await this.client.core.crypto.generateSharedKey(a, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: c,
                });
                let h = await this.client.core.relayer.subscribe(c, {
                  transportType: i,
                });
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: h,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if ((0, ea.isJsonRpcError)(t)) {
                await this.client.proposal.delete(
                  r,
                  (0, er.D6H)("USER_DISCONNECTED")
                );
                let e = (0, er.E0T)("session_connect");
                if (0 === this.events.listenerCount(e))
                  throw Error(`emitting ${e} without any listeners, 954`);
                this.events.emit((0, er.E0T)("session_connect"), {
                  error: t.error,
                });
              }
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              let { id: i, params: r } = t;
              try {
                this.isValidSessionSettleRequest(r);
                let {
                    relay: i,
                    controller: s,
                    expiry: n,
                    namespaces: a,
                    sessionProperties: o,
                    sessionConfig: c,
                  } = t.params,
                  h = iz(
                    i$(
                      i$(
                        {
                          topic: e,
                          relay: i,
                          expiry: n,
                          namespaces: a,
                          acknowledged: !0,
                          pairingTopic: "",
                          requiredNamespaces: {},
                          optionalNamespaces: {},
                          controller: s.publicKey,
                          self: {
                            publicKey: "",
                            metadata: this.client.metadata,
                          },
                          peer: {
                            publicKey: s.publicKey,
                            metadata: s.metadata,
                          },
                        },
                        o && { sessionProperties: o }
                      ),
                      c && { sessionConfig: c }
                    ),
                    { transportType: tu.relay }
                  ),
                  l = (0, er.E0T)("session_connect");
                if (0 === this.events.listenerCount(l))
                  throw Error(`emitting ${l} without any listeners 997`);
                this.events.emit((0, er.E0T)("session_connect"), {
                  session: h,
                }),
                  await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              let { id: i } = t;
              (0, ea.isJsonRpcResult)(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit((0, er.E0T)("session_approve", i), {}))
                : (0, ea.isJsonRpcError)(t) &&
                  (await this.client.session.delete(
                    e,
                    (0, er.D6H)("USER_DISCONNECTED")
                  ),
                  this.events.emit((0, er.E0T)("session_approve", i), {
                    error: t.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              let { params: i, id: r } = t;
              try {
                let t = `${e}_session_update`,
                  s = er.O6B.get(t);
                if (s && this.isRequestOutOfSync(s, r)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${r}`
                  ),
                    this.sendError({
                      id: r,
                      topic: e,
                      error: (0, er.D6H)("INVALID_UPDATE_REQUEST"),
                    });
                  return;
                }
                this.isValidUpdate(i$({ topic: e }, i));
                try {
                  er.O6B.set(t, r),
                    await this.client.session.update(e, {
                      namespaces: i.namespaces,
                    }),
                    await this.sendResult({
                      id: r,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (e) {
                  throw (er.O6B.delete(t), e);
                }
                this.client.events.emit("session_update", {
                  id: r,
                  topic: e,
                  params: i,
                });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            (this.isRequestOutOfSync = (e, t) =>
              parseInt(t.toString().slice(0, -3)) <=
              parseInt(e.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (e, t) => {
              let { id: i } = t,
                r = (0, er.E0T)("session_update", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, ea.isJsonRpcResult)(t)
                ? this.events.emit((0, er.E0T)("session_update", i), {})
                : (0, ea.isJsonRpcError)(t) &&
                  this.events.emit((0, er.E0T)("session_update", i), {
                    error: t.error,
                  });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, (0, er.gn4)(iP)),
                  await this.sendResult({
                    id: i,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_extend", {
                    id: i,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              let { id: i } = t,
                r = (0, er.E0T)("session_extend", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, ea.isJsonRpcResult)(t)
                ? this.events.emit((0, er.E0T)("session_extend", i), {})
                : (0, ea.isJsonRpcError)(t) &&
                  this.events.emit((0, er.E0T)("session_extend", i), {
                    error: t.error,
                  });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({
                    id: i,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_ping", { id: i, topic: e });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              let { id: i } = t,
                r = (0, er.E0T)("session_ping", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              setTimeout(() => {
                (0, ea.isJsonRpcResult)(t)
                  ? this.events.emit((0, er.E0T)("session_ping", i), {})
                  : (0, ea.isJsonRpcError)(t) &&
                    this.events.emit((0, er.E0T)("session_ping", i), {
                      error: t.error,
                    });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(tc.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: i }));
                      });
                    }),
                    this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: (0, er.D6H)("USER_DISCONNECTED"),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onSessionRequest = async (e) => {
              var t, i, r;
              let {
                  topic: s,
                  payload: n,
                  attestation: a,
                  encryptedId: o,
                  transportType: c,
                } = e,
                { id: h, params: l } = n;
              try {
                await this.isValidRequest(i$({ topic: s }, l));
                let e = this.client.session.get(s),
                  n = await this.getVerifyContext({
                    attestationId: a,
                    hash: (0, er.rjm)(
                      JSON.stringify(
                        (0, ea.formatJsonRpcRequest)("wc_sessionRequest", l, h)
                      )
                    ),
                    encryptedId: o,
                    metadata: e.peer.metadata,
                    transportType: c,
                  }),
                  u = { id: h, topic: s, params: l, verifyContext: n };
                await this.setPendingSessionRequest(u),
                  c === tu.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (i = e.peer.metadata.redirect)
                        ? void 0
                        : i.universal
                    ),
                  null != (r = this.client.signConfig) && r.disableRequestQueue
                    ? this.emitSessionRequest(u)
                    : (this.addSessionRequestToSessionRequestQueue(u),
                      this.processSessionRequestQueue());
              } catch (e) {
                await this.sendError({ id: h, topic: s, error: e }),
                  this.client.logger.error(e);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              let { id: i } = t,
                r = (0, er.E0T)("session_request", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, ea.isJsonRpcResult)(t)
                ? this.events.emit((0, er.E0T)("session_request", i), {
                    result: t.result,
                  })
                : (0, ea.isJsonRpcError)(t) &&
                  this.events.emit((0, er.E0T)("session_request", i), {
                    error: t.error,
                  });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              let { id: i, params: r } = t;
              try {
                let t = `${e}_session_event_${r.event.name}`,
                  s = er.O6B.get(t);
                if (s && this.isRequestOutOfSync(s, i)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${i}`
                  );
                  return;
                }
                this.isValidEmit(i$({ topic: e }, r)),
                  this.client.events.emit("session_event", {
                    id: i,
                    topic: e,
                    params: r,
                  }),
                  er.O6B.set(t, i);
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            (this.onSessionAuthenticateResponse = (e, t) => {
              let { id: i } = t;
              this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: e,
                payload: t,
              }),
                (0, ea.isJsonRpcResult)(t)
                  ? this.events.emit((0, er.E0T)("session_request", i), {
                      result: t.result,
                    })
                  : (0, ea.isJsonRpcError)(t) &&
                    this.events.emit((0, er.E0T)("session_request", i), {
                      error: t.error,
                    });
            }),
            (this.onSessionAuthenticateRequest = async (e) => {
              var t;
              let {
                topic: i,
                payload: r,
                attestation: s,
                encryptedId: n,
                transportType: a,
              } = e;
              try {
                let {
                    requester: e,
                    authPayload: o,
                    expiryTimestamp: c,
                  } = r.params,
                  h = await this.getVerifyContext({
                    attestationId: s,
                    hash: (0, er.rjm)(JSON.stringify(r)),
                    encryptedId: n,
                    metadata: e.metadata,
                    transportType: a,
                  }),
                  l = {
                    requester: e,
                    pairingTopic: i,
                    id: r.id,
                    authPayload: o,
                    verifyContext: h,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(r.id, {
                  request: l,
                  pairingTopic: i,
                  transportType: a,
                }),
                  a === tu.link_mode &&
                    null != (t = e.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      e.metadata.redirect.universal
                    ),
                  this.client.events.emit("session_authenticate", {
                    topic: i,
                    params: r.params,
                    id: r.id,
                    verifyContext: h,
                  });
              } catch (o) {
                this.client.logger.error(o);
                let e = r.params.requester.publicKey,
                  t = await this.client.core.crypto.generateKeyPair(),
                  s = this.getAppLinkIfEnabled(r.params.requester.metadata, a),
                  n = {
                    type: er.rVF,
                    receiverPublicKey: e,
                    senderPublicKey: t,
                  };
                await this.sendError({
                  id: r.id,
                  topic: i,
                  error: o,
                  encodeOpts: n,
                  rpcOpts: iS.wc_sessionAuthenticate.autoReject,
                  appLink: s,
                });
              }
            }),
            (this.addSessionRequestToSessionRequestQueue = (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            (this.cleanupAfterResponse = (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = iR.idle),
                    this.processSessionRequestQueue();
                }, (0, M.toMiliseconds)(this.requestQueueDelay));
            }),
            (this.cleanupPendingSentRequestsForTopic = ({
              topic: e,
              error: t,
            }) => {
              let i = this.client.core.history.pending;
              i.length > 0 &&
                i
                  .filter(
                    (t) =>
                      t.topic === e && "wc_sessionRequest" === t.request.method
                  )
                  .forEach((e) => {
                    let i = e.request.id,
                      r = (0, er.E0T)("session_request", i);
                    if (0 === this.events.listenerCount(r))
                      throw Error(`emitting ${r} without any listeners`);
                    this.events.emit(
                      (0, er.E0T)("session_request", e.request.id),
                      { error: t }
                    );
                  });
            }),
            (this.processSessionRequestQueue = () => {
              if (this.sessionRequestQueue.state === iR.active) {
                this.client.logger.info(
                  "session request queue is already active."
                );
                return;
              }
              let e = this.sessionRequestQueue.queue[0];
              if (!e) {
                this.client.logger.info("session request queue is empty.");
                return;
              }
              try {
                (this.sessionRequestQueue.state = iR.active),
                  this.emitSessionRequest(e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.emitSessionRequest = (e) => {
              this.client.events.emit("session_request", e);
            }),
            (this.onPairingCreated = (e) => {
              if (
                (e.methods &&
                  this.expectedPairingMethodMap.set(e.topic, e.methods),
                e.active)
              )
                return;
              let t = this.client.proposal
                .getAll()
                .find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: (0, ea.formatJsonRpcRequest)(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                    },
                    t.id
                  ),
                });
            }),
            (this.isValidConnect = async (e) => {
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: t,
                requiredNamespaces: i,
                optionalNamespaces: r,
                sessionProperties: s,
                relays: n,
              } = e;
              if (
                ((0, er.o8e)(t) || (await this.isValidPairingTopic(t)),
                !(0, er.PMr)(n, !0))
              ) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${n}`
                );
                throw Error(e);
              }
              (0, er.o8e)(i) ||
                0 === (0, er.L5o)(i) ||
                this.validateNamespaces(i, "requiredNamespaces"),
                (0, er.o8e)(r) ||
                  0 === (0, er.L5o)(r) ||
                  this.validateNamespaces(r, "optionalNamespaces"),
                (0, er.o8e)(s) ||
                  this.validateSessionProps(s, "sessionProperties");
            }),
            (this.validateNamespaces = (e, t) => {
              let i = (0, er.naP)(e, "connect()", t);
              if (i) throw Error(i.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!(0, er.EJd)(e))
                throw Error(
                  (0, er.kCb)("MISSING_OR_INVALID", `approve() params: ${e}`)
                    .message
                );
              let {
                id: t,
                namespaces: i,
                relayProtocol: r,
                sessionProperties: s,
              } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              let n = this.client.proposal.get(t),
                a = (0, er.ing)(i, "approve()");
              if (a) throw Error(a.message);
              let o = (0, er.rFo)(n.requiredNamespaces, i, "approve()");
              if (o) throw Error(o.message);
              if (!(0, er.M_r)(r, !0)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${r}`
                );
                throw Error(e);
              }
              (0, er.o8e)(s) ||
                this.validateSessionProps(s, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw Error(t);
              }
              let { id: t, reason: i } = e;
              if (
                (this.checkRecentlyDeleted(t),
                await this.isValidProposalId(t),
                !(0, er.H4H)(i))
              ) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: t, controller: i, namespaces: r, expiry: s } = e;
              if (!(0, er.Z26)(t)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw Error(e);
              }
              let n = (0, er.DdM)(i, "onSessionSettleRequest()");
              if (n) throw Error(n.message);
              let a = (0, er.ing)(r, "onSessionSettleRequest()");
              if (a) throw Error(a.message);
              if ((0, er.BwD)(s)) {
                let { message: e } = (0, er.kCb)(
                  "EXPIRED",
                  "onSessionSettleRequest()"
                );
                throw Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, namespaces: i } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let r = this.client.session.get(t),
                s = (0, er.ing)(i, "update()");
              if (s) throw Error(s.message);
              let n = (0, er.rFo)(r.requiredNamespaces, i, "update()");
              if (n) throw Error(n.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, request: i, chainId: r, expiry: s } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let { namespaces: n } = this.client.session.get(t);
              if (!(0, er.p8o)(n, r)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${r}`
                );
                throw Error(e);
              }
              if (!(0, er.hHR)(i)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
              if (!(0, er.alS)(n, r, i.method)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `request() method: ${i.method}`
                );
                throw Error(e);
              }
              if (s && !(0, er.ONw)(s, iC)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${s}. Expiry must be a number (in seconds) between ${iC.min} and ${iC.max}`
                );
                throw Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              var t;
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: i, response: r } = e;
              try {
                await this.isValidSessionTopic(i);
              } catch (i) {
                throw (
                  (null != (t = e?.response) &&
                    t.id &&
                    this.cleanupAfterResponse(e),
                  i)
                );
              }
              if (!(0, er.JTI)(r)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, event: i, chainId: r } = e;
              await this.isValidSessionTopic(t);
              let { namespaces: s } = this.client.session.get(t);
              if (!(0, er.p8o)(s, r)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${r}`
                );
                throw Error(e);
              }
              if (!(0, er.nfW)(i)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
              if (!(0, er.B95)(s, r, i.name)) {
                let { message: e } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!(0, er.EJd)(e)) {
                let { message: t } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidAuthenticate = (e) => {
              let { chains: t, uri: i, domain: r, nonce: s } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw Error("chains is required and must be a non-empty array");
              if (!(0, er.M_r)(i, !1)) throw Error("uri is required parameter");
              if (!(0, er.M_r)(r, !1))
                throw Error("domain is required parameter");
              if (!(0, er.M_r)(s, !1))
                throw Error("nonce is required parameter");
              if (
                [...new Set(t.map((e) => (0, er.DQe)(e).namespace))].length > 1
              )
                throw Error(
                  "Multi-namespace requests are not supported. Please request single namespace only."
                );
              let { namespace: n } = (0, er.DQe)(t[0]);
              if ("eip155" !== n)
                throw Error(
                  "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                );
            }),
            (this.getVerifyContext = async (e) => {
              let {
                  attestationId: t,
                  hash: i,
                  encryptedId: r,
                  metadata: s,
                  transportType: n,
                } = e,
                a = {
                  verified: {
                    verifyUrl: s.verifyUrl || tw,
                    validation: "UNKNOWN",
                    origin: s.url || "",
                  },
                };
              try {
                if (n === tu.link_mode) {
                  let e = this.getAppLinkIfEnabled(s, n);
                  return (
                    (a.verified.validation =
                      e && new URL(e).origin === new URL(s.url).origin
                        ? "VALID"
                        : "INVALID"),
                    a
                  );
                }
                let e = await this.client.core.verify.resolve({
                  attestationId: t,
                  hash: i,
                  encryptedId: r,
                  verifyUrl: s.verifyUrl,
                });
                e &&
                  ((a.verified.origin = e.origin),
                  (a.verified.isScam = e.isScam),
                  (a.verified.validation =
                    e.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.warn(e);
              }
              return (
                this.client.logger.debug(
                  `Verify context: ${JSON.stringify(a)}`
                ),
                a
              );
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!(0, er.M_r)(e, !1)) {
                  let { message: i } = (0, er.kCb)(
                    "MISSING_OR_INVALID",
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(
                      e
                    )}`
                  );
                  throw Error(i);
                }
              });
            }),
            (this.getPendingAuthRequest = (e) => {
              let t = this.client.auth.requests.get(e);
              return "object" == typeof t ? t : void 0;
            }),
            (this.addToRecentlyDeleted = (e, t) => {
              if (
                (this.recentlyDeletedMap.set(e, t),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0,
                  t = this.recentlyDeletedLimit / 2;
                for (let i of this.recentlyDeletedMap.keys()) {
                  if (e++ >= t) break;
                  this.recentlyDeletedMap.delete(i);
                }
              }
            }),
            (this.checkRecentlyDeleted = (e) => {
              let t = this.recentlyDeletedMap.get(e);
              if (t) {
                let { message: i } = (0, er.kCb)(
                  "MISSING_OR_INVALID",
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw Error(i);
              }
            }),
            (this.isLinkModeEnabled = (e, t) => {
              var r, s, n, a, o, c, h, l, u;
              return (
                !!e &&
                t === tu.link_mode &&
                (null ==
                (s = null == (r = this.client.metadata) ? void 0 : r.redirect)
                  ? void 0
                  : s.linkMode) === !0 &&
                (null ==
                (a = null == (n = this.client.metadata) ? void 0 : n.redirect)
                  ? void 0
                  : a.universal) !== void 0 &&
                (null ==
                (c = null == (o = this.client.metadata) ? void 0 : o.redirect)
                  ? void 0
                  : c.universal) !== "" &&
                (null == (h = e?.redirect) ? void 0 : h.universal) !== void 0 &&
                (null == (l = e?.redirect) ? void 0 : l.universal) !== "" &&
                (null == (u = e?.redirect) ? void 0 : u.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(
                  e.redirect.universal
                ) &&
                "u" > typeof (null == i.g ? void 0 : i.g.Linking)
              );
            }),
            (this.getAppLinkIfEnabled = (e, t) => {
              var i;
              return this.isLinkModeEnabled(e, t)
                ? null == (i = e?.redirect)
                  ? void 0
                  : i.universal
                : void 0;
            }),
            (this.handleLinkModeMessage = ({ url: e }) => {
              if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
              let t = (0, er.waw)(e, "topic") || "",
                i = decodeURIComponent((0, er.waw)(e, "wc_ev") || ""),
                r = this.client.session.keys.includes(t);
              r &&
                this.client.session.update(t, { transportType: tu.link_mode }),
                this.client.core.dispatchEnvelope({
                  topic: t,
                  message: i,
                  sessionExists: r,
                });
            }),
            (this.registerLinkModeListeners = async () => {
              var e;
              if (
                ("u" > typeof iv && iv.env.IS_VITEST) ||
                ((0, er.b$m)() &&
                  null != (e = this.client.metadata.redirect) &&
                  e.linkMode)
              ) {
                let e = null == i.g ? void 0 : i.g.Linking;
                if ("u" > typeof e) {
                  e.addEventListener(
                    "url",
                    this.handleLinkModeMessage,
                    this.client.name
                  );
                  let t = await e.getInitialURL();
                  t &&
                    setTimeout(() => {
                      this.handleLinkModeMessage({ url: t });
                    }, 50);
                }
              }
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, er.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(tc.message, (e) => {
            !this.initialized || this.relayMessageCache.length > 0
              ? this.relayMessageCache.push(e)
              : this.onRelayMessage(e);
          });
        }
        async onRelayMessage(e) {
          let { topic: t, message: i, attestation: r, transportType: s } = e,
            { publicKey: n } = this.client.auth.authKeys.keys.includes(iT)
              ? this.client.auth.authKeys.get(iT)
              : { responseTopic: void 0, publicKey: void 0 },
            a = await this.client.core.crypto.decode(t, i, {
              receiverPublicKey: n,
              encoding: s === tu.link_mode ? er.zl_ : er.$dT,
            });
          try {
            (0, ea.isJsonRpcRequest)(a)
              ? (this.client.core.history.set(t, a),
                this.onRelayEventRequest({
                  topic: t,
                  payload: a,
                  attestation: r,
                  transportType: s,
                  encryptedId: (0, er.rjm)(i),
                }))
              : (0, ea.isJsonRpcResponse)(a)
              ? (await this.client.core.history.resolve(a),
                await this.onRelayEventResponse({
                  topic: t,
                  payload: a,
                  transportType: s,
                }),
                this.client.core.history.delete(t, a.id))
              : this.onRelayEventUnknownPayload({
                  topic: t,
                  payload: a,
                  transportType: s,
                });
          } catch (e) {
            this.client.logger.error(e);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(tv.expired, async (e) => {
            let { topic: t, id: i } = (0, er.iPz)(e.target);
            return i && this.client.pendingRequest.keys.includes(i)
              ? await this.deletePendingSessionRequest(
                  i,
                  (0, er.kCb)("EXPIRED"),
                  !0
                )
              : i && this.client.auth.requests.keys.includes(i)
              ? await this.deletePendingAuthRequest(
                  i,
                  (0, er.kCb)("EXPIRED"),
                  !0
                )
              : void (t
                  ? this.client.session.keys.includes(t) &&
                    (await this.deleteSession({
                      topic: t,
                      expirerHasDeleted: !0,
                    }),
                    this.client.events.emit("session_expire", { topic: t }))
                  : i &&
                    (await this.deleteProposal(i, !0),
                    this.client.events.emit("proposal_expire", { id: i })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(ty.create, (e) =>
            this.onPairingCreated(e)
          ),
            this.client.core.pairing.events.on(ty.delete, (e) => {
              this.addToRecentlyDeleted(e.topic, "pairing");
            });
        }
        isValidPairingTopic(e) {
          if (!(0, er.M_r)(e, !1)) {
            let { message: t } = (0, er.kCb)(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = (0, er.kCb)(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if ((0, er.BwD)(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = (0, er.kCb)("EXPIRED", `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!(0, er.M_r)(e, !1)) {
            let { message: t } = (0, er.kCb)(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (
            (this.checkRecentlyDeleted(e),
            !this.client.session.keys.includes(e))
          ) {
            let { message: t } = (0, er.kCb)(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if ((0, er.BwD)(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = (0, er.kCb)("EXPIRED", `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = (0, er.kCb)(
              "MISSING_OR_INVALID",
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (
            (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
          )
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
          else if ((0, er.M_r)(e, !1)) {
            let { message: t } = (0, er.kCb)(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = (0, er.kCb)(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if (!(0, er.Q01)(e)) {
            let { message: t } = (0, er.kCb)(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = (0, er.kCb)(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if ((0, er.BwD)(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = (0, er.kCb)("EXPIRED", `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class iU extends t2 {
        constructor(e, t) {
          super(e, t, "proposal", i_), (this.core = e), (this.logger = t);
        }
      }
      class iK extends t2 {
        constructor(e, t) {
          super(e, t, "session", i_), (this.core = e), (this.logger = t);
        }
      }
      class iV extends t2 {
        constructor(e, t) {
          super(e, t, "request", i_, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class iH extends t2 {
        constructor(e, t) {
          super(e, t, "authKeys", ix, () => iT),
            (this.core = e),
            (this.logger = t);
        }
      }
      class iF extends t2 {
        constructor(e, t) {
          super(e, t, "pairingTopics", ix), (this.core = e), (this.logger = t);
        }
      }
      class iW extends t2 {
        constructor(e, t) {
          super(e, t, "requests", ix, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class iB {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.authKeys = new iH(this.core, this.logger)),
            (this.pairingTopics = new iF(this.core, this.logger)),
            (this.requests = new iW(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(),
            await this.pairingTopics.init(),
            await this.requests.init();
        }
      }
      class iJ extends ee {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = ib.name),
            (this.events = new s.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.authenticate = async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.formatAuthMessage = (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approveSessionAuthenticate = async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.rejectSessionAuthenticate = async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || ib.name),
            (this.metadata = e?.metadata || (0, er.DaH)()),
            (this.signConfig = e?.signConfig);
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : (0, K.gw)((0, K.jI)({ level: e?.logger || ib.logger }));
          (this.core = e?.core || new im(e)),
            (this.logger = (0, K.Ep)(t, this.name)),
            (this.session = new iK(this.core, this.logger)),
            (this.proposal = new iU(this.core, this.logger)),
            (this.pendingRequest = new iV(this.core, this.logger)),
            (this.engine = new iL(this)),
            (this.auth = new iB(this.core, this.logger));
        }
        static async init(e) {
          let t = new iJ(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, K.Fd)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.auth.init(),
              await this.engine.init(),
              this.logger.info("SignClient Initialization Success"),
              this.engine.processRelayMessageCache();
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var iG = i(5071);
      let iY = "error",
        iQ = "wc@2:universal_provider:",
        iZ = "generic",
        iX = "default_chain_changed";
      var i0 =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof i.g
            ? i.g
            : "u" > typeof self
            ? self
            : {},
        i1 = { exports: {} };
      !(function (e, t) {
        (function () {
          var i,
            r = "Expected a function",
            s = "__lodash_hash_undefined__",
            n = "__lodash_placeholder__",
            a = 1 / 0,
            o = 0 / 0,
            c = [
              ["ary", 128],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", 32],
              ["partialRight", 64],
              ["rearg", 256],
            ],
            h = "[object Arguments]",
            l = "[object Array]",
            u = "[object Boolean]",
            p = "[object Date]",
            d = "[object Error]",
            g = "[object Function]",
            f = "[object GeneratorFunction]",
            y = "[object Map]",
            m = "[object Number]",
            v = "[object Object]",
            w = "[object Promise]",
            _ = "[object RegExp]",
            b = "[object Set]",
            I = "[object String]",
            E = "[object Symbol]",
            P = "[object WeakMap]",
            S = "[object ArrayBuffer]",
            C = "[object DataView]",
            R = "[object Float32Array]",
            O = "[object Float64Array]",
            x = "[object Int8Array]",
            T = "[object Int16Array]",
            q = "[object Int32Array]",
            k = "[object Uint8Array]",
            A = "[object Uint8ClampedArray]",
            N = "[object Uint16Array]",
            D = "[object Uint32Array]",
            M = /\b__p \+= '';/g,
            j = /\b(__p \+=) '' \+/g,
            $ = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            z = /&(?:amp|lt|gt|quot|#39);/g,
            L = /[&<>"']/g,
            U = RegExp(z.source),
            K = RegExp(L.source),
            V = /<%-([\s\S]+?)%>/g,
            H = /<%([\s\S]+?)%>/g,
            F = /<%=([\s\S]+?)%>/g,
            W = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            B = /^\w*$/,
            J =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            G = /[\\^$.*+?()[\]{}|]/g,
            Y = RegExp(G.source),
            Q = /^\s+/,
            Z = /\s/,
            X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
            et = /,? & /,
            ei = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            er = /[()=,{}\[\]\/\s]/,
            es = /\\(\\)?/g,
            en = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            ea = /\w*$/,
            eo = /^[-+]0x[0-9a-f]+$/i,
            ec = /^0b[01]+$/i,
            eh = /^\[object .+?Constructor\]$/,
            el = /^0o[0-7]+$/i,
            eu = /^(?:0|[1-9]\d*)$/,
            ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            ed = /($^)/,
            eg = /['\n\r\u2028\u2029\\]/g,
            ef = "\ud800-\udfff",
            ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            em = "\\u2700-\\u27bf",
            ev = "a-z\\xdf-\\xf6\\xf8-\\xff",
            ew = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            e_ = "\\ufe0e\\ufe0f",
            eb =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            eI = "['’]",
            eE = "[" + eb + "]",
            eP = "[" + ey + "]",
            eS = "[" + ev + "]",
            eC = "[^" + ef + eb + "\\d+" + em + ev + ew + "]",
            eR = "\ud83c[\udffb-\udfff]",
            eO = "[^" + ef + "]",
            ex = "(?:\ud83c[\udde6-\uddff]){2}",
            eT = "[\ud800-\udbff][\udc00-\udfff]",
            eq = "[" + ew + "]",
            ek = "\\u200d",
            eA = "(?:" + eS + "|" + eC + ")",
            eN = "(?:" + eI + "(?:d|ll|m|re|s|t|ve))?",
            eD = "(?:" + eI + "(?:D|LL|M|RE|S|T|VE))?",
            eM = "(?:" + eP + "|" + eR + ")?",
            ej = "[" + e_ + "]?",
            e$ =
              "(?:" +
              ek +
              "(?:" +
              [eO, ex, eT].join("|") +
              ")" +
              ej +
              eM +
              ")*",
            ez = ej + eM + e$,
            eL = "(?:" + ["[" + em + "]", ex, eT].join("|") + ")" + ez,
            eU =
              "(?:" +
              [eO + eP + "?", eP, ex, eT, "[" + ef + "]"].join("|") +
              ")",
            eK = RegExp(eI, "g"),
            eV = RegExp(eP, "g"),
            eH = RegExp(eR + "(?=" + eR + ")|" + eU + ez, "g"),
            eF = RegExp(
              [
                eq +
                  "?" +
                  eS +
                  "+" +
                  eN +
                  "(?=" +
                  [eE, eq, "$"].join("|") +
                  ")",
                "(?:" +
                  eq +
                  "|" +
                  eC +
                  ")+" +
                  eD +
                  "(?=" +
                  [eE, eq + eA, "$"].join("|") +
                  ")",
                eq + "?" + eA + "+" + eN,
                eq + "+" + eD,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                "\\d+",
                eL,
              ].join("|"),
              "g"
            ),
            eW = RegExp("[" + ek + ef + ey + e_ + "]"),
            eB =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            eJ = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            eG = -1,
            eY = {};
          (eY[R] =
            eY[O] =
            eY[x] =
            eY[T] =
            eY[q] =
            eY[k] =
            eY[A] =
            eY[N] =
            eY[D] =
              !0),
            (eY[h] =
              eY[l] =
              eY[S] =
              eY[u] =
              eY[C] =
              eY[p] =
              eY[d] =
              eY[g] =
              eY[y] =
              eY[m] =
              eY[v] =
              eY[_] =
              eY[b] =
              eY[I] =
              eY[P] =
                !1);
          var eQ = {};
          (eQ[h] =
            eQ[l] =
            eQ[S] =
            eQ[C] =
            eQ[u] =
            eQ[p] =
            eQ[R] =
            eQ[O] =
            eQ[x] =
            eQ[T] =
            eQ[q] =
            eQ[y] =
            eQ[m] =
            eQ[v] =
            eQ[_] =
            eQ[b] =
            eQ[I] =
            eQ[E] =
            eQ[k] =
            eQ[A] =
            eQ[N] =
            eQ[D] =
              !0),
            (eQ[d] = eQ[g] = eQ[P] = !1);
          var eZ = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            eX = parseFloat,
            e0 = parseInt,
            e1 = "object" == typeof i0 && i0 && i0.Object === Object && i0,
            e2 =
              "object" == typeof self && self && self.Object === Object && self,
            e9 = e1 || e2 || Function("return this")(),
            e5 = t && !t.nodeType && t,
            e3 = e5 && e && !e.nodeType && e,
            e6 = e3 && e3.exports === e5,
            e4 = e6 && e1.process,
            e8 = (function () {
              try {
                return (
                  (e3 && e3.require && e3.require("util").types) ||
                  (e4 && e4.binding && e4.binding("util"))
                );
              } catch {}
            })(),
            e7 = e8 && e8.isArrayBuffer,
            te = e8 && e8.isDate,
            tt = e8 && e8.isMap,
            ti = e8 && e8.isRegExp,
            tr = e8 && e8.isSet,
            ts = e8 && e8.isTypedArray;
          function tn(e, t, i) {
            switch (i.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, i[0]);
              case 2:
                return e.call(t, i[0], i[1]);
              case 3:
                return e.call(t, i[0], i[1], i[2]);
            }
            return e.apply(t, i);
          }
          function ta(e, t, i, r) {
            for (var s = -1, n = null == e ? 0 : e.length; ++s < n; ) {
              var a = e[s];
              t(r, a, i(a), e);
            }
            return r;
          }
          function to(e, t) {
            for (
              var i = -1, r = null == e ? 0 : e.length;
              ++i < r && !1 !== t(e[i], i, e);

            );
            return e;
          }
          function tc(e, t) {
            for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
              if (!t(e[i], i, e)) return !1;
            return !0;
          }
          function th(e, t) {
            for (
              var i = -1, r = null == e ? 0 : e.length, s = 0, n = [];
              ++i < r;

            ) {
              var a = e[i];
              t(a, i, e) && (n[s++] = a);
            }
            return n;
          }
          function tl(e, t) {
            return !!(null == e ? 0 : e.length) && t_(e, t, 0) > -1;
          }
          function tu(e, t, i) {
            for (var r = -1, s = null == e ? 0 : e.length; ++r < s; )
              if (i(t, e[r])) return !0;
            return !1;
          }
          function tp(e, t) {
            for (
              var i = -1, r = null == e ? 0 : e.length, s = Array(r);
              ++i < r;

            )
              s[i] = t(e[i], i, e);
            return s;
          }
          function td(e, t) {
            for (var i = -1, r = t.length, s = e.length; ++i < r; )
              e[s + i] = t[i];
            return e;
          }
          function tg(e, t, i, r) {
            var s = -1,
              n = null == e ? 0 : e.length;
            for (r && n && (i = e[++s]); ++s < n; ) i = t(i, e[s], s, e);
            return i;
          }
          function tf(e, t, i, r) {
            var s = null == e ? 0 : e.length;
            for (r && s && (i = e[--s]); s--; ) i = t(i, e[s], s, e);
            return i;
          }
          function ty(e, t) {
            for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
              if (t(e[i], i, e)) return !0;
            return !1;
          }
          var tm = tP("length");
          function tv(e, t, i) {
            var r;
            return (
              i(e, function (e, i, s) {
                if (t(e, i, s)) return (r = i), !1;
              }),
              r
            );
          }
          function tw(e, t, i, r) {
            for (var s = e.length, n = i + (r ? 1 : -1); r ? n-- : ++n < s; )
              if (t(e[n], n, e)) return n;
            return -1;
          }
          function t_(e, t, i) {
            return t == t
              ? (function (e, t, i) {
                  for (var r = i - 1, s = e.length; ++r < s; )
                    if (e[r] === t) return r;
                  return -1;
                })(e, t, i)
              : tw(e, tI, i);
          }
          function tb(e, t, i, r) {
            for (var s = i - 1, n = e.length; ++s < n; )
              if (r(e[s], t)) return s;
            return -1;
          }
          function tI(e) {
            return e != e;
          }
          function tE(e, t) {
            var i = null == e ? 0 : e.length;
            return i ? tR(e, t) / i : o;
          }
          function tP(e) {
            return function (t) {
              return null == t ? i : t[e];
            };
          }
          function tS(e) {
            return function (t) {
              return null == e ? i : e[t];
            };
          }
          function tC(e, t, i, r, s) {
            return (
              s(e, function (e, s, n) {
                i = r ? ((r = !1), e) : t(i, e, s, n);
              }),
              i
            );
          }
          function tR(e, t) {
            for (var r, s = -1, n = e.length; ++s < n; ) {
              var a = t(e[s]);
              a !== i && (r = r === i ? a : r + a);
            }
            return r;
          }
          function tO(e, t) {
            for (var i = -1, r = Array(e); ++i < e; ) r[i] = t(i);
            return r;
          }
          function tx(e) {
            return e && e.slice(0, tF(e) + 1).replace(Q, "");
          }
          function tT(e) {
            return function (t) {
              return e(t);
            };
          }
          function tq(e, t) {
            return tp(t, function (t) {
              return e[t];
            });
          }
          function tk(e, t) {
            return e.has(t);
          }
          function tA(e, t) {
            for (var i = -1, r = e.length; ++i < r && t_(t, e[i], 0) > -1; );
            return i;
          }
          function tN(e, t) {
            for (var i = e.length; i-- && t_(t, e[i], 0) > -1; );
            return i;
          }
          var tD = tS({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            }),
            tM = tS({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function tj(e) {
            return "\\" + eZ[e];
          }
          function t$(e) {
            return eW.test(e);
          }
          function tz(e) {
            var t = -1,
              i = Array(e.size);
            return (
              e.forEach(function (e, r) {
                i[++t] = [r, e];
              }),
              i
            );
          }
          function tL(e, t) {
            return function (i) {
              return e(t(i));
            };
          }
          function tU(e, t) {
            for (var i = -1, r = e.length, s = 0, a = []; ++i < r; ) {
              var o = e[i];
              (o === t || o === n) && ((e[i] = n), (a[s++] = i));
            }
            return a;
          }
          function tK(e) {
            var t = -1,
              i = Array(e.size);
            return (
              e.forEach(function (e) {
                i[++t] = e;
              }),
              i
            );
          }
          function tV(e) {
            return t$(e)
              ? (function (e) {
                  for (var t = (eH.lastIndex = 0); eH.test(e); ) ++t;
                  return t;
                })(e)
              : tm(e);
          }
          function tH(e) {
            return t$(e) ? e.match(eH) || [] : e.split("");
          }
          function tF(e) {
            for (var t = e.length; t-- && Z.test(e.charAt(t)); );
            return t;
          }
          var tW = tS({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            }),
            tB = (function e(t) {
              var Z,
                ef,
                ey,
                em,
                ev = (t =
                  null == t ? e9 : tB.defaults(e9.Object(), t, tB.pick(e9, eJ)))
                  .Array,
                ew = t.Date,
                e_ = t.Error,
                eb = t.Function,
                eI = t.Math,
                eE = t.Object,
                eP = t.RegExp,
                eS = t.String,
                eC = t.TypeError,
                eR = ev.prototype,
                eO = eb.prototype,
                ex = eE.prototype,
                eT = t["__core-js_shared__"],
                eq = eO.toString,
                ek = ex.hasOwnProperty,
                eA = 0,
                eN = (Z = /[^.]+$/.exec(
                  (eT && eT.keys && eT.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + Z
                  : "",
                eD = ex.toString,
                eM = eq.call(eE),
                ej = e9._,
                e$ = eP(
                  "^" +
                    eq
                      .call(ek)
                      .replace(G, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                ez = e6 ? t.Buffer : i,
                eL = t.Symbol,
                eU = t.Uint8Array,
                eH = ez ? ez.allocUnsafe : i,
                eW = tL(eE.getPrototypeOf, eE),
                eZ = eE.create,
                e1 = ex.propertyIsEnumerable,
                e2 = eR.splice,
                e5 = eL ? eL.isConcatSpreadable : i,
                e3 = eL ? eL.iterator : i,
                e4 = eL ? eL.toStringTag : i,
                e8 = (function () {
                  try {
                    var e = sg(eE, "defineProperty");
                    return e({}, "", {}), e;
                  } catch {}
                })(),
                tm = t.clearTimeout !== e9.clearTimeout && t.clearTimeout,
                tS = ew && ew.now !== e9.Date.now && ew.now,
                tJ = t.setTimeout !== e9.setTimeout && t.setTimeout,
                tG = eI.ceil,
                tY = eI.floor,
                tQ = eE.getOwnPropertySymbols,
                tZ = ez ? ez.isBuffer : i,
                tX = t.isFinite,
                t0 = eR.join,
                t1 = tL(eE.keys, eE),
                t2 = eI.max,
                t9 = eI.min,
                t5 = ew.now,
                t3 = t.parseInt,
                t6 = eI.random,
                t4 = eR.reverse,
                t8 = sg(t, "DataView"),
                t7 = sg(t, "Map"),
                ie = sg(t, "Promise"),
                it = sg(t, "Set"),
                ii = sg(t, "WeakMap"),
                ir = sg(eE, "create"),
                is = ii && new ii(),
                ia = {},
                io = sz(t8),
                ic = sz(t7),
                ih = sz(ie),
                il = sz(it),
                iu = sz(ii),
                ip = eL ? eL.prototype : i,
                id = ip ? ip.valueOf : i,
                ig = ip ? ip.toString : i;
              function iy(e) {
                if (nW(e) && !nD(e) && !(e instanceof i_)) {
                  if (e instanceof iw) return e;
                  if (ek.call(e, "__wrapped__")) return sL(e);
                }
                return new iw(e);
              }
              var im = (function () {
                function e() {}
                return function (t) {
                  if (!nF(t)) return {};
                  if (eZ) return eZ(t);
                  e.prototype = t;
                  var r = new e();
                  return (e.prototype = i), r;
                };
              })();
              function iv() {}
              function iw(e, t) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = i);
              }
              function i_(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = 4294967295),
                  (this.__views__ = []);
              }
              function ib(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function iI(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function iE(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function iP(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.__data__ = new iE(); ++t < i; ) this.add(e[t]);
              }
              function iS(e) {
                var t = (this.__data__ = new iI(e));
                this.size = t.size;
              }
              function iC(e, t) {
                var i = nD(e),
                  r = !i && nN(e),
                  s = !i && !r && nz(e),
                  n = !i && !r && !s && n0(e),
                  a = i || r || s || n,
                  o = a ? tO(e.length, eS) : [],
                  c = o.length;
                for (var h in e)
                  (t || ek.call(e, h)) &&
                    !(
                      a &&
                      ("length" == h ||
                        (s && ("offset" == h || "parent" == h)) ||
                        (n &&
                          ("buffer" == h ||
                            "byteLength" == h ||
                            "byteOffset" == h)) ||
                        sb(h, c))
                    ) &&
                    o.push(h);
                return o;
              }
              function iR(e) {
                var t = e.length;
                return t ? e[ru(0, t - 1)] : i;
              }
              function iO(e, t, r) {
                ((r === i || nq(e[t], r)) && (r !== i || t in e)) ||
                  iA(e, t, r);
              }
              function ix(e, t, r) {
                var s = e[t];
                (ek.call(e, t) && nq(s, r) && (r !== i || t in e)) ||
                  iA(e, t, r);
              }
              function iT(e, t) {
                for (var i = e.length; i--; ) if (nq(e[i][0], t)) return i;
                return -1;
              }
              function iq(e, t, i, r) {
                return (
                  iL(e, function (e, s, n) {
                    t(r, e, i(e), n);
                  }),
                  r
                );
              }
              function ik(e, t) {
                return e && rV(t, ap(t), e);
              }
              function iA(e, t, i) {
                "__proto__" == t && e8
                  ? e8(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: i,
                      writable: !0,
                    })
                  : (e[t] = i);
              }
              function iN(e, t) {
                for (
                  var r = -1, s = t.length, n = ev(s), a = null == e;
                  ++r < s;

                )
                  n[r] = a ? i : ao(e, t[r]);
                return n;
              }
              function iD(e, t, r) {
                return (
                  e == e &&
                    (r !== i && (e = e <= r ? e : r),
                    t !== i && (e = e >= t ? e : t)),
                  e
                );
              }
              function iM(e, t, r, s, n, a) {
                var o,
                  c = 1 & t,
                  l = 2 & t,
                  d = 4 & t;
                if ((r && (o = n ? r(e, s, n, a) : r(e)), o !== i)) return o;
                if (!nF(e)) return e;
                var w = nD(e);
                if (w) {
                  if (
                    ((P = e.length),
                    (M = new e.constructor(P)),
                    P &&
                      "string" == typeof e[0] &&
                      ek.call(e, "index") &&
                      ((M.index = e.index), (M.input = e.input)),
                    (o = M),
                    !c)
                  )
                    return rK(e, o);
                } else {
                  var P,
                    M,
                    j,
                    $,
                    z,
                    L = sm(e),
                    U = L == g || L == f;
                  if (nz(e)) return rM(e, c);
                  if (L == v || L == h || (U && !n)) {
                    if (((o = l || U ? {} : sw(e)), !c))
                      return l
                        ? ((j = (z = o) && rV(e, ad(e), z)), rV(e, sy(e), j))
                        : (($ = ik(o, e)), rV(e, sf(e), $));
                  } else {
                    if (!eQ[L]) return n ? e : {};
                    o = (function (e, t, i) {
                      var r,
                        s,
                        n = e.constructor;
                      switch (t) {
                        case S:
                          return rj(e);
                        case u:
                        case p:
                          return new n(+e);
                        case C:
                          return (
                            (r = i ? rj(e.buffer) : e.buffer),
                            new e.constructor(r, e.byteOffset, e.byteLength)
                          );
                        case R:
                        case O:
                        case x:
                        case T:
                        case q:
                        case k:
                        case A:
                        case N:
                        case D:
                          return r$(e, i);
                        case y:
                          return new n();
                        case m:
                        case I:
                          return new n(e);
                        case _:
                          return (
                            ((s = new e.constructor(
                              e.source,
                              ea.exec(e)
                            )).lastIndex = e.lastIndex),
                            s
                          );
                        case b:
                          return new n();
                        case E:
                          return id ? eE(id.call(e)) : {};
                      }
                    })(e, L, c);
                  }
                }
                a || (a = new iS());
                var K = a.get(e);
                if (K) return K;
                a.set(e, o),
                  nQ(e)
                    ? e.forEach(function (i) {
                        o.add(iM(i, t, r, i, e, a));
                      })
                    : nB(e) &&
                      e.forEach(function (i, s) {
                        o.set(s, iM(i, t, r, s, e, a));
                      });
                var V = d ? (l ? so : sa) : l ? ad : ap,
                  H = w ? i : V(e);
                return (
                  to(H || e, function (i, s) {
                    H && (i = e[(s = i)]), ix(o, s, iM(i, t, r, s, e, a));
                  }),
                  o
                );
              }
              function ij(e, t, r) {
                var s = r.length;
                if (null == e) return !s;
                for (e = eE(e); s--; ) {
                  var n = r[s],
                    a = t[n],
                    o = e[n];
                  if ((o === i && !(n in e)) || !a(o)) return !1;
                }
                return !0;
              }
              function i$(e, t, s) {
                if ("function" != typeof e) throw new eC(r);
                return sk(function () {
                  e.apply(i, s);
                }, t);
              }
              function iz(e, t, i, r) {
                var s = -1,
                  n = tl,
                  a = !0,
                  o = e.length,
                  c = [],
                  h = t.length;
                if (!o) return c;
                i && (t = tp(t, tT(i))),
                  r
                    ? ((n = tu), (a = !1))
                    : t.length >= 200 && ((n = tk), (a = !1), (t = new iP(t)));
                e: for (; ++s < o; ) {
                  var l = e[s],
                    u = null == i ? l : i(l);
                  if (((l = r || 0 !== l ? l : 0), a && u == u)) {
                    for (var p = h; p--; ) if (t[p] === u) continue e;
                    c.push(l);
                  } else n(t, u, r) || c.push(l);
                }
                return c;
              }
              (iy.templateSettings = {
                escape: V,
                evaluate: H,
                interpolate: F,
                variable: "",
                imports: { _: iy },
              }),
                (iy.prototype = iv.prototype),
                (iy.prototype.constructor = iy),
                (iw.prototype = im(iv.prototype)),
                (iw.prototype.constructor = iw),
                (i_.prototype = im(iv.prototype)),
                (i_.prototype.constructor = i_),
                (ib.prototype.clear = function () {
                  (this.__data__ = ir ? ir(null) : {}), (this.size = 0);
                }),
                (ib.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                }),
                (ib.prototype.get = function (e) {
                  var t = this.__data__;
                  if (ir) {
                    var r = t[e];
                    return r === s ? i : r;
                  }
                  return ek.call(t, e) ? t[e] : i;
                }),
                (ib.prototype.has = function (e) {
                  var t = this.__data__;
                  return ir ? t[e] !== i : ek.call(t, e);
                }),
                (ib.prototype.set = function (e, t) {
                  var r = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (r[e] = ir && t === i ? s : t),
                    this
                  );
                }),
                (iI.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (iI.prototype.delete = function (e) {
                  var t = this.__data__,
                    i = iT(t, e);
                  return (
                    !(i < 0) &&
                    (i == t.length - 1 ? t.pop() : e2.call(t, i, 1),
                    --this.size,
                    !0)
                  );
                }),
                (iI.prototype.get = function (e) {
                  var t = this.__data__,
                    r = iT(t, e);
                  return r < 0 ? i : t[r][1];
                }),
                (iI.prototype.has = function (e) {
                  return iT(this.__data__, e) > -1;
                }),
                (iI.prototype.set = function (e, t) {
                  var i = this.__data__,
                    r = iT(i, e);
                  return (
                    r < 0 ? (++this.size, i.push([e, t])) : (i[r][1] = t), this
                  );
                }),
                (iE.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new ib(),
                      map: new (t7 || iI)(),
                      string: new ib(),
                    });
                }),
                (iE.prototype.delete = function (e) {
                  var t = sp(this, e).delete(e);
                  return (this.size -= t ? 1 : 0), t;
                }),
                (iE.prototype.get = function (e) {
                  return sp(this, e).get(e);
                }),
                (iE.prototype.has = function (e) {
                  return sp(this, e).has(e);
                }),
                (iE.prototype.set = function (e, t) {
                  var i = sp(this, e),
                    r = i.size;
                  return i.set(e, t), (this.size += i.size == r ? 0 : 1), this;
                }),
                (iP.prototype.add = iP.prototype.push =
                  function (e) {
                    return this.__data__.set(e, s), this;
                  }),
                (iP.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (iS.prototype.clear = function () {
                  (this.__data__ = new iI()), (this.size = 0);
                }),
                (iS.prototype.delete = function (e) {
                  var t = this.__data__,
                    i = t.delete(e);
                  return (this.size = t.size), i;
                }),
                (iS.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (iS.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (iS.prototype.set = function (e, t) {
                  var i = this.__data__;
                  if (i instanceof iI) {
                    var r = i.__data__;
                    if (!t7 || r.length < 199)
                      return r.push([e, t]), (this.size = ++i.size), this;
                    i = this.__data__ = new iE(r);
                  }
                  return i.set(e, t), (this.size = i.size), this;
                });
              var iL = rW(iJ),
                iU = rW(iG, !0);
              function iK(e, t) {
                var i = !0;
                return (
                  iL(e, function (e, r, s) {
                    return (i = !!t(e, r, s));
                  }),
                  i
                );
              }
              function iV(e, t, r) {
                for (var s = -1, n = e.length; ++s < n; ) {
                  var a = e[s],
                    o = t(a);
                  if (null != o && (c === i ? o == o && !nX(o) : r(o, c)))
                    var c = o,
                      h = a;
                }
                return h;
              }
              function iH(e, t) {
                var i = [];
                return (
                  iL(e, function (e, r, s) {
                    t(e, r, s) && i.push(e);
                  }),
                  i
                );
              }
              function iF(e, t, i, r, s) {
                var n = -1,
                  a = e.length;
                for (i || (i = s_), s || (s = []); ++n < a; ) {
                  var o = e[n];
                  t > 0 && i(o)
                    ? t > 1
                      ? iF(o, t - 1, i, r, s)
                      : td(s, o)
                    : r || (s[s.length] = o);
                }
                return s;
              }
              var iW = rB(),
                iB = rB(!0);
              function iJ(e, t) {
                return e && iW(e, t, ap);
              }
              function iG(e, t) {
                return e && iB(e, t, ap);
              }
              function iY(e, t) {
                return th(t, function (t) {
                  return nK(e[t]);
                });
              }
              function iQ(e, t) {
                t = rA(t, e);
                for (var r = 0, s = t.length; null != e && r < s; )
                  e = e[s$(t[r++])];
                return r && r == s ? e : i;
              }
              function iZ(e, t, i) {
                var r = t(e);
                return nD(e) ? r : td(r, i(e));
              }
              function iX(e) {
                return null == e
                  ? e === i
                    ? "[object Undefined]"
                    : "[object Null]"
                  : e4 && e4 in eE(e)
                  ? (function (e) {
                      var t = ek.call(e, e4),
                        r = e[e4];
                      try {
                        e[e4] = i;
                        var s = !0;
                      } catch {}
                      var n = eD.call(e);
                      return s && (t ? (e[e4] = r) : delete e[e4]), n;
                    })(e)
                  : eD.call(e);
              }
              function i0(e, t) {
                return e > t;
              }
              function i1(e, t) {
                return null != e && ek.call(e, t);
              }
              function i2(e, t) {
                return null != e && t in eE(e);
              }
              function i9(e, t, r) {
                for (
                  var s = r ? tu : tl,
                    n = e[0].length,
                    a = e.length,
                    o = a,
                    c = ev(a),
                    h = 1 / 0,
                    l = [];
                  o--;

                ) {
                  var u = e[o];
                  o && t && (u = tp(u, tT(t))),
                    (h = t9(u.length, h)),
                    (c[o] =
                      !r && (t || (n >= 120 && u.length >= 120))
                        ? new iP(o && u)
                        : i);
                }
                u = e[0];
                var p = -1,
                  d = c[0];
                e: for (; ++p < n && l.length < h; ) {
                  var g = u[p],
                    f = t ? t(g) : g;
                  if (
                    ((g = r || 0 !== g ? g : 0), !(d ? tk(d, f) : s(l, f, r)))
                  ) {
                    for (o = a; --o; ) {
                      var y = c[o];
                      if (!(y ? tk(y, f) : s(e[o], f, r))) continue e;
                    }
                    d && d.push(f), l.push(g);
                  }
                }
                return l;
              }
              function i5(e, t, r) {
                t = rA(t, e);
                var s = null == (e = sx(e, t)) ? e : e[s$(sQ(t))];
                return null == s ? i : tn(s, e, r);
              }
              function i3(e) {
                return nW(e) && iX(e) == h;
              }
              function i6(e, t, r, s, n) {
                return (
                  e === t ||
                  (null != e && null != t && (nW(e) || nW(t))
                    ? (function (e, t, r, s, n, a) {
                        var o = nD(e),
                          c = nD(t),
                          g = o ? l : sm(e),
                          f = c ? l : sm(t);
                        (g = g == h ? v : g), (f = f == h ? v : f);
                        var w = g == v,
                          P = f == v,
                          R = g == f;
                        if (R && nz(e)) {
                          if (!nz(t)) return !1;
                          (o = !0), (w = !1);
                        }
                        if (R && !w)
                          return (
                            a || (a = new iS()),
                            o || n0(e)
                              ? ss(e, t, r, s, n, a)
                              : (function (e, t, i, r, s, n, a) {
                                  switch (i) {
                                    case C:
                                      if (
                                        e.byteLength != t.byteLength ||
                                        e.byteOffset != t.byteOffset
                                      )
                                        break;
                                      (e = e.buffer), (t = t.buffer);
                                    case S:
                                      return !(
                                        e.byteLength != t.byteLength ||
                                        !n(new eU(e), new eU(t))
                                      );
                                    case u:
                                    case p:
                                    case m:
                                      return nq(+e, +t);
                                    case d:
                                      return (
                                        e.name == t.name &&
                                        e.message == t.message
                                      );
                                    case _:
                                    case I:
                                      return e == t + "";
                                    case y:
                                      var o = tz;
                                    case b:
                                      var c = 1 & r;
                                      if (
                                        (o || (o = tK), e.size != t.size && !c)
                                      )
                                        break;
                                      var h = a.get(e);
                                      if (h) return h == t;
                                      (r |= 2), a.set(e, t);
                                      var l = ss(o(e), o(t), r, s, n, a);
                                      return a.delete(e), l;
                                    case E:
                                      if (id) return id.call(e) == id.call(t);
                                  }
                                  return !1;
                                })(e, t, g, r, s, n, a)
                          );
                        if (!(1 & r)) {
                          var O = w && ek.call(e, "__wrapped__"),
                            x = P && ek.call(t, "__wrapped__");
                          if (O || x) {
                            var T = O ? e.value() : e,
                              q = x ? t.value() : t;
                            return a || (a = new iS()), n(T, q, r, s, a);
                          }
                        }
                        return (
                          !!R &&
                          (a || (a = new iS()),
                          (function (e, t, r, s, n, a) {
                            var o = 1 & r,
                              c = sa(e),
                              h = c.length;
                            if (h != sa(t).length && !o) return !1;
                            for (var l = h; l--; ) {
                              var u = c[l];
                              if (!(o ? u in t : ek.call(t, u))) return !1;
                            }
                            var p = a.get(e),
                              d = a.get(t);
                            if (p && d) return p == t && d == e;
                            var g = !0;
                            a.set(e, t), a.set(t, e);
                            for (var f = o; ++l < h; ) {
                              var y = e[(u = c[l])],
                                m = t[u];
                              if (s)
                                var v = o
                                  ? s(m, y, u, t, e, a)
                                  : s(y, m, u, e, t, a);
                              if (
                                !(v === i ? y === m || n(y, m, r, s, a) : v)
                              ) {
                                g = !1;
                                break;
                              }
                              f || (f = "constructor" == u);
                            }
                            if (g && !f) {
                              var w = e.constructor,
                                _ = t.constructor;
                              w != _ &&
                                "constructor" in e &&
                                "constructor" in t &&
                                !(
                                  "function" == typeof w &&
                                  w instanceof w &&
                                  "function" == typeof _ &&
                                  _ instanceof _
                                ) &&
                                (g = !1);
                            }
                            return a.delete(e), a.delete(t), g;
                          })(e, t, r, s, n, a))
                        );
                      })(e, t, r, s, i6, n)
                    : e != e && t != t)
                );
              }
              function i4(e, t, r, s) {
                var n = r.length,
                  a = n,
                  o = !s;
                if (null == e) return !a;
                for (e = eE(e); n--; ) {
                  var c = r[n];
                  if (o && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
                }
                for (; ++n < a; ) {
                  var h = (c = r[n])[0],
                    l = e[h],
                    u = c[1];
                  if (o && c[2]) {
                    if (l === i && !(h in e)) return !1;
                  } else {
                    var p = new iS();
                    if (s) var d = s(l, u, h, e, t, p);
                    if (!(d === i ? i6(u, l, 3, s, p) : d)) return !1;
                  }
                }
                return !0;
              }
              function i8(e) {
                return (
                  !(!nF(e) || (eN && eN in e)) && (nK(e) ? e$ : eh).test(sz(e))
                );
              }
              function i7(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? a$
                  : "object" == typeof e
                  ? nD(e)
                    ? rs(e[0], e[1])
                    : rr(e)
                  : aB(e);
              }
              function re(e) {
                if (!sC(e)) return t1(e);
                var t = [];
                for (var i in eE(e))
                  ek.call(e, i) && "constructor" != i && t.push(i);
                return t;
              }
              function rt(e, t) {
                return e < t;
              }
              function ri(e, t) {
                var i = -1,
                  r = nj(e) ? ev(e.length) : [];
                return (
                  iL(e, function (e, s, n) {
                    r[++i] = t(e, s, n);
                  }),
                  r
                );
              }
              function rr(e) {
                var t = sd(e);
                return 1 == t.length && t[0][2]
                  ? sR(t[0][0], t[0][1])
                  : function (i) {
                      return i === e || i4(i, e, t);
                    };
              }
              function rs(e, t) {
                var r;
                return sE(e) && (r = t) == r && !nF(r)
                  ? sR(s$(e), t)
                  : function (r) {
                      var s = ao(r, e);
                      return s === i && s === t ? ac(r, e) : i6(t, s, 3);
                    };
              }
              function rn(e, t, r, s, n) {
                e !== t &&
                  iW(
                    t,
                    function (a, o) {
                      if ((n || (n = new iS()), nF(a)))
                        !(function (e, t, r, s, n, a, o) {
                          var c = sT(e, r),
                            h = sT(t, r),
                            l = o.get(h);
                          if (l) {
                            iO(e, r, l);
                            return;
                          }
                          var u = a ? a(c, h, r + "", e, t, o) : i,
                            p = u === i;
                          if (p) {
                            var d = nD(h),
                              g = !d && nz(h),
                              f = !d && !g && n0(h);
                            (u = h),
                              d || g || f
                                ? nD(c)
                                  ? (u = c)
                                  : n$(c)
                                  ? (u = rK(c))
                                  : g
                                  ? ((p = !1), (u = rM(h, !0)))
                                  : f
                                  ? ((p = !1), (u = r$(h, !0)))
                                  : (u = [])
                                : nG(h) || nN(h)
                                ? ((u = c),
                                  nN(c)
                                    ? (u = n8(c))
                                    : (!nF(c) || nK(c)) && (u = sw(h)))
                                : (p = !1);
                          }
                          p && (o.set(h, u), n(u, h, s, a, o), o.delete(h)),
                            iO(e, r, u);
                        })(e, t, o, r, rn, s, n);
                      else {
                        var c = s ? s(sT(e, o), a, o + "", e, t, n) : i;
                        c === i && (c = a), iO(e, o, c);
                      }
                    },
                    ad
                  );
              }
              function ra(e, t) {
                var r = e.length;
                if (r) return sb((t += t < 0 ? r : 0), r) ? e[t] : i;
              }
              function ro(e, t, i) {
                t = t.length
                  ? tp(t, function (e) {
                      return nD(e)
                        ? function (t) {
                            return iQ(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [a$];
                var r = -1;
                return (
                  (t = tp(t, tT(su()))),
                  (function (e, t) {
                    var i = e.length;
                    for (e.sort(t); i--; ) e[i] = e[i].value;
                    return e;
                  })(
                    ri(e, function (e, i, s) {
                      return {
                        criteria: tp(t, function (t) {
                          return t(e);
                        }),
                        index: ++r,
                        value: e,
                      };
                    }),
                    function (e, t) {
                      return (function (e, t, i) {
                        for (
                          var r = -1,
                            s = e.criteria,
                            n = t.criteria,
                            a = s.length,
                            o = i.length;
                          ++r < a;

                        ) {
                          var c = rz(s[r], n[r]);
                          if (c) {
                            if (r >= o) return c;
                            return c * ("desc" == i[r] ? -1 : 1);
                          }
                        }
                        return e.index - t.index;
                      })(e, t, i);
                    }
                  )
                );
              }
              function rc(e, t, i) {
                for (var r = -1, s = t.length, n = {}; ++r < s; ) {
                  var a = t[r],
                    o = iQ(e, a);
                  i(o, a) && rg(n, rA(a, e), o);
                }
                return n;
              }
              function rh(e, t, i, r) {
                var s = r ? tb : t_,
                  n = -1,
                  a = t.length,
                  o = e;
                for (e === t && (t = rK(t)), i && (o = tp(e, tT(i))); ++n < a; )
                  for (
                    var c = 0, h = t[n], l = i ? i(h) : h;
                    (c = s(o, l, c, r)) > -1;

                  )
                    o !== e && e2.call(o, c, 1), e2.call(e, c, 1);
                return e;
              }
              function rl(e, t) {
                for (var i = e ? t.length : 0, r = i - 1; i--; ) {
                  var s = t[i];
                  if (i == r || s !== n) {
                    var n = s;
                    sb(s) ? e2.call(e, s, 1) : rS(e, s);
                  }
                }
                return e;
              }
              function ru(e, t) {
                return e + tY(t6() * (t - e + 1));
              }
              function rp(e, t) {
                var i = "";
                if (!e || t < 1 || t > 9007199254740991) return i;
                do t % 2 && (i += e), (t = tY(t / 2)) && (e += e);
                while (t);
                return i;
              }
              function rd(e, t) {
                return sA(sO(e, t, a$), e + "");
              }
              function rg(e, t, r, s) {
                if (!nF(e)) return e;
                t = rA(t, e);
                for (
                  var n = -1, a = t.length, o = a - 1, c = e;
                  null != c && ++n < a;

                ) {
                  var h = s$(t[n]),
                    l = r;
                  if (
                    "__proto__" === h ||
                    "constructor" === h ||
                    "prototype" === h
                  )
                    break;
                  if (n != o) {
                    var u = c[h];
                    (l = s ? s(u, h, c) : i) === i &&
                      (l = nF(u) ? u : sb(t[n + 1]) ? [] : {});
                  }
                  ix(c, h, l), (c = c[h]);
                }
                return e;
              }
              var rf = is
                  ? function (e, t) {
                      return is.set(e, t), e;
                    }
                  : a$,
                ry = e8
                  ? function (e, t) {
                      return e8(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: aD(t),
                        writable: !0,
                      });
                    }
                  : a$;
              function rm(e, t, i) {
                var r = -1,
                  s = e.length;
                t < 0 && (t = -t > s ? 0 : s + t),
                  (i = i > s ? s : i) < 0 && (i += s),
                  (s = t > i ? 0 : (i - t) >>> 0),
                  (t >>>= 0);
                for (var n = ev(s); ++r < s; ) n[r] = e[r + t];
                return n;
              }
              function rv(e, t) {
                var i;
                return (
                  iL(e, function (e, r, s) {
                    return !(i = t(e, r, s));
                  }),
                  !!i
                );
              }
              function rw(e, t, i) {
                var r = 0,
                  s = null == e ? r : e.length;
                if ("number" == typeof t && t == t && s <= 2147483647) {
                  for (; r < s; ) {
                    var n = (r + s) >>> 1,
                      a = e[n];
                    null !== a && !nX(a) && (i ? a <= t : a < t)
                      ? (r = n + 1)
                      : (s = n);
                  }
                  return s;
                }
                return r_(e, t, a$, i);
              }
              function r_(e, t, r, s) {
                var n = 0,
                  a = null == e ? 0 : e.length;
                if (0 === a) return 0;
                t = r(t);
                for (
                  var o = t != t, c = null === t, h = nX(t), l = t === i;
                  n < a;

                ) {
                  var u = tY((n + a) / 2),
                    p = r(e[u]),
                    d = p !== i,
                    g = null === p,
                    f = p == p,
                    y = nX(p);
                  if (o) var m = s || f;
                  else
                    m = l
                      ? f && (s || d)
                      : c
                      ? f && d && (s || !g)
                      : h
                      ? f && d && !g && (s || !y)
                      : !g && !y && (s ? p <= t : p < t);
                  m ? (n = u + 1) : (a = u);
                }
                return t9(a, 4294967294);
              }
              function rb(e, t) {
                for (var i = -1, r = e.length, s = 0, n = []; ++i < r; ) {
                  var a = e[i],
                    o = t ? t(a) : a;
                  if (!i || !nq(o, c)) {
                    var c = o;
                    n[s++] = 0 === a ? 0 : a;
                  }
                }
                return n;
              }
              function rI(e) {
                return "number" == typeof e ? e : nX(e) ? o : +e;
              }
              function rE(e) {
                if ("string" == typeof e) return e;
                if (nD(e)) return tp(e, rE) + "";
                if (nX(e)) return ig ? ig.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -a ? "-0" : t;
              }
              function rP(e, t, i) {
                var r = -1,
                  s = tl,
                  n = e.length,
                  a = !0,
                  o = [],
                  c = o;
                if (i) (a = !1), (s = tu);
                else if (n >= 200) {
                  var h = t ? null : r8(e);
                  if (h) return tK(h);
                  (a = !1), (s = tk), (c = new iP());
                } else c = t ? [] : o;
                e: for (; ++r < n; ) {
                  var l = e[r],
                    u = t ? t(l) : l;
                  if (((l = i || 0 !== l ? l : 0), a && u == u)) {
                    for (var p = c.length; p--; ) if (c[p] === u) continue e;
                    t && c.push(u), o.push(l);
                  } else s(c, u, i) || (c !== o && c.push(u), o.push(l));
                }
                return o;
              }
              function rS(e, t) {
                return (
                  (t = rA(t, e)), null == (e = sx(e, t)) || delete e[s$(sQ(t))]
                );
              }
              function rC(e, t, i, r) {
                return rg(e, t, i(iQ(e, t)), r);
              }
              function rR(e, t, i, r) {
                for (
                  var s = e.length, n = r ? s : -1;
                  (r ? n-- : ++n < s) && t(e[n], n, e);

                );
                return i
                  ? rm(e, r ? 0 : n, r ? n + 1 : s)
                  : rm(e, r ? n + 1 : 0, r ? s : n);
              }
              function rO(e, t) {
                var i = e;
                return (
                  i instanceof i_ && (i = i.value()),
                  tg(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, td([e], t.args));
                    },
                    i
                  )
                );
              }
              function rx(e, t, i) {
                var r = e.length;
                if (r < 2) return r ? rP(e[0]) : [];
                for (var s = -1, n = ev(r); ++s < r; )
                  for (var a = e[s], o = -1; ++o < r; )
                    o != s && (n[s] = iz(n[s] || a, e[o], t, i));
                return rP(iF(n, 1), t, i);
              }
              function rT(e, t, r) {
                for (
                  var s = -1, n = e.length, a = t.length, o = {};
                  ++s < n;

                ) {
                  var c = s < a ? t[s] : i;
                  r(o, e[s], c);
                }
                return o;
              }
              function rq(e) {
                return n$(e) ? e : [];
              }
              function rk(e) {
                return "function" == typeof e ? e : a$;
              }
              function rA(e, t) {
                return nD(e) ? e : sE(e, t) ? [e] : sj(n7(e));
              }
              function rN(e, t, r) {
                var s = e.length;
                return (r = r === i ? s : r), !t && r >= s ? e : rm(e, t, r);
              }
              var rD =
                tm ||
                function (e) {
                  return e9.clearTimeout(e);
                };
              function rM(e, t) {
                if (t) return e.slice();
                var i = e.length,
                  r = eH ? eH(i) : new e.constructor(i);
                return e.copy(r), r;
              }
              function rj(e) {
                var t = new e.constructor(e.byteLength);
                return new eU(t).set(new eU(e)), t;
              }
              function r$(e, t) {
                var i = t ? rj(e.buffer) : e.buffer;
                return new e.constructor(i, e.byteOffset, e.length);
              }
              function rz(e, t) {
                if (e !== t) {
                  var r = e !== i,
                    s = null === e,
                    n = e == e,
                    a = nX(e),
                    o = t !== i,
                    c = null === t,
                    h = t == t,
                    l = nX(t);
                  if (
                    (!c && !l && !a && e > t) ||
                    (a && o && h && !c && !l) ||
                    (s && o && h) ||
                    (!r && h) ||
                    !n
                  )
                    return 1;
                  if (
                    (!s && !a && !l && e < t) ||
                    (l && r && n && !s && !a) ||
                    (c && r && n) ||
                    (!o && n) ||
                    !h
                  )
                    return -1;
                }
                return 0;
              }
              function rL(e, t, i, r) {
                for (
                  var s = -1,
                    n = e.length,
                    a = i.length,
                    o = -1,
                    c = t.length,
                    h = t2(n - a, 0),
                    l = ev(c + h),
                    u = !r;
                  ++o < c;

                )
                  l[o] = t[o];
                for (; ++s < a; ) (u || s < n) && (l[i[s]] = e[s]);
                for (; h--; ) l[o++] = e[s++];
                return l;
              }
              function rU(e, t, i, r) {
                for (
                  var s = -1,
                    n = e.length,
                    a = -1,
                    o = i.length,
                    c = -1,
                    h = t.length,
                    l = t2(n - o, 0),
                    u = ev(l + h),
                    p = !r;
                  ++s < l;

                )
                  u[s] = e[s];
                for (var d = s; ++c < h; ) u[d + c] = t[c];
                for (; ++a < o; ) (p || s < n) && (u[d + i[a]] = e[s++]);
                return u;
              }
              function rK(e, t) {
                var i = -1,
                  r = e.length;
                for (t || (t = ev(r)); ++i < r; ) t[i] = e[i];
                return t;
              }
              function rV(e, t, r, s) {
                var n = !r;
                r || (r = {});
                for (var a = -1, o = t.length; ++a < o; ) {
                  var c = t[a],
                    h = s ? s(r[c], e[c], c, r, e) : i;
                  h === i && (h = e[c]), n ? iA(r, c, h) : ix(r, c, h);
                }
                return r;
              }
              function rH(e, t) {
                return function (i, r) {
                  var s = nD(i) ? ta : iq,
                    n = t ? t() : {};
                  return s(i, e, su(r, 2), n);
                };
              }
              function rF(e) {
                return rd(function (t, r) {
                  var s = -1,
                    n = r.length,
                    a = n > 1 ? r[n - 1] : i,
                    o = n > 2 ? r[2] : i;
                  for (
                    a = e.length > 3 && "function" == typeof a ? (n--, a) : i,
                      o && sI(r[0], r[1], o) && ((a = n < 3 ? i : a), (n = 1)),
                      t = eE(t);
                    ++s < n;

                  ) {
                    var c = r[s];
                    c && e(t, c, s, a);
                  }
                  return t;
                });
              }
              function rW(e, t) {
                return function (i, r) {
                  if (null == i) return i;
                  if (!nj(i)) return e(i, r);
                  for (
                    var s = i.length, n = t ? s : -1, a = eE(i);
                    (t ? n-- : ++n < s) && !1 !== r(a[n], n, a);

                  );
                  return i;
                };
              }
              function rB(e) {
                return function (t, i, r) {
                  for (var s = -1, n = eE(t), a = r(t), o = a.length; o--; ) {
                    var c = a[e ? o : ++s];
                    if (!1 === i(n[c], c, n)) break;
                  }
                  return t;
                };
              }
              function rJ(e) {
                return function (t) {
                  var r = t$((t = n7(t))) ? tH(t) : i,
                    s = r ? r[0] : t.charAt(0),
                    n = r ? rN(r, 1).join("") : t.slice(1);
                  return s[e]() + n;
                };
              }
              function rG(e) {
                return function (t) {
                  return tg(ak(aP(t).replace(eK, "")), e, "");
                };
              }
              function rY(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var i = im(e.prototype),
                    r = e.apply(i, t);
                  return nF(r) ? r : i;
                };
              }
              function rQ(e) {
                return function (t, r, s) {
                  var n = eE(t);
                  if (!nj(t)) {
                    var a = su(r, 3);
                    (t = ap(t)),
                      (r = function (e) {
                        return a(n[e], e, n);
                      });
                  }
                  var o = e(t, r, s);
                  return o > -1 ? n[a ? t[o] : o] : i;
                };
              }
              function rZ(e) {
                return sn(function (t) {
                  var s = t.length,
                    n = s,
                    a = iw.prototype.thru;
                  for (e && t.reverse(); n--; ) {
                    var o = t[n];
                    if ("function" != typeof o) throw new eC(r);
                    if (a && !c && "wrapper" == sh(o)) var c = new iw([], !0);
                  }
                  for (n = c ? n : s; ++n < s; ) {
                    var h = sh((o = t[n])),
                      l = "wrapper" == h ? sc(o) : i;
                    c =
                      l && sP(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9]
                        ? c[sh(l[0])].apply(c, l[3])
                        : 1 == o.length && sP(o)
                        ? c[h]()
                        : c.thru(o);
                  }
                  return function () {
                    var e = arguments,
                      i = e[0];
                    if (c && 1 == e.length && nD(i)) return c.plant(i).value();
                    for (var r = 0, n = s ? t[r].apply(this, e) : i; ++r < s; )
                      n = t[r].call(this, n);
                    return n;
                  };
                });
              }
              function rX(e, t, r, s, n, a, o, c, h, l) {
                var u = 128 & t,
                  p = 1 & t,
                  d = 2 & t,
                  g = 24 & t,
                  f = 512 & t,
                  y = d ? i : rY(e);
                return function m() {
                  for (var v = arguments.length, w = ev(v), _ = v; _--; )
                    w[_] = arguments[_];
                  if (g)
                    var b = sl(m),
                      I = (function (e, t) {
                        for (var i = e.length, r = 0; i--; ) e[i] === t && ++r;
                        return r;
                      })(w, b);
                  if (
                    (s && (w = rL(w, s, n, g)),
                    a && (w = rU(w, a, o, g)),
                    (v -= I),
                    g && v < l)
                  ) {
                    var E = tU(w, b);
                    return r6(e, t, rX, m.placeholder, r, w, E, c, h, l - v);
                  }
                  var P = p ? r : this,
                    S = d ? P[e] : e;
                  return (
                    (v = w.length),
                    c
                      ? (w = (function (e, t) {
                          for (
                            var r = e.length, s = t9(t.length, r), n = rK(e);
                            s--;

                          ) {
                            var a = t[s];
                            e[s] = sb(a, r) ? n[a] : i;
                          }
                          return e;
                        })(w, c))
                      : f && v > 1 && w.reverse(),
                    u && h < v && (w.length = h),
                    this &&
                      this !== e9 &&
                      this instanceof m &&
                      (S = y || rY(S)),
                    S.apply(P, w)
                  );
                };
              }
              function r0(e, t) {
                return function (i, r) {
                  var s, n;
                  return (
                    (s = t(r)),
                    (n = {}),
                    iJ(i, function (t, i, r) {
                      e(n, s(t), i, r);
                    }),
                    n
                  );
                };
              }
              function r1(e, t) {
                return function (r, s) {
                  var n;
                  if (r === i && s === i) return t;
                  if ((r !== i && (n = r), s !== i)) {
                    if (n === i) return s;
                    "string" == typeof r || "string" == typeof s
                      ? ((r = rE(r)), (s = rE(s)))
                      : ((r = rI(r)), (s = rI(s))),
                      (n = e(r, s));
                  }
                  return n;
                };
              }
              function r2(e) {
                return sn(function (t) {
                  return (
                    (t = tp(t, tT(su()))),
                    rd(function (i) {
                      var r = this;
                      return e(t, function (e) {
                        return tn(e, r, i);
                      });
                    })
                  );
                });
              }
              function r9(e, t) {
                var r = (t = t === i ? " " : rE(t)).length;
                if (r < 2) return r ? rp(t, e) : t;
                var s = rp(t, tG(e / tV(t)));
                return t$(t) ? rN(tH(s), 0, e).join("") : s.slice(0, e);
              }
              function r5(e) {
                return function (t, r, s) {
                  return (
                    s && "number" != typeof s && sI(t, r, s) && (r = s = i),
                    (t = n5(t)),
                    r === i ? ((r = t), (t = 0)) : (r = n5(r)),
                    (s = s === i ? (t < r ? 1 : -1) : n5(s)),
                    (function (e, t, i, r) {
                      for (
                        var s = -1,
                          n = t2(tG((t - e) / (i || 1)), 0),
                          a = ev(n);
                        n--;

                      )
                        (a[r ? n : ++s] = e), (e += i);
                      return a;
                    })(t, r, s, e)
                  );
                };
              }
              function r3(e) {
                return function (t, i) {
                  return (
                    ("string" == typeof t && "string" == typeof i) ||
                      ((t = n4(t)), (i = n4(i))),
                    e(t, i)
                  );
                };
              }
              function r6(e, t, r, s, n, a, o, c, h, l) {
                var u = 8 & t,
                  p = u ? o : i,
                  d = u ? i : o,
                  g = u ? a : i,
                  f = u ? i : a;
                (t |= u ? 32 : 64), 4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
                var y = [e, t, n, g, p, f, d, c, h, l],
                  m = r.apply(i, y);
                return sP(e) && sq(m, y), (m.placeholder = s), sN(m, e, t);
              }
              function r4(e) {
                var t = eI[e];
                return function (e, i) {
                  if (
                    ((e = n4(e)), (i = null == i ? 0 : t9(n3(i), 292)) && tX(e))
                  ) {
                    var r = (n7(e) + "e").split("e");
                    return +(
                      (r = (n7(t(r[0] + "e" + (+r[1] + i))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+r[1] - i)
                    );
                  }
                  return t(e);
                };
              }
              var r8 =
                it && 1 / tK(new it([, -0]))[1] == a
                  ? function (e) {
                      return new it(e);
                    }
                  : aV;
              function r7(e) {
                return function (t) {
                  var i,
                    r,
                    s = sm(t);
                  return s == y
                    ? tz(t)
                    : s == b
                    ? ((i = -1),
                      (r = Array(t.size)),
                      t.forEach(function (e) {
                        r[++i] = [e, e];
                      }),
                      r)
                    : tp(e(t), function (e) {
                        return [e, t[e]];
                      });
                };
              }
              function se(e, t, s, a, o, c, h, l) {
                var u = 2 & t;
                if (!u && "function" != typeof e) throw new eC(r);
                var p = a ? a.length : 0;
                if (
                  (p || ((t &= -97), (a = o = i)),
                  (h = h === i ? h : t2(n3(h), 0)),
                  (l = l === i ? l : n3(l)),
                  (p -= o ? o.length : 0),
                  64 & t)
                ) {
                  var d = a,
                    g = o;
                  a = o = i;
                }
                var f = u ? i : sc(e),
                  y = [e, t, s, a, o, d, g, c, h, l];
                if (
                  (f &&
                    (function (e, t) {
                      var i = e[1],
                        r = t[1],
                        s = i | r,
                        a = s < 131,
                        o =
                          (128 == r && 8 == i) ||
                          (128 == r && 256 == i && e[7].length <= t[8]) ||
                          (384 == r && t[7].length <= t[8] && 8 == i);
                      if (a || o) {
                        1 & r && ((e[2] = t[2]), (s |= 1 & i ? 0 : 4));
                        var c = t[3];
                        if (c) {
                          var h = e[3];
                          (e[3] = h ? rL(h, c, t[4]) : c),
                            (e[4] = h ? tU(e[3], n) : t[4]);
                        }
                        (c = t[5]) &&
                          ((h = e[5]),
                          (e[5] = h ? rU(h, c, t[6]) : c),
                          (e[6] = h ? tU(e[5], n) : t[6])),
                          (c = t[7]) && (e[7] = c),
                          128 & r &&
                            (e[8] = null == e[8] ? t[8] : t9(e[8], t[8])),
                          null == e[9] && (e[9] = t[9]),
                          (e[0] = t[0]),
                          (e[1] = s);
                      }
                    })(y, f),
                  (e = y[0]),
                  (t = y[1]),
                  (s = y[2]),
                  (a = y[3]),
                  (o = y[4]),
                  (l = y[9] =
                    y[9] === i ? (u ? 0 : e.length) : t2(y[9] - p, 0)) ||
                    !(24 & t) ||
                    (t &= -25),
                  t && 1 != t)
                )
                  8 == t || 16 == t
                    ? ((m = e),
                      (v = t),
                      (w = l),
                      (_ = rY(m)),
                      (k = function e() {
                        for (
                          var t = arguments.length, r = ev(t), s = t, n = sl(e);
                          s--;

                        )
                          r[s] = arguments[s];
                        var a =
                          t < 3 && r[0] !== n && r[t - 1] !== n ? [] : tU(r, n);
                        return (t -= a.length) < w
                          ? r6(m, v, rX, e.placeholder, i, r, a, i, i, w - t)
                          : tn(
                              this && this !== e9 && this instanceof e ? _ : m,
                              this,
                              r
                            );
                      }))
                    : (32 != t && 33 != t) || o.length
                    ? (k = rX.apply(i, y))
                    : ((b = e),
                      (I = t),
                      (E = s),
                      (P = a),
                      (S = 1 & I),
                      (C = rY(b)),
                      (k = function e() {
                        for (
                          var t = -1,
                            i = arguments.length,
                            r = -1,
                            s = P.length,
                            n = ev(s + i),
                            a =
                              this && this !== e9 && this instanceof e ? C : b;
                          ++r < s;

                        )
                          n[r] = P[r];
                        for (; i--; ) n[r++] = arguments[++t];
                        return tn(a, S ? E : this, n);
                      }));
                else
                  var m,
                    v,
                    w,
                    _,
                    b,
                    I,
                    E,
                    P,
                    S,
                    C,
                    R,
                    O,
                    x,
                    T,
                    q,
                    k =
                      ((R = e),
                      (O = t),
                      (x = s),
                      (T = 1 & O),
                      (q = rY(R)),
                      function e() {
                        return (
                          this && this !== e9 && this instanceof e ? q : R
                        ).apply(T ? x : this, arguments);
                      });
                return sN((f ? rf : sq)(k, y), e, t);
              }
              function st(e, t, r, s) {
                return e === i || (nq(e, ex[r]) && !ek.call(s, r)) ? t : e;
              }
              function si(e, t, r, s, n, a) {
                return (
                  nF(e) &&
                    nF(t) &&
                    (a.set(t, e), rn(e, t, i, si, a), a.delete(t)),
                  e
                );
              }
              function sr(e) {
                return nG(e) ? i : e;
              }
              function ss(e, t, r, s, n, a) {
                var o = 1 & r,
                  c = e.length,
                  h = t.length;
                if (c != h && !(o && h > c)) return !1;
                var l = a.get(e),
                  u = a.get(t);
                if (l && u) return l == t && u == e;
                var p = -1,
                  d = !0,
                  g = 2 & r ? new iP() : i;
                for (a.set(e, t), a.set(t, e); ++p < c; ) {
                  var f = e[p],
                    y = t[p];
                  if (s) var m = o ? s(y, f, p, t, e, a) : s(f, y, p, e, t, a);
                  if (m !== i) {
                    if (m) continue;
                    d = !1;
                    break;
                  }
                  if (g) {
                    if (
                      !ty(t, function (e, t) {
                        if (!tk(g, t) && (f === e || n(f, e, r, s, a)))
                          return g.push(t);
                      })
                    ) {
                      d = !1;
                      break;
                    }
                  } else if (!(f === y || n(f, y, r, s, a))) {
                    d = !1;
                    break;
                  }
                }
                return a.delete(e), a.delete(t), d;
              }
              function sn(e) {
                return sA(sO(e, i, sW), e + "");
              }
              function sa(e) {
                return iZ(e, ap, sf);
              }
              function so(e) {
                return iZ(e, ad, sy);
              }
              var sc = is
                ? function (e) {
                    return is.get(e);
                  }
                : aV;
              function sh(e) {
                for (
                  var t = e.name + "",
                    i = ia[t],
                    r = ek.call(ia, t) ? i.length : 0;
                  r--;

                ) {
                  var s = i[r],
                    n = s.func;
                  if (null == n || n == e) return s.name;
                }
                return t;
              }
              function sl(e) {
                return (ek.call(iy, "placeholder") ? iy : e).placeholder;
              }
              function su() {
                var e = iy.iteratee || az;
                return (
                  (e = e === az ? i7 : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function sp(e, t) {
                var i,
                  r = e.__data__;
                return (
                  "string" == (i = typeof t) ||
                  "number" == i ||
                  "symbol" == i ||
                  "boolean" == i
                    ? "__proto__" !== t
                    : null === t
                )
                  ? r["string" == typeof t ? "string" : "hash"]
                  : r.map;
              }
              function sd(e) {
                for (var t = ap(e), i = t.length; i--; ) {
                  var r = t[i],
                    s = e[r];
                  t[i] = [r, s, s == s && !nF(s)];
                }
                return t;
              }
              function sg(e, t) {
                var r = null == e ? i : e[t];
                return i8(r) ? r : i;
              }
              var sf = tQ
                  ? function (e) {
                      return null == e
                        ? []
                        : th(tQ((e = eE(e))), function (t) {
                            return e1.call(e, t);
                          });
                    }
                  : aY,
                sy = tQ
                  ? function (e) {
                      for (var t = []; e; ) td(t, sf(e)), (e = eW(e));
                      return t;
                    }
                  : aY,
                sm = iX;
              function sv(e, t, i) {
                t = rA(t, e);
                for (var r = -1, s = t.length, n = !1; ++r < s; ) {
                  var a = s$(t[r]);
                  if (!(n = null != e && i(e, a))) break;
                  e = e[a];
                }
                return n || ++r != s
                  ? n
                  : !!(s = null == e ? 0 : e.length) &&
                      nH(s) &&
                      sb(a, s) &&
                      (nD(e) || nN(e));
              }
              function sw(e) {
                return "function" != typeof e.constructor || sC(e)
                  ? {}
                  : im(eW(e));
              }
              function s_(e) {
                return nD(e) || nN(e) || !!(e5 && e && e[e5]);
              }
              function sb(e, t) {
                var i = typeof e;
                return (
                  !!(t = t ?? 9007199254740991) &&
                  ("number" == i || ("symbol" != i && eu.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
                );
              }
              function sI(e, t, i) {
                if (!nF(i)) return !1;
                var r = typeof t;
                return (
                  ("number" == r
                    ? !!(nj(i) && sb(t, i.length))
                    : "string" == r && t in i) && nq(i[t], e)
                );
              }
              function sE(e, t) {
                if (nD(e)) return !1;
                var i = typeof e;
                return (
                  !!(
                    "number" == i ||
                    "symbol" == i ||
                    "boolean" == i ||
                    null == e ||
                    nX(e)
                  ) ||
                  B.test(e) ||
                  !W.test(e) ||
                  (null != t && e in eE(t))
                );
              }
              function sP(e) {
                var t = sh(e),
                  i = iy[t];
                if ("function" != typeof i || !(t in i_.prototype)) return !1;
                if (e === i) return !0;
                var r = sc(i);
                return !!r && e === r[0];
              }
              ((t8 && sm(new t8(new ArrayBuffer(1))) != C) ||
                (t7 && sm(new t7()) != y) ||
                (ie && sm(ie.resolve()) != w) ||
                (it && sm(new it()) != b) ||
                (ii && sm(new ii()) != P)) &&
                (sm = function (e) {
                  var t = iX(e),
                    r = t == v ? e.constructor : i,
                    s = r ? sz(r) : "";
                  if (s)
                    switch (s) {
                      case io:
                        return C;
                      case ic:
                        return y;
                      case ih:
                        return w;
                      case il:
                        return b;
                      case iu:
                        return P;
                    }
                  return t;
                });
              var sS = eT ? nK : aQ;
              function sC(e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || ex);
              }
              function sR(e, t) {
                return function (r) {
                  return null != r && r[e] === t && (t !== i || e in eE(r));
                };
              }
              function sO(e, t, r) {
                return (
                  (t = t2(t === i ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var i = arguments,
                        s = -1,
                        n = t2(i.length - t, 0),
                        a = ev(n);
                      ++s < n;

                    )
                      a[s] = i[t + s];
                    s = -1;
                    for (var o = ev(t + 1); ++s < t; ) o[s] = i[s];
                    return (o[t] = r(a)), tn(e, this, o);
                  }
                );
              }
              function sx(e, t) {
                return t.length < 2 ? e : iQ(e, rm(t, 0, -1));
              }
              function sT(e, t) {
                if (
                  !("constructor" === t && "function" == typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              }
              var sq = sD(rf),
                sk =
                  tJ ||
                  function (e, t) {
                    return e9.setTimeout(e, t);
                  },
                sA = sD(ry);
              function sN(e, t, i) {
                var r,
                  s,
                  n = t + "";
                return sA(
                  e,
                  (function (e, t) {
                    var i = t.length;
                    if (!i) return e;
                    var r = i - 1;
                    return (
                      (t[r] = (i > 1 ? "& " : "") + t[r]),
                      (t = t.join(i > 2 ? ", " : " ")),
                      e.replace(
                        X,
                        `{
/* [wrapped with ` +
                          t +
                          `] */
`
                      )
                    );
                  })(
                    n,
                    ((r = (s = n.match(ee)) ? s[1].split(et) : []),
                    to(c, function (e) {
                      var t = "_." + e[0];
                      i & e[1] && !tl(r, t) && r.push(t);
                    }),
                    r.sort())
                  )
                );
              }
              function sD(e) {
                var t = 0,
                  r = 0;
                return function () {
                  var s = t5(),
                    n = 16 - (s - r);
                  if (((r = s), n > 0)) {
                    if (++t >= 800) return arguments[0];
                  } else t = 0;
                  return e.apply(i, arguments);
                };
              }
              function sM(e, t) {
                var r = -1,
                  s = e.length,
                  n = s - 1;
                for (t = t === i ? s : t; ++r < t; ) {
                  var a = ru(r, n),
                    o = e[a];
                  (e[a] = e[r]), (e[r] = o);
                }
                return (e.length = t), e;
              }
              var sj =
                ((ey = (ef = nS(
                  function (e) {
                    var t = [];
                    return (
                      46 === e.charCodeAt(0) && t.push(""),
                      e.replace(J, function (e, i, r, s) {
                        t.push(r ? s.replace(es, "$1") : i || e);
                      }),
                      t
                    );
                  },
                  function (e) {
                    return 500 === ey.size && ey.clear(), e;
                  }
                )).cache),
                ef);
              function s$(e) {
                if ("string" == typeof e || nX(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -a ? "-0" : t;
              }
              function sz(e) {
                if (null != e) {
                  try {
                    return eq.call(e);
                  } catch {}
                  try {
                    return e + "";
                  } catch {}
                }
                return "";
              }
              function sL(e) {
                if (e instanceof i_) return e.clone();
                var t = new iw(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = rK(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              }
              var sU = rd(function (e, t) {
                  return n$(e) ? iz(e, iF(t, 1, n$, !0)) : [];
                }),
                sK = rd(function (e, t) {
                  var r = sQ(t);
                  return (
                    n$(r) && (r = i),
                    n$(e) ? iz(e, iF(t, 1, n$, !0), su(r, 2)) : []
                  );
                }),
                sV = rd(function (e, t) {
                  var r = sQ(t);
                  return (
                    n$(r) && (r = i), n$(e) ? iz(e, iF(t, 1, n$, !0), i, r) : []
                  );
                });
              function sH(e, t, i) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var s = null == i ? 0 : n3(i);
                return s < 0 && (s = t2(r + s, 0)), tw(e, su(t, 3), s);
              }
              function sF(e, t, r) {
                var s = null == e ? 0 : e.length;
                if (!s) return -1;
                var n = s - 1;
                return (
                  r !== i &&
                    ((n = n3(r)), (n = r < 0 ? t2(s + n, 0) : t9(n, s - 1))),
                  tw(e, su(t, 3), n, !0)
                );
              }
              function sW(e) {
                return (null == e ? 0 : e.length) ? iF(e, 1) : [];
              }
              function sB(e) {
                return e && e.length ? e[0] : i;
              }
              var sJ = rd(function (e) {
                  var t = tp(e, rq);
                  return t.length && t[0] === e[0] ? i9(t) : [];
                }),
                sG = rd(function (e) {
                  var t = sQ(e),
                    r = tp(e, rq);
                  return (
                    t === sQ(r) ? (t = i) : r.pop(),
                    r.length && r[0] === e[0] ? i9(r, su(t, 2)) : []
                  );
                }),
                sY = rd(function (e) {
                  var t = sQ(e),
                    r = tp(e, rq);
                  return (
                    (t = "function" == typeof t ? t : i) && r.pop(),
                    r.length && r[0] === e[0] ? i9(r, i, t) : []
                  );
                });
              function sQ(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : i;
              }
              var sZ = rd(sX);
              function sX(e, t) {
                return e && e.length && t && t.length ? rh(e, t) : e;
              }
              var s0 = sn(function (e, t) {
                var i = null == e ? 0 : e.length,
                  r = iN(e, t);
                return (
                  rl(
                    e,
                    tp(t, function (e) {
                      return sb(e, i) ? +e : e;
                    }).sort(rz)
                  ),
                  r
                );
              });
              function s1(e) {
                return null == e ? e : t4.call(e);
              }
              var s2 = rd(function (e) {
                  return rP(iF(e, 1, n$, !0));
                }),
                s9 = rd(function (e) {
                  var t = sQ(e);
                  return n$(t) && (t = i), rP(iF(e, 1, n$, !0), su(t, 2));
                }),
                s5 = rd(function (e) {
                  var t = sQ(e);
                  return (
                    (t = "function" == typeof t ? t : i),
                    rP(iF(e, 1, n$, !0), i, t)
                  );
                });
              function s3(e) {
                if (!(e && e.length)) return [];
                var t = 0;
                return (
                  (e = th(e, function (e) {
                    if (n$(e)) return (t = t2(e.length, t)), !0;
                  })),
                  tO(t, function (t) {
                    return tp(e, tP(t));
                  })
                );
              }
              function s6(e, t) {
                if (!(e && e.length)) return [];
                var r = s3(e);
                return null == t
                  ? r
                  : tp(r, function (e) {
                      return tn(t, i, e);
                    });
              }
              var s4 = rd(function (e, t) {
                  return n$(e) ? iz(e, t) : [];
                }),
                s8 = rd(function (e) {
                  return rx(th(e, n$));
                }),
                s7 = rd(function (e) {
                  var t = sQ(e);
                  return n$(t) && (t = i), rx(th(e, n$), su(t, 2));
                }),
                ne = rd(function (e) {
                  var t = sQ(e);
                  return (
                    (t = "function" == typeof t ? t : i), rx(th(e, n$), i, t)
                  );
                }),
                nt = rd(s3),
                ni = rd(function (e) {
                  var t = e.length,
                    r = t > 1 ? e[t - 1] : i;
                  return (
                    (r = "function" == typeof r ? (e.pop(), r) : i), s6(e, r)
                  );
                });
              function nr(e) {
                var t = iy(e);
                return (t.__chain__ = !0), t;
              }
              function ns(e, t) {
                return t(e);
              }
              var nn = sn(function (e) {
                  var t = e.length,
                    r = t ? e[0] : 0,
                    s = this.__wrapped__,
                    n = function (t) {
                      return iN(t, e);
                    };
                  return !(t > 1) &&
                    !this.__actions__.length &&
                    s instanceof i_ &&
                    sb(r)
                    ? ((s = s.slice(r, +r + (t ? 1 : 0))).__actions__.push({
                        func: ns,
                        args: [n],
                        thisArg: i,
                      }),
                      new iw(s, this.__chain__).thru(function (e) {
                        return t && !e.length && e.push(i), e;
                      }))
                    : this.thru(n);
                }),
                na = rH(function (e, t, i) {
                  ek.call(e, i) ? ++e[i] : iA(e, i, 1);
                }),
                no = rQ(sH),
                nc = rQ(sF);
              function nh(e, t) {
                return (nD(e) ? to : iL)(e, su(t, 3));
              }
              function nl(e, t) {
                return (
                  nD(e)
                    ? function (e, t) {
                        for (
                          var i = null == e ? 0 : e.length;
                          i-- && !1 !== t(e[i], i, e);

                        );
                        return e;
                      }
                    : iU
                )(e, su(t, 3));
              }
              var nu = rH(function (e, t, i) {
                  ek.call(e, i) ? e[i].push(t) : iA(e, i, [t]);
                }),
                np = rd(function (e, t, i) {
                  var r = -1,
                    s = "function" == typeof t,
                    n = nj(e) ? ev(e.length) : [];
                  return (
                    iL(e, function (e) {
                      n[++r] = s ? tn(t, e, i) : i5(e, t, i);
                    }),
                    n
                  );
                }),
                nd = rH(function (e, t, i) {
                  iA(e, i, t);
                });
              function ng(e, t) {
                return (nD(e) ? tp : ri)(e, su(t, 3));
              }
              var nf = rH(
                  function (e, t, i) {
                    e[i ? 0 : 1].push(t);
                  },
                  function () {
                    return [[], []];
                  }
                ),
                ny = rd(function (e, t) {
                  if (null == e) return [];
                  var i = t.length;
                  return (
                    i > 1 && sI(e, t[0], t[1])
                      ? (t = [])
                      : i > 2 && sI(t[0], t[1], t[2]) && (t = [t[0]]),
                    ro(e, iF(t, 1), [])
                  );
                }),
                nm =
                  tS ||
                  function () {
                    return e9.Date.now();
                  };
              function nv(e, t, r) {
                return (
                  (t = r ? i : t),
                  (t = e && null == t ? e.length : t),
                  se(e, 128, i, i, i, i, t)
                );
              }
              function nw(e, t) {
                var s;
                if ("function" != typeof t) throw new eC(r);
                return (
                  (e = n3(e)),
                  function () {
                    return (
                      --e > 0 && (s = t.apply(this, arguments)),
                      e <= 1 && (t = i),
                      s
                    );
                  }
                );
              }
              var n_ = rd(function (e, t, i) {
                  var r = 1;
                  if (i.length) {
                    var s = tU(i, sl(n_));
                    r |= 32;
                  }
                  return se(e, r, t, i, s);
                }),
                nb = rd(function (e, t, i) {
                  var r = 3;
                  if (i.length) {
                    var s = tU(i, sl(nb));
                    r |= 32;
                  }
                  return se(t, r, e, i, s);
                });
              function nI(e, t, s) {
                var n,
                  a,
                  o,
                  c,
                  h,
                  l,
                  u = 0,
                  p = !1,
                  d = !1,
                  g = !0;
                if ("function" != typeof e) throw new eC(r);
                function f(t) {
                  var r = n,
                    s = a;
                  return (n = a = i), (u = t), (c = e.apply(s, r));
                }
                function y(e) {
                  var r = e - l,
                    s = e - u;
                  return l === i || r >= t || r < 0 || (d && s >= o);
                }
                function m() {
                  var e,
                    i,
                    r,
                    s = nm();
                  if (y(s)) return v(s);
                  h = sk(
                    m,
                    ((e = s - l),
                    (i = s - u),
                    (r = t - e),
                    d ? t9(r, o - i) : r)
                  );
                }
                function v(e) {
                  return (h = i), g && n ? f(e) : ((n = a = i), c);
                }
                function w() {
                  var e,
                    r = nm(),
                    s = y(r);
                  if (((n = arguments), (a = this), (l = r), s)) {
                    if (h === i)
                      return (u = e = l), (h = sk(m, t)), p ? f(e) : c;
                    if (d) return rD(h), (h = sk(m, t)), f(l);
                  }
                  return h === i && (h = sk(m, t)), c;
                }
                return (
                  (t = n4(t) || 0),
                  nF(s) &&
                    ((p = !!s.leading),
                    (o = (d = "maxWait" in s) ? t2(n4(s.maxWait) || 0, t) : o),
                    (g = "trailing" in s ? !!s.trailing : g)),
                  (w.cancel = function () {
                    h !== i && rD(h), (u = 0), (n = l = a = h = i);
                  }),
                  (w.flush = function () {
                    return h === i ? c : v(nm());
                  }),
                  w
                );
              }
              var nE = rd(function (e, t) {
                  return i$(e, 1, t);
                }),
                nP = rd(function (e, t, i) {
                  return i$(e, n4(t) || 0, i);
                });
              function nS(e, t) {
                if (
                  "function" != typeof e ||
                  (null != t && "function" != typeof t)
                )
                  throw new eC(r);
                var i = function () {
                  var r = arguments,
                    s = t ? t.apply(this, r) : r[0],
                    n = i.cache;
                  if (n.has(s)) return n.get(s);
                  var a = e.apply(this, r);
                  return (i.cache = n.set(s, a) || n), a;
                };
                return (i.cache = new (nS.Cache || iE)()), i;
              }
              function nC(e) {
                if ("function" != typeof e) throw new eC(r);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              nS.Cache = iE;
              var nR = rd(function (e, t) {
                  var i = (t =
                    1 == t.length && nD(t[0])
                      ? tp(t[0], tT(su()))
                      : tp(iF(t, 1), tT(su()))).length;
                  return rd(function (r) {
                    for (var s = -1, n = t9(r.length, i); ++s < n; )
                      r[s] = t[s].call(this, r[s]);
                    return tn(e, this, r);
                  });
                }),
                nO = rd(function (e, t) {
                  var r = tU(t, sl(nO));
                  return se(e, 32, i, t, r);
                }),
                nx = rd(function (e, t) {
                  var r = tU(t, sl(nx));
                  return se(e, 64, i, t, r);
                }),
                nT = sn(function (e, t) {
                  return se(e, 256, i, i, i, t);
                });
              function nq(e, t) {
                return e === t || (e != e && t != t);
              }
              var nk = r3(i0),
                nA = r3(function (e, t) {
                  return e >= t;
                }),
                nN = i3(
                  (function () {
                    return arguments;
                  })()
                )
                  ? i3
                  : function (e) {
                      return (
                        nW(e) && ek.call(e, "callee") && !e1.call(e, "callee")
                      );
                    },
                nD = ev.isArray,
                nM = e7
                  ? tT(e7)
                  : function (e) {
                      return nW(e) && iX(e) == S;
                    };
              function nj(e) {
                return null != e && nH(e.length) && !nK(e);
              }
              function n$(e) {
                return nW(e) && nj(e);
              }
              var nz = tZ || aQ,
                nL = te
                  ? tT(te)
                  : function (e) {
                      return nW(e) && iX(e) == p;
                    };
              function nU(e) {
                if (!nW(e)) return !1;
                var t = iX(e);
                return (
                  t == d ||
                  "[object DOMException]" == t ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !nG(e))
                );
              }
              function nK(e) {
                if (!nF(e)) return !1;
                var t = iX(e);
                return (
                  t == g ||
                  t == f ||
                  "[object AsyncFunction]" == t ||
                  "[object Proxy]" == t
                );
              }
              function nV(e) {
                return "number" == typeof e && e == n3(e);
              }
              function nH(e) {
                return (
                  "number" == typeof e &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e <= 9007199254740991
                );
              }
              function nF(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              }
              function nW(e) {
                return null != e && "object" == typeof e;
              }
              var nB = tt
                ? tT(tt)
                : function (e) {
                    return nW(e) && sm(e) == y;
                  };
              function nJ(e) {
                return "number" == typeof e || (nW(e) && iX(e) == m);
              }
              function nG(e) {
                if (!nW(e) || iX(e) != v) return !1;
                var t = eW(e);
                if (null === t) return !0;
                var i = ek.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof i && i instanceof i && eq.call(i) == eM
                );
              }
              var nY = ti
                  ? tT(ti)
                  : function (e) {
                      return nW(e) && iX(e) == _;
                    },
                nQ = tr
                  ? tT(tr)
                  : function (e) {
                      return nW(e) && sm(e) == b;
                    };
              function nZ(e) {
                return "string" == typeof e || (!nD(e) && nW(e) && iX(e) == I);
              }
              function nX(e) {
                return "symbol" == typeof e || (nW(e) && iX(e) == E);
              }
              var n0 = ts
                  ? tT(ts)
                  : function (e) {
                      return nW(e) && nH(e.length) && !!eY[iX(e)];
                    },
                n1 = r3(rt),
                n2 = r3(function (e, t) {
                  return e <= t;
                });
              function n9(e) {
                if (!e) return [];
                if (nj(e)) return nZ(e) ? tH(e) : rK(e);
                if (e3 && e[e3])
                  return (function (e) {
                    for (var t, i = []; !(t = e.next()).done; ) i.push(t.value);
                    return i;
                  })(e[e3]());
                var t = sm(e);
                return (t == y ? tz : t == b ? tK : ab)(e);
              }
              function n5(e) {
                return e
                  ? (e = n4(e)) === a || e === -a
                    ? (e < 0 ? -1 : 1) * 17976931348623157e292
                    : e == e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0;
              }
              function n3(e) {
                var t = n5(e),
                  i = t % 1;
                return t == t ? (i ? t - i : t) : 0;
              }
              function n6(e) {
                return e ? iD(n3(e), 0, 4294967295) : 0;
              }
              function n4(e) {
                if ("number" == typeof e) return e;
                if (nX(e)) return o;
                if (nF(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = nF(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = tx(e);
                var i = ec.test(e);
                return i || el.test(e)
                  ? e0(e.slice(2), i ? 2 : 8)
                  : eo.test(e)
                  ? o
                  : +e;
              }
              function n8(e) {
                return rV(e, ad(e));
              }
              function n7(e) {
                return null == e ? "" : rE(e);
              }
              var ae = rF(function (e, t) {
                  if (sC(t) || nj(t)) {
                    rV(t, ap(t), e);
                    return;
                  }
                  for (var i in t) ek.call(t, i) && ix(e, i, t[i]);
                }),
                at = rF(function (e, t) {
                  rV(t, ad(t), e);
                }),
                ai = rF(function (e, t, i, r) {
                  rV(t, ad(t), e, r);
                }),
                ar = rF(function (e, t, i, r) {
                  rV(t, ap(t), e, r);
                }),
                as = sn(iN),
                an = rd(function (e, t) {
                  e = eE(e);
                  var r = -1,
                    s = t.length,
                    n = s > 2 ? t[2] : i;
                  for (n && sI(t[0], t[1], n) && (s = 1); ++r < s; )
                    for (
                      var a = t[r], o = ad(a), c = -1, h = o.length;
                      ++c < h;

                    ) {
                      var l = o[c],
                        u = e[l];
                      (u === i || (nq(u, ex[l]) && !ek.call(e, l))) &&
                        (e[l] = a[l]);
                    }
                  return e;
                }),
                aa = rd(function (e) {
                  return e.push(i, si), tn(af, i, e);
                });
              function ao(e, t, r) {
                var s = null == e ? i : iQ(e, t);
                return s === i ? r : s;
              }
              function ac(e, t) {
                return null != e && sv(e, t, i2);
              }
              var ah = r0(function (e, t, i) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = eD.call(t)),
                    (e[t] = i);
                }, aD(a$)),
                al = r0(function (e, t, i) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = eD.call(t)),
                    ek.call(e, t) ? e[t].push(i) : (e[t] = [i]);
                }, su),
                au = rd(i5);
              function ap(e) {
                return nj(e) ? iC(e) : re(e);
              }
              function ad(e) {
                return nj(e)
                  ? iC(e, !0)
                  : (function (e) {
                      if (!nF(e))
                        return (function (e) {
                          var t = [];
                          if (null != e) for (var i in eE(e)) t.push(i);
                          return t;
                        })(e);
                      var t = sC(e),
                        i = [];
                      for (var r in e)
                        ("constructor" == r && (t || !ek.call(e, r))) ||
                          i.push(r);
                      return i;
                    })(e);
              }
              var ag = rF(function (e, t, i) {
                  rn(e, t, i);
                }),
                af = rF(function (e, t, i, r) {
                  rn(e, t, i, r);
                }),
                ay = sn(function (e, t) {
                  var i = {};
                  if (null == e) return i;
                  var r = !1;
                  (t = tp(t, function (t) {
                    return (t = rA(t, e)), r || (r = t.length > 1), t;
                  })),
                    rV(e, so(e), i),
                    r && (i = iM(i, 7, sr));
                  for (var s = t.length; s--; ) rS(i, t[s]);
                  return i;
                }),
                am = sn(function (e, t) {
                  return null == e
                    ? {}
                    : rc(e, t, function (t, i) {
                        return ac(e, i);
                      });
                });
              function av(e, t) {
                if (null == e) return {};
                var i = tp(so(e), function (e) {
                  return [e];
                });
                return (
                  (t = su(t)),
                  rc(e, i, function (e, i) {
                    return t(e, i[0]);
                  })
                );
              }
              var aw = r7(ap),
                a_ = r7(ad);
              function ab(e) {
                return null == e ? [] : tq(e, ap(e));
              }
              var aI = rG(function (e, t, i) {
                return (t = t.toLowerCase()), e + (i ? aE(t) : t);
              });
              function aE(e) {
                return aq(n7(e).toLowerCase());
              }
              function aP(e) {
                return (e = n7(e)) && e.replace(ep, tD).replace(eV, "");
              }
              var aS = rG(function (e, t, i) {
                  return e + (i ? "-" : "") + t.toLowerCase();
                }),
                aC = rG(function (e, t, i) {
                  return e + (i ? " " : "") + t.toLowerCase();
                }),
                aR = rJ("toLowerCase"),
                aO = rG(function (e, t, i) {
                  return e + (i ? "_" : "") + t.toLowerCase();
                }),
                ax = rG(function (e, t, i) {
                  return e + (i ? " " : "") + aq(t);
                }),
                aT = rG(function (e, t, i) {
                  return e + (i ? " " : "") + t.toUpperCase();
                }),
                aq = rJ("toUpperCase");
              function ak(e, t, r) {
                var s;
                return (
                  (e = n7(e)),
                  (t = r ? i : t) === i
                    ? ((s = e), eB.test(s))
                      ? e.match(eF) || []
                      : e.match(ei) || []
                    : e.match(t) || []
                );
              }
              var aA = rd(function (e, t) {
                  try {
                    return tn(e, i, t);
                  } catch (e) {
                    return nU(e) ? e : new e_(e);
                  }
                }),
                aN = sn(function (e, t) {
                  return (
                    to(t, function (t) {
                      iA(e, (t = s$(t)), n_(e[t], e));
                    }),
                    e
                  );
                });
              function aD(e) {
                return function () {
                  return e;
                };
              }
              var aM = rZ(),
                aj = rZ(!0);
              function a$(e) {
                return e;
              }
              function az(e) {
                return i7("function" == typeof e ? e : iM(e, 1));
              }
              var aL = rd(function (e, t) {
                  return function (i) {
                    return i5(i, e, t);
                  };
                }),
                aU = rd(function (e, t) {
                  return function (i) {
                    return i5(e, i, t);
                  };
                });
              function aK(e, t, i) {
                var r = ap(t),
                  s = iY(t, r);
                null != i ||
                  (nF(t) && (s.length || !r.length)) ||
                  ((i = t), (t = e), (e = this), (s = iY(t, ap(t))));
                var n = !(nF(i) && "chain" in i) || !!i.chain,
                  a = nK(e);
                return (
                  to(s, function (i) {
                    var r = t[i];
                    (e[i] = r),
                      a &&
                        (e.prototype[i] = function () {
                          var t = this.__chain__;
                          if (n || t) {
                            var i = e(this.__wrapped__);
                            return (
                              (i.__actions__ = rK(this.__actions__)).push({
                                func: r,
                                args: arguments,
                                thisArg: e,
                              }),
                              (i.__chain__ = t),
                              i
                            );
                          }
                          return r.apply(e, td([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function aV() {}
              var aH = r2(tp),
                aF = r2(tc),
                aW = r2(ty);
              function aB(e) {
                return sE(e)
                  ? tP(s$(e))
                  : function (t) {
                      return iQ(t, e);
                    };
              }
              var aJ = r5(),
                aG = r5(!0);
              function aY() {
                return [];
              }
              function aQ() {
                return !1;
              }
              var aZ = r1(function (e, t) {
                  return e + t;
                }, 0),
                aX = r4("ceil"),
                a0 = r1(function (e, t) {
                  return e / t;
                }, 1),
                a1 = r4("floor"),
                a2 = r1(function (e, t) {
                  return e * t;
                }, 1),
                a9 = r4("round"),
                a5 = r1(function (e, t) {
                  return e - t;
                }, 0);
              return (
                (iy.after = function (e, t) {
                  if ("function" != typeof t) throw new eC(r);
                  return (
                    (e = n3(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments);
                    }
                  );
                }),
                (iy.ary = nv),
                (iy.assign = ae),
                (iy.assignIn = at),
                (iy.assignInWith = ai),
                (iy.assignWith = ar),
                (iy.at = as),
                (iy.before = nw),
                (iy.bind = n_),
                (iy.bindAll = aN),
                (iy.bindKey = nb),
                (iy.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return nD(e) ? e : [e];
                }),
                (iy.chain = nr),
                (iy.chunk = function (e, t, r) {
                  t = (r ? sI(e, t, r) : t === i) ? 1 : t2(n3(t), 0);
                  var s = null == e ? 0 : e.length;
                  if (!s || t < 1) return [];
                  for (var n = 0, a = 0, o = ev(tG(s / t)); n < s; )
                    o[a++] = rm(e, n, (n += t));
                  return o;
                }),
                (iy.compact = function (e) {
                  for (
                    var t = -1, i = null == e ? 0 : e.length, r = 0, s = [];
                    ++t < i;

                  ) {
                    var n = e[t];
                    n && (s[r++] = n);
                  }
                  return s;
                }),
                (iy.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var t = ev(e - 1), i = arguments[0], r = e; r--; )
                    t[r - 1] = arguments[r];
                  return td(nD(i) ? rK(i) : [i], iF(t, 1));
                }),
                (iy.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    i = su();
                  return (
                    (e = t
                      ? tp(e, function (e) {
                          if ("function" != typeof e[1]) throw new eC(r);
                          return [i(e[0]), e[1]];
                        })
                      : []),
                    rd(function (i) {
                      for (var r = -1; ++r < t; ) {
                        var s = e[r];
                        if (tn(s[0], this, i)) return tn(s[1], this, i);
                      }
                    })
                  );
                }),
                (iy.conforms = function (e) {
                  var t, i;
                  return (
                    (i = ap((t = iM(e, 1)))),
                    function (e) {
                      return ij(e, t, i);
                    }
                  );
                }),
                (iy.constant = aD),
                (iy.countBy = na),
                (iy.create = function (e, t) {
                  var i = im(e);
                  return null == t ? i : ik(i, t);
                }),
                (iy.curry = function e(t, r, s) {
                  r = s ? i : r;
                  var n = se(t, 8, i, i, i, i, i, r);
                  return (n.placeholder = e.placeholder), n;
                }),
                (iy.curryRight = function e(t, r, s) {
                  r = s ? i : r;
                  var n = se(t, 16, i, i, i, i, i, r);
                  return (n.placeholder = e.placeholder), n;
                }),
                (iy.debounce = nI),
                (iy.defaults = an),
                (iy.defaultsDeep = aa),
                (iy.defer = nE),
                (iy.delay = nP),
                (iy.difference = sU),
                (iy.differenceBy = sK),
                (iy.differenceWith = sV),
                (iy.drop = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? rm(e, (t = r || t === i ? 1 : n3(t)) < 0 ? 0 : t, s)
                    : [];
                }),
                (iy.dropRight = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? rm(
                        e,
                        0,
                        (t = s - (t = r || t === i ? 1 : n3(t))) < 0 ? 0 : t
                      )
                    : [];
                }),
                (iy.dropRightWhile = function (e, t) {
                  return e && e.length ? rR(e, su(t, 3), !0, !0) : [];
                }),
                (iy.dropWhile = function (e, t) {
                  return e && e.length ? rR(e, su(t, 3), !0) : [];
                }),
                (iy.fill = function (e, t, r, s) {
                  var n = null == e ? 0 : e.length;
                  return n
                    ? (r &&
                        "number" != typeof r &&
                        sI(e, t, r) &&
                        ((r = 0), (s = n)),
                      (function (e, t, r, s) {
                        var n = e.length;
                        for (
                          (r = n3(r)) < 0 && (r = -r > n ? 0 : n + r),
                            (s = s === i || s > n ? n : n3(s)) < 0 && (s += n),
                            s = r > s ? 0 : n6(s);
                          r < s;

                        )
                          e[r++] = t;
                        return e;
                      })(e, t, r, s))
                    : [];
                }),
                (iy.filter = function (e, t) {
                  return (nD(e) ? th : iH)(e, su(t, 3));
                }),
                (iy.flatMap = function (e, t) {
                  return iF(ng(e, t), 1);
                }),
                (iy.flatMapDeep = function (e, t) {
                  return iF(ng(e, t), a);
                }),
                (iy.flatMapDepth = function (e, t, r) {
                  return (r = r === i ? 1 : n3(r)), iF(ng(e, t), r);
                }),
                (iy.flatten = sW),
                (iy.flattenDeep = function (e) {
                  return (null == e ? 0 : e.length) ? iF(e, a) : [];
                }),
                (iy.flattenDepth = function (e, t) {
                  return (null == e ? 0 : e.length)
                    ? iF(e, (t = t === i ? 1 : n3(t)))
                    : [];
                }),
                (iy.flip = function (e) {
                  return se(e, 512);
                }),
                (iy.flow = aM),
                (iy.flowRight = aj),
                (iy.fromPairs = function (e) {
                  for (
                    var t = -1, i = null == e ? 0 : e.length, r = {};
                    ++t < i;

                  ) {
                    var s = e[t];
                    r[s[0]] = s[1];
                  }
                  return r;
                }),
                (iy.functions = function (e) {
                  return null == e ? [] : iY(e, ap(e));
                }),
                (iy.functionsIn = function (e) {
                  return null == e ? [] : iY(e, ad(e));
                }),
                (iy.groupBy = nu),
                (iy.initial = function (e) {
                  return (null == e ? 0 : e.length) ? rm(e, 0, -1) : [];
                }),
                (iy.intersection = sJ),
                (iy.intersectionBy = sG),
                (iy.intersectionWith = sY),
                (iy.invert = ah),
                (iy.invertBy = al),
                (iy.invokeMap = np),
                (iy.iteratee = az),
                (iy.keyBy = nd),
                (iy.keys = ap),
                (iy.keysIn = ad),
                (iy.map = ng),
                (iy.mapKeys = function (e, t) {
                  var i = {};
                  return (
                    (t = su(t, 3)),
                    iJ(e, function (e, r, s) {
                      iA(i, t(e, r, s), e);
                    }),
                    i
                  );
                }),
                (iy.mapValues = function (e, t) {
                  var i = {};
                  return (
                    (t = su(t, 3)),
                    iJ(e, function (e, r, s) {
                      iA(i, r, t(e, r, s));
                    }),
                    i
                  );
                }),
                (iy.matches = function (e) {
                  return rr(iM(e, 1));
                }),
                (iy.matchesProperty = function (e, t) {
                  return rs(e, iM(t, 1));
                }),
                (iy.memoize = nS),
                (iy.merge = ag),
                (iy.mergeWith = af),
                (iy.method = aL),
                (iy.methodOf = aU),
                (iy.mixin = aK),
                (iy.negate = nC),
                (iy.nthArg = function (e) {
                  return (
                    (e = n3(e)),
                    rd(function (t) {
                      return ra(t, e);
                    })
                  );
                }),
                (iy.omit = ay),
                (iy.omitBy = function (e, t) {
                  return av(e, nC(su(t)));
                }),
                (iy.once = function (e) {
                  return nw(2, e);
                }),
                (iy.orderBy = function (e, t, r, s) {
                  return null == e
                    ? []
                    : (nD(t) || (t = null == t ? [] : [t]),
                      nD((r = s ? i : r)) || (r = null == r ? [] : [r]),
                      ro(e, t, r));
                }),
                (iy.over = aH),
                (iy.overArgs = nR),
                (iy.overEvery = aF),
                (iy.overSome = aW),
                (iy.partial = nO),
                (iy.partialRight = nx),
                (iy.partition = nf),
                (iy.pick = am),
                (iy.pickBy = av),
                (iy.property = aB),
                (iy.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? i : iQ(e, t);
                  };
                }),
                (iy.pull = sZ),
                (iy.pullAll = sX),
                (iy.pullAllBy = function (e, t, i) {
                  return e && e.length && t && t.length
                    ? rh(e, t, su(i, 2))
                    : e;
                }),
                (iy.pullAllWith = function (e, t, r) {
                  return e && e.length && t && t.length ? rh(e, t, i, r) : e;
                }),
                (iy.pullAt = s0),
                (iy.range = aJ),
                (iy.rangeRight = aG),
                (iy.rearg = nT),
                (iy.reject = function (e, t) {
                  return (nD(e) ? th : iH)(e, nC(su(t, 3)));
                }),
                (iy.remove = function (e, t) {
                  var i = [];
                  if (!(e && e.length)) return i;
                  var r = -1,
                    s = [],
                    n = e.length;
                  for (t = su(t, 3); ++r < n; ) {
                    var a = e[r];
                    t(a, r, e) && (i.push(a), s.push(r));
                  }
                  return rl(e, s), i;
                }),
                (iy.rest = function (e, t) {
                  if ("function" != typeof e) throw new eC(r);
                  return rd(e, (t = t === i ? t : n3(t)));
                }),
                (iy.reverse = s1),
                (iy.sampleSize = function (e, t, r) {
                  return (
                    (t = (r ? sI(e, t, r) : t === i) ? 1 : n3(t)),
                    (nD(e)
                      ? function (e, t) {
                          return sM(rK(e), iD(t, 0, e.length));
                        }
                      : function (e, t) {
                          var i = ab(e);
                          return sM(i, iD(t, 0, i.length));
                        })(e, t)
                  );
                }),
                (iy.set = function (e, t, i) {
                  return null == e ? e : rg(e, t, i);
                }),
                (iy.setWith = function (e, t, r, s) {
                  return (
                    (s = "function" == typeof s ? s : i),
                    null == e ? e : rg(e, t, r, s)
                  );
                }),
                (iy.shuffle = function (e) {
                  return (
                    nD(e)
                      ? function (e) {
                          return sM(rK(e));
                        }
                      : function (e) {
                          return sM(ab(e));
                        }
                  )(e);
                }),
                (iy.slice = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? (r && "number" != typeof r && sI(e, t, r)
                        ? ((t = 0), (r = s))
                        : ((t = null == t ? 0 : n3(t)),
                          (r = r === i ? s : n3(r))),
                      rm(e, t, r))
                    : [];
                }),
                (iy.sortBy = ny),
                (iy.sortedUniq = function (e) {
                  return e && e.length ? rb(e) : [];
                }),
                (iy.sortedUniqBy = function (e, t) {
                  return e && e.length ? rb(e, su(t, 2)) : [];
                }),
                (iy.split = function (e, t, r) {
                  return (
                    r && "number" != typeof r && sI(e, t, r) && (t = r = i),
                    (r = r === i ? 4294967295 : r >>> 0)
                      ? (e = n7(e)) &&
                        ("string" == typeof t || (null != t && !nY(t))) &&
                        !(t = rE(t)) &&
                        t$(e)
                        ? rN(tH(e), 0, r)
                        : e.split(t, r)
                      : []
                  );
                }),
                (iy.spread = function (e, t) {
                  if ("function" != typeof e) throw new eC(r);
                  return (
                    (t = null == t ? 0 : t2(n3(t), 0)),
                    rd(function (i) {
                      var r = i[t],
                        s = rN(i, 0, t);
                      return r && td(s, r), tn(e, this, s);
                    })
                  );
                }),
                (iy.tail = function (e) {
                  var t = null == e ? 0 : e.length;
                  return t ? rm(e, 1, t) : [];
                }),
                (iy.take = function (e, t, r) {
                  return e && e.length
                    ? rm(e, 0, (t = r || t === i ? 1 : n3(t)) < 0 ? 0 : t)
                    : [];
                }),
                (iy.takeRight = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? rm(
                        e,
                        (t = s - (t = r || t === i ? 1 : n3(t))) < 0 ? 0 : t,
                        s
                      )
                    : [];
                }),
                (iy.takeRightWhile = function (e, t) {
                  return e && e.length ? rR(e, su(t, 3), !1, !0) : [];
                }),
                (iy.takeWhile = function (e, t) {
                  return e && e.length ? rR(e, su(t, 3)) : [];
                }),
                (iy.tap = function (e, t) {
                  return t(e), e;
                }),
                (iy.throttle = function (e, t, i) {
                  var s = !0,
                    n = !0;
                  if ("function" != typeof e) throw new eC(r);
                  return (
                    nF(i) &&
                      ((s = "leading" in i ? !!i.leading : s),
                      (n = "trailing" in i ? !!i.trailing : n)),
                    nI(e, t, { leading: s, maxWait: t, trailing: n })
                  );
                }),
                (iy.thru = ns),
                (iy.toArray = n9),
                (iy.toPairs = aw),
                (iy.toPairsIn = a_),
                (iy.toPath = function (e) {
                  return nD(e) ? tp(e, s$) : nX(e) ? [e] : rK(sj(n7(e)));
                }),
                (iy.toPlainObject = n8),
                (iy.transform = function (e, t, i) {
                  var r = nD(e),
                    s = r || nz(e) || n0(e);
                  if (((t = su(t, 4)), null == i)) {
                    var n = e && e.constructor;
                    i = s
                      ? r
                        ? new n()
                        : []
                      : nF(e) && nK(n)
                      ? im(eW(e))
                      : {};
                  }
                  return (
                    (s ? to : iJ)(e, function (e, r, s) {
                      return t(i, e, r, s);
                    }),
                    i
                  );
                }),
                (iy.unary = function (e) {
                  return nv(e, 1);
                }),
                (iy.union = s2),
                (iy.unionBy = s9),
                (iy.unionWith = s5),
                (iy.uniq = function (e) {
                  return e && e.length ? rP(e) : [];
                }),
                (iy.uniqBy = function (e, t) {
                  return e && e.length ? rP(e, su(t, 2)) : [];
                }),
                (iy.uniqWith = function (e, t) {
                  return (
                    (t = "function" == typeof t ? t : i),
                    e && e.length ? rP(e, i, t) : []
                  );
                }),
                (iy.unset = function (e, t) {
                  return null == e || rS(e, t);
                }),
                (iy.unzip = s3),
                (iy.unzipWith = s6),
                (iy.update = function (e, t, i) {
                  return null == e ? e : rC(e, t, rk(i));
                }),
                (iy.updateWith = function (e, t, r, s) {
                  return (
                    (s = "function" == typeof s ? s : i),
                    null == e ? e : rC(e, t, rk(r), s)
                  );
                }),
                (iy.values = ab),
                (iy.valuesIn = function (e) {
                  return null == e ? [] : tq(e, ad(e));
                }),
                (iy.without = s4),
                (iy.words = ak),
                (iy.wrap = function (e, t) {
                  return nO(rk(t), e);
                }),
                (iy.xor = s8),
                (iy.xorBy = s7),
                (iy.xorWith = ne),
                (iy.zip = nt),
                (iy.zipObject = function (e, t) {
                  return rT(e || [], t || [], ix);
                }),
                (iy.zipObjectDeep = function (e, t) {
                  return rT(e || [], t || [], rg);
                }),
                (iy.zipWith = ni),
                (iy.entries = aw),
                (iy.entriesIn = a_),
                (iy.extend = at),
                (iy.extendWith = ai),
                aK(iy, iy),
                (iy.add = aZ),
                (iy.attempt = aA),
                (iy.camelCase = aI),
                (iy.capitalize = aE),
                (iy.ceil = aX),
                (iy.clamp = function (e, t, r) {
                  return (
                    r === i && ((r = t), (t = i)),
                    r !== i && (r = (r = n4(r)) == r ? r : 0),
                    t !== i && (t = (t = n4(t)) == t ? t : 0),
                    iD(n4(e), t, r)
                  );
                }),
                (iy.clone = function (e) {
                  return iM(e, 4);
                }),
                (iy.cloneDeep = function (e) {
                  return iM(e, 5);
                }),
                (iy.cloneDeepWith = function (e, t) {
                  return iM(e, 5, (t = "function" == typeof t ? t : i));
                }),
                (iy.cloneWith = function (e, t) {
                  return iM(e, 4, (t = "function" == typeof t ? t : i));
                }),
                (iy.conformsTo = function (e, t) {
                  return null == t || ij(e, t, ap(t));
                }),
                (iy.deburr = aP),
                (iy.defaultTo = function (e, t) {
                  return null == e || e != e ? t : e;
                }),
                (iy.divide = a0),
                (iy.endsWith = function (e, t, r) {
                  (e = n7(e)), (t = rE(t));
                  var s = e.length,
                    n = (r = r === i ? s : iD(n3(r), 0, s));
                  return (r -= t.length) >= 0 && e.slice(r, n) == t;
                }),
                (iy.eq = nq),
                (iy.escape = function (e) {
                  return (e = n7(e)) && K.test(e) ? e.replace(L, tM) : e;
                }),
                (iy.escapeRegExp = function (e) {
                  return (e = n7(e)) && Y.test(e) ? e.replace(G, "\\$&") : e;
                }),
                (iy.every = function (e, t, r) {
                  var s = nD(e) ? tc : iK;
                  return r && sI(e, t, r) && (t = i), s(e, su(t, 3));
                }),
                (iy.find = no),
                (iy.findIndex = sH),
                (iy.findKey = function (e, t) {
                  return tv(e, su(t, 3), iJ);
                }),
                (iy.findLast = nc),
                (iy.findLastIndex = sF),
                (iy.findLastKey = function (e, t) {
                  return tv(e, su(t, 3), iG);
                }),
                (iy.floor = a1),
                (iy.forEach = nh),
                (iy.forEachRight = nl),
                (iy.forIn = function (e, t) {
                  return null == e ? e : iW(e, su(t, 3), ad);
                }),
                (iy.forInRight = function (e, t) {
                  return null == e ? e : iB(e, su(t, 3), ad);
                }),
                (iy.forOwn = function (e, t) {
                  return e && iJ(e, su(t, 3));
                }),
                (iy.forOwnRight = function (e, t) {
                  return e && iG(e, su(t, 3));
                }),
                (iy.get = ao),
                (iy.gt = nk),
                (iy.gte = nA),
                (iy.has = function (e, t) {
                  return null != e && sv(e, t, i1);
                }),
                (iy.hasIn = ac),
                (iy.head = sB),
                (iy.identity = a$),
                (iy.includes = function (e, t, i, r) {
                  (e = nj(e) ? e : ab(e)), (i = i && !r ? n3(i) : 0);
                  var s = e.length;
                  return (
                    i < 0 && (i = t2(s + i, 0)),
                    nZ(e)
                      ? i <= s && e.indexOf(t, i) > -1
                      : !!s && t_(e, t, i) > -1
                  );
                }),
                (iy.indexOf = function (e, t, i) {
                  var r = null == e ? 0 : e.length;
                  if (!r) return -1;
                  var s = null == i ? 0 : n3(i);
                  return s < 0 && (s = t2(r + s, 0)), t_(e, t, s);
                }),
                (iy.inRange = function (e, t, r) {
                  var s, n, a;
                  return (
                    (t = n5(t)),
                    r === i ? ((r = t), (t = 0)) : (r = n5(r)),
                    (s = e = n4(e)) >= t9((n = t), (a = r)) && s < t2(n, a)
                  );
                }),
                (iy.invoke = au),
                (iy.isArguments = nN),
                (iy.isArray = nD),
                (iy.isArrayBuffer = nM),
                (iy.isArrayLike = nj),
                (iy.isArrayLikeObject = n$),
                (iy.isBoolean = function (e) {
                  return !0 === e || !1 === e || (nW(e) && iX(e) == u);
                }),
                (iy.isBuffer = nz),
                (iy.isDate = nL),
                (iy.isElement = function (e) {
                  return nW(e) && 1 === e.nodeType && !nG(e);
                }),
                (iy.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (
                    nj(e) &&
                    (nD(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      nz(e) ||
                      n0(e) ||
                      nN(e))
                  )
                    return !e.length;
                  var t = sm(e);
                  if (t == y || t == b) return !e.size;
                  if (sC(e)) return !re(e).length;
                  for (var i in e) if (ek.call(e, i)) return !1;
                  return !0;
                }),
                (iy.isEqual = function (e, t) {
                  return i6(e, t);
                }),
                (iy.isEqualWith = function (e, t, r) {
                  var s = (r = "function" == typeof r ? r : i) ? r(e, t) : i;
                  return s === i ? i6(e, t, i, r) : !!s;
                }),
                (iy.isError = nU),
                (iy.isFinite = function (e) {
                  return "number" == typeof e && tX(e);
                }),
                (iy.isFunction = nK),
                (iy.isInteger = nV),
                (iy.isLength = nH),
                (iy.isMap = nB),
                (iy.isMatch = function (e, t) {
                  return e === t || i4(e, t, sd(t));
                }),
                (iy.isMatchWith = function (e, t, r) {
                  return (
                    (r = "function" == typeof r ? r : i), i4(e, t, sd(t), r)
                  );
                }),
                (iy.isNaN = function (e) {
                  return nJ(e) && e != +e;
                }),
                (iy.isNative = function (e) {
                  if (sS(e))
                    throw new e_(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                    );
                  return i8(e);
                }),
                (iy.isNil = function (e) {
                  return null == e;
                }),
                (iy.isNull = function (e) {
                  return null === e;
                }),
                (iy.isNumber = nJ),
                (iy.isObject = nF),
                (iy.isObjectLike = nW),
                (iy.isPlainObject = nG),
                (iy.isRegExp = nY),
                (iy.isSafeInteger = function (e) {
                  return (
                    nV(e) && e >= -9007199254740991 && e <= 9007199254740991
                  );
                }),
                (iy.isSet = nQ),
                (iy.isString = nZ),
                (iy.isSymbol = nX),
                (iy.isTypedArray = n0),
                (iy.isUndefined = function (e) {
                  return e === i;
                }),
                (iy.isWeakMap = function (e) {
                  return nW(e) && sm(e) == P;
                }),
                (iy.isWeakSet = function (e) {
                  return nW(e) && "[object WeakSet]" == iX(e);
                }),
                (iy.join = function (e, t) {
                  return null == e ? "" : t0.call(e, t);
                }),
                (iy.kebabCase = aS),
                (iy.last = sQ),
                (iy.lastIndexOf = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  if (!s) return -1;
                  var n = s;
                  return (
                    r !== i &&
                      (n = (n = n3(r)) < 0 ? t2(s + n, 0) : t9(n, s - 1)),
                    t == t
                      ? (function (e, t, i) {
                          for (var r = i + 1; r-- && e[r] !== t; );
                          return r;
                        })(e, t, n)
                      : tw(e, tI, n, !0)
                  );
                }),
                (iy.lowerCase = aC),
                (iy.lowerFirst = aR),
                (iy.lt = n1),
                (iy.lte = n2),
                (iy.max = function (e) {
                  return e && e.length ? iV(e, a$, i0) : i;
                }),
                (iy.maxBy = function (e, t) {
                  return e && e.length ? iV(e, su(t, 2), i0) : i;
                }),
                (iy.mean = function (e) {
                  return tE(e, a$);
                }),
                (iy.meanBy = function (e, t) {
                  return tE(e, su(t, 2));
                }),
                (iy.min = function (e) {
                  return e && e.length ? iV(e, a$, rt) : i;
                }),
                (iy.minBy = function (e, t) {
                  return e && e.length ? iV(e, su(t, 2), rt) : i;
                }),
                (iy.stubArray = aY),
                (iy.stubFalse = aQ),
                (iy.stubObject = function () {
                  return {};
                }),
                (iy.stubString = function () {
                  return "";
                }),
                (iy.stubTrue = function () {
                  return !0;
                }),
                (iy.multiply = a2),
                (iy.nth = function (e, t) {
                  return e && e.length ? ra(e, n3(t)) : i;
                }),
                (iy.noConflict = function () {
                  return e9._ === this && (e9._ = ej), this;
                }),
                (iy.noop = aV),
                (iy.now = nm),
                (iy.pad = function (e, t, i) {
                  e = n7(e);
                  var r = (t = n3(t)) ? tV(e) : 0;
                  if (!t || r >= t) return e;
                  var s = (t - r) / 2;
                  return r9(tY(s), i) + e + r9(tG(s), i);
                }),
                (iy.padEnd = function (e, t, i) {
                  e = n7(e);
                  var r = (t = n3(t)) ? tV(e) : 0;
                  return t && r < t ? e + r9(t - r, i) : e;
                }),
                (iy.padStart = function (e, t, i) {
                  e = n7(e);
                  var r = (t = n3(t)) ? tV(e) : 0;
                  return t && r < t ? r9(t - r, i) + e : e;
                }),
                (iy.parseInt = function (e, t, i) {
                  return (
                    i || null == t ? (t = 0) : t && (t = +t),
                    t3(n7(e).replace(Q, ""), t || 0)
                  );
                }),
                (iy.random = function (e, t, r) {
                  if (
                    (r && "boolean" != typeof r && sI(e, t, r) && (t = r = i),
                    r === i &&
                      ("boolean" == typeof t
                        ? ((r = t), (t = i))
                        : "boolean" == typeof e && ((r = e), (e = i))),
                    e === i && t === i
                      ? ((e = 0), (t = 1))
                      : ((e = n5(e)),
                        t === i ? ((t = e), (e = 0)) : (t = n5(t))),
                    e > t)
                  ) {
                    var s = e;
                    (e = t), (t = s);
                  }
                  if (r || e % 1 || t % 1) {
                    var n = t6();
                    return t9(
                      e + n * (t - e + eX("1e-" + ((n + "").length - 1))),
                      t
                    );
                  }
                  return ru(e, t);
                }),
                (iy.reduce = function (e, t, i) {
                  var r = nD(e) ? tg : tC,
                    s = arguments.length < 3;
                  return r(e, su(t, 4), i, s, iL);
                }),
                (iy.reduceRight = function (e, t, i) {
                  var r = nD(e) ? tf : tC,
                    s = arguments.length < 3;
                  return r(e, su(t, 4), i, s, iU);
                }),
                (iy.repeat = function (e, t, r) {
                  return (
                    (t = (r ? sI(e, t, r) : t === i) ? 1 : n3(t)), rp(n7(e), t)
                  );
                }),
                (iy.replace = function () {
                  var e = arguments,
                    t = n7(e[0]);
                  return e.length < 3 ? t : t.replace(e[1], e[2]);
                }),
                (iy.result = function (e, t, r) {
                  t = rA(t, e);
                  var s = -1,
                    n = t.length;
                  for (n || ((n = 1), (e = i)); ++s < n; ) {
                    var a = null == e ? i : e[s$(t[s])];
                    a === i && ((s = n), (a = r)), (e = nK(a) ? a.call(e) : a);
                  }
                  return e;
                }),
                (iy.round = a9),
                (iy.runInContext = e),
                (iy.sample = function (e) {
                  return (
                    nD(e)
                      ? iR
                      : function (e) {
                          return iR(ab(e));
                        }
                  )(e);
                }),
                (iy.size = function (e) {
                  if (null == e) return 0;
                  if (nj(e)) return nZ(e) ? tV(e) : e.length;
                  var t = sm(e);
                  return t == y || t == b ? e.size : re(e).length;
                }),
                (iy.snakeCase = aO),
                (iy.some = function (e, t, r) {
                  var s = nD(e) ? ty : rv;
                  return r && sI(e, t, r) && (t = i), s(e, su(t, 3));
                }),
                (iy.sortedIndex = function (e, t) {
                  return rw(e, t);
                }),
                (iy.sortedIndexBy = function (e, t, i) {
                  return r_(e, t, su(i, 2));
                }),
                (iy.sortedIndexOf = function (e, t) {
                  var i = null == e ? 0 : e.length;
                  if (i) {
                    var r = rw(e, t);
                    if (r < i && nq(e[r], t)) return r;
                  }
                  return -1;
                }),
                (iy.sortedLastIndex = function (e, t) {
                  return rw(e, t, !0);
                }),
                (iy.sortedLastIndexBy = function (e, t, i) {
                  return r_(e, t, su(i, 2), !0);
                }),
                (iy.sortedLastIndexOf = function (e, t) {
                  if (null == e ? 0 : e.length) {
                    var i = rw(e, t, !0) - 1;
                    if (nq(e[i], t)) return i;
                  }
                  return -1;
                }),
                (iy.startCase = ax),
                (iy.startsWith = function (e, t, i) {
                  return (
                    (e = n7(e)),
                    (i = null == i ? 0 : iD(n3(i), 0, e.length)),
                    (t = rE(t)),
                    e.slice(i, i + t.length) == t
                  );
                }),
                (iy.subtract = a5),
                (iy.sum = function (e) {
                  return e && e.length ? tR(e, a$) : 0;
                }),
                (iy.sumBy = function (e, t) {
                  return e && e.length ? tR(e, su(t, 2)) : 0;
                }),
                (iy.template = function (e, t, r) {
                  var s = iy.templateSettings;
                  r && sI(e, t, r) && (t = i),
                    (e = n7(e)),
                    (t = ai({}, t, s, st));
                  var n,
                    a,
                    o = ai({}, t.imports, s.imports, st),
                    c = ap(o),
                    h = tq(o, c),
                    l = 0,
                    u = t.interpolate || ed,
                    p = "__p += '",
                    d = eP(
                      (t.escape || ed).source +
                        "|" +
                        u.source +
                        "|" +
                        (u === F ? en : ed).source +
                        "|" +
                        (t.evaluate || ed).source +
                        "|$",
                      "g"
                    ),
                    g =
                      "//# sourceURL=" +
                      (ek.call(t, "sourceURL")
                        ? (t.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++eG + "]") +
                      `
`;
                  e.replace(d, function (t, i, r, s, o, c) {
                    return (
                      r || (r = s),
                      (p += e.slice(l, c).replace(eg, tj)),
                      i &&
                        ((n = !0),
                        (p +=
                          `' +
__e(` +
                          i +
                          `) +
'`)),
                      o &&
                        ((a = !0),
                        (p +=
                          `';
` +
                          o +
                          `;
__p += '`)),
                      r &&
                        (p +=
                          `' +
((__t = (` +
                          r +
                          `)) == null ? '' : __t) +
'`),
                      (l = c + t.length),
                      t
                    );
                  }),
                    (p += `';
`);
                  var f = ek.call(t, "variable") && t.variable;
                  if (f) {
                    if (er.test(f))
                      throw new e_(
                        "Invalid `variable` option passed into `_.template`"
                      );
                  } else
                    p =
                      `with (obj) {
` +
                      p +
                      `
}
`;
                  (p = (a ? p.replace(M, "") : p)
                    .replace(j, "$1")
                    .replace($, "$1;")),
                    (p =
                      "function(" +
                      (f || "obj") +
                      `) {
` +
                      (f
                        ? ""
                        : `obj || (obj = {});
`) +
                      "var __t, __p = ''" +
                      (n ? ", __e = _.escape" : "") +
                      (a
                        ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                        : `;
`) +
                      p +
                      `return __p
}`);
                  var y = aA(function () {
                    return eb(c, g + "return " + p).apply(i, h);
                  });
                  if (((y.source = p), nU(y))) throw y;
                  return y;
                }),
                (iy.times = function (e, t) {
                  if ((e = n3(e)) < 1 || e > 9007199254740991) return [];
                  var i = 4294967295,
                    r = t9(e, 4294967295);
                  (t = su(t)), (e -= 4294967295);
                  for (var s = tO(r, t); ++i < e; ) t(i);
                  return s;
                }),
                (iy.toFinite = n5),
                (iy.toInteger = n3),
                (iy.toLength = n6),
                (iy.toLower = function (e) {
                  return n7(e).toLowerCase();
                }),
                (iy.toNumber = n4),
                (iy.toSafeInteger = function (e) {
                  return e
                    ? iD(n3(e), -9007199254740991, 9007199254740991)
                    : 0 === e
                    ? e
                    : 0;
                }),
                (iy.toString = n7),
                (iy.toUpper = function (e) {
                  return n7(e).toUpperCase();
                }),
                (iy.trim = function (e, t, r) {
                  if ((e = n7(e)) && (r || t === i)) return tx(e);
                  if (!e || !(t = rE(t))) return e;
                  var s = tH(e),
                    n = tH(t),
                    a = tA(s, n),
                    o = tN(s, n) + 1;
                  return rN(s, a, o).join("");
                }),
                (iy.trimEnd = function (e, t, r) {
                  if ((e = n7(e)) && (r || t === i))
                    return e.slice(0, tF(e) + 1);
                  if (!e || !(t = rE(t))) return e;
                  var s = tH(e),
                    n = tN(s, tH(t)) + 1;
                  return rN(s, 0, n).join("");
                }),
                (iy.trimStart = function (e, t, r) {
                  if ((e = n7(e)) && (r || t === i)) return e.replace(Q, "");
                  if (!e || !(t = rE(t))) return e;
                  var s = tH(e),
                    n = tA(s, tH(t));
                  return rN(s, n).join("");
                }),
                (iy.truncate = function (e, t) {
                  var r = 30,
                    s = "...";
                  if (nF(t)) {
                    var n = "separator" in t ? t.separator : n;
                    (r = "length" in t ? n3(t.length) : r),
                      (s = "omission" in t ? rE(t.omission) : s);
                  }
                  var a = (e = n7(e)).length;
                  if (t$(e)) {
                    var o = tH(e);
                    a = o.length;
                  }
                  if (r >= a) return e;
                  var c = r - tV(s);
                  if (c < 1) return s;
                  var h = o ? rN(o, 0, c).join("") : e.slice(0, c);
                  if (n === i) return h + s;
                  if ((o && (c += h.length - c), nY(n))) {
                    if (e.slice(c).search(n)) {
                      var l,
                        u = h;
                      for (
                        n.global || (n = eP(n.source, n7(ea.exec(n)) + "g")),
                          n.lastIndex = 0;
                        (l = n.exec(u));

                      )
                        var p = l.index;
                      h = h.slice(0, p === i ? c : p);
                    }
                  } else if (e.indexOf(rE(n), c) != c) {
                    var d = h.lastIndexOf(n);
                    d > -1 && (h = h.slice(0, d));
                  }
                  return h + s;
                }),
                (iy.unescape = function (e) {
                  return (e = n7(e)) && U.test(e) ? e.replace(z, tW) : e;
                }),
                (iy.uniqueId = function (e) {
                  var t = ++eA;
                  return n7(e) + t;
                }),
                (iy.upperCase = aT),
                (iy.upperFirst = aq),
                (iy.each = nh),
                (iy.eachRight = nl),
                (iy.first = sB),
                aK(
                  iy,
                  ((em = {}),
                  iJ(iy, function (e, t) {
                    ek.call(iy.prototype, t) || (em[t] = e);
                  }),
                  em),
                  { chain: !1 }
                ),
                (iy.VERSION = "4.17.21"),
                to(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    iy[e].placeholder = iy;
                  }
                ),
                to(["drop", "take"], function (e, t) {
                  (i_.prototype[e] = function (r) {
                    r = r === i ? 1 : t2(n3(r), 0);
                    var s =
                      this.__filtered__ && !t ? new i_(this) : this.clone();
                    return (
                      s.__filtered__
                        ? (s.__takeCount__ = t9(r, s.__takeCount__))
                        : s.__views__.push({
                            size: t9(r, 4294967295),
                            type: e + (s.__dir__ < 0 ? "Right" : ""),
                          }),
                      s
                    );
                  }),
                    (i_.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                to(["filter", "map", "takeWhile"], function (e, t) {
                  var i = t + 1,
                    r = 1 == i || 3 == i;
                  i_.prototype[e] = function (e) {
                    var t = this.clone();
                    return (
                      t.__iteratees__.push({ iteratee: su(e, 3), type: i }),
                      (t.__filtered__ = t.__filtered__ || r),
                      t
                    );
                  };
                }),
                to(["head", "last"], function (e, t) {
                  var i = "take" + (t ? "Right" : "");
                  i_.prototype[e] = function () {
                    return this[i](1).value()[0];
                  };
                }),
                to(["initial", "tail"], function (e, t) {
                  var i = "drop" + (t ? "" : "Right");
                  i_.prototype[e] = function () {
                    return this.__filtered__ ? new i_(this) : this[i](1);
                  };
                }),
                (i_.prototype.compact = function () {
                  return this.filter(a$);
                }),
                (i_.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (i_.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (i_.prototype.invokeMap = rd(function (e, t) {
                  return "function" == typeof e
                    ? new i_(this)
                    : this.map(function (i) {
                        return i5(i, e, t);
                      });
                })),
                (i_.prototype.reject = function (e) {
                  return this.filter(nC(su(e)));
                }),
                (i_.prototype.slice = function (e, t) {
                  e = n3(e);
                  var r = this;
                  return r.__filtered__ && (e > 0 || t < 0)
                    ? new i_(r)
                    : (e < 0 ? (r = r.takeRight(-e)) : e && (r = r.drop(e)),
                      t !== i &&
                        (r = (t = n3(t)) < 0 ? r.dropRight(-t) : r.take(t - e)),
                      r);
                }),
                (i_.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (i_.prototype.toArray = function () {
                  return this.take(4294967295);
                }),
                iJ(i_.prototype, function (e, t) {
                  var r = /^(?:filter|find|map|reject)|While$/.test(t),
                    s = /^(?:head|last)$/.test(t),
                    n = iy[s ? "take" + ("last" == t ? "Right" : "") : t],
                    a = s || /^find/.test(t);
                  n &&
                    (iy.prototype[t] = function () {
                      var t = this.__wrapped__,
                        o = s ? [1] : arguments,
                        c = t instanceof i_,
                        h = o[0],
                        l = c || nD(t),
                        u = function (e) {
                          var t = n.apply(iy, td([e], o));
                          return s && p ? t[0] : t;
                        };
                      l &&
                        r &&
                        "function" == typeof h &&
                        1 != h.length &&
                        (c = l = !1);
                      var p = this.__chain__,
                        d = !!this.__actions__.length,
                        g = a && !p,
                        f = c && !d;
                      if (!a && l) {
                        t = f ? t : new i_(this);
                        var y = e.apply(t, o);
                        return (
                          y.__actions__.push({
                            func: ns,
                            args: [u],
                            thisArg: i,
                          }),
                          new iw(y, p)
                        );
                      }
                      return g && f
                        ? e.apply(this, o)
                        : ((y = this.thru(u)),
                          g ? (s ? y.value()[0] : y.value()) : y);
                    });
                }),
                to(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = eR[e],
                      i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      r = /^(?:pop|shift)$/.test(e);
                    iy.prototype[e] = function () {
                      var e = arguments;
                      if (r && !this.__chain__) {
                        var s = this.value();
                        return t.apply(nD(s) ? s : [], e);
                      }
                      return this[i](function (i) {
                        return t.apply(nD(i) ? i : [], e);
                      });
                    };
                  }
                ),
                iJ(i_.prototype, function (e, t) {
                  var i = iy[t];
                  if (i) {
                    var r = i.name + "";
                    ek.call(ia, r) || (ia[r] = []),
                      ia[r].push({ name: t, func: i });
                  }
                }),
                (ia[rX(i, 2).name] = [{ name: "wrapper", func: i }]),
                (i_.prototype.clone = function () {
                  var e = new i_(this.__wrapped__);
                  return (
                    (e.__actions__ = rK(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = rK(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = rK(this.__views__)),
                    e
                  );
                }),
                (i_.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new i_(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()), (e.__dir__ *= -1);
                  return e;
                }),
                (i_.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    i = nD(e),
                    r = t < 0,
                    s = i ? e.length : 0,
                    n = (function (e, t, i) {
                      for (var r = -1, s = i.length; ++r < s; ) {
                        var n = i[r],
                          a = n.size;
                        switch (n.type) {
                          case "drop":
                            e += a;
                            break;
                          case "dropRight":
                            t -= a;
                            break;
                          case "take":
                            t = t9(t, e + a);
                            break;
                          case "takeRight":
                            e = t2(e, t - a);
                        }
                      }
                      return { start: e, end: t };
                    })(0, s, this.__views__),
                    a = n.start,
                    o = n.end,
                    c = o - a,
                    h = r ? o : a - 1,
                    l = this.__iteratees__,
                    u = l.length,
                    p = 0,
                    d = t9(c, this.__takeCount__);
                  if (!i || (!r && s == c && d == c))
                    return rO(e, this.__actions__);
                  var g = [];
                  e: for (; c-- && p < d; ) {
                    h += t;
                    for (var f = -1, y = e[h]; ++f < u; ) {
                      var m = l[f],
                        v = m.iteratee,
                        w = m.type,
                        _ = v(y);
                      if (2 == w) y = _;
                      else if (!_) {
                        if (1 == w) continue e;
                        break e;
                      }
                    }
                    g[p++] = y;
                  }
                  return g;
                }),
                (iy.prototype.at = nn),
                (iy.prototype.chain = function () {
                  return nr(this);
                }),
                (iy.prototype.commit = function () {
                  return new iw(this.value(), this.__chain__);
                }),
                (iy.prototype.next = function () {
                  this.__values__ === i && (this.__values__ = n9(this.value()));
                  var e = this.__index__ >= this.__values__.length,
                    t = e ? i : this.__values__[this.__index__++];
                  return { done: e, value: t };
                }),
                (iy.prototype.plant = function (e) {
                  for (var t, r = this; r instanceof iv; ) {
                    var s = sL(r);
                    (s.__index__ = 0),
                      (s.__values__ = i),
                      t ? (n.__wrapped__ = s) : (t = s);
                    var n = s;
                    r = r.__wrapped__;
                  }
                  return (n.__wrapped__ = e), t;
                }),
                (iy.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof i_) {
                    var t = e;
                    return (
                      this.__actions__.length && (t = new i_(this)),
                      (t = t.reverse()).__actions__.push({
                        func: ns,
                        args: [s1],
                        thisArg: i,
                      }),
                      new iw(t, this.__chain__)
                    );
                  }
                  return this.thru(s1);
                }),
                (iy.prototype.toJSON =
                  iy.prototype.valueOf =
                  iy.prototype.value =
                    function () {
                      return rO(this.__wrapped__, this.__actions__);
                    }),
                (iy.prototype.first = iy.prototype.head),
                e3 &&
                  (iy.prototype[e3] = function () {
                    return this;
                  }),
                iy
              );
            })();
          e3 ? (((e3.exports = tB)._ = tB), (e5._ = tB)) : (e9._ = tB);
        }.call(i0));
      })(i1, i1.exports);
      var i2 = Object.defineProperty,
        i9 = Object.defineProperties,
        i5 = Object.getOwnPropertyDescriptors,
        i3 = Object.getOwnPropertySymbols,
        i6 = Object.prototype.hasOwnProperty,
        i4 = Object.prototype.propertyIsEnumerable,
        i8 = (e, t, i) =>
          t in e
            ? i2(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        i7 = (e, t) => {
          for (var i in t || (t = {})) i6.call(t, i) && i8(e, i, t[i]);
          if (i3) for (var i of i3(t)) i4.call(t, i) && i8(e, i, t[i]);
          return e;
        },
        re = (e, t) => i9(e, i5(t));
      function rt(e, t, i) {
        var r;
        let s = (0, a.DQe)(e);
        return (
          (null == (r = t.rpcMap) ? void 0 : r[s.reference]) ||
          `https://rpc.walletconnect.com/v1/?chainId=${s.namespace}:${s.reference}&projectId=${i}`
        );
      }
      function ri(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function rr(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function rs(e = {}, t = {}) {
        let i = rn(e),
          r = rn(t);
        return i1.exports.merge(i, r);
      }
      function rn(e) {
        var t, i, r, s;
        let n = {};
        if (!(0, a.L5o)(e)) return n;
        for (let [o, c] of Object.entries(e)) {
          let e = (0, a.gpE)(o) ? [o] : c.chains,
            h = c.methods || [],
            l = c.events || [],
            u = c.rpcMap || {},
            p = (0, a.Maj)(o);
          n[p] = re(i7(i7({}, n[p]), c), {
            chains: (0, a.eGA)(e, null == (t = n[p]) ? void 0 : t.chains),
            methods: (0, a.eGA)(h, null == (i = n[p]) ? void 0 : i.methods),
            events: (0, a.eGA)(l, null == (r = n[p]) ? void 0 : r.events),
            rpcMap: i7(i7({}, u), null == (s = n[p]) ? void 0 : s.rpcMap),
          });
        }
        return n;
      }
      function ra(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function ro(e) {
        let t = {};
        for (let [i, r] of Object.entries(e)) {
          let e = r.methods || [],
            s = r.events || [],
            n = r.accounts || [],
            o = (0, a.gpE)(i) ? [i] : r.chains ? r.chains : rr(r.accounts);
          t[i] = { chains: o, methods: e, events: s, accounts: n };
        }
        return t;
      }
      function rc(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
          ? e
          : Number(e);
      }
      let rh = {},
        rl = (e) => rh[e],
        ru = (e, t) => {
          rh[e] = t;
        };
      class rp {
        constructor(e) {
          (this.name = "polkadot"),
            (this.namespace = e.namespace),
            (this.events = rl("events")),
            (this.client = rl("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iX, `${this.name}:${e}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = ri(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rt(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new en.r(new iG.Z(i, rl("disableProviderPing")));
        }
      }
      var rd = Object.defineProperty,
        rg = Object.defineProperties,
        rf = Object.getOwnPropertyDescriptors,
        ry = Object.getOwnPropertySymbols,
        rm = Object.prototype.hasOwnProperty,
        rv = Object.prototype.propertyIsEnumerable,
        rw = (e, t, i) =>
          t in e
            ? rd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        r_ = (e, t) => {
          for (var i in t || (t = {})) rm.call(t, i) && rw(e, i, t[i]);
          if (ry) for (var i of ry(t)) rv.call(t, i) && rw(e, i, t[i]);
          return e;
        },
        rb = (e, t) => rg(e, rf(t));
      class rI {
        constructor(e) {
          (this.name = "eip155"),
            (this.namespace = e.namespace),
            (this.events = rl("events")),
            (this.client = rl("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
            case "wallet_getCapabilities":
              return await this.getCapabilities(e);
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(iX, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          let i =
            t ||
            rt(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new en.r(new iG.k(i, rl("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = parseInt(ri(t));
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, i;
          let r = e.request.params
              ? null == (t = e.request.params[0])
                ? void 0
                : t.chainId
              : "0x0",
            s = parseInt((r = r.startsWith("0x") ? r : `0x${r}`), 16);
          if (this.isChainApproved(s)) this.setDefaultChain(`${s}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: r }] },
              chainId: null == (i = this.namespace.chains) ? void 0 : i[0],
            }),
              this.setDefaultChain(`${s}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${s}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
        async getCapabilities(e) {
          var t, i, r;
          let s =
            null == (i = null == (t = e.request) ? void 0 : t.params)
              ? void 0
              : i[0];
          if (!s)
            throw Error(
              "Missing address parameter in `wallet_getCapabilities` request"
            );
          let n = this.client.session.get(e.topic),
            a =
              (null == (r = n?.sessionProperties) ? void 0 : r.capabilities) ||
              {};
          if (null != a && a[s]) return a?.[s];
          let o = await this.client.request(e);
          try {
            await this.client.session.update(e.topic, {
              sessionProperties: rb(r_({}, n.sessionProperties || {}), {
                capabilities: rb(r_({}, a || {}), { [s]: o }),
              }),
            });
          } catch (e) {
            console.warn("Failed to update session with capabilities", e);
          }
          return o;
        }
      }
      class rE {
        constructor(e) {
          (this.name = "solana"),
            (this.namespace = e.namespace),
            (this.events = rl("events")),
            (this.client = rl("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iX, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = ri(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rt(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new en.r(new iG.Z(i, rl("disableProviderPing")));
        }
      }
      class rP {
        constructor(e) {
          (this.name = "cosmos"),
            (this.namespace = e.namespace),
            (this.events = rl("events")),
            (this.client = rl("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iX, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = ri(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rt(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new en.r(new iG.Z(i, rl("disableProviderPing")));
        }
      }
      class rS {
        constructor(e) {
          (this.name = "algorand"),
            (this.namespace = e.namespace),
            (this.events = rl("events")),
            (this.client = rl("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            let i =
              t ||
              rt(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          (this.chainId = e),
            this.events.emit(iX, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              e[t] = this.createHttpProvider(
                t,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rt(e, this.namespace, this.client.core.projectId);
          return typeof i > "u"
            ? void 0
            : new en.r(new iG.Z(i, rl("disableProviderPing")));
        }
      }
      class rC {
        constructor(e) {
          (this.name = "cip34"),
            (this.namespace = e.namespace),
            (this.events = rl("events")),
            (this.client = rl("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iX, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              let i = this.getCardanoRPCUrl(t),
                r = ri(t);
              e[r] = this.createHttpProvider(r, i);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          let t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || this.getCardanoRPCUrl(e);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new en.r(new iG.Z(i, rl("disableProviderPing")));
        }
      }
      class rR {
        constructor(e) {
          (this.name = "elrond"),
            (this.namespace = e.namespace),
            (this.events = rl("events")),
            (this.client = rl("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iX, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = ri(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rt(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new en.r(new iG.Z(i, rl("disableProviderPing")));
        }
      }
      class rO {
        constructor(e) {
          (this.name = "multiversx"),
            (this.namespace = e.namespace),
            (this.events = rl("events")),
            (this.client = rl("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iX, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = ri(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rt(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new en.r(new iG.Z(i, rl("disableProviderPing")));
        }
      }
      class rx {
        constructor(e) {
          (this.name = "near"),
            (this.namespace = e.namespace),
            (this.events = rl("events")),
            (this.client = rl("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let i = t || rt(`${this.name}:${e}`, this.namespace);
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          this.events.emit(iX, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              e[t] = this.createHttpProvider(
                t,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rt(e, this.namespace);
          return typeof i > "u"
            ? void 0
            : new en.r(new iG.Z(i, rl("disableProviderPing")));
        }
      }
      class rT {
        constructor(e) {
          (this.name = iZ),
            (this.namespace = e.namespace),
            (this.events = rl("events")),
            (this.client = rl("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          (this.namespace.chains = [
            ...new Set((this.namespace.chains || []).concat(e.chains || [])),
          ]),
            (this.namespace.accounts = [
              ...new Set(
                (this.namespace.accounts || []).concat(e.accounts || [])
              ),
            ]),
            (this.namespace.methods = [
              ...new Set(
                (this.namespace.methods || []).concat(e.methods || [])
              ),
            ]),
            (this.namespace.events = [
              ...new Set((this.namespace.events || []).concat(e.events || [])),
            ]),
            (this.httpProviders = this.createHttpProviders());
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider(e.chainId).request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iX, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          var e, t;
          let i = {};
          return (
            null == (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
              t.forEach((e) => {
                let t = (0, a.DQe)(e);
                i[`${t.namespace}:${t.reference}`] = this.createHttpProvider(e);
              }),
            i
          );
        }
        getHttpProvider(e) {
          let t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rt(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new en.r(new iG.Z(i, rl("disableProviderPing")));
        }
      }
      var rq = Object.defineProperty,
        rk = Object.defineProperties,
        rA = Object.getOwnPropertyDescriptors,
        rN = Object.getOwnPropertySymbols,
        rD = Object.prototype.hasOwnProperty,
        rM = Object.prototype.propertyIsEnumerable,
        rj = (e, t, i) =>
          t in e
            ? rq(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        r$ = (e, t) => {
          for (var i in t || (t = {})) rD.call(t, i) && rj(e, i, t[i]);
          if (rN) for (var i of rN(t)) rM.call(t, i) && rj(e, i, t[i]);
          return e;
        },
        rz = (e, t) => rk(e, rA(t));
      class rL {
        constructor(e) {
          (this.events = new (n())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = e),
            (this.logger =
              "u" > typeof e?.logger && "string" != typeof e?.logger
                ? e.logger
                : (0, K.gw)((0, K.jI)({ level: e?.logger || iY }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new rL(e);
          return await t.initialize(), t;
        }
        async request(e, t, i) {
          let [r, s] = this.validateChain(t);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(r).request({
            request: r$({}, e),
            chainId: `${r}:${s}`,
            topic: this.session.topic,
            expiry: i,
          });
        }
        sendAsync(e, t, i, r) {
          let s = new Date().getTime();
          this.request(e, i, r)
            .then((e) => t(null, (0, ea.formatJsonRpcResult)(s, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: (0, a.D6H)("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        async authenticate(e, t) {
          if (!this.client) throw Error("Sign Client not initialized");
          this.setNamespaces(e), await this.cleanupPendingPairings();
          let { uri: i, response: r } = await this.client.authenticate(e, t);
          i && ((this.uri = i), this.events.emit("display_uri", i));
          let s = await r();
          if (((this.session = s.session), this.session)) {
            let e = ro(this.session.namespaces);
            (this.namespaces = rs(this.namespaces, e)),
              this.persist("namespaces", this.namespaces),
              this.onConnect();
          }
          return s;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          this.shouldAbortPairingAttempt = !1;
          let t = 0;
          do {
            if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
              throw Error("Max auto pairing attempts reached");
            let { uri: i, approval: r } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            i && ((this.uri = i), this.events.emit("display_uri", i)),
              await r()
                .then((e) => {
                  this.session = e;
                  let t = ro(e.namespaces);
                  (this.namespaces = rs(this.namespaces, t)),
                    this.persist("namespaces", this.namespaces);
                })
                .catch((e) => {
                  if (e.message !== iE) throw e;
                  t++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            let [i, r] = this.validateChain(e),
              s = this.getProvider(i);
            s.name === iZ
              ? s.setDefaultChain(`${i}:${r}`, t)
              : s.setDefaultChain(r, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let t = this.client.pairing.getAll();
          if ((0, a.qt8)(t)) {
            for (let i of t)
              e.deletePairings
                ? this.client.core.expirer.set(i.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    i.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            let e = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[e]
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await iJ.init({
              core: this.providerOpts.core,
              logger: this.providerOpts.logger || iY,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
              customStoragePrefix: this.providerOpts.customStoragePrefix,
              telemetryEnabled: this.providerOpts.telemetryEnabled,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let e = [
            ...new Set(
              Object.keys(this.session.namespaces).map((e) => (0, a.Maj)(e))
            ),
          ];
          ru("client", this.client),
            ru("events", this.events),
            ru("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let i = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!i.length) return [];
                  let r = [];
                  return (
                    i.forEach((e) => {
                      let i = t.namespaces[e].accounts;
                      r.push(...i);
                    }),
                    r
                  );
                })(e, this.session),
                i = rr(t),
                r = rz(
                  r$({}, rs(this.namespaces, this.optionalNamespaces)[e]),
                  { accounts: t, chains: i }
                );
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new rI({ namespace: r });
                  break;
                case "algorand":
                  this.rpcProviders[e] = new rS({ namespace: r });
                  break;
                case "solana":
                  this.rpcProviders[e] = new rE({ namespace: r });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new rP({ namespace: r });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new rp({ namespace: r });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new rC({ namespace: r });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new rR({ namespace: r });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new rO({ namespace: r });
                  break;
                case "near":
                  this.rpcProviders[e] = new rx({ namespace: r });
                  break;
                default:
                  this.rpcProviders[iZ]
                    ? this.rpcProviders[iZ].updateNamespace(r)
                    : (this.rpcProviders[iZ] = new rT({ namespace: r }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              let { params: t } = e,
                { event: i } = t;
              if ("accountsChanged" === i.name) {
                let e = i.data;
                e &&
                  (0, a.qt8)(e) &&
                  this.events.emit("accountsChanged", e.map(ra));
              } else if ("chainChanged" === i.name) {
                let e = t.chainId,
                  i = t.event.data,
                  r = (0, a.Maj)(e),
                  s = rc(e) !== rc(i) ? `${r}:${rc(i)}` : e;
                this.onChainChanged(s);
              } else this.events.emit(i.name, i.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: t }) => {
              var i;
              let { namespaces: r } = t,
                s = null == (i = this.client) ? void 0 : i.session.get(e);
              (this.session = rz(r$({}, s), { namespaces: r })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: t });
            }),
            this.client.on("session_delete", async (e) => {
              await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  rz(r$({}, (0, a.D6H)("USER_DISCONNECTED")), { data: e.topic })
                );
            }),
            this.on(iX, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          return this.rpcProviders[e] || this.rpcProviders[iZ];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          let {
            namespaces: t,
            optionalNamespaces: i,
            sessionProperties: r,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            i && Object.keys(i).length && (this.optionalNamespaces = i),
            (this.sessionProperties = r),
            this.persist("namespaces", t),
            this.persist("optionalNamespaces", i);
        }
        validateChain(e) {
          let [t, i] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, i];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => (0, a.Maj)(e))
              .includes(t)
          )
            throw Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && i) return [t, i];
          let r = (0, a.Maj)(Object.keys(this.namespaces)[0]),
            s = this.rpcProviders[r].getDefaultChain();
          return [r, s];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        onChainChanged(e, t = !1) {
          if (!this.namespaces) return;
          let [i, r] = this.validateChain(e);
          r &&
            (t || this.getProvider(i).setDefaultChain(r),
            this.namespaces[i]
              ? (this.namespaces[i].defaultChain = r)
              : this.namespaces[`${i}:${r}`]
              ? (this.namespaces[`${i}:${r}`].defaultChain = r)
              : (this.namespaces[`${i}:${r}`] = { defaultChain: r }),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", r));
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(e, t) {
          this.client.core.storage.setItem(`${iQ}/${e}`, t);
        }
        async getFromStore(e) {
          return await this.client.core.storage.getItem(`${iQ}/${e}`);
        }
      }
      let rU = ["eth_sendTransaction", "personal_sign"],
        rK = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
          "wallet_sendCalls",
          "wallet_getCapabilities",
          "wallet_getCallsStatus",
          "wallet_showCallsStatus",
        ],
        rV = ["chainChanged", "accountsChanged"],
        rH = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var rF = Object.defineProperty,
        rW = Object.defineProperties,
        rB = Object.getOwnPropertyDescriptors,
        rJ = Object.getOwnPropertySymbols,
        rG = Object.prototype.hasOwnProperty,
        rY = Object.prototype.propertyIsEnumerable,
        rQ = (e, t, i) =>
          t in e
            ? rF(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        rZ = (e, t) => {
          for (var i in t || (t = {})) rG.call(t, i) && rQ(e, i, t[i]);
          if (rJ) for (var i of rJ(t)) rY.call(t, i) && rQ(e, i, t[i]);
          return e;
        },
        rX = (e, t) => rW(e, rB(t));
      function r0(e) {
        return Number(e[0].split(":")[1]);
      }
      function r1(e) {
        return `0x${e.toString(16)}`;
      }
      class r2 {
        constructor() {
          (this.events = new s.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (e, t) => (this.events.on(e, t), this)),
            (this.once = (e, t) => (this.events.once(e, t), this)),
            (this.removeListener = (e, t) => (
              this.events.removeListener(e, t), this
            )),
            (this.off = (e, t) => (this.events.off(e, t), this)),
            (this.parseAccount = (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          let t = new r2();
          return await t.initialize(e), t;
        }
        async request(e, t) {
          return await this.signer.request(
            e,
            this.formatChainId(this.chainId),
            t
          );
        }
        sendAsync(e, t, i) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i);
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          let { required: t, optional: i } = (function (e) {
            let {
              chains: t,
              optionalChains: i,
              methods: r,
              optionalMethods: s,
              events: n,
              optionalEvents: o,
              rpcMap: c,
            } = e;
            if (!(0, a.qt8)(t)) throw Error("Invalid chains");
            let h = {
                chains: t,
                methods: r || rU,
                events: n || rV,
                rpcMap: rZ({}, t.length ? { [r0(t)]: c[r0(t)] } : {}),
              },
              l = n?.filter((e) => !rV.includes(e)),
              u = r?.filter((e) => !rU.includes(e));
            if (
              !i &&
              !o &&
              !s &&
              !(null != l && l.length) &&
              !(null != u && u.length)
            )
              return { required: t.length ? h : void 0 };
            let p = {
              chains: [
                ...new Set(
                  (l?.length && u?.length) || !i ? h.chains.concat(i || []) : i
                ),
              ],
              methods: [
                ...new Set(h.methods.concat(null != s && s.length ? s : rK)),
              ],
              events: [
                ...new Set(h.events.concat(null != o && o.length ? o : rH)),
              ],
              rpcMap: c,
            };
            return {
              required: t.length ? h : void 0,
              optional: i.length ? p : void 0,
            };
          })(this.rpc);
          try {
            let r = await new Promise(async (r, s) => {
              var n;
              this.rpc.showQrModal &&
                (null == (n = this.modal) ||
                  n.subscribeModal((e) => {
                    e.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      s(Error("Connection request reset. Please try again.")));
                  })),
                await this.signer
                  .connect(
                    rX(
                      rZ(
                        { namespaces: rZ({}, t && { [this.namespace]: t }) },
                        i && { optionalNamespaces: { [this.namespace]: i } }
                      ),
                      { pairingTopic: e?.pairingTopic }
                    )
                  )
                  .then((e) => {
                    r(e);
                  })
                  .catch((e) => {
                    s(Error(e.message));
                  });
            });
            if (!r) return;
            let s = (0, a.guN)(r.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s),
              this.setAccounts(s),
              this.events.emit("connect", { chainId: r1(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async authenticate(e, t) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts({ chains: e?.chains });
          try {
            let i = await new Promise(async (i, r) => {
                var s;
                this.rpc.showQrModal &&
                  (null == (s = this.modal) ||
                    s.subscribeModal((e) => {
                      e.open ||
                        this.signer.session ||
                        (this.signer.abortPairingAttempt(),
                        r(
                          Error("Connection request reset. Please try again.")
                        ));
                    })),
                  await this.signer
                    .authenticate(rX(rZ({}, e), { chains: this.rpc.chains }), t)
                    .then((e) => {
                      i(e);
                    })
                    .catch((e) => {
                      r(Error(e.message));
                    });
              }),
              r = i.session;
            if (r) {
              let e = (0, a.guN)(r.namespaces, [this.namespace]);
              this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e),
                this.setAccounts(e),
                this.events.emit("connect", { chainId: r1(this.chainId) });
            }
            return i;
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            let { params: t } = e,
              { event: i } = t;
            "accountsChanged" === i.name
              ? ((this.accounts = this.parseAccounts(i.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === i.name
              ? this.setChainId(this.formatChainId(i.data))
              : this.events.emit(i.name, i.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("chainChanged", (e) => {
              let t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", r1(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  rX(rZ({}, (0, a.D6H)("USER_DISCONNECTED")), {
                    data: e.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (e) => {
              var t, i;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (i = this.modal) || i.openModal({ uri: e })),
                this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          let t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", r1(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            let t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          let [t, i, r] = e.split(":");
          return { chainId: `${t}:${i}`, address: r };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, i;
          let r = null != (t = e?.chains) ? t : [],
            s = null != (i = e?.optionalChains) ? i : [],
            n = r.concat(s);
          if (!n.length)
            throw Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          let a = r.length ? e?.methods || rU : [],
            o = r.length ? e?.events || rV : [],
            c = e?.optionalMethods || [],
            h = e?.optionalEvents || [],
            l = e?.rpcMap || this.buildRpcMap(n, e.projectId),
            u = e?.qrModalOptions || void 0;
          return {
            chains: r?.map((e) => this.formatChainId(e)),
            optionalChains: s.map((e) => this.formatChainId(e)),
            methods: a,
            events: o,
            optionalMethods: c,
            optionalEvents: h,
            rpcMap: l,
            showQrModal: !!(null != e && e.showQrModal),
            qrModalOptions: u,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          let i = {};
          return (
            e.forEach((e) => {
              i[e] = this.getRpcUrl(e, t);
            }),
            i
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? r0(this.rpc.chains)
              : r0(this.rpc.optionalChains)),
            (this.signer = await rL.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storageOptions: e.storageOptions,
              customStoragePrefix: e.customStoragePrefix,
              telemetryEnabled: e.telemetryEnabled,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              let { WalletConnectModal: t } = await i
                .e(4978)
                .then(i.bind(i, 44978));
              e = t;
            } catch {
              throw Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (e)
              try {
                this.modal = new e(
                  rZ({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
                );
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          let { chains: t, optionalChains: i, rpcMap: r } = e;
          t &&
            (0, a.qt8)(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e);
            })),
            i &&
              (0, a.qt8)(i) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = i?.map((e) => this.formatChainId(e))),
              i.forEach((e) => {
                this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var i;
          return (
            (null == (i = this.rpc.rpcMap) ? void 0 : i[e]) ||
            `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${
              t || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (this.session)
            try {
              let e = await this.signer.client.core.storage.getItem(
                  `${this.STORAGE_KEY}/chainId`
                ),
                t = this.session.namespaces[`${this.namespace}:${e}`]
                  ? this.session.namespaces[`${this.namespace}:${e}`]
                  : this.session.namespaces[this.namespace];
              this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
                this.setAccounts(t?.accounts);
            } catch (e) {
              this.signer.logger.error(
                "Failed to load persisted session, clearing state..."
              ),
                this.signer.logger.error(e),
                await this.disconnect().catch((e) =>
                  this.signer.logger.warn(e)
                );
            }
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      let r9 = r2;
    },
    16854: function (e) {
      "use strict";
      e.exports = function () {
        throw Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    65383: function (e, t, i) {
      "use strict";
      i.d(t, {
        qY: function () {
          return d;
        },
      });
      var r = i(25566),
        s = function (e, t, i) {
          if (i || 2 == arguments.length)
            for (var r, s = 0, n = t.length; s < n; s++)
              (!r && s in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, s)), (r[s] = t[s]));
          return e.concat(r || Array.prototype.slice.call(t));
        },
        n = function (e, t, i) {
          (this.name = e),
            (this.version = t),
            (this.os = i),
            (this.type = "browser");
        },
        a = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = r.platform);
        },
        o = function (e, t, i, r) {
          (this.name = e),
            (this.version = t),
            (this.os = i),
            (this.bot = r),
            (this.type = "bot-device");
        },
        c = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        h = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        l =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        u = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        p = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function d(e) {
        return e
          ? g(e)
          : "undefined" == typeof document &&
            "undefined" != typeof navigator &&
            "ReactNative" === navigator.product
          ? new h()
          : "undefined" != typeof navigator
          ? g(navigator.userAgent)
          : void 0 !== r && r.version
          ? new a(r.version.slice(1))
          : null;
      }
      function g(e) {
        var t =
          "" !== e &&
          u.reduce(function (t, i) {
            var r = i[0],
              s = i[1];
            if (t) return t;
            var n = s.exec(e);
            return !!n && [r, n];
          }, !1);
        if (!t) return null;
        var i = t[0],
          r = t[1];
        if ("searchbot" === i) return new c();
        var a = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
        a
          ? a.length < 3 &&
            (a = s(
              s([], a, !0),
              (function (e) {
                for (var t = [], i = 0; i < e; i++) t.push("0");
                return t;
              })(3 - a.length),
              !0
            ))
          : (a = []);
        var h = a.join("."),
          d = (function (e) {
            for (var t = 0, i = p.length; t < i; t++) {
              var r = p[t],
                s = r[0];
              if (r[1].exec(e)) return s;
            }
            return null;
          })(e),
          g = l.exec(e);
        return g && g[1] ? new o(i, h, d, g[1]) : new n(i, h, d);
      }
    },
    15586: function (e, t, i) {
      e = i.nmd(e);
      var r,
        s,
        n,
        a = "__lodash_hash_undefined__",
        o = "[object Arguments]",
        c = "[object Array]",
        h = "[object Boolean]",
        l = "[object Date]",
        u = "[object Error]",
        p = "[object Function]",
        d = "[object Map]",
        g = "[object Number]",
        f = "[object Object]",
        y = "[object Promise]",
        m = "[object RegExp]",
        v = "[object Set]",
        w = "[object String]",
        _ = "[object WeakMap]",
        b = "[object ArrayBuffer]",
        I = "[object DataView]",
        E = /^\[object .+?Constructor\]$/,
        P = /^(?:0|[1-9]\d*)$/,
        S = {};
      (S["[object Float32Array]"] =
        S["[object Float64Array]"] =
        S["[object Int8Array]"] =
        S["[object Int16Array]"] =
        S["[object Int32Array]"] =
        S["[object Uint8Array]"] =
        S["[object Uint8ClampedArray]"] =
        S["[object Uint16Array]"] =
        S["[object Uint32Array]"] =
          !0),
        (S[o] =
          S[c] =
          S[b] =
          S[h] =
          S[I] =
          S[l] =
          S[u] =
          S[p] =
          S[d] =
          S[g] =
          S[f] =
          S[m] =
          S[v] =
          S[w] =
          S[_] =
            !1);
      var C = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
        R = "object" == typeof self && self && self.Object === Object && self,
        O = C || R || Function("return this")(),
        x = t && !t.nodeType && t,
        T = x && e && !e.nodeType && e,
        q = T && T.exports === x,
        k = q && C.process,
        A = (function () {
          try {
            return k && k.binding && k.binding("util");
          } catch (e) {}
        })(),
        N = A && A.isTypedArray;
      function D(e) {
        var t = -1,
          i = Array(e.size);
        return (
          e.forEach(function (e, r) {
            i[++t] = [r, e];
          }),
          i
        );
      }
      function M(e) {
        var t = -1,
          i = Array(e.size);
        return (
          e.forEach(function (e) {
            i[++t] = e;
          }),
          i
        );
      }
      var j = Array.prototype,
        $ = Function.prototype,
        z = Object.prototype,
        L = O["__core-js_shared__"],
        U = $.toString,
        K = z.hasOwnProperty,
        V = (r = /[^.]+$/.exec((L && L.keys && L.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + r
          : "",
        H = z.toString,
        F = RegExp(
          "^" +
            U.call(K)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        W = q ? O.Buffer : void 0,
        B = O.Symbol,
        J = O.Uint8Array,
        G = z.propertyIsEnumerable,
        Y = j.splice,
        Q = B ? B.toStringTag : void 0,
        Z = Object.getOwnPropertySymbols,
        X = W ? W.isBuffer : void 0,
        ee =
          ((s = Object.keys),
          (n = Object),
          function (e) {
            return s(n(e));
          }),
        et = eS(O, "DataView"),
        ei = eS(O, "Map"),
        er = eS(O, "Promise"),
        es = eS(O, "Set"),
        en = eS(O, "WeakMap"),
        ea = eS(Object, "create"),
        eo = eO(et),
        ec = eO(ei),
        eh = eO(er),
        el = eO(es),
        eu = eO(en),
        ep = B ? B.prototype : void 0,
        ed = ep ? ep.valueOf : void 0;
      function eg(e) {
        var t = -1,
          i = null == e ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function ef(e) {
        var t = -1,
          i = null == e ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function ey(e) {
        var t = -1,
          i = null == e ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function em(e) {
        var t = -1,
          i = null == e ? 0 : e.length;
        for (this.__data__ = new ey(); ++t < i; ) this.add(e[t]);
      }
      function ev(e) {
        var t = (this.__data__ = new ef(e));
        this.size = t.size;
      }
      function ew(e, t) {
        for (var i = e.length; i--; ) if (ex(e[i][0], t)) return i;
        return -1;
      }
      function e_(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Q && Q in Object(e)
          ? (function (e) {
              var t = K.call(e, Q),
                i = e[Q];
              try {
                e[Q] = void 0;
                var r = !0;
              } catch (e) {}
              var s = H.call(e);
              return r && (t ? (e[Q] = i) : delete e[Q]), s;
            })(e)
          : H.call(e);
      }
      function eb(e) {
        return eM(e) && e_(e) == o;
      }
      function eI(e, t, i, r, s, n) {
        var a = 1 & i,
          o = e.length,
          c = t.length;
        if (o != c && !(a && c > o)) return !1;
        var h = n.get(e);
        if (h && n.get(t)) return h == t;
        var l = -1,
          u = !0,
          p = 2 & i ? new em() : void 0;
        for (n.set(e, t), n.set(t, e); ++l < o; ) {
          var d = e[l],
            g = t[l];
          if (r) var f = a ? r(g, d, l, t, e, n) : r(d, g, l, e, t, n);
          if (void 0 !== f) {
            if (f) continue;
            u = !1;
            break;
          }
          if (p) {
            if (
              !(function (e, t) {
                for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
                  if (t(e[i], i, e)) return !0;
                return !1;
              })(t, function (e, t) {
                if (!p.has(t) && (d === e || s(d, e, i, r, n)))
                  return p.push(t);
              })
            ) {
              u = !1;
              break;
            }
          } else if (!(d === g || s(d, g, i, r, n))) {
            u = !1;
            break;
          }
        }
        return n.delete(e), n.delete(t), u;
      }
      function eE(e) {
        var t;
        return (
          (t = (function (e) {
            return null != e && eN(e.length) && !eA(e)
              ? (function (e, t) {
                  var i,
                    r = eq(e),
                    s = !r && eT(e),
                    n = !r && !s && ek(e),
                    a = !r && !s && !n && ej(e),
                    o = r || s || n || a,
                    c = o
                      ? (function (e, t) {
                          for (var i = -1, r = Array(e); ++i < e; ) r[i] = t(i);
                          return r;
                        })(e.length, String)
                      : [],
                    h = c.length;
                  for (var l in e)
                    K.call(e, l) &&
                      !(
                        o &&
                        ("length" == l ||
                          (n && ("offset" == l || "parent" == l)) ||
                          (a &&
                            ("buffer" == l ||
                              "byteLength" == l ||
                              "byteOffset" == l)) ||
                          ((i = null == (i = h) ? 9007199254740991 : i) &&
                            ("number" == typeof l || P.test(l)) &&
                            l > -1 &&
                            l % 1 == 0 &&
                            l < i))
                      ) &&
                      c.push(l);
                  return c;
                })(e)
              : (function (e) {
                  if (
                    ((t = e && e.constructor),
                    e !== (("function" == typeof t && t.prototype) || z))
                  )
                    return ee(e);
                  var t,
                    i = [];
                  for (var r in Object(e))
                    K.call(e, r) && "constructor" != r && i.push(r);
                  return i;
                })(e);
          })(e)),
          eq(e)
            ? t
            : (function (e, t) {
                for (var i = -1, r = t.length, s = e.length; ++i < r; )
                  e[s + i] = t[i];
                return e;
              })(t, eC(e))
        );
      }
      function eP(e, t) {
        var i,
          r = e.__data__;
        return (
          "string" == (i = typeof t) ||
          "number" == i ||
          "symbol" == i ||
          "boolean" == i
            ? "__proto__" !== t
            : null === t
        )
          ? r["string" == typeof t ? "string" : "hash"]
          : r.map;
      }
      function eS(e, t) {
        var i = null == e ? void 0 : e[t];
        return !(!eD(i) || (V && V in i)) && (eA(i) ? F : E).test(eO(i))
          ? i
          : void 0;
      }
      (eg.prototype.clear = function () {
        (this.__data__ = ea ? ea(null) : {}), (this.size = 0);
      }),
        (eg.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (eg.prototype.get = function (e) {
          var t = this.__data__;
          if (ea) {
            var i = t[e];
            return i === a ? void 0 : i;
          }
          return K.call(t, e) ? t[e] : void 0;
        }),
        (eg.prototype.has = function (e) {
          var t = this.__data__;
          return ea ? void 0 !== t[e] : K.call(t, e);
        }),
        (eg.prototype.set = function (e, t) {
          var i = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (i[e] = ea && void 0 === t ? a : t),
            this
          );
        }),
        (ef.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (ef.prototype.delete = function (e) {
          var t = this.__data__,
            i = ew(t, e);
          return (
            !(i < 0) &&
            (i == t.length - 1 ? t.pop() : Y.call(t, i, 1), --this.size, !0)
          );
        }),
        (ef.prototype.get = function (e) {
          var t = this.__data__,
            i = ew(t, e);
          return i < 0 ? void 0 : t[i][1];
        }),
        (ef.prototype.has = function (e) {
          return ew(this.__data__, e) > -1;
        }),
        (ef.prototype.set = function (e, t) {
          var i = this.__data__,
            r = ew(i, e);
          return r < 0 ? (++this.size, i.push([e, t])) : (i[r][1] = t), this;
        }),
        (ey.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new eg(),
              map: new (ei || ef)(),
              string: new eg(),
            });
        }),
        (ey.prototype.delete = function (e) {
          var t = eP(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (ey.prototype.get = function (e) {
          return eP(this, e).get(e);
        }),
        (ey.prototype.has = function (e) {
          return eP(this, e).has(e);
        }),
        (ey.prototype.set = function (e, t) {
          var i = eP(this, e),
            r = i.size;
          return i.set(e, t), (this.size += i.size == r ? 0 : 1), this;
        }),
        (em.prototype.add = em.prototype.push =
          function (e) {
            return this.__data__.set(e, a), this;
          }),
        (em.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (ev.prototype.clear = function () {
          (this.__data__ = new ef()), (this.size = 0);
        }),
        (ev.prototype.delete = function (e) {
          var t = this.__data__,
            i = t.delete(e);
          return (this.size = t.size), i;
        }),
        (ev.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (ev.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (ev.prototype.set = function (e, t) {
          var i = this.__data__;
          if (i instanceof ef) {
            var r = i.__data__;
            if (!ei || r.length < 199)
              return r.push([e, t]), (this.size = ++i.size), this;
            i = this.__data__ = new ey(r);
          }
          return i.set(e, t), (this.size = i.size), this;
        });
      var eC = Z
          ? function (e) {
              return null == e
                ? []
                : (function (e, t) {
                    for (
                      var i = -1, r = null == e ? 0 : e.length, s = 0, n = [];
                      ++i < r;

                    ) {
                      var a = e[i];
                      t(a, i, e) && (n[s++] = a);
                    }
                    return n;
                  })(Z((e = Object(e))), function (t) {
                    return G.call(e, t);
                  });
            }
          : function () {
              return [];
            },
        eR = e_;
      function eO(e) {
        if (null != e) {
          try {
            return U.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function ex(e, t) {
        return e === t || (e != e && t != t);
      }
      ((et && eR(new et(new ArrayBuffer(1))) != I) ||
        (ei && eR(new ei()) != d) ||
        (er && eR(er.resolve()) != y) ||
        (es && eR(new es()) != v) ||
        (en && eR(new en()) != _)) &&
        (eR = function (e) {
          var t = e_(e),
            i = t == f ? e.constructor : void 0,
            r = i ? eO(i) : "";
          if (r)
            switch (r) {
              case eo:
                return I;
              case ec:
                return d;
              case eh:
                return y;
              case el:
                return v;
              case eu:
                return _;
            }
          return t;
        });
      var eT = eb(
          (function () {
            return arguments;
          })()
        )
          ? eb
          : function (e) {
              return eM(e) && K.call(e, "callee") && !G.call(e, "callee");
            },
        eq = Array.isArray,
        ek =
          X ||
          function () {
            return !1;
          };
      function eA(e) {
        if (!eD(e)) return !1;
        var t = e_(e);
        return (
          t == p ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      }
      function eN(e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      }
      function eD(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function eM(e) {
        return null != e && "object" == typeof e;
      }
      var ej = N
        ? function (e) {
            return N(e);
          }
        : function (e) {
            return eM(e) && eN(e.length) && !!S[e_(e)];
          };
      e.exports = function (e, t) {
        return (function e(t, i, r, s, n) {
          return (
            t === i ||
            (null != t && null != i && (eM(t) || eM(i))
              ? (function (e, t, i, r, s, n) {
                  var a = eq(e),
                    p = eq(t),
                    y = a ? c : eR(e),
                    _ = p ? c : eR(t);
                  (y = y == o ? f : y), (_ = _ == o ? f : _);
                  var E = y == f,
                    P = _ == f,
                    S = y == _;
                  if (S && ek(e)) {
                    if (!ek(t)) return !1;
                    (a = !0), (E = !1);
                  }
                  if (S && !E)
                    return (
                      n || (n = new ev()),
                      a || ej(e)
                        ? eI(e, t, i, r, s, n)
                        : (function (e, t, i, r, s, n, a) {
                            switch (i) {
                              case I:
                                if (
                                  e.byteLength != t.byteLength ||
                                  e.byteOffset != t.byteOffset
                                )
                                  break;
                                (e = e.buffer), (t = t.buffer);
                              case b:
                                if (
                                  e.byteLength != t.byteLength ||
                                  !n(new J(e), new J(t))
                                )
                                  break;
                                return !0;
                              case h:
                              case l:
                              case g:
                                return ex(+e, +t);
                              case u:
                                return (
                                  e.name == t.name && e.message == t.message
                                );
                              case m:
                              case w:
                                return e == t + "";
                              case d:
                                var o = D;
                              case v:
                                var c = 1 & r;
                                if ((o || (o = M), e.size != t.size && !c))
                                  break;
                                var p = a.get(e);
                                if (p) return p == t;
                                (r |= 2), a.set(e, t);
                                var f = eI(o(e), o(t), r, s, n, a);
                                return a.delete(e), f;
                              case "[object Symbol]":
                                if (ed) return ed.call(e) == ed.call(t);
                            }
                            return !1;
                          })(e, t, y, i, r, s, n)
                    );
                  if (!(1 & i)) {
                    var C = E && K.call(e, "__wrapped__"),
                      R = P && K.call(t, "__wrapped__");
                    if (C || R) {
                      var O = C ? e.value() : e,
                        x = R ? t.value() : t;
                      return n || (n = new ev()), s(O, x, i, r, n);
                    }
                  }
                  return (
                    !!S &&
                    (n || (n = new ev()),
                    (function (e, t, i, r, s, n) {
                      var a = 1 & i,
                        o = eE(e),
                        c = o.length;
                      if (c != eE(t).length && !a) return !1;
                      for (var h = c; h--; ) {
                        var l = o[h];
                        if (!(a ? l in t : K.call(t, l))) return !1;
                      }
                      var u = n.get(e);
                      if (u && n.get(t)) return u == t;
                      var p = !0;
                      n.set(e, t), n.set(t, e);
                      for (var d = a; ++h < c; ) {
                        var g = e[(l = o[h])],
                          f = t[l];
                        if (r)
                          var y = a ? r(f, g, l, t, e, n) : r(g, f, l, e, t, n);
                        if (!(void 0 === y ? g === f || s(g, f, i, r, n) : y)) {
                          p = !1;
                          break;
                        }
                        d || (d = "constructor" == l);
                      }
                      if (p && !d) {
                        var m = e.constructor,
                          v = t.constructor;
                        m != v &&
                          "constructor" in e &&
                          "constructor" in t &&
                          !(
                            "function" == typeof m &&
                            m instanceof m &&
                            "function" == typeof v &&
                            v instanceof v
                          ) &&
                          (p = !1);
                      }
                      return n.delete(e), n.delete(t), p;
                    })(e, t, i, r, s, n))
                  );
                })(t, i, r, s, e, n)
              : t != t && i != i)
          );
        })(e, t);
      };
    },
  },
]);
