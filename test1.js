let array = require('./codeArray.js');
let key_short = 'dGVuY2VudC12aWRlbw==';
let key_long = 'A1U5awIAA2w2ZQA8AzdnZABhA3o2NgAMAzY1cwBcA3ZvegAhA0dGUgEAAzBZaQAGA2hOYQAZA3ZrNAAKA2syNAAJA3ZlMAAXA3piNgBDA0NBMgAbA3l3WgA/A1JSYgAE'
let global_v = [];

let Uint8Array_util = {
    toUint8Array: function (e, t) {
        var A = e.replace(/=/g, "").replace(/-/g, "+").replace(/_/g, "/");
        if (t && Ue[t]) {
            var i = Ue[t].split("")
                , o = A.split("");
            A = o.map((function (e, t) {
                    return String.fromCharCode(e.charCodeAt(0) ^ i[t].charCodeAt(0))
                }
            )).join("")
        }
        var n = atob(A.replace(/=/g, ""));
        return new Uint8Array(n.length).map((function (e, t) {
                return n.charCodeAt(t)
            }
        ))
    },
    fromUint8Array: function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            urlSafe: !1,
            padding: !0
        }, A = t.urlSafe, i = void 0 !== A && A, o = t.padding, n = void 0 === o || o ? "=" : "", r = "", a = new Uint8Array(e), s = a.byteLength, g = 0; g < s; g++)
            r += String.fromCharCode(a[g]);
        return r = btoa(r).replace(/=/g, n),
            i ? r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "") : r
    }
};

let key_short_Uint8 = Uint8Array_util.toUint8Array(key_short);
let key_long_Uint8 = Uint8Array_util.toUint8Array(key_long);
array.set(key_short_Uint8, 50599);
array.set(key_long_Uint8, 405);

let buffer = array.buffer;
window = global;

function n(e, t) {
    return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
}

function r(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}

let i = require('./import_func_controller/a_i.js');
let a = function (e, t, A, s, g) {
    return function (e, t, A, s, g) {
        return function l() {
            for (var u, c, B, E, d = [A, s, t, this, arguments, l, i, 0], p = void 0, h = e, I = []; ;)
                try {
                    for (; ;)
                        switch (i[++h] ^ d[7]) {
                            case 0:
                                d[i[++h]] = d[i[++h]] % d[i[++h]];
                                break;
                            case 1:
                                d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 2:
                                for (c = [,],
                                         B = i[++h]; B > 0; B--)
                                    c.push(d[i[++h]]);
                                B = i[++h],
                                    E = d[i[++h]],
                                    d[B] = new (E.bind.apply(E, c));
                                break;
                            case 3:
                                d[i[++h]] += String.fromCharCode(i[++h]),
                                    d[i[++h]] = i[++h],
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 4:
                            case 11:
                                d[i[++h]] = d[i[++h]] == d[i[++h]];
                                break;
                            case 5:
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                                break;
                            case 6:
                                d[i[++h]] = d[i[++h]] / d[i[++h]];
                                break;
                            case 7:
                                d[i[++h]] = "",
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 8:
                                d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]]);
                                break;
                            case 9:
                                d[i[++h]][d[i[++h]]] = d[i[++h]];
                                break;
                            case 10:
                                d[i[++h]][i[++h]] = d[i[++h]],
                                    d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 12:
                                d[i[++h]] = new d[i[++h]];
                                break;
                            case 13:
                                d[i[++h]] = d[i[++h]] - i[++h];
                                break;
                            case 14:
                                d[i[++h]] = d[i[++h]] > i[++h];
                                break;
                            case 15:
                                d[i[++h]] = d[i[++h]].call(p),
                                    d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 16:
                                d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]]);
                                break;
                            case 17:
                                d[i[++h]] = d[i[++h]][d[i[++h]]],
                                    d[i[++h]] = "";
                                break;
                            case 18:
                                d[i[++h]] = d[i[++h]];
                                break;
                            case 19:
                                d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]], d[i[++h]]);
                                break;
                            case 20:
                                d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 21:
                                d[i[++h]] = d[i[++h]] >= i[++h];
                                break;
                            case 22:
                                d[i[++h]] = null;
                                break;
                            case 23:
                                d[i[++h]] = d[i[++h]].call(p);
                                break;
                            case 24:
                                d[i[++h]] = d[i[++h]] + i[++h];
                                break;
                            case 25:
                                for (d[i[++h]] = d[i[++h]][i[++h]],
                                         c = [],
                                         B = i[++h]; B > 0; B--)
                                    c.push(d[i[++h]]);
                                d[i[++h]] = a(h + i[++h], c, A, s, g);
                                try {
                                    Object.defineProperty(d[i[h - 1]], "length", {
                                        value: i[++h],
                                        configurable: !0,
                                        writable: !1,
                                        enumerable: !1
                                    })
                                } catch (e) {
                                }
                                d[i[++h]] = d[i[++h]];
                                break;
                            case 26:
                                for (c = [],
                                         B = i[++h]; B > 0; B--)
                                    c.push(d[i[++h]]);
                                d[i[++h]] = d[i[++h]].apply(d[i[++h]], c);
                                break;
                            case 27:
                                throw d[i[++h]];
                            case 28:
                                h += d[i[++h]] ? i[++h] : i[(++h,
                                    ++h)];
                                break;
                            case 29:
                                d[i[++h]] = d[i[++h]] < d[i[++h]];
                                break;
                            case 30:
                                d[i[++h]][i[++h]] = d[i[++h]],
                                    d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 31:
                                d[i[++h]] = ~d[i[++h]];
                                break;
                            case 32:
                                for (c = [],
                                         B = i[++h]; B > 0; B--)
                                    c.push(d[i[++h]]);
                                d[i[++h]] = d[i[++h]].apply(p, c);
                                break;
                            case 33:
                                d[i[++h]][i[++h]] = d[i[++h]],
                                    d[i[++h]] = "",
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 34:
                                d[i[++h]] += String.fromCharCode(i[++h]),
                                    d[i[++h]][i[++h]] = d[i[++h]],
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 35:
                                d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]] = d[i[++h]][d[i[++h]]];
                                break;
                            case 36:
                                I.pop();
                                break;
                            case 37:
                                d[i[++h]] = d[i[++h]] + d[i[++h]];
                                break;
                            case 38:
                                d[i[++h]] += String.fromCharCode(i[++h]),
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 39:
                                c = d[i[++h]],
                                    (d[i[++h]] = !!c.length) ? d[i[++h]] = c.shift() : ++h;
                                break;
                            case 40:
                                for (c = [],
                                         B = i[++h]; B > 0; B--)
                                    c.push(d[i[++h]]);
                                d[i[++h]] = a(h + i[++h], c, A, s, g);
                                try {
                                    Object.defineProperty(d[i[h - 1]], "length", {
                                        value: i[++h],
                                        configurable: !0,
                                        writable: !1,
                                        enumerable: !1
                                    })
                                } catch (e) {
                                }
                                break;
                            case 41:
                                d[i[++h]] = d[i[++h]] === i[++h];
                                break;
                            case 42:
                                d[i[++h]] = d[i[++h]].call(d[i[++h]]);
                                break;
                            case 43:
                                d[i[++h]] = p;
                                break;
                            case 44:
                                d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 45:
                                I.push(h + i[++h]);
                                break;
                            case 46:
                                d[i[++h]] = -d[i[++h]];
                                break;
                            case 47:
                                d[i[++h]] = "";
                                break;
                            case 48:
                                for (B in c = [],
                                    d[i[++h]])
                                    c.push(B);
                                d[i[++h]] = c;
                                break;
                            case 49:
                                d[i[++h]] = d[i[++h]] ^ d[i[++h]];
                                break;
                            case 50:
                                d[i[++h]] = delete d[i[++h]][d[i[++h]]];
                                break;
                            case 51:
                                d[i[++h]] = d[i[++h]] * d[i[++h]];
                                break;
                            case 52:
                                d[i[++h]] = d[i[++h]],
                                    d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 53:
                                d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]]);
                                break;
                            case 54:
                                return d[i[++h]];
                            case 55:
                                d[i[++h]] = d[i[++h]] < i[++h];
                                break;
                            case 56:
                                d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 57:
                                d[i[++h]] = d[i[++h]] & d[i[++h]];
                                break;
                            case 58:
                                d[i[++h]] = d[i[++h]] - d[i[++h]];
                                break;
                            case 59:
                                d[i[++h]] = Array(i[++h]);
                                break;
                            case 60:
                                d[i[++h]] = i[++h];
                                break;
                            case 61:
                                d[i[++h]] = !d[i[++h]];
                                break;
                            case 62:
                                d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 63:
                                d[i[++h]] = i[++h],
                                    d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 64:
                                d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]] = "";
                                break;
                            case 65:
                                d[i[++h]] = d[i[++h]],
                                    d[i[++h]][d[i[++h]]] = d[i[++h]];
                                break;
                            case 66:
                                d[i[++h]] += String.fromCharCode(i[++h]),
                                    d[i[++h]] = d[i[++h]][d[i[++h]]];
                                break;
                            case 67:
                                d[i[++h]] = d[i[++h]] - 0;
                                break;
                            case 68:
                                d[i[++h]] = d[i[++h]][d[i[++h]]],
                                    d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 69:
                                d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 70:
                                d[i[++h]] = Array(i[++h]),
                                    d[i[++h]] = Array(i[++h]);
                                break;
                            case 71:
                                d[i[++h]][i[++h]] = d[i[++h]],
                                    h += d[i[++h]] ? i[++h] : i[(++h,
                                        ++h)];
                                break;
                            case 72:
                                d[i[++h]] = new d[i[++h]](d[i[++h]]);
                                break;
                            case 73:
                                d[i[++h]] = new d[i[++h]](d[i[++h]], d[i[++h]]);
                                break;
                            case 74:
                                d[i[++h]] = d[i[++h]] | d[i[++h]];
                                break;
                            case 75:
                                d[i[++h]] = n(d[i[++h]], d[i[++h]]);
                                break;
                            case 76:
                                d[i[++h]] = d[i[++h]].call(p, d[i[++h]]);
                                break;
                            case 77:
                                d[i[++h]] = ++d[i[++h]];
                                break;
                            case 78:
                                d[i[++h]] = {};
                                break;
                            case 79:
                                d[i[++h]] = d[i[++h]] > d[i[++h]];
                                break;
                            case 80:
                                d[i[++h]] = d[i[++h]][d[i[++h]]],
                                    d[i[++h]] = "",
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 81:
                                d[i[++h]] = i[++h],
                                    d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 82:
                                d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]], d[i[++h]]);
                                break;
                            case 83:
                                d[i[++h]] = +d[i[++h]];
                                break;
                            case 84:
                                d[i[++h]] = u;
                                break;
                            case 85:
                                d[i[++h]] = r(d[i[++h]])
                        }
                } catch (e) {
                    if (I.length > 0 && (o = []),
                        u = e,
                        o.push(h),
                    0 === I.length)
                        throw g ? g(e, d, o) : e;
                    h = I.pop(),
                        o.pop()
                }
        }
    };
}

