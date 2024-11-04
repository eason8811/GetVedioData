// cKey, encryptVer
function Js(e) {
    var t = e || 10
        , A = (+new Date).toString();
    return A.length > t ? A.substring(0, t) : "00000000000".concat(A).slice(-1 * t)
}

let Ug, Rg;
for (Ug = [], Rg = 0; Rg < 64; Rg += 1)
    Ug[Rg] = 4294967296 * Math.abs(Math['sin'](Rg + 1)) | 0;
let Sg = {
    stringify: function (e) {
        for (var A = e.words, i = e['sigBytes'], o = [], n = 0; n < i; n += 1) {
            var r = A[n >>> 2] >>> 24 - n % 4 * 8 & 255;
            o['push']((r >>> 4)['toString'](16)),
                o.push((15 & r)['toString'](16))
        }
        return o['join']("")
    },
    parse: function (e) {
        for (var A = e['length'], i = [], o = 0; o < A; o += 2)
            i[o >>> 3] |= parseInt(e['substr'](o, 2), 16) << 24 - o % 8 * 4;
        return new Mg(i, A / 2)
    }
};

let Lg = function (e, t, A, i, o, n, r) {
    var a = e + (t & A | ~t & i) + o + r;
    return (a << n | a >>> 32 - n) + t
}
let Ng = function (e, t, A, i, o, n, r) {
    var a = e + (t & i | A & ~i) + o + r;
    return (a << n | a >>> 32 - n) + t
}
let Gg = function (e, t, A, i, o, n, r) {
    var a = e + (t ^ A ^ i) + o + r;
    return (a << n | a >>> 32 - n) + t
}
let bg = function (e, t, A, i, o, n, r) {
    var a = e + (A ^ (t | ~i)) + o + r;
    return (a << n | a >>> 32 - n) + t
}

function xg(t, A) {
    // var i = Il;
    return new Pg(A)['finalize'](t)
}

