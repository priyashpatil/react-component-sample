(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".checkbox-wrapper{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;gap:8px}.checkbox-wrapper.checkbox-disabled{cursor:not-allowed}.checkbox-input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-custom{position:relative;display:flex;align-items:center;justify-content:center;transition:all .2s ease}.checkbox-svg{display:block;transition:all .2s ease}.checkbox-background,.checkbox-checkmark{transition:all .2s ease}.checkbox-label{font-size:14px;color:#374151;line-height:1.5;transition:color .2s ease}.checkbox-small .checkbox-label{font-size:12px}.checkbox-large .checkbox-label{font-size:16px}.checkbox-input:focus-visible~.checkbox-custom{outline:2px solid #3b82f6;outline-offset:2px;border-radius:4px}.checkbox-disabled .checkbox-label{color:#9ca3af}.checkbox-wrapper:hover:not(.checkbox-disabled) .checkbox-svg{transform:scale(1.05)}")),document.head.appendChild(e)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
import re, { useRef as te, useEffect as ne } from "react";
var g = { exports: {} }, T = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X;
function oe() {
  if (X) return T;
  X = 1;
  var l = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function b(E, s, c) {
    var i = null;
    if (c !== void 0 && (i = "" + c), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      c = {};
      for (var k in s)
        k !== "key" && (c[k] = s[k]);
    } else c = s;
    return s = c.ref, {
      $$typeof: l,
      type: E,
      key: i,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return T.Fragment = u, T.jsx = b, T.jsxs = b, T;
}
var x = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function ae() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && (function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case S:
          return "Profiler";
        case n:
          return "StrictMode";
        case C:
          return "Suspense";
        case D:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case w:
            return "Portal";
          case N:
            return (e.displayName || "Context") + ".Provider";
          case P:
            return (e._context.displayName || "Context") + ".Consumer";
          case y:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case M:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function b(e) {
      try {
        u(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), u(e);
      }
    }
    function E(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === M)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = $.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function k(e, r) {
      function t() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function m() {
      var e = l(this.type);
      return V[e] || (V[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function O(e, r, t, o, d, f, L, I) {
      return t = f.ref, e = {
        $$typeof: A,
        type: e,
        key: r,
        props: f,
        _owner: d
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function j(e, r, t, o, d, f, L, I) {
      var a = r.children;
      if (a !== void 0)
        if (o)
          if (K(a)) {
            for (o = 0; o < a.length; o++)
              p(a[o]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(a);
      if (W.call(r, "key")) {
        a = l(e);
        var v = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        o = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", G[a + o] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          a,
          v,
          a
        ), G[a + o] = !0);
      }
      if (a = null, t !== void 0 && (b(t), a = "" + t), i(r) && (b(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var F in r)
          F !== "key" && (t[F] = r[F]);
      } else t = r;
      return a && k(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), O(
        e,
        a,
        f,
        d,
        s(),
        t,
        L,
        I
      );
    }
    function p(e) {
      typeof e == "object" && e !== null && e.$$typeof === A && e._store && (e._store.validated = 1);
    }
    var R = re, A = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), N = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), $ = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, K = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var U, V = {}, q = R.react_stack_bottom_frame.bind(
      R,
      c
    )(), J = Y(E(c)), G = {};
    x.Fragment = h, x.jsx = function(e, r, t, o, d) {
      var f = 1e4 > $.recentlyCreatedOwnerStacks++;
      return j(
        e,
        r,
        t,
        !1,
        o,
        d,
        f ? Error("react-stack-top-frame") : q,
        f ? Y(E(e)) : J
      );
    }, x.jsxs = function(e, r, t, o, d) {
      var f = 1e4 > $.recentlyCreatedOwnerStacks++;
      return j(
        e,
        r,
        t,
        !0,
        o,
        d,
        f ? Error("react-stack-top-frame") : q,
        f ? Y(E(e)) : J
      );
    };
  })()), x;
}
var z;
function se() {
  return z || (z = 1, process.env.NODE_ENV === "production" ? g.exports = oe() : g.exports = ae()), g.exports;
}
var _ = se();
const le = ({
  checked: l = !1,
  indeterminate: u = !1,
  error: b = !1,
  variant: E = "primary",
  onChange: s,
  label: c,
  disabled: i = !1,
  className: k = "",
  size: m = "medium",
  color: O,
  ...j
}) => {
  const p = te(null);
  ne(() => {
    p.current && (p.current.indeterminate = u);
  }, [u]);
  const R = {
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#dc2626",
    neutral: "#6b7280"
  }, w = O || R[b ? "error" : E] || R.primary, h = [
    "checkbox-wrapper",
    `checkbox-${m}`,
    i && "checkbox-disabled",
    k
  ].filter(Boolean).join(" "), n = m === "small" ? 16 : m === "large" ? 24 : 20, S = m === "small" ? 1.5 : 2, P = m === "small" ? 2 : m === "large" ? 4 : 3, N = u ? `M${n * 0.25},${n * 0.5} L${n * 0.75},${n * 0.5}` : `M${n * 0.25},${n * 0.5} L${n * 0.45},${n * 0.7} L${n * 0.75},${n * 0.3}`, y = (l || u) && !i ? w : "white", C = i ? "#e5e7eb" : l || u ? w : "#d1d5db";
  return /* @__PURE__ */ _.jsxs("label", { className: h, children: [
    /* @__PURE__ */ _.jsx(
      "input",
      {
        ref: p,
        type: "checkbox",
        className: "checkbox-input",
        checked: l,
        onChange: s || (() => {
        }),
        disabled: i,
        ...j
      }
    ),
    /* @__PURE__ */ _.jsx("div", { className: "checkbox-custom", children: /* @__PURE__ */ _.jsxs(
      "svg",
      {
        className: "checkbox-svg",
        width: n,
        height: n,
        viewBox: `0 0 ${n} ${n}`,
        children: [
          /* @__PURE__ */ _.jsx(
            "rect",
            {
              className: "checkbox-background",
              width: n,
              height: n,
              rx: P,
              fill: y,
              stroke: C,
              strokeWidth: 1.5
            }
          ),
          (l || u) && /* @__PURE__ */ _.jsx(
            "path",
            {
              className: "checkbox-checkmark",
              d: N,
              stroke: "white",
              strokeWidth: S,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              fill: "none"
            }
          )
        ]
      }
    ) }),
    c && /* @__PURE__ */ _.jsx("span", { className: "checkbox-label", children: c })
  ] });
};
export {
  le as Checkbox,
  le as default
};
