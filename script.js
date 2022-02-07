! function(e) {
    var o = {
            common: {
                init: function() {
                    function o() {
                        var o = {
                                useEasing: !0,
                                useGrouping: !0,
                                separator: ",",
                                decimal: "."
                            },
                            n = e("#number-1").data("count");
                        console.log(n);
                        var s = new CountUp("number-1", 0, n, 1, 2.5, o);
                        s.error ? console.error(s.error) : (e("#number-1").addClass("counting"), s.start())
                    }

                    function n() {
                        var o = {
                                useEasing: !0,
                                useGrouping: !0,
                                separator: ",",
                                decimal: "."
                            },
                            n = e("#number-2").data("count");
                        console.log(n);
                        var s = new CountUp("number-2", 0, n, 1, 2.5, o);
                        s.error ? console.error(s.error) : (e("#number-2").addClass("counting"), s.start())
                    }

                    function s() {
                        var o = {
                                useEasing: !0,
                                useGrouping: !0,
                                separator: ",",
                                decimal: "."
                            },
                            n = e("#number-3").data("count");
                        console.log(n);
                        var s = new CountUp("number-3", 0, n, 1, 2.5, o);
                        s.error ? console.error(s.error) : (e("#number-3").addClass("counting"), s.start())
                    }

                    function i() {
                        var o = {
                                useEasing: !0,
                                useGrouping: !0,
                                separator: ",",
                                decimal: "."
                            },
                            n = e("#number-4").data("count");
                        console.log(n);
                        var s = new CountUp("number-4", 0, n, 1, 2.5, o);
                        s.error ? console.error(s.error) : (e("#number-4").addClass("counting"), s.start())
                    }! function() {
                        bodyBg = e(".background").css("backgroundColor"), e("body").css({
                            "background-color": bodyBg
                        }), e(".screen__loader-new").css({
                            "background-color": bodyBg
                        })
                    }(),
                    function() {
                        var o = e(".filter-link");
                        e(o).click(function(o) {
                            o.preventDefault(), e(this).find("a"), e(".filter-all-link").removeClass("current"), e(".filter-link").removeClass("current"), e(this).addClass("current");
                            var n = e(this).attr("data-filter"),
                                s = Number(n);
                            e.getJSON("/wp-json/wp/v2/results?per_page=100", function(o) {
                                var n = "";
                                e.each(o, function(e, o) {
                                    var i = o.categories.includes(s),
                                        a = o.amount,
                                        t = o.copy;
                                    o.featured, o.featured_image, o.featured_result_testimonial, o.categories, i && (n += '<div class="col col45 highlight">', n += '<span class="highlight-number counter">' + a + "</span>", n += "<p>" + t + "</p>", n += "</div>")
                                }), n += "", e(".container-results").html(n)
                            })
                        })
                    }(),
                    function() {
                        var o = e(".right-arrow"),
                            n = e(".left-arrow"),
                            s = e(".testimonial-slide");
                        e(".slide-1").addClass("show-slide");
                        var i = (e(".show-slide"), 0),
                            a = s.length,
                            t = e(".slide-number");
                        o.on("click", function() {
                            i = (i + 1) % a, console.log(i), e(".show-slide").removeClass("show-slide"), e(s[i]).addClass("show-slide"), e(t).removeClass("active"), e(t[i]).addClass("active")
                        }), n.on("click", function() {
                            i = (i - 1) % a, -1 == i && (i = a - 1), console.log(i), e(".show-slide").removeClass("show-slide"), e(s[i]).addClass("show-slide"), e(t).removeClass("active"), e(t[i]).addClass("active")
                        }), e(t).on("click", function() {
                            $clicked_num = this;
                            var o = e($clicked_num).index();
                            e(t).removeClass("active"), e($clicked_num).addClass("active"), e(".show-slide").removeClass("show-slide"), e(s[o]).addClass("show-slide")
                        })
                    }(),
                    function() {
                        e(window).scroll(function() {
                            e(window).scrollTop() >= e(window).height() / 2 ? e(".wt-floating-logo").addClass("black-logo") : e(".wt-floating-logo").removeClass("black-logo")
                        })
                    }(),
                    function() {
                        e(".search-field").keyup(function() {
                            var o = e(".search-field").val(),
                                n = new RegExp(o, "i");
                            e.getJSON("/wp-json/wp/v2/posts?_embed", function(o) {
                                var s = '<div class="flex-grid flex-grid--fluid-gutter">';
                                e.each(o, function(e, o) {
                                    if (-1 !== o.title.rendered.search(n) || -1 !== o.content.rendered.search(n) && "publish" === o.status) {
                                        var i = new Date(o.date),
                                            a = i.getFullYear(),
                                            t = i.getDate(),
                                            l = i.getMonth() + 1,
                                            r = l + " " + t + " " + a + " ";
                                        s += '<div class="col col50"><a href="' + o.link + '"><article class="post type-post hentry"><header><span class="category">', s += o._embedded["wp:term"][0][0].name + '</span><h2 class="entry-title">' + o.title.rendered + "</h2>", s += '<div class="post-date">', s += r, s += '</header><div class="entry-summary">Read more</div></article></a>', s += "</div>"
                                    }
                                }), s += "</div>", e(".updates-posts").html(s)
                            })
                        })
                    }(),
                    function() {
                        e('a[href*="#"]:not([href="#"])').on("click", function() {
                            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname && !e(this).hasClass("no-move")) {
                                var o = e(this.hash);
                                return o = o.length ? o : e("[name=" + this.hash.slice(1) + "]"), o.length && e("html, body").animate({
                                    scrollTop: o.offset().top - 0
                                }, 700), !1
                            }
                        })
                    }(),
                    function() {
                        e(window).scroll(function() {
                            e(window).scrollTop() > 5 ? e(".banner").addClass("fixed") : e(".banner").removeClass("fixed")
                        })
                    }(),
                    function() {
                        var o = e(".menu-toggle"),
                            n = e(".nav-primary");
                        e(".small-link > a"), e(".sub-menu"), e(".sub-menu li a"), e(".nav-primary ul li a"), e(o).click(function() {
                            e(n).hasClass("nav-toggled") ? (e(n).removeClass("nav-toggled"), e(o).removeClass("close"), e("body").removeClass("u-no-scroll")) : (e(n).addClass("nav-toggled"), e(o).addClass("close"), e("body").addClass("u-no-scroll"))
                        })
                    }(),
                    function() {
                        var o = e(".u-accordion-toggle"),
                            n = e(".u-accordion-panel");
                        e(o).each(function() {
                            var o = e(this).next(n);
                            console.log(o), e(this).click(function() {
                                o.is(":visible") ? (e(this).removeClass("toggled"), e(o).slideUp()) : (e(this).addClass("toggled"), e(o).slideDown())
                            })
                        })
                    }(),
                    function() {
                        e(".anim").waypoint({
                            handler: function(o) {
                                "down" === o ? e(this.element).addClass("go") : e(this.element).removeClass("go")
                            },
                            offset: "100%"
                        })
                    }(),
                    function() {
                        e(window).scroll(function() {
                            var o = e(window).scrollTop(),
                                n = e(window).height();
                            e(".scroll:not(.go)").each(function() {
                                var s = e(this).offset().top;
                                o + n >= s && e(this).addClass("go")
                            })
                        })
                    }(),
                    function() {
                        e(window).scroll(function() {
                            var o = e(window).scrollTop(),
                                n = e(window).height();
                            e(".site-footer").each(function() {
                                var s = e(this).offset().top;
                                o + n >= s ? (e(".background").addClass("footer-in-view"), e("body").addClass("footer-active")) : (e(".background").removeClass("footer-in-view"), e("body").removeClass("footer-active"))
                            })
                        })
                    }(),
                    function() {
                        var o = e(".show-more"),
                            n = e(".hidden-profile");
                        e(o).click(function() {
                            e(n).is(":visible") ? (e(n).slideUp(), e(o).removeClass("toggled"), e(".show").show(), e(".hide").hide()) : (e(n).slideDown(), e(o).addClass("toggled"), e(".hide").show(), e(".show").hide())
                        })
                    }(),
                    function() {
                        e(".view-all-articles").click(function(o) {
                            o.preventDefault(), e(this).hasClass("toggled") ? (e(this).removeClass("toggled"), e(".profile-single-article").removeClass("show-article")) : (e(this).addClass("toggled"), e(".profile-single-article").addClass("show-article"))
                        })
                    }();
                    var a = (e("#number-1").waypoint({
                        handler: function(e) {
                            "down" === e && (o(), n(), s(), i())
                        },
                        offset: "100%"
                    }), Barba.BaseTransition.extend({
                        start: function() {
                            e("body").hasClass("u-no-scroll") && e("body").removeClass("u-no-scroll"), e(".content-wrapper").animate({
                                opacity: 0
                            }, 1e3), Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this))
                        },
                        fadeOut: function() {
                            return e(this.oldContainer).animate({
                                opacity: 0
                            }).promise()
                        },
                        fadeIn: function() {
                            var o = this,
                                n = e(this.newContainer);
                            e(this.oldContainer).hide(), n.css({
                                visibility: "visible",
                                opacity: 0
                            }), n.animate({
                                opacity: 1
                            }, 400, function() {
                                o.done()
                            })
                        }
                    }));
                    Barba.Pjax.getTransition = function() {
                        return a
                    }, e(document).ajaxComplete(function() {})
                },
                finalize: function() {}
            },
            home: {
                init: function() {},
                finalize: function() {}
            },
            about_us: {
                init: function() {}
            },
            blog: {
                init: function() {}
            },
            archive: {
                init: function() {}
            },
            single_people: {
                init: function() {}
            },
            page_has_filter: {
                init: function() {}
            }
        },
        n = {
            fire: function(e, n, s) {
                var i, a = o;
                n = void 0 === n ? "init" : n, i = "" !== e, i = i && a[e], (i = i && "function" == typeof a[e][n]) && a[e][n](s)
            },
            loadEvents: function() {
                n.fire("common"), e.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(e, o) {
                    n.fire(o), n.fire(o, "finalize")
                }), n.fire("common", "finalize")
            }
        };
    e(document).ready(n.loadEvents)
}(jQuery);
//# sourceMappingURL=main.js.map
