"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [937],
  {
    3145: function (e, t, r) {
      r.d(t, {
        default: function () {
          return o.a;
        },
      });
      var n = r(8461),
        o = r.n(n);
    },
    7648: function (e, t, r) {
      r.d(t, {
        default: function () {
          return o.a;
        },
      });
      var n = r(2972),
        o = r.n(n);
    },
    5449: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(8521);
      let n = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6958: function (e, t, r) {
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(8521),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5878: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let n = r(7043),
        o = r(3099),
        l = r(7437),
        i = o._(r(2265)),
        a = n._(r(4887)),
        s = n._(r(8293)),
        u = r(5346),
        c = r(128),
        d = r(2589);
      r(1765);
      let f = r(5523),
        p = n._(r(5084)),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image/",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function m(e, t, r, n, o, l, i) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function g(e) {
        return i.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let b = (0, i.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: n,
          sizes: o,
          height: a,
          width: s,
          decoding: u,
          className: c,
          style: d,
          fetchPriority: f,
          placeholder: p,
          loading: h,
          unoptimized: b,
          fill: y,
          onLoadRef: v,
          onLoadingCompleteRef: w,
          setBlurComplete: x,
          setShowAltText: k,
          sizesInput: j,
          onLoad: _,
          onError: P,
          ...S
        } = e;
        return (0, l.jsx)("img", {
          ...S,
          ...g(f),
          loading: h,
          width: s,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: d,
          sizes: o,
          srcSet: n,
          src: r,
          ref: (0, i.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (P && (e.src = e.src), e.complete && m(e, p, v, w, x, b, j));
            },
            [r, p, v, w, x, P, b, j, t]
          ),
          onLoad: (e) => {
            m(e.currentTarget, p, v, w, x, b, j);
          },
          onError: (e) => {
            k(!0), "empty" !== p && x(!0), P && P(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...g(r.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(r.src, n), null)
          : (0, l.jsx)(s.default, {
              children: (0, l.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let v = (0, i.forwardRef)((e, t) => {
        let r = (0, i.useContext)(f.RouterContext),
          n = (0, i.useContext)(d.ImageConfigContext),
          o = (0, i.useMemo)(() => {
            let e = h || n || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: a, onLoadingComplete: s } = e,
          m = (0, i.useRef)(a);
        (0, i.useEffect)(() => {
          m.current = a;
        }, [a]);
        let g = (0, i.useRef)(s);
        (0, i.useEffect)(() => {
          g.current = s;
        }, [s]);
        let [v, w] = (0, i.useState)(!1),
          [x, k] = (0, i.useState)(!1),
          { props: j, meta: _ } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: v,
            showAltText: x,
          });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(b, {
              ...j,
              unoptimized: _.unoptimized,
              placeholder: _.placeholder,
              fill: _.fill,
              onLoadRef: m,
              onLoadingCompleteRef: g,
              setBlurComplete: w,
              setShowAltText: k,
              sizesInput: e.sizes,
              ref: t,
            }),
            _.priority
              ? (0, l.jsx)(y, { isAppRouter: !r, imgAttributes: j })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2972: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = r(7043),
        o = r(7437),
        l = n._(r(2265)),
        i = r(5246),
        a = r(3552),
        s = r(7497),
        u = r(3987),
        c = r(5449),
        d = r(5523),
        f = r(1956),
        p = r(6081),
        h = r(6958),
        m = r(1634),
        g = r(4673),
        b = new Set();
      function y(e, t, r, n, o, l) {
        if ("undefined" != typeof window && (l || (0, a.isLocalURL)(t))) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (b.has(o)) return;
            b.add(o);
          }
          (async () => (l ? e.prefetch(t, o) : e.prefetch(t, r, n)))().catch(
            (e) => {}
          );
        }
      }
      function v(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e);
      }
      let w = l.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: s,
          as: b,
          children: w,
          prefetch: x = null,
          passHref: k,
          replace: j,
          shallow: _,
          scroll: P,
          locale: S,
          onClick: O,
          onMouseEnter: M,
          onTouchStart: C,
          legacyBehavior: E = !1,
          ...R
        } = e;
        (r = w),
          E &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let z = l.default.useContext(d.RouterContext),
          N = l.default.useContext(f.AppRouterContext),
          I = null != z ? z : N,
          A = !z,
          L = !1 !== x,
          T = null === x ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: W, as: U } = l.default.useMemo(() => {
            if (!z) {
              let e = v(s);
              return { href: e, as: b ? v(b) : e };
            }
            let [e, t] = (0, i.resolveHref)(z, s, !0);
            return { href: e, as: b ? (0, i.resolveHref)(z, b) : t || e };
          }, [z, s, b]),
          Z = l.default.useRef(W),
          D = l.default.useRef(U);
        E && (n = l.default.Children.only(r));
        let F = E ? n && "object" == typeof n && n.ref : t,
          [G, $, V] = (0, p.useIntersection)({ rootMargin: "200px" }),
          q = l.default.useCallback(
            (e) => {
              (D.current !== U || Z.current !== W) &&
                (V(), (D.current = U), (Z.current = W)),
                G(e),
                F &&
                  ("function" == typeof F
                    ? F(e)
                    : "object" == typeof F && (F.current = e));
            },
            [U, F, W, V, G]
          );
        l.default.useEffect(() => {
          I && $ && L && y(I, W, U, { locale: S }, { kind: T }, A);
        }, [U, W, $, S, L, null == z ? void 0 : z.locale, I, A, T]);
        let B = {
          ref: q,
          onClick(e) {
            E || "function" != typeof O || O(e),
              E &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              I &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, i, s, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, a.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == s || s;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: i,
                          locale: u,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](n || r, { scroll: e });
                  };
                  c ? l.default.startTransition(f) : f();
                })(e, I, W, U, j, _, P, S, A);
          },
          onMouseEnter(e) {
            E || "function" != typeof M || M(e),
              E &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              I &&
                (L || !A) &&
                y(
                  I,
                  W,
                  U,
                  { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: T },
                  A
                );
          },
          onTouchStart: function (e) {
            E || "function" != typeof C || C(e),
              E &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              I &&
                (L || !A) &&
                y(
                  I,
                  W,
                  U,
                  { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: T },
                  A
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(U)) B.href = U;
        else if (!E || k || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== S ? S : null == z ? void 0 : z.locale,
            t =
              (null == z ? void 0 : z.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                U,
                e,
                null == z ? void 0 : z.locales,
                null == z ? void 0 : z.domainLocales
              );
          B.href =
            t ||
            (0, m.addBasePath)(
              (0, c.addLocale)(U, e, null == z ? void 0 : z.defaultLocale)
            );
        }
        return E
          ? l.default.cloneElement(n, B)
          : (0, o.jsx)("a", { ...R, ...B, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3515: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5246: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let n = r(8637),
        o = r(7497),
        l = r(7053),
        i = r(3987),
        a = r(8521),
        s = r(3552),
        u = r(6279),
        c = r(7205);
      function d(e, t, r) {
        let d;
        let f = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          p = f.match(/^[a-zA-Z]{1,}:\/\//),
          h = p ? f.slice(p[0].length) : f;
        if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, i.normalizeRepeatedSlashes)(h);
          f = (p ? p[0] : "") + t;
        }
        if (!(0, s.isLocalURL)(f)) return r ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              { result: i, params: a } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                r
              );
            i &&
              (t = (0, o.formatWithValidation)({
                pathname: i,
                hash: e.hash,
                query: (0, l.omit)(r, a),
              }));
          }
          let i =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [i, t || i] : i;
        } catch (e) {
          return r ? [f] : f;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6081: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(2265),
        o = r(3515),
        l = "function" == typeof IntersectionObserver,
        i = new Map(),
        a = [];
      function s(e) {
        let { rootRef: t, rootMargin: r, disabled: s } = e,
          u = s || !l,
          [c, d] = (0, n.useState)(!1),
          f = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (l) {
              if (u || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = a.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = i.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      a.push(r),
                      i.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    l.set(e, t),
                    o.observe(e),
                    function () {
                      if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                        o.disconnect(), i.delete(n);
                        let e = a.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [u, r, t, c, f.current]),
          [
            p,
            c,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1436: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(7043)._(r(2265)).default.createContext({});
    },
    3964: function (e, t) {
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    42: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return r.test(e) ? e.replace(n, "\\$&") : e;
      }
    },
    5346: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(1765);
      let n = r(6496),
        o = r(128);
      function l(e) {
        return void 0 !== e.default;
      }
      function i(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var r;
        let a,
          s,
          u,
          {
            src: c,
            sizes: d,
            unoptimized: f = !1,
            priority: p = !1,
            loading: h,
            className: m,
            quality: g,
            width: b,
            height: y,
            fill: v = !1,
            style: w,
            overrideSrc: x,
            onLoad: k,
            onLoadingComplete: j,
            placeholder: _ = "empty",
            blurDataURL: P,
            fetchPriority: S,
            decoding: O = "async",
            layout: M,
            objectFit: C,
            objectPosition: E,
            lazyBoundary: R,
            lazyRoot: z,
            ...N
          } = e,
          { imgConf: I, showAltText: A, blurComplete: L, defaultLoader: T } = t,
          W = I || o.imageConfigDefault;
        if ("allSizes" in W) a = W;
        else {
          let e = [...W.deviceSizes, ...W.imageSizes].sort((e, t) => e - t),
            t = W.deviceSizes.sort((e, t) => e - t);
          a = { ...W, allSizes: e, deviceSizes: t };
        }
        if (void 0 === T)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let U = N.loader || T;
        delete N.loader, delete N.srcSet;
        let Z = "__next_img_default" in U;
        if (Z) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = U;
          U = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (M) {
          "fill" === M && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[M];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[M];
          t && !d && (d = t);
        }
        let D = "",
          F = i(b),
          G = i(y);
        if ("object" == typeof (r = c) && (l(r) || void 0 !== r.src)) {
          let e = l(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((s = e.blurWidth),
            (u = e.blurHeight),
            (P = P || e.blurDataURL),
            (D = e.src),
            !v)
          ) {
            if (F || G) {
              if (F && !G) {
                let t = F / e.width;
                G = Math.round(e.height * t);
              } else if (!F && G) {
                let t = G / e.height;
                F = Math.round(e.width * t);
              }
            } else (F = e.width), (G = e.height);
          }
        }
        let $ = !p && ("lazy" === h || void 0 === h);
        (!(c = "string" == typeof c ? c : D) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((f = !0), ($ = !1)),
          a.unoptimized && (f = !0),
          Z && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
          p && (S = "high");
        let V = i(g),
          q = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: C,
                  objectPosition: E,
                }
              : {},
            A ? {} : { color: "transparent" },
            w
          ),
          B =
            L || "empty" === _
              ? null
              : "blur" === _
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: F,
                  heightInt: G,
                  blurWidth: s,
                  blurHeight: u,
                  blurDataURL: P || "",
                  objectFit: q.objectFit,
                }) +
                '")'
              : 'url("' + _ + '")',
          K = B
            ? {
                backgroundSize: q.objectFit || "cover",
                backgroundPosition: q.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: B,
              }
            : {},
          H = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: l,
              sizes: i,
              loader: a,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: u } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: o } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, i),
              c = s.length - 1;
            return {
              sizes: i || "w" !== u ? i : "100vw",
              srcSet: s
                .map(
                  (e, n) =>
                    a({ config: t, src: r, quality: l, width: e }) +
                    " " +
                    ("w" === u ? e : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: t, src: r, quality: l, width: s[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: f,
            width: F,
            quality: V,
            sizes: d,
            loader: U,
          });
        return {
          props: {
            ...N,
            loading: $ ? "lazy" : h,
            fetchPriority: S,
            width: F,
            height: G,
            decoding: O,
            className: m,
            style: { ...q, ...K },
            sizes: H.sizes,
            srcSet: H.srcSet,
            src: x || H.src,
          },
          meta: { unoptimized: f, priority: p, placeholder: _, fill: v },
        };
      }
    },
    8293: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return d;
          },
        });
      let n = r(7043),
        o = r(3099),
        l = r(7437),
        i = o._(r(2265)),
        a = n._(r(7421)),
        s = r(1436),
        u = r(8701),
        c = r(3964);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, l.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, l.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(1765);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(d(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (o) => {
                let l = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (l = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (l = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (l = !1) : r.add(t);
                        else {
                          let e = o.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !i) && r.has(e)
                            ? (l = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return l;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let n = e.key || t;
            if (
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                i.default.cloneElement(e, t)
              );
            }
            return i.default.cloneElement(e, { key: n });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          r = (0, i.useContext)(s.AmpStateContext),
          n = (0, i.useContext)(u.HeadManagerContext);
        return (0, l.jsx)(a.default, {
          reduceComponentsToState: h,
          headManager: n,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6496: function (e, t) {
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: l,
            objectFit: i,
          } = e,
          a = n ? 40 * n : t,
          s = o ? 40 * o : r,
          u = a && s ? "viewBox='0 0 " + a + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === i
            ? "xMidYMid"
            : "cover" === i
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          l +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    2589: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(7043)._(r(2265)),
        o = r(128),
        l = n.default.createContext(o.imageConfigDefault);
    },
    128: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    8461: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = r(7043),
        o = r(5346),
        l = r(5878),
        i = n._(r(5084));
      function a(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image/",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let s = l.Image;
    },
    5084: function (e, t) {
      function r(e) {
        let { config: t, src: r, width: n, quality: o } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          n +
          "&q=" +
          (o || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    5523: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(7043)._(r(2265)).default.createContext(null);
    },
    7497: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return l;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return i;
          },
        });
      let n = r(3099)._(r(8637)),
        o = /https?|ftp|gopher|file/;
      function l(e) {
        let { auth: t, hostname: r } = e,
          l = e.protocol || "",
          i = e.pathname || "",
          a = e.hash || "",
          s = e.query || "",
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (u = t + e.host)
            : r &&
              ((u = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (u += ":" + e.port)),
          s &&
            "object" == typeof s &&
            (s = String(n.urlQueryToSearchParams(s)));
        let c = e.search || (s && "?" + s) || "";
        return (
          l && !l.endsWith(":") && (l += ":"),
          e.slashes || ((!l || o.test(l)) && !1 !== u)
            ? ((u = "//" + (u || "")), i && "/" !== i[0] && (i = "/" + i))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            l +
            u +
            (i = i.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            a
        );
      }
      let i = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(e) {
        return l(e);
      }
    },
    6279: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let n = r(4777),
        o = r(8104);
    },
    7205: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(4199),
        o = r(9964);
      function l(e, t, r) {
        let l = "",
          i = (0, o.getRouteRegex)(e),
          a = i.groups,
          s = (t !== e ? (0, n.getRouteMatcher)(i)(t) : "") || r;
        l = e;
        let u = Object.keys(a);
        return (
          u.every((e) => {
            let t = s[e] || "",
              { repeat: r, optional: n } = a[e],
              o = "[" + (r ? "..." : "") + e + "]";
            return (
              n && (o = (t ? "" : "/") + "[" + o + "]"),
              r && !Array.isArray(t) && (t = [t]),
              (n || e in s) &&
                (l =
                  l.replace(
                    o,
                    r
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (l = ""),
          { params: u, result: l }
        );
      }
    },
    8104: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(1182),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function l(e) {
        return (
          (0, n.isInterceptionRouteAppPath)(e) &&
            (e = (0, n.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    3552: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(3987),
        o = r(1283);
      function l(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    7053: function (e, t) {
      function r(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((n) => {
            t.includes(n) || (r[n] = e[n]);
          }),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    8637: function (e, t) {
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
              ? t[r].push(e)
              : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(o));
          }),
          t
        );
      }
      function l(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return l;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    4199: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(3987);
      function o(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let l = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            i = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                n = o[t.pos];
              void 0 !== n &&
                (i[e] = ~n.indexOf("/")
                  ? n.split("/").map((e) => l(e))
                  : t.repeat
                  ? [l(n)]
                  : l(n));
            }),
            i
          );
        };
      }
    },
    9964: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return f;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return s;
          },
          parseParameter: function () {
            return i;
          },
        });
      let n = r(1182),
        o = r(42),
        l = r(6674);
      function i(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function a(e) {
        let t = (0, l.removeTrailingSlash)(e).slice(1).split("/"),
          r = {},
          a = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = n.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                l = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && l) {
                let { key: e, optional: n, repeat: s } = i(l[1]);
                return (
                  (r[e] = { pos: a++, repeat: s, optional: n }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!l) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: n } = i(l[1]);
                return (
                  (r[e] = { pos: a++, repeat: t, optional: n }),
                  t ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function s(e) {
        let { parameterizedRoute: t, groups: r } = a(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: r };
      }
      function u(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: r,
            segment: n,
            routeKeys: l,
            keyPrefix: a,
          } = e,
          { key: s, optional: u, repeat: c } = i(n),
          d = s.replace(/\W/g, "");
        a && (d = "" + a + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = r()),
          a ? (l[d] = "" + a + s) : (l[d] = s);
        let p = t ? (0, o.escapeStringRegexp)(t) : "";
        return c
          ? u
            ? "(?:/" + p + "(?<" + d + ">.+?))?"
            : "/" + p + "(?<" + d + ">.+?)"
          : "/" + p + "(?<" + d + ">[^/]+?)";
      }
      function c(e, t) {
        let r;
        let i = (0, l.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((r = 0),
            () => {
              let e = "",
                t = ++r;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          s = {};
        return {
          namedParameterizedRoute: i
            .map((e) => {
              let r = n.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                l = e.match(/\[((?:\[.*\])|.+)\]/);
              if (r && l) {
                let [r] = e.split(l[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: r,
                  segment: l[1],
                  routeKeys: s,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return l
                ? u({
                    getSafeRouteKey: a,
                    segment: l[1],
                    routeKeys: s,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: s,
        };
      }
      function d(e, t) {
        let r = c(e, t);
        return {
          ...s(e),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys,
        };
      }
      function f(e, t) {
        let { parameterizedRoute: r } = a(e),
          { catchAll: n = !0 } = t;
        if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = c(e, !1);
        return { namedRegex: "^" + o + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    4777: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class r {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let r = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            r.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            r
          );
        }
        _insert(e, t, n) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let r = o.slice(1, -1),
              i = !1;
            if (
              (r.startsWith("[") &&
                r.endsWith("]") &&
                ((r = r.slice(1, -1)), (i = !0)),
              r.startsWith("...") && ((r = r.substring(3)), (n = !0)),
              r.startsWith("[") || r.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  r +
                  "')."
              );
            if (r.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  r +
                  "')."
              );
            function l(e, r) {
              if (null !== e && e !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    r +
                    "')."
                );
              t.forEach((e) => {
                if (e === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(r);
            }
            if (n) {
              if (i) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                l(this.optionalRestSlugName, r),
                  (this.optionalRestSlugName = r),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                l(this.restSlugName, r), (this.restSlugName = r), (o = "[...]");
              }
            } else {
              if (i)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              l(this.slugName, r), (this.slugName = r), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new r()),
            this.children.get(o)._insert(e.slice(1), t, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(e) {
        let t = new r();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    7421: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(2265),
        o = "undefined" == typeof window,
        l = o ? () => {} : n.useLayoutEffect,
        i = o ? () => {} : n.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function a() {
          if (t && t.mountedInstances) {
            let o = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(o, e));
          }
        }
        if (o) {
          var s;
          null == t || null == (s = t.mountedInstances) || s.add(e.children),
            a();
        }
        return (
          l(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          l(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          i(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3987: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return h;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return b;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return s;
          },
          getLocationOrigin: function () {
            return i;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return l;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return v;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), l = 0; l < n; l++)
            o[l] = arguments[l];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = (e) => o.test(e);
      function i() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function a() {
        let { href: e } = window.location,
          t = i();
        return e.substring(t.length);
      }
      function s(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && u(r)) return n;
        if (!n)
          throw Error(
            '"' +
              s(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let f = "undefined" != typeof performance,
        p =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class h extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class b extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function v(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    5293: function (e, t, r) {
      r.d(t, {
        g7: function () {
          return i;
        },
      });
      var n = r(2265);
      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      var l = r(7437),
        i = n.forwardRef((e, t) => {
          let { children: r, ...o } = e,
            i = n.Children.toArray(r),
            s = i.find(u);
          if (s) {
            let e = s.props.children,
              r = i.map((t) =>
                t !== s
                  ? t
                  : n.Children.count(e) > 1
                  ? n.Children.only(null)
                  : n.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, l.jsx)(a, {
              ...o,
              ref: t,
              children: n.isValidElement(e)
                ? n.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, l.jsx)(a, { ...o, ref: t, children: r });
        });
      i.displayName = "Slot";
      var a = n.forwardRef((e, t) => {
        let { children: r, ...l } = e;
        if (n.isValidElement(r)) {
          let e, i;
          let a =
              (e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) &&
              "isReactWarning" in e &&
              e.isReactWarning
                ? r.ref
                : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) &&
                  "isReactWarning" in e &&
                  e.isReactWarning
                ? r.props.ref
                : r.props.ref || r.ref,
            s = (function (e, t) {
              let r = { ...t };
              for (let n in t) {
                let o = e[n],
                  l = t[n];
                /^on[A-Z]/.test(n)
                  ? o && l
                    ? (r[n] = (...e) => {
                        l(...e), o(...e);
                      })
                    : o && (r[n] = o)
                  : "style" === n
                  ? (r[n] = { ...o, ...l })
                  : "className" === n &&
                    (r[n] = [o, l].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(l, r.props);
          return (
            r.type !== n.Fragment &&
              (s.ref = t
                ? (function (...e) {
                    return (t) => {
                      let r = !1,
                        n = e.map((e) => {
                          let n = o(e, t);
                          return r || "function" != typeof n || (r = !0), n;
                        });
                      if (r)
                        return () => {
                          for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            "function" == typeof r ? r() : o(e[t], null);
                          }
                        };
                    };
                  })(t, a)
                : a),
            n.cloneElement(r, s)
          );
        }
        return n.Children.count(r) > 1 ? n.Children.only(null) : null;
      });
      a.displayName = "SlotClone";
      var s = ({ children: e }) => (0, l.jsx)(l.Fragment, { children: e });
      function u(e) {
        return n.isValidElement(e) && e.type === s;
      }
    },
    535: function (e, t, r) {
      r.d(t, {
        j: function () {
          return i;
        },
      });
      var n = r(1994);
      let o = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        l = n.W,
        i = (e, t) => (r) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return l(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: i, defaultVariants: a } = t,
            s = Object.keys(i).map((e) => {
              let t = null == r ? void 0 : r[e],
                n = null == a ? void 0 : a[e];
              if (null === t) return null;
              let l = o(t) || o(n);
              return i[e][l];
            }),
            u =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return l(
            e,
            s,
            null == t
              ? void 0
              : null === (n = t.compoundVariants) || void 0 === n
              ? void 0
              : n.reduce((e, t) => {
                  let { class: r, className: n, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...a, ...u }[t])
                      : { ...a, ...u }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    1994: function (e, t, r) {
      r.d(t, {
        W: function () {
          return n;
        },
      });
      function n() {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var l = t.length;
                  for (r = 0; r < l; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                } else for (n in t) t[n] && (o && (o += " "), (o += n));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
    },
    6471: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(2265);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        l = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var i = {
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
      let a = (0, n.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: o = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: s,
            className: u = "",
            children: c,
            iconNode: d,
            ...f
          } = e;
          return (0, n.createElement)(
            "svg",
            {
              ref: t,
              ...i,
              width: o,
              height: o,
              stroke: r,
              strokeWidth: s ? (24 * Number(a)) / Number(o) : a,
              className: l("lucide", u),
              ...f,
            },
            [
              ...d.map((e) => {
                let [t, r] = e;
                return (0, n.createElement)(t, r);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ]
          );
        }),
        s = (e, t) => {
          let r = (0, n.forwardRef)((r, i) => {
            let { className: s, ...u } = r;
            return (0, n.createElement)(a, {
              ref: i,
              iconNode: t,
              className: l("lucide-".concat(o(e)), s),
              ...u,
            });
          });
          return (r.displayName = "".concat(e)), r;
        };
    },
    8954: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("Briefcase", [
        [
          "path",
          { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" },
        ],
        [
          "rect",
          { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
        ],
      ]);
    },
    3246: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("Folder", [
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
            key: "1kt360",
          },
        ],
      ]);
    },
    9596: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("Github", [
        [
          "path",
          {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef",
          },
        ],
        ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
      ]);
    },
    1846: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("GraduationCap", [
        [
          "path",
          {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0",
          },
        ],
        ["path", { d: "M22 10v6", key: "1lu8f3" }],
        ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
      ]);
    },
    5980: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("Lightbulb", [
        [
          "path",
          {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
            key: "1gvzjb",
          },
        ],
        ["path", { d: "M9 18h6", key: "x1upvd" }],
        ["path", { d: "M10 22h4", key: "ceow96" }],
      ]);
    },
    9098: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("Linkedin", [
        [
          "path",
          {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f",
          },
        ],
        ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
        ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
      ]);
    },
    6747: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("Mail", [
        [
          "rect",
          { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
        ],
        [
          "path",
          { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
        ],
      ]);
    },
    8012: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("MapPin", [
        [
          "path",
          {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z",
          },
        ],
        ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
      ]);
    },
    572: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("Moon", [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
      ]);
    },
    8880: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("Phone", [
        [
          "path",
          {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5",
          },
        ],
      ]);
    },
    595: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("Sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]);
    },
    4908: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("Twitter", [
        [
          "path",
          {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6",
          },
        ],
      ]);
    },
    7350: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(6471).Z)("User", [
        [
          "path",
          { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
        ],
        ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
      ]);
    },
    5922: function (e, t, r) {
      r.d(t, {
        F: function () {
          return c;
        },
        f: function () {
          return d;
        },
      });
      var n = r(2265),
        o = (e, t, r, n, o, l, i, a) => {
          let s = document.documentElement,
            u = ["light", "dark"];
          function c(t) {
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              let r = "class" === e,
                n = r && l ? o.map((e) => l[e] || e) : o;
              r
                ? (s.classList.remove(...n), s.classList.add(t))
                : s.setAttribute(e, t);
            }),
              a && u.includes(t) && (s.style.colorScheme = t);
          }
          if (n) c(n);
          else
            try {
              let e = localStorage.getItem(t) || r,
                n =
                  i && "system" === e
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : e;
              c(n);
            } catch (e) {}
        },
        l = ["light", "dark"],
        i = "(prefers-color-scheme: dark)",
        a = "undefined" == typeof window,
        s = n.createContext(void 0),
        u = { setTheme: (e) => {}, themes: [] },
        c = () => {
          var e;
          return null != (e = n.useContext(s)) ? e : u;
        },
        d = (e) =>
          n.useContext(s)
            ? n.createElement(n.Fragment, null, e.children)
            : n.createElement(p, { ...e }),
        f = ["light", "dark"],
        p = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: r = !1,
              enableSystem: o = !0,
              enableColorScheme: a = !0,
              storageKey: u = "theme",
              themes: c = f,
              defaultTheme: d = o ? "system" : "light",
              attribute: p = "data-theme",
              value: y,
              children: v,
              nonce: w,
              scriptProps: x,
            } = e,
            [k, j] = n.useState(() => m(u, d)),
            [_, P] = n.useState(() => m(u)),
            S = y ? Object.values(y) : c,
            O = n.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                "system" === e && o && (t = b());
                let n = y ? y[t] : t,
                  i = r ? g(w) : null,
                  s = document.documentElement,
                  u = (e) => {
                    "class" === e
                      ? (s.classList.remove(...S), n && s.classList.add(n))
                      : e.startsWith("data-") &&
                        (n ? s.setAttribute(e, n) : s.removeAttribute(e));
                  };
                if ((Array.isArray(p) ? p.forEach(u) : u(p), a)) {
                  let e = l.includes(d) ? d : null,
                    r = l.includes(t) ? t : e;
                  s.style.colorScheme = r;
                }
                null == i || i();
              },
              [w]
            ),
            M = n.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(k) : e;
                j(t);
                try {
                  localStorage.setItem(u, t);
                } catch (e) {}
              },
              [k]
            ),
            C = n.useCallback(
              (e) => {
                P(b(e)), "system" === k && o && !t && O("system");
              },
              [k, t]
            );
          n.useEffect(() => {
            let e = window.matchMedia(i);
            return e.addListener(C), C(e), () => e.removeListener(C);
          }, [C]),
            n.useEffect(() => {
              let e = (e) => {
                e.key === u && (e.newValue ? j(e.newValue) : M(d));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [M]),
            n.useEffect(() => {
              O(null != t ? t : k);
            }, [t, k]);
          let E = n.useMemo(
            () => ({
              theme: k,
              setTheme: M,
              forcedTheme: t,
              resolvedTheme: "system" === k ? _ : k,
              themes: o ? [...c, "system"] : c,
              systemTheme: o ? _ : void 0,
            }),
            [k, M, t, _, o, c]
          );
          return n.createElement(
            s.Provider,
            { value: E },
            n.createElement(h, {
              forcedTheme: t,
              storageKey: u,
              attribute: p,
              enableSystem: o,
              enableColorScheme: a,
              defaultTheme: d,
              value: y,
              themes: c,
              nonce: w,
              scriptProps: x,
            }),
            v
          );
        },
        h = n.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: r,
              attribute: l,
              enableSystem: i,
              enableColorScheme: a,
              defaultTheme: s,
              value: u,
              themes: c,
              nonce: d,
              scriptProps: f,
            } = e,
            p = JSON.stringify([l, r, s, t, c, u, i, a]).slice(1, -1);
          return n.createElement("script", {
            ...f,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? d : "",
            dangerouslySetInnerHTML: {
              __html: "(".concat(o.toString(), ")(").concat(p, ")"),
            },
          });
        }),
        m = (e, t) => {
          let r;
          if (!a) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return r || t;
          }
        },
        g = (e) => {
          let t = document.createElement("style");
          return (
            e && t.setAttribute("nonce", e),
            t.appendChild(
              document.createTextNode(
                "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(t),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1);
            }
          );
        },
        b = (e) => (
          e || (e = window.matchMedia(i)), e.matches ? "dark" : "light"
        );
    },
    3335: function (e, t, r) {
      r.d(t, {
        m6: function () {
          return ed;
        },
      });
      let n = (e) => {
          let t = a(e),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: n } =
              e;
          return {
            getClassGroupId: (e) => {
              let r = e.split("-");
              return (
                "" === r[0] && 1 !== r.length && r.shift(), o(r, t) || i(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let o = r[e] || [];
              return t && n[e] ? [...o, ...n[e]] : o;
            },
          };
        },
        o = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let r = e[0],
            n = t.nextPart.get(r),
            l = n ? o(e.slice(1), n) : void 0;
          if (l) return l;
          if (0 === t.validators.length) return;
          let i = e.join("-");
          return t.validators.find(({ validator: e }) => e(i))?.classGroupId;
        },
        l = /^\[(.+)\]$/,
        i = (e) => {
          if (l.test(e)) {
            let t = l.exec(e)[1],
              r = t?.substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r;
          }
        },
        a = (e) => {
          let { theme: t, classGroups: r } = e,
            n = { nextPart: new Map(), validators: [] };
          for (let e in r) s(r[e], n, e, t);
          return n;
        },
        s = (e, t, r, n) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : u(t, e)).classGroupId = r;
              return;
            }
            if ("function" == typeof e) {
              if (c(e)) {
                s(e(n), t, r, n);
                return;
              }
              t.validators.push({ validator: e, classGroupId: r });
              return;
            }
            Object.entries(e).forEach(([e, o]) => {
              s(o, u(t, e), r, n);
            });
          });
        },
        u = (e, t) => {
          let r = e;
          return (
            t.split("-").forEach((e) => {
              r.nextPart.has(e) ||
                r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(e));
            }),
            r
          );
        },
        c = (e) => e.isThemeGetter,
        d = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            r = new Map(),
            n = new Map(),
            o = (o, l) => {
              r.set(o, l), ++t > e && ((t = 0), (n = r), (r = new Map()));
            };
          return {
            get(e) {
              let t = r.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = n.get(e))
                ? (o(e, t), t)
                : void 0;
            },
            set(e, t) {
              r.has(e) ? r.set(e, t) : o(e, t);
            },
          };
        },
        f = (e) => {
          let { prefix: t, experimentalParseClassName: r } = e,
            n = (e) => {
              let t;
              let r = [],
                n = 0,
                o = 0,
                l = 0;
              for (let i = 0; i < e.length; i++) {
                let a = e[i];
                if (0 === n && 0 === o) {
                  if (":" === a) {
                    r.push(e.slice(l, i)), (l = i + 1);
                    continue;
                  }
                  if ("/" === a) {
                    t = i;
                    continue;
                  }
                }
                "[" === a
                  ? n++
                  : "]" === a
                  ? n--
                  : "(" === a
                  ? o++
                  : ")" === a && o--;
              }
              let i = 0 === r.length ? e : e.substring(l),
                a = p(i);
              return {
                modifiers: r,
                hasImportantModifier: a !== i,
                baseClassName: a,
                maybePostfixModifierPosition: t && t > l ? t - l : void 0,
              };
            };
          if (t) {
            let e = t + ":",
              r = n;
            n = (t) =>
              t.startsWith(e)
                ? r(t.substring(e.length))
                : {
                    isExternal: !0,
                    modifiers: [],
                    hasImportantModifier: !1,
                    baseClassName: t,
                    maybePostfixModifierPosition: void 0,
                  };
          }
          if (r) {
            let e = n;
            n = (t) => r({ className: t, parseClassName: e });
          }
          return n;
        },
        p = (e) =>
          e.endsWith("!")
            ? e.substring(0, e.length - 1)
            : e.startsWith("!")
            ? e.substring(1)
            : e,
        h = (e) => {
          let t = Object.fromEntries(
            e.orderSensitiveModifiers.map((e) => [e, !0])
          );
          return (e) => {
            if (e.length <= 1) return e;
            let r = [],
              n = [];
            return (
              e.forEach((e) => {
                "[" === e[0] || t[e]
                  ? (r.push(...n.sort(), e), (n = []))
                  : n.push(e);
              }),
              r.push(...n.sort()),
              r
            );
          };
        },
        m = (e) => ({
          cache: d(e.cacheSize),
          parseClassName: f(e),
          sortModifiers: h(e),
          ...n(e),
        }),
        g = /\s+/,
        b = (e, t) => {
          let {
              parseClassName: r,
              getClassGroupId: n,
              getConflictingClassGroupIds: o,
              sortModifiers: l,
            } = t,
            i = [],
            a = e.trim().split(g),
            s = "";
          for (let e = a.length - 1; e >= 0; e -= 1) {
            let t = a[e],
              {
                isExternal: u,
                modifiers: c,
                hasImportantModifier: d,
                baseClassName: f,
                maybePostfixModifierPosition: p,
              } = r(t);
            if (u) {
              s = t + (s.length > 0 ? " " + s : s);
              continue;
            }
            let h = !!p,
              m = n(h ? f.substring(0, p) : f);
            if (!m) {
              if (!h || !(m = n(f))) {
                s = t + (s.length > 0 ? " " + s : s);
                continue;
              }
              h = !1;
            }
            let g = l(c).join(":"),
              b = d ? g + "!" : g,
              y = b + m;
            if (i.includes(y)) continue;
            i.push(y);
            let v = o(m, h);
            for (let e = 0; e < v.length; ++e) {
              let t = v[e];
              i.push(b + t);
            }
            s = t + (s.length > 0 ? " " + s : s);
          }
          return s;
        };
      function y() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) && (t = v(e)) && (n && (n += " "), (n += t));
        return n;
      }
      let v = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let r = "";
          for (let n = 0; n < e.length; n++)
            e[n] && (t = v(e[n])) && (r && (r += " "), (r += t));
          return r;
        },
        w = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        x = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        k = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        j = /^\d+\/\d+$/,
        _ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        P =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        O = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        M =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        C = (e) => j.test(e),
        E = (e) => !!e && !Number.isNaN(Number(e)),
        R = (e) => !!e && Number.isInteger(Number(e)),
        z = (e) => e.endsWith("%") && E(e.slice(0, -1)),
        N = (e) => _.test(e),
        I = () => !0,
        A = (e) => P.test(e) && !S.test(e),
        L = () => !1,
        T = (e) => O.test(e),
        W = (e) => M.test(e),
        U = (e) => !D(e) && !B(e),
        Z = (e) => ee(e, ei, L),
        D = (e) => x.test(e),
        F = (e) => ee(e, ea, A),
        G = (e) => ee(e, es, E),
        $ = (e) => ee(e, er, L),
        V = (e) => ee(e, eo, W),
        q = (e) => ee(e, L, T),
        B = (e) => k.test(e),
        K = (e) => et(e, ea),
        H = (e) => et(e, eu),
        Y = (e) => et(e, er),
        J = (e) => et(e, ei),
        Q = (e) => et(e, eo),
        X = (e) => et(e, ec, !0),
        ee = (e, t, r) => {
          let n = x.exec(e);
          return !!n && (n[1] ? t(n[1]) : r(n[2]));
        },
        et = (e, t, r = !1) => {
          let n = k.exec(e);
          return !!n && (n[1] ? t(n[1]) : r);
        },
        er = (e) => "position" === e,
        en = new Set(["image", "url"]),
        eo = (e) => en.has(e),
        el = new Set(["length", "size", "percentage"]),
        ei = (e) => el.has(e),
        ea = (e) => "length" === e,
        es = (e) => "number" === e,
        eu = (e) => "family-name" === e,
        ec = (e) => "shadow" === e,
        ed = (function (e, ...t) {
          let r, n, o;
          let l = function (a) {
            return (
              (n = (r = m(t.reduce((e, t) => t(e), e()))).cache.get),
              (o = r.cache.set),
              (l = i),
              i(a)
            );
          };
          function i(e) {
            let t = n(e);
            if (t) return t;
            let l = b(e, r);
            return o(e, l), l;
          }
          return function () {
            return l(y.apply(null, arguments));
          };
        })(() => {
          let e = w("color"),
            t = w("font"),
            r = w("text"),
            n = w("font-weight"),
            o = w("tracking"),
            l = w("leading"),
            i = w("breakpoint"),
            a = w("container"),
            s = w("spacing"),
            u = w("radius"),
            c = w("shadow"),
            d = w("inset-shadow"),
            f = w("drop-shadow"),
            p = w("blur"),
            h = w("perspective"),
            m = w("aspect"),
            g = w("ease"),
            b = w("animate"),
            y = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            v = () => [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ],
            x = () => ["auto", "hidden", "clip", "visible", "scroll"],
            k = () => ["auto", "contain", "none"],
            j = () => [C, "px", "full", "auto", B, D, s],
            _ = () => [R, "none", "subgrid", B, D],
            P = () => ["auto", { span: ["full", R, B, D] }, B, D],
            S = () => [R, "auto", B, D],
            O = () => ["auto", "min", "max", "fr", B, D],
            M = () => [B, D, s],
            A = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
              "baseline",
            ],
            L = () => ["start", "end", "center", "stretch"],
            T = () => [B, D, s],
            W = () => ["px", ...T()],
            ee = () => ["px", "auto", ...T()],
            et = () => [
              C,
              "auto",
              "px",
              "full",
              "dvw",
              "dvh",
              "lvw",
              "lvh",
              "svw",
              "svh",
              "min",
              "max",
              "fit",
              B,
              D,
              s,
            ],
            er = () => [e, B, D],
            en = () => [z, F],
            eo = () => ["", "none", "full", u, B, D],
            el = () => ["", E, K, F],
            ei = () => ["solid", "dashed", "dotted", "double"],
            ea = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            es = () => ["", "none", p, B, D],
            eu = () => [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              B,
              D,
            ],
            ec = () => ["none", E, B, D],
            ed = () => ["none", E, B, D],
            ef = () => [E, B, D],
            ep = () => [C, "full", "px", B, D, s];
          return {
            cacheSize: 500,
            theme: {
              animate: ["spin", "ping", "pulse", "bounce"],
              aspect: ["video"],
              blur: [N],
              breakpoint: [N],
              color: [I],
              container: [N],
              "drop-shadow": [N],
              ease: ["in", "out", "in-out"],
              font: [U],
              "font-weight": [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
              ],
              "inset-shadow": [N],
              leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
              perspective: [
                "dramatic",
                "near",
                "normal",
                "midrange",
                "distant",
                "none",
              ],
              radius: [N],
              shadow: [N],
              spacing: [E],
              text: [N],
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
              ],
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", C, D, B, m] }],
              container: ["container"],
              columns: [{ columns: [E, D, B, a] }],
              "break-after": [{ "break-after": y() }],
              "break-before": [{ "break-before": y() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              sr: ["sr-only", "not-sr-only"],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: [...v(), D, B] }],
              overflow: [{ overflow: x() }],
              "overflow-x": [{ "overflow-x": x() }],
              "overflow-y": [{ "overflow-y": x() }],
              overscroll: [{ overscroll: k() }],
              "overscroll-x": [{ "overscroll-x": k() }],
              "overscroll-y": [{ "overscroll-y": k() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: j() }],
              "inset-x": [{ "inset-x": j() }],
              "inset-y": [{ "inset-y": j() }],
              start: [{ start: j() }],
              end: [{ end: j() }],
              top: [{ top: j() }],
              right: [{ right: j() }],
              bottom: [{ bottom: j() }],
              left: [{ left: j() }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: [R, "auto", B, D] }],
              basis: [{ basis: [C, "full", "auto", B, D, a, s] }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
              flex: [{ flex: [E, C, "auto", "initial", "none", D] }],
              grow: [{ grow: ["", E, B, D] }],
              shrink: [{ shrink: ["", E, B, D] }],
              order: [{ order: [R, "first", "last", "none", B, D] }],
              "grid-cols": [{ "grid-cols": _() }],
              "col-start-end": [{ col: P() }],
              "col-start": [{ "col-start": S() }],
              "col-end": [{ "col-end": S() }],
              "grid-rows": [{ "grid-rows": _() }],
              "row-start-end": [{ row: P() }],
              "row-start": [{ "row-start": S() }],
              "row-end": [{ "row-end": S() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": O() }],
              "auto-rows": [{ "auto-rows": O() }],
              gap: [{ gap: M() }],
              "gap-x": [{ "gap-x": M() }],
              "gap-y": [{ "gap-y": M() }],
              "justify-content": [{ justify: [...A(), "normal"] }],
              "justify-items": [{ "justify-items": [...L(), "normal"] }],
              "justify-self": [{ "justify-self": ["auto", ...L()] }],
              "align-content": [{ content: ["normal", ...A()] }],
              "align-items": [{ items: [...L(), "baseline"] }],
              "align-self": [{ self: ["auto", ...L(), "baseline"] }],
              "place-content": [{ "place-content": A() }],
              "place-items": [{ "place-items": [...L(), "baseline"] }],
              "place-self": [{ "place-self": ["auto", ...L()] }],
              p: [{ p: W() }],
              px: [{ px: W() }],
              py: [{ py: W() }],
              ps: [{ ps: W() }],
              pe: [{ pe: W() }],
              pt: [{ pt: W() }],
              pr: [{ pr: W() }],
              pb: [{ pb: W() }],
              pl: [{ pl: W() }],
              m: [{ m: ee() }],
              mx: [{ mx: ee() }],
              my: [{ my: ee() }],
              ms: [{ ms: ee() }],
              me: [{ me: ee() }],
              mt: [{ mt: ee() }],
              mr: [{ mr: ee() }],
              mb: [{ mb: ee() }],
              ml: [{ ml: ee() }],
              "space-x": [{ "space-x": T() }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": T() }],
              "space-y-reverse": ["space-y-reverse"],
              size: [{ size: et() }],
              w: [{ w: [a, "screen", ...et()] }],
              "min-w": [{ "min-w": [a, "screen", "none", ...et()] }],
              "max-w": [
                {
                  "max-w": [
                    a,
                    "screen",
                    "none",
                    "prose",
                    { screen: [i] },
                    ...et(),
                  ],
                },
              ],
              h: [{ h: ["screen", ...et()] }],
              "min-h": [{ "min-h": ["screen", "none", ...et()] }],
              "max-h": [{ "max-h": ["screen", ...et()] }],
              "font-size": [{ text: ["base", r, K, F] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [{ font: [n, B, G] }],
              "font-stretch": [
                {
                  "font-stretch": [
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "normal",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    z,
                    D,
                  ],
                },
              ],
              "font-family": [{ font: [H, D, t] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
              tracking: [{ tracking: [o, B, D] }],
              "line-clamp": [{ "line-clamp": [E, "none", B, G] }],
              leading: [{ leading: [B, D, l, s] }],
              "list-image": [{ "list-image": ["none", B, D] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "list-style-type": [{ list: ["disc", "decimal", "none", B, D] }],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "placeholder-color": [{ placeholder: er() }],
              "text-color": [{ text: er() }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [{ decoration: [...ei(), "wavy"] }],
              "text-decoration-thickness": [
                { decoration: [E, "from-font", "auto", B, F] },
              ],
              "text-decoration-color": [{ decoration: er() }],
              "underline-offset": [{ "underline-offset": [E, "auto", B, D] }],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: ["px", ...T()] }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    B,
                    D,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", B, D] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: [...v(), Y, $] }],
              "bg-repeat": [
                {
                  bg: [
                    "no-repeat",
                    { repeat: ["", "x", "y", "space", "round"] },
                  ],
                },
              ],
              "bg-size": [{ bg: ["auto", "cover", "contain", J, Z] }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      linear: [
                        { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                        R,
                        B,
                        D,
                      ],
                      radial: ["", B, D],
                      conic: [R, B, D],
                    },
                    Q,
                    V,
                  ],
                },
              ],
              "bg-color": [{ bg: er() }],
              "gradient-from-pos": [{ from: en() }],
              "gradient-via-pos": [{ via: en() }],
              "gradient-to-pos": [{ to: en() }],
              "gradient-from": [{ from: er() }],
              "gradient-via": [{ via: er() }],
              "gradient-to": [{ to: er() }],
              rounded: [{ rounded: eo() }],
              "rounded-s": [{ "rounded-s": eo() }],
              "rounded-e": [{ "rounded-e": eo() }],
              "rounded-t": [{ "rounded-t": eo() }],
              "rounded-r": [{ "rounded-r": eo() }],
              "rounded-b": [{ "rounded-b": eo() }],
              "rounded-l": [{ "rounded-l": eo() }],
              "rounded-ss": [{ "rounded-ss": eo() }],
              "rounded-se": [{ "rounded-se": eo() }],
              "rounded-ee": [{ "rounded-ee": eo() }],
              "rounded-es": [{ "rounded-es": eo() }],
              "rounded-tl": [{ "rounded-tl": eo() }],
              "rounded-tr": [{ "rounded-tr": eo() }],
              "rounded-br": [{ "rounded-br": eo() }],
              "rounded-bl": [{ "rounded-bl": eo() }],
              "border-w": [{ border: el() }],
              "border-w-x": [{ "border-x": el() }],
              "border-w-y": [{ "border-y": el() }],
              "border-w-s": [{ "border-s": el() }],
              "border-w-e": [{ "border-e": el() }],
              "border-w-t": [{ "border-t": el() }],
              "border-w-r": [{ "border-r": el() }],
              "border-w-b": [{ "border-b": el() }],
              "border-w-l": [{ "border-l": el() }],
              "divide-x": [{ "divide-x": el() }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": el() }],
              "divide-y-reverse": ["divide-y-reverse"],
              "border-style": [{ border: [...ei(), "hidden", "none"] }],
              "divide-style": [{ divide: [...ei(), "hidden", "none"] }],
              "border-color": [{ border: er() }],
              "border-color-x": [{ "border-x": er() }],
              "border-color-y": [{ "border-y": er() }],
              "border-color-s": [{ "border-s": er() }],
              "border-color-e": [{ "border-e": er() }],
              "border-color-t": [{ "border-t": er() }],
              "border-color-r": [{ "border-r": er() }],
              "border-color-b": [{ "border-b": er() }],
              "border-color-l": [{ "border-l": er() }],
              "divide-color": [{ divide: er() }],
              "outline-style": [{ outline: [...ei(), "none", "hidden"] }],
              "outline-offset": [{ "outline-offset": [E, B, D] }],
              "outline-w": [{ outline: ["", E, K, F] }],
              "outline-color": [{ outline: [e] }],
              shadow: [{ shadow: ["", "none", c, X, q] }],
              "shadow-color": [{ shadow: er() }],
              "inset-shadow": [{ "inset-shadow": ["none", B, D, d] }],
              "inset-shadow-color": [{ "inset-shadow": er() }],
              "ring-w": [{ ring: el() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: er() }],
              "ring-offset-w": [{ "ring-offset": [E, F] }],
              "ring-offset-color": [{ "ring-offset": er() }],
              "inset-ring-w": [{ "inset-ring": el() }],
              "inset-ring-color": [{ "inset-ring": er() }],
              opacity: [{ opacity: [E, B, D] }],
              "mix-blend": [
                { "mix-blend": [...ea(), "plus-darker", "plus-lighter"] },
              ],
              "bg-blend": [{ "bg-blend": ea() }],
              filter: [{ filter: ["", "none", B, D] }],
              blur: [{ blur: es() }],
              brightness: [{ brightness: [E, B, D] }],
              contrast: [{ contrast: [E, B, D] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", f, B, D] }],
              grayscale: [{ grayscale: ["", E, B, D] }],
              "hue-rotate": [{ "hue-rotate": [E, B, D] }],
              invert: [{ invert: ["", E, B, D] }],
              saturate: [{ saturate: [E, B, D] }],
              sepia: [{ sepia: ["", E, B, D] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none", B, D] }],
              "backdrop-blur": [{ "backdrop-blur": es() }],
              "backdrop-brightness": [{ "backdrop-brightness": [E, B, D] }],
              "backdrop-contrast": [{ "backdrop-contrast": [E, B, D] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": ["", E, B, D] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [E, B, D] }],
              "backdrop-invert": [{ "backdrop-invert": ["", E, B, D] }],
              "backdrop-opacity": [{ "backdrop-opacity": [E, B, D] }],
              "backdrop-saturate": [{ "backdrop-saturate": [E, B, D] }],
              "backdrop-sepia": [{ "backdrop-sepia": ["", E, B, D] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": T() }],
              "border-spacing-x": [{ "border-spacing-x": T() }],
              "border-spacing-y": [{ "border-spacing-y": T() }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "",
                    "all",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    "none",
                    B,
                    D,
                  ],
                },
              ],
              "transition-behavior": [{ transition: ["normal", "discrete"] }],
              duration: [{ duration: [E, "initial", B, D] }],
              ease: [{ ease: ["linear", "initial", g, B, D] }],
              delay: [{ delay: [E, B, D] }],
              animate: [{ animate: ["none", b, B, D] }],
              backface: [{ backface: ["hidden", "visible"] }],
              perspective: [{ perspective: [h, B, D] }],
              "perspective-origin": [{ "perspective-origin": eu() }],
              rotate: [{ rotate: ec() }],
              "rotate-x": [{ "rotate-x": ec() }],
              "rotate-y": [{ "rotate-y": ec() }],
              "rotate-z": [{ "rotate-z": ec() }],
              scale: [{ scale: ed() }],
              "scale-x": [{ "scale-x": ed() }],
              "scale-y": [{ "scale-y": ed() }],
              "scale-z": [{ "scale-z": ed() }],
              "scale-3d": ["scale-3d"],
              skew: [{ skew: ef() }],
              "skew-x": [{ "skew-x": ef() }],
              "skew-y": [{ "skew-y": ef() }],
              transform: [{ transform: [B, D, "", "none", "gpu", "cpu"] }],
              "transform-origin": [{ origin: eu() }],
              "transform-style": [{ transform: ["3d", "flat"] }],
              translate: [{ translate: ep() }],
              "translate-x": [{ "translate-x": ep() }],
              "translate-y": [{ "translate-y": ep() }],
              "translate-z": [{ "translate-z": ep() }],
              "translate-none": ["translate-none"],
              accent: [{ accent: er() }],
              appearance: [{ appearance: ["none", "auto"] }],
              "caret-color": [{ caret: er() }],
              "color-scheme": [
                {
                  scheme: [
                    "normal",
                    "dark",
                    "light",
                    "light-dark",
                    "only-dark",
                    "only-light",
                  ],
                },
              ],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    B,
                    D,
                  ],
                },
              ],
              "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
              "pointer-events": [{ "pointer-events": ["auto", "none"] }],
              resize: [{ resize: ["none", "", "y", "x"] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": T() }],
              "scroll-mx": [{ "scroll-mx": T() }],
              "scroll-my": [{ "scroll-my": T() }],
              "scroll-ms": [{ "scroll-ms": T() }],
              "scroll-me": [{ "scroll-me": T() }],
              "scroll-mt": [{ "scroll-mt": T() }],
              "scroll-mr": [{ "scroll-mr": T() }],
              "scroll-mb": [{ "scroll-mb": T() }],
              "scroll-ml": [{ "scroll-ml": T() }],
              "scroll-p": [{ "scroll-p": T() }],
              "scroll-px": [{ "scroll-px": T() }],
              "scroll-py": [{ "scroll-py": T() }],
              "scroll-ps": [{ "scroll-ps": T() }],
              "scroll-pe": [{ "scroll-pe": T() }],
              "scroll-pt": [{ "scroll-pt": T() }],
              "scroll-pr": [{ "scroll-pr": T() }],
              "scroll-pb": [{ "scroll-pb": T() }],
              "scroll-pl": [{ "scroll-pl": T() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": [
                    "auto",
                    "scroll",
                    "contents",
                    "transform",
                    B,
                    D,
                  ],
                },
              ],
              fill: [{ fill: ["none", ...er()] }],
              "stroke-w": [{ stroke: [E, K, F, G] }],
              stroke: [{ stroke: ["none", ...er()] }],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              translate: ["translate-x", "translate-y", "translate-none"],
              "translate-none": [
                "translate",
                "translate-x",
                "translate-y",
                "translate-z",
              ],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
            orderSensitiveModifiers: [
              "before",
              "after",
              "placeholder",
              "file",
              "marker",
              "selection",
              "first-line",
              "first-letter",
              "backdrop",
              "*",
              "**",
            ],
          };
        });
    },
  },
]);
