"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9803],
  {
    19803: function (e, t, r) {
      let i;
      r.d(t, {
        InternalAIProvider: function () {
          return X;
        },
        mj: function () {
          return G;
        },
      });
      var n = r(2265);
      class l {
        constructor(e) {
          (this.selfOptions = e || {}), (this.pipes = {});
        }
        options(e) {
          return e && (this.selfOptions = e), this.selfOptions;
        }
        pipe(e, t) {
          let r = t;
          if ("string" == typeof e) {
            if (void 0 === r) return this.pipes[e];
            this.pipes[e] = r;
          }
          if (e && e.name) {
            if ((r = e).processor === this) return r;
            this.pipes[r.name] = r;
          }
          return (r.processor = this), r;
        }
        process(e, t) {
          let r,
            i = e;
          i.options = this.options();
          let n = t || e.pipe || "default";
          for (; n; )
            void 0 !== i.nextAfterChildren &&
              ((i.next = i.nextAfterChildren), (i.nextAfterChildren = null)),
              "string" == typeof n && (n = this.pipe(n)),
              n.process(i),
              (r = n),
              (n = null),
              i && i.next && (n = (i = i.next).pipe || r);
          return i.hasResult ? i.result : void 0;
        }
      }
      class s {
        constructor(e) {
          (this.name = e), (this.filters = []);
        }
        process(e) {
          if (!this.processor)
            throw Error("add this pipe to a processor before using it");
          let t = this.debug,
            r = this.filters.length;
          for (let i = 0; i < r; i++) {
            let r = this.filters[i];
            if (
              (t && this.log(`filter: ${r.filterName}`),
              r(e),
              "object" == typeof e && e.exiting)
            ) {
              e.exiting = !1;
              break;
            }
          }
          !e.next && this.resultCheck && this.resultCheck(e);
        }
        log(e) {
          console.log(`[jsondiffpatch] ${this.name} pipe, ${e}`);
        }
        append(...e) {
          return this.filters.push(...e), this;
        }
        prepend(...e) {
          return this.filters.unshift(...e), this;
        }
        indexOf(e) {
          if (!e) throw Error("a filter name is required");
          for (let t = 0; t < this.filters.length; t++)
            if (this.filters[t].filterName === e) return t;
          throw Error(`filter not found: ${e}`);
        }
        list() {
          return this.filters.map((e) => e.filterName);
        }
        after(e, ...t) {
          let r = this.indexOf(e);
          return this.filters.splice(r + 1, 0, ...t), this;
        }
        before(e, ...t) {
          let r = this.indexOf(e);
          return this.filters.splice(r, 0, ...t), this;
        }
        replace(e, ...t) {
          let r = this.indexOf(e);
          return this.filters.splice(r, 1, ...t), this;
        }
        remove(e) {
          let t = this.indexOf(e);
          return this.filters.splice(t, 1), this;
        }
        clear() {
          return (this.filters.length = 0), this;
        }
        shouldHaveResult(e) {
          if (!1 === e) {
            this.resultCheck = null;
            return;
          }
          if (!this.resultCheck)
            return (
              (this.resultCheck = (e) => {
                if (!e.hasResult) {
                  console.log(e);
                  let t = Error(`${this.name} failed`);
                  throw ((t.noResult = !0), t);
                }
              }),
              this
            );
        }
      }
      class o {
        setResult(e) {
          return (this.result = e), (this.hasResult = !0), this;
        }
        exit() {
          return (this.exiting = !0), this;
        }
        push(e, t) {
          return (
            (e.parent = this),
            void 0 !== t && (e.childName = t),
            (e.root = this.root || this),
            (e.options = e.options || this.options),
            this.children
              ? ((this.children[this.children.length - 1].next = e),
                this.children.push(e))
              : ((this.children = [e]),
                (this.nextAfterChildren = this.next || null),
                (this.next = e)),
            (e.next = this),
            this
          );
        }
      }
      function f(e) {
        if ("object" != typeof e) return e;
        if (null === e) return null;
        if (Array.isArray(e)) return e.map(f);
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp)
          return (function (e) {
            let t = /^\/(.*)\/([gimyu]*)$/.exec(e.toString());
            return new RegExp(t[1], t[2]);
          })(e);
        let t = {};
        for (let r in e)
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = f(e[r]));
        return t;
      }
      class h extends o {
        constructor(e, t) {
          super(), (this.left = e), (this.right = t), (this.pipe = "diff");
        }
        setResult(e) {
          if (this.options.cloneDiffValues && "object" == typeof e) {
            let t =
              "function" == typeof this.options.cloneDiffValues
                ? this.options.cloneDiffValues
                : f;
            "object" == typeof e[0] && (e[0] = t(e[0])),
              "object" == typeof e[1] && (e[1] = t(e[1]));
          }
          return super.setResult(e);
        }
      }
      class u extends o {
        constructor(e, t) {
          super(), (this.left = e), (this.delta = t), (this.pipe = "patch");
        }
      }
      class a extends o {
        constructor(e) {
          super(), (this.delta = e), (this.pipe = "reverse");
        }
      }
      let c = function (e) {
        if (e.left === e.right) {
          e.setResult(void 0).exit();
          return;
        }
        if (void 0 === e.left) {
          if ("function" == typeof e.right)
            throw Error("functions are not supported");
          e.setResult([e.right]).exit();
          return;
        }
        if (void 0 === e.right) {
          e.setResult([e.left, 0, 0]).exit();
          return;
        }
        if ("function" == typeof e.left || "function" == typeof e.right)
          throw Error("functions are not supported");
        if (
          ((e.leftType = null === e.left ? "null" : typeof e.left),
          (e.rightType = null === e.right ? "null" : typeof e.right),
          e.leftType !== e.rightType ||
            "boolean" === e.leftType ||
            "number" === e.leftType ||
            ("object" === e.leftType && (e.leftIsArray = Array.isArray(e.left)),
            "object" === e.rightType &&
              (e.rightIsArray = Array.isArray(e.right)),
            e.leftIsArray !== e.rightIsArray))
        ) {
          e.setResult([e.left, e.right]).exit();
          return;
        }
        e.left instanceof RegExp &&
          (e.right instanceof RegExp
            ? e.setResult([e.left.toString(), e.right.toString()]).exit()
            : e.setResult([e.left, e.right]).exit());
      };
      c.filterName = "trivial";
      let p = function (e) {
        if (void 0 === e.delta) {
          e.setResult(e.left).exit();
          return;
        }
        if (((e.nested = !Array.isArray(e.delta)), e.nested)) return;
        let t = e.delta;
        if (1 === t.length) {
          e.setResult(t[0]).exit();
          return;
        }
        if (2 === t.length) {
          if (e.left instanceof RegExp) {
            let r = /^\/(.*)\/([gimyu]+)$/.exec(t[1]);
            if (r) {
              e.setResult(new RegExp(r[1], r[2])).exit();
              return;
            }
          }
          e.setResult(t[1]).exit();
          return;
        }
        3 === t.length && 0 === t[2] && e.setResult(void 0).exit();
      };
      p.filterName = "trivial";
      let d = function (e) {
        if (void 0 === e.delta) {
          e.setResult(e.delta).exit();
          return;
        }
        if (((e.nested = !Array.isArray(e.delta)), e.nested)) return;
        let t = e.delta;
        if (1 === t.length) {
          e.setResult([t[0], 0, 0]).exit();
          return;
        }
        if (2 === t.length) {
          e.setResult([t[1], t[0]]).exit();
          return;
        }
        3 === t.length && 0 === t[2] && e.setResult([t[0]]).exit();
      };
      d.filterName = "trivial";
      let x = (e) => {
        let t;
        if (!e || !e.children) return;
        let r = e.children.length,
          i = e.result;
        for (let n = 0; n < r; n++)
          void 0 !== (t = e.children[n]).result &&
            ((i = i || {})[t.childName] = t.result);
        i && e.leftIsArray && (i._t = "a"), e.setResult(i).exit();
      };
      x.filterName = "collectChildren";
      let g = (e) => {
        let t, r;
        if (e.leftIsArray || "object" !== e.leftType) return;
        let i = e.left,
          n = e.right,
          l = e.options.propertyFilter;
        for (t in i)
          Object.prototype.hasOwnProperty.call(i, t) &&
            (!l || l(t, e)) &&
            ((r = new h(i[t], n[t])), e.push(r, t));
        for (t in n)
          Object.prototype.hasOwnProperty.call(n, t) &&
            (!l || l(t, e)) &&
            void 0 === i[t] &&
            ((r = new h(void 0, n[t])), e.push(r, t));
        if (!e.children || 0 === e.children.length) {
          e.setResult(void 0).exit();
          return;
        }
        e.exit();
      };
      g.filterName = "objects";
      let y = function (e) {
        let t, r;
        if (!e.nested) return;
        let i = e.delta;
        if (!i._t) {
          for (t in i) (r = new u(e.left[t], i[t])), e.push(r, t);
          e.exit();
        }
      };
      y.filterName = "objects";
      let v = function (e) {
        let t;
        if (!e || !e.children || e.delta._t) return;
        let r = e.left,
          i = e.children.length;
        for (let n = 0; n < i; n++) {
          let i = (t = e.children[n]).childName;
          Object.prototype.hasOwnProperty.call(e.left, i) && void 0 === t.result
            ? delete r[i]
            : r[i] !== t.result && (r[i] = t.result);
        }
        e.setResult(r).exit();
      };
      v.filterName = "collectChildren";
      let m = function (e) {
        let t, r;
        if (!e.nested || e.delta._t) return;
        let i = e.delta;
        for (t in i) (r = new a(i[t])), e.push(r, t);
        e.exit();
      };
      m.filterName = "objects";
      let R = (e) => {
        let t;
        if (!e || !e.children || e.delta._t) return;
        let r = e.children.length,
          i = {};
        for (let n = 0; n < r; n++) {
          let r = (t = e.children[n]).childName;
          i[r] !== t.result && (i[r] = t.result);
        }
        e.setResult(i).exit();
      };
      R.filterName = "collectChildren";
      let w = function (e, t, r, i) {
          return e[r] === t[i];
        },
        b = function (e, t, r, i) {
          let n, l;
          let s = e.length,
            o = t.length,
            f = Array(s + 1);
          for (n = 0; n < s + 1; n++)
            for (l = 0, f[n] = Array(o + 1); l < o + 1; l++) f[n][l] = 0;
          for (n = 1, f.match = r; n < s + 1; n++)
            for (l = 1; l < o + 1; l++)
              r(e, t, n - 1, l - 1, i)
                ? (f[n][l] = f[n - 1][l - 1] + 1)
                : (f[n][l] = Math.max(f[n - 1][l], f[n][l - 1]));
          return f;
        },
        _ = function (e, t, r, i) {
          let n = t.length,
            l = r.length,
            s = { sequence: [], indices1: [], indices2: [] };
          for (; 0 !== n && 0 !== l; )
            e.match(t, r, n - 1, l - 1, i)
              ? (s.sequence.unshift(t[n - 1]),
                s.indices1.unshift(n - 1),
                s.indices2.unshift(l - 1),
                --n,
                --l)
              : e[n][l - 1] > e[n - 1][l]
              ? --l
              : --n;
          return s;
        };
      var j = function (e, t, r, i) {
        let n = i || {};
        return _(b(e, t, r || w, n), e, t, n);
      };
      function C(e, t, r, i, n) {
        let l = e[r],
          s = t[i];
        if (l === s) return !0;
        if ("object" != typeof l || "object" != typeof s) return !1;
        let o = n.objectHash;
        if (!o) return n.matchByPosition && r === i;
        n.hashCache1 = n.hashCache1 || [];
        let f = n.hashCache1[r];
        if ((void 0 === f && (n.hashCache1[r] = f = o(l, r)), void 0 === f))
          return !1;
        n.hashCache2 = n.hashCache2 || [];
        let h = n.hashCache2[i];
        return (
          void 0 === h && (n.hashCache2[i] = h = o(s, i)),
          void 0 !== h && f === h
        );
      }
      let N = function (e) {
        let t, r, i, n, l;
        if (!e.leftIsArray) return;
        let s = {
            objectHash: e.options && e.options.objectHash,
            matchByPosition: e.options && e.options.matchByPosition,
          },
          o = 0,
          f = 0,
          u = e.left,
          a = e.right,
          c = u.length,
          p = a.length;
        for (
          c > 0 &&
          p > 0 &&
          !s.objectHash &&
          "boolean" != typeof s.matchByPosition &&
          (s.matchByPosition = !(function (e, t, r, i) {
            for (let n = 0; n < r; n++) {
              let r = e[n];
              for (let e = 0; e < i; e++) {
                let i = t[e];
                if (n !== e && r === i) return !0;
              }
            }
          })(u, a, c, p));
          o < c && o < p && C(u, a, o, o, s);

        )
          (n = new h(u[(t = o)], a[t])), e.push(n, t), o++;
        for (; f + o < c && f + o < p && C(u, a, c - 1 - f, p - 1 - f, s); )
          (r = c - 1 - f),
            (i = p - 1 - f),
            (n = new h(u[r], a[i])),
            e.push(n, i),
            f++;
        if (o + f === c) {
          if (c === p) {
            e.setResult(void 0).exit();
            return;
          }
          for (l = l || { _t: "a" }, t = o; t < p - f; t++) l[t] = [a[t]];
          e.setResult(l).exit();
          return;
        }
        if (o + f === p) {
          for (l = l || { _t: "a" }, t = o; t < c - f; t++)
            l[`_${t}`] = [u[t], 0, 0];
          e.setResult(l).exit();
          return;
        }
        delete s.hashCache1, delete s.hashCache2;
        let d = u.slice(o, c - f),
          x = a.slice(o, p - f),
          g = j(d, x, C, s),
          y = [];
        for (l = l || { _t: "a" }, t = o; t < c - f; t++)
          0 > g.indices1.indexOf(t - o) &&
            ((l[`_${t}`] = [u[t], 0, 0]), y.push(t));
        let v = !0;
        e.options &&
          e.options.arrays &&
          !1 === e.options.arrays.detectMove &&
          (v = !1);
        let m = !1;
        e.options &&
          e.options.arrays &&
          e.options.arrays.includeValueOnMove &&
          (m = !0);
        let R = y.length;
        for (t = o; t < p - f; t++) {
          let f = g.indices2.indexOf(t - o);
          if (f < 0) {
            let f = !1;
            if (v && R > 0) {
              for (let c = 0; c < R; c++)
                if (C(d, x, (r = y[c]) - o, t - o, s)) {
                  l[`_${r}`].splice(1, 2, t, 3),
                    m || (l[`_${r}`][0] = ""),
                    (i = t),
                    (n = new h(u[r], a[i])),
                    e.push(n, i),
                    y.splice(c, 1),
                    (f = !0);
                  break;
                }
            }
            f || (l[t] = [a[t]]);
          } else
            (r = g.indices1[f] + o),
              (i = g.indices2[f] + o),
              (n = new h(u[r], a[i])),
              e.push(n, i);
        }
        e.setResult(l).exit();
      };
      N.filterName = "arrays";
      let A = (e, t) => e - t,
        E = (e) => (t, r) => t[e] - r[e],
        I = function (e) {
          let t, r, i;
          if (!e.nested) return;
          let n = e.delta;
          if ("a" !== n._t) return;
          let l = e.left,
            s = [],
            o = [],
            f = [];
          for (t in n)
            if ("_t" !== t) {
              if ("_" === t[0]) {
                let e = t;
                if (0 === n[e][2] || 3 === n[e][2])
                  s.push(parseInt(t.slice(1), 10));
                else
                  throw Error(
                    `only removal or move can be applied at original array indices, invalid diff type: ${n[e][2]}`
                  );
              } else {
                let e = t;
                1 === n[e].length
                  ? o.push({ index: parseInt(e, 10), value: n[e][0] })
                  : f.push({ index: parseInt(e, 10), delta: n[e] });
              }
            }
          for (t = (s = s.sort(A)).length - 1; t >= 0; t--) {
            r = s[t];
            let e = n[`_${r}`],
              i = l.splice(r, 1)[0];
            3 === e[2] && o.push({ index: e[1], value: i });
          }
          let h = (o = o.sort(E("index"))).length;
          for (t = 0; t < h; t++) {
            let e = o[t];
            l.splice(e.index, 0, e.value);
          }
          let a = f.length;
          if (a > 0)
            for (t = 0; t < a; t++) {
              let r = f[t];
              (i = new u(l[r.index], r.delta)), e.push(i, r.index);
            }
          if (!e.children) {
            e.setResult(l).exit();
            return;
          }
          e.exit();
        };
      I.filterName = "arrays";
      let O = function (e) {
        let t;
        if (!e || !e.children || "a" !== e.delta._t) return;
        let r = e.left,
          i = e.children.length;
        for (let n = 0; n < i; n++) r[(t = e.children[n]).childName] = t.result;
        e.setResult(r).exit();
      };
      O.filterName = "arraysCollectChildren";
      let P = function (e) {
        let t, r;
        if (!e.nested) {
          let t = e.delta;
          3 === t[2] &&
            ((e.newName = `_${t[1]}`),
            e
              .setResult([t[0], parseInt(e.childName.substring(1), 10), 3])
              .exit());
          return;
        }
        let i = e.delta;
        if ("a" === i._t) {
          for (t in i) "_t" !== t && ((r = new a(i[t])), e.push(r, t));
          e.exit();
        }
      };
      P.filterName = "arrays";
      let T = (e, t, r) => {
          if ("string" == typeof t && "_" === t[0])
            return parseInt(t.substring(1), 10);
          if (Array.isArray(r) && 0 === r[2]) return `_${t}`;
          let i = +t;
          for (let r in e) {
            let n = e[r];
            if (Array.isArray(n)) {
              if (3 === n[2]) {
                let e = parseInt(r.substring(1), 10),
                  l = n[1];
                if (l === +t) return e;
                e <= i && l > i ? i++ : e >= i && l < i && i--;
              } else
                0 === n[2]
                  ? parseInt(r.substring(1), 10) <= i && i++
                  : 1 === n.length && parseInt(r, 10) <= i && i--;
            }
          }
          return i;
        },
        $ = (e) => {
          let t;
          if (!e || !e.children) return;
          let r = e.delta;
          if ("a" !== r._t) return;
          let i = e.children.length,
            n = { _t: "a" };
          for (let l = 0; l < i; l++) {
            let i = (t = e.children[l]).newName;
            void 0 === i && (i = T(r, t.childName, t.result)),
              n[i] !== t.result && (n[i] = t.result);
          }
          e.setResult(n).exit();
        };
      $.filterName = "arraysCollectChildren";
      let k = function (e) {
        e.left instanceof Date
          ? (e.right instanceof Date
              ? e.left.getTime() !== e.right.getTime()
                ? e.setResult([e.left, e.right])
                : e.setResult(void 0)
              : e.setResult([e.left, e.right]),
            e.exit())
          : e.right instanceof Date && e.setResult([e.left, e.right]).exit();
      };
      k.filterName = "dates";
      let D = null;
      function S(e, t) {
        var r;
        if (!D) {
          let i;
          if (
            null === (r = null == e ? void 0 : e.textDiff) || void 0 === r
              ? void 0
              : r.diffMatchPatch
          )
            i = new e.textDiff.diffMatchPatch();
          else {
            if (!t) return null;
            let e = Error(
              "The diff-match-patch library was not provided. Pass the library in through the options or use the `jsondiffpatch/with-text-diffs` entry-point."
            );
            throw ((e.diff_match_patch_not_found = !0), e);
          }
          D = {
            diff: function (e, t) {
              return i.patch_toText(i.patch_make(e, t));
            },
            patch: function (e, t) {
              let r = i.patch_apply(i.patch_fromText(t), e);
              for (let e = 0; e < r[1].length; e++)
                r[1][e] || (Error("text patch failed").textPatchFailed = !0);
              return r[0];
            },
          };
        }
        return D;
      }
      let H = function (e) {
        if ("string" !== e.leftType) return;
        let t = e.left,
          r = e.right,
          i =
            (e.options && e.options.textDiff && e.options.textDiff.minLength) ||
            60;
        if (t.length < i || r.length < i) {
          e.setResult([t, r]).exit();
          return;
        }
        let n = S(e.options);
        if (!n) {
          e.setResult([t, r]).exit();
          return;
        }
        let l = n.diff;
        e.setResult([l(t, r), 0, 2]).exit();
      };
      H.filterName = "texts";
      let M = function (e) {
        if (e.nested) return;
        let t = e.delta;
        if (2 !== t[2]) return;
        let r = S(e.options, !0).patch;
        e.setResult(r(e.left, t[0])).exit();
      };
      M.filterName = "texts";
      let B = function (e) {
          let t, r, i, n;
          let l = null,
            s = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/,
            o = e.split("\n");
          for (t = 0, r = o.length; t < r; t++) {
            let e = (i = o[t]).slice(0, 1);
            "@" === e
              ? ((l = s.exec(i)),
                (o[t] =
                  "@@ -" +
                  l[3] +
                  "," +
                  l[4] +
                  " +" +
                  l[1] +
                  "," +
                  l[2] +
                  " @@"))
              : "+" === e
              ? ((o[t] = "-" + o[t].slice(1)),
                "+" === o[t - 1].slice(0, 1) &&
                  ((n = o[t]), (o[t] = o[t - 1]), (o[t - 1] = n)))
              : "-" === e && (o[t] = "+" + o[t].slice(1));
          }
          return o.join("\n");
        },
        V = function (e) {
          if (e.nested) return;
          let t = e.delta;
          2 === t[2] && e.setResult([B(t[0]), 0, 2]).exit();
        };
      V.filterName = "texts";
      class q {
        constructor(e) {
          (this.processor = new l(e)),
            this.processor.pipe(
              new s("diff").append(x, c, k, H, g, N).shouldHaveResult()
            ),
            this.processor.pipe(
              new s("patch").append(v, O, p, M, y, I).shouldHaveResult()
            ),
            this.processor.pipe(
              new s("reverse").append(R, $, d, V, m, P).shouldHaveResult()
            );
        }
        options(e) {
          return this.processor.options(e);
        }
        diff(e, t) {
          return this.processor.process(new h(e, t));
        }
        patch(e, t) {
          return this.processor.process(new u(e, t));
        }
        reverse(e) {
          return this.processor.process(new a(e));
        }
        unpatch(e, t) {
          return this.patch(e, this.reverse(t));
        }
        clone(e) {
          return f(e);
        }
      }
      function F(e, t) {
        return i || (i = new q()), i.patch(e, t);
      }
      function K(e) {
        return i || (i = new q()), i.clone(e);
      }
      var L = r(57437),
        z = Symbol.for("ui.streamable.value");
      function G(e) {
        if (!(null != e && "object" == typeof e && "type" in e && e.type === z))
          throw Error(
            "Invalid value: this hook only accepts values created via `createStreamableValue`."
          );
        return {
          [Symbol.asyncIterator]() {
            let t = e,
              r = t.curr,
              i = !1,
              n = !0;
            return {
              async next() {
                if (i) return { value: r, done: !0 };
                if (void 0 !== (t = await t).error) throw t.error;
                if ("curr" in t || t.diff) {
                  if (t.diff) {
                    if (0 === t.diff[0]) {
                      if ("string" != typeof r)
                        throw Error(
                          "Invalid patch: can only append to string types. This is a bug in the AI SDK."
                        );
                      r += t.diff[1];
                    }
                  } else r = t.curr;
                  if (!t.next) return (i = !0), { value: r, done: !1 };
                }
                return void 0 === t.next
                  ? { value: r, done: !0 }
                  : ((t = t.next), n && ((n = !1), void 0 === r))
                  ? this.next()
                  : { value: r, done: !1 };
              },
            };
          },
        };
      }
      var J = n.createContext(null),
        Q = n.createContext(void 0),
        U = n.createContext(null),
        W = n.createContext(null);
      function X(e) {
        let {
            children: t,
            initialUIState: r,
            initialAIState: i,
            initialAIStatePatch: l,
            wrappedActions: s,
            wrappedSyncUIState: o,
          } = e,
          f = n.useState(r),
          h = f[1],
          u = l ? n.use(l) : void 0;
        i = n.useMemo(() => (u ? F(K(i), u) : i), [i, u]);
        let a = n.useState(i),
          c = a[1],
          p = n.useRef(a[0]);
        n.useEffect(() => {
          p.current = a[0];
        }, [a[0]]);
        let d = n.useMemo(
            () =>
              Object.fromEntries(
                Object.entries(s).map((e) => {
                  let [t, r] = e;
                  return [
                    t,
                    async function () {
                      for (
                        var e = arguments.length, t = Array(e), i = 0;
                        i < e;
                        i++
                      )
                        t[i] = arguments[i];
                      let n = p.current,
                        [l, s] = await r(n, ...t);
                      return (
                        (async () => {
                          let e = await l;
                          void 0 !== e && a[1](F(K(n), e));
                        })(),
                        s
                      );
                    },
                  ];
                })
              ),
            [s]
          ),
          x = n.useMemo(
            () =>
              o
                ? async () => {
                    let e = p.current,
                      [t, r] = await o(e);
                    void 0 !== r && h(r);
                    let i = await t;
                    void 0 !== i && c(F(K(e), i));
                  }
                : () => {},
            [o]
          );
        return (0, L.jsx)(Q.Provider, {
          value: a,
          children: (0, L.jsx)(J.Provider, {
            value: f,
            children: (0, L.jsx)(U.Provider, {
              value: d,
              children: (0, L.jsx)(W.Provider, { value: x, children: t }),
            }),
          }),
        });
      }
    },
  },
]);
