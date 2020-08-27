
//  jQuery
 window.addEventListener('DOMContentLoaded', function(){

  // header text animation
  var EffectH = 100
  var scTop = $(this).scrollTop();
  var scBottom = scTop + $(this).height();
  var effectPos = scBottom - EffectH;
  $('.js-scroll').each( function animTx() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(1600).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

 //ブラウザリロード後トップに戻す
  $(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
  });

  //トグルメニュー　クリックで開閉
  $('a[href^="#"]').on("click", function() {
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
　　　　//イージング
        $('body,html').animate({scrollTop:position}, speed, 'swing').removeClass('active');
        return false;
        
      });
　　
      $(".nav-menu__list--item").on("click", function() {
            $("#nav-menu__bg").removeClass("active");
            $("#is-nav__open").removeClass("active");
        });
});


  //intersection observer API 
  window.addEventListener('load', function(){

    //ローディングアニメーション
    setTimeout(function() {
      document.getElementById("loading-animation").classList.add("loaded");
    }, 400)

    // IntersectionObserverの作成
    const observer = new IntersectionObserver(function(entries) {
      for(let i = 0; i < entries.length; i++) {
        // 領域内なら処理を実行
        if (entries[i].intersectionRatio <= 0) continue;
        showElm(entries[i].target);
      }
    },{
      // オプション
      rootMargin: '-25% 0% -25% 0%'
    });
    // 監視対象の追加
    const elements = document.querySelectorAll('.isFadeIn');
    for(let i = 0; i < elements.length; i++) {
      observer.observe(elements[i]);
    }
    // 領域内に入ったとき実行する処理
    function showElm(isFadeIn) {
      isFadeIn.classList.add('is-fadeIn__trigger');
      observer.unobserve(isFadeIn);
    }
  },false);

 
    //js toggle menu
    window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("is-nav__open").addEventListener("click", function() {
    this.classList.toggle('active');
    document.getElementById('nav-menu__bg').classList.toggle('active');
    });
   
  });