function get$2o() {
    let A = window, e = 77807, s = [void 0, null, 0.5], t = [];
    let i = require('./import_func_controller/$2o_i.js');
    let o = [];
    return function l() {
        for (var u, c, B, E, d = [A, s, t, this, arguments, l, i, 0], p = void 0, h = e, I = []; ;)
            try {
                for (; ;)
                    switch (i[++h] ^ d[7]) {
                        case 0:
                            d[i[++h]] = d[i[++h]] % d[i[++h]];
                            break;
                        case 1:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 2:
                            for (c = [,],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            B = i[++h],
                                E = d[i[++h]],
                                d[B] = new (E.bind.apply(E, c));
                            break;
                        case 3:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] = i[++h],
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 4:
                        case 11:
                            d[i[++h]] = d[i[++h]] == d[i[++h]];
                            break;
                        case 5:
                            d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 6:
                            d[i[++h]] = d[i[++h]] / d[i[++h]];
                            break;
                        case 7:
                            d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 8:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]]);
                            break;
                        case 9:
                            d[i[++h]][d[i[++h]]] = d[i[++h]];
                            break;
                        case 10:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 12:
                            d[i[++h]] = new d[i[++h]];
                            break;
                        case 13:
                            d[i[++h]] = d[i[++h]] - i[++h];
                            break;
                        case 14:
                            d[i[++h]] = d[i[++h]] > i[++h];
                            break;
                        case 15:
                            d[i[++h]] = d[i[++h]].call(p),
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 16:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 17:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = "";
                            break;
                        case 18:
                            d[i[++h]] = d[i[++h]];
                            break;
                        case 19:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 20:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 21:
                            d[i[++h]] = d[i[++h]] >= i[++h];
                            break;
                        case 22:
                            d[i[++h]] = null;
                            break;
                        case 23:
                            d[i[++h]] = d[i[++h]].call(p);
                            break;
                        case 24:
                            d[i[++h]] = d[i[++h]] + i[++h];
                            break;
                        case 25:
                            for (d[i[++h]] = d[i[++h]][i[++h]],
                                     c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = a(h + i[++h], c, A, s, g);
                            try {
                                Object.defineProperty(d[i[h - 1]], "length", {
                                    value: i[++h],
                                    configurable: !0,
                                    writable: !1,
                                    enumerable: !1
                                })
                            } catch (e) {
                            }
                            d[i[++h]] = d[i[++h]];
                            break;
                        case 26:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = d[i[++h]].apply(d[i[++h]], c);
                            break;
                        case 27:
                            throw d[i[++h]];
                        case 28:
                            h += d[i[++h]] ? i[++h] : i[(++h,
                                ++h)];
                            break;
                        case 29:
                            d[i[++h]] = d[i[++h]] < d[i[++h]];
                            break;
                        case 30:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 31:
                            d[i[++h]] = ~d[i[++h]];
                            break;
                        case 32:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = d[i[++h]].apply(p, c);
                            break;
                        case 33:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 34:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 35:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 36:
                            I.pop();
                            break;
                        case 37:
                            d[i[++h]] = d[i[++h]] + d[i[++h]];
                            break;
                        case 38:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 39:
                            c = d[i[++h]],
                                (d[i[++h]] = !!c.length) ? d[i[++h]] = c.shift() : ++h;
                            break;
                        case 40:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = a(h + i[++h], c, A, s, g);
                            try {
                                Object.defineProperty(d[i[h - 1]], "length", {
                                    value: i[++h],
                                    configurable: !0,
                                    writable: !1,
                                    enumerable: !1
                                })
                            } catch (e) {
                            }
                            break;
                        case 41:
                            d[i[++h]] = d[i[++h]] === i[++h];
                            break;
                        case 42:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]]);
                            break;
                        case 43:
                            d[i[++h]] = p;
                            break;
                        case 44:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 45:
                            I.push(h + i[++h]);
                            break;
                        case 46:
                            d[i[++h]] = -d[i[++h]];
                            break;
                        case 47:
                            d[i[++h]] = "";
                            break;
                        case 48:
                            for (B in c = [],
                                d[i[++h]])
                                c.push(B);
                            d[i[++h]] = c;
                            break;
                        case 49:
                            d[i[++h]] = d[i[++h]] ^ d[i[++h]];
                            break;
                        case 50:
                            d[i[++h]] = delete d[i[++h]][d[i[++h]]];
                            break;
                        case 51:
                            d[i[++h]] = d[i[++h]] * d[i[++h]];
                            break;
                        case 52:
                            d[i[++h]] = d[i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 53:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]]);
                            break;
                        case 54:
                            return d[i[++h]];
                        case 55:
                            d[i[++h]] = d[i[++h]] < i[++h];
                            break;
                        case 56:
                            d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 57:
                            d[i[++h]] = d[i[++h]] & d[i[++h]];
                            break;
                        case 58:
                            d[i[++h]] = d[i[++h]] - d[i[++h]];
                            break;
                        case 59:
                            d[i[++h]] = Array(i[++h]);
                            break;
                        case 60:
                            d[i[++h]] = i[++h];
                            break;
                        case 61:
                            d[i[++h]] = !d[i[++h]];
                            break;
                        case 62:
                            d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 63:
                            d[i[++h]] = i[++h],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 64:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = "";
                            break;
                        case 65:
                            d[i[++h]] = d[i[++h]],
                                d[i[++h]][d[i[++h]]] = d[i[++h]];
                            break;
                        case 66:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 67:
                            d[i[++h]] = d[i[++h]] - 0;
                            break;
                        case 68:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 69:
                            d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 70:
                            d[i[++h]] = Array(i[++h]),
                                d[i[++h]] = Array(i[++h]);
                            break;
                        case 71:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                h += d[i[++h]] ? i[++h] : i[(++h,
                                    ++h)];
                            break;
                        case 72:
                            d[i[++h]] = new d[i[++h]](d[i[++h]]);
                            break;
                        case 73:
                            d[i[++h]] = new d[i[++h]](d[i[++h]], d[i[++h]]);
                            break;
                        case 74:
                            d[i[++h]] = d[i[++h]] | d[i[++h]];
                            break;
                        case 75:
                            d[i[++h]] = n(d[i[++h]], d[i[++h]]);
                            break;
                        case 76:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]]);
                            break;
                        case 77:
                            d[i[++h]] = ++d[i[++h]];
                            break;
                        case 78:
                            d[i[++h]] = {};
                            break;
                        case 79:
                            d[i[++h]] = d[i[++h]] > d[i[++h]];
                            break;
                        case 80:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 81:
                            d[i[++h]] = i[++h],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 82:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 83:
                            d[i[++h]] = +d[i[++h]];
                            break;
                        case 84:
                            d[i[++h]] = u;
                            break;
                        case 85:
                            d[i[++h]] = r(d[i[++h]])
                    }
            } catch (e) {
                if (I.length > 0 && (o = []),
                    u = e,
                    o.push(h),
                0 === I.length)
                    throw g ? g(e, d, o) : e;
                h = I.pop(),
                    o.pop()
            }
    };
}

