(function () {

    var icons = window.iconsOriginal;
    let iconsCount = 0;

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

    let parent = document.getElementById("icons");

    for (let i in icons) {
        let item = icons[i];
        let word =  i & 2 ? "lolo": "pepe";
        let element = "<li class='icon'><div>" +
            "<i class='geira-icons'>" + item.name + "</i>" +
            "<span class='name'>" + item.name + "</span>" +
            "<span id='uni" + i.toString() + "' class='unicode'>" + item.uni + "</span>" +
            "<span class='decimal' id='dec" + i.toString() + "'>code</span>" +
            "<span class='tags'>"+ item.tags +"</span> "+
            "</div></li>";
        parent.innerHTML += element;
    }

    let divTextVal = document.getElementsByClassName("unicode");

    for (let i = 0; i < divTextVal.length; i++) {
        let item = divTextVal[i];
        let id = item.id;
        if (item && id) {
            f1(item.textContent, i);
        }
        iconsCount++;
    }

    function f1(value, numberId) {
        let t = m("\\u" + value);
        document.getElementById("uni" + numberId.toString()).textContent = "\\" + value;
        document.getElementById("dec" + numberId.toString()).textContent = g(t);
    }

    document.getElementById("quantity").textContent = "Icons: "+iconsCount.toString();

  function searcher() {
    // Declare variables
    var input, filter, ul, li, name, i, tags, txtValue, txtValue2;
    input = document.getElementById('match');
    filter = input.value.toUpperCase();
    ul = document.getElementById("icons");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      name = li[i].getElementsByClassName("name")[0];
      tags = li[i].getElementsByClassName("tags")[0];



      txtValue = name.textContent || name.innerText;
      txtValue2 = tags.textContent || tags.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  let matcher = document.getElementById("match");
  matcher.addEventListener('keyup', e => {
    searcher()
  })

})();
