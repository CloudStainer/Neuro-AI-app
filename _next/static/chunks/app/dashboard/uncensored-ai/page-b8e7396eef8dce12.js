(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3842],
  {
    83902: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 82888));
    },
    43664: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = s(2265),
        r = {
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
      let a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = (e, t) => {
          let s = (0, n.forwardRef)((s, i) => {
            let {
              color: o = "currentColor",
              size: l = 24,
              strokeWidth: d = 2,
              absoluteStrokeWidth: c,
              className: h = "",
              children: m,
              ...u
            } = s;
            return (0, n.createElement)(
              "svg",
              {
                ref: i,
                ...r,
                width: l,
                height: l,
                stroke: o,
                strokeWidth: c ? (24 * Number(d)) / Number(l) : d,
                className: ["lucide", "lucide-".concat(a(e)), h].join(" "),
                ...u,
              },
              [
                ...t.map((e) => {
                  let [t, s] = e;
                  return (0, n.createElement)(t, s);
                }),
                ...(Array.isArray(m) ? m : [m]),
              ]
            );
          });
          return (s.displayName = "".concat(e)), s;
        };
    },
    51817: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, s(43664).Z)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    99376: function (e, t, s) {
      "use strict";
      var n = s(35475);
      s.o(n, "usePathname") &&
        s.d(t, {
          usePathname: function () {
            return n.usePathname;
          },
        }),
        s.o(n, "useRouter") &&
          s.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        s.o(n, "useSearchParams") &&
          s.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    82888: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var n = s(57437),
        r = s(33145),
        a = (e) => {
          let { title: t, imgSrc: s } = e;
          return (0, n.jsxs)("div", {
            className:
              "bg-gradient-to-t from-black via-black to-[#161618] rounded-xl border border-[#3b3b3c]/80 text-white flex flex-col items-center justify-around transition-shadow duration-300 ease-in-out hover:shadow-[0_0_15px_5px_rgba(75,75,75,0.7)] py-6 px-6 md:px-6 lg:py-8 lg:px-4 2xl:px-6 aspect-video w-48 h-40 sm:max-h-40 sm:min-h-40 sm:w-48 md:max-h-40 md:min-h-40 md:w-48 lg:max-h-56 lg:min-h-56 lg:w-60 xl:max-h-60 xl:min-h-60 xl:w-64 2xl:max-h-72 2xl:min-h-72 2xl:w-80",
            children: [
              "  ",
              (0, n.jsx)(r.default, {
                src: s,
                width: 100,
                height: 100,
                alt: t,
                className: "w-full object-fit",
              }),
            ],
          });
        },
        i = s(51817),
        o = s(99376),
        l = s(2265),
        d = () => {
          let [e, t] = (0, l.useState)(!1),
            [s, r] = (0, l.useState)(!1),
            [d, c] = (0, l.useState)(!1),
            h = (0, o.useRouter)();
          return (0, n.jsxs)("div", {
            className:
              "absolute flex h-full w-full flex-col items-center justify-start gap-10 overflow-y-auto overflow-x-hidden text-center sm:gap-12 md:gap-16 lg:gap-20",
            children: [
              (0, n.jsx)("div", {
                className: e
                  ? " z-50 h-full w-full absolute flex justify-center items-center backdrop-blur-3xl bg-black/50"
                  : " hidden",
                children: (0, n.jsx)("div", {
                  className: "z-50",
                  children: (0, n.jsx)("div", {
                    className: "relative p-4 xl:w-[900px]",
                    children: (0, n.jsxs)("div", {
                      className:
                        "relative rounded-xl border border-[#DDDDF0]/50 bg-[#161618] bg-opacity-95 shadow-2xl",
                      children: [
                        (0, n.jsxs)("button", {
                          onClick: () => {
                            t(!1), c(!1);
                          },
                          type: "button",
                          className:
                            "absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",
                          "data-modal-hide": "popup-modal",
                          children: [
                            (0, n.jsx)("svg", {
                              className: "w-3 h-3",
                              "aria-hidden": "true",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 14 14",
                              children: (0, n.jsx)("path", {
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6",
                              }),
                            }),
                            (0, n.jsx)("span", {
                              className: "sr-only",
                              children: "Close modal",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "p-4 md:p-5 text-center text-white",
                          children: [
                            (0, n.jsx)("svg", {
                              className:
                                "mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200",
                              "aria-hidden": "true",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 20 20",
                              children: (0, n.jsx)("path", {
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
                              }),
                            }),
                            (0, n.jsx)("h1", {
                              className:
                                " font-bold sm:text-xl xl:text-2xl text-lg text-white mb-4",
                              children:
                                "Neuro AI Platform Disclaimer and Legal Waiver for Uncensored AI",
                            }),
                            (0, n.jsxs)("form", {
                              onSubmit: (e) => {
                                e.preventDefault(),
                                  s
                                    ? (c(!0),
                                      h.push("/dashboard/uncensored-ai/ava"))
                                    : alert(
                                        "You must agree to the terms and conditions before proceeding."
                                      );
                              },
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "mb-5 text-sm text-start font-normal text-white dark:text-white h-48 sm:h-48 md:h-96 overflow-y-auto",
                                  children: [
                                    "Welcome to the Neuro AI platform. We provide access to a variety of artificial intelligence tools, including both proprietary and third-party AI services. This disclaimer specifically addresses the use of a third-party AI assistant referred to as Uncensored AI.",
                                    (0, n.jsx)("h1", {
                                      className:
                                        " font-semibold xl:text-xl text-xl text-white underline pt-4 pb-2",
                                      children: "Disclaimer of Liability",
                                    }),
                                    (0, n.jsxs)("p", {
                                      className: "py-2",
                                      children: [
                                        (0, n.jsx)("strong", {
                                          children: "Third-Party Service:",
                                        }),
                                        " Uncensored AI is a third-party AI service integrated into the Neuro AI platform. Neuro AI is not the creator of Uncensored AI and does not have control over the content it generates.",
                                      ],
                                    }),
                                    (0, n.jsxs)("p", {
                                      className: "py-2",
                                      children: [
                                        (0, n.jsx)("strong", {
                                          children: "Content Generation:",
                                        }),
                                        " Uncensored AI can generate content without limitations, which may include illegal, unethical, or otherwise objectionable material. Neuro AI disclaims all responsibility for any content generated by Uncensored AI.",
                                      ],
                                    }),
                                    (0, n.jsxs)("p", {
                                      className: "py-2",
                                      children: [
                                        (0, n.jsx)("strong", {
                                          children: "No Endorsement:",
                                        }),
                                        " The inclusion of Uncensored AI on our platform does not imply endorsement or approval of any content it generates. Users must exercise their own judgment and discretion when using this service.",
                                      ],
                                    }),
                                    (0, n.jsxs)("p", {
                                      className: "py-2",
                                      children: [
                                        (0, n.jsx)("strong", {
                                          children: "User Responsibility:",
                                        }),
                                        " Users of Uncensored AI are solely responsible for ensuring that their use of the AI complies with all applicable laws, regulations, and policies. This includes, but is not limited to, laws concerning data privacy, intellectual property, and content standards.",
                                      ],
                                    }),
                                    (0, n.jsxs)("p", {
                                      className: "py-2",
                                      children: [
                                        (0, n.jsx)("strong", {
                                          children: "Prohibited Use:",
                                        }),
                                        " Users must not use Uncensored AI to generate content that is illegal, harmful, or violates any laws or regulations. Additionally, it is strictly forbidden to share or distribute any illegal or harmful content generated by Uncensored AI. Users are fully responsible for any consequences arising from such use.",
                                      ],
                                    }),
                                    (0, n.jsxs)("p", {
                                      className: "py-2",
                                      children: [
                                        (0, n.jsx)("strong", {
                                          children: "Legal Consequences:",
                                        }),
                                        " Generating illegal or harmful content using Uncensored AI may result in significant legal consequences, including fines, criminal charges, and imprisonment. Users are advised to adhere strictly to legal and ethical guidelines when using this service.",
                                      ],
                                    }),
                                    (0, n.jsx)("h2", {
                                      className:
                                        " font-semibold xl:text-lg text-lg text-white underline pt-2 pb-1",
                                      children: "Compliance with Laws",
                                    }),
                                    (0, n.jsx)("p", {
                                      className: "py-2",
                                      children:
                                        "Neuro AI is committed to compliance with all international laws and data privacy regulations. All AI features and tools created by Neuro AI adhere to these standards. However, this compliance does not extend to third-party services such as Uncensored AI.",
                                    }),
                                    (0, n.jsx)("h2", {
                                      className:
                                        " font-semibold xl:text-lg text-lg text-white pt-2",
                                      children: "Indemnification",
                                    }),
                                    (0, n.jsx)("p", {
                                      className: "py-2",
                                      children:
                                        "By using Uncensored AI, users agree to indemnify, defend, and hold harmless Neuro AI, its affiliates, officers, directors, employees, agents, and partners from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys fees) arising out of or in any way connected with their use of Uncensored AI, including but not limited to the generation, sharing, and distribution of content.",
                                    }),
                                    (0, n.jsx)("h2", {
                                      className:
                                        " font-semibold xl:text-lg text-lg text-white pt-2",
                                      children: "Limitation of Liability",
                                    }),
                                    (0, n.jsx)("p", {
                                      className: "py-2",
                                      children:
                                        "In no event shall Neuro AI be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or in connection with the use of Uncensored AI, whether in an action in contract, tort (including negligence), or otherwise, even if Neuro AI has been advised of the possibility of such damages.",
                                    }),
                                    (0, n.jsx)("h2", {
                                      className:
                                        " font-semibold xl:text-lg text-lg text-white pt-2",
                                      children: "Amendments",
                                    }),
                                    (0, n.jsx)("p", {
                                      className: "py-2",
                                      children:
                                        "Neuro AI reserves the right to modify this disclaimer and waiver at any time. Users are encouraged to review this document periodically to stay informed of any changes. Continued use of Uncensored AI following the posting of changes constitutes acceptance of those changes.",
                                    }),
                                    (0, n.jsx)("h2", {
                                      className:
                                        " font-semibold xl:text-lg text-lg text-white pt-2",
                                      children: "Acceptance of Terms",
                                    }),
                                    (0, n.jsx)("p", {
                                      className: "py-2",
                                      children:
                                        "I will not use Uncensored AI to generate, share, or distribute any illegal, harmful, or unethical content. I understand that doing so may result in legal consequences, including fines, criminal charges, and imprisonment.",
                                    }),
                                    (0, n.jsx)("p", {
                                      className: "py-2",
                                      children:
                                        "By accessing and using Uncensored AI on the Neuro AI platform, users acknowledge that they have read, understood, and agree to be bound by this disclaimer and waiver. If users do not agree to these terms, they should not use Uncensored AI.",
                                    }),
                                    (0, n.jsx)("p", {
                                      className: "py-2",
                                      children:
                                        "For any questions or concerns regarding this disclaimer and waiver, please contact us at contact@deepsouth.ai.",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("label", {
                                  className:
                                    "flex justify-start items-start md:text-lg text-sm",
                                  children: [
                                    (0, n.jsx)("input", {
                                      type: "checkbox",
                                      checked: s,
                                      onChange: () => {
                                        r(!s);
                                      },
                                      className: "mr-2 mt-2",
                                    }),
                                    (0, n.jsx)("p", {
                                      className: "text-start",
                                      children:
                                        "I acknowledge that I have read, understood, and agree to be bound by the terms and conditions stated in the above disclaimer and waiver.",
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("br", {}),
                                (0, n.jsxs)("div", {
                                  className:
                                    "w-full flex justify-center items-center md:mt-4",
                                  children: [
                                    (0, n.jsx)("button", {
                                      onClick: () => {
                                        t(!1), c(!1);
                                      },
                                      "data-modal-hide": "popup-modal",
                                      type: "button",
                                      className:
                                        "text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center",
                                      children: "No, I do not",
                                    }),
                                    (0, n.jsxs)("button", {
                                      type: "submit",
                                      "data-modal-hide": "popup-modal",
                                      className:
                                        "py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none  rounded-lg border border-gray-200 bg-green-600 hover:bg-green-800 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex justify-center items-center gap-2",
                                      children: [
                                        d &&
                                          (0, n.jsx)(i.Z, {
                                            className: "animate-spin w-4",
                                          }),
                                        " Accept and Proceed",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex w-full flex-col items-center justify-center gap-4",
                children: [
                  (0, n.jsx)("h1", {
                    className:
                      "mt-16 inline-block bg-gradient-to-r from-[#AAAAAA] via-white to-white bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:mt-24 md:text-6xl lg:text-7xl",
                    children: "Uncensored AI",
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "md:text-md w-[330px] caption-bottom text-center text-sm font-normal text-white sm:w-[450px] md:w-[530px] lg:w-[630px]",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                children: (0, n.jsx)("h1", {
                  className:
                    "inline-block bg-clip-text text-xl text-white md:text-4xl",
                  children: "Select Model",
                }),
              }),
              (0, n.jsx)("div", {
                className: "flex flex-wrap items-center justify-center gap-4",
                children: (0, n.jsx)("div", {
                  children: (0, n.jsx)("button", {
                    className:
                      "grid grid-cols-1 gap-y-4 md:grid-cols-1 md:gap-x-10 md:gap-y-12 lg:grid-cols-1 xl:gap-x-28",
                    children: [
                      {
                        id: "ava",
                        name: "Uncensored AVA",
                        imgUrl: "/assets/avaLogo.png",
                      },
                    ].map((e, s) =>
                      (0, n.jsx)(
                        "div",
                        {
                          onClick: () => {
                            "ava" === e.id && t(!0);
                          },
                          children: (0, n.jsx)(a, {
                            title: "",
                            imgSrc: e.imgUrl,
                          }),
                        },
                        s
                      )
                    ),
                  }),
                }),
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [3145, 2971, 2117, 1744], function () {
      return e((e.s = 83902));
    }),
      (_N_E = e.O());
  },
]);