function getJ4$() {
    let A = window, e = 62080, s = [void 0, null, 0.5], t = [];
    let i = require('./import_func_controller/J4$_i.js');
    let o = [];
    return function l() {
        for (var u, c, B, E, d = [A, s, t, this, arguments, l, i, 0], p = void 0, h = e, I = []; ;)
            try {
                for (; ;)
                    switch (i[++h] ^ d[7]) {
                        case 0:
                            d[i[++h]] = d[i[++h]] % d[i[++h]];
                            break;
                        case 1:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 2:
                            for (c = [,],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            B = i[++h],
                                E = d[i[++h]],
                                d[B] = new (E.bind.apply(E, c));
                            break;
                        case 3:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] = i[++h],
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 4:
                        case 11:
                            d[i[++h]] = d[i[++h]] == d[i[++h]];
                            break;
                        case 5:
                            d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 6:
                            d[i[++h]] = d[i[++h]] / d[i[++h]];
                            break;
                        case 7:
                            d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 8:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]]);
                            break;
                        case 9:
                            d[i[++h]][d[i[++h]]] = d[i[++h]];
                            break;
                        case 10:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 12:
                            d[i[++h]] = new d[i[++h]];
                            break;
                        case 13:
                            d[i[++h]] = d[i[++h]] - i[++h];
                            break;
                        case 14:
                            d[i[++h]] = d[i[++h]] > i[++h];
                            break;
                        case 15:
                            d[i[++h]] = d[i[++h]].call(p),
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 16:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 17:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = "";
                            break;
                        case 18:
                            d[i[++h]] = d[i[++h]];
                            break;
                        case 19:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 20:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 21:
                            d[i[++h]] = d[i[++h]] >= i[++h];
                            break;
                        case 22:
                            d[i[++h]] = null;
                            break;
                        case 23:
                            d[i[++h]] = d[i[++h]].call(p);
                            break;
                        case 24:
                            d[i[++h]] = d[i[++h]] + i[++h];
                            break;
                        case 25:
                            for (d[i[++h]] = d[i[++h]][i[++h]],
                                     c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = a(h + i[++h], c, A, s, g);
                            try {
                                Object.defineProperty(d[i[h - 1]], "length", {
                                    value: i[++h],
                                    configurable: !0,
                                    writable: !1,
                                    enumerable: !1
                                })
                            } catch (e) {
                            }
                            d[i[++h]] = d[i[++h]];
                            break;
                        case 26:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = d[i[++h]].apply(d[i[++h]], c);
                            break;
                        case 27:
                            throw d[i[++h]];
                        case 28:
                            h += d[i[++h]] ? i[++h] : i[(++h,
                                ++h)];
                            break;
                        case 29:
                            d[i[++h]] = d[i[++h]] < d[i[++h]];
                            break;
                        case 30:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 31:
                            d[i[++h]] = ~d[i[++h]];
                            break;
                        case 32:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = d[i[++h]].apply(p, c);
                            break;
                        case 33:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 34:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 35:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 36:
                            I.pop();
                            break;
                        case 37:
                            d[i[++h]] = d[i[++h]] + d[i[++h]];
                            break;
                        case 38:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 39:
                            c = d[i[++h]],
                                (d[i[++h]] = !!c.length) ? d[i[++h]] = c.shift() : ++h;
                            break;
                        case 40:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = a(h + i[++h], c, A, s, g);
                            try {
                                Object.defineProperty(d[i[h - 1]], "length", {
                                    value: i[++h],
                                    configurable: !0,
                                    writable: !1,
                                    enumerable: !1
                                })
                            } catch (e) {
                            }
                            break;
                        case 41:
                            d[i[++h]] = d[i[++h]] === i[++h];
                            break;
                        case 42:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]]);
                            break;
                        case 43:
                            d[i[++h]] = p;
                            break;
                        case 44:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 45:
                            I.push(h + i[++h]);
                            break;
                        case 46:
                            d[i[++h]] = -d[i[++h]];
                            break;
                        case 47:
                            d[i[++h]] = "";
                            break;
                        case 48:
                            for (B in c = [],
                                d[i[++h]])
                                c.push(B);
                            d[i[++h]] = c;
                            break;
                        case 49:
                            d[i[++h]] = d[i[++h]] ^ d[i[++h]];
                            break;
                        case 50:
                            d[i[++h]] = delete d[i[++h]][d[i[++h]]];
                            break;
                        case 51:
                            d[i[++h]] = d[i[++h]] * d[i[++h]];
                            break;
                        case 52:
                            d[i[++h]] = d[i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 53:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]]);
                            break;
                        case 54:
                            return d[i[++h]];
                        case 55:
                            d[i[++h]] = d[i[++h]] < i[++h];
                            break;
                        case 56:
                            d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 57:
                            d[i[++h]] = d[i[++h]] & d[i[++h]];
                            break;
                        case 58:
                            d[i[++h]] = d[i[++h]] - d[i[++h]];
                            break;
                        case 59:
                            d[i[++h]] = Array(i[++h]);
                            break;
                        case 60:
                            d[i[++h]] = i[++h];
                            break;
                        case 61:
                            d[i[++h]] = !d[i[++h]];
                            break;
                        case 62:
                            d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 63:
                            d[i[++h]] = i[++h],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 64:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = "";
                            break;
                        case 65:
                            d[i[++h]] = d[i[++h]],
                                d[i[++h]][d[i[++h]]] = d[i[++h]];
                            break;
                        case 66:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 67:
                            d[i[++h]] = d[i[++h]] - 0;
                            break;
                        case 68:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 69:
                            d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 70:
                            d[i[++h]] = Array(i[++h]),
                                d[i[++h]] = Array(i[++h]);
                            break;
                        case 71:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                h += d[i[++h]] ? i[++h] : i[(++h,
                                    ++h)];
                            break;
                        case 72:
                            d[i[++h]] = new d[i[++h]](d[i[++h]]);
                            break;
                        case 73:
                            d[i[++h]] = new d[i[++h]](d[i[++h]], d[i[++h]]);
                            break;
                        case 74:
                            d[i[++h]] = d[i[++h]] | d[i[++h]];
                            break;
                        case 75:
                            d[i[++h]] = n(d[i[++h]], d[i[++h]]);
                            break;
                        case 76:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]]);
                            break;
                        case 77:
                            d[i[++h]] = ++d[i[++h]];
                            break;
                        case 78:
                            d[i[++h]] = {};
                            break;
                        case 79:
                            d[i[++h]] = d[i[++h]] > d[i[++h]];
                            break;
                        case 80:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 81:
                            d[i[++h]] = i[++h],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 82:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 83:
                            d[i[++h]] = +d[i[++h]];
                            break;
                        case 84:
                            d[i[++h]] = u;
                            break;
                        case 85:
                            d[i[++h]] = r(d[i[++h]])
                    }
            } catch (e) {
                if (I.length > 0 && (o = []),
                    u = e,
                    o.push(h),
                0 === I.length)
                    throw g ? g(e, d, o) : e;
                h = I.pop(),
                    o.pop()
            }
    };
}

