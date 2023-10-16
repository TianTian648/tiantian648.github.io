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
onload=function(){var click_cnt=0,$html=document.getElementsByTagName("html")[0],$body=document.getElementsByTagName("body")[0];$html.onclick=function(e){var $elem=document.createElement("b");$elem.style.color="#FFC0CB",$elem.style.zIndex=9999,$elem.style.position="absolute",$elem.style.select="none";var x=e.pageX,y=e.pageY;switch($elem.style.left=x-10+"px",$elem.style.top=y-20+"px",clearInterval(anim),++click_cnt){case 10:$elem.innerText="OωO";break;case 20:$elem.innerText="(๑•́ ∀ •̀๑)";break;case 30:$elem.innerText="(๑•́ ₃ •̀๑)";break;case 40:$elem.innerText="(๑•̀_•́๑)";break;case 50:$elem.innerText="（￣へ￣）";break;case 60:$elem.innerText="(╯°口°)╯(┴—┴";break;case 70:$elem.innerText="૮( ᵒ̌皿ᵒ̌ )ა";break;case 80:$elem.innerText="╮(｡>口<｡)╭";break;case 90:$elem.innerText="( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";break;case 100:case 101:case 102:case 103:case 104:case 105:$elem.innerText="(ꐦ°᷄д°᷅)";break;default:$elem.innerText="🌸"}$elem.style.fontSize=10*Math.random()+8+"px";var increase=0,anim;setTimeout((function(){anim=setInterval((function(){150==++increase&&(clearInterval(anim),$body.removeChild($elem)),$elem.style.top=y-20-increase+"px",$elem.style.opacity=(150-increase)/120}),8)}),70),$body.appendChild($elem)}};

!(function() {
    /** 计时起始时间，自行修改 **/
    var start = new Date("2023/10/15 22:03:00");
  
    function update() {
      var now = new Date();
      now.setTime(now.getTime()+250);
      days = (now - start) / 1000 / 60 / 60 / 24;
      dnum = Math.floor(days);
      hours = (now - start) / 1000 / 60 / 60 - (24 * dnum);
      hnum = Math.floor(hours);
      if(String(hnum).length === 1 ){
        hnum = "0" + hnum;
      }
      minutes = (now - start) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
      mnum = Math.floor(minutes);
      if(String(mnum).length === 1 ){
        mnum = "0" + mnum;
      }
      seconds = (now - start) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
      snum = Math.round(seconds);
      if(String(snum).length === 1 ){
        snum = "0" + snum;
      }
      document.getElementById("timeDate").innerHTML = "本站安全运行&nbsp"+dnum+"&nbsp天";
      document.getElementById("times").innerHTML = hnum + "&nbsp小时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
    }
  
    update();
    setInterval(update, 1000);
  })();
