String.fromCharCodeS = function () {
  var v = arguments.length;
  var w = "";
  var s, u, x;
  for (var t = 0; t < v; t++) {
    x = arguments[t];
    if (x < 1114112 && 65535 < x) {
      s = Math.floor((x - 65536) / 1024) + 55296;
      u = ((x - 65536) % 1024) + 56320;
      w = w + String.fromCharCode(s, u)
    } else {
      if (x < 65536) {
        w = w + String.fromCharCode(x)
      }
    }
  }
  return w
};

padLeft = function (u, t) {
  if (!t || u.length >= t) {
    return u
  }
  return Math.pow(10, t - u.length).toString().slice(1) + u
};

function d(s) {
  if (s == 9 || s == 10 || s == 13 || s == 32) {
    return true
  }
  return false
}

function g(u) {
  var y = [];
  var x = u.length;
  var z = false;
  var s, v;
  for (var t = 0; t < x; t++) {
    if (z == false && d(u.charCodeAt(t)) == true) {
      y.push(u.charAt(t))
    } else {
      s = u.charCodeAt(t);
      if (s < 56320 && 55295 < s && (t + 1) < x) {
        v = u.charCodeAt(t + 1);
        if (v < 57344 && 56319 < v) {
          s = ((s - 55296) * 1024) + (v - 56320) + 65536;
          t++
        }
      }
      y.push(padLeft(s.toString(), 5))
    }
  }
  return y.join("")
}

function m(t) {
  var s = false;
  var w, v = "";
  v = "\\\\u"
  return t.replace(new RegExp(v + "([0-9a-fA-F]{4})", "g"), function (u, x) {
    w = parseInt(x, 16);
    if (s == true) {
      w = (((w & 255) << 8) | ((w & 65280) >>> 8))
    }
    return String.fromCharCode(w)
  })
}

exports.f1 = (unicodeValue) => {
  let t = m("\\u" + unicodeValue);
  return g(t);
}