function getrsw() {
    let A = window, e = 22097, s = [void 0, null, 0.5], t = [];
    let i = require('./import_func_controller/rsw_i.js');
    let o = [];
    return function l() {
        for (var u, c, B, E, d = [A, s, t, this, arguments, l, i, 0], p = void 0, h = e, I = []; ;)
            try {
                for (; ;)
                    switch (i[++h] ^ d[7]) {
                        case 0:
                            d[i[++h]] = d[i[++h]] % d[i[++h]];
                            break;
                        case 1:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 2:
                            for (c = [,],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            B = i[++h],
                                E = d[i[++h]],
                                d[B] = new (E.bind.apply(E, c));
                            break;
                        case 3:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] = i[++h],
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 4:
                        case 11:
                            d[i[++h]] = d[i[++h]] == d[i[++h]];
                            break;
                        case 5:
                            d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 6:
                            d[i[++h]] = d[i[++h]] / d[i[++h]];
                            break;
                        case 7:
                            d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 8:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]]);
                            break;
                        case 9:
                            d[i[++h]][d[i[++h]]] = d[i[++h]];
                            break;
                        case 10:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 12:
                            d[i[++h]] = new d[i[++h]];
                            break;
                        case 13:
                            d[i[++h]] = d[i[++h]] - i[++h];
                            break;
                        case 14:
                            d[i[++h]] = d[i[++h]] > i[++h];
                            break;
                        case 15:
                            d[i[++h]] = d[i[++h]].call(p),
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 16:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 17:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = "";
                            break;
                        case 18:
                            d[i[++h]] = d[i[++h]];
                            break;
                        case 19:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 20:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 21:
                            d[i[++h]] = d[i[++h]] >= i[++h];
                            break;
                        case 22:
                            d[i[++h]] = null;
                            break;
                        case 23:
                            d[i[++h]] = d[i[++h]].call(p);
                            break;
                        case 24:
                            d[i[++h]] = d[i[++h]] + i[++h];
                            break;
                        case 25:
                            for (d[i[++h]] = d[i[++h]][i[++h]],
                                     c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = a(h + i[++h], c, A, s, g);
                            try {
                                Object.defineProperty(d[i[h - 1]], "length", {
                                    value: i[++h],
                                    configurable: !0,
                                    writable: !1,
                                    enumerable: !1
                                })
                            } catch (e) {
                            }
                            d[i[++h]] = d[i[++h]];
                            break;
                        case 26:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = d[i[++h]].apply(d[i[++h]], c);
                            break;
                        case 27:
                            throw d[i[++h]];
                        case 28:
                            h += d[i[++h]] ? i[++h] : i[(++h,
                                ++h)];
                            break;
                        case 29:
                            d[i[++h]] = d[i[++h]] < d[i[++h]];
                            break;
                        case 30:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 31:
                            d[i[++h]] = ~d[i[++h]];
                            break;
                        case 32:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = d[i[++h]].apply(p, c);
                            break;
                        case 33:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 34:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 35:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 36:
                            I.pop();
                            break;
                        case 37:
                            d[i[++h]] = d[i[++h]] + d[i[++h]];
                            break;
                        case 38:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 39:
                            c = d[i[++h]],
                                (d[i[++h]] = !!c.length) ? d[i[++h]] = c.shift() : ++h;
                            break;
                        case 40:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = a(h + i[++h], c, A, s, g);
                            try {
                                Object.defineProperty(d[i[h - 1]], "length", {
                                    value: i[++h],
                                    configurable: !0,
                                    writable: !1,
                                    enumerable: !1
                                })
                            } catch (e) {
                            }
                            break;
                        case 41:
                            d[i[++h]] = d[i[++h]] === i[++h];
                            break;
                        case 42:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]]);
                            break;
                        case 43:
                            d[i[++h]] = p;
                            break;
                        case 44:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 45:
                            I.push(h + i[++h]);
                            break;
                        case 46:
                            d[i[++h]] = -d[i[++h]];
                            break;
                        case 47:
                            d[i[++h]] = "";
                            break;
                        case 48:
                            for (B in c = [],
                                d[i[++h]])
                                c.push(B);
                            d[i[++h]] = c;
                            break;
                        case 49:
                            d[i[++h]] = d[i[++h]] ^ d[i[++h]];
                            break;
                        case 50:
                            d[i[++h]] = delete d[i[++h]][d[i[++h]]];
                            break;
                        case 51:
                            d[i[++h]] = d[i[++h]] * d[i[++h]];
                            break;
                        case 52:
                            d[i[++h]] = d[i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 53:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]]);
                            break;
                        case 54:
                            return d[i[++h]];
                        case 55:
                            d[i[++h]] = d[i[++h]] < i[++h];
                            break;
                        case 56:
                            d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 57:
                            d[i[++h]] = d[i[++h]] & d[i[++h]];
                            break;
                        case 58:
                            d[i[++h]] = d[i[++h]] - d[i[++h]];
                            break;
                        case 59:
                            d[i[++h]] = Array(i[++h]);
                            break;
                        case 60:
                            d[i[++h]] = i[++h];
                            break;
                        case 61:
                            d[i[++h]] = !d[i[++h]];
                            break;
                        case 62:
                            d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 63:
                            d[i[++h]] = i[++h],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 64:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = "";
                            break;
                        case 65:
                            d[i[++h]] = d[i[++h]],
                                d[i[++h]][d[i[++h]]] = d[i[++h]];
                            break;
                        case 66:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 67:
                            d[i[++h]] = d[i[++h]] - 0;
                            break;
                        case 68:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 69:
                            d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 70:
                            d[i[++h]] = Array(i[++h]),
                                d[i[++h]] = Array(i[++h]);
                            break;
                        case 71:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                h += d[i[++h]] ? i[++h] : i[(++h,
                                    ++h)];
                            break;
                        case 72:
                            d[i[++h]] = new d[i[++h]](d[i[++h]]);
                            break;
                        case 73:
                            d[i[++h]] = new d[i[++h]](d[i[++h]], d[i[++h]]);
                            break;
                        case 74:
                            d[i[++h]] = d[i[++h]] | d[i[++h]];
                            break;
                        case 75:
                            d[i[++h]] = n(d[i[++h]], d[i[++h]]);
                            break;
                        case 76:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]]);
                            break;
                        case 77:
                            d[i[++h]] = ++d[i[++h]];
                            break;
                        case 78:
                            d[i[++h]] = {};
                            break;
                        case 79:
                            d[i[++h]] = d[i[++h]] > d[i[++h]];
                            break;
                        case 80:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 81:
                            d[i[++h]] = i[++h],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 82:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 83:
                            d[i[++h]] = +d[i[++h]];
                            break;
                        case 84:
                            d[i[++h]] = u;
                            break;
                        case 85:
                            d[i[++h]] = r(d[i[++h]])
                    }
            } catch (e) {
                if (I.length > 0 && (o = []),
                    u = e,
                    o.push(h),
                0 === I.length)
                    throw g ? g(e, d, o) : e;
                h = I.pop(),
                    o.pop()
            }
    };
}

