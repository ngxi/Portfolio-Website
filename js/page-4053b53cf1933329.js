

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5004: function (e, a, r) {
      Promise.resolve().then(r.bind(r, 1262));
    },
    1262: function (e, a, r) {
      "use strict";
      r.r(a),
        r.d(a, {
          default: function () {
            return I;
          },
        });
      var t = r(7437),
        s = r(2265),
        n = r(3145),
        o = r(7648),
        l = r(595),
        i = r(572),
        d = r(6747),
        c = r(8012),
        h = r(8880),
        m = r(7350),
        u = r(8954),
        g = r(1846),
        p = r(3246),
        x = r(5980),
        b = r(9098),
        v = r(9596),
        f = r(4908),
        j = r(5922),
        k = r(5293),
        N = r(535),
        w = r(1994),
        y = r(3335);
      function A() {
        for (var e = arguments.length, a = Array(e), r = 0; r < e; r++)
          a[r] = arguments[r];
        return (0, y.m6)((0, w.W)(a));
      }
      let _ = (0, N.j)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                  "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        D = s.forwardRef((e, a) => {
          let { className: r, variant: s, size: n, asChild: o = !1, ...l } = e,
            i = o ? k.g7 : "button";
          return (0, t.jsx)(i, {
            className: A(_({ variant: s, size: n, className: r })),
            ref: a,
            ...l,
          });
        });
      function I() {
        let { theme: e, setTheme: a } = (0, j.F)(),
          [r, k] = s.useState(!1),
          [N, w] = s.useState("about");
        s.useEffect(() => k(!0), []);
        let y = (e) => {
          let a = document.getElementById(e);
          a && (a.scrollIntoView({ behavior: "smooth" }), w(e));
        };
        return (0, t.jsxs)("div", {
          id: "about",
          className:
            "min-h-screen bg-white dark:bg-black text-neutral-800 dark:text-neutral-200 p-6",
          children: [
            (0, t.jsx)("div", {
              className: "max-w-7xl mx-auto",
              children: (0, t.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8",
                children: [
                  (0, t.jsxs)("div", {
                    className: "lg:sticky lg:top-6 h-fit space-y-8",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex items-center justify-between gap-8",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex items-center gap-4 group",
                            children: [
                              (0, t.jsx)(n.default, {
                                // Here to change the portifolio photo
                                src: "images/IMG_1229.JPG",
                                alt: "Nawaf Alharbi",
                                width: 60,
                                height: 60,
                                className:
                                  "rounded-full transition-transform duration-300 group-hover:scale-105",
                              }),
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("h1", {
                                    className: "text-2xl font-mono",
                                    children: "Nawaf Alharbi",
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-neutral-600 dark:text-neutral-400",
                                    children: "Data Analyst & BI Analyst",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)(D, {
                            variant: "ghost",
                            size: "icon",
                            className: "rounded-full",
                            onClick: () => a("dark" === e ? "light" : "dark"),
                            children: [
                              r && "dark" === e
                                ? (0, t.jsx)(l.Z, { className: "h-5 w-5" })
                                : (0, t.jsx)(i.Z, { className: "h-5 w-5" }),
                              (0, t.jsx)("span", {
                                className: "sr-only",
                                children: "Toggle theme",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, t.jsx)("p", {
                            className:
                              "text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed",
                            children:
                              "Data Analyst & BI Analyst with hands-on expertise in data manipulation, preprocessing, and data visualization through real-life projects. Skilled in Excel, SQL, Python and it's libraries including Pandas, NumPy, Matplotlib.",
                          }),
                          (0, t.jsx)(D, {
                            variant: "outline",
                            className:
                              "rounded-lg transition-all duration-300 hover:bg-neutral-800 hover:text-white bg-black text-white dark:bg-white dark:text-black dark:hover:bg-neutral-200",
                            onClick: () => {
                              window.open(
                                 "https://drive.google.com/uc?export=download&id=1KG0_atPgdFvD_GzPHhtcIBzQ0pA6Nuyp",
                                "_blank"
                              );
                            },
                            children: "Download My Resume",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "space-y-3",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "flex items-center gap-2 text-neutral-600 dark:text-neutral-400",
                            children: [
                              (0, t.jsx)(d.Z, { className: "h-4 w-4" }),
                              (0, t.jsxs)("span", {
                                children: [
                                  (0, t.jsx)("a", {
                                    href: "mailto:nawaf.essa.alharbi@gmail.com",
                                    className:
                                      "hover:text-neutral-900 dark:hover:text-neutral-100",
                                  }),
                                  "nawaf.essa.alharbi@gmail.com",
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex items-center gap-2 text-neutral-600 dark:text-neutral-400",
                            children: [
                              (0, t.jsx)(c.Z, { className: "h-4 w-4" }),
                              (0, t.jsx)("span", { children: "Riyadh, Saudi Arabia" }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex items-center gap-2 text-neutral-600 dark:text-neutral-400",
                            children: [
                              (0, t.jsx)(h.Z, { className: "h-4 w-4" }),
                              (0, t.jsxs)("span", {
                                children: [
                                  " ",
                                  (0, t.jsx)("a", {
                                    href: "tel:+966570620825",
                                    className:
                                      "hover:text-neutral-900 dark:hover:text-neutral-100",
                                  }),
                                  "+966 570620825",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "text-xl font-mono",
                            children: "Core Technologies",
                          }),
                          (0, t.jsx)("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                              "Excel",
                              "SQL",
                              "Python",
                              "Tableau",
                              "Pandas",
                              "Matplotlib",
                              "Seaborn",
                              "NumPy",
                              "Git",
                              "GitHub",
                              "Microsoft SQL Server",
                              "RapidMiner",


                            ].map((e, a) =>
                              (0, t.jsx)(
                                "span",
                                {
                                  className:
                                    "bg-neutral-100 text-neutral-800 text-sm font-medium px-2.5 py-0.5 rounded-md transition-colors duration-300 hover:bg-neutral-200 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-200",
                                  children: e,
                                },
                                a
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "space-y-4",
                        children: (0, t.jsx)("div", {
                          className: "flex gap-4",
                          children: [
                            
                            // LinkedIn
                            {
                              icon: (0, t.jsx)(b.Z, { className: "w-5 h-5" }),
                              label: "LinkedIn",
                              href: "https://www.linkedin.com/in/nawaf-alharbi-618b761ab/",
                            },

                            // Github
                            {
                              icon: (0, t.jsx)(v.Z, { className: "w-5 h-5" }),
                              label: "GitHub",
                              href: "https://github.com/ngxi",
                            },

                            // X
                           // The xmlns define the svg the I have it from font awsome  
                            {
                              icon: (0, t.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 512 512",
                              className: "w-5 h-5",
                              fill: "currentColor",
                              children: (0, t.jsx)("path", {
                              d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                              }),
                            }),
                            label: "X",
                            href: "https://x.com/NawafEAlharbi",
                            },

                            // Kaggle 
                            {
                              icon: (0, t.jsx)(n.default, {
                                src: "./images/image (4).png",
                                alt: "Kaggle",
                                width: 20,
                                height: 20,
                              }),
                              label: "Kaggle",
                              href: "https://www.kaggle.com/nawafealharbi",
                            },
                          ].map((e, a) =>
                            (0, t.jsx)(
                              D,
                              {
                                variant: "ghost",
                                size: "icon",
                                className:
                                  "transition-all duration-300 hover:scale-110 hover:bg-neutral-100 dark:hover:bg-neutral-800",
                                asChild: !0,
                                children: (0, t.jsx)(o.default, {
                                  href: e.href,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  "aria-label": e.label,
                                  children: e.icon,
                                }),
                              },
                              a
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "space-y-8",
                    children: [
                      //Experience Section
                      
                      // (0, t.jsxs)("section", {
                      //   id: "experience",
                      //   className:
                      //     "border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm",
                      //   children: [
                      //     (0, t.jsx)("h2", {
                      //       className: "text-2xl font-mono mb-6",
                      //       children: "Experience",
                      //     }),
                      //     (0, t.jsx)("div", {
                      //       className: "space-y-8",
                      //       children: [
                      //         {
                      //           logo: "https://framerusercontent.com/images/1tm1waPbgpItjuf1cKjZekKkYYw.jpeg",
                      //           role: "AI & Machine Learning COOP",
                      //           company: "@ShAI for AI",
                      //           period: "07/2024 - 10/2024",
                      //           description:
                      //             "Focusing on data preprocessing, feature engineering, and model training using Python, TensorFlow, and Pandas. Gained experience in predictive analytics, natural language processing, and data visualization.",
                      //         },
                      //         {
                      //           logo: "https://framerusercontent.com/images/aB7I3zGWfTnmxvFDbkJ8s5Qqf1w.jpg?scale-down-to=512",
                      //           role: "Python Developer Internship",
                      //           company: "@Ahli Bank",
                      //           period: "10/2022 - 2023/02",
                      //           description:
                      //             "Gained experience in structured data management, AWS cloud solutions, and database design. Worked on data processing and automation tasks using Python, contributing to cloud-based data infrastructure projects.",
                      //         },
                      //       ].map((e, a) =>
                      //         (0, t.jsxs)(
                      //           "div",
                      //           {
                      //             className: "flex gap-4 group",
                      //             children: [
                      //               (0, t.jsx)("div", {
                      //                 className: "flex flex-col items-start",
                      //                 children: (0, t.jsx)(n.default, {
                      //                   src: e.logo || "/placeholder.svg",
                      //                   alt: e.company,
                      //                   width: 48,
                      //                   height: 48,
                      //                   className:
                      //                     "rounded-xl border border-neutral-300 dark:border-neutral-700 transition-transform duration-300 group-hover:scale-105",
                      //                 }),
                      //               }),
                      //               (0, t.jsxs)("div", {
                      //                 className: "flex-1",
                      //                 children: [
                      //                   (0, t.jsxs)("div", {
                      //                     className:
                      //                       "flex items-center gap-2 mb-1",
                      //                     children: [
                      //                       (0, t.jsx)("h3", {
                      //                         className:
                      //                           "text-xl font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
                      //                         children: e.role,
                      //                       }),
                      //                       (0, t.jsx)("span", {
                      //                         className:
                      //                           "text-neutral-500 dark:text-neutral-400 text-sm",
                      //                         children: e.company,
                      //                       }),
                      //                     ],
                      //                   }),
                      //                   (0, t.jsx)("p", {
                      //                     className:
                      //                       "text-neutral-600 dark:text-neutral-400 mb-2",
                      //                     children: e.period,
                      //                   }),
                      //                   (0, t.jsx)("p", {
                      //                     className:
                      //                       "text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl",
                      //                     children: e.description,
                      //                   }),
                      //                 ],
                      //               }),
                      //             ],
                      //           },
                      //           a
                      //         )
                      //       ),
                      //     }),
                      //   ],
                      // }),
                      (0, t.jsxs)("section", {
                        id: "education",
                        className:
                          "border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "text-2xl font-mono mb-6",
                            children: "Education",
                          }),
                          (0, t.jsx)("div", {
                            className: "space-y-6",
                            children: [
                              {
                                degree: "Bachelor's of Information Systems",
                                university: "Imam Muhammad Bin Saud Islamic University",
                                period: "2021 - Present ",
                                description:
                                  "Pursuing a Bachelor's degree in Information Systems, which has equipped me with key skills such as Python, SQL, Tableau.",
                                logo: "images/imamu.jpg",
                              },
                            ].map((e, a) =>
                              (0, t.jsxs)(
                                "div",
                                {
                                  className: "flex gap-4 group",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: "flex flex-col items-start",
                                      children: (0, t.jsx)(n.default, {
                                        src: e.logo || "/placeholder.svg",
                                        alt: e.university,
                                        width: 48,
                                        height: 48,
                                        className:
                                          "rounded-xl border border-neutral-300 dark:border-neutral-700 transition-transform duration-300 group-hover:scale-105",
                                      }),
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex-1",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className:
                                            "flex items-center gap-2 mb-1",
                                          children: [
                                            (0, t.jsx)("h3", {
                                              className:
                                                "text-xl font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
                                              children: e.degree,
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 dark:text-neutral-400 text-sm",
                                              children: e.university,
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)("p", {
                                          className:
                                            "text-neutral-600 dark:text-neutral-400 mb-2",
                                          children: e.period,
                                        }),
                                        (0, t.jsx)("p", {
                                          className:
                                            "text-neutral-600 dark:text-neutral-400 leading-relaxed",
                                          children: e.description,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                a
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("section", {
                        id: "skills",
                        className:
                          "border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                              (0, t.jsx)("h2", {
                                className: "text-2xl font-mono",
                                children: "My Stack",
                              }),
                              (0, t.jsxs)(D, {
                                variant: "ghost",
                                size: "icon",
                                className:
                                  "transition-transform duration-300 hover:scale-110 dark:hover:bg-neutral-700",
                                children: [
                                  (0, t.jsx)("span", {
                                    className: "sr-only",
                                    children: "View all tools",
                                  }),
                                  "→",
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                              (0, t.jsxs)("div", {
                                className:
                                  "border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-600 dark:hover:shadow-sm",
                                children: [
                                  (0, t.jsx)("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Coding",
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: [
                                      {
                                        name: "Python",
                                        logo: "./images/py.jpg",
                                        url: "https://www.python.org/",
                                      },
                                      {
                                        name: "SQL",
                                        logo: "https://www.netgen.co.za/wp-content/uploads/2023/05/SQL-Database.png",
                                        url: "",
                                      },
                                      {
                                        name: "Matplotlib",
                                        logo: "images/matplotlib.png",
                                        url: "https://matplotlib.org",
                                      },
                                      {
                                        name: "Seaborn",
                                        logo: "images/seaborn.png",
                                        url: "https://seaborn.pydata.org",
                                      },
                                      {
                                        name: "NumPy",
                                        logo: "https://logosandtypes.com/wp-content/uploads/2024/02/NumPy.png",
                                        url: "https://numpy.org/",
                                      },
                                      {
                                        name: "Pandas",
                                        logo: "./images/pandas-logo-776F6D45BB-seeklogo.com.png",
                                        url: "https://pandas.pydata.org/",
                                      },
                                    ].map((e) =>
                                      (0, t.jsxs)(
                                        o.default,
                                        {
                                          href: e.url,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "flex flex-col items-center group",
                                          children: [
                                            (0, t.jsx)("div", {
                                              className:
                                                "w-12 h-12 border border-neutral-200 dark:border-neutral-700 rounded-lg mb-2 transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-sm dark:group-hover:border-neutral-600 dark:group-hover:shadow-sm overflow-hidden",
                                              children: (0, t.jsx)(n.default, {
                                                src:
                                                  e.logo || "/placeholder.svg",
                                                alt: e.name,
                                                width: 48,
                                                height: 48,
                                                className: "object-contain",
                                              }),
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
                                              children: e.name,
                                            }),
                                          ],
                                        },
                                        e.name
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-600 dark:hover:shadow-sm",
                                children: [
                                  (0, t.jsx)("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Tools",
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: [
                                      {
                                        name: "Tableau",
                                        logo: "https://live.staticflickr.com/979/42099499622_eca95d19b4_w.jpg",
                                        url: "https://www.tableau.com/",
                                      },
                                      // {
                                      //   name: "PowerBI",
                                      //   logo: "https://sc.filehippo.net/images/t_app-icon-l/p/cb69b4e3-1689-432d-9b6d-7a0f62797189/2399238384/power-bi-desktop-logo",
                                      //   url: "https://powerbi.microsoft.com/",
                                      // },
                                      {
                                        name: "Excel",
                                        logo: "https://i.pinimg.com/736x/19/92/91/1992917f382f70752f1327c6f10e0a7a.jpg",
                                        url: "https://www.microsoft.com/en-us/microsoft-365/excel",
                                      },
                                      {
                                        name: "Jupyter Notebook",
                                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEFAfIN6GmkRTzI_mDlRhhq67QGimI-pKFw&s",
                                        url: "https://jupyter.org/",
                                      },
                                    ].map((e) =>
                                      (0, t.jsxs)(
                                        o.default,
                                        {
                                          href: e.url,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "flex flex-col items-center group",
                                          children: [
                                            (0, t.jsx)("div", {
                                              className:
                                                "w-12 h-12 border border-neutral-200 dark:border-neutral-700 rounded-lg mb-2 transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-sm dark:group-hover:border-neutral-600 dark:group-hover:shadow-sm overflow-hidden",
                                              children: (0, t.jsx)(n.default, {
                                                src:
                                                  e.logo || "/placeholder.svg",
                                                alt: e.name,
                                                width: 48,
                                                height: 48,
                                                className: "object-contain",
                                              }),
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
                                              children: e.name,
                                            }),
                                          ],
                                        },
                                        e.name
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-600 dark:hover:shadow-sm",
                                children: [
                                  (0, t.jsx)("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Deployment",
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: [
                                      {
                                        name: "GitHub",
                                        logo: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png",
                                        url: "https://github.com/",
                                      },
                                      // {
                                      //   name: "AWS",
                                      //   logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s",
                                      //   url: "https://aws.amazon.com/",
                                      // },
                                  
                                      // {
                                      //   name: "Oracle",
                                      //   logo: "https://eu-images.contentstack.com/v3/assets/blt10e444bce2d36aa8/blte0bfa2f46eeb3f01/652652328d2fca2c26ae16f2/oracle_0.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale",
                                      //   url: "https://www.oracle.com/jo/database/",
                                      // },
                                    ].map((e) =>
                                      (0, t.jsxs)(
                                        o.default,
                                        {
                                          href: e.url,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "flex flex-col items-center group",
                                          children: [
                                            (0, t.jsx)("div", {
                                              className:
                                                "w-12 h-12 border border-neutral-200 dark:border-neutral-700 rounded-lg mb-2 transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-sm dark:group-hover:border-neutral-600 dark:group-hover:shadow-sm overflow-hidden",
                                              children: (0, t.jsx)(n.default, {
                                                src:
                                                  e.logo || "/placeholder.svg",
                                                alt: e.name,
                                                width: 48,
                                                height: 48,
                                                className: "object-contain",
                                              }),
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
                                              children: e.name,
                                            }),
                                          ],
                                        },
                                        e.name
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("section", {
                        id: "projects",
                        className:
                          "border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                              (0, t.jsx)("h2", {
                                className: "text-2xl font-mono",
                                children: "Projects",
                              }),
                              (0, t.jsxs)(D, {
                                variant: "ghost",
                                size: "icon",
                                className:
                                  "transition-transform duration-300 hover:scale-110 dark:hover:bg-neutral-700",
                                children: [
                                  (0, t.jsx)("span", {
                                    className: "sr-only",
                                    children: "View all projects",
                                  }),
                                  "→",
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                              {
                                name: "Salary Prediction",
                                description:"We applied Business Intelligence techniques to analyze real-world dataset related to salaries.",
                                image: "images/Dashboard.png",
                                link: "https://github.com/ngxi/SalaryPrediction",
                              },
                              {
                                name: "Analyzing Students' Mental Health",
                                description:"Does going to university in a different country affect your mental health?",
                                image: "images/Mental.JPG",
                                link: "https://github.com/ngxi/MentalHealthProject",
                              },
                              {
                                name: "NYC Schools SAT Results",
                                description: 
                                "In this project I got many information from SAT exams data for New York high school students, like Best schools in math sorted by average marks and Top 10 performing schools based on the combined SAT scores.",
                                image:"images/code.png",
                                link: "https://github.com/ngxi/NYC_test_results",
                              },
                              {
                                name: "Netflix Project",
                                description: 
                                "In this project, I have answered many questions about Netflix's movies data frame, like how many short action movies in 90s and many more.",
                                image:"images/netflix.png",
                                link: "https://github.com/ngxi/Netflix_project",
                              },
                                {
                                name: "Creating a hospital’s database",
                                description: 
                                "We made a sample database for the National Guard hospital using Oracle apex.",
                                image:"images/hospital.png",
                                link: "https://drive.google.com/drive/folders/1Y8-cEDBzp4MBom8COQtlrtzGIiqZn4Gu?usp=share_link",
                              },


                              
                            ].map((e, a) =>
                              (0, t.jsxs)(
                                "div",
                                {
                                  className:
                                    "relative aspect-square bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:hover:border-neutral-600 dark:hover:shadow-md group",
                                  children: [
                                    (0, t.jsx)(n.default, {
                                      src: e.image || "/placeholder.svg",
                                      alt: e.name,
                                      fill: !0,
                                      className:
                                        "object-cover transition-transform duration-300 group-hover:scale-105",
                                    }),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4",
                                      children: [
                                        (0, t.jsx)("h3", {
                                          className:
                                            "text-white dark:text-neutral-100 font-semibold mb-2",
                                          children: e.name,
                                        }),
                                        (0, t.jsx)("p", {
                                          className:
                                            "text-neutral-200 dark:text-neutral-300 text-sm mb-4",
                                          children: e.description,
                                        }),
                                        (0, t.jsx)(o.default, {
                                          href: e.link,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "text-blue-400 dark:text-blue-300 hover:text-blue-300 dark:hover:text-blue-200 transition-colors duration-300",
                                          children: "View Project →",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                a
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("section", {
                        className:
                          "border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "text-2xl font-mono mb-6",
                            children: "Certificates",
                          }),
                          (0, t.jsxs)("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [
                              (0, t.jsxs)("div", {
                                children: [
                                
                                  (0, t.jsx)("div", {
                                    className: "space-y-4",
                                    children: [
                                      {
                                        logo: "images/google.JPG",
                                        title: "Tools of the Trade: Linux and SQL",
                                        org: "Google",
                                        year: "2024",
                                      },
                                      {
                                        logo: "https://yt3.googleusercontent.com/ytc/AIdro_m6psai1Pd5oG3nGbw_hVfG-qmJ8R1ntco83MTXDf5cdoo=s900-c-k-c0x00ffffff-no-rj",
                                        title: "Intermediate Python",
                                        org: "DataCamp",
                                        year: "2025",
                                      },
                                      {
                                        logo: "https://yt3.googleusercontent.com/ytc/AIdro_m6psai1Pd5oG3nGbw_hVfG-qmJ8R1ntco83MTXDf5cdoo=s900-c-k-c0x00ffffff-no-rj",
                                        title: "Intermediate SQL",
                                        org: "DataCamp",
                                        year: "2025",
                                      },
                                    ].map((e, a) =>
                                      (0, t.jsxs)(
                                        "div",
                                        {
                                          className: "flex gap-3 group",
                                          children: [
                                            (0, t.jsx)(n.default, {
                                              src: e.logo || "/placeholder.svg",
                                              alt: e.org,
                                              width: 40,
                                              height: 40,
                                              className:
                                                "rounded-lg transition-transform duration-300 group-hover:scale-105",
                                            }),
                                            (0, t.jsxs)("div", {
                                              children: [
                                                (0, t.jsx)("h4", {
                                                  className:
                                                    "font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
                                                  children: e.title,
                                                }),
                                                (0, t.jsxs)("p", {
                                                  className:
                                                    "text-sm text-neutral-600 dark:textneutral-400",
                                                  children: [
                                                    e.org,
                                                    " - ",
                                                    e.year,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            " ",
                                          ],
                                        },
                                        a
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              // Top
                              // (0, t.jsxs)("div", {
                              //   children: [
                              //     // (0, t.jsx)("h3", {
                              //     //   className:
                              //     //     "text-neutral-500 dark:text-neutral-400 mb-4",
                              //     //   children: "My Top Achievements",
                              //     // }),
                              //     (0, t.jsx)("div", {
                              //       className: "space-y-4",
                              //       children: [
                              //         {
                              //           logo: "https://erc-jordan.org/wp-content/uploads/2024/03/psut.jpg",
                              //           title: "PSUT best project",
                              //           desc: "Award for winning the best startup idea",
                              //         },
                              //         {
                              //           logo: "https://cdn.worldvectorlogo.com/logos/nasa-1.svg",
                              //           title:
                              //             "First place NASA AI competition",
                              //           desc: "First place in NASA competition for best project in artificial intelligence",
                              //         },
                              //         {
                              //           logo: "https://irc-jordan.com/wp-content/uploads/2023/02/BIG-by-Orange.png",
                              //           title: "Orange Incubator",
                              //           desc: "6-month journey at Orange Incubator learning AI startup product development",
                              //         },
                              //       ].map((e, a) =>
                              //         (0, t.jsxs)(
                              //           "div",
                              //           {
                              //             className: "flex gap-3 group",
                              //             children: [
                              //               (0, t.jsx)(n.default, {
                              //                 src: e.logo || "/placeholder.svg",
                              //                 alt: e.title,
                              //                 width: 48,
                              //                 height: 48,
                              //                 className:
                              //                   "rounded-lg transition-transform duration-300 group-hover:scale-105",
                              //               }),
                              //               (0, t.jsxs)("div", {
                              //                 children: [
                              //                   (0, t.jsx)("h4", {
                              //                     className:
                              //                       "font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
                              //                     children: e.title,
                              //                   }),
                              //                   (0, t.jsx)("p", {
                              //                     className:
                              //                       "text-sm text-neutral-600 dark:text-neutral-400",
                              //                     children: e.desc,
                              //                   }),
                              //                 ],
                              //               }),
                              //             ],
                              //           },
                              //           a
                              //         )
                              //       ),
                              //     }),
                              //   ],
                              // }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("section", {
                        id: "contact",
                        className:
                          "border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "text-2xl font-mono mb-6",
                            children: "Contact",
                          }),
                          (0, t.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "grid grid-cols-2 items-center",
                                children: [
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-neutral-500 dark:text-neutral-400",
                                    children: "Email",
                                  }),
                                  (0, t.jsx)("a", {
                                    href: "mailto:nawaf.essa.alharbi@gmail.com",
                                    className:
                                      "hover:text-neutral-900 dark:hover:text-neutral-100",
                                    children: "nawaf.essa.alharbi@gmail.com",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "grid grid-cols-2 items-center",
                                children: [
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-neutral-500 dark:text-neutral-400",
                                    children: "Phone",
                                  }),
                                  (0, t.jsx)("a", {
                                    href: "tel:+966570620825",
                                    className:
                                      "hover:text-neutral-900 dark:hover:text-neutral-100",
                                    children: "+966570620825",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "grid grid-cols-2 items-center",
                                children: [
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-neutral-500 dark:text-neutral-400",
                                    children: "LinkedIn",
                                  }),
                                  (0, t.jsx)("a", {
                                    href: "https://www.linkedin.com/in/nawaf-alharbi-618b761ab/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "hover:text-neutral-900 dark:hover:text-neutral-100",
                                    children: "nawaf-alharbi-618b761ab",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "grid grid-cols-2 items-center",
                                children: [
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-neutral-500 dark:text-neutral-400",
                                    children: "Github",
                                  }),
                                  (0, t.jsx)("a", {
                                    href: "https://github.com/ngxi",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "hover:text-neutral-900 dark:hover:text-neutral-100",
                                    children: "ngxi",
                                  }),
                                ],
                              }),
                         
                              (0, t.jsxs)("div", {
                                className: "grid grid-cols-2 items-center",
                                children: [
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-neutral-500 dark:text-neutral-400",
                                    children: "X",
                                  }),
                                  (0, t.jsx)("a", {
                                    href: "https://x.com/NawafEAlharbi",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "hover:text-neutral-900 dark:hover:text-neutral-100",
                                    children: "NawafEAlharbi",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "grid grid-cols-2 items-center",
                                children: [
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-neutral-500 dark:text-neutral-400",
                                    children: "Kaggle",
                                  }),
                                  (0, t.jsx)("a", {
                                    href: "https://www.kaggle.com/nawafealharbi",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "hover:text-neutral-900 dark:hover:text-neutral-100",
                                    children: "nawafealharbi",
                                  }),
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
            "",
            (0, t.jsx)("div", {
              className:
                "fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 border border-neutral-200 dark:border-neutral-800",
              children: (0, t.jsx)("div", {
                className: "flex items-center space-x-4",
                children: [
                  {
                    icon: (0, t.jsx)(m.Z, { className: "w-4 h-4" }),
                    label: "About",
                    section: "about",
                  },
                  // {
                  //   icon: (0, t.jsx)(u.Z, { className: "w-4 h-4" }),
                  //   label: "Experience",
                  //   section: "experience",
                  // },
                  {
                    icon: (0, t.jsx)(g.Z, { className: "w-4 h-4" }),
                    label: "Education",
                    section: "education",
                  },
                    {
                    icon: (0, t.jsx)(x.Z, { className: "w-4 h-4" }),
                    label: "Tech Stack",
                    section: "skills",
                  },
                  {
                    icon: (0, t.jsx)(p.Z, { className: "w-4 h-4" }),
                    label: "Projects",
                    section: "projects",
                  },
                  {
                    icon: (0, t.jsx)(d.Z, { className: "w-4 h-4" }),
                    label: "Contact",
                    section: "contact",
                  },
                ].map((e) => {
                  let { icon: a, label: r, section: s } = e;
                  return (0, t.jsxs)(
                    "div",
                    {
                      className: "relative group",
                      children: [
                        (0, t.jsxs)("button", {
                          onClick: () => y(s),
                          className: A(
                            "p-2 rounded-full transition-colors duration-200",
                            N === s
                              ? "text-white bg-neutral-800 dark:bg-neutral-700"
                              : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                          ),
                          children: [
                            a,
                            (0, t.jsx)("span", {
                              className: "sr-only",
                              children: r,
                            }),
                          ],
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "absolute -top-10 left-1/2 -translate-x-1/2 bg-black dark:bg-neutral-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                          children: r,
                        }),
                      ],
                    },
                    s
                  );
                }),
              }),
            }),
          ],
        });
      }
      D.displayName = "Button";
    },
  },
  function (e) {
    e.O(0, [937, 971, 117, 744], function () {
      return e((e.s = 5004));
    }),
      (_N_E = e.O());
  },
]);
