// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    $('[rel="icon"]').attr('href', "/img/newtubiao.png");
    document.title = '天天O_O';
    clearTimeout(titleTime);
  } else {
    $('[rel="icon"]').attr('href', "/img/newtubiao.png");
    document.title = '(ฅ>ω<*ฅ) 天天开心哦~';
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
    $i.css({
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "o-user-select": "none",
      "user-select": "none"
    });
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


//社会主义核心价值观
// var a_idx = 0;
// jQuery(document).ready(function ($) {
//   $("body").click(function (e) {
//     var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
//     var $i = $("<span/>").text(a[a_idx]);
//     a_idx = (a_idx + 1) % a.length;
//     var x = e.pageX,
//       y = e.pageY;
//     let scrolly = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
//     y = y - scrolly;
//     $i.css({
//       "z-index": 999,
//       "top": y - 20,
//       "left": x,
//       "position": "fixed",
//       "font-weight": "bold",
//       "color": "#ff6651" /*随机颜色写法："rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"*/
//     });
//     $("body").append($i);
//     $i.animate({
//       "top": y - 180,
//       "opacity": 0
//     }, 1500, function () {
//       $i.remove();
//     });
//   });
// });