function gettCr() {
    let A = window, e = 12507, s = [void 0, null, 0.5], t = [global_v];
    let i = require('./import_func_controller/tCr_i.js');
    let o = [];
    return function l() {
        for (var u, c, B, E, d = [A, s, t, this, arguments, l, i, 0], p = void 0, h = e, I = []; ;)
            try {
                for (; ;)
                    switch (i[++h] ^ d[7]) {
                        case 0:
                            d[i[++h]] = d[i[++h]] % d[i[++h]];
                            break;
                        case 1:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 2:
                            for (c = [,],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            B = i[++h],
                                E = d[i[++h]],
                                d[B] = new (E.bind.apply(E, c));
                            break;
                        case 3:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] = i[++h],
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 4:
                        case 11:
                            d[i[++h]] = d[i[++h]] == d[i[++h]];
                            break;
                        case 5:
                            d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 6:
                            d[i[++h]] = d[i[++h]] / d[i[++h]];
                            break;
                        case 7:
                            d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 8:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]]);
                            break;
                        case 9:
                            d[i[++h]][d[i[++h]]] = d[i[++h]];
                            break;
                        case 10:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 12:
                            d[i[++h]] = new d[i[++h]];
                            break;
                        case 13:
                            d[i[++h]] = d[i[++h]] - i[++h];
                            break;
                        case 14:
                            d[i[++h]] = d[i[++h]] > i[++h];
                            break;
                        case 15:
                            d[i[++h]] = d[i[++h]].call(p),
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 16:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 17:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = "";
                            break;
                        case 18:
                            d[i[++h]] = d[i[++h]];
                            break;
                        case 19:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 20:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 21:
                            d[i[++h]] = d[i[++h]] >= i[++h];
                            break;
                        case 22:
                            d[i[++h]] = null;
                            break;
                        case 23:
                            d[i[++h]] = d[i[++h]].call(p);
                            break;
                        case 24:
                            d[i[++h]] = d[i[++h]] + i[++h];
                            break;
                        case 25:
                            for (d[i[++h]] = d[i[++h]][i[++h]],
                                     c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = a(h + i[++h], c, A, s, g);
                            try {
                                Object.defineProperty(d[i[h - 1]], "length", {
                                    value: i[++h],
                                    configurable: !0,
                                    writable: !1,
                                    enumerable: !1
                                })
                            } catch (e) {
                            }
                            d[i[++h]] = d[i[++h]];
                            break;
                        case 26:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = d[i[++h]].apply(d[i[++h]], c);
                            break;
                        case 27:
                            throw d[i[++h]];
                        case 28:
                            h += d[i[++h]] ? i[++h] : i[(++h,
                                ++h)];
                            break;
                        case 29:
                            d[i[++h]] = d[i[++h]] < d[i[++h]];
                            break;
                        case 30:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 31:
                            d[i[++h]] = ~d[i[++h]];
                            break;
                        case 32:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = d[i[++h]].apply(p, c);
                            break;
                        case 33:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 34:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 35:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 36:
                            I.pop();
                            break;
                        case 37:
                            d[i[++h]] = d[i[++h]] + d[i[++h]];
                            break;
                        case 38:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 39:
                            c = d[i[++h]],
                                (d[i[++h]] = !!c.length) ? d[i[++h]] = c.shift() : ++h;
                            break;
                        case 40:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = a(h + i[++h], c, A, s, g);
                            try {
                                Object.defineProperty(d[i[h - 1]], "length", {
                                    value: i[++h],
                                    configurable: !0,
                                    writable: !1,
                                    enumerable: !1
                                })
                            } catch (e) {
                            }
                            break;
                        case 41:
                            d[i[++h]] = d[i[++h]] === i[++h];
                            break;
                        case 42:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]]);
                            break;
                        case 43:
                            d[i[++h]] = p;
                            break;
                        case 44:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 45:
                            I.push(h + i[++h]);
                            break;
                        case 46:
                            d[i[++h]] = -d[i[++h]];
                            break;
                        case 47:
                            d[i[++h]] = "";
                            break;
                        case 48:
                            for (B in c = [],
                                d[i[++h]])
                                c.push(B);
                            d[i[++h]] = c;
                            break;
                        case 49:
                            d[i[++h]] = d[i[++h]] ^ d[i[++h]];
                            break;
                        case 50:
                            d[i[++h]] = delete d[i[++h]][d[i[++h]]];
                            break;
                        case 51:
                            d[i[++h]] = d[i[++h]] * d[i[++h]];
                            break;
                        case 52:
                            d[i[++h]] = d[i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 53:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]]);
                            break;
                        case 54:
                            return d[i[++h]];
                        case 55:
                            d[i[++h]] = d[i[++h]] < i[++h];
                            break;
                        case 56:
                            d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 57:
                            d[i[++h]] = d[i[++h]] & d[i[++h]];
                            break;
                        case 58:
                            d[i[++h]] = d[i[++h]] - d[i[++h]];
                            break;
                        case 59:
                            d[i[++h]] = Array(i[++h]);
                            break;
                        case 60:
                            d[i[++h]] = i[++h];
                            break;
                        case 61:
                            d[i[++h]] = !d[i[++h]];
                            break;
                        case 62:
                            d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 63:
                            d[i[++h]] = i[++h],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 64:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = "";
                            break;
                        case 65:
                            d[i[++h]] = d[i[++h]],
                                d[i[++h]][d[i[++h]]] = d[i[++h]];
                            break;
                        case 66:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 67:
                            d[i[++h]] = d[i[++h]] - 0;
                            break;
                        case 68:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 69:
                            d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 70:
                            d[i[++h]] = Array(i[++h]),
                                d[i[++h]] = Array(i[++h]);
                            break;
                        case 71:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                h += d[i[++h]] ? i[++h] : i[(++h,
                                    ++h)];
                            break;
                        case 72:
                            d[i[++h]] = new d[i[++h]](d[i[++h]]);
                            break;
                        case 73:
                            d[i[++h]] = new d[i[++h]](d[i[++h]], d[i[++h]]);
                            break;
                        case 74:
                            d[i[++h]] = d[i[++h]] | d[i[++h]];
                            break;
                        case 75:
                            d[i[++h]] = n(d[i[++h]], d[i[++h]]);
                            break;
                        case 76:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]]);
                            break;
                        case 77:
                            d[i[++h]] = ++d[i[++h]];
                            break;
                        case 78:
                            d[i[++h]] = {};
                            break;
                        case 79:
                            d[i[++h]] = d[i[++h]] > d[i[++h]];
                            break;
                        case 80:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 81:
                            d[i[++h]] = i[++h],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 82:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 83:
                            d[i[++h]] = +d[i[++h]];
                            break;
                        case 84:
                            d[i[++h]] = u;
                            break;
                        case 85:
                            d[i[++h]] = r(d[i[++h]])
                    }
            } catch (e) {
                if (I.length > 0 && (o = []),
                    u = e,
                    o.push(h),
                0 === I.length)
                    throw g ? g(e, d, o) : e;
                h = I.pop(),
                    o.pop()
            }
    };
}

