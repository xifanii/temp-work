require(["gitbook","jQuery"],function(e,i){var r="expanded",a=".chapter",t="expChapters",n=function(e){e.hasClass("expanded")?s(e):c(e)},s=function(e){e.length&&e.hasClass(r)&&(e.removeClass(r),l(e))},c=function(e){e.length&&!e.hasClass(r)&&(e.addClass(r),l(e))},l=function(){var s=JSON.parse(localStorage.getItem(t))||{};if(!arguments.length)return i(a).map(function(e,a){if(s[i(this).data("level")])return this});arguments[0].each(function(e,a){var t=i(this).data("level"),n=i(this).hasClass(r);s[t]=n}),localStorage.setItem(t,JSON.stringify(s))};e.events.bind("page.change",function(){!function(){i(".articles").parent(a).children("a").append(i('<i class="exc-trigger fa"></i>').on("click",function(e){e.preventDefault(),e.stopPropagation(),n(i(e.target).closest(a))})),c(l());var e=i(a+".active");c(e),c(e.parents(a))}()})});