Yg = function (e) {
    return function (e) {
        for (var t = e['length'], A = [], i = 0; i < t; i += 1)
            A[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
        return new Mg(A, t)
    }(unescape(encodeURIComponent(e)))
}

function y(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}

class _g {
    constructor() {
    }

    clone() {
        // var t = e;
        var A = new (this['constructor']);
        return Object['assign'](A, this),
            A
    }

    mixIn(t) {
        return Object['assign'](this, t)
    }

    static create() {
        for (var t = [], A = 0; A < arguments['length']; A++)
            t[A] = arguments[A];
        return new (this.bind.apply(this, function (t, A, i) {
            // var o = e;
            if (i || 2 === arguments['length'])
                for (var n, r = 0, a = A['length']; r < a; r++)
                    !n && r in A || (n || (n = Array['prototype']['slice']['call'](A, 0, r)),
                        n[r] = A[r]);
            return t['concat'](n || Array['prototype']['slice']['call'](A))
        }([void 0], t, !1)))
    }

}

class Mg extends _g {
    constructor(t, A) {
        // var i = Il;
        function k(e, t) {
            return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
        }

        void 0 === t && (t = []),
        void 0 === A && (A = 4 * t.length);
        var o = super()
            , n = t;
        if (k(n, ArrayBuffer) && (n = new Uint8Array(n)),
        ArrayBuffer["isView"](n) && (n = new Uint8Array(n["buffer"], n["byteOffset"], n["byteLength"])),
            k(n, Uint8Array)) {
            for (var r = n["byteLength"], a = [], s = 0; s < r; s += 1)
                a[s >>> 2] |= n[s] << 24 - s % 4 * 8;
            o["words"] = a,
                o["sigBytes"] = r
        } else
            o.words = t,
                o.sigBytes = A;
        return o
    }

    toString(e) {
        return void 0 === e && (e = Sg),
            e['stringify'](this)
    }

    concat(e) {
        // var A = t;
        var i = this['words']
            , o = e['words']
            , n = this['sigBytes']
            , r = e['sigBytes'];
        if (this['clamp'](),
        n % 4)
            for (var a = 0; a < r; a += 1) {
                var s = o[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                i[n + a >>> 2] |= s << 24 - (n + a) % 4 * 8
            }
        else
            for (a = 0; a < r; a += 4)
                i[n + a >>> 2] = o[a >>> 2];
        return this['sigBytes'] += r,
            this
    }

    clamp() {
        // var e = t;
        var A = this.words
            , i = this['sigBytes'];
        A[i >>> 2] &= 4294967295 << 32 - i % 4 * 8,
            A['length'] = Math['ceil'](i / 4)
    }

    clone() {
        // var A = t;
        var i = _g['prototype']['clone']['call'](this);
        return i['words'] = this['words']['slice'](0),
            i
    }
}

function Vg(e, t, A) {
    var i, n = e, r = this['_iv'];
    r ? (i = r,
        this._iv = void 0) : i = this['_prevBlock'];
    for (var a = 0; a < A; a += 1)
        n[t + a] ^= i[a]
}

class zg extends (class extends _g {
    constructor(t, A) {
        // var i = Il;
        var o = super();
        return o._cipher = t,
            o['_iv'] = A,
            o
    }

    static createEncryptor(e, A) {
        // var i = t;
        return this['Encryptor']['create'](e, A)
    }

    static createDecryptor(e, A) {
        return this['Decryptor'].create(e, A)
    }
}) {
    constructor() {
        return super(...arguments);
    }
}

zg.Encryptor = class extends zg {
    constructor() {
        return super(...arguments);
    }

    processBlock(e, A) {
        // var i = t;
        var o = this._cipher
            , n = o['blockSize'];
        Vg.call(this, e, A, n),
            o['encryptBlock'](e, A),
            this['_prevBlock'] = e['slice'](A, A + n)
    }
}

zg.Decryptor = class extends zg {
    constructor() {
        return super(...arguments);
    }

    processBlock(e, A) {
        // var i = t;
        var o = this['_cipher']
            , n = o['blockSize']
            , r = e['slice'](A, A + n);
        o['decryptBlock'](e, A),
            Vg['call'](this, e, A, n),
            this['_prevBlock'] = r
    }
}

class jg extends _g {
    constructor(t) {
        // var A = Il;
        var i = super();
        return i['mixIn'](t),
            i
    }

    toString(e) {
        // var A = t;
        return (e || this['formatter'])['stringify'](this)
    }
}

class kg extends _g {
    constructor() {
        // var t = Il;
        var A = super();
        return A['_minBufferSize'] = 0,
            A
    }

    reset() {
        // var e = Il;
        this['_data'] = new Mg,
            this['_nDataBytes'] = 0
    }

    _append(e) {
        // var A = t;
        var i = e;
        'string' === (void 0 === i ? "undefined" : y(i)) && (i = Yg(i)),
            this['_data']['concat'](i),
            this['_nDataBytes'] += i.sigBytes
    }

    _process(e) {
        var A, o = this['_data'], n = this['blockSize'], r = o.words, a = o['sigBytes'], s = a / (4 * n),
            g = (s = e ? Math['ceil'](s) : Math['max']((0 | s) - this['_minBufferSize'], 0)) * n,
            l = Math['min'](4 * g, a);
        if (g) {
            for (var c = 0; c < g; c += n)
                this['_doProcessBlock'](r, c);
            A = r['splice'](0, g),
                o['sigBytes'] -= l
        }
        return new Mg(A, l)
    }

    clone() {
        // var A = t;
        var i = _g['prototype'].clone['call'](this);
        return i['_data'] = this['_data'].clone(),
            i
    }
}

class Hg extends kg {
    constructor(t, A, i) {
        // var o = Il;
        var n = super();
        return n['cfg'] = Object.assign(new _g, i),
            n._xformMode = t,
            n['_key'] = A,
            n['reset'](),
            n
    }

    static createEncryptor(e, A) {
        // var i = t;
        return this['create'](this['_ENC_XFORM_MODE'], e, A)
    }

    static createDecryptor(e, t) {
        return this.create(this._DEC_XFORM_MODE, e, t)
    }

    static _createHelper(e) {
        var t = function (e) {
            return Xg
        };
        return {
            encrypt: function (A, i, o) {
                // var n = Il;
                return t()['encrypt'](e, A, i, o)
            },
            decrypt: function (A, i, o) {
                // var n = Il;
                return t()['decrypt'](e, A, i, o)
            }
        }
    }

    reset() {
        // var A = t;
        kg.prototype['reset']['call'](this),
            this['_doReset']()
    }

    process(e) {
        // var A = t;
        return this['_append'](e),
            this['_process']()
    }

    finalize(e) {
        // var A = t;
        return e && this['_append'](e),
            this['_doFinalize']()
    }
}

class Jg extends Hg {
    constructor(t, A, i) {
        // var o = Il;
        var n = super(t, A, Object['assign']({
            mode: zg,
            padding: Wg
        }, i));
        return n['blockSize'] = 4,
            n
    }

    reset() {
        var A;
        Hg['prototype']['reset']['call'](this);
        var o = this.cfg
            , n = o.iv
            , r = o['mode'];
        this['_xformMode'] === this["constructor"]['_ENC_XFORM_MODE'] ? A = r['createEncryptor'] : (A = r['createDecryptor'],
            this['_minBufferSize'] = 1),
            this._mode = A.call(r, this, null == n ? void 0 : n.words),
            this._mode['__creator'] = A
    }

    _doProcessBlock(e, A) {
        // var i = t;
        this['_mode']['processBlock'](e, A)
    }

    _doFinalize() {
        var e, i = this['cfg']['padding'];
        return this['_xformMode'] === this["constructor"]['_ENC_XFORM_MODE'] ? (i['pad'](this['_data'], this['blockSize']),
            e = this['_process'](!0)) : (e = this['_process'](!0),
            i['unpad'](e)),
            e
    }
}

class Og extends kg {
    constructor(t) {
        // var A = Il;
        var i = super();
        return i["blockSize"] = 16,
            i["cfg"] = Object['assign'](new _g, t),
            i['reset'](),
            i
    }

    static _createHelper(e) {
        return function (t, A) {
            // var i = Il;
            return new e(A)['finalize'](t)
        }
    }

    reset() {
        // var A = t;
        kg['prototype']['reset'].call(this),
            this['_doReset']()
    }

    update(e) {
        // var A = t;
        return this._append(e),
            this['_process'](),
            this
    }

    finalize(e) {
        // var A = t;
        return e && this['_append'](e),
            this['_doFinalize']()
    }
}

class Pg extends Og {
    // function Constructor_e()
    constructor() {
        super(arguments);
        // return null !== Constructor_e_A && Constructor_e_A["apply"](this, arguments) || this
    }

    _doReset() {
        this["_hash"] = new Mg([1732584193, 4023233417, 2562383102, 271733878])
    }

    _doProcessBlock(e, A) {
        for (var o = e, n = 0; n < 16; n += 1) {
            var r = A + n
                , a = e[r];
            o[r] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
        }
        var s = this['_hash']["words"]
            , g = o[A + 0]
            , l = o[A + 1]
            , c = o[A + 2]
            , u = o[A + 3]
            , B = o[A + 4]
            , E = o[A + 5]
            , d = o[A + 6]
            , p = o[A + 7]
            , h = o[A + 8]
            , I = o[A + 9]
            , f = o[A + 10]
            , v = o[A + 11]
            , C = o[A + 12]
            , y = o[A + 13]
            , Q = o[A + 14]
            , m = o[A + 15]
            , T = s[0]
            , w = s[1]
            , F = s[2]
            , D = s[3];
        T = Lg(T, w, F, D, g, 7, Ug[0]),
            D = Lg(D, T, w, F, l, 12, Ug[1]),
            F = Lg(F, D, T, w, c, 17, Ug[2]),
            w = Lg(w, F, D, T, u, 22, Ug[3]),
            T = Lg(T, w, F, D, B, 7, Ug[4]),
            D = Lg(D, T, w, F, E, 12, Ug[5]),
            F = Lg(F, D, T, w, d, 17, Ug[6]),
            w = Lg(w, F, D, T, p, 22, Ug[7]),
            T = Lg(T, w, F, D, h, 7, Ug[8]),
            D = Lg(D, T, w, F, I, 12, Ug[9]),
            F = Lg(F, D, T, w, f, 17, Ug[10]),
            w = Lg(w, F, D, T, v, 22, Ug[11]),
            T = Lg(T, w, F, D, C, 7, Ug[12]),
            D = Lg(D, T, w, F, y, 12, Ug[13]),
            F = Lg(F, D, T, w, Q, 17, Ug[14]),
            w = Lg(w, F, D, T, m, 22, Ug[15]),
            T = Ng(T, w, F, D, l, 5, Ug[16]),
            D = Ng(D, T, w, F, d, 9, Ug[17]),
            F = Ng(F, D, T, w, v, 14, Ug[18]),
            w = Ng(w, F, D, T, g, 20, Ug[19]),
            T = Ng(T, w, F, D, E, 5, Ug[20]),
            D = Ng(D, T, w, F, f, 9, Ug[21]),
            F = Ng(F, D, T, w, m, 14, Ug[22]),
            w = Ng(w, F, D, T, B, 20, Ug[23]),
            T = Ng(T, w, F, D, I, 5, Ug[24]),
            D = Ng(D, T, w, F, Q, 9, Ug[25]),
            F = Ng(F, D, T, w, u, 14, Ug[26]),
            w = Ng(w, F, D, T, h, 20, Ug[27]),
            T = Ng(T, w, F, D, y, 5, Ug[28]),
            D = Ng(D, T, w, F, c, 9, Ug[29]),
            F = Ng(F, D, T, w, p, 14, Ug[30]),
            w = Ng(w, F, D, T, C, 20, Ug[31]),
            T = Gg(T, w, F, D, E, 4, Ug[32]),
            D = Gg(D, T, w, F, h, 11, Ug[33]),
            F = Gg(F, D, T, w, v, 16, Ug[34]),
            w = Gg(w, F, D, T, Q, 23, Ug[35]),
            T = Gg(T, w, F, D, l, 4, Ug[36]),
            D = Gg(D, T, w, F, B, 11, Ug[37]),
            F = Gg(F, D, T, w, p, 16, Ug[38]),
            w = Gg(w, F, D, T, f, 23, Ug[39]),
            T = Gg(T, w, F, D, y, 4, Ug[40]),
            D = Gg(D, T, w, F, g, 11, Ug[41]),
            F = Gg(F, D, T, w, u, 16, Ug[42]),
            w = Gg(w, F, D, T, d, 23, Ug[43]),
            T = Gg(T, w, F, D, I, 4, Ug[44]),
            D = Gg(D, T, w, F, C, 11, Ug[45]),
            F = Gg(F, D, T, w, m, 16, Ug[46]),
            w = Gg(w, F, D, T, c, 23, Ug[47]),
            T = bg(T, w, F, D, g, 6, Ug[48]),
            D = bg(D, T, w, F, p, 10, Ug[49]),
            F = bg(F, D, T, w, Q, 15, Ug[50]),
            w = bg(w, F, D, T, E, 21, Ug[51]),
            T = bg(T, w, F, D, C, 6, Ug[52]),
            D = bg(D, T, w, F, u, 10, Ug[53]),
            F = bg(F, D, T, w, f, 15, Ug[54]),
            w = bg(w, F, D, T, l, 21, Ug[55]),
            T = bg(T, w, F, D, h, 6, Ug[56]),
            D = bg(D, T, w, F, m, 10, Ug[57]),
            F = bg(F, D, T, w, d, 15, Ug[58]),
            w = bg(w, F, D, T, y, 21, Ug[59]),
            T = bg(T, w, F, D, B, 6, Ug[60]),
            D = bg(D, T, w, F, v, 10, Ug[61]),
            F = bg(F, D, T, w, c, 15, Ug[62]),
            w = bg(w, F, D, T, I, 21, Ug[63]),
            s[0] = s[0] + T | 0,
            s[1] = s[1] + w | 0,
            s[2] = s[2] + F | 0,
            s[3] = s[3] + D | 0
    }

    _doFinalize() {
        // var e = t;
        var A = this['_data']
            , i = A['words']
            , o = 8 * this['_nDataBytes']
            , n = 8 * A.sigBytes;
        i[n >>> 5] |= 128 << 24 - n % 32;
        var r = Math['floor'](o / 4294967296)
            , a = o;
        i[15 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
            i[14 + (n + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
            A.sigBytes = 4 * (i['length'] + 1),
            this['_process']();
        for (var s = this['_hash'], g = s['words'], l = 0; l < 4; l += 1) {
            var c = g[l];
            g[l] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
        }
        return s
    }

    clone() {
        // var A = t;
        var i = Constructor_e_A['prototype']['clone']['call'](this);
        return i['_hash'] = this['_hash'].clone(),
            i
    }

}

var Wg = {
    pad: function (e, t) {
        for (var i = 4 * t, o = i - e['sigBytes'] % i, n = o << 24 | o << 16 | o << 8 | o, r = [], a = 0; a < o; a += 4)
            r['push'](n);
        var s = Mg['create'](r, o);
        e.concat(s)
    },
    unpad: function (e) {
        var t = e
            , A = 255 & t['words'][t.sigBytes - 1 >>> 2];
        t.sigBytes -= A
    }
}

Kg = {
    stringify: function (e) {
        // var t = fg;
        var A = e['words']
            , i = e['sigBytes']
            , o = this['_map'];
        e.clamp();
        for (var n = [], r = 0; r < i; r += 3)
            for (var a = (A[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (A[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | A[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, s = 0; s < 4 && r + .75 * s < i; s += 1)
                n['push'](o.charAt(a >>> 6 * (3 - s) & 63));
        var g = o.charAt(64);
        if (g)
            for (; n['length'] % 4;)
                n['push'](g);
        return n.join("")
    },
    parse: function (e) {
        // var t = fg;
        var A = e['length']
            , i = this._map
            , o = this['_reverseMap'];
        if (!o) {
            this['_reverseMap'] = [],
                o = this['_reverseMap'];
            for (var n = 0; n < i['length']; n += 1)
                o[i['charCodeAt'](n)] = n
        }
        var r = i.charAt(64);
        if (r) {
            var a = e.indexOf(r);
            -1 !== a && (A = a)
        }
        return function (e, A, i) {
            for (var o = t, n = [], r = 0, a = 0; a < A; a += 1)
                if (a % 4) {
                    var s = i[e.charCodeAt(a - 1)] << a % 4 * 2 | i[e['charCodeAt'](a)] >>> 6 - a % 4 * 2;
                    n[r >>> 2] |= s << 24 - r % 4 * 8,
                        r += 1
                }
            return Mg['create'](n, r)
        }(e, A, o)
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
};

qg = {
    stringify: function (e) {
        // var t = fg;
        var A = e['ciphertext']
            , i = e['salt'];
        return (i ? Mg.create([1398893684, 1701076831])[t(532)](i)[t(532)](A) : A)['toString'](Kg)
    },
    parse: function (e) {
        var t, i = Kg.parse(e), o = i.words;
        return 1398893684 === o[0] && 1701076831 === o[1] && (t = Mg['create'](o.slice(2, 4)),
            o['splice'](0, 4),
            i['sigBytes'] -= 16),
            jg['create']({
                ciphertext: i,
                salt: t
            })
    }
}

class Xg extends _g {
    constructor() {
        return super(...arguments);
    }

    static encrypt(e, A, i, o) {
        // var n = t;
        var r = Object.assign(new _g, this['cfg'], o)
            , a = e['createEncryptor'](i, r)
            , s = a['finalize'](A)
            , g = a['cfg'];
        return jg['create']({
            ciphertext: s,
            key: i,
            iv: g.iv,
            algorithm: e,
            mode: g['mode'],
            padding: g['padding'],
            blockSize: a.blockSize,
            formatter: r.format
        })
    }

    static decrypt(e, A, i, o) {
        // var n = t;
        var r = A
            , a = Object['assign'](new _g, this['cfg'], o);
        return r = this['_parse'](r, a['format']),
            e['createDecryptor'](i, a)['finalize'](r['ciphertext'])
    }

    static _parse(e, A) {
        // var i = t;
        return 'string' === (void 0 === e ? "undefined" : y(e)) ? A['parse'](e, this) : e
    }
}

Xg['cfg'] = Object['assign'](new _g, {
    format: qg
});

let Zg = []
    , $g = []
    , el = []
    , tl = []
    , Al = []
    , il = []
    , ol = []
    , nl = []
    , rl = []
    , al = [];
let sl = 0, gl = 0;
for (Rg = 0; Rg < 256; Rg += 1)
    al[Rg] = Rg < 128 ? Rg << 1 : Rg << 1 ^ 283;
for (Rg = 0; Rg < 256; Rg += 1) {
    var ll = gl ^ gl << 1 ^ gl << 2 ^ gl << 3 ^ gl << 4;
    ll = ll >>> 8 ^ 255 & ll ^ 99,
        Zg[sl] = ll;
    var cl = al[sl]
        , ul = al[cl]
        , Bl = al[ul]
        , El = 257 * al[ll] ^ 16843008 * ll;
    $g[sl] = El << 24 | El >>> 8,
        el[sl] = El << 16 | El >>> 16,
        tl[sl] = El << 8 | El >>> 24,
        Al[sl] = El,
        El = 16843009 * Bl ^ 65537 * ul ^ 257 * cl ^ 16843008 * sl,
        il[ll] = El << 24 | El >>> 8,
        ol[ll] = El << 16 | El >>> 16,
        nl[ll] = El << 8 | El >>> 24,
        rl[ll] = El,
        sl ? (sl = cl ^ al[al[al[Bl ^ cl]]],
            gl ^= al[al[gl]]) : sl = gl = 1
}

var dl = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]

class pl extends Jg {
    constructor() {
        return super(...arguments);
    }

    _doReset() {
        var e;
        if (!this._nRounds || this['_keyPriorReset'] !== this['_key']) {
            this['_keyPriorReset'] = this['_key'];
            var i = this['_keyPriorReset']
                , o = i['words']
                , n = i['sigBytes'] / 4;
            this._nRounds = n + 6;
            var r = 4 * (this['_nRounds'] + 1);
            this._keySchedule = [];
            for (var a = this['_keySchedule'], s = 0; s < r; s += 1)
                s < n ? a[s] = o[s] : (e = a[s - 1],
                    s % n ? n > 6 && s % n === 4 && (e = Zg[e >>> 24] << 24 | Zg[e >>> 16 & 255] << 16 | Zg[e >>> 8 & 255] << 8 | Zg[255 & e]) : (e = Zg[(e = e << 8 | e >>> 24) >>> 24] << 24 | Zg[e >>> 16 & 255] << 16 | Zg[e >>> 8 & 255] << 8 | Zg[255 & e],
                        e ^= dl[s / n | 0] << 24),
                    a[s] = a[s - n] ^ e);
            this['_invKeySchedule'] = [];
            for (var g = this['_invKeySchedule'], l = 0; l < r; l += 1)
                s = r - l,
                    e = l % 4 ? a[s] : a[s - 4],
                    g[l] = l < 4 || s <= 4 ? e : il[Zg[e >>> 24]] ^ ol[Zg[e >>> 16 & 255]] ^ nl[Zg[e >>> 8 & 255]] ^ rl[Zg[255 & e]]
        }
    }

    encryptBlock(e, A) {
        // var i = t;
        this['_doCryptBlock'](e, A, this['_keySchedule'], $g, el, tl, Al, Zg)
    }

    _doCryptBlock(e, A, i, o, n, r, a, s) {
        for (var g = e, l = this['_nRounds'], c = g[A] ^ i[0], u = g[A + 1] ^ i[1], B = g[A + 2] ^ i[2], E = g[A + 3] ^ i[3], d = 4, p = 1; p < l; p += 1) {
            var h = o[c >>> 24] ^ n[u >>> 16 & 255] ^ r[B >>> 8 & 255] ^ a[255 & E] ^ i[d];
            d += 1;
            var I = o[u >>> 24] ^ n[B >>> 16 & 255] ^ r[E >>> 8 & 255] ^ a[255 & c] ^ i[d];
            d += 1;
            var f = o[B >>> 24] ^ n[E >>> 16 & 255] ^ r[c >>> 8 & 255] ^ a[255 & u] ^ i[d];
            d += 1;
            var v = o[E >>> 24] ^ n[c >>> 16 & 255] ^ r[u >>> 8 & 255] ^ a[255 & B] ^ i[d];
            d += 1,
                c = h,
                u = I,
                B = f,
                E = v
        }
        var C = (s[c >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[B >>> 8 & 255] << 8 | s[255 & E]) ^ i[d];
        d += 1;
        var y = (s[u >>> 24] << 24 | s[B >>> 16 & 255] << 16 | s[E >>> 8 & 255] << 8 | s[255 & c]) ^ i[d];
        d += 1;
        var Q = (s[B >>> 24] << 24 | s[E >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & u]) ^ i[d];
        d += 1;
        var m = (s[E >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & B]) ^ i[d];
        d += 1,
            g[A] = C,
            g[A + 1] = y,
            g[A + 2] = Q,
            g[A + 3] = m
    }
}

var fl = Jg["_createHelper"](pl);


function Cl(t) {
    var A = t.vid
        , i = t.updateTimeStamp

        , o = t.appVer
        , n = t.guid
        , r = t.platform
        , a = t.h38
        , s = "".concat(i) || Js()
        , g = function (e) {
        // var t = fg;
        var A = function (e) {
            // var t = Il;
            void 0 === e && (e = 32);
            for (var A = 'ABCEFGHIJKLNOPQRSTVWXYZabcefgijklmnpqrsuvwxz0124679', i = "", o = 0; o < e; o += 1)
                i += A['charAt'](Math['floor'](Math['random']() * A['length']));
            return i
        }(11)
            , i = e['vid']
            , o = e.ts
            , n = e.appVer
            , r = e['guid']
            , a = e['platform']
            , s = e.h38
            , g = void 0 === s ? "" : s
            , l = e['secJSON']
            , c = void 0 === l ? "" : l
            , u = e['busJSON']
            , B = void 0 === u ? "" : u
            , E = {};
        E.vid = i,
            E['sdkVer'] = '1.0.1',
            E['nonce'] = A,
            E['rand'] = xg(""['concat'](A, "1234"))['toString']()['substring'](0, 8),
            E.appVer = n,
            E['guid'] = r,
            E.platform = a,
            E.ts = o,
            E['h38'] = g,
            E.sj = c,
            E.bj = B,
            E.os = JSON["stringify"]({});
        var d = {};
        d.iv = Sg['parse']('CFAC216FAA2D396013575D4055C63350');
        d.mode = zg;
        d['padding'] = Wg;
        var p = fl.encrypt(JSON['stringify'](E), Sg['parse']('2A5AA60178AA6C8DA662E443773A6C4E'), d);
        return '--01'.concat(p['ciphertext']['toString']()['toUpperCase']())
    }({
        vid: A,
        ts: s,
        appVer: o,
        guid: n,
        platform: r,
        h38: a
    });
    return {
        tm: s,
        cKey: g,
        encryptVer: '8.5'
    }
}

let vid = "s4100gaakjh";
let info = {
    "vid": vid,
    "updateTimeStamp": "",
    "platform": "10201",
    "guid": "566b54c49f763234",
    "appVer": "1.35.15",
    "h38": "59a993d2300d00ba1fdae2b902000007218b02"
};
let cKey_8 = Cl(info);
console.log(cKey_8);

