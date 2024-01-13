jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    $(function () {
        // ハンバーガーメニュー
        $('.js-hamburger,.js-drawer').click(function () {
            $('.js-hamburger').toggleClass('is-open')
            $('.js-drawer').fadeToggle()
            $('body').toggleClass('active')
        })
    });

    // drawerを開いているときに、768px以上の画面幅のときdrawerメニューが消える記述
    $(window).resize(function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
            closeDrawer();
        }
    });
});

function openDrawer() {
    $(".js-drawer").fadeIn();
    $(".js-hamburger").addClass("is-open");
}

function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-open");
}

// campaign slider
const CampaignSwiper = new Swiper(".js-campaign-swiper", {
    loop: true, // ループ有効
    slidesPerView: "auto", // 一度に表示する枚数
    speed: 1500, // ループの時間
    allowTouchMove: false, // スワイプ無効
    spaceBetween: 24,

    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },

    breakpoints: {
        768: {
            spaceBetween: 40,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;

// colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function () {
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
        image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
        if (counter == 0) {
            $(this).delay(200).animate({
                'width': '100%'
            }, speed, function () {
                image.css('opacity', '1');
                $(this).css({
                    'left': '0',
                    'right': 'auto'
                });
                $(this).animate({
                    'width': '0%'
                }, speed);
            })
            counter = 1;
        }
    });
});

// ページトップボタン

$(function () {
    const pageTop = $(".js-page-top");
    pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $("body,html").animate({
                scrollTop: 0,
            },
            500
        );
        return false;
    });
});

const mvSwiper = new Swiper('.js-mv-swiper', {
    loop: true,
    effect: 'fade',
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
        delay: 3000,
    },
});

// campaign-tab
$(function () {
    // 最初のコンテンツは表示
    $(".js-campaign-content:first-of-type").css("display", "block");
    // タブをクリックすると
    $(".js-campaign-tab").on("click", function () {
        // 現在選択されているタブからcurrentを外す
        $(".current").removeClass("current");
        // クリックされたタブにcurrentクラスを付与
        $(this).addClass("current");
        // クリックされた要素が何番目か取得（クリックしたタブのインデックス番号を取得）
        const index = $(this).index();
        // クリックしたタブのインデックス番号と同じコンテンツを表示
        $(".js-campaign-content").hide().eq(index).fadeIn(300);
    });



    // aboutモーダル
    let scrollPos;

    $(".js-photo").click(function () {
        scrollPos = $(window).scrollTop();
        $(".js-overlay").html($(this).prop("outerHTML"));
        $(".js-overlay").fadeIn(200);
        $(".js-page-top").hide();
        $('html').addClass('is-fixed');
        return false;
    });

    $(".js-overlay").click(function () {
        $(".js-overlay").fadeOut(200, function () {
            $(".js-page-top").fadeIn();
            $('html').removeClass('is-fixed');
            $(window).scrollTop(scrollPos);
        });
        return false;
    });

    //information タブ
    $(function () {
        const tabButton = $(".js-tab-button"),
            tabContent = $(".js-tab-content");
        tabButton.on("click", function () {
            let index = tabButton.index(this);

            tabButton.removeClass("is-active");
            $(this).addClass("is-active");
            tabContent.removeClass("is-active");
            tabContent.eq(index).addClass("is-active");
        });
    });

    //faq アコーディオン
    $(function () {
        $(".js-accordion-item .js-accordion-content").css(
            "display",
            "block"
        );
        $(".js-accordion-item .js-accordion-title").addClass("is-open");
        $(".js-accordion-title").on("click", function () {
            $(this).toggleClass("is-open");
            $(this).next().slideToggle(300);
        });
    });


    // blog license トグル
    $(function () {
        $(".js-archive-content .js-archive-items").css(
            "display",
            "block"
        );
        $(".js-archive-content .js-archive-year").addClass("is-open");
        $(".js-archive-year").on("click", function () {
            $(this).toggleClass("is-open");
            $(this).next().slideToggle(300);
        });
    });
});