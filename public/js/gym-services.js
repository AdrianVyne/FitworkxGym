$(document).ready(function () {
  //gallery part
  var gallery = {
    autoplay: true,
    autoplayTime: 3000,
    autoPlayTimer: "",
    buttons: null,
    current: 0,
    images: null,
    lock: false,
    time: 1000,
    total: 3000,
    playing: false,
    transition: 1300,
    init: function () {
      var self = this;
      this.buttons = $("#presentation-navigation .presentation-button").get();
      this.images = $("#presentation-images .presentation-image").get();
      this.total = this.images.length;
      if (this.total > 1) {
        $("#presentation-prev").on("click", function () {
          self.slideGallery(
            "prev",
            self.current > 0 ? self.current - 1 : self.total - 1
          );
        });
        $("#presentation-next").on("click", function () {
          self.slideGallery(
            "next",
            self.current < self.total - 1 ? self.current + 1 : 0
          );
        });
        $(this.buttons).on("click", function () {
          var index = $(this).index();
          if (self.current !== index) {
            self.slideGallery(self.current > index ? "prev" : "next", index);
          }
        });
        $(this.buttons[this.current]).addClass("current");
        var hammer = new Hammer(
          document.getElementById("presentation-gallery")
        );
        hammer.on("swipeleft", function () {
          $("#presentation-next").click();
        });
        hammer.on("swiperight", function () {
          $("#presentation-prev").click();
        });
      } else {
        $("#presentation-prev, #presentation-next").remove();
      }
      $(this.images)
        .lazyload({
          autoload: false,
          background: true,
          viewport: true,
          onLoad: function () {
            if (self.current === 0) {
              self.startAutoplay();
            }
          },
        })
        .eq(this.current)
        .addClass("current")
        .lazyload("load");
    },
    slideGallery: function (direction, index) {
      this.stopAutoplay();
      if (!this.lock) {
        this.lock = true;
        $(this.images[this.current]).addClass(direction + "Out");
        $(this.images[index])
          .addClass(direction + "In")
          .lazyload("load");
        $(this.buttons[this.current]).removeClass("current");
        $(this.buttons[index]).addClass("current");
        setTimeout(
          function () {
            $(this.images[this.current]).removeClass(
              "current " + direction + "Out"
            );
            $(this.images[index])
              .addClass("current")
              .removeClass(direction + "In");
            this.current = index;
            this.lock = false;
            this.startAutoplay();
          }.bind(this),
          this.time
        );
      }
    },
    startAutoplay: function () {
      if (this.autoplay && this.total > 1) {
        this.playing = true;
        this.autoPlayTimer = setTimeout(
          function () {
            this.slideGallery(
              "next",
              this.current < this.total - 1 ? this.current + 1 : 0
            );
          }.bind(this),
          this.autoplayTime
        );
      }
    },
    stopAutoplay: function () {
      if (this.autoplay && this.total < 2) {
        this.playing = false;
        clearTimeout(this.autoPlayTimer);
      }
    },
  };

  gallery.init();

  //supposedly testimonials but now gym amenities

  var testemonials = {
    $arrows: null,
    $ctx: null,
    $items: null,
    $itemsBox: null,
    $itemsDetails: null,
    current: 0,
    order: {},
    show: 6,
    total: 0,
    init: function () {
      var t = this;
      (this.$ctx = $("#testemonial-people")),
        (this.$items = this.$ctx.find("li").get()),
        (this.$itemsDetails = $("#testemonial-details")),
        (this.$itemsBox = this.$itemsDetails.find(".testemonial-box").get()),
        (this.$arrows = this.$ctx.find(".arrow")),
        this.$arrows.on("click", function () {
          if ($(this).hasClass("prev-arrow")) {
            var i = $(t.$items).filter(".current-0"),
              e = i.index();
            (e = e > 0 ? e - 1 : t.total - 1), t.goTo(e);
          } else {
            var i = $(t.$items).filter(".current-0"),
              e = i.index();
            (e = e + 1 < t.total ? e + 1 : 0), t.goTo(e);
          }
        }),
        (this.total = this.$items.length),
        this.$ctx.find(".lazyload").lazyload({ autoload: !1 });
      for (var i = 0; i < 6; i++)
        $(this.$items[i])
          .addClass("current-" + i)
          .find(".lazyload")
          .lazyload("load");
      var e = "";
      $(window)
        .on("resize.showButtons", function () {
          clearTimeout(e),
            (e = setTimeout(function () {
              window.innerWidth > 1140
                ? (t.show = 6)
                : window.innerWidth >= 810
                ? (t.show = 5)
                : window.innerWidth >= 620
                ? (t.show = 4)
                : window.innerWidth >= 470
                ? (t.show = 3)
                : (t.show = 2),
                t.total > t.show
                  ? (t.$arrows.show(),
                    t.$ctx.addClass("initialized"),
                    requestAnimationFrame(function () {
                      t.$ctx.addClass("animated");
                    }))
                  : (t.$arrows.hide(),
                    t.$ctx.removeClass("animated"),
                    requestAnimationFrame(function () {
                      t.$ctx.removeClass("initialized");
                    }));
            }, 100));
        })
        .trigger("resize.showButtons");
      var o = new Hammer(this.$ctx[0]);
      o.on("swipeleft", function (i) {
        t.$arrows.filter(".next-arrow").click();
      }),
        o.on("swiperight", function (i) {
          t.$arrows.filter(".prev-arrow").click();
        }),
        $(this.$items).on("click", function () {
          var i = $(this).index();
          if (i != t.current) {
            $(t.$items[t.current]).find(".lazyload").removeClass("current"),
              $(t.$items[i]).find(".lazyload").addClass("current");
            var e = t.$itemsDetails.outerHeight() - t.$itemsDetails.height();
            t.$itemsDetails.velocity("stop").velocity(
              {
                height: [
                  e + $(t.$itemsBox[i]).height(),
                  t.$itemsDetails.outerHeight(),
                ],
              },
              {
                queue: !1,
                duration: 900,
                mobileHA: !1,
                delay: 0,
                easing: "easeInOutExpo",
                complete: function () {
                  $(this).css({ height: "auto" });
                },
              }
            ),
              $(t.$itemsBox[t.current])
                .removeClass("current")
                .velocity("stop")
                .velocity(
                  { opacity: [0, 1] },
                  {
                    visibility: "hidden",
                    queue: !1,
                    duration: 750,
                    mobileHA: !1,
                    delay: 0,
                    easing: "easeOutExpo",
                  }
                ),
              $(t.$itemsBox[i])
                .addClass("current")
                .css({ visibility: "visible" })
                .velocity("stop")
                .velocity(
                  { opacity: [1, 0] },
                  {
                    queue: !1,
                    duration: 900,
                    mobileHA: !1,
                    delay: 0,
                    easing: "easeInOutExpo",
                  }
                )
                .find(".lazyload")
                .lazyload("load"),
              $(t.$itemsBox[i])
                .find(".testemonial-info")
                .children()
                .each(function (t) {
                  $(this)
                    .css({ position: "relative", opacity: 0 })
                    .velocity("stop")
                    .velocity(
                      { opacity: [1, 0], translateX: [0, 35] },
                      {
                        queue: !1,
                        duration: 550,
                        mobileHA: !1,
                        delay: 600 + 170 * t,
                        easing: "easeInOutQuad",
                      }
                    );
                }),
              (t.current = i);
          }
        }),
        $(this.$itemsBox)
          .find(".lazyload")
          .lazyload({ autoload: !1, background: !0 })
          .eq(0)
          .lazyload("load");
    },
    goTo: function (t) {
      $(this.$items).removeClass();
      for (var i = 0, e = t; e < Math.min(this.total, 6 + t); e++)
        $(this.$items[e])
          .addClass("current-" + i)
          .find(".lazyload")
          .lazyload("load"),
          i++;
      if (6 + t > this.total)
        for (var e = 0; e < 6 + t - this.total; e++)
          $(this.$items[e])
            .addClass("current-" + i)
            .find(".lazyload")
            .lazyload("load"),
            i++;
    },
  };

  testemonials.init();
});