function get__EM_CXA_THROW__() {
    let A = global, e = 42335, s = [void 0, null, 0.5], t = [];
    let i = require('./import_func_controller/__EM_CXA_THROW__i.js');
    let o = [];
    return function l() {
        for (var u, c, B, E, d = [A, s, t, this, arguments, l, i, 0], p = void 0, h = e, I = []; ;)
            try {
                for (; ;)
                    switch (i[++h] ^ d[7]) {
                        case 0:
                            d[i[++h]] = d[i[++h]] % d[i[++h]];
                            break;
                        case 1:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 2:
                            for (c = [,],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            B = i[++h],
                                E = d[i[++h]],
                                d[B] = new (E.bind.apply(E, c));
                            break;
                        case 3:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] = i[++h],
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 4:
                        case 11:
                            d[i[++h]] = d[i[++h]] == d[i[++h]];
                            break;
                        case 5:
                            d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 6:
                            d[i[++h]] = d[i[++h]] / d[i[++h]];
                            break;
                        case 7:
                            d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 8:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]]);
                            break;
                        case 9:
                            d[i[++h]][d[i[++h]]] = d[i[++h]];
                            break;
                        case 10:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 12:
                            d[i[++h]] = new d[i[++h]];
                            break;
                        case 13:
                            d[i[++h]] = d[i[++h]] - i[++h];
                            break;
                        case 14:
                            d[i[++h]] = d[i[++h]] > i[++h];
                            break;
                        case 15:
                            d[i[++h]] = d[i[++h]].call(p),
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 16:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 17:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = "";
                            break;
                        case 18:
                            d[i[++h]] = d[i[++h]];
                            break;
                        case 19:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 20:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 21:
                            d[i[++h]] = d[i[++h]] >= i[++h];
                            break;
                        case 22:
                            d[i[++h]] = null;
                            break;
                        case 23:
                            d[i[++h]] = d[i[++h]].call(p);
                            break;
                        case 24:
                            d[i[++h]] = d[i[++h]] + i[++h];
                            break;
                        case 25:
                            for (d[i[++h]] = d[i[++h]][i[++h]],
                                     c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = a(h + i[++h], c, A, s, g);
                            try {
                                Object.defineProperty(d[i[h - 1]], "length", {
                                    value: i[++h],
                                    configurable: !0,
                                    writable: !1,
                                    enumerable: !1
                                })
                            } catch (e) {
                            }
                            d[i[++h]] = d[i[++h]];
                            break;
                        case 26:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = d[i[++h]].apply(d[i[++h]], c);
                            break;
                        case 27:
                            throw d[i[++h]];
                        case 28:
                            h += d[i[++h]] ? i[++h] : i[(++h,
                                ++h)];
                            break;
                        case 29:
                            d[i[++h]] = d[i[++h]] < d[i[++h]];
                            break;
                        case 30:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 31:
                            d[i[++h]] = ~d[i[++h]];
                            break;
                        case 32:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = d[i[++h]].apply(p, c);
                            break;
                        case 33:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 34:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]][i[++h]] = d[i[++h]],
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 35:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 36:
                            I.pop();
                            break;
                        case 37:
                            d[i[++h]] = d[i[++h]] + d[i[++h]];
                            break;
                        case 38:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 39:
                            c = d[i[++h]],
                                (d[i[++h]] = !!c.length) ? d[i[++h]] = c.shift() : ++h;
                            break;
                        case 40:
                            for (c = [],
                                     B = i[++h]; B > 0; B--)
                                c.push(d[i[++h]]);
                            d[i[++h]] = a(h + i[++h], c, A, s, g);
                            try {
                                Object.defineProperty(d[i[h - 1]], "length", {
                                    value: i[++h],
                                    configurable: !0,
                                    writable: !1,
                                    enumerable: !1
                                })
                            } catch (e) {
                            }
                            break;
                        case 41:
                            d[i[++h]] = d[i[++h]] === i[++h];
                            break;
                        case 42:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]]);
                            break;
                        case 43:
                            d[i[++h]] = p;
                            break;
                        case 44:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 45:
                            I.push(h + i[++h]);
                            break;
                        case 46:
                            d[i[++h]] = -d[i[++h]];
                            break;
                        case 47:
                            d[i[++h]] = "";
                            break;
                        case 48:
                            for (B in c = [],
                                d[i[++h]])
                                c.push(B);
                            d[i[++h]] = c;
                            break;
                        case 49:
                            d[i[++h]] = d[i[++h]] ^ d[i[++h]];
                            break;
                        case 50:
                            d[i[++h]] = delete d[i[++h]][d[i[++h]]];
                            break;
                        case 51:
                            d[i[++h]] = d[i[++h]] * d[i[++h]];
                            break;
                        case 52:
                            d[i[++h]] = d[i[++h]],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 53:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]]);
                            break;
                        case 54:
                            return d[i[++h]];
                        case 55:
                            d[i[++h]] = d[i[++h]] < i[++h];
                            break;
                        case 56:
                            d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 57:
                            d[i[++h]] = d[i[++h]] & d[i[++h]];
                            break;
                        case 58:
                            d[i[++h]] = d[i[++h]] - d[i[++h]];
                            break;
                        case 59:
                            d[i[++h]] = Array(i[++h]);
                            break;
                        case 60:
                            d[i[++h]] = i[++h];
                            break;
                        case 61:
                            d[i[++h]] = !d[i[++h]];
                            break;
                        case 62:
                            d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 63:
                            d[i[++h]] = i[++h],
                                d[i[++h]][i[++h]] = d[i[++h]];
                            break;
                        case 64:
                            d[i[++h]] = d[i[++h]][i[++h]],
                                d[i[++h]] = "";
                            break;
                        case 65:
                            d[i[++h]] = d[i[++h]],
                                d[i[++h]][d[i[++h]]] = d[i[++h]];
                            break;
                        case 66:
                            d[i[++h]] += String.fromCharCode(i[++h]),
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                            break;
                        case 67:
                            d[i[++h]] = d[i[++h]] - 0;
                            break;
                        case 68:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 69:
                            d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 70:
                            d[i[++h]] = Array(i[++h]),
                                d[i[++h]] = Array(i[++h]);
                            break;
                        case 71:
                            d[i[++h]][i[++h]] = d[i[++h]],
                                h += d[i[++h]] ? i[++h] : i[(++h,
                                    ++h)];
                            break;
                        case 72:
                            d[i[++h]] = new d[i[++h]](d[i[++h]]);
                            break;
                        case 73:
                            d[i[++h]] = new d[i[++h]](d[i[++h]], d[i[++h]]);
                            break;
                        case 74:
                            d[i[++h]] = d[i[++h]] | d[i[++h]];
                            break;
                        case 75:
                            d[i[++h]] = n(d[i[++h]], d[i[++h]]);
                            break;
                        case 76:
                            d[i[++h]] = d[i[++h]].call(p, d[i[++h]]);
                            break;
                        case 77:
                            d[i[++h]] = ++d[i[++h]];
                            break;
                        case 78:
                            d[i[++h]] = {};
                            break;
                        case 79:
                            d[i[++h]] = d[i[++h]] > d[i[++h]];
                            break;
                        case 80:
                            d[i[++h]] = d[i[++h]][d[i[++h]]],
                                d[i[++h]] = "",
                                d[i[++h]] += String.fromCharCode(i[++h]);
                            break;
                        case 81:
                            d[i[++h]] = i[++h],
                                d[i[++h]] = d[i[++h]][i[++h]];
                            break;
                        case 82:
                            d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]], d[i[++h]]);
                            break;
                        case 83:
                            d[i[++h]] = +d[i[++h]];
                            break;
                        case 84:
                            d[i[++h]] = u;
                            break;
                        case 85:
                            d[i[++h]] = r(d[i[++h]])
                    }
            } catch (e) {
                if (I.length > 0 && (o = []),
                    u = e,
                    o.push(h),
                0 === I.length)
                    throw g ? g(e, d, o) : e;
                h = I.pop(),
                    o.pop()
            }
    };
}

let obj = {
    'emG': {
        '$2o': get$2o(),
        'J4$': getJ4$(),
        'rsw': getrsw(),
        'tCr': gettCr(),
        '__EM_CXA_THROW__': get__EM_CXA_THROW__()
    }
}

console.log(obj);
// WebAssembly.instantiate(buffer, obj).then(getResult);


