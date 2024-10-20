// cKey, encryptVer
function Cl(t) {
    var A = t.vid
        , i = t.updateTimeStamp
        , o = t.appVer
        , n = t.guid
        , r = t.platform
        , a = t.h38
        , s = "".concat(i) || Js()
        , g = function (e) {
        var t = fg
            , A = function (e) {
            var t = Il;
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
        d.iv = Sg['parse']('CFAC216FAA2D396013575D4055C63350'),
            d.mode = zg,
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
        encryptVer: e.CKEY_VRE.CKEY_8
    }
}

