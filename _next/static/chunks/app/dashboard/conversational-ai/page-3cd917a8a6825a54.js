(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4465],
  {
    49050: function (e, t, r) {
      Promise.resolve().then(r.t.bind(r, 72972, 23)),
        Promise.resolve().then(r.bind(r, 3370));
    },
    3370: function (e, t, r) {
      "use strict";
      var o = r(57437),
        n = r(33145);
      r(2265),
        (t.default = (e) => {
          let { text: t, imgUrl: r } = e;
          return (0, o.jsxs)("div", {
            className:
              "flex h-fit w-56 items-center justify-center gap-4 overflow-hidden rounded-full border border-[#919191] bg-[#171717]/80 py-3 pl-6 pr-8 font-medium text-white hover:bg-gradient-to-r hover:from-[#171717]/80 hover:via-[#6C6C6C]/40 hover:to-[#6C6C6C] hover:shadow-md hover:shadow-[#6C6C6C] xl:pr-12",
            children: [
              r &&
                (0, o.jsx)(n.default, {
                  width: 100,
                  height: 100,
                  src: r,
                  alt: "Model Card Icon",
                  className:
                    "h-8 w-8 object-fill" +
                    ("DeepSouth+" === t ? " -mr-2 ml-4" : ""),
                }),
              (0, o.jsx)("span", {
                className: "text-2xl font-[600] whitespace-nowrap",
                style: { flexGrow: 1, textAlign: "start" },
                children: t,
              }),
            ],
          });
        });
    },
  },
  function (e) {
    e.O(0, [3145, 2972, 2971, 2117, 1744], function () {
      return e((e.s = 49050));
    }),
      (_N_E = e.O());
  },
]);