function fromUint8Array(e) {
    for (var t = new Uint8Array(e), A = t.byteLength, i = "", o = 0; o < A;) {
        var n = t[o++];
        if (128 & n)
            if (192 == (224 & n))
                i += String.fromCharCode((31 & n) << 6 | 63 & t[o++]);
            else if (224 == (240 & n))
                i += String.fromCharCode((15 & n) << 12 | (63 & t[o++]) << 6 | 63 & t[o++]);
            else {
                var r = (7 & n) << 18 | (63 & t[o++]) << 12 | (63 & t[o++]) << 6 | 63 & t[o++];
                i += String.fromCharCode(55296 | r - 65536 >> 10, 56320 | r - 65536 & 1023)
            }
        else
            i += String.fromCharCode(n)
    }
    return i
}

function toUint8Array(e) {
    for (var t = [], A = 0; A < e.length; A += 1) {
        var i = e.charCodeAt(A);
        i < 128 ? t.push(i) : i < 2048 ? t.push(192 | i >> 6, 128 | 63 & i) : i < 55296 || i >= 57344 ? t.push(224 | i >> 12, 128 | i >> 6 & 63, 128 | 63 & i) : (A += 1,
            i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(A)),
            t.push(240 | i >> 18, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i))
    }
    return new Uint8Array(t)
}

function getResult(result) {

    // 导出的函数集合
    let exports_obj = result.exports;
    console.log(exports_obj);

    // wasm导出的大数组
    let big_array = exports_obj.U9k;
    let Uint8_big_array = new Uint8Array(big_array.buffer);

    // 视频信息
    let platform = '10201';
    let tm = (Math.floor(Date.now() / 1000)).toString();
    // tm = '1735096163';
    let params = [
        "1.37.2",
        "v41002y7xzo",
        "",
        "6ff5b6a91b9aa8f1",
        "https://v.qq.com/x/cover/mzc002000y0ehh8/v41002y|mozilla/5.0 (windows nt 10.0; win64; x64) applew||Mozilla|Netscape|Win32",
        '{"csal":["9x7k6uc7xw","m5h0zchrh5"]}',
        '{"ea":3,"spa":1,"prl":1}',
        "d70ec5886c7ed7550a748c8d0200000d818c0d"
    ];

    // 将视频信息转换为Uint8Array
    let params_uint8 = params.map(item => toUint8Array(item));
    console.log(params_uint8);

    // 每一个Uint8Array数组后面补8个0
    let params_uint8_add_zero = [];
    for (let i = 0; i < params_uint8.length; i++) {
        let add_zero_array = new Uint8Array(params_uint8[i].length + 8);
        add_zero_array.set(params_uint8[i]);
        params_uint8_add_zero.push(add_zero_array);
    }
    console.log(params_uint8_add_zero);

    // 遍历 params_uint8_add_zero 将其长度作为参数传入 0Yi 函数中，
    // 返回将 Uint8Array格式并且添加了8个0的参数数组 添加进大数组的索引
    let index_array = [];   // 用于观察索引的数组
    for (let i = 0; i < params_uint8_add_zero.length; i++) {
        let index = exports_obj['0Yi'](params_uint8_add_zero[i].length);
        index_array.push(index);
        Uint8_big_array.set(params_uint8_add_zero[i], index);
    }
    global_v.push(Uint8_big_array);
    console.log(index_array);
    platform = +platform;
    index_array.unshift(platform);
    tm = +tm;
    index_array.push(tm);
    console.log(index_array);
    let result_7gd = exports_obj['7gd'](...index_array);
    console.log(result_7gd);

    function get_after_7gd_func() {
        let A = global, e = 60833, s = [void 0, null, 0.5];
        let t = [
            [exports_obj],
            [Uint8_big_array],
            [{
                'fromUint8Array': fromUint8Array,
                'toUint8Array': toUint8Array,
            }]
        ];
        let i = require('./import_func_controller/after_7gd_i.js');
        let o = [];
        return function l() {
            for (var u, c, B, E, d = [A, s, t, this, arguments, l, i, 0], p = void 0, h = e, I = []; ;)
                try {
                    for (; ;)
                        switch (i[++h] ^ d[7]) {
                            case 0:
                                d[i[++h]] = d[i[++h]] % d[i[++h]];
                                break;
                            case 1:
                                d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 2:
                                for (c = [,],
                                         B = i[++h]; B > 0; B--)
                                    c.push(d[i[++h]]);
                                B = i[++h],
                                    E = d[i[++h]],
                                    d[B] = new (E.bind.apply(E, c));
                                break;
                            case 3:
                                d[i[++h]] += String.fromCharCode(i[++h]),
                                    d[i[++h]] = i[++h],
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 4:
                            case 11:
                                d[i[++h]] = d[i[++h]] == d[i[++h]];
                                break;
                            case 5:
                                d[i[++h]] = d[i[++h]][d[i[++h]]];
                                break;
                            case 6:
                                d[i[++h]] = d[i[++h]] / d[i[++h]];
                                break;
                            case 7:
                                d[i[++h]] = "",
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 8:
                                d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]]);
                                break;
                            case 9:
                                d[i[++h]][d[i[++h]]] = d[i[++h]];
                                break;
                            case 10:
                                d[i[++h]][i[++h]] = d[i[++h]],
                                    d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 12:
                                d[i[++h]] = new d[i[++h]];
                                break;
                            case 13:
                                d[i[++h]] = d[i[++h]] - i[++h];
                                break;
                            case 14:
                                d[i[++h]] = d[i[++h]] > i[++h];
                                break;
                            case 15:
                                d[i[++h]] = d[i[++h]].call(p),
                                    d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 16:
                                d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]]);
                                break;
                            case 17:
                                d[i[++h]] = d[i[++h]][d[i[++h]]],
                                    d[i[++h]] = "";
                                break;
                            case 18:
                                d[i[++h]] = d[i[++h]];
                                break;
                            case 19:
                                d[i[++h]] = d[i[++h]].call(p, d[i[++h]], d[i[++h]], d[i[++h]]);
                                break;
                            case 20:
                                d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 21:
                                d[i[++h]] = d[i[++h]] >= i[++h];
                                break;
                            case 22:
                                d[i[++h]] = null;
                                break;
                            case 23:
                                d[i[++h]] = d[i[++h]].call(p);
                                break;
                            case 24:
                                d[i[++h]] = d[i[++h]] + i[++h];
                                break;
                            case 25:
                                for (d[i[++h]] = d[i[++h]][i[++h]],
                                         c = [],
                                         B = i[++h]; B > 0; B--)
                                    c.push(d[i[++h]]);
                                d[i[++h]] = a(h + i[++h], c, A, s, g);
                                try {
                                    Object.defineProperty(d[i[h - 1]], "length", {
                                        value: i[++h],
                                        configurable: !0,
                                        writable: !1,
                                        enumerable: !1
                                    })
                                } catch (e) {
                                }
                                d[i[++h]] = d[i[++h]];
                                break;
                            case 26:
                                for (c = [],
                                         B = i[++h]; B > 0; B--)
                                    c.push(d[i[++h]]);
                                d[i[++h]] = d[i[++h]].apply(d[i[++h]], c);
                                break;
                            case 27:
                                throw d[i[++h]];
                            case 28:
                                h += d[i[++h]] ? i[++h] : i[(++h,
                                    ++h)];
                                break;
                            case 29:
                                d[i[++h]] = d[i[++h]] < d[i[++h]];
                                break;
                            case 30:
                                d[i[++h]][i[++h]] = d[i[++h]],
                                    d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 31:
                                d[i[++h]] = ~d[i[++h]];
                                break;
                            case 32:
                                for (c = [],
                                         B = i[++h]; B > 0; B--)
                                    c.push(d[i[++h]]);
                                d[i[++h]] = d[i[++h]].apply(p, c);
                                break;
                            case 33:
                                d[i[++h]][i[++h]] = d[i[++h]],
                                    d[i[++h]] = "",
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 34:
                                d[i[++h]] += String.fromCharCode(i[++h]),
                                    d[i[++h]][i[++h]] = d[i[++h]],
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 35:
                                d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]] = d[i[++h]][d[i[++h]]];
                                break;
                            case 36:
                                I.pop();
                                break;
                            case 37:
                                d[i[++h]] = d[i[++h]] + d[i[++h]];
                                break;
                            case 38:
                                d[i[++h]] += String.fromCharCode(i[++h]),
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 39:
                                c = d[i[++h]],
                                    (d[i[++h]] = !!c.length) ? d[i[++h]] = c.shift() : ++h;
                                break;
                            case 40:
                                for (c = [],
                                         B = i[++h]; B > 0; B--)
                                    c.push(d[i[++h]]);
                                d[i[++h]] = a(h + i[++h], c, A, s, g);
                                try {
                                    Object.defineProperty(d[i[h - 1]], "length", {
                                        value: i[++h],
                                        configurable: !0,
                                        writable: !1,
                                        enumerable: !1
                                    })
                                } catch (e) {
                                }
                                break;
                            case 41:
                                d[i[++h]] = d[i[++h]] === i[++h];
                                break;
                            case 42:
                                d[i[++h]] = d[i[++h]].call(d[i[++h]]);
                                break;
                            case 43:
                                d[i[++h]] = p;
                                break;
                            case 44:
                                d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 45:
                                I.push(h + i[++h]);
                                break;
                            case 46:
                                d[i[++h]] = -d[i[++h]];
                                break;
                            case 47:
                                d[i[++h]] = "";
                                break;
                            case 48:
                                for (B in c = [],
                                    d[i[++h]])
                                    c.push(B);
                                d[i[++h]] = c;
                                break;
                            case 49:
                                d[i[++h]] = d[i[++h]] ^ d[i[++h]];
                                break;
                            case 50:
                                d[i[++h]] = delete d[i[++h]][d[i[++h]]];
                                break;
                            case 51:
                                d[i[++h]] = d[i[++h]] * d[i[++h]];
                                break;
                            case 52:
                                d[i[++h]] = d[i[++h]],
                                    d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 53:
                                d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]]);
                                break;
                            case 54:
                                return d[i[++h]];
                            case 55:
                                d[i[++h]] = d[i[++h]] < i[++h];
                                break;
                            case 56:
                                d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 57:
                                d[i[++h]] = d[i[++h]] & d[i[++h]];
                                break;
                            case 58:
                                d[i[++h]] = d[i[++h]] - d[i[++h]];
                                break;
                            case 59:
                                d[i[++h]] = Array(i[++h]);
                                break;
                            case 60:
                                d[i[++h]] = i[++h];
                                break;
                            case 61:
                                d[i[++h]] = !d[i[++h]];
                                break;
                            case 62:
                                d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 63:
                                d[i[++h]] = i[++h],
                                    d[i[++h]][i[++h]] = d[i[++h]];
                                break;
                            case 64:
                                d[i[++h]] = d[i[++h]][i[++h]],
                                    d[i[++h]] = "";
                                break;
                            case 65:
                                d[i[++h]] = d[i[++h]],
                                    d[i[++h]][d[i[++h]]] = d[i[++h]];
                                break;
                            case 66:
                                d[i[++h]] += String.fromCharCode(i[++h]),
                                    d[i[++h]] = d[i[++h]][d[i[++h]]];
                                break;
                            case 67:
                                d[i[++h]] = d[i[++h]] - 0;
                                break;
                            case 68:
                                d[i[++h]] = d[i[++h]][d[i[++h]]],
                                    d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 69:
                                d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 70:
                                d[i[++h]] = Array(i[++h]),
                                    d[i[++h]] = Array(i[++h]);
                                break;
                            case 71:
                                d[i[++h]][i[++h]] = d[i[++h]],
                                    h += d[i[++h]] ? i[++h] : i[(++h,
                                        ++h)];
                                break;
                            case 72:
                                d[i[++h]] = new d[i[++h]](d[i[++h]]);
                                break;
                            case 73:
                                d[i[++h]] = new d[i[++h]](d[i[++h]], d[i[++h]]);
                                break;
                            case 74:
                                d[i[++h]] = d[i[++h]] | d[i[++h]];
                                break;
                            case 75:
                                d[i[++h]] = n(d[i[++h]], d[i[++h]]);
                                break;
                            case 76:
                                d[i[++h]] = d[i[++h]].call(p, d[i[++h]]);
                                break;
                            case 77:
                                d[i[++h]] = ++d[i[++h]];
                                break;
                            case 78:
                                d[i[++h]] = {};
                                break;
                            case 79:
                                d[i[++h]] = d[i[++h]] > d[i[++h]];
                                break;
                            case 80:
                                d[i[++h]] = d[i[++h]][d[i[++h]]],
                                    d[i[++h]] = "",
                                    d[i[++h]] += String.fromCharCode(i[++h]);
                                break;
                            case 81:
                                d[i[++h]] = i[++h],
                                    d[i[++h]] = d[i[++h]][i[++h]];
                                break;
                            case 82:
                                d[i[++h]] = d[i[++h]].call(d[i[++h]], d[i[++h]], d[i[++h]], d[i[++h]]);
                                break;
                            case 83:
                                d[i[++h]] = +d[i[++h]];
                                break;
                            case 84:
                                d[i[++h]] = u;
                                break;
                            case 85:
                                d[i[++h]] = r(d[i[++h]])
                        }
                } catch (e) {
                    if (I.length > 0 && (o = []),
                        u = e,
                        o.push(h),
                    0 === I.length)
                        throw g ? g(e, d, o) : e;
                    h = I.pop(),
                        o.pop()
                }
        };
    }

    let after_7gd = get_after_7gd_func();
    let cKey = after_7gd(result_7gd).split('|')[0];
    console.log(cKey);
    return cKey;
}

