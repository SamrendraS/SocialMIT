!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 28));
})([
  function (e, t, r) {
    "use strict";
    var n = r(3),
      i = r(12),
      o = Object.prototype.toString;
    function a(e) {
      return "[object Array]" === o.call(e);
    }
    function s(e) {
      return null !== e && "object" == typeof e;
    }
    function c(e) {
      return "[object Function]" === o.call(e);
    }
    function u(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), a(e)))
          for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              t.call(null, e[i], i, e);
    }
    e.exports = {
      isArray: a,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === o.call(e);
      },
      isBuffer: i,
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: s,
      isUndefined: function (e) {
        return void 0 === e;
      },
      isDate: function (e) {
        return "[object Date]" === o.call(e);
      },
      isFile: function (e) {
        return "[object File]" === o.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === o.call(e);
      },
      isFunction: c,
      isStream: function (e) {
        return s(e) && c(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: u,
      merge: function e() {
        var t = {};
        function r(r, n) {
          "object" == typeof t[n] && "object" == typeof r
            ? (t[n] = e(t[n], r))
            : (t[n] = r);
        }
        for (var n = 0, i = arguments.length; n < i; n++) u(arguments[n], r);
        return t;
      },
      deepMerge: function e() {
        var t = {};
        function r(r, n) {
          "object" == typeof t[n] && "object" == typeof r
            ? (t[n] = e(t[n], r))
            : (t[n] = "object" == typeof r ? e({}, r) : r);
        }
        for (var n = 0, i = arguments.length; n < i; n++) u(arguments[n], r);
        return t;
      },
      extend: function (e, t, r) {
        return (
          u(t, function (t, i) {
            e[i] = r && "function" == typeof t ? n(t, r) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
    };
  },
  function (e, t, r) {
    e.exports = r(11);
  },
  function (e, t, r) {
    e.exports = (function () {
      "use strict";
      var e =
          Object.freeze ||
          function (e) {
            return e;
          },
        t = e([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "select",
          "shadow",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ]),
        r = e([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "audio",
          "canvas",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "video",
          "view",
          "vkern",
        ]),
        n = e([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
        ]),
        i = e([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover",
        ]),
        o = e(["#text"]),
        a =
          Object.freeze ||
          function (e) {
            return e;
          },
        s = a([
          "accept",
          "action",
          "align",
          "alt",
          "autocomplete",
          "background",
          "bgcolor",
          "border",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "coords",
          "crossorigin",
          "datetime",
          "default",
          "dir",
          "disabled",
          "download",
          "enctype",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "integrity",
          "ismap",
          "label",
          "lang",
          "list",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "multiple",
          "name",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "pattern",
          "placeholder",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "xmlns",
        ]),
        c = a([
          "accent-height",
          "accumulate",
          "additive",
          "alignment-baseline",
          "ascent",
          "attributename",
          "attributetype",
          "azimuth",
          "basefrequency",
          "baseline-shift",
          "begin",
          "bias",
          "by",
          "class",
          "clip",
          "clip-path",
          "clip-rule",
          "color",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "diffuseconstant",
          "direction",
          "display",
          "divisor",
          "dur",
          "edgemode",
          "elevation",
          "end",
          "fill",
          "fill-opacity",
          "fill-rule",
          "filter",
          "filterunits",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyph-name",
          "glyphref",
          "gradientunits",
          "gradienttransform",
          "height",
          "href",
          "id",
          "image-rendering",
          "in",
          "in2",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kerning",
          "keypoints",
          "keysplines",
          "keytimes",
          "lang",
          "lengthadjust",
          "letter-spacing",
          "kernelmatrix",
          "kernelunitlength",
          "lighting-color",
          "local",
          "marker-end",
          "marker-mid",
          "marker-start",
          "markerheight",
          "markerunits",
          "markerwidth",
          "maskcontentunits",
          "maskunits",
          "max",
          "mask",
          "media",
          "method",
          "mode",
          "min",
          "name",
          "numoctaves",
          "offset",
          "operator",
          "opacity",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "paint-order",
          "path",
          "pathlength",
          "patterncontentunits",
          "patterntransform",
          "patternunits",
          "points",
          "preservealpha",
          "preserveaspectratio",
          "primitiveunits",
          "r",
          "rx",
          "ry",
          "radius",
          "refx",
          "refy",
          "repeatcount",
          "repeatdur",
          "restart",
          "result",
          "rotate",
          "scale",
          "seed",
          "shape-rendering",
          "specularconstant",
          "specularexponent",
          "spreadmethod",
          "stddeviation",
          "stitchtiles",
          "stop-color",
          "stop-opacity",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke",
          "stroke-width",
          "style",
          "surfacescale",
          "tabindex",
          "targetx",
          "targety",
          "transform",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "textlength",
          "type",
          "u1",
          "u2",
          "unicode",
          "values",
          "viewbox",
          "visibility",
          "version",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "width",
          "word-spacing",
          "wrap",
          "writing-mode",
          "xchannelselector",
          "ychannelselector",
          "x",
          "x1",
          "x2",
          "xmlns",
          "y",
          "y1",
          "y2",
          "z",
          "zoomandpan",
        ]),
        u = a([
          "accent",
          "accentunder",
          "align",
          "bevelled",
          "close",
          "columnsalign",
          "columnlines",
          "columnspan",
          "denomalign",
          "depth",
          "dir",
          "display",
          "displaystyle",
          "encoding",
          "fence",
          "frame",
          "height",
          "href",
          "id",
          "largeop",
          "length",
          "linethickness",
          "lspace",
          "lquote",
          "mathbackground",
          "mathcolor",
          "mathsize",
          "mathvariant",
          "maxsize",
          "minsize",
          "movablelimits",
          "notation",
          "numalign",
          "open",
          "rowalign",
          "rowlines",
          "rowspacing",
          "rowspan",
          "rspace",
          "rquote",
          "scriptlevel",
          "scriptminsize",
          "scriptsizemultiplier",
          "selection",
          "separator",
          "separators",
          "stretchy",
          "subscriptshift",
          "supscriptshift",
          "symmetric",
          "voffset",
          "width",
          "xmlns",
        ]),
        l = a([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        f = Object.hasOwnProperty,
        d = Object.setPrototypeOf,
        h = ("undefined" != typeof Reflect && Reflect).apply;
      function p(e, t) {
        d && d(e, null);
        for (var r = t.length; r--; ) {
          var n = t[r];
          if ("string" == typeof n) {
            var i = n.toLowerCase();
            i !== n && (Object.isFrozen(t) || (t[r] = i), (n = i));
          }
          e[n] = !0;
        }
        return e;
      }
      function m(e) {
        var t = {},
          r = void 0;
        for (r in e) h(f, e, [r]) && (t[r] = e[r]);
        return t;
      }
      h ||
        (h = function (e, t, r) {
          return e.apply(t, r);
        });
      var v =
          Object.seal ||
          function (e) {
            return e;
          },
        y = v(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        g = v(/<%[\s\S]*|[\s\S]*%>/gm),
        b = v(/^data-[\-\w.\u00B7-\uFFFF]/),
        w = v(/^aria-[\-\w]+$/),
        T = v(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
        ),
        x = v(/^(?:\w+script|data):/i),
        S = v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),
        E =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
      function A(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
          return r;
        }
        return Array.from(e);
      }
      var L = ("undefined" != typeof Reflect && Reflect).apply,
        k = Array.prototype.slice,
        R = Object.freeze,
        O = function () {
          return "undefined" == typeof window ? null : window;
        };
      L ||
        (L = function (e, t, r) {
          return e.apply(t, r);
        });
      var M = function (e, t) {
        if (
          "object" !== (void 0 === e ? "undefined" : E(e)) ||
          "function" != typeof e.createPolicy
        )
          return null;
        var r = null;
        t.currentScript &&
          t.currentScript.hasAttribute("data-tt-policy-suffix") &&
          (r = t.currentScript.getAttribute("data-tt-policy-suffix"));
        var n = "dompurify" + (r ? "#" + r : "");
        try {
          return e.createPolicy(n, {
            createHTML: function (e) {
              return e;
            },
          });
        } catch (e) {
          return (
            console.warn("TrustedTypes policy " + n + " could not be created."),
            null
          );
        }
      };
      return (function e() {
        var a =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : O(),
          f = function (t) {
            return e(t);
          };
        if (
          ((f.version = "2.0.7"),
          (f.removed = []),
          !a || !a.document || 9 !== a.document.nodeType)
        )
          return (f.isSupported = !1), f;
        var d = a.document,
          h = !1,
          v = !1,
          D = a.document,
          C = a.DocumentFragment,
          N = a.HTMLTemplateElement,
          _ = a.Node,
          H = a.NodeFilter,
          j = a.NamedNodeMap,
          F = void 0 === j ? a.NamedNodeMap || a.MozNamedAttrMap : j,
          q = a.Text,
          U = a.Comment,
          I = a.DOMParser,
          P = a.TrustedTypes;
        if ("function" == typeof N) {
          var z = D.createElement("template");
          z.content && z.content.ownerDocument && (D = z.content.ownerDocument);
        }
        var B = M(P, d),
          V = B ? B.createHTML("") : "",
          W = D,
          G = W.implementation,
          Y = W.createNodeIterator,
          $ = W.getElementsByTagName,
          X = W.createDocumentFragment,
          J = d.importNode,
          K = {};
        f.isSupported =
          G && void 0 !== G.createHTMLDocument && 9 !== D.documentMode;
        var Z = y,
          Q = g,
          ee = b,
          te = w,
          re = x,
          ne = S,
          ie = T,
          oe = null,
          ae = p({}, [].concat(A(t), A(r), A(n), A(i), A(o))),
          se = null,
          ce = p({}, [].concat(A(s), A(c), A(u), A(l))),
          ue = null,
          le = null,
          fe = !0,
          de = !0,
          he = !1,
          pe = !1,
          me = !1,
          ve = !1,
          ye = !1,
          ge = !1,
          be = !1,
          we = !1,
          Te = !1,
          xe = !1,
          Se = !0,
          Ee = !0,
          Ae = !1,
          Le = {},
          ke = p({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp",
          ]),
          Re = p({}, ["audio", "video", "img", "source", "image"]),
          Oe = null,
          Me = p({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "summary",
            "title",
            "value",
            "style",
            "xmlns",
          ]),
          De = null,
          Ce = D.createElement("form"),
          Ne = function (e) {
            (De && De === e) ||
              ((e && "object" === (void 0 === e ? "undefined" : E(e))) ||
                (e = {}),
              (oe = "ALLOWED_TAGS" in e ? p({}, e.ALLOWED_TAGS) : ae),
              (se = "ALLOWED_ATTR" in e ? p({}, e.ALLOWED_ATTR) : ce),
              (Oe =
                "ADD_URI_SAFE_ATTR" in e ? p(m(Me), e.ADD_URI_SAFE_ATTR) : Me),
              (ue = "FORBID_TAGS" in e ? p({}, e.FORBID_TAGS) : {}),
              (le = "FORBID_ATTR" in e ? p({}, e.FORBID_ATTR) : {}),
              (Le = "USE_PROFILES" in e && e.USE_PROFILES),
              (fe = !1 !== e.ALLOW_ARIA_ATTR),
              (de = !1 !== e.ALLOW_DATA_ATTR),
              (he = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (pe = e.SAFE_FOR_JQUERY || !1),
              (me = e.SAFE_FOR_TEMPLATES || !1),
              (ve = e.WHOLE_DOCUMENT || !1),
              (be = e.RETURN_DOM || !1),
              (we = e.RETURN_DOM_FRAGMENT || !1),
              (Te = e.RETURN_DOM_IMPORT || !1),
              (xe = e.RETURN_TRUSTED_TYPE || !1),
              (ge = e.FORCE_BODY || !1),
              (Se = !1 !== e.SANITIZE_DOM),
              (Ee = !1 !== e.KEEP_CONTENT),
              (Ae = e.IN_PLACE || !1),
              (ie = e.ALLOWED_URI_REGEXP || ie),
              me && (de = !1),
              we && (be = !0),
              Le &&
                ((oe = p({}, [].concat(A(o)))),
                (se = []),
                !0 === Le.html && (p(oe, t), p(se, s)),
                !0 === Le.svg && (p(oe, r), p(se, c), p(se, l)),
                !0 === Le.svgFilters && (p(oe, n), p(se, c), p(se, l)),
                !0 === Le.mathMl && (p(oe, i), p(se, u), p(se, l))),
              e.ADD_TAGS && (oe === ae && (oe = m(oe)), p(oe, e.ADD_TAGS)),
              e.ADD_ATTR && (se === ce && (se = m(se)), p(se, e.ADD_ATTR)),
              e.ADD_URI_SAFE_ATTR && p(Oe, e.ADD_URI_SAFE_ATTR),
              Ee && (oe["#text"] = !0),
              ve && p(oe, ["html", "head", "body"]),
              oe.table && (p(oe, ["tbody"]), delete ue.tbody),
              R && R(e),
              (De = e));
          },
          _e = function (e) {
            f.removed.push({ element: e });
            try {
              e.parentNode.removeChild(e);
            } catch (t) {
              e.outerHTML = V;
            }
          },
          He = function (e, t) {
            try {
              f.removed.push({ attribute: t.getAttributeNode(e), from: t });
            } catch (e) {
              f.removed.push({ attribute: null, from: t });
            }
            t.removeAttribute(e);
          },
          je = function (e) {
            var t = void 0,
              r = void 0;
            if (ge) e = "<remove></remove>" + e;
            else {
              var n = e.match(/^[\s]+/);
              (r = n && n[0]) && (e = e.slice(r.length));
            }
            if (h)
              try {
                t = new I().parseFromString(e, "text/html");
              } catch (e) {}
            if ((v && p(ue, ["title"]), !t || !t.documentElement)) {
              var i = (t = G.createHTMLDocument("")).body;
              i.parentNode.removeChild(i.parentNode.firstElementChild),
                (i.outerHTML = B ? B.createHTML(e) : e);
            }
            return (
              e &&
                r &&
                t.body.insertBefore(
                  D.createTextNode(r),
                  t.body.childNodes[0] || null
                ),
              $.call(t, ve ? "html" : "body")[0]
            );
          };
        f.isSupported &&
          ((function () {
            try {
              je(
                '<svg><p><textarea><img src="</textarea><img src=x abc=1//">'
              ).querySelector("svg img") && (h = !0);
            } catch (e) {}
          })(),
          (function () {
            try {
              var e = je("<x/><title>&lt;/title&gt;&lt;img&gt;");
              /<\/title/.test(e.querySelector("title").innerHTML) && (v = !0);
            } catch (e) {}
          })());
        var Fe = function (e) {
            return Y.call(
              e.ownerDocument || e,
              e,
              H.SHOW_ELEMENT | H.SHOW_COMMENT | H.SHOW_TEXT,
              function () {
                return H.FILTER_ACCEPT;
              },
              !1
            );
          },
          qe = function (e) {
            return "object" === (void 0 === _ ? "undefined" : E(_))
              ? e instanceof _
              : e &&
                  "object" === (void 0 === e ? "undefined" : E(e)) &&
                  "number" == typeof e.nodeType &&
                  "string" == typeof e.nodeName;
          },
          Ue = function (e, t, r) {
            K[e] &&
              K[e].forEach(function (e) {
                e.call(f, t, r, De);
              });
          },
          Ie = function (e) {
            var t,
              r = void 0;
            if (
              (Ue("beforeSanitizeElements", e, null),
              !(
                (t = e) instanceof q ||
                t instanceof U ||
                ("string" == typeof t.nodeName &&
                  "string" == typeof t.textContent &&
                  "function" == typeof t.removeChild &&
                  t.attributes instanceof F &&
                  "function" == typeof t.removeAttribute &&
                  "function" == typeof t.setAttribute &&
                  "string" == typeof t.namespaceURI)
              ))
            )
              return _e(e), !0;
            var n = e.nodeName.toLowerCase();
            if (
              (Ue("uponSanitizeElement", e, { tagName: n, allowedTags: oe }),
              ("svg" === n || "math" === n) &&
                0 !== e.querySelectorAll("p, br").length)
            )
              return _e(e), !0;
            if (!oe[n] || ue[n]) {
              if (Ee && !ke[n] && "function" == typeof e.insertAdjacentHTML)
                try {
                  var i = e.innerHTML;
                  e.insertAdjacentHTML("AfterEnd", B ? B.createHTML(i) : i);
                } catch (e) {}
              return _e(e), !0;
            }
            return "noscript" === n && /<\/noscript/i.test(e.innerHTML)
              ? (_e(e), !0)
              : "noembed" === n && /<\/noembed/i.test(e.innerHTML)
              ? (_e(e), !0)
              : (!pe ||
                  e.firstElementChild ||
                  (e.content && e.content.firstElementChild) ||
                  !/</g.test(e.textContent) ||
                  (f.removed.push({ element: e.cloneNode() }),
                  e.innerHTML
                    ? (e.innerHTML = e.innerHTML.replace(/</g, "&lt;"))
                    : (e.innerHTML = e.textContent.replace(/</g, "&lt;"))),
                me &&
                  3 === e.nodeType &&
                  ((r = (r = (r = e.textContent).replace(Z, " ")).replace(
                    Q,
                    " "
                  )),
                  e.textContent !== r &&
                    (f.removed.push({ element: e.cloneNode() }),
                    (e.textContent = r))),
                Ue("afterSanitizeElements", e, null),
                !1);
          },
          Pe = function (e, t, r) {
            if (Se && ("id" === t || "name" === t) && (r in D || r in Ce))
              return !1;
            if (de && ee.test(t));
            else if (fe && te.test(t));
            else {
              if (!se[t] || le[t]) return !1;
              if (Oe[t]);
              else if (ie.test(r.replace(ne, "")));
              else if (
                ("src" !== t && "xlink:href" !== t && "href" !== t) ||
                "script" === e ||
                0 !== r.indexOf("data:") ||
                !Re[e]
              )
                if (he && !re.test(r.replace(ne, "")));
                else if (r) return !1;
            }
            return !0;
          },
          ze = function (e) {
            var t = void 0,
              r = void 0,
              n = void 0,
              i = void 0,
              o = void 0;
            Ue("beforeSanitizeAttributes", e, null);
            var a = e.attributes;
            if (a) {
              var s = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: se,
              };
              for (o = a.length; o--; ) {
                var c = (t = a[o]),
                  u = c.name,
                  l = c.namespaceURI;
                if (
                  ((r = t.value.trim()),
                  (n = u.toLowerCase()),
                  (s.attrName = n),
                  (s.attrValue = r),
                  (s.keepAttr = !0),
                  Ue("uponSanitizeAttribute", e, s),
                  (r = s.attrValue),
                  "name" === n && "IMG" === e.nodeName && a.id)
                )
                  (i = a.id),
                    (a = L(k, a, [])),
                    He("id", e),
                    He(u, e),
                    a.indexOf(i) > o && e.setAttribute("id", i.value);
                else {
                  if (
                    "INPUT" === e.nodeName &&
                    "type" === n &&
                    "file" === r &&
                    s.keepAttr &&
                    (se[n] || !le[n])
                  )
                    continue;
                  "id" === u && e.setAttribute(u, ""), He(u, e);
                }
                if (s.keepAttr)
                  if (
                    /svg|math/i.test(e.namespaceURI) &&
                    new RegExp(
                      "</(" + Object.keys(ke).join("|") + ")",
                      "i"
                    ).test(r)
                  )
                    He(u, e);
                  else {
                    me && (r = (r = r.replace(Z, " ")).replace(Q, " "));
                    var d = e.nodeName.toLowerCase();
                    if (Pe(d, n, r))
                      try {
                        l ? e.setAttributeNS(l, u, r) : e.setAttribute(u, r),
                          f.removed.pop();
                      } catch (e) {}
                  }
              }
              Ue("afterSanitizeAttributes", e, null);
            }
          },
          Be = function e(t) {
            var r = void 0,
              n = Fe(t);
            for (Ue("beforeSanitizeShadowDOM", t, null); (r = n.nextNode()); )
              Ue("uponSanitizeShadowNode", r, null),
                Ie(r) || (r.content instanceof C && e(r.content), ze(r));
            Ue("afterSanitizeShadowDOM", t, null);
          };
        return (
          (f.sanitize = function (e, t) {
            var r = void 0,
              n = void 0,
              i = void 0,
              o = void 0,
              s = void 0;
            if ((e || (e = "\x3c!--\x3e"), "string" != typeof e && !qe(e))) {
              if ("function" != typeof e.toString)
                throw new TypeError("toString is not a function");
              if ("string" != typeof (e = e.toString()))
                throw new TypeError("dirty is not a string, aborting");
            }
            if (!f.isSupported) {
              if (
                "object" === E(a.toStaticHTML) ||
                "function" == typeof a.toStaticHTML
              ) {
                if ("string" == typeof e) return a.toStaticHTML(e);
                if (qe(e)) return a.toStaticHTML(e.outerHTML);
              }
              return e;
            }
            if ((ye || Ne(t), (f.removed = []), Ae));
            else if (e instanceof _)
              1 ===
                (n = (r = je("\x3c!--\x3e")).ownerDocument.importNode(e, !0))
                  .nodeType && "BODY" === n.nodeName
                ? (r = n)
                : "HTML" === n.nodeName
                ? (r = n)
                : r.appendChild(n);
            else {
              if (!be && !me && !ve && xe && -1 === e.indexOf("<"))
                return B ? B.createHTML(e) : e;
              if (!(r = je(e))) return be ? null : V;
            }
            r && ge && _e(r.firstChild);
            for (var c = Fe(Ae ? e : r); (i = c.nextNode()); )
              (3 === i.nodeType && i === o) ||
                Ie(i) ||
                (i.content instanceof C && Be(i.content), ze(i), (o = i));
            if (((o = null), Ae)) return e;
            if (be) {
              if (we)
                for (s = X.call(r.ownerDocument); r.firstChild; )
                  s.appendChild(r.firstChild);
              else s = r;
              return Te && (s = J.call(d, s, !0)), s;
            }
            var u = ve ? r.outerHTML : r.innerHTML;
            return (
              me && (u = (u = u.replace(Z, " ")).replace(Q, " ")),
              B && xe ? B.createHTML(u) : u
            );
          }),
          (f.setConfig = function (e) {
            Ne(e), (ye = !0);
          }),
          (f.clearConfig = function () {
            (De = null), (ye = !1);
          }),
          (f.isValidAttribute = function (e, t, r) {
            De || Ne({});
            var n = e.toLowerCase(),
              i = t.toLowerCase();
            return Pe(n, i, r);
          }),
          (f.addHook = function (e, t) {
            "function" == typeof t && ((K[e] = K[e] || []), K[e].push(t));
          }),
          (f.removeHook = function (e) {
            K[e] && K[e].pop();
          }),
          (f.removeHooks = function (e) {
            K[e] && (K[e] = []);
          }),
          (f.removeAllHooks = function () {
            K = {};
          }),
          f
        );
      })();
    })();
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
          r[n] = arguments[n];
        return e.apply(t, r);
      };
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    function i(e) {
      return encodeURIComponent(e)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, r) {
      if (!t) return e;
      var o;
      if (r) o = r(t);
      else if (n.isURLSearchParams(t)) o = t.toString();
      else {
        var a = [];
        n.forEach(t, function (e, t) {
          null != e &&
            (n.isArray(e) ? (t += "[]") : (e = [e]),
            n.forEach(e, function (e) {
              n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                a.push(i(t) + "=" + i(e));
            }));
        }),
          (o = a.join("&"));
      }
      if (o) {
        var s = e.indexOf("#");
        -1 !== s && (e = e.slice(0, s)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + o);
      }
      return e;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      var n = r(0),
        i = r(18),
        o = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var s,
        c = {
          adapter:
            (void 0 !== t &&
            "[object process]" === Object.prototype.toString.call(t)
              ? (s = r(7))
              : "undefined" != typeof XMLHttpRequest && (s = r(7)),
            s),
          transformRequest: [
            function (e, t) {
              return (
                i(t, "Accept"),
                i(t, "Content-Type"),
                n.isFormData(e) ||
                n.isArrayBuffer(e) ||
                n.isBuffer(e) ||
                n.isStream(e) ||
                n.isFile(e) ||
                n.isBlob(e)
                  ? e
                  : n.isArrayBufferView(e)
                  ? e.buffer
                  : n.isURLSearchParams(e)
                  ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : n.isObject(e)
                  ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (c.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        n.forEach(["delete", "get", "head"], function (e) {
          c.headers[e] = {};
        }),
        n.forEach(["post", "put", "patch"], function (e) {
          c.headers[e] = n.merge(o);
        }),
        (e.exports = c);
    }.call(this, r(17)));
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r(19),
      o = r(4),
      a = r(21),
      s = r(22),
      c = r(8);
    e.exports = function (e) {
      return new Promise(function (t, u) {
        var l = e.data,
          f = e.headers;
        n.isFormData(l) && delete f["Content-Type"];
        var d = new XMLHttpRequest();
        if (e.auth) {
          var h = e.auth.username || "",
            p = e.auth.password || "";
          f.Authorization = "Basic " + btoa(h + ":" + p);
        }
        if (
          (d.open(
            e.method.toUpperCase(),
            o(e.url, e.params, e.paramsSerializer),
            !0
          ),
          (d.timeout = e.timeout),
          (d.onreadystatechange = function () {
            if (
              d &&
              4 === d.readyState &&
              (0 !== d.status ||
                (d.responseURL && 0 === d.responseURL.indexOf("file:")))
            ) {
              var r =
                  "getAllResponseHeaders" in d
                    ? a(d.getAllResponseHeaders())
                    : null,
                n = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? d.response
                      : d.responseText,
                  status: d.status,
                  statusText: d.statusText,
                  headers: r,
                  config: e,
                  request: d,
                };
              i(t, u, n), (d = null);
            }
          }),
          (d.onabort = function () {
            d && (u(c("Request aborted", e, "ECONNABORTED", d)), (d = null));
          }),
          (d.onerror = function () {
            u(c("Network Error", e, null, d)), (d = null);
          }),
          (d.ontimeout = function () {
            u(
              c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)
            ),
              (d = null);
          }),
          n.isStandardBrowserEnv())
        ) {
          var m = r(23),
            v =
              (e.withCredentials || s(e.url)) && e.xsrfCookieName
                ? m.read(e.xsrfCookieName)
                : void 0;
          v && (f[e.xsrfHeaderName] = v);
        }
        if (
          ("setRequestHeader" in d &&
            n.forEach(f, function (e, t) {
              void 0 === l && "content-type" === t.toLowerCase()
                ? delete f[t]
                : d.setRequestHeader(t, e);
            }),
          e.withCredentials && (d.withCredentials = !0),
          e.responseType)
        )
          try {
            d.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress &&
          d.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            d.upload &&
            d.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              d && (d.abort(), u(e), (d = null));
            }),
          void 0 === l && (l = null),
          d.send(l);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(20);
    e.exports = function (e, t, r, i, o) {
      var a = new Error(e);
      return n(a, t, r, i, o);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function (e, t) {
      t = t || {};
      var r = {};
      return (
        n.forEach(["url", "method", "params", "data"], function (e) {
          void 0 !== t[e] && (r[e] = t[e]);
        }),
        n.forEach(["headers", "auth", "proxy"], function (i) {
          n.isObject(t[i])
            ? (r[i] = n.deepMerge(e[i], t[i]))
            : void 0 !== t[i]
            ? (r[i] = t[i])
            : n.isObject(e[i])
            ? (r[i] = n.deepMerge(e[i]))
            : void 0 !== e[i] && (r[i] = e[i]);
        }),
        n.forEach(
          [
            "baseURL",
            "transformRequest",
            "transformResponse",
            "paramsSerializer",
            "timeout",
            "withCredentials",
            "adapter",
            "responseType",
            "xsrfCookieName",
            "xsrfHeaderName",
            "onUploadProgress",
            "onDownloadProgress",
            "maxContentLength",
            "validateStatus",
            "maxRedirects",
            "httpAgent",
            "httpsAgent",
            "cancelToken",
            "socketPath",
          ],
          function (n) {
            void 0 !== t[n] ? (r[n] = t[n]) : void 0 !== e[n] && (r[n] = e[n]);
          }
        ),
        r
      );
    };
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      this.message = e;
    }
    (n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (n.prototype.__CANCEL__ = !0),
      (e.exports = n);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r(3),
      o = r(13),
      a = r(9);
    function s(e) {
      var t = new o(e),
        r = i(o.prototype.request, t);
      return n.extend(r, o.prototype, t), n.extend(r, t), r;
    }
    var c = s(r(6));
    (c.Axios = o),
      (c.create = function (e) {
        return s(a(c.defaults, e));
      }),
      (c.Cancel = r(10)),
      (c.CancelToken = r(26)),
      (c.isCancel = r(5)),
      (c.all = function (e) {
        return Promise.all(e);
      }),
      (c.spread = r(27)),
      (e.exports = c),
      (e.exports.default = c);
  },
  function (e, t) {
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function (e) {
      return (
        null != e &&
        null != e.constructor &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r(4),
      o = r(14),
      a = r(15),
      s = r(9);
    function c(e) {
      (this.defaults = e),
        (this.interceptors = { request: new o(), response: new o() });
    }
    (c.prototype.request = function (e) {
      "string" == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        ((e = s(this.defaults, e)).method = e.method
          ? e.method.toLowerCase()
          : "get");
      var t = [a, void 0],
        r = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        r = r.then(t.shift(), t.shift());
      return r;
    }),
      (c.prototype.getUri = function (e) {
        return (
          (e = s(this.defaults, e)),
          i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      n.forEach(["delete", "get", "head", "options"], function (e) {
        c.prototype[e] = function (t, r) {
          return this.request(n.merge(r || {}, { method: e, url: t }));
        };
      }),
      n.forEach(["post", "put", "patch"], function (e) {
        c.prototype[e] = function (t, r, i) {
          return this.request(n.merge(i || {}, { method: e, url: t, data: r }));
        };
      }),
      (e.exports = c);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    function i() {
      this.handlers = [];
    }
    (i.prototype.use = function (e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      );
    }),
      (i.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (i.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = i);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r(16),
      o = r(5),
      a = r(6),
      s = r(24),
      c = r(25);
    function u(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        u(e),
        e.baseURL && !s(e.url) && (e.url = c(e.baseURL, e.url)),
        (e.headers = e.headers || {}),
        (e.data = i(e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers || {}
        )),
        n.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || a.adapter)(e).then(
          function (t) {
            return (
              u(e), (t.data = i(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              o(t) ||
                (u(e),
                t &&
                  t.response &&
                  (t.response.data = i(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function (e, t, r) {
      return (
        n.forEach(r, function (r) {
          e = r(e, t);
        }),
        e
      );
    };
  },
  function (e, t) {
    var r,
      n,
      i = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === o || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        r = o;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        n = a;
      }
    })();
    var c,
      u = [],
      l = !1,
      f = -1;
    function d() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (f = -1), u.length && h());
    }
    function h() {
      if (!l) {
        var e = s(d);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++f < t; ) c && c[f].run();
          (f = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === a || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      u.push(new p(e, t)), 1 !== u.length || l || s(h);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = m),
      (i.addListener = m),
      (i.once = m),
      (i.off = m),
      (i.removeListener = m),
      (i.removeAllListeners = m),
      (i.emit = m),
      (i.prependListener = m),
      (i.prependOnceListener = m),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t &&
          n.toUpperCase() === t.toUpperCase() &&
          ((e[t] = r), delete e[n]);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(8);
    e.exports = function (e, t, r) {
      var i = r.config.validateStatus;
      !i || i(r.status)
        ? e(r)
        : t(
            n(
              "Request failed with status code " + r.status,
              r.config,
              null,
              r.request,
              r
            )
          );
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n, i) {
      return (
        (e.config = t),
        r && (e.code = r),
        (e.request = n),
        (e.response = i),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        e
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      i = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        r,
        o,
        a = {};
      return e
        ? (n.forEach(e.split("\n"), function (e) {
            if (
              ((o = e.indexOf(":")),
              (t = n.trim(e.substr(0, o)).toLowerCase()),
              (r = n.trim(e.substr(o + 1))),
              t)
            ) {
              if (a[t] && i.indexOf(t) >= 0) return;
              a[t] =
                "set-cookie" === t
                  ? (a[t] ? a[t] : []).concat([r])
                  : a[t]
                  ? a[t] + ", " + r
                  : r;
            }
          }),
          a)
        : a;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
          function i(e) {
            var n = e;
            return (
              t && (r.setAttribute("href", n), (n = r.href)),
              r.setAttribute("href", n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (e = i(window.location.href)),
            function (t) {
              var r = n.isString(t) ? i(t) : t;
              return r.protocol === e.protocol && r.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = n.isStandardBrowserEnv()
      ? {
          write: function (e, t, r, i, o, a) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)),
              n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
              n.isString(i) && s.push("path=" + i),
              n.isString(o) && s.push("domain=" + o),
              !0 === a && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(10);
    function i(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      e(function (e) {
        r.reason || ((r.reason = new n(e)), t(r.reason));
      });
    }
    (i.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (i.source = function () {
        var e;
        return {
          token: new i(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = i);
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(1),
      i = r.n(n),
      o = r(2),
      a = r.n(o);
    function s(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var c = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._csrf = document.querySelector('[name="_csrf"]').value),
          this.injectHTML(),
          (this.headerSearchIcon = document.querySelector(
            ".header-search-icon"
          )),
          (this.overlay = document.querySelector(".search-overlay")),
          (this.closeIcon = document.querySelector(".close-live-search")),
          (this.inputField = document.querySelector("#live-search-field")),
          (this.resultsArea = document.querySelector(".live-search-results")),
          (this.loaderIcon = document.querySelector(".circle-loader")),
          this.typingWaitTimer,
          (this.previousValue = ""),
          this.events();
      }
      var t, r, n;
      return (
        (t = e),
        (r = [
          {
            key: "events",
            value: function () {
              var e = this;
              this.inputField.addEventListener("keyup", function () {
                return e.keyPressHandler();
              }),
                this.closeIcon.addEventListener("click", function () {
                  return e.closeOverlay();
                }),
                this.headerSearchIcon.addEventListener("click", function (t) {
                  t.preventDefault(), e.openOverlay();
                });
            },
          },
          {
            key: "keyPressHandler",
            value: function () {
              var e = this,
                t = this.inputField.value;
              "" == t &&
                (clearTimeout(this.typingWaitTimer),
                this.hideLoaderIcon(),
                this.hideResultsArea()),
                "" != t &&
                  t != this.previousValue &&
                  (clearTimeout(this.typingWaitTimer),
                  this.showLoaderIcon(),
                  this.hideResultsArea(),
                  (this.typingWaitTimer = setTimeout(function () {
                    return e.sendRequest();
                  }, 750)));
            },
          },
          {
            key: "sendRequest",
            value: function () {
              var e = this;
              i.a
                .post("/search", {
                  _csrf: this._csrf,
                  searchTerm: this.inputField.value,
                })
                .then(function (t) {
                  console.log(t.data), e.renderResultsHTML(t.data);
                })
                .catch(function () {
                  alert("failed");
                });
            },
          },
          {
            key: "renderResultsHTML",
            value: function (e) {
              e.length
                ? (this.resultsArea.innerHTML = a.a.sanitize(
                    '<div class="list-group shadow-sm">\n            <div class="list-group-item active"><strong>Search Results</strong> ('
                      .concat(
                        e.length > 1
                          ? "".concat(e.length, " items found")
                          : "1 item found",
                        ")</div>\n            "
                      )
                      .concat(
                        e
                          .map(function (e) {
                            var t = new Date(e.createdDate);
                            return '  <a href="/post/'
                              .concat(
                                e._id,
                                '" class="list-group-item list-group-item-action">\n                <img class="avatar-tiny" src="'
                              )
                              .concat(e.author.avatar, '"> <strong>')
                              .concat(
                                e.title,
                                '</strong>\n                <span class="text-muted small">by '
                              )
                              .concat(e.author.username, " on ")
                              .concat(t.getMonth() + 1, "/")
                              .concat(t.getDate(), "/")
                              .concat(
                                t.getFullYear(),
                                "</span>\n              </a>"
                              );
                          })
                          .join(""),
                        "\n          </div>"
                      )
                  ))
                : (this.resultsArea.innerHTML =
                    '<p class="alert alert-danger text-center shadow-sm">Sorry, no results found</p>'),
                this.hideLoaderIcon(),
                this.showResultsArea();
            },
          },
          {
            key: "hideLoaderIcon",
            value: function () {
              this.loaderIcon.classList.remove("circle-loader--visible");
            },
          },
          {
            key: "showResultsArea",
            value: function () {
              this.resultsArea.classList.add("live-search-results--visible");
            },
          },
          {
            key: "hideResultsArea",
            value: function () {
              this.resultsArea.classList.remove("live-search-results--visible");
            },
          },
          {
            key: "showLoaderIcon",
            value: function () {
              this.loaderIcon.classList.add("circle-loader--visible");
            },
          },
          {
            key: "openOverlay",
            value: function () {
              var e = this;
              this.overlay.classList.add("search-overlay--visible"),
                setTimeout(function () {
                  return e.inputField.focus();
                }, 50);
            },
          },
          {
            key: "closeOverlay",
            value: function () {
              this.overlay.classList.remove("search-overlay--visible");
            },
          },
          {
            key: "injectHTML",
            value: function () {
              document.body.insertAdjacentHTML(
                "beforeend",
                ' <div class="search-overlay ">\n        <div class="search-overlay-top shadow-sm">\n          <div class="container container--narrow">\n            <label for="live-search-field" class="search-overlay-icon"><i class="fas fa-search"></i></label>\n            <input type="text" id="live-search-field" class="live-search-field" placeholder="What are you interested in?">\n            <span class="close-live-search"><i class="fas fa-times-circle"></i></span>\n          </div>\n        </div>\n    \n        <div class="search-overlay-bottom">\n          <div class="container container--narrow py-3">\n            <div class="circle-loader"></div>\n            <div class="live-search-results "></div>\n          </div>\n        </div>\n      </div>'
              );
            },
          },
        ]) && s(t.prototype, r),
        n && s(t, n),
        e
      );
    })();
    function u(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var l = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.openedYet = !1),
          (this.chatWrapper = document.querySelector("#chat-wrapper")),
          (this.openIcon = document.querySelector(".header-chat-icon")),
          this.injectHTML(),
          (this.chatLog = document.querySelector("#chat")),
          (this.chatField = document.querySelector("#chatField")),
          (this.chatForm = document.querySelector("#chatForm")),
          (this.closeIcon = document.querySelector(".chat-title-bar-close")),
          this.events();
      }
      var t, r, n;
      return (
        (t = e),
        (r = [
          {
            key: "events",
            value: function () {
              var e = this;
              this.chatForm.addEventListener("submit", function (t) {
                t.preventDefault(), e.sendMessageToServer();
              }),
                this.openIcon.addEventListener("click", function () {
                  return e.showChat();
                }),
                this.closeIcon.addEventListener("click", function () {
                  return e.hideChat();
                });
            },
          },
          {
            key: "sendMessageToServer",
            value: function () {
              this.socket.emit("chatMessageFromBrowser", {
                message: this.chatField.value,
              }),
                this.chatLog.insertAdjacentHTML(
                  "beforeend",
                  a.a.sanitize(
                    '\n        <div class="chat-self">\n        <div class="chat-message">\n          <div class="chat-message-inner">\n            '
                      .concat(
                        this.chatField.value,
                        '\n          </div>\n        </div>\n        <img class="chat-avatar avatar-tiny" src="'
                      )
                      .concat(this.avatar, '">\n      </div>')
                  )
                ),
                (this.chatLog.scrollTop = this.chatLog.scrollHeight),
                (this.chatField.value = ""),
                this.chatField.focus();
            },
          },
          {
            key: "hideChat",
            value: function () {
              this.chatWrapper.classList.remove("chat--visible");
            },
          },
          {
            key: "showChat",
            value: function () {
              this.openedYet || this.openConnection(),
                (this.openedYet = !0),
                this.chatWrapper.classList.add("chat--visible"),
                this.chatField.focus();
            },
          },
          {
            key: "openConnection",
            value: function () {
              var e = this;
              (this.socket = io()),
                this.socket.on("welcome", function (t) {
                  (e.username = t.username), (e.avatar = t.avatar);
                }),
                this.socket.on("chatMessageFromServer", function (t) {
                  e.displayMessageFromServer(t);
                });
            },
          },
          {
            key: "displayMessageFromServer",
            value: function (e) {
              this.chatLog.insertAdjacentHTML(
                "beforeend",
                a.a.sanitize(
                  '\n        <div class="chat-other">\n        <a href="/profile/'
                    .concat(e.username, '"><img class="avatar-tiny" src="')
                    .concat(
                      e.avatar,
                      '"></a>\n        <div class="chat-message"><div class="chat-message-inner">\n          <a href="/profile/'
                    )
                    .concat(e.username, '"><strong>')
                    .concat(e.username, ":</strong></a>\n          ")
                    .concat(e.message, "\n        </div></div>\n      </div>")
                )
              ),
                (this.chatLog.scrollTop = this.chatLog.scrollHeight);
            },
          },
          {
            key: "injectHTML",
            value: function () {
              this.chatWrapper.innerHTML =
                '\n        <div class="chat-title-bar">Chat <span class="chat-title-bar-close"><i class="fas fa-times-circle"></i></span></div>\n        <div id="chat" class="chat-log"></div>\n\n        <form id="chatForm" class="chat-form border-top">\n      <input type="text" class="chat-field" id="chatField" placeholder="Type a message…" autocomplete="off">\n    </form>\n        ';
            },
          },
        ]) && u(t.prototype, r),
        n && u(t, n),
        e
      );
    })();
    function f(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var d = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._csrf = document.querySelector('[name="_csrf"]').value),
          (this.form = document.querySelector("#registration-form")),
          (this.allFields = document.querySelectorAll(
            "#registration-form .form-control"
          )),
          this.insertValidationElements(),
          (this.username = document.querySelector("#username-register")),
          (this.username.previousValue = ""),
          (this.email = document.querySelector("#email-register")),
          (this.email.previousValue = ""),
          (this.password = document.querySelector("#password-register")),
          (this.password.previousValue = ""),
          (this.username.isUnique = !1),
          (this.email.isUnique = !1),
          this.events();
      }
      var t, r, n;
      return (
        (t = e),
        (r = [
          {
            key: "events",
            value: function () {
              var e = this;
              this.form.addEventListener("submit", function (t) {
                t.preventDefault(), e.formSubmitHandler();
              }),
                this.username.addEventListener("keyup", function () {
                  e.isDifferent(e.username, e.usernameHandler);
                }),
                this.email.addEventListener("keyup", function () {
                  e.isDifferent(e.email, e.emailHandler);
                }),
                this.password.addEventListener("keyup", function () {
                  e.isDifferent(e.password, e.passwordHandler);
                }),
                this.username.addEventListener("blur", function () {
                  e.isDifferent(e.username, e.usernameHandler);
                }),
                this.email.addEventListener("blur", function () {
                  e.isDifferent(e.email, e.emailHandler);
                }),
                this.password.addEventListener("blur", function () {
                  e.isDifferent(e.password, e.passwordHandler);
                });
            },
          },
          {
            key: "formSubmitHandler",
            value: function () {
              this.usernameImmediately(),
                this.usernameAfterDelay(),
                this.emailAfterDelay(),
                this.passwordImmediately(),
                this.passwordAfterDelay(),
                !this.username.isUnique ||
                  this.username.errors ||
                  !this.email.isUnique ||
                  this.email.errors ||
                  this.password.errors ||
                  this.form.submit();
            },
          },
          {
            key: "isDifferent",
            value: function (e, t) {
              e.previousValue != e.value && t.call(this),
                (e.previousValue = e.value);
            },
          },
          {
            key: "usernameHandler",
            value: function () {
              var e = this;
              (this.username.errors = !1),
                this.usernameImmediately(),
                clearTimeout(this.username.timer),
                (this.username.timer = setTimeout(function () {
                  return e.usernameAfterDelay();
                }, 800));
            },
          },
          {
            key: "emailHandler",
            value: function () {
              var e = this;
              (this.email.errors = !1),
                clearTimeout(this.email.timer),
                (this.email.timer = setTimeout(function () {
                  return e.emailAfterDelay();
                }, 800));
            },
          },
          {
            key: "passwordHandler",
            value: function () {
              var e = this;
              (this.password.errors = !1),
                this.passwordImmediately(),
                clearTimeout(this.password.timer),
                (this.password.timer = setTimeout(function () {
                  return e.passwordAfterDelay();
                }, 800));
            },
          },
          {
            key: "passwordImmediately",
            value: function () {
              this.password.value.length > 30 &&
                this.showValidationError(
                  this.password,
                  "Password cannot exceed 30 characters."
                ),
                this.password.errors || this.hideValidationError(this.password);
            },
          },
          {
            key: "passwordAfterDelay",
            value: function () {
              this.password.value.length < 8 &&
                this.showValidationError(
                  this.password,
                  "Password must be atleast 8 characters."
                );
            },
          },
          {
            key: "emailAfterDelay",
            value: function () {
              var e = this;
              /^\S+@\S+$/.test(this.email.value) ||
                this.showValidationError(this.email, "Invalid email address."),
                this.email.errors ||
                  i.a
                    .post("/doesEmailExist", {
                      _csrf: this._csrf,
                      email: this.email.value,
                    })
                    .then(function (t) {
                      t.data
                        ? ((e.email.isUnique = !1),
                          e.showValidationError(
                            e.email,
                            "Email already being used."
                          ))
                        : ((e.email.isUnique = !0),
                          e.hideValidationError(e.email));
                    })
                    .catch(function () {
                      console.log("try again later");
                    });
            },
          },
          {
            key: "usernameImmediately",
            value: function () {
              "" == this.username.value ||
                /^([a-zA-Z0-9]+)$/.test(this.username.value) ||
                this.showValidationError(
                  this.username,
                  "Username can only contain letters and numbers."
                ),
                this.username.value.length > 20 &&
                  this.showValidationError(
                    this.username,
                    "Username cannot exceed 20 characters."
                  ),
                this.username.errors || this.hideValidationError(this.username);
            },
          },
          {
            key: "hideValidationError",
            value: function (e) {
              e.nextElementSibling.classList.remove(
                "liveValidateMessage--visible"
              );
            },
          },
          {
            key: "showValidationError",
            value: function (e, t) {
              (e.nextElementSibling.innerHTML = t),
                e.nextElementSibling.classList.add(
                  "liveValidateMessage--visible"
                ),
                (e.errors = !0);
            },
          },
          {
            key: "usernameAfterDelay",
            value: function () {
              var e = this;
              this.username.value.length < 3 &&
                this.showValidationError(
                  this.username,
                  "Username must be at least 3 characters"
                ),
                this.username.errors ||
                  i.a
                    .post("/doesUsernameExist", {
                      _csrf: this._csrf,
                      username: this.username.value,
                    })
                    .then(function (t) {
                      t.data
                        ? (e.showValidationError(
                            e.username,
                            "Username is already taken."
                          ),
                          (e.username.isUnique = !1))
                        : (e.username.isUnique = !0);
                    })
                    .catch(function () {
                      console.log("Please try again later.");
                    });
            },
          },
          {
            key: "insertValidationElements",
            value: function () {
              this.allFields.forEach(function (e) {
                e.insertAdjacentHTML(
                  "afterend",
                  '<div class="alert alert-danger small liveValidateMessage"></div>'
                );
              });
            },
          },
        ]) && f(t.prototype, r),
        n && f(t, n),
        e
      );
    })();
    document.querySelector("#registration-form") && new d(),
      document.querySelector("#chat-wrapper") && new l(),
      document.querySelector(".header-search-icon") && new c();
  },
]);
