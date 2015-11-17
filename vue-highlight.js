;(function() {
    Vue.directive('highlight', {
        deep: true,
        bind: function() {
            var FX = this.FX = {
                easing: {
                    linear: function(progress) {
                        return progress;
                    },
                    swing: function(progress) {
                        return 0.5 - Math.cos(progress * Math.PI) / 2;
                    }
                },
                animate: function(options) {
                    var start = new Date();
                    var id = setInterval(function() {
                        var timePassed = new Date() - start;
                        var progress = timePassed / options.duration;
                        if (progress > 1) {
                            progress = 1;
                        }
                        options.progress = progress;
                        var delta = options.delta(progress);
                        options.step(delta);
                        if (progress == 1) {
                            clearInterval(id);
                            options.complete();
                        }
                    }, options.delay || 10);
                },
                fadeOut: function(element, options) {
                    var to = 1;
                    this.animate({
                        duration: options.duration,
                        delta: function(progress) {
                            progress = this.progress;
                            return FX.easing.linear(progress);
                        },
                        complete: options.complete,
                        step: function(delta) {
                            element.style.opacity = to - delta;
                        }
                    });
                }
            };
        },
        update: function() {
            window.setTimeout(function(fx, el) {
                var target = el.getBoundingClientRect();
                var style  = 'position:absolute; width:' + target.width + 'px; height:' + target.height + 'px; top:' + target.top + 'px; left:' + target.left + 'px; background-color:rgba(255, 255, 255, 0.3); z-index:999999;';
                var div    = document.createElement("div");
                typeof(div.style.cssText) !== undefined ? div.style.cssText = style : div.setAttribute('style', style);
                div = document.body.appendChild(div);
                fx.fadeOut(div, {
                    duration: 1000,
                    complete: function() {
                        div.remove();
                    }
                });
            }, 100, this.FX, this.el);
        }
    });
})();