let request_param = {
    "charge": 0,
    "otype": "json",
    "defnpayver": 3,
    "spau": 1,
    "spaudio": 0,
    "spwm": 1,
    "sphls": 2,
    "host": "v.qq.com",
    "refer": "https://v.qq.com/x/cover/mzc002000y0ehh8/v41002y7xzo.html",
    "ehost": "https://v.qq.com/x/cover/mzc002000y0ehh8/v41002y7xzo.html",
    "sphttps": 1,
    "encryptVer": "8.5",
    "cKey": "--01996EC2DB28C86C3933CC882ED632421E90406836E4A8418E9B487546747D818C54F159AA5E8BE6482FFDB1CDAD71C4AAA0D953E08AAEFC587537F8EA15278DB1206D9591B0CF247BCCE788A3DC2A9CEA86FF1C85F84D55FE974F7A8986A88F69F95353FC4E32CF268A36805B831869A105430958067BEBCA7E655EFDD201F7FDFCFA5E0B58CFD993994D9C62E17E150D4AA7CC8C5C50A4E9662EFD25C163943096D4D4ECDB2B9AD3E9F59CAE283335326007DFA0E5FE126AEE27C1C9FB9B3F00E67D98EC9A76FD6D473D512090C49A3E1F9ACD07F8EC4BA5BC29B02EC65FBD17D3D873680859D515130A7B37411AFCE6",
    "clip": 4,
    "guid": "6ff5b6a91b9aa8f1",
    "flowid": "f808d66dd19431b49329b2b3d9aaad0b",
    "platform": "10201",
    "sdtfrom": "v1010",
    "appVer": "1.37.2",
    "unid": "",
    "auth_from": "",
    "auth_ext": "",
    "vid": "v41002y7xzo",
    "defn": "",
    "fhdswitch": 0,
    "dtype": 3,
    "spsrt": 2,
    "tm": (Math.floor(Date.now() / 1000)).toString(),
    "lang_code": 0,
    "logintoken": "",
    "spvvpay": 1,
    "spadseg": 3,
    "spvvc": 3,
    "spav1": 15,
    "hevclv": 28,
    "spsfrhdr": 0,
    "spvideo": 0,
    "spm3u8tag": 67,
    "spmasterm3u8": 3,
    "srccontenid": "q4100ob6gms",
}
let cKey = getResult(new WebAssembly.Instance(new WebAssembly.Module(buffer), obj))

// npx browserify D:\GetVedioData\test1.js -o D:\GetVedioData\index_html.js
// 1735096818259

