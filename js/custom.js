// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    $('[rel="icon"]').attr('href', "/img/newtubiao.png");
    document.title = '(°A°`)╮ 没人嘛';
    clearTimeout(titleTime);
  } else {
    $('[rel="icon"]').attr('href', "/img/newtubiao.png");
    document.title = '(ฅ>ω<*ฅ) 天天开心哦~' + + OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
//花花特效
onload = function () {
  var click_cnt = 0,
    $html = document.getElementsByTagName("html")[0],
    $body = document.getElementsByTagName("body")[0];
  $html.onclick = function (e) {
    var $elem = document.createElement("b");
    $elem.style.color = "#FFC0CB", $elem.style.zIndex = 9999, $elem.style.position = "absolute", $elem.style.select = "none";
    var x = e.pageX,
      y = e.pageY;
    switch ($elem.style.left = x - 10 + "px", $elem.style.top = y - 20 + "px", clearInterval(anim), ++click_cnt) {
      case 10:
        $elem.innerText = "OωO";
        break;
      case 20:
        $elem.innerText = "(๑•́ ∀ •̀๑)";
        break;
      case 30:
        $elem.innerText = "(๑•́ ₃ •̀๑)";
        break;
      case 40:
        $elem.innerText = "(๑•̀_•́๑)";
        break;
      case 50:
        $elem.innerText = "（￣へ￣）";
        break;
      case 60:
        $elem.innerText = "(╯°口°)╯(┴—┴";
        break;
      case 70:
        $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
        break;
      case 80:
        $elem.innerText = "╮(｡>口<｡)╭";
        break;
      case 90:
        $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
        break;
      case 100:
      case 101:
      case 102:
      case 103:
      case 104:
      case 105:
        $elem.innerText = "(ꐦ°᷄д°᷅)";
        break;
      default:
        $elem.innerText = "🌸"
    }
    $elem.style.fontSize = 10 * Math.random() + 8 + "px";
    var increase = 0,
      anim;
    setTimeout((function () {
      anim = setInterval((function () {
        150 == ++increase && (clearInterval(anim), $body.removeChild($elem)), $elem.style.top = y - 20 - increase + "px", $elem.style.opacity = (150 - increase) / 120
      }), 8)
    }), 70), $body.appendChild($elem)
  }
};

!(function () {
  /** 计时起始时间，自行修改 **/
  var start = new Date("2023/10/15 22:03:00");

  function update() {
    var now = new Date();
    now.setTime(now.getTime() + 250);
    days = (now - start) / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = (now - start) / 1000 / 60 / 60 - (24 * dnum);
    hnum = Math.floor(hours);
    if (String(hnum).length === 1) {
      hnum = "0" + hnum;
    }
    minutes = (now - start) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes);
    if (String(mnum).length === 1) {
      mnum = "0" + mnum;
    }
    seconds = (now - start) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds);
    if (String(snum).length === 1) {
      snum = "0" + snum;
    }
    document.getElementById("timeDate").innerHTML = "本站在银河系运行&nbsp" + dnum + "&nbsp天";
    document.getElementById("times").innerHTML = hnum + "&nbsp小时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
  }

  update();
  setInterval(update, 1000);
})();
! function () {
  function o(w, v, i) {
    return w.getAttribute(v) || i
  }

  function j(i) {
    return document.getElementsByTagName(i)
  }

  function l() {
    var i = j("script"),
      w = i.length,
      v = i[w - 1];
    return {
      l: w,
      z: o(v, "zIndex", -1),
      o: o(v, "opacity", 0.5),
      c: o(v, "color", "0,0,0"),
      n: o(v, "count", 99)
    }
  }

  function k() {
    r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }

  function b() {
    e.clearRect(0, 0, r, n);
    var w = [f].concat(t);
    var x, v, A, B, z, y;
    t.forEach(function (i) {
      i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
      for (v = 0; v < w.length; v++) {
        x = w[v];
        if (i !== x && null !== x.x && null !== x.y) {
          B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;
          y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke())
        }
      }
      w.splice(w.indexOf(i), 1)
    }), m(b)
  }
  var u = document.createElement("canvas"),
    s = l(),
    c = "c_n" + s.l,
    e = u.getContext("2d"),
    r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (i) {
      window.setTimeout(i, 1000 / 45)
    },
    a = Math.random,
    f = {
      x: null,
      y: null,
      max: 20000
    };
  u.id = c;
  u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
  j("body")[0].appendChild(u);
  k(), window.onresize = k;
  window.onmousemove = function (i) {
    i = i || window.event, f.x = i.clientX, f.y = i.clientY
  }, window.onmouseout = function () {
    f.x = null, f.y = null
  };
  for (var t = [], p = 0; s.n > p; p++) {
    var h = a() * r,
      g = a() * n,
      q = 2 * a() - 1,
      d = 2 * a() - 1;
    t.push({
      x: h,
      y: g,
      xa: q,
      ya: d,
      max: 6000
    })
  }
  setTimeout(function () {
    b()
  }, 100)
}();
