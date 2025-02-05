!function() {
    "use strict";
    var _ = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m11.69,6.86c-6.32,0 -11.47,5.16 -11.47,11.59c0,6.39 5.15,11.55 11.47,11.55c6.35,0 11.49,-5.16 11.49,-11.55c0,-6.43 -5.14,-11.59 -11.49,-11.59zm0,18.3c-3.52,0 -6.41,-3.15 -6.41,-6.71c0,-3.59 2.89,-6.75 6.41,-6.75c3.54,0 6.43,3.16 6.43,6.75c0,3.56 -2.89,6.71 -6.43,6.71zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_1"/><path d="m5.11,5.13c1.37,0 2.52,-1.17 2.52,-2.58c0,-1.39 -1.15,-2.55 -2.52,-2.55c-1.4,0 -2.54,1.16 -2.54,2.55c0,1.41 1.14,2.58 2.54,2.58zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_2"/><path d="m18.27,5.13c1.37,0 2.51,-1.17 2.51,-2.58c0,-1.39 -1.14,-2.55 -2.51,-2.55c-1.41,0 -2.55,1.16 -2.55,2.55c0,1.41 1.14,2.58 2.55,2.58zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_3"/><path d="m11.69,5.13c1.37,0 2.51,-1.17 2.51,-2.58c0,-1.39 -1.14,-2.55 -2.51,-2.55c-1.4,0 -2.55,1.16 -2.55,2.55c0,1.41 1.15,2.58 2.55,2.58zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_4"/><path d="m62.36,7.27l-5.57,0l-6.61,9.29l0,-16.18l-5.06,0l0,29.21l5.06,0l0,-9.29l7.12,9.29l5.98,0l-8.78,-11.29l7.86,-11.03zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_5"/><path d="m42.74,7.27l-5.57,0l-6.61,9.29l0,-16.18l-5.06,0l0,29.21l5.06,0l0,-9.29l7.12,9.29l5.98,0l-8.78,-11.29l7.86,-11.03zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_6"/><path d="m72.28,6.86c-6.32,0 -11.46,5.16 -11.46,11.59c0,6.39 5.14,11.55 11.46,11.55c6.35,0 11.5,-5.16 11.5,-11.55c0,-6.43 -5.15,-11.59 -11.5,-11.59zm-0.03,18.3c-3.51,0 -6.4,-3.15 -6.4,-6.71c0,-3.59 2.89,-6.75 6.4,-6.75c3.55,0 6.44,3.16 6.44,6.75c0,3.56 -2.89,6.71 -6.44,6.71zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_7"/></svg>';
    function e() {
        var _ = $('<li class="menu__item selector" data-action="hd"><div class="menu__ico"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 414.89" height="30" fill="CurrentColor"><path fill-rule="nonzero" d="M189.688 279.224V256.79H119.88v-30.267l57.765-90.857h49.345v90.857h16.546v30.267H226.99v22.434h-37.302zM80.058 0h351.889c21.902 0 41.854 9.115 56.353 23.619C502.917 38.236 512 58.373 512 80.226v254.438c0 21.804-9.175 41.898-23.766 56.477-14.574 14.58-34.591 23.749-56.287 23.749H80.058c-21.744 0-41.827-9.076-56.423-23.683C9.121 376.698 0 356.686 0 334.664V80.226c0-22.065 9.028-42.131 23.57-56.672C38.101 9.022 58.101 0 80.058 0zm351.889 33.331H80.058c-13.004 0-24.792 5.286-33.293 13.787-8.496 8.495-13.771 20.218-13.771 33.108v254.438c0 12.809 5.34 24.488 13.836 32.978 8.577 8.583 20.403 13.917 33.228 13.917h351.889c12.744 0 24.515-5.399 33.092-13.982 8.572-8.566 13.967-20.283 13.967-32.913V80.226c0-12.711-5.33-24.471-13.901-33.043-8.501-8.501-20.24-13.852-33.158-13.852zM261.456 279.224V135.666h38.981v58.058h1.972l43.163-58.058H391l-48.519 63.946 49.639 79.612h-46.548l-32.239-53.82-12.896 16.812v37.008h-38.981zm-70.915-52.701v-50.464h-1.119l-31.12 49.345v1.119h32.239z"></path></svg></div><div class="menu__text">В качестве</div></li>');
        _.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "?cat=&sort=now&uhd=true",
                title: "В качестве",
                component: "category_full",
                source: "cub",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(_)
    }
    function t() {
        var e = $('<li class="menu__item selector" data-action="okko"><div class="menu__ico"><svg width="84" height="30" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" version="1.1"><path d="m11.69,6.86c-6.32,0 -11.47,5.16 -11.47,11.59c0,6.39 5.15,11.55 11.47,11.55c6.35,0 11.49,-5.16 11.49,-11.55c0,-6.43 -5.14,-11.59 -11.49,-11.59zm0,18.3c-3.52,0 -6.41,-3.15 -6.41,-6.71c0,-3.59 2.89,-6.75 6.41,-6.75c3.54,0 6.43,3.16 6.43,6.75c0,3.56 -2.89,6.71 -6.43,6.71zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_1"/><path d="m5.11,5.13c1.37,0 2.52,-1.17 2.52,-2.58c0,-1.39 -1.15,-2.55 -2.52,-2.55c-1.4,0 -2.54,1.16 -2.54,2.55c0,1.41 1.14,2.58 2.54,2.58zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_2"/><path d="m18.27,5.13c1.37,0 2.51,-1.17 2.51,-2.58c0,-1.39 -1.14,-2.55 -2.51,-2.55c-1.41,0 -2.55,1.16 -2.55,2.55c0,1.41 1.14,2.58 2.55,2.58zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_3"/><path d="m11.69,5.13c1.37,0 2.51,-1.17 2.51,-2.58c0,-1.39 -1.14,-2.55 -2.51,-2.55c-1.4,0 -2.55,1.16 -2.55,2.55c0,1.41 1.15,2.58 2.55,2.58zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_4"/><path d="m62.36,7.27l-5.57,0l-6.61,9.29l0,-16.18l-5.06,0l0,29.21l5.06,0l0,-9.29l7.12,9.29l5.98,0l-8.78,-11.29l7.86,-11.03zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_5"/><path d="m42.74,7.27l-5.57,0l-6.61,9.29l0,-16.18l-5.06,0l0,29.21l5.06,0l0,-9.29l7.12,9.29l5.98,0l-8.78,-11.29l7.86,-11.03zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_6"/><path d="m72.28,6.86c-6.32,0 -11.46,5.16 -11.46,11.59c0,6.39 5.14,11.55 11.46,11.55c6.35,0 11.5,-5.16 11.5,-11.55c0,-6.43 -5.15,-11.59 -11.5,-11.59zm-0.03,18.3c-3.51,0 -6.4,-3.15 -6.4,-6.71c0,-3.59 2.89,-6.75 6.4,-6.75c3.55,0 6.44,3.16 6.44,6.75c0,3.56 -2.89,6.71 -6.44,6.71zm0,0" fill="rgb(0%,0%,0%)" fill-rule="nonzero" id="svg_7"/></svg></div><div class="menu__text">Okko</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?language=ru&with_networks=3871",
                title: "Okko",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(e)
    }
    function n() {
        var e = $('<li class="menu__item selector" data-action="ivi"><div class="menu__ico">' + _ + '</div><div class="menu__text">ИВИ</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?language=ru&with_networks=3923",
                title: "ИВИ",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(e)
    }
    function o() {
        var e = $('<li class="menu__item selector" data-action="wink"><div class="menu__ico">' + _ + '</div><div class="menu__text">Wink</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?language=ru&with_networks=5806",
                title: "Wink",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(e)
    }
    function i() {
        var e = $('<li class="menu__item selector" data-action="kion"><div class="menu__ico">' + _ + '</div><div class="menu__text">KION</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?language=ru&with_networks=4085",
                title: "KION",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(e)
    }
    function a() {
        var e = $('<li class="menu__item selector" data-action="kion"><div class="menu__ico">' + _ + '</div><div class="menu__text">Netflix</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?language=ru&with_networks=213",
                title: "Netflix",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(e)
    }
    function r() {
        var e = $('<li class="menu__item selector" data-action="rus"><div class="menu__ico">' + _ + '</div><div class="menu__text">Русские</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "?cat=movie&airdate=2023-2025&without_genres=16&language=ru",
                title: "Русские фильмы",
                component: "category_full",
                source: "cub",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(e)
    }
    function c() {
        var e = $('<li class="menu__item selector" data-action="rus"><div class="menu__ico">' + _ + '</div><div class="menu__text">Дорамы</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "?cat=tv&without_genres=16&language=ko&sort=top",
                title: "Дорамы",
                component: "category_full",
                source: "cub",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(e)
    }
    function l() {
        var e = $('<li class="menu__item selector" data-action="kp"><div class="menu__ico">' + _ + '</div><div class="menu__text">Кинопоиск</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?language=ru&with_networks=3827",
                title: "Кинопоиск",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(e)
    }
    function s() {
        var _ = $('<li class="menu__item selector" data-action="mult2"><div class="menu__ico"><svg viewBox="0 0 514 514" xmlns="http://www.w3.org/2000/svg"><path d="m400 2c-79 6-142 75-142 156v14h-99l-98 1-5 2c-38 17-23 63 21 65h15l-3 6c-10 20-10 24-11 76v45l-5-8c-7-12-13-26-18-39-5-15-6-17-11-21-13-12-35-7-41 10-6 16 17 70 46 105 116 145 347 127 439-34 31-54 31-87-1-87-15 0-21 5-28 27-6 18-28 58-31 58-1 0-1-22-1-49v-50l-11-55c-12-60-12-58-6-63 8-7 15-3 24 11 14 24 29 30 47 21 20-9 21-17 10-71-10-52-10-53 2-53s21-14 20-28c-1-6-2-7-10-13-30-20-65-29-103-26m43 74c-10 3-14 17-6 25 13 13 32-4 23-19-3-5-11-8-17-6m-289 114v27l1 26 2 3 3 3h46 46l3-3 2-3v-27-27h-51c-36 0-51 0-52 1m78 116c-54 9-96 54-102 109l-1 6 10 6c70 45 158 47 230 4 9-5 8-4 7-15-7-71-73-122-144-110" fill="currentColor" fill-rule="evenodd"/></svg></div><div class="menu__text">Мультсериалы</div></li>');
        _.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?with_genres=10762,16&sort_by=revenue.desc&with_original_language=ru|uk|en|be|cn",
                title: "Мультсериалы",
                component: "category_full",
                genres: 16,
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(_)
    }
    function u() {
        var _ = $('<li class="menu__item selector" data-action="mult3"><div class="menu__ico"><svg viewBox="0 0 514 514" xmlns="http://www.w3.org/2000/svg"><path d="m400 2c-79 6-142 75-142 156v14h-99l-98 1-5 2c-38 17-23 63 21 65h15l-3 6c-10 20-10 24-11 76v45l-5-8c-7-12-13-26-18-39-5-15-6-17-11-21-13-12-35-7-41 10-6 16 17 70 46 105 116 145 347 127 439-34 31-54 31-87-1-87-15 0-21 5-28 27-6 18-28 58-31 58-1 0-1-22-1-49v-50l-11-55c-12-60-12-58-6-63 8-7 15-3 24 11 14 24 29 30 47 21 20-9 21-17 10-71-10-52-10-53 2-53s21-14 20-28c-1-6-2-7-10-13-30-20-65-29-103-26m43 74c-10 3-14 17-6 25 13 13 32-4 23-19-3-5-11-8-17-6m-289 114v27l1 26 2 3 3 3h46 46l3-3 2-3v-27-27h-51c-36 0-51 0-52 1m78 116c-54 9-96 54-102 109l-1 6 10 6c70 45 158 47 230 4 9-5 8-4 7-15-7-71-73-122-144-110" fill="currentColor" fill-rule="evenodd"/></svg></div><div class="menu__text">Мультфильмы</div></li>');
        _.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/movie?with_genres=10751,16&sort_by=revenue.desc&with_original_language=ru|uk|en|be|zh|cn",
                title: "Мультфильмы (TMDB)",
                component: "category_full",
                source: "tmdb",
                genres: 16,
                sort: "now",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(_)
    }
    function p() {
        var _ = $('<li class="menu__item selector" data-action="mult3"><div class="menu__ico"><svg viewBox="0 0 514 514" xmlns="http://www.w3.org/2000/svg"><path d="m400 2c-79 6-142 75-142 156v14h-99l-98 1-5 2c-38 17-23 63 21 65h15l-3 6c-10 20-10 24-11 76v45l-5-8c-7-12-13-26-18-39-5-15-6-17-11-21-13-12-35-7-41 10-6 16 17 70 46 105 116 145 347 127 439-34 31-54 31-87-1-87-15 0-21 5-28 27-6 18-28 58-31 58-1 0-1-22-1-49v-50l-11-55c-12-60-12-58-6-63 8-7 15-3 24 11 14 24 29 30 47 21 20-9 21-17 10-71-10-52-10-53 2-53s21-14 20-28c-1-6-2-7-10-13-30-20-65-29-103-26m43 74c-10 3-14 17-6 25 13 13 32-4 23-19-3-5-11-8-17-6m-289 114v27l1 26 2 3 3 3h46 46l3-3 2-3v-27-27h-51c-36 0-51 0-52 1m78 116c-54 9-96 54-102 109l-1 6 10 6c70 45 158 47 230 4 9-5 8-4 7-15-7-71-73-122-144-110" fill="currentColor" fill-rule="evenodd"/></svg></div><div class="menu__text">Nickelodeon</div></li>');
        _.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?language=ru&with_networks=13",
                title: "Nickelodeon",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(_)
    }
    function d() {
        var e = $('<li class="menu__item selector" data-action="mult3"><div class="menu__ico">' + _ + '</div><div class="menu__text">Start</div></li>');
        e.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "discover/tv?language=ru&with_networks=2493",
                title: "Start",
                component: "category_full",
                source: "tmdb",
                sort: "now",
                card_type: "true",
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(e)
    }
    function m() {
        var _ = $('<li class="menu__item selector" data-action="mult"><div class="menu__ico"><svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256px" height="256px" viewBox="0 0 76.688 76.687" xml:space="preserve" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M75.191,30.104h-0.598c-0.574-6.778-4.99-12.47-11.062-14.894C57.993,7.232,48.773,1.992,38.345,1.992 c-10.427,0-19.647,5.237-25.187,13.217c-6.07,2.424-10.485,8.114-11.06,14.895H1.5c-0.828,0-1.5,0.673-1.5,1.5 c0,0.828,0.672,1.5,1.5,1.5h0.598C2.56,38.56,5.502,43.321,9.802,46.233l4.249,27.192c0.114,0.73,0.743,1.271,1.482,1.271h11.248 c0.828,0,1.5-0.672,1.5-1.5c0-5.55,4.515-10.063,10.063-10.063c5.548,0,10.063,4.517,10.063,10.063c0,0.828,0.672,1.5,1.5,1.5 h11.248c0.737,0,1.366-0.539,1.479-1.271l4.25-27.192c4.301-2.914,7.242-7.673,7.703-13.129h0.6c0.826,0,1.5-0.672,1.5-1.5 C76.689,30.777,76.02,30.104,75.191,30.104z M38.345,4.992c8.084,0,15.374,3.49,20.434,9.042c-0.582-0.059-1.172-0.09-1.77-0.09 c-9.229,0-16.816,7.123-17.582,16.157h-2.167c-0.765-9.034-8.352-16.156-17.582-16.156c-0.597,0-1.186,0.03-1.768,0.09 C22.972,8.484,30.259,4.992,38.345,4.992z M65.993,32.527l-1.854,11.874c-2.113,1.185-4.541,1.86-7.129,1.86 c-8.082,0-14.658-6.574-14.658-14.657c0-8.083,6.576-14.657,14.658-14.657c1.598,0,3.131,0.266,4.569,0.738 C64.35,21.97,65.973,27.061,65.993,32.527z M10.699,32.527c0.021-5.466,1.645-10.557,4.413-14.842 c1.439-0.474,2.973-0.738,4.569-0.738c8.083,0,14.658,6.574,14.658,14.657c0,8.082-6.575,14.658-14.658,14.658 c-2.587,0-5.015-0.682-7.127-1.86L10.699,32.527z M5.025,31.604c0-4.497,2.04-8.523,5.237-11.215 c-1.645,3.755-2.563,7.896-2.563,12.252c0,0.077,0.006,0.155,0.018,0.23l1.382,8.846C6.58,39.083,5.025,35.526,5.025,31.604z M59.872,71.696h-8.549c-0.746-6.5-6.281-11.563-12.979-11.563c-6.697,0-12.23,5.063-12.977,11.563h-8.55l-3.705-23.715 c2.032,0.817,4.246,1.28,6.567,1.28c9.23,0,16.817-7.123,17.582-16.158h2.167c0.765,9.035,8.353,16.158,17.582,16.158 c2.322,0,4.535-0.463,6.566-1.28L59.872,71.696z M67.596,41.716l1.381-8.846c0.012-0.075,0.018-0.153,0.018-0.23 c0-4.354-0.918-8.497-2.562-12.252c3.199,2.69,5.24,6.718,5.24,11.215C71.67,35.526,70.111,39.083,67.596,41.716z"></path> <path d="M25.777,25.671c0-3.36-2.734-6.095-6.096-6.095c-3.36,0-6.094,2.732-6.094,6.095c0,3.36,2.733,6.094,6.094,6.094 S25.777,29.032,25.777,25.671z M19.68,28.765c-0.373,0-0.727-0.077-1.058-0.197c1.995-0.157,3.575-1.812,3.575-3.846 c0-0.356-0.064-0.696-0.155-1.024c0.451,0.538,0.733,1.222,0.733,1.977C22.777,27.377,21.387,28.765,19.68,28.765z M19.198,24.721 c0,0.482-0.395,0.876-0.877,0.876c-0.483,0-0.876-0.394-0.876-0.876s0.393-0.877,0.876-0.877 C18.803,23.844,19.198,24.239,19.198,24.721z"></path> <path d="M49.7,25.671c0,3.359,2.731,6.094,6.095,6.094c3.36,0,6.094-2.732,6.094-6.094c0-3.362-2.732-6.095-6.094-6.095 C52.432,19.576,49.7,22.311,49.7,25.671z M53.559,24.721c0-0.482,0.393-0.877,0.877-0.877c0.481,0,0.875,0.395,0.875,0.877 s-0.394,0.876-0.875,0.876C53.95,25.597,53.559,25.203,53.559,24.721z M55.795,28.765c-0.373,0-0.728-0.077-1.06-0.197 c1.996-0.157,3.573-1.812,3.573-3.846c0-0.356-0.063-0.696-0.153-1.025c0.451,0.538,0.731,1.222,0.731,1.977 C58.889,27.377,57.501,28.765,55.795,28.765z"></path> <path d="M46.2,50.151h-8.555c-0.827,0-1.5,0.672-1.5,1.5c0,0.827,0.673,1.5,1.5,1.5H46.2c0.828,0,1.5-0.673,1.5-1.5 C47.7,50.823,47.029,50.151,46.2,50.151z"></path> </g> </g> </g></svg></div><div class="menu__text">Мультфильмы</div></li>');
        _.on("hover:enter", function() {
            Lampa.Activity.push({
                url: "",
                title: "Мультфильмы",
                component: "category",
                genres: 16,
                id: 16,
                source: "cub",
                card_type: !0,
                page: 1
            })
        }),
        $(".menu .menu__list").eq(0).append(_),
        setTimeout(function() {
            $("[data-action=mult]").insertBefore($("[data-action=tv]")),
            $("[data-action=hd]").insertBefore($("[data-action=mult]"))
        }, 1e3)
    }
    window.plugin_podbor_ready || function _() {
        function v() {
            window.plugin_podbor_ready || ("1" == Lampa.Storage.get("porborki_kach") && e(),
            "1" == Lampa.Storage.get("porborki_rus") && r(),
            "1" == Lampa.Storage.get("porborki_okko") && t(),
            "1" == Lampa.Storage.get("porborki_ivi") && n(),
            "1" == Lampa.Storage.get("porborki_wink") && o(),
            "1" == Lampa.Storage.get("porborki_kion") && i(),
            "1" == Lampa.Storage.get("porborki_netflix") && a(),
            "1" == Lampa.Storage.get("porborki_kr") && c(),
            "1" == Lampa.Storage.get("porborki_kp") && l(),
            "1" == Lampa.Storage.get("porborki_mult12") && u(),
            "1" == Lampa.Storage.get("porborki_mult13") && s(),
            "1" == Lampa.Storage.get("porborki_mult14") && m(),
            "1" == Lampa.Storage.get("porborki_mult15") && p(),
            "1" == Lampa.Storage.get("porborki_start") && d()),
            window.plugin_podbor_ready = !0,
            Lampa.SettingsApi.addComponent({
                component: "porborki",
                icon: '<svg height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <rect x="2" y="8" width="34" height="21" rx="3" stroke="white" stroke-width="3"/>\n                <line x1="13.0925" y1="2.34874" x2="16.3487" y2="6.90754" stroke="white" stroke-width="3" stroke-linecap="round"/>\n                <line x1="1.5" y1="-1.5" x2="9.31665" y2="-1.5" transform="matrix(-0.757816 0.652468 0.652468 0.757816 26.197 2)" stroke="white" stroke-width="3" stroke-linecap="round"/>\n                <line x1="9.5" y1="34.5" x2="29.5" y2="34.5" stroke="white" stroke-width="3" stroke-linecap="round"/>\n            </svg>',
                name: "Подборки"
            }),
            Lampa.SettingsApi.addComponent({
                component: "porborki_mult",
                icon: '<svg viewBox="0 0 514 514" xmlns="http://www.w3.org/2000/svg"><path d="m400 2c-79 6-142 75-142 156v14h-99l-98 1-5 2c-38 17-23 63 21 65h15l-3 6c-10 20-10 24-11 76v45l-5-8c-7-12-13-26-18-39-5-15-6-17-11-21-13-12-35-7-41 10-6 16 17 70 46 105 116 145 347 127 439-34 31-54 31-87-1-87-15 0-21 5-28 27-6 18-28 58-31 58-1 0-1-22-1-49v-50l-11-55c-12-60-12-58-6-63 8-7 15-3 24 11 14 24 29 30 47 21 20-9 21-17 10-71-10-52-10-53 2-53s21-14 20-28c-1-6-2-7-10-13-30-20-65-29-103-26m43 74c-10 3-14 17-6 25 13 13 32-4 23-19-3-5-11-8-17-6m-289 114v27l1 26 2 3 3 3h46 46l3-3 2-3v-27-27h-51c-36 0-51 0-52 1m78 116c-54 9-96 54-102 109l-1 6 10 6c70 45 158 47 230 4 9-5 8-4 7-15-7-71-73-122-144-110" fill="currentColor" fill-rule="evenodd"/></svg>',
                name: "Детям"
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki_mult",
                param: {
                    name: "porborki_mult14",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Мультфильмы (cub)"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="mult"]').length ? m() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki_mult",
                param: {
                    name: "porborki_mult12",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Мультфильмы (tmdb)"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="mult12"]').length ? u() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki_mult",
                param: {
                    name: "porborki_mult15",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Nickelodeon"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="mult15"]').length ? p() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki_mult",
                param: {
                    name: "porborki_mult13",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Мультcериалы"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="mult13"]').length ? s() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki",
                param: {
                    name: "porborki_rus",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Русские"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="rus"]').length ? r() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki",
                param: {
                    name: "porborki_kach",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "В качестве"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="hd"]').length ? e() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki",
                param: {
                    name: "porborki_okko",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Okko"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="okko"]').length ? t() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki",
                param: {
                    name: "porborki_kp",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Кинопоиск"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="kp"]').length ? l() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki",
                param: {
                    name: "porborki_ivi",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "ИВИ"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="ivi"]').length ? n() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki",
                param: {
                    name: "porborki_wink",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Wink"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="wink"]').length ? o() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki",
                param: {
                    name: "porborki_kion",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "KION"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="kion"]').length ? i() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki",
                param: {
                    name: "porborki_start",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Start"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="netflix"]').length ? d() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki",
                param: {
                    name: "porborki_netflix",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Netflix"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="netflix"]').length ? a() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            }),
            Lampa.SettingsApi.addParam({
                component: "porborki",
                param: {
                    name: "porborki_kr",
                    type: "select",
                    values: {
                        1: "Показать",
                        0: "Скрыть"
                    },
                    default: 0
                },
                field: {
                    name: "Дорамы"
                },
                onChange: function(_) {
                    1 == _ && 0 == $('[data-action="kr"]').length ? c() : Lampa.Helper.show("Необходимо переоткрыть Lampa")
                }
            })
        }
        window.appready ? v() : Lampa.Listener.follow("app", function(_) {
            "ready" == _.type && v()
        })
    }()
}();
