$(function () {
  // グローバルナビゲーション
  $('a[href="#nav-item-dropdown"]').on("click", function () {
    var dropdown = $(this).next(".drop-nv-wrap");
    if ($(dropdown).css("display") == "none") {
      $(dropdown).fadeIn("fast");
    } else {
      $(dropdown).fadeOut("fast");
    }
    $(".article-title-pc").toggleClass("open");
    return false;
  });

  // ハンバーガーメニュー
  $(".menu-trigger").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("nav").removeClass("open");
    } else {
      $(this).addClass("active");
      $("nav").addClass("open");
    }
  });
  $(".article-title").on("click", function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass("open");
  });

  // 検索ボックス
  $(".search-keyword").on("keypress", function (e) {
    if (e.keyCode == 13) {
      var index = $(".search-keyword").index(this);
      $(".search-url").get(index).click();
    }
  });
  $(".search-icon").on("click", function () {
    $(".search-box").animate({ width: "toggle" }, "slow");
  });
  $(".close").on("click", function () {
    $(".search-box").fadeOut("slow");
  });

  // カレンダー特定日の設定
  $(".dayList").each(function () {
    var month = $(this).attr("data-month");
    var day = $(this).attr("data-day");
    var color = $(this).attr("data-color");
    $(".makeshop-calendar" + month + " .day" + day).css({
      "background-color": color,
      color: "#fff",
      "font-weight": "bold",
    });
  });

  // WebFont
  WebFontConfig = {
    google: {
      families: ["Noto+Sans+JP", "Roboto"],
    },
  };
  (function (d) {
    var wf = d.createElement("script"),
      s = d.scripts[0];
    wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
  })(document);
});

/* Add */

let heading = document.querySelectorAll("#main-message h2");
console.log(heading[0]);
let count = 0;
for (let i = 0; i < heading.length; i++) {
  let headingArray = heading[i].innerHTML.split("");
  heading[i].innerHTML = "";
  for (let j = 0; j < headingArray.length; j++) {
    heading[i].innerHTML += `<span style="animation-delay:${count * 0.2}s;" class="heading-char">${
      headingArray[j]
    }</span>`;
    count++;
  }
  count += 3;
}

// let headingAnimation = document.querySelectorAll(".heading-char");
// console.log(headingAnimation);
// for (let i = 0; i < headingAnimation.length; i++) {
//   headingAnimation[i].style.animationDelay = "0.3s";
// }

function addFadeInClass() {
  $("section > div, section > div > div").addClass("fadeInAnimation");
}
addFadeInClass();

function scrollFadeInAnime() {
  $(".fadeInAnimation").each(function () {
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeIn");
    } else {
      $(this).removeClass("fadeIn");
    }
  });
}

function scrollSlideRLInAnime() {
  $(".slideInAnimationRL").each(function () {
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("slideInRL");
    } else {
      $(this).removeClass("slideInRL");
    }
  });
}

function scrollSlideLRInAnime() {
  $(".slideInAnimationLR").each(function () {
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("slideInLR");
    } else {
      $(this).removeClass("slideInLR");
    }
  });
}

// scroll fire
$(window).on("scroll", function () {
  scrollFadeInAnime();
  scrollSlideRLInAnime();
  scrollSlideLRInAnime();
});

// load fire
$(window).on("load", function () {
  scrollFadeInAnime();
  scrollSlideRLInAnime();
  scrollSlideLRInAnime();
});

// function scrollFadeInAnime(element) {
//   let elemPos = element.getBoundingClientRect().top;
//   let windowHeight = window.innerHeight;

//   if (elemPos - windowHeight <= 0) {
//     element.classList.add("fadeIn");
//   } else {
//     element.classList.remove("fadeIn");
//   }
// }

// function scrollSlideInAnime(element) {
//   let elemPos = element.getBoundingClientRect().top;
//   let windowHeight = window.innerHeight;

//   if (elemPos - windowHeight <= 0) {
//     element.classList.add("slideIn");
//   } else {
//     element.classList.remove("slideIn");
//   }
// }

// // Helper function to iterate over elements and apply animations
// function handleScrollAnimations() {
//   let fadeInElements = document.querySelectorAll(".fadeInAnimation");
//   let slideInElements = document.querySelectorAll(".slideInAnimation");

//   fadeInElements.forEach(function (element) {
//     scrollFadeInAnime(element);
//   });

//   slideInElements.forEach(function (element) {
//     scrollSlideInAnime(element);
//   });
// }

// // Scroll event listener
// window.addEventListener("scroll", handleScrollAnimations);

// // Load event listener
// window.addEventListener("load", handleScrollAnimations);

// // Initial execution on load
// handleScrollAnimations();
