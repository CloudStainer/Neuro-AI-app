"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [483],
  {
    45872: function (t, e, r) {
      r.d(e, {
        FF: function () {
          return S;
        },
        S5: function () {
          return y;
        },
        Wd: function () {
          return w;
        },
        _t: function () {
          return o;
        },
        bytesToNumberBE: function () {
          return c;
        },
        ci: function () {
          return l;
        },
        dQ: function () {
          return b;
        },
        eV: function () {
          return E;
        },
        gk: function () {
          return f;
        },
        hexToBytes: function () {
          return d;
        },
        n$: function () {
          return I;
        },
        ql: function () {
          return m;
        },
        tL: function () {
          return p;
        },
        ty: function () {
          return g;
        },
      }),
        BigInt(0);
      let n = BigInt(1),
        i = BigInt(2);
      function o(t) {
        return (
          t instanceof Uint8Array ||
          (null != t &&
            "object" == typeof t &&
            "Uint8Array" === t.constructor.name)
        );
      }
      function f(t) {
        if (!o(t)) throw Error("Uint8Array expected");
      }
      let s = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0")
      );
      function l(t) {
        f(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += s[t[r]];
        return e;
      }
      function u(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        return BigInt("" === t ? "0" : `0x${t}`);
      }
      let a = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function h(t) {
        return t >= a._0 && t <= a._9
          ? t - a._0
          : t >= a._A && t <= a._F
          ? t - (a._A - 10)
          : t >= a._a && t <= a._f
          ? t - (a._a - 10)
          : void 0;
      }
      function d(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        let e = t.length,
          r = e / 2;
        if (e % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + e
          );
        let n = new Uint8Array(r);
        for (let e = 0, i = 0; e < r; e++, i += 2) {
          let r = h(t.charCodeAt(i)),
            o = h(t.charCodeAt(i + 1));
          if (void 0 === r || void 0 === o)
            throw Error(
              'hex string expected, got non-hex character "' +
                (t[i] + t[i + 1]) +
                '" at index ' +
                i
            );
          n[e] = 16 * r + o;
        }
        return n;
      }
      function c(t) {
        return u(l(t));
      }
      function g(t) {
        return f(t), u(l(Uint8Array.from(t).reverse()));
      }
      function p(t, e) {
        return d(t.toString(16).padStart(2 * e, "0"));
      }
      function y(t, e) {
        return p(t, e).reverse();
      }
      function m(t, e, r) {
        let n;
        if ("string" == typeof e)
          try {
            n = d(e);
          } catch (r) {
            throw Error(
              `${t} must be valid hex string, got "${e}". Cause: ${r}`
            );
          }
        else if (o(e)) n = Uint8Array.from(e);
        else throw Error(`${t} must be hex string or Uint8Array`);
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(`${t} expected ${r} bytes, got ${i}`);
        return n;
      }
      function E(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          f(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      function w(t, e) {
        if (t.length !== e.length) return !1;
        let r = 0;
        for (let n = 0; n < t.length; n++) r |= t[n] ^ e[n];
        return 0 === r;
      }
      let b = (t) => (i << BigInt(t - 1)) - n,
        B = (t) => new Uint8Array(t),
        x = (t) => Uint8Array.from(t);
      function I(t, e, r) {
        if ("number" != typeof t || t < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof e || e < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = B(t),
          i = B(t),
          o = 0,
          f = () => {
            n.fill(1), i.fill(0), (o = 0);
          },
          s = (...t) => r(i, n, ...t),
          l = (t = B()) => {
            (i = s(x([0]), t)),
              (n = s()),
              0 !== t.length && ((i = s(x([1]), t)), (n = s()));
          },
          u = () => {
            if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
            let t = 0,
              r = [];
            for (; t < e; ) {
              let e = (n = s()).slice();
              r.push(e), (t += n.length);
            }
            return E(...r);
          };
        return (t, e) => {
          let r;
          for (f(), l(t); !(r = e(u())); ) l();
          return f(), r;
        };
      }
      let v = {
        bigint: (t) => "bigint" == typeof t,
        function: (t) => "function" == typeof t,
        boolean: (t) => "boolean" == typeof t,
        string: (t) => "string" == typeof t,
        stringOrUint8Array: (t) => "string" == typeof t || o(t),
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" == typeof t && Number.isSafeInteger(t.outputLen),
      };
      function S(t, e, r = {}) {
        let n = (e, r, n) => {
          let i = v[r];
          if ("function" != typeof i)
            throw Error(`Invalid validator "${r}", expected function`);
          let o = t[e];
          if ((!n || void 0 !== o) && !i(o, t))
            throw Error(
              `Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`
            );
        };
        for (let [t, r] of Object.entries(e)) n(t, r, !1);
        for (let [t, e] of Object.entries(r)) n(t, e, !0);
        return t;
      }
    },
    40483: function (t, e, r) {
      r.d(e, {
        secp256k1: function () {
          return P;
        },
      });
      var n = r(21512),
        i = r(45872);
      let o = BigInt(0),
        f = BigInt(1),
        s = BigInt(2),
        l = BigInt(3),
        u = BigInt(4),
        a = BigInt(5),
        h = BigInt(8);
      function d(t, e) {
        let r = t % e;
        return r >= o ? r : e + r;
      }
      function c(t, e, r) {
        let n = t;
        for (; e-- > o; ) (n *= n), (n %= r);
        return n;
      }
      function g(t, e) {
        if (t === o || e <= o)
          throw Error(
            `invert: expected positive integers, got n=${t} mod=${e}`
          );
        let r = d(t, e),
          n = e,
          i = o,
          s = f,
          l = f,
          u = o;
        for (; r !== o; ) {
          let t = n / r,
            e = n % r,
            o = i - l * t,
            f = s - u * t;
          (n = r), (r = e), (i = l), (s = u), (l = o), (u = f);
        }
        if (n !== f) throw Error("invert: does not exist");
        return d(i, e);
      }
      BigInt(9), BigInt(16);
      let p = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function y(t, e) {
        let r = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function m(t) {
        if ("bigint" != typeof t) throw Error("field order must be bigint");
        return Math.ceil(t.toString(2).length / 8);
      }
      function E(t) {
        let e = m(t);
        return e + Math.ceil(e / 2);
      }
      var w = r(74043),
        b = r(25884);
      class B extends b.kb {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, w.vp)(t);
          let r = (0, b.O0)(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            i = new Uint8Array(n);
          i.set(r.length > n ? t.create().update(r).digest() : r);
          for (let t = 0; t < i.length; t++) i[t] ^= 54;
          this.iHash.update(i), (this.oHash = t.create());
          for (let t = 0; t < i.length; t++) i[t] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(t) {
          return (0, w.Gg)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, w.Gg)(this),
            (0, w.aI)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: o,
            outputLen: f,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = i),
            (t.blockLen = o),
            (t.outputLen = f),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let x = (t, e, r) => new B(t, e).update(r).digest();
      x.create = (t, e) => new B(t, e);
      let I = BigInt(0),
        v = BigInt(1);
      function S(t) {
        return (
          !(function (t) {
            let e = p.reduce((t, e) => ((t[e] = "function"), t), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            });
            (0, i.FF)(t, e);
          })(t.Fp),
          (0, i.FF)(
            t,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...y(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
        );
      }
      let { bytesToNumberBE: A, hexToBytes: q } = i,
        O = {
          Err: class extends Error {
            constructor(t = "") {
              super(t);
            }
          },
          _parseInt(t) {
            let { Err: e } = O;
            if (t.length < 2 || 2 !== t[0])
              throw new e("Invalid signature integer tag");
            let r = t[1],
              n = t.subarray(2, r + 2);
            if (!r || n.length !== r)
              throw new e("Invalid signature integer: wrong length");
            if (128 & n[0]) throw new e("Invalid signature integer: negative");
            if (0 === n[0] && !(128 & n[1]))
              throw new e(
                "Invalid signature integer: unnecessary leading zero"
              );
            return { d: A(n), l: t.subarray(r + 2) };
          },
          toSig(t) {
            let { Err: e } = O,
              r = "string" == typeof t ? q(t) : t;
            i.gk(r);
            let n = r.length;
            if (n < 2 || 48 != r[0]) throw new e("Invalid signature tag");
            if (r[1] !== n - 2)
              throw new e("Invalid signature: incorrect length");
            let { d: o, l: f } = O._parseInt(r.subarray(2)),
              { d: s, l: l } = O._parseInt(f);
            if (l.length)
              throw new e("Invalid signature: left bytes after parsing");
            return { r: o, s };
          },
          hexFromSig(t) {
            let e = (t) => (8 & Number.parseInt(t[0], 16) ? "00" + t : t),
              r = (t) => {
                let e = t.toString(16);
                return 1 & e.length ? `0${e}` : e;
              },
              n = e(r(t.s)),
              i = e(r(t.r)),
              o = n.length / 2,
              f = i.length / 2,
              s = r(o),
              l = r(f);
            return `30${r(f + o + 4)}02${l}${i}02${s}${n}`;
          },
        },
        N = BigInt(0),
        R = BigInt(1),
        _ = (BigInt(2), BigInt(3));
      BigInt(4);
      let L = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        H = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        F = BigInt(1),
        $ = BigInt(2),
        T = (t, e) => (t + e / $) / e,
        z = (function (t, e, r = !1, n = {}) {
          if (t <= o) throw Error(`Expected Field ORDER > 0, got ${t}`);
          let { nBitLength: c, nByteLength: p } = y(t, e);
          if (p > 2048)
            throw Error("Field lengths over 2048 bytes are not supported");
          let m = (function (t) {
              if (t % u === l) {
                let e = (t + f) / u;
                return function (t, r) {
                  let n = t.pow(r, e);
                  if (!t.eql(t.sqr(n), r))
                    throw Error("Cannot find square root");
                  return n;
                };
              }
              if (t % h === a) {
                let e = (t - a) / h;
                return function (t, r) {
                  let n = t.mul(r, s),
                    i = t.pow(n, e),
                    o = t.mul(r, i),
                    f = t.mul(t.mul(o, s), i),
                    l = t.mul(o, t.sub(f, t.ONE));
                  if (!t.eql(t.sqr(l), r))
                    throw Error("Cannot find square root");
                  return l;
                };
              }
              return (function (t) {
                let e, r, n;
                let i = (t - f) / s;
                for (e = t - f, r = 0; e % s === o; e /= s, r++);
                for (
                  n = s;
                  n < t &&
                  (function (t, e, r) {
                    if (r <= o || e < o)
                      throw Error("Expected power/modulo > 0");
                    if (r === f) return o;
                    let n = f;
                    for (; e > o; )
                      e & f && (n = (n * t) % r), (t = (t * t) % r), (e >>= f);
                    return n;
                  })(n, i, t) !==
                    t - f;
                  n++
                );
                if (1 === r) {
                  let e = (t + f) / u;
                  return function (t, r) {
                    let n = t.pow(r, e);
                    if (!t.eql(t.sqr(n), r))
                      throw Error("Cannot find square root");
                    return n;
                  };
                }
                let l = (e + f) / s;
                return function (t, o) {
                  if (t.pow(o, i) === t.neg(t.ONE))
                    throw Error("Cannot find square root");
                  let s = r,
                    u = t.pow(t.mul(t.ONE, n), e),
                    a = t.pow(o, l),
                    h = t.pow(o, e);
                  for (; !t.eql(h, t.ONE); ) {
                    if (t.eql(h, t.ZERO)) return t.ZERO;
                    let e = 1;
                    for (let r = t.sqr(h); e < s && !t.eql(r, t.ONE); e++)
                      r = t.sqr(r);
                    let r = t.pow(u, f << BigInt(s - e - 1));
                    (u = t.sqr(r)),
                      (a = t.mul(a, r)),
                      (h = t.mul(h, u)),
                      (s = e);
                  }
                  return a;
                };
              })(t);
            })(t),
            E = Object.freeze({
              ORDER: t,
              BITS: c,
              BYTES: p,
              MASK: (0, i.dQ)(c),
              ZERO: o,
              ONE: f,
              create: (e) => d(e, t),
              isValid: (e) => {
                if ("bigint" != typeof e)
                  throw Error(
                    `Invalid field element: expected bigint, got ${typeof e}`
                  );
                return o <= e && e < t;
              },
              is0: (t) => t === o,
              isOdd: (t) => (t & f) === f,
              neg: (e) => d(-e, t),
              eql: (t, e) => t === e,
              sqr: (e) => d(e * e, t),
              add: (e, r) => d(e + r, t),
              sub: (e, r) => d(e - r, t),
              mul: (e, r) => d(e * r, t),
              pow: (t, e) =>
                (function (t, e, r) {
                  if (r < o) throw Error("Expected power > 0");
                  if (r === o) return t.ONE;
                  if (r === f) return e;
                  let n = t.ONE,
                    i = e;
                  for (; r > o; )
                    r & f && (n = t.mul(n, i)), (i = t.sqr(i)), (r >>= f);
                  return n;
                })(E, t, e),
              div: (e, r) => d(e * g(r, t), t),
              sqrN: (t) => t * t,
              addN: (t, e) => t + e,
              subN: (t, e) => t - e,
              mulN: (t, e) => t * e,
              inv: (e) => g(e, t),
              sqrt: n.sqrt || ((t) => m(E, t)),
              invertBatch: (t) =>
                (function (t, e) {
                  let r = Array(e.length),
                    n = e.reduce(
                      (e, n, i) => (t.is0(n) ? e : ((r[i] = e), t.mul(e, n))),
                      t.ONE
                    ),
                    i = t.inv(n);
                  return (
                    e.reduceRight(
                      (e, n, i) =>
                        t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n)),
                      i
                    ),
                    r
                  );
                })(E, t),
              cmov: (t, e, r) => (r ? e : t),
              toBytes: (t) => (r ? (0, i.S5)(t, p) : (0, i.tL)(t, p)),
              fromBytes: (t) => {
                if (t.length !== p)
                  throw Error(`Fp.fromBytes: expected ${p}, got ${t.length}`);
                return r ? (0, i.ty)(t) : (0, i.bytesToNumberBE)(t);
              },
            });
          return Object.freeze(E);
        })(L, void 0, void 0, {
          sqrt: function (t) {
            let e = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              o = BigInt(23),
              f = BigInt(44),
              s = BigInt(88),
              l = (t * t * t) % L,
              u = (l * l * t) % L,
              a = (c(u, e, L) * u) % L,
              h = (c(a, e, L) * u) % L,
              d = (c(h, $, L) * l) % L,
              g = (c(d, n, L) * d) % L,
              p = (c(g, i, L) * g) % L,
              y = (c(p, f, L) * p) % L,
              m = (c(y, s, L) * y) % L,
              E = (c(m, f, L) * p) % L,
              w = (c(E, e, L) * u) % L,
              b = (c(w, o, L) * g) % L,
              B = (c(b, r, L) * l) % L,
              x = c(B, $, L);
            if (!z.eql(z.sqr(x), t)) throw Error("Cannot find square root");
            return x;
          },
        }),
        P = (function (t, e) {
          let r = (e) =>
            (function (t) {
              let e = (function (t) {
                  let e = S(t);
                  return (
                    i.FF(
                      e,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...e })
                  );
                })(t),
                { Fp: r, n: n } = e,
                o = r.BYTES + 1,
                s = 2 * r.BYTES + 1;
              function l(t) {
                return d(t, n);
              }
              let {
                  ProjectivePoint: u,
                  normPrivateKeyToScalar: a,
                  weierstrassEquation: h,
                  isWithinCurveOrder: c,
                } = (function (t) {
                  let e = (function (t) {
                      let e = S(t);
                      i.FF(
                        e,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: r, Fp: n, a: o } = e;
                      if (r) {
                        if (!n.eql(o, n.ZERO))
                          throw Error(
                            "Endomorphism can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            "Expected endomorphism with beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...e });
                    })(t),
                    { Fp: r } = e,
                    n =
                      e.toBytes ||
                      ((t, e, n) => {
                        let o = e.toAffine();
                        return i.eV(
                          Uint8Array.from([4]),
                          r.toBytes(o.x),
                          r.toBytes(o.y)
                        );
                      }),
                    o =
                      e.fromBytes ||
                      ((t) => {
                        let e = t.subarray(1);
                        return {
                          x: r.fromBytes(e.subarray(0, r.BYTES)),
                          y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function f(t) {
                    let { a: n, b: i } = e,
                      o = r.sqr(t),
                      f = r.mul(o, t);
                    return r.add(r.add(f, r.mul(t, n)), i);
                  }
                  if (!r.eql(r.sqr(e.Gy), f(e.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function s(t) {
                    return "bigint" == typeof t && N < t && t < e.n;
                  }
                  function l(t) {
                    if (!s(t))
                      throw Error(
                        "Expected valid bigint: 0 < bigint < curve.n"
                      );
                  }
                  function u(t) {
                    let r;
                    let {
                      allowedPrivateKeyLengths: n,
                      nByteLength: o,
                      wrapPrivateKey: f,
                      n: s,
                    } = e;
                    if (n && "bigint" != typeof t) {
                      if (
                        (i._t(t) && (t = i.ci(t)),
                        "string" != typeof t || !n.includes(t.length))
                      )
                        throw Error("Invalid key");
                      t = t.padStart(2 * o, "0");
                    }
                    try {
                      r =
                        "bigint" == typeof t
                          ? t
                          : i.bytesToNumberBE((0, i.ql)("private key", t, o));
                    } catch (e) {
                      throw Error(
                        `private key must be ${o} bytes, hex or bigint, not ${typeof t}`
                      );
                    }
                    return f && (r = d(r, s)), l(r), r;
                  }
                  let a = new Map();
                  function h(t) {
                    if (!(t instanceof c))
                      throw Error("ProjectivePoint expected");
                  }
                  class c {
                    constructor(t, e, n) {
                      if (
                        ((this.px = t),
                        (this.py = e),
                        (this.pz = n),
                        null == t || !r.isValid(t))
                      )
                        throw Error("x required");
                      if (null == e || !r.isValid(e)) throw Error("y required");
                      if (null == n || !r.isValid(n)) throw Error("z required");
                    }
                    static fromAffine(t) {
                      let { x: e, y: n } = t || {};
                      if (!t || !r.isValid(e) || !r.isValid(n))
                        throw Error("invalid affine point");
                      if (t instanceof c)
                        throw Error("projective point not allowed");
                      let i = (t) => r.eql(t, r.ZERO);
                      return i(e) && i(n) ? c.ZERO : new c(e, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(t) {
                      let e = r.invertBatch(t.map((t) => t.pz));
                      return t
                        .map((t, r) => t.toAffine(e[r]))
                        .map(c.fromAffine);
                    }
                    static fromHex(t) {
                      let e = c.fromAffine(o((0, i.ql)("pointHex", t)));
                      return e.assertValidity(), e;
                    }
                    static fromPrivateKey(t) {
                      return c.BASE.multiply(u(t));
                    }
                    _setWindowSize(t) {
                      (this._WINDOW_SIZE = t), a.delete(this);
                    }
                    assertValidity() {
                      if (this.is0()) {
                        if (e.allowInfinityPoint && !r.is0(this.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: n } = this.toAffine();
                      if (!r.isValid(t) || !r.isValid(n))
                        throw Error("bad point: x or y not FE");
                      let i = r.sqr(n),
                        o = f(t);
                      if (!r.eql(i, o))
                        throw Error("bad point: equation left != right");
                      if (!this.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                    }
                    hasEvenY() {
                      let { y: t } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(t);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(t) {
                      h(t);
                      let { px: e, py: n, pz: i } = this,
                        { px: o, py: f, pz: s } = t,
                        l = r.eql(r.mul(e, s), r.mul(o, i)),
                        u = r.eql(r.mul(n, s), r.mul(f, i));
                      return l && u;
                    }
                    negate() {
                      return new c(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: t, b: n } = e,
                        i = r.mul(n, _),
                        { px: o, py: f, pz: s } = this,
                        l = r.ZERO,
                        u = r.ZERO,
                        a = r.ZERO,
                        h = r.mul(o, o),
                        d = r.mul(f, f),
                        g = r.mul(s, s),
                        p = r.mul(o, f);
                      return (
                        (p = r.add(p, p)),
                        (a = r.mul(o, s)),
                        (a = r.add(a, a)),
                        (l = r.mul(t, a)),
                        (u = r.mul(i, g)),
                        (u = r.add(l, u)),
                        (l = r.sub(d, u)),
                        (u = r.add(d, u)),
                        (u = r.mul(l, u)),
                        (l = r.mul(p, l)),
                        (a = r.mul(i, a)),
                        (g = r.mul(t, g)),
                        (p = r.sub(h, g)),
                        (p = r.mul(t, p)),
                        (p = r.add(p, a)),
                        (a = r.add(h, h)),
                        (h = r.add(a, h)),
                        (h = r.add(h, g)),
                        (h = r.mul(h, p)),
                        (u = r.add(u, h)),
                        (g = r.mul(f, s)),
                        (g = r.add(g, g)),
                        (h = r.mul(g, p)),
                        (l = r.sub(l, h)),
                        (a = r.mul(g, d)),
                        (a = r.add(a, a)),
                        new c(l, u, (a = r.add(a, a)))
                      );
                    }
                    add(t) {
                      h(t);
                      let { px: n, py: i, pz: o } = this,
                        { px: f, py: s, pz: l } = t,
                        u = r.ZERO,
                        a = r.ZERO,
                        d = r.ZERO,
                        g = e.a,
                        p = r.mul(e.b, _),
                        y = r.mul(n, f),
                        m = r.mul(i, s),
                        E = r.mul(o, l),
                        w = r.add(n, i),
                        b = r.add(f, s);
                      (w = r.mul(w, b)),
                        (b = r.add(y, m)),
                        (w = r.sub(w, b)),
                        (b = r.add(n, o));
                      let B = r.add(f, l);
                      return (
                        (b = r.mul(b, B)),
                        (B = r.add(y, E)),
                        (b = r.sub(b, B)),
                        (B = r.add(i, o)),
                        (u = r.add(s, l)),
                        (B = r.mul(B, u)),
                        (u = r.add(m, E)),
                        (B = r.sub(B, u)),
                        (d = r.mul(g, b)),
                        (u = r.mul(p, E)),
                        (d = r.add(u, d)),
                        (u = r.sub(m, d)),
                        (d = r.add(m, d)),
                        (a = r.mul(u, d)),
                        (m = r.add(y, y)),
                        (m = r.add(m, y)),
                        (E = r.mul(g, E)),
                        (b = r.mul(p, b)),
                        (m = r.add(m, E)),
                        (E = r.sub(y, E)),
                        (E = r.mul(g, E)),
                        (b = r.add(b, E)),
                        (y = r.mul(m, b)),
                        (a = r.add(a, y)),
                        (y = r.mul(B, b)),
                        (u = r.mul(w, u)),
                        (u = r.sub(u, y)),
                        (y = r.mul(w, m)),
                        (d = r.mul(B, d)),
                        new c(u, a, (d = r.add(d, y)))
                      );
                    }
                    subtract(t) {
                      return this.add(t.negate());
                    }
                    is0() {
                      return this.equals(c.ZERO);
                    }
                    wNAF(t) {
                      return p.wNAFCached(this, a, t, (t) => {
                        let e = r.invertBatch(t.map((t) => t.pz));
                        return t
                          .map((t, r) => t.toAffine(e[r]))
                          .map(c.fromAffine);
                      });
                    }
                    multiplyUnsafe(t) {
                      let n = c.ZERO;
                      if (t === N) return n;
                      if ((l(t), t === R)) return this;
                      let { endo: i } = e;
                      if (!i) return p.unsafeLadder(this, t);
                      let {
                          k1neg: o,
                          k1: f,
                          k2neg: s,
                          k2: u,
                        } = i.splitScalar(t),
                        a = n,
                        h = n,
                        d = this;
                      for (; f > N || u > N; )
                        f & R && (a = a.add(d)),
                          u & R && (h = h.add(d)),
                          (d = d.double()),
                          (f >>= R),
                          (u >>= R);
                      return (
                        o && (a = a.negate()),
                        s && (h = h.negate()),
                        (h = new c(r.mul(h.px, i.beta), h.py, h.pz)),
                        a.add(h)
                      );
                    }
                    multiply(t) {
                      let n, i;
                      l(t);
                      let { endo: o } = e;
                      if (o) {
                        let {
                            k1neg: e,
                            k1: f,
                            k2neg: s,
                            k2: l,
                          } = o.splitScalar(t),
                          { p: u, f: a } = this.wNAF(f),
                          { p: h, f: d } = this.wNAF(l);
                        (u = p.constTimeNegate(e, u)),
                          (h = p.constTimeNegate(s, h)),
                          (h = new c(r.mul(h.px, o.beta), h.py, h.pz)),
                          (n = u.add(h)),
                          (i = a.add(d));
                      } else {
                        let { p: e, f: r } = this.wNAF(t);
                        (n = e), (i = r);
                      }
                      return c.normalizeZ([n, i])[0];
                    }
                    multiplyAndAddUnsafe(t, e, r) {
                      let n = c.BASE,
                        i = (t, e) =>
                          e !== N && e !== R && t.equals(n)
                            ? t.multiply(e)
                            : t.multiplyUnsafe(e),
                        o = i(this, e).add(i(t, r));
                      return o.is0() ? void 0 : o;
                    }
                    toAffine(t) {
                      let { px: e, py: n, pz: i } = this,
                        o = this.is0();
                      null == t && (t = o ? r.ONE : r.inv(i));
                      let f = r.mul(e, t),
                        s = r.mul(n, t),
                        l = r.mul(i, t);
                      if (o) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                      return { x: f, y: s };
                    }
                    isTorsionFree() {
                      let { h: t, isTorsionFree: r } = e;
                      if (t === R) return !0;
                      if (r) return r(c, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: t, clearCofactor: r } = e;
                      return t === R
                        ? this
                        : r
                        ? r(c, this)
                        : this.multiplyUnsafe(e.h);
                    }
                    toRawBytes(t = !0) {
                      return this.assertValidity(), n(c, this, t);
                    }
                    toHex(t = !0) {
                      return i.ci(this.toRawBytes(t));
                    }
                  }
                  (c.BASE = new c(e.Gx, e.Gy, r.ONE)),
                    (c.ZERO = new c(r.ZERO, r.ONE, r.ZERO));
                  let g = e.nBitLength,
                    p = (function (t, e) {
                      let r = (t, e) => {
                          let r = e.negate();
                          return t ? r : e;
                        },
                        n = (t) => ({
                          windows: Math.ceil(e / t) + 1,
                          windowSize: 2 ** (t - 1),
                        });
                      return {
                        constTimeNegate: r,
                        unsafeLadder(e, r) {
                          let n = t.ZERO,
                            i = e;
                          for (; r > I; )
                            r & v && (n = n.add(i)),
                              (i = i.double()),
                              (r >>= v);
                          return n;
                        },
                        precomputeWindow(t, e) {
                          let { windows: r, windowSize: i } = n(e),
                            o = [],
                            f = t,
                            s = f;
                          for (let t = 0; t < r; t++) {
                            (s = f), o.push(s);
                            for (let t = 1; t < i; t++)
                              (s = s.add(f)), o.push(s);
                            f = s.double();
                          }
                          return o;
                        },
                        wNAF(e, i, o) {
                          let { windows: f, windowSize: s } = n(e),
                            l = t.ZERO,
                            u = t.BASE,
                            a = BigInt(2 ** e - 1),
                            h = 2 ** e,
                            d = BigInt(e);
                          for (let t = 0; t < f; t++) {
                            let e = t * s,
                              n = Number(o & a);
                            (o >>= d), n > s && ((n -= h), (o += v));
                            let f = e + Math.abs(n) - 1,
                              c = t % 2 != 0,
                              g = n < 0;
                            0 === n
                              ? (u = u.add(r(c, i[e])))
                              : (l = l.add(r(g, i[f])));
                          }
                          return { p: l, f: u };
                        },
                        wNAFCached(t, e, r, n) {
                          let i = t._WINDOW_SIZE || 1,
                            o = e.get(t);
                          return (
                            o ||
                              ((o = this.precomputeWindow(t, i)),
                              1 !== i && e.set(t, n(o))),
                            this.wNAF(i, o, r)
                          );
                        },
                      };
                    })(c, e.endo ? Math.ceil(g / 2) : g);
                  return {
                    CURVE: e,
                    ProjectivePoint: c,
                    normPrivateKeyToScalar: u,
                    weierstrassEquation: f,
                    isWithinCurveOrder: s,
                  };
                })({
                  ...e,
                  toBytes(t, e, n) {
                    let o = e.toAffine(),
                      f = r.toBytes(o.x),
                      s = i.eV;
                    return n
                      ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), f)
                      : s(Uint8Array.from([4]), f, r.toBytes(o.y));
                  },
                  fromBytes(t) {
                    let e = t.length,
                      n = t[0],
                      f = t.subarray(1);
                    if (e === o && (2 === n || 3 === n)) {
                      let t;
                      let e = i.bytesToNumberBE(f);
                      if (!(N < e && e < r.ORDER))
                        throw Error("Point is not on curve");
                      let o = h(e);
                      try {
                        t = r.sqrt(o);
                      } catch (t) {
                        throw Error(
                          "Point is not on curve" +
                            (t instanceof Error ? ": " + t.message : "")
                        );
                      }
                      return (
                        ((1 & n) == 1) != ((t & R) === R) && (t = r.neg(t)),
                        { x: e, y: t }
                      );
                    }
                    if (e === s && 4 === n)
                      return {
                        x: r.fromBytes(f.subarray(0, r.BYTES)),
                        y: r.fromBytes(f.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      `Point of length ${e} was invalid. Expected ${o} compressed bytes or ${s} uncompressed bytes`
                    );
                  },
                }),
                p = (t) => i.ci(i.tL(t, e.nByteLength)),
                y = (t, e, r) => i.bytesToNumberBE(t.slice(e, r));
              class w {
                constructor(t, e, r) {
                  (this.r = t),
                    (this.s = e),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(t) {
                  let r = e.nByteLength;
                  return new w(
                    y((t = (0, i.ql)("compactSignature", t, 2 * r)), 0, r),
                    y(t, r, 2 * r)
                  );
                }
                static fromDER(t) {
                  let { r: e, s: r } = O.toSig((0, i.ql)("DER", t));
                  return new w(e, r);
                }
                assertValidity() {
                  if (!c(this.r)) throw Error("r must be 0 < r < CURVE.n");
                  if (!c(this.s)) throw Error("s must be 0 < s < CURVE.n");
                }
                addRecoveryBit(t) {
                  return new w(this.r, this.s, t);
                }
                recoverPublicKey(t) {
                  let { r: o, s: f, recovery: s } = this,
                    a = x((0, i.ql)("msgHash", t));
                  if (null == s || ![0, 1, 2, 3].includes(s))
                    throw Error("recovery id invalid");
                  let h = 2 === s || 3 === s ? o + e.n : o;
                  if (h >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let d = (1 & s) == 0 ? "02" : "03",
                    c = u.fromHex(d + p(h)),
                    y = g(h, n),
                    m = l(-a * y),
                    E = l(f * y),
                    w = u.BASE.multiplyAndAddUnsafe(c, m, E);
                  if (!w) throw Error("point at infinify");
                  return w.assertValidity(), w;
                }
                hasHighS() {
                  return this.s > n >> R;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new w(this.r, l(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return i.hexToBytes(this.toDERHex());
                }
                toDERHex() {
                  return O.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return i.hexToBytes(this.toCompactHex());
                }
                toCompactHex() {
                  return p(this.r) + p(this.s);
                }
              }
              function b(t) {
                let e = i._t(t),
                  r = "string" == typeof t,
                  n = (e || r) && t.length;
                return e
                  ? n === o || n === s
                  : r
                  ? n === 2 * o || n === 2 * s
                  : t instanceof u;
              }
              let B =
                  e.bits2int ||
                  function (t) {
                    let r = i.bytesToNumberBE(t),
                      n = 8 * t.length - e.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                x =
                  e.bits2int_modN ||
                  function (t) {
                    return l(B(t));
                  },
                A = i.dQ(e.nBitLength);
              function q(t) {
                if ("bigint" != typeof t) throw Error("bigint expected");
                if (!(N <= t && t < A))
                  throw Error(`bigint expected < 2^${e.nBitLength}`);
                return i.tL(t, e.nByteLength);
              }
              let L = { lowS: e.lowS, prehash: !1 },
                H = { lowS: e.lowS, prehash: !1 };
              return (
                u.BASE._setWindowSize(8),
                {
                  CURVE: e,
                  getPublicKey: function (t, e = !0) {
                    return u.fromPrivateKey(t).toRawBytes(e);
                  },
                  getSharedSecret: function (t, e, r = !0) {
                    if (b(t)) throw Error("first arg must be private key");
                    if (!b(e)) throw Error("second arg must be public key");
                    return u.fromHex(e).multiply(a(t)).toRawBytes(r);
                  },
                  sign: function (t, o, f = L) {
                    let { seed: s, k2sig: h } = (function (t, o, f = L) {
                      if (["recovered", "canonical"].some((t) => t in f))
                        throw Error("sign() legacy options not supported");
                      let { hash: s, randomBytes: h } = e,
                        { lowS: d, prehash: p, extraEntropy: y } = f;
                      null == d && (d = !0),
                        (t = (0, i.ql)("msgHash", t)),
                        p && (t = (0, i.ql)("prehashed msgHash", s(t)));
                      let m = x(t),
                        E = a(o),
                        b = [q(E), q(m)];
                      if (null != y && !1 !== y) {
                        let t = !0 === y ? h(r.BYTES) : y;
                        b.push((0, i.ql)("extraEntropy", t));
                      }
                      return {
                        seed: i.eV(...b),
                        k2sig: function (t) {
                          let e = B(t);
                          if (!c(e)) return;
                          let r = g(e, n),
                            i = u.BASE.multiply(e).toAffine(),
                            o = l(i.x);
                          if (o === N) return;
                          let f = l(r * l(m + o * E));
                          if (f === N) return;
                          let s = (i.x === o ? 0 : 2) | Number(i.y & R),
                            a = f;
                          if (d && f > n >> R)
                            (a = f > n >> R ? l(-f) : f), (s ^= 1);
                          return new w(o, a, s);
                        },
                      };
                    })(t, o, f);
                    return i.n$(e.hash.outputLen, e.nByteLength, e.hmac)(s, h);
                  },
                  verify: function (t, r, o, f = H) {
                    let s, a;
                    if (
                      ((r = (0, i.ql)("msgHash", r)),
                      (o = (0, i.ql)("publicKey", o)),
                      "strict" in f)
                    )
                      throw Error("options.strict was renamed to lowS");
                    let { lowS: h, prehash: d } = f;
                    try {
                      if ("string" == typeof t || i._t(t))
                        try {
                          a = w.fromDER(t);
                        } catch (e) {
                          if (!(e instanceof O.Err)) throw e;
                          a = w.fromCompact(t);
                        }
                      else if (
                        "object" == typeof t &&
                        "bigint" == typeof t.r &&
                        "bigint" == typeof t.s
                      ) {
                        let { r: e, s: r } = t;
                        a = new w(e, r);
                      } else throw Error("PARSE");
                      s = u.fromHex(o);
                    } catch (t) {
                      if ("PARSE" === t.message)
                        throw Error(
                          "signature must be Signature instance, Uint8Array or hex string"
                        );
                      return !1;
                    }
                    if (h && a.hasHighS()) return !1;
                    d && (r = e.hash(r));
                    let { r: c, s: p } = a,
                      y = x(r),
                      m = g(p, n),
                      E = l(y * m),
                      b = l(c * m),
                      B = u.BASE.multiplyAndAddUnsafe(s, E, b)?.toAffine();
                    return !!B && l(B.x) === c;
                  },
                  ProjectivePoint: u,
                  Signature: w,
                  utils: {
                    isValidPrivateKey(t) {
                      try {
                        return a(t), !0;
                      } catch (t) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: a,
                    randomPrivateKey: () => {
                      let t = E(e.n);
                      return (function (t, e, r = !1) {
                        let n = t.length,
                          o = m(e),
                          s = E(e);
                        if (n < 16 || n < s || n > 1024)
                          throw Error(
                            `expected ${s}-1024 bytes of input, got ${n}`
                          );
                        let l =
                          d(
                            r ? (0, i.bytesToNumberBE)(t) : (0, i.ty)(t),
                            e - f
                          ) + f;
                        return r ? (0, i.S5)(l, o) : (0, i.tL)(l, o);
                      })(e.randomBytes(t), e.n);
                    },
                    precompute: (t = 8, e = u.BASE) => (
                      e._setWindowSize(t), e.multiply(BigInt(3)), e
                    ),
                  },
                }
              );
            })({
              ...t,
              hash: e,
              hmac: (t, ...r) => x(e, t, (0, b.eV)(...r)),
              randomBytes: b.O6,
            });
          return Object.freeze({ ...r(e), create: r });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: z,
            n: H,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (t) => {
                let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -F * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  o = T(e * t, H),
                  f = T(-r * t, H),
                  s = d(t - o * e - f * n, H),
                  l = d(-o * r - f * e, H),
                  u = s > i,
                  a = l > i;
                if ((u && (s = H - s), a && (l = H - l), s > i || l > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + t);
                return { k1neg: u, k1: s, k2neg: a, k2: l };
              },
            },
          },
          n.J
        );
      BigInt(0), P.ProjectivePoint;
    },
  },
]